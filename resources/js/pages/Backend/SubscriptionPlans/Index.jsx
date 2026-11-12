import { useState } from "react";
import { Link } from "react-router";
import { notify } from "../../../lib/toast";

const INITIAL_MOCK_PLANS = [
    {
        id: 1,
        name: "Basic Plan",
        price: 19,
        billing_cycle: "Monthly",
        trial_days: 14,
        status: "active",
        description: "Perfect for individuals and small startups looking to get started.",
        features: ["3 Projects", "10 GB Storage", "Basic Support", "1 User"]
    },
    {
        id: 2,
        name: "Pro Plan",
        price: 49,
        billing_cycle: "Monthly",
        trial_days: 14,
        status: "active",
        description: "Best for growing teams and businesses needing advanced capabilities.",
        features: ["Unlimited Projects", "100 GB Storage", "Priority Support (24/7)", "5 Users", "API Access"]
    },
    {
        id: 3,
        name: "Enterprise Plan",
        price: 149,
        billing_cycle: "Monthly",
        trial_days: 30,
        status: "inactive",
        description: "Tailored for large organizations requiring custom scaling and SLA support.",
        features: ["Unlimited Everything", "1 TB Storage", "Dedicated Support Manager", "Unlimited Users", "Custom Integrations", "SLA Guarantee"]
    }
];

