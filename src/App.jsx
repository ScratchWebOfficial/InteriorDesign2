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
import Preloader from "./components/Preloader/Preloader";

function App() {

  const [loading, setLoading] = useState(true);

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
  }



  return (
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
      </Routes>
    </Router>
  );
}

export default App;
