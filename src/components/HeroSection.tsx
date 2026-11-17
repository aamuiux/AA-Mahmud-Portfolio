import React from 'react';

interface HeroSectionProps {
  onSeeWork: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSeeWork, onOpenBooking }) => {
  return (
    <section className="hero-section container" aria-label="Introduction">
      {/* Background Media: Portrait Positioned to the Right Side */}
      <div className="hero-bg-media motion-fade" data-motion="fade" data-delay="150" aria-hidden="true">
        <img
          src="/src/assets/images/abdullah-al-mahmud.jpg"
          alt="Portrait of AA Mahmud — Lead UI/UX Designer"
          loading="eager"
          decoding="async"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Foreground Hero Content */}
      <div className="hero-content">
        <div className="status-pill motion-fade" data-motion="fade">
          <span className="status-dot" aria-hidden="true"></span>
          <span>Lead UI/UX Designer · 12+ Yrs · SaaS, Fintech &amp; AI</span>
        </div>

        <h1 className="hero-title">
          <span className="line-mask"><span className="line-inner">Design that lifts</span></span>
          <span className="line-mask"><span className="line-inner">onboarding, retention</span></span>
          <span className="line-mask"><span className="line-inner"><span className="accent">and</span> revenue.</span></span>
        </h1>

        <p className="hero-lead" data-motion="word" data-delay="400" data-stagger="18">
          Turning complex Fintech, Enterprise SaaS, and AI workflows into high-converting products people love.
        </p>

        <div className="hero-cta-row motion-fade-up" data-motion="fade-up" data-delay="650">
          <button type="button" onClick={onSeeWork} className="cta-btn solid-light cursor-pointer">
            <span>See my work</span>
            <span className="arrow" aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            onClick={onOpenBooking}
            className="cta-btn ghost-light book-call-trigger cursor-pointer"
            id="hero-book-call-btn"
            title="Book a 20-min call on Calendly"
          >
            <span>Book a 20-min call</span>
            <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
