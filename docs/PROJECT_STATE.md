# Portfolio Project State

Updated: 2026-10-03. Repository: `/Users/Max/Projects/portfolio-2025`.

## Project Goal

Refine the existing portfolio into a professional career showcase and a credible software/AI project-acquisition site, using controlled specifications and incremental work. Future inquiries go through a server-validated form to maxbehzadi82@gmail.com with visitor Reply-To.

## Current Phase

Documentation/specification initialization complete. Phase 0 baseline execution is next and not complete. No UI implementation phase has started in this session.

## Current Task

Structural Audit and Safe Cleanup Preparation (STRUCTURAL AUDIT / BASELINE CLEANUP), scoped in CURRENT_TASK.md. Queued after the required first-run documentation stop. Preparation only: no redesign, removal, source cleanup or new features.

## Completed

- Read actual application entrypoints, section/support components, content data, styles/configuration, package manifests/locks and likes backend.
- Established actual render path, unused/disconnected candidates and source-level accessibility/performance concerns.
- Expanded existing PORTFOLIO_SPEC business/contact brief; populated previously empty DESIGN_SYSTEM.
- Created REFACTOR_PLAN, PROJECT_STATE, CURRENT_TASK and WORKFLOW.
- Documented services requirements, content dispositions, proposed IA/design direction and email provider comparison using official documentation.
- Verified documentation coverage/internal links and source-file preservation in the final documentation pass. This is not runtime/visual verification.

## In Progress

No application implementation in progress. Current-task baseline checks and cleanup preparation remain to be executed in a subsequent task.

## Next

1. Execute the read-only structural/baseline task; record actual compiler/lint/build results and blockers.
2. Define the smallest exact cleanup change set from evidence, without changing visuals/facts.
3. Review pending content/design decisions before Phase 2 or section work.

## Approved Decisions

Explicit user instructions, not inferred approvals:

- First run creates/populates exactly six workflow/specification documents and stops.
- No application source changes, package installation/removal, contact API or AI section implementation in this pass.
- Product serves both hiring and project inquiries; future services cover the five requested AI categories plus custom software/MVP work.
- Future contact requires Name, Email, Message; Company and Project Type are recommended optional fields.
- Inquiry recipient: maxbehzadi82@gmail.com; visitor email in Reply-To; secrets server-side.
- Factual integrity, accessibility, responsiveness, restrained dark professional direction, and no automatic whole-app rewrite.

## Pending Decisions

- Approve proposed IA (Projects before Experience) and visible heading “AI Solutions”.
- Approve representative design foundation: exact colors, typography/font count, card layout and navigation behavior.
- Confirm title/seniority, availability, years of experience, résumé currency and factual project/job claims.
- Confirm featured projects, employer/private-banking asset publication permission, numeric outcomes and project statuses.
- Confirm AZ-900 course versus certification, AZ-204 status (expected Q3 2026 is now past), and learning/skill-score treatment.
- Decide personal Marsi content prominence, code-profile presentation, Hub, animated favicon, TweaksPanel and ScrollArrow retention.
- Decide likes retention/removal independently of project presentation. Preserve current database until approved otherwise.
- Resend is recommended, not approved; confirm email provider, sending domain/account, deployment runtime, distributed rate-limit mechanism, privacy wording and retention.
- Confirm npm/package-lock authority; pnpm-lock.yaml currently has no dependency resolutions.
- Define lint/toolchain repair task if baseline confirms current script failure. No new library or package changes approved here.

## Known Issues

Source observations, not runtime test results:

- TopNav exists but is not mounted. Footer is inline in Contact.
- Contact currently offers email/social links only; no form, contact API or email provider integration exists.
- Projects uses four visible stacked swipe cards; full descriptions are clamped. Several icon-only image/external-link controls lack explicit accessible names.
- Experience essential details expand on mouse hover; touch/keyboard alternatives need work.
- CSS includes continuous decorative animation and mandatory desktop scroll snapping; no prefers-reduced-motion rule found in app/globals.css and no useReducedMotion found in inspected components.
- DogCarousel autoplays and pauses only on hover; arrow visibility is hover-based.
- Three.js is actively imported for an animated WebGL favicon; Fiber/Drei Background is disconnected. Hub is HTML/SVG/CSS, not a live Three scene. Starfield returns null.
- next.config.mjs disables image optimization and ignores TypeScript build errors despite tsconfig strict:true.
- package.json lint command is next lint; CLI compatibility is unverified. No typecheck/test script or dedicated test suite identified.
- Mongo connection throws on missing PORTFOLIO_DB_MONGODB_URI; no credential values read or printed. Likes route accepts arbitrary truthy IDs and has no observed rate limiting; optimistic UI does not reconcile HTTP errors.
- Stale credential expectation and unverifiable metrics are content-review items, not permission to edit facts.

## Technical Debt

Repeated SceneHead; duplicate mobile/toast helper locations; broad UI dependency inventory; any-typed project/contact data; presentation coordinates/colors mixed with content; hardcoded copy/arrays in About, DogCarousel, Hub, navigation, ScrollArrow, Contact and layout; possible obsolete modal/grid/constellation CSS; unimported styles/globals.css. Dead-code labels are candidates until complete usage checks. Whole page marked use client despite mostly static sections. No blanket removal authorized.

## Files of Interest

- app/page.tsx: default Portfolio client component and section composition.
- app/layout.tsx: metadata, Space Grotesk/Inter/JetBrains Mono, dark class, global CSS and favicon.
- lib/data.ts: PROFILE, eight EXPERIENCE entries, eleven PROJECTS entries, SKILLS/SKILL_CATS/SKILL_LINES, five EDUCATION entries, four LEARNING topics, CONTACT and NAV_NODES.
- components/{hero,about,experience,projects,skills,education,contact}.tsx: visible sections.
- components/navigation.tsx, scroll-arrow.tsx, tweaks-panel.tsx, dog-carousel.tsx, three/* and animate-ui/components/animate/code.tsx: supporting interactions.
- app/api/likes/route.ts and lib/mongodb.ts: portfolio database / likes collection; names act as project IDs.
- app/globals.css, styles/globals.css, tailwind.config.ts, components.json: styling and UI conventions.
- public/projects/*, me.jpg, marsi*.jpg and resume.pdf: content assets. Résumé content not reconciled in this source audit.
- package.json, package-lock.json, pnpm-lock.yaml, tsconfig.json, next.config.mjs: dependency and verification configuration.
- docs/PORTFOLIO_SPEC.md, DESIGN_SYSTEM.md, REFACTOR_PLAN.md, CURRENT_TASK.md and WORKFLOW.md: continuation instructions.

## Last Verification Status

Typecheck: NOT RUN in documentation-only pass. No script; installed local compiler identified. Next task: `./node_modules/.bin/tsc --noEmit --incremental false`.

Lint: NOT RUN. Existing command `npm run lint` delegates to `next lint`; capture actual result in Phase 0.

Build: NOT RUN. Existing `npm run build`; avoid generated-file changes during first-run docs-only work. Font/network and Mongo environment prerequisites unresolved. Build currently ignores type errors.

Tests: NOT CONFIGURED — no test script or dedicated suite identified; no tests run.

Browser/visual: NOT RUN. No claim about runtime rendering, measured contrast, responsive correctness or Core Web Vitals.

Documentation: six requested documents populated; section/link/phase coverage checked. Application/data/assets/package files compared against pre-write hashes; no changes by this pass. No packages installed and no database writes or emails sent.

## Session Notes

Initial git status already showed modified .DS_Store, public/.DS_Store and public/me.jpg; untracked .agents/, components/.DS_Store, docs/ and skills-lock.json. Preserve all of these. Existing PORTFOLIO_SPEC held a business/contact brief, DESIGN_SYSTEM was empty, and IMPLEMENTATION_PLAN/PORTFOLIO_AUDIT/PROGRESS were empty. The new six-file workflow is authoritative for future work; legacy files remain untouched. Recommendations are not approved implementation decisions. No baseline command output is available yet; do not invent successful checks on continuation.
