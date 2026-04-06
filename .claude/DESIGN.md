# Design System Inspiration of Intercom

## 1. Visual Theme & Atmosphere

Intercom's website is a warm, confident customer service platform that communicates "AI-first helpdesk" through a clean, editorial design language. The page operates on a warm off-white canvas (`#faf9f6`) with off-black (`#111111`) text, creating an intimate, magazine-like reading experience. The signature Fin Orange (`#ff5600`) — named after Intercom's AI agent — serves as the singular vibrant accent against the warm neutral palette.

The typography uses Saans — a custom geometric sans-serif with aggressive negative letter-spacing (-2.4px at 80px, -0.48px at 24px) and a consistent 1.00 line-height across all heading sizes. This creates ultra-compressed, billboard-like headlines that feel engineered and precise. Serrif provides the serif companion for editorial moments, and SaansMono handles code and uppercase technical labels. MediumLL and LLMedium appear for specific UI contexts, creating a rich five-font ecosystem.

What distinguishes Intercom is its remarkably sharp geometry — 4px border-radius on buttons creates near-rectangular interactive elements that feel industrial and precise, contrasting with the warm surface colors. Button hover states use `scale(1.1)` expansion, creating a physical "growing" interaction. The border system uses warm oat tones (`#dedbd6`) and oklab-based opacity values for sophisticated color management.

**Key Characteristics:**

- Warm off-white canvas (`#faf9f6`) with oat-toned borders (`#dedbd6`)
- Saans font with extreme negative tracking (-2.4px at 80px) and 1.00 line-height
- Fin Orange (`#ff5600`) as singular brand accent
- Sharp 4px border-radius — near-rectangular buttons and elements
- Scale(1.1) hover with scale(0.85) active — physical button interaction
- SaansMono uppercase labels with wide tracking (0.6px–1.2px)
- Rich multi-color report palette (blue, green, red, pink, lime, orange)
- oklab color values for sophisticated opacity management

## 2. Color Palette & Roles

### Primary

- **Off Black** (`#111111`): `--color-off-black`, primary text, button backgrounds
- **Pure White** (`#ffffff`): `--wsc-color-content-primary`, primary surface
- **Warm Cream** (`#faf9f6`): Button backgrounds, card surfaces
- **Fin Orange** (`#ff5600`): `--color-fin`, primary brand accent
- **Report Orange** (`#fe4c02`): `--color-report-orange`, data visualization

### Report Palette

- **Report Blue** (`#65b5ff`): `--color-report-blue`
- **Report Green** (`#0bdf50`): `--color-report-green`
- **Report Red** (`#c41c1c`): `--color-report-red`
- **Report Pink** (`#ff2067`): `--color-report-pink`
- **Report Lime** (`#b3e01c`): `--color-report-lime-300`
- **Green** (`#00da00`): `--color-green`
- **Deep Blue** (`#0007cb`): Deep blue accent

### Neutral Scale (Warm)

- **Black 80** (`#313130`): `--wsc-color-black-80`, dark neutral
- **Black 60** (`#626260`): `--wsc-color-black-60`, mid neutral
- **Black 50** (`#7b7b78`): `--wsc-color-black-50`, muted text
- **Content Tertiary** (`#9c9fa5`): `--wsc-color-content-tertiary`
- **Oat Border** (`#dedbd6`): Warm border color
- **Warm Sand** (`#d3cec6`): Light warm neutral

## 3. Typography Rules

### Font Families

- **Primary**: `Saans`, fallbacks: `Saans Fallback, ui-sans-serif, system-ui`
- **Serif**: `Serrif`, fallbacks: `Serrif Fallback, ui-serif, Georgia`
- **Monospace**: `SaansMono`, fallbacks: `SaansMono Fallback, ui-monospace`
- **UI**: `MediumLL` / `LLMedium`, fallbacks: `system-ui, -apple-system`

### Hierarchy

| Role            | Font      | Size        | Weight  | Line Height  | Letter Spacing        |
| --------------- | --------- | ----------- | ------- | ------------ | --------------------- |
| Display Hero    | Saans     | 80px        | 400     | 1.00 (tight) | -2.4px                |
| Section Heading | Saans     | 54px        | 400     | 1.00         | -1.6px                |
| Sub-heading     | Saans     | 40px        | 400     | 1.00         | -1.2px                |
| Card Title      | Saans     | 32px        | 400     | 1.00         | -0.96px               |
| Feature Title   | Saans     | 24px        | 400     | 1.00         | -0.48px               |
| Body Emphasis   | Saans     | 20px        | 400     | 0.95         | -0.2px                |
| Nav / UI        | Saans     | 18px        | 400     | 1.00         | normal                |
| Body            | Saans     | 16px        | 400     | 1.50         | normal                |
| Body Light      | Saans     | 14px        | 300     | 1.40         | normal                |
| Button          | Saans     | 16px / 14px | 400     | 1.50 / 1.43  | normal                |
| Button Bold     | LLMedium  | 16px        | 700     | 1.20         | 0.16px                |
| Serif Body      | Serrif    | 16px        | 300     | 1.40         | -0.16px               |
| Mono Label      | SaansMono | 12px        | 400–500 | 1.00–1.30    | 0.6px–1.2px uppercase |

## 4. Component Stylings

### Buttons

**Primary Dark**

- Background: `#111111`
- Text: `#ffffff`
- Padding: 0px 14px
- Radius: 4px
- Hover: white background, dark text, scale(1.1)
- Active: green background (`#2c6415`), scale(0.85)

**Outlined**

- Background: transparent
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: 4px
- Same scale hover/active behavior

**Warm Card Button**

- Background: `#faf9f6`
- Text: `#111111`
- Padding: 16px
- Border: `1px solid oklab(... / 0.1)`

**CTA Button Pair**

Always place Primary Dark + Outlined side by side. Never two dark buttons together.

```html
<button class="btn-primary">Start free trial</button>
<button class="btn-outline">View demo</button>
```

- Gap between pair: `16px`
- Hierarchy: dark > outline, always in that order

### Cards & Containers

- Background: `#faf9f6` (warm cream)
- Border: `1px solid #dedbd6` (warm oat)
- Radius: 8px
- No visible shadows

**Orange Accent Card** (hero / profile cards)

- Top border stripe: `height: 4px; background: #ff5600; width: 100%`
- Gives visual anchor without color overuse
- Used on featured/hero cards only

### Navigation

- Saans 16px for links
- Off-black text on white
- Small 4px–6px radius buttons
- Orange Fin accent for AI features

### Announcement Bar

Thin full-width bar pinned above the navigation.

- Background: `#111111`
- Text: `#ffffff`, `font-size: 13px`, centered
- Link/CTA text: `#ff5600`, underline on hover
- Height: `~40px`, `padding: 0 16px`
- One message only — no carousel, no close button

```html
<div class="announcement-bar">
  The age of vertical models is here — meet Fin Apex 1.0
  <a href="#">Learn more →</a>
</div>
```

### Category Pill (Section Label)

Uppercase label that precedes a section heading. Appears above every major section.

- Text color: `#ff5600` (accent sections) or `#7b7b78` (neutral sections)
- Font: `SaansMono` or fallback monospace, `11–12px`, `letter-spacing: 1.2px`, `uppercase`
- No background, no border — pure text only
- Margin-bottom: `12px` before the heading

```html
<p class="category-pill">FIN AI AGENT</p>
<h2>A world-class AI Agent</h2>
```

### Feature Accordion

Expandable feature list with `+` / `−` indicator.

- Each row: `border-bottom: 1px solid #dedbd6`
- Padding: `16–20px` vertical, `0` horizontal
- Collapsed: show title + `+` icon right-aligned
- Expanded: show title + `−` icon + body text with `padding-top: 12px`
- Body text: `font-size: 14px`, `color: #7b7b78`, `line-height: 1.6`
- Transition: `max-height` with `ease-out 200ms`

### Testimonial / Quote Block

Four-part quote composition: large quotation mark, quote body, attribution name + role, portrait.

