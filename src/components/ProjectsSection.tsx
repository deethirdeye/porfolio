import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Real-Time Data Pipeline',
    desc: 'Built a scalable data pipeline using Spark, Databricks and Azure for streaming analytics.',
    tags: ['Data Engineering', 'Python', 'Azure', 'Spark']
  },
  {
    title: 'Computer Vision with YOLO',
    desc: 'Developed an object detection system using YOLO for real-time video analytics and automation.',
    tags: ['Computer Vision', 'YOLO', 'AI/ML']
  },
  {
    title: 'Community App for Expats',
    desc: 'Built a social platform for expats to connect, share resources, and organize events using React Native and Expo.',
    tags: ['React Native', 'Expo', 'Community']
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
