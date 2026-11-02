import React from 'react';

interface AboutSectionProps {
  onInitiateBriefing: () => void;
  onNavigateProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onInitiateBriefing, onNavigateProfile }) => {
  return (
    <section id="about" className="section-pad rule-dashed" aria-label="About AA Mahmud">
      <div className="container">
        <div className="about-top-grid">
          {/* Left: Heading & 2 CTA Buttons */}
          <div className="about-left-col">
            <div className="eyebrow motion-fade" data-motion="fade">
              <span className="eyebrow-line" aria-hidden="true"></span>
              <span className="eyebrow-text">Design Leadership &amp; Philosophy</span>
            </div>
            <h2 className="section-heading-title" data-motion="line" data-stagger="90">
              <span className="line-mask"><span className="line-inner">12+ years shaping</span></span>
              <span className="line-mask"><span className="line-inner">fintech, AI &amp; enterprise</span></span>
              <span className="line-mask"><span className="line-inner">platforms at scale.</span></span>
            </h2>

            {/* 2 CTA Buttons directly under heading */}
            <div className="about-heading-actions motion-fade-up" data-motion="fade-up" data-delay="150">
              <button
                type="button"
                onClick={onInitiateBriefing}
                className="cta-btn solid-light cursor-pointer"
                id="about-cta-contact"
              >
                <span>Initiate Strategic Briefing</span>
                <span className="arrow" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                onClick={onNavigateProfile}
                className="cta-btn ghost-light cursor-pointer"
                id="about-cta-profile"
                title="Read AA Mahmud's full 12+ years experience timeline"
              >
                <span>View Verified Experience</span>
                <span className="arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right: Two Paragraphs */}
          <div className="about-right-col motion-fade-up" data-motion="fade-up" data-delay="200">
            <p className="about-para">
              As a Lead UI/UX Designer &amp; Product Strategist with over 12 years of hands-on experience, I have architected mission-critical digital products for national fintech infrastructures, high-throughput enterprise SaaS platforms, AI-native knowledge workflows, and venture-backed startups across the UK, USA, UAE, and Southeast Asia.
            </p>
            <p className="about-para">
              My craft sits at the intersection of business intelligence, human cognition, and production-grade frontend realities. Rather than treating design as decorative styling, I design systematic token architectures, validate complex workflow hypotheses through empirical usability telemetry, and mentor cross-functional product squads to ship with velocity and precision.
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="about-photos-grid">
          <div className="about-photo-cell motion-plate" data-motion="plate" data-delay="100">
            <img
              src="/public/assets/aistudio/Frame_1171276427_41abcf12.png"
              alt="Design strategy workshop and cross-functional user journey discovery"
              loading="lazy"
            />
          </div>
          <div className="about-photo-cell motion-plate" data-motion="plate" data-delay="200">
            <img
              src="/public/assets/aistudio/Frame_1171276428_1ecfe65a.png"
              alt="Product leadership review and interface architecture collaboration"
              loading="lazy"
            />
          </div>
          <div className="about-photo-cell motion-plate" data-motion="plate" data-delay="300">
            <img
              src="/public/assets/aistudio/Frame_1171276427_ac39d7e1.png"
              alt="Design system token synchronization and developer handoff QA session"
              loading="lazy"
            />
          </div>
        </div>

        {/* Facts Ledger */}
        <div className="about-facts-ledger motion-fade-up" data-motion="fade-up" data-delay="150">
          <div className="facts-col">
            <span className="facts-label">Current Role</span>
            <span className="facts-value">Lead UI/UX Designer</span>
          </div>
          <div className="facts-col">
            <span className="facts-label">Location / Base</span>
            <span className="facts-value">Dhaka, Bangladesh · Remote Worldwide</span>
          </div>
          <div className="facts-col">
            <span className="facts-label">Specializations</span>
            <span className="facts-value">Enterprise SaaS, FinTech, Design Systems, AI UX</span>
          </div>
          <div className="facts-col">
            <span className="facts-label">Toolkit</span>
            <span className="facts-value">Figma, Design Tokens, React, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
