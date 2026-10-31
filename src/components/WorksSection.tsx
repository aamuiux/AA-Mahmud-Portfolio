import React, { useState } from 'react';
import type { CategoryKey, Project } from '../types';
import { archetypeCategories } from '../data';
import { ArrowUpRight, Layers } from 'lucide-react';

interface WorksSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenFullShowcase: (category: CategoryKey) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({
  projects,
  onSelectProject,
  onOpenFullShowcase,
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 border-b border-dashed border-[var(--line)]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight max-w-[20ch]">
            Selected Works &amp; Systems.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onOpenFullShowcase(activeFilter)}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--ink)] hover:opacity-75 transition-opacity cursor-pointer self-start lg:self-end"
        >
          <Layers className="w-4 h-4 text-emerald-500" />
          <span>Open Full-Width Showcase ({projects.length} Works) →</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded border border-dashed transition-all cursor-pointer whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)]'
              : 'border-[var(--line)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-grey)]'
          }`}
        >
          All Works ({projects.length})
        </button>
        {archetypeCategories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveFilter(cat.key)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded border border-dashed transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === cat.key
                ? 'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)]'
                : 'border-[var(--line)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-grey)]'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded overflow-hidden cursor-pointer hover:border-[var(--ink)] transition-colors"
          >
            {/* Project Thumbnail */}
            <div className="relative aspect-[16/10] bg-[var(--canvas)] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[0.65rem] font-medium tracking-wider uppercase rounded">
                {project.year}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--ink)] group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[var(--ink-muted)] group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs text-[var(--ink-muted)] line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* ROI and Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-dashed border-[var(--line)]">
                {project.roiPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-[0.65rem] font-medium px-2 py-0.5 rounded bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink)]"
                  >
                    {pill}
                  </span>
                ))}
                <span className="text-[0.65rem] text-[var(--ink-muted)] ml-auto truncate max-w-[150px]">
                  {project.client}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
