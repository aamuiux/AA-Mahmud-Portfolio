import React, { useState } from 'react';
import { faqsData } from '../data';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 border-b border-dashed border-[var(--line)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Col */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Recruiter &amp; Client FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            Common questions &amp; working models.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
            Everything you need to know about leadership style, ROI delivery, engineering alignment,
            and flexible engagement formats.
          </p>
        </div>

        {/* Right Col: Accordion */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-dashed divide-[var(--line)]">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-[var(--ink)] group-hover:text-emerald-500 transition-colors">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded bg-[var(--surface-grey)] text-[var(--ink)] shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed mt-4 pt-1 pr-6 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
