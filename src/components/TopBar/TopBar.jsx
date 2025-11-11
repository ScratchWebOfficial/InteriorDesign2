import React from "react";
import "./TopBar.css";
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

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
        <a
          href="mailto:fitnfixsolutions@gmail.com"
          className="email-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          fitnfixsolutions@gmail.com
        </a>
      </div>

      {/* RIGHT SECTION */}
      <div className="top-right">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a href="tel:+917003853453">
          <FaPhoneAlt />
        </a>

        <a
          href="https://wa.me/917003853453"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=fitnfixsolutions@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
