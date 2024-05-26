import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <div>loading...</div>;

  if (isAuthenticated) return children;
}
