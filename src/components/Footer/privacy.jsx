import React from "react";
import "./privacy.css";
import BannerImage from "../../assets/bg1.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="privacy-banner"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="privacy-banner-text">Privacy Policies</h1>
        <p className="breadcrumb">Home ~ Privacy Polices</p>
      </div>

      {/* Content Section */}
      <div className="privacy-container">
        <h2 className="section-title">OUR POLICY</h2>
        <p className="section-text">
          Interiordesignwala.com is strongly committed to preserving the privacy of its
          customers. This privacy statement lets you know about our policies for the
          collection and use of information about you and contracts we are doing with you.
        </p>

        <h2 className="section-title">WHEN YOU CREATE AN ACCOUNT WITH US</h2>
        <p className="section-text">
          Our site’s registration form asks you to give us contact information, including your
          address, phone number and email address. You may give us as much or as little of
          this information as you like. We use the information provided to entertain your query
          by getting in touch with you.
        </p>

        <h2 className="section-title">WHEN YOU GET ONBOARD</h2>
        <p className="section-text">
          Once we are tied up with you for your contract, we do not share your where about,
          contract details or any other information with anyone. At the same time the where
          about information will be shared with person who is included in the process with
          your due permission.
        </p>

        <h2 className="section-title">SECURITY</h2>
        <p className="section-text">
          All of our transactions automatically take place on a secure server. All of your
          personal information is encrypted before it is transmitted over the Internet. None of
          our customers has ever reported fraudulent use of a credit card as a result of
          purchases made at Interiordesignwala.com
        </p>

        <p className="section-text center">
          For any queries, contact our support team. <br />
          +91-99901 55566 /care@interiordesignwala.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
