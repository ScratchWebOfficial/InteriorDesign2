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
      const clickedInsideNavbar = !!event.target.closest(".navbar");
      if (!clickedInsideNavbar) {
        setDropdownOpen(null);
        setActiveSubmenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (menu, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setDropdownOpen((prev) => (prev === menu ? null : menu));
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (submenu, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  const toggleMobile = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setMobileOpen((p) => !p);
    setDropdownOpen(null);
    setActiveSubmenu(null);
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

      <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMobile}>Home</Link>
        <Link to="/about" onClick={closeMobile}>About Us</Link>

        {/* RECENT PROJECTS DROPDOWN */}
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

        {/* OUR SERVICES DROPDOWN */}
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

        {/* PORTFOLIO DROPDOWN */}
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
              <div className="submenu-item">
                <button
                  type="button"
                  className="submenu-label"
                  onClick={(e) => handleSubmenuToggle("residential", e)}
                  aria-expanded={activeSubmenu === "residential"}
                >
                  Residential Interior Designs{" "}
                  <span className={`arrow ${activeSubmenu === "residential" ? "up" : "down"}`}>▶</span>
                </button>

                {activeSubmenu === "residential" && (
                  <div className="submenu" role="menu">
                    <Link to="/residential/bedroom" onClick={closeMobile}>Bedroom Interiors</Link>
                    <Link to="/residential/living" onClick={closeMobile}>Living Room Interiors</Link>
                    <Link to="/residential/kitchen" onClick={closeMobile}>Kitchen Interiors</Link>
                    <Link to="/residential/kids" onClick={closeMobile}>Kids Bedroom Interiors</Link>
                    <Link to="/residential/Toilet" onClick={closeMobile}>Toilet Interiors</Link>
                  </div>
                )}
              </div>

              <div className="submenu-item">
                <button
                  type="button"
                  className="submenu-label"
                  onClick={(e) => handleSubmenuToggle("commercial", e)}
                  aria-expanded={activeSubmenu === "commercial"}
                >
                  Commercial Interior Designs{" "}
                  <span className={`arrow ${activeSubmenu === "commercial" ? "up" : "down"}`}>▶</span>
                </button>

                {activeSubmenu === "commercial" && (
                  <div className="submenu" role="menu">
                    <Link to="/commercial/offices" onClick={closeMobile}>Office Interiors</Link>
                    <Link to="/commercial/showrooms" onClick={closeMobile}>Showroom Interiors</Link>
                    <Link to="/commercial/hotel" onClick={closeMobile}>Hotel Interiors</Link>
                    <Link to="/commercial/hospital" onClick={closeMobile}>Hospital/Clinic Interiors</Link>
                    <Link to="/commercial/resturant" onClick={closeMobile}>Resturant Interiors</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* BLOG DROPDOWN */}
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-btn"
            onClick={(e) => toggleDropdown("blog", e)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen === "blog"}
          >
            Blog{" "}
            <span className={`arrow ${dropdownOpen === "blog" ? "up" : "down"}`}>▼</span>
          </button>

          {dropdownOpen === "blog" && (
            <div className="dropdown-menu" role="menu" onClick={(e) => e.stopPropagation()}>
              <Link to="/blog/modular-kitchen" onClick={closeMobile}>Modular Kitchen Interior Ideas</Link>
              <Link to="/blog/home-interior" onClick={closeMobile}>Home Interior Design Ideas</Link>
              <Link to="/blog/bedroom-design" onClick={closeMobile}>Bedroom Design Ideas</Link>
              <Link to="/blog/living-room" onClick={closeMobile}>Living Room Design Ideas</Link>
              <Link to="/blog/dining-room" onClick={closeMobile}>Dining Room Design Ideas</Link>
              <Link to="/blog/kids-room" onClick={closeMobile}>Kids Bedroom Design Ideas</Link>
              <Link to="/blog/study-room" onClick={closeMobile}>Study Room Design Ideas</Link>
              <Link to="/blog/home-decor" onClick={closeMobile}>Home Decor Ideas</Link>
              <Link to="/blog/design-tours" onClick={closeMobile}>Sahacarah Design Tours</Link>
              <Link to="/blog/updates" onClick={closeMobile}>Sahacarah Updates</Link>
            </div>
          )}
        </div>

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