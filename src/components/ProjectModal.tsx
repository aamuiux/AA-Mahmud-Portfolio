import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--canvas)] border border-dashed border-[var(--line-strong)] rounded-lg overflow-y-auto shadow-2xl flex flex-col text-[var(--ink)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-[var(--canvas)]/95 backdrop-blur-md border-b border-dashed border-[var(--line)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{project.catLabel}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[var(--surface-grey)] text-[var(--ink)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] w-full bg-[var(--surface-grey)] overflow-hidden border-b border-dashed border-[var(--line)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/75 backdrop-blur-xs text-white text-xs font-mono rounded">
            {project.year} · {project.client}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[var(--ink)] mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.roiPills.map((pill, idx) => (
              <div
                key={idx}
                className="p-3 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm text-[var(--ink)]">
                  {pill}
                </span>
              </div>
            ))}
          </div>

          {/* Deep Dive Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded">
            <div>
              <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[var(--ink)] mb-2">
                Problem &amp; Context
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[var(--ink)] mb-2">
                Design Architecture &amp; Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] mb-2">
              Design Systems &amp; Engineering Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.split('·').map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded text-[var(--ink)] font-mono"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-dashed border-[var(--line)]">
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--ink)] text-[var(--canvas)] text-xs font-semibold rounded hover:opacity-90 transition-opacity"
              >
                <span>Figma Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.prototypeUrl && (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-dashed border-[var(--line)] text-[var(--ink)] text-xs font-medium rounded hover:bg-[var(--surface-grey)] transition-colors"
              >
                <span>Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-dashed border-[var(--line)] text-[var(--ink)] text-xs font-medium rounded hover:bg-[var(--surface-grey)] transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-dashed border-[var(--line)] text-[var(--ink)] text-xs font-medium rounded hover:bg-[var(--surface-grey)] transition-colors ml-auto"
              >
                <span>Figma Community Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
