import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { notify } from "../../../lib/toast";
import SubscriptionPlanForm from "../../../features/SubscriptionPlans/components/SubscriptionPlanForm";
import { useSubscriptionPlans } from "../../../features/SubscriptionPlans/hooks/useSubscriptionPlans";

export default function Create() {
    const navigate = useNavigate();
    const { formOptions } = useSubscriptionPlans();

    return (
        <div className="space-y-6 animate-fade-in max-w-3xl mx-auto p-6">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-3">
                <Link
                    to="/admin/subscription-plans"
                    className="p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center"
                    title="Back to List"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                        Create Subscription Plan
                    </h2>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">
                        Add a new billing tier with specific features and prices for your customers.
                    </p>
                </div>
            </div>

            {/* Main Form container */}
            <SubscriptionPlanForm formOptions={formOptions} />

        </div>
    );
}
