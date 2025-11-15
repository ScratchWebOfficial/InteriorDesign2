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

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-btn"
            onClick={(e) => toggleDropdown("portfolio", e)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen === "portfolio"}
          >
            Portfolio{" "}
            <span className={`arrow ${dropdownOpen === "portfolio" ? "up" : "down"}`}>▼</span>
          </button>

          {dropdownOpen === "portfolio" && (
            <div className="dropdown-menu" role="menu" onClick={(e) => e.stopPropagation()}>
              <Link to="/portfolio/residential" onClick={closeMobile}>Residential Interior Designs</Link>
              <Link to="/portfolio/commercial" onClick={closeMobile}>Commercial Interiors Designs</Link>
            </div>
          )}
        </div>

        <Link to="/blog" onClick={closeMobile}>Blog</Link>
        <Link to="/contact" onClick={closeMobile}>Contact</Link>

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
