import React from 'react';
import { Layers, Sparkles, TrendingUp } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Enterprise Scale & Design Systems',
      desc: 'Zero-drift token architecture and multi-brand component governance that cuts engineering rework in half and eliminates frontend ambiguity.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'AI-Native Workflows & Autonomy',
      desc: 'Intuitive UX for non-deterministic AI models, streaming responses, cognitive scaffolding, and autonomous agent supervisor cockpits.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Measurable Business ROI',
      desc: 'Connecting interface ergonomics directly to user retention curves, reduced onboarding churn, and high-frequency transaction conversion velocity.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 border-b border-dashed border-[var(--line)]">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
          <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
          <span>Core Principles</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight max-w-[20ch]">
          Three pillars of high-impact product design.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-sm font-semibold text-emerald-500 tracking-wider">
                  {pillar.number}
                </span>
                <Icon className="w-5 h-5 text-[var(--ink-muted)]" />
              </div>

              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--ink)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
