import React from "react";
import "./stairs.css";
import { useNavigate } from "react-router-dom";

// Import all gallery images
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpg";
import t5 from "../../assets/t5.jpg";
import t6 from "../../assets/t6.jpg";
import t7 from "../../assets/t7.jpg";
import t8 from "../../assets/t8.jpg";
import t9 from "../../assets/t9.jpg";
import t10 from "../../assets/t10.jpg";
import t11 from "../../assets/t11.jpg";
import t12 from "../../assets/t12.jpg";
import t13 from "../../assets/t13.jpg";
import t14 from "../../assets/t14.jpg";
import t15 from "../../assets/t15.jpg";
import t16 from "../../assets/t16.jpg";

const Stairs = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={t1} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">STAIRS</h1>

        <p className="kitchen-breadcrumb">
          Portfolio ~ STAIRS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

          <li className="active" onClick={() => goTo("/stairs")}>STAIRS</li>

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
          <li onClick={() => goTo("/false-ceiling")}>FALSE CEILING</li>

        </ul>
      </section>

      {/* KITCHEN GALLERY */}
      <section className="kitchen-gallery">
        <img src={t2} alt="Kitchen Design" />
        <img src={t3} alt="Kitchen Design" />
        <img src={t4} alt="Kitchen Design" />
        <img src={t5} alt="Kitchen Design" />
        <img src={t6} alt="Kitchen Design" />
        <img src={t7} alt="Kitchen Design" />
        <img src={t8} alt="Kitchen Design" />
        <img src={t9} alt="Kitchen Design" />
        <img src={t10} alt="Kitchen Design" />
        <img src={t11} alt="Kitchen Design" />
        <img src={t12} alt="Kitchen Design" />
        <img src={t13} alt="Kitchen Design" />
        <img src={t14} alt="Kitchen Design" />
        <img src={t15} alt="Kitchen Design" />
        <img src={t16} alt="Kitchen Design" />
      </section>

      {/* TEXT + FAQ SECTION */}
      <section className="kitchen-text-section">

        <p>
         Whether you favour a contemporary start staircase to or a great manage staircase, we've dug in to the House & Lawn records to find some extremely fashionable illustrations. Come and see how Sahacarah Global Pvt. Ltd. have converted this structural lynch pin in to a masterpiece of style which can set the ornamental overall tone of a whole house. Come and range the mind-blowing levels of staircase style. Some may not recognize that a staircase is just another place of their house that can be designed to create the house appear fashionable. Staircases are often neglected when it comes to designing, but based on the structure of the house, the staircase may be a bigger factor than you think, especially if it is the first factor individuals see when they enter. Interiordesignwala frames a few of your preferred pictures and also set them up along the walls of the staircase. These pictures can be ones of your family members or they can be of characteristics or other attractive things. Hang them so that they appear to be climbing down with the staircase. Be sure that the supports you select supplement the colour of the walls. A wise concept is to suit the colour of the steps (if they are wood) to the colour of the wood in the frames. If you really want your staircase to get noticed, then consider artwork that goes up the steps. This could be as easy as foliage or plant design that follows the steps or it can be a bigger and more complex artwork. If illustrating and artwork are not your best abilities there are stencils that you can use for the style or you can seek the services of an expert artist to do the artwork.
        </p>

      </section>

    </div>
  );
};

export default Stairs;
