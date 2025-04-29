import React from 'react';
import Spline from '@splinetool/react-spline';
import { getCalApi } from "@calcom/embed-react";
import './WhatICanDoPage.css';

const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024; // You can adjust this breakpoint as needed
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const WhatICanDoPage: React.FC = () => {
  const [desktop, setDesktop] = React.useState(isDesktop());

  React.useEffect(() => {
    const handleResize = () => setDesktop(isDesktop());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cal.com calendar integration
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("floatingButton", { calLink: "deepak-prem-gvnpmr/15min", config: { layout: "month_view" } });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleBookCalendar = async () => {
    const cal = await getCalApi({ namespace: "15min" });
    cal("modal", { calLink: "deepak-prem-gvnpmr/15min" });
  };

  const splineUrl = desktop
    ? 'https://prod.spline.design/yAafFmqp9bCqGREy/scene.splinecode'
    : 'https://prod.spline.design/fMtO0d3IxgRuF-D6/scene.splinecode';

  return (
    <section className="what-i-can-do-section" id="what-i-can-do">
      {/* Book My Calendar Button - bottom left corner */}
      {/* <button
        onClick={handleBookCalendar}
        style={{
          position: "fixed",
          left: 20,
          bottom: 20,
          zIndex: 1000,
          padding: "12px 18px",
          background: "#181818",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          cursor: "pointer"
        }}
      >
        Book my Calendar
      </button> */}
      <h2 className="what-i-can-do-title">What I Can Do</h2>
      <div className="what-i-can-do-spline-only">
        <div className="spline-overlay-container">
          <Spline scene={splineUrl} />
          <div className="spline-watermark-overlay" />
        </div>
      </div>
      <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#181818"/>
          <path d="M10 18L16 12L22 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default WhatICanDoPage;
