import React, { useState } from 'react';
import { Sparkles, Zap, Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type IconicMarkId = 'vital_swoosh' | 'living_seed' | 'sovereign_crest' | 'mobius_t' | 'homeostasis';

export const LogoShowcase: React.FC = () => {
  const [selectedMark, setSelectedMark] = useState<IconicMarkId>('vital_swoosh');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Flame className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Apple & Nike Standard • Sovereign Single-Stroke Silhouettes
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Zero Clutter • 1-Second Recognition
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Single-Silhouette Master Marks (Nike & Apple Tier)
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The greatest marks in human history (Apple, Nike) are not diagrams—they are <strong>one single, unmistakable, iconic silhouette</strong> that a child can draw in the sand in one second. Bold, aerodynamic, living, and universally timeless.
        </p>
      </div>

      {/* Top Selector: 4 Master Single-Silhouette Marks */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
          Choose a Single-Silhouette Archetype:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Button
            size="sm"
            variant={selectedMark === 'vital_swoosh' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('vital_swoosh')}
            className="text-xs font-semibold"
          >
            1. The Vital Swoosh ⭐ (Nike Tier)
          </Button>
          <Button
            size="sm"
            variant={selectedMark === 'living_seed' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('living_seed')}
            className="text-xs font-semibold"
          >
            2. The Living Seed 🍎 (Apple Tier)
          </Button>
          <Button
            size="sm"
            variant={selectedMark === 'sovereign_crest' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('sovereign_crest')}
            className="text-xs font-semibold"
          >
            3. The Sovereign Crest
          </Button>
          <Button
            size="sm"
            variant={selectedMark === 'mobius_t' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('mobius_t')}
            className="text-xs font-semibold"
          >
            4. The Möbius T
          </Button>
        </div>
      </div>

      {/* Hero Canvas Surface: Pure Solid Silhouette Testing */}
      <Card className="overflow-hidden">
        <div className="p-10 sm:p-16 bg-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[340px]">
          <div className="flex flex-col items-center gap-8 select-none">
            
            {/* 1. THE VITAL SWOOSH (THE NIKE TIER - HEALTH MOMENTUM) */}
            {selectedMark === 'vital_swoosh' && (
              <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
                <svg width="104" height="104" viewBox="0 0 100 100" fill="none" className="transition-transform hover:scale-105">
                  {/* Single continuous aerodynamic stroke: sweeps from grounded left, carves an organic cradle, and launches upward into an electric tapered apex */}
                  <path
                    d="M 12 56 C 24 68, 42 78, 62 66 C 76 56, 84 36, 88 16 C 82 32, 68 46, 50 48 C 34 50, 22 44, 12 56 Z"
                    fill="currentColor"
                    className="text-brand-primary"
                  />
                  {/* Complementary Upper Arc completing the dynamic "T" horizon */}
                  <path
                    d="M 28 24 C 44 20, 68 20, 84 26 C 72 26, 56 28, 44 34 C 36 38, 30 30, 28 24 Z"
                    fill="currentColor"
                    className="text-text-primary"
                    opacity="0.85"
                  />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.26em] text-text-primary block pl-1.5">
                    TOVELU
                  </span>
                  <span className="text-[11px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE LIVING SEED (THE APPLE TIER - ORGANIC LIFE WITH A NOTCH) */}
            {selectedMark === 'living_seed' && (
              <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="transition-transform hover:scale-105">
                  {/* An iconic organic seed/drop silhouette with an optical circular notch carved into the top right, revealing a modern 'T' negative silhouette */}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 50 14 C 66 14, 82 28, 82 52 C 82 72, 68 86, 50 86 C 32 86, 18 72, 18 52 C 18 28, 34 14, 50 14 Z M 58 24 C 54 34, 62 44, 74 44 C 76 34, 68 24, 58 24 Z"
                    fill="currentColor"
                    className="text-brand-primary"
                  />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.26em] text-text-primary block pl-1.5">
                    TOVELU
                  </span>
                  <span className="text-[11px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 3. THE SOVEREIGN CREST (PURE PROTECTION & VITALITY) */}
            {selectedMark === 'sovereign_crest' && (
              <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="transition-transform hover:scale-105">
                  {/* Single-piece aerodynamic shield with clean sweeping shoulders forming a majestic modern "T" */}
                  <path
                    d="M 16 26 C 34 26, 44 22, 50 16 C 56 22, 66 26, 84 26 C 84 54, 68 76, 50 86 C 32 76, 16 54, 16 26 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinejoin="round"
                    className="text-brand-primary"
                  />
                  {/* Central Spine of Health */}
                  <path
                    d="M 50 32 L 50 68"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-text-primary"
                  />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.26em] text-text-primary block pl-1.5">
                    TOVELU
                  </span>
                  <span className="text-[11px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 4. THE MÖBIUS T (INFINITE LIFELONG HEALTH) */}
            {selectedMark === 'mobius_t' && (
              <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="transition-transform hover:scale-105">
                  {/* Bold sculptural monolithic T with continuous organic curve */}
                  <path
                    d="M 22 28 C 36 28, 64 28, 78 28 C 78 36, 60 36, 56 40 L 56 76 C 56 82, 44 82, 44 76 L 44 40 C 40 36, 22 36, 22 28 Z"
                    fill="currentColor"
                    className="text-brand-primary"
                  />
                </svg>

                <div className="text-center space-y-1">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.26em] text-text-primary block pl-1.5">
                    TOVELU
                  </span>
                  <span className="text-[11px] font-mono tracking-[0.32em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deep Analysis of Nike/Apple Attributes */}
        <CardContent className="pt-6 space-y-4">
          {selectedMark === 'vital_swoosh' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" />
                  Concept 1: The Vital Swoosh (Nike Tier)
                </h4>
                <Badge variant="optimal" size="sm">Pure Momentum</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Just as the Nike Swoosh captures speed and athletic triumph, <strong>The Vital Swoosh</strong> captures <strong>Biological Momentum</strong>. It begins grounded in human reality, dips through a calm organic cradle, and accelerates upward into an electric tapered vector representing <em>&ldquo;Towards Better Health&rdquo;</em>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Simplicity</span>
                  <strong className="text-text-primary font-mono">1-Second Recognition</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Motion Feel</span>
                  <strong className="text-brand-primary font-mono">Continuous Elevation</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Hardware & Fabric</span>
                  <strong className="text-status-optimal font-mono">Laser-Etch Clean</strong>
                </div>
              </div>
            </div>
          )}

          {selectedMark === 'living_seed' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Concept 2: The Living Seed (Apple Tier)
                </h4>
                <Badge variant="brand" size="sm">Organic Icon</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Like the bitten Apple, this mark takes a universal organic form—<strong>The Seed of Life / The Vital Drop</strong>—and cuts a distinct circular notch into its shoulder. This notch provides immediate iconic scale and creates an unmistakable silhouette that cannot be confused with any generic drop or seed.
              </p>
            </div>
          )}

          {selectedMark === 'sovereign_crest' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 3: The Sovereign Crest
                </h4>
                <Badge variant="evidence" size="sm">Protection & Shield</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A single aerodynamic crest silhouette representing health defense, privacy protection, and physical resilience. Clean sweeping shoulders form a majestic modern &ldquo;T&rdquo;.
              </p>
            </div>
          )}

          {selectedMark === 'mobius_t' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  Concept 4: The Möbius T
                </h4>
                <Badge variant="neutral" size="sm">Sculptural T</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A bold, monolithic sculptural lettermark. Broad, confident canopy tapering into an unshakeable vertical stem. Represents multi-decade stability.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* The 1-Color Silhouette Test (The Apple/Nike Benchmark) */}
      <Card>
        <CardHeader>
          <CardTitle>The "Laser-Etched Metal & T-Shirt" Test</CardTitle>
          <CardDescription>
            Apple and Nike look breathtaking even with zero colors—stamped into titanium or printed in pure black/white ink.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {/* Pure Black on Pure White */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-black flex flex-col items-center justify-center gap-3 shadow-subtle">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Pure Solid Black (#000000)</span>
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 12 56 C 24 68, 42 78, 62 66 C 76 56, 84 36, 88 16 C 82 32, 68 46, 50 48 C 34 50, 22 44, 12 56 Z" />
                  <path d="M 28 24 C 44 20, 68 20, 84 26 C 72 26, 56 28, 44 34 C 36 38, 30 30, 28 24 Z" opacity="0.85" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-[0.2em]">TOVELU</span>
            </div>

            {/* Pure White on Pure Obsidian */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-white flex flex-col items-center justify-center gap-3 shadow-card">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Pure Solid White (#FFFFFF)</span>
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 12 56 C 24 68, 42 78, 62 66 C 76 56, 84 36, 88 16 C 82 32, 68 46, 50 48 C 34 50, 22 44, 12 56 Z" />
                  <path d="M 28 24 C 44 20, 68 20, 84 26 C 72 26, 56 28, 44 34 C 36 38, 30 30, 28 24 Z" opacity="0.85" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-[0.2em]">TOVELU</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
