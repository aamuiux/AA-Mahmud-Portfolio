import React from 'react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section className="principles-section section-pad rule-dashed" aria-label="Core Principles">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Core Principles</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">Three pillars of high-impact</span></span>
            <span className="line-mask"><span className="line-inner">product design.</span></span>
          </h2>
        </div>

        <div className="principles-grid">
          {/*  Card 01  */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="0" data-stagger="90">
            <span className="principle-num">01</span>
            <h3 className="principle-title">User-Validated Discovery &amp; ROI</h3>
            <p className="principle-desc">Every design decision starts with real user behavior and commercial targets. By combining stakeholder interviews, qualitative research, and heuristic audits, I identify high-friction bottlenecks and anchor design to measurable retention and conversion metrics.</p>
          </article>

          {/*  Card 02  */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="1" data-stagger="90">
            <span className="principle-num">02</span>
            <h3 className="principle-title">Scalable Design Systems &amp; Tokens</h3>
            <p className="principle-desc">Enterprise software requires unified governance. I build token-driven Figma libraries, accessible components (WCAG AA), and clear documentation that scale across 20+ squads — cutting front-end regression tickets and accelerating sprint velocity by 60%+.</p>
          </article>

          {/*  Card 03  */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="2" data-stagger="90">
            <span className="principle-num">03</span>
            <h3 className="principle-title">AI-Native UX &amp; High-Density Clarity</h3>
            <p className="principle-desc">Modern intelligent platforms demand thoughtful human-in-the-loop workflows. I replace ambiguous prompt boxes with granular steering dials, progressive disclosure, and real-time feedback states that make complex AI feel predictable and empowering.</p>
          </article>
        </div>
      </div>
    </section>

  );
};
