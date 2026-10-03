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
- [x] **TASK-001**: Establish project directory structure (Next.js 16 / React 19 / TypeScript / Tailwind CSS).
- [x] **TASK-002**: Configure design system CSS custom properties and color tokens in `globals.css` matching `DESIGN.md` (`#0c0e12`, `#111317`, `#16191f`, `#d99b53`).
- [x] **TASK-003**: Load and verify typography pairings (`Newsreader` serif via Google Fonts, `Inter` for interface elements, `JetBrains Mono` for metadata).
- [x] **TASK-004**: Configure responsive viewport containers (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) and baseline accessibility reset (`overflow-x: clip`).
- [x] **TASK-005**: Set up automated linting and formatting rules (`TypeScript`, `ESLint`, zero-error typecheck).

---

## Phase 2: Section-by-Section Implementation

### Section 00: Global Navigation Chrome
- [x] **TASK-101**: Build sticky header bar with high-blur backdrop (`backdrop-blur-md bg-[#0c0e12]/85 border-b border-white/10`).
- [x] **TASK-102**: Implement monogram brand mark `[MB] Max Behzadi` with discreet geographic subhead `Vienna, Austria`.
- [x] **TASK-103**: Add anchor navigation links (`AI Solutions`, `Selected Work`, `Philosophy`, `Trajectory`, `Studio & Marsi`).
- [x] **TASK-104**: Integrate quick intake CTA button (`Discuss Project →`) with smooth cross-browser scrolling via `scrollToSection`.
- [x] **TASK-105**: Add mobile navigation drawer/hamburger menu with keyboard trap accessibility (`Escape` key handler, focus trap, backdrop overlay).

### Section 01: Hero Section
- [x] **TASK-111**: Implement 2-column asymmetric hero grid layout with generous vertical padding (`py-20` to `py-32`).
- [x] **TASK-112**: Integrate live availability pill badge (`Available for Custom AI & High-Performance Systems`) with pulsing status indicator.
- [x] **TASK-113**: Render editorial serif statement: *"Engineering resilient systems and applied AI architectures."*
- [x] **TASK-114**: Add narrative lead paragraph highlighting 8+ years experience across autonomous agent pipelines and .NET runtimes.
- [x] **TASK-115**: Implement primary (`Explore AI Solutions`) and secondary (`View Selected Work`) CTA action buttons.
- [x] **TASK-116**: Place Max's authentic portrait photo asset (`/me.jpg`) into right-hand card with subtle border styling.
- [x] **TASK-117**: Add technical capabilities badge card below portrait (`capabilities.ts`, Claude Code, MCP, sub-agent telemetry).
- [x] **TASK-118**: Verify complete removal of legacy metrics row (`50,000+`, `< 120ms`, etc.) to prevent layout crowding.

### Section 02: Enterprise AI Capabilities ("What I build for organizations & clients")
- [x] **TASK-121**: Structure showcase grid with editorial section eyebrow (`ENTERPRISE AI CAPABILITIES`).
- [x] **TASK-122**: Embed both client chatbot screenshots prominently:
  - FindDev: `/client-projects/chatbot.jpeg` (24/7 intelligent customer support engine).
  - Reloco GmbH: `/client-projects/chatbot-2.jpeg` (real-time voice assistant and intake dispatch).
- [x] **TASK-123**: Add telemetry status badges (`Accuracy: 99.8% Grounded`, `Latency: < 420ms`, `Response: < 380ms`, `Uptime: 99.9%`).
- [x] **TASK-124**: Construct Deliverable Card 1: **Reloco GmbH** (Autonomous AI Voice Assistant, inbound dispatching, CRM sync, `/client-projects/chatbot-2.jpeg`).
- [x] **TASK-125**: Construct Deliverable Card 2: **FindDev** (Intelligent Customer Support Chatbot, grounded RAG, schema AST verification, `/client-projects/chatbot.jpeg`).
- [x] **TASK-126**: Construct Deliverable Card 3: **Custom Enterprise Systems** (High-concurrency WPF desktop & cloud Next.js architectures).
- [x] **TASK-127**: Add direct intake transition link (`Initiate an architectural discussion for your organization →`) with pre-fill trigger.

