import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { isAuth, ApiAuth } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    ApiAuth.get();
  }, []);

  useEffect(() => {
    const to = isAuth ? "tasks" : "login";
    navigate(to);
  }, [isAuth]);

  return <div>Home</div>;
}
