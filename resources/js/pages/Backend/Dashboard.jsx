export default function Dashboard() {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Upper Greeting & Actions Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Good morning, Jane! 👋
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium">
                        Here's what's happening with your store today.
                    </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3 self-start md:self-auto">
                    {/* Date Selector */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer">
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        May 12 – May 18, 2024
                        <svg className="w-4 h-4 text-slate-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Export Button */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer">
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Export
                        <svg className="w-4 h-4 text-slate-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Revenue Card */}
                <div className="bg-white border border-slate-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col gap-4 group">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100/80 transition-all">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Total Revenue</span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">$24,560.00</span>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                18.6%
                            </span>
                            <span className="text-slate-400 text-xs font-semibold">vs last 7 days</span>
                        </div>
                    </div>

                    {/* Sparkline Chart */}
                    <div className="h-16 w-full mt-2">
                        <svg className="w-full h-full" viewBox="0 0 240 60" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="revenue-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Area under curve */}
                            <path
                                d="M0,45 C20,40 40,55 60,30 C80,5 100,50 120,42 C140,34 160,18 180,26 C200,34 220,12 240,4 L240,60 L0,60 Z"
                                fill="url(#revenue-grad)"
                            />
                            {/* Sparkline Curve */}
                            <path
                                d="M0,45 C20,40 40,55 60,30 C80,5 100,50 120,42 C140,34 160,18 180,26 C200,34 220,12 240,4"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}