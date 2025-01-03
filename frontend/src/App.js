import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AgendaSection from "./components/AgendaSection";
import SponsorSection from "./components/SponsorSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AgendaSection />
      <SponsorSection />
      <Footer />
    </div>
  );
};

export default App;
