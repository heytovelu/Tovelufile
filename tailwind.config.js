/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--tds-color-bg-canvas)',
        surface: 'var(--tds-color-bg-surface)',
        subtle: 'var(--tds-color-bg-subtle)',
        muted: 'var(--tds-color-bg-muted)',
        
        /* Text tokens */
        'text-primary': 'var(--tds-color-text-primary)',
        'text-secondary': 'var(--tds-color-text-secondary)',
        'text-muted': 'var(--tds-color-text-muted)',
        'text-inverse': 'var(--tds-color-text-inverse)',

        /* Border tokens */
        'border-subtle': 'var(--tds-color-border-subtle)',
        'border-default': 'var(--tds-color-border-default)',
        'border-focused': 'var(--tds-color-border-focused)',

        /* Brand scientific teal */
        brand: {
          primary: 'var(--tds-color-brand-primary)',
          'primary-hover': 'var(--tds-color-brand-primary-hover)',
          accent: 'var(--tds-color-brand-accent)',
          subtle: 'var(--tds-color-brand-subtle)',
          dark: 'var(--tds-color-brand-dark)',
        },

        /* Health semantic statuses */
        status: {
          optimal: 'var(--tds-color-status-optimal)',
          'optimal-bg': 'var(--tds-color-status-optimal-bg)',
          'optimal-border': 'var(--tds-color-status-optimal-border)',
          
          attention: 'var(--tds-color-status-attention)',
          'attention-bg': 'var(--tds-color-status-attention-bg)',
          'attention-border': 'var(--tds-color-status-attention-border)',

          alert: 'var(--tds-color-status-alert)',
          'alert-bg': 'var(--tds-color-status-alert-bg)',
          'alert-border': 'var(--tds-color-status-alert-border)',

          evidence: 'var(--tds-color-status-evidence)',
          'evidence-bg': 'var(--tds-color-status-evidence-bg)',
          'evidence-border': 'var(--tds-color-status-evidence-border)',

          unknown: 'var(--tds-color-status-unknown)',
          'unknown-bg': 'var(--tds-color-status-unknown-bg)',
          'unknown-border': 'var(--tds-color-status-unknown-border)',
        }
      },
      fontFamily: {
        sans: ['var(--tds-font-sans)'],
        mono: ['var(--tds-font-mono)'],
      },
      borderRadius: {
        sm: 'var(--tds-radius-sm)',
        md: 'var(--tds-radius-md)',
        lg: 'var(--tds-radius-lg)',
        xl: 'var(--tds-radius-xl)',
      },
      boxShadow: {
        subtle: 'var(--tds-shadow-subtle)',
        card: 'var(--tds-shadow-card)',
        modal: 'var(--tds-shadow-modal)',
        sheet: 'var(--tds-shadow-sheet)',
      },
      minHeight: {
        touch: 'var(--tds-touch-target-min)',
      },
      minWidth: {
        touch: 'var(--tds-touch-target-min)',
      },
      spacing: {
        'safe-top': 'var(--tds-safe-top)',
        'safe-bottom': 'var(--tds-safe-bottom)',
        'safe-left': 'var(--tds-safe-left)',
        'safe-right': 'var(--tds-safe-right)',
      }
    },
  },
  plugins: [],
}
