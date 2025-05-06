import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro-text">
          Hi, I’m a Data Engineer, builder, and lifelong learner. My journey started with a love for tech and a curiosity for how things work. These days, with my expertise, I help people and companies turn raw data into real insights and ideas into digital products that actually make a difference.<br/><br/>
          I enjoy tackling new challenges,whether it’s making a data pipeline run smoother, launching a mobile app, or bringing an AI model to life. I believe the best work happens when people share ideas and build together. Every project is a chance to create something meaningful, and I love being part of that process.
        </p>
        <div className="about-details">
          <div className="about-current-role standout-card">
            <h3>Current Role</h3>
            <p>
              I work remotely as a Data Engineer at Third Eye Info Technology  based in California. Most of my days are spent working with PySpark, Databricks, SQL, ADF Azure tools, and Power BI—helping teams solve real-world problems with data.
            </p>
          </div>
          <div className="about-freelance standout-card">
            <h3>Internal Projects</h3>
            <p>
              When I’m not at working on data projects, I enjoy teaming up on web, mobile, and AI projects. I like working with people who care about what they build, and I’m always up for a new challenge, whether it’s designing a clean user interface or deploying a smart AI model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;