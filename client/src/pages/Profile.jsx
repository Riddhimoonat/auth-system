import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await api.get("/user/profile");
      return res.data;
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Loading profile...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center" }}>Error loading profile</p>;
  }

  return (
    <div className="container">
      <h1>Profile</h1>

      <div className="profile-info">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Verified:</strong> {data.isVerified ? "Yes" : "No"}</p>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}