
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  // Using useState to manage form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      username,
      password,
    };
  
    console.log("Payload being sent:", payload);
  
    try {
      // const response = await fetch("http://localhost:8080/api/auth/login", {
        const response = await fetch(`http://localhost:8080/api/auth/login?username=${username}&password=${password}`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert(errorData.message || "Login failed. Please check your credentials.");
        return;
      }
  
      const data = await response.json();
      console.log("Login successful:", data);
      alert("Login successful!");
      navigate("/")
      // Add navigation or UI update logic here
    } catch (error) {
      console.error("Error during login (network or server):", error);
      alert("Network error. Please try again later.");
    }
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-backgroundColor p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-brightColor text-center">Login</h2>
        <div>
          <label htmlFor="username" className="block font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hoverColor"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hoverColor"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-brightColor text-white rounded hover:bg-hoverColor transition duration-200"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/registered" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
