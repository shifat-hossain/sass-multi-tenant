export default function Footer() {
    return <>
        <footer className="bg-[#0f172a] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">ShopFlow</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                            The all-in-one eCommerce platform designed to help you build, grow, and scale your business online.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 5.494c.328 1.258.328 3.882.328 6.506 0 2.624 0 5.248-.328 6.506-.299 1.155-1.222 2.078-2.378 2.378-1.258.328-3.882.328-6.506.328s-5.248 0-6.506-.328c-1.156-.3-2.079-1.223-2.378-2.378-.328-1.258-.328-3.882-.328-6.506s0-5.248.328-6.506c.299-1.155 1.222-2.078 2.378-2.378 1.258-.328 3.882-.328 6.506-.328s5.248 0 6.506.328c1.156.3 2.079 1.223 2.378 2.378zm-11.982 10.354l7.106-3.848-7.106-3.848v7.696z" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg></a>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Features</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-white text-sm transition">Pricing</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Apps & Integrations</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Updates</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Roadmap</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">By Business Size</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">By Industry</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Dropshipping</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Retail</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Marketplaces</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Blog</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Guides</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Help Center</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Community</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">API Docs</a></li>
                        </ul>
                    </div>


                    <div className="lg:col-span-1">
                        <h4 className="text-white font-semibold text-sm mb-4">Subscribe to our newsletter</h4>
                        <p className="text-slate-400 text-xs mb-4">Get the latest tips and updates straight to your inbox.</p>
                        <form className="flex flex-col gap-2">
                            <input type="email" placeholder="Enter your email" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition w-full" />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg px-4 py-2.5 transition w-full">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">&copy; 2024 ShopFlow. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition">Terms of Service</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition">Cookies</a>
                        <button className="text-slate-500 hover:text-white text-xs transition flex items-center gap-1">
                            English <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </>
}