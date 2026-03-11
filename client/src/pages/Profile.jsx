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

  const deleteAccount = async () => {
    const password = prompt("Enter your password to delete account");

    if (!password) return;

    try {
      await api.delete("/user/delete-account", {
        data: { password },
      });

      localStorage.removeItem("token");

      alert("Account deleted successfully");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error deleting account");
    }
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

      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Verified:</strong> {data.isVerified ? "Yes" : "No"}
      </p>

      <button onClick={logout}>Logout</button>

      <button
        onClick={deleteAccount}
        style={{ background: "#ef4444", marginTop: "10px" }}
      >
        Delete Account
      </button>
    </div>
  );
}