- Quote text: `font-size: 20px`, `line-height: 1.5`, `color: #111111`, NOT italic
- Attribution: `font-size: 14px`, `color: #7b7b78`
- Portrait: `border-radius: 50%`, `width: 56–64px`, `height: 56–64px`
- Quotation mark: decorative `"`, `font-size: 80px`, `color: #ff5600`, `line-height: 0`
- Container options:
  - Light: `background: #faf9f6`, `border: 1px solid #dedbd6`, `border-radius: 8px`
  - Dark: `background: #111111`, text `#ffffff`, portrait border `2px solid #ff5600`

### Logo Ticker (Marquee)

Horizontal infinite scroll of client logos.

- Container: `overflow: hidden`, `background: #faf9f6`
- Logos: `filter: grayscale(100%)`, `opacity: 0.5`, hover `opacity: 1 grayscale(0%)` with `transition: 200ms`
- Gap between logos: `48–64px`
- Animation: `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`, `linear`, `infinite`
- Speed: `~40s` for full cycle
- Duplicate the logo list to create seamless loop

```css
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.ticker-track {
  display: flex;
  gap: 60px;
  animation: marquee 40s linear infinite;
  width: max-content;
}
```

### Background Photo + Product UI Overlay

Full-bleed editorial photo as section background with product screenshot layered on top.

- Background image: `object-fit: cover`, `filter: brightness(0.85)`, fills container
- Product UI card: `position: absolute` or `z-index: 10`, `border-radius: 8px`, `box-shadow: 0 24px 48px rgba(0,0,0,0.18)`
- Container: `position: relative`, `overflow: hidden`
- Image subjects: natural/organic (kites, ocean, sky, foliage) — never stock office photos
- Minimum section height: `480px` desktop, `320px` mobile

### Footer Mega-Menu

Multi-column footer with grouped link categories.

- Layout: `5–6 columns`, `gap-x: 40–48px`, `padding: 60–80px 0`
- Group heading: `font-size: 11px`, `letter-spacing: 1.2px`, `uppercase`, `color: #111111`, `font-weight: 500`, `margin-bottom: 16px`
- Links: `font-size: 14px`, `color: #7b7b78`, `hover: color #111111`, line-height `2.0` for breathing room
- Bottom row: copyright left, legal links right (`Terms · Privacy · Security`), separated by `border-top: 1px solid #dedbd6`
- Column categories used by Intercom: HELPDESK FEATURES / FIN FEATURES / PRICING / LEARN / EVALUATE / SUPPORT / COMPANY / PROGRAMS

## 5. Layout Principles

### Spacing: 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 64px, 80px, 96px

### Border Radius: 4px (buttons), 6px (nav items), 8px (cards, containers)

### Section Anatomy

Every major section follows this structure:

```
[Category Pill]         ← SaansMono 12px, #ff5600 or #7b7b78, uppercase
[Section Heading]       ← 54px, leading-none, tracking -1.6px
[Sub-copy]              ← 16–20px, color #7b7b78, max-width 560px
[CTA Button Pair]       ← Primary Dark + Outlined, gap 16px
[Visual]                ← Photo overlay, product UI, or illustration
```

### Feature Section Layout (Alternating)

Sections alternate between:

- **Left text + Right visual**
- **Right text + Left visual**

Each panel: `min-height: 480px`, `padding: 80px 0`, divider `border-top: 1px solid #dedbd6`.

## 6. Depth & Elevation

Minimal shadows. Depth through warm border colors and surface tints.

- **Level 0** (flat): No shadow. Cards on cream background.
- **Level 1** (raised): Product UI over photo — `box-shadow: 0 24px 48px rgba(0,0,0,0.18)`
- **Level 2** (floating): Tooltips/dropdowns — `box-shadow: 0 8px 24px rgba(0,0,0,0.12)`

## 7. Motion & Animation

### Principles

- Prefer `ease-out` for enter animations, `ease-in` for exits
- Never animate color alone — pair with transform
- Respect `prefers-reduced-motion`: wrap all animations in the media query

### Defined Animations

