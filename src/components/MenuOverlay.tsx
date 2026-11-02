import React from 'react';
import type { CategoryKey, ThemeMode } from '../types';

interface MenuOverlayProps {
  isOpen: boolean;
  theme: ThemeMode;
  onClose: () => void;
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
  onSelectCategory: (cat: CategoryKey) => void;
  onToggleTheme: () => void;
  onOpenBooking: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  theme,
  onClose,
  onNavigateHome,
  onNavigateProfile,
  onSelectCategory,
  onToggleTheme,
  onOpenBooking,
}) => {
  return (
    <div
      className={`menu-overlay ${isOpen ? 'is-active' : ''}`}
      id="menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-hidden={isOpen ? 'false' : 'true'}
    >
      <div className="menu-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="menu-panel">
        <div className="menu-top-bar">
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>Navigation</span>
          <button type="button" className="menu-close-btn" id="menu-close-btn" aria-label="Close navigation menu" onClick={onClose}>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav className="menu-nav-list" aria-label="Full-screen navigation links">
          <a
            href="#top"
            className="menu-nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
              onClose();
            }}
          >
            <span>Home</span>
            <span className="link-num">01</span>
          </a>
          <button
            type="button"
            className="menu-nav-link text-left w-full"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
            onClick={() => {
              onSelectCategory('all');
              onClose();
            }}
          >
            <span>Work Archetypes</span>
            <span className="link-num">02</span>
          </button>
          <button
            type="button"
            className="menu-nav-link text-left w-full"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
            onClick={() => {
              onNavigateProfile();
              onClose();
            }}
          >
            <span>Designer Profile</span>
            <span className="link-num">03</span>
          </button>
          <button
            type="button"
            className="menu-nav-link text-left w-full"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
          >
            <span>Book 20-Min Call</span>
            <span className="link-num">04</span>
          </button>
        </nav>

        <div className="menu-bottom-block">
          <button
            type="button"
            className="theme-toggle-btn"
            id="modal-theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleTheme}
            style={{ width: '100%', justifyContent: 'space-between', padding: '0.75rem 1rem' }}
          >
            <span>Appearance Theme</span>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
