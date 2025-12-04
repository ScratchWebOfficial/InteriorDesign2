import React from "react";
import "./disclaimer.css";

export default function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h1 className="heading">Disclaimer</h1>

      <section className="section">
        <h2 className="sub-heading">About</h2>
        <p className="text">
          This website - HomeLane.com is owned and operated by Homevista Decor
          and Furnishings Private Limited.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">No Warranty</h2>
        <p className="text">
          MS Dhoni does not warrant that any content related to product and 
          services offered or information contained on this site is accurate, 
          correct, complete or up-to-date, and hereby disclaims any and all 
          liability to any person for any actual or threatened loss or damage 
          caused by errors or omissions, whether such errors or omissions result 
          from negligence, accident or otherwise. MSD assumes no liability for 
          the use of this site, nor does it offer any warranty of any kind, 
          either expressed or implied in relation to such product or services.
        </p>
      </section>
    </div>
  );
}
