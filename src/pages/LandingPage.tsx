import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TestingSection from "../components/TestingSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <TestingSection />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
