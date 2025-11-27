import React from "react";
import "./showroom.css";
import { useNavigate } from "react-router-dom";

import showroomBanner from "../../assets/showroom-banner.png";

// Import Showroom Images
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import s10 from "../../assets/s10.png";
import s11 from "../../assets/s11.png";
import s12 from "../../assets/s12.png";
import s13 from "../../assets/s13.png";
import s14 from "../../assets/s14.png";
import s15 from "../../assets/s15.png";

const Showroom = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="showroom-page">

      {/* HERO SECTION */}
      <section className="showroom-hero">
        <div className="showroom-overlay"></div>

        <img
          src={showroomBanner}
          alt="Showroom Banner"
          className="showroom-hero-image"
        />

        <h1 className="showroom-hero-title">SHOWROOM INTERIORS</h1>

        <p className="showroom-breadcrumb">
          Portfolio — SHOWROOM INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="showroom-category-nav">
        <ul>
          <li className="active">SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
        </ul>
      </section>

      {/* SHOWROOM GALLERY SECTION */}
      <section className="showroom-gallery">
        <img src={s1} alt="Showroom Interior" />
        <img src={s2} alt="Showroom Interior" />
        <img src={s3} alt="Showroom Interior" />
        <img src={s4} alt="Showroom Interior" />
        <img src={s5} alt="Showroom Interior" />
        <img src={s6} alt="Showroom Interior" />
         <img src={s7} alt="Showroom Interior" />
          <img src={s8} alt="Showroom Interior" />
           <img src={s9} alt="Showroom Interior" />
            <img src={s10} alt="Showroom Interior" />
             <img src={s11} alt="Showroom Interior" />
              <img src={s12} alt="Showroom Interior" />
               <img src={s13} alt="Showroom Interior" />
                <img src={s14} alt="Showroom Interior" />
                 <img src={s15} alt="Showroom Interior" />
      </section>
      {/* SHOWROOM TEXT SECTION */}
<section className="showroom-text-section">
  <p>
    Successful showrooms take time to build up and need the professional skills of a company 
    that is aware of the problems of the process. Showroom interior designing is a creative 
    process the goal of which is to catch attention and impart audience with the creativity 
    to get pregnant of a way of life choice that relates to the development being considered – 
    this is the aim of the shop, to make audience feel that they are part of the idea elicited 
    by the home. For Sahacarah Global Pvt. Ltd., finishing touches and embellishments must be thoroughly 
    thought while doing showroom interior designing. We are aware of the marketplace and have a 
    proven record. We present and understand the particulars of existing interiors.
  </p>

  <p>
    Now, if you think that showroom interior would cost you much, you are completely wrong! 
    Although it is true that prices vary based on the place you live and the requirement for 
    the developers, but still the option is affordable. Sahacarah Global Pvt. Ltd. professionals are 
    of great help here. They exactly know how to catch the creativity of the potential customers 
    and so they style the exact residence accordingly increasing the revenue benefit of the exact 
    residence.
  </p>

  <p>
    Whether you want to sell your home quick or just want to entertain some guests at your home, 
    you would definitely want you're the best position to find look beautiful. What we usually do 
    is to decorate showroom interiors is to place some real flowers on the tables, position new 
    shower curtains and white towels for bathrooms, choose colour-coordinated seat cushions for 
    sofas, add spice rack and kitchen surfaces and maintain the landscape.
  </p>
</section>


    </div>
  );
};

export default Showroom;
