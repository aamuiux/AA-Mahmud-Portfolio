import React from 'react';
import type { Certification, Award, ExperienceItem, SkillCategory } from '../types';
import { ArrowLeft, ArrowRight, Award as AwardIcon, CheckCircle2, ShieldCheck, Mail, Calendar } from 'lucide-react';

interface ProfileViewProps {
  experience: ExperienceItem[];
  skills: SkillCategory[];
  certifications: Certification[];
  awards: Award[];
  onBackHome: () => void;
  onOpenBooking: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  experience,
  skills,
  certifications,
  awards,
  onBackHome,
  onOpenBooking,
}) => {
  return (
    <div className="min-h-screen py-8 lg:py-14 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pb-6 border-b border-dashed border-[var(--line)] mb-10">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:opacity-75 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Overview</span>
        </button>

        <span className="text-xs font-mono text-[var(--ink-muted)]">
          Profile Dossier · Verified Record
        </span>
      </div>

      {/* Profile Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-dashed border-[var(--line)] mb-16 items-start">
        <div className="lg:col-span-4">
          <div className="aspect-square w-full max-w-[320px] rounded overflow-hidden border border-dashed border-[var(--line-strong)] bg-[var(--surface-grey)] mb-5">
            <img
              src="/src/assets/images/aa-mahmud.jpg"
              alt="Abdullah Al Mahmud"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Based in Dhaka · Available for Global Roles</span>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
              <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
              <span>Lead UI/UX Designer &amp; AI Strategist</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[var(--ink)] tracking-tight mb-4">
              Abdullah Al Mahmud
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink)] font-medium mb-6">
              12+ Years Enterprise Design Leadership · Team Lead at Astha IT · Ex-Manager at SSL Wireless
            </p>
            <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
              I help founders, startups, and growing enterprises turn complex problems and ambitious ideas
              into intuitive, meaningful digital experiences. From multi-tenant SaaS platforms and FinTech
              infrastructures to native mobile apps and AI agent orchestration suites, I bring together user
              needs, business goals, and product strategy to build solutions that create compounding value.
            </p>
            <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed mb-8">
              My leadership philosophy centers on zero-drift design-to-code execution: partnering closely
              with product managers and staff engineers, establishing mature design token systems, and
              validating decisions with empirical usability data.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ink)] text-[var(--canvas)] text-xs font-medium rounded hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategic Briefing</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:aam.uiux@gmail.com?subject=Strategic%20Design%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-3 border border-dashed border-[var(--line)] text-[var(--ink)] text-xs font-medium rounded hover:bg-[var(--surface-grey)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <section className="mb-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Career Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
            Job Experience &amp; Leadership
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {experience.map((exp) => (
            <article
              key={exp.id}
              className={`p-6 sm:p-8 bg-[var(--surface-grey)] border border-dashed rounded flex flex-col lg:flex-row gap-6 lg:gap-10 ${
                exp.isCurrent ? 'border-[var(--ink)] ring-1 ring-[var(--ink)]/20' : 'border-[var(--line)]'
              }`}
            >
              {/* Meta column */}
              <div className="lg:w-72 shrink-0 flex flex-col gap-2">
                {exp.isCurrent && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[0.65rem] font-semibold rounded w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Current Position</span>
                  </div>
                )}
                <span className="font-mono text-xs text-[var(--ink-muted)]">{exp.period}</span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--ink)]">
                  {exp.company}
                </h3>
                <span className="text-xs text-[var(--ink-muted)]">{exp.location}</span>
                <span className="text-[0.6875rem] font-medium px-2 py-0.5 rounded bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink)] w-fit mt-1">
                  {exp.tenureBadge}
                </span>
              </div>

              {/* Highlights column */}
              <div className="flex-1 flex flex-col gap-4">
                {exp.progressionNote && (
                  <div className="p-3 bg-[var(--canvas)] border border-dashed border-[var(--line)] rounded text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {exp.progressionNote}
                  </div>
                )}

                {exp.roleTitle && (
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-[var(--ink)]">
                    {exp.roleTitle}
                  </h4>
                )}

                {exp.highlights && (
                  <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-[var(--ink-muted)] space-y-2 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}

                {exp.subroles && (
                  <div className="space-y-6 pt-2">
                    {exp.subroles.map((sub, sIdx) => (
                      <div key={sIdx} className="pl-4 border-l-2 border-[var(--line)]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h5 className="font-['Space_Grotesk'] font-bold text-sm text-[var(--ink)]">
                            {sub.title}
                          </h5>
                          <span className="text-xs font-mono text-[var(--ink-muted)]">
                            {sub.period}
                          </span>
                        </div>
                        <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-[var(--ink-muted)] space-y-1.5 leading-relaxed">
                          {sub.highlights.map((sh, shIdx) => (
                            <li key={shIdx}>{sh}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-[var(--line)]">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[0.65rem] px-2 py-0.5 bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink-muted)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
            Core Skills &amp; Domain Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((sc) => (
            <div
              key={sc.id}
              className="p-6 sm:p-8 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex flex-col justify-between gap-6"
            >
              <div>
                <span className="text-xs font-mono font-bold text-emerald-500 block mb-2">
                  {sc.number}
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[var(--ink)] mb-3">
                  {sc.title}
                </h3>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-6">
                  {sc.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {sc.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[0.7rem] px-2.5 py-1 bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink)] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications (2-Column Descending Order Column-First) */}
      <section className="mb-20" id="certifications">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
            Certifications &amp; Masteries
          </h2>
          <p className="text-xs text-[var(--ink-muted)] mt-1">
            Professional certifications in UX leadership, AI fluency, human-computer interaction, and product strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:[grid-auto-flow:column] md:[grid-template-rows:repeat(5,auto)] gap-x-14 border-t border-dashed border-[var(--line)]">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-baseline justify-between gap-4 py-3.5 border-b border-dashed border-[var(--line)]"
            >
              <div className="flex items-baseline gap-2 min-w-0">
                <span className="text-[var(--ink-faint)] text-xs">•</span>
                <span className="font-medium text-xs sm:text-sm text-[var(--ink)] truncate">
                  {cert.title}
                </span>
              </div>
              <div className="inline-flex items-baseline gap-1.5 text-xs text-[var(--ink-muted)] shrink-0 font-mono">
                <span>{cert.institute}</span>
                <span>–</span>
                <span className="font-semibold text-[var(--ink)]">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="mb-16" id="awards">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
            <span className="w-6 h-[1px] bg-[var(--line-strong)]" />
            <span>Industry Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
            Awards &amp; Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="p-6 bg-[var(--surface-grey)] border border-dashed border-[var(--line)] rounded flex flex-col justify-between gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <AwardIcon className="w-5 h-5 text-amber-500 shrink-0" />
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[var(--ink)]">
                    {award.title}
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--canvas)] border border-dashed border-[var(--line)] text-[var(--ink)]">
                  {award.year}
                </span>
              </div>
              <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                {award.description}
              </p>
              <div className="text-[0.6875rem] font-mono text-[var(--ink-faint)]">
                Awarded by {award.org}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
