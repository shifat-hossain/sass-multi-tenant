<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\SubscriptionPlan\SubscriptionPlanController;

Route::get('/user', [ProfileController::class, 'index'])->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('subscription-plans/create', [SubscriptionPlanController::class, 'create']);
    Route::get('subscription-plans/{subscription_plan}/edit', [SubscriptionPlanController::class, 'edit']);
    Route::apiResource('subscription-plans', SubscriptionPlanController::class)->except(['create', 'edit']);
});

