import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h1 className="signup-title">Create Account</h1>

        <input type="text" className="signup-input" placeholder="Full Name" />
        <input type="text" className="signup-input" placeholder="Email or Phone" />
        <input type="password" className="signup-input" placeholder="Password" />
        <input type="password" className="signup-input" placeholder="Confirm Password" />

        <button className="signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
