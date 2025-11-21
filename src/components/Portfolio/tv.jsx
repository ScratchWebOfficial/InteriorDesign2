import React from "react";
import "./tv.css";
import { useNavigate } from "react-router-dom";

import tvBanner from "../../assets/tv-bg.png";

// IMPORT TV GALLERY IMAGES
import tv1 from "../../assets/tv1.png";
import tv2 from "../../assets/tv2.png";
import tv3 from "../../assets/tv3.png";
import tv4 from "../../assets/tv4.png";
import tv5 from "../../assets/tv5.png";
import tv6 from "../../assets/tv6.png";
import tv7 from "../../assets/tv7.png";
import tv8 from "../../assets/tv8.png";
import tv9 from "../../assets/tv9.png";
import tv10 from "../../assets/tv10.png";
import tv11 from "../../assets/tv11.png";
import tv12 from "../../assets/tv12.png";
import tv13 from "../../assets/tv13.png";
import tv14 from "../../assets/tv14.png";
import tv15 from "../../assets/tv15.png";

const Tv = () => {

  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="tv-page">

      {/* HERO SECTION */}
      <section className="tv-hero">
        <div className="tv-overlay"></div>

        <img 
          src={tvBanner} 
          alt="TV Cabinet Banner" 
          className="tv-hero-image" 
        />

        <h1 className="tv-hero-title">TV CABINET</h1>

        <p className="tv-breadcrumb">
          Portfolio ~ TV CABINET
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="tv-category-nav">
        <ul>
          <li className="active">TV CABINET</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
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
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>
        </ul>
      </section>

      {/* TV GALLERY SECTION */}
      <section className="tv-gallery">
        <img src={tv1} alt="TV Cabinet Design" />
        <img src={tv2} alt="TV Cabinet Design" />
        <img src={tv3} alt="TV Cabinet Design" />
        <img src={tv4} alt="TV Cabinet Design" />
        <img src={tv5} alt="TV Cabinet Design" />
        <img src={tv6} alt="TV Cabinet Design" />
        <img src={tv7} alt="TV Cabinet Design" />
        <img src={tv8} alt="TV Cabinet Design" />
        <img src={tv9} alt="TV Cabinet Design" />
        <img src={tv10} alt="TV Cabinet Design" />
        <img src={tv11} alt="TV Cabinet Design" />
        <img src={tv12} alt="TV Cabinet Design" />
         <img src={tv13} alt="TV Cabinet Design" />
          <img src={tv14} alt="TV Cabinet Design" />
           <img src={tv15} alt="TV Cabinet Design" />
      </section>
{/* TV TEXT SECTION */}
<section className="tv-text-section">

  <h2>Tv Cabinet Designs Online</h2>

  <p>
    When it comes to set up your TV set in bedroom or in living space, the most tedious task 
    is to finding a place to put the television without compromising your furniture arrangement. 
    It needs to be fitted without compromising your décor integrity. At Interiordesignwala, we 
    know the best place to install your TV set. The TV set should be installed in a way so that 
    it is always at eye-level.
  </p>

  <p>
    It’s the best seating position to keep you neck or eyes away for straining when you have to 
    looking up or down to see the screen. While installing the TV, we determine the best viewing 
    distance for uninterrupted viewing experience. In case your TV is in the centre of searing 
    area, our team places it on the wall adjacent to the focal point so it can still be viewed 
    comfortably. Particularly, if you’re unwilling to install television to be a focal point, we 
    consider putting it in a cabinet or armoire with doors that can close. If you are exploring 
    suitable place for your TV in your helm, we will build a special area in the living room, 
    in case you’re facing space crunch. We can offer you all the creative ways to install the TV.
  </p>

  <p>
    You can feel astounded by having an appropriately adjusted TV around wood framing with cover. 
    This is the way in which your TV can change the way your home looks like. We have several years 
    of experience in interior designing. It gives us expertise to offer an aesthetic look for your 
    home with proper installation of Tv Cabinet in the right place. While adjusting the TV sets, 
    we make sure that there is enough ventilation is available for your TV sets. In order to protect 
    your TV sets, we choose for a 
    <strong> Tv Cabinet Designs </strong>
    that allows maximum air flow sections in the back or sides. Ask our Interior designing team 
    about how they can help you in having a right 
    <strong> Tv Cabinet Designs Online </strong>
    set in your home.
  </p>

</section>

    </div>
  );
};

export default Tv;
