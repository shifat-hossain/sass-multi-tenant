import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { notify } from "../../../lib/toast";

const MOCK_PLANS = {
    "1": {
        name: "Basic Plan",
        price: 19,
        billingCycle: "Monthly",
        trialDays: 14,
        status: "active",
        description: "Perfect for individuals and small startups looking to get started.",
        features: ["3 Projects", "10 GB Storage", "Basic Support", "1 User"]
    },
    "2": {
        name: "Pro Plan",
        price: 49,
        billingCycle: "Monthly",
        trialDays: 14,
        status: "active",
        description: "Best for growing teams and businesses needing advanced capabilities.",
        features: ["Unlimited Projects", "100 GB Storage", "Priority Support (24/7)", "5 Users", "API Access"]
    },
    "3": {
        name: "Enterprise Plan",
        price: 149,
        billingCycle: "Monthly",
        trialDays: 30,
        status: "inactive",
        description: "Tailored for large organizations requiring custom scaling and SLA support.",
        features: ["Unlimited Everything", "1 TB Storage", "Dedicated Support Manager", "Unlimited Users", "Custom Integrations", "SLA Guarantee"]
    }
};

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    // Retrieve mock plan or default to Pro Plan if not found
    const targetPlan = MOCK_PLANS[id] || MOCK_PLANS["2"];

    // Form state
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [billingCycle, setBillingCycle] = useState("Monthly");
    const [trialDays, setTrialDays] = useState(14);
    const [status, setStatus] = useState("active");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [newFeatureText, setNewFeatureText] = useState("");

    // Load initial values from mock target plan
    useEffect(() => {
        if (targetPlan) {
            setName(targetPlan.name);
            setPrice(targetPlan.price);
            setBillingCycle(targetPlan.billingCycle);
            setTrialDays(targetPlan.trialDays);
            setStatus(targetPlan.status);
            setDescription(targetPlan.description);
            setFeatures(targetPlan.features);
        }
    }, [id]);

    // Add Feature to local state
    const handleAddFeature = (e) => {
        e.preventDefault();
        if (newFeatureText.trim() === "") return;
        setFeatures([...features, newFeatureText.trim()]);
        setNewFeatureText("");
    };

    // Remove Feature from local state
    const handleRemoveFeature = (indexToRemove) => {
        setFeatures(features.filter((_, idx) => idx !== indexToRemove));
    };

    // Submit Action
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            notify.error("Please fill in all required fields.");
            return;
        }
        notify.success(`Plan "${name}" updated successfully (Demo Mode)`);
        navigate("/admin/subscription-plans");
    };

    return (
        <div className="space-y-6 animate-fade-in">
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
                        Edit Subscription Plan
                    </h2>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">
                        Modify terms, details, price, and features for "{name}".
                    </p>
                </div>
            </div>

            {/* Main Form container */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Columns (Information & Pricing) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* General Info Card */}
                    <div className="bg-white border border-slate-100/90 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 border-b border-slate-50 pb-3 flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-blue-600 rounded-xs"></span>
                            General Information
                        </h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Plan Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Pro Plan, Basic, Scale"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Description
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write a brief overview describing who this plan is tailored for..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium resize-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card */}
                    <div className="bg-white border border-slate-100/90 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 border-b border-slate-50 pb-3 flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-blue-600 rounded-xs"></span>
                            Pricing & Billing Terms
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Price (USD) <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Billing Cycle <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={billingCycle}
                                        onChange={(e) => setBillingCycle(e.target.value)}
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="One-Time">One-Time / Lifetime</option>
                                    </select>
                                    <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Features & Status settings) */}
                <div className="space-y-6">
                    
                    {/* Features List Manager Card */}
                    <div className="bg-white border border-slate-100/90 rounded-2xl p-6 shadow-sm flex flex-col">
                        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 border-b border-slate-50 pb-3 flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-blue-600 rounded-xs"></span>
                            Features List
                        </h3>

                        {/* Add Feature input group */}
                        <div className="flex gap-2 mb-4">
                            <input
                                type="text"
                                placeholder="Add feature item..."
                                value={newFeatureText}
                                onChange={(e) => setNewFeatureText(e.target.value)}
                                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                            />
                            <button
                                type="button"
                                onClick={handleAddFeature}
                                className="px-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center font-bold text-sm transition-all cursor-pointer"
                            >
                                Add
                            </button>
                        </div>

                        {/* Feature items */}
                        <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                            {features.length === 0 ? (
                                <p className="text-slate-400 text-xs italic text-center py-4">No features added yet. Add items above.</p>
                            ) : (
                                features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 font-semibold"
                                    >
                                        <div className="flex items-start gap-2 mr-2">
                                            <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="break-all">{feature}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFeature(index)}
                                            className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer shrink-0"
                                            title="Remove Feature"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Status & Options Card */}
                    <div className="bg-white border border-slate-100/90 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 border-b border-slate-50 pb-3 flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-blue-600 rounded-xs"></span>
                            Status & Policy
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Trial Period (Days)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="14"
                                    value={trialDays}
                                    onChange={(e) => setTrialDays(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">
                                    Plan Status
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="active"
                                            checked={status === "active"}
                                            onChange={() => setStatus("active")}
                                            className="w-4 h-4 accent-blue-600 cursor-pointer"
                                        />
                                        Active
                                    </label>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="inactive"
                                            checked={status === "inactive"}
                                            onChange={() => setStatus("inactive")}
                                            className="w-4 h-4 accent-blue-600 cursor-pointer"
                                        />
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </form>

            {/* Action Bar Footer */}
            <div className="flex items-center justify-end gap-3 bg-white border border-slate-100/90 p-4 rounded-2xl shadow-xs">
                <Link
                    to="/admin/subscription-plans"
                    className="px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold rounded-xl transition-all cursor-pointer text-xs"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 transition-all cursor-pointer text-xs"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
