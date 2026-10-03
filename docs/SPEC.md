# SPEC.md: Max Behzadi — Full-Stack Engineer & Applied AI Engineer

Comprehensive technical and design specification for the personal portfolio of **Max Behzadi** (Full-Stack Engineer & Applied AI Engineer, Vienna, Austria).

---

### Global Standardizations
- **Role Title**: Standardize across all sections, metadata, identity cards, and footer strictly to:
  `Full-Stack Engineer | Applied AI Engineer`
- **Section Eyebrows / Top Badges**:
  - Remove all capsule borders, background fills, and badge chips from top labels (e.g., `Available for Custom AI & High-Performance Systems`).
  - Render them as clean, unbordered text titles while keeping the original font size intact.
- **Section Headlines / Titles**:
  - Adjust font sizes slightly downward where necessary so that long titles (e.g., `Engineering over stochastic guesswork.`) remain inline on a single line on desktop and do not wrap awkwardly.


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
- **Left Column**:
  - Remove the circular profile photo avatar next to the name.
  - Increase the font size of the display name (`Max Behzadi`) for stronger hierarchy.
- **Right Column**:
  - Remove the `Resume` button/link entirely. Keep navigation links and direct intake CTA.

---

### Section 01: Hero Section
- **Layout:** Asymmetric 2-column layout with generous vertical rhythm.
- **Left Column**:
  - Reduce the primary headline size by two steps/sizes so it does not overwhelm the layout.
- **Right Column**:
  - Increase the size of the portrait photo card slightly.
  - Display the standardized role: `Full-Stack Engineer | Applied AI Engineer`.
  - Increase the vertical spacing/breathing room between `capabilities.ts` and `Agentic MCP`.

  - **Interactive Portrait Modal Hover Effect**:
  - **Trigger**: Hovering over Max's portrait image in the Hero section card initiates an expanded inspection state.
  - **Expanded State**:
    - The photo transitions smoothly into a centered, large modal-like view (maximum viewport dimension restrained to ~70vh / 600px width).
    - An underlying backdrop overlay engages with a dark, high-blur effect (`backdrop-blur-md bg-black/60`) obscuring the background layout.
    - Animation: High-performance transform/scale transitions (150ms–200ms cubic bezier) maintaining sharp `0px` radius geometry.
  - **Dismissal**: Triggered instantly when the cursor moves off the image (`onMouseLeave`) or clicks outside, returning smoothly to its original dimensions and layout slot without causing Cumulative Layout Shift (CLS).
  - **Accessibility**: Include standard keyboard accessibility (`Escape` key dismisses expanded state) and disable hover expansion on touch devices to avoid layout freeze.

---

### Section 02: Enterprise AI Capabilities ("What I build for organizations & clients")
- **Header:**
  - Eyebrow: `ENTERPRISE AI CAPABILITIES`
  - Headline: `What I build for organizations & clients`
  - Subhead: "Eliminating toy demonstrations in favor of verifiable, low-latency AI pipelines and production enterprise software designed for continuous operations."
- **Grid Layout (50/50 Split):**
  - **Left Showcase:**
    - High-fidelity visual component displaying full-duplex conversational voice nodes, real-time waveform spectrum analysis, and telemetry telemetry overlays (`Latency < 400ms`, `99.9% Reliability`).
    - Title: `Full-Duplex Conversational Voice Systems`.
    - Description: "Real-time audio streaming nodes integrating Whisper transcription, LLM reasoning, speech synthesis, and live CRM function execution without stutter or human perceptible pause."
  - **Right Deliverables Cards (Editorial Stacking):**
    - **Deliverable 1 (Reloco GmbH):**
      - Tag: `Production Delivery` · `Voice AI`
      - Title: `Autonomous AI Voice Assistant`
      - Details: "Engineered a low-latency conversational audio pipeline for automated inbound appointment dispatching, customer intake, and direct CRM synchronization with sub-second response times."
    - **Deliverable 2 (FindDev):**
      - Tag: `Enterprise Support` · `Grounded RAG`
      - Title: `Intelligent Customer Service & Support Chatbot`
      - Details: "Built an always-on 24/7 grounded RAG knowledge engine. Implemented schema AST verification to eliminate AI hallucinations and ensure flawless triage and escalation to human staff."
    - **Deliverable 3 (Custom Enterprise Systems):**
      - Tag: `Architecture & Delivery` · `.NET & Next.js`
      - Title: `High-Concurrency Full-Stack & Desktop Systems`
      - Details: "From sub-120ms desktop WPF valuation engines to distributed Next.js and NestJS cloud architectures. Clean software that stays fast under intense workloads."
      - Link: `Initiate an architectural discussion for your organization →`

---

### Section 03: Selected Works (Engineering Dossier)
- **Asset Rendering**:
  - Fix image sources for all project items to load valid assets directly from `public/projects/`.
  - Map each project title/slug to its corresponding image filename inside `/projects/*`.

---

### Section 04: Technical Principles
- **Card Styling**:
  - Remove all ornamental icons from both the **Spec-Driven Agentic Engineering** card and the **High Concurrency & Memory Discipline** card to maintain an austere, editorial aesthetic.

---

### Section 05: Trajectory & Credentials
- **Academic & Technical Credentials**:
  - Split the WIFI Wien engineering diplomas into two separate chronological entries:
    1. `2020`: Software Engineering Diploma — WIFI Wien
    2. `2021`: Web & Desktop Applications Diploma (OOP, PHP, Laravel) — WIFI Wien
  - Append the master's program at the end of the credentials list:
    - `Student at FH Burgenland - Master of Artificial Intelligence in AI Business Solutions`

---

### Section 06: Technical Consultation & Direct Intake
- **Integration Engine**: Web3Forms API (`https://api.web3forms.com/submit`)
- **Submission Architecture**: Client-side asynchronous `fetch()` handler inside the React contact component without full-page reload.
- **Environment & Key Security**:
  - The access key is injected via environment configuration: `process.env.NEXT_PUBLIC_FORM_ACCESS_KEY` (or accessed via a server-side proxy route `/api/contact` using `process.env.FORM_ACCESS_KEY` to keep the key private).
- **Form Payload**:
  - `access_key`: Form access key from environment variables.
  - `name`: Sender's name (required).
  - `email`: Sender's email (required).
  - `organization`: Company / Organization (optional).
  - `scope`: Project scope category.
  - `message`: Project inquiry message (required).
  - `botcheck`: Hidden honeypot field to trap spam bots.
- **UI States & Feedback**:
  - `Submitting`: Button disabled with inline loading feedback.
  - `Success`: Replaces or supplements input fields with a confirmation message and direct confirmation note.
  - `Error`: Inline error notification advising direct email fallback to `maxbehzadi82@gmail.com`.

---

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
