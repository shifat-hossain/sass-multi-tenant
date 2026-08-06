import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;