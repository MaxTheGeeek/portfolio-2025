# SPEC.md: Max Behzadi — Full-Stack Engineer & Applied AI Engineer

Comprehensive technical and design specification for the personal portfolio of **Max Behzadi** (Full-Stack Engineer & Applied AI Engineer, Vienna, Austria).

---

### Global Standardizations
- **Role Title**: Standardize across all sections, metadata, hero, and cards strictly to:
  `Full-Stack Engineer | Applied AI Engineer`
- **Section Eyebrow Badges**:
  - Remove all capsule borders, background pill styling, and chip containers from section top badges (e.g., `Available for Custom AI & High-Performance Systems`).
  - Render them as clean, unbordered inline text while preserving original font sizes.
- **Section Titles**:
  - Adjust section title font sizes slightly downward so that long editorial statements (e.g., `Engineering over stochastic guesswork.`) remain inline on a single line on desktop without wrapping.
- **Resume Access**:
  - Completely eliminate all "Resume" download links, view buttons, and attachments across the entire portfolio (Navbar, Hero, Body, and Footer).

---


## 1. Executive Summary & Design Vision

### 1.1 Objective
To construct a modern, authoritative, human-crafted engineering portfolio that completely eliminates stereotypical "agentic / AI-generated template" tropes (such as repetitive glowing cyan pills, noisy 3-column card grids, arbitrary percentage bars, generic mock terminal cards, and neon drop shadows). 

The portfolio establishes credibility for high-ticket client advisory and enterprise engineering contracts by balancing:
- Editorial clarity and calm typography with generous breathing room.
- Direct proof of engineering depth (.NET runtime discipline, Model Context Protocol / MCP, full-duplex conversational voice, deterministic RAG pipelines).
- Authentic human identity (authentic portrait, studio companion Marsi, and transparent intake communication).

---

## 2. Visual Identity & Design System

### 2.1 Theme & Color Palette
- **Mode:** Dark / Editorial Obsidian
- **Tokens:**
  - `surface-container-lowest`: `#0c0e12` (Page canvas backdrop)
  - `surface-container-low`: `#111317` (Deep neutral cards & surfaces)
  - `surface-container`: `#16191f` (Elevated panels & interactive inputs)
  - `surface-container-high`: `#1e222a` (Card borders & hover states)
  - `border-hairline`: `rgba(255, 255, 255, 0.08)` / `rgba(255, 255, 255, 0.12)`
  - `text-primary`: `#f3f4f6` (High-contrast pure clarity)
  - `text-secondary`: `#9ca3af` (Readable muted body copy)
  - `text-tertiary`: `#6b7280` (Micro-labels and metadata)
  - `accent-amber-gold`: `#d99b53` / `#e5a963` (Restrained warm bronze accent for highlights, key links, and badges)
  - `accent-cyan-subtle`: `#38bdf8` / `#0ea5e9` (Used sparingly for voice/audio frequency data or active status dots)

### 2.2 Typography
- **Headings & Editorial Statements:** Serif / Humanist Hybrid (`Newsreader` or clean modern serif paired with `Inter` / system sans)
- **UI & Body Copy:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Code & Telemetry Metadata:** `JetBrains Mono`, `Fira Code`, `ui-monospace`

---

## 3. Information Architecture & Page Sections

