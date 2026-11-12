<?php

namespace App\Http\Controllers\Api\Admin\SubscriptionPlan;

use App\Enums\BillingCycle;
use App\Http\Controllers\Api\Controller;
use App\Actions\SubscriptionPlan\CreateSubscriptionPlanAction;
use App\Http\Requests\Admin\SubscriptionPlan\StoreSubscriptionPlanRequest;
use App\Http\Requests\Admin\SubscriptionPlan\UpdateSubscriptionPlanRequest;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function __construct(
        protected CreateSubscriptionPlanAction $createSubscriptionPlanAction
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = SubscriptionPlan::all();
        return $this->sendSuccessResponse('Subscription plans fetched successfully', 200, $plans);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['billing_cycles'] = BillingCycle::toSelectOptions();
        return $this->sendSuccessResponse('Billing cycles fetched successfully', 200, $data);
    }

    /**
     * Store a newly created    resource in storage.
     */
    public function store(StoreSubscriptionPlanRequest $request)
    {
        $plan = $this->createSubscriptionPlanAction->execute($request->validated());
        
        return $this->sendSuccessResponse('Subscription plan created successfully', 201, $plan);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubscriptionPlanRequest $request, string $id)
    {
        // $plan = SubscriptionPlan::findOrFail($id);
        // $plan = $this->subscriptionPlanService->update($plan, $request->validated());
        
        // return $this->sendSuccessResponse('Subscription plan updated successfully', 200, $plan);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
