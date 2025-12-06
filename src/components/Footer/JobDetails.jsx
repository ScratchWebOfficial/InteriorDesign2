import React from "react";
import "./jobdetails.css";

export default function JobDetails() {
  return (
    <div className="jobdetails-container">
      <div className="jobdetails-header">
        <h1>Design Consultant</h1>

        <div className="jobdetails-tags">
          <span className="tag"><i className="fas fa-palette"></i> Design</span>
          <span className="tag"><i className="fas fa-map-marker-alt"></i> Mysore</span>
        </div>

        <button className="apply-btn-top">Apply Now</button>
      </div>

      {/* Job Description Section */}
      <div className="job-section">
        <h2>Job Description</h2>

        <h3>JOB DESCRIPTION</h3>
        <ul>
          <li>Be the Lead Designer for premium set of HomeLane customers, from the first meeting to order booking to design finalization.</li>
          <li>Collaborate with the customer, understand their requirements, and give them the best design solution for their home, including but not limited to, quoting, detailed designing and getting production drawings ready for manufacturing.</li>
          <li>Focus on, prioritize and execute multiple design projects.</li>
          <li>Analyze sales reports, project TAT and customer satisfaction.</li>
          <li>Work closely with various departments of HomeLane to improvise design offerings for the customers.</li>
        </ul>
      </div>

      {/* Job Requirement Section */}
      <div className="job-section">
        <h2>Job Requirement</h2>

        <h3>EXPERTISE AND QUALIFICATIONS</h3>
        <ul>
          <li>Minimum - 4 year Diploma in Interior Designing / Architecture from a reputed Institution.</li>
          <li>Work Experience: 10+ years of industry experience OR 6+ years of industry experience (within which they have 2+ years in HL).</li>
          <li>Must have Site Experience (should be confident that proposed designs can be installed with minimum hassle at the site).</li>
          <li>Must be customer-centric in providing solutions - proposed designs should be highly functional and great on aesthetics, still keeping in mind the customer’s budget.</li>
          <li>Exposure to residential projects is mandatory.</li>
          <li>Google SketchUp software knowledge.</li>
          <li>Strong communication skills - Both verbal and written communication.</li>
          <li>Communication in English is mandatory and the local language is also desirable.</li>
        </ul>
      </div>

      <button className="apply-btn-bottom">Apply Now</button>

      {/* Social Icons */}
      <div className="social-icons">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fas fa-envelope"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
}
