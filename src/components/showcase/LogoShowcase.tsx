import React, { useState } from 'react';
import { Sparkles, Brain, Layers, Circle, Compass } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type GooglePsychologyId = 'google_t_roundel' | 'vital_aperture' | 'material_pill_t' | 'deep_orbital';

export const LogoShowcase: React.FC = () => {
  const [selectedMark, setSelectedMark] = useState<GooglePsychologyId>('google_t_roundel');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner: The Google Design Psychology */}
      <div className="rounded-xl border-2 border-brand-primary/30 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Brain className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Google Design Psychology • The Democratic Universal Standard
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Material Geometry • Zero Intimidation
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          How Google Designs for 8 Billion Humans
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Google never designs elitist, aristocratic luxury crests. Google designs with <strong>Cognitive Psychology</strong>: pure geometric primitives, approachable curves, mathematically calibrated arcs, and instant 50-millisecond cognitive recognition for every human on Earth.
        </p>

        {/* 4 Google-Psychology Archetype Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <Button
            size="sm"
            variant={selectedMark === 'google_t_roundel' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('google_t_roundel')}
            className="text-xs font-semibold py-3"
          >
            1. The Tovelu "T" Roundel ⭐
          </Button>

          <Button
            size="sm"
            variant={selectedMark === 'vital_aperture' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('vital_aperture')}
            className="text-xs font-semibold py-3"
          >
            2. The Vital Aperture
          </Button>

          <Button
            size="sm"
            variant={selectedMark === 'material_pill_t' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('material_pill_t')}
            className="text-xs font-semibold py-3"
          >
            3. The Material Pill T
          </Button>

          <Button
            size="sm"
            variant={selectedMark === 'deep_orbital' ? 'primary' : 'secondary'}
            onClick={() => setSelectedMark('deep_orbital')}
            className="text-xs font-semibold py-3"
          >
            4. The Health Orbital
          </Button>
        </div>
      </div>

      {/* Hero Showcase Display: Standalone Isolated Google-Grade Mark */}
      <Card className="overflow-hidden border-2 border-border-default shadow-elevated">
        <div className="p-12 sm:p-20 bg-gradient-to-b from-subtle/40 via-surface to-subtle/20 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[420px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. THE TOVELU "T" ROUNDEL (THE GOOGLE "G" PARADIGM FOR TOVELU) */}
            {selectedMark === 'google_t_roundel' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    {/* Google Psychology: A perfect circle sliced into 4 harmonious health quadrants forming a clean 'T' */}
                    {/* Top-Left Arc: Deep Teal (Science & Clinical Intelligence) */}
                    <path
                      d="M 50 10 A 40 40 0 0 0 10 50 L 32 50 A 18 18 0 0 1 50 32 Z"
                      fill="#0D9488"
                    />
                    {/* Top-Right Arc: Bright Emerald (Optimal Recovery & Longevity) */}
                    <path
                      d="M 50 10 A 40 40 0 0 1 90 50 L 68 50 A 18 18 0 0 0 50 32 Z"
                      fill="#10B981"
                    />
                    {/* Bottom-Right Arc: Warm Coral (Metabolic Vitality & Life) */}
                    <path
                      d="M 90 50 A 40 40 0 0 1 50 90 L 50 68 A 18 18 0 0 0 68 50 Z"
                      fill="#F59E0B"
                    />
                    {/* Bottom-Left Arc: Deep Cobalt (Privacy & E2E Trust) */}
                    <path
                      d="M 50 90 A 40 40 0 0 1 10 50 L 32 50 A 18 18 0 0 0 50 68 Z"
                      fill="#3B82F6"
                    />
                    {/* Central Pure Horizontal Crossbar & Vertical Stem forming the crisp "T" */}
                    <rect x="26" y="26" width="48" height="12" rx="6" fill="#0D9488" />
                    <rect x="44" y="34" width="12" height="40" rx="6" fill="#0D9488" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-bold tracking-[0.06em] text-3xl sm:text-4xl text-text-primary block">
                    Tovelu
                  </span>
                  <span className="text-xs font-medium text-text-secondary tracking-wide block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE VITAL APERTURE (THE CHROME / PHOTOS DYNAMIC HARMONY) */}
            {selectedMark === 'vital_aperture' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    {/* Google Psychology: 3 overlapping circular rotational blades representing the human health cycle: Data -> Insight -> Action */}
                    {/* Blade 1: Teal (Data & Wearables) */}
                    <path
                      d="M 50 14 A 36 36 0 0 1 84 38 L 64 50 A 14 14 0 0 0 50 28 Z"
                      fill="#0D9488"
                    />
                    {/* Blade 2: Emerald (Evidence & Insight) */}
                    <path
                      d="M 84 38 A 36 36 0 0 1 50 86 L 50 64 A 14 14 0 0 0 64 50 Z"
                      fill="#10B981"
                    />
                    {/* Blade 3: Amber (Human Vitality & Action) */}
                    <path
                      d="M 50 86 A 36 36 0 0 1 16 38 L 36 50 A 14 14 0 0 0 50 64 Z"
                      fill="#F59E0B"
                    />
                    {/* Inner Pure White Iris with Central T Dot */}
                    <circle cx="50" cy="50" r="14" fill="var(--tds-color-bg-surface)" />
                    <circle cx="50" cy="50" r="6" fill="#0D9488" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-bold tracking-[0.06em] text-3xl sm:text-4xl text-text-primary block">
                    Tovelu
                  </span>
                  <span className="text-xs font-medium text-text-secondary tracking-wide block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 3. THE MATERIAL PILL T (THE FRIENDLY, TOUCHABLE GEOMETRY) */}
            {selectedMark === 'material_pill_t' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    {/* Outer Gentle Circular Protection Shield */}
                    <circle cx="50" cy="50" r="42" fill="var(--tds-color-brand-subtle)" />
                    {/* Horizontal Pill Bar (Teal: Scientific Care) */}
                    <rect x="22" y="32" width="56" height="14" rx="7" fill="#0D9488" />
                    {/* Vertical Pill Stem (Emerald: Living Health) */}
                    <rect x="43" y="32" width="14" height="42" rx="7" fill="#10B981" />
                    {/* The Intersecting Health Junction */}
                    <rect x="43" y="32" width="14" height="14" rx="7" fill="#042F2E" opacity="0.15" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-bold tracking-[0.06em] text-3xl sm:text-4xl text-text-primary block">
                    Tovelu
                  </span>
                  <span className="text-xs font-medium text-text-secondary tracking-wide block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 4. THE HEALTH ORBITAL (DEEPMIND / GOOGLE HEALTH AI INTELLIGENCE) */}
            {selectedMark === 'deep_orbital' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    {/* Outer Multi-Segment Orbit: Continuous Learning */}
                    <circle cx="50" cy="50" r="38" stroke="#E2E8F0" strokeWidth="4" />
                    {/* Top Quadrant: Teal */}
                    <path d="M 50 12 A 38 38 0 0 1 88 50" stroke="#0D9488" strokeWidth="8" strokeLinecap="round" />
                    {/* Bottom Quadrant: Emerald */}
                    <path d="M 50 88 A 38 38 0 0 1 12 50" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
                    {/* Inner Living Core: The Human Individual */}
                    <circle cx="50" cy="50" r="14" fill="#0D9488" />
                    <circle cx="50" cy="50" r="6" fill="white" />
                  </svg>
                </div>

                <div className="text-center space-y-1.5">
                  <span className="font-sans font-bold tracking-[0.06em] text-3xl sm:text-4xl text-text-primary block">
                    Tovelu
                  </span>
                  <span className="text-xs font-medium text-text-secondary tracking-wide block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deep Psychological Analysis */}
        <CardContent className="pt-6 space-y-4">
          {selectedMark === 'google_t_roundel' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  1. The Tovelu "T" Roundel (The Google "G" Equivalent) ⭐
                </h4>
                <Badge variant="optimal" size="sm">50ms Instant Recognition</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Just like Google revolutionized brand identity by turning the letter <strong>"G"</strong> into a 4-color circular geometric primitive, this mark turns <strong>Tovelu&apos;s "T"</strong> into a pure, friendly circular medallion. It uses Google&apos;s psychological principles: zero intimidation, mathematically pure arcs, and four semantic healthcare color segments:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="w-3 h-3 rounded-full bg-[#0D9488] inline-block mr-1.5 align-middle" />
                  <strong className="text-text-primary font-mono text-[11px]">Deep Teal</strong>
                  <span className="text-text-muted block text-[10px]">Science & Clinical</span>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block mr-1.5 align-middle" />
                  <strong className="text-text-primary font-mono text-[11px]">Emerald</strong>
                  <span className="text-text-muted block text-[10px]">Optimal Recovery</span>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block mr-1.5 align-middle" />
                  <strong className="text-text-primary font-mono text-[11px]">Warm Amber</strong>
                  <span className="text-text-muted block text-[10px]">Metabolic Life</span>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="w-3 h-3 rounded-full bg-[#3B82F6] inline-block mr-1.5 align-middle" />
                  <strong className="text-text-primary font-mono text-[11px]">Cobalt Blue</strong>
                  <span className="text-text-muted block text-[10px]">E2E Privacy</span>
                </div>
              </div>
            </div>
          )}

          {selectedMark === 'vital_aperture' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-primary" />
                  2. The Vital Aperture (The Chrome Dynamic Harmony)
                </h4>
                <Badge variant="brand" size="sm">Rotational Momentum</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Applies the psychology of the Google Chrome aperture. Three rotational blades representing the virtuous loop of health: <strong>Biosignal Data $\rightarrow$ Evidence Synthesis $\rightarrow$ Human Action</strong>.
              </p>
            </div>
          )}

          {selectedMark === 'material_pill_t' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-primary" />
                  3. The Material Pill T (Material You Friendly Geometry)
                </h4>
                <Badge variant="evidence" size="sm">Material You Tactile</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Uses Google&apos;s &ldquo;Material You&rdquo; rounded-capsule pills. Approachable, warm, and inviting. It communicates that healthcare doesn&apos;t have to hurt or frighten you.
              </p>
            </div>
          )}

          {selectedMark === 'deep_orbital' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Circle className="w-4 h-4 text-brand-primary" />
                  4. The Health Orbital (DeepMind / AI Intelligence)
                </h4>
                <Badge variant="neutral" size="sm">AI Planetary Orbit</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Concentric geometric orbits focusing on the individual human at the core. Clean, mathematical, and deeply intelligent.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* The Google Multi-Platform Test (Favicon, App Icon, Watch Dial) */}
      <Card>
        <CardHeader>
          <CardTitle>Google Psychology: The Universal Scale Test</CardTitle>
          <CardDescription>
            Google logos are legendary because they work identically on a 65-inch television, an Android notification bar, and a tiny 16px favicon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {/* 64px Android Adaptive Icon */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <path d="M 50 10 A 40 40 0 0 0 10 50 L 32 50 A 18 18 0 0 1 50 32 Z" fill="#0D9488" />
                  <path d="M 50 10 A 40 40 0 0 1 90 50 L 68 50 A 18 18 0 0 0 50 32 Z" fill="#10B981" />
                  <path d="M 90 50 A 40 40 0 0 1 50 90 L 50 68 A 18 18 0 0 0 68 50 Z" fill="#F59E0B" />
                  <path d="M 50 90 A 40 40 0 0 1 10 50 L 32 50 A 18 18 0 0 0 50 68 Z" fill="#3B82F6" />
                  <rect x="26" y="26" width="48" height="12" rx="6" fill="#0D9488" />
                  <rect x="44" y="34" width="12" height="40" rx="6" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">Android 15 Icon</span>
            </div>

            {/* Pixel Watch Round Complication */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-black border border-slate-800 flex items-center justify-center shadow-inner">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                  <path d="M 50 10 A 40 40 0 0 0 10 50 L 32 50 A 18 18 0 0 1 50 32 Z" fill="#0D9488" />
                  <path d="M 50 10 A 40 40 0 0 1 90 50 L 68 50 A 18 18 0 0 0 50 32 Z" fill="#10B981" />
                  <path d="M 90 50 A 40 40 0 0 1 50 90 L 50 68 A 18 18 0 0 0 68 50 Z" fill="#F59E0B" />
                  <path d="M 50 90 A 40 40 0 0 1 10 50 L 32 50 A 18 18 0 0 0 50 68 Z" fill="#3B82F6" />
                  <rect x="26" y="26" width="48" height="12" rx="6" fill="#0D9488" />
                  <rect x="44" y="34" width="12" height="40" rx="6" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">Pixel Watch Dial</span>
            </div>

            {/* Google Search Result Micro Favicon */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <path d="M 50 10 A 40 40 0 0 0 10 50 L 32 50 A 18 18 0 0 1 50 32 Z" fill="#0D9488" />
                  <path d="M 50 10 A 40 40 0 0 1 90 50 L 68 50 A 18 18 0 0 0 50 32 Z" fill="#10B981" />
                  <path d="M 90 50 A 40 40 0 0 1 50 90 L 50 68 A 18 18 0 0 0 68 50 Z" fill="#F59E0B" />
                  <path d="M 50 90 A 40 40 0 0 1 10 50 L 32 50 A 18 18 0 0 0 50 68 Z" fill="#3B82F6" />
                  <rect x="26" y="26" width="48" height="12" rx="6" fill="#0D9488" />
                  <rect x="44" y="34" width="12" height="40" rx="6" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">SERP Snippet</span>
            </div>

            {/* 16px Browser Favicon */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="#0D9488" strokeWidth="12" />
                  <path d="M 30 36 L 70 36 M 50 36 L 50 74" stroke="#0D9488" strokeWidth="14" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">16px Favicon</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
