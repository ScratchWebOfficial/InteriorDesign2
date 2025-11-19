import React from "react";
import "./drawing.css";
import { useNavigate } from "react-router-dom";


// Import all gallery images
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";
import d5 from "../../assets/d5.jpg";
import d6 from "../../assets/d6.jpg";
import d7 from "../../assets/d7.jpg";
import d8 from "../../assets/d8.jpg";
import d9 from "../../assets/d9.jpg";
import d10 from "../../assets/d10.jpg";
import d11 from "../../assets/d11.jpg";
import d12 from "../../assets/d12.jpg";
import d13 from "../../assets/d13.jpg";
import d14 from "../../assets/d14.jpg";
import d15 from "../../assets/d15.jpg";
import d16 from "../../assets/d16.jpg";

const Drawing = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={d1} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">DRAWING ROOM INTERIORS</h1>

        <p className="kitchen-breadcrumb">
          Portfolio ~DRAWING ROOM INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

          <li className="active" onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
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
        <img src={d2} alt="Kitchen Design" />
        <img src={d3} alt="Kitchen Design" />
        <img src={d4} alt="Kitchen Design" />
        <img src={d5} alt="Kitchen Design" />
        <img src={d6} alt="Kitchen Design" />
        <img src={d7} alt="Kitchen Design" />
        <img src={d8} alt="Kitchen Design" />
        <img src={d9} alt="Kitchen Design" />
        <img src={d10} alt="Kitchen Design" />
        <img src={d11} alt="Kitchen Design" />
        <img src={d12} alt="Kitchen Design" />
        <img src={d13} alt="Kitchen Design" />
        <img src={d14} alt="Kitchen Design" />
        <img src={d15} alt="Kitchen Design" />
        <img src={d16} alt="Kitchen Design" />
      </section>

      {/* TEXT + FAQ SECTION */}
      <section className="kitchen-text-section">

        <h2>Live Life King Size with Modern Drawing Room Designs</h2>

        <p>
          Interior Designwala allows bringing the most out of the space and the best of the style while conceptualizing any drawing room interior design. Our designers have hands-on experience in designing modern, traditional, bohemian, Victorian etc and whatnot styles in giving homes a cosy and thematic appearance. Our speciality in bringing life to the rooms with our artistic wall designs, modern modular furniture, ambient lighting etc makes the spaces luxurious and creates your aura.

Interiordesignwala believes that if you have the ability you can make each corner speak about its beauty and you can do it by giving it an extra grace, whether it's a bedroom or a drawing room. While conceptualizing drawing room interior ideas there are certain key points to remember.
        </p>

        <p>
          The drawing room must not look cluttured<br />
          It must follow one theme.<br />
          The sitting space must be comfortable.<br />
          Mixing up soft and bright lights.<br/>
        </p>

        <p>
          Interiordesignwala.com gives you the best possible spacious and stylish comfy drawing room décor ideas. We take care of your space requirement and manage it effortlessly to obtain a wonderful outcome.
        </p>

        <h3>FAQs</h3>

        <h4>Q1. Where can we get the best interior designs?</h4>
  <p>At InteriorDesignWala you can get best<strong>interior designs</strong>  online and execute the drawings at your own pace.</p>

  <h4>Q2. How to lower the cost of interior designs?</h4>
  <p>Most interior designing firms charge extra for their expertise in design and execution. A smart approach is to get design specifications from a designer and then execute them with local contractors to reduce cost.</p>

  <h4>Q3. How to create extra sitting space in small drawing room designs?</h4>
  <p>Smart choices of modular and convertible furniture can resolve this problem.</p>

  <h4>Q4. Which lights are best for drawing room designs?</h4>
  <p>Ambient lights, accent lights and decorative lights are the most popular options for drawing room designs.</p>

  <p>Also Read:<strong>Top 10 Tips for Modern House Interiors by Interior Design Wala</strong></p>


      </section>

    </div>
  );
};

export default Drawing;
