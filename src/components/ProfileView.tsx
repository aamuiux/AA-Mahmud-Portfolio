import React from 'react';

interface ProfileViewProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onNavigateHome, onOpenBooking }) => {
  return (
  <div id="profile-view" className="site-view-panel profile-view-panel is-hidden" aria-live="polite">

    {/*  Top Navigation & Breadcrumbs  */}
    <div className="showcase-breadcrumb-row">
      <button className="showcase-back-btn" id="profile-back-home-btn" type="button" aria-label="Return to AA Mahmud Home">
        <span aria-hidden="true">←</span>
        <span>Back to Home Overview</span>
      </button>
    </div>

    {/*  Profile Header & Hero Section  */}
    <section className="profile-header-wrap" aria-label="Executive Biography">
      <div className="eyebrow" style={{ marginTop: "1.5rem" }}>
        <span className="eyebrow-line" aria-hidden="true"></span>
        <span className="eyebrow-text">Lead UI/UX Designer · Systems &amp; Product Strategist</span>
      </div>

      <div className="profile-hero-grid">
        {/*  Left: Headline, Bio & Narrative  */}
        <div>
          <h1 className="profile-hero-title">AA Mahmud</h1>
          <p className="profile-hero-subtitle">
            12+ years designing high-margin clarity from deep-tech complexity.
          </p>

          <p className="profile-hero-bio">
            I help founders, startups, and growing companies turn complex problems and ambitious ideas into intuitive, meaningful digital experiences. From Fintech, SaaS platforms to mobile apps and enterprise systems, I bring together user needs, business goals, and product strategy to create solutions that are not only visually polished but genuinely useful. I bridge the gap between design thinking and real-world product impact.
          </p>

          {/*  Action Buttons  */}
          <div className="profile-hero-actions">
            <a href="https://calendly.com/aamsaikat-ux/20min" target="_blank" rel="noopener noreferrer" className="cta-btn solid-light book-call-trigger" title="Book a 20-min call on Calendly">
              <span>Book a 20-min call</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#experience" id="profile-scroll-exp-btn" className="cta-btn ghost-light">
              <span>My Resume</span>
              <span className="arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/*  Right: Portrait Plate with Verified Status  */}
        <div>
          <div className="profile-portrait-wrap ratio-box ratio-3-4">
            <img
              src="/assets/abdullah-al-mahmud.jpg"
              alt="Abdullah Al Mahmud — Lead UI/UX Designer"
              width="438"
              height="501"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="profile-verified-badge">
              <span className="badge-pulse" aria-hidden="true"></span>
              <span>Open to new roles &amp; projects · Remote-friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/*  Quantitative Impact Stats Bar  */}
      <div className="profile-stats-grid">
        <div className="profile-stat-box">
          <span className="profile-stat-number">12+</span>
          <span className="profile-stat-label">Years Experience</span>
        </div>
        <div className="profile-stat-box">
          <span className="profile-stat-number">500+</span>
          <span className="profile-stat-label">Connections</span>
        </div>
        <div className="profile-stat-box">
          <span className="profile-stat-number">13</span>
          <span className="profile-stat-label">Recommendations</span>
        </div>
        <div className="profile-stat-box">
          <span className="profile-stat-number">9+</span>
          <span className="profile-stat-label">Countries Reached</span>
        </div>
      </div>
    </section>

    {/*  Job Experience Section  */}
    <section className="profile-section-block" id="experience" aria-label="Professional Experience">
      <div className="profile-section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Career Record</span>
          </div>
          <h2 className="profile-section-title">Job Experience &amp; Leadership</h2>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", maxWidth: "42ch" }}>
          Track record of 12+ years in lead UI/UX design, systems governance, and quantifiable enterprise ROI.
        </p>
      </div>

      <div className="profile-timeline-list">

        {/*  Role 01: Astha IT (Present)  */}
        <article className="profile-timeline-item is-current">
          <div className="timeline-meta-col">
            <div className="timeline-active-tag">
              <span className="active-dot" aria-hidden="true"></span>
              <span>Current Position</span>
            </div>
            <span className="timeline-dates">April 2025 – Present</span>
            <p className="timeline-company"><strong>Astha IT</strong>Dhaka, BD · Full Time</p>
            <span className="timeline-tenure-badge">Lead / Team Lead</span>
          </div>
          <div>
            <h3 className="timeline-role-title">Lead UI UX Designer (Team Lead)</h3>
            <ul className="timeline-highlights">
              <li>Played a key role in <strong>AI-driven and data-driven decision</strong> to convert complex AI &amp; complex workflows: <strong>Whiz</strong> (ML demand forecasting and promotional planning for multi chain retail and manufacturing), <strong>Docomate.ai</strong> (LLM document intelligence), <strong>TalentX</strong> (agentic recruiting automation), and <strong>PromptVault</strong> (enterprise prompt management, in UAT with Citrin Cooperman).</li>
              <li>Designed <strong>Collablly SRM platforms</strong>, drop supply chain costs <strong>upto 20%</strong> and boost on-time deliveries <strong>30%</strong>.</li>
              <li>Contributed to <strong>Payra Port</strong> by designing operational dashboards and workflow systems.</li>
            </ul>
            <div className="timeline-tags-row">
              <span className="timeline-tag">AI-Driven UX</span>
              <span className="timeline-tag">Enterprise Platforms</span>
              <span className="timeline-tag">Payra Port Automation</span>
              <span className="timeline-tag">Workflow Systems</span>
              <span className="timeline-tag">Team Lead</span>
            </div>
          </div>
        </article>

        {/*  Role 02: SSL Wireless (Jan 2017 – April 2025)  */}
        <article className="profile-timeline-item">
          <div className="timeline-meta-col">
            <span className="timeline-dates">Jan 2017 – April 2025</span>
            <p className="timeline-company"><strong>SSL Wireless</strong>Dhaka, BD · Full Time</p>
            <span className="timeline-tenure-badge">8+ Years Tenure</span>
          </div>
          <div>
            <div className="career-progression-notice">
              <span className="progression-icon" aria-hidden="true">↗</span>
              <span>8+ Years Growth · Promoted 2× from UX Engineer to Management</span>
            </div>

            {/*  Subrole 1: UX Analyst Manager  */}
            <div className="timeline-subrole">
              <div className="timeline-subrole-header">
                <h3 className="timeline-role-title">UX Analyst Manager (Assistant Team Lead)</h3>
                <span className="timeline-subrole-dates">Jan 2022 – April 2025</span>
              </div>
              <ul className="timeline-highlights">
                <li>Managed &amp; mentored a team of <strong>5 UI/UX designers</strong>, providing guidance on best practices, UX audit, usability testing, and design methodologies.</li>
                <li>Defined UX strategy for <strong>SSLCOMMERZ</strong>, Bangladesh's No.1 payment gateway, ensuring alignment with business goals and user needs. Reduced drop rate from <strong>62.4% &rarr; 3.14%</strong>.</li>
                <li>Collaborated with cross-functional teams (PMs, Engineers, Business Leaders) to establish UX workflows and improve user engagement and business goals.</li>
              </ul>
            </div>

            {/*  Subrole 2: Senior UX Engineer  */}
            <div className="timeline-subrole">
              <div className="timeline-subrole-header">
                <h3 className="timeline-role-title">Senior UX Engineer</h3>
                <span className="timeline-subrole-dates">Jan 2021 – Dec 2021</span>
              </div>
              <ul className="timeline-highlights">
                <li>Led UX efforts for <strong>fintech and SaaS products</strong>, focusing on research-driven UI decisions.</li>
                <li>Optimized usability and user flows for SSLCOMMERZ payment systems and revamped SSLCOMMERZ merchant onboarding systems.</li>
                <li>Designed <strong>&ldquo;eBuddy&rdquo; HRM application</strong> supporting over <strong>350+ office employees</strong>.</li>
                <li>Led the creation of a scalable design system, <strong>increasing efficiency by 30%</strong> and ensuring UI consistency across products.</li>
              </ul>
            </div>

            {/*  Subrole 3: UX Engineer  */}
            <div className="timeline-subrole">
              <div className="timeline-subrole-header">
                <h3 className="timeline-role-title">UX Engineer</h3>
                <span className="timeline-subrole-dates">Jan 2017 – Dec 2020</span>
              </div>
              <ul className="timeline-highlights">
                <li>Designed <strong>&lsquo;Fastpay&rsquo;</strong> (Kurdistan's No.1 MFS app), leading to <strong>500K+ users</strong> and around <strong>63% increase in onboarding completion rates</strong> (Kurdistan's, Jul 2019 – Sep 2019).</li>
                <li>Conducted UX Audits following <strong>Usability &amp; WCAG accessibility guidelines</strong>.</li>
                <li>Revamped an <strong>iSMS portal</strong>, resulting in a <strong>30% increase in user engagement</strong>.</li>
              </ul>
            </div>

            <div className="timeline-tags-row">
              <span className="timeline-tag">SSLCOMMERZ</span>
              <span className="timeline-tag">Payment Gateway</span>
              <span className="timeline-tag">Fintech &amp; SaaS</span>
              <span className="timeline-tag">UX Strategy</span>
              <span className="timeline-tag">eBuddy HRM</span>
              <span className="timeline-tag">Design Systems</span>
              <span className="timeline-tag">FastPay MFS</span>
              <span className="timeline-tag">Mentorship</span>
            </div>
          </div>
        </article>

        {/*  Role 03: Next Generation Communication  */}
        <article className="profile-timeline-item">
          <div className="timeline-meta-col">
            <span className="timeline-dates">May 2019 – Sep 2019</span>
            <p className="timeline-company"><strong>Next Generation Communication</strong>Erbil, Iraq · (Business Visit – 5 Months)</p>
            <span className="timeline-tenure-badge">Fintech Engagement</span>
          </div>
          <div>
            <h3 className="timeline-role-title">UX Engineer</h3>
            <ul className="timeline-highlights">
              <li>Designed key UX flows for <strong>&lsquo;FastPay&rsquo;</strong>, Iraq's leading #1 mobile wallet.</li>
              <li>Worked closely on-site with regional stakeholders on fintech product experiences.</li>
              <li>Contributed to improving usability and user retention in high-frequency transaction journeys.</li>
            </ul>
            <div className="timeline-tags-row">
              <span className="timeline-tag">FastPay Mobile Wallet</span>
              <span className="timeline-tag">Fintech UX</span>
              <span className="timeline-tag">High-Frequency Transactions</span>
              <span className="timeline-tag">Erbil, Iraq</span>
            </div>
          </div>
        </article>

        {/*  Role 04: Oxford Immune Algorithmics  */}
        <article className="profile-timeline-item">
          <div className="timeline-meta-col">
            <span className="timeline-dates">Jan 2021 – Mar 2022</span>
            <p className="timeline-company"><strong>Oxford Immune Algorithmics</strong>United Kingdom · Remote · Part Time</p>
            <span className="timeline-tenure-badge">Part-Time · HealthTech</span>
          </div>
          <div>
            <h3 className="timeline-role-title">UI/UX Designer (Part-Time / Contract)</h3>
            <ul className="timeline-highlights">
              <li>Redesigned healthcare app <strong>&ldquo;Algocyte&rdquo;</strong>, which directly contributed to securing their <strong>2nd round of funding</strong>.</li>
              <li>Conducted rigorous UX Audits adhering to <strong>Usability, GDPR consent, and WCAG accessibility guidelines</strong>.</li>
            </ul>
            <div className="timeline-tags-row">
              <span className="timeline-tag">Part-Time / Contract</span>
              <span className="timeline-tag">Algocyte Healthcare</span>
              <span className="timeline-tag">HealthTech AI</span>
              <span className="timeline-tag">UX Audit</span>
              <span className="timeline-tag">GDPR Consent</span>
              <span className="timeline-tag">WCAG Accessibility</span>
              <span className="timeline-tag">Remote UK</span>
            </div>
          </div>
        </article>

        {/*  Role 05: MCC Ltd.  */}
        <article className="profile-timeline-item">
          <div className="timeline-meta-col">
            <span className="timeline-dates">Jan 2015 – Dec 2016</span>
            <p className="timeline-company"><strong>MCC Ltd.</strong>Dhaka, BD · Full Time</p>
            <span className="timeline-tenure-badge">Software &amp; UX</span>
          </div>
          <div>
            <h3 className="timeline-role-title">Software Designer and Developer</h3>
            <ul className="timeline-highlights">
              <li>Designed <strong>&lsquo;Ghurbo&rsquo;</strong>, a trip-booking platform, significantly improving travel booking efficiency.</li>
              <li>Built SaaS-based <strong>HRM solutions</strong> actively used by <strong>140+ office employees</strong>.</li>
            </ul>
            <div className="timeline-tags-row">
              <span className="timeline-tag">Ghurbo Travel Platform</span>
              <span className="timeline-tag">SaaS HRM</span>
              <span className="timeline-tag">Software Design &amp; Dev</span>
              <span className="timeline-tag">Dhaka, BD</span>
            </div>
          </div>
        </article>

        {/*  Role 06: RMS IT.  */}
        <article className="profile-timeline-item">
          <div className="timeline-meta-col">
            <span className="timeline-dates">Oct 2014 – Dec 2015</span>
            <p className="timeline-company"><strong>RMS IT.</strong>Dhaka, BD · Full Time</p>
            <span className="timeline-tenure-badge">Web &amp; Theme Dev</span>
          </div>
          <div>
            <h3 className="timeline-role-title">Web Developer and Designer</h3>
            <ul className="timeline-highlights">
              <li>Designed <strong>Themeforest wordpress themes and templates</strong>, increase sells and reduce support.</li>
              <li>Develop responsive and device friendly web design.</li>
            </ul>
            <div className="timeline-tags-row">
              <span className="timeline-tag">Themeforest</span>
              <span className="timeline-tag">WordPress Themes</span>
              <span className="timeline-tag">Responsive Web Design</span>
              <span className="timeline-tag">UI Design &amp; Development</span>
              <span className="timeline-tag">Dhaka, BD</span>
            </div>
          </div>
        </article>

      </div>
    </section>

    {/*  Skills Section  */}
    <section className="profile-section-block" id="skills" aria-label="Technical and Strategic Skills">
      <div className="profile-section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Capabilities Matrix</span>
          </div>
          <h2 className="profile-section-title">Core Skills &amp; Domain Expertise</h2>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", maxWidth: "42ch" }}>
          Holistic mastery spanning algorithmic AI interfaces, production frontend code, and strategic business metrics.
        </p>
      </div>

      <div className="profile-skills-grid">

