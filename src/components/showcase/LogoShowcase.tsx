import React, { useState } from 'react';
import { Sparkles, Sun, Flame, Orbit, Moon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type SolVariationId = 'circadian_sol' | 'prismatic_spark' | 'vital_eclipse' | 'genesis_core';

export const LogoShowcase: React.FC = () => {
  const [selectedSol, setSelectedSol] = useState<SolVariationId>('circadian_sol');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Sun className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Living Biological Sol Family • 4 Master Explorations
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Universal Solar Archetype
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          The Living Biological Spark (Sol Archetype)
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The circular solar sphere is the most sacred, universal symbol of life across all 8 billion humans (circadian biology, the living cell, energy metabolism, and vital warmth). Here are 4 distinct, iconic ways to own this shape:
        </p>
      </div>

      {/* 4 Sol Variations Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button
          size="sm"
          variant={selectedSol === 'circadian_sol' ? 'primary' : 'secondary'}
          onClick={() => setSelectedSol('circadian_sol')}
          className="text-xs font-semibold py-2.5"
        >
          1. The Circadian Sol ⭐
        </Button>
        <Button
          size="sm"
          variant={selectedSol === 'prismatic_spark' ? 'primary' : 'secondary'}
          onClick={() => setSelectedSol('prismatic_spark')}
          className="text-xs font-semibold py-2.5"
        >
          2. The Prismatic Spark
        </Button>
        <Button
          size="sm"
          variant={selectedSol === 'vital_eclipse' ? 'primary' : 'secondary'}
          onClick={() => setSelectedSol('vital_eclipse')}
          className="text-xs font-semibold py-2.5"
        >
          3. The Vital Eclipse
        </Button>
        <Button
          size="sm"
          variant={selectedSol === 'genesis_core' ? 'primary' : 'secondary'}
          onClick={() => setSelectedSol('genesis_core')}
          className="text-xs font-semibold py-2.5"
        >
          4. The Genesis Core
        </Button>
      </div>

      {/* Hero Showcase Display: Standalone Isolated Solar Mark */}
      <Card className="overflow-hidden">
        <div className="p-12 sm:p-20 bg-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[380px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. THE CIRCADIAN SOL (DUAL-ARC BREATHING EQUILIBRIUM) */}
            {selectedSol === 'circadian_sol' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* Pure circular solar disc with an organic dual-crescent carve forming an optical living "T" */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 10 C 72.09 10, 90 27.91, 90 50 C 90 72.09, 72.09 90, 50 90 C 27.91 90, 10 72.09, 10 50 C 10 27.91, 27.91 10, 50 10 Z M 32 34 C 44 34, 56 34, 68 34 C 68 42, 58 42, 54 46 L 54 70 C 54 74, 46 74, 46 70 L 46 46 C 42 42, 32 42, 32 34 Z M 50 22 C 53.31 22, 56 24.69, 56 28 C 56 31.31, 53.31 34, 50 34 C 46.69 34, 44 31.31, 44 28 C 44 24.69, 46.69 22, 50 22 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.28em] text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.34em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE PRISMATIC SPARK (THE ASCENDING VITALITY APEX) */}
            {selectedSol === 'prismatic_spark' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* A solar disc where a sweeping crescent scoops up to reveal a soaring vital ember */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 12 C 70.98 12, 88 29.02, 88 50 C 88 70.98, 70.98 88, 50 88 C 29.02 88, 12 70.98, 12 50 C 12 29.02, 29.02 12, 50 12 Z M 50 26 C 62 26, 72 36, 72 48 C 72 64, 54 74, 38 68 C 50 64, 58 54, 58 44 C 58 34, 54 28, 50 26 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                    {/* The Spark of Life (Ascending Nucleus) */}
                    <circle cx="38" cy="36" r="6.5" fill="currentColor" className="text-brand-primary" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.28em] text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.34em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 3. THE VITAL ECLIPSE (THE CALM PLANETARY HORIZON) */}
            {selectedSol === 'vital_eclipse' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* Pure solar disc with a calm negative-space horizontal arch cradling an inner living lens */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 12 C 70.98 12, 88 29.02, 88 50 C 88 70.98, 70.98 88, 50 88 C 29.02 88, 12 70.98, 12 50 C 12 29.02, 29.02 12, 50 12 Z M 24 52 C 34 66, 66 66, 76 52 C 64 58, 36 58, 24 52 Z M 50 26 C 56.63 26, 62 31.37, 62 38 C 62 44.63, 56.63 50, 50 50 C 43.37 50, 38 44.63, 38 38 C 38 31.37, 43.37 26, 50 26 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.28em] text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.34em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 4. THE GENESIS CORE (THE CELLULAR EMBRYO / MÖBIUS SOL) */}
            {selectedSol === 'genesis_core' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* A solar sphere with an unbroken, continuous topological ribbon cradling the living ember */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 12 C 70.98 12, 88 29.02, 88 50 C 88 70.98, 70.98 88, 50 88 C 29.02 88, 12 70.98, 12 50 C 12 29.02, 29.02 12, 50 12 Z M 50 22 C 65.46 22, 78 34.54, 78 50 C 78 65.46, 65.46 78, 50 78 C 34.54 78, 22 65.46, 22 50 C 22 34.54, 34.54 22, 50 22 Z M 50 32 C 40 32, 36 42, 42 54 L 50 66 L 58 54 C 64 42, 60 32, 50 32 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                    <circle cx="50" cy="44" r="5" fill="currentColor" className="text-text-primary" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.28em] text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.34em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deep Analysis of Solar Archetype */}
        <CardContent className="pt-6 space-y-4">
          {selectedSol === 'circadian_sol' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Concept 1: The Circadian Sol (Top Recommendation) ⭐
                </h4>
                <Badge variant="optimal" size="sm">Pure Global Perfection</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                The perfect solid solar sphere bisected by a living dual-crescent interior. It forms an optical architectural modern &ldquo;T&rdquo; while evoking the 24-hour circadian biological rhythm of human life. The upper ember symbolizes human consciousness and metabolic vitality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Archetype</span>
                  <strong className="text-text-primary font-mono">The Living Sol</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Biological Meaning</span>
                  <strong className="text-brand-primary font-mono">Circadian Rhythm & Life</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Negative Space</span>
                  <strong className="text-status-optimal font-mono">Subtle Modern "T"</strong>
                </div>
              </div>
            </div>
          )}

          {selectedSol === 'prismatic_spark' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-primary" />
                  Concept 2: The Prismatic Spark
                </h4>
                <Badge variant="brand" size="sm">Energy & Renewal</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A solid sphere where an organic crescent sweeps up like a flame or cellular membrane, releasing a floating vital nucleus. Symbolizes energy metabolism, mitochondrial vitality, and cellular renewal.
              </p>
            </div>
          )}

          {selectedSol === 'vital_eclipse' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Moon className="w-4 h-4 text-brand-primary" />
                  Concept 3: The Vital Eclipse
                </h4>
                <Badge variant="evidence" size="sm">Planetary Calm</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A serene, horizontal planetary arch cradling an inner living lens. Brings supreme calm and peaceful equilibrium—the antidote to healthcare panic.
              </p>
            </div>
          )}

          {selectedSol === 'genesis_core' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Orbit className="w-4 h-4 text-brand-primary" />
                  Concept 4: The Genesis Core
                </h4>
                <Badge variant="neutral" size="sm">Cellular Embryo</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A continuous topological ribbon cradling the living ember at the center of the cell. Represents unbroken genetic integrity and lifelong health protection.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* The Standalone Billboard Test (Zero Text Test) */}
      <Card>
        <CardHeader>
          <CardTitle>The "Zero-Text Billboard Test" (The Nike/Apple Standard)</CardTitle>
          <CardDescription>
            Notice how The Circadian Sol commands instant global recognition with zero words:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {/* Pure Black on White */}
            <div className="p-10 rounded-2xl bg-white border border-slate-200 text-black flex flex-col items-center justify-center gap-4 shadow-subtle min-h-[180px]">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M 50 10 C 72.09 10, 90 27.91, 90 50 C 90 72.09, 72.09 90, 50 90 C 27.91 90, 10 72.09, 10 50 C 10 27.91, 27.91 10, 50 10 Z M 32 34 C 44 34, 56 34, 68 34 C 68 42, 58 42, 54 46 L 54 70 C 54 74, 46 74, 46 70 L 46 46 C 42 42, 32 42, 32 34 Z M 50 22 C 53.31 22, 56 24.69, 56 28 C 56 31.31, 53.31 34, 50 34 C 46.69 34, 44 31.31, 44 28 C 44 24.69, 46.69 22, 50 22 Z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Solid Black • 1-Second Recognition
              </span>
            </div>

            {/* Pure White on Deep Obsidian */}
            <div className="p-10 rounded-2xl bg-slate-950 border border-slate-800 text-white flex flex-col items-center justify-center gap-4 shadow-card min-h-[180px]">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M 50 10 C 72.09 10, 90 27.91, 90 50 C 90 72.09, 72.09 90, 50 90 C 27.91 90, 10 72.09, 10 50 C 10 27.91, 27.91 10, 50 10 Z M 32 34 C 44 34, 56 34, 68 34 C 68 42, 58 42, 54 46 L 54 70 C 54 74, 46 74, 46 70 L 46 46 C 42 42, 32 42, 32 34 Z M 50 22 C 53.31 22, 56 24.69, 56 28 C 56 31.31, 53.31 34, 50 34 C 46.69 34, 44 31.31, 44 28 C 44 24.69, 46.69 22, 50 22 Z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Solid White • Laser-Etched Hardware
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
