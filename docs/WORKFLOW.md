# WORKFLOW.md — Engineering Workflow, Multi-Agent Collaboration & Governance

Technical operating manual, architectural guidelines, agent hooks, security policies, and review procedures for the **Max Behzadi** portfolio project.

---

## 1. Architectural Stack & Core Technologies

### 1.1 Frontend & Runtime
- **Framework**: Next.js 15+ (App Router) or Astro for zero-runtime static content where applicable.
- **Language**: TypeScript 5.5+ in strict mode (`"strict": true`, `"noImplicitAny": true`).
- **Styling**: Tailwind CSS 4 with custom token variables defined in `globals.css` (inheriting from `DESIGN.md`).
- **Icons & Graphics**: Clean inline SVGs or Lucide Icons; zero low-quality emoji in UI chrome.
- **Fonts**: Self-hosted or optimized Google Fonts via `next/font`:
  - `Newsreader` (humanist serif for headlines and editorial statements).
  - `Inter` (sans-serif for interface copy, form labels, and buttons).
  - `JetBrains Mono` (monospaced for telemetry metadata, protocol labels, and tags).

### 1.2 Assets Inventory & Resolution Contract
All image and media assets must adhere to explicit identity roles:
- **Max's Portrait**: Authentic personal photo embedded in the Hero Section identity card. Never replace with an AI avatar or stock model.
- **Marsi (Studio Companion)**: Authentic photograph of Marsi in the Vienna park. Preserved as a grounded, human touchpoint.
- **Enterprise AI Visualizer**: High-resolution architectural waveform visualizer representing full-duplex conversational audio streaming.
- **Rules on Assets**:
  - Never hallucinate external image URLs (`https://via.placeholder.com`, unsplash randoms).
  - Use exact DataStore placeholders in development snapshots (`{{DATA:IMAGE:IMAGE_N}}`) or local optimized paths (`/public/assets/...`).

---

## 2. Repository Documentation Suite (`.md` File Governance)

The project is governed by four core markdown specifications. Every contributor, developer, and agent must adhere to their boundaries:

```
┌────────────────────────────────────────────────────────┐
│                      SPEC.md                           │
│  The Master Architecture & Design System Specification │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌───────────────────────┐        ┌───────────────────────┐
│       TASKS.md        │        │      PROGRESS.md      │
│ Granular Task Engine  │◄──────►│ Real-Time Milestone   │
│ & State Tracker       │        │ & Verification Log    │
└───────────────────────┘        └───────────────────────┘
            ▲                                ▲
            │                                │
            └───────────────┬────────────────┘
                            │
┌───────────────────────────┴────────────────────────────┐
│                    WORKFLOW.md                         │
│  Operating Rules, Agent Hooks, Review & Security SOP  │
└────────────────────────────────────────────────────────┘
```

### When to Consult Each File:
1. **`SPEC.md`**: Consult when verifying design tokens, section hierarchy, copy constraints, or component layouts. **Never modify `SPEC.md` without client confirmation.**
2. **`TASKS.md`**: Consult before starting any feature. Check task IDs (`TASK-101`, etc.), mark tasks `[-]` when starting, and `[x]` upon completion.
3. **`PROGRESS.md`**: Consult to inspect the macro project health, check what was completed in preceding turns, and verify milestone metrics.
4. **`WORKFLOW.md`**: Consult to resolve rules on multi-agent execution, security policies, tool selection, and review hooks.

---

## 3. Core Engineering Rules & "What NOT to Do"

### 3.1 Strict Anti-AI Design Rules
1. **NO Neon Glow Badges or Cyan Pills**: Do not prepend sections with arbitrary pill badges (e.g. `/* GET IN TOUCH */`). Use understated editorial microcopy.
2. **NO Repetitive 3-Column Card Grids**: Avoid clustering identical rounded rectangle cards. Vary layout rhythm using split showcases, dossier lists, and asymmetrical compositions.
3. **NO Arbitrary Skill Percentages**: Never display progress bars stating "95% .NET" or "85% Python". Real engineering credibility is demonstrated through architectural case studies and metrics.
4. **NO Generic Fake Terminal Boxes**: Do not drop decorative bash windows containing generic `npm install` text.
5. **NO Unanchored Buzzwords**: Avoid vague agentic hype without technical backing. Always anchor claims to concrete frameworks (MCP, AST verification, .NET Span<T>, RabbitMQ).

