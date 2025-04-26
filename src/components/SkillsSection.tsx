import React from 'react';
import './SkillsSection.css';

const skills = [
  'Python', 'SQL', 'Apache Spark', 'Airflow', 'AWS', 'Docker', 'Kubernetes',
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Flutter', 'TensorFlow', 'PyTorch',
  'Machine Learning', 'Deep Learning', 'Data Visualization', 'APIs', 'CI/CD', 'GCP'
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
