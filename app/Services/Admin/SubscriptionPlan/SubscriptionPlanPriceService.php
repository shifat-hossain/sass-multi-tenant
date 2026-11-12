<?php

namespace App\Services\Admin\SubscriptionPlan;

use App\Models\SubscriptionPlan;

class SubscriptionPlanPriceService
{
    /**
     * Persist pre-built price rows for a given subscription plan.
     */
    public function createManyForPlan(SubscriptionPlan $plan, array $prices): void
    {
        $plan->prices()->createMany($prices);
    }
}
