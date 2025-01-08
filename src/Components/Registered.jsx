
import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Check the Content-Type header to decide how to parse the response
      const contentType = response.headers.get("Content-Type");
      let data;
  
      if (contentType && contentType.includes("application/json")) {
        data = await response.json(); // Parse as JSON
      } else {
        data = await response.text(); // Parse as plain text
      }
  
      if (response.ok) {
        console.log("Registration successful:", data);
        alert(data.message || "Registration successful!");
        navigate("/login")
      } else {
        console.error("Registration failed:", data);
        alert(`Error: ${data.message || data || "Registration failed"}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-backgroundColor p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-brightColor text-center">
          Register
        </h2>
        <div>
          <label htmlFor="username" className="block font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
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
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hoverColor"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-brightColor text-white rounded hover:bg-hoverColor transition duration-200"
        >
          Register
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