```
┌─────────────────────────────────────────────────────────────┐
│ 00. Global Header (Sticky Navigation + Quick Intake CTA)    │
├─────────────────────────────────────────────────────────────┤
│ 01. Hero Section (Headline, Value Prop, Portrait + Badge)   │
├─────────────────────────────────────────────────────────────┤
│ 02. Enterprise AI Solutions (Audio Visualizer + Reloco/FindDev)│
├─────────────────────────────────────────────────────────────┤
│ 03. Selected Works (Focused Paginated / Animated Dossier)   │
├─────────────────────────────────────────────────────────────┤
│ 04. Technical Philosophy & Principles (Spec-First vs Memory)│
├─────────────────────────────────────────────────────────────┤
│ 05. Trajectory, Foundation & Studio Life (Career + Marsi)  │
├─────────────────────────────────────────────────────────────┤
│ 06. Technical Intake & Contact (Structured Inquiry + Direct)│
├─────────────────────────────────────────────────────────────┤
│ 07. Global Footer (System status, coordinates, copyright)   │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Component-by-Component Specifications

### Section 00: Navigation Chrome
- **Left Identity Anchor**:
  - Remove the circular avatar container next to the name.
  - Increase the font size of the brand name (`Max Behzadi`) for stronger hierarchy.
- **Right Action Group**:
  - Remove the `Resume` button/link. Keep only primary navigation anchors and the direct intake CTA.
---

### Section 01: Hero Section
- **Left Column**:
  - Reduce the primary hero headline by 2 standard scale steps.
- **Right Column (Portrait & Capabilities)**:
  - Increase the portrait image container size slightly.
  - Enforce role display: `Full-Stack Engineer | Applied AI Engineer`.
  - Increase vertical breathing room between `capabilities.ts` and `Agentic MCP`.
- **Interactive Portrait Inspection Modal**:
  - **Trigger**: Hovering over Max's portrait image triggers an expanded inspection state.
  - **Expanded View**: Smoothly scales to an inspection modal view (restrained to ~70vh / 600px width max).
  - **Backdrop**: Engages a dark blurred background (`backdrop-blur-md bg-black/60`).
  - **Geometry**: Strict `0px` radius geometry with a 1px `#d99b53` accent border.
  - **Dismissal**: Smoothly returns to default layout on mouse leave (`onMouseLeave`) or `Escape` key press without causing Cumulative Layout Shift (CLS). Disabled on mobile touch devices.
  - **Accessibility**: Include standard keyboard accessibility (`Escape` key dismisses expanded state) and disable hover expansion on touch devices to avoid layout freeze.

---

### Section 02: Enterprise AI Capabilities ("What I build for organizations & clients")
- **Header Statement**:
  - Replace direct collaboration copy with:
    *"Direct engineering collaboration from architectural design and local model integration through to production deployment and operational handover."*

- **Card 1 (Reloco)**:
  - Brand Name: `Reloco` (strictly without "GmbH").
  - Status: Marked as `In Progress` / development pipeline (neither bot is live/deployed).
  - Eyebrow: `ENTERPRISE SUPPORT • LOCAL RAG`
  - Title: `Intelligent Relocation Support & Inquiry Bot`
  - Description:
    "Built an automated 24/7 customer support chatbot for relocation workflows. Powered by a self-hosted local LLM and semantic search via PostgreSQL (pgvector), the system retrieves grounded policy and procedural data to resolve inquiries instantly and escalate edge cases seamlessly to human agents."
  - Metric Pills (replace legacy latency/uptime cards):
    * Stat 1: `On-Prem / Local (Architecture)`
    * Stat 2: `PostgreSQL + pgvector (Retrieval Engine)`
    * Stat 3: `Context-Grounded (Factual Accuracy)`

- **Card 2 (Real Estate Assistant / FindDev)**:
  - Status: Marked as `In Progress` / development pipeline.
  - Eyebrow: `REAL ESTATE CRM • SEMANTIC INTAKE`
  - Title: `Automated Real Estate Support & Client Intake Assistant`
  - Description:
    "Engineered an on-site customer service assistant to qualify leads and answer client queries around listings and real estate services. Leveraged a high-efficiency local inference model with embedded vector search in PostgreSQL, ensuring private data handling, fast response times, and structured client inquiry handoff."
  - Metric Pills (replace legacy cards):
    * Stat 1: `Private Inference (Local LLM)`
    * Stat 2: `Vector Search (Fast Retrieval)`
    * Stat 3: `Automated Triage (Lead Intake)`

- **Architecture & Systems Cards (Row of 3 Cards Below Chatbots)**:
  - **Card 1**:
    * Eyebrow: `ARCHITECTURE & SYSTEMS · .NET & MODERN WEB`
    * Title: `Robust Full-Stack Web & Distributed Backend Architecture`
    * Description: "Designing resilient backend services and responsive frontends using .NET Core, Next.js, and message queues. Focused on clean boundaries, deterministic data flow, and maintainable software built for real production workloads."
    * Badges: `Clean Architecture & DDD`, `PostgreSQL & Data Integrity`, `RabbitMQ Async Queues`, `Tested & Production-Ready`
    * CTA: `Discuss Architecture & Systems →`
  - **Card 2**:
    * Eyebrow: `ENGINEERING & PERFORMANCE · .NET, TYPESCRIPT & DESKTOP`
    * Title: `Performant Cross-Platform & Event-Driven Applications`
    * Description: "Engineering low-latency desktop platforms and distributed cloud APIs across .NET and TypeScript. Built with decoupled worker pipelines, optimized memory profiles, and comprehensive integration testing."
    * Badges: `Cross-Platform Delivery`, `Event-Driven Messaging`, `Optimized Resource Usage`, `Deterministic Testing`
    * CTA: `Explore Technical Work →`
  - **Card 3**:
    * Eyebrow: `FULL-STACK DELIVERY · .NET, POSTGRES & NODE`
    * Title: `Scalable Web Platforms & Intelligent Service Integration`
    * Description: "Bridging modern Next.js frontends with high-throughput .NET and Node.js backend services. Architected with vector search backends, robust API gateways, and asynchronous background worker queues."
    * Badges: `Vector & Relational DBs`, `Decoupled Async Workers`, `Strict Type Safety`, `End-to-End Traceability`
    * CTA: `Discuss Technical Architecture →`
