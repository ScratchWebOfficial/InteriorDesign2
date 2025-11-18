import React from "react";
import "./kitchen.css";
import { useNavigate } from "react-router-dom";

import kitchenBanner from "../../assets/kitchen1.jpg";

// Import all gallery images
import k1 from "../../assets/kitchen2.jpg";
import k2 from "../../assets/kitchen3.jpg";
import ks from "../../assets/kitchens.jpg";
import k4 from "../../assets/kitchen5.jpg";
import k5 from "../../assets/kitchen6.jpg";
import k6 from "../../assets/kitchen7.jpg";
import k7 from "../../assets/kitchen8.jpg";
import k8 from "../../assets/kitchen9.jpg";
import k9 from "../../assets/kitchen10.jpg";
import k10 from "../../assets/kitchen11.jpg";
import k11 from "../../assets/kitchen12.jpg";
import k12 from "../../assets/kitchen13.jpg";
import k13 from "../../assets/kitchen14.jpg";
import k14 from "../../assets/kitchen15.jpg";
import k15 from "../../assets/kitchen16.jpg";

const Kitchen = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={kitchenBanner} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">KITCHEN INTERIORS</h1>

        <p className="kitchen-breadcrumb">
          Portfolio — KITCHEN INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

          <li className="active" onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/residential/kids")}>KIDS ROOM</li>
          <li onClick={() => goTo("/pooja-room")}>POOJA ROOM</li>
          <li onClick={() => goTo("/entertainment-room")}>ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>
          <li onClick={() => goTo("/doors-window")}>DOORS WINDOW</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>

        </ul>
      </section>

      {/* KITCHEN GALLERY */}
      <section className="kitchen-gallery">
        <img src={k1} alt="Kitchen Design" />
        <img src={k2} alt="Kitchen Design" />
        <img src={ks} alt="Kitchen Design" />
        <img src={k4} alt="Kitchen Design" />
        <img src={k5} alt="Kitchen Design" />
        <img src={k6} alt="Kitchen Design" />
        <img src={k7} alt="Kitchen Design" />
        <img src={k8} alt="Kitchen Design" />
        <img src={k9} alt="Kitchen Design" />
        <img src={k10} alt="Kitchen Design" />
        <img src={k11} alt="Kitchen Design" />
        <img src={k12} alt="Kitchen Design" />
        <img src={k13} alt="Kitchen Design" />
        <img src={k14} alt="Kitchen Design" />
        <img src={k15} alt="Kitchen Design" />
      </section>

      {/* TEXT + FAQ SECTION */}
      <section className="kitchen-text-section">

        <h2>Kitchen Interior Designs that are Curated with Love and Warmth</h2>

        <p>
          Kitchen, a place to create meals and memories. Be it an Indian kitchen interiors or a Western kitchen design
          this place is always a centre of attraction..
        </p>

        <p>
          The backsplash should complement the cabinets.<br />
          Functional woodwork for ease of work<br />
          Proper lighting.<br />
        </p>

        <p>
          The designs of interior design wala give you the scope to experiment with themes and colours...
        </p>

        <h3>FAQs</h3>

        <h4>Q1. Which shape is best for small kitchen home interior design?</h4>
        <p>The L-shaped layout is the best and most functional...</p>

        <h4>Q2. How to place plants in the kitchen?</h4>
        <p>Use vertical space in the kitchen...</p>

        <h4>Q3. Can kitchen cabinets be made out of glass?</h4>
        <p>Sure. Glass is frequently used...</p>

        <h4>Q4. Which corner is best for the kitchen?</h4>
        <p>In Vastu-based homes...</p>

        <p><strong>Also Read:</strong> 15 Vastu Tips For Study Room Interior Design</p>

      </section>

    </div>
  );
};

export default Kitchen;
