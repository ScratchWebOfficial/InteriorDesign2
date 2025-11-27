import React from "react";
import "./school.css";
import { useNavigate } from "react-router-dom";

// Office Hero Banner Image
import z1 from "../../assets/z1.jpg";
import z2 from "../../assets/z2.jpg";
import z3 from "../../assets/z3.jpg";
import z4 from "../../assets/z4.jpg";
import z5 from "../../assets/z5.jpg";
import z6 from "../../assets/z6.jpg";
import z7 from "../../assets/z7.jpg";
import z8 from "../../assets/z8.jpg";
import z9 from "../../assets/z9.jpg";
import z10 from "../../assets/z10.jpg";
import z11 from "../../assets/z11.jpg";
import z12 from "../../assets/z12.jpg";
import z13 from "../../assets/z13.jpg";
import z14 from "../../assets/z14.jpg";
import z15 from "../../assets/z15.jpg";
import z16 from "../../assets/z16.jpg";

const school = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="office-page">

      {/* HERO SECTION */}
      <section className="office-hero">
        <div className="office-overlay"></div>

        <img src={z1} alt="Office Banner" className="office-hero-image" />

        <h1 className="office-hero-title">SCHOOL/COLLEGE INTERIORS</h1>

        <p className="office-breadcrumb">
          Portfolio ~ SCHOOL/COLLEGE INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="office-category-nav">
        <ul>
            <li className="active" onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>
         
        </ul>
      </section> 
  <section className="office-gallery">
        <img src={z2} alt="Office Design" />
        <img src={z3} alt="Office Design" />
        <img src={z4} alt="Office Design" />
        <img src={z5} alt="Office Design" />
        <img src={z6} alt="Office Design" />
        <img src={z7} alt="Office Design" />
        <img src={z8} alt="Office Design" />
        <img src={z9} alt="Office Design" />
        <img src={z10} alt="Office Design" />
        <img src={z11} alt="Office Design" />
        <img src={z12} alt="Office Design" />
        <img src={z13} alt="Office Design" />
        <img src={z14} alt="Office Design" />
        <img src={z15} alt="Office Design" />
        <img src={z16} alt="Office Design" />
      </section>
      {/* OFFICE TEXT SECTION */}
<section className="office-text-section">

  <p>People used to walk miles for educations and as the time changed, there are enormous educational institutions serving the literacy rate. Sahacarah Global Pvt. Ltd. serve these institutions by delivering them best graphical elements in custom interior designing solution. Today along with student marks and grades, institute infrastructure plays a vital role in getting student attention. We provide services for every institute whether it is a school or a college. Our designers are highly skilled in creating any type of designs for various institutions like including engineering colleges, medical colleges, business colleges, and various other educational institutions. We work according to client specifications, whether they want readymade designs or unique institutional designs. We offer partial renovation services for old buildings and also offer entire building design transformation. Our team take care of every small institutional areas while giving best interior designs including the false ceiling, furniture, classroom, labs, library, auditoriums, carpentry, staff rooms, office room, cafeteria etc. Our professionals will give you the best quality work on time. Interiors we do for: School Interiors When we talk about schools, this includes children of age ranging from 4-18 years, teachers, helping staff and others. So the interior should be pleasing and attractive for all the age group children, teachers and other staff. Interiordesignwala.com comes up with various new creative idea to attain this state of satisfaction. When we design and make our best efforts we also takes care of the various sections of school such as class room for primary students as these are small age group children and will like colourful and cheerful environment, upper primary children are of middle age group and have simple yet creative taste, senior secondary children as they are much mature than the others and are looking forward for the coming bright future. All the three groups have different requirement and taste and interdesignwala.com is ready to serve them all. Our company will give you an infrastructure and create an interior that is durable, unique, and beautiful. We design every crucial school are including but not limited to office rooms, labs, library, classrooms, art rooms, indoor game halls, staff rooms, and cafeteria. College Interiors College Interiors need an extra input of creative, and when it comes to creativity interiordesignwala.com get boosted up. College interior requires class room that engages students, cafeteria that can encourage health, various labs that can infer new ideas, teacher's room with impressive space and furnishing and various office that have separate requirements. Interiordesignwala.com entertains all of them one by one and ready to deliver the best. We have delivered matchless designs to colleges of varying niches. With an eye of finding suitability, our designers design everything from roots, keeping proper care of every college area. Computer Lab and Other Institutions There are many computer labs working with sole purpose of providing computer education. We make sure every part of that lab can enhance student experience and keep them engaged as long as they want. We make sure to use our well-defined knowledge to bring new life to every institute we work on. We understand how important it is for students to grab what they learn and we contribute in it with incredible interior designs for institutes. You can get in touch with us for any personalized solution or getting a quotation.
    
  </p>
</section>


    </div>
  );
};

export default school;
