import { Link, Outlet } from "react-router";


export default function Root() {
    return (
        <>
            <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-900">ShopFlow</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                                Home
                            </Link>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Features</a>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Pricing</a>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-1">Solutions <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-1">Resources <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Customers</a>
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">About</a>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Sign in</a>
                            <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm shadow-blue-200">Start Free Trial</a>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}
