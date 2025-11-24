import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

// IMPORTING IMAGE
import footerLogo from "../../assets/logo_12311.png";

// IMPORTING REACT ICONS
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaHeadset,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  navigate(path);
};


  return (
    <footer className="footer">

      {/* ================= TOP MAIN FOOTER ================= */}
      <div className="footer-main">

        {/* LOGO + ABOUT */}
        <div className="footer-about">
          <img
            src={footerLogo}
            alt="Interior Design Wala"
            className="footer-logo"
          />

          <p className="footer-text">
            Sahacarah Global Pvt. Ltd. is at your service if you want to give your home interiors
            a fresh and elegant look without spending huge fortune.
          </p>

          <div className="footer-social">
            <span>Follow Us On:</span>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-social-icon" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-social-icon" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="footer-social-icon" />
            </a>

            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="footer-social-icon" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-social-icon" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="footer-social-icon" />
            </a>
          </div>


          <p className="footer-check">
            For End to End Execution<br />
            Check Out: <a href="mailto:fitnfixsolutions@gmail.com">fitnfixsolutions@gmail.com</a>
          </p>
        </div>

        {/* USEFUL LINKS LEFT */}
        <div className="footer-links">
          <h3>Usefull Links</h3>
          <ul>
            <li onClick={() => goTo("/about")}><span>+</span> Company</li>
            <li onClick={() => goTo("/portfolio")}><span>+</span> Portfolio</li>
            <li onClick={() => goTo("/3D-rendering-services")}><span>+</span> 3D Rendering Services</li>
            <li onClick={() => goTo("/testimonials")}><span>+</span> Testimonials</li>
            <li onClick={() => goTo("/blog")}><span>+</span> Blog</li>
            <li onClick={() => goTo("/get-quote")}><span>+</span> Get a Quote</li>
            <li onClick={() => goTo("/contact")}><span>+</span> Contact Us</li>
            <li onClick={() => goTo("/talk-to-designer")}><span>+</span> Talk to Designer</li>
            <li onClick={() => goTo("/payment")}><span>+</span> Make Payment</li>
          </ul>
        </div>

        {/* USEFUL LINKS RIGHT */}
        <div className="footer-links footer-links-right">
          <ul>
            <li onClick={() => goTo("/associates")}><span>+</span> Associates</li>
            <li onClick={() => goTo("/career")}><span>+</span> Careers</li>
            <li onClick={() => goTo("/faq")}><span>+</span> Faq</li>
            <li onClick={() => goTo("/site-map")}><span>+</span> Site Map</li>
            <li onClick={() => goTo("/vastu")}><span>+</span> Vastu for Interior</li>
            <li onClick={() => goTo("/turnkey-projects")}><span>+</span> Services</li>
            <li onClick={() => goTo("/privacy-policy")}><span>+</span> Privacy Policy</li>
            <li onClick={() => goTo("/terms")}><span>+</span> Terms & Conditions</li>
          </ul>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="footer-subscribe">
          <h3>Subscribe Us</h3>

          <div className="subscribe-wrap">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe →</button>
          </div>

          <p className="subscribe-note">
            *Subscribe us and get latest news and updates
          </p>
        </div>

      </div>

      {/* ================= BOTTOM CONTACT CARDS ================= */}
      <div className="footer-cards">

        <div className="footer-card">
          <div className="footer-card-icon">
            <FaGlobe />
          </div>
          <p>E-53 Ground Floor, Sector-63,<br />Noida</p>
        </div>

        <div className="footer-card">
          <div className="footer-card-icon">
            <FaHeadset />
          </div>
          <p>
            Turnkey Projects +91 99901 55566<br />
            Online Designing +91 93127 39997
          </p>
        </div>

        <div className="footer-card">
          <div className="footer-card-icon">
            <FaEnvelope />
          </div>
          <div>
            <p className="careers-title">CAREERS</p>
            <p>fitnfixsolutions@gmail.com</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2009–2021 All Rights Reserved by Sahacarah Global Pvt. Ltd.
      </div>

    </footer>
  );
};

export default Footer;
