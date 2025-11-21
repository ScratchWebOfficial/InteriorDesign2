import React from "react";
import "./salon.css";
import { useNavigate } from "react-router-dom";

// Import all gallery images
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";
import p16 from "../../assets/p16.jpg";

const Salon = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="kitchen-page">

      {/* HERO SECTION */}
      <section className="kitchen-hero">
        <div className="kitchen-overlay"></div>
        <img src={p1} alt="Kitchen Banner" className="kitchen-hero-image" />

        <h1 className="kitchen-hero-title">SALON/PARLOUR INTERIORS</h1>

        <p className="kitchen-breadcrumb">
          Portfolio ~ SALON/PARLOUR INTERIORS
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="kitchen-category-nav">
        <ul>

           <li className="active" onClick={() => goTo("/salon")}>SALON/PARLOR INTERIORS</li>
          <li onClick={() => goTo("/commercial/hospital")}>HOSPITAL/CLINIC INTERIORS</li>
          <li onClick={() => goTo("/gym")}>GYM/YOGA CENTER INTERIORS</li>
          <li onClick={() => goTo("/school")}>SCHOOL/COLLEGE INTERIORS</li>
          <li onClick={() => goTo("/commercial/offices")}>OFFICE INTERIORS</li>
          <li onClick={() => goTo("/commercial/showrooms")}>SHOWROOM INTERIORS</li>
          <li onClick={() => goTo("/commercial/resturant")}>RESTAURANT INTERIORS</li>
          <li onClick={() => goTo("/commercial/hotel")}>HOTEL INTERIORS</li>

        </ul>
      </section>

      {/* KITCHEN GALLERY */}
      <section className="kitchen-gallery">
        <img src={p2} alt="Kitchen Design" />
        <img src={p3} alt="Kitchen Design" />
        <img src={p4} alt="Kitchen Design" />
        <img src={p5} alt="Kitchen Design" />
        <img src={p6} alt="Kitchen Design" />
        <img src={p7} alt="Kitchen Design" />
        <img src={p8} alt="Kitchen Design" />
        <img src={p9} alt="Kitchen Design" />
        <img src={p10} alt="Kitchen Design" />
        <img src={p11} alt="Kitchen Design" />
        <img src={p12} alt="Kitchen Design" />
        <img src={p13} alt="Kitchen Design" />
        <img src={p14} alt="Kitchen Design" />
        <img src={p15} alt="Kitchen Design" />
        <img src={p16} alt="Kitchen Design" />
      </section>

      {/* TEXT + FAQ SECTION */}
      <section className="kitchen-text-section">

        <h2>How to Create Persuasive Salon Interior Design</h2>

        <p>
          Imagine a place that pamper you, a place where you can relax for some time after a chaotic day. Yes! Salons these days are designed on the concept of luxury and comfort along with traditional services. These are the places that not only groom you but make you feel special and relaxed for a certain time. Let me ask you a question.

        </p>
        <p><strong>Which is the first thing that welcomes you in a salon?</strong></p>

        <p>
          The reception area. Your reception area is the one that brings the complete vibe of the type of services you are offering. So the elements of the reception area serve an important role in customer acquisition.

        </p>

        <p>
         <strong>These tips to create persuasive salon interior design can be a turning point for the improvised business:-</strong><br/>

            A comfortable seating space and a cosy atmosphere are essential for the reception area.<br/>
            Indoor plants with calming properties must be placed in the nooks and folds.<br/>
            To use services, it needs to have appropriate partitions and private areas.<br/>
            Take special note of the luxurious appliances, lighting effects, and artificial ceiling.
        </p>
        <p>
            Interior Designwala an online interior service provider has created some remarkable virtual salon designs in its 8+ years of services. Our designers work on the key aesthetics of the place and help in growing your business organically.
        </p>


        <h3>FAQs</h3>

        <h4>Q1. How to tour the interiors of your salon interior design online?</h4>
        <p>3D rendering services of Interior Designwala give the flexibility to tour your interiors online.</p>

        <h4>Q2. How does artificial intelligence in creating virtual salon design help in making a stunning physical salon?</h4>
        <p>The use of augmented reality in interior design by Interior Designwala facilitates the creation of virtual environments that stimulate real-world surroundings. By using 3D rendering images, you can see the entire location in 360 degrees and observe even the smallest details, like the folds in a curtain or the sheen of a surface material. This allows you to visualize your interior design before it is finished, allowing you to make changes as needed. As a result, the project's actual site execution costs are decreased..</p>

        <h4>Q3. How to create customer-engaging salon interiors?</h4>
        <p>Make a relaxed reception area with a lot of magazines.<br/>
            Create accent walls for clicking pictures.<br/>
            Place road mirrors on walls<br/>
            A piece of soft music should not be missed.<br/>
            Provide basic amenities at reception.<br/>
        </p>

      </section>

    </div>
  );
};

export default Salon;
