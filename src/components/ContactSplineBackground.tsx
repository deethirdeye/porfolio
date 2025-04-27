import React from 'react';
import Spline from '@splinetool/react-spline';
import './SplineBackground.css';

const ContactSplineBackground: React.FC = () => (
  <div className="spline-background-container spline-contact-background">
    <Spline scene="https://prod.spline.design/JvsDmIUvkPhoPjZf/scene.splinecode" />
    <div className="spline-black-overlay" />
  </div>
);

export default ContactSplineBackground;
