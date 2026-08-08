import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "../../layouts/backend/Sidebar";
import Header from "../../layouts/backend/Header";

export default function App() {
    
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#f8fafc] text-slate-800 antialiased font-sans">
            {/* Sidebar */}
            <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
                {/* Header/Topbar */}
                <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />

                {/* Subpage Content rendering Dashboard page */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}