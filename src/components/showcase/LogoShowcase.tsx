import React, { useState } from 'react';
import { Crown, Compass, Gem } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type PremiumMarkId = 'vitruvian_column' | 'sovereign_dyad' | 'meridian_seal';

export const LogoShowcase: React.FC = () => {
  const [selectedMark, setSelectedMark] = useState<PremiumMarkId>('vitruvian_column');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner: The Luxury & Timeless Standard */}
      <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Crown className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Haute-Horlogerie & Museum Standard • Timeless Human Health
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Swiss Luxury & Institutional Dignity
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Quiet Luxury: The 100-Year Human Health Hallmarks
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Stripped of all cheap startup graphics, cartoonish app shapes, and tech gimmicks. Inspired by classical human posture, golden-ratio sculpture (Brâncuși), and Swiss fine-watchmaking (Patek Philippe, Rolex, Hermès).
        </p>
      </div>

      {/* 3 Ultra-Premium Archetype Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button
          variant={selectedMark === 'vitruvian_column' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('vitruvian_column')}
          className="text-xs font-semibold py-3.5 flex items-center justify-center gap-2"
        >
          <Crown className="w-4 h-4" />
          <span>1. The Vitruvian Column ⭐</span>
        </Button>
        <Button
          variant={selectedMark === 'sovereign_dyad' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('sovereign_dyad')}
          className="text-xs font-semibold py-3.5 flex items-center justify-center gap-2"
        >
          <Gem className="w-4 h-4" />
          <span>2. The Sovereign Dyad</span>
        </Button>
        <Button
          variant={selectedMark === 'meridian_seal' ? 'primary' : 'secondary'}
          onClick={() => setSelectedMark('meridian_seal')}
          className="text-xs font-semibold py-3.5 flex items-center justify-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>3. The Meridian Halo</span>
        </Button>
      </div>

      {/* Main Luxury Hallmark Display Surface */}
      <Card className="overflow-hidden border-2 border-border-default shadow-elevated">
        <div className="p-12 sm:p-20 bg-gradient-to-b from-subtle/50 via-surface to-subtle/30 flex flex-col items-center justify-center border-b border-border-subtle transition-all min-h-[420px]">
          <div className="flex flex-col items-center gap-10 select-none">
            
            {/* 1. THE VITRUVIAN COLUMN (THE SPINE & HORIZON OF HEALTH) */}
            {selectedMark === 'vitruvian_column' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="gold-pillar" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F3E5AB" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                    {/* The Dignified Horizon: The curve of healthy, upright human shoulders */}
                    <path
                      d="M 16 28 C 30 22, 70 22, 84 28 C 76 34, 60 32, 50 32 C 40 32, 24 34, 16 28 Z"
                      fill="url(#gold-pillar)"
                    />
                    {/* The Vitruvian Pillar: The human spine of vitality and alignment */}
                    <path
                      d="M 46 34 L 54 34 L 52 82 C 52 84, 48 84, 48 82 Z"
                      fill="url(#gold-pillar)"
                    />
                    {/* Golden Ratio Meridian Crown */}
                    <circle cx="50" cy="18" r="3.5" fill="url(#gold-pillar)" />
                  </svg>
                </div>

                <div className="text-center space-y-2">
                  <span className="font-serif tracking-[0.35em] text-3xl sm:text-4xl text-text-primary block font-light pl-3">
                    TOVELU
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-text-secondary uppercase block">
                    Geneva • Est. 2026 • Health Intelligence
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE SOVEREIGN DYAD (SCULPTURAL LIFE & CARE) */}
            {selectedMark === 'sovereign_dyad' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="platinum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="50%" stopColor="#CBD5E1" />
                        <stop offset="100%" stopColor="#94A3B8" />
                      </linearGradient>
                    </defs>
                    {/* Left Contour: The Living Human Vessel */}
                    <path
                      d="M 32 78 C 22 66, 24 34, 46 18 C 42 34, 38 60, 48 74 C 44 78, 36 80, 32 78 Z"
                      fill="url(#platinum-grad)"
                    />
                    {/* Right Counterpart: The Healing Sanctuary */}
                    <path
                      d="M 68 78 C 78 66, 76 34, 54 18 C 58 34, 62 60, 52 74 C 56 78, 64 80, 68 78 Z"
                      fill="currentColor"
                      className="text-brand-primary"
                    />
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

            {/* 3. THE MERIDIAN HALO (THE PLATINUM & GOLD HORIZON) */}
            {selectedMark === 'meridian_seal' && (
              <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-200">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="ring-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                      <linearGradient id="ring-plat" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#94A3B8" />
                      </linearGradient>
                    </defs>
                    {/* Left Hemisphere: Platinum Body */}
                    <path
                      d="M 50 14 A 36 36 0 0 0 50 86 L 50 74 A 24 24 0 0 1 50 26 Z"
                      fill="url(#ring-plat)"
                    />
                    {/* Right Hemisphere: Gold Vitality */}
                    <path
                      d="M 50 14 A 36 36 0 0 1 50 86 L 50 74 A 24 24 0 0 0 50 26 Z"
                      fill="url(#ring-gold)"
                    />
                    {/* Central Optical Meridian Gap */}
                    <line x1="50" y1="10" x2="50" y2="90" stroke="var(--tds-color-bg-canvas)" strokeWidth="2.5" />
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
          {selectedMark === 'vitruvian_column' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Crown className="w-4 h-4 text-brand-accent" />
                  The Vitruvian Column: Pure Upright Human Health ⭐
                </h4>
                <Badge variant="optimal" size="sm">Haute Horlogerie Level</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                In classical human biology, health is <strong>upright vitality</strong>—the alignment of the human spine and the calm balance of the shoulders. This hallmark abstracts human posture into an unshakeable architectural lettermark <strong>&ldquo;T&rdquo;</strong> crowned by a golden meridian orb. It carries the weight of centuries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Aesthetic</span>
                  <strong className="text-text-primary font-serif">Quiet Luxury</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Human Meaning</span>
                  <strong className="text-brand-primary font-mono">Alignment & Spine</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">100-Year Life</span>
                  <strong className="text-status-optimal font-mono">Immortal Dignity</strong>
                </div>
              </div>
            </div>
          )}

          {selectedMark === 'sovereign_dyad' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Gem className="w-4 h-4 text-brand-primary" />
                  The Sovereign Dyad: The Living Sculpture of Care
                </h4>
                <Badge variant="brand" size="sm">Organic Sculpture</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Inspired by modern museum sculpture (Constantin Brâncuși). Two tactile, fluid stone-smooth forms representing <strong>The Human Being</strong> and <strong>Scientific Care</strong> rising together in serene harmony.
              </p>
            </div>
          )}

          {selectedMark === 'meridian_seal' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-primary" />
                  The Meridian Halo: Wholeness & Longevity
                </h4>
                <Badge variant="evidence" size="sm">Platinum & Gold</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                A solid circular halo divided by a vertical line of light. The union of platinum (biological reality) and gold (vitality). Pure, sovereign, and eternal.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Physical Luxury Hallmark Test */}
      <Card>
        <CardHeader>
          <CardTitle>Physical Craftsmanship Benchmark</CardTitle>
          <CardDescription>
            Testing how this identity looks when stamped into fine physical artifacts (watch caseback, medical hardware, stationery).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {/* Fine Heavyweight Cotton Card */}
            <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#EAE5DC] text-[#1E293B] flex flex-col items-center justify-center gap-3 shadow-subtle min-h-[180px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]">
                Debossed on Warm Cotton Paper
              </span>
              <div className="w-12 h-12 flex items-center justify-center text-[#B45309]">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 16 28 C 30 22, 70 22, 84 28 C 76 34, 60 32, 50 32 C 40 32, 24 34, 16 28 Z" />
                  <path d="M 46 34 L 54 34 L 52 82 C 52 84, 48 84, 48 82 Z" />
                  <circle cx="50" cy="18" r="3.5" />
                </svg>
              </div>
              <span className="font-serif text-sm tracking-[0.3em] font-light">TOVELU</span>
            </div>

            {/* Brushed Obsidian Titanium */}
            <div className="p-8 rounded-2xl bg-[#0B0F17] border border-[#1E293B] text-[#F8FAFC] flex flex-col items-center justify-center gap-3 shadow-card min-h-[180px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                Laser-Cut on Brushed Titanium
              </span>
              <div className="w-12 h-12 flex items-center justify-center text-[#E2E8F0]">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 16 28 C 30 22, 70 22, 84 28 C 76 34, 60 32, 50 32 C 40 32, 24 34, 16 28 Z" />
                  <path d="M 46 34 L 54 34 L 52 82 C 52 84, 48 84, 48 82 Z" />
                  <circle cx="50" cy="18" r="3.5" />
                </svg>
              </div>
              <span className="font-serif text-sm tracking-[0.3em] font-light">TOVELU</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
