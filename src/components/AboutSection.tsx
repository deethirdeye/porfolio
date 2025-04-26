import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate <b>Data Engineer</b> with 3+ years of experience, specializing in Website and Mobile App Development, as well as AI/ML projects. I love building scalable data systems, creating beautiful digital experiences, and exploring the latest in artificial intelligence.
        </p>
        <div className="about-details">
          <div>
            <h3>Current Role</h3>
            <p>Full-time Data Engineer</p>
          </div>
          <div>
            <h3>Specialties</h3>
            <ul>
              <li>Data Engineering</li>
              <li>Web & Mobile App Development</li>
              <li>AI/ML Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
