---
name: M·H·E Brutalist Wholesale
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#646464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system is built for M·H·E, a high-end clothing wholesaler that positions itself as an industry authority rather than just another vendor. The brand voice is unapologetic, direct, and elite.

The visual direction is **Brutalist Minimalism**. It leverages the raw honesty of industrial production combined with the sophisticated restraint of high fashion. The UI evokes a sense of "The Factory"—functional, structural, and powerful. We achieve this through extreme typographic scale, a strictly monochrome palette, and expansive whitespace that allows high-quality garment imagery to command the user's full attention. 

The emotional response should be one of immediate trust in the manufacturer’s technical superiority and a feeling of entering an exclusive, professional space.

## Colors

The palette is a high-contrast monochrome system. By default, the interface operates in **Dark Mode** to emphasize the premium, "edgy" nature of the brand.

- **Pure White (#FFFFFF):** Used for primary typography, impactful headlines, and key action borders. It represents clarity and the "finished product."
- **Deep Black (#000000):** The primary background color. It provides a void that makes imagery and white text pop with maximum intensity.
- **Dark Charcoal (#1A1A1A):** Used for subtle layering, input fields, and secondary containers to provide depth without breaking the monochrome aesthetic.

Color is intentionally absent to ensure that the colors of the clothing collections are the only vibrant elements in the user experience.

## Typography

The typographic strategy relies on a "High-Low" pairing.

**Headlines (Montserrat):** Use the heaviest weights (800-900) for hero sections. Tight letter spacing and aggressive sizing create the "impactful" look seen in the references. Headlines should feel structural and immovable.

**Body & Technical Text (JetBrains Mono):** This provides the "typewriter" or "spec sheet" aesthetic. It emphasizes the technical precision of the wholesale process. Use this for descriptions, manifestos, and data points.

**Contrast:** Always maintain a significant scale difference between headlines and body text to reinforce the brutalist hierarchy.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile.

- **Generous Whitespace:** Section gaps are intentionally oversized (160px+) to create a "gallery" feel.
- **Asymmetry:** Elements should occasionally break the expected grid alignment to create visual tension—for example, a headline spanning 10 columns while the body text below spans only 4 columns on the far right.
- **Alignment:** Use hard-left alignment for most text blocks to maintain a clean, technical edge. Horizontal rules (1px lines) should be used sparingly to divide major content phases.

## Elevation & Depth

In line with the brutalist aesthetic, depth is not conveyed through traditional shadows or blurs.

- **Flat Layering:** Z-index hierarchy is communicated through overlapping elements (e.g., text partially masking an image).
- **Hard Borders:** Containers use 1px or 2px solid white borders against the black background to define space.
- **Micro-Shadows:** Only used for "wow" effects on interactive hover states. Use a sharp, high-opacity white shadow (e.g., `4px 4px 0px #FFFFFF`) rather than a soft, diffused one.
- **Tonal Stepping:** Use the Dark Charcoal (#1A1A1A) for background cards to create a subtle "lift" from the deep black base.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Every element—buttons, image containers, input fields, and cards—must have 90-degree corners. This reinforces the industrial, "no-nonsense" factory aesthetic. Circular elements should only be used for specific functional icons (like a play button or a pagination dot) to provide a single point of organic contrast against the rigid grid.

## Components

**Buttons:**
Primary buttons are solid white rectangles with black Montserrat (Bold) text. No rounded corners. Hover state: Invert to black background with a 1px white border. Secondary buttons are ghost-style (1px white border).

**Input Fields:**
Minimalist design. A single 1px white bottom border. The label uses `technical-sm` (Mono) and sits above the line. Error states are indicated by the border turning to a high-visibility gray (do not use red unless absolutely necessary for accessibility).

**Cards (Product/Editorial):**
Cards have no visible borders by default. Depth is achieved through the imagery itself. On hover, a 1px white outline appears, or the image zooms slightly within its sharp-edged frame.

**Images:**
High-quality photography is a core component. Images should be treated as architectural elements. Use full-bleed widths or extreme vertical crops.

**Navigation:**
A persistent top-bar with a "raw" feel. Use `label-caps` for links. The logo (M·H·E) should be the dominant anchor point.

**Micro-interactions:**
Transitions should be fast and linear (e.g., 150ms). Use "stutter" or "reveal" animations for text to mimic a technical terminal or a printing press.