---
name: Architectural Systems & Editorial Engineering
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#d5c3b3'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#9e8e7f'
  outline-variant: '#514538'
  surface-tint: '#fcb96e'
  primary: '#fcb96e'
  on-primary: '#482900'
  primary-container: '#d99b53'
  on-primary-container: '#593400'
  inverse-primary: '#855310'
  secondary: '#b1cada'
  on-secondary: '#1b3340'
  secondary-container: '#324a57'
  on-secondary-container: '#a0b9c8'
  tertiary: '#8ecef7'
  on-tertiary: '#00344b'
  tertiary-container: '#6fafd7'
  on-tertiary-container: '#00425d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddbb'
  primary-fixed-dim: '#fcb96e'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#cde6f7'
  secondary-fixed-dim: '#b1cada'
  on-secondary-fixed: '#041e2a'
  on-secondary-fixed-variant: '#324a57'
  tertiary-fixed: '#c6e7ff'
  tertiary-fixed-dim: '#8ecef7'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6b'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-tablet: 1.25rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses the credibility, intellectual rigor, and understated poise of a veteran systems architect and principal software engineer. It rejects modern synthetic portfolio tropes: generic glowing badges, decorative skill progress meters, rounded floating cards, and gratuitous code window chromes.

The design movement is **Editorial Minimalist meets Swiss Functionalism**. Structure, spatial proportion, horizontal hairline rules, and strict typographic hierarchy govern the interface rather than heavy container blocks. Every visual mark serves attribution, legibility, and architectural clarity. The emotional atmosphere is calm, authoritative, deeply technical, and enduring.

## Colors

The palette is rooted in deep, warm volcanic tones rather than hollow slate or pitch black. 

- **Background & Canvas (`#0F1115`)**: A warm obsidian ground with high color depth that eliminates harsh contrast against text. Elevated panel surfaces settle into `#15181E` with subtle hairline divider strokes at `#232730`.
- **Text & Foreground**: Primary reading text uses `#ECEFF4` (warm chalk), secondary technical commentary uses `#9CA3AF`, and tertiary metadata uses `#667085`.
- **Accents**: 
  - Primary (`#D99B53`): An understated architectural bronze/amber used sparingly for operational state, key impact metrics, and active anchors.
  - Secondary (`#768E9D`): A muted structural steel blue reserved for technical tags, commit hashes, and archival specs.

Never employ high-saturation neon glow effects, cyan drop-shadows, or saturated gradient text fills.

## Typography

Typography establishes tension between high-craft editorial thinking and uncompromising engineering precision:

1. **Newsreader (Display/Headlines)**: Brings an authoritative, literary gravity to personal philosophies, mission statements, and section intros. Set with regular weight and subtle tight tracking.
2. **Geist (Body/Narrative)**: Neutral, hyper-legible neo-grotesque sans-serif optimized for deep architectural readouts, project impact narratives, and post-mortems.
3. **JetBrains Mono (Metadata/Labels)**: Strict fixed-width numerals, system metrics, dates, repository tags, and system constraints. Set exclusively in medium/regular weights with generous tracking.

## Layout & Spacing

The layout is an asymmetric, structured grid anchored by a maximum content container of `1180px`. The composition prioritizes quiet margin breathing room over packed dashboard grids.

- **Desktop (1024px+)**: 12-column layout. Left columns (cols 1–4) regularly hold sticky section nomenclature, timelines, or primary meta details, while right columns (cols 5–12) carry deep technical writing, architectural tables, and deliverables.
- **Tablet (768px – 1023px)**: 8-column layout. Sidebar annotations reflow into structured horizontal preambles directly above primary content segments.
- **Mobile (< 768px)**: 4-column single-stream editorial stack. System parameters fold into responsive key-value lists.

Vertical pacing adheres strictly to multiples of `0.5rem`, using `space-xl` (3rem) and larger section breaks (`5rem` to `7rem`) separated by hairline horizontal rules rather than boxed cards.

## Elevation & Depth

This system avoids layered shadows, skeuomorphic surface bevels, and frosted backdrop blurs. Depth is achieved via **tonal stacking and hairline demarcation**:

- **Ground**: Base canvas resting at `#0F1115`.
- **Structural Outlines**: 1px solid hairline dividers (`#232730`) create clean linear separations between row items, tables, and major hierarchy shifts.
- **Elevated Surfaces**: Interactive rows, expanded drawer contexts, or code inspections utilize flat tonal shifts to `#15181E`, framed with a quiet `#2C323D` border.
- **Focus & States**: Interactive elements never scale upward via spring animations; they trigger instantaneous or crisp 120ms linear color adjustments and subtle underline shifts.

## Shapes

The design system enforces architectural sharpness with `0px` radius geometry. 

All interactive buttons, index tables, status indicators, and framing elements use razor-sharp rectangular perimeters. This crisp profile reinforces structural stability, engineering rigour, and classical print editorial tradition.

## Components

### Buttons & Interactive Links
- **Primary Action**: Crisp rectangular block (`padding: 0.625rem 1.25rem`), `#ECEFF4` solid fill with `#0F1115` text in `label-md`. Hover state shifts immediately to `#D99B53`.
- **Tertiary / Inline Link**: Monospaced anchor text (`label-md`) coupled with an explicit non-breaking arrow `->` and an underline positioned 4px below baseline with 30% border opacity, sharpening to 100% on hover.

### Index / Project Registry (Table View)
- Replaces generic image cards with a dense, comprehensive architectural registry.
- Standard 5-column table structure: `Year`, `System / Project Name`, `Domain / Scope`, `Key Architecture / Tech`, `Reference Link`.
- Top and bottom bounded by 1px rules (`#232730`). Row items transition to `#15181E` on hover with key metrics highlighted in bronze (`#D99B53`).

### Chronological Experience Ledger
- Linear vertical timeline without floating bubble nodes or ornamental dots.
- Date ranges set in `label-sm` along a persistent left column; organization, position, and architectural impact summary sit in the parallel right column.
- Bullet points are replaced with em-dashes (`—`) in muted secondary steel tone (`#768E9D`).

### Technical Metadata & Chips
- Eliminates bright pill badges. Replaced with bracketed, unrounded plain text labels: `[ Distributed Systems ]`, `[ raft / consensus ]`.
- Rendered in `label-sm` using `#768E9D` text on transparent backgrounds.

### Form Inputs & Fields
- Monospaced, border-bottom-only inputs without outer rounded frames.
- Bottom border rests at 1px `#232730`, focusing to 1px `#D99B53` with zero glow radius. Labels float consistently above in uppercase `label-sm`.

### Technical Proof Artifacts
- When system topology or raw configurations are shown, they are presented inside an unadorned terminal pane: flat `#0B0C0E` background, 1px `#232730` stroke, strictly monospaced text, without faux macOS traffic-light buttons.