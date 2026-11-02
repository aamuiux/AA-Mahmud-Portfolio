import React, { useState, useEffect } from 'react';
import type { CategoryKey, BriefData, CategoryMetaItem } from '../types';

interface ShowcaseViewProps {
  currentCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  onNavigateHome: () => void;
  onOpenBrief: (brief: BriefData) => void;
}

export const categoryMeta: Record<string, CategoryMetaItem> = {
  'all': {
    title: 'All Architecture Archetypes',
    kicker: 'Showcase Feed · Flagship Works',
    count: '26 Verified Projects',
    desc: 'Curated collection of 26 enterprise SaaS platforms, high-throughput cockpits, fintech banking suites, e-commerce stores, native mobile apps, and health care platforms engineered for ROI.'
  },
  'saas': {
    title: 'SaaS Platforms',
    kicker: 'Archetype 01 · B2B Platforms',
    count: '7 Flagship Platforms',
    desc: 'Enterprise multi-tenant platforms, AI knowledge workspaces, intelligent document AI, hybrid workplace hubs, CPG trade portals, and automated process orchestration suites designed for operational velocity.'
  },
  'dashboard': {
    title: 'Dashboard',
    kicker: 'Archetype 02 · Observability & Analytics',
    count: '3 Executive Cockpits',
    desc: 'BAT Peachtree enterprise finance distribution, eBuddy HRM supervisor task performance, and AI Mail autonomous inbox intelligence cockpits.'
  },
  'fintech': {
    title: 'Fintech, Banking & MFS',
    kicker: 'Archetype 03 · Financial Infrastructure & Payments',
    count: '6 Verified Platforms',
    desc: 'National payment gateway & checkout engines, merchant KYC onboarding flows, state mobile banking apps, NRB real-time account opening & eKYC, cross-border digital wallets, and corporate cash management suites.'
  },
  'ecommerce': {
    title: 'E-Commerce',
    kicker: 'Archetype 04 · High-Conversion Omnichannel Stores',
    count: '2 Flagship Stores',
    desc: 'Omnichannel retail flagships, consumer electronics marketplaces, fashion lifestyle hubs, and seamless checkout funnels engineered for high-volume GMV.'
  },
  'app-design': {
    title: 'Mobile App Design',
    kicker: 'Archetype 05 · Native iOS & Android Systems',
    count: '6 Mobile Products',
    desc: 'High-scale digital wallets, cultural social networks, eBuddy workforce apps, mobile banking portals, clean-energy tracking apps, and SSLCOMMERZ merchant mobile apps.'
  },
  'healthcare': {
    title: 'Health Care',
    kicker: 'Archetype 06 · Clinical AI & Patient Portals',
    count: '2 Verified Platforms',
    desc: 'Precision AI immune telemetry, large-scale food fortification portals, remote patient monitoring systems, and clinical healthcare companions built to HIPAA and WCAG standards.'
  }
};

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({
  currentCategory,
  onSelectCategory,
  onNavigateHome,
  onOpenBrief,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const meta = categoryMeta[currentCategory] || categoryMeta['all'];

  useEffect(() => {
    // Filter cards in feed
    const items = document.querySelectorAll('.showcase-stacked-item');
    let visible = 0;
    const q = searchQuery.trim().toLowerCase();

    items.forEach((it) => {
      const cat = it.getAttribute('data-category');
      const title = (it.getAttribute('data-title') || '').toLowerCase();
      const tech = (it.getAttribute('data-tech') || '').toLowerCase();
      const roi = (it.getAttribute('data-roi') || '').toLowerCase();
      const catLabel = (it.getAttribute('data-cat-label') || '').toLowerCase();

      const matchesCat = currentCategory === 'all' || cat === currentCategory;
      const matchesSearch = !q || title.includes(q) || tech.includes(q) || roi.includes(q) || catLabel.includes(q);

      const el = it as HTMLElement;
      if (matchesCat && matchesSearch) {
        el.style.display = 'block';
        el.classList.remove('is-hidden');
        visible++;
      } else {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      }
    });

    const countEl = document.getElementById('showcase-category-count');
    if (countEl) {
      countEl.textContent = q ? `${visible} matching "${q}"` : meta.count;
    }

    const emptyEl = document.getElementById('showcase-empty-state');
    if (emptyEl) {
      emptyEl.style.display = visible === 0 ? 'block' : 'none';
    }
  }, [currentCategory, searchQuery, meta]);

  // Handle click on any quick-brief-btn
  const handleBriefClick = (e: React.MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('.quick-brief-btn');
    if (!btn) return;
    const article = btn.closest('.showcase-stacked-item');
    if (!article) return;

    onOpenBrief({
      title: article.getAttribute('data-title') || '',
      client: article.getAttribute('data-client') || '',
      year: article.getAttribute('data-year') || '',
      roi: article.getAttribute('data-roi') || '',
      catLabel: article.getAttribute('data-cat-label') || '',
      challenge: article.getAttribute('data-challenge') || '',
      solution: article.getAttribute('data-solution') || '',
      tech: article.getAttribute('data-tech') || '',
    });
  };

  return (
    <div onClick={handleBriefClick}>
  <div id="showcase-view" className="site-view-panel showcase-view-panel is-hidden" aria-live="polite">
    
    {/*  Showcase View Header  */}
    <div className="showcase-view-header">
      <div className="showcase-breadcrumb-row">
        <button className="showcase-back-btn" id="showcase-back-home-btn" type="button" aria-label="Return to AA Mahmud Home">
          <span aria-hidden="true">←</span>
          <span>Back to Home Overview</span>
        </button>
      </div>

      <div className="eyebrow" style={{ marginTop: "1rem" }}>
        <span className="eyebrow-line" aria-hidden="true"></span>
        <span className="eyebrow-text" id="showcase-category-kicker">Showcase Archetype · Systems</span>
      </div>

      <h1 className="showcase-view-title" id="showcase-category-title">SaaS Platforms</h1>
      
      <p className="showcase-view-desc" id="showcase-category-desc">
        Enterprise multi-tenant web applications, generative AI video workflows, and visual node-graph orchestration canvases designed for high-retention velocity.
      </p>
    </div>

    {/*  Full-Width Stacked Feed: one is below another  */}
    <div className="showcase-stacked-feed" id="showcase-feed">

      {/*  01: Collablly Supply Chain & Supplier Collaboration Platform  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Collablly Supply Chain Collaboration" data-client="Collablly Technologies" data-year="2025" data-roi="+3.8x PO Cycle Velocity" data-cat-label="SaaS Platform · Supplier &amp; Operations Collaboration" data-challenge="Manufacturing and distribution teams suffered from fragmented supplier email threads, uncoordinated purchase orders, and high manual follow-up overhead." data-solution="Architected a unified supplier collaboration portal featuring real-time purchase order lifecycle tracking, automated approval multi-tier workflows, and inventory delivery risk telemetry." data-tech="React · TypeScript · Tailwind CSS · Workflow Engine · REST &amp; WebSockets">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/collablly_2baa5c21.jpg" alt="Collablly Supply Chain Collaboration Platform — Supplier PO Management" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Collablly Supply Chain &amp; Supplier Portal</h2>
              <p className="work-medium">Enterprise Manufacturing &amp; Distribution Operations Platform</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+3.8x PO Velocity</span>
              <span className="work-roi-pill metric-success-pill">-45% Supplier Delays</span>
            </div>
            <div className="showcase-actions-group">
              <a href="https://www.figma.com/proto/RJNGvW0VbxsTNiVaULwOh7/Collably-SRM-Revamp?page-id=29%3A55647&node-id=29-55649&viewport=349%2C265%2C0.34&t=VpLRVkoMzwbKPsxq-1&scaling=scale-down-width&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-case-study" aria-label="Open Figma Case Study for Collablly Supply Chain Collaboration">
                <span>Case Study</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <a href="https://www.figma.com/proto/RJNGvW0VbxsTNiVaULwOh7/Collably-SRM-Revamp?page-id=29%3A55647&node-id=29-55649&viewport=349%2C265%2C0.34&t=VpLRVkoMzwbKPsxq-1&scaling=scale-down-width&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Collablly Supply Chain Collaboration">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Collablly Supply Chain Collaboration">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Collablly Supply Chain Collaboration">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                <a href="https://collablly.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit live website for Collablly Supply Chain Collaboration">
                  <span>Live Site</span>
                  <span className="overflow-tag">Visit ↗</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  02: Docomate AI Intelligent Document Processing  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Docomate AI Document Processing" data-client="Docomate Intelligence" data-year="2026" data-roi="99.4% Extraction Precision" data-cat-label="SaaS Platform · Intelligent Document Processing &amp; OCR" data-challenge="Knowledge workers wasted thousands of monthly hours manually transcribing invoices, bill-of-ladings, and complex multi-page unstructured PDF files into internal ERP systems." data-solution="Engineered a dual-pane intelligent document processing studio with side-by-side OCR visualization, confidence heatmaps, schema-guided validation, and instant JSON/CSV export." data-tech="React · TypeScript · Next.js · Canvas OCR Overlay · Web Workers · REST API">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/docomate_3bee0e29.jpg" alt="Docomate AI Intelligent Document Processing — OCR & Schema Extraction" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Docomate AI Intelligent Document Processing</h2>
              <p className="work-medium">Next-Gen OCR, Automated Schema Extraction &amp; Enterprise IDP</p>
            </div>
            <span className="showcase-item-year">2026</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">99.4% Precision</span>
              <span className="work-roi-pill metric-success-pill">-82% Manual Entry Time</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Docomate AI Document Processing">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Docomate AI Document Processing">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Docomate AI Document Processing">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Docomate AI Document Processing">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                <a href="https://docomate.ai/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit live website for Docomate AI Document Processing">
                  <span>Live Site</span>
                  <span className="overflow-tag">Visit ↗</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  03: Othership Hybrid Workplace & Desk Booking Platform  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Othership Hybrid Workplace Platform" data-client="Othership Workspaces" data-year="2022" data-roi="+92% Space Utilization" data-cat-label="SaaS Platform · Workplace &amp; Desk Booking" data-challenge="Enterprises transitioning to flexible hybrid work struggled with empty desks, friction booking meeting rooms, and disconnected team scheduling." data-solution="Designed an interactive multi-floor digital twin floorplan with live presence indicators, 1-click hot-desk reservations, and calendar synchronization across 8,000+ workplace tools." data-tech="TypeScript · React · SVG Interactive Floorplan · Tailwind CSS · Realtime WebSockets">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/othership_dc1bacc6.jpg" alt="Othership Hybrid Workplace & Desk Booking Platform" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Othership Hybrid Workplace &amp; Desk Booking</h2>
              <p className="work-medium">Interactive Floorplan Digital Twin &amp; Team Scheduling</p>
            </div>
            <span className="showcase-item-year">2022</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+92% Space Utilization</span>
              <span className="work-roi-pill metric-success-pill">1-Click Desk Booking</span>
            </div>
            <div className="showcase-actions-group">
              <a href="https://www.figma.com/proto/1BFEvwIl892gzBAU1Tc4wm/Resume-and-Presentation?page-id=834%3A13336&node-id=834-48646&viewport=340%2C356%2C0.38&t=hVYbHMDEUp3cpLrL-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-case-study" aria-label="Open Figma Case Study for Othership Hybrid Workplace Platform">
                <span>Case Study</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <a href="https://www.figma.com/proto/1BFEvwIl892gzBAU1Tc4wm/Resume-and-Presentation?page-id=834%3A13336&node-id=834-48646&viewport=340%2C356%2C0.38&t=hVYbHMDEUp3cpLrL-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Othership Hybrid Workplace Platform">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Othership Hybrid Workplace Platform">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Othership Hybrid Workplace Platform">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                <a href="https://othership.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit live website for Othership Hybrid Workplace Platform">
                  <span>Live Site</span>
                  <span className="overflow-tag">Visit ↗</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  04: Caboodle Services CPG Sales & Trade Promotion Platform  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Caboodle Services CPG Sales Platform" data-client="Caboodle Services" data-year="2025" data-roi="+28% Trade Spend ROI" data-cat-label="SaaS Platform · Natural Product CPG &amp; Trade Management" data-challenge="Natural CPG food & beverage sales teams dealt with fragmented distributor spreadsheets (UNFI, KeHE), messy UPC/SKU retail code mapping, and opaque trade promotion ROI." data-solution="Constructed a unified trade promotion management SaaS uniting distributor sales tracking, retail store performance heatmaps, and automated retailer SKU spec dictionaries." data-tech="React · TypeScript · D3.js · Data Tables · Financial Calculation Engine · Tailwind CSS">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/caboodle_6b7b81b7.jpg" alt="Caboodle Services CPG Sales Platform — Distributor Sales & Trade Promotion" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Caboodle Services CPG Sales &amp; Trade Hub</h2>
              <p className="work-medium">Distributor Performance, Trade Spend &amp; Retail Code Intelligence</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+28% Trade Spend ROI</span>
              <span className="work-roi-pill metric-success-pill">Automated SKU Mapping</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Caboodle Services CPG Sales Platform">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Caboodle Services CPG Sales Platform">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Caboodle Services CPG Sales Platform">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Caboodle Services CPG Sales Platform">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                <a href="https://caboodleservices.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit live website for Caboodle Services CPG Sales Platform">
                  <span>Live Site</span>
                  <span className="overflow-tag">Visit ↗</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  05: Exlo Testto Process Automation & QA Platform  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Exlo Testto Automation Platform" data-client="Exlo ITS" data-year="2025" data-roi="98.1% Automation Pass Rate" data-cat-label="SaaS Platform · AI Process Automation &amp; QA" data-challenge="Enterprise software teams struggled with manual test regression bottlenecks, complex multi-system workflow breaks, and opaque Python test orchestration." data-solution="Architected the Testto Cloud SaaS suite featuring codeless automated test execution, AI-driven process orchestration flow graphs, and real-time regression telemetry." data-tech="React · TypeScript · Python Orchestrator · WebGL Flow Graphs · Tailwind CSS · Docker &amp; Cloud">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/exlo_86240282.jpg" alt="Exlo Testto Automation Platform — AI Process Orchestration & QA" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Exlo Testto AI Process &amp; QA Studio</h2>
              <p className="work-medium">Enterprise Process Automation &amp; Continuous Testing Suite</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">98.1% Pass Rate</span>
              <span className="work-roi-pill metric-success-pill">Codeless QA Flows</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Exlo Testto Automation Platform">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Exlo Testto Automation Platform">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Exlo Testto Automation Platform">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Exlo Testto Automation Platform">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                <a href="https://exelo.pl/en/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit live website for Exlo Testto Automation Platform">
                  <span>Live Site</span>
                  <span className="overflow-tag">Visit ↗</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  06: Whiz Intelligent AI Advanced Insight Graph Technology (SaaS Platform)  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="Whiz Intelligent AI Advanced Insight Graph Technology" data-client="Whiz AI" data-year="2025" data-roi="+3.2x Workflow Velocity" data-cat-label="SaaS Platform · AI Workspace &amp; Knowledge Graph" data-challenge="Cross-functional enterprise teams struggled with disjointed generative AI tools, prompt chaos, and opaque knowledge silos across complex data graphs." data-solution="Architected an advanced insight graph technology and intelligent AI workspace uniting interactive node graph exploration, prompt-to-workflow automation, and multi-model intelligence." data-tech="React · TypeScript · WebSockets · Tailwind CSS · AI Knowledge Graph · WebGL · Node.js">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/Whiz_5c14ef85.jpg" alt="Whiz Intelligent AI Advanced Insight Graph Technology — Knowledge Graph & Canvas" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Whiz Intelligent AI Advanced Insight Graph Technology</h2>
              <p className="work-medium">Advanced Insight Graph &amp; Collaborative AI Intelligence Platform</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+3.2x Velocity</span>
              <span className="work-roi-pill metric-success-pill">Insight Graph Canvas</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Whiz Intelligent AI Advanced Insight Graph Technology">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Whiz Intelligent AI Advanced Insight Graph Technology">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Whiz Intelligent AI Advanced Insight Graph Technology">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Whiz Intelligent AI Advanced Insight Graph Technology">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://letswhiz.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Whiz Platform">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  07: TalentX Enterprise Recruitment & HR Suite (SaaS Platform)  */}
      <article className="showcase-stacked-item work-item" data-category="saas" data-title="TalentX Enterprise Recruitment Suite" data-client="TalentX" data-year="2026" data-roi="62% Faster Time-to-Hire" data-cat-label="SaaS Platform · Enterprise Recruitment &amp; ATS" data-challenge="Recruiting teams and hiring managers were overwhelmed by candidate volume, opaque interview scoring, and delayed multi-stakeholder hiring decisions." data-solution="Architected an intuitive enterprise ATS and talent pipeline platform featuring automated candidate scoring, visual stage progression boards, and unified interviewer feedback rubrics." data-tech="React · TypeScript · Tailwind CSS · Enterprise ATS Pipeline · Real-Time Collaboration · Node.js">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/TalentX_53c9fde6.jpg" alt="TalentX Enterprise Recruitment Suite — Pipeline & Candidate Scoring" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">TalentX Enterprise Recruitment Suite</h2>
              <p className="work-medium">Next-Generation Talent Acquisition, Pipeline Tracking &amp; Interview Intelligence</p>
            </div>
            <span className="showcase-item-year">2026</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">62% Faster Hiring</span>
              <span className="work-roi-pill metric-success-pill">Automated Scoring</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for TalentX Enterprise Recruitment Suite">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for TalentX Enterprise Recruitment Suite">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for TalentX Enterprise Recruitment Suite">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for TalentX Enterprise Recruitment Suite">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  eBuddy Enterprise HRM & Task Performance Cockpit (Dashboard)  */}
      <article className="showcase-stacked-item work-item" data-category="dashboard" data-title="eBuddy Enterprise HRM &amp; Task Cockpit" data-client="SSL Wireless" data-year="2023" data-roi="350+ Office Workforce" data-cat-label="Dashboard · Enterprise HRM &amp; Workforce Performance" data-challenge="Supervisors and operations leadership managing 350+ employees faced fragmented sprint milestone reporting, delayed task review handoffs, and disjointed biometric punch-in / leave approval workflows." data-solution="Architected the comprehensive eBuddy Supervisor Cockpit uniting daily task statuses (WIP, Due, Review), sprint milestone tracking, real-time biometric attendance (Punch In/Out), and granular departmental leave telemetry." data-tech="React · TypeScript · Tailwind CSS · Biometric Auth API · Real-Time Task State Machines · Enterprise HRM">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/02.1_Supervisor_4a6ac342.jpg" alt="eBuddy Enterprise HRM &amp; Task Performance Dashboard — SSL Wireless" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">eBuddy Enterprise HRM &amp; Task Cockpit</h2>
              <p className="work-medium">Milestone Reviews, Biometric Attendance, Task Velocity &amp; Team Performance Telemetry</p>
            </div>
            <span className="showcase-item-year">2023</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">350+ Employees</span>
              <span className="work-roi-pill metric-success-pill">Biometric Punch-In</span>
              <span className="work-roi-pill">Task Sprint Reviews</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for eBuddy Enterprise HRM &amp; Task Cockpit">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for eBuddy Enterprise HRM &amp; Task Cockpit">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for eBuddy Enterprise HRM &amp; Task Cockpit">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for eBuddy Enterprise HRM &amp; Task Cockpit">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://sslwireless.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit SSL Wireless Corporate Portal">
                    <span>Client Portal</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  AI Mail Autonomous Inbox & Telemetry Cockpit (Dashboard)  */}
      <article className="showcase-stacked-item work-item" data-category="dashboard" data-title="AI Mail Autonomous Inbox &amp; Telemetry Cockpit" data-client="Catalog / SSL Wireless" data-year="2024" data-roi="79% AI Effectiveness" data-cat-label="Dashboard · AI Autonomous Triage &amp; Response Telemetry" data-challenge="Enterprise knowledge workers and client service leads suffered from email inbox paralysis, high unanswered response backlogs, and lack of visibility into autonomous AI assistant drafting velocity." data-solution="Engineered an executive email intelligence dashboard providing real-time response volume distribution (75% AI vs 15% Human), priority follow-up triage queues, sub-12m average response times, and weekly email workload analytics." data-tech="React · TypeScript · D3.js Charts · AI Triage Engine · WebSocket · Tailwind CSS">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/ai-mail_875a0eab.jpg" alt="AI Mail Autonomous Inbox &amp; Response Telemetry Dashboard" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">AI Mail Autonomous Inbox &amp; Telemetry Cockpit</h2>
              <p className="work-medium">Autonomous Email Triage, 79% AI Effectiveness &amp; Real-Time Response Velocity Dashboard</p>
            </div>
            <span className="showcase-item-year">2024</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">79% AI Effectiveness</span>
              <span className="work-roi-pill metric-success-pill">12m 3s Response</span>
              <span className="work-roi-pill">75% AI Volume</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for AI Mail Autonomous Inbox &amp; Telemetry Cockpit">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for AI Mail Autonomous Inbox &amp; Telemetry Cockpit">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for AI Mail Autonomous Inbox &amp; Telemetry Cockpit">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for AI Mail Autonomous Inbox &amp; Telemetry Cockpit">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  BAT Peachtree Enterprise Finance & Field Operations Cockpit (Dashboard)  */}
      <article className="showcase-stacked-item work-item" data-category="dashboard" data-title="BAT Peachtree Finance &amp; Operations Cockpit" data-client="British American Tobacco (BAT)" data-year="2023" data-roi="৳73.8 Cr. Monthly Velocity" data-cat-label="Dashboard · Enterprise Finance &amp; Field Operations" data-challenge="British American Tobacco (BAT) leadership required unified real-time visibility across nationwide field distribution, brand-tier sales margins, daily agent commissions, and multi-district logistics expense telemetry spanning 1,930+ retail outlets." data-solution="Architected the BAT Peachtree executive finance and distribution performance cockpit, integrating real-time sales volume KPIs, brand category yield distributions (Premium, Aspirational, VFM), field force tracking, and regional expense telemetry." data-tech="React · TypeScript · D3.js · Data Visualization · High-Density Financial Analytics · Tailwind CSS · Enterprise ERP">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/BAT_Peachtree_285bf916.jpg" alt="BAT Peachtree Finance Performance &amp; Operations Cockpit — British American Tobacco" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">BAT Peachtree Finance &amp; Operations Cockpit</h2>
              <p className="work-medium">Enterprise Finance Performance, Nationwide Field Distribution &amp; Regional Expense Telemetry</p>
            </div>
            <span className="showcase-item-year">2023</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">৳73.8 Cr. Velocity</span>
              <span className="work-roi-pill metric-success-pill">1,930+ Outlets</span>
              <span className="work-roi-pill">21.3% Monthly ROI</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for BAT Peachtree Finance &amp; Operations Cockpit">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for BAT Peachtree Finance &amp; Operations Cockpit">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for BAT Peachtree Finance &amp; Operations Cockpit">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for BAT Peachtree Finance &amp; Operations Cockpit">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://www.batbangladesh.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit British American Tobacco Corporate Platform">
                    <span>Client Portal</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  07: Apex4U Omnichannel Footwear & Lifestyle Store (E-Commerce)  */}
      <article className="showcase-stacked-item work-item" data-category="ecommerce" data-title="Apex4U Omnichannel Footwear &amp; Lifestyle Store" data-client="Apex Footwear Ltd." data-year="2025" data-roi="+38% Mobile Conversion" data-cat-label="E-Commerce · Omnichannel Footwear &amp; Fashion" data-challenge="Translating Bangladesh&#39;s leading footwear brand into a responsive, high-converting digital storefront with synchronized retail inventory and friction-free mobile checkout." data-solution="Architected high-speed responsive storefront featuring instant faceted SKU filtering, interactive footwear previews, and streamlined checkout integrating SSLCOMMERZ &amp; MFS." data-tech="Next.js · TypeScript · Tailwind CSS · Headless Commerce · Algolia · SSLCOMMERZ">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/apex4u_dfaf6ee2.jpg" alt="Apex4U Omnichannel Footwear &amp; Lifestyle Store — Men's Formal Shoes &amp; Category Filters" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Apex4U Omnichannel Footwear &amp; Lifestyle</h2>
              <p className="work-medium">High-Conversion Digital Retail Storefront &amp; Loyalty Ecosystem</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+38% Conversion</span>
              <span className="work-roi-pill metric-success-pill">Instant Checkout</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Apex4U Omnichannel Store">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Apex4U Omnichannel Store">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Apex4U Omnichannel Store">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Apex4U Omnichannel Store">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://apex4u.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Apex4U Live Store">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  08: Transcom Digital Consumer Electronics & Appliance Megastore (E-Commerce)  */}
      <article className="showcase-stacked-item work-item" data-category="ecommerce" data-title="Transcom Digital Electronics &amp; Appliance Megastore" data-client="Transcom Digital" data-year="2026" data-roi="150k+ Monthly Orders" data-cat-label="E-Commerce · Consumer Electronics &amp; Appliances" data-challenge="Fragmented electronics catalog across premium global brands (Samsung, Sony, Whirlpool, Philips) with complex bank EMI financing schemes and nationwide logistics." data-solution="Engineered an enterprise e-commerce platform featuring automated 0% EMI calculators, official brand boutique storefronts, and real-time delivery slot dispatch tracking." data-tech="React · TypeScript · Tailwind CSS · Multi-Brand Catalog · EMI Gateway · Logistics APIs">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/transcom_84a76cc4.jpg" alt="Transcom Digital Consumer Electronics &amp; Appliance Megastore — Deals &amp; Categories" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Transcom Digital Electronics Megastore</h2>
              <p className="work-medium">Enterprise Consumer Electronics, EMI Installments &amp; Retail Logistics</p>
            </div>
            <span className="showcase-item-year">2026</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">150k+ Orders</span>
              <span className="work-roi-pill metric-success-pill">0% EMI Engine</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Transcom Digital Electronics Megastore">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Transcom Digital Electronics Megastore">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Transcom Digital Electronics Megastore">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Transcom Digital Electronics Megastore">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://transcomdigital.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Transcom Digital Official Store">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  09: FastPay Mobile Digital Wallet & Card Suite (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="FastPay Mobile Digital Wallet" data-client="FastPay (Iraq &amp; Kurdistan)" data-year="2019" data-roi="1.2M+ Active Wallets" data-cat-label="App Design · Fintech &amp; Digital Wallet" data-challenge="Cash-dominant region required an accessible, multi-lingual digital wallet with seamless Mastercard issuance, P2P transfers, and QR merchant checkout." data-solution="Designed an ergonomic mobile wallet interface with biometric security, instant IQD/USD currency conversion, and thumb-zone optimized QR pay." data-tech="Flutter · Kotlin · Swift · Biometric Auth · Mastercard API · Microservices">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/fastpay-app_01058fda.jpg" alt="FastPay Mobile Digital Wallet — Cashless Payment & Mastercard Ecosystem" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">FastPay Mobile Digital Wallet &amp; Cards</h2>
              <p className="work-medium">Cashless Mobile Financial Ecosystem, Virtual Mastercard &amp; QR Payments</p>
            </div>
            <span className="showcase-item-year">2019</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">1.2M+ Wallets</span>
              <span className="work-roi-pill metric-success-pill">Instant QR Pay</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for FastPay Mobile Digital Wallet">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for FastPay Mobile Digital Wallet">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for FastPay Mobile Digital Wallet">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for FastPay Mobile Digital Wallet">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://www.fast-pay.iq/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit FastPay Official Platform">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  10: MyPeople Global Cultural Community & Social Discovery (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="MyPeople Global Community App" data-client="MyPeople Earth" data-year="2025" data-roi="+185% Community Engagement" data-cat-label="App Design · Social Discovery &amp; Community" data-challenge="Expats, cultural enthusiasts, and travelers lacked a dedicated social app for authentic intercultural events, community discussions, and shared heritage discovery." data-solution="Architected an intuitive global feed and interactive discovery map pairing local cultural celebrations with interest-based micro-communities." data-tech="React Native · TypeScript · Mapbox SDK · Cloudinary · Firebase RTDB">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/mypeople-earth_fe9d4ebe.jpg" alt="MyPeople Global Community App — Cultural Discovery &amp; Interest Groups" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">MyPeople Global Cultural Community</h2>
              <p className="work-medium">Intercultural Social Network, Global Events, Flicks Video &amp; Group Discovery</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">+185% Engagement</span>
              <span className="work-roi-pill metric-success-pill">Global Map Discovery</span>
              <span className="work-roi-pill">Flicks Video Stream</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for MyPeople Global Community App">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for MyPeople Global Community App">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for MyPeople Global Community App">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for MyPeople Global Community App">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=earth.mypeople&amp;hl=en" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="View MyPeople on Google Play Store">
                    <span>Google Play</span>
                    <span className="overflow-tag">Store ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  11: Employee Buddy (eBuddy) Workplace & Project Management App (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="Employee Buddy (eBuddy) Workforce App" data-client="SSL Wireless Enterprise" data-year="2023" data-roi="99.2% Attendance Compliance" data-cat-label="App Design · Workforce &amp; Project Management" data-challenge="Supervisors and operations teams managing enterprise workforces struggled with disjointed task status handoffs, manual punch-in clocking, and lack of real-time milestone Gantt timelines." data-solution="Architected the comprehensive eBuddy mobile companion app uniting task statuses (To-Do, WIP, Due, Done, Reviewed), biometric mobile attendance, team collaboration, and real-time Gantt project timelines." data-tech="Android · Kotlin · Real-Time Task State Machines · BLE Beacons · REST API · SSL Core">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/employeebuddy-app_8d956edf.jpg" alt="Employee Buddy (eBuddy) Mobile App — Task Status, Attendance &amp; Timeline" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Employee Buddy (eBuddy) Mobile App</h2>
              <p className="work-medium">Workforce Productivity, Biometric Attendance, Team Collaboration &amp; Project Timelines</p>
            </div>
            <span className="showcase-item-year">2023</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">99.2% Compliance</span>
              <span className="work-roi-pill metric-success-pill">Real-Time Timelines</span>
              <span className="work-roi-pill">Biometric Punch-In</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Employee Buddy (eBuddy) Workforce App">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Employee Buddy (eBuddy) Workforce App">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Employee Buddy (eBuddy) Workforce App">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Employee Buddy (eBuddy) Workforce App">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.sslwireless.iot_smartoffice&amp;hl=en" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="View Employee Buddy on Google Play Store">
                    <span>Google Play</span>
                    <span className="overflow-tag">Store ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  12: BASIC Bank Magpie Mobile Banking App (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="BASIC Bank Magpie Mobile Banking" data-client="BASIC Bank PLC" data-year="2022" data-roi="Zero-Friction Banking" data-cat-label="App Design · Mobile Banking &amp; Fintech" data-challenge="State-owned bank customers encountered cumbersome in-branch transactions, legacy paperwork, and slow fund transfer verification." data-solution="Engineered the Magpie mobile banking experience: unified balance cockpits, two-factor OTP fund transfers to NPSB/BEFTN rails, and 1-tap utility bill payments." data-tech="Android · Java/Kotlin · Secure Banking SDK · SSL Encryption · ISO 8583">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/basic-bank-app_2c547417.jpg" alt="BASIC Bank Mobile Banking — Digital Fund Transfers & Utility Hub" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">BASIC Bank Magpie Mobile Banking</h2>
              <p className="work-medium">National Banking Portal, 2FA Fund Transfers &amp; Bill Hub</p>
            </div>
            <span className="showcase-item-year">2022</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">Zero-Friction Banking</span>
              <span className="work-roi-pill metric-success-pill">Instant OTP Transfer</span>
            </div>
            <div className="showcase-actions-group">
              <a href="https://www.figma.com/proto/1BFEvwIl892gzBAU1Tc4wm/Resume-and-Presentation?page-id=910%3A1565&node-id=938-29328&viewport=97%2C187%2C0.16&t=Xz07mO5pxB90E8B0-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-case-study" aria-label="Open Figma Case Study for BASIC Bank Magpie Mobile Banking">
                <span>Case Study</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for BASIC Bank Magpie Mobile Banking">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for BASIC Bank Magpie Mobile Banking">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for BASIC Bank Magpie Mobile Banking">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.basicbanklimited.magpie&amp;hl=en" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="View Magpie on Google Play Store">
                    <span>Google Play</span>
                    <span className="overflow-tag">Store ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  13: Bondhu Chula Clean Energy & Climate Impact App (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="Bondhu Chula Clean Energy App" data-client="Bangladesh Bondhu Foundation (BBF / GIZ)" data-year="2022" data-roi="5M+ Stoves Monitored" data-cat-label="App Design · Clean Tech &amp; Sustainability" data-challenge="Rural households and green energy technicians needed an accessible mobile tool for stove registration, carbon credit calculation, and maintenance dispatching." data-solution="Crafted an accessible mobile app with pictorial navigation, offline field data sync, carbon emission reduction charts, and on-demand technician bookings." data-tech="Android · SQLite Offline First · REST API · GIS Mapping · Multilingual Bangla/EN">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/bandhuchula-app_a1ba3a06.jpg" alt="Bondhu Chula Clean Energy App — Climate Impact &amp; Carbon Tracking" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Bondhu Chula Clean Energy &amp; Climate App</h2>
              <p className="work-medium">Nationwide Eco-Stove Management &amp; Carbon Credit Verification</p>
            </div>
            <span className="showcase-item-year">2022</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">5M+ Monitored</span>
              <span className="work-roi-pill metric-success-pill">Carbon Credit Verification</span>
              <span className="work-roi-pill">Offline Sync</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Bondhu Chula Clean Energy App">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Bondhu Chula Clean Energy App">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Bondhu Chula Clean Energy App">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Bondhu Chula Clean Energy App">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.sslwireless.bandhuchula&amp;hl=en" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="View Bondhu Chula on Google Play Store">
                    <span>Google Play</span>
                    <span className="overflow-tag">Store ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  14: SSLCOMMERZ Merchant Mobile App (App Design)  */}
      <article className="showcase-stacked-item work-item" data-category="app-design" data-title="SSLCOMMERZ Merchant App" data-client="SSLCOMMERZ / SSL Wireless" data-year="2025" data-roi="Real-Time Merchant Telemetry" data-cat-label="App Design · Fintech &amp; Merchant Mobile App" data-challenge="Merchants managing retail storefronts and e-commerce payments lacked a unified native mobile app for live transaction tracking, instant payment link generation, refund approvals, and downloadable QR collections." data-solution="Designed the flagship SSLCOMMERZ Merchant native mobile app featuring instantaneous transaction tracking (৳90k+ daily monitoring), dynamic Payment Links, 1-tap refund processing, and unified merchant QR checkout." data-tech="React Native · iOS &amp; Android · REST API · Webhooks · SSLCOMMERZ Merchant Core">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/sslcommerz-merchant-app_65454ea9.jpg" alt="SSLCOMMERZ Merchant Mobile App — Transaction Tracking, Payment Links &amp; QR" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">SSLCOMMERZ Merchant Mobile App</h2>
              <p className="work-medium">Mobile Merchant Telemetry, Dynamic Payment Links, Instant Refunds &amp; QR Hub</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">Real-Time Telemetry</span>
              <span className="work-roi-pill metric-success-pill">Instant Payment Links</span>
              <span className="work-roi-pill">1-Tap Refund Hub</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for SSLCOMMERZ Merchant App">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for SSLCOMMERZ Merchant App">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for SSLCOMMERZ Merchant App">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for SSLCOMMERZ Merchant App">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://sslcommerz.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit SSLCOMMERZ Platform">
                    <span>Official Portal</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  15: SSLCOMMERZ Multi-Channel Payment Gateway Aggregator (Fintech)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="SSLCOMMERZ Payment Gateway &amp; Checkout" data-client="SSLCOMMERZ / Bangladesh Bank" data-year="2025" data-roi="18,000+ Active Merchants" data-cat-label="Fintech · Payment Gateway &amp; Aggregator" data-challenge="E-commerce enterprises in South Asia dealt with fragmented banking integrations, manual settlement reconciliation, and high checkout drop-offs across cards, MFS, and internet banking." data-solution="Architected the flagship SSLCOMMERZ multi-channel checkout engine with integrated Bangla QR, 30+ card &amp; MFS rails, automated T+1 settlement cycles, and PCI-DSS certified security." data-tech="React · TypeScript · Node.js · PCI-DSS Level 1 · REST API · Webhooks">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/sslcommerz_78617072.jpg" alt="SSLCOMMERZ Multi-Channel Payment Gateway — Checkout Engine &amp; Mobile Experience" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">SSLCOMMERZ Multi-Channel Payment Gateway</h2>
              <p className="work-medium">National Payment System Operator, Multi-Channel Checkout, Cards &amp; Bangla QR</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">18k+ Merchants</span>
              <span className="work-roi-pill metric-success-pill">Automated T+1 Payouts</span>
              <span className="work-roi-pill">PCI-DSS Validated</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for SSLCOMMERZ Payment Gateway">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for SSLCOMMERZ Payment Gateway">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for SSLCOMMERZ Payment Gateway">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for SSLCOMMERZ Payment Gateway">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://sslcommerz.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit SSLCOMMERZ Platform">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  16: Join SSLCOMMERZ Merchant Onboarding Portal (Fintech)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="Join SSLCOMMERZ Merchant Onboarding" data-client="SSLCOMMERZ Business / SSL Wireless" data-year="2025" data-roi="15-Min Digital Onboarding" data-cat-label="Fintech · Merchant Onboarding &amp; Digital KYC" data-challenge="New e-commerce merchants and MSMEs endured weeks of paper application friction, manual NID verifications, and slow merchant account activation." data-solution="Architected the Join SSLCOMMERZ self-service onboarding studio featuring progressive 4-step digital KYC, automated NID &amp; photo verification, banking tier selection, and immediate 7-day trial sandbox activation." data-tech="React · TypeScript · Next.js · OCR Document Validation · Automated KYC · Tailwind CSS">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/join-sslcommerz_68ce117b.jpg" alt="Join SSLCOMMERZ Merchant Onboarding — Digital KYC &amp; NID Verification" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Join SSLCOMMERZ Merchant Onboarding</h2>
              <p className="work-medium">Digital KYC Verification, Automated NID Uploads &amp; 7-Day Merchant Trial Activation</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">15-Min Onboarding</span>
              <span className="work-roi-pill metric-success-pill">Instant NID &amp; Photo KYC</span>
              <span className="work-roi-pill">7-Day Instant Trial</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Join SSLCOMMERZ Merchant Onboarding">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Join SSLCOMMERZ Merchant Onboarding">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Join SSLCOMMERZ Merchant Onboarding">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Join SSLCOMMERZ Merchant Onboarding">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://join.sslcommerz.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Join SSLCOMMERZ Portal">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  17: BASIC Bank Mobile Banking App (Fintech)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="BASIC Bank Mobile Banking App" data-client="BASIC Bank PLC" data-year="2022" data-roi="Zero-Friction Banking" data-cat-label="Fintech · Mobile Banking &amp; Fund Transfers" data-challenge="State-owned bank customers encountered cumbersome in-branch queues, legacy paperwork, and slow multi-account fund transfer verification." data-solution="Engineered the modern BASIC Bank mobile banking app: multi-account cockpit, instant RTGS, NPSB &amp; BEFTN transfers, E-Wallet integration, and 1-tap utility bill payments." data-tech="React Native · Android/iOS · Java Spring Boot · Oracle Core Banking · 2FA HSM Security">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/basic-bank-app_2c547417.jpg" alt="BASIC Bank Mobile Banking App — Account Dashboard &amp; RTGS Transfers" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">BASIC Bank Mobile Banking App</h2>
              <p className="work-medium">Digital Account Dashboard, Instant RTGS/NPSB Transfers, E-Wallet &amp; Bill Pay</p>
            </div>
            <span className="showcase-item-year">2022</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">Zero-Friction Banking</span>
              <span className="work-roi-pill metric-success-pill">Instant RTGS &amp; NPSB</span>
              <span className="work-roi-pill">E-Wallet &amp; Card Hub</span>
            </div>
            <div className="showcase-actions-group">
              <a href="https://www.figma.com/proto/1BFEvwIl892gzBAU1Tc4wm/Resume-and-Presentation?page-id=910%3A1565&node-id=938-29328&viewport=97%2C187%2C0.16&t=Xz07mO5pxB90E8B0-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-case-study" aria-label="Open Figma Case Study for BASIC Bank Mobile Banking App">
                <span>Case Study</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <a href="https://www.figma.com/proto/1BFEvwIl892gzBAU1Tc4wm/Resume-and-Presentation?page-id=910%3A1565&node-id=938-29328&viewport=97%2C187%2C0.16&t=Xz07mO5pxB90E8B0-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for BASIC Bank Mobile Banking App">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for BASIC Bank Mobile Banking App">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for BASIC Bank Mobile Banking App">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://www.basicbanklimited.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit BASIC Bank Portal">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  17: NRB Connect - Offshore Banking (Fintech) (New Item)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="NRB Connect - Offshore Banking" data-client="NRB Bank PLC / SSL Wireless" data-year="2024" data-roi="100% Digital eKYC" data-cat-label="Fintech · Offshore Banking &amp; eKYC" data-challenge="Non-Resident Bangladeshis (NRBs) and domestic individuals faced multi-week paper delays, in-person branch mandates, and fragmented requirements to open offshore banking and currency accounts." data-solution="Architected NRB Connect: a real-time online account opening engine featuring progressive eKYC validation, offshore banking origination, EPZ enterprise onboarding, and instant request ID tracking." data-tech="React · TypeScript · eKYC Biometric Verification · CBS Core Banking · Microservices · Tailwind CSS">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/nrb-connect_1ef15465.jpg" alt="NRB Connect - Offshore Banking — Real-Time Online &amp; eKYC Banking" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">NRB Connect - Offshore Banking</h2>
              <p className="work-medium">Fourth-Generation Digital Banking, Real-Time Online Account Opening, Offshore &amp; eKYC</p>
            </div>
            <span className="showcase-item-year">2024</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">100% Paperless eKYC</span>
              <span className="work-roi-pill metric-success-pill">Offshore Banking</span>
              <span className="work-roi-pill">Instant Request Tracking</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for NRB Connect - Offshore Banking">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for NRB Connect - Offshore Banking">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for NRB Connect - Offshore Banking">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for NRB Connect - Offshore Banking">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://connect.nrbbankbd.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit NRB Connect Portal">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  18: FastPay Mobile Wallet Ecosystem (Fintech)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="FastPay Kurdistan Digital Wallet" data-client="FastPay (Iraq &amp; Kurdistan)" data-year="2019" data-roi="1M+ Users · PA-DSS" data-cat-label="Fintech · Mobile Digital Wallet &amp; Cards" data-challenge="Middle Eastern regional consumers needed a reliable, certified cashless payment infrastructure supporting cross-border Mastercards and local merchant acceptance." data-solution="Designed the comprehensive FastPay financial ecosystem: instant deposits &amp; withdrawals, 200+ merchant integrations, localized Kurdish/Arabic/English interfaces, and contactless QR checkout." data-tech="Flutter · Kotlin · Swift · Mastercard Network · ISO 8583 · Microservices">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 9" }}>
            <img src="/public/assets/aistudio/fastpay-app_01058fda.jpg" alt="FastPay Mobile Digital Wallet — Instant Deposit, Withdrawal &amp; 1M+ Users" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">FastPay Mobile Digital Wallet &amp; Ecosystem</h2>
              <p className="work-medium">Cashless Mobile Financial Ecosystem, Virtual Mastercard &amp; QR Payments</p>
            </div>
            <span className="showcase-item-year">2019</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">1M+ Active Users</span>
              <span className="work-roi-pill metric-success-pill">PCI PA-DSS Validated</span>
              <span className="work-roi-pill">200+ Merchants</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for FastPay Kurdistan Digital Wallet">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for FastPay Kurdistan Digital Wallet">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for FastPay Kurdistan Digital Wallet">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for FastPay Kurdistan Digital Wallet">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://www.fast-pay.iq/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit FastPay Official Platform">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  19: The Premier Bank Corporate Banking Suite (Fintech)  */}
      <article className="showcase-stacked-item work-item" data-category="fintech" data-title="The Premier Bank Corporate Banking" data-client="The Premier Bank PLC" data-year="2025" data-roi="৳98.5 Cr. Transfer Volume" data-cat-label="Fintech · Enterprise Corporate Banking" data-challenge="Large-scale corporate conglomerates required centralized cash management, syndicated project loan tracking, nationwide collection booth integration, and bulk corporate payroll." data-solution="Architected the modern Corporate Banking terminal: multi-tier approval matrix, automated bulk disbursement, trade finance L/C tracking, and real-time treasury telemetry." data-tech="React · TypeScript · Tailwind CSS · High-Density Tables · Enterprise Core Banking API">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 10" }}>
            <img src="/public/assets/aistudio/premier-bank_4c2807a0.jpg" alt="The Premier Bank Corporate Banking Suite — Transfer Statistics &amp; Treasury" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">The Premier Bank Corporate Banking Suite</h2>
              <p className="work-medium">Enterprise Cash Management, Transfer Statistics, Multi-Bank Approvals &amp; Treasury</p>
            </div>
            <span className="showcase-item-year">2025</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">৳98.5 Cr. Cashflow</span>
              <span className="work-roi-pill metric-success-pill">Multi-Tier Approvals</span>
              <span className="work-roi-pill">NPSB &amp; RTGS Rails</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for The Premier Bank Corporate Banking">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for The Premier Bank Corporate Banking">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for The Premier Bank Corporate Banking">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for The Premier Bank Corporate Banking">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://thepremierbankplc.com/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit The Premier Bank Official Portal">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  20: Algocyte - Oxford Immune Algorithmics (OIA) (Health Care)  */}
      <article className="showcase-stacked-item work-item" data-category="healthcare" data-title="Algocyte - Oxford Immune Algorithmics (OIA)" data-client="Oxford Immune Algorithmics (OIA)" data-year="2022" data-roi="Sub-Second Anomaly Triage" data-cat-label="Health Care · Precision AI &amp; Immune Telemetry" data-challenge="Complex cellular hematology and biomarker telemetry data was difficult for clinical oncologists to interpret rapidly during time-critical patient evaluations." data-solution="Engineered high-density, real-time hematology telemetry visualization with predictive immune-system anomaly alerts and longitudinal patient biomarker graphs." data-tech="React · TypeScript · WebGL Canvas · D3.js · HIPAA Telemetry · Python Analytics">
        <div className="showcase-figure-wrap">
          <div className="ratio-box" style={{ aspectRatio: "16 / 11" }}>
            <img src="/public/assets/aistudio/algocyte_86ef6956.jpg" alt="Algocyte - Oxford Immune Algorithmics (OIA) — Clinical Biomarker Dashboard &amp; Immune Telemetry" style={{ objectPosition: "top" }} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Algocyte - Oxford Immune Algorithmics (OIA)</h2>
              <p className="work-medium">Precision Hematology Intelligence &amp; Real-Time Immune Health Cockpit</p>
            </div>
            <span className="showcase-item-year">2022</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">HIPAA Compliant</span>
              <span className="work-roi-pill metric-success-pill">Predictive Alerts</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Algocyte - Oxford Immune Algorithmics (OIA)">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Algocyte - Oxford Immune Algorithmics (OIA)">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Algocyte - Oxford Immune Algorithmics (OIA)">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Algocyte - Oxford Immune Algorithmics (OIA)">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://algocyte.ai/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Oxford Immune Algorithmics (OIA) Live Site">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  21: Gain Health Large-Scale Food Fortification Platform (Health Care)  */}
      <article className="showcase-stacked-item work-item" data-category="healthcare" data-title="Gain Health Large-Scale Food Fortification" data-client="Gain Health" data-year="2026" data-roi="1.2B People Access Goal" data-cat-label="Health Care · Large-Scale Food Fortification &amp; Nutrition" data-challenge="Global food fortification initiatives faced fragmented supply chains, opaque compliance reporting, and dispersed field tracking across multiple developing regions." data-solution="Designed the centralized food fortification intelligence portal, tracking production compliance, quality audits, and distribution velocity to improve access to fortified foods to 1.2 billion people by 2025." data-tech="React · TypeScript · Data Visualization · GIS Mapping · Supply Chain Analytics · REST API">
        <div className="showcase-figure-wrap">
          <div className="ratio-box">
            <img src="/src/assets/images/othership_clean_ui_1792223295350.jpg" alt="Gain Health Large-Scale Food Fortification Platform" loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="showcase-caption-block">
          <div className="showcase-title-row">
            <div>
              <h2 className="showcase-item-heading">Gain Health — Large-Scale Food Fortification</h2>
              <p className="work-medium">Large-Scale Food Fortification, Goals by improving access to fortified foods to 1.2 billion people by 2025.</p>
            </div>
            <span className="showcase-item-year">2026</span>
          </div>
          <div className="showcase-tags-line">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <span className="work-roi-pill">1.2B People Target</span>
              <span className="work-roi-pill metric-success-pill">Food Fortification</span>
            </div>
            <div className="showcase-actions-group">
              <button className="quick-brief-btn" type="button" aria-label="Open Project Context for Gain Health Large-Scale Food Fortification">
                <span>Project Context</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </button>
              <a href="https://www.figma.com/proto/preview" target="_blank" rel="noreferrer noopener" className="showcase-action-link action-proto" aria-label="View Prototype for Gain Health Large-Scale Food Fortification">
                <span>Prototype</span>
                <span className="arrow-diag" aria-hidden="true">↗</span>
              </a>
              <div className="showcase-overflow-wrap">
                <button className="showcase-overflow-btn" type="button" aria-expanded="false" aria-label="More actions for Gain Health Digital Therapeutics">
                  <span>More Links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div className="showcase-overflow-dropdown" role="menu">
                  <a href="https://www.figma.com/@aam_uiux" target="_blank" rel="noreferrer noopener" className="overflow-item-link" aria-label="View in Figma for Gain Health Digital Therapeutics">
                    <span>View in Figma</span>
                    <span className="overflow-tag">Source ↗</span>
                  </a>
                  <a href="https://www.gainhealth.org/" target="_blank" rel="noreferrer noopener" className="overflow-item-link live-link" aria-label="Visit Gain Health Official Portal">
                    <span>Live Site</span>
                    <span className="overflow-tag">Visit ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

    </div> {/*  /#showcase-feed  */}

    {/*  Empty State if filtered out  */}
    <div className="works-empty-state" id="showcase-empty-state" style={{ display: "none", marginTop: "4rem" }}>
      <h3 className="empty-title">No projects match this filter</h3>
      <p className="empty-sub">Try searching another keyword or reset the filter to view all work archetypes.</p>
      <button className="cta-btn solid-light" id="showcase-empty-reset-btn" type="button" style={{ marginTop: "1.5rem" }}>
        View All Works Archetypes
      </button>
    </div>

    {/*  Showcase Bottom Return Bar  */}
    <div className="showcase-bottom-bar">
      <button className="showcase-back-btn" id="showcase-bottom-back-btn" type="button" style={{ padding: "0.75rem 1.75rem", fontSize: "0.8125rem" }}>
        <span aria-hidden="true">←</span>
        <span>Return to AA Mahmud Home</span>
      </button>
      <p style={{ fontSize: "0.8125rem", color: "var(--ink-faint)" }}>Or select another archetype from the full-height sidebar</p>
    </div>

  </div> {/*  /#showcase-view  */}

  {/*  Dedicated Profile View Panel (Fades in when View Profile link is clicked)  */}

    </div>
  );
};
