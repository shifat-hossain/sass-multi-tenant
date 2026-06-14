export default function Login() {
    return <>
        <div class="flex w-full min-h-screen">
            <div class="left-panel hidden lg:flex flex-col justify-between flex-1 p-12 text-white">
                <div class="grid-dot"></div>

                <div class="shape animate-float" style={{ width: "120px", height: "120px", top: "15%", left: "10%", transform: "rotate(20deg)" }}></div>
                <div class="shape animate-float2" style={{ width: "80px", height: "80px", top: "55%", left: "5%", transform: "rotate(-15deg)" }}></div>
                <div class="shape2 animate-float3" style={{ width: "200px", height: "200px", top: "60%", left: "50%" }}></div>
                <div class="shape animate-float2" style={{ width: "60px", height: "60px", top: "80%", left: "70%", transform: "rotate(30deg)" }}></div>
                <div class="shape2 animate-float" style={{ width: "100px", height: "100px", top: "10%", left: "75%" }}></div>

                <div class="relative z-10">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4f46e5,#818cf8)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="3" width="8" height="8" rx="2" fill="#fff" />
                                <rect x="13" y="3" width="8" height="8" rx="2" fill="#fff" opacity="0.6" />
                                <rect x="3" y="13" width="8" height="8" rx="2" fill="#fff" opacity="0.6" />
                                <rect x="13" y="13" width="8" height="8" rx="2" fill="#fff" />
                            </svg>
                        </div>
                        <span class="text-xl font-800 tracking-tight">AdminKit</span>
                    </div>
                </div>

                <div class="relative z-10 max-w-md">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-600 mb-6" style={{ background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.4)", color: "#a5b4fc" }}>
                        <span class="dot" style={{ background: "#818cf8" }}></span>
                        v2.0 Pro — Now with AI insights
                    </div>
                    <h1 class="text-4xl font-800 leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                        Manage everything
                        <br />
                        <span style={{ background: "linear-gradient(90deg,#818cf8,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>from one place.</span>
                    </h1>
                    <p class="text-base leading-relaxed" style={{ color: "#a0a3bd" }}>
                        A powerful, flexible admin panel designed to help you manage users, track orders, and grow your business with confidence.
                    </p>

                    <div class="grid grid-cols-2 gap-3 mt-8">
                        <div class="stat-pill animate-float3">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(99,102,241,0.3)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#a5b4fc" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                            </div>
                            <div>
                                <div class="text-sm font-700 text-white">4,821</div>
                                <div class="text-xs" style={{ color: "#6c7097" }}>Active users</div>
                            </div>
                        </div>
                        <div class="stat-pill animate-float2">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#34d399" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                            </div>
                            <div>
                                <div class="text-sm font-700 text-white">$38.4K</div>
                                <div class="text-xs" style={{ color: "#6c7097" }}>Revenue</div>
                            </div>
                        </div>
                        <div class="stat-pill">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /></svg>
                            </div>
                            <div>
                                <div class="text-sm font-700 text-white">1,209</div>
                                <div class="text-xs" style={{ color: "#6c7097" }}>Orders</div>
                            </div>
                        </div>
                        <div class="stat-pill">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(236,72,153,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#f472b6" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                            <div>
                                <div class="text-sm font-700 text-white">3.7%</div>
                                <div class="text-xs" style={{ color: "#6c7097" }}>Conversion</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative z-10 flex items-center gap-6 text-xs" style={{ color: "#6c7097" }}>
                    <span>© 2026 AdminKit</span>
                    <a href="#" class="hover:text-white transition-colors">Privacy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms</a>
                    <a href="#" class="hover:text-white transition-colors">Support</a>
                </div>
            </div>

            <div class="flex-1 lg:flex-none lg:w-[520px] flex items-center justify-center p-6 bg-slate-50">
                <div class="card animate-fade-up">

                    <div class="mb-8">
                        <div class="lg:hidden flex items-center gap-3 mb-6">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4f46e5,#818cf8)" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" fill="#fff" /><rect x="13" y="3" width="8" height="8" rx="2" fill="#fff" opacity="0.6" /><rect x="3" y="13" width="8" height="8" rx="2" fill="#fff" opacity="0.6" /><rect x="13" y="13" width="8" height="8" rx="2" fill="#fff" /></svg>
                            </div>
                            <span class="text-lg font-800 text-slate-800">AdminKit</span>
                        </div>
                        <h2 class="text-2xl font-800 text-slate-900 tracking-tight animate-fade-up-2">Welcome back 👋</h2>
                        <p class="text-sm text-slate-500 mt-1.5 animate-fade-up-3">Sign in to your account to continue</p>
                    </div>

                    <div class="flex items-center gap-3 mb-6 animate-fade-up-3">
                        <div class="flex-1 h-px bg-slate-200"></div>
                        <span class="text-xs text-slate-400 font-500">or sign in with email</span>
                        <div class="flex-1 h-px bg-slate-200"></div>
                    </div>

                    <form method="POST" action="" class="space-y-4 animate-fade-up-4">
                        <div>
                            <label class="block text-xs font-700 text-slate-600 mb-2 uppercase tracking-wider">Email Address</label>
                            <div class="relative">
                                <input type="email" id="email" name="email" placeholder="you@example.com" class="input-field" style={{ paddingLeft: "44px" }} required autofocus />
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <label class="text-xs font-700 text-slate-600 uppercase tracking-wider">Password</label>
                                <a href="" class="text-xs font-600 text-indigo-500 hover:text-indigo-700 transition-colors">Forgot password?</a>
                            </div>
                            <div class="relative">
                                <input type="password" id="password" name="password" placeholder="Enter your password" class="input-field" style={{ paddingLeft: "44px", paddingRight: "44px" }} required />
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                                <button class="eye-btn" onclick="togglePassword()" id="eye-btn" type="button">
                                    <svg id="eye-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center gap-2.5 py-1">
                            <input type="checkbox" id="remember" name="remember" class="checkbox-custom" />
                            <label for="remember" class="text-sm text-slate-600 cursor-pointer select-none">Keep me signed in for 30 days</label>
                        </div>

                        <button type="submit" class="btn-login mt-2">
                            <span class="flex items-center justify-center gap-2">
                                <span id="btn-text">Sign In</span>
                                <svg id="btn-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </span>
                        </button>
                    </form>

                    <div class="flex items-center justify-center gap-5 mt-6 pt-6 border-t border-slate-100 animate-fade-up-5">
                        <div class="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            SSL Secured
                        </div>
                        <div class="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                            256-bit Encryption
                        </div>
                        <div class="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            GDPR Compliant
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}