import React from 'react';
import './styles/global.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AISection from './components/AISection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AISection />
      <ContactSection />
    </div>
  );
}

export default App;
