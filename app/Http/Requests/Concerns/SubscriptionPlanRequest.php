<?php

namespace App\Http\Requests\Concerns;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class SubscriptionPlanRequest extends FormRequest
{
    /**
     * Safety net — never inject this class directly into a controller.
     * All role-scoped children override this.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Shared rules across all roles and all actions (store + update).
     * Add a rule here once — every child inherits it automatically.
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'short_description' => ['nullable', 'string', 'max:1000'],
            'is_active' => ['boolean'],
            'is_featured' => ['boolean'],
            
            'prices' => ['nullable', 'array'],
            'prices.*.type' => ['required', 'string'],
            'prices.*.price' => ['required', 'numeric', 'min:0'],
            'prices.*.discount_type' => ['nullable', 'string', 'in:percentage,amount'],
            'prices.*.discount_value' => ['nullable', 'numeric', 'min:0'],
            'prices.*.is_active' => ['boolean'],

            'features' => ['nullable', 'array'],
            'features.*.feature_key' => ['required', 'string', 'max:255'],
            'features.*.feature_value' => ['nullable', 'string', 'max:255'],
            'features.*.feature_text' => ['required', 'string', 'max:255'],
        ];
    }

    /**
     * Shared custom error messages.
     * Define once — all children inherit.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Plan name is required.',
            'name.max' => 'Plan name cannot exceed 255 characters.',
            'short_description.max' => 'Plan description cannot exceed 1000 characters.',
            'prices.array' => 'Prices must be an array.',
            'prices.*.type.required' => 'Price type is required.',
            'prices.*.price.required' => 'Price amount is required.',
            'prices.*.price.min' => 'Price amount must be at least 0.',
            'prices.*.discount_type.in' => 'Discount type must be either percentage or amount.',
            'features.array' => 'Features must be an array.',
            'features.*.feature_key.required' => 'Feature key is required.',
            'features.*.feature_key.max' => 'Feature key cannot exceed 255 characters.',
            'features.*.feature_value.max' => 'Feature value cannot exceed 255 characters.',
            'features.*.feature_text.required' => 'Feature display text is required.',
            'features.*.feature_text.max' => 'Feature display text cannot exceed 255 characters.',
        ];
    }

    /**
     * Cross-field validation for discount values.
     * - percentage: cannot exceed 100.
     * - amount: cannot exceed that row's price.
     */
    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            foreach ($this->input('prices', []) as $index => $price) {
                $discountType = $price['discount_type'] ?? null;
                $discountValue = $price['discount_value'] ?? null;

                if ($discountType === null || $discountValue === null || !is_numeric($discountValue)) {
                    continue;
                }

                if ($discountType === 'percentage' && $discountValue > 100) {
                    $validator->errors()->add(
                        "prices.{$index}.discount_value",
                        'Percentage discount cannot exceed 100.'
                    );
                }

                if ($discountType === 'amount' && is_numeric($price['price'] ?? null) && $discountValue > $price['price']) {
                    $validator->errors()->add(
                        "prices.{$index}.discount_value",
                        'Discount amount cannot be greater than the price.'
                    );
                }
            }
        });
    }
}
