import React, { useEffect, useState } from "react";
import "./OnlineDesign.css";

// ====== Images ======
import onlineDesignBg from "../../assets/online-design-bg.jpg";
import discussIllustration from "../../assets/discuss-your-space.png";
import pairedIllustration from "../../assets/get-paired-designer.png";
import designIllustration from "../../assets/co-create-designs.png";
import supportIllustration from "../../assets/execution-support.png";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import residentialPortfolio from "../../assets/residential-portfolio.jpg";
import commercialPortfolio from "../../assets/commercial-portfolio.jpg";

import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

// ✅ Icons for WHY US Section
import {
  FaCity,
  FaPenFancy,
  FaMoneyBillWave,
  FaRulerCombined,
  FaWallet,
  FaUserTie,
} from "react-icons/fa";

const OnlineDesign = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Contact us by filling up our query form available on our website. You can also mail us your query at care@interiordesignwala.com, or call/WhatsApp us at +91 9999423006.",
    },
    {
      question: "What process you follow?",
      answer:
        "Share your floor plan and site pictures (if available). We’ll discuss your requirements, taste, and budget. Step 1 includes space planning and theme selection. Step 2 includes sharing customized 3D designs for your review. Step 3 includes final 2D working drawings and material details for execution.",
    },
    {
      question: "What is your cost?",
      answer:
        "The cost depends on the scope of work, total area, and details required. Get in touch with us at +91 9999423006 for the best offer and free consultation.",
    },
    {
      question: "Why go for customized interior designing?",
      answer:
        "In customized interior designing, you can fulfill all your desires and requirements. Designers take care of every minute detail — family structure, taste, and preferences — to create a design uniquely tailored to you. It’s something you must go for.",
    },
  ];

  // ✅ WHY US SECTION DATA
  const whyUsData = [
    {
      icon: <FaCity />,
      title: "Creative Designs",
      description:
        "We offer you the best possible outcome of our creative minds. We make designs that reflect the idea of your living.",
    },
    {
      icon: <FaPenFancy />,
      title: "Free Corrections",
      description:
        "Your satisfaction is our priority. We provide up to 2 times correction in the proposed 3D designs if required as per client satisfaction.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Budget Oriented",
      description:
        "We make designs keeping in mind your budget and preferences, using materials that are under cost without compromising quality.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Tailor Made",
      description:
        "We know everyone has different tastes and requirements, so we provide exclusive and customized interior designs as per your requirement.",
    },
    {
      icon: <FaWallet />,
      title: "Cost Effective",
      description:
        "We care about your budget and provide the most reasonable cost of designing as per the scope of work.",
    },
    {
      icon: <FaUserTie />,
      title: "Dedicated Interior Designer",
      description:
        "You will be assigned a dedicated interior designer to help you through every stage of designing your project.",
    },
  ];

  return (
    <div className="online-design-page">
      {/* ✅ HERO SECTION */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${onlineDesignBg})` }}
      >
        <div className="service-content">
          <h1 className="service-title">ONLINE INTERIOR DESIGNING</h1>
          <p className="service-subtitle">
            Making interior design process smooth, hassle free, ONLINE
          </p>
        </div>
      </section>

      {/* ✅ HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <div className="how-it-works-header">
          <h5 className="design-online">DESIGN ONLINE</h5>
          <h2 className="how-title">
            HOW <span>IT WORKS</span>
          </h2>
          <p className="how-subtitle">Customized & Affordable Designs</p>
        </div>

        <div className="how-stage">
          <div className="how-text">
            <h6 className="stage-label">Stage 1</h6>
            <h3 className="stage-title">DISCUSS YOUR SPACE</h3>
            <p className="stage-description">
              Connect with our <strong>expert consultant</strong> via phone or
              online, or leave a query — we’ll contact you soon. Show us your
              space through pictures, share floor plans and discuss your{" "}
              <strong>requirements</strong>.
            </p>
          </div>
          <div className="how-image">
            <img src={discussIllustration} alt="Discuss your space" />
          </div>
        </div>

        <div className="how-stage reverse">
          <div className="how-text">
            <h6 className="stage-label">Stage 2</h6>
            <h3 className="stage-title">GET PAIRED WITH DESIGNER</h3>
            <p className="stage-description">
              Once aboard, you’ll be paired with a{" "}
              <strong>dedicated interior designer</strong> who’ll coordinate
              with you throughout the project.
            </p>
          </div>
          <div className="how-image">
            <img src={pairedIllustration} alt="Get paired with designer" />
          </div>
        </div>

        <div className="how-stage">
          <div className="how-text">
            <h6 className="stage-label">Stage 3</h6>
            <h3 className="stage-title">CO-CREATE THE DESIGNS</h3>
            <p className="stage-description">
              The designer will create 3D layouts and concepts as per{" "}
              <strong>Vastu</strong> and your <strong>budget</strong>. You’ll
              visualize the exact look & feel with ceiling, wall, lighting, and
              furniture designs before execution.
            </p>
          </div>
          <div className="how-image">
            <img src={designIllustration} alt="Co-create the designs" />
          </div>
        </div>

        <div className="how-stage reverse">
          <div className="how-text">
            <h6 className="stage-label">Stage 4</h6>
            <h3 className="stage-title">EXECUTION SUPPORT</h3>
            <p className="stage-description">
              Our designers provide <strong>telephonic support</strong> during
              execution to ensure smooth implementation.
            </p>
          </div>
          <div className="how-image">
            <img src={supportIllustration} alt="Execution support" />
          </div>
        </div>
      </section>

      {/* ✅ ABOUT OUR COMPANY SECTION */}
      <section className="about-company-section">
        <div className="about-content">
          <div className="about-logo-container">
            <img src="/logo.png" alt="Company Logo" className="about-logo" />
          </div>

          <h5 className="about-subtitle">ABOUT OUR COMPANY</h5>
          <h2 className="about-title">
            CREATING LASTING IMPRESSIONS THROUGH
          </h2>
          <h2 className="about-title">INTERIOR DESIGN.</h2>

          <div className="about-buttons">
            <a href="tel:+919999423006" className="about-btn phone">
              <FaPhoneAlt className="btn-icon" /> +91 9999423006
            </a>
            <a href="/contact" className="about-btn consult">
              Book Online Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* ✅ RECENT WORK SECTION */}
      <section className="recent-work-section">
        <div className="recent-header">
          <div>
            <h5 className="recent-subtitle">PROJECTS</h5>
            <h2 className="recent-title">
              <strong>RECENT</strong> WORK
            </h2>
          </div>
          <a href="/portfolio/residential" className="explore-more">
            Explore More →
          </a>
        </div>

        <div className="recent-grid">
          {[project1, project2, project3].map((img, i) => (
            <div className="project-card" key={i}>
              <img src={img} alt={`Project ${i + 1}`} />
              <div className="project-overlay">
                <button className="project-btn">
                  <FaArrowRight />
                </button>
                <p className="project-client">
                  {i === 0
                    ? "Mr. Saurabh Sharma"
                    : i === 1
                    ? "Mr. Madhav"
                    : "Mr. Ashish Ojha"}
                </p>
                <h4 className="project-title">
                  {i === 0
                    ? "Co-Working Space Office Interior"
                    : i === 1
                    ? "Modern Office Interior Online"
                    : "3BHK Duplex House with Terrace Interior"}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ PORTFOLIO SECTION */}
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            OUR <span>PORTFOLIO</span>
          </h2>
        </div>

        <div className="portfolio-container">
          <div className="portfolio-card">
            <img
              src={residentialPortfolio}
              alt="Residential Interior Designing"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3>Residential Interior Designing</h3>
              <a href="/portfolio/residential" className="portfolio-link">
                Explore More →
              </a>
            </div>
          </div>

          <div className="portfolio-card">
            <img
              src={commercialPortfolio}
              alt="Commercial Interior Designing"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3>Commercial Interior Designing</h3>
              <a href="/portfolio/commercial" className="portfolio-link">
                Explore More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <h5 className="faq-subtitle">FAQ’S</h5>
            <h2 className="faq-title">Most Asked Questions</h2>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item-wrapper">
                  <div
                    className={`faq-item ${openFAQ === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4>{faq.question}</h4>
                    <span className="faq-icon">
                      {openFAQ === index ? "−" : "?"}
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="faq-right">
            <div className="consult-box">
              <div className="consult-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Consult with expert &</h3>
              <h3>Start today</h3>
              <div className="consult-details">
                <p className="consult-phone">+91 99994 23006</p>
                <p className="consult-email">
                  Email: care@interiordesignwala.com
                </p>
              </div>
              <a href="/contact" className="consult-btn">
                Make Appointment →
              </a>
            </div>

            <div className="download-box">
              <a href="/sample-drawing.pdf" className="download-btn" download>
                <i className="fas fa-download"></i>
                Download sample drawing (880kb)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FREE DESIGN CONSULTATION SECTION */}
      <section className="consultation-section">
        <div className="consultation-container">
          <h5 className="consultation-subtitle">PAIR WITH DESIGNER</h5>
          <h2 className="consultation-title">GET FREE DESIGN CONSULTATION</h2>
          <p className="consultation-text">
            Have questions? Ask NOW. Share your requirements details and consult
            the expert.
          </p>

          <form className="consultation-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Phone" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Location" required />
              <div className="radio-group">
                <label>
                  <input type="radio" name="type" defaultChecked /> 2 BHK
                </label>
                <label>
                  <input type="radio" name="type" /> 3 BHK
                </label>
                <label>
                  <input type="radio" name="type" /> 4 BHK+
                </label>
                <label>
                  <input type="radio" name="type" /> Commercial
                </label>
              </div>
            </div>

            <textarea
              placeholder="Your Requirements"
              rows="4"
              required
            ></textarea>

            <div className="form-row">
              <label className="captcha-label">
                What is 3*3=?
                <input type="text" placeholder="" required />
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ✅ WHY US SECTION WITH HOVER OVERLAY */}
      <section className="why-us-section">
        <div className="why-us-container">
          <h5 className="why-subtitle">WHY US</h5>
          <h2 className="why-title">
            PEOPLE <strong>CHOOSE</strong> US FOR
          </h2>

          <div className="why-grid">
            {whyUsData.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <div className="why-overlay">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineDesign;
