# Tovelu Design System (TDS) — Design Tokens (v0.1.0)

> **Constitutional Mandate**: Articles 39, 40, 41, 42, 63, 76.  
> **Core Aesthetic**: Calm, Minimal, Scientific, Human, Accessible, Premium.  
> **Core Rule**: Technology that feels invisible, not complicated. Never use fear- or panic-inducing visuals.

---

## 1. Surfaces & Neutrals

| Token Name | Light Mode Hex | Dark Mode Hex | Intended Purpose |
| :--- | :--- | :--- | :--- |
| `--tds-color-bg-canvas` | `#F8FAFC` (Soft Slate) | `#090D14` (Calm Obsidian) | Main application background. Reduced glare. |
| `--tds-color-bg-surface` | `#FFFFFF` (Pure White) | `#111827` (Deep Gray) | Cards, bottom sheets, elevated modals. |
| `--tds-color-bg-subtle` | `#F1F5F9` | `#1F2937` | Secondary containers, inset groups, table headers. |
| `--tds-color-bg-muted` | `#E2E8F0` | `#374151` | Disabled states, progress track backgrounds. |

---

## 2. Text & Typography Tokens

| Token Name | Light Mode Hex | Dark Mode Hex | WCAG Contrast Ratio | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `--tds-color-text-primary` | `#0F172A` | `#F9FAFB` | > 14:1 (AAA) | High-contrast main headings and body text. |
| `--tds-color-text-secondary` | `#475569` | `#9CA3AF` | > 7:1 (AAA) | Subheadings, data labels, descriptive copy. |
| `--tds-color-text-muted` | `#94A3B8` | `#6B7280` | > 4.5:1 (AA) | Placeholders, timestamps, subtle hints. |

---

## 3. Clinical & Semantic Status Tokens

> **Article 63 Enforced**: Colors must communicate clinical truth clearly without provoking anxiety or false alarm.

| Status State | Text Token | Background Token | Border Token | Usage Guidelines |
| :--- | :--- | :--- | :--- | :--- |
| **Optimal / Normal** | `#059669` | `#ECFDF5` | `#A7F3D0` | Biomarkers within clinical target range; verified records. |
| **Attention / Borderline**| `#D97706` | `#FFFBEB` | `#FDE68A` | Mild deviations, advisory guidance, missing routine checks. |
| **Clinical Triage Alert** | `#DC2626` | `#FEF2F2` | `#FECACA` | Critical safety warnings; emergency medical escalation. |
| **Evidence & Citations** | `#4F46E5` | `#EEF2FF` | `#C7D2FE` | Peer-reviewed study references, clinical practice guidelines. |
| **Unverified / Unknown** | `#64748B` | `#F8FAFC` | `#E2E8F0` | Missing data, self-reported data awaiting lab validation. |

---

## 4. Typography Scale

- **UI Sans-Serif Font**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Clinical Monospace Font**: `"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace` (Tabular numbers for biomarkers, vital signs, units, and timestamps).

| Scale | Size | Line Height | Mobile Usage |
| :--- | :--- | :--- | :--- |
| `display` | `2rem` (32px) / `2.5rem` (40px) | 1.2 | Feature headers, prominent screen titles |
| `h1` | `1.5rem` (24px) | 1.3 | Card group titles, major sections |
| `h2` | `1.25rem` (20px) | 1.4 | Card headers, modal titles |
| `h3` | `1.125rem` (18px) | 1.4 | Subsection labels, list headers |
| `body` | `1rem` (16px) | 1.5 | Primary reading text (prevents iOS zoom on inputs) |
| `body-sm` | `0.875rem` (14px) | 1.5 | Secondary copy, descriptions |
| `caption` | `0.75rem` (12px) | 1.4 | Badges, citations, timestamps |
| `metric-xl` | `2.5rem` (40px) | 1.1 | Large hero vital signs (e.g., Blood Pressure, Heart Rate) |

---

## 5. Mobile Touch & Spacing Standards (Article 40)

- **Minimum Touch Target**: `48px` (`--tds-touch-target-min: 48px`). No interactive button or toggle may be smaller than 48px to prevent missed taps.
- **Safe Area Insets**:
  - `pt-safe`: `max(0.75rem, env(safe-area-inset-top))` (Notch / Dynamic Island)
  - `pb-safe`: `max(1rem, env(safe-area-inset-bottom))` (Home indicator bar)
- **Baseline Grid**: 4px / 8px incremental scale (`--tds-space-1` to `--tds-space-16`).

---

## 6. How to Use

### In Tailwind CSS:
```html
<div class="bg-surface text-text-primary border border-border-subtle rounded-lg p-4 shadow-card">
  <span class="text-xs font-mono bg-status-optimal-bg text-status-optimal px-2 py-0.5 rounded border border-status-optimal-border">
    Optimal
  </span>
  <h2 class="text-xl font-bold mt-2">Resting Heart Rate</h2>
  <div class="font-numeric text-3xl font-bold mt-1">62 <span class="text-sm font-sans font-normal text-text-secondary">bpm</span></div>
</div>
```

### In TypeScript / Component Code:
```typescript
import { TDSTokens, HealthStatusType } from '@/theme/tokens';
```
