// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Login = ({ setIsLoggedIn }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Basic validation (Replace with your authentication logic)
// //     if (email === "test@example.com" && password === "password") {
// //       setIsLoggedIn(true);
// //     } else {
// //       alert("Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100">
// //       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
// //         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
// //         <form className="space-y-4" onSubmit={handleLogin}>
// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
// //           >
// //             Login
// //           </button>
// //         </form>
// //         <p className="text-center mt-4">
// //           Don't have an account?{" "}
// //           <Link to="/registered" className="text-blue-500 hover:underline">
// //             Register here
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Placeholder credentials for demo
//     const validEmail = "test@example.com";
//     const validPassword = "password";

//     if (email === validEmail && password === validPassword) {
//       setIsLoggedIn(true); // Set logged-in state
//       navigate("/"); // Redirect to Home Page
//     } else {
//       setError("Invalid email or password. Please try again."); // Show error message
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//         {error && (
//           <p className="text-red-500 text-sm text-center mb-2">{error}</p>
//         )}
//         <form className="space-y-4" onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Don't have an account?{" "}
//           <a href="/registered" className="text-blue-500 hover:underline">
//             Register here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  // Using useState to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log email and password, replace with actual login logic
    console.log("Email:", email);
    console.log("Password:", password);
    // You can now use these values to authenticate the user
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-backgroundColor p-4">
      <form
        onSubmit={handleSubmit} // Handle form submission
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-brightColor text-center">
          Login
        </h2>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email} // Bind state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
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
            value={password} // Bind state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
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
