import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const LogoShowcase: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<'homeostasis' | 'meridian' | 'orbit' | 'pillars'>('homeostasis');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Brand Identity • Global Logo & Wordmark Lab
            </span>
          </div>
          <Badge variant="brand" size="sm">
            100% Unique • Geneva & Copyright Clean
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Universal, Timeless Health Marks for 8 Billion Humans
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Designed strictly without clichés (zero hearts, zero ECG pulses, zero leaves, zero medical crosses). Pure geometric intelligence representing <strong>Dynamic Homeostasis (Living Equilibrium)</strong>.
        </p>
      </div>

      {/* Concept Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button
          size="sm"
          variant={selectedConcept === 'homeostasis' ? 'primary' : 'secondary'}
          onClick={() => setSelectedConcept('homeostasis')}
          className="text-xs"
        >
          1. The Homeostasis Ring
        </Button>
        <Button
          size="sm"
          variant={selectedConcept === 'meridian' ? 'primary' : 'secondary'}
          onClick={() => setSelectedConcept('meridian')}
          className="text-xs"
        >
          2. The Meridian T
        </Button>
        <Button
          size="sm"
          variant={selectedConcept === 'orbit' ? 'primary' : 'secondary'}
          onClick={() => setSelectedConcept('orbit')}
          className="text-xs"
        >
          3. The Vital Orbit
        </Button>
        <Button
          size="sm"
          variant={selectedConcept === 'pillars' ? 'primary' : 'secondary'}
          onClick={() => setSelectedConcept('pillars')}
          className="text-xs"
        >
          4. The Genesis Pillars
        </Button>
      </div>

      {/* Hero Showcase Display */}
      <Card className="overflow-hidden">
        <div className="p-8 sm:p-12 bg-subtle/50 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[280px]">
          {/* Render Active Logo Icon */}
          <div className="flex flex-col items-center gap-6 select-none">
            {selectedConcept === 'homeostasis' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="logo-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                    </linearGradient>
                  </defs>
                  {/* Outer Homeostatic Arc 1 (Human Reality) */}
                  <path
                    d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
                    stroke="url(#logo-teal-grad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Outer Homeostatic Arc 2 (Objective Science) */}
                  <path
                    d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
                    stroke="var(--tds-color-text-primary)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* Central Geometric Living Core */}
                  <circle cx="42" cy="42" r="5" fill="url(#logo-teal-grad)" />
                </svg>

                {/* Wordmark */}
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.22em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {selectedConcept === 'meridian' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="meridian-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                    </linearGradient>
                  </defs>
                  {/* Horizon Baseline */}
                  <path
                    d="M 16 32 C 30 32, 54 32, 68 32"
                    stroke="var(--tds-color-text-primary)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Ascending Meridian Stem */}
                  <path
                    d="M 42 72 L 42 16"
                    stroke="url(#meridian-grad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Vector Uplift Arrow Tip Indicator */}
                  <circle cx="42" cy="14" r="4.5" fill="var(--tds-color-brand-primary)" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.22em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {selectedConcept === 'orbit' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-status-evidence)" />
                    </linearGradient>
                  </defs>
                  {/* Protective Orbital Shell */}
                  <circle cx="42" cy="42" r="30" stroke="var(--tds-color-border-default)" strokeWidth="3" strokeDasharray="3 4" />
                  {/* Concentric Living Curve */}
                  <path
                    d="M 42 16 A 26 26 0 1 1 20 54"
                    stroke="url(#orbit-grad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  {/* Focused Center Point */}
                  <circle cx="42" cy="42" r="7" fill="var(--tds-color-brand-primary)" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.22em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {selectedConcept === 'pillars' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  {/* Left Pillar: Human Biology */}
                  <rect x="24" y="24" width="10" height="42" rx="5" fill="var(--tds-color-text-primary)" opacity="0.85" />
                  {/* Right Pillar: Science & Intelligence */}
                  <rect x="50" y="24" width="10" height="42" rx="5" fill="var(--tds-color-brand-primary)" />
                  {/* Connecting Horizon Bridge */}
                  <rect x="24" y="16" width="36" height="8" rx="4" fill="var(--tds-color-brand-primary)" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.22em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Concept Details & Rationale */}
        <CardContent className="pt-6 space-y-4">
          {selectedConcept === 'homeostasis' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 1: The Homeostasis Ring (Recommended)
                </h4>
                <Badge variant="optimal" size="sm">Top Recommendation</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Represents biological homeostasis—the continuous, living equilibrium of human health. The two open interlocking arcs symbolize <strong>Human Reality</strong> meeting <strong>Objective Science</strong>. The negative space creates an optical silhouette of the letter <strong>T</strong> without feeling forced.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Symbolism</span>
                  <strong className="text-text-primary font-mono">Dynamic Homeostasis</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Legal & Cultural</span>
                  <strong className="text-status-optimal font-mono">100% Conflict-Free</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Micro-Scale (16px)</span>
                  <strong className="text-text-primary font-mono">Ultra-Crisp Vector</strong>
                </div>
              </div>
            </div>
          )}

          {selectedConcept === 'meridian' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 2: The Meridian T
                </h4>
                <Badge variant="brand" size="sm">Vector Precision</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Directly codifies the tagline <em>&ldquo;Towards Better Health&rdquo;</em>. The calm horizontal base represents the patient&apos;s baseline health, while the ascending vertical vector represents continuous biological improvement over time.
              </p>
            </div>
          )}

          {selectedConcept === 'orbit' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 3: The Vital Orbit
                </h4>
                <Badge variant="evidence" size="sm">Intelligence Core</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Embodies Article 2: <em>&ldquo;1 Human → 1 Lifelong Health Intelligence System&rdquo;</em>. The protective outer orbit guards privacy and security, focusing directly on the human being at the center.
              </p>
            </div>
          )}

          {selectedConcept === 'pillars' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 4: The Genesis Pillars
                </h4>
                <Badge variant="neutral" size="sm">Architectural</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Two unshakeable pillars representing Science and Humanity standing together, bridged by Tovelu&apos;s intelligence layer.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* App Icon Scalability Test (16px to 64px) */}
      <Card>
        <CardHeader>
          <CardTitle>Micro-Scalability & App Icon Test</CardTitle>
          <CardDescription>
            A world-class logo must remain instantly recognizable from a tiny 16px smartwatch complication to a 64px iOS app icon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-subtle/50 border border-border-subtle">
            {/* 64px App Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-border-subtle shadow-card flex items-center justify-center">
                <span className="font-bold text-2xl text-brand-primary">T</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">64px (iOS)</span>
            </div>

            {/* 48px Touch Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle shadow-subtle flex items-center justify-center">
                <span className="font-bold text-lg text-brand-primary">T</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">48px (Touch)</span>
            </div>

            {/* 32px Header Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center">
                <span className="font-bold text-sm text-brand-primary">T</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">32px (Header)</span>
            </div>

            {/* 16px Favicon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-surface border border-border-subtle flex items-center justify-center">
                <span className="font-bold text-[8px] text-brand-primary">T</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">16px (Favicon)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
