// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
// import ConsultingSection from '../components/ConsultingSection'; ❌ Remove this line
import CaseStudiesSection from '../components/CaseStudiesSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* ConsultingSection removed */}
      <CaseStudiesSection />
      <ContactSection />
      {/* Footer removed (already included globally in App.js) */}
    </>
  );
};

export default HomePage;
