<?php

namespace App\Enums;

enum BillingCycle: int
{
    case MONTHLY = 'monthly';
    case YEARLY = 'yearly';

    public function duration(): int
    {
        return match ($this) {
            self::MONTHLY => 1,
            self::YEARLY => 1,
        };
    }

    public static function toSelectOptions(): array
    {
        return array_map(fn($cycle) => [
            'name'  => $cycle->name,
            'value' => $cycle->value,
        ], self::cases());
    }
}

