import { createBrowserRouter } from "react-router";
import Main from "../Main";
import Home from "../pages/Frontend/Home";
import Feature from "../pages/Frontend/Feature";
import About from "../pages/Frontend/About";
import Customer from "../pages/Frontend/Customer";
import Pricing from "../pages/Frontend/Pricing";
import Login from "../pages/Frontend/Login";

const router = createBrowserRouter([
    {
        path: "/", Component: Main,
        children: [
            { index: true, Component: Home },
            { path: "features", Component: Feature },
            { path: "pricing", Component: Pricing },
            { path: "customers", Component: Customer },
            { path: "about", Component: About },
            { path: "features", Component: Feature },
            { path: "features", Component: Feature },
            { path: "features", Component: Feature },
        ],

    },

    {
        path: "login", Component: Login,
    },

], {
    basename: "/projects/sass-multi-tenant/public"
}
);

export default router;