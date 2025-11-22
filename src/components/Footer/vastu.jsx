import React from "react";
import "./vastu.css";

// HERO BANNER
import vastuBanner from "../../assets/vastu-bg.png";

// OFFICE IMAGES
import vastuOfficeImg from "../../assets/vastu-office.png";
import vastuImg3 from "../../assets/vastu-office2.png";

// MALL IMAGES (import them PROPERLY here)
import vastuMall1 from "../../assets/vastu-office.png";
import vastuMall2 from "../../assets/vastu-office2.png";

const VastuInterior = () => {
  return (
    <div className="vastu-page">

      {/* ================= HERO SECTION ================= */}
      <section className="vastu-hero">
        <div className="vastu-overlay"></div>

        <img
          src={vastuBanner}
          alt="Vastu Interior Banner"
          className="vastu-hero-image"
        />

        <h1 className="vastu-title">Vastu For Interior</h1>
        <p className="vastu-breadcrumb">Home ~ Vastu For Interior</p>
      </section>



      {/* ================= TEXT SECTION ================= */}
      <section className="vastu-text-section">
        <p>
          Vastu Shastra is collective science of architecture contains the forces
          which act upon a given specific space through flow of positive energy.
          Vaastu is process to follow systematic approach, which affected our
          daily life on a positive way.
        </p>

        <p>
          Vastu is an ancient Indian science of enhancing positive and
          eliminating negative energies in and around a place or person; and the
          more positive energies are around you, the more abundance is attracted
          towards you.
        </p>

        <p>
          This negative energy starts to affect you physically, spiritually and
          mentally. When we do interior of any home or commercial organization,
          we must follow certain vastu methods to avoid negative impact.
        </p>

        <p>
          Below are some good vastu tips for each specific area which can be
          affected by negative energy:
        </p>
      </section>



      {/* ================= SUB SECTION ================= */}
      <section className="vastu-subsection">
        <h2 className="vastu-sub-title">Vastu for Interior</h2>

        <div className="vastu-options">
          <p>👉 Vastu for Commercial units Interior</p>
          <p>👉 Vastu for Residential units Interior</p>
        </div>

        <h3 className="vastu-main-heading">
          Vastu for Commercial units Interior
        </h3>
      </section>



      {/* ==================== VASTU FOR OFFICE ==================== */}
      <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>



     
 <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>
 <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>

 <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>

 <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>

 <section className="vastu-office">

        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ===== ROW 1 : POINTS LEFT + IMAGE RIGHT ===== */}
        <div className="vastu-office-row">

          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>



        {/* ===== ROW 2 : IMAGE LEFT + POINTS RIGHT ===== */}
        <div className="vastu-office-row vastu-row-reverse">

          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>

      </section>


    </div>
  );
};

export default VastuInterior;
