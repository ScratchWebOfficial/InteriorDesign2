import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FloatingBar from "./components/FloatingBar/FloatingBar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import About from "./pages/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Career from "./components/Career/Career";
import OnlineDesign from "./components/Services/OnlineDesign";
import TurnkeyProjects from "./components/Services/TurnkeyProjects";
import Rendering from "./components/Services/Rendering";
import Preloader from "./components/Preloader/Preloader";
import Bedroom from "./components/Portfolio/bedroom";
import Kitchen from "./components/Portfolio/kitchen";
import Toilet from "./components/Portfolio/Toilet";
import Living from "./components/Portfolio/living";
import Kids from "./components/Portfolio/kids";
import Office from "./components/Portfolio/office";
import Showroom from "./components/Portfolio/showroom";
import Hotel from "./components/Portfolio/hotel";
import Dining from "./components/Portfolio/dining";
import Hospital from "./components/Portfolio/hospitaL";
import Resturant from "./components/Portfolio/resturant";
import Entertain from "./components/Portfolio/entertain";
import Pooja from "./components/Portfolio/pooja";
import Drawing from "./components/Portfolio/drawing";
import Study from "./components/Portfolio/study";
import Door from "./components/Portfolio/door";
import Tv from "./components/Portfolio/tv";
import Gym from "./components/Portfolio/gym";
import Stairs from "./components/Portfolio/stairs";
import False from "./components/Portfolio/false";
import Salon from "./components/Portfolio/salon";
import Footer from "./components/Footer/Footer";
import School from "./components/Portfolio/school";
import Vastu from "./components/Footer/vastu";

import Associates from "./components/Footer/associates";
import Privacy from "./components/Footer/privacy";
import Terms from "./components/Footer/terms";
import Talk from "./components/Footer/talk";

function App() {

  /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 1.5 seconds or until page fully loads
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <Preloader />;
  } */



  return (
    <>
    <Router>
      <TopBar />
      <Navbar />
      <FloatingBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/online-interior-designing" element={<OnlineDesign />} />
          <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
          <Route path="/3D-rendering-services" element={<Rendering />}/>
          <Route path="/residential/bedroom" element={<Bedroom />}/>
           <Route path="/residential/kitchen" element={<Kitchen />}/>
            <Route path="/residential/Toilet" element={<Toilet />}/>
            <Route path="/residential/living" element={<Living />}/>
            <Route path="/residential/kids" element={<Kids />}/>
            <Route path="/residential/living" element={<Living />}/>
            <Route path="/commercial/offices" element={<Office />}/>
            <Route path="/commercial/showrooms" element={<Showroom />}/>
             <Route path="/commercial/offices" element={<Office />}/>
            <Route path="/commercial/hotel" element={<Hotel />}/>
            <Route path="/dining" element={<Dining />}/>
            <Route path="/commercial/hospital" element={<Hospital />}/>
             <Route path="/commercial/resturant" element={<Resturant />}/>
              <Route path="/entertainment-room" element={<Entertain />}/>
              <Route path="/pooja-room" element={<Pooja />}/>
             <Route path="/drawing-room" element={<Drawing />}/>
             <Route path="/study-room" element={<Study />}/>
             <Route path="/doors-window" element={<Door />}/>
             <Route path="/tv-cabinet" element={<Tv />}/>
              <Route path="/gym" element={<Gym />}/>
             <Route path="/stairs" element={<Stairs />}/>
             <Route path="/false-ceiling" element={<False />}/>
             <Route path="/salon" element={<Salon />}/>
             <Route path="/school" element={<School />}/>
             <Route path="/vastu" element={<Vastu />}/>
             <Route path="/associates" element={<Associates />}/>
             <Route path="/privacy-policy" element={<Privacy />}/>
             <Route path="/terms"element={<Terms />}/>
             <Route path="/talk-to-designer"element={<Talk />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
