---
name: Clinical Precision
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#424656'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#00ccf9'
  on-secondary-container: '#005266'
  tertiary: '#006732'
  on-tertiary: '#ffffff'
  tertiary-container: '#008342'
  on-tertiary-container: '#e2ffe3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#61ff97'
  tertiary-fixed-dim: '#32e27c'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
  surface-alt: '#F0F4F8'
  optimal-green: '#00D06C'
  alert-amber: '#FFB800'
  warning-red: '#FF4B4B'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  data-metric:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 64px
---

## Brand & Style
The design system is engineered for metabolic health and longevity, blending scientific authority with high-performance motivation. It targets a sophisticated audience that values data-driven wellness and clinical accuracy.

The visual style is **Corporate / Modern** with a focus on data density and extreme clarity. It borrows the premium aesthetics of high-end wearables—utilizing ample whitespace, precise grid systems, and a high-contrast interface that feels both medical-grade and technologically advanced. The emotional response is one of confidence, clarity, and progress.

## Colors
The palette is rooted in "Clinical Blue" to establish medical trust, supported by "Metabolic Teal" for a modern, energetic tech feel. 

- **Primary:** Used for main actions, active states, and primary branding.
- **Secondary:** Used for data visualizations, secondary accents, and highlighting metabolic trends.
- **Status Indicators:** Use a strict semantic system. `Optimal Green` represents metabolic efficiency, `Alert Amber` for caution/plateaus, and `Warning Red` for critical health metrics.
- **Surfaces:** Use `#FFFFFF` as the base background. Use `#F0F4F8` for secondary sectioning or card backgrounds to provide subtle contrast without introducing heavy borders.

## Typography
The system utilizes a dual-sans approach to maximize legibility and professional character.

- **Geist** is used for headlines and data metrics. Its technical, precise nature reinforces the "Clinical" brand pillars. Data metrics should always be bold to stand out against labels.
- **Inter** is used for all body copy and descriptions. It provides a neutral, highly readable foundation for dense health information.
- **Visual Hierarchy:** Maintain a strict 2:1 ratio for metric values vs. labels. For example, a "Blood Glucose" label in `label-sm` should sit above a numerical value in `data-metric`.

## Layout & Spacing
The layout follows an **8px linear scale** to ensure alignment across complex data sets. 

- **Grid:** A 12-column fluid grid for desktop and a 4-column grid for mobile.
- **Data Cards:** Content should be grouped into cards with a standard gutter of 16px. 
- **Whitespace:** Prioritize "breathe room" around critical health metrics. Avoid cramming multiple high-intensity data points into a single horizontal row on mobile; stack them to preserve readability.
- **Safe Zones:** Always maintain a minimum 24px margin from the screen edge on mobile devices.

## Elevation & Depth
The system uses **Tonal Layering** combined with **Ambient Shadows** to create a sophisticated sense of hierarchy.

- **Base Level (0):** The primary page background (`#FFFFFF`).
- **Level 1 (Cards):** Cards use a 1px border of `#F0F4F8` and a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)) to lift them from the background.
- **Level 2 (Modals/Popovers):** Higher elevation with a more pronounced shadow (0px 10px 30px rgba(0, 0, 0, 0.08)) to focus user attention.
- **Interactive Elements:** Buttons and interactive chips should feel tactile but flat, using subtle color shifts on hover rather than heavy drop shadows.

## Shapes
The shape language is modern and approachable, utilizing a **Rounded** (0.5rem base) philosophy to soften the clinical edge of the data.

- **Standard Elements:** Buttons, inputs, and small widgets use the base 8px (0.5rem) radius.
- **Data Cards:** Use `rounded-xl` (24px) for main content containers to create a distinct, high-end "product" feel.
- **Status Pills:** Should always be fully rounded (pill-shaped) to distinguish them from interactive buttons.

## Components
- **Buttons:** Primary buttons use a solid `Clinical Blue` fill with white text. Secondary buttons use a `Clinical Blue` outline with a transparent background.
- **Data Cards:** Must contain a header (label), the primary metric (Geist Bold), and a trend indicator (e.g., a small sparkline or percentage change in semantic colors).
- **Input Fields:** Minimalist style. Use a light gray border (#E2E8F0) that transitions to `Clinical Blue` on focus. Labels should be floating or positioned strictly above the field.
- **Status Indicators:** Small, circular dots or pill-shaped badges using `Optimal Green`, `Alert Amber`, or `Warning Red` to indicate health zones at a glance.
- **Chips:** Used for filtering metabolic categories (e.g., "Sleep", "Nutrition", "Activity"). These use the `surface-alt` background with a dark neutral text.
- **Charts:** Use `Clinical Blue` and `Metabolic Teal` for primary data lines. Grid lines in charts should be extremely faint (#F0F4F8) to keep the focus on the data trend.