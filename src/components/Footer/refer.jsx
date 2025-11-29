import React, { useState } from "react";
import "./refer.css";

import heroRight from "../../assets/right.jpg";
import stepsImg from "../../assets/left.jpg";

import { FaFacebookF, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaShieldAlt, FaCalendarAlt, FaUserTie, FaTools } from "react-icons/fa";

export default function ReferPage() {
  const [activeTab, setActiveTab] = useState("link");
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="refer-page">
      <section className="refer-hero">
        <div className="refer-left">
          <h1>
            Loved us? <span>Now refer us!</span>
          </h1>
          <p>
            Refer and earn <b>BIG</b> every time your friends try HomeLane.
          </p>

          <div className="refer-card">

            <div className="refer-tabs">
              <button
                className={activeTab === "link" ? "active" : ""}
                onClick={() => setActiveTab("link")}
              >
                Referral Link
              </button>
              <button
                className={activeTab === "invite" ? "active" : ""}
                onClick={() => setActiveTab("invite")}
              >
                Send Invite
              </button>
            </div>
            {activeTab === "link" && (
              <div className="refer-content fade-in">
                <label>Your Phone Number</label>
                <input type="text" placeholder="Enter number" />
                <button className="primary-btn">GENERATE LINK</button>

                <p className="share-text">Share the good word</p>

                <div className="social-icons">

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/?text=Check%20this%20out!"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                        </a>

                                {/* Twitter */}
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                        {/* Email */}
                        <a href="https://mail.google.com/mail/?view=cm&fs=fitnfixsolutions@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                  <FaEnvelope />
                                </a>

                        </div>

              </div>
            )}
            {activeTab === "invite" && (
              <div className="refer-content fade-in">
                <p>Know someone interested in us?</p>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Your Phone" />
                <button className="primary-btn">I KNOW SOMEONE</button>
              </div>
            )}
 
          </div>
        </div>

        <div className="refer-right">
          <img src={heroRight} alt="Refer Hero" />
        </div>
      </section>

      <section className="steps-section">
        <img src={stepsImg} alt="Steps" className="steps-img" />

        <div className="steps-text">
          <h2>Refer and Earn in 3 easy steps</h2>

          <div className="step-indicator">
            <div
              className={`circle ${activeStep === 1 ? "active" : ""}`}
              onClick={() => setActiveStep(1)}
            >
              1
            </div>
            <div className="line"></div>

            <div
              className={`circle ${activeStep === 2 ? "active" : ""}`}
              onClick={() => setActiveStep(2)}
            >
              2
            </div>
            <div className="line"></div>

            <div
              className={`circle ${activeStep === 3 ? "active" : ""}`}
              onClick={() => setActiveStep(3)}
            >
              3
            </div>
          </div>

          {activeStep === 1 && (
            <div className="step-info fade-in">
              <h3 className="step-highlight">Refer</h3>
              <p>Tell your friends about us</p>
            </div>
          )}

          {activeStep === 2 && (
            <div className="step-info fade-in">
              <h3 className="step-highlight">Relax</h3>
              <p>Your friend books us</p>
            </div>
          )}

          {activeStep === 3 && (
            <div className="step-info fade-in">
              <h3 className="step-highlight">Rejoice</h3>
              <p>Your friend pays half, we pay you full</p>
            </div>
          )}

        </div>
      </section>

      <section className="terms-box">
        <h2>Terms and Conditions</h2>
        <p>By participating in the HomeLane Refer & Earn program, you agree to the following terms and conditions:
</p>
        <ol>
          <li>Eligibility: The program is open to all existing HomeLane customers with an active or completed HomeLane project.
            .</li>
          <li>Successful Referral: erral is considered successful when:<br/>

                The referred customer places an order with HomeLane.<br/>
                The referred customer pays the First Installment of the total project value.<br/>
                The referred customer project includes a minimum of INR 4,00,000 in value, maintained across all project stages.<br/>
                Note: Customers already existing in the HomeLane database through any source of lead generation are not eligible to be counted as referrals.<br/>
         </li>
          <li>Referral Bonus Structure: The Referral Bonus will be provided in the manner as follows:<br/>
            1st successful referral - INR 20,000.<br/>
            2nd successful referral - INR 30,000.<br/>
            3rd successful referral onwards - INR 50,000 per referral.<br/>
            </li>
          <li>Referral Bonus Payment: The payment of the referral bonus shall be credited directly to the bank account of the existing HL customer (referred by).
            </li>
          <li>General Terms:<br/>
            Referrals must be genuine. HomeLane reserves the right to deny bonuses in cases of suspected fraud or misuse.<br/>
            HomeLane may, at its sole discretion, modify, suspend, or terminate the referral program at any time without prior notice.<br/>
            Referral bonuses are non-transferable and cannot be redeemed for cash except as per the conditions stated above.<br/></li>
        </ol>
      </section>

      <section className="refer-highlights">
        <div>
          <FaShieldAlt className="highlight-icon" />
          <h4>Flat 10 year warranty</h4>
          <p>Superior quality interiors</p>
        </div>

        <div>
          <FaCalendarAlt className="highlight-icon" />
          <h4>45-days delivery*</h4>
          <p>Fast interior delivery</p>
        </div>

        <div>
          <FaUserTie className="highlight-icon" />
          <h4>600+ design experts</h4>
          <p>Top experienced team</p>
        </div>

        <div>
          <FaTools className="highlight-icon" />
          <h4>Post-installation service</h4>
          <p>Dedicated care team</p>
        </div>
      </section>

    </div>
  );
}
