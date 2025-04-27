import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './SplineBackground.css';

const ContactSplineBackground: React.FC = () => {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Only render Spline after component mounts (avoids SSR/hydration issues and heavy initial load)
    const timeout = setTimeout(() => setShowSpline(true), 350); // delay for smoothness
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="spline-background-container spline-contact-background">
      {showSpline && (
        <Spline scene="https://prod.spline.design/JvsDmIUvkPhoPjZf/scene.splinecode" />
      )}
      <div className="spline-black-overlay" />
    </div>
  );
};

export default ContactSplineBackground;
