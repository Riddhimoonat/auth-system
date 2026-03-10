import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: (data) => api.post("/auth/register", data),

    onSuccess: () => {
      alert("Account created successfully!");
      navigate("/");
    },

    onError: (error) => {
      alert(error.response?.data?.message || "Registration failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerMutation.mutate({
      name,
      email,
      password,
    });
  };

  return (
    <div className="container">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button disabled={registerMutation.isPending}>
          {registerMutation.isPending ? "Creating..." : "Register"}
        </button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}