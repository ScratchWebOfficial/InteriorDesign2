import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";


import c1 from "../../assets/blogs1.jfif";
import c2 from "../../assets/blogs2.webp";
import C3 from "../../assets/blogs3.jfif";
import c4 from "../../assets/blogs4.jfif";
import c5 from "../../assets/blogs5.jfif";
import c6 from "../../assets/blogs1.jfif";
import c7 from "../../assets/blogs1.jfif";
import c8 from "../../assets/blogs1.jfif";
import c9 from "../../assets/blogs1.jfif";
import c10 from "../../assets/blogs1.jfif";

const categories = [
  { title: "Home Interior Design Ideas", img: c5, link: "/blog/home-interior" },
  { title: "Modular Kitchen Design Ideas", img: c4, link: "/blog/modular-kitchen" },
  { title: "Living Room Design Ideas", img: C3, link: "/blog/living-room" },
  { title: "Bedroom Design Ideas", img: c2, link: "/blog/bedroom-design" },
];

const articles = [
  {
    img: c1,
    category: "Bedroom Design Ideas",
    categoryLink: "/blog/bedroom-design",
    title: "Your Dream Master Bedroom Colour Palette: A Comprehensive Guide",
    author: "Shreya Bilagi",
    read: "5 Min Read",
    desc: "Choosing the right master bedroom colours will elevate your style and create an oasis of calm...",
    link: "/blog/master-bedroom",
  },
  {
    img: c2,
    category: "Home Interior Design Ideas",
    
    title: "Elevate Your Space with a Stunning Monochromatic Interior Design",
    author: "Mehera Fonozque",
    read: "7 Min Read",
    desc: "A timeless sophistication guide to monochromatic interior design and how to style your home beautifully...",
    link: "/blog/monochromatic",
  },
  {
    img: C3,
    category: "Dining Room Design Ideas",
    title: "Dining Table Types: Explore Styles, Materials & Designs for Every Home",
    author: "Pranay Jayakrishnan",
    read: "6 Min Read",
    desc: "Find the perfect dining table type that suits your family's lifestyle and enhances your interior...",
    link: "/blog/dining-table-types",
  },
  {
    img: c4,
    category: "Home Interior Design Ideas",
    title: "HDF Board Guide: Strong, Smooth & Stylish Choice for Every Project",
    author: "Nitika Raiwear",
    read: "6 Min Read",
    desc: "HDF boards blend strength with style, making them a top interior material choice...",
    link: "/blog/hdf-board",
  },
  {
    img: c5,
    category: "Modular Kitchen Design Ideas",
    title: "Sleek, Strong & Stunning: Explore the Best Types of Aluminium Kitchen Cabinets",
    author: "Pooja Darie",
    read: "7 Min Read",
    desc: "Aluminium kitchen cabinets are lightweight, moisture-resistant and extremely durable...",
    link: "/blog/aluminium-kitchen",
  },
  {
  img: c6,
  category: "Home Interior Design Ideas",
  title: "Window Vastu Tips: Usher in Positive Energy & Harmony in Your Home",
  author: "Sreya Dasgupta",
  read: "6 Min Read",
  desc: "Discover essential Window Vastu principles to bring balance, positivity and tranquillity into your living spaces with simple yet powerful design adjustments...",
  link: "/blog/window-vastu-tips",
  },
  {
  img: c7, 
  category: "Kids Bedroom Design Ideas",
  title: "10 Expert Kids Bedroom Design Tips for a Fun and Functional Space",
  author: "Parvathy Jayakrishnan",
  read: "6 Min Read",
  desc: "Fun meets function in every corner with these expert kids’ bedroom design ideas. Designing a kids’ bedroom is all about...",
  link: "/blog/kids-bedroom-tips",
  },
  {
  img: c8, 
  category: "Home Interior Design Ideas",
  title: "Perfect 30×40 House Plans for Smart & Stylish Living",
  author: "Nikita Raikwar",
  read: "7 Min Read",
  desc: "On a 30×40 plot, every corner counts. With the right planning, it transforms into a home that’s practical, vastu-friendly, and...",
  link: "/blog/30x40-house-plans",
  },
  {
  img: c9,
  category: "Home Interior Design Ideas",
  title: "Wall Panelling Cost in India: Types, Prices and Budget Guide",
  author: "Nikita Raikwar",
  read: "7 Min Read",
  desc: "Upgrade your walls without overspending. Learn about wall panelling types, price breakdowns and cost-efficient design choices for every home...",
  link: "/blog/wall-panelling-cost",
  },
  {
  img: c10, 
  category: "Home Interior Design Ideas",
  title: "Pooja Mandir Jali Design: Intricate Patterns Blending Tradition & Divinity",
  author: "Parvathy Jayakrishnan",
  read: "6 Min Read",
  desc: "Explore trending pooja room designs featuring exquisite jali work that blends time-honoured tradition with elegant aesthetics for a serene spiritual experience...",
  link: "/blog/pooja-mandir-jali-design",
  },
];