### 3.2 Code Quality & Constraint Rules
- **Verbatim Copy**: User-provided company names (**Reloco GmbH**, **FindDev**), contact coordinates (`maxbehzadi82@gmail.com`), and quotes (*"Playing with him makes me fresh..."*) must be reproduced character-for-character.
- **Negative Constraints Are Absolute**: When an instruction specifies "remove the metrics row" or "no card grid", that element must remain permanently excluded.
- **Zero Layout Shifts**: All images and dynamic slots must carry fixed aspect ratios to prevent CLS (Cumulative Layout Shift).

---

## 4. Multi-Agent Systems, Roles & Hooks

When executing in a multi-agent or agentic coding environment (Claude Code, Cursor, Copilot, MCP agents):

### 4.1 Agent Roles
- **Orchestrator Agent**: Reads `PROGRESS.md` and `TASKS.md`, delegates subtasks to specialist workers, and maintains state synchronization.
- **UI/Styling Specialist**: Implements Tailwind classes, validates color tokens against `DESIGN.md`, and ensures responsive fluidity across 390px, 768px, and 1440px viewports.
- **Frontend Systems Specialist**: Implements interactive state (dossier carousel JS/TS logic, clipboard copy, smooth scrolling).
- **Review & QA Agent**: Enforces the review checklist before marking any task as completed.

### 4.2 Lifecycle Hooks & SOP

```
   [ Task Assignment ]
            │
            ▼
    HOOK 1: Pre-Execution Context Check
    - Inspect TASKS.md for task ID and acceptance criteria
    - Cross-reference SPEC.md for visual guidelines
            │
            ▼
   [ Code Generation / Edit ]
            │
            ▼
    HOOK 2: Anti-AI Linter & Constraint Check
    - Did any cyan badge or fake percentage slip in?
    - Are the correct colors and fonts utilized?
            │
            ▼
    HOOK 3: Review Agent Verification
    - Execute DOM validation, mobile viewport check, and copy test
            │
            ▼
    HOOK 4: State Update
    - Update TASKS.md to [x]
    - Append milestone details in PROGRESS.md
```

---

## 5. Review Agent Checklist

The Review Agent must evaluate each pull request or screen update against these strict gates:

1. **Aesthetic Tone Gate**: Does the screen look like an authoritative human engineer's portfolio, or does it resemble an automated AI template?
2. **Typography Gate**: Is `Newsreader` applied exclusively to editorial titles/quotes, with `Inter` handling UI and `JetBrains Mono` handling code/telemetry?
3. **Responsive Gate**: Does the navigation collapse gracefully? Does the Enterprise AI Capabilities section stack cleanly from 2-column to 1-column on mobile?
4. **Interactive Integrity Gate**:
   - Does clicking `[ < ]` and `[ > ]` in Selected Works smoothly cycle through all five case studies?
   - Does clicking "Copy" on `maxbehzadi82@gmail.com` write to the system clipboard and trigger a toast?
5. **Accessibility Gate**: Are color contrast ratios for secondary copy above 4.5:1 (WCAG AA)? Are button elements keyboard focusable with visible focus rings?

---

## 6. Security, Privacy & Compliance Guidelines

- **Zero Tracking Telemetry**: Do not embed third-party tracking pixels (Meta Pixel, Google Tag Manager, Hotjar). If analytics are required, use cookieless, privacy-first analytics (Cloudflare Web Analytics or Plausible).
- **Intake Form Protection**:
  - Implement honeypot fields to trap automated spam bots.
  - Implement server-side rate limiting (e.g. Upstash Redis / Vercel KV rate-limiter: max 3 submissions per IP per hour).
  - Strict input sanitization and length limits on the message field (max 2,000 characters).
- **Contact Form Security & Delivery**:
  - All form submissions dispatch to Web3Forms API via asynchronous JSON/FormData POST.
  - Environment variable `FORM_ACCESS_KEY` must be securely configured in `.env.local`.
  - Maintain honeypot fields (`botcheck`) and client-side payload validation to eliminate automated spam.
  - Direct mailto coordinates (`maxbehzadi82@gmail.com`) remain as the primary manual fallback.

## 7. Version Control & SDD Commit Policy

- **Atomic Spec Commits**: Every git commit must package the application code changes alongside their respective `.md` specification updates (`TASKS.md`, `PROGRESS.md`).
- **Task ID References**: Commit messages must reference explicit task IDs (e.g., `feat(contact): integrate Web3Forms [TASK-409]`).
- **Pre-Push Validation**: Never push to remote without passing:
  1. `npx tsc --noEmit` (Zero type errors)
  2. `npm run build` (Clean production compilation)