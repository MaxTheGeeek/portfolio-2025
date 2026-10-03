# TASKS.md — Max Behzadi Portfolio Implementation Tasks

Engineering task breakdown, execution phases, state tracking, and section-by-section deliverables for the personal portfolio of **Max Behzadi** (Senior Systems & Applied AI Engineer, Vienna, Austria).

---

## Task States & Legend
- `[ ]` **Backlog / To Do**: Defined, pending implementation.
- `[-]` **In Progress**: Currently active.
- `[x]` **Completed**: Built, tested, and validated against design specifications.
- `[!]` **Blocked / Needs Review**: Requires architectural clarification or external asset.

---

## Phase 1: Environment & Project Scaffolding

### 1.1 Foundation & Toolchain Setup
- [x] **TASK-001**: Establish project directory structure (Next.js 15 / React 19 / TypeScript / Tailwind CSS 4 or Astro).
- [x] **TASK-002**: Configure design system CSS custom properties and color tokens in `globals.css` matching `DESIGN.md` (`#0c0e12`, `#111317`, `#16191f`, `#d99b53`).
- [x] **TASK-003**: Load and verify typography pairings (`Newsreader` serif via Google Fonts / Fontsource, `Inter` for interface elements, `JetBrains Mono` for metadata).
- [x] **TASK-004**: Configure responsive viewport containers (`max-w-6xl mx-auto px-6`) and baseline accessibility reset.
- [ ] **TASK-005**: Set up automated linting and formatting rules (`ESLint`, `Prettier`, `Tailwind CSS intellisense`).

---

## Phase 2: Section-by-Section Implementation

### Section 00: Global Navigation Chrome
- [x] **TASK-101**: Build sticky header bar with high-blur backdrop (`backdrop-blur-md bg-[#0c0e12]/80 border-b border-white/5`).
- [x] **TASK-102**: Implement monogram brand mark `[MB] Max Behzadi` with discreet geographic subhead `Vienna, Austria`.
- [x] **TASK-103**: Add anchor navigation links (`AI Solutions`, `Selected Work`, `Philosophy`, `Trajectory`, `Studio & Marsi`).
- [x] **TASK-104**: Integrate quick intake CTA button (`Discuss Project →`) with smooth scrolling to `#contact`.
- [ ] **TASK-105**: Add mobile navigation drawer/hamburger menu with keyboard trap accessibility (`Escape` key handler, focus trap).

### Section 01: Hero Section
- [x] **TASK-111**: Implement 2-column asymmetric hero grid layout with generous vertical padding (`py-20` to `py-24`).
- [x] **TASK-112**: Integrate live availability pill badge (`Available for Custom AI & High-Performance Systems`) with pulsing status indicator.
- [x] **TASK-113**: Render editorial serif statement: *"Engineering resilient systems and applied AI architectures."*
- [x] **TASK-114**: Add narrative lead paragraph highlighting 8+ years experience across autonomous agent pipelines and .NET runtimes.
- [x] **TASK-115**: Implement primary (`Explore AI Solutions`) and secondary (`View Selected Work`) CTA action buttons.
- [x] **TASK-116**: Place Max's authentic portrait photo asset into right-hand card with subtle border styling.
- [x] **TASK-117**: Add technical capabilities badge card below portrait (`capabilities.ts`, Claude Code, MCP, sub-agent telemetry).
- [x] **TASK-118**: Verify complete removal of legacy metrics row (`50,000+`, `< 120ms`, etc.) to prevent layout crowding.

### Section 02: Enterprise AI Capabilities ("What I build")
- [x] **TASK-121**: Structure 50/50 showcase grid with editorial section eyebrow (`ENTERPRISE AI CAPABILITIES`).
- [x] **TASK-122**: Embed high-fidelity AI Audio & Voice Pipeline visualization asset (`Conversational Speech Neural Nodes`, latency telemetry).
- [x] **TASK-123**: Add telemetry status badges (`Latency < 400ms`, `99.9% Reliability`) under waveform visualizer.
- [x] **TASK-124**: Construct Deliverable Card 1: **Reloco GmbH** (Autonomous AI Voice Assistant, inbound dispatching, CRM sync).
- [x] **TASK-125**: Construct Deliverable Card 2: **FindDev** (Intelligent Customer Support Chatbot, grounded RAG, schema AST verification).
- [x] **TASK-126**: Construct Deliverable Card 3: **Custom Enterprise Systems** (High-concurrency WPF desktop & cloud Next.js architectures).
- [x] **TASK-127**: Add direct intake transition link (`Initiate an architectural discussion for your organization →`).

### Section 03: Selected Works (Engineering Dossier & Carousel)
- [x] **TASK-131**: Create dossier container with dossier eyebrow and header counter (`01 // DESKTOP RUNTIME • 2024-2025`).
- [x] **TASK-132**: Implement Case Study 01: **MaxerZ Desktop** (C#, .NET MAUI, OpenRouter, asynchronous worker pool, local SQLite).
- [x] **TASK-133**: Implement Case Study 02: **Stereum Launcher & Plus** (Ethereum node orchestration, RabbitMQ, 50k+ nodes).
- [x] **TASK-134**: Implement Case Study 03: **rocklogic.at Architecture** (B2B Ethereum telemetry & Grafana automation).
- [x] **TASK-135**: Implement Case Study 04: **Private Banking WPF Suite** (50,000+ row virtualized grid, sub-120ms calculation).
- [x] **TASK-136**: Implement Case Study 05: **cover-letter.work & Pipelines** (Grounded AST schema verification & vector embeddings).
- [x] **TASK-137**: Implement pagination controls: Previous/Next buttons (`[ < ]` and `[ > ]`) and active indicator dots.
- [ ] **TASK-138**: Enhance carousel script with touch swipe detection on mobile and smooth cross-fade animation transitions.

### Section 04: Technical Principles
- [x] **TASK-141**: Implement section header with quote: *"In production, reliability is not an afterthought; it is the fundamental contract between code and user."*
- [x] **TASK-142**: Build Pillar 01 card: **Spec-Driven Agentic Engineering** (Model Context Protocol / MCP, AST filters, sandboxed execution).
- [x] **TASK-143**: Build Pillar 02 card: **High Concurrency & Memory Discipline** (.NET `Span<T>`, memory pooling, decoupled RabbitMQ).
- [x] **TASK-144**: Add structured monospace architectural tags (`[ PROTOCOL ]`, `[ CONTEXT HYGIENE ]`, `[ RUNTIME ]`).

### Section 05: Trajectory & Studio Foundation
- [x] **TASK-151**: Construct chronological vertical trajectory timeline with glowing active indicator for current role.
- [x] **TASK-152**: Add entry for `2026 — Present`: Applied AI Systems Engineer & Advisory (MCP servers, verifiable context).
- [x] **TASK-153**: Add entry for `2024 — 2026`: Full-Stack & Telemetry Engineer (RockLogic GmbH, Vienna).
- [x] **TASK-154**: Add entry for `Prior Years`: Desktop Systems & Financial Tooling (Enterprise Financial Systems).
- [x] **TASK-155**: Add Academic & Accreditations entry (B.Sc. Accounting, WIFI Wien diplomas, Azure AZ-204 & AZ-900).
- [x] **TASK-156**: Integrate Marsi personal spotlight card with authentic grass photo, quote: *"Playing with him makes me fresh..."*, and Chief Morale Officer badge.

### Section 06: Technical Consultation & Direct Intake
- [x] **TASK-161**: Implement 2-column intake layout (`Direct Coordinates` on left, `Consultation Form` on right).
- [x] **TASK-162**: Add direct email block for `maxbehzadi82@gmail.com` with one-click clipboard copy button and toast notification.
- [x] **TASK-163**: Display response SLA badge: `Typically within 24 business hours directly from Max`.
- [x] **TASK-164**: Add social coordinate links (`GitHub ↗`, `LinkedIn ↗`) with zero tracking referrals.
- [x] **TASK-165**: Construct inquiry form with inputs: `Your Name`, `Email Address`, `Organization`, `Project Scope Dropdown`, `Project Details`.
- [ ] **TASK-166**: Wire form submission endpoint (Server Action or API route via Resend / Postmark with rate limiting and CSRF protection).
- [ ] **TASK-167**: Add client-side validation schema (`Zod`) with polite feedback states.

### Section 07: Global Footer
- [x] **TASK-171**: Render footer with active advisory status dot, Vienna coordinates (`Vienna, Austria · Europe/Vienna (UTC+1)`).
- [x] **TASK-172**: Include copyright and privacy statement (`© 2026 Max Behzadi. All rights reserved. Zero tracking cookies.`).

---

## Phase 3: Polish, Performance & Security

### 3.1 Quality Assurance & Performance
- [ ] **TASK-201**: Run Lighthouse audits (Target: 95+ in Performance, Accessibility, Best Practices, SEO).
- [ ] **TASK-202**: Optimize image formats (Next.js `<Image />` WebP/AVIF conversion with explicit width/height to avoid layout shifts).
- [ ] **TASK-203**: Verify color contrast ratios (WCAG AAA for body copy, AA for borders and subtle indicators).
- [ ] **TASK-204**: Test cross-browser compatibility (Chromium, Firefox, Safari iOS/macOS).

### 3.2 Security & Delivery
- [ ] **TASK-301**: Implement Content Security Policy (CSP) headers and HSTS.
- [ ] **TASK-302**: Set up environment variables for intake mailers without client-side leakage.
- [ ] **TASK-303**: Configure edge deployment on Cloudflare Pages or Vercel with CDN caching.
