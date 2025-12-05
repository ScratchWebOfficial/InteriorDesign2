import React from "react";
import "./join.css";

import joinus from "../../assets/joinus.jpg"; 

export default function JoinUsPage() {
  return (
    <div className="page-container">
      {/* Hero Section Image */}
      <div className="hero-section">
        <img src={joinus} alt="Hero" className="hero-image" />
      </div>

      {/* Jobs Section */}
      <div className="jobs-section">
        <h1>143 Open Jobs</h1>

        <div className="filters">
          <select>
            <option>All Departments</option>
          </select>
          <select>
            <option>All Locations</option>
          </select>
        </div>

        <table className="jobs-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Location</th>
              <th>Department</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Design Consultant</td>
              <td>Mysore</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Dilsukhnagar</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Design Partner</td>
              <td>Ranchi</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Senior Executive Relationship Management</td>
              <td>Hyderabad</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Design Manager</td>
              <td>Chandigarh</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Design Manager</td>
              <td>Ghaziabad</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Manager</td>
              <td>Noida</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Sales Manager</td>
              <td>Chattisgarh</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Assistant Sales Manager-1</td>
              <td>Gopalan</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Vadodara</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Bangalore</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Sales Manager</td>
              <td>Trivandrum</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Gopalan</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Sales Manager</td>
              <td>Nashik</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Trivandrum</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Ahemdabad</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Manager</td>
              <td>Nashik</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Manager</td>
              <td>Pune</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Customer Success Relationship</td>
              <td>Kolkata</td>
              <td>Buisness</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Customer Success Relationship</td>
              <td>Bangalore</td>
              <td>Buisness</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Customer Success Representative</td>
              <td>Bangalore</td>
              <td>Buisness</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Sales Manager</td>
              <td>Mumbai</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Senior Manager-Buisness</td>
              <td>Nagpur</td>
              <td>Buisness</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Senior Execuitive-Relationship Management</td>
              <td>OMR</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Design Consulatant</td>
              <td>Jaipur</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
             <tr>
              <td>Car Executive</td>
              <td>Bangalore</td>
              <td>Care</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consulatant</td>
              <td>Gachibowli</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Quantity Surveyor</td>
              <td>Ahmedabad</td>
              <td>Program</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consulatant</td>
              <td>Kompally</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consulatant</td>
              <td>Visakhapatnam</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Partner</td>
              <td>Gurugram</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Jaipur</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Madurai</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Salem</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Manager</td>
              <td>Mumbai</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>SEO Manager</td>
              <td>Banglore</td>
              <td>Digital</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Principal Design Consultant</td>
              <td>Banglore</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Quantity Surveyor</td>
              <td>Gurugram</td>
              <td>Program</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Manager</td>
              <td>Lucknow</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Kasba</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Senior Executive-Relationship Manager</td>
              <td>Chennai</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Chennai</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Sales Manager</td>
              <td>Visakhapatnam</td>
              <td>Sales</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant(FOFO)</td>
              <td>Nagpur</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Nashik</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Anna Nagar</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Consultant</td>
              <td>Kokapet</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Design Associate</td>
              <td>Mumbai</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Principal Designer</td>
              <td>Ghaziabad</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>
            <tr>
              <td>Principal Designer</td>
              <td>Ranchi</td>
              <td>Design</td>
              <td><button className="view-btn">View Job</button></td>
            </tr>

            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>

      {/* Talent Pool Section */}
      <div className="talent-pool">
        <h2>Join Talent Pool</h2>
        <p>
          Join our talent pool by simply submitting your resume. We’ll inform you
          about the new jobs matching your profile and update you if you are the
          best fit for one of our open positions.
        </p>
        <button className="submit-btn">Submit Resume</button>
      </div>
    </div>
  );
}

