// PrivateRoute.tsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext-http-jwt";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
