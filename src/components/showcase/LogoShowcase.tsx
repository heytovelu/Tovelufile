import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type LogoConceptId = 'homeostasis' | 'meridian' | 'orbit' | 'pillars' | 'bioribbon' | 'cell' | 'quadrants' | 'keystone';

export const LogoShowcase: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<LogoConceptId>('bioribbon');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Brand Identity • Global Logo Lab (8 Master Candidates)
            </span>
          </div>
          <Badge variant="brand" size="sm">
            100% Unique • Geneva & Trademark Bulletproof
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Universal, Timeless Health Marks for 8 Billion Humans
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Zero clichés (no hearts, no pulses, no leaves, no medical crosses). Pure geometric intelligence capable of spanning every sector: clinical diagnostics, consumer wearables, longevity, pharmaceuticals, and AI systems.
        </p>
      </div>

      {/* Concept Selector Buttons (8 Total Concepts) */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
          Select From 8 Architectural Archetypes:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Button
            size="sm"
            variant={selectedConcept === 'bioribbon' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('bioribbon')}
            className="text-xs"
          >
            5. The Bio-Ribbon T ⭐
          </Button>
          <Button
            size="sm"
            variant={selectedConcept === 'cell' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('cell')}
            className="text-xs"
          >
            6. The Cellular Horizon
          </Button>
          <Button
            size="sm"
            variant={selectedConcept === 'quadrants' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('quadrants')}
            className="text-xs"
          >
            7. The Vital Quadrants
          </Button>
          <Button
            size="sm"
            variant={selectedConcept === 'keystone' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('keystone')}
            className="text-xs"
          >
            8. The Golden Keystone
          </Button>

          <Button
            size="sm"
            variant={selectedConcept === 'homeostasis' ? 'primary' : 'secondary'}
            onClick={() => setSelectedConcept('homeostasis')}
            className="text-xs"
          >
            1. Homeostasis Ring
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
            4. Genesis Pillars
          </Button>
        </div>
      </div>

      {/* Hero Showcase Display Surface */}
      <Card className="overflow-hidden">
        <div className="p-8 sm:p-12 bg-subtle/40 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[300px]">
          {/* Render Active Logo Icon */}
          <div className="flex flex-col items-center gap-6 select-none">
            
            {/* CONCEPT 5: THE BIO-RIBBON (THE CONTINUOUS HELIX T) */}
            {selectedConcept === 'bioribbon' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="50%" stopColor="var(--tds-color-brand-accent)" />
                      <stop offset="100%" stopColor="var(--tds-color-status-optimal)" />
                    </linearGradient>
                  </defs>
                  {/* Fluid, continuous topological ribbon forming a graceful modern "T" */}
                  <path
                    d="M 18 24 C 32 24, 56 24, 70 24 C 60 24, 52 32, 52 44 L 52 68 C 52 74, 44 74, 44 68 L 44 38 C 44 28, 36 24, 18 24 Z"
                    fill="url(#ribbon-grad)"
                    opacity="0.95"
                  />
                  {/* Complementary Counter-Loop (Biological Harmony) */}
                  <path
                    d="M 70 24 C 54 24, 44 34, 44 48 L 44 68 C 44 74, 36 74, 36 68 L 36 44 C 36 28, 48 24, 70 24 Z"
                    fill="var(--tds-color-text-primary)"
                    opacity="0.25"
                  />
                  {/* Living Core Focal Point */}
                  <circle cx="44" cy="44" r="5" fill="var(--tds-color-brand-primary)" />
                </svg>

                {/* Wordmark Lockup */}
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* CONCEPT 6: THE CELLULAR HORIZON */}
            {selectedConcept === 'cell' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="cell-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                    </linearGradient>
                  </defs>
                  {/* Outer Cellular Boundary Ring */}
                  <circle cx="44" cy="44" r="34" stroke="url(#cell-grad)" strokeWidth="6" />
                  {/* Subtle Horizon Line Split (Article 39: Minimal) */}
                  <line x1="18" y1="44" x2="70" y2="44" stroke="var(--tds-color-border-default)" strokeWidth="2.5" strokeDasharray="4 3" />
                  {/* The Living Nucleus / Sovereign Human Core */}
                  <circle cx="44" cy="32" r="8" fill="var(--tds-color-brand-primary)" />
                  {/* Upward Cellular Vector */}
                  <path d="M 44 48 L 44 68" stroke="var(--tds-color-text-primary)" strokeWidth="5" strokeLinecap="round" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* CONCEPT 7: THE VITAL QUADRANTS */}
            {selectedConcept === 'quadrants' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="quad-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-status-evidence)" />
                    </linearGradient>
                  </defs>
                  {/* Four Symmetrical Living Nodes (Nutrition, Sleep, Movement, Biomarkers) */}
                  {/* Top-Left */}
                  <rect x="20" y="20" width="20" height="20" rx="10" fill="url(#quad-grad)" />
                  {/* Top-Right */}
                  <rect x="48" y="20" width="20" height="20" rx="10" fill="var(--tds-color-text-primary)" opacity="0.9" />
                  {/* Bottom-Left */}
                  <rect x="20" y="48" width="20" height="20" rx="10" fill="var(--tds-color-text-primary)" opacity="0.3" />
                  {/* Bottom-Right */}
                  <rect x="48" y="48" width="20" height="20" rx="10" fill="url(#quad-grad)" />
                  {/* Central Living Intersection */}
                  <circle cx="44" cy="44" r="4.5" fill="var(--tds-color-bg-surface)" stroke="var(--tds-color-brand-primary)" strokeWidth="2" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* CONCEPT 8: THE GOLDEN KEYSTONE (100-YEAR MONOLITH T) */}
            {selectedConcept === 'keystone' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="keystone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-dark)" />
                    </linearGradient>
                  </defs>
                  {/* Floating Cantilever Header (The Shield) */}
                  <path
                    d="M 18 20 C 18 17, 70 17, 70 20 L 64 28 C 63 30, 25 30, 24 28 Z"
                    fill="url(#keystone-grad)"
                  />
                  {/* Tapered Central Monolith Pillar (The Spine of Health) */}
                  <path
                    d="M 40 33 L 48 33 L 46 72 C 46 75, 42 75, 42 72 Z"
                    fill="var(--tds-color-text-primary)"
                  />
                  {/* Subtle Precision Calibrated Core Dot */}
                  <circle cx="44" cy="50" r="3.5" fill="var(--tds-color-brand-accent)" />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* CONCEPT 1: THE HOMEOSTASIS RING */}
            {selectedConcept === 'homeostasis' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="homeo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                    </linearGradient>
                  </defs>
                  <path d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71" stroke="url(#homeo-grad)" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13" stroke="var(--tds-color-text-primary)" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
                  <circle cx="42" cy="42" r="5" fill="url(#homeo-grad)" />
                </svg>
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">TOVELU</span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">Towards Better Health</span>
                </div>
              </div>
            )}

            {/* CONCEPT 2: THE MERIDIAN T */}
            {selectedConcept === 'meridian' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="merid-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-brand-accent)" />
                    </linearGradient>
                  </defs>
                  <path d="M 16 32 C 30 32, 54 32, 68 32" stroke="var(--tds-color-text-primary)" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 42 72 L 42 16" stroke="url(#merid-grad)" strokeWidth="7" strokeLinecap="round" />
                  <circle cx="42" cy="14" r="4.5" fill="var(--tds-color-brand-primary)" />
                </svg>
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">TOVELU</span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">Towards Better Health</span>
                </div>
              </div>
            )}

            {/* CONCEPT 3: THE VITAL ORBIT */}
            {selectedConcept === 'orbit' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <defs>
                    <linearGradient id="orb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                      <stop offset="100%" stopColor="var(--tds-color-status-evidence)" />
                    </linearGradient>
                  </defs>
                  <circle cx="42" cy="42" r="30" stroke="var(--tds-color-border-default)" strokeWidth="3" strokeDasharray="3 4" />
                  <path d="M 42 16 A 26 26 0 1 1 20 54" stroke="url(#orb-grad)" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="42" cy="42" r="7" fill="var(--tds-color-brand-primary)" />
                </svg>
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">TOVELU</span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">Towards Better Health</span>
                </div>
              </div>
            )}

            {/* CONCEPT 4: THE GENESIS PILLARS */}
            {selectedConcept === 'pillars' && (
              <div className="flex flex-col items-center gap-5 animate-in zoom-in-95 duration-200">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="transition-transform hover:scale-105">
                  <rect x="24" y="24" width="10" height="42" rx="5" fill="var(--tds-color-text-primary)" opacity="0.85" />
                  <rect x="50" y="24" width="10" height="42" rx="5" fill="var(--tds-color-brand-primary)" />
                  <rect x="24" y="16" width="36" height="8" rx="4" fill="var(--tds-color-brand-primary)" />
                </svg>
                <div className="text-center space-y-1">
                  <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-text-primary block pl-1">TOVELU</span>
                  <span className="text-[10px] font-mono tracking-[0.28em] text-text-secondary uppercase block">Towards Better Health</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deep Strategic Rationale */}
        <CardContent className="pt-6 space-y-4">
          {selectedConcept === 'bioribbon' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 5: The Bio-Ribbon T (The Continuous Helix) ⭐
                </h4>
                <Badge variant="optimal" size="sm">Top Executive Choice</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A single continuous topological ribbon that sweeps across and down to form a fluid, living monogram <strong>T</strong>. Evokes the gentle twist of a DNA helix without drawing literal textbook rungs. Signifies unbroken health continuity across decades.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Identity</span>
                  <strong className="text-text-primary font-mono">Organic Modern "T"</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Feel</span>
                  <strong className="text-brand-primary font-mono">Living, Human & Tech</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Global Trademark</span>
                  <strong className="text-status-optimal font-mono">100% Unrestricted</strong>
                </div>
              </div>
            </div>
          )}

          {selectedConcept === 'cell' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 6: The Cellular Horizon (The Genesis of Life)
                </h4>
                <Badge variant="brand" size="sm">Cellular Medicine</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Every human being starts as a single living cell. A perfect outer membrane bisected by an equatorial baseline, housing a sovereign living nucleus. Universal across oncology, genomics, and daily longevity.
              </p>
            </div>
          )}

          {selectedConcept === 'quadrants' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 7: The Vital Quadrants (The Four Pillars of Health)
                </h4>
                <Badge variant="evidence" size="sm">Holistic Systems</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Four organic rounded capsule-nodes in dynamic balance around a central intersection point. Represents the four interdependent cornerstones of human health: <strong>Nutrition, Movement, Sleep, and Biomarkers</strong>.
              </p>
            </div>
          )}

          {selectedConcept === 'keystone' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 8: The Golden Keystone (100-Year Monolithic Architecture)
                </h4>
                <Badge variant="neutral" size="sm">Golden Ratio (1.618)</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Constructed with pure Golden Ratio proportions. A floating cantilever shield resting over a tapered central spine. Conveys unshakeable institutional permanence, clinical precision, and multi-decade trust.
              </p>
            </div>
          )}

          {selectedConcept === 'homeostasis' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 1: The Homeostasis Ring (The Living Equilibrium)
                </h4>
                <Badge variant="optimal" size="sm">Equilibrium</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Two interlocking open arcs cradling each other in continuous dynamic equilibrium. Forms a subtle optical &ldquo;T&rdquo; in negative space.
              </p>
            </div>
          )}

          {selectedConcept === 'meridian' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 2: The Meridian T (The Upward Vector)
                </h4>
                <Badge variant="brand" size="sm">Towards Better Health</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A horizontal baseline representing a patient&apos;s baseline health, with an ascending meridian vector embodying &ldquo;Towards Better Health&rdquo;.
              </p>
            </div>
          )}

          {selectedConcept === 'orbit' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 3: The Vital Orbit (The Focused Human Center)
                </h4>
                <Badge variant="evidence" size="sm">Article 2 Aligned</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                The protective outer ring guards privacy and safety, focusing directly on the individual human at the core.
              </p>
            </div>
          )}

          {selectedConcept === 'pillars' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 4: The Genesis Pillars
                </h4>
                <Badge variant="neutral" size="sm">Science & Humanity</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Two unshakeable pillars representing Human Biology and Objective Evidence, bridged by Tovelu&apos;s intelligence architecture.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Global Sector Fit Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Healthcare Industry Sector Versatility</CardTitle>
          <CardDescription>
            Testing universal suitability across all major healthcare verticals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-subtle border border-border-subtle">
              <span className="font-semibold text-text-primary block">Wearables & Sensors</span>
              <span className="text-[11px] text-text-secondary">Crisp on 12mm silicon</span>
            </div>
            <div className="p-3 rounded-lg bg-subtle border border-border-subtle">
              <span className="font-semibold text-text-primary block">Clinical Lab Panels</span>
              <span className="text-[11px] text-text-secondary">Authoritative on PDF / EHR</span>
            </div>
            <div className="p-3 rounded-lg bg-subtle border border-border-subtle">
              <span className="font-semibold text-text-primary block">AI Health Intelligence</span>
              <span className="text-[11px] text-text-secondary">Modern tech prestige</span>
            </div>
            <div className="p-3 rounded-lg bg-subtle border border-border-subtle">
              <span className="font-semibold text-text-primary block">Hospital & Pharmacy</span>
              <span className="text-[11px] text-text-secondary">Zero religious conflict</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
