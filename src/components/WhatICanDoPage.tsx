import React from 'react';
import Spline from '@splinetool/react-spline';
import './WhatICanDoPage.css';

const WhatICanDoPage: React.FC = () => {
  return (
    <section className="what-i-can-do-section" id="what-i-can-do">
      <h2 className="what-i-can-do-title">What I Can Do</h2>
      <div className="what-i-can-do-spline-only">
        <div className="spline-overlay-container">
          <Spline scene="https://prod.spline.design/yAafFmqp9bCqGREy/scene.splinecode" />
          <div className="spline-watermark-overlay" />
        </div>
      </div>
    </section>
  );
};

export default WhatICanDoPage;
