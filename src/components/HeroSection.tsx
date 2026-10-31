import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onSeeWork: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSeeWork, onOpenBooking }) => {
  return (
    <section className="relative min-h-[calc(100svh-58px)] lg:min-h-screen py-12 lg:py-20 px-6 sm:px-10 lg:px-14 flex items-center overflow-hidden w-full border-b border-dashed border-[var(--line)]">
      {/* Right Background Portrait on Large Screens */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[46%] pointer-events-none opacity-20 lg:opacity-40 select-none overflow-hidden mix-blend-luminosity">
        <img
          src="/src/assets/images/aa-mahmud.jpg"
          alt="AA Mahmud — Lead UI/UX Designer & Product Leader"
          className="w-full h-full object-cover object-top filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--canvas)] via-transparent to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded-full text-xs text-[var(--ink-muted)] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 badge-pulse shrink-0" />
          <span className="font-medium tracking-wide">Available for 2026 Leadership &amp; Advisory Roles</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.06] mb-6 max-w-3xl">
          Lead UI/UX Designer &amp; AI Product Strategist.
        </h1>

        {/* Lead Narrative */}
        <p className="text-base sm:text-xl text-[var(--ink-muted)] leading-relaxed max-w-2xl mb-10 font-normal">
          If you're balancing user expectations, business priorities, and technical constraints,
          I help you find clarity, connect the dots, make confident product decisions, and lead
          teams toward usable solutions that deliver compounding ROI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            type="button"
            onClick={onSeeWork}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[var(--ink)] text-[var(--canvas)] font-medium text-sm rounded hover:opacity-90 transition-all cursor-pointer group"
          >
            <span>See my work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-dashed border-[var(--line-strong)] text-[var(--ink)] font-medium text-sm rounded hover:bg-[var(--surface-grey)] transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>Book a 20-min call</span>
          </button>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-dashed border-[var(--line)]">
          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[var(--ink)]">
              12+ Yrs
            </div>
            <div className="text-xs text-[var(--ink-muted)] mt-1 tracking-wide">
              Product &amp; Systems Leadership
            </div>
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[var(--ink)]">
              25+
            </div>
            <div className="text-xs text-[var(--ink-muted)] mt-1 tracking-wide">
              Verified Enterprise Products
            </div>
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[var(--ink)]">
              $450M+
            </div>
            <div className="text-xs text-[var(--ink-muted)] mt-1 tracking-wide">
              Cumulative FinTech Flow
            </div>
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[var(--ink)]">
              -45%
            </div>
            <div className="text-xs text-[var(--ink-muted)] mt-1 tracking-wide">
              Average Flow Delays
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
