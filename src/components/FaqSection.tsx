import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="section-pad" aria-label="Frequently Asked Questions">
      <div className="container faq-grid">
        <div className="faq-left-sticky">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Strategic FAQ</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">Common questions</span></span>
            <span className="line-mask"><span className="line-inner">on hiring &amp; process.</span></span>
          </h2>
          <p className="faq-intro-note">
            Clear parameters on availability, intellectual property, tooling, and team integration.
          </p>
        </div>

        <div className="faq-right-col">
          <div className="faq-accordion">
            {/* Item 01 */}
            <div className="faq-item motion-fade-up" data-motion="fade-up">
              <h3 className="faq-question-wrap">
                <button
                  type="button"
                  className="faq-btn"
                  id="faq-btn-1"
                  aria-expanded={openIndex === 0 ? 'true' : 'false'}
                  aria-controls="faq-panel-1"
                  onClick={() => toggle(0)}
                >
                  <span className="faq-question">What does your day-to-day engagement as a Lead UI/UX look like?</span>
                  <span className="faq-icon" aria-hidden="true">{openIndex === 0 ? '−' : '+'}</span>
                </button>
              </h3>
              <div
                className="faq-panel"
                id="faq-panel-1"
                role="region"
                aria-labelledby="faq-btn-1"
                style={{ height: openIndex === 0 ? 'auto' : 0, opacity: openIndex === 0 ? 1 : 0 }}
              >
                <div className="faq-panel-content">
                  <p className="faq-answer">I balance strategic product roadmap definition with hands-on Figma craftsmanship. I facilitate discovery workshops, write user stories, architect tokenized design systems, build interactive prototypes, and partner closely with engineers during sprints to ensure zero handoff degradation.</p>
                </div>
              </div>
            </div>

            {/* Item 02 */}
            <div className="faq-item motion-fade-up" data-motion="fade-up">
              <h3 className="faq-question-wrap">
                <button
                  type="button"
                  className="faq-btn"
                  id="faq-btn-2"
                  aria-expanded={openIndex === 1 ? 'true' : 'false'}
                  aria-controls="faq-panel-2"
                  onClick={() => toggle(1)}
                >
                  <span className="faq-question">How do you manage complex engineering constraints in fintech &amp; enterprise SaaS?</span>
                  <span className="faq-icon" aria-hidden="true">{openIndex === 1 ? '−' : '+'}</span>
                </button>
              </h3>
              <div
                className="faq-panel"
                id="faq-panel-2"
                role="region"
                aria-labelledby="faq-btn-2"
                style={{ height: openIndex === 1 ? 'auto' : 0, opacity: openIndex === 1 ? 1 : 0 }}
              >
                <div className="faq-panel-content">
                  <p className="faq-answer">Having written frontend code and partnered with core banking engineers for over a decade, I design with technical feasibility front-of-mind. I account for asynchronous network states, edge failure cases, latency thresholds, regulatory compliance (PCI-DSS, WCAG AA), and high-throughput data volumes from day one.</p>
                </div>
              </div>
            </div>

            {/* Item 03 */}
            <div className="faq-item motion-fade-up" data-motion="fade-up">
              <h3 className="faq-question-wrap">
                <button
                  type="button"
                  className="faq-btn"
                  id="faq-btn-3"
                  aria-expanded={openIndex === 2 ? 'true' : 'false'}
                  aria-controls="faq-panel-3"
                  onClick={() => toggle(2)}
                >
                  <span className="faq-question">Can you work alongside our existing frontend engineers and design system?</span>
                  <span className="faq-icon" aria-hidden="true">{openIndex === 2 ? '−' : '+'}</span>
                </button>
              </h3>
              <div
                className="faq-panel"
                id="faq-panel-3"
                role="region"
                aria-labelledby="faq-btn-3"
                style={{ height: openIndex === 2 ? 'auto' : 0, opacity: openIndex === 2 ? 1 : 0 }}
              >
                <div className="faq-panel-content">
                  <p className="faq-answer">Yes. Whether inheriting an established enterprise component library in Storybook or starting from scratch with Figma Tokens and Tailwind CSS, I adapt to your team's existing tooling, branching git workflows, and issue tracking ceremonies.</p>
                </div>
              </div>
            </div>

            {/* Item 04 */}
            <div className="faq-item motion-fade-up" data-motion="fade-up">
              <h3 className="faq-question-wrap">
                <button
                  type="button"
                  className="faq-btn"
                  id="faq-btn-4"
                  aria-expanded={openIndex === 3 ? 'true' : 'false'}
                  aria-controls="faq-panel-4"
                  onClick={() => toggle(3)}
                >
                  <span className="faq-question">What engagement models do you support (Full-Time, Fractional, or Advisory)?</span>
                  <span className="faq-icon" aria-hidden="true">{openIndex === 3 ? '−' : '+'}</span>
                </button>
              </h3>
              <div
                className="faq-panel"
                id="faq-panel-4"
                role="region"
                aria-labelledby="faq-btn-4"
                style={{ height: openIndex === 3 ? 'auto' : 0, opacity: openIndex === 3 ? 1 : 0 }}
              >
                <div className="faq-panel-content">
                  <p className="faq-answer">I am available for Lead UI/UX Designer full-time positions, Fractional Design Leadership (10–20 hours/week) for venture-backed startups, and targeted 4–8 week Design Sprints focused on product discovery, redesigns, or design systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
