/**
 * Tovelu Design System (TDS) - TypeScript Token Contracts
 * Enforces compile-time type safety across all components and platforms.
 */

export const TDSTokens = {
  colors: {
    brand: {
      primary: 'var(--tds-color-brand-primary)',
      hover: 'var(--tds-color-brand-primary-hover)',
      accent: 'var(--tds-color-brand-accent)',
      subtle: 'var(--tds-color-brand-subtle)',
      dark: 'var(--tds-color-brand-dark)',
    },
    status: {
      optimal: {
        text: 'var(--tds-color-status-optimal)',
        bg: 'var(--tds-color-status-optimal-bg)',
        border: 'var(--tds-color-status-optimal-border)',
      },
      attention: {
        text: 'var(--tds-color-status-attention)',
        bg: 'var(--tds-color-status-attention-bg)',
        border: 'var(--tds-color-status-attention-border)',
      },
      alert: {
        text: 'var(--tds-color-status-alert)',
        bg: 'var(--tds-color-status-alert-bg)',
        border: 'var(--tds-color-status-alert-border)',
      },
      evidence: {
        text: 'var(--tds-color-status-evidence)',
        bg: 'var(--tds-color-status-evidence-bg)',
        border: 'var(--tds-color-status-evidence-border)',
      },
      unknown: {
        text: 'var(--tds-color-status-unknown)',
        bg: 'var(--tds-color-status-unknown-bg)',
        border: 'var(--tds-color-status-unknown-border)',
      },
    },
    surfaces: {
      canvas: 'var(--tds-color-bg-canvas)',
      surface: 'var(--tds-color-bg-surface)',
      subtle: 'var(--tds-color-bg-subtle)',
      muted: 'var(--tds-color-bg-muted)',
    },
    text: {
      primary: 'var(--tds-color-text-primary)',
      secondary: 'var(--tds-color-text-secondary)',
      muted: 'var(--tds-color-text-muted)',
      inverse: 'var(--tds-color-text-inverse)',
    },
    borders: {
      subtle: 'var(--tds-color-border-subtle)',
      default: 'var(--tds-color-border-default)',
      focused: 'var(--tds-color-border-focused)',
    },
  },
  typography: {
    fontSans: 'var(--tds-font-sans)',
    fontMono: 'var(--tds-font-mono)',
  },
  spacing: {
    touchTargetMin: 'var(--tds-touch-target-min)',
    touchTargetCompact: 'var(--tds-touch-target-compact)',
  },
  radii: {
    sm: 'var(--tds-radius-sm)',
    md: 'var(--tds-radius-md)',
    lg: 'var(--tds-radius-lg)',
    xl: 'var(--tds-radius-xl)',
    full: 'var(--tds-radius-full)',
  },
  elevations: {
    subtle: 'var(--tds-shadow-subtle)',
    card: 'var(--tds-shadow-card)',
    modal: 'var(--tds-shadow-modal)',
    sheet: 'var(--tds-shadow-sheet)',
  },
} as const;

export type HealthStatusType = 'optimal' | 'attention' | 'alert' | 'evidence' | 'unknown';
export type DataProvenanceType = 'manual' | 'wearable_sync' | 'lab_verified' | 'clinical_report';
export type EvidenceGradeType = 'A' | 'B' | 'C' | 'preliminary';
