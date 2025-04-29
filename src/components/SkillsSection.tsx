import React, { useState } from 'react';
import './SkillsSection.css';

const skills = [
  { name: 'Python', strength: 68 },
  { name: 'SQL', strength: 67 },
  { name: 'PySpark', strength: 65 },
  { name: 'Azure', strength: 66 },
  { name: 'Power BI', strength: 69 },
  { name: 'Logic Apps', strength: 64 },
  { name: 'ADF Pipeline', strength: 66 },
  { name: 'Snowflake', strength: 63 },
  { name: 'Databricks', strength: 67 },
  { name: 'React', strength: 38 },
  { name: 'React Native', strength: 62 },
  { name: 'TypeScript', strength: 56 },
  { name: 'APIs - C#', strength: 4 },
  { name: 'CI/CD', strength: 61 },
  { name: 'GitHub', strength: 65 },
  { name: 'Jira', strength: 62 },
  { name: 'Machine Learning', strength: 66 },
  { name: 'YOLO', strength: 64 }
];

const SkillsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div
            className="skill-card water-hover"
            key={skill.name}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="skill-label">{skill.name}</span>
            {hovered === skill.name && (
              <div className="water-bar-container">
                <div className="water-bar" style={{ height: `${skill.strength}%` }}>
                  <span className="bar-percent">{skill.strength}%</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
