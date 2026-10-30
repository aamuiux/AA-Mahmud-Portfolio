# Branch Isolation ('v1-stable' & 'v2-dev') and Portfolio Evolution Roadmap

A structured implementation plan to snapshot the current production-ready portfolio state into a frozen `v1-stable` Git branch, switch active development into `v2-dev`, and blueprint upcoming enhancements across case studies, visual design, interactive contact tools, and mobile polish.

***

## User Review & Critical Decisions

> [!IMPORTANT]
> The following choices were confirmed through your requirements and Phase 1 clarification:

- **Git Repository & Baseline Initialization**: Initialize Git in the project workspace root, create an initial commit containing the exact current codebase, and tag/branch this snapshot as `v1-stable`.
- **Active Development Branch**: Branch off from `v1-stable` into `v2-dev`, keeping `v2-dev` checked out as the active working branch for all subsequent modifications.
- **GitHub Remote Synchronization**: When you are ready to publish or sync to GitHub, you can add your remote repository URL (`git remote add origin <your-github-repo-url>`) and push both `v1-stable` and `v2-dev` to GitHub.
- **Confirmed Scope for Upcoming Improvements**:
  1. *Case Studies & Showcase Details*: Rich modal or dedicated deep-dive viewports with impact metrics, architecture diagrams, and problem-solution narratives.
  2. *Visual Styling & Color Refinements*: Editorial spacing, micro-interactions, dark/light contrast auditing, and refined typographic balance.
  3. *New Interactive Sections & Contact Features*: Enhanced strategic inquiry flows, project cost/scope estimator, and responsive interactive filters.
  4. *Mobile Layout & Navigation Polish*: Drawer touch momentum optimization, header sticky transitions, and viewport-edge touch ergonomics.

***

## 1. Overview & Core Concept

- **What It Does**: Establishes robust local Git version control to protect the current site state as an immutable baseline (`v1-stable`), then transitions active editing to `v2-dev` for next-generation portfolio features.
- **Target Audience / Persona**: Recruiter, design director, and founder visitors evaluating AA Mahmud's Lead UI/UX & AI product leadership, paired with an engineer-friendly version-controlled development workflow.
- **Key Value**: Guarantees zero risk of regressions or lost work—if any experimental improvement in `v2-dev` needs revision, the site can instantly be inspected, diffed, or reverted back to `v1-stable`.

***

## 2. User Experience & Visual Design

### A. Case Studies & Showcase Enhancements
- **Deep-Dive Drawer / Viewport**: Expand project showcase items with structured case study breakdowns:
  - *Context & Problem Statement*: High-stakes product challenges (Fintech security, enterprise SaaS complexity, AI agent UX).
  - *Strategic Impact Metrics*: Measurable outcomes (e.g., 40% reduction in support tickets, 2.5x increase in onboarding conversion).
  - *Design System Deliverables*: Component tokens, interactive mockups, and engineering handoff artifacts.
- **Curated Filtering**: Fast archetypal filtering (SaaS, FinTech, E-Commerce, Mobile, HealthTech) with smooth list transitions.

### B. Visual Identity & Monograph Atmosphere
- **Typography**: Space Grotesk for architectural headlines, paired with Satoshi and clean monospace tokens for metadata.
- **Color Discipline**: Strict monochromatic canvas (`--canvas`, `--surface-dark`, `--surface-grey`) with crisp contrast borders and subtle emerald status indicators (`#10b981`).
- **Zero-Pill Discipline**: Ensure all metadata, dates, tags, and category labels remain clean unboxed typographic elements separated by bullet marks (`·`).

### C. Mobile Polish & Touch Ergonomics
- **Fixed Top Header**: Seamless 58px header with `backdrop-filter: blur(16px)` and integrated burger drawer trigger.
- **Drawer Menu**: Smooth gesture-friendly navigation with `overscroll-behavior-y: contain`, `touch-action: pan-y`, and Lenis scroll isolation (`data-lenis-prevent`).

***

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Branch Isolation Before Code Changes**
  - *Chosen Approach*: Initialize `.git`, commit the complete current workspace as `v1-stable`, and create `v2-dev` immediately before touching any application files.
  - *Why*: Eliminates accidental drift and gives an exact Git commit SHA representing today's working release.
  - *Alternatives Considered*: Direct continuous edits without Git (high regression risk, manual backups required).

- **Decision 2: Staged Improvement Rollout on `v2-dev`**
  - *Chosen Approach*: Execute each of the 4 improvement pillars sequentially in distinct verifiable commits on `v2-dev`.
  - *Why*: Allows easy cherry-picking, clean commit history for GitHub, and atomic lint/build verification at every step.

- **Decision 3: GitHub Push Readiness**
  - *Chosen Approach*: Prepare `.gitignore` and remote-push commands so pushing to your GitHub account (`git push -u origin v1-stable`, `git push -u origin v2-dev`) requires only your repository URL without complex configuration.

***

## 4. Technical Architecture & Git Strategy

### System & Branch Architecture

```
┌────────────────────────────────────────────────────────┐
│               AA Mahmud Portfolio Applet                │
│             Vite + TypeScript + Tailwind CSS           │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
          ┌──────────────────────────────────┐
          │     Git Version Control System   │
          └────────────────┬─────────────────┘
                           │
         ┌─────────────────┴─────────────────┐
         │                                   │
         ▼                                   ▼
┌──────────────────┐               ┌──────────────────┐
│    v1-stable     │               │      v2-dev      │
│ (Frozen Release) │               │ (Active Work)    │
├──────────────────┤               ├──────────────────┤
│ • Complete Hero  │               │ • Case Study Modals
│ • 18 Fixed Years │               │ • Visual Polish  │
│ • Fixed Nav Bar  │               │ • New Form Tools │
│ • Cert Desc Order│               │ • Mobile UX Upd  │
└────────┬─────────┘               └────────┬─────────┘
         │                                  │
         └─────────────────┬────────────────┘
                           │
                           ▼  git push origin <branch>
         ┌───────────────────────────────────┐
         │     GitHub Remote Repository      │
         │  github.com/aamuiux/<repo-name>   │
         └───────────────────────────────────┘
```

### Planned Execution Steps

1. **Phase A: Git Initialization & Baseline Commit (`v1-stable`)**
   - Ensure a production `.gitignore` ignores `node_modules`, `dist`, `.env`, and cache files.
   - Run `git init -b v1-stable`.
   - Stage all source assets, templates, styles, and configurations.
   - Commit as: `feat: release v1-stable portfolio baseline`.

2. **Phase B: Development Branch Creation (`v2-dev`)**
   - Create and check out `v2-dev`: `git checkout -b v2-dev`.
   - Verify branch status and workspace stability with `lint_applet` and `compile_applet`.

3. **Phase C: Ready-to-Use GitHub Instructions**
   - Provide clear, exact terminal commands for connecting to your GitHub repository and pushing both branches.

4. **Phase D: Execute Subsequent Portfolio Improvements on `v2-dev`**
   - Proceed with the 4 confirmed feature areas on `v2-dev` upon approval.
