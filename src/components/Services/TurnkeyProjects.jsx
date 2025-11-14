import React from "react";
import "./TurnkeyProjects.css";
import bannerImg from "../../assets/turnkey-banner.jpg";

import p1 from "../../assets/exe1.jpg";
import p2 from "../../assets/exe2.jpg";
import p3 from "../../assets/exe3.jpg";
import how1 from "../../assets/how1.png";


import { 
  FaHome, 
  FaUserFriends, 
  FaCheckCircle, 
  FaPencilRuler, 
  FaFlag, 
  FaCity 
} from "react-icons/fa";


const TurnkeyProjects = () => {
  return (
    <div className="turnkey-page">

      {/* ⭐ HERO SECTION */}
      <div
        className="turnkey-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="turnkey-overlay">
          <h1 className="turnkey-title">
            End To End Execution In Noida, Ghaziabad, Greater Noida
          </h1>

          <p className="turnkey-breadcrumb">
            Home <span>~</span> <strong>Turnkey Projects</strong>
          </p>
        </div>
      </div>

      {/* ⭐ INTRO SECTION */}
      <section className="turnkey-intro">
        <img
          src="/logo.png"
          alt="Turnkey Logo"
          className="turnkey-intro-logo"
        />

        <h4 className="turnkey-intro-tagline">TURNKEY INTERIOR SOLUTIONS</h4>

        <h1 className="turnkey-intro-title">BUDGET AAPKA, KAAM HAMARA</h1>

        <h2 className="turnkey-intro-subtitle">TAREEF AAPKI.</h2>

        <div className="turnkey-intro-buttons">
          <a href="tel:+919990155566" className="turnkey-call-btn">
            <i className="fas fa-phone"></i> &nbsp; +91-99901 55566
          </a>

          <a href="/contact" className="turnkey-book-btn">
            Book Consultation Now →
          </a>
        </div>
      </section>

      {/* ⭐ EXECUTED PROJECTS SECTION */}
      <section className="executed-section">
        <div className="executed-header">
          <div>
            <h5 className="executed-sub">PROJECTS</h5>
            <h2 className="executed-title">
              EXECUTED <span>SITE</span>
            </h2>
          </div>

          <a href="/projects" className="executed-viewall">
            View All →
          </a>
        </div>

        <div className="executed-grid">

          {/* Card 1 */}
          <div className="executed-card">
            <img src={p1} alt="Executed Project 1" />

            <button className="executed-arrow">→</button>

            <div className="executed-info">
              <p className="client-name">Mr. Anurag Anand</p>
              <h4 className="client-project">
                1580 sq ft 3 BHK Flat Noida Extension
              </h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="executed-card">
            <img src={p2} alt="Executed Project 2" />

            <button className="executed-arrow">→</button>

            <div className="executed-info">
              <p className="client-name">Mr. Jatin Dhingra</p>
              <h4 className="client-project">
                1827 sq ft 3 BHK Flat Sector 121 Noida
              </h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="executed-card">
            <img src={p3} alt="Executed Project 3" />

            <button className="executed-arrow">→</button>

            <div className="executed-info">
              <p className="client-name">Mr. Rishab Raj</p>
              <h4 className="client-project">
                3BHK Flat ATS Advantage Indirapuram
              </h4>
            </div>
          </div>

        </div>
      </section>


      {/* ⭐ WHY US SECTION */}
      <section className="whyus-section">

        <h5 className="whyus-sub">WHY US</h5>
        <h2 className="whyus-title">CHOOSE <span>US FOR</span></h2>

        <div className="whyus-grid">

          <div className="whyus-card">
            <FaHome className="whyus-icon" />
            <h4>Budget<br />Oriented</h4>

            {/* Hover red box */}
            <div className="whyus-hover-box">
              We make designs by keeping in mind your budget and preferences, 
              using materials that are under cost without compromising quality.
            </div>
          </div>

          <div className="whyus-card">
            <FaUserFriends className="whyus-icon" />
            <h4>Dedicated<br />Designer</h4>

            <div className="whyus-hover-box">
              A dedicated interior designer will guide you through every step of designing.
            </div>
          </div>

          <div className="whyus-card">
            <FaCheckCircle className="whyus-icon" />
            <h4>100% Production<br />Control</h4>

            <div className="whyus-hover-box">
              Our in-house production team ensures complete control over quality and process.
            </div>
          </div>

          <div className="whyus-card">
            <FaPencilRuler className="whyus-icon" />
            <h4>Tailor<br />Made</h4>

            <div className="whyus-hover-box">
              We provide fully personalized and exclusive interior designs.
            </div>
          </div>

          <div className="whyus-card">
            <FaFlag className="whyus-icon" />
            <h4>Meeting<br />Deadlines</h4>

            <div className="whyus-hover-box">
              Your dream home is our priority — we deliver your project on time.
            </div>
          </div>

          <div className="whyus-card">
            <FaCity className="whyus-icon" />
            <h4>Creative<br />Designs</h4>

            <div className="whyus-hover-box">
              We deliver the best possible creative output from our design experts.
            </div>
          </div>

        </div>
      </section>
      {/* ⭐ TALK TO DESIGNER FREE SECTION */}
<section className="talk-designer-section">

  <h5 className="talk-designer-sub">NEED END TO END SOLUTIONS</h5>
  <h2 className="talk-designer-title">TALK TO DESIGNER FREE</h2>

  <p className="talk-designer-desc">
    Fill the details and our designer will get in touch with you within 24 hours.
  </p>

  <form className="designer-form">

    <div className="form-row">
      <input type="text" placeholder="First Name" className="form-input" />
      <input type="text" placeholder="Phone" className="form-input" />
    </div>

    <div className="form-row">
      <input type="text" placeholder="Location" className="form-input" />

      <div className="radio-group">
        <label><input type="radio" name="bhk" defaultChecked /> 2 BHK</label>
        <label><input type="radio" name="bhk" /> 3 BHK</label>
        <label><input type="radio" name="bhk" /> 4 BHK+</label>
        <label><input type="radio" name="bhk" /> Commercial</label>
      </div>
    </div>

    <textarea
      placeholder="Your Requirements"
      className="form-textarea"
      rows="5"
    ></textarea>

    <div className="form-row captcha-row">
      <label className="captcha-label">What is 3*3=?</label>
      <input type="text" className="captcha-input" />
    </div>

    <button type="submit" className="form-submit">Submit</button>
  </form>

  <p className="designer-footer">
    Reach Us at <strong>99901 55566</strong> | Mail Us at <strong>care@interiordesignwala.com</strong>
  </p>

</section>
{/* ⭐ HOW IT WORKS — STAGE 1 SECTION */}
{/* ⭐ HOW IT WORKS — FULL SECTION (AFTER TALK DESIGNER) */}
<section className="how-section">

  <h5 className="how-sub">TURNKEY INTERIOR SOLUTIONS</h5>
  <h2 className="how-title">HOW IT WORKS</h2>

  <p className="how-tagline">
    We provide the best Turnkey Interior Solutions in Noida, Ghaziabad and Greater Noida.
  </p>

  <div className="how-wrapper">

    {/* LEFT SIDE TEXT */}
    <div className="how-left">

      <p className="stage-label">Stage 1</p>
      <h2 className="stage-title">Sign Up</h2>

      <p className="stage-text">
        Get in touch with us and fix a meeting with the designer to discuss all things you
        want us to do. Based on the information provided we will outline the first-cut
        design presentation that will best suit your taste and discernment. Also the detailed
        cost-estimation for interior will be shared.
      </p>

      <h4 className="stage-subtitle">Meet Designer:</h4>
      <p className="stage-text">
        You can fix the meeting with the designer by contacting us via call for a detailed discussion.
        In the first meeting you can let us know what your desires, ideas, preferences are and what
        moves you in here. We will be discussing your family structure, budget for interiors, likes
        and dislikes of the family, and based on that a preferred theme for your house.
      </p>

      <h4 className="stage-subtitle">Design Presentation:</h4>
      <p className="stage-text">
        After getting to know you and your requirements well, considering the scope of work the
        assigned interior designer will meet you with the first presentation that will illustrate
        what will be the overall look & feel of your house and what all things we are going to use.
      </p>

      <h4 className="stage-subtitle">Cost Estimate:</h4>
      <p className="stage-text">
        We will then share a detailed COST estimate for various processes and products we will be
        using in the turnkey interior designing which will illustrate a step-by-step breakage of
        overall cost.
      </p>

      <h4 className="stage-subtitle">Pay 10% to book us:</h4>
      <p className="stage-text">
        When you get satisfied with our approach to interior designing, you need to book us by
        paying 10% advance of the total cost to move further.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="how-right">
      <img src={how1} alt="How It Works" className="how-img" />
    </div>

  </div>
  
  
</section>
 <div className="how-left">

      <p className="stage-label">Stage 1</p>
      <h2 className="stage-title">Sign Up</h2>

      <p className="stage-text">
        Get in touch with us and fix a meeting with the designer to discuss all things you
        want us to do. Based on the information provided we will outline the first-cut
        design presentation that will best suit your taste and discernment. Also the detailed
        cost-estimation for interior will be shared.
      </p>

      <h4 className="stage-subtitle">Meet Designer:</h4>
      <p className="stage-text">
        You can fix the meeting with the designer by contacting us via call for a detailed discussion.
        In the first meeting you can let us know what your desires, ideas, preferences are and what
        moves you in here. We will be discussing your family structure, budget for interiors, likes
        and dislikes of the family, and based on that a preferred theme for your house.
      </p>

      <h4 className="stage-subtitle">Design Presentation:</h4>
      <p className="stage-text">
        After getting to know you and your requirements well, considering the scope of work the
        assigned interior designer will meet you with the first presentation that will illustrate
        what will be the overall look & feel of your house and what all things we are going to use.
      </p>

      <h4 className="stage-subtitle">Cost Estimate:</h4>
      <p className="stage-text">
        We will then share a detailed COST estimate for various processes and products we will be
        using in the turnkey interior designing which will illustrate a step-by-step breakage of
        overall cost.
      </p>

      <h4 className="stage-subtitle">Pay 10% to book us:</h4>
      <p className="stage-text">
        When you get satisfied with our approach to interior designing, you need to book us by
        paying 10% advance of the total cost to move further.
      </p>

    </div>
    


    </div>
    
  );
};

export default TurnkeyProjects;
