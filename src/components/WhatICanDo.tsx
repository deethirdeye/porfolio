import React from 'react';
import Spline from '@splinetool/react-spline';
import './WhatICanDo.css';

const WhatICanDo: React.FC = () => {
  return (
    <section className="what-i-can-do-section" id="what-i-can-do">
      <h2 className="what-i-can-do-title-top">What I Can Do For You</h2>
      <div className="what-i-can-do-spline-only">
        <div className="spline-overlay-container">
          <Spline scene="https://prod.spline.design/DcbTJ0SNgmtcsJ1i/scene.splinecode" />
          <div className="spline-black-overlay" />
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
