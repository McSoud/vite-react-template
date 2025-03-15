import { Navigate, Outlet } from "react-router-dom";

export default function RequiresAuthentication() {
  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
