import React from "react";
import { useNavigate } from "react-router-dom"; //  For navigation
import "./Contact.css";
import { FaGlobe, FaHeadset, FaEnvelope } from "react-icons/fa";
import contactBg from "../../assets/contact-bg.jpg"; // Background image
import contactIllustration from "../../assets/contact-illustration.png"; // Form illustration
import careerBg from "../../assets/career-bg.jpg"; // Career section background

const Contact = () => {
  const navigate = useNavigate(); //  Initialize navigation

  //  Function to navigate to Career page
  const handleJobListingClick = () => {
    navigate("/career");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  };

  return (
    <div className="contact-page">
      {/*  Hero Section */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-overlay">
          <h4 className="contact-subtitle">CONTACT US</h4>
          <h1 className="contact-title">Get In Touch With Us</h1>
        </div>
      </div>

      {/*  Contact Info Cards */}
      <div className="contact-info-container">
        {/* Visit Our Office */}
        <div className="contact-card">
          <FaGlobe className="contact-icon" />
          <h3>Visit Our Office</h3>
          <p>
            E-53 Ground Floor, Sector-63, Noida, <br />
            Gautam Buddha Nagar, Uttar Pradesh-201301
          </p>
        </div>

        {/* Call Us */}
        <div className="contact-card">
          <FaHeadset className="contact-icon" />
          <h3>Call Us</h3>
          <p>
            Turnkey Projects:{" "}
            <a href="tel:+919990155566">+91-9990155566</a>
            <br />
            Online Designing:{" "}
            <a href="tel:+919312739997">+91-9312739997</a>
          </p>
        </div>

        {/* Mail Us */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Mail Us</h3>
          <p>
            <a href="mailto:fitnfixsolutions@gmail.com">
              mailto:fitnfixsolutions@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/*  Paragraph Section */}
      <div className="contact-description">
        <p>
          We know that interior designing can be tricky for you and you must be
          dealing with various unanswered questions and confusions. No need to
          worry, we welcomes your questions and our
          representatives are ready to answer each one of them. You can email us
          at:{" "}
          <a href="mailto:fitnfixsolutions@gmail.com" className="highlight">
            mailto:fitnfixsolutions@gmail.com
          </a>{" "}
          with questions or inquiries or call{" "}
          <a href="tel:+919312739997" className="highlight">
            +91 9312739997
          </a>
          . We would be happy to answer your questions and set up a meeting with
          you. Reach out to us and we’ll respond as soon as we can.
        </p>

        <p className="faq-text">
          We’re here to help with any question of our customers.{" "}
          <a href="/faq" className="highlight">
            Go to FAQ’s
          </a>
        </p>
      </div>

      {/*  Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          {/* Left Side (Text + Form) */}
          <div className="form-left">
            <h4 className="form-subtitle">DROP US A LINE</h4>
            <h2 className="form-title">
              SEND YOUR <span>MESSAGE</span>
            </h2>
            <p className="form-text">
              Looking for online interior design support or complete end to end
              execution solutions? Drop us your requirement and talk to the
              designer in 24 hours.
            </p>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Phone" required />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Location" required />
                <div className="radio-group">
                    <label>
                      
                    <input type="radio" name="projectType" /> 1 BHK
                  </label>
                  <label>
                      
                    <input type="radio" name="projectType" /> 2 BHK
                  </label>
                  <label>
                    <input type="radio" name="projectType" /> 2 BHK
                  </label>
                  <label>
                    <input type="radio" name="projectType" /> 3 BHK
                  </label>
                  <label>
                    <input type="radio" name="projectType" /> 4 BHK+
                  </label>
                  <label>
                    <input type="radio" name="projectType" /> Commercial
                  </label>
                </div>
              </div>

              <textarea
                placeholder="Your Requirements"
                rows="5"
                required
              ></textarea>

              <div className="form-captcha">
                <label>What is 3 * 3 = ?</label>
                <input type="text" placeholder="Enter answer" required />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>

              <p className="support-text">
                For any queries, contact our support team. <br />
                <a href="tel:+919999423006">+91 9999423006</a> /{" "}
                <a href="fitnfixsolutions@gmail.com">
                  fitnfixsolutions@gmail.com
                </a>
              </p>
            </form>
          </div>

          {/* Right Side (Illustration) */}
          <div className="form-right">
            <img
              src={contactIllustration}
              alt="Customer Support Illustration"
              className="contact-image"
            />
          </div>
        </div>
      </section>

      {/*  Career Opportunities Section */}
      <section
        className="career-section"
        style={{ backgroundImage: `url(${careerBg})` }}
      >
        <div className="career-overlay">
          <h2 className="career-title">Find a Career Opportunities</h2>
          <p className="career-subtitle">
            View our job listing to find the job of your dream.
          </p>

          {/* Navigate to Career Page */}
          <button className="career-btn" onClick={handleJobListingClick}>
            Job Listing →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
