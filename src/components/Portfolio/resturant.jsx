import React from "react";
import "./resturant.css";
import { useNavigate } from "react-router-dom";

// Office Hero Banner Image
import r1 from "../../assets/r1.jpg";
import r2 from "../../assets/r2.jpg";
import r3 from "../../assets/r3.jpg";
import r4 from "../../assets/r4.jpg";
import r5 from "../../assets/r5.jpg";
import r6 from "../../assets/r6.jpg";
import r7 from "../../assets/r7.jpg";
import r8 from "../../assets/r8.jpg";
import r9 from "../../assets/r9.jpg";
import r10 from "../../assets/r10.jpg";
import r11 from "../../assets/r11.jpg";
import r12 from "../../assets/r12.jpg";
import r13 from "../../assets/r13.jpg";
import r14 from "../../assets/r14.jpg";
import r15 from "../../assets/r15.jpg";
import r16 from "../../assets/r16.jpg";

const resturant = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="office-page">

      {/* HERO SECTION */}
      <section className="office-hero">
        <div className="office-overlay"></div>

        <img src={r1} alt="Office Banner" className="office-hero-image" />

        <h1 className="office-hero-title">RESTURANT INTERIORS</h1>

        <p className="office-breadcrumb">
          Portfolio ~ RESTURANT INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="office-category-nav">
        <ul>
            <li className="active" onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gymm")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
         
        </ul>
      </section>
  <section className="office-gallery">
        <img src={r2} alt="Office Design" />
        <img src={r3} alt="Office Design" />
        <img src={r4} alt="Office Design" />
        <img src={r5} alt="Office Design" />
        <img src={r6} alt="Office Design" />
        <img src={r7} alt="Office Design" />
        <img src={r8} alt="Office Design" />
        <img src={r9} alt="Office Design" />
        <img src={r10} alt="Office Design" />
        <img src={r11} alt="Office Design" />
        <img src={r12} alt="Office Design" />
        <img src={r13} alt="Office Design" />
        <img src={r14} alt="Office Design" />
        <img src={r15} alt="Office Design" />
        <img src={r16} alt="Office Design" />
      </section>
      {/* OFFICE TEXT SECTION */}
<section className="office-text-section">

  <p>Sky's the limit when it comes to design and decorate restaurants. People do years of savings and plans for a perfect restaurant. At InteriorDesignwala, we offer you infinite designs depending upon the location, theme, and type of your restaurant. Our talented team of designers will discuss your requirement, location, and budget. We will create the blueprint for the design, so that our clients can make adjustments until the finalization of the design. Customer satisfaction is our prime objective. Our highly skilled team can create various types of designs at any location whether it is hillside restaurant, beach-side restaurant, or mid-city restaurant. From modern 21st century new themes to old classic 90s themes, to contemporary designs, we do it all. Other than building a new restaurant, we can also remodel the old one for you. Designing from reception to washrooms, kitchen, front desk, family halls, we try to blend everything beautifully with wall paint, radiant floor, airy and light rooms etc. We also provide our furniture and other decorative items like material, lighting, colors etc. Choosing us means hiring professionals who are experts in offering you several disparate choices in roof designs like- Shell Roof, low slung roof, Arch roof design, Open Roof, Colour Roof, Hidden Roof, Stair Roof etc depending upon our client taste and restaurant requirement. We will assure you to give your customers an experience of style, comfort, and alluring vision in your restaurant. Interior DesignWala will design each and every corner of your banquet hall beyond your imagination. Extensive outdoor, open floor plan, areas to welcome clients, spaces for storage, our team of talented designers take care of every crucial part. We understand that banquet halls host many corporate ceremonies and that is why, offer you custom interior designing too, so that you can use our expertise to blend in what you want in the theme. Our personalized services entirely depend upon what you seek but we assure you the best possible interior designing prices for restaurants and banquet halls.
  </p>

</section>


    </div>
  );
};

export default resturant;
