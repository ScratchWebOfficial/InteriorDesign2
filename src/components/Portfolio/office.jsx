import React from "react";
import "./office.css";
import { useNavigate } from "react-router-dom";

// Office Hero Banner Image
import officeBanner from "../../assets/office-banner.png"; 
import o1 from "../../assets/o1.png";
import o2 from "../../assets/o2.png";
import o3 from "../../assets/o3.png";
import o4 from "../../assets/o4.png";
import o5 from "../../assets/o5.png";
import o6 from "../../assets/o6.png";
import o7 from "../../assets/o7.png";
import o8 from "../../assets/o8.png";
import o9 from "../../assets/o9.png";
import o10 from "../../assets/o10.png";
import o11 from "../../assets/o11.png";
import o12 from "../../assets/o12.png";
import o13 from "../../assets/o13.png";
import o14 from "../../assets/o14.png";
import o15 from "../../assets/o15.png";

const Office = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="office-page">

      {/* HERO SECTION */}
      <section className="office-hero">
        <div className="office-overlay"></div>

        <img src={officeBanner} alt="Office Banner" className="office-hero-image" />

        <h1 className="office-hero-title">OFFICE INTERIORS</h1>

        <p className="office-breadcrumb">
          Portfolio ~ OFFICE INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="office-category-nav">
        <ul>
            <li className="active" onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/dining")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
         
        </ul>
      </section>
 <section className="office-gallery">
        <img src={o1} alt="Office Design" />
        <img src={o2} alt="Office Design" />
        <img src={o3} alt="Office Design" />
        <img src={o4} alt="Office Design" />
        <img src={o5} alt="Office Design" />
        <img src={o6} alt="Office Design" />
         <img src={o7} alt="Office Design" />
        <img src={o8} alt="Office Design" />
        <img src={o9} alt="Office Design" />
        <img src={o10} alt="Office Design" />
        <img src={o11} alt="Office Design" />
        <img src={o12} alt="Office Design" />
        <img src={o13} alt="Office Design" />
        <img src={o14} alt="Office Design" />
        <img src={o15} alt="Office Design" />
      </section>
      {/* OFFICE TEXT SECTION */}
<section className="office-text-section">

  <h2>Revealing Secrets of Small Office Interior Design</h2>

  <p>
    It is a well-established fact that office interiors create a professional ambience that in return 
    creates trust and motivation for work.
    <br /><br />
    <strong>But are the great interiors affordable too?</strong>
    <br />
    With Sahacarah Global Pvt. Ltd., Yes it’s affordable indeed!! Be it a 
    <strong> modern small office interior design </strong> 
    or exquisite large head offices, at Sahacarah Global Pvt. Ltd. consider it done within your budget.
  </p>

  <h2>Here are some secrets of small office interior design</h2>

  <p>It must address space management of the place.</p>
  <p>It should be a <strong>low-budget small office interior design.</strong></p>
  <p>It must convey the brand story.</p>
  <p>It should connect with the outdoors.</p>

  <p>
    To achieve these goals, Sahacarah Global Pvt. Ltd. an 
    <strong> online interior design services </strong> 
    platform work extensively on the technicalities. We create the best space management, 
    Vastu-based designs, modern interior designs, contemporary interior designs and lots more as desired by you. 
    Our virtual interior design service is available in Pan India and is fully customisable as per local needs.
  </p>

</section>
{/* OFFICE FAQ SECTION */}
<section className="office-faq-section">

  <h3>FAQs</h3>

  <h4>Q1. Which is the best online interior design service for office spaces in India?</h4>
  <p>
    Sahacarah Global Pvt. Ltd. gives the best online interior design service if you have a limited budget for office interiors.
  </p>

  <h4>Q2. What are the prices of a small office interior design?</h4>
  <p>
    Costing of the interiors of a place depends upon the floor plan of the place. However, you can get a free quotation 
    at Sahacarah Global Pvt. Ltd. by sharing your floor plan.
  </p>

  <h4>Q3. Are the interior designers at Sahacarah Global Pvt. Ltd. certified?</h4>
  <p>
    Yes, they are certified and hold experience of more than 8+ years of exemplary services in design.
  </p>

  <br />

  <p>It must address space management of the place.</p>
  <p>It should be a <strong>low-budget small office interior design.</strong></p>
  <p>It must convey the brand story.</p>
  <p>It should connect with the outdoors.</p>

</section>


    </div>
  );
};

export default Office;
