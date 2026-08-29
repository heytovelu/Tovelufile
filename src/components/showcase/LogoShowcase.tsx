import React, { useState } from 'react';
import { Sparkles, Eye, Compass } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type ProprietaryMarkId = 'glyph_nexus' | 'vital_delta' | 'equi_sol';

export const LogoShowcase: React.FC = () => {
  const [selectedMark, setSelectedMark] = useState<ProprietaryMarkId>('glyph_nexus');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Sovereign Identity Standard (100% Original to Tovelu)
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Standalone Global Trademark
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          A Symbol That Becomes a Global Phenomenon
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Not mimicking Apple&apos;s fruit or Nike&apos;s wing. Instead, owning an entirely new, iconic geometric silhouette that belongs solely to <strong>TOVELU</strong>. When 8 billion people see this shape with zero text, they instantly know: <em>That is Tovelu</em>.
        </p>
      </div>

      {/* 3 Breakthrough Proprietary Archetypes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <Button
          variant={selectedMark === 'glyph_nexus' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('glyph_nexus')}
          className="text-xs font-semibold py-3"
        >
          1. The Tovelu Nexus (Top Choice) ⭐
        </Button>
        <Button
          variant={selectedMark === 'vital_delta' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('vital_delta')}
          className="text-xs font-semibold py-3"
        >
          2. The Vital Delta (The Elevation)
        </Button>
        <Button
          variant={selectedMark === 'equi_sol' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('equi_sol')}
          className="text-xs font-semibold py-3"
        >
          3. The Equilibrium Sol
        </Button>
      </div>

      {/* Hero Canvas: Standalone Isolated Symbol Test */}
      <Card className="overflow-hidden">
        <div className="p-12 sm:p-20 bg-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[380px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. THE TOVELU NEXUS (PROPRIETARY SYMBOL) */}
            {selectedMark === 'glyph_nexus' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                {/* Standalone Sovereign Icon */}
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* Upper Horizon Canopy: Gently curved, sheltering, broad */}
                    <path
                      d="M 14 30 C 26 22, 74 22, 86 30 C 82 38, 62 34, 50 34 C 38 34, 18 38, 14 30 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                    {/* The Interlocking Vital Stem: Dynamic parabolic keel */}
                    <path
                      d="M 50 36 C 58 36, 62 46, 56 64 C 53 74, 47 74, 44 64 C 38 46, 42 36, 50 36 Z"
                      fill="currentColor"
                      className="text-text-primary"
                    />
                    {/* Sovereign Central Meridian Eye (Humanity Core) */}
                    <circle
                      cx="50"
                      cy="48"
                      r="4"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                  </svg>
                </div>

                {/* The Wordmark Lockup */}
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

            {/* 2. THE VITAL DELTA (THE TRIANGULAR ELEVATION OF LIFE) */}
            {selectedMark === 'vital_delta' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* Pure monolithic continuous triangular gateway of human elevation */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 14 C 54 14, 57 16, 59 20 L 86 68 C 89 74, 85 82, 78 82 L 22 82 C 15 82, 11 74, 14 68 L 41 20 C 43 16, 46 14, 50 14 Z M 50 36 C 43 36, 38 42, 40 50 L 45 66 C 46 70, 54 70, 55 66 L 60 50 C 62 42, 57 36, 50 36 Z"
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

            {/* 3. THE EQUILIBRIUM SOL (THE LIVING BIOLOGICAL SPARK) */}
            {selectedMark === 'equi_sol' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
                    {/* Pure, continuous geometric disc with an organic parabolic carve */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M 50 12 C 70.98 12, 88 29.02, 88 50 C 88 70.98, 70.98 88, 50 88 C 29.02 88, 12 70.98, 12 50 C 12 29.02, 29.02 12, 50 12 Z M 50 24 C 64.36 24, 76 35.64, 76 50 C 76 58, 72 65, 66 70 C 60 62, 56 46, 56 36 C 56 30, 53 24, 50 24 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-[0.28em] text-text-primary block pl-2">
                    TOVELU
                  </span>
                  <span className="text-[11px] font-mono tracking-[0.34em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Strategic Analysis */}
        <CardContent className="pt-6 space-y-4">
          {selectedMark === 'glyph_nexus' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  The Tovelu Nexus: Why This Can Become a Global Icon
                </h4>
                <Badge variant="optimal" size="sm">100% Unique to Tovelu</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Notice the silhouette: It does not look like any existing company on Earth. It has an overarching protective horizon canopy (representing care, shelter, and public health infrastructure) interlocking seamlessly with a grounded central stem (representing the human spine, personal metrics, and scientific truth).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Ownership</span>
                  <strong className="text-text-primary font-mono">100% Proprietary Shape</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Letter Harmony</span>
                  <strong className="text-brand-primary font-mono">Subtle "T" + "V" Silhouette</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">The Standalone Test</span>
                  <strong className="text-status-optimal font-mono">Recognizable with No Text</strong>
                </div>
              </div>
            </div>
          )}

          {selectedMark === 'vital_delta' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-primary" />
                  The Vital Delta: The Universal Symbol of Human Elevation
                </h4>
                <Badge variant="brand" size="sm">Mathematical & Vital</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                In mathematics and science, Delta ($\Delta$) is the universal symbol for change and transformation. The soft rounded portal in the center protects the human, while the monolithic triangular geometry points upward toward lifelong vitality.
              </p>
            </div>
          )}

          {selectedMark === 'equi_sol' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-primary" />
                  The Equilibrium Sol: The Living Biological Spark
                </h4>
                <Badge variant="evidence" size="sm">Organic Sphere</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A single solid circle carved by an asymmetrical living arc. Represents the biological cycle of life, renewal, and continuous health intelligence.
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
            When Nike puts a swoosh on a billboard in Tokyo with zero words, you know it is Nike. When Apple puts an apple in Paris with zero words, you know it is Apple. This is how Tovelu looks completely isolated:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {/* Pure Black on White */}
            <div className="p-10 rounded-2xl bg-white border border-slate-200 text-black flex flex-col items-center justify-center gap-4 shadow-subtle min-h-[180px]">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 14 30 C 26 22, 74 22, 86 30 C 82 38, 62 34, 50 34 C 38 34, 18 38, 14 30 Z" />
                  <path d="M 50 36 C 58 36, 62 46, 56 64 C 53 74, 47 74, 44 64 C 38 46, 42 36, 50 36 Z" />
                  <circle cx="50" cy="48" r="4" fill="white" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                No Name Needed • Instant Recognition
              </span>
            </div>

            {/* Pure White on Deep Obsidian */}
            <div className="p-10 rounded-2xl bg-slate-950 border border-slate-800 text-white flex flex-col items-center justify-center gap-4 shadow-card min-h-[180px]">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 14 30 C 26 22, 74 22, 86 30 C 82 38, 62 34, 50 34 C 38 34, 18 38, 14 30 Z" />
                  <path d="M 50 36 C 58 36, 62 46, 56 64 C 53 74, 47 74, 44 64 C 38 46, 42 36, 50 36 Z" />
                  <circle cx="50" cy="48" r="4" fill="#090D14" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Laser-Etched Titanium Complication
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
