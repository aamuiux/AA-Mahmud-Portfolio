import React, { useEffect } from 'react';
import { X, ExternalLink, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl h-[85vh] max-h-[750px] bg-[var(--canvas)] border border-dashed border-[var(--line-strong)] rounded-lg overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-dashed border-[var(--line)] bg-[var(--surface-grey)]">
          <div>
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[var(--ink)]">
              Schedule 20-Min Intro Call
            </h3>
            <p className="text-xs text-[var(--ink-muted)]">
              Direct with Abdullah Al Mahmud (Lead UI/UX Designer)
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[var(--canvas)] text-[var(--ink)] transition-colors cursor-pointer"
            aria-label="Close scheduling modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calendly Embed Frame */}
        <div className="flex-1 w-full bg-[var(--canvas)] relative">
          <iframe
            src="https://calendly.com/aamsaikat-ux/20min?hide_landing_page_details=1&hide_gdpr_banner=1"
            title="Schedule 20-Min Intro Call with AA Mahmud"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Fallback footer */}
        <div className="p-3 px-6 bg-[var(--surface-grey)] border-t border-dashed border-[var(--line)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--ink-muted)]">
          <span>Prefer direct booking outside the modal?</span>
          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/aamsaikat-ux/20min"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--ink)] text-[var(--canvas)] rounded text-[0.6875rem] font-medium"
            >
              <span>Open on Calendly</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="mailto:aam.uiux@gmail.com?subject=20-Min%20Intro%20Call%20Request"
              className="inline-flex items-center gap-1.5 px-3 py-1 border border-dashed border-[var(--line)] rounded text-[0.6875rem] font-medium text-[var(--ink)]"
            >
              <Mail className="w-3 h-3" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
