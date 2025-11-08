import React, { useState } from "react";
import { Link } from "react-router-dom";   
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="nav-logo" />

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>

        {/* ✅ Dropdown Menu for Recent Projects */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={handleDropdown}
          >
            Recent Projects <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/projects/online" onClick={() => setDropdownOpen(false)}>
                Online Designed
              </Link>
              <Link to="/projects/executed" onClick={() => setDropdownOpen(false)}>
                Designed And Executed
              </Link>
            </div>
          )}
        </div>

        <a href="/services">Our Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>

        <Link to="/login">
          <button className="quote-btn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="quote-btn">Sign Up</button>
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