const trending = [
  { img: c2, title: "How To Incorporate Smart Technology Into A Modular Kitchen Design", link: "/blog/smart-kitchen" },
  { img: c3Placeholder(), title: "No Puja Room? A TV Unit With Mandir Solves Your Problem!", link: "/blog/tv-unit-mandir" },
  { img: c4, title: "Top Interior Design Homes By DesignCafe In A City Near You", link: "/blog/top-interior-homes" },
  { img: c5, title: "Best Way To Finance Your Interiors On EMI With DesignCafe", link: "/blog/finance-emi" }
];

// helper small placeholder when c3 isn't used for trending thumbnail (just reuse C3)
function c3Placeholder() {
  return C3;
}

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-heading">Top Categories</h2>

      {/* Top categories grid (your current style) */}
      <div className="blog-grid">
        {categories.map((cat, i) => (
          <a className="blog-card" key={i} href={cat.link}>
            <div className="blog-image-wrapper">
              <img src={cat.img} alt={cat.title} className="blog-image" />
            </div>
            <p className="blog-title">{cat.title}</p>
          </a>
        ))}
      </div>

      {/* Page content: main list + sidebar */}
      <div className="page-content">

        {/* MAIN: article list */}
        <main className="main-column">
          <div className="blog-list-section">
            {articles.map((item, idx) => (
              <article className="blog-list-item" key={idx}>
                <a href={item.link}>
                  <img src={item.img} alt={item.title} className="blog-list-img" />
                </a>

                <div className="blog-list-content">
                 {/*<p className="blog-list-category">{item.category}</p>*/} 
                 <Link to={item.categoryLink} className="blog-list-category">
                    {item.category}
                 </Link>


                  <h3 className="blog-list-title">
                    <a href={item.link}>{item.title}</a>
                  </h3>

                  <p className="blog-list-author">
                    By <span>{item.author}</span> | {item.read}
                  </p>

                  <p className="blog-list-desc">{item.desc}</p>

                  <a className="blog-list-readmore" href={item.link}>Read More…</a>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Search */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Search For Design Ideas</h4>
            <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
              <input type="text" placeholder="Search ..." className="search-input" />
            </form>
          </div>

          {/* Talk To A Designer */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Talk To A Designer</h4>
            <form className="talk-form" onSubmit={(e)=>{ e.preventDefault(); alert('Form submitted (demo)'); }}>
              <input name="name" placeholder="Enter your name" className="input-field" />
              <div className="phone-row">
                <select className="country-code">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input name="phone" placeholder="Enter your mobile number" className="input-field phone-input" />
              </div>

              <label className="checkbox-row">
                <input type="checkbox" defaultChecked /> Send me updates on WhatsApp
              </label>

              <select className="input-field">
                <option>Select Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>

              <select className="input-field">
                <option>Select Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>

              <button type="submit" className="cta-btn">Book Free Consultation</button>
              <p className="small-note">By submitting this form, you agree to the privacy policy and terms of use.</p>
            </form>
          </div>

          {/* Trending Topics */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Trending Topics</h4>

            <ul className="trending-list">
              {trending.map((t, i) => (
                <li key={i} className="trending-item">
                  <a href={t.link}>
                    <img src={t.img} alt="" className="trending-thumb" />
                    <div className="trending-text">
                      <div className="trending-title">{t.title}</div>
                      <div className="read-more-small">Read more…</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Blog;
