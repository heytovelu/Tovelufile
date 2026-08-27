# TOVELU MASTER DESIGN SYSTEM (TDS-GEMINI 2.0)
## Permanent Platform Standard • Constitutional Governance: LAW-001

> [!IMPORTANT]
> **DESIGN SPECIFICATION LOCKED BY FOUNDER MANDATE (2026-08-28)**:
> 1. **Desktop, Laptop, and Tablet Devices (Viewport $\ge$ 768px)**: MUST ALWAYS consume and render the **Desktop Google Gemini Design Architecture** (`desktop-design-system.html`).
> 2. **Mobile Phones & Mobile Web App (Viewport < 768px)**: MUST ALWAYS consume and render the **Mobile Google Gemini Design Architecture** (`mobile-design-system.html`).
> 3. **Logo & Favicon**: The official Tovelu Mitosis Bio-Cell logo in bright electric cyan (`#00C0FF` ➔ `#0062FF`) and luminous emerald (`#00F5A0` ➔ `#00D06C`) with razor-sharp zero-blur rendering (`filter: none; shape-rendering: geometricPrecision`).

---

## 1. DEVICE ADAPTATION MATRIX

| Device Category | Viewport Breakpoint | Target Design Architecture | Key Layout Components |
| :--- | :--- | :--- | :--- |
| **Desktop Monitors** | `> 1024px` | **Desktop TDS-GEMINI** | Full Sidebar Navigation Rail, 4-Column Action Grids, Side-by-Side Clinical Telemetry, Floating Command Bar |
| **Laptops** | `1024px - 1440px` | **Desktop TDS-GEMINI** | Full Sidebar Navigation Rail, 4-Column Action Grids, Side-by-Side Clinical Telemetry, Floating Command Bar |
| **Tablets (iPads / Android)** | `768px - 1024px` | **Desktop TDS-GEMINI (Tablet Mode)** | Collapsible Sidebar Rail, 2-to-4 Column Adaptive Action Cards, Dual Telemetry Panels |
| **Smartphones (iPhone / Android)** | `< 768px` | **Mobile TDS-GEMINI** | Horizontal Touch Swipe Protocol Rail, 56px 1-Tap Touch Cards, Inline Voice Orb, Docked 5-Tab Bottom Bar |
| **PWA / Mobile Web App** | `Standalone / Mobile` | **Mobile TDS-GEMINI** | Full Edge-to-Edge Native Mobile App Interface with Safe-Area Inset Support |

---

## 2. OFFICIAL TOVELU BRAND & LOGO LOCKUP

- **Mitosis Bio-Cell SVG Geometry**:
  - Left Organic Crescent: Linear Gradient (`#00C0FF` ➔ `#0062FF`)
  - Right Organic Crescent: Linear Gradient (`#00F5A0` ➔ `#00D06C`)
  - Center Nucleus: Solid Vivid Emerald Circle (`#00F5A0`, `r="8.5"`)
  - Rendering Rule: `shape-rendering="geometricPrecision"; filter: none !important;` (Zero blur / zero fuzzy shadow on light and dark backgrounds).
- **Wordmark**: `tovelu` in `Ubuntu 500` (Humanist geometric balance).
- **App Icon Favicon**: Real Mitosis Bio-Cell SVG embedded inside a 512x512 master squircle (`#131314` background).

---

## 3. COLOR PALETTE (BRIGHT LUMINOUS GEMINI)

| Token Name | CSS Variable | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Electric Cyan Blue** | `--gemini-sparkle-blue` | `#0091FF` / `#1A73E8` | Primary brand actions, links, active state indicators |
| **Luminous Emerald** | `--gemini-vitality-emerald`| `#00F5A0` / `#00D06C` | Epigenetic age savings, metabolic success, clinical milestones |
| **Sparkle Sky** | `--gemini-sparkle-sky` | `#8AB4F8` | Holographic secondary accents & voice wave spectrum |
| **Vivid Purple** | `--gemini-sparkle-purple`| `#9B72CB` / `#A855F7` | Gemini multi-color holographic gradient stop |
| **Vibrant Pink** | `--gemini-sparkle-pink` | `#D96570` / `#FF4081` | Gemini multi-color holographic gradient stop |
| **Day Porcelain (Light BG)**| `--gemini-bg` | `#F0F4F9` / `#FFFFFF` | Default canvas background for daylight biological focus |
| **Night Obsidian (Dark BG)**| `--gemini-bg-dark` | `#131314` / `#1E1F20` | OLED dark mode for circadian melatonin preservation |

---

## 4. TYPOGRAPHY SCALE

- **Font Families**:
  - Brand Display: `'Google Sans Display', 'Google Sans', sans-serif`
  - Body & UI: `'Google Sans Text', 'Roboto', sans-serif`
  - Brand Wordmark: `'Ubuntu', sans-serif`
  - Formula & Telemetry: `'JetBrains Mono', monospace`
- **Headings**:
  - `Display Large`: 48px – 54px, Weight 800, Shimmering Gemini Gradient (`gemini-gradient-heading`)
  - `Headline Medium`: 24px – 28px, Weight 700
  - `Body Regular`: 14px – 16px, Weight 400, Line Height 1.6
  - `Label Bold`: 11px – 13px, Weight 700, Letter Spacing 0.05em

---

## 5. FORM CONTROLS & 1-TAP ARCHITECTURE

1. **1-Tap Option Cards (`.gemini-option-card`)**:
   - 56px minimum touch height on mobile.
   - Circular radio indicator with smooth checkmark fill on click.
   - Selected state: Light blue container highlight (`#D3E3FD`) + 2px blue ring.
2. **1-Tap Sleep/Wake Preset Chips (`.gemini-chip`)**:
   - Preset pills for instant selection (`06:00 AM`, `06:30 AM`, `10:30 PM`, `11:00 PM`).
   - Eliminates 100% of AM/PM keyboard entry errors.
3. **Floating Prompt Capsule (`.gemini-prompt-box`)**:
   - Squircle capsule with photo/doc attachment `+`, real-time mic, and enter-to-send action.

---

## 6. CANONICAL LIVE URLS

- **Master Desktop Showcase (Desktop, Laptop, Tablet)**: `http://localhost:8080/desktop-design-system.html`
- **Master Mobile Showcase (Smartphones & Web App)**: `http://localhost:8080/mobile-design-system.html`
- **Universal Auto-Adaptive Portal**: `http://localhost:8080/design-system.html`
- **Primary Intake Survey (34 Clinical Markers)**: `http://localhost:8080/survey.html`
- **THAIS Clinical Intelligence Console**: `http://localhost:8080/thais.html`
