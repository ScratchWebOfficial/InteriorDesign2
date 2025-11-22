import React from "react";
import "./terms.css";
import BannerImage from "../../assets/terms.jpg"; // using your uploaded banner image

const TermsConditions = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="terms-banner"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="breadcrumb">Home  ~  Term & Conditions</p>
      </div>

      {/* Content Section */}
      <div className="terms-container">
        <h2 className="section-title">PRIVACY & POLICY</h2>
        <p className="section-text">
          These are the various Terms & Conditions that reflects our rules and regulation to use the website
          Interiordesignwala.com. By using the website we interpret that you agree to the following terms & conditions
          to the full of your knowledge. If you aren’t agreed to the condition do not access the website.
        </p>

        <h2 className="section-title">WHAT & WHY WE COLLECT INFORMATION</h2>
        <p className="section-text">
          We gather your basic information when you fill up our website query forms, information includes, your name,
          you mobile number, city or location, email address. These information are collected so that we can assist you
          better and improve our service quality.
        </p>

        <h2 className="section-title">COOKIES</h2>
        <p className="section-text">
          Interiordesignwala.com take on the use of cookies, by using Interiordesignwala.com website you are assenting
          our use of cookies in line with interiordesignwala.com policy for privacy. Cookies enable us to track the visits of
          a user, it also facilitate our quality of interaction which we do based on the page you land by using cookies.
        </p>

        <h2 className="section-title">CONTENT COPYRIGHT</h2>
        <p className="section-text">
          Unless stated by us one can’t download/print or publish any material provide over the website
          www.interiordesignwala.com. One must not, sell or rent any material from interiordesignwala.com. Content
          copy and redistribution is highly prohibited.
        </p>

        <h2 className="section-title">HYPERLINKING</h2>
        <p className="section-text">
          Interiordesignwala.com reserves all rights of linking the website, if you do so you must take the approval first.
          Also if you want us to hyperlink your website or page that is under authority of Interiordesignwala.com we
          can anytime remove the hyperlink if found unreliable.
        </p>

        <p className="section-text center">
          For any queries, contact our support team. <br />
          +91-99901 55566 /care@interiordesignwala.com
        </p>
      </div>
    </>
  );
};

export default TermsConditions;
