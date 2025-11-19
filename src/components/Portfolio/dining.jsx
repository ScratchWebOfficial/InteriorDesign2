import React from "react";
import "./dining.css";
import { useNavigate } from "react-router-dom";

import diningBanner from "../../assets/dining-banner.jpg";



const Dining = () => {

  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <div className="dining-page">

      {/* HERO SECTION */}
      <section className="dining-hero">
        <div className="dining-overlay"></div>

        <img
          src={diningBanner}
          alt="Dining Banner"
          className="dining-hero-image"
        />

        <h1 className="dining-hero-title">DINING INTERIORS</h1>

        <p className="dining-breadcrumb">
          Portfolio ~ DINING INTERIORS
        </p>
      </section>

    

    </div>
  );
};

export default Dining;
