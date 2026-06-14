export default function Home() {

    return <>

        <div className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40 bg-gradient-to-b from-blue-50/50 to-white">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            The eCommerce platform <br className="hidden lg:block" />built for <span className="text-blue-600">growth</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Launch, run, and scale your online store with all the tools you need — in one simple platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-base font-semibold transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
                                Start Free Trial
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                            <a href="#" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl text-base font-semibold transition shadow-sm flex items-center justify-center">
                                Book a Demo
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> No credit card required</div>
                            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 14-day free trial</div>
                            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Cancel anytime</div>
                        </div>
                    </div>

                    <div className="relative lg:ml-10 perspective-1000">
                        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-2xl p-2 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">
                            <img src="/images/dashboard-mockup.png" alt="ShopFlow Dashboard" className="w-full h-auto rounded-xl border border-gray-100/50" />
                            <div className="absolute -left-12 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">New Order</p>
                                        <p className="text-sm font-bold text-gray-900">+$129.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-y border-gray-100 bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Trusted by 10,000+ businesses worldwide</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-2xl font-bold font-serif">UrbanHaven</span>
                    <span className="text-xl font-bold tracking-widest">COZYLIFE</span>
                    <span className="text-xl font-medium flex items-center gap-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" /></svg> Planties</span>
                    <span className="text-xl font-semibold italic">THREAD & CO.</span>
                    <span className="text-lg font-bold uppercase tracking-widest">Wanderlust</span>
                    <span className="text-xl font-bold">🐾 Pawfect</span>
                    <span className="text-xl font-bold tracking-tight">NORTH EDGE</span>
                </div>
            </div>
        </div>

        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Features</h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Everything you need to succeed online</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Beautiful Storefronts</h3>
                        <p className="text-gray-600 leading-relaxed">Create a stunning online store with our drag-and-drop store builder.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Powerful eCommerce</h3>
                        <p className="text-gray-600 leading-relaxed">Manage products, inventory, orders, and payments effortlessly.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                        <p className="text-gray-600 leading-relaxed">Get actionable insights to grow your business smarter.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Tools</h3>
                        <p className="text-gray-600 leading-relaxed">Run promotions, email campaigns, and boost conversions.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">App Integrations</h3>
                        <p className="text-gray-600 leading-relaxed">Connect with 100+ apps and extend your store capabilities.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center sm:text-left">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                        <p className="text-gray-600 leading-relaxed">Enterprise-grade security and 99.99% uptime guaranteed.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-12 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Pricing</h2>
                        <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Simple, transparent pricing</p>
                        <p className="text-gray-500 mt-2">Choose the plan that's right for your business. All plans include a 14-day free trial.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-900">Monthly</span>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition-transform"></span>
                        </button>
                        <span className="text-sm font-medium text-gray-500">Annually</span>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full ml-2">Save up to 20%</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
                        <p className="text-sm text-gray-500 mb-6">Perfect for new stores</p>
                        <div className="mb-6">
                            <span className="text-4xl font-extrabold text-gray-900">$29</span><span className="text-gray-500"> /month</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Billed annually</p>
                        <a href="/register" className="w-full block text-center border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-xl py-3 px-4 transition mb-8">Start Free Trial</a>
                        <ul className="space-y-4 text-sm text-gray-600 flex-grow">
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Up to 500 orders/month</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited products</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 1 Staff account</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Email support</li>
                        </ul>
                    </div>

                    <div className="border-2 border-blue-600 rounded-2xl p-8 flex flex-col bg-white shadow-xl relative scale-105 z-10">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Most Popular</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                        <p className="text-sm text-gray-500 mb-6">Ideal for growing businesses</p>
                        <div className="mb-6">
                            <span className="text-4xl font-extrabold text-gray-900">$79</span><span className="text-gray-500"> /month</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Billed annually</p>
                        <a href="/register" className="w-full block text-center bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-xl py-3 px-4 transition mb-8 shadow-md">Start Free Trial</a>
                        <ul className="space-y-4 text-sm text-gray-600 flex-grow">
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Up to 2,000 orders/month</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited products</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 5 Staff accounts</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Priority support</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Abandoned cart recovery</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Discounts & gift cards</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Basic reports</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
                        <p className="text-sm text-gray-500 mb-6">For advanced teams</p>
                        <div className="mb-6">
                            <span className="text-4xl font-extrabold text-gray-900">$199</span><span className="text-gray-500"> /month</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Billed annually</p>
                        <a href="/register" className="w-full block text-center border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-xl py-3 px-4 transition mb-8">Start Free Trial</a>
                        <ul className="space-y-4 text-sm text-gray-600 flex-grow">
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Up to 10,000 orders/month</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited products</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 15 Staff accounts</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Priority support</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Advanced reports</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Third-party calculated shipping</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom checkout</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-sm text-gray-500 mb-6">For large-scale businesses</p>
                        <div className="mb-6 mt-2">
                            <span className="text-3xl font-extrabold text-gray-900">Custom</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Tailored to your needs</p>
                        <a href="#" className="w-full block text-center border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-xl py-3 px-4 transition mb-8">Contact Sales</a>
                        <ul className="space-y-4 text-sm text-gray-600 flex-grow">
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom order limits</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited products</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited staff accounts</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Dedicated support</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom integrations</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Advanced security</li>
                            <li className="flex gap-3 items-start"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> SLA & onboarding</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">14-day free trial</h4>
                            <p className="text-xs text-gray-500">Test all features risk-free.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">No credit card required</h4>
                            <p className="text-xs text-gray-500">Start your free trial instantly.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Cancel anytime</h4>
                            <p className="text-xs text-gray-500">No long-term contracts.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">99.99% uptime</h4>
                            <p className="text-xs text-gray-500">We keep your store running.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Loved by merchants worldwide</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="text-blue-600 mb-4 opacity-50">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow">"ShopFlow helped us launch our store in days, not weeks. The platform is intuitive, powerful, and the support team is amazing."</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="images/avatar-1.png" alt="Sarah Johnson" className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Sarah Johnson</p>
                                    <p className="text-xs text-gray-500">Founder, UrbanHaven</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="text-blue-600 mb-4 opacity-50">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow">"The analytics and automation features help us save hours every week and grow our revenue consistently."</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="images/avatar-2.png" alt="Michael Chen" className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Michael Chen</p>
                                    <p className="text-xs text-gray-500">CEO, CozyLife</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="text-blue-600 mb-4 opacity-50">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow">"We scaled from 0 to 6 figures in less than a year using ShopFlow. Highly recommended for serious eCommerce businesses!"</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="images/avatar-3.png" alt="Emma Rodriguez" className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Emma Rodriguez</p>
                                    <p className="text-xs text-gray-500">Owner, Planties</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMEgzNHYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0ydjIwaC0ydi0yMEgyMnYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0ydjIwaC0ydi0yMGgtMnYyMEg4di0yMEg2djIwaC0ydjIwaDQ4di0yMGgtMnYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0ydjIwaC0ydi0yMGgtMnYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0yek0wIDB2NjBIMnYtNjBoNTZ2NjBoMnYtNjBoLTJ2MmgtdjJoLXZoMjBoMnYyMEgyMnYtMmgydi0yaDJ2LTJoMnYtMmgydjJoMnYyaDJ2MmgydjJoMnYyaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYyaDJ2MmgydjJoMnYyaDJ2MmgydjYwaC0ydi02MEgwem00NCA0NHYxMGgtMnYtMTBoLTIydjEwaC0ydjEwaC0ydjEwaC0ydjEwSDIydjEwaC0ydjEwaC0ydjEwaC0ydjEwaC0ydjEwaC0ydjEwSDZ2MTBINHYxMEgydi0xMEgwdjEwaC0ydjEwaC0ydjEwaC0ydjEwaC0ydjEwaC0ydjEwSDQ0eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-12 md:p-16 relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">Ready to grow your business?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-md">Join thousands of merchants who trust ShopFlow to power their online stores.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/register" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3.5 rounded-xl font-bold transition text-center shadow-lg">Start Free Trial &rarr;</a>
                                <a href="#" className="bg-blue-700 hover:bg-blue-800 border border-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition text-center">Book a Demo</a>
                            </div>
                        </div>
                        <div className="hidden lg:block relative h-64">
                            <img src="images/cta-illustration.png" alt="Storefront illustration" className="absolute inset-0 w-full h-full object-contain scale-125 transform hover:scale-150 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    <div className="lg:col-span-3">
                        <h2 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Resources</h2>
                        <p className="text-3xl font-extrabold text-gray-900 tracking-tight mb-10">Latest insights and tips</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <a href="#" className="group block">
                                <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 bg-gray-50 aspect-[3/2]">
                                    <img src="images/blog-1.png" alt="Guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 block">Guide</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">10 eCommerce Trends to Watch in 2024</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Stay ahead of the curve with the latest trends shaping the future of eCommerce.</p>
                                <div className="flex items-center text-xs text-gray-400">
                                    <span>May 10, 2024</span>
                                    <span className="mx-2">&middot;</span>
                                    <span>5 min read</span>
                                    <span className="ml-2 text-blue-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </div>
                            </a>

                            <a href="#" className="group block">
                                <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 bg-gray-50 aspect-[3/2]">

                                    <img src="images/blog-1.png" alt="Tutorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 block">Tutorial</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">How to Increase Conversions in Your Online Store</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Practical tips and strategies to turn more visitors into paying customers.</p>
                                <div className="flex items-center text-xs text-gray-400">
                                    <span>Apr 28, 2024</span>
                                    <span className="mx-2">&middot;</span>
                                    <span>7 min read</span>
                                    <span className="ml-2 text-blue-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </div>
                            </a>

                            <a href="#" className="group block">
                                <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 bg-gray-50 aspect-[3/2]">
                                    <img src="images/blog-1.png" alt="Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 block">Feature</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">New: Advanced Shipping & Delivery Options</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Give your customers more flexibility and improve their delivery experience.</p>
                                <div className="flex items-center text-xs text-gray-400">
                                    <span>Apr 15, 2024</span>
                                    <span className="mx-2">&middot;</span>
                                    <span>4 min read</span>
                                    <span className="ml-2 text-blue-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-1 pt-12 lg:pt-16 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                        <ul className="space-y-8">
                            <li>
                                <a href="#" className="group flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">Help Center</h4>
                                        <p className="text-xs text-gray-500 mt-1">Find answers to common questions</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">Community</h4>
                                        <p className="text-xs text-gray-500 mt-1">Connect with other merchants</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">API Documentation</h4>
                                        <p className="text-xs text-gray-500 mt-1">Integrate and build with ShopFlow</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">Status Page</h4>
                                        <p className="text-xs text-gray-500 mt-1">Check system status and updates</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>

}
