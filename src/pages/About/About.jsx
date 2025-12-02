import React from "react";
import "./About.css";
import aboutBg from "../../assets/about-bg.jpg"; // Replace with your image path
import teamBg from "../../assets/team-bg.jpg"; // Add background image for team section if available
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import team5 from "../../assets/team5.jpg";
// Add as many team images as you have

const About = () => {
  return (
    <>
      {/*  Banner Section */}
      <div
        className="about-container"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="overlay">
          <h1 className="about-title">Story Behind</h1>
          <div className="breadcrumb">
            <span>Home ~ </span>
            <span className="active">About Us</span>
          </div>
        </div>
      </div>

      {/*  Company Overview Section */}
      <section className="company-overview">
        <h3 className="overview-small">COMPANY OVERVIEW</h3>
        <h1 className="overview-title">
          DESIGNERS AIMING CLIENT'S SATISFACTION
        </h1>
        <p className="overview-text">
          Sacarah Global is at your service if you want to give your home
          interiors a fresh and elegant look without spending huge fortune.
          Whether you want to change interiors a bit or have plans for complete
          interior designing, InteriorDesignWala is the most personalized and
          affordable way to get the things done. Our team of creative and
          dedicated interior designers give your home interiors an entire new
          look without spending the high cost or the hassle. We are in this
          field since very long to provide you the remarkable designs and
          unmatched satisfaction on the level of whole. <br />
          <br />
          Have home interiors in mind? We are here to help…
        </p>
      </section>

      {/*  The Story Section */}
      <section className="story-section">
        <h4 className="story-subtitle">HOW IT’S STARTED</h4>
        <h1 className="story-title">
          THE STORY OF <span>INTERIOR DESIGN WALA</span>
        </h1>

        <p className="story-quote">
          “To give every home a creative experience and a wonderful look is the
          very objective of InteriorDesignWala.com”
        </p>

        <p className="story-text">
          <strong>fitnfixsolutions.com</strong> is the organization founded in
          the year 2012 by a young entrepreneur who kept an idea of decorating
          and styling each & every corner before his eyes, having lots of
          courage and obsession with the idea he formed an effective team of
          creative interior designers and gave it name{" "}
          <strong>“InteriorDesignWala.com”.</strong>
        </p>

        <p className="story-text">
          At the very first, we have started with{" "}
          <strong>Online Interior Designing Services.</strong> In this, we were
          aiming to provide the best online consultancy as well as online
          designs for direct execution. We were well aware of obstacles and
          opportunities both, via online method it sometimes gets difficult to
          infer but it also gives you the vast number of opportunities to work
          worldwide. Moreover to this, we never stopped growing in terms of
          knowledge and technology which gave us a huge success in Online
          Interior Designing. Now we have over 4000 satisfied clients all over
          India and counting is still going on.
        </p>

        <p className="story-text">
          Afterward, Sahacarah Global got into Designing as well as
          execution work, for Delhi NCR people, we have plenty of projects
          running in NCR Region and a lot of them got completed as well. We have
          gotten into execution after establishing all the support team which is
          required for execution and now we have a large team of designers, site
          supervisors, suppliers, and project managers for execution. We believe
          in learning and each client’s new perspective and opinions always
          motivate us to engulf more and more knowledge and do the best.
        </p>

        <p className="story-text">
          We are a team of architects, interior designers, furniture designers,
          and contractors that together takes the process of interior Design
          completely online. While offering interior designing solutions (from
          concept to Delivery), we focus on creativity, high-end Finishes, and
          attention to detail.
        </p>

        <p className="story-text">
          Sahacarah Global was founded with an aim to provide a better
          interior designing environment with the best designs to all of its
          reputed clients. Since our inception in the marketplace, we have been
          offering more premium & economic modern Interior designing & Turnkey
          services to our prestigious and valuable clients. Our services are
          extremely efficient, effective, and people orientated.
        </p>

        <p className="story-text">
          At Sahacarah Global, quality and consistency come first. We give
          your home an elegant and aesthetic look as desired without
          compromising quality. We create living-worthy living spaces that truly
          reflect your tastes, needs, and lifestyle. Over a decade, our turnkey
          interior design services have managed to transform several residential
          and commercial spaces into gorgeously styled, high-utility spaces.
        </p>

        <p className="story-text">
          At Sahacarah Global, we live our mission to create smooth, aesthetic
          & functional designs for spaces that matter to you. Our competent team
          of interior designers has required design skill & intelligence to turn
          your ordinary space into an extraordinary one. Our unmatched interior
          designing services are available in pan India. We are meticulously
          trained professionals having a core emphasis on the visual appeal and
          practical aspect of any interiors. Our designers are highly
          enthusiastic and work hard to achieve maximum client satisfaction at
          the minimum possible costs.
        </p>
      </section>

      {/*  Statistics Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2 className="stat-number">5+</h2>
          <p className="stat-text">
            Years of <br /> Experience
          </p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">930+</h2>
          <p className="stat-text">
            Online <br /> Projects Designed
          </p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">210+</h2>
          <p className="stat-text">
            Turnkey <br /> Projects Delivered
          </p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">50+</h2>
          <p className="stat-text">
            Working <br /> Skilled Labour
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="team-section"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="team-content">
          <div className="team-text">
            <h2 className="team-title">TEAM BEHIND</h2>
            <h3 className="team-subtitle">BEAUTIFUL INTERIOR</h3>
          </div>

          <div className="team-grid">
            {[team1, team2, team3, team4, team5].map((img, index) => (
              <img key={index} src={img} alt={`Team Member ${index + 1}`} className="team-img" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
