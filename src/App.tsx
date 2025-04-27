import React from 'react';
import './styles/global.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AISection from './components/AISection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatICanDoPage from './components/WhatICanDoPage';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatICanDoPage />
      <AboutSection />
    
      <ProjectsSection />
      <AISection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;