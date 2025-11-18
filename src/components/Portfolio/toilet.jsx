import React from "react";
import "./toilet.css";
import { useNavigate } from "react-router-dom";

import toiletBanner from "../../assets/toilet-back.png";

// Import Toilet Gallery Images
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import t6 from "../../assets/t6.png";
import t7 from "../../assets/t7.png";
import t8 from "../../assets/t8.png";
import t9 from "../../assets/t9.png";
import t10 from "../../assets/t10.png";
import t11 from "../../assets/t11.png";
import t12 from "../../assets/t12.png";
import t13 from "../../assets/t13.png";
import t14 from "../../assets/t14.png";
import t15 from "../../assets/t15.png";


const Toilet = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="toilet-page">

      {/* HERO SECTION */}
      <section className="toilet-hero">
        <div className="toilet-overlay"></div>

        <img src={toiletBanner} alt="Toilet Banner" className="toilet-hero-image" />

        <h1 className="toilet-hero-title">TOILET INTERIORS</h1>

        <p className="toilet-breadcrumb">
          Portfolio ~ TOILET INTERIORS
        </p>
      </section>

     

      {/* CATEGORY NAVIGATION */}
      <section className="toilet-category-nav">
        <ul>
           <li className="active" onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
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
       {/* ★ TOILET GALLERY SECTION ADDED HERE ★ */}
      <section className="toilet-gallery">
        <img src={t1} alt="Toilet Design" />
        <img src={t2} alt="Toilet Design" />
        <img src={t3} alt="Toilet Design" />
        <img src={t4} alt="Toilet Design" />
        <img src={t5} alt="Toilet Design" />
        <img src={t6} alt="Toilet Design" />
         <img src={t7} alt="Toilet Design" />
          <img src={t8} alt="Toilet Design" />
           <img src={t9} alt="Toilet Design" />
            <img src={t10} alt="Toilet Design" />
             <img src={t11} alt="Toilet Design" />
              <img src={t12} alt="Toilet Design" />
               <img src={t13} alt="Toilet Design" />
                <img src={t14} alt="Toilet Design" />
                 <img src={t15} alt="Toilet Design" />
      </section>
{/* TOILET TEXT SECTION */}
<section className="toilet-text-section">

  <h2>Reinvent Your Bathroom Interior Design</h2>

  <p>
    Are you planning for home interiors? But have escaped the bathrooms? Is there a need to design bathrooms too?
    Yes! This is one of the most frequent questions that come along to us as online Interior Design professionals.
    Why there is a need for bathroom interiors? The answer to this question is a question only. 
    Do you like what you like most in hotel rooms? The ambience, room cleaning, and bathrooms.
    Aren’t they very clean, organised and uncluttered? The bathroom fitting and interiors make you feel hygienic and 
    worth the money. So why can’t we incorporate this technique in our 
    <strong> bathroom interior designs?</strong> All you need is just a nice design and meticulously chosen bathroom fittings,
    and you are all set to enjoy luxury bathing every day.
  </p>

  <br />

  <p><strong>Functional and safe design</strong></p>
  <p><strong>Soothing lights</strong></p>
  <p><strong>Maximum storage space to declutter the space</strong></p>
  <p><strong>Utilise every corner of the space.</strong></p>

  <p>
    It is important to remember safety when designing 
    <strong> bathroom interior design online.</strong> 
    Thus Interior Design Wala, with its decade of service years in online interior design reinvent your bathing experience.
  </p>

  <h3>FAQs</h3>

  <h4>Q1. Which tiles are used for flooring in a bathroom interior design?</h4>
  <p>
    Interior Design Wala prefer using anti-skid tiles for bathroom flooring.
  </p>

  <h4>Q2. What is the transparent partition in the bathrooms called?</h4>
  <p>
    Transparent partitions in the bathrooms are called shower cubicles. 
    They can be in closed or open format.
  </p>

  <h4>Q3. Where can we get the best bathroom interior design online?</h4>
  <p>
    Interior Design Wala provides the best online interior services as well as free quotations.
  </p>

  <h4>Q4. What makes a bathroom interior look luxurious?</h4>
  <p>
    It is a blend of all designs but the most impact is done by bathroom fittings, mirror backsplash 
    and choice of mirror itself.
  </p>

  <p>
    <strong>Also Read: </strong>
    Why do colors play an important role in visualizing home interior design online?
  </p>

</section>

    </div>
  );
};

export default Toilet;
