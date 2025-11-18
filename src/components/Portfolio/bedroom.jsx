import React from "react";
import "./bedroom.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/bedroom1.jpg";
import img2 from "../../assets/bedroom2.jpg";
import img3 from "../../assets/bedroom3.jpg";
import img4 from "../../assets/bedroom4.jpg";
import img5 from "../../assets/bedroom5.jpg";
import img6 from "../../assets/bedroom6.jpg";
import img7 from "../../assets/bedroom7.jpg";
import img8 from "../../assets/bedroom8.jpg";
import img9 from "../../assets/bedroom9.jpg";
import img10 from "../../assets/bedroom10.jpg";
import img11 from "../../assets/bedroom11.jpg";
import img12 from "../../assets/bedroom12.jpg";
import img13 from "../../assets/bedroom13.jpg";
import img14 from "../../assets/bedroom14.jpg";
import img15 from "../../assets/bedroom15.jpg";
import img16 from "../../assets/bedroom16.jpg";

const Bedroom = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bedroom-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={img1} alt="Bedroom Hero" className="hero-image" />
        <h1 className="hero-title">BEDROOM INTERIORS</h1>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="category-nav">
        <ul>
          <li className="active" onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
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
          <li onClick={() => goTo("/tv-cabinet")}>TV</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>

      {/* IMAGE GALLERY GROUP 1 */}
      <section className="image-grid">
        <img src={img2} alt="Bedroom" />
        <img src={img3} alt="Bedroom" />
        <img src={img4} alt="Bedroom" />
      </section>

      {/* IMAGE GALLERY GROUP 2 */}
      <section className="image-grid">
        <img src={img5} alt="Bedroom" />
        <img src={img6} alt="Bedroom" />
        <img src={img7} alt="Bedroom" />
      </section>

      {/* IMAGE GALLERY GROUP 3 */}
      <section className="image-grid">
        <img src={img8} alt="Bedroom" />
        <img src={img9} alt="Bedroom" />
        <img src={img10} alt="Bedroom" />
      </section>

      {/* IMAGE GALLERY GROUP 4 */}
      <section className="image-grid">
        <img src={img11} alt="Bedroom" />
        <img src={img12} alt="Bedroom" />
        <img src={img13} alt="Bedroom" />
      </section>

      {/* IMAGE GALLERY GROUP 5 */}
      <section className="image-grid">
        <img src={img14} alt="Bedroom" />
        <img src={img15} alt="Bedroom" />
        <img src={img16} alt="Bedroom" />
      </section>

      {/* TEXT SECTION */}
      <section className="text-section">
        <h2>Considerations For A Simple Bedroom Interior Design</h2>
        <p>
          After getting tired all day when we want to relax and make ourselves comfortable.
          Bedrooms are that one place which paper us. Does a bedroom have cosy arms like a
          mother’s? No! Then what makes us feel that way? It’s the surroundings! or precisely
          it's the <strong>bedroom interior design</strong> that gives us the warmth that we bury all issues in
          its comfort. Yes! That’s the power of a fine home interior.
        </p>

        <h3>Interior design wala focus on following key points in bedroom makeovers</h3>
        <ul>
          <li>Create budget-oriented design solutions.</li>
          <li>Provide maximum storage space in <strong>small bedroom interior designs</strong>.</li>
          <li>Colours and patterns must bring warmth to interiors.</li>
          <li>Make use of every nook and corner.</li>
        </ul>

        <p>
          Visualize the uniqueness and elegance in our <strong>modern bedroom interior design</strong>,
          contemporary bedroom interiors, bedrooms of a luxury bungalow and lots more.
          So choose Interior Design Wala for cosy, comfy and smart bedroom interior designs.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h3>FAQs?</h3>

        <h4>Q1. Which colours are trending in a modern bedroom interior design?</h4>
        <p>
          Modern bedroom interiors focus on the minimalist concept and take influence from
          Western homes. A wide use of neural colours as -white, cream, beige etc with a slight
          touch of vibrant colours is trending in modern bedroom interior designs.
        </p>

        <h4>Q2. How to increase space while small bedroom interior design?</h4>
        <p>
          Modern techniques such as CAD and 3D rendering that are used by Interior Design Wala help in a 360 view of the site which helps in creating optimum
          design solutions and utilise the space smartly.
        </p>

        <h4>Q3. Does Interior Design Wala provide online designs?</h4>
        <p>Yes. Interior design wala provide online design solutions for all interior designs.</p>
      </section>

    </div>
  );
};

export default Bedroom;
