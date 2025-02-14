
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Service";
import Doctors from "./Components/Doctors";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Registered from "./Components/Registered";
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Registered Route */}
        <Route
          path="/registered"
          element={<Registered />}
        />

        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="doctors">
                <Doctors />
              </div>
              <div id="blog">
                <Blogs />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