---

### Section 03: Selected Works (Engineering Dossier)
- **Image Display Framing**:
  - Adjust the image container on the right side so the complete screenshot is visible without aggressive cropping or hidden content.
- **Metric Cards Removal**:
  - Remove all micro-metric boxes (`Context Engine`, `Hallucination Defense`, `Token Streaming`, `Persistence`) from every project item.
- **Project Roster (10 Projects from `public/projects/`)**:
  1. `MaxerZ` (2026) | AI-Powered Desktop App | Image: `/projects/maxerz-2.png` | Stack: `C#, .NET 8, Angular, MAUI`
  2. `StereumPlus` | IaaS Server Provisioning Platform | Image: `/projects/stereum-plus.png` | Stack: `Next.js, NestJS, TypeScript, RabbitMQ, BullMQ, PostgreSQL, TypeORM`
  3. `Stereum Launcher Desktop App` | ETH Node Monitoring | Image: `/projects/launcher-2.png` | Stack: `Vue.js, Node.js, WebSocket, Ansible, Electron.js`
  4. `Private Bank Internal App` | Enterprise Financial Platform | Image: `/projects/banking-table.png` | Stack: `WPF, Angular, C#, .NET Framework, Crystal Reports`
  5. `Persian Score` | Football Live Scores Platform | Image: `/projects/persian-scores.png` | Stack: `Next.js, TypeScript, Supabase, Socket.io / WebSocket`
  6. `IRMALL` | Persian E-Commerce & Retail Platform | Image: `/projects/irmall.png` | Stack: `React, Contentful CRM, Node.js, PostgreSQL`
  7. `Tasty Day` | Diet Food Ordering & Recipe Startup | Image: `/projects/tastyday.png` | Stack: `HTML, CSS, JavaScript, jQuery`
  8. `Stereum Labs` | AI-Powered Observability for Ethereum Nodes | Image: `/projects/stereum-labs.png` | Stack: `Next.js, NestJS, TypeScript, RabbitMQ, BullMQ, PostgreSQL, TypeORM`
  9. `CVMaker` | Professional Resume Builder & ATS Platform | Image: `/projects/cover-1.png` | Stack: `Next.js, NestJS, TypeScript, OpenRouter API, Groq API`
  10. `Aspira` | Industrial Accounting Desktop App | Image: `/projects/aspira-persian.png` | Stack: `MVVM, C#, WPF, .NET Framework, NHibernate, LINQ`
---

### Section 04: Technical Principles
- **Card Icon Removal**:
  - Remove all ornamental icons/SVGs from both cards.
- **Revised Card 1**:
  - Badges: `[ DETERMINISTIC AI ] · STRUCTURED RAG & MCP INTEGRATION`
  - Title: `Deterministic AI & Context-Grounded Architecture`
  - Sub-Header: `MODEL CONTEXT PROTOCOL (MCP) · SCHEMA VALIDATION · SEMANTIC RETRIEVAL`
  - Description: "AI agents and LLM assistants are only as dependable as the boundary contracts enclosing them. I design resilient workflows using Model Context Protocol (MCP) servers, domain-specific retrieval-augmented generation (RAG), and strict output parsing to keep language models predictable, secure, and grounded in actual business logic."
  - Key Principles:
    * `01 Context Engineering`: Precise context pruning and hybrid vector search via PostgreSQL (pgvector) ensure relevant, grounded retrieval without context pollution.
    * `02 Strict Schema Validation`: Model outputs are enforced through validated typed schemas before triggering downstream services or database mutations.
    * `03 Human-in-the-Loop Safeguards`: High-impact business actions and state mutations require explicit verification and structured audit logging.
  - Bottom Pills: `[ MCP PROTOCOL ] · [ EMBEDDING PIPELINES ] · [ BOUNDED EXECUTION ]`
