import React from "react";
import "./talk.css";

import bannerImg from "../../assets/banner1.jpg"; 
import sectionImg from "../../assets/side1.jpg"; 
import mailImg from "../../assets/mail1.jpg"; 

const Talk = () => {
  return (
    <div className="associates-page">

      {/* --------------- HERO SECTION --------------- */}
      <div className="associates-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1>Talk To Designer</h1>

        <div className="breadcrumb">
          Home <span> ~ </span> Talk To Designer
        </div>
      </div>

      {/* --------------- CONTENT SECTION --------------- */}
      <div className="associates-content">
        <div className="text-part">
          <h2>Associates</h2>
          <p>
            Designing a home must be easy going for you, hence we are here to assist you for the same. Sahacarah Global Pvt. Ltd. makes the designing process easy and fun for you, so that you love designing and home itself. To know more about us, you can easily connect to us, our highly talented designers will assist you for your each and every question and will come with a great idea for you exclusively.


          </p>

          <p>
           We operate in an industry build on trust. This can only be achieved through communication and experiences support. Our entire team have good skills, experience and creative approach to ensure that you are receiving best information and quality services from our end. From basic question to complex inquires, we are here to help you!!

          </p>

          <p>
            We are an incredible response to your query and value your question. You are not going to hit a long phone menu when you call us. You just need to fill this form and our designing team will contact you shortly.
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
          <h2>Get Free Designer Consultation</h2>
          <p>
            Fill the details and get reply from our expert designer in 24 hours.</p>

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

export default Talk;