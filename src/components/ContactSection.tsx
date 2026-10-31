import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Linkedin, Github, Globe, Mail } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);
  const email = 'aam.uiux@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aamuiux/',
      desc: 'Connect professionally',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/saikat-wp',
      desc: 'Frontend prototypes & code',
      icon: Github,
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/aam_uiux',
      desc: 'Design explorations & craft',
      icon: Globe,
    },
    {
      name: 'Direct Email',
      url: `mailto:${email}?subject=Lead%20UI%2FUX%20Role%20Inquiry`,
      desc: 'Send project brief',
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 sm:px-10 lg:px-14 bg-[var(--surface-grey)] border-b border-dashed border-[var(--line)]">
      {/* Live Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--canvas)] border border-dashed border-[var(--line)] rounded-full text-xs text-[var(--ink-muted)] mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 badge-pulse shrink-0" />
        <span className="font-medium tracking-wide">
          Open to Lead UI/UX Roles &amp; Strategic Advisory · 2026 Engagements
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
        {/* Left Narrative */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-6">
            Hiring a designer or fixing a product? Let’s talk.
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-xl">
            Whether you are an executive recruiter seeking a Lead UX Designer to anchor your product
            organization, or a founder launching a flagship SaaS experience, let's review your product
            roadmap, team structure, and target impact.
          </p>
        </div>

        {/* Right Action Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[var(--canvas)] border border-dashed border-[var(--line-strong)] rounded flex flex-col gap-5">
          <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--ink)]">
            Get in touch
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Book call button with theme-adaptive solid-light */}
            <button
              type="button"
              id="contact-book-call-btn"
              onClick={onOpenBooking}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[var(--ink)] text-[var(--canvas)] font-semibold text-xs rounded hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <span>Book a 20-min call</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Copy email button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-between gap-3 px-4 py-3.5 bg-transparent border border-dashed border-[var(--line)] text-[var(--ink)] text-xs rounded hover:bg-[var(--surface-grey)] transition-colors cursor-pointer"
            >
              <span className="font-mono text-xs truncate">{email}</span>
              <span className="p-1 rounded bg-[var(--surface-grey)]">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </span>
            </button>
          </div>

          <p className="text-[0.7rem] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Tell me about your role or product. I reply within one business day.</span>
          </p>
        </div>
      </div>

      {/* Socials Grid */}
      <div className="pt-8 border-t border-dashed border-[var(--line)]">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[var(--ink-muted)]">
            Professional Profiles &amp; Networks
          </span>
          <span className="text-xs text-[var(--ink-muted)]">Connect directly</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 bg-[var(--canvas)] border border-dashed border-[var(--line)] rounded flex items-center gap-3.5 hover:border-[var(--ink)] transition-colors group"
              >
                <div className="p-2.5 rounded bg-[var(--surface-grey)] text-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-[var(--canvas)] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="font-['Space_Grotesk'] text-sm font-bold block text-[var(--ink)] truncate">
                    {s.name}
                  </span>
                  <span className="text-[0.6875rem] text-[var(--ink-muted)] block truncate">
                    {s.desc}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
