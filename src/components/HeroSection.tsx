import React from 'react';
import Spline from '@splinetool/react-spline';
import './HeroSection.css';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  // Smooth scroll to About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="spline-wrapper">
        <Spline scene="https://prod.spline.design/yveKIuPX27zL48D8/scene.splinecode" />
      </div>
      <div className="hero-content">
        <h1>Hey, I'm Deepak, welcome to my corner of the internet</h1>
        <h2>Currently building powerful data systems, stunning apps, and smart AI solutions.</h2>
        {/* <h2>Data Engineer | Web & Mobile Developer | AI/ML Enthusiast</h2> */}
        <button className="get-to-know-btn" onClick={handleScrollToAbout}>Scroll down to Know me</button>
      </div>
    </section>
  );
};

export default HeroSection;
