import React from 'react';
import { ShieldCheck, Heart, Lock, AlertTriangle, UserCheck, Scale } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';

export const GovernanceShowcase: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Absolute Priority Hierarchy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">The Absolute Priority Hierarchy (Article 3)</h3>
        </div>

        <Card>
          <CardContent className="pt-5 space-y-3">
            <p className="text-xs text-text-secondary leading-relaxed">
              When priorities conflict, every system, feature, algorithm, and prompt must be evaluated against this strict order:
            </p>
            <div className="p-3 bg-subtle rounded-lg border border-border-subtle font-mono text-xs text-brand-dark flex flex-wrap gap-2 items-center">
              <span className="font-bold text-status-alert">SAFETY</span> &gt;
              <span className="font-bold text-text-primary">TRUTH</span> &gt;
              <span className="font-bold text-brand-primary">SCIENCE</span> &gt;
              <span className="font-bold text-status-evidence">LAW</span> &gt;
              <span className="font-bold text-text-primary">PRIVACY</span> &gt;
              <span className="font-bold text-text-primary">SECURITY</span> &gt;
              <span>ETHICS</span> &gt;
              <span>TRUST</span> &gt;
              <span>PRODUCT</span> &gt;
              <span>BUSINESS</span> &gt;
              <span className="text-text-muted">SPEED</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Core Operational Doctrines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Golden Rule */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-status-optimal">
              <Heart className="w-4 h-4" />
              <CardTitle>The Tovelu Golden Rule (Article 4)</CardTitle>
            </div>
            <CardDescription>The core shipping standard.</CardDescription>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-2 border-brand-primary pl-3 text-xs italic text-text-secondary">
              &ldquo;Would I trust this system with the health, privacy, safety, and dignity of someone I love? If no: Do not ship it. If uncertain: Investigate before shipping.&rdquo;
            </blockquote>
          </CardContent>
        </Card>

        {/* The Reversibility Rule */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-brand-primary">
              <Lock className="w-4 h-4" />
              <CardTitle>The Reversibility Rule (Article 20)</CardTitle>
            </div>
            <CardDescription>Safeguard against destructive errors.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-text-secondary leading-relaxed">
              Prefer feature flags, migrations, backups, and isolated testing. If an action is destructive and difficult to reverse: <strong>STOP → EXPLAIN → ASK AJAY</strong>.
            </p>
          </CardContent>
        </Card>

        {/* No Fear-Based Growth */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-status-attention">
              <AlertTriangle className="w-4 h-4" />
              <CardTitle>No Fear-Based Growth (Article 63)</CardTitle>
            </div>
            <CardDescription>Ethical user relationship.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-text-secondary leading-relaxed">
              Never use health fear, shame, panic, body insecurity, or medical anxiety to drive engagement, subscriptions, or sales. Create loyalty through genuine value.
            </p>
          </CardContent>
        </Card>

        {/* Founder Authority */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-text-primary">
              <UserCheck className="w-4 h-4" />
              <CardTitle>Founder Final Authority (Article 1)</CardTitle>
            </div>
            <CardDescription>Command structure and co-pilot role.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-text-secondary leading-relaxed">
              <strong>Ajay makes the final strategic decisions.</strong> Antigravity provides rigorous multi-disciplinary analysis, challenges weak assumptions, and implements code with excellence.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Trust is the Ultimate Moat */}
      <div className="p-4 rounded-xl bg-surface border border-border-subtle shadow-card flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-text-secondary">
          <h5 className="font-semibold text-text-primary">Trust is the Ultimate Moat (Article 105)</h5>
          <p>
            The most important asset of Tovelu is not code, AI models, or marketing—it is <strong>human trust</strong>. Every design decision in TDS exists to earn, protect, and amplify that trust.
          </p>
        </div>
      </div>
    </div>
  );
};
