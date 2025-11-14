import React from "react";
import "./Rendering.css";

import img1 from "../../assets/rendering1.jpg";
import img2 from "../../assets/rendering2.jpg";
import img3 from "../../assets/rendering3.jpg";
import img4 from "../../assets/rendering4.jpg";
import img5 from "../../assets/rendering5.jpg";
import img6 from "../../assets/rendering6.jpg";

const RenderingServices = () => {
  return (
    <div className="rendering-page">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={img1} alt="3D Rendering" className="hero-img" />
        <div className="hero-overlay">
          <h1>3D RENDERING SERVICES</h1>
          <p>Home ~ 3D Rendering Services</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>3D RENDERING SERVICES IN INDIA</h2>
        <p>
          Get the best 3D Rendering Services for your home interiors, exteriors
          and commercial buildings in India.
        </p>
      </section>

      {/* Home Interior Section */}
      <section className="service-section">
        <div className="service-text">
          <h3>3D Rendering Services</h3>
          <h2>HOME INTERIOR DESIGNS</h2>
          <p>
            Do you want to experience the interior of your house of dreams before
            you spend a hefty on interiors? At Interior Design Wala, find the best{" "}
            <a href="#">3D interior rendering services</a> that help you visualize
            your ideal home and simulate real life.
          </p>
        </div>
        <div className="service-img-box">
          <img src={img2} alt="Home Interior" className="service-img" />
        </div>
      </section>

      {/* Commercial Interior Section */}
      <section className="service-section reverse">
        <div className="service-text">
          <h3>3D Rendering Services</h3>
          <h2>COMMERCIAL INTERIOR DESIGNS</h2>
          <p>
            Interior Design Wala provides{" "}
            <a href="#">3D rendering interior design</a> for commercial spaces like
            offices, hotels, malls, restaurants, and more. Visualize your ideas
            before execution and achieve perfection.
          </p>
        </div>
        <div className="service-img-box">
          <img src={img3} alt="Commercial Interior" className="service-img" />
        </div>
      </section>

      {/* Exterior Section */}
      <section className="service-section">
        <div className="service-text">
          <h3>3D Rendering Services</h3>
          <h2>BUILDING EXTERIOR DESIGNS</h2>
          <p>
            First impressions matter — our{" "}
            <a href="#">3D exterior rendering services</a> help you preview your
            building’s look and feel before construction. Choose from modern,
            traditional or contemporary designs with IDW.
          </p>
        </div>
        <div className="service-img-box">
          <img src={img4} alt="Building Exterior" className="service-img" />
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="service-section reverse">
        <div className="service-text">
          <h3>3D Rendering Services</h3>
          <h2>FLOOR PLAN IN 3D</h2>
          <p>
            Transform your 2D floor plan into realistic 3D visuals that bring your
            ideas to life. At Interior Design Wala, experience top-quality{" "}
            <a href="#">3D floor plan rendering</a> services that offer accurate
            visualization of your dream project.
          </p>
        </div>
        <div className="service-img-box">
          <img src={img5} alt="3D Floor Plan" className="service-img" />
        </div>
      </section>

      {/* Steps Section */}
<section className="steps-section">
  <div className="steps-content">
    <div className="steps-text">
      <h3>Our Process</h3>
      <h2>3 Quick Steps to Rendering @ IDW</h2>

      <div className="step">
        <h4>Step 1: Consult for Free:</h4>
        <p>
          Share the floor plan and images to get us familiar with the site .You get free consultation and price estimate then and there.
        </p>
      </div>

      <div className="step">
        <h4>Step 2: Design Discussion:</h4>
        <p>
           Once you're onboard we hold a detailed discussion meeting to
          understand every minute specification of the site by filling up
          the requirement sheet.
        </p>
      </div>

      <div className="step">
        <h4>Step 3: Designing & Handover 3Ds:</h4>
        <p>
          Once we understand your requirements, we share an exhaustive list
          of samples to choose from. Your sample finalization leads our
          designers to draft 2D (if required) and create customized realistic
          3D rendering images as per your budget and taste, as well as per
          the requirements of the <span className="highlight-text">3D Rendering Services</span> approached.
        </p>
      </div>
    </div>

    <div className="steps-image">
      <img
        src={img6}
        alt="3D Steps Illustration"
      />
    </div>
  </div>
</section>
 {/* Get Free Quote Section */}
      <section className="quote-section">
        <h2>Get Free Quote</h2>
        <p>Fill in the details below, and our team will get back to you shortly.</p>

        <form className="quote-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="City" />
          </div>

          <div className="radio-group">
            <label><input type="radio" name="project" /> 2 BHK</label>
            <label><input type="radio" name="project" /> 3 BHK</label>
            <label><input type="radio" name="project" /> 4 BHK+</label>
            <label><input type="radio" name="project" /> Commercial</label>
          </div>

          <textarea placeholder="Write your message here..."></textarea>

          <button type="button" className="submit-btn">Submit</button>
        </form>
      </section>

    </div>
  );
};

export default RenderingServices;
