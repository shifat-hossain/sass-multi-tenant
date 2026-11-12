<?php

namespace App\Services\Admin\SubscriptionPlan;

use App\Models\SubscriptionPlan;

class SubscriptionPlanService
{
    public function create(array $data): SubscriptionPlan
    {
        return SubscriptionPlan::create($data);
    }

    public function update(SubscriptionPlan $plan, array $data): SubscriptionPlan
    {
        $plan->update($data);

        return $plan->fresh();
    }

    public function delete(SubscriptionPlan $plan): void
    {
        $plan->delete();
    }
}
