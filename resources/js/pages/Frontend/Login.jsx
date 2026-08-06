
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { notify } from "../../lib/toast";
import { useAuth } from "../../contexts/AuthContext";
import { axiosCLient } from "../../lib/axios";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    return <>
        <div className="flex w-full min-h-screen">
            <div className="left-panel hidden lg:flex flex-col justify-between flex-1 p-12 text-white">
                <div className="grid-dot"></div>

                <div className="shape animate-float" style={{ width: "120px", height: "120px", top: "15%", left: "10%", transform: "rotate(20deg)" }}></div>
                <div className="shape animate-float2" style={{ width: "80px", height: "80px", top: "55%", left: "5%", transform: "rotate(-15deg)" }}></div>
                <div className="shape2 animate-float3" style={{ width: "200px", height: "200px", top: "60%", left: "50%" }}></div>
                <div className="shape animate-float2" style={{ width: "60px", height: "60px", top: "80%", left: "70%", transform: "rotate(30deg)" }}></div>
                <div className="shape2 animate-float" style={{ width: "100px", height: "100px", top: "10%", left: "75%" }}></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4f46e5,#818cf8)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="3" width="8" height="8" rx="2" fill="#fff" />
                                <rect x="13" y="3" width="8" height="8" rx="2" fill="#fff" opacity="0.6" />
                                <rect x="3" y="13" width="8" height="8" rx="2" fill="#fff" opacity="0.6" />
                                <rect x="13" y="13" width="8" height="8" rx="2" fill="#fff" />
                            </svg>
                        </div>
                        <span className="text-xl font-800 tracking-tight">AdminKit</span>
                    </div>
                </div>

                <div className="relative z-10 max-w-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-600 mb-6" style={{ background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.4)", color: "#a5b4fc" }}>
                        <span className="dot" style={{ background: "#818cf8" }}></span>
                        v2.0 Pro — Now with AI insights
                    </div>
                    <h1 className="text-4xl font-800 leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                        Manage everything
                        <br />
                        <span style={{ background: "linear-gradient(90deg,#818cf8,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>from one place.</span>
                    </h1>
                    <p className="text-base leading-relaxed" style={{ color: "#a0a3bd" }}>
                        A powerful, flexible admin panel designed to help you manage users, track orders, and grow your business with confidence.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-8">
                        <div className="stat-pill animate-float3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(99,102,241,0.3)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#a5b4fc" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-700 text-white">4,821</div>
                                <div className="text-xs" style={{ color: "#6c7097" }}>Active users</div>
                            </div>
                        </div>
                        <div className="stat-pill animate-float2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#34d399" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-700 text-white">$38.4K</div>
                                <div className="text-xs" style={{ color: "#6c7097" }}>Revenue</div>
                            </div>
                        </div>
                        <div className="stat-pill">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-700 text-white">1,209</div>
                                <div className="text-xs" style={{ color: "#6c7097" }}>Orders</div>
                            </div>
                        </div>
                        <div className="stat-pill">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(236,72,153,0.25)" }}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#f472b6" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-700 text-white">3.7%</div>
                                <div className="text-xs" style={{ color: "#6c7097" }}>Conversion</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex items-center gap-6 text-xs" style={{ color: "#6c7097" }}>
                    <span>© 2026 AdminKit</span>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                </div>
            </div>

            <div className="flex-1 lg:flex-none lg:w-[520px] flex items-center justify-center p-6 bg-slate-50">
                <div className="card animate-fade-up">

                    <div className="mb-8">
                        <div className="lg:hidden flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4f46e5,#818cf8)" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" fill="#fff" /><rect x="13" y="3" width="8" height="8" rx="2" fill="#fff" opacity="0.6" /><rect x="3" y="13" width="8" height="8" rx="2" fill="#fff" opacity="0.6" /><rect x="13" y="13" width="8" height="8" rx="2" fill="#fff" /></svg>
                            </div>
                            <span className="text-lg font-800 text-slate-800">AdminKit</span>
                        </div>
                        <h2 className="text-2xl font-800 text-slate-900 tracking-tight animate-fade-up-2">Welcome back 👋</h2>
                        <p className="text-sm text-slate-500 mt-1.5 animate-fade-up-3">Sign in to your account to continue</p>
                    </div>

                    <div className="flex items-center gap-3 mb-6 animate-fade-up-3">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-xs text-slate-400 font-500">or sign in with email</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={async (values, { setSubmitting, setErrors }) => {
                            try {
                                await axiosCLient.get('/sanctum/csrf-cookie');
                                const response = await axiosCLient.post('api/login', values);
                                // console.log(response.data.data.user);
                                login(response.data.data.user);
                                notify.success('Login successful');
                                navigate('/admin/dashboard');
                            } catch (error) {
                                if (error.response) {
                                    const status = error.response.status;
                                    const data = error.response.data;

                                    const statusHandlers = {
                                        422: () => setErrors(data.errors),
                                        401: () => notify.error(data.message),
                                    };

                                    // Execute handler for specific status or default to generic error
                                    if (statusHandlers[status]) {
                                        statusHandlers[status]();
                                    } else {
                                        notify.error(data.message || 'An unexpected error occurred. Please try again.');
                                    }
                                } else {
                                    // Network error or no response from server
                                    notify.error('Network error. Please check your connection and try again.');
                                }
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        <Form className="space-y-4 animate-fade-up-4">
                            <div>
                                <label className="block text-xs font-700 text-slate-600 mb-2 uppercase tracking-wider">Email Address</label>
                                <div className="relative">
                                    <Field type="email" name="email" placeholder="you@example.com" className="input-field" style={{ paddingLeft: "44px" }} required autoFocus />
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <ErrorMessage name="email">{msg => <div className="text-red-500 text-xs">{msg}</div>}</ErrorMessage>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-xs font-700 text-slate-600 uppercase tracking-wider">Password</label>
                                    <a href="" className="text-xs font-600 text-indigo-500 hover:text-indigo-700 transition-colors">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <Field type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="input-field" style={{ paddingLeft: "44px", paddingRight: "44px" }} required />
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                    </svg>
                                    <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <ErrorMessage name="password">{msg => <div className="text-red-500 text-xs">{msg}</div>}</ErrorMessage>
                            </div>

                            <div className="flex items-center gap-2.5 py-1">
                                <Field type="checkbox" id="remember" name="remember" className="checkbox-custom" />
                                <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer select-none">Keep me signed in for 30 days</label>
                            </div>

                            <button type="submit" className="btn-login mt-2">
                                <span className="flex items-center justify-center gap-2">
                                    <span id="btn-text">Sign In</span>
                                    <svg id="btn-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </span>
                            </button>
                        </Form>
                    </Formik>

                    <div className="flex items-center justify-center gap-5 mt-6 pt-6 border-t border-slate-100 animate-fade-up-5">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            SSL Secured
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                            256-bit Encryption
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            GDPR Compliant
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

