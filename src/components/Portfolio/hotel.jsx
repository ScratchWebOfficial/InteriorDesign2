import React from "react";
import "./hotel.css";
import { useNavigate } from "react-router-dom";

import officeBanner from "../../assets/hotel-banner.png"; 

// Hotel Images
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import h6 from "../../assets/h6.png";
import h7 from "../../assets/h7.png";
import h8 from "../../assets/h8.png";
import h9 from "../../assets/h9.png";
import h10 from "../../assets/h10.png";
import h11 from "../../assets/h11.png";
import h12 from "../../assets/h12.png";
import h13 from "../../assets/h13.png";
import h14 from "../../assets/h14.png";
import h15 from "../../assets/h15.png";

const hotel = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="office-page">

      {/* HERO SECTION */}
      <section className="office-hero">
        <div className="office-overlay"></div>
        <img src={officeBanner} alt="Office Banner" className="office-hero-image" />
        <h1 className="office-hero-title">HOTEL INTERIORS</h1>
        <p className="office-breadcrumb">Portfolio ~ HOTEL INTERIORS</p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="office-category-nav">
        <ul>
          <li className="active" onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
        </ul>
      </section>

      {/* HOTEL GALLERY */}
      <section className="office-gallery">
        <img src={h1} alt="hotel Design" />
        <img src={h2} alt="hotel Design" />
        <img src={h3} alt="hotel Design" />
        <img src={h4} alt="hotel Design" />
        <img src={h5} alt="hotel Design" />
        <img src={h6} alt="hotel Design" />
        <img src={h7} alt="hotel Design" />
        <img src={h8} alt="hotel Design" />
        <img src={h9} alt="hotel Design" />
        <img src={h10} alt="hotel Design" />
        <img src={h11} alt="hotel Design" />
        <img src={h12} alt="hotel Design" />
        <img src={h13} alt="hotel Design" />
        <img src={h14} alt="hotel Design" />
        <img src={h15} alt="hotel Design" />
      </section>


      <section className="hotel-long-text">
  <p>
    A huge share of our country’s income comes from tourism, and there is a stiff competition among hotels. The market is full of diverse range of hotels, but what makes your hotel unique and attractive? Of course, the locality and the interior designs—people pay high for their comfort. Building a hotel is a difficult task but creating an impeccable interior is even more challenging, and Sahacarah Global Pvt. Ltd. can surely do it for you. Our exceptional services will leave your customers astounded and make them return again and again. At Sahacarah Global Pvt. Ltd., you get infinite designs and customized work as per your requirements. Our highly skilled team of designers and architects works to meet your expectations and supports you throughout every step of the project. We ensure your rooms shine like never before and polish every part of your hotel to perfection. We assist clients with renovation, fresh construction, and refurbishment of historical buildings. We provide complete hotel interior design services that help manage space efficiently. Our team uses high-quality decorative elements to make the interiors more beautiful and attractive for visitors. We also design theme-centric restaurants, bars, lobbies, and recreational spaces based on client needs. InteriorDesignWala ensures design execution across all major hotel areas—swimming pool location, banquet halls, restaurants, marriage halls, golf clubs, bars, guest rooms, corridors, private suites, cutlery layouts, furniture placement, beds, furnishing, and lobby aesthetics. We enhance your guests’ experience by designing mesmerizing reception areas that leave unforgettable first impressions. Our work covers all room types, from standard to super-deluxe, according to client preferences. Beyond rooms, we design bathrooms, dining halls, kitchens, and other key spaces of the hotel, ensuring consistent elegance and functionality across all corners of the property. With years of experience designing for numerous hotel categories, our approach remains business-centric and tailored for maximum guest satisfaction. We aim to let you focus on core operations while we handle all your interior design needs with creativity and precision. If you have queries about hotel interior designing services or want to request a quote, feel free to contact us anytime.
  </p>
</section>


    </div>
  );
};

export default hotel;
