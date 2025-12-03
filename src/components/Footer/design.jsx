import React from "react";
import "./design.css";

/* IMPORT ALL IMAGES FOR CARDS */
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";
import a6 from "../../assets/a6.jpg";
import a7 from "../../assets/a7.jpg";
import a8 from "../../assets/a8.jpg";
import a9 from "../../assets/a9.jpg";
import a10 from "../../assets/a10.jpg";
import a11 from "../../assets/a11.jpg";
import a12 from "../../assets/a12.jpg";
import a13 from "../../assets/a13.jpg";
import a14 from "../../assets/a14.jpg";
import a15 from "../../assets/a15.jpg";
import a16 from "../../assets/a16.jpg";
import a17 from "../../assets/a17.jpg";
import a18 from "../../assets/a18.jpg";
import a19 from "../../assets/a19.jpg";
import a20 from "../../assets/a20.jpg";
import a21 from "../../assets/a21.jpg";
import a22 from "../../assets/a22.jpg";
import a23 from "../../assets/a23.jpg";
import a24 from "../../assets/a24.jpg";
import a25 from "../../assets/a25.jpg";
import a26 from "../../assets/a26.jpg";
import a27 from "../../assets/a27.jpg";

/* ICONS */
import {
  FiHome,
  FiTool,
  FiBox,
  FiCommand,
  FiLayers,
  FiGrid,
  FiCpu,
  FiCamera,
  FiCoffee,
  FiBook,
  FiHeart,
  FiMap,
  FiZap,
  FiChevronRight
} from "react-icons/fi";

import { FaShippingFast, FaUsers, FaUserTie, FaShieldAlt } from "react-icons/fa";

