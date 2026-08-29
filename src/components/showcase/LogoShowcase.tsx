import React, { useState } from 'react';
import { Sparkles, Activity, Layers, Orbit, Columns } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type FirstFourOptionId = 'homeostasis' | 'meridian' | 'orbit' | 'pillars';

export const LogoShowcase: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<FirstFourOptionId>('homeostasis');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner: The Original 4 Architectural Foundations */}
      <div className="rounded-xl border-2 border-brand-primary/30 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Original 4 Master Concepts • Pure Universal Foundations
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Restored Original Selection
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          The Original 4 Master Marks for Tovelu
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The foundational 4 concepts created strictly without healthcare clichés (no hearts, no pulses, no leaves, no medical crosses). Pure mathematical geometry representing <strong>Dynamic Homeostasis, Biological Vectors, Protective Orbits, and Institutional Pillars</strong>.
        </p>

        {/* The Exact 4 Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <Button
            size="sm"
            variant={selectedConcept === 'homeostasis' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('homeostasis')}
            className="text-xs font-semibold py-3 flex items-center justify-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>1. Homeostasis Ring ⭐</span>
          </Button>

          <Button
            size="sm"
            variant={selectedConcept === 'meridian' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('meridian')}
            className="text-xs font-semibold py-3 flex items-center justify-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2. The Meridian T</span>
          </Button>

          <Button
            size="sm"
            variant={selectedConcept === 'orbit' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('orbit')}
            className="text-xs font-semibold py-3 flex items-center justify-center gap-1.5"
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>3. The Vital Orbit</span>
          </Button>

          <Button
            size="sm"
            variant={selectedConcept === 'pillars' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('pillars')}
            className="text-xs font-semibold py-3 flex items-center justify-center gap-1.5"
          >
            <Columns className="w-3.5 h-3.5" />
            <span>4. Genesis Pillars</span>
          </Button>
        </div>
      </div>

      {/* Hero Showcase Display: Clean Isolated Vector Hallmark */}
      <Card className="overflow-hidden border-2 border-border-default shadow-elevated">
        <div className="p-12 sm:p-20 bg-gradient-to-b from-subtle/50 via-surface to-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[400px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. CONCEPT 1: THE HOMEOSTASIS RING */}
            {selectedConcept === 'homeostasis' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 84 84" fill="none">
                    <defs>
                      <linearGradient id="orig-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                        <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                      </linearGradient>
                    </defs>
                    {/* Outer Homeostatic Arc 1 (Human Reality) */}
                    <path
                      d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
                      stroke="url(#orig-teal-grad)"
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
                    {/* Central Living Geometric Core */}
                    <circle cx="42" cy="42" r="5" fill="url(#orig-teal-grad)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-sans font-bold tracking-[0.24em] text-3xl sm:text-4xl text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 2. CONCEPT 2: THE MERIDIAN T */}
            {selectedConcept === 'meridian' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 84 84" fill="none">
                    <defs>
                      <linearGradient id="orig-merid-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                        <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                      </linearGradient>
                    </defs>
                    {/* Horizontal Baseline */}
                    <path
                      d="M 16 32 C 30 32, 54 32, 68 32"
                      stroke="var(--tds-color-text-primary)"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    {/* Ascending Meridian Stem */}
                    <path
                      d="M 42 72 L 42 16"
                      stroke="url(#orig-merid-grad)"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    {/* Vector Uplift Arrow Tip Indicator */}
                    <circle cx="42" cy="14" r="4.5" fill="var(--tds-color-brand-primary)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-sans font-bold tracking-[0.24em] text-3xl sm:text-4xl text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 3. CONCEPT 3: THE VITAL ORBIT */}
            {selectedConcept === 'orbit' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 84 84" fill="none">
                    <defs>
                      <linearGradient id="orig-orb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                        <stop offset="100%" stopColor="var(--tds-color-status-evidence)" />
                      </linearGradient>
                    </defs>
                    {/* Protective Orbital Shell */}
                    <circle cx="42" cy="42" r="30" stroke="var(--tds-color-border-default)" strokeWidth="3" strokeDasharray="3 4" />
                    {/* Concentric Living Curve */}
                    <path
                      d="M 42 16 A 26 26 0 1 1 20 54"
                      stroke="url(#orig-orb-grad)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Focused Center Point */}
                    <circle cx="42" cy="42" r="7" fill="var(--tds-color-brand-primary)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-sans font-bold tracking-[0.24em] text-3xl sm:text-4xl text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 4. CONCEPT 4: THE GENESIS PILLARS */}
            {selectedConcept === 'pillars' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 84 84" fill="none">
                    {/* Left Pillar: Human Biology */}
                    <rect x="24" y="24" width="10" height="42" rx="5" fill="var(--tds-color-text-primary)" opacity="0.85" />
                    {/* Right Pillar: Science & Intelligence */}
                    <rect x="50" y="24" width="10" height="42" rx="5" fill="var(--tds-color-brand-primary)" />
                    {/* Connecting Horizon Bridge */}
                    <rect x="24" y="16" width="36" height="8" rx="4" fill="var(--tds-color-brand-primary)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-sans font-bold tracking-[0.24em] text-3xl sm:text-4xl text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Detailed Concept Analysis & Constitutional Foundations */}
        <CardContent className="pt-6 space-y-4">
          {selectedConcept === 'homeostasis' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-primary" />
                  Concept 1: The Homeostasis Ring (The Living Equilibrium) ⭐
                </h4>
                <Badge variant="optimal" size="sm">Top Original Choice</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Represents biological homeostasis—the continuous, living dynamic equilibrium of human health. The two open interlocking arcs symbolize <strong>Human Biological Reality</strong> meeting <strong>Objective Science & Intelligence</strong>. The negative space creates an optical silhouette of the letter <strong>T</strong> without feeling forced.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Core Concept</span>
                  <strong className="text-text-primary font-mono">Dynamic Homeostasis</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Global Trademark</span>
                  <strong className="text-status-optimal font-mono">100% Conflict-Free</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Micro-Scale</span>
                  <strong className="text-brand-primary font-mono">Ultra-Crisp Vector</strong>
                </div>
              </div>
            </div>
          )}

          {selectedConcept === 'meridian' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-primary" />
                  Concept 2: The Meridian T (The Ascending Vector)
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
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Orbit className="w-4 h-4 text-brand-primary" />
                  Concept 3: The Vital Orbit (The Focused Human Center)
                </h4>
                <Badge variant="evidence" size="sm">Article 2 Aligned</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Embodies Article 2: <em>&ldquo;1 Human → 1 Lifelong Health Intelligence System&rdquo;</em>. The protective outer orbit guards privacy and safety, focusing directly on the human being at the center.
              </p>
            </div>
          )}

          {selectedConcept === 'pillars' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Columns className="w-4 h-4 text-brand-primary" />
                  Concept 4: The Genesis Pillars (Science & Humanity)
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

      {/* Multi-Platform Scale Inspection */}
      <Card>
        <CardHeader>
          <CardTitle>Micro-Scalability Across Platforms</CardTitle>
          <CardDescription>
            Testing optical weight across mobile app icon, touch targets, and browser favicons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-subtle/50 border border-border-subtle">
            {/* 64px App Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-border-subtle shadow-card flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 84 84" fill="none">
                  <path d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71" stroke="var(--tds-color-brand-primary)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13" stroke="var(--tds-color-text-primary)" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="42" cy="42" r="6" fill="var(--tds-color-brand-primary)" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">64px (iOS)</span>
            </div>

            {/* 48px Touch Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle shadow-subtle flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 84 84" fill="none">
                  <path d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71" stroke="var(--tds-color-brand-primary)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13" stroke="var(--tds-color-text-primary)" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="42" cy="42" r="6" fill="var(--tds-color-brand-primary)" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">48px (Touch)</span>
            </div>

            {/* 32px Header Icon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 84 84" fill="none">
                  <path d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71" stroke="var(--tds-color-brand-primary)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13" stroke="var(--tds-color-text-primary)" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="42" cy="42" r="6" fill="var(--tds-color-brand-primary)" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">32px (Header)</span>
            </div>

            {/* 16px Favicon */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-surface border border-border-subtle flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 84 84" fill="none">
                  <circle cx="42" cy="42" r="30" stroke="var(--tds-color-brand-primary)" strokeWidth="16" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">16px (Favicon)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