export default function SubscriptionPlans() {
    const [plans, setPlans] = useState(INITIAL_MOCK_PLANS);
    const [viewType, setViewType] = useState("grid"); // grid or table
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [sortBy, setSortBy] = useState("price-asc");

    // Toggle Plan Status
    const handleToggleStatus = (id) => {
        setPlans(prevPlans =>
            prevPlans.map(plan => {
                if (plan.id === id) {
                    const nextStatus = plan.status === "active" ? "inactive" : "active";
                    notify.success(`Plan "${plan.name}" is now ${nextStatus}`);
                    return { ...plan, status: nextStatus };
                }
                return plan;
            })
        );
    };

    // Delete Plan
    const handleDeletePlan = (id, name) => {
        if (confirm(`Are you sure you want to delete the plan "${name}"?`)) {
            setPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
            notify.success(`Plan "${name}" deleted successfully (demo context)`);
        }
    };

    // Filter and Sort plans
    const filteredPlans = plans
        .filter(plan => {
            const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 plan.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === "all" || plan.status === statusFilter;
            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "price-desc") return b.price - a.price;
            if (sortBy === "name-asc") return a.name.localeCompare(b.name);
            return 0;
        });

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header & Actions Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Subscription Plans
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium">
                        Configure pricing models, trial terms, and premium tiers for your tenants.
                    </p>
                </div>
                
                <Link
                    to="/admin/subscription-plans/create"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer text-sm"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Plan
                </Link>
            </div>

            {/* Filters & Toggles Toolbar */}
            <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-xs flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search & Status Filter */}
                <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 w-full lg:max-w-2xl">
                    {/* Search Input */}
                    <div className="relative w-full sm:flex-1">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search by plan name or features..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                        />
                    </div>

                    {/* Status Dropdown */}
                    <div className="relative w-full sm:w-48 shrink-0">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                            <option value="all">All Statuses</option>
                            <option value="active">Active Plans</option>
                            <option value="inactive">Inactive Plans</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Sort & View Toggle */}
                <div className="flex items-center justify-between sm:justify-start gap-4 w-full lg:w-auto">
                    {/* Sort Dropdown */}
                    <div className="relative w-full sm:w-48">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Sort by Name</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>

                    <div className="h-9 w-px bg-slate-200/80 hidden sm:block"></div>

                    {/* Grid/Table View Toggles */}
                    <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200 shrink-0">
                        <button
                            onClick={() => setViewType("grid")}
                            className={`p-2 rounded-lg transition-all cursor-pointer ${
                                viewType === "grid"
                                    ? "bg-white text-blue-600 shadow-xs border border-slate-100"
                                    : "text-slate-400 hover:text-slate-600"
                            }`}
                            title="Grid View"
                        >
                            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewType("table")}
                            className={`p-2 rounded-lg transition-all cursor-pointer ${
                                viewType === "table"
                                    ? "bg-white text-blue-600 shadow-xs border border-slate-100"
                                    : "text-slate-400 hover:text-slate-600"
                            }`}
                            title="Table View"
                        >
                            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Plans Display */}
            {filteredPlans.length === 0 ? (
                <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-xs flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-4 border border-slate-100">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M2.25 12a13.122 13.122 0 011.41-5.14M2.25 12l3 3m-3-3l-3 3" />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-lg">No subscription plans found</h3>
                    <p className="text-slate-400 text-sm mt-1 max-w-sm">
                        No plans match your current filters. Try searching for something else or create a new plan.
                    </p>
                </div>
            ) : viewType === "grid" ? (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group ${
                                plan.status === "active" ? "border-slate-100/90" : "border-slate-200/60 bg-slate-50/40 opacity-90"
                            }`}
                        >
                            {/* Card Badges Row */}
                            <div className="flex items-center justify-between mb-4">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                                    plan.status === "active"
                                        ? "text-emerald-600 bg-emerald-50 border border-emerald-200/50"
                                        : "text-slate-500 bg-slate-100 border border-slate-200/40"
                                }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${plan.status === "active" ? "bg-emerald-500" : "bg-slate-400"}`}></span>
                                    {plan.status.toUpperCase()}
                                </span>

                                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-md">
                                    {plan.trial_days} days trial
                                </span>
                            </div>

                            {/* Plan Pricing & Name */}
                            <div className="mb-4">
                                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {plan.name}
                                </h3>
                                <p className="text-slate-400 text-xs mt-1.5 min-h-[32px] line-clamp-2">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-1 mt-4">
                                    <span className="text-3xl font-extrabold text-slate-900">${plan.price}</span>
                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                        / {plan.billing_cycle.toLowerCase()}
                                    </span>
                                </div>
                            </div>

                            <hr className="border-slate-100 my-4" />

                            {/* Features list */}
                            <div className="flex-1 space-y-3 mb-6">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
                                    Included Features
                                </span>
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Actions Footer */}
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                                <Link
                                    to={`/admin/subscription-plans/edit/${plan.id}`}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-50 border border-slate-200/80 hover:bg-slate-100/90 text-slate-700 font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                                >
                                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    Edit Details
                                </Link>

                                <button
                                    onClick={() => handleToggleStatus(plan.id)}
                                    className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-xs ${
                                        plan.status === "active"
                                            ? "border-emerald-200 bg-emerald-50 hover:bg-emerald-100/70 text-emerald-600"
                                            : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500"
                                    }`}
                                    title={plan.status === "active" ? "Deactivate Plan" : "Activate Plan"}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => handleDeletePlan(plan.id, plan.name)}
                                    className="p-2.5 bg-red-50 hover:bg-red-100/80 border border-red-100 hover:border-red-200 text-red-600 rounded-xl transition-all cursor-pointer shadow-xs"
                                    title="Delete Plan"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Table View */
                <div className="bg-white border border-slate-100/90 rounded-2xl shadow-sm overflow-hidden animate-fade-in">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                    <th className="px-6 py-4">Plan Name & Details</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Billing Cycle</th>
                                    <th className="px-6 py-4">Trial Period</th>
                                    <th className="px-6 py-4">Features</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredPlans.map((plan) => (
                                    <tr key={plan.id} className="hover:bg-slate-50/40 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                                                    {plan.name}
                                                </span>
                                                <span className="text-slate-400 text-xs font-semibold mt-0.5 line-clamp-1 max-w-[280px]">
                                                    {plan.description}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="font-extrabold text-slate-900 text-sm">${plan.price}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="text-slate-500 font-semibold text-xs bg-slate-100 px-2 py-1 rounded-lg">
                                                {plan.billing_cycle}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="text-blue-600 font-bold text-xs bg-blue-50 px-2 py-1 rounded-lg">
                                                {plan.trial_days} days
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-wrap gap-1 max-w-[280px]">
                                                {plan.features.slice(0, 3).map((f, idx) => (
                                                    <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                                                        {f}
                                                    </span>
                                                ))}
                                                {plan.features.length > 3 && (
                                                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                                        +{plan.features.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                                plan.status === "active"
                                                    ? "text-emerald-600 bg-emerald-50"
                                                    : "text-slate-400 bg-slate-100"
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${plan.status === "active" ? "bg-emerald-500" : "bg-slate-400"}`}></span>
                                                {plan.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2.5">
                                                <Link
                                                    to={`/admin/subscription-plans/edit/${plan.id}`}
                                                    className="p-2 hover:bg-slate-100 hover:text-blue-600 text-slate-400 rounded-lg transition-all"
                                                    title="Edit Details"
                                                >
                                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </Link>

                                                <button
                                                    onClick={() => handleToggleStatus(plan.id)}
                                                    className={`p-2 rounded-lg transition-all cursor-pointer ${
                                                        plan.status === "active"
                                                            ? "hover:bg-emerald-50 text-emerald-500"
                                                            : "hover:bg-slate-100 text-slate-400"
                                                    }`}
                                                    title={plan.status === "active" ? "Deactivate Plan" : "Activate Plan"}
                                                >
                                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                    </svg>
                                                </button>

                                                <button
                                                    onClick={() => handleDeletePlan(plan.id, plan.name)}
                                                    className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-all cursor-pointer"
                                                    title="Delete Plan"
                                                >
                                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}