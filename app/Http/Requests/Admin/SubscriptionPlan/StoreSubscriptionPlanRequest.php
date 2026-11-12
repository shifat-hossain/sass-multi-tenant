<?php

namespace App\Http\Requests\Admin\SubscriptionPlan;

use App\Http\Requests\Concerns\SubscriptionPlanRequest;
use Illuminate\Validation\Rule;

class StoreSubscriptionPlanRequest extends SubscriptionPlanRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return array_merge(parent::rules(), [
            'slug' => ['required', Rule::unique('subscription_plans')],
        ]);
    }

    protected function prepareForValidation(): void
    {
        if ($this->name && !$this->slug) {
            $this->merge([
                'slug' => str($this->name)->slug(),
            ]);
        }
    }
}
