import React from 'react';

export const Footer: React.FC = () => {
  return (
  <footer className="site-footer" role="contentinfo">
    <div className="container">
      <div id="category-footer-socials" className="category-footer-socials" style={{ display: "none" }}>
        <div className="cta-socials-header" style={{ borderTop: "none", paddingTop: "0", marginTop: "0" }}>
          <span className="cta-socials-label">Professional Profiles &amp; Networks</span>
          <span style={{ fontSize: "0.75rem", color: "var(--on-dark-faint)" }}>Connect directly</span>
        </div>
        <div className="cta-socials-grid" style={{ paddingBottom: "2rem" }}>
          {/*  LinkedIn  */}
          <a href="https://www.linkedin.com/in/aamuiux/" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit LinkedIn Profile">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">LinkedIn</p>
                <p className="cta-social-sub">Professional Recommendations</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>

          {/*  GitHub  */}
          <a href="https://github.com/aamuiux/" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit GitHub Profile">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">GitHub</p>
                <p className="cta-social-sub">Design Systems &amp; Code</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>

          {/*  Direct Inquiries Email  */}
          <a href="mailto:aam.uiux@gmail.com" className="cta-social-card" aria-label="Direct Email Inquiry">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">aam.uiux@gmail.com</p>
                <p className="cta-social-sub">Direct Inquiries · Fast Reply</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="footer-simple-inner" id="footer-simple-inner" style={{ marginBottom: "0" }}>
        <div className="footer-simple-brand">
          <div className="header-logo footer-logo" style={{ cursor: "default" }}>
            <span className="logo-diamond" aria-hidden="true"></span>
            <span className="logo-text">Abdullah Al Mahmud</span>
          </div>
          <span className="footer-simple-role">Lead UI/UX Designer</span>
        </div>
        <p className="copyright-text">Designed and built by AA Mahmud in Dhaka.</p>
      </div>
    </div>
  </footer>

  );
};
