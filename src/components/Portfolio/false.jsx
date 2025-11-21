import React from "react";
import "./false.css";
import { useNavigate } from "react-router-dom";

// Import all gallery images
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";
import f5 from "../../assets/f5.jpg";
import f6 from "../../assets/f6.jpg";
import f7 from "../../assets/f7.jpg";
import f8 from "../../assets/f8.jpg";
import f9 from "../../assets/f9.jpg";
import f10 from "../../assets/f10.jpg";
import f11 from "../../assets/f11.jpg";
import f12 from "../../assets/f12.jpg";
import f13 from "../../assets/f13.jpg";
import f14 from "../../assets/f14.jpg";
import f15 from "../../assets/f15.jpg";
import f16 from "../../assets/f16.jpg";

const False = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={f1} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">FALSE CEILING</h1>

        <p className="kitchen-breadcrumb">
          Portfolio ~ FALSE CEILING
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

          <li className="active" onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/residential/kids")}>KIDS ROOM</li>
          <li onClick={() => goTo("/pooja-room")}>POOJA ROOM</li>
          <li onClick={() => goTo("/entertainment-room")}>ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/doors-window")}>DOORS WINDOW</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>

        </ul>
      </section>

      {/* KITCHEN GALLERY */}
      <section className="kitchen-gallery">
        <img src={f2} alt="Kitchen Design" />
        <img src={f3} alt="Kitchen Design" />
        <img src={f4} alt="Kitchen Design" />
        <img src={f5} alt="Kitchen Design" />
        <img src={f6} alt="Kitchen Design" />
        <img src={f7} alt="Kitchen Design" />
        <img src={f8} alt="Kitchen Design" />
        <img src={f9} alt="Kitchen Design" />
        <img src={f10} alt="Kitchen Design" />
        <img src={f11} alt="Kitchen Design" />
        <img src={f12} alt="Kitchen Design" />
        <img src={f13} alt="Kitchen Design" />
        <img src={f14} alt="Kitchen Design" />
        <img src={f15} alt="Kitchen Design" />
        <img src={f16} alt="Kitchen Design" />
      </section>

      {/* TEXT + FAQ SECTION */}
      <section className="kitchen-text-section">

        <p>
         False ceiling is the additional ceiling installed below the main roof. Apart from increasing appearance of a room, these are liked across houses for their capability to

protect the space from warm. As getting the false ceiling is an expensive event, it is important to get every details right. False Ceiling Designs is one the most known

terms in the development area, which is otherwise known as false ceiling. It has become the application set up in most of the inside configurations. They add value and

wonder to your present or new building home's style providing an entirely new look to your interior.

</p>
<p>
    This relies on the place where you need to set up the setting. Like party places, social events, and other public locations expanded flooring are mostly recommended. Mold proof flooring are used in medical centres while thermoregulation (controlling heat and weather) to be used in cooking areas. The benefit of using false ceiling is that it can be easily eliminated and reinstalled any time with simple modifications. The cost-effective price, flame level of resistance, wetness control, and simplicity for cleaning is other benefits that can be acquired when you choose false ceiling for your home interior.

</p>
<p>
    Interiordesignwala believes that your modern space will need false ceiling with smooth structural styles. Such a roof can be made of light and portable flooring with the material you choose such as fibreglass, vinyl-coated gypsum, or steel. This roof will be perfect in your youngster space or a cinema space, as it will reduce the noise into the room. Contact us to know how we could help you in having a false ceiling designs online right for your home.
</p>
      </section>

    </div>
  );
};

export default False;
