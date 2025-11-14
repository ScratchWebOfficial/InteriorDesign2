import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_12311.png";
import "./Navbar.css";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // tracks which dropdown is open
  const [activeSubmenu, setActiveSubmenu] = useState(null); // tracks which submenu (for Recent Projects) is open

  // ✅ Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(null);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ Toggle dropdowns
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
    setActiveSubmenu(null);
  };

  // ✅ Toggle submenus (for Recent Projects)
  const handleSubmenuToggle = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <nav className="navbar">
      {/* ✅ Logo */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      {/* ✅ Navbar Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>

        {/* ✅ Recent Projects Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("projects")}
          >
            Recent Projects{" "}
            <span className={`arrow ${dropdownOpen === "projects" ? "up" : "down"}`}>
              ▼
            </span>
          </button>

          {dropdownOpen === "projects" && (
            <div className="dropdown-menu">
              {/* Online Designed */}
              <div
                className="submenu-item"
                onClick={() => handleSubmenuToggle("online")}
              >
                <span className="submenu-label">
                  Online Designed{" "}
                  <span
                    className={`arrow ${activeSubmenu === "online" ? "up" : "down"}`}
                  >
                    ▶
                  </span>
                </span>

                {activeSubmenu === "online" && (
                  <div className="submenu">
                    <Link to="/projects/3bhk-noida">
                      1580 Sq Ft 3 BHK Flat Noida Extension
                    </Link>
                    <Link to="/projects/ats-advantage">
                      3BHK Flat ATS Advantage Indirapuram
                    </Link>
                    <Link to="/projects/windsor-park">
                      1623 Sq Ft 3 BHK Flat In Windsor Park
                    </Link>
                    <Link to="/projects/cleo-county">
                      1081 Sq Ft 3 BHK Flat Cleo County
                    </Link>
                    <Link to="/projects/sector121">
                      1827 Sq Ft 3 BHK Flat Sector 121 Noida
                    </Link>
                  </div>
                )}
              </div>

              {/* Designed And Executed */}
              <div
                className="submenu-item"
                onClick={() => handleSubmenuToggle("executed")}
              >
                <span className="submenu-label">
                  Designed And Executed{" "}
                  <span
                    className={`arrow ${
                      activeSubmenu === "executed" ? "up" : "down"
                    }`}
                  >
                    ▶
                  </span>
                </span>

                {activeSubmenu === "executed" && (
                  <div className="submenu">
                    <Link to="/projects/mahagun">
                      Mahagun Mywoods Noida Extension
                    </Link>
                    <Link to="/projects/paras">
                      Paras Tierea Sector 137 Noida
                    </Link>
                    <Link to="/projects/mahagun-mascot">
                      Mahagun Mascot Crossing Republik
                    </Link>
                    <Link to="/projects/prateek">
                      Prateek Laurel Sector 120 Noida
                    </Link>
                    <Link to="/projects/oxford">
                      Oxford Square Indirapuram
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ✅ Our Services Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("services")}
          >
            Our Services{" "}
            <span className={`arrow ${dropdownOpen === "services" ? "up" : "down"}`}>
              ▼
            </span>
          </button>

          {dropdownOpen === "services" && (
            <div className="dropdown-menu">
              {/* ✅ Corrected routes for navigation */}
              <Link to="/online-interior-designing">Online Interior Designing</Link>
              <Link to="/turnkey-projects">Turnkey Projects (Delhi-NCR)</Link>
              <Link to="/3d-rendering-services">3D Rendering Services</Link>
            </div>
          )}
        </div>

        {/* ✅ Portfolio Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("portfolio")}
          >
            Portfolio{" "}
            <span className={`arrow ${dropdownOpen === "portfolio" ? "up" : "down"}`}>
              ▼
            </span>
          </button>

          {dropdownOpen === "portfolio" && (
            <div className="dropdown-menu">
              <Link to="/portfolio/residential">Residential Interior Designs</Link>
              <Link to="/portfolio/commercial">Commercial Interiors Designs</Link>
            </div>
          )}
        </div>

        {/* ✅ Other Links */}
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>

        {/* ✅ Login / Sign Up Buttons */}
        <Link to="/login">
          <button className="quote-btn login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="quote-btn signup">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
