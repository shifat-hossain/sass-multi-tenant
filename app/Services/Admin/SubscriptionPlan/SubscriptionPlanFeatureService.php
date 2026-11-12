<?php

namespace App\Services\Admin\SubscriptionPlan;

use App\Models\SubscriptionPlan;

class SubscriptionPlanFeatureService
{
    /**
     * Persist pre-built feature rows for a given subscription plan.
     */
    public function createManyForPlan(SubscriptionPlan $plan, array $features): void
    {
        $plan->features()->createMany($features);
    }
}
