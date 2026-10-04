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
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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

This design system expresses the credibility, intellectual rigor, and understated poise of a veteran systems architect and principal software engineer[cite: 4]. It rejects modern synthetic portfolio tropes: generic glowing badges, decorative skill progress meters, rounded floating cards, and gratuitous code window chromes.

The design movement is **Editorial Minimalist meets Swiss Functionalism**[cite: 4]. Structure, spatial proportion, horizontal hairline rules, and strict typographic hierarchy govern the interface rather than heavy container blocks[cite: 4]. The emotional atmosphere is calm, authoritative, deeply technical, and enduring[cite: 4].

## Colors

The palette is rooted in deep, warm volcanic tones rather than hollow slate or pitch black[cite: 4]. 

- **Background & Canvas (`#0c0e12` / `#0F1115`)**: A warm obsidian ground with high color depth that eliminates harsh contrast against text[cite: 4, 6]. Elevated panel surfaces settle into `#15181E` / `#16191f` with subtle hairline divider strokes at `#232730`[cite: 4, 6].
- **Text & Foreground**: Primary reading text uses `#ECEFF4` (warm chalk), secondary technical commentary uses `#9CA3AF`, and tertiary metadata uses `#667085`[cite: 4, 6].
- **Accents**: 
  - Primary (`#D99B53`): An understated architectural bronze/amber used sparingly for operational state, key impact metrics, and active anchors[cite: 4, 6].
  - Secondary (`#768E9D`): Muted structural steel blue reserved for technical tags, commit hashes, and archival specs[cite: 4].

## Typography

1. **Newsreader (Display/Headlines)**: Brings literary gravity to statements and section titles[cite: 4, 6]. Headline-lg is calibrated to `32px` on desktop (`>= 1024px`) to guarantee single-line inline presentation without awkward line wraps[cite: 4].
2. **Geist / Inter (Body/Narrative)**: Neutral, hyper-legible sans-serif for architectural readouts and project impact narratives[cite: 4, 6].
3. **JetBrains Mono (Metadata/Labels)**: Strict fixed-width numerals, system metrics, dates, and repository tags[cite: 4, 6].

## Layout, Depth & Geometry

- **Geometry & Border Radius**:
  - Cards & Panels: Subtle, refined architectural rounding (`rounded-lg` / `8px` or `rounded-md` / `6px`) to avoid harsh blockiness while maintaining structural balance.
  - Buttons & Inputs: Subtle `rounded-md` (`4px` to `6px`).
  - Image Frames: `rounded-md` (`6px`) with 1px hairline border (`#232730`).
- **Elevation & Outlines**: Flat surfaces elevated via tonal shifts (`#16191f`), bounded by 1px hairline solid borders (`#232730` or `rgba(255,255,255,0.08)`)[cite: 4, 6].

## Components

### Buttons & Interactive Links
- **Primary CTA Button**: Rectangular block (`padding: 0.625rem 1.25rem`), subtle radius (`rounded-md` / `6px`), solid `#ECEFF4` fill with `#0F1115` text in `label-md` (`font-mono font-medium text-xs tracking-wider uppercase`)[cite: 4]. Hover state shifts immediately to `#D99B53` background[cite: 4].
- **Secondary / Outline Button**: Subtle radius (`rounded-md` / `6px`), transparent background with 1px solid hairline border (`#232730`), text in `#ECEFF4`[cite: 4, 6]. Hover shifts border and text to `#D99B53`[cite: 4].
- **Tertiary / Inline Link**: Monospaced anchor text (`label-md`) coupled with an explicit non-breaking arrow `→`[cite: 4].

### Cards & Container Panels
- **Structure**: Clean subtle radius (`rounded-lg` / `8px`), background surface `#16191f` / `#15181E`, bounded by a 1px solid hairline border in `#232730`[cite: 4, 6].
- **Hover Transitions**: Subtle tonal shift to `#1a1e26` with hairline border highlighting to `#373d4a` or `#D99B53`[cite: 4].

### Section Eyebrows & Status Indicators
- **Unbordered Plain Typography**: No pill containers, no capsules, and no outer borders[cite: 4].
- **Styling**: Rendered as an unbordered inline line in `label-sm` or `label-md` using `JetBrains Mono` (`font-mono text-xs uppercase tracking-widest`)[cite: 4]. Text color set to primary accent bronze (`#D99B53`) or muted secondary steel (`#768E9D`)[cite: 4].

### Form Inputs & Fields
- Subtle rounded edges (`rounded-md` / `4px`) or clean border-bottom inputs, bottom/border stroke at 1px `#232730`, focusing to 1px `#D99B53`[cite: 4].

### Hero Portrait Inspection Modal (Hover-Expanded)
- **Geometry & Framing**: Subtle `rounded-lg` (`8px`) border radius[cite: 4].
- **Border**: 1px hairline stroke `#232730` in normal state, crisp `#D99B53` in expanded state[cite: 4].
- **Backdrop**: `rgba(12, 14, 18, 0.75)` with `backdrop-filter: blur(12px)`[cite: 4, 6].
- **Motion & Easing**: 200ms linear or crisp entrance/exit curve (`cubic-bezier(0.16, 1, 0.3, 1)`)[cite: 4].