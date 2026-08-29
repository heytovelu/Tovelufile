import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Lock, 
  AlertTriangle, 
  UserCheck, 
  Scale, 
  Mic2, 
  Compass, 
  Sparkles
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ToveluVoice } from '../../theme/lexicon';

export const GovernanceShowcase: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<'gear1_baseline' | 'gear2_insight' | 'gear3_friction' | 'gear4_triage'>('gear2_insight');

  const gearConfig = {
    gear1_baseline: {
      badge: "optimal" as const,
      tag: "Gear 1 • Routine Tracking",
    },
    gear2_insight: {
      badge: "brand" as const,
      tag: "Gear 2 • Educational Insight",
    },
    gear3_friction: {
      badge: "attention" as const,
      tag: "Gear 3 • Compassionate Support",
    },
    gear4_triage: {
      badge: "alert" as const,
      tag: "Gear 4 • Emergency Escalation",
    },
  }[selectedGear];

  const activeProfile = ToveluVoice.voiceStates[selectedGear];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. THE FOUNDER CHALLENGE BANNER */}
      <div className="rounded-xl border-2 border-brand-primary/30 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center gap-2 text-brand-primary">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
            The Tovelu Global Moat (Founder Challenge)
          </span>
        </div>
        <blockquote className="text-sm font-medium text-text-primary leading-relaxed border-l-4 border-brand-primary pl-4 py-1 italic">
          &ldquo;Tovelu is the first health company that never tried to scare me, never tried to sell me miracles, never judged my weaknesses, and never pretended to know things it didn&apos;t know. It treated my data like sacred ground and explained my body in words I could understand. With Tovelu, I finally felt like I was in control of my own life.&rdquo;
        </blockquote>
      </div>

      {/* 2. THE 4 DYNAMIC VOICE STATES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic2 className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">
              Universal Voice Doctrine: 4 Dynamic Voice States
            </h3>
          </div>
          <span className="text-xs font-mono text-text-muted">Contextual Gear-Shifting</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Voice State Simulator</CardTitle>
            <CardDescription>
              Tovelu shifts gears dynamically based on clinical urgency and user psychological state.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Gear Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Button
                size="sm"
                variant={selectedGear === 'gear1_baseline' ? 'primary' : 'secondary'}
                onClick={() => setSelectedGear('gear1_baseline')}
                className="text-xs"
              >
                1. Baseline Peace
              </Button>
              <Button
                size="sm"
                variant={selectedGear === 'gear2_insight' ? 'primary' : 'secondary'}
                onClick={() => setSelectedGear('gear2_insight')}
                className="text-xs"
              >
                2. Insight & Learning
              </Button>
              <Button
                size="sm"
                variant={selectedGear === 'gear3_friction' ? 'primary' : 'secondary'}
                onClick={() => setSelectedGear('gear3_friction')}
                className="text-xs"
              >
                3. Friction / Struggle
              </Button>
              <Button
                size="sm"
                variant={selectedGear === 'gear4_triage' ? 'destructive' : 'secondary'}
                onClick={() => setSelectedGear('gear4_triage')}
                className="text-xs"
              >
                4. Acute Triage
              </Button>
            </div>

            {/* Active Gear Preview Box */}
            <div className="p-4 rounded-xl bg-subtle border border-border-subtle space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-text-primary text-sm flex items-center gap-2">
                  <span>{activeProfile.name}</span>
                  <Badge variant={gearConfig.badge} size="sm">
                    {gearConfig.tag}
                  </Badge>
                </span>
                <span className="text-[11px] font-mono text-text-secondary">
                  {activeProfile.character}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-surface border border-border-subtle text-xs leading-relaxed text-text-primary font-sans shadow-subtle">
                &ldquo;{activeProfile.example}&rdquo;
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. THE TOVELU REPLACEMENT STANDARD (LEXICON MAP) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-status-evidence" />
          <h3 className="text-base font-semibold text-text-primary">
            The Tovelu Universal Lexicon (The Replacement Standard)
          </h3>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface shadow-card">
          <table className="w-full text-left text-xs">
            <thead className="bg-subtle text-text-secondary border-b border-border-subtle font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3.5">What Legacy Health / Tech Says</th>
                <th className="p-3.5">What Tovelu Says to Humanity</th>
                <th className="p-3.5">Constitutional Mandate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {ToveluVoice.lexiconMap.map((item, idx) => (
                <tr key={idx} className="hover:bg-subtle/40 transition-colors">
                  <td className="p-3.5 text-status-alert font-mono line-through opacity-80">
                    &ldquo;{item.legacy}&rdquo;
                  </td>
                  <td className="p-3.5 text-text-primary font-medium">
                    &ldquo;{item.tovelu}&rdquo;
                  </td>
                  <td className="p-3.5 text-text-muted font-mono text-[11px]">
                    {item.doctrine}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. ABSOLUTE PRIORITY HIERARCHY */}
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

      {/* 5. CORE OPERATIONAL DOCTRINES */}
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
            The most important asset of Tovelu is not code, AI models, or marketing—it is <strong>human trust</strong>. Every design and voice decision exists to earn, protect, and amplify that trust.
          </p>
        </div>
      </div>
    </div>
  );
};
