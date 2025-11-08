import React, { useState } from "react";
import "./FloatingBar.css";
import { FaArrowRight, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* ALWAYS VISIBLE ARROW BUTTON */}
      <div
        className={`floating-arrow ${open ? "arrow-open" : "arrow-closed"}`}
        onClick={() => setOpen(!open)}
      >
        <FaArrowRight className={`arrow-icon ${open ? "" : "rotate"}`} />
      </div>

      {/*  SIDEBAR */}
      <div className={`floating-container ${open ? "open" : "closed"}`}>

        <div className="middle-section">
          <span className="vertical-text">Contact Us</span>
          <FaEnvelope className="mail-icon" />
        </div>

        <a
          href="https://wa.me/919312739997"
          className="whatsapp-section"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>

        <a href="tel:+919990155566" className="call-section">
          <FaPhoneAlt className="call-icon" />
        </a>
      </div>
    </>
  );
};

export default FloatingBar;
