// Kids.jsx
import React from "react";
import "./kids.css";

import img1 from "../../assets/kids1.jpg";
import img2 from "../../assets/kids2.jpg";
import img3 from "../../assets/kids3.jpg";
import img4 from "../../assets/kids4.jpg";
import img5 from "../../assets/kids5.jpg";
import img6 from "../../assets/kids6.jpg";
import img7 from "../../assets/kids7.jpg";
import img8 from "../../assets/kids8.jpg";
import img9 from "../../assets/kids9.jpg";
import img10 from "../../assets/kids10.jpg";
import img11 from "../../assets/kids11.jpg";
import img12 from "../../assets/kids12.jpg";
import img13 from "../../assets/kids13.jpg";
import img14 from "../../assets/kids14.jpg";
import img15 from "../../assets/kids15.jpg";
import img16 from "../../assets/kids16.jpg";

const Kids = () => {
  return (
    <div className="kids-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={img1} alt="Kids Hero" className="hero-image" />
        <h1 className="hero-title">KIDS ROOM INTERIORS</h1>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="category-nav">
        <ul>
          <li className="active">KIDS ROOM</li>
          <li>BEDROOM INTERIORS</li>
          <li>KITCHEN INTERIORS</li>
          <li>DINING INTERIORS</li>
          <li>LIVING AREA INTERIORS</li>
          <li>DRAWING ROOM INTERIORS</li>
          <li>TOILET INTERIORS</li>
          <li>STUDY ROOM</li>
          <li>POOJA ROOM</li>
          <li>ENTERTAINMENT ROOM</li>
          <li>STAIRS</li>
          <li>DOORS WINDOW</li>
          <li>TV</li>
          <li>FALSE CEILING</li>
        </ul>
      </section>

      {/* IMAGE GROUPS */}
      <section className="image-grid">
        <img src={img2} alt="Kids Room" />
        <img src={img3} alt="Kids Room" />
        <img src={img4} alt="Kids Room" />
      </section>

      <section className="image-grid">
        <img src={img5} alt="Kids Room" />
        <img src={img6} alt="Kids Room" />
        <img src={img7} alt="Kids Room" />
      </section>

      <section className="image-grid">
        <img src={img8} alt="Kids Room" />
        <img src={img9} alt="Kids Room" />
        <img src={img10} alt="Kids Room" />
      </section>

      <section className="image-grid">
        <img src={img11} alt="Kids Room" />
        <img src={img12} alt="Kids Room" />
        <img src={img13} alt="Kids Room" />
      </section>

      <section className="image-grid">
        <img src={img14} alt="Kids Room" />
        <img src={img15} alt="Kids Room" />
        <img src={img16} alt="Kids Room" />
      </section>

      {/* DESCRIPTION SECTION AT BOTTOM */}
      <section className="kids-description">
        <p>
          Looking for an expert to decorate your kids’ room? Ask an expert like Interiordesignwala
          to keep your kids flaunt and scrimp on style. When it comes to kids’ room, there are huge
          possibilities on design and decoration. Even though if your kids’ corner has space crunch,
          our designers would make it brave and magical as you want.Whether it’s a girls’ room, a boys’ bedroom or nursery, we’ve solid experience in designing
          children’s bedroom at its best. If you think that designing kids’ bedroom and then decorating
          it aesthetically is consuming and costly, tell us to do this. We have many inspirations in our
          kitty around your thoughts that help us create amazing rooms from the nursery to the teen bedroom.They will be appealing and would be astoundingly designed as per your expectations. For our team
          of expert designers, creating a truly timeless kids’ room is a day to day affair. We can make your
          kids room an amazing living place where they can cherish throughout their formative years.To create an amazing place for your kids, we start with an elegant color scheme that comprises
          neutral colors and sticks to two or three shades. At Interiordesignwala, we understand that
          ambience plays an important role in running positive vibes in your kids’ room.To make the ambience uncluttered, our team provides you with a blank canvas on which you can paint
          picture of your kid’s choice. We make sure that your walls having a classy color scheme that
          constitutes white color for a girls’ bedroom.
        </p>  
      </section>
    </div>
  );
};

export default Kids;
