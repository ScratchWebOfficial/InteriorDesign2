import React from "react";
import "./dining.css";
import { useNavigate } from "react-router-dom";

import diningBanner from "../../assets/dining-banner.jpg";
import dd1 from "../../assets/dd1.png";
import dd2 from "../../assets/dd2.png";
import dd3 from "../../assets/dd3.png";
import dd4 from "../../assets/dd4.png";
import dd5 from "../../assets/dd5.png";
import dd6 from "../../assets/dd6.png";
import dd7 from "../../assets/dd7.png";
import dd8 from "../../assets/dd8.png";
import dd9 from "../../assets/dd9.png";
import dd10 from "../../assets/dd10.png";
import dd11 from "../../assets/dd11.png";
import dd12 from "../../assets/dd12.png";
import dd13 from "../../assets/dd13.png";
import dd14 from "../../assets/dd14.png";
import dd15 from "../../assets/dd15.png";

const Dining = () => {

  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="dining-page">

      {/* HERO SECTION */}
      <section className="dining-hero">
        <div className="dining-overlay"></div>
        <img src={diningBanner} className="dining-hero-image" alt="Dining Banner" />
        <h1 className="dining-hero-title">DINING INTERIORS</h1>
        <p className="dining-breadcrumb">Portfolio ~ DINING INTERIORS</p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="dining-category-nav">
        <ul>
          <li className="active" onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
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

      {/* DINING GALLERY */}
      <section className="dining-gallery">
        <img src={dd1} alt="Dining Design" />
        <img src={dd2} alt="Dining Design" />
        <img src={dd3} alt="Dining Design" />
        <img src={dd4} alt="Dining Design" />
        <img src={dd5} alt="Dining Design" />
        <img src={dd6} alt="Dining Design" />
        <img src={dd7} alt="Dining Design" />
        <img src={dd8} alt="Dining Design" />
        <img src={dd9} alt="Dining Design" />
        <img src={dd10} alt="Dining Design" />
        <img src={dd11} alt="Dining Design" />
        <img src={dd12} alt="Dining Design" />
        <img src={dd13} alt="Dining Design" />
        <img src={dd14} alt="Dining Design" />
        <img src={dd15} alt="Dining Design" />
      </section>
      {/* DINING TEXT SECTION */}
<section className="dining-text-section">
  <p>
    Our <strong>interior design ideas for study room</strong> that reflects your inquisitiveness to learn new things. 
    It’s a corner that needs to be designed and set up intelligently. Interiordesignwala understands how you 
    want to have a clam and quite study room without any noise or disturbance. Our team of interior designers 
    takes even every single detail very seriously. They start it from putting study tables and chair in place to 
    give your study room a clutter free look. They customise your study table as per your requirements and on the 
    basis of the height and size of the table. A comfortable chair always helps you improve your concentration 
    and give you good health. You can visualize our expertise in the way we design your study room that’s full of 
    books and needs enough space for your treasure of knowledge. By adding extra storage space with cabinets, 
    we ensure that things are handy while you are studying. Our team of interior designers designs your study 
    room to make your room well-lit and airy. We ensure that lights in your study room should not be very dim 
    or too bright. They balance the light and neutralize inside the study room as vision and comfort. If the 
    space in study room allows additional sitting area near a corner or by the window side to give you more space 
    so that you have more space to read and learn. We paint walls in your study room so that the ambience of the 
    room don’t makes you feel bored and gloomy. If space in the study room permits us, we sometime keep bed 
    inside study room to let you relax and study for hours. Our expert interior designers decorate and style 
    your study room with motivating and inspiring thing. Better spacing influences your study and motivates 
    you to concentrate more on your studies. Want to know more on how to decorate your study, call our experts 
    now for <strong>latest study room design</strong>.
  </p>
</section>

    </div>
  );
};

export default Dining;
