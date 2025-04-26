import React from 'react';
import Spline from '@splinetool/react-spline';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-spline-bg">
        <Spline scene="https://prod.spline.design/nii2o1lmB6o-ld3n/scene.splinecode" />
      </div>
      <div className="footer-content">
        <span>Made with ☕</span>
        <span className="footer-sep">|</span>
        <span> {new Date().getFullYear()} Deepak Prem</span>
      </div>
    </footer>
  );
};

export default Footer;
