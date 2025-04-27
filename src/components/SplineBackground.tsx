import React from 'react';
import Spline from '@splinetool/react-spline';
import './SplineBackground.css';

const SplineBackground: React.FC = () => (
  <div className="spline-background-container">
    <Spline scene="https://prod.spline.design/v1PjVzoGNTI8SwRi/scene.splinecode" />
    <div className="spline-black-overlay" />
    <div className="spline-watermark-overlay" />
  </div>
);

export default SplineBackground;
