import React from "react";
import "./entertain.css";
import { useNavigate } from "react-router-dom";

import entertainmentBanner from "../../assets/enter-bg.png";

// ENTERTAINMENT GALLERY IMAGES
import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.png";
import e4 from "../../assets/e4.png";
import e5 from "../../assets/e5.png";
import e6 from "../../assets/e6.png";
import e7 from "../../assets/e7.png";
import e8 from "../../assets/e8.png";
import e9 from "../../assets/e9.png";
import e10 from "../../assets/e10.png";
import e11 from "../../assets/e11.png";
import e12 from "../../assets/e12.png";
import e13 from "../../assets/e13.png";
import e14 from "../../assets/e14.png";
import e15 from "../../assets/e15.png";

const Entertainment = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="entertainment-page">

      {/* HERO SECTION */}
      <section className="entertainment-hero">
        <div className="entertainment-overlay"></div>

        <img 
          src={entertainmentBanner}
          alt="Entertainment Banner"
          className="entertainment-hero-image"
        />

        <h1 className="entertainment-hero-title">ENTERTAINMENT ROOM</h1>

        <p className="entertainment-breadcrumb">
          Portfolio ~ ENTERTAINMENT ROOM
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="entertainment-category-nav">
        <ul>
          <li className="active">ENTERTAINMENT ROOM</li>
          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/study-room")}>STUDY ROOM</li>
          <li onClick={() => goTo("/residential/kids")}>KIDS ROOM</li>
          <li onClick={() => goTo("/pooja-room")}>POOJA ROOM</li>
          <li onClick={() => goTo("/stairs")}>STAIRS</li>
          <li onClick={() => goTo("/doors-window")}>DOORS WINDOW</li>
          <li onClick={() => goTo("/tv-cabinet")}>TV CABINET</li>
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>

      {/* ENTERTAINMENT GALLERY (Same style as Kitchen) */}
      <section className="entertainment-gallery">
        <img src={e1} alt="Entertainment Room" />
        <img src={e2} alt="Entertainment Room" />
        <img src={e3} alt="Entertainment Room" />
        <img src={e4} alt="Entertainment Room" />
        <img src={e5} alt="Entertainment Room" />
        <img src={e6} alt="Entertainment Room" />
         <img src={e7} alt="Entertainment Room" />
          <img src={e8} alt="Entertainment Room" />
           <img src={e9} alt="Entertainment Room" />
            <img src={e10} alt="Entertainment Room" />
             <img src={e11} alt="Entertainment Room" />
              <img src={e12} alt="Entertainment Room" />
               <img src={e13} alt="Entertainment Room" />
                <img src={e14} alt="Entertainment Room" />
                 <img src={e15} alt="Entertainment Room" />
      </section>
                  {/* ENTERTAINMENT TEXT SECTION */}
      <section className="entertainment-text-section">
        <p>
          As a movie enthusiast you want your entertainment room interiors decorating to show how much you love movies; 
          what a better starting point with than the enjoyment room? An enjoyment space is usually entertainment room, 
          where people gather to relax and watch films. Increase a fantastic environment of elegant design, charm and 
          contemporary environment throughout each space. Decorative and unique paintings help to transform a ho-hum décor 
          into loads of design. Modern entertainment Room design leaves space for interesting areas. Warm, fairly neutral or 
          cool color shades carry the energy of design that makes entertainment Room design attractive. Modern beauty is an 
          attractive theme that is essential for unique interesting areas. With Interiordesignwala select attractive lighting 
          accessories, one-of-a-kind accessories and designer-inspired furniture for fashionable impact. The best interesting 
          attractive themes have amazing points of interest and comfortable furniture for a custom scheme of personal elegance 
          of entertainment Room.
        </p>

        <p>
          Express a strong, impressive theme in an entertainment Room. Beautiful furniture organized to relax, comfort and vibrant 
          interacting is a great resource for a living room, den or finished underground room. Modern paintings, plenty of sitting 
          and attractive racks are stylish improvements in modified areas. Do you love the design and elegance appeal of interesting 
          area spaces? Meet team Interiordesignwala. Go for entertainment room that invites cozy luxury elegance and area to relax. 
          Beautiful lighting that shines, silk and satin feature pillows, luxurious upholstery furniture and elegant feature tables 
          are contemporary hits in area settings for interacting. Create the pace of fashion for an enjoyable, engaging area 
          entertainment room. Make an interesting area a setting of recent taste with contemporary wall art, accessories and mirrors.
        </p>
      </section>

    </div>
  );
};

export default Entertainment;
