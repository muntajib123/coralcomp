// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
// import ConsultingSection from '../components/ConsultingSection'; ❌ Remove this line
import CaseStudiesSection from '../components/CaseStudiesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* ConsultingSection removed */}
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
