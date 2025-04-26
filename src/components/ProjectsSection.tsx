import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Real-Time Data Pipeline',
    desc: 'Built a scalable data pipeline using Spark, Kafka, and AWS for streaming analytics.',
    tags: ['Data Engineering', 'AWS', 'Spark']
  },
  {
    title: 'AI Chatbot Platform',
    desc: 'Developed a cross-platform chatbot using NLP and deep learning for customer support.',
    tags: ['AI/ML', 'NLP', 'Deep Learning']
  },
  {
    title: 'Mobile Health App',
    desc: 'Created a Flutter app for health tracking with smart notifications and analytics.',
    tags: ['Mobile', 'Flutter', 'Analytics']
  },
  {
    title: 'Portfolio Website',
    desc: 'Designed and built this portfolio with React, TypeScript, and modern animations.',
    tags: ['Web', 'React', 'TypeScript']
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tags">
              {proj.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
