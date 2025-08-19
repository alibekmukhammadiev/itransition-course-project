import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("auth");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
