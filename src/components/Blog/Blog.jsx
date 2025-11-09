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
    </div>
  );
};

export default Blog;
