import React from "react";
import "./Hero.css";

/* IMPORT ALL IMAGES */
import heroBg from "../../assets/hero-bg.jpg";


import serviceGirl from "../../assets/service-girl.png";
import serviceWorkers from "../../assets/service-workers.png";
import rw1 from "../../assets/rw1.jpg";
import rw2 from "../../assets/rw2.jpg";
import rw3 from "../../assets/rw3.jpg";

import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import why4 from "../../assets/why4.png";

import user1 from "../../assets/user1.jpg";

import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const Hero = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <div
        className="hero-container"
       style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>FINEST BESPOKE INTERIORS.</h1>
          <p>Creating lasting impressions through interior design.</p>
        </div>
      </div>

      {/* ✅ SERVICE 1 SECTION */}
      <section className="services-section">
        <div className="services-header">
          <h3 className="services-small-title">WHAT WE DO</h3>
          <h1 className="services-main-title">SERVICES OFFERED</h1>
          <p className="services-subtitle">
            "Customized & Exclusive Interior Designing"
          </p>
        </div>

        <div className="services-content">
          <div className="services-left">
            <h4 className="service-number">Service 1</h4>
            <h2 className="service-title">ONLINE INTERIOR DESIGNING</h2>
            <p className="service-desc">
              Interior Design Wala provides cost-effective online interior design
              assistance across India. Our experts help you visualize with 2D/3D
              design rendering for the best interior solutions.
            </p>

            <a className="how-it-works" href="#">
              How It Works →
            </a>
          </div>

          <div className="services-right">
            <img src={serviceGirl} className="service-image" alt="Service 1" />
          </div>
        </div>
      </section>

      {/* ✅ SERVICE 2 SECTION */}
      <section className="services-section">
        <div className="services-content service-2-layout">

          <div className="services-right">
            <img src={serviceWorkers} className="service-image" alt="Service 2" />
          </div>

          <div className="services-left">
            <h4 className="service-number">Service 2</h4>
            <h2 className="service-title">TURNKEY PROJECTS (Delhi-NCR)</h2>
            <p className="service-desc">
              Full turnkey interior execution services including design,
              supervision, installation, and material selection.
            </p>

            <a className="how-it-works" href="#">
              How It Works →
            </a>
          </div>

        </div>
      </section>

      {/* ✅ RECENT WORK */}
      <section className="recent-work-section">
        <div className="recent-header">
          <div>
            <h4 className="recent-small-title">PROJECTS</h4>
            <h1 className="recent-main-title">
              RECENT <span>WORK</span>
            </h1>
          </div>

        <a className="explore-more" href="#">Explore More →</a>
        </div>

        <div className="recent-cards">

          <div className="recent-card">
            <img src={rw1} className="recent-img" alt="" />
            <div className="recent-overlay">
              <div className="recent-round-btn">→</div>
              <div className="recent-text">
                <h4>Mr. Ashish Ojha</h4>
                <h3>3BHK Duplex House</h3>
              </div>
            </div>
          </div>

          <div className="recent-card">
            <img src={rw2} className="recent-img" alt="" />
            <div className="recent-overlay">
              <div className="recent-round-btn">→</div>
              <div className="recent-text">
                <h4>Mr. Saurabh Sharma</h4>
                <h3>Co-Working Office</h3>
              </div>
            </div>
          </div>

          <div className="recent-card">
            <img src={rw3} className="recent-img" alt="" />
            <div className="recent-overlay">
              <div className="recent-round-btn">→</div>
              <div className="recent-text">
                <h4>Mr. Madhav</h4>
                <h3>Modern Office</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section className="contact-section">
        <h3 className="contact-small-title">CONTACT DETAILS</h3>
        <h1 className="contact-title">HOW CAN WE HELP YOU?</h1>

        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-left">

            <div className="contact-box red-box">
              <div className="contact-icon">🌐</div>
              <h3>Visit Our Office</h3>
              <p>E-53, Ground Floor, Sector-63, Noida</p>
            </div>

            <div className="contact-box white-box">
              <div className="contact-icon red">🌐</div>
              <h3>Our Contact Details</h3>
              <p>Call & WhatsApp</p>
              <p className="bold">+91 9999423006</p>
              <p>Email</p>
              <p className="bold">care@interiordesignwala.com</p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="contact-right">

            <h2 className="form-title">Get Free Consultation</h2>

            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Phone" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Location" />

              <div className="radio-group">
                <label><input type="radio" name="bhk" /> 2 BHK</label>
                <label><input type="radio" name="bhk" /> 3 BHK</label>
                <label><input type="radio" name="bhk" /> 4 BHK+</label>
                <label><input type="radio" name="bhk" /> Commercial</label>
              </div>
            </div>

            <textarea placeholder="Your Requirements"></textarea>

            <div className="form-row">
              <label className="captcha-label">What is 3*3=?</label>
              <input type="text" className="captcha-input" />
            </div>

            <button className="submit-btn">Submit</button>

          </div>
        </div>
      </section>

      {/* ✅ WHY CHOOSE IDW */}
      <section className="why-section">

        <h3 className="why-small">WHY US</h3>
        <h1 className="why-title">WHY PEOPLE CHOOSE IDW</h1>

        <div className="why-grid">

          <div className="why-card">
            <img src={why1} className="why-img" alt="" />
            <h3 className="why-card-title">Experienced Team</h3>
            <p className="why-text">
              Highly experienced designers offering innovative and efficient solutions.
            </p>
          </div>

          <div className="why-card">
            <img src={why2} className="why-img" alt="" />
            <h3 className="why-card-title">Budget Oriented</h3>
            <p className="why-text">
              Cost-effective design options with smart space planning & material selection.
            </p>
          </div>

          <div className="why-card">
            <img src={why3} className="why-img" alt="" />
            <h3 className="why-card-title">Virtual Reality</h3>
            <p className="why-text">
              Advanced 3D rendering & VR walkthroughs before project execution.
            </p>
          </div>

          <div className="why-card">
            <img src={why4} className="why-img" alt="" />
            <h3 className="why-card-title">Free Consultation</h3>
            <p className="why-text">
              Transparent discussions and personalized guidance for every customer.
            </p>
          </div>

        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section className="testimonial-section">

        <div className="testimonial-header">
          <div>
            <h3 className="testimonial-small">TESTIMONIALS</h3>
            <h1 className="testimonial-title">
              OUR CUSTOMER <span>WORDS</span>
            </h1>
          </div>

          <a href="#" className="testimonial-viewall">View All →</a>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              It was a pleasure doing business with you. Very professional, creative & flexible!
            </p>
            <h3 className="testimonial-location">Delhi</h3>
            <h2 className="testimonial-name">Mr. Ravi Varsney</h2>
          </div>

          <div className="testimonial-card center-card">
            <img src={user1} className="testimonial-user-img" alt="" />
            <p className="testimonial-text">
              You certainly are an industry expert. Excellent interior work and support!
            </p>
            <h3 className="testimonial-location">Mandakini Enclave, New Delhi</h3>
            <h2 className="testimonial-name">Mr. Dinesh Chander</h2>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              Very professional, affordable, and easy to communicate requirements.
            </p>
            <h3 className="testimonial-location">Vijaywada, Andhra Pradesh</h3>
            <h2 className="testimonial-name">Dr. Mohammady</h2>
          </div>

        </div>
      </section>

      {/* ✅ BLOG SECTION */}
      <section className="blog-section">

        <div className="blog-header">
          <div>
            <h3 className="blog-small-title">NEWS & UPDATES</h3>
            <h1 className="blog-main-title">
              LATEST FROM <span>BLOG</span>
            </h1>
          </div>

          <a className="blog-more" href="#">
            More News →
          </a>
        </div>

        <div className="blog-grid">

          <div className="blog-card">
            <img src={blog1} className="blog-img" alt="Blog 1" />
            <p className="blog-date">July 26, 2024 8:46 am</p>
            <p className="blog-meta">By Admin <span>|</span> In</p>
            <h2 className="blog-title">
              6 Latest Advancements in 3D Architectural Rendering
            </h2>
            <p className="blog-desc">
              3D rendering in interior design has evolved rapidly over time...
            </p>
          </div>

          <div className="blog-card">
            <img src={blog2} className="blog-img" alt="Blog 2" />
            <p className="blog-date">July 22, 2024 10:50 am</p>
            <p className="blog-meta">By Admin <span>|</span> In</p>
            <h2 className="blog-title">
              3D Rendered Images & Importance in Interior Business
            </h2>
            <p className="blog-desc">
              Interior designing is about how you feel the designs...
            </p>
          </div>

          <div className="blog-card">
            <img src={blog3} className="blog-img" alt="Blog 3" />
            <p className="blog-date">July 15, 2024 6:45 am</p>
            <p className="blog-meta">By Admin <span>|</span> In</p>
            <h2 className="blog-title">
              7 Effective Do’s and Dont's of Pooja Room Designs
            </h2>
            <p className="blog-desc">
              A pooja room holds great importance in Indian homes…
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
