import React, { useState } from 'react';

interface PreFooterCtaProps {
  onOpenBooking: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = 'aam.uiux@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="pre-footer-cta-section rule-dashed" aria-label="Contact and Socials">
      <div className="cta-container">
        {/* Live Status Pill */}
        <div className="cta-status-badge motion-fade" data-motion="fade">
          <span className="cta-pulse-dot" aria-hidden="true"></span>
          <span>Open to Lead UI/UX Roles &amp; Strategic Advisory · 2026 Engagements</span>
        </div>

        <div className="cta-main-grid">
          {/* Left: Narrative & Value Proposition */}
          <div className="cta-intro-col">
            <h2 className="cta-headline motion-fade-up" data-motion="fade-up">
              Hiring a designer or fixing a product? Let’s talk.
            </h2>
            <p className="cta-description motion-fade-up" data-motion="fade-up" data-delay="100">
              Whether you are an executive recruiter seeking a Lead UX Designer to anchor your product organization, or a founder launching a flagship SaaS experience, let's review your product roadmap, team structure, and target impact.
            </p>
          </div>

          {/* Right: Interactive Actions Card */}
          <div className="cta-actions-card motion-fade-up" data-motion="fade-up" data-delay="200">
            <h3 className="cta-actions-card-title">Get in touch</h3>

            <div className="cta-actions-btn-group">
              <button
                type="button"
                className="cta-btn solid-light book-call-trigger"
                id="contact-book-call-btn"
                style={{ flex: 1, justifyContent: 'center' }}
                title="Book a 20-min call on Calendly"
                onClick={onOpenBooking}
              >
                <span>Book a 20-min call</span>
                <span className="arrow" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="cta-copy-btn"
                id="cta-copy-email-btn"
                title="Copy email address to clipboard"
                onClick={copyEmail}
              >
                <span id="cta-email-display-text">aam.uiux@gmail.com</span>
                <span
                  className="cta-copy-badge"
                  id="cta-copy-email-toast"
                  style={{ background: copied ? '#10b981' : '', color: copied ? '#ffffff' : '' }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>

            <p className="cta-direct-note">
              <span style={{ color: '#34d399' }} aria-hidden="true">●</span>
              <span>Tell me about your role or product. I reply within one business day.</span>
            </p>
          </div>
        </div>

        {/* Social Networks Row */}
        <div className="cta-socials-header">
          <span className="cta-socials-label">Professional Profiles &amp; Networks</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--on-dark-faint)' }}>Connect directly</span>
        </div>

        <div className="cta-socials-grid">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/aamuiux/" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit LinkedIn Profile">
            <div className="cta-social-meta">
              <span className="cta-social-name">LinkedIn</span>
              <span className="cta-social-handle">@aamuiux</span>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/saikat-uiux" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit GitHub Profile">
            <div className="cta-social-meta">
              <span className="cta-social-name">GitHub</span>
              <span className="cta-social-handle">@saikat-uiux</span>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>

          {/* Direct Inquiries Email */}
          <a href="mailto:aam.uiux@gmail.com" className="cta-social-card" aria-label="Send direct email to aam.uiux@gmail.com">
            <div className="cta-social-meta">
              <span className="cta-social-name">Direct Inquiries</span>
              <span className="cta-social-handle">aam.uiux@gmail.com</span>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
