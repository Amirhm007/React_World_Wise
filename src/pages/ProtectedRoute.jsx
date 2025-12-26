import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAtuthContext";
import { useEffect } from "react";
import React from "react";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [navigate, isAuthenticated]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
