import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AgendaSection from "./components/ScheduleSection";
import SponsorSection from "./components/SponsorSection";
import QuestionSection from "./components/QuestionSection";
import Register from "./components/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AgendaSection />
      <SponsorSection />
      <QuestionSection />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
