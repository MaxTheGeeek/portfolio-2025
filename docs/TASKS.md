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


- [x] **TASK-401**: Navbar refactor: Remove Resume button; remove circular profile avatar; enlarge brand name text.
- [x] **TASK-402**: Global role standardization: Enforce "Full-Stack Engineer | Applied AI Engineer" across all components.
- [x] **TASK-403**: Section eyebrows & headings: Remove all pill/badge borders from section top labels; adjust section titles so they render single-line on desktop.
- [x] **TASK-404**: Hero section refactor:
  - Reduce hero left title by 2 font sizes.
  - Enlarge portrait card; increase vertical spacing between capabilities.ts and Agentic MCP.
  - Implement hover-to-expand modal effect on the portrait photo with backdrop blur and smooth mouse-leave reset.
- [x] **TASK-405**: Enterprise AI Capabilities overhaul:
  - Correct card mapping: Reloco (without GmbH) and Real Estate assistant.
  - Set both bot states to "In Progress" (remove live badges).
  - Update eyebrows, titles, descriptions, and replace legacy badges with the 3 new structured stats per card.
  - Overhaul the 3 systems cards below chatbots (.NET/Web, Performance/Desktop, Scalable Web Platforms) and update collaboration statement.
- [x] **TASK-406**: Selected Works overhaul:
  - Adjust carousel image frame to display full, uncropped project screenshots.
  - Remove micro-metric tags from all dossier slides.
  - Populate all 10 projects using verified images from `public/projects/`.
- [x] **TASK-407**: Technical Principles overhaul:
  - Remove all card icons.
  - Apply new content for Card 1 (Deterministic AI) and Card 2 (High-Throughput Backends).
- [x] **TASK-408**: Career Journey & Credentials refactor:
  - Update RockLogic GmbH bullet points and multi-industry experiences.
  - Split WIFI Wien credentials into 2020 and 2021 diplomas; append FH Burgenland AI Master's program.
- [x] **TASK-409**: Contact form integration:
  - Connect form submission to Web3Forms API using `FORM_ACCESS_KEY` from `.env.local`.
  - Add loading, success, and error feedback states forwarding to `maxbehzadi82@gmail.com`.
- [x] **TASK-410**: Complete verification audit:
  - Remove all remaining resume links and download options from the entire codebase.
  - Test all buttons, internal anchors, and links across viewports.
  - Verify clean compilation with `npx tsc --noEmit` and `npm run build`.

- [x] **TASK-412**: Refactor footer to minimal layout:
  - Keep only copyright, direct email anchor, and third-party tracking telemetry note.
  - Remove name block, role title, Vienna/UTC+1 timezone coordinates, and "Back to Top" link.
  - Apply clean symmetrical padding (`py-12`), balanced horizontal spacing, and responsive mobile wrapping.
- [x] **TASK-413**: Global design alignment pass:
  - Buttons & Interactive Links: Enforce solid `#ECEFF4` with `#0F1115` text shifting to `#D99B53` on hover for primary CTAs (`label-md` uppercase), and 1px hairline border `#232730` with hover transition to `#D99B53` for secondary/outline buttons.
  - Section Eyebrows: Standardize all section top labels to unbordered plain text in `JetBrains Mono` (`label-sm`), uppercase `tracking-widest`, in accent bronze `#D99B53`.
  - Section Headlines: Calibrate `headline-lg` section titles to `32px` (`leading-[40px]`) with `lg:whitespace-nowrap` on desktop.
- [x] **TASK-414**: Enterprise AI image swap & subtle border radii restoration:
  - Enterprise AI Inversion Fix: Swapped client project screenshots so Card 1 (Reloco) displays `/client-projects/chatbot.jpeg` (dark Reloco screenshot) matching "Intelligent Relocation Support & Inquiry Bot", and Card 2 (Real Estate) displays `/client-projects/chatbot-2.jpeg` (light Myler Winnipeg screenshot) matching "Automated Real Estate Support & Client Intake Assistant".
  - Subtle Border Radii: Restored architectural border radius across all cards/panels (`rounded-lg` / 8px), buttons (`rounded-md` / 6px), screenshot/image containers (`rounded-md` / 6px with 1px border `#232730`), and form inputs/select/textarea (`rounded-md` / 6px).
  - Maintained unbordered plain text style for section eyebrows (no pill containers or background badges).
  - Full TypeScript typecheck (`npx tsc --noEmit`) and production build (`npm run build`) passed with zero errors.