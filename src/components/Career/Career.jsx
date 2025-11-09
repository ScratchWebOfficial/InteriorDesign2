import React, { useEffect } from "react";
import "./Career.css";
import careerHeroBg from "../../assets/career-hero-bg.jpg";
import whyJoinIllustration from "../../assets/why-join-us.png";
import careerIllustration from "../../assets/career-illustration.png";
import applyIllustration from "../../assets/apply-now.png";

const openings = [
  {
    id: 1,
    title:
      "Sales Manager (2 years Experience Male preferred with own vehicle)",
    description:
      "Key Responsibilities: Develop and execute sales strategies to achieve revenue targets. Manage and coach a team of sales representatives. Collaborate with marketing and product teams to develop go-to-market plans. Monitor sales performance and identify opportunities for improvement. Build and maintain relationships with key accounts and partners.",
  },
  {
    id: 2,
    title: "Furniture Draftsman (1 Year Experience)",
    description:
      "Job description: Develop detailed sketches, drawings, and 3D prototypes of furniture designs. Proficiency in CAD software (AutoCAD, SolidWorks, Keyshot). Familiarity with 3D modelling is a plus. Strong attention to detail and accuracy in drafting.",
  },
  {
    id: 3,
    title: "Interior Designer (2 years experience Female Candidate Only)",
    description:
      "Interior designing requires creativity. We need a designer who is filled with creativity and can think out of the box. Responsibilities include concept creation, client coordination, producing plans and FF&E lists, and overseeing small site execution.",
  },
];

const Career = () => {
  // Scroll to top whenever page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="career-page">
      {/* HERO */}
      <header
        className="career-hero"
        style={{
          backgroundImage: `url(${careerHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="career-hero-overlay">
          <h1 className="career-hero-title">Find a Career Opportunities</h1>
          <p className="career-hero-sub">
            View our job listing to find the job of your dream.
          </p>
          <div className="career-hero-cta">
            <a href="#career-openings" className="btn-cta">
              View Openings →
            </a>
          </div>
        </div>
      </header>

      {/* WHY JOIN US */}
      <section className="why-join-section">
        <div className="container">
          <div className="why-left">
            <h2 className="why-title">WHY JOIN US</h2>
            <p className="why-text">
              Employees are the one valuable asset that each company requires
              the most to enhance the quality of their work and capital
              formation itself. Hence Sahacarah Global has always been a
              support of its staff and associates — we understand the needs and
              desires of our employees and provide them the best possible
              opportunities to do more.
            </p>

            <p className="why-text">
              We consider our company employees as our most valuable asset and
              are committed to provide full encouragement and support to them,
              to enhance their potential and their contribution to the
              Sahacarah Global.
            </p>

            <p className="why-text">
              Sahacarah Global is a customized services marketplace. The
              platform helps customers hire trusted professionals for services
              like designing home, renovation, plumbing, carpentry, interior
              design and all types of commercial & residential designing etc.
            </p>
          </div>

          <div className="why-right">
            <img
              src={whyJoinIllustration}
              alt="Why Join Illustration"
              className="why-image"
            />
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="career-openings" className="career-openings">
        <div className="container openings-wrap">
          <div className="openings-left">
            <img
              src={careerIllustration}
              alt="Career Illustration"
              className="openings-illustration"
            />
          </div>

          <div className="openings-right">
            <div className="openings-header">
              <span className="vacancies-label">VACANCIES</span>
              <h2 className="openings-title">CURRENT OPENINGS</h2>
              <p className="openings-intro">
                We are an Sahacarah Global who believes in excellence, quality
                and honesty — we design beautiful home interiors. If you want
                to be part of a creative and dynamic team, explore our current
                openings below.
              </p>
            </div>

            <div className="job-list">
              {openings.map((job) => (
                <div className="job-card" key={job.id}>
                  <div className="job-number">{job.id}</div>
                  <div className="job-details">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-desc">{job.description}</p>
                    <div className="job-actions">
                      <a href="#apply-form" className="apply-link">
                        Apply Now
                      </a>
                      <a className="more-link" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT JOB APPLICATION */}
      <section className="apply-section" id="apply-form">
        <div className="container apply-wrap">
          <div className="apply-left">
            <img
              src={applyIllustration}
              alt="Apply Illustration"
              className="apply-image"
            />
          </div>

          <div className="apply-right">
            <h3 className="apply-title">Submit Job Application</h3>
            <p className="apply-sub">
              Leave your information here and get reply from our expert in 24
              hours, don’t hesitate to ask.
            </p>

            <form className="apply-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Phone" required />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Applying for" required />
              </div>

              <div className="form-row">
                <textarea placeholder="Brief about yourself / portfolio link" rows="5" />
              </div>

              <div className="form-row captcha-row">
                <label>What is 3*3 = ?</label>
                <input type="text" placeholder="Enter answer" required />
              </div>

              <button type="submit" className="apply-btn">
                Apply Now
              </button>

              <p className="apply-note">
                We’ll review your application and get back within 24-48 hours.
                For queries email{" "}
                <a href="mailto:fitnfixsolutions@gmail.com">
                  fitnfixsolutions@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
