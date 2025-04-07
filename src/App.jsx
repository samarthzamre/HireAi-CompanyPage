import { useState } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientSection";
import FAQSection from "./components/FaqSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialSection";
import ValuesSection from "./components/ValuesSection";
import ContactSection from "./components/ContactSection";


function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <TeamSection />
      <ClientsSection />
      <HowToUseSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
