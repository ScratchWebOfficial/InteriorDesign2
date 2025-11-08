import React from "react";
import "./TopBar.css";
import { FaHeadphonesAlt, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      
      {/* LEFT SECTION */}
      <div className="top-left">
        <FaHeadphonesAlt className="top-icon" />
        <span>We have Answers</span>

        <span className="separator">|</span>
        <span>Turnkey Projects +91 70038 53453</span>

        <span className="separator">|</span>
        <span>Online Designing +91 70038 53453</span>

        <span className="separator">|</span>
        <span>fitnfixsolutions@gmail.com</span>
      </div>

      {/* RIGHT SECTION */}
      <div className="top-right">
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaPinterestP />
        <FaInstagram />
        <FaLinkedinIn />
        <FaPhoneAlt />
        <FaWhatsapp />
        <FaEnvelope />
      </div>

    </div>
  );
};

export default TopBar;
