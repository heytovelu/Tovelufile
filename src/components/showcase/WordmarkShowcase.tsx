import React, { useState } from 'react';
import { Type, Sliders } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

type WordmarkDirectionId = 'architectural_caps' | 'human_title' | 'classical_sovereign' | 'bio_modernist';

export const WordmarkShowcase: React.FC = () => {
  const [selectedDirection, setSelectedDirection] = useState<WordmarkDirectionId>('architectural_caps');
  const [activeSurface, setActiveSurface] = useState<'light' | 'dark' | 'cotton'>('light');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-xl border-2 border-brand-primary/40 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <Type className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              The Wordmark Lab • Official Typography Standard for TOVELU
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Icon Locked • Now Locking Typography
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          The Official TOVELU Wordmark Typographic Directions
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The Homeostasis Ring is locked. Now we pair it with its permanent typographic voice. Four distinct typographic philosophies engineered for timeless readability, global scale, and clinical prestige.
        </p>

        {/* 4 Typographic Direction Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <Button
            size="sm"
            variant={selectedDirection === 'architectural_caps' ? 'primary' : 'secondary'}
            onClick={() => setSelectedDirection('architectural_caps')}
            className="text-xs font-semibold py-3"
          >
            1. Architectural All-Caps ⭐
          </Button>

          <Button
            size="sm"
            variant={selectedDirection === 'human_title' ? 'primary' : 'secondary'}
            onClick={() => setSelectedDirection('human_title')}
            className="text-xs font-semibold py-3"
          >
            2. Human Democratic
          </Button>

          <Button
            size="sm"
            variant={selectedDirection === 'classical_sovereign' ? 'primary' : 'secondary'}
            onClick={() => setSelectedDirection('classical_sovereign')}
            className="text-xs font-semibold py-3"
          >
            3. Classical Sovereign
          </Button>

          <Button
            size="sm"
            variant={selectedDirection === 'bio_modernist' ? 'primary' : 'secondary'}
            onClick={() => setSelectedDirection('bio_modernist')}
            className="text-xs font-semibold py-3"
          >
            4. Bio-Modernist
          </Button>
        </div>
      </div>

      {/* Surface Background Switcher (Test against real-world surfaces) */}
      <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-subtle border border-border-subtle">
        <span className="text-xs font-semibold text-text-primary flex items-center gap-2">
          <Sliders className="w-4 h-4 text-brand-primary" />
          Test Against Surface Contrast:
        </span>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={activeSurface === 'light' ? 'primary' : 'outline'}
            onClick={() => setActiveSurface('light')}
            className="text-xs py-1 h-8"
          >
            Pure White (#FFFFFF)
          </Button>
          <Button
            size="sm"
            variant={activeSurface === 'dark' ? 'primary' : 'outline'}
            onClick={() => setActiveSurface('dark')}
            className="text-xs py-1 h-8"
          >
            Obsidian Slate (#090D14)
          </Button>
          <Button
            size="sm"
            variant={activeSurface === 'cotton' ? 'primary' : 'outline'}
            onClick={() => setActiveSurface('cotton')}
            className="text-xs py-1 h-8"
          >
            Warm Cotton (#FBF9F5)
          </Button>
        </div>
      </div>

      {/* Hero Showcase Display */}
      <div className={`p-12 sm:p-20 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[380px] shadow-card ${
        activeSurface === 'light' ? 'bg-white border-slate-200 text-slate-900' :
        activeSurface === 'dark' ? 'bg-[#090D14] border-slate-800 text-white' :
        'bg-[#FBF9F5] border-[#E2E8F0] text-[#0F172A]'
      }`}>
        <div className="flex flex-col items-center gap-8 select-none">
          
          {/* DIRECTION 1: THE ARCHITECTURAL ALL-CAPS (APPLE / SONY / BRAUN CALIBER) */}
          {selectedDirection === 'architectural_caps' && (
            <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
              {/* Horizontal Lockup */}
              <div className="flex items-center gap-4">
                <HomeostasisLogo
                  size={52}
                  mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'}
                />
                <span className="font-sans font-bold text-4xl sm:text-5xl tracking-[0.24em] pl-2 leading-none">
                  TOVELU
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-[0.34em] opacity-60 uppercase">
                Towards Better Health
              </span>
            </div>
          )}

          {/* DIRECTION 2: THE HUMAN DEMOCRATIC (GOOGLE / AIRBNB CALIBER) */}
          {selectedDirection === 'human_title' && (
            <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4">
                <HomeostasisLogo
                  size={52}
                  mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'}
                />
                <span className="font-sans font-semibold text-4xl sm:text-5xl tracking-[0.04em] leading-none">
                  Tovelu
                </span>
              </div>
              <span className="text-xs font-medium opacity-65 tracking-wide">
                Towards Better Health
              </span>
            </div>
          )}

          {/* DIRECTION 3: THE CLASSICAL ROMAN SOVEREIGN (HERMÈS / PATEK / HARVARD MEDICAL) */}
          {selectedDirection === 'classical_sovereign' && (
            <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4">
                <HomeostasisLogo
                  size={52}
                  mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'}
                />
                <span className="font-serif font-normal text-4xl sm:text-5xl tracking-[0.35em] pl-3 leading-none">
                  TOVELU
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.4em] opacity-60 uppercase">
                Geneva • Health Intelligence
              </span>
            </div>
          )}

          {/* DIRECTION 4: THE BIO-MODERNIST (DEEPMIND / BIOTECH CALIBER) */}
          {selectedDirection === 'bio_modernist' && (
            <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4">
                <HomeostasisLogo
                  size={52}
                  mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'}
                />
                <span className="font-mono font-bold text-3xl sm:text-4xl tracking-[0.16em] pl-1 leading-none">
                  TOVELU
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.28em] opacity-60 uppercase">
                Lifelong Biosystems Engine
              </span>
            </div>
          )}

        </div>
      </div>

      {/* Deep Typographic Analysis Card */}
      <Card>
        <CardHeader>
          <CardTitle>Typographic Architecture Breakdown</CardTitle>
          <CardDescription>
            Evaluating how each wordmark direction functions in real-world brand architecture.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedDirection === 'architectural_caps' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  1. The Architectural All-Caps (Top Recommendation) ⭐
                </h4>
                <Badge variant="optimal" size="sm">Timeless Institution</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Uses pure geometric uppercase letterforms with wide, unhurried optical tracking (<code>+0.24em</code>). The letter <strong>O</strong> is a perfect circle that echoes the geometry of <strong>The Homeostasis Ring</strong>. The horizontal crossbar of the <strong>T</strong> balances the open upward curve of the <strong>U</strong>. Conveys unshakeable institutional trust and quiet confidence without shouting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Archetype</span>
                  <strong className="text-text-primary font-mono">Architectural Sans</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">Letter Harmony</span>
                  <strong className="text-brand-primary font-mono">T &amp; U Symmetrical</strong>
                </div>
                <div className="p-2.5 rounded bg-subtle border border-border-subtle">
                  <span className="text-text-muted block text-[11px]">100-Year Life</span>
                  <strong className="text-status-optimal font-mono">Immortal Standard</strong>
                </div>
              </div>
            </div>
          )}

          {selectedDirection === 'human_title' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  2. The Human Democratic (Title-Case: Tovelu)
                </h4>
                <Badge variant="brand" size="sm">Warm &amp; Approachable</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Follows the Google and Apple consumer software model. Title-case (<code>Tovelu</code>) feels like a personal friend speaking to you in everyday conversation. Extremely approachable, warm, and non-intimidating for elderly patients and everyday wellness tracking.
              </p>
            </div>
          )}

          {selectedDirection === 'classical_sovereign' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  3. The Classical Roman Sovereign (Fine Serif: TOVELU)
                </h4>
                <Badge variant="evidence" size="sm">Academic &amp; Clinical</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Carries the weight of world-class medical universities and clinical societies (The Lancet, Oxford Medical, Harvard). Chiseled Roman capital proportions with ultra-wide spacing. Evokes deep scientific permanence.
              </p>
            </div>
          )}

          {selectedDirection === 'bio_modernist' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  4. The Bio-Modernist (Monospace: TOVELU)
                </h4>
                <Badge variant="neutral" size="sm">High-Tech Genetics</Badge>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Precision engineering and biotechnology aesthetic. Monospaced character widths evoke genomic sequencing, clinical laboratory analyzers, and algorithmic medical intelligence.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lockup Format Comparisons (Stacked vs Horizontal) */}
      <Card>
        <CardHeader>
          <CardTitle>Lockup Format Variations (Horizontal vs Stacked)</CardTitle>
          <CardDescription>
            Testing how The Homeostasis Ring pairs with the wordmark across horizontal app headers and stacked promotional posters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Horizontal Lockup (For App Header, Website Nav, Lab Reports) */}
            <div className="p-8 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                Horizontal Lockup (Primary Digital / Header)
              </span>
              <div className="p-4 rounded-lg bg-surface border border-border-subtle flex items-center gap-3 shadow-subtle">
                <HomeostasisLogo size={36} mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'} />
                <span className="font-sans font-bold text-xl tracking-[0.22em] text-text-primary pl-1">
                  TOVELU
                </span>
              </div>
              <span className="text-xs text-text-secondary">App header, website navbar, browser header</span>
            </div>

            {/* Stacked Centered Lockup (For Splash Screens, Packaging, Billboards) */}
            <div className="p-8 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                Stacked Centered Lockup (Hero / Billboard / Packaging)
              </span>
              <div className="p-6 rounded-lg bg-surface border border-border-subtle flex flex-col items-center gap-3 shadow-subtle">
                <HomeostasisLogo size={48} mode={activeSurface === 'dark' ? 'on-dark' : 'on-light'} />
                <div className="text-center">
                  <span className="font-sans font-bold text-2xl tracking-[0.24em] text-text-primary block pl-1">
                    TOVELU
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase block mt-0.5">
                    Towards Better Health
                  </span>
                </div>
              </div>
              <span className="text-xs text-text-secondary">Diagnostic kit box, conference banners, hero splash</span>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};
