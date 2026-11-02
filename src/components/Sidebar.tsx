import React from 'react';
import type { CategoryKey, ThemeMode, ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  currentCategory: CategoryKey;
  theme: ThemeMode;
  isOpen: boolean;
  onSelectCategory: (cat: CategoryKey) => void;
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
  onToggleTheme: () => void;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  currentCategory,
  theme,
  isOpen,
  onSelectCategory,
  onNavigateHome,
  onNavigateProfile,
  onToggleTheme,
  onClose,
}) => {
  const categories: { key: CategoryKey; name: string; count: number }[] = [
    { key: 'all', name: 'All Works', count: 26 },
    { key: 'saas', name: 'SaaS Platforms', count: 7 },
    { key: 'dashboard', name: 'Dashboards', count: 3 },
    { key: 'fintech', name: 'Fintech & Banking', count: 6 },
    { key: 'ecommerce', name: 'E-Commerce', count: 2 },
    { key: 'app-design', name: 'App Design', count: 6 },
    { key: 'healthcare', name: 'Health Care', count: 2 },
  ];

  return (
    <>
      <div
        className={`sidebar-mobile-backdrop ${isOpen ? 'is-active' : ''}`}
        id="sidebar-mobile-backdrop"
        aria-hidden={isOpen ? 'false' : 'true'}
        onClick={onClose}
      />
      <aside
        className={`site-archetypes-sidebar ${isOpen ? 'is-open' : ''}`}
        id="site-archetypes-sidebar"
        data-lenis-prevent
        aria-label="Showcase Archetypes Full Sidebar"
      >
        {/* Top Block: Brand & Monogram */}
        <div className="sidebar-top-block">
          <div className="sidebar-brand-row">
            <button
              type="button"
              className="sidebar-brand-logo"
              id="sidebar-brand-logo"
              aria-label="AA Mahmud — Lead UI/UX Designer"
              onClick={() => {
                onNavigateHome();
                onClose();
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
            >
              <div className="sidebar-monogram" aria-hidden="true">AM</div>
              <div className="sidebar-title-wrap">
                <span className="sidebar-brand-name">AA Mahmud</span>
                <span className="sidebar-brand-sub">Lead UI/UX Designer</span>
              </div>
            </button>
            <button
              type="button"
              className="sidebar-mobile-close"
              id="sidebar-mobile-close"
              aria-label="Close sidebar menu"
              onClick={onClose}
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          <button
            type="button"
            className="sidebar-profile-card"
            id="sidebar-profile-card"
            aria-label="Open Full Designer Profile"
            onClick={() => {
              onNavigateProfile();
              onClose();
            }}
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
          >
            <div className="sidebar-profile-avatar-wrap">
              <img
                src="/src/assets/images/aa-mahmud.jpg"
                alt="AA Mahmud"
                className="sidebar-profile-avatar"
                loading="eager"
              />
              <span className="sidebar-profile-status-dot" aria-hidden="true"></span>
            </div>
            <div className="sidebar-profile-info">
              <div className="sidebar-profile-name-row">
                <span className="sidebar-profile-name">Full Profile</span>
                <span className="sidebar-profile-arrow" aria-hidden="true">→</span>
              </div>
              <span className="sidebar-profile-exp">12+ Yrs · Senior Product Leader</span>
            </div>
          </button>
        </div>

        {/* Center Block: Showcase Archetypes & Filters */}
        <div className="sidebar-center-block">
          <div className="sidebar-section-header">
            <span className="sidebar-section-title">Work Archetypes</span>
            <span className="sidebar-section-tag">26 Cases</span>
          </div>

          <nav className="archetypes-tab-list" role="tablist" aria-label="Filter showcase works by archetype">
            {categories.map((cat) => {
              const isActive = currentView === 'showcase' && currentCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  className={`category-btn ${isActive ? 'is-active' : ''}`}
                  data-filter={cat.key}
                  role="tab"
                  aria-selected={isActive ? 'true' : 'false'}
                  onClick={() => {
                    onSelectCategory(cat.key);
                    onClose();
                  }}
                >
                  <span className="cat-indicator" aria-hidden="true"></span>
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-count">{cat.count}</span>
                </button>
              );
            })}
          </nav>

          <div className="sidebar-profile-callout">
            <div className="sidebar-profile-callout-header">
              <span className="sidebar-profile-callout-kicker">Professional Record</span>
              <span className="verified-badge-mini">Verified</span>
            </div>
            <p className="sidebar-profile-callout-text">
              12+ years of verified enterprise impact across Astha IT, SSL Wireless, and international venture startups.
            </p>
            <button
              type="button"
              className="sidebar-profile-link"
              id="sidebar-view-profile-btn"
              onClick={() => {
                onNavigateProfile();
                onClose();
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
            >
              <span>View Full Experience &amp; Credentials</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Block: Deliverables, Theme Toggle & Meta */}
        <div className="sidebar-bottom-block">
          <div className="sidebar-deliverables-box">
            <span className="deliverables-title">Architectural Scope</span>
            <ul className="deliverables-list">
              <li>• Enterprise Design Systems (WCAG AA)</li>
              <li>• Complex High-Throughput SaaS UX</li>
              <li>• Mobile Digital Banking &amp; Fintech MFS</li>
              <li>• AI-Native Copilots &amp; Telemetry Dashboards</li>
            </ul>
          </div>

          <div className="sidebar-theme-row">
            <button
              type="button"
              className="theme-toggle-btn sidebar-theme-btn"
              id="sidebar-theme-toggle"
              aria-pressed={theme === 'dark' ? 'true' : 'false'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={onToggleTheme}
            >
              <span className="theme-toggle-icon icon-sun" aria-hidden="true">☀️</span>
              <span className="theme-toggle-icon icon-moon" aria-hidden="true">🌙</span>
              <span className="theme-toggle-label">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          <div className="sidebar-meta-footer">
            <span>© 2026 AA Mahmud</span>
            <span className="meta-sep" aria-hidden="true">·</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </aside>
    </>
  );
};
