import React from "react";
import "./living.css";

import img1 from "../../assets/living1.jpg";
import img2 from "../../assets/living2.jpg";
import img3 from "../../assets/living3.jpg";
import img4 from "../../assets/living4.jpg";
import img5 from "../../assets/living5.jpg";
import img6 from "../../assets/living6.jpg";
import img7 from "../../assets/living7.jpg";
import img8 from "../../assets/living8.jpg";
import img9 from "../../assets/living9.jpg";
import img10 from "../../assets/living10.jpg";
import img11 from "../../assets/living11.jpg";
import img12 from "../../assets/living12.jpg";
import img13 from "../../assets/living13.jpg";
import img14 from "../../assets/living14.jpg";
import img15 from "../../assets/living15.jpg";
import img16 from "../../assets/living16.jpg";

const Living = () => {
   return (
    <div className="living-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={img1} alt="Living Room Hero" className="hero-image" />
        <h1 className="hero-title">LIVING ROOM INTERIORS</h1>
      </section>

      {/* IMAGE GROUP 1 */}
      <section className="gallery-grid">
        <img src={img2} alt="Living" />
        <img src={img3} alt="Living" />
        <img src={img4} alt="Living" />
      </section>

      {/* IMAGE GROUP 2 */}
      <section className="gallery-grid">
        <img src={img5} alt="Living" />
        <img src={img6} alt="Living" />
        <img src={img7} alt="Living" />
      </section>

      {/* IMAGE GROUP 3 */}
      <section className="gallery-grid">
        <img src={img8} alt="Living" />
        <img src={img9} alt="Living" />
        <img src={img10} alt="Living" />
      </section>

      {/* IMAGE GROUP 4 */}
      <section className="gallery-grid">
        <img src={img11} alt="Living" />
        <img src={img12} alt="Living" />
        <img src={img13} alt="Living" />
      </section>

      {/* IMAGE GROUP 5 */}
      <section className="gallery-grid">
        <img src={img14} alt="Living" />
        <img src={img15} alt="Living" />
        <img src={img16} alt="Living" />
      </section>

      {/* TEXT SECTION */}
      <section className="content-section">
<p>
The living room is the part of the house that connects to all other parts and
all family members gather there to spend quality time. The living room should
be pleasing, pleasantly lit, stylish, and soothing. At Interiordesignwala, we
believe that there are countless numbers of great choices when it comes to
designing your living area in a modern and stylish way. We, therefore, opt for
more innovative ways to manage the space in your living area so that the
outcome can stun everyone. Since the residing space area is usually the first
space that your visitors see, it should be a space that shows your lifestyle
and can give overjoying experience to your guest. Contemporary, conventional,
and adjusting are some of mostly used trending design themes for living areas.
A modern living room should never have too much design. However, you can use
subjective or modern art that is described as firm and geometrical numbers to
promote the kind of your space. Another idea is to use uncommon decorative
things such as statues. For Interiordesignwala, it’s important to add a unique
touch to your living area as per your personal design interest, no matter how
small the detail might be. When you have to install so many amenities and
functions within your living area, we have a look through our living room
designs before you start planning your own. We decorate your living room in
such a way that increases illumination and space features and pay focus on how
you use color, scale, and weight. It can make quite a change. It’s exciting to
try new stuff. A living area is intended to be free from all mess and actually
have space to add more things if the need occurs. We always keep in mind if
you don’t have enough space for each person using the space, it will look
messy. Check out some of the best spacious, stylish, and modern living room
interior decor ideas in our gallery.
</p>
</section>

    </div>
  );
};

export default Living;
