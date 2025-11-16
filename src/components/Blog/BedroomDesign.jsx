import React from "react";
import "./BedroomDesign.css";
import { AiFillHome } from "react-icons/ai";


import bed1 from "../../assets/bedroom1.jpg";
import bed2 from "../../assets/bedroom2.jpg";
import bed3 from "../../assets/bedroom3.jpg";
import bed4 from "../../assets/bedroom4.jpg";
import bed5 from "../../assets/bedroom5.jpg";
import bed6 from "../../assets/bedroom6.jpg";
import bed7 from "../../assets/bedroom7.jpg";
import bed8 from "../../assets/bedroom8.jpg";


const data = [
  {
    img: bed1,
    category: "Bedroom Design Ideas",
    title: "Your Dream Master Bedroom Colour Palette: A Comprehensive Guide",
    author: "Shreya Billagi",
    time: "8 Min Read",
    desc:
      "Our comprehensive guide to choosing the right master bedroom colours will elevate your style and create an oasis of calm..."
  },
  {
    img: bed2,
    category: "Bedroom Design Ideas",
    title:
      "Complete Modern Bedroom Door Design Guide: Styles, Materials & Tips",
    author: "Cindy Christopher Dmello",
    time: "6 Min Read",
    desc:
      "Unlock your style with sleek bedroom door design ideas that suit every home, from minimal flats to spacious bedrooms..."
  },
  {
    img: bed3,
    category: "Bedroom Design Ideas",
    title: "Check out These 10 Modern Bedroom Wall Stencils Design Ideas",
    author: "Pooja Dara",
    time: "9 Min Read",
    desc:
      "Consider stencil ideas for bedroom walls because of their versatility and style. Read more here..."
  },
    {
    img: bed4,
    category: "Bedroom Design Ideas",
    title:
      "Wake Up To The Scenic Outdoors With These Awesome Bedroom Window Designs Ideas",
    author: "Pooja Dara",
    time: "5 Min Read",
    desc:
      "Select practical yet beautiful window designs to give your bedroom the much-needed facelift and create a warm and inviting ambience..."
  },
  {
    img: bed5,
    category: "Bedroom Design Ideas",
    title: "Trend Alert: 8 Space-saving Dressing Tables for Small Bedrooms",
    author: "Mehnaz Farooque",
    time: "5 Min Read",
    desc:
      "Spruce up your home with these beautiful yet compact dressing table ideas for small bedrooms. One of the easiest ways..."
  },
  {
    img: bed6,
    category: "Bedroom Design Ideas",
    title:
      "Mastering Irregular Spaces: Creative Bedroom Designs for Unconventional Room Shapes",
    author: "Pooja Dara",
    time: "12 Min Read",
    desc:
      "Turn every corner of your irregular-shaped bedroom design into a stunning and personalised haven with our expert design tips, strategies..."
  },
  {
    img: bed7, 
    category: "Bedroom Design Ideas",
    title: "2025’s Hot Bedroom Decor Trends That You Mustn’t Miss!",
    author: "Nikita Raikwar",
    time: "6 Min Read",
    desc:
      "Itching to spruce up your bedroom interiors this year? Here are the hottest trends in bedroom decor that hit the..."
  },
  {
    img: bed8, 
    category: "Bedroom Design Ideas",
    title: "7 Best Bedroom Wall Colour Combinations You’ll Absolutely Love",
    author: "Mehnaz Farooque",
    time: "8 Min Read",
    desc:
      "Give your sleep haven the best makeover with these bedroom colour combinations. From subtle to eclectic, we’ve got one for..."
  }
];

const BedroomDesign = () => {
  return (
    <div className="bd-container">
     <div className="bd-breadcrumb">
  <AiFillHome className="bd-home-icon"/>
  <span>
    &gt; <span className="bd-blue">Blog</span> &gt; Bedroom Design Ideas
  </span>
</div>

      <h2 className="bd-title">Bedroom Design Ideas</h2>

      {data.map((item, i) => (
        <div className="bd-item" key={i}>
          <img src={item.img} className="bd-img" alt="Bedroom" />

          <div className="bd-content">
            <span className="bd-category">{item.category}</span>

            <h3 className="bd-item-title">{item.title}</h3>

            <p className="bd-meta">
             By<span className="bd-author"> {item.author}</span> &nbsp; {item.time}
            </p>

            <p className="bd-desc">{item.desc}</p>

            <span className="bd-readmore">Read More...</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BedroomDesign;
