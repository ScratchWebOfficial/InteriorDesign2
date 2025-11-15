import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_12311.png";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // only close if click is completely outside the navbar
      const clickedInsideNavbar = !!event.target.closest(".navbar");
      if (!clickedInsideNavbar) {
        // close everything
        setDropdownOpen(null);
        setActiveSubmenu(null);
        setMobileOpen(false);
        // debug
        // console.log("Clicked outside navbar -> closed all");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (menu, e) => {
    if (e && e.stopPropagation) e.stopPropagation(); // prevent bubbling to document
    setDropdownOpen((prev) => (prev === menu ? null : menu));
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (submenu, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  const toggleMobile = (e) => {
    // stop the click from reaching document click listener (which could close it instantly)
    if (e && e.stopPropagation) e.stopPropagation();
    setMobileOpen((p) => !p);
    // close dropdowns when opening mobile to avoid overlap
    setDropdownOpen(null);
    setActiveSubmenu(null);
    // debug
    // console.log("toggleMobile ->", !mobileOpen);
  };

  const closeMobile = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setMobileOpen(false);
    setDropdownOpen(null);
    setActiveSubmenu(null);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-left">
        <Link to="/" onClick={closeMobile} aria-label="Home">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      {/* Hamburger button */}
      <button
        type="button"
        className={`hamburger ${mobileOpen ? "open" : ""}`}
        onClick={(e) => toggleMobile(e)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* nav-links: use "open" class to match your CSS */}
      <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMobile}>Home</Link>
        <Link to="/about" onClick={closeMobile}>About Us</Link>

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-btn"
            onClick={(e) => toggleDropdown("projects", e)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen === "projects"}
          >
            Recent Projects{" "}
            <span className={`arrow ${dropdownOpen === "projects" ? "up" : "down"}`}>▼</span>
          </button>

          {dropdownOpen === "projects" && (
            <div className="dropdown-menu" role="menu" onClick={(e) => e.stopPropagation()}>
              <div className="submenu-item">
                <button
                  type="button"
                  className="submenu-label"
                  onClick={(e) => handleSubmenuToggle("online", e)}
                  aria-expanded={activeSubmenu === "online"}
                >
                  Online Designed{" "}
                  <span className={`arrow ${activeSubmenu === "online" ? "up" : "down"}`}>▶</span>
                </button>

                {activeSubmenu === "online" && (
                  <div className="submenu" role="menu">
                    <Link to="/projects/3bhk-noida" onClick={closeMobile}>1580 Sq Ft 3 BHK Flat Noida Extension</Link>
                    <Link to="/projects/ats-advantage" onClick={closeMobile}>3BHK Flat ATS Advantage Indirapuram</Link>
                    <Link to="/projects/windsor-park" onClick={closeMobile}>1623 Sq Ft 3 BHK Flat In Windsor Park</Link>
                    <Link to="/projects/cleo-county" onClick={closeMobile}>1081 Sq Ft 3 BHK Flat Cleo County</Link>
                    <Link to="/projects/sector121" onClick={closeMobile}>1827 Sq Ft 3 BHK Flat Sector 121 Noida</Link>
                  </div>
                )}
              </div>

              <div className="submenu-item">
                <button
                  type="button"
                  className="submenu-label"
                  onClick={(e) => handleSubmenuToggle("executed", e)}
                  aria-expanded={activeSubmenu === "executed"}
                >
                  Designed And Executed{" "}
                  <span className={`arrow ${activeSubmenu === "executed" ? "up" : "down"}`}>▶</span>
                </button>

                {activeSubmenu === "executed" && (
                  <div className="submenu" role="menu">
                    <Link to="/projects/mahagun" onClick={closeMobile}>Mahagun Mywoods Noida Extension</Link>
                    <Link to="/projects/paras" onClick={closeMobile}>Paras Tierea Sector 137 Noida</Link>
                    <Link to="/projects/mahagun-mascot" onClick={closeMobile}>Mahagun Mascot Crossing Republik</Link>
                    <Link to="/projects/prateek" onClick={closeMobile}>Prateek Laurel Sector 120 Noida</Link>
                    <Link to="/projects/oxford" onClick={closeMobile}>Oxford Square Indirapuram</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-btn"
            onClick={(e) => toggleDropdown("services", e)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen === "services"}
          >
            Our Services{" "}
            <span className={`arrow ${dropdownOpen === "services" ? "up" : "down"}`}>▼</span>
          </button>

          {dropdownOpen === "services" && (
            <div className="dropdown-menu" role="menu" onClick={(e) => e.stopPropagation()}>
              <Link to="/online-interior-designing" onClick={closeMobile}>Online Interior Designing</Link>
              <Link to="/turnkey-projects" onClick={closeMobile}>Turnkey Projects (Delhi-NCR)</Link>
              <Link to="/3d-rendering-services" onClick={closeMobile}>3D Rendering Services</Link>
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
      
      {/* ⭐ Residential Interior Designs dropdown */}
      <div
        className="submenu-item"
        onClick={() => handleSubmenuToggle("residential")}
      >
        <span className="submenu-label">
          Residential Interior Designs{" "}
          <span
            className={`arrow ${
              activeSubmenu === "residential" ? "up" : "down"
            }`}
          >
            ▶
          </span>
        </span>

        {activeSubmenu === "residential" && (
          <div className="submenu">
            <Link to="/residential/bedroom">Bedroom Interiors</Link>
            <Link to="/residential/living room">Living Room Interiors</Link>
            <Link to="/residential/kitchen">Kitchen Interiors </Link>
            <Link to="/residential/kids">Kids Bedroom Interiors</Link>
            <Link to="/residential/Toilet">Toilet Interiors</Link>
          </div>
        )}
      </div>

      {/* ⭐ Commercial Interior Designs dropdown */}
      <div
        className="submenu-item"
        onClick={() => handleSubmenuToggle("commercial")}
      >
        <span className="submenu-label">
          Commercial Interior Designs{" "}
          <span
            className={`arrow ${
              activeSubmenu === "commercial" ? "up" : "down"
            }`}
          >
            ▶
          </span>
        </span>

        {activeSubmenu === "commercial" && (
          <div className="submenu">
            <Link to="/commercial/offices">Office Interiors</Link>
            <Link to="/commercial/showrooms">Showroom Interiors</Link>
            <Link to="/commercial/hotel">Hotel Interiors</Link>
            <Link to="/commercial/hospital">Hospital/Clinic Interiors</Link>
             <Link to="/commercial/resturant">Resturant Interiors</Link>
          </div>
        )}
      </div>

    </div>
  )}
</div>
        {/* ✅ Other Links */}
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/login" onClick={closeMobile}>
          <button className="quote-btn login">Login</button>
        </Link>
        <Link to="/signup" onClick={closeMobile}>
          <button className="quote-btn signup">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