export default function InteriorPage() {
  const articles = [
    {
      img: a1,
      tag: "INTERIOR DESIGN TIPS · NOVEMBER 07, 2025 · 10 MINS READ",
      title:
        "How 3D House Design Helps You Plan and Visualise Your Ideal Home",
      author: "RUBAIYA KARIM",
      text:
        "Have you ever tried explaining the vision for your dream home to someone and watched them stare at you blankly? You're gesturing wildly, describing the length, width, and height of a kitchen island."
    },
    {
      img: a2,
      tag: "INTERIOR DESIGN TIPS · AUGUST 28, 2025 · 9 MINS READ",
      title:
        "Beautiful Photo Frame Ideas to Personalise Every Wall in Your Home",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Photographs that capture happy memories with friends and family are a great way to personalise your interiors. But you need the right photo frame ideas to make your precious moments stand out ."
    },
    {
      img: a3,
      tag: "INTERIOR DESIGN TIPS · AUGUST 27, 2025 · 5 MINS READ",
      title: "DIY Tips To Deep Clean Your House",
      author: "HOMELANE",
      text:
        "Even the most spic and span houses require deep cleaning every once in a while. The word deep cleaning may sound scary and even impossible, but that is not so. The whole process is much easier if you."
    },
    {
      img: a4,
      tag: "INTERIOR DESIGN TIPS · AUGUST 22, 2025 · 6 MINS READ",
      title: "Top 10 Practical Ideas to Organise Footwear Without Clutter at Home",
      author: "USHA BALASUBRAMANYAN",
      text:
        "You're rushing to get to a meeting on time, and you just can't find the mate to the shoe that's perfect for your dress. After a frantic search, you settle for a pair of shoes that don't really."
    },
    {
      img: a5,
      tag: "INTERIOR DESIGN TIPS · AUGUST 22, 2025 · 5 MINS READ",
      title: "Vastu Tips for Painting: All You Need to Know",
      author: "HOMELANE",
      text:
        "Colours impact mood and energy levels. Vastu suggests certain colours and placements — here’s a friendly guide to follow."
    },
    {
      img: a6,
      tag: "INTERIOR DESIGN TIPS · AUGUST 19, 2025 · 5 MINS READ",
      title: "7 Hacks to Keep Your Fridge Clean and Organised",
      author: "HOMELANE",
      text:
        "An organised fridge is the stepping stone to a healthy lifestyle, no exaggerations. Not only will your fridge function better but you'll also be able to save time on finding food items for everyday co."
    },
    {
      img: a7,
      tag: "INTERIOR DESIGN TIPS · AUGUST 16, 2025 · 5 MINS READ",
      title: "How to Use Carpets to Make Your Home Look Spacious",
      author: "HOMELANE",
      text:
        "When it comes to decorating small rooms, you might want to go with the 'less is more' approach. Naturally, when space is a limited resource, you would want to practice prudence while curating a de...."
    },
    {
      img: a8,
      tag: "INTERIOR DESIGN TIPS · AUGUST 12, 2025 · 6 MINS READ",
      title: "How To Decorate Your Home in Traditional South Indian Style",
      author: "USHA BALASUBRAMANYAN",
      text:
        "India is known to be a melting pot of cultures, with each state brimming with its own unique traditions and native festivals. Though North and South India have a common unifying heritage design style."
    },
    {
      img: a9,
      tag: "INTERIOR DESIGN TIPS · AUGUST 12, 2025 · 4 MINS READ",
      title: "20 Great DIY Ideas For Housewarming Party Gifts",
      author: "USHA BALASUBRAMANYAN",
      text:
        "You've been invited to your friend's housewarming party, and want to get them something that's unique, warm and has a personal touch. There's nothing better than a gift that's made by you"
    },
    {
      img: a10,
      tag: "INTERIOR DESIGN TIPS · AUGUST 11, 2025 · 10 MINS READ",
      title: "20 Trending and Innovative Window Shutter Designs",
      author: "HOMELANE",
      text:
        "Window shutter designs are one of the most ignored parts of external home decor. These may look like an"
    },
    {
      img: a11,
      tag: "INTERIOR DESIGN TIPS · AUGUST 08, 2025 · 6 MINS READ",
      title: "How To Get Your Home Interiors Renovated Within Your Budget",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Looking to renovate your home with the latest in home interior styles? Refurbishing your home can prove to be.."
    },
    {
      img: a12,
      tag: "INTERIOR DESIGN TIPS · AUGUST 08, 2025 · 10 MINS READ",
      title: "Want a Home That Looks Amazing? Try Wooden Elevation Tiles!",
      author: "HOMELANE",
      text:
        "One of the coolest decor trends that have recently emerged is wooden elevation tiles for home decor. An elevation is the depiction of a building as viewed from one side. Selecting the perfect elevat..."
    },
    {
      img: a13,
      tag: "INTERIOR DESIGN TIPS · AUGUST 07, 2025 · 6 MINS READ",
      title: "7 Stunning Under-Sink Storage Ideas for Your Cabinets",
      author: "HOMELANE",
      text:
        "Your under-sink cabinet is an optimal space to keep cleaning materials; daily use handy items, and much more. You can utilise this zone to its maximum potential by choosing the right under-sink storag..."
    },
    {
      img: a14,
      tag: "INTERIOR DESIGN TIPS · AUGUST 06, 2025 · 6 MINS READ",
      title: "The Ultimate Guide to Organising your Groceries",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Ever had to throw away a bag of rice because it had started getting weevils in it, or found that your sauces were well past the best-by date? Your grocery organisation skills may need some serious ret"
    },
    {
      img: a15,
      tag: "INTERIOR DESIGN TIPS · AUGUST 06, 2025 · 5 MINS READ",
      title: "Window Ideas with Pros and Cons to Match Style Function and Room Decor",
      author: "JYOTI DESAI",
      text:
        "Window styles play an essential role in the aesthetic of a room. They also contribute to convenience and security. Selecting the style of your windows is more straightforward once you have consider."
    },
    {
      img: a16,
      tag: "INTERIOR DESIGN TIPS · AUGUST 05, 2025 · 4 MINS READ",
      title: "5 Pinterest-Worthy Entryway Rug Ideas ",
      author: "HOMELANE",
      text:
        "Your entrance is the first place guests see to get a flavour of the house in terms of the design and aesthetic beauty. Naturally, you want to create a lasting first impression. Whether you are looking"
    },
    {
      img: a17,
      tag: "INTERIOR DESIGN TIPS · AUGUST 02, 2025 · 8 MINS READ",
      title: "10 Tested Tricks to Keep the Dampness Out of Your Cupboards",
      author: " USHA BALASUBRAMANYAN",
      text:
        "Damp cupboards can be a homeowner's worst nightmare, leading to mold and mildew growth that can damage clothing, books, and other valuables. Fitted wardrobes and cupboards can trap moisture,"
    },
    {
      img: a18,
      tag: "INTERIOR DESIGN TIPS · AUGUST 02, 2025 · 11 MINS READ",
      title: "7 Horse Vastu Direction to Bring Growth Peace and Good Energy into Your Home",
      author: "HOMELANE",
      text:
        "Creativity and artwork are key in reinventing your modern living room design. Your creativity can never fail you if you go with the option of adding some paintings on your mono-colour four walls. Afte..."
    },
    {
      img: a19,
      tag: "INTERIOR DESIGN TIPS · AUGUST 02, 2025 · 10 MINS READ",
      title: "Transform Your Rooms with These 10 Wall Sticker Design Ideas",
      author: "HOMELANE",
      text:
        "A creative and inexpensive alternative to painting walls can be wall stickers. Even small-scale wall stickers like silhouettes and quotations have become mainstream. Instead, whole wall decals can pro."
    },
    {
      img: a20,
      tag: "INTERIOR DESIGN TIPS · AUGUST 02, 2025 · 10 MINS READ",
      title: "20 Aesthetic Wine Cellar Designs for Your Wine Bottles",
      author: "HOMELANE",
      text:
        "The art of wine crafting dates back to as early as early 6000B.C when wine was stored in underground catacombs in Rome. From terracotta containers and underground barrels, we truly have come a long wa..."
    },
    {
      img: a21,
      tag: "INTERIOR DESIGN TIPS · AUGUST 08, 2025 · 6 MINS READ",
      title: "How To Get Your Home Interiors Renovated Within Your Budget",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Looking to renovate your home with the latest in home interior styles? Refurbishing your home can prove to be an expensive affair, and proper planning is essential when you're working with a budget!"
    },
    {
      img: a22,
      tag: "INTERIOR DESIGN TIPS · AUGUST 08, 2025 · 10 MINS READ",
      title: "Want a Home That Looks Amazing? Try Wooden Elevation Tiles!",
      author: "HOMELANE",
      text:
        "One of the coolest decor trends that have recently emerged is wooden elevation tiles for home decor. An elevation is the depiction of a building as viewed from one side. Selecting the perfect elevator."
    },
    {
      img: a23,
      tag: "INTERIOR DESIGN TIPS · AUGUST 07, 2025 · 6 MINS READ",
      title: "7 Stunning Under-Sink Storage Ideas for Your Cabinets",
      author: "HOMELANE",
      text:
        "Your under-sink cabinet is an optimal space to keep cleaning materials; daily use handy items, and much"
    },
    {
      img: a24,
      tag: "INTERIOR DESIGN TIPS · AUGUST 06, 2025 · 6 MINS READ",
      title: "Accent Wall Ideas Beyond Paint",
      author: "OM PRAKASH",
      text:
        "Texture panels, wood slats, and decorative tiles to make walls pop without huge cost."
    },
    {
      img: a25,
      tag: "INTERIOR DESIGN TIPS · AUGUST 06, 2025 · 5 MINS READ",
      title: "The Ultimate Guide to Organising your Groceries",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Ever had to throw away a bag of rice because it had started getting weevils in it, or found that your sauces."
    },
    {
      img: a26,
      tag: "INTERIOR DESIGN TIPS · AUGUST 05, 2025 · 4 MINS READ",
      title: "5 Pinterest-Worthy Entryway Rug Ideas",
      author: "HOMELANE",
      text:
        "Your entrance is the first place guests see to get a flavour of the house in terms of the design and aesthetic beauty. Naturally, you want to create a lasting first impression. Whether you are looking."
    },
    {
      img: a27,
      tag: "INTERIOR DESIGN TIPS · AUGUST 04, 2025 · 8 MINS READ",
      title: "10 Tested Tricks to keep the Dampness Out of Your Cupboards",
      author: "USHA BALASUBRAMANYAN",
      text:
        "Damp cupboards can be a homeowner's worst nightmare, leading to mold and mildew growth that can damage clothing, books, and other valuables. Fitted wardrobes and cupboards can trap moisture,"
    }
  ];


  const solutionIcons = [
    FiHome, FiTool, FiBox, FiCommand, FiLayers, FiGrid, FiCpu,
    FiCamera, FiCoffee, FiBook, FiHeart, FiMap, FiZap, FiChevronRight
  ];

  const solutionNames = [
    "Modular Kitchen", "Storage & Wardrobe", "Crockery Units",
    "Space Saving Furniture", "TV Units", "Study Tables", "False Ceiling",
    "Lights", "Wallpaper", "Wall Paint", "Bathroom", "Pooja Units",
    "Foyer Designs", "Movable Furniture"
  ];

  const features = [
    { icon: FaShippingFast, title: "45 Days Delivery*", text: "Guaranteed completion timeline" },
    { icon: FaShieldAlt, title: "10 Year Warranty", text: "Superior quality material assurance" },
    { icon: FaUserTie, title: "600+ Design Experts", text: "Co-create your dream home" },
    { icon: FaUsers, title: "Post-installation Service", text: "Dedicated support team" }
  ];

  return (
    <div className="page">

      {/* HEADER */}
      <section className="header-section">
        <h1 className="heading">Interior Design Tips</h1>
        <p className="sub">The Design Journal » Interior Design Tips</p>
        <span className="bg-category">CATEGORY</span>
      </section>

      {/* ARTICLE CARDS */}
      <section className="articles">
        {articles.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt="" />
            <p className="tag">{item.tag}</p>
            <h2>{item.title}</h2>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </section>

      {/* END TO END SOLUTIONS with ICONS */}
      <section className="solutions">
        <h2 className="solution-title">End-to-end home interior solutions</h2>

        <div className="solution-grid">
          {solutionNames.map((name, idx) => {
            const Icon = solutionIcons[idx];
            return (
              <div key={idx} className="solution-item">
                <Icon size={40} className="sol-icon" />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES SECTION with ICONS */}
      <section className="features">
        {features.map((f, i) => (
          <div className="feature" key={i}>
            <f.icon size={55} className="feature-icon" />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
