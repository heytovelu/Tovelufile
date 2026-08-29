# Tovelu Design System (TDS) — Master Documentation

> **Constitution Alignment**: Articles 39, 40, 41, 42, 63, 76, 101.  
> **Aesthetic Philosophy**: Calm, Minimal, Scientific, Human, Accessible, Elegant, Trustworthy.  
> **Core Operating Rule**: Technology from the future that feels *invisible, not complicated*.

---

## Architecture Overview

The **Tovelu Design System (TDS)** is a unified, accessible, mobile-first design architecture designed to support a multi-decade health-intelligence platform. It consists of 7 modular layers:

### 1. Brand Tokens & Foundations (`src/styles/tokens.css`)
- **Calm Palette**: Deep obsidian (`#090D14`), soft canvas slate (`#F8FAFC`), and scientific clinical teal (`#0D9488`).
- **Semantic Statuses (Article 63)**:
  - Optimal / Verified (`#059669`)
  - Attention / Borderline (`#D97706`)
  - Clinical Triage Alert (`#DC2626`)
  - Evidence Registry (`#4F46E5`)
  - Data Provenance Unknown (`#64748B`)
- **Mobile Touch Standard**: Minimum 48px interactive touch boundaries (`min-h-touch`).
- **Safe Area Insets**: Native support for iOS notch, Dynamic Island, and Android gesture bars.

### 2. UI Primitives (`src/components/ui/`)
- `Button.tsx`: Variants (`primary`, `secondary`, `outline`, `ghost`, `destructive`), loading state, and haptic scaling.
- `Badge.tsx`: Status pills with optional animated pulsing indicators.
- `Card.tsx`: Composable surface containers with subtle elevation shadows.
- `Input.tsx`: 16px mobile font to prevent auto-zooming, accessible ARIA states, and error validation.
- `UnitToggle.tsx`: Deterministic clinical unit conversion (Article 26) between international and imperial units.

### 3. Mobile Navigation & Overlays
- `AppHeader.tsx`: Sticky top header with safe-area spacing and status badge.
- `BottomNav.tsx`: Mobile-first thumb-zone navigation with notification count badges.
- `BottomSheet.tsx`: Native bottom-up drawer with drag handle and scroll locking.
- `Dialog.tsx`: Reversible action confirmation modal enforcing Article 20 (*Stop → Explain → Ask Ajay*).

### 4. Feedback & State Handlers
- `EmergencyBanner.tsx`: High-contrast triage alert with direct emergency calling (Article 34).
- `Skeleton.tsx`: Shimmering placeholder animations that eliminate blank white loading screens.
- `EmptyState.tsx`: Reassuring, clear call-to-action prompts for zero-record states.
- `ErrorState.tsx`: Transparent diagnostic reporting and retry handlers (Article 87).

### 5. Health & Intelligence Components
- `BiomarkerCard.tsx`: Displays biomarker metric values with physiological range bar and **Data Provenance Badges** (Article 28: Lab Verified, Wearable Sync, Self-Reported, Clinical Record).
- `EvidenceCard.tsx`: Proves claims with Evidence Grades (A/B/C), study citations, population sizes, and verifiable DOI links (Articles 8, 24, 67).
- `ExplanationCard.tsx`: Standardizes recommendations into 6 canonical parts: WHAT, WHY, EVIDENCE, CONFIDENCE, LIMITATIONS, and NEXT STEP (Article 33).

### 6. Health Data Visualizations
- `TrendChart.tsx`: Touch-scrubbable time-series line chart with optimal target reference bands and **explicit missing-data gap indicators** (Articles 29 & 30).
- `BiomarkerSparkline.tsx`: Lightweight vector sparklines with trend percentages and gap preservation.

### 7. Interactive Catalog (`src/App.tsx`)
- Live, touch-testable gallery at `http://localhost:5173/` allowing immediate interactive testing of all components across light and dark modes.
