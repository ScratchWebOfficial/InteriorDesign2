import React from "react";
import "./hospital.css";
import { useNavigate } from "react-router-dom";

// Office Hero Banner Image
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import c8 from "../../assets/c8.jpg";
import c9 from "../../assets/c9.jpg";
import c10 from "../../assets/c10.jpg";
import c11 from "../../assets/c11.jpg";
import c12 from "../../assets/c12.jpg";
import c13 from "../../assets/c13.jpg";
import c14 from "../../assets/c14.jpg";
import c15 from "../../assets/c15.jpg";
import c16 from "../../assets/c16.jpg";

const hospitaL = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="office-page">

      {/* HERO SECTION */}
      <section className="office-hero">
        <div className="office-overlay"></div>

        <img src={c1} alt="Office Banner" className="office-hero-image" />

        <h1 className="office-hero-title">HOSPITAL/CLINIC INTERIORS</h1>

        <p className="office-breadcrumb">
          Portfolio ~ HOSPITAL/CLINIC INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="office-category-nav">
        <ul>
            <li className="active" onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
         
        </ul>
      </section>
  <section className="office-gallery">
        <img src={c2} alt="Office Design" />
        <img src={c3} alt="Office Design" />
        <img src={c4} alt="Office Design" />
        <img src={c5} alt="Office Design" />
        <img src={c6} alt="Office Design" />
         <img src={c7} alt="Office Design" />
        <img src={c8} alt="Office Design" />
        <img src={c9} alt="Office Design" />
        <img src={c10} alt="Office Design" />
        <img src={c11} alt="Office Design" />
        <img src={c12} alt="Office Design" />
        <img src={c13} alt="Office Design" />
        <img src={c14} alt="Office Design" />
        <img src={c15} alt="Office Design" />
        <img src={c16} alt="Office Design" />
      </section>
      {/* OFFICE TEXT SECTION */}
<section className="office-text-section">

  <p>Hospitals and clinics are the places where various people come to address their problems and get solutions, and if a person is already sick and wants soothing relaxation, then the interior plays an important role. Interiordesignwala.com takes care of all the safety measures, comfort, and smoothness of the interior while designing it so that a person can enjoy all three of them. Hospitals serve a large community and have comparatively more rush. There are various factors one should keep in mind while doing HOSPITAL BUILDING INTERIOR DESIGN. All floors should be precisely accessible, lighting should be warmer, color should be soothing, and proper space planning for equipment is a must. When searching for online interior design for hospital buildings, one should definitely consider all the above-stated points and should decide wisely.

    
  </p>

  <p>We establish medical services conditions that supplement and improve our clients' widespread objective to give sympathetic consideration. Our collaborative design process ensures the delivery of enduring environments which address the needs of your community while balancing issues such as image, budget, functional efficiency, future flexibility, and ongoing maintenance. We understand that the hospital interiors are complex. Our professional interior designing team will work together with your group to identify and execute protected, viable, steady settings by offsetting modern innovation with admittance to nature, upgrading efficiency and confidence with insightful enumerating and powerful space use; obliging adaptability with cautious preparation. You can get in touch with us at ‪+91 99994 23006‬ to get a brief of our process of designing.


  </p>

</section>


    </div>
  );
};

export default hospitaL;
