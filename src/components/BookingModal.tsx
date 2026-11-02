import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`brief-modal-backdrop ${isOpen ? 'is-active' : ''}`}
      id="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-hidden={isOpen ? 'false' : 'true'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="brief-modal-card booking-modal-card">
        <div className="brief-modal-header" style={{ paddingBottom: '1rem', borderBottom: '1px dashed var(--line)' }}>
          <div>
            <span className="brief-badge" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>Live Booking</span>
            <h2 className="brief-title" style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>Schedule a 20-Minute Intro Call</h2>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
              Direct calendar access with AA Mahmud — Lead UI/UX Designer &amp; Product Strategist.
            </p>
          </div>
          <button type="button" className="brief-close-btn" id="booking-modal-close" aria-label="Close Booking Modal" onClick={onClose}>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="booking-frame-wrap" style={{ position: 'relative', width: '100%', minHeight: '620px', background: 'var(--surface-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            className="booking-embed-frame"
            src="https://calendly.com/aamsaikat-ux/20min?embed_domain=localhost&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
            title="Schedule 20-Min Intro Call with AA Mahmud"
            loading="lazy"
            style={{ width: '100%', height: '620px', border: 'none' }}
          />
        </div>

        <div className="booking-fallback-bar">
          <span>Prefer direct link? Open outside modal:</span>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href="https://calendly.com/aamsaikat-ux/20min" target="_blank" rel="noopener noreferrer" className="cta-btn solid-light" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
              Open on Calendly.com ↗
            </a>
            <a href="mailto:aam.uiux@gmail.com?subject=20-Min%20Intro%20Call%20Request" className="cta-btn ghost-light" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
