<?php

namespace App\Actions\SubscriptionPlan;

use App\Models\SubscriptionPlan;
use App\Services\Admin\SubscriptionPlan\SubscriptionPlanService;
use App\Services\Admin\SubscriptionPlan\SubscriptionPlanPriceService;
use App\Services\Admin\SubscriptionPlan\SubscriptionPlanFeatureService;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CreateSubscriptionPlanAction
{
    public function __construct(
        private SubscriptionPlanService $planService,
        private SubscriptionPlanPriceService $priceService,
        private SubscriptionPlanFeatureService $featureService,
    ) {}

    public function execute(array $data): SubscriptionPlan
    {
        return DB::transaction(function () use ($data) {
            $plan = $this->planService->create([
                'name' => $data['name'],
                'slug' => $data['slug'] ?? Str::slug($data['name']),
                'short_description' => $data['short_description'] ?? null,
                'is_active' => $data['is_active'] ?? true,
                'is_featured' => $data['is_featured'] ?? false,
            ]);

            if (!empty($data['prices'])) {
                $this->priceService->createManyForPlan($plan, $this->buildPriceRows($data['prices']));
            }

            if (!empty($data['features'])) {
                $this->featureService->createManyForPlan(
                    $plan,
                    array_map(
                        fn (array $feature) => Arr::only($feature, ['feature_key', 'feature_value', 'feature_text']),
                        $data['features']
                    )
                );
            }

            return $plan;
        });
    }

    /**
     * Build persistable price rows, resolving derived fields
     * (duration, duration_unit, final_price) from the billing type.
     */
    private function buildPriceRows(array $prices): array
    {
        return array_map(function (array $price) {
            $amount = (float) $price['price'];
            $discountType = $price['discount_type'] ?? null;
            $discountValue = (float) ($price['discount_value'] ?? 0);

            return [
                'type' => $price['type'],
                'duration' => $this->resolveDuration($price['type']),
                'duration_unit' => $this->resolveDurationUnit($price['type']),
                'price' => $amount,
                'discount_type' => $discountType,
                'discount_value' => $discountValue,
                'final_price' => $this->calculateFinalPrice($amount, $discountType, $discountValue),
                'is_active' => $price['is_active'] ?? true,
            ];
        }, $prices);
    }

    private function calculateFinalPrice(float $price, ?string $discountType, float $discountValue): float
    {
        if (!$discountType || $discountValue <= 0) {
            return $price;
        }

        return match ($discountType) {
            'percentage' => round($price - ($price * $discountValue / 100), 2),
            'amount' => max(0, round($price - $discountValue, 2)),
            default => $price,
        };
    }

    private function resolveDuration(string $type): int
    {
        return match ($type) {
            'monthly' => 1,
            'quarterly' => 3,
            'half_yearly' => 6,
            'yearly' => 1,
            default => 1,
        };
    }

    private function resolveDurationUnit(string $type): string
    {
        return match ($type) {
            'yearly' => 'year',
            default => 'month',
        };
    }
}
