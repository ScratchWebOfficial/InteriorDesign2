import React, { useState, useRef, useEffect } from "react";
import "./FloatingBar.css";
import { FaArrowRight, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingBar = () => {
  const [open, setOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const hideTimerRef = useRef(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const handleHoverEnter = () => {
    clearHideTimer();
    setShowForm(true);
  };

  const handleHoverLeave = () => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => setShowForm(false), 140);
  };

  const handleCloseForm = () => {
    clearHideTimer();
    setShowForm(false);
  };

  useEffect(() => {
    return () => clearHideTimer();
  }, []);

  const sharedHoverEvents = {
    onMouseEnter: handleHoverEnter,
    onMouseLeave: handleHoverLeave,
  };

  return (
    <>
      {/* ALWAYS VISIBLE ARROW BUTTON */}
      <div
        className={`floating-arrow ${open ? "arrow-open" : "arrow-closed"}`}
        onClick={() => setOpen(!open)}
      >
        <FaArrowRight className={`arrow-icon ${open ? "" : "rotate"}`} />
      </div>

      {/* SIDEBAR */}
      <div className={`floating-container ${open ? "open" : "closed"}`}>
        {/* CONTACT SECTION */}
        <div className="middle-section" {...sharedHoverEvents}>
          <div className="vertical-text">Contact Us</div>
          <a
            href="mailto:fitnfixsolutions@gmail.com"
            className="mail-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="mail-icon" />
          </a>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919312739997"
          className="whatsapp-section"
          data-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>

        {/* CALL */}
        <a href="tel:+919990155566" className="call-section" data-label="Call Now">
          <FaPhoneAlt className="call-icon" />
        </a>
      </div>

      {showForm && (
        <div className="contact-form-wrapper" {...sharedHoverEvents}>
          <div className="contact-form-header">
            <h3>Contact Us</h3>
            <button
              type="button"
              className="close-btn"
              onClick={handleCloseForm}
              aria-label="Close contact form"
            >
              ×
            </button>
          </div>

          <form className="contact-form-content" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="tel" placeholder="Phone" className="form-input" />
            <textarea placeholder="Message" className="form-textarea" />

            <div className="captcha-row">
              <label className="captcha-question" htmlFor="contact-captcha">
                What is 3 * 3 = ?
              </label>
              <input id="contact-captcha" type="text" className="captcha-input" />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingBar;
