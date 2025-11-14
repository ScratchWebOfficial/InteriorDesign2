import React from "react";
import "../Preloader/Preloader.css";
import logo from "../../assets/logo_12311.png"; 

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <img src={logo} alt="Company Logo" className="preloader-logo" />
      </div>
    </div>
  );
}