| Name          | Trigger    | Transform                        | Duration | Easing   |
| ------------- | ---------- | -------------------------------- | -------- | -------- |
| Button hover  | `:hover`   | `scale(1.1)`                     | 150ms    | ease-out |
| Button active | `:active`  | `scale(0.85)`                    | 100ms    | ease-in  |
| Fade in up    | On mount   | `opacity 0→1, translateY 12px→0` | 400ms    | ease-out |
| Logo ticker   | Continuous | `translateX(-50%)`               | 40s      | linear   |
| Accordion     | Click      | `max-height 0→auto`              | 200ms    | ease-out |
| Tab switch    | Click      | `opacity 0→1`                    | 250ms    | ease-out |

### Staggered Entry

When multiple cards/items enter the viewport, delay each by `80–100ms`:

```css
li:nth-child(1) {
  animation-delay: 0ms;
}
li:nth-child(2) {
  animation-delay: 100ms;
}
li:nth-child(3) {
  animation-delay: 200ms;
}
```

## 8. Do's and Don'ts

### Do

- Use Saans with 1.00 line-height and negative tracking on all headings
- Apply 4px radius on buttons — sharp geometry is the identity
- Use Fin Orange (#ff5600) for AI/brand accent only
- Apply scale(1.1) hover on buttons
- Use warm neutrals (#faf9f6, #dedbd6)
- Always pair CTA buttons: Primary Dark + Outlined
- Place a Category Pill above every major section heading
- Use grayscale logos for the ticker; color on hover only
- Use organic/natural photography (sky, water, foliage) for backgrounds
- Use a 4px orange top-stripe on featured/hero cards

### Don't

- Don't round buttons beyond 4px
- Don't use Fin Orange decoratively — it signals accent/brand only
- Don't use cool gray borders — always warm oat tones
- Don't skip the negative tracking on headings
- Don't use two Primary Dark buttons side by side
- Don't use stock office photography — only natural, editorial imagery
- Don't add drop shadows to cards on the warm cream background
- Don't use the announcement bar for more than one message at a time

## 9. Responsive Behavior

Breakpoints: 425px, 530px, 600px, 640px, 768px, 896px

### Mobile Adaptations

- Hero: single column, heading scales from 80px → 40px
- Feature sections: stack vertically, visual moves below text
- Footer mega-menu: collapse to 2 columns, then 1 on mobile
- Logo ticker: reduce speed to 25s on mobile
- Announcement bar: truncate text with `…` if needed, keep link visible
- Accordion: always visible on mobile (no hover states)

## 10. Agent Prompt Guide

### Quick Color Reference

- Text: Off Black (`#111111`)
- Background: Warm Cream (`#faf9f6`)
- Accent: Fin Orange (`#ff5600`)
- Border: Oat (`#dedbd6`)
- Muted: `#7b7b78`

### Component Prompt Templates

**Hero Section**

> "Warm cream (#faf9f6) canvas. Category pill 'BLOG' in SaansMono 12px #ff5600 uppercase tracking-widest. H1: 80px weight 400 leading-none tracking -2.4px #111111. Sub-copy: 20px #7b7b78. CTA pair: dark button (#111111, 4px radius, hover scale(1.1)) + outlined button. Right side: editorial photo mosaic."

**Feature Card with Orange Stripe**

> "Card: background #faf9f6, border 1px solid #dedbd6, radius 8px. Orange top stripe 4px full-width #ff5600. Category pill above heading inside card. Body text 14px #7b7b78."

**Testimonial Block**

> "Quote: decorative large ' in #ff5600. Quote body 20px #111111 not italic. Attribution 14px #7b7b78. Circular portrait 60px with 2px #ff5600 border. Background #faf9f6, border 1px solid #dedbd6, radius 8px."

**Announcement Bar**

> "Full-width bar, background #111111, text white 13px centered. Link 'Learn more →' in #ff5600. Height 40px."

**Logo Ticker**

> "Overflow hidden container. Logos grayscale opacity-50, hover full color. Gap 60px. CSS marquee 40s linear infinite. Duplicate list for seamless loop."
