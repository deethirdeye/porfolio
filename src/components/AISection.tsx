import React from 'react';
import './AISection.css';

const aiProjects = [
  {
    title: 'Image Classifier',
    desc: 'Developed a deep learning model to classify images with high accuracy using TensorFlow and Keras.'
  },
  {
    title: 'NLP Sentiment Analyzer',
    desc: 'Built an NLP pipeline for real-time sentiment analysis on social media data.'
  },
  {
    title: 'Recommendation System',
    desc: 'Created a collaborative filtering recommendation system for e-commerce personalization.'
  }
];

const AISection: React.FC = () => {
  return (
    <section className="ai-section" id="ai">
      <h2>AI / ML Work</h2>
      <div className="ai-projects">
        {aiProjects.map((proj, idx) => (
          <div className="ai-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AISection;
