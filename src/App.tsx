import { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  BookOpen, 
  HelpCircle,
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-safe">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b border-border-subtle pt-safe px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-brand-primary flex items-center justify-center text-text-inverse font-bold text-lg shadow-subtle">
              T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-base tracking-tight text-text-primary">Tovelu Design System</h1>
                <span className="text-[10px] font-mono uppercase bg-brand-subtle text-brand-dark px-1.5 py-0.5 rounded font-medium">
                  v0.1.0 • Tokens
                </span>
              </div>
              <p className="text-xs text-text-secondary">Towards Better Health</p>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-md border border-border-default flex items-center justify-center hover:bg-subtle active:scale-95 transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4 text-brand-accent" /> : <Moon className="w-4 h-4 text-text-secondary" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Intro Card */}
        <section className="bg-surface border border-border-subtle rounded-lg p-5 shadow-card space-y-3">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Constitution Level Verified</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">Step 01: Brand Tokens & Foundations</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            The single source of truth for Tovelu’s visual language. Designed strictly according to 
            <strong className="text-text-primary"> Articles 39, 40, 41, 42 & 63</strong>: calm, scientific, touch-first, accessible, and never fear-inducing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
            <div className="bg-subtle p-2.5 rounded-md border border-border-subtle">
              <span className="text-text-muted block">Min Touch Target</span>
              <strong className="text-text-primary font-mono">48px (Touch-First)</strong>
            </div>
            <div className="bg-subtle p-2.5 rounded-md border border-border-subtle">
              <span className="text-text-muted block">Grid System</span>
              <strong className="text-text-primary font-mono">4px / 8px Baseline</strong>
            </div>
            <div className="bg-subtle p-2.5 rounded-md border border-border-subtle">
              <span className="text-text-muted block">Contrast Target</span>
              <strong className="text-text-primary font-mono">WCAG AAA / AA</strong>
            </div>
            <div className="bg-subtle p-2.5 rounded-md border border-border-subtle">
              <span className="text-text-muted block">Aesthetic Tone</span>
              <strong className="text-text-primary">Calm & Scientific</strong>
            </div>
          </div>
        </section>

        {/* 1. Color Palette: Clinical Semantics */}
        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              1. Clinical & Semantic Status Palette
            </h3>
            <p className="text-xs text-text-secondary">
              Calm, clinical feedback states that convey truth without inciting fear or panic (Article 63).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {/* Optimal */}
            <div className="bg-status-optimal-bg border border-status-optimal-border p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-status-optimal flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Optimal / Verified
                </span>
                <code className="text-[11px] font-mono text-status-optimal">--color-status-optimal</code>
              </div>
              <p className="text-xs text-text-secondary">Used for in-range lab metrics, verified sources, and validated actions.</p>
            </div>

            {/* Attention */}
            <div className="bg-status-attention-bg border border-status-attention-border p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-status-attention flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Attention / Borderline
                </span>
                <code className="text-[11px] font-mono text-status-attention">--color-status-attention</code>
              </div>
              <p className="text-xs text-text-secondary">Gentle amber advisory for metrics nearing threshold limits.</p>
            </div>

            {/* Critical Alert */}
            <div className="bg-status-alert-bg border border-status-alert-border p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-status-alert flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4" /> Clinical Triage Alert
                </span>
                <code className="text-[11px] font-mono text-status-alert">--color-status-alert</code>
              </div>
              <p className="text-xs text-text-secondary">Reserved strictly for emergency triage escalation (Article 34).</p>
            </div>

            {/* Evidence */}
            <div className="bg-status-evidence-bg border border-status-evidence-border p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-status-evidence flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> Evidence & Citations
                </span>
                <code className="text-[11px] font-mono text-status-evidence">--color-status-evidence</code>
              </div>
              <p className="text-xs text-text-secondary">Denotes peer-reviewed studies and verifiable guideline references.</p>
            </div>

            {/* Unknown / Provenance */}
            <div className="bg-status-unknown-bg border border-status-unknown-border p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-status-unknown flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Unverified / Unknown
                </span>
                <code className="text-[11px] font-mono text-status-unknown">--color-status-unknown</code>
              </div>
              <p className="text-xs text-text-secondary">Explicit state when data is missing or unverified (Article 28 & 29).</p>
            </div>

            {/* Brand Clinical Teal */}
            <div className="bg-brand-subtle border border-brand-primary/20 p-3.5 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary inline-block"></span> Brand Primary Teal
                </span>
                <code className="text-[11px] font-mono text-brand-dark">--color-brand-primary</code>
              </div>
              <p className="text-xs text-text-secondary">Primary scientific calm accent for interactive primary actions.</p>
            </div>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">2. Typography Scales</h3>
            <p className="text-xs text-text-secondary">
              Clean, legible sans-serif for reading alongside precision tabular monospace for biomarker numbers.
            </p>
          </div>

          <div className="bg-surface border border-border-subtle rounded-lg p-4 divide-y divide-border-subtle space-y-4">
            <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-xs font-mono text-text-muted block">Display (32px / 40px)</span>
                <h1 className="text-3xl font-bold tracking-tight text-text-primary">Health Intelligence</h1>
              </div>
              <span className="text-xs font-mono text-text-secondary">font-sans bold</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-xs font-mono text-text-muted block">Heading 1 (24px)</span>
                <h2 className="text-2xl font-semibold tracking-tight text-text-primary">Longitudinal Trend Analysis</h2>
              </div>
              <span className="text-xs font-mono text-text-secondary">font-sans semibold</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-xs font-mono text-text-muted block">Body (16px)</span>
                <p className="text-base text-text-secondary max-w-xl">
                  Tovelu continuously evaluates incoming health signals against peer-reviewed clinical guidelines to provide calm, verified recommendations.
                </p>
              </div>
              <span className="text-xs font-mono text-text-secondary">16px base mobile</span>
            </div>

            {/* Specialized Clinical Metrics */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-text-muted block">Biomarker Metric Display (Tabular Mono)</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-numeric text-4xl font-bold text-text-primary">124/82</span>
                  <span className="text-sm font-sans font-medium text-text-secondary">mmHg</span>
                  <span className="text-xs font-mono bg-status-optimal-bg text-status-optimal px-2 py-0.5 rounded border border-status-optimal-border">
                    Normal Range
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-text-secondary">font-numeric / tabular-nums</span>
            </div>
          </div>
        </section>

        {/* 3. Mobile Touch Targets & Safe Area Awareness */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">3. Mobile-First Touch Standards (Article 40)</h3>
          </div>

          <div className="bg-surface border border-border-subtle rounded-lg p-4 space-y-4">
            <p className="text-xs text-text-secondary">
              Every interactive element must strictly satisfy the <strong>minimum 48px touch boundary</strong> so anyone on any phone can tap accurately without missed touches.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Standard 48px Touch Button */}
              <button className="min-h-touch px-5 rounded-md bg-brand-primary hover:bg-brand-primary-hover active:scale-98 text-text-inverse font-medium text-sm flex items-center justify-center transition-all shadow-subtle">
                Primary Action (48px)
              </button>

              <button className="min-h-touch px-5 rounded-md border border-border-default hover:bg-subtle active:scale-98 text-text-primary font-medium text-sm flex items-center justify-center transition-all">
                Secondary Action (48px)
              </button>

              <div className="flex items-center gap-2 bg-subtle px-3 py-2 rounded-md border border-border-subtle text-xs text-text-secondary font-mono">
                <span>Touch Boundary:</span>
                <strong className="text-status-optimal font-bold">48px OK</strong>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Elevation, Radii & Shadows */}
        <section className="space-y-4">
          <h3 className="text-base font-semibold text-text-primary">4. Elevation & Surface Depth</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-surface p-4 rounded-md shadow-subtle border border-border-subtle">
              <span className="text-xs font-mono text-text-muted block mb-1">Subtle Depth</span>
              <p className="text-xs text-text-secondary">Minimal border elevation for list items and data rows.</p>
            </div>

            <div className="bg-surface p-4 rounded-lg shadow-card border border-border-subtle">
              <span className="text-xs font-mono text-text-muted block mb-1">Card Depth</span>
              <p className="text-xs text-text-secondary">Standard elevation for health cards and biomarker panels.</p>
            </div>

            <div className="bg-surface p-4 rounded-xl shadow-modal border border-border-subtle">
              <span className="text-xs font-mono text-text-muted block mb-1">Modal / Sheet Depth</span>
              <p className="text-xs text-text-secondary">Elevated depth for bottom sheets and triage alerts.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
