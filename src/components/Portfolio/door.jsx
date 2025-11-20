import React from "react";
import "./door.css";
import { useNavigate } from "react-router-dom";

import doorsBanner from "../../assets/do-bg.png";

// Import gallery images
import do1 from "../../assets/do1.png";
import do2 from "../../assets/do2.png";
import do3 from "../../assets/do3.png";
import do4 from "../../assets/do4.png";
import do5 from "../../assets/do5.png";
import do6 from "../../assets/do6.png";
import do7 from "../../assets/do7.png";
import do8 from "../../assets/do8.png";
import do9 from "../../assets/do9.png";
import do10 from "../../assets/do10.png";
import do11 from "../../assets/do11.png";
import do12 from "../../assets/do12.png";
import do13 from "../../assets/do13.png";
import do14 from "../../assets/do14.png";
import do15 from "../../assets/do15.png";

const Door = () => {

  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="doors-window-page">

      {/* HERO SECTION */}
      <section className="doors-hero">
        <div className="doors-overlay"></div>

        <img
          src={doorsBanner}
          alt="Doors Window Banner"
          className="doors-hero-image"
        />

        <h1 className="doors-hero-title">DOORS WINDOW</h1>

        <p className="doors-breadcrumb">
          Portfolio ~ DOORS WINDOW
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="doors-category-nav">
        <ul>
          <li className="active">DOORS WINDOW</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>

          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/residential/kids")}>KIDS ROOM</li>
          <li onClick={() => goTo("/pooja-room")}>POOJA ROOM</li>
          <li onClick={() => goTo("/entertainment-room")}>ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>

      {/* DOORS GALLERY */}
      <section className="doors-gallery">
        <img src={do1} alt="Door Design" />
        <img src={do2} alt="Door Design" />
        <img src={do3} alt="Door Design" />
        <img src={do4} alt="Door Design" />
        <img src={do5} alt="Door Design" />
        <img src={do6} alt="Door Design" />
        <img src={do7} alt="Door Design" />
        <img src={do8} alt="Door Design" />
        <img src={do9} alt="Door Design" />
        <img src={do10} alt="Door Design" />
        <img src={do11} alt="Door Design" />
        <img src={do12} alt="Door Design" />
        <img src={do13} alt="Door Design" />
        <img src={do14} alt="Door Design" />
        <img src={do15} alt="Door Design" />
      </section>

      {/* TEXT SECTION */}
      <section className="doors-text-section">
        <p>
          When it comes to interiors, how to skip doors and side windows that adds more
          elegance to your home’s beauty and charm. Nothing looks more gorgeous than a
          beautiful and inviting front door and windows. For Interiordesignwala, adding
          beauty to your home’s wall and windows is what we strive for. Our team of
          interior designers chooses a variety of styles from which to choose so that
          you can find the look and design you desire.
        </p>

        <p>
          Traditionally made doors and windows are available in wood, metal and fiberglass
          options that help homeowners achieve the design they want. On your request,
          we sometimes use craftsman-style doors and windows made of wood or fiberglass
          with straight lines. Whatever the popular options available in the market,
          we bring them all to enhance your home décor.
        </p>

        <p>
          Whether you prefer modern or rustic walls, we suggest modern-style front doors
          with blocked or square raised panels. Want to extend your walls and windows
          to add glamour? We offer all that you need. You can even ask us to custom
          design your wall interiors for a perfect fit.
        </p>

        <p>
          Our team of interior designers will help you renovate your windows and walls
          with modern interiors. Look through our wide gallery to see how we can help you.
        </p>
      </section>

    </div>
  );
};

export default Door;
