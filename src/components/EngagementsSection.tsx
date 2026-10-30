import React from 'react';
import { clientLogos } from '../data';

export const EngagementsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 border-b border-dashed border-[var(--line)]">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
          <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
          <span>Selected Engagements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight max-w-[20ch]">
          Trusted by high-growth ventures &amp; leaders.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {clientLogos.map((client, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex items-center justify-center text-center font-['Space_Grotesk'] text-xs sm:text-sm font-semibold tracking-wide text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};
