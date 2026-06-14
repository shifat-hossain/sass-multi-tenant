
import React from "react";
import Header from "./layouts/frontend/Header";
import Footer from "./layouts/frontend/Footer";
import { Outlet } from "react-router";

export default function Main() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}
