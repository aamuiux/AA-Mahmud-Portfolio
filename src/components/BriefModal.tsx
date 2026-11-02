import React from 'react';
import type { BriefData } from '../types';

interface BriefModalProps {
  brief: BriefData | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BriefModal: React.FC<BriefModalProps> = ({ brief, onClose, onOpenBooking }) => {
  return (
    <div
      className={`brief-modal-backdrop ${brief ? 'is-active' : ''}`}
      id="brief-modal"
      role="dialog"
      aria-modal="true"
      aria-hidden={brief ? 'false' : 'true'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="brief-modal-card">
        <div className="brief-modal-header">
          <div>
            <span className="brief-badge" id="brief-modal-category">{brief?.catLabel || 'Enterprise Architecture'}</span>
            <h2 className="brief-title" id="brief-modal-title">{brief?.title || 'Project Context'}</h2>
            <div className="brief-meta">
              <span id="brief-modal-client">{brief?.client || 'Enterprise'}</span>
              <span className="brief-sep" aria-hidden="true">–</span>
              <span id="brief-modal-year">{brief?.year || '2025'}</span>
              <span className="brief-sep" aria-hidden="true">–</span>
              <span id="brief-modal-roi" style={{ color: '#34d399', fontWeight: 500 }}>{brief?.roi || 'Verified Impact'}</span>
            </div>
          </div>
          <button type="button" className="brief-close-btn" id="brief-modal-close" aria-label="Close Project Context Modal" onClick={onClose}>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="brief-section">
          <h3 className="brief-section-title">The Challenge &amp; Problem Space</h3>
          <p className="brief-section-desc" id="brief-modal-challenge">{brief?.challenge || 'Problem statement and business constraints.'}</p>
        </div>

        <div className="brief-section">
          <h3 className="brief-section-title">UX Architecture &amp; Strategic Solution</h3>
          <p className="brief-section-desc" id="brief-modal-solution">{brief?.solution || 'Solution details and architectural execution.'}</p>
        </div>

        <div className="brief-section">
          <h3 className="brief-section-title">System Stack &amp; Design Deliverables</h3>
          <p className="brief-tech-line" id="brief-modal-tech">{brief?.tech || 'Figma Tokens · Design Systems · React · TypeScript'}</p>
        </div>

        <div className="brief-actions">
          <a
            href={brief?.figmaUrl || 'https://www.figma.com/@aam_uiux'}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn solid-light"
            id="brief-modal-figma"
            style={{ justifyContent: 'center' }}
          >
            <span>Open Figma Specs</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className="cta-btn ghost-light book-call-trigger"
            id="brief-modal-discuss"
            style={{ justifyContent: 'center' }}
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
          >
            <span>Discuss This Case Study</span>
            <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
