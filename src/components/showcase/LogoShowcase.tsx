import React, { useState } from 'react';
import { Circle, ShieldCheck, Sun, Compass, Orbit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type RoundIconId = 'vitruvian_medallion' | 'circadian_bisphere' | 'meridian_compass' | 'ouroboros_halo';

export const LogoShowcase: React.FC = () => {
  const [selectedRound, setSelectedRound] = useState<RoundIconId>('vitruvian_medallion');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Master Round Header */}
      <div className="rounded-xl border-2 border-brand-primary/30 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Circle className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Round Icon Standard • 4 Sovereign Circular Hallmarks
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            100% Round • Universal Geometry
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Pure Circular Seals of Human Health
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The circle is the ultimate universal geometry: the living cell, the iris of the eye, the circadian sun, and the signet seal of trust. Perfectly balanced across app icons, circular profile avatars, and watch dials.
        </p>

        {/* 4 Round Archetype Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <Button
            size="sm"
            variant={selectedRound === 'vitruvian_medallion' ? 'primary' : 'secondary'}
            onClick={() => setSelectedRound('vitruvian_medallion')}
            className="text-xs font-semibold py-3"
          >
            1. The Vitruvian Medallion ⭐
          </Button>

          <Button
            size="sm"
            variant={selectedRound === 'circadian_bisphere' ? 'primary' : 'secondary'}
            onClick={() => setSelectedRound('circadian_bisphere')}
            className="text-xs font-semibold py-3"
          >
            2. The Circadian Bi-Sphere
          </Button>

          <Button
            size="sm"
            variant={selectedRound === 'meridian_compass' ? 'primary' : 'secondary'}
            onClick={() => setSelectedRound('meridian_compass')}
            className="text-xs font-semibold py-3"
          >
            3. The Meridian Compass
          </Button>

          <Button
            size="sm"
            variant={selectedRound === 'ouroboros_halo' ? 'primary' : 'secondary'}
            onClick={() => setSelectedRound('ouroboros_halo')}
            className="text-xs font-semibold py-3"
          >
            4. The Ouroboros Halo
          </Button>
        </div>
      </div>

      {/* Hero Showcase Display: Standalone Isolated Round Hallmark */}
      <Card className="overflow-hidden border-2 border-border-default shadow-elevated">
        <div className="p-12 sm:p-20 bg-gradient-to-b from-subtle/50 via-surface to-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[400px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. THE VITRUVIAN MEDALLION (THE ROUND SWISS MONOGRAM SEAL) */}
            {selectedRound === 'vitruvian_medallion' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="medallion-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F3E5AB" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                    {/* Outer Precision Circular Rim */}
                    <circle cx="50" cy="50" r="42" stroke="url(#medallion-gold)" strokeWidth="4.5" />
                    {/* Interior Architectural Vitruvian "T": Horizon Shoulder Bar */}
                    <path
                      d="M 22 36 C 34 32, 66 32, 78 36 C 72 41, 58 40, 50 40 C 42 40, 28 41, 22 36 Z"
                      fill="url(#medallion-gold)"
                    />
                    {/* Vitruvian Upright Spine Pillar */}
                    <path
                      d="M 47 41 L 53 41 L 51.5 76 C 51.5 78, 48.5 78, 48.5 76 Z"
                      fill="url(#medallion-gold)"
                    />
                    {/* Crown Meridian Orb */}
                    <circle cx="50" cy="25" r="3.5" fill="url(#medallion-gold)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-serif tracking-[0.35em] text-3xl sm:text-4xl text-text-primary block font-light pl-3">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-text-secondary uppercase block">
                    Geneva • Health Intelligence
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE CIRCADIAN BI-SPHERE (THE DYNAMIC EQUILIBRIUM DISK) */}
            {selectedRound === 'circadian_bisphere' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="bisphere-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                      <linearGradient id="bisphere-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--tds-color-brand-primary)" />
                        <stop offset="100%" stopColor="var(--tds-color-brand-dark)" />
                      </linearGradient>
                    </defs>
                    {/* Left Biological Rest Hemisphere (Platinum/Teal) */}
                    <path
                      d="M 50 8 A 42 42 0 0 0 50 92 C 64 92, 58 68, 50 50 C 42 32, 36 8, 50 8 Z"
                      fill="url(#bisphere-teal)"
                    />
                    {/* Right Vitality Action Hemisphere (Warm Gold) */}
                    <path
                      d="M 50 8 A 42 42 0 0 1 50 92 C 64 92, 58 68, 50 50 C 42 32, 36 8, 50 8 Z"
                      fill="url(#bisphere-gold)"
                    />
                    {/* Sovereign Central Meridian Aperture (Human Consciousness) */}
                    <circle cx="50" cy="50" r="5" fill="var(--tds-color-bg-surface)" stroke="url(#bisphere-gold)" strokeWidth="2" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-serif tracking-[0.35em] text-3xl sm:text-4xl text-text-primary block font-light pl-3">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 3. THE MERIDIAN COMPASS (THE 4 PILLARS IN A ROUND LENS) */}
            {selectedRound === 'meridian_compass' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="compass-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                    {/* Outer Thin Compass Dial */}
                    <circle cx="50" cy="50" r="42" stroke="var(--tds-color-border-default)" strokeWidth="2.5" />
                    {/* Precision 4-Point Health Horizon Ring */}
                    <circle cx="50" cy="50" r="32" stroke="url(#compass-gold)" strokeWidth="4" />
                    {/* Vertical Meridian Axis (The Human Spine) */}
                    <line x1="50" y1="18" x2="50" y2="82" stroke="url(#compass-gold)" strokeWidth="4" strokeLinecap="round" />
                    {/* Horizontal Balance Horizon (Shoulders / Homeostasis) */}
                    <line x1="28" y1="36" x2="72" y2="36" stroke="url(#compass-gold)" strokeWidth="4" strokeLinecap="round" />
                    {/* Central Sovereign Core */}
                    <circle cx="50" cy="36" r="4" fill="var(--tds-color-bg-surface)" stroke="url(#compass-gold)" strokeWidth="2" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-serif tracking-[0.35em] text-3xl sm:text-4xl text-text-primary block font-light pl-3">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

            {/* 4. THE OUROBOROS HALO (THE CONTINUOUS CIRCLE OF LIFE) */}
            {selectedRound === 'ouroboros_halo' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="ouro-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F3E5AB" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                    {/* Sculptural Tapered Circular Torus Band */}
                    <path
                      d="M 50 8 A 42 42 0 1 1 49.9 8"
                      stroke="url(#ouro-gold)"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    {/* Floating Central Vital Ember */}
                    <circle cx="50" cy="50" r="10" fill="url(#ouro-gold)" />
                    {/* Subtle Internal T Silhouette */}
                    <path d="M 44 46 L 56 46 M 50 46 L 50 56" stroke="var(--tds-color-bg-surface)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-serif tracking-[0.35em] text-3xl sm:text-4xl text-text-primary block font-light pl-3">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-text-secondary uppercase block">
                    Towards Better Health
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deep Philosophical Rationale */}
        <CardContent className="pt-6 space-y-4">
          {selectedRound === 'vitruvian_medallion' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  1. The Vitruvian Medallion (Top Recommendation) ⭐
                </h4>
                <Badge variant="optimal" size="sm">Haute-Horlogerie Standard</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A solid circular gold seal enclosing the Vitruvian human posture (the shoulders horizon and upright spine of health). It has the immortal dignity of an ancient coin, a Swiss watch caseback, or a royal royal seal of clinical medicine.
              </p>
            </div>
          )}

          {selectedRound === 'circadian_bisphere' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Sun className="w-4 h-4 text-brand-primary" />
                  2. The Circadian Bi-Sphere
                </h4>
                <Badge variant="brand" size="sm">Dynamic Equilibrium</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Two interlocking hemispheres representing the universal biological circadian rhythm: <strong>Rest/Restoration</strong> meeting <strong>Vitality/Action</strong>.
              </p>
            </div>
          )}

          {selectedRound === 'meridian_compass' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-primary" />
                  3. The Meridian Compass
                </h4>
                <Badge variant="evidence" size="sm">Navigation & Precision</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A precision circular instrument navigating 8 billion humans <em>&ldquo;Towards Better Health&rdquo;</em>. Anchored by the human vertical meridian axis.
              </p>
            </div>
          )}

          {selectedRound === 'ouroboros_halo' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Orbit className="w-4 h-4 text-brand-primary" />
                  4. The Ouroboros Halo
                </h4>
                <Badge variant="neutral" size="sm">Unbroken Life</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A sculpted continuous circular halo cradling the vital central ember. Represents the unbroken continuity of lifelong health intelligence.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* The Circular Scale Test: Profile Picture & Smartwatch Dial */}
      <Card>
        <CardHeader>
          <CardTitle>Circular Real-World Environment Test</CardTitle>
          <CardDescription>
            Testing how these round icons fit into circular profile pictures, smartwatches, and favicons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {/* Circular Social Avatar (Instagram / WhatsApp / Twitter) */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="4.5" />
                  <path d="M 22 36 C 34 32, 66 32, 78 36 C 72 41, 58 40, 50 40 C 42 40, 28 41, 22 36 Z" fill="#D4AF37" />
                  <path d="M 47 41 L 53 41 L 51.5 76 C 51.5 78, 48.5 78, 48.5 76 Z" fill="#D4AF37" />
                  <circle cx="50" cy="25" r="3.5" fill="#D4AF37" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">64px Round Profile</span>
            </div>

            {/* Smartwatch Circular Complication */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="4.5" />
                  <path d="M 22 36 C 34 32, 66 32, 78 36 C 72 41, 58 40, 50 40 C 42 40, 28 41, 22 36 Z" fill="#D4AF37" />
                  <path d="M 47 41 L 53 41 L 51.5 76 C 51.5 78, 48.5 78, 48.5 76 Z" fill="#D4AF37" />
                  <circle cx="50" cy="25" r="3.5" fill="#D4AF37" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">Watch Dial Icon</span>
            </div>

            {/* Apple Watch App Grid Squircle */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="4.5" />
                  <path d="M 22 36 C 34 32, 66 32, 78 36 C 72 41, 58 40, 50 40 C 42 40, 28 41, 22 36 Z" fill="#D4AF37" />
                  <path d="M 47 41 L 53 41 L 51.5 76 C 51.5 78, 48.5 78, 48.5 76 Z" fill="#D4AF37" />
                  <circle cx="50" cy="25" r="3.5" fill="#D4AF37" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-text-muted">48px App Icon</span>
            </div>

            {/* 16px Favicon */}
            <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800">
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="6" />
                  <path d="M 22 36 C 34 32, 66 32, 78 36 L 50 40 Z" fill="#D4AF37" />
                  <line x1="50" y1="36" x2="50" y2="76" stroke="#D4AF37" strokeWidth="8" />
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