        {/*  Category 1  */}
        <div className="skills-category-card">
          <h3 className="skills-cat-title">01 · AI &amp; Cognitive Interface Design</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: "1.55" }}>
            Architecting cognitive scaffolding for probabilistic models, taming hallucination, and engineering intuitive latency recovery.
          </p>
          <div className="skills-pill-cloud">
            <span className="skill-badge">AI-Assisted Design</span>
            <span className="skill-badge">Generative AI Tools</span>
            <span className="skill-badge">AI-Powered UI/UX Workflows</span>
            <span className="skill-badge">AI-Driven Research &amp; Ideation</span>
            <span className="skill-badge">Rapid Prototyping</span>
            <span className="skill-badge">Design Automation</span>
            <span className="skill-badge">AI Output Evaluation</span>
            <span className="skill-badge">Human-Centered AI Design</span>
          </div>
        </div>

        {/*  Category 2  */}
        <div className="skills-category-card">
          <h3 className="skills-cat-title">02 · UI/UX Design Systems &amp; Execution</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: "1.55" }}>
            Zero-drift design-to-code execution across modern design systems, token architectures, and responsive micro-interactions.
          </p>
          <div className="skills-pill-cloud">
            <span className="skill-badge">Figma Variables &amp; Tokens Studio</span>
            <span className="skill-badge">Design Tokens (W3C Spec)</span>
            <span className="skill-badge">Interactive Design Systems</span>
            <span className="skill-badge">Accessibility (WCAG AA)</span>
            <span className="skill-badge">Component Architecture</span>
            <span className="skill-badge">Micro-Interactions &amp; Motion</span>
            <span className="skill-badge">Dev Handoff Automation</span>
            <span className="skill-badge">Tailwind Design Tokens</span>
            <span className="skill-badge">State Machines &amp; Logic Flows</span>
          </div>
        </div>

        {/*  Category 3  */}
        <div className="skills-category-card">
          <h3 className="skills-cat-title">03 · Strategy, ROI &amp; Quantitative UX</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: "1.55" }}>
            Connecting interface architecture directly to ARR growth, user retention curves, and developer velocity.
          </p>
          <div className="skills-pill-cloud">
            <span className="skill-badge">Cognitive Friction Auditing</span>
            <span className="skill-badge">Retention &amp; ARR Optimization</span>
            <span className="skill-badge">High-Density Telemetry</span>
            <span className="skill-badge">Developer Handoff Automation</span>
            <span className="skill-badge">Design Guild Governance</span>
            <span className="skill-badge">WCAG 2.1 AA Accessibility</span>
            <span className="skill-badge">Performance Auditing (Core Web Vitals)</span>
          </div>
        </div>

      </div>
    </section>

    {/*  Certifications & Education Section  */}
    <section className="profile-section-block" id="certifications" aria-label="Certifications and Credentials">
      <div className="profile-section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Verified Credentials</span>
          </div>
          <h2 className="profile-section-title">Certifications &amp; Masteries</h2>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", maxWidth: "42ch" }}>
          Professional certifications in UX leadership, AI fluency, human-computer interaction, and product strategy.
        </p>
      </div>

      <ul className="cert-simple-list">

        {/*  2026  */}
        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">AI Fluency for creative work</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Claude Academy</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2026</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">AI Fluency for builders</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Claude Academy</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2026</span>
          </div>
        </li>

        {/*  2025  */}
        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">UX Design Leadership</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Uxcel</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2025</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">AI in UX/UI Design</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Uxcel</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2025</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">Product led Certification</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Uxcel</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2025</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">Agile Workshop</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Astha IT</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2025</span>
          </div>
        </li>

        {/*  2024  */}
        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">Information Architecture</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Uxcel</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2024</span>
          </div>
        </li>

        {/*  2023  */}
        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">Human Computer Interaction</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">IxDF</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2023</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">User Experience Beginner’s Guide</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">Uxcel</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2023</span>
          </div>
        </li>

        <li className="cert-simple-item">
          <div className="cert-info">
            <span className="cert-bullet" aria-hidden="true">•</span>
            <span className="cert-title">Web Design for Usability</span>
          </div>
          <div className="cert-meta">
            <span className="cert-institute">IxDF</span>
            <span className="cert-sep" aria-hidden="true">–</span>
            <span className="cert-year">2023</span>
          </div>
        </li>

      </ul>
    </section>

    {/*  Awards & Achievements Section  */}
    <section className="profile-section-block" id="awards" aria-label="Awards and Achievements">
      <div className="profile-section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Industry Recognition</span>
          </div>
          <h2 className="profile-section-title">Awards &amp; Achievements</h2>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", maxWidth: "42ch" }}>
          Recognitions for exceptional UX leadership, mentoring, innovation, and community contributions.
        </p>
      </div>

      <ul className="awards-simple-list">

        <li className="award-simple-item">
          <div className="award-top-row">
            <div className="award-title-wrap">
              <span className="award-bullet" aria-hidden="true">•</span>
              <h3 className="award-title">&ldquo;Standout Performer&rdquo;</h3>
            </div>
            <div className="award-meta">
              <span className="award-org">Astha IT</span>
              <span className="award-sep" aria-hidden="true">–</span>
              <span className="award-year">2026</span>
            </div>
          </div>
          <p className="award-desc">
            Awarded with the title of &ldquo;Standout Performer&rdquo; at Astha IT in 2026, in recognition of exceptional skills, outstanding clients success rate and team collaboration.
          </p>
        </li>

        <li className="award-simple-item">
          <div className="award-top-row">
            <div className="award-title-wrap">
              <span className="award-bullet" aria-hidden="true">•</span>
              <h3 className="award-title">&ldquo;Mentoring Hero&rdquo;</h3>
            </div>
            <div className="award-meta">
              <span className="award-org">SSL Wireless</span>
              <span className="award-sep" aria-hidden="true">–</span>
              <span className="award-year">2022</span>
            </div>
          </div>
          <p className="award-desc">
            Awarded &ldquo;Mentoring Hero&rdquo; at SSL Wireless in 2022, for exceptional mentoring and supportive to other teammates.
          </p>
        </li>

        <li className="award-simple-item">
          <div className="award-top-row">
            <div className="award-title-wrap">
              <span className="award-bullet" aria-hidden="true">•</span>
              <h3 className="award-title">&ldquo;Glowing Star Performer&rdquo;</h3>
            </div>
            <div className="award-meta">
              <span className="award-org">SSL Wireless</span>
              <span className="award-sep" aria-hidden="true">–</span>
              <span className="award-year">2019</span>
            </div>
          </div>
          <p className="award-desc">
            Recognized employee of the year for outstanding performance and Innovation at SSL Wireless in 2019.
          </p>
        </li>

        <li className="award-simple-item">
          <div className="award-top-row">
            <div className="award-title-wrap">
              <span className="award-bullet" aria-hidden="true">•</span>
              <h3 className="award-title">&ldquo;Google Developer Group Speaker&rdquo;</h3>
            </div>
            <div className="award-meta">
              <span className="award-org">Google Developer Group</span>
              <span className="award-sep" aria-hidden="true">–</span>
              <span className="award-year">Speaker &amp; Facilitator</span>
            </div>
          </div>
          <p className="award-desc">
            Conducted UX workshops based on UX &amp; Design Thinking.
          </p>
        </li>

      </ul>
    </section>

    {/*  Profile CTA & Socials Block  */}
    <div className="profile-cta-panel">
      <div className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true"></span>
        <span className="eyebrow-text">Initiate Engagement</span>
      </div>

      <h2 className="profile-cta-title">
        Ready to engineer high-margin clarity for your product?
      </h2>

      <p className="profile-cta-desc">
        I take on 2 to 3 selective engagements per cycle: as an embedded Lead UI/UX Designer directing core product design or as a Strategic Advisor conducting high-intensity product sprints.
      </p>

      <div className="profile-cta-btns">
        <a href="mailto:aam.uiux@gmail.com?subject=Strategic%20Briefing%20Inquiry" className="cta-btn solid-light">
          Book Strategic Briefing <span className="arrow" aria-hidden="true">→</span>
        </a>
        <button type="button" className="cta-btn ghost-light" id="profile-return-home-btn">
          Return to Portfolio Overview
        </button>
      </div>

      {/*  Social & Connect Links  */}
      <div className="profile-socials-row">
        <a href="https://www.linkedin.com/in/aamuiux/" target="_blank" rel="noreferrer noopener" className="profile-social-link">LinkedIn ↗</a>
        <a href="https://github.com/aamuiux/" target="_blank" rel="noreferrer noopener" className="profile-social-link">GitHub ↗</a>
        <a href="mailto:aam.uiux@gmail.com" className="profile-social-link">aam.uiux@gmail.com</a>
      </div>
    </div>
  </div>
  );
};