### Section 03: Selected Works (Engineering Dossier & Carousel)
- [x] **TASK-131**: Create dossier container with dossier eyebrow and header counter (`01 // DESKTOP RUNTIME • 2024-2025`).
- [x] **TASK-132**: Implement Case Study 01: **MaxerZ Desktop** (C#, .NET MAUI, OpenRouter, asynchronous worker pool, local SQLite).
- [x] **TASK-133**: Implement Case Study 02: **Stereum Launcher & Plus** (Ethereum node orchestration, RabbitMQ, 50k+ nodes).
- [x] **TASK-134**: Implement Case Study 03: **rocklogic.at Architecture** (B2B Ethereum telemetry & Grafana automation).
- [x] **TASK-135**: Implement Case Study 04: **Private Banking WPF Suite** (50,000+ row virtualized grid, sub-120ms calculation).
- [x] **TASK-136**: Implement Case Study 05: **cover-letter.work & Pipelines** (Grounded AST schema verification & vector embeddings).
- [x] **TASK-137**: Implement pagination controls: Previous/Next buttons (`[ < ]` and `[ > ]`), active indicator dots, and ArrowLeft / ArrowRight keyboard shortcuts.
- [x] **TASK-138**: Enhance carousel script with touch swipe gesture detection on mobile (`onTouchStart` / `onTouchEnd`) and smooth cross-fade animation transitions.

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
- [x] **TASK-156**: Integrate Marsi personal spotlight card with authentic grass photo (`/marsi-grass.jpg`), quote: *"Playing with him makes me fresh..."*, and Chief Morale Officer badge.

### Section 06: Technical Consultation & Direct Intake
- [x] **TASK-161**: Implement 2-column intake layout (`Direct Coordinates` on left, `Consultation Form` on right).
- [x] **TASK-162**: Add direct email block for `maxbehzadi82@gmail.com` with one-click clipboard copy button and toast notification.
- [x] **TASK-163**: Display response SLA badge: `Typically within 24 business hours directly from Max`.
- [x] **TASK-164**: Add social coordinate links (`GitHub ↗`, `LinkedIn ↗`) with zero tracking referrals.
- [x] **TASK-165**: Construct inquiry form with inputs: `Your Name`, `Email Address`, `Organization`, `Project Scope Dropdown`, `Project Details`.
- [x] **TASK-166**: Wire form submission endpoint (`/api/contact` API route with MongoDB connection, email dispatch, honeypot protection, and SLA validation).
- [x] **TASK-167**: Add client-side validation schema with polite feedback states and direct service pre-fill event listener.

### Section 07: Global Footer
- [x] **TASK-171**: Render footer with active advisory status dot, Vienna coordinates (`Vienna, Austria · Europe/Vienna (UTC+1)`).
- [x] **TASK-172**: Include copyright and privacy statement (`© 2026 Max Behzadi. All rights reserved. Zero tracking cookies.`).

---

## Phase 3: Polish, Performance & Security

### 3.1 Quality Assurance & Performance
- [x] **TASK-201**: Image format and rendering verification (Next.js `<Image />` WebP conversion, proper sizes, no layout shift).
- [x] **TASK-202**: Color contrast validation (WCAG AAA for body copy, AA for borders and subtle indicators).
- [x] **TASK-203**: Cross-browser scroll calculation (`scrollToSection` via `elementTop - bodyTop` preventing Safari root-lock failures).
- [x] **TASK-204**: Verified static asset delivery (`chatbot.jpeg`, `chatbot-2.jpeg`, `me.jpg`, `marsi-grass.jpg` HTTP 200).

### 3.2 Security & Delivery
- [x] **TASK-301**: Implement honeypot anti-spam and clean payload sanitation in `/api/contact`.
- [x] **TASK-302**: Verified environment variables without client-side leakage (`PORTFOLIO_DB_MONGODB_URI`).
- [x] **TASK-303**: Clean production build check (`npm run build` succeeds in 1.5s with zero errors).


## Phase 4: Refactor, UI Polish & Form Fixes

- [x] **TASK-401**: Remove Resume button from navbar; remove circular profile avatar; enlarge display name.
- [x] **TASK-402**: Globally standardize role title to "Full-Stack Engineer | Applied AI Engineer".
- [x] **TASK-403**: Convert section top badges into plain text headings without borders while keeping font size intact.
- [x] **TASK-404**: Reduce section titles font sizes slightly to guarantee single-line (inline) layout without breaking.
- [x] **TASK-405**: Reduce Hero left title by 2 font sizes; enlarge Hero portrait; increase spacing between capabilities.ts and Agentic MCP.
- [x] **TASK-406**: Fix project image mappings in Selected Works to load directly from `public/projects/`.
- [x] **TASK-407**: Remove icons inside Spec-Driven Agentic Engineering and Concurrency cards.
- [x] **TASK-408**: Update Academic Credentials: add FH Burgenland Master's entry, split WIFI Wien into two distinct diplomas (2020 & 2021).
- [x] **TASK-409**: Wire contact form to Web3Forms API (`https://api.web3forms.com/submit`) using `FORM_ACCESS_KEY` from `.env.local`:
  - Implement async submission handler in React preserving existing dark editorial styling.
  - Handle loading, success confirmation, and error states gracefully.
  - Verify submissions route successfully to Gmail inbox.
- [x] **TASK-410**: End-to-end verification: test all buttons, internal anchors, external links, and perform production build check (`npm run build`).
- [x] **TASK-411**: Implement hover-to-expand modal effect on the Hero portrait photo with backdrop blur and smooth exit on mouse leave.