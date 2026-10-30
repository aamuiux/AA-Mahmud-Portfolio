import React from 'react';
import type { CategoryKey, ThemeMode, ViewType } from '../types';
import { archetypeCategories } from '../data';
import { Sun, Moon, ArrowRight, X } from 'lucide-react';

interface SidebarProps {
  currentView: ViewType;
  currentCategory: CategoryKey;
  theme: ThemeMode;
  isMobileOpen: boolean;
  onSelectCategory: (category: CategoryKey) => void;
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
  onToggleTheme: () => void;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  currentCategory,
  theme,
  isMobileOpen,
  onSelectCategory,
  onNavigateHome,
  onNavigateProfile,
  onToggleTheme,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-[95] lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Main Persistent / Drawer Sidebar */}
      <aside
        data-lenis-prevent
        className={`fixed top-0 left-0 bottom-0 z-[100] lg:z-[60] w-[300px] max-w-[86vw] lg:w-[290px] h-screen h-[100dvh] bg-[var(--canvas)] border-r border-dashed border-[var(--line)] flex flex-col justify-between overflow-y-auto overflow-x-hidden touch-pan-y overscroll-contain transition-transform duration-350 ease-out p-5 pb-[max(2rem,env(safe-area-inset-bottom,28px))] lg:p-6 ${
          isMobileOpen
            ? 'translate-x-0 shadow-2xl lg:shadow-none visible'
            : '-translate-x-full lg:translate-x-0 invisible lg:visible'
        }`}
        aria-label="Showcase Archetypes Full Sidebar"
      >
        {/* Top Block: Brand & Monogram */}
        <div className="pb-5 border-b border-dashed border-[var(--line)] shrink-0">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                onNavigateHome();
                onCloseMobile();
              }}
              className="inline-flex items-center gap-2.5 text-left text-[var(--ink)] cursor-pointer group"
              aria-label="AA Mahmud Home"
            >
              <span className="w-3.5 h-3.5 bg-[var(--ink)] rotate-45 shrink-0 transition-transform group-hover:scale-110" />
              <span className="font-['Space_Grotesk'] font-semibold text-lg tracking-tight text-[var(--ink)]">
                AA Mahmud
              </span>
            </button>
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 border border-dashed border-[var(--line)] text-[var(--ink-muted)] hover:text-[var(--ink)] rounded text-xs cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--ink-muted)] mt-2 leading-relaxed">
            Lead UI/UX Designer &amp; AI Strategist
          </p>

          <div className="inline-flex items-center gap-2 mt-3 text-[0.65rem] text-[var(--ink-muted)] px-2.5 py-1 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-500 badge-pulse shrink-0" />
            <span>Open to new roles &amp; projects</span>
          </div>
        </div>

        {/* Center Block: Archetype Tabs */}
        <div className="py-4 flex flex-col gap-3 shrink-0">
          <div>
            <span className="text-[0.625rem] uppercase tracking-[0.2em] text-[var(--ink-faint)] block mb-1 font-medium">
              Works Showcase
            </span>
            <h2 className="font-['Space_Grotesk'] text-lg font-medium text-[var(--ink-muted)] leading-tight">
              Archetypes
            </h2>
          </div>

          <nav className="flex flex-col gap-1.5" role="tablist" aria-label="Filter works by archetype">
            {archetypeCategories.map((cat) => {
              const isSelected = currentView === 'showcase' && currentCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    onSelectCategory(cat.key);
                    onCloseMobile();
                  }}
                  className={`flex items-center justify-between gap-2 px-3 py-2.5 border border-dashed transition-all cursor-pointer text-xs font-medium tracking-wide text-left rounded ${
                    isSelected
                      ? 'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)]'
                      : 'border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-[var(--surface-grey)]'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isSelected ? 'bg-emerald-400' : 'bg-[var(--line-strong)]'
                      }`}
                    />
                    <span className="truncate">{cat.label}</span>
                  </div>
                  <span
                    className={`text-[0.7rem] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Block: Profile Card, Theme Toggle & Meta */}
        <div className="pt-3 border-t border-dashed border-[var(--line)] flex flex-col gap-3 shrink-0">
          {/* Profile Card */}
          <div
            className={`p-3 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex flex-col gap-2.5 transition-colors ${
              currentView === 'profile' ? 'border-[var(--ink)] ring-1 ring-[var(--ink)]' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/aa-mahmud.jpg"
                alt="Abdullah Al Mahmud"
                className="w-10 h-10 rounded-full object-cover shrink-0 border border-[var(--line)]"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold truncate text-[var(--ink)]">AA Mahmud</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Available" />
                </div>
                <p className="text-[0.65rem] uppercase tracking-wider text-[var(--ink-muted)] truncate">
                  Lead UI/UX · 12+ Yrs
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onNavigateProfile();
                onCloseMobile();
              }}
              className="flex items-center justify-between gap-2 px-2.5 py-1.5 text-[0.6875rem] font-medium border border-dashed border-[var(--line)] rounded hover:bg-[var(--ink)] hover:text-[var(--canvas)] transition-all cursor-pointer text-[var(--ink)]"
            >
              <span>View Full Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Theme & Location Bar */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 py-1.5 px-2.5 border border-dashed border-[var(--line)] rounded text-[var(--ink)] hover:bg-[var(--surface-grey)] transition-colors cursor-pointer text-xs"
              aria-label="Toggle theme mode"
              title="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <div className="inline-flex items-center gap-1.5 text-[0.7rem] text-[var(--ink-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Dhaka · Global</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
