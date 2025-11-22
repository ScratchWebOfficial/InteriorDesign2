import React from "react";
import "./associates.css";

import bannerImg from "../../assets/banner.jpg"; 
import sectionImg from "../../assets/side.jpg"; 
import mailImg from "../../assets/mail.jpg"; 

const Associates = () => {
  return (
    <div className="associates-page">

      {/* --------------- HERO SECTION --------------- */}
      <div className="associates-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1>Associates</h1>

        <div className="breadcrumb">
          Home <span> ~ </span> Associates
        </div>
      </div>

      <p className="hero-text">
        We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design
        beautiful home interiors.
      </p>

      {/* --------------- CONTENT SECTION --------------- */}
      <div className="associates-content">
        <div className="text-part">
          <h2>Associates</h2>
          <p>
            Being an interior designing company, we always need some trusted suppliers, contractors and
            other venders, if you are one of them you can easily associate with us, we will appreciate your
            work as per its quality. Interior designing is a sum of multiple processes, such as wood work,
            false ceiling work, pop work, plumbing and electrical work and many much more. Hence only an
            interior designer is not sufficient to complete the execution and completion of designs, venders
            are always required.
          </p>

          <p>
            Interiordesignwala.com believes in give and take process, hence you give the best you have and
            we will provide you the best you need. To be a part of us, you can fill the form below, we
            definitely consider your valuable work and get back to you if required.
          </p>
        </div>

        <div className="img-part">
          <img src={sectionImg} alt="associate-help" />
        </div>
      </div>

      {/* --------------- FORM SECTION --------------- */}
      <div className="appointment-section">
        <div className="appointment-img">
          <img src={mailImg} alt="mail" />
        </div>

        <div className="appointment-form">
          <h2>Make Appointment</h2>
          <p>
            Leave your information here and get reply from our expert in 24 hours, don’t hesitate to ask.
          </p>

          <form>
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Phone" />
            </div>

            <div className="row">
              <input type="text" placeholder="Location" />

              <div className="bhk-options">
                <label><input type="radio" name="bhk" /> 1 BHK</label>
                <label><input type="radio" name="bhk" /> 2 BHK</label>
                <label><input type="radio" name="bhk" /> 3 BHK</label>
                <label><input type="radio" name="bhk" /> 4 BHK+</label>
                <label><input type="radio" name="bhk" /> Commercial</label>
              </div>
            </div>

            <textarea placeholder="Your Requirements"></textarea>

            <div className="captcha">
              <span>What is 3*3 = ?</span>
              <input type="text" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Associates;