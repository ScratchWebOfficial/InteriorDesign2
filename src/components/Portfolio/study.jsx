import React from "react";
import "./study.css";
import { useNavigate } from "react-router-dom";


// Import all gallery images
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpg";
import s10 from "../../assets/s10.jpg";
import s11 from "../../assets/s11.jpg";
import s12 from "../../assets/s12.jpg";
import s13 from "../../assets/s13.jpg";
import s14 from "../../assets/s14.jpg";
import s15 from "../../assets/s15.jpg";
import s16 from "../../assets/s16.jpg";

const Study = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={s1} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">STUDY ROOM </h1>

        <p className="kitchen-breadcrumb">
          Portfolio ~STUDY ROOM
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

          <li className="active" onClick={() => goTo("/study-room")}>STUDY ROOM</li>

          <li onClick={() => goTo("/residential/bedroom")}>BEDROOM INTERIORS</li>
          <li onClick={() => goTo("/dining")}>DINING INTERIORS</li>
          <li onClick={() => goTo("/residential/living")}>LIVING AREA INTERIORS</li>
          <li onClick={() => goTo("/residential/kitchen")}>KITCHEN INTERIORS</li>
          <li onClick={() => goTo("/residential/Toilet")}>TOILET INTERIORS</li>
          <li onClick={() => goTo("/drawing-room")}>DRAWING ROOM INTERIORS</li>
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
        <img src={s2} alt="Kitchen Design" />
        <img src={s3} alt="Kitchen Design" />
        <img src={s4} alt="Kitchen Design" />
        <img src={s5} alt="Kitchen Design" />
        <img src={s6} alt="Kitchen Design" />
        <img src={s7} alt="Kitchen Design" />
        <img src={s8} alt="Kitchen Design" />
        <img src={s9} alt="Kitchen Design" />
        <img src={s10} alt="Kitchen Design" />
        <img src={s11} alt="Kitchen Design" />
        <img src={s12} alt="Kitchen Design" />
        <img src={s13} alt="Kitchen Design" />
        <img src={s14} alt="Kitchen Design" />
        <img src={s15} alt="Kitchen Design" />
        <img src={s16} alt="Kitchen Design" />
      </section>

      {/* TEXT */}
      <section className="kitchen-text-section">

        <p>
         Our<strong>interior design ideas for study room </strong> that reflects your inquisitiveness to learn new things. It's a corner that needs to be designed and set up intelligently. Sahacarah Global Pvt. Ltd. understands how you want to have a clam and quite study room without any noise or disturbance. Our team of interior designers takes even every single detail very seriously. They start it from putting study tables and chair in place to give your study room a clutter free look. They customise your study table as per your requirements and on the basis of the height and size of the table. A comfortable chair always helps you improve your concentration and give you good health. You can visualize our expertise in the way we design your study room that's full of books and needs enough space for your treasure of knowledge. By adding extra storage space with cabinets, we ensure that things are handy while you are studying. Our team of interior designers designs your study room to make your room well-lit and airy. We ensure that lights in your study room should not be very dim or too bright. They balance the light and neutralize inside the study room as vision and comfort. If the space in study room allows additional sitting area near a corner or by the window side to give you more space so that you have more space to read and learn. We paint walls in your study room so that the ambience of the room don't makes you feel bored and gloomy. If space in the study room permits us, we sometime keep bed inside study room to let you relax and study for hours. Our expert interior designers decorate and style your study room with motivating and inspiring thing. Better spacing influences your study and motivates you to concentrate more on your studies. Want to know more on how to decorate your study, call our experts now for<strong> latest study room design</strong>.
        </p>
      </section>

    </div>
  );
};

export default Study;
