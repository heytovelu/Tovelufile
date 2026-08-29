import React from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, AlertOctagon, BookOpen, HelpCircle, Smartphone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';

export const TokensShowcase: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
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
          <div className="bg-status-optimal-bg border border-status-optimal-border p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-status-optimal flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Optimal / Verified
              </span>
              <code className="text-[11px] font-mono text-status-optimal">--color-status-optimal</code>
            </div>
            <p className="text-xs text-text-secondary">In-range lab metrics, verified sources, and validated actions.</p>
          </div>

          <div className="bg-status-attention-bg border border-status-attention-border p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-status-attention flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Attention / Borderline
              </span>
              <code className="text-[11px] font-mono text-status-attention">--color-status-attention</code>
            </div>
            <p className="text-xs text-text-secondary">Gentle amber advisory for metrics nearing physiological threshold limits.</p>
          </div>

          <div className="bg-status-alert-bg border border-status-alert-border p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-status-alert flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4" /> Clinical Triage Alert
              </span>
              <code className="text-[11px] font-mono text-status-alert">--color-status-alert</code>
            </div>
            <p className="text-xs text-text-secondary">Strictly reserved for acute medical safety escalation (Article 34).</p>
          </div>

          <div className="bg-status-evidence-bg border border-status-evidence-border p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-status-evidence flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Evidence Registry
              </span>
              <code className="text-[11px] font-mono text-status-evidence">--color-status-evidence</code>
            </div>
            <p className="text-xs text-text-secondary">Peer-reviewed studies, clinical trials, and verifiable guidelines.</p>
          </div>

          <div className="bg-status-unknown-bg border border-status-unknown-border p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-status-unknown flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> Unverified / Unknown
              </span>
              <code className="text-[11px] font-mono text-status-unknown">--color-status-unknown</code>
            </div>
            <p className="text-xs text-text-secondary">Data provenance placeholder for unverified self-reported inputs.</p>
          </div>

          <div className="bg-brand-subtle border border-brand-primary/20 p-3.5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary inline-block"></span> Brand Primary Teal
              </span>
              <code className="text-[11px] font-mono text-brand-dark">--color-brand-primary</code>
            </div>
            <p className="text-xs text-text-secondary">Primary scientific calm accent for interactive actions.</p>
          </div>
        </div>
      </section>

      {/* 2. Typography Scales */}
      <section className="space-y-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary">2. Typography Scales</h3>
          <p className="text-xs text-text-secondary">
            Clean, legible sans-serif alongside precision tabular monospace for biomarker numbers.
          </p>
        </div>

        <Card>
          <CardContent className="divide-y divide-border-subtle space-y-4 pt-4">
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
                <span className="text-xs font-mono text-text-muted block">Body (16px Mobile Touch Base)</span>
                <p className="text-base text-text-secondary max-w-xl">
                  Tovelu continuously evaluates incoming health signals against peer-reviewed clinical guidelines to provide calm, verified recommendations.
                </p>
              </div>
              <span className="text-xs font-mono text-text-secondary">16px base mobile</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-text-muted block">Biomarker Metric Display (Tabular Mono)</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-numeric text-4xl font-bold text-text-primary">124/82</span>
                  <span className="text-sm font-sans font-medium text-text-secondary">mmHg</span>
                </div>
              </div>
              <span className="text-xs font-mono text-text-secondary">font-numeric / tabular-nums</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Mobile Touch Standards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">3. Mobile Touch & Safe-Area Standards</h3>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Article 40 Enforcement</CardTitle>
            <CardDescription>Touch targets are strictly verified to prevent missed taps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="min-h-touch px-4 py-2 rounded-md bg-subtle border border-border-default flex items-center justify-center text-xs font-mono text-text-primary">
                Min Touch Boundary: 48px
              </div>
              <div className="min-h-touch px-4 py-2 rounded-md bg-status-optimal-bg border border-status-optimal-border text-status-optimal flex items-center justify-center text-xs font-mono font-medium">
                WCAG AAA Touch Compliant
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
