import React from 'react';
import type { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 border-b border-dashed border-[var(--line)]">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
          <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
          <span>Executive Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight max-w-[20ch]">
          <span className="block">What CTOs, Founders</span>
          <span className="block">and Leaders say.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <figure
            key={item.id}
            className="p-6 sm:p-8 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex flex-col justify-between gap-6 relative"
          >
            <Quote className="w-8 h-8 text-[var(--line-strong)]/40 absolute top-6 right-6" />

            <blockquote className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed italic pr-6 relative z-10">
              “{item.quote}”
            </blockquote>

            <figcaption className="flex items-center gap-3 pt-4 border-t border-dashed border-[var(--line)]">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover border border-[var(--line)]"
                loading="lazy"
              />
              <div className="min-w-0">
                <span className="font-['Space_Grotesk'] font-bold text-sm block text-[var(--ink)] truncate">
                  {item.name}
                </span>
                <span className="text-[0.6875rem] text-[var(--ink-muted)] block truncate">
                  {item.role}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
