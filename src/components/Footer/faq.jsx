import React from "react";
import "./faq.css";

import img1 from "../../assets/hero22.jpg";

const faq = () => {

  // FAQ question groups for 4 blocks
  const faqBlock1 = [
    "How do I get started?",
    "What process you follow?",
    "What is your cost?",
    "Do you make budget oriented interiors?",
    "Why do I need an Interior Designer?",
    "Why go for customized interior designing?",
    "What should I have at our first meeting for my project?",
  ];

  const faqBlock2 = [
    "Do you provide onsite consultancy?",
    "How much will my interior design project cost?",
    "Do you provide correction in the proposed designs?",
    "What is your refund policy?",
    "Does InteriorDesignWala.com provide site execution services?",
    "How many options do you provide?",
    "How will I get my interior design delivered?",
    "Do you provide after sells support?",
  ];

  const faqBlock3 = [
    "What is the better time to start thinking about interior design?",
    "What all services are included in designing with execution?",
    "What are the procedures you follow for interiors?",
    "Will you assign a dedicated interior designer for my project specifically?",
    "Will we get standard or customized designs?",
    "How do I get an idea of how my home will look like?",
  ];

  const faqBlock4 = [
    "What is the budget of interiors designed by you?",
    "What is the minimum time you take for the completion of one project?",
    "In which locations you provide execution service?",
    "Do you provide material as well?",
    "What are the all brands and quality you use for material?",
    "Does site supervision is also included in your service?",
    "Do you provide after support?",
  ];

  return (
    <div className="full-wrapper">

      {/* UI 1 - HERO BACKGROUND */}
      <section className="hero-section">
        <img src={img1} className="hero-bg" alt="Hero" />
        <div className="hero-text">
          <h1>Customers FAQ's</h1>
          <p>Find Answers To Your Queries</p>
          <span>Home ~ FAQ's</span>
        </div>
      </section>

      {/* UI 2 - MAIN HEADING */}
      <section className="main-heading">
        <h2>Online Interior Designing</h2>
        <p>Turnkey Projects (Delhi - NCR)</p>
      </section>

      {/* UI 3 - FAQ BLOCK 1 */}
      <section className="faq-section">
        {faqBlock1.map((q, i) => (
          <div className="faq-box" key={i}>
            <p>{q}</p>
            <div className="faq-icon">?</div>
          </div>
        ))}
      </section>

      {/* UI 4 - FAQ BLOCK 2 */}
      <section className="faq-section">
        {faqBlock2.map((q, i) => (
          <div className="faq-box" key={i}>
            <p>{q}</p>
            <div className="faq-icon">?</div>
          </div>
        ))}
      </section>

      {/* UI 5 - DESIGNED & EXECUTED */}
      <section className="designed-executed-section">
        <img src={img5} alt="Designed Executed" className="designed-img" />
      </section>

      {/* UI 6 - FAQ BLOCK 3 */}
      <section className="faq-section">
        {faqBlock3.map((q, i) => (
          <div className="faq-box" key={i}>
            <p>{q}</p>
            <div className="faq-icon">?</div>
          </div>
        ))}
      </section>

      {/* UI 7 - FAQ BLOCK 4 */}
      <section className="faq-section">
        {faqBlock4.map((q, i) => (
          <div className="faq-box" key={i}>
            <p>{q}</p>
            <div className="faq-icon">?</div>
          </div>
        ))}
      </section>

    </div>
  );
  
};

export default faq;


