import React from "react";
import "./gym.css";
import { useNavigate } from "react-router-dom";

import gymBanner from "../../assets/g-bg.png";

// GALLERY IMAGES
import gm1 from "../../assets/g1.png";
import gm2 from "../../assets/g2.png";
import gm3 from "../../assets/g3.png";
import gm4 from "../../assets/g4.png";
import gm5 from "../../assets/g5.png";
import gm6 from "../../assets/g6.png";
import gm7 from "../../assets/g7.png";
import gm8 from "../../assets/g8.png";
import gm9 from "../../assets/g9.png";
import gm10 from "../../assets/g10.png";
import gm11 from "../../assets/g11.png";
import gm12 from "../../assets/g12.png";
import gm13 from "../../assets/g13.png";
import gm14 from "../../assets/g14.png";
import gm15 from "../../assets/g15.png";

const Gym = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="gym-page">

      {/* HERO SECTION */}
      <section className="gym-hero">
        <div className="gym-overlay"></div>

        <img 
          src={gymBanner} 
          alt="Gym Yoga Banner" 
          className="gym-hero-image"
        />

        <h1 className="gym-hero-title">GYM/YOGA CENTER INTERIORS</h1>

        <p className="gym-breadcrumb">
          Portfolio  ~  GYM/ YOGA CENTER INTERIORS
        </p>
      </section>


      {/* CATEGORY NAVIGATION */}
      <section className="gym-category-nav">
        <ul>
          <li className="active">GYM/ YOGA CENTER INTERIORS</li>

          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/ COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/ CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>

          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
        </ul>
      </section>


      {/* GYM GALLERY */}
      <section className="gym-gallery">
        <img src={gm1} alt="Gym Design" />
        <img src={gm2} alt="Gym Design" />
        <img src={gm3} alt="Gym Design" />
        <img src={gm4} alt="Gym Design" />
        <img src={gm5} alt="Gym Design" />
        <img src={gm6} alt="Gym Design" />
        <img src={gm7} alt="Gym Design" />
        <img src={gm8} alt="Gym Design" />
        <img src={gm9} alt="Gym Design" />
        <img src={gm10} alt="Gym Design" />
        <img src={gm11} alt="Gym Design" />
        <img src={gm12} alt="Gym Design" />
         <img src={gm13} alt="Gym Design" />
          <img src={gm14} alt="Gym Design" />
          <img src={gm15} alt="Gym Design" />
      </section>
        {/* TEXT SECTION */}
<section className="gym-text-section">

  <h2 className="gym-text-title">Gym Interior Design Online</h2>

  <p>
    The frequenting population is also increasing use of gym and yoga centres. Being fit and healthy is a priority for many working males and females. At Sahacarah Global Pvt. Ltd., we enhance your fitness with extraordinary gym and yoga centre interior designing. We help your clients with graceful interior and bleached-out designs. Transforming gym and yoga centres into new designs is a key to attract clients. A perfect looking centre can attract more and more fitness enthusiasts easily. 
  </p>

  <p>
    Certain fitness devotees complain about not so good interiors as the main cause of leaving a fitness centre, hire an interior designer so that you don’t face this issue. We provide you deeply polished and incredibly designed interiors so that your clients stay with you forever. Not only that, a clean and tidy exercise spot thrusts healthy lifestyle and assures your clients that they are at the right place.
  </p>

  <p>
    We have a huge range of already designed themes ready to make your gym beautiful. Moreover, InteriorDesignWala is always ready to offer you best custom designed themes as per your requirements. Our team take the challenge of brilliantly crafting all your  
    <strong> Gym Interior Design </strong> 
    and Yoga Centre walls innovation through highly motivating quotes everywhere.
  </p>

  <p>
    We seamlessly integrate different section like training area, heavy-workout section, warm-up area etc. Our yoga centre designing focuses on perfect flooring for accurate postures. We believe that vinyl, marble, concrete and linoleum is not a good option for flooring and that’s why offer laminate/hardwood, cork, or bamboo for flooring.
  </p>

  <p>
    Moreover, we try to make it more in natural light than artificial ones and install ambient lighting instead of fluorescent. For yoga centres, we try to bring beautiful candles to the design unless there are no fire damage possibilities.
  </p>

  <p>
    Our approach of going step by step with your requirements help us sew the cutting-edge personalized Yoga and 
    <strong> Gym Interior Design Online </strong>
    for you. We promise you to offer the most cost-effective designing.
  </p>

</section>

    </div>
  );
};

export default Gym;
