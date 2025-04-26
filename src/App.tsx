import React from 'react';
import './styles/global.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import WhatICanDo from './components/WhatICanDo';
import AISection from './components/AISection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WhatICanDo />
      <AISection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;