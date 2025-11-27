import React from "react";
import "./pooja.css";
import { useNavigate } from "react-router-dom";

import poojaBanner from "../../assets/puja-bg.png";

// Pooja Room Gallery Images  
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import p11 from "../../assets/p11.png";
import p12 from "../../assets/p12.png";
import p13 from "../../assets/p13.png";
import p14 from "../../assets/p14.png";
import p15 from "../../assets/p15.png";

const PoojaRoom = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="pooja-page">

      {/* HERO SECTION */}
      <section className="pooja-hero">
        <div className="pooja-overlay"></div>

        <img 
          src={poojaBanner} 
          alt="Pooja Room Banner" 
          className="pooja-hero-image" 
        />

        <h1 className="pooja-hero-title">POOJA ROOM</h1>

        <p className="pooja-breadcrumb">
          Portfolio ~ POOJA ROOM
        </p>
      </section>
      <section className="pooja-category-nav">
        <ul>
          <li className="active">POOJA ROOM</li>
          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/residential/kids")}>KIDS ROOM</li>
          <li onClick={() => goTo("/entertainment-room")}>ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>
          <li onClick={() => goTo("/doors-window")}>DOORS WINDOW</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>

      {/* POOJA ROOM GALLERY */}
      <section className="pooja-gallery">
        <img src={p1} alt="Pooja Design" />
        <img src={p2} alt="Pooja Design" />
        <img src={p3} alt="Pooja Design" />
        <img src={p4} alt="Pooja Design" />
        <img src={p5} alt="Pooja Design" />
        <img src={p6} alt="Pooja Design" />
         <img src={p7} alt="Pooja Design" />
          <img src={p8} alt="Pooja Design" />
           <img src={p9} alt="Pooja Design" />
            <img src={p10} alt="Pooja Design" />
             <img src={p11} alt="Pooja Design" />
              <img src={p12} alt="Pooja Design" />
               <img src={p13} alt="Pooja Design" />
                <img src={p14} alt="Pooja Design" />
                 <img src={p15} alt="Pooja Design" />
      </section>
<section className="pooja-text-section">
        <h2>Blissful Pooja Room Designs That Bring Peace of Mind</h2>

        <p>
          Just as the horizon connects the land and the sky similarly Pooja room is the place that
          connects your soul and the body. No matter which religion you belong to this place contains
          the most divine vibes in any home. In modern times due to increasing demand for small spaces,
          this space has also shrunken but not the roots. Thus there is an increasing trend of making
          <strong> pooja rooms in living rooms </strong> and other possible spaces. At Sahacarah Global Pvt. Ltd.
          we keep in mind to give divine aesthetics to this corner.
        </p>

        <h3>Some key points to remember are–</h3>

        <p>Brighten dark corners in pooja aesthetics</p>
        <p>Soft shade ambience that creates positivity</p>
        <p>Providing space with functional accessories.</p>
        <p>Ventilations</p>

        <p>
          When you choose Sahacarah Global Pvt. Ltd., we say yes to customisation. In our land of precious cultures,
          we honour every religion, believing that devotion and spirituality can have many faces. Thus, in our
          <strong> pooja room interior </strong> designs, you can choose to customise and create your world
          where you can find a body–soul connection.
        </p>
      </section>
              {/* FAQ SECTION */}
      <section className="pooja-faq-section">
        <h3>FAQs</h3>

        <h4>Q1. Where can we get the best small pooja room designs online?</h4>
        <p>
          Sahacarah Global Pvt. Ltd. is one of the best interior design solution providers in the industry.
        </p>

        <h4>Q2. What lights can be used in pooja room interiors?</h4>
        <p>
          Check out the best pooja room interiors for reference at Interior Design Wala.
        </p>

        <h4>Q3. Which colours are best for pooja room interior designs?</h4>
        <p>
          Soft and neutral colours such as cream, light yellow, beige etc are popular choices for pooja 
          room designs because they make your pooja room look more spacious and big.
        </p>

        <p>
          <strong>Also Read:</strong> Integrating Puja Room Designs into 3 BHK Home Interiors
        </p>
      </section>

    </div>
  );
};

export default PoojaRoom;
