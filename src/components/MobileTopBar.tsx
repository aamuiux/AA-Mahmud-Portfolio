import React from 'react';
import type { ThemeMode } from '../types';

interface MobileTopBarProps {
  theme: ThemeMode;
  onNavigateHome: () => void;
  onOpenSidebar: () => void;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  theme,
  onNavigateHome,
  onOpenSidebar,
  onToggleTheme,
  onToggleMenu,
}) => {
  return (
    <header className="mobile-top-bar" id="mobile-top-bar" aria-label="Mobile Navigation">
      <div className="mobile-top-bar-inner">
        <button
          type="button"
          onClick={onNavigateHome}
          className="mobile-header-brand"
          id="mobile-header-brand"
          aria-label="AA Mahmud — Return to Home"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span className="mobile-brand-monogram">AM</span>
          <span className="mobile-brand-text">AA Mahmud</span>
        </button>

        <div className="mobile-top-bar-actions">
          <button
            type="button"
            className="mobile-archetype-trigger"
            id="mobile-archetype-trigger"
            aria-label="Open Works &amp; Archetypes Menu"
            onClick={onOpenSidebar}
          >
            <span className="pill-dot" aria-hidden="true"></span>
            <span>Archetypes</span>
            <span className="arrow-down" aria-hidden="true">▾</span>
          </button>

          <button
            type="button"
            className="theme-toggle-btn mobile-theme-toggle"
            id="header-theme-toggle"
            aria-pressed={theme === 'dark' ? 'true' : 'false'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleTheme}
          >
            <span className="theme-toggle-icon icon-sun" aria-hidden="true">☀️</span>
            <span className="theme-toggle-icon icon-moon" aria-hidden="true">🌙</span>
          </button>

          <button
            type="button"
            className="mobile-burger-btn"
            id="mobile-burger-btn"
            aria-label="Open Navigation Menu"
            aria-expanded="false"
            onClick={onOpenSidebar}
          >
            <span className="burger-bar" aria-hidden="true"></span>
            <span className="burger-bar" aria-hidden="true"></span>
            <span className="burger-bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
