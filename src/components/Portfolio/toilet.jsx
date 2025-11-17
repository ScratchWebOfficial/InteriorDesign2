import React from "react";
import "./toilet.css";
import { useNavigate } from "react-router-dom";

import toiletBanner from "../../assets/toilet-back.png";

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
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/living-area")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>

          <li className="active" onClick={() => goTo("/toilet")}>TOILET INTERIORS</li>

          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/kids-room")}>KIDS ROOM</li>
          <li onClick={() => goTo("/pooja-room")}>POOJA ROOM</li>
          <li onClick={() => goTo("/entertainment-room")}>ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>
          <li onClick={() => goTo("/doors-window")}>DOORS WINDOW</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>


    </div>
  );
};

export default Toilet;