- **Revised Card 2**:
  - Badges: `[ CONCURRENCY & RELIABILITY ] · BACKEND PERFORMANCE`
  - Title: `High-Throughput Backends & Event-Driven Systems`
  - Sub-Header: `.NET CORE · ASYNCHRONOUS PIPELINES · MESSAGE BROKERS`
  - Description: "Building distributed systems and data-intensive services requires strict architectural boundaries and predictable resource utilization. I build decoupled, high-performance backends with asynchronous message brokers, efficient memory handling, and clean database query design to ensure systems remain stable under real-world traffic."
  - Key Principles:
    * `01 Memory & Resource Discipline`: Leveraging modern .NET idioms (memory pooling, efficient stream processing, and unbuffered I/O) to keep GC pressure and latency minimal.
    * `02 Decoupled Event Pipelines`: Offloading heavy compute and third-party integrations to asynchronous background workers using RabbitMQ.
    * `03 Resilient API Gateways`: Implementing circuit breakers, structured rate limiting, and graceful degradation across web APIs and microservices.
  - Bottom Pills: `[ EVENT-DRIVEN ] · [ RABBITMQ / QUEUES ] · [ PERFORMANCE DISCIPLINE ]`
---

### Section 05: Career Journey & Credentials
- **RockLogic GmbH Entry**:
  - Title & Scope: `RockLogic GmbH | Jan 2022 to Mar 2026 | Vienna, Austria`
  - Role: `Full-Stack Engineer`
  - Achievements:
    * Modernized a private bank application with C#/.NET, WPF, and MVVM, including asynchronous processing of large financial datasets and reporting engine integration.
    * Built reusable components with validation and error handling while respecting data privacy requirements.
    * Developed an internal request management tool with Blazor, ASP.NET Core Web API, Entity Framework Core, and SQL Server. Implemented CRUD operations, DTOs, server-side validation, role-based access, and xUnit test coverage.
    * Extended Angular features using Reactive Forms, RxJS, and REST APIs; contributed to code reviews and technical documentation.
    * Developed B2B platform features and backend services with React, TypeScript, NestJS, and PostgreSQL for Ethereum infrastructure telemetry.
    * Developed Stereum Launcher features for Ethereum nodes using Vue.js, Node.js, and Electron.
- **Multi-Industry Experience Entry (Third Item)**:
  - Title: `Multi-Industry Full-Stack Development`
  - Achievements:
    * `E-Commerce & Retail`: Online store architecture built with React, Next.js, Tailwind CSS, and Node.js.
    * `Sports Telemetry`: Football live scores platform leveraging Next.js, TypeScript, Supabase, WebSockets, and Node.js.
    * `Food & Nutrition Platform`: Diet food ordering and recipe platform with ingredient gallery using JavaScript and HTML5.
    * `FinTech & Desktop`: Industrial accounting desktop application built with C#, .NET Framework, WPF, MVVM, and NHibernate/LINQ.
- **Academic & Technical Credentials**:
  - Split WIFI Wien into two distinct diplomas:
    * `2020`: Software Engineering Diploma — WIFI Wien
    * `2021`: Web & Desktop Applications Diploma (OOP, PHP, Laravel) — WIFI Wien
  - Append Master's Program:
    * `Student at FH Burgenland - Master of Artificial Intelligence in AI Business Solutions`
---

### Section 06: Technical Intake & Form Integration
- **Backend Service**: Web3Forms API (`https://api.web3forms.com/submit`).
- **Configuration**: `FORM_ACCESS_KEY` configured in `.env.local` (and set in Vercel environment variables).
- **Behavior**: Asynchronous React form submission preventing full-page reloads, with explicit loading, success, and error feedback states forwarding directly to `maxbehzadi82@gmail.com`.

---

### Section 07: Global Footer
- **Layout & Structure**:
  - Minimalist, single-line horizontal layout (with clean vertical stacking on mobile viewports)[cite: 4, 6].
  - Border: 1px hairline divider stroke (`rgba(255, 255, 255, 0.08)` / `#232730`) separating the footer from the preceding section[cite: 4, 6].
  - Spacing: Generous, symmetrical vertical breathing room (`py-12` or `3rem` padding top/bottom) with balanced margins[cite: 4].
