import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;