import React from 'react';
import Spline from '@splinetool/react-spline';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="spline-wrapper">
        <Spline scene="https://prod.spline.design/yveKIuPX27zL48D8/scene.splinecode" />
      </div>
      <div className="hero-content">
        <h1>Hey, I'm Deepak</h1>
        <h2>Data Engineer | Web & Mobile Developer | AI/ML Enthusiast</h2>
        <button className="get-to-know-btn">Get To Know Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
