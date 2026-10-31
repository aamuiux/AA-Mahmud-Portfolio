import React from 'react';

interface MobileHeaderProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
  onNavigateHome: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  isMobileOpen,
  onToggleMobile,
  onNavigateHome,
}) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 w-full h-[58px] z-[90] lg:hidden bg-[var(--canvas)]/85 backdrop-blur-md border-b border-[var(--line)] px-4 flex items-center justify-between transition-colors duration-350"
      aria-label="Mobile Navigation Header"
    >
      <button
        onClick={onNavigateHome}
        className="flex flex-col text-left cursor-pointer group"
        aria-label="AA Mahmud — Return to Home"
      >
        <span className="font-['Space_Grotesk'] font-bold text-base tracking-tight text-[var(--ink)] leading-tight">
          AA Mahmud
        </span>
        <span className="text-[0.625rem] text-[var(--ink-muted)] tracking-wider truncate max-w-[210px]">
          Lead UI/UX Designer &amp; AI Strategist
        </span>
      </button>

      <button
        type="button"
        onClick={onToggleMobile}
        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-1 rounded hover:bg-[var(--surface-grey)] transition-colors cursor-pointer text-[var(--ink)]"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileOpen}
      >
        <span
          className={`w-5 h-[2px] bg-current rounded-full transition-transform duration-250 ${
            isMobileOpen ? 'translate-y-[8px] rotate-45' : ''
          }`}
        />
        <span
          className={`w-5 h-[2px] bg-current rounded-full transition-opacity duration-200 ${
            isMobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-5 h-[2px] bg-current rounded-full transition-transform duration-250 ${
            isMobileOpen ? '-translate-y-[8px] -rotate-45' : ''
          }`}
        />
      </button>
    </header>
  );
};
