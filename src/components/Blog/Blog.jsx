import React from "react";
import "./Blog.css";
import blogBg from "../../assets/blog-bg.jpg"; // Blog hero background
import blogMainImage from "../../assets/blog-main.jpg"; // Add this image for main blog post

const Blog = () => {
  return (
    <div className="blog-page">
      {/*  Hero Section */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="blog-overlay">
          <h1 className="blog-title">Stories Behind The Charm</h1>
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-home">
              Home
            </a>
            <span> ~ </span>
            <span className="breadcrumb-current">Blog</span>
          </div>
        </div>
      </div>

      {/* 📰 Blog Main Section */}
      <section className="blog-content-section">
        <div className="blog-container">
          {/* Left Column - Blog Image or Content */}
          <div className="blog-main">
            <img
              src={blogMainImage}
              alt="Main Blog"
              className="blog-main-image"
            />
          </div>

          {/* Right Column - Sidebar */}
          <aside className="blog-sidebar">
            {/* Search Bar */}
            <div className="sidebar-box search-box">
              <input
                type="text"
                placeholder="Search Keyword"
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>

            {/* Categories */}
            <div className="sidebar-box categories-box">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="category-list">
                <li>➕ Interior Design Tips</li>
                <li>➕ Residential Interiors</li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-box recent-box">
              <h3 className="sidebar-title">Recent Post</h3>
              <p className="recent-date">2020-01-21 10:33:19</p>
            </div>
          </aside>
        </div>
      </section>

          {/* 🧩 Blog Card Section */}
      <section className="blog-card-section">
      <div className="blog-card">
        <img
          src={blogMainImage}
              alt="Main Blog"
          className="blog-card-image"
        />

        <div className="blog-card-content">
          <h2 className="blog-card-title">
            7 Effective Do’s and Dont’s of Making Pooja Room Designs in Homes
          </h2>

          <div className="blog-card-meta">
            <span>
              By <span className="author-name">Admin</span>
            </span>
            <span className="divider"></span>
            <span>
              On <span className="date"> July 15, 2024 6:45 AM </span>
            </span>
            <span className="divider"></span>
            <span>In</span>
          </div>

          <p className="blog-card-text">
            It’s not to describe the importance of a pooja room in any Indian house.
            Our roots are so deeply connected with mythology and spirituality that
            an Indian home is felt incomplete without a pooja room regardless of the
            religion. That is why, at Interior Design Wala we pay close attention to
            client briefs while making p...
          </p>

          <button className="blog-read-btn">
            Read More <span className="arrow">➜</span>
          </button>
        </div>
      </div>
      </section>


      {/* 🧩 Blog Card 2*/}
      <section className="blog-card-section">
        <div className="blog-card">
          <img
            src={blogMainImage}
              alt="Main Blog"
            className="blog-card-image"
          />

          <div className="blog-card-content">
            <h2 className="blog-card-title">
              How Future Home Interiors Will Look With 3D Interior Rendering
            </h2>

            <div className="blog-card-meta">
              <span>
                By <span className="author-name">Muskan Ansari</span>
              </span>
              <span className="divider"></span>

              <span>
                On <span className="date"> July 6, 2024 9:30 AM </span>
              </span>

              <span className="divider"></span>
              <span>In</span>
            </div>

            <p className="blog-card-text">
              Are you overwhelmed with the social media images of interiors and
              design and think about how beautiful photography is it? Then you are
              wrong! Most of them are not real images! I also used to think the
              same way unless I was unaware of the <a href="#"className="blog-text">3D interior rendering </a>
              technology. Software lik...
            </p>

            <button className="blog-read-btn">
              Read More <span className="arrow">➜</span>
            </button>
          </div>
        </div>
      </section>


      {/* 🧩 Blog Card 3 */}
      <section className="blog-card-section">
        <div className="blog-card">
          <img
            src={blogMainImage}
              alt="Main Blog"
            className="blog-card-image"
          />

          <div className="blog-card-content">
            <h2 className="blog-card-title">
              Is the Concept of Modern House Interior Designs Fading Away
            </h2>

            <div className="blog-card-meta">
              <span>By <span className="author-name">Admin</span></span>
              <span className="divider"></span>

              <span>
                On<span className="date"> June 20, 2024 6:10 AM </span>
              </span> 
              <span className="divider"></span>
              <span>In</span>
            </div>

            <p className="blog-card-text">
              Is the Concept of Modern House Interior Designs Fading Away? When we 
              talk about designing our home, what comes to our mind? What colors 
              should we choose, and which design theme to go for? Which curtains 
              to shop for and lots more? The most important among all these is 
              choosing a theme for hous...
            </p>

            <button className="blog-read-btn">
              Read More <span className="arrow">➜</span>
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Blog;
