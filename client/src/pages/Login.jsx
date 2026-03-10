import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: (data) => api.post("/auth/login", data),

    onSuccess: (response) => {
      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/profile");
    },

    onError: (error) => {
      alert(error.response?.data?.message || "Login failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loginMutation.isPending}>
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}