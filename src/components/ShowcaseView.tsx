import React, { useState, useMemo } from 'react';
import type { CategoryKey, Project } from '../types';
import { categoryMetaMap, archetypeCategories } from '../data';
import { ArrowLeft, Search, X, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ShowcaseViewProps {
  category: CategoryKey;
  projects: Project[];
  onSelectCategory: (cat: CategoryKey) => void;
  onBackHome: () => void;
  onOpenProjectModal: (project: Project) => void;
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({
  category,
  projects,
  onSelectCategory,
  onBackHome,
  onOpenProjectModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const meta = categoryMetaMap[category] || categoryMetaMap.all;

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchCat = category === 'all' || item.category === category;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.tech.toLowerCase().includes(q) ||
        item.catLabel.toLowerCase().includes(q)
      );
    });
  }, [category, projects, searchQuery]);

  return (
    <div className="min-h-screen py-8 lg:py-14 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full">
      {/* Top Navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-dashed border-[var(--line)] mb-8">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:opacity-75 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Overview</span>
        </button>

        <span className="text-xs font-mono text-[var(--ink-muted)]">
          {filteredProjects.length} Verified Projects
        </span>
      </div>

      {/* Showcase Category Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
          <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
          <span>{meta.kicker}</span>
        </div>
        <h1
          id="showcase-category-title"
          className="text-4xl sm:text-6xl font-bold text-[var(--ink)] tracking-tight mb-4"
        >
          {meta.title}
        </h1>
        <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-3xl">
          {meta.desc}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded mb-10">
        {/* Category switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              category === 'all'
                ? 'bg-[var(--ink)] text-[var(--canvas)]'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            All Works
          </button>
          {archetypeCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => onSelectCategory(c.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                category === c.key
                  ? 'bg-[var(--ink)] text-[var(--canvas)]'
                  : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[var(--ink-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, stack, clients..."
            className="w-full bg-[var(--canvas)] border border-dashed border-[var(--line)] rounded pl-9 pr-8 py-1.5 text-xs text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-hidden focus:border-[var(--ink)]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Stacked Project Feed */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded">
          <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--ink)] mb-2">
            No projects found
          </h3>
          <p className="text-xs text-[var(--ink-muted)] mb-4">
            Try adjusting your search query or reset the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('all');
            }}
            className="px-4 py-2 bg-[var(--ink)] text-[var(--canvas)] text-xs font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-12 sm:gap-16">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded overflow-hidden flex flex-col group hover:border-[var(--ink)] transition-colors"
            >
              {/* Media figure */}
              <div
                className="relative aspect-[16/9] sm:aspect-[16/10] bg-[var(--canvas)] overflow-hidden cursor-pointer"
                onClick={() => onOpenProjectModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-xs text-white text-xs font-mono rounded">
                  {project.year}
                </div>
              </div>

              {/* Caption Block */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-1">
                      {project.catLabel}
                    </span>
                    <h2
                      onClick={() => onOpenProjectModal(project)}
                      className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[var(--ink)] hover:text-emerald-500 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--ink-muted)] mt-1 max-w-2xl">
                      {project.subtitle}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-[var(--ink-muted)] shrink-0">
                    Index #0{idx + 1}
                  </span>
                </div>

                {/* Challenge & Solution Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[var(--canvas)] border border-dashed border-[var(--line)] rounded text-xs leading-relaxed">
                  <div>
                    <span className="font-semibold text-[var(--ink)] block mb-1">Challenge</span>
                    <p className="text-[var(--ink-muted)]">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)] block mb-1">Architecture Solution</span>
                    <p className="text-[var(--ink-muted)]">{project.solution}</p>
                  </div>
                </div>

                {/* Bottom Actions and Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dashed border-[var(--line)]">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.roiPills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink)]"
                      >
                        {pill}
                      </span>
                    ))}
                    <span className="text-xs text-[var(--ink-muted)] ml-2">
                      Stack: {project.tech}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--ink)] text-[var(--canvas)] text-xs font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-[var(--line)] text-[var(--ink)] text-xs font-medium rounded hover:bg-[var(--canvas)] transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