- **Included Elements Only**:
  1. **Copyright**: `© 2026 Max Behzadi. All rights reserved.`[cite: 5, 7]
  2. **Direct Email Anchor**: `maxbehzadi82@gmail.com` styled with monospaced typography (`JetBrains Mono`, `label-sm`), warm bronze hover state (`#d99b53`), and `mailto:` action[cite: 4, 6, 8].
  3. **Privacy Telemetry Statement**: `Zero third-party tracking cookies · Privacy-first architecture.`[cite: 5, 7, 8, 9]
- **Removed Elements**:
  - Remove brand monogram block `[MB] Max Behzadi`[cite: 6, 7].
  - Remove role label (`Full-Stack Engineer | Applied AI Engineer`) from the footer[cite: 6, 9].
  - Remove geographic location and timezone info (`Vienna, Austria · Europe/Vienna (UTC+1)`)[cite: 6, 7, 9].
  - Remove `BACK TO TOP ↑` button[cite: 5, 9].

## 5. Step-by-Step Implementation Plan

### Step 1: Project Setup & Baseline HTML Scaffolding
1. Initialize semantic HTML5 document structure with modern responsive meta tags.
2. Load required web fonts (`Newsreader` serif via Google Fonts and `Inter` sans-serif).
3. Configure CSS custom properties (color tokens, border radii, transitions) in `:root`.
4. Implement mobile-first media queries and responsive container wrappers (`max-w-6xl mx-auto px-6`).

### Step 2: Styling & Typography Foundation
1. Establish modular type scale:
   - `Display / Hero Title`: `3.25rem` / `52px` line-height `1.15`.
   - `Section Headings`: `2rem` / `32px` line-height `1.25`.
   - `Card Titles`: `1.25rem` / `20px` line-height `1.4`.
   - `Body`: `1rem` / `16px` line-height `1.6`.
   - `Microcopy / Metadata`: `0.8125rem` / `13px` monospace or tracking-wide sans.
2. Add subtle dark theme background grid or micro-gradient to eliminate flat black monotony while preserving high contrast.

### Step 3: Implement Navigation & Hero Section
1. Code fixed blurred navbar with smooth scroll links and direct CTA.
2. Build two-column Hero layout: left for value proposition, right for personal portrait badge with real image asset.
3. Integrate real user image asset (`{{DATA:IMAGE:IMAGE_18}}` / portrait crop) with clean border styling.

### Step 4: Build Enterprise AI Capabilities Section
1. Place the generated AI Audio & Voice Pipeline visualization asset (`{{DATA:IMAGE:IMAGE_4}}`).
2. Construct the right-side deliverable cards with explicit company mentions (`Reloco GmbH` and `FindDev`).
3. Add subtle latency and reliability telemetry badges (`< 400ms`, `99.9% Reliability`).

### Step 5: Implement Animated / Paginated Dossier Component
1. Build dossier showcase container with header counter (`01 // DESKTOP RUNTIME`).
2. Add vanilla JavaScript carousel navigation supporting:
   - Next/Previous button clicks.
   - Indicator dot clicks.
   - Keyboard arrow key navigation (`ArrowLeft` / `ArrowRight`).
   - Smooth fade/slide transitions between active case studies.

### Step 6: Code Technical Philosophy & Trajectory Timeline
1. Create the two-column comparative architecture principle cards with monospace taglines.
2. Implement clean vertical timeline using CSS border lines and glowing pulse markers for current roles.
3. Integrate Marsi companion spotlight card with authentic grass photo and Chief Morale Officer badge.

### Step 7: Construct Contact & Consultation Intake Form
1. Assemble direct contact card with clipboard copy interaction for `maxbehzadi82@gmail.com`.
2. Build accessible consultation form with label elements, clean focus states (`outline-none ring-2 ring-accent`), and client-side form validation.
3. Implement friendly submit state feedback.

### Step 8: Quality Assurance, Accessibility & Polish
1. Test responsive layouts across mobile (390px), tablet (768px), and desktop (1440px+).
2. Validate color contrast ratios (WCAG AAA for text, AA for UI boundaries).
3. Ensure keyboard accessibility (`tabindex`, focus rings, `aria-labels` on carousel buttons).
4. Verify all asset references and remove all legacy AI template artifacts.

---

## 6. Technical Stack & Deployment Recommendations

- **Markup & Styling:** Next.js (React 19 / TypeScript) or Astro with Tailwind CSS for zero-runtime CSS.
- **Animations:** Subtle CSS transforms and transitions; lightweight motion primitives.
- **Hosting:** Vercel or Cloudflare Pages with edge caching.
- **Analytics:** Minimal, privacy-first analytics (e.g. Plausible or Cloudflare Web Analytics) with zero tracking cookies.
