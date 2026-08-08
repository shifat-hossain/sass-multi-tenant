import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function App() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const dropdownRef = useRef(null);
    const { authUser, logout } = useAuth();

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Helper for active/inactive navigation items
    const getLinkClass = (isActive) => {
        if (isActive) {
            return isSidebarCollapsed
                ? "flex items-center justify-center py-3.5 px-0 mx-2 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all";
        } else {
            return isSidebarCollapsed
                ? "flex items-center justify-center py-3.5 px-0 mx-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 font-medium transition-all";
        }
    };

    return (
        <div className="flex min-h-screen bg-[#f8fafc] text-slate-800 antialiased font-sans">
            {/* Sidebar */}
            <aside className={`bg-[#0b0f19] border-r border-slate-900 flex flex-col shrink-0 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
                {/* Logo Section */}
                <div className={`flex items-center gap-3 px-6 pt-7 pb-6 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    {!isSidebarCollapsed && (
                        <span className="font-bold text-white text-xl tracking-tight animate-fade-in whitespace-nowrap">ShopSaaS</span>
                    )}
                </div>

                {/* Store Selector */}
                <div className={`mx-4 mb-6 transition-all duration-300 ${isSidebarCollapsed ? 'p-0 flex justify-center bg-transparent border-0' : 'px-4 py-3 bg-[#1e293b]/40 border border-slate-800/60 rounded-2xl flex items-center justify-between hover:bg-[#1e293b]/60 cursor-pointer'}`}>
                    {isSidebarCollapsed ? (
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700 hover:bg-[#1e293b] transition-all cursor-pointer shrink-0" title="Acme Store">
                            <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 shrink-0">
                                    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col truncate">
                                    <span className="text-sm font-semibold text-white tracking-wide truncate">Acme Store</span>
                                    <span className="text-[10px] font-medium text-indigo-400 bg-indigo-950/40 px-1.5 py-0.5 rounded-md mt-0.5 border border-indigo-900/30 w-max shrink-0">Enterprise Plan</span>
                                </div>
                            </div>
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </>
                    )}
                </div>

                {/* Navigation Menus */}
                <nav className="flex-1 px-3 space-y-1">
                    <a href="#" className={getLinkClass(true)} title={isSidebarCollapsed ? "Dashboard" : undefined}>
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
                        </svg>
                        {!isSidebarCollapsed && <span className="animate-fade-in">Dashboard</span>}
                    </a>
                    <a href="#" className={getLinkClass(false)} title={isSidebarCollapsed ? "Orders" : undefined}>
                        <svg className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {!isSidebarCollapsed && <span className="animate-fade-in">Orders</span>}
                    </a>
                    <a href="#" className={getLinkClass(false)} title={isSidebarCollapsed ? "Customers" : undefined}>
                        <svg className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {!isSidebarCollapsed && <span className="animate-fade-in">Customers</span>}
                    </a>
                    <a href="#" className={getLinkClass(false)} title={isSidebarCollapsed ? "Settings" : undefined}>
                        <svg className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {!isSidebarCollapsed && <span className="animate-fade-in">Settings</span>}
                    </a>
                </nav>

                {/* Upgrade Promo Card */}
                <div className="mt-auto mb-4">
                    {isSidebarCollapsed ? (
                        <button className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-b from-[#6366f1] to-[#4f46e5] flex items-center justify-center text-amber-300 hover:scale-105 active:scale-95 transition-all shadow-md shadow-indigo-950/20 cursor-pointer" title="Upgrade Plan">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                    ) : (
                        <div className="mx-4 p-5 bg-gradient-to-b from-[#6366f1] to-[#4f46e5] rounded-2xl relative overflow-hidden shadow-xl shadow-indigo-950/20">
                            {/* Background Decorative Gradient Circle */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                                <svg className="w-4.5 h-4.5 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-bold text-sm mb-1">Upgrade your plan</h4>
                            <p className="text-indigo-100 text-xs leading-relaxed mb-4">Unlock advanced features, lower transaction fees, and priority support.</p>
                            <button className="w-full py-2.5 bg-white text-indigo-600 font-bold text-xs rounded-xl shadow-sm hover:bg-slate-50 transition-all cursor-pointer">
                                Upgrade Now
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Help */}
                <div className={`mx-4 mb-6 border-t border-slate-900 pt-4 flex items-center text-slate-400 hover:text-slate-200 transition-all cursor-pointer ${isSidebarCollapsed ? 'justify-center px-0' : 'gap-3 px-2'}`} title={isSidebarCollapsed ? "Need help? Visit our Help Center" : undefined}>
                    <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {!isSidebarCollapsed && (
                        <span className="text-xs font-semibold animate-fade-in whitespace-nowrap">Need help? Visit our Help Center</span>
                    )}
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
                {/* Header/Topbar */}
                <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-3">
                        {/* Burger Menu Button (Decorative) */}
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg lg:hidden transition-all">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <h1 className="font-bold text-xl text-slate-800 tracking-tight">Dashboard</h1>

                        {/* Sidebar Collapse Toggle Button */}
                        <button
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all hidden lg:flex items-center justify-center cursor-pointer border border-slate-100 shadow-xs"
                            title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                        >
                            {isSidebarCollapsed ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Search and User Profile */}
                    <div className="flex items-center gap-6">
                        {/* Search Bar */}
                        <div className="relative w-80">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700"
                            />
                        </div>

                        {/* Utility Icons */}
                        <div className="flex items-center gap-2">
                            {/* Notifications */}
                            <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">
                                    3
                                </span>
                            </button>

                            {/* Help */}
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* User Profile Dropdown Container */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-3 pl-4 border-l border-slate-100 focus:outline-none cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-sm ring-1 ring-slate-100 overflow-hidden shrink-0">
                                    <svg className="w-full h-full text-white/95" viewBox="0 0 64 64" fill="currentColor">
                                        <circle cx="32" cy="24" r="12" />
                                        <path d="M32 40c-14.5 0-20 8-20 12h40c0-4-5.5-12-20-12z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left hidden sm:flex">
                                    <span className="text-sm font-bold text-slate-800 leading-tight">
                                        {authUser?.data.name}
                                    </span>
                                    <span className="text-[11px] font-medium text-slate-400">Owner</span>
                                </div>
                                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-100/90 rounded-2xl shadow-xl py-2 z-50 focus:outline-none animate-in fade-in slide-in-from-top-2 duration-200">
                                    {/* User Details Info Block */}
                                    <div className="px-4 py-3 border-b border-slate-50 flex flex-col">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Signed in as</span>
                                        <span className="text-sm font-bold text-slate-700 truncate mt-0.5">
                                            {authUser?.data.email}
                                        </span>
                                    </div>

                                    {/* Action Links */}
                                    <div className="py-1.5">
                                        <a href="#profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all font-semibold">
                                            <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            My Profile
                                        </a>

                                        <a href="#billing" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all font-semibold">
                                            <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                            Billing & Subscription
                                        </a>

                                        <a href="#security" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all font-semibold">
                                            <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Security Settings
                                        </a>
                                    </div>

                                    {/* Logout Action */}
                                    <div className="border-t border-slate-50 mt-1 pt-1.5">
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsProfileOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50/50 transition-all font-bold text-left cursor-pointer"
                                        >
                                            <svg className="w-4.5 h-4.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Subpage Content rendering Dashboard page */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}