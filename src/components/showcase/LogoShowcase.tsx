import React, { useState } from 'react';
import { 
  Smartphone, 
  Share2, 
  CreditCard, 
  Package, 
  FileText, 
  ShieldCheck, 
  Palette,
  Sun,
  Moon,
  CheckCircle2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

type UsageTab = 'contrast_law' | 'app' | 'social' | 'cards' | 'packaging' | 'reports';

export const LogoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UsageTab>('contrast_law');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Master Milestone Banner */}
      <div className="rounded-xl border-2 border-brand-primary/40 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Permanent Identity • The Homeostasis Ring
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Founder Color Law Locked
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Icon Color Rule • The Opposite Contrast Law
        </h2>
        <div className="p-4 rounded-lg bg-subtle border border-border-subtle space-y-1.5 text-xs sm:text-sm text-text-primary">
          <div className="font-mono font-bold text-brand-dark flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>FOUNDER DIRECTIVE LOCKED:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-text-secondary pl-1">
            <li><strong>Green part</strong> is ALWAYS visible at all conditions.</li>
            <li>In <strong>black or dark BG</strong>, second part MUST be <strong>WHITE</strong>.</li>
            <li>In <strong>white or light BG</strong>, second part MUST be <strong>BLACK</strong>.</li>
            <li>Always add <strong>opposite color of BG</strong> of icon so <strong>BOTH colors STAND OUT every time</strong>.</li>
            <li>Full Logo: <strong>Icon + Wordmark ONLY (No Tagline)</strong>.</li>
          </ul>
        </div>

        {/* Category Navigation Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
          <Button
            size="sm"
            variant={activeTab === 'contrast_law' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('contrast_law')}
            className="text-xs flex items-center gap-1.5"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>★ Founder Color Law</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'app' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('app')}
            className="text-xs flex items-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>1. Mobile App & Splash</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'social' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('social')}
            className="text-xs flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>2. Social Media</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'cards' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('cards')}
            className="text-xs flex items-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>3. Cards & Passport</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'packaging' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('packaging')}
            className="text-xs flex items-center gap-1.5"
          >
            <Package className="w-3.5 h-3.5" />
            <span>4. Test Kits & Hardware</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'reports' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('reports')}
            className="text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>5. Lab Reports</span>
          </Button>
        </div>
      </div>

      {/* ★ FOUNDER COLOR LAW SHOWCASE */}
      {activeTab === 'contrast_law' && (
        <Card className="overflow-hidden border-2 border-border-default">
          <CardHeader>
            <CardTitle>Side-by-Side Standout Proof Across Every Surface</CardTitle>
            <CardDescription>
              Notice how the second part is always the exact polar opposite of the background (White on Dark, Black on Light), ensuring BOTH colors stand out with zero compromise.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Situation 1: Pure Obsidian Dark Surface */}
              <div className="p-6 rounded-2xl bg-[#090D14] border border-slate-800 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1"><Moon className="w-3 h-3 text-emerald-400" /> DARK BG</span>
                  <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded">2ND PART: WHITE</span>
                </div>
                {/* Full Logo: Icon + Wordmark ONLY */}
                <HomeostasisLogo size={52} mode="on-dark" showWordmark />
                <div className="text-[10px] font-mono text-slate-400 space-y-0.5">
                  <span className="text-emerald-400 font-bold block">Green Arc: Luminous Bio-Green</span>
                  <span className="text-white font-bold block">Second Arc: 100% Solid White</span>
                  <span className="text-slate-400 block text-[9px]">BOTH COLORS STAND OUT 100%</span>
                </div>
              </div>

              {/* Situation 2: Pure White Light Surface */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-between text-center gap-5 shadow-subtle min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1"><Sun className="w-3 h-3 text-amber-500" /> LIGHT BG</span>
                  <span className="text-black font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-300">2ND PART: BLACK</span>
                </div>
                {/* Full Logo: Icon + Wordmark ONLY */}
                <HomeostasisLogo size={52} mode="on-light" showWordmark />
                <div className="text-[10px] font-mono text-slate-500 space-y-0.5">
                  <span className="text-emerald-700 font-bold block">Green Arc: Deep Clinical Emerald</span>
                  <span className="text-black font-bold block">Second Arc: 100% Solid Black</span>
                  <span className="text-slate-500 block text-[9px]">BOTH COLORS STAND OUT 100%</span>
                </div>
              </div>

              {/* Situation 3: Warm Luxury Cotton */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E2E8F0] flex flex-col items-center justify-between text-center gap-5 shadow-subtle min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>WARM COTTON BG</span>
                  <span className="text-black font-bold bg-white px-2 py-0.5 rounded border border-slate-200">2ND PART: BLACK</span>
                </div>
                <HomeostasisLogo size={52} mode="on-light" showWordmark />
                <div className="text-[10px] font-mono text-slate-500 space-y-0.5">
                  <span className="text-black font-bold block">Opposite Color Enforced</span>
                  <span className="text-slate-600 block">Luxury Stationery & Executive Card</span>
                </div>
              </div>

              {/* Situation 4: Titanium Slate Grey */}
              <div className="p-6 rounded-2xl bg-[#1E293B] border border-slate-700 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>TITANIUM SLATE BG</span>
                  <span className="text-white font-bold bg-slate-900 px-2 py-0.5 rounded">2ND PART: WHITE</span>
                </div>
                <HomeostasisLogo size={52} mode="on-dark" showWordmark />
                <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                  <span className="text-white font-bold block">Opposite Color Enforced</span>
                  <span className="text-slate-400 block">Apple Wallet Titanium Card</span>
                </div>
              </div>

              {/* Situation 5: Vibrant Brand Teal Surface */}
              <div className="p-6 rounded-2xl bg-[#0D9488] border border-teal-600 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px] text-white">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-teal-200">
                  <span>BRAND TEAL BG</span>
                  <span className="text-white font-bold">2ND PART: WHITE</span>
                </div>
                <HomeostasisLogo size={52} mode="on-colored" showWordmark />
                <div className="text-[10px] font-mono text-teal-100 space-y-0.5">
                  <span className="text-white font-bold block">Opposite Color Enforced</span>
                  <span className="text-teal-200 block">Marketing Billboard / Hero</span>
                </div>
              </div>

              {/* Situation 6: 1-Color Print / Fax / Receipt */}
              <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-slate-300 flex flex-col items-center justify-between text-center gap-5 min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>1-COLOR MONOCHROME</span>
                  <span className="text-black font-bold">SOLID BLACK</span>
                </div>
                <HomeostasisLogo size={52} mode="monochrome-black" showWordmark />
                <div className="text-[10px] font-mono text-slate-500 space-y-0.5">
                  <span className="text-black font-bold block">100% Solid Ink Density</span>
                  <span className="text-slate-500 block">Prescription Receipts & Stamps</span>
                </div>
              </div>

            </div>

            {/* Strict Specification Table */}
            <div className="border border-border-subtle rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-subtle text-text-secondary border-b border-border-subtle font-mono text-[10px] uppercase">
                  <tr>
                    <th className="p-3">Background Condition</th>
                    <th className="p-3">Part 1 (Green Part)</th>
                    <th className="p-3">Part 2 (Opposite of BG)</th>
                    <th className="p-3">Full Logo Lockup</th>
                    <th className="p-3">Visual Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle font-mono text-xs">
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Black / Dark Background</td>
                    <td className="p-3 text-emerald-400 font-bold">Ultra-Luminous Bio-Green</td>
                    <td className="p-3 text-white bg-slate-900 px-2 py-0.5 rounded inline-block font-bold">#FFFFFF (Pure White)</td>
                    <td className="p-3 text-white font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal font-bold">BOTH COLORS STAND OUT</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">White / Light Background</td>
                    <td className="p-3 text-emerald-700 font-bold">Deep Saturated Emerald</td>
                    <td className="p-3 font-bold text-black bg-slate-100 px-2 py-0.5 rounded inline-block border border-slate-300">#000000 (Pure Black)</td>
                    <td className="p-3 text-black font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal font-bold">BOTH COLORS STAND OUT</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Colored Brand Background</td>
                    <td className="p-3 text-slate-700">Pure Solid White</td>
                    <td className="p-3 text-slate-700 font-bold">Pure Solid White</td>
                    <td className="p-3 text-slate-700 font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">High-Contrast Inversion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">1-Color Monochrome Print</td>
                    <td className="p-3 text-black font-bold">Pure Solid Black</td>
                    <td className="p-3 text-black font-bold">Pure Solid Black</td>
                    <td className="p-3 text-black font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">100% Ink Density</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 1. MOBILE APP ICON & SPLASH SCREEN */}
      {activeTab === 'app' && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>1. Mobile App Icon & Launch Screen (iOS & Android)</CardTitle>
            <CardDescription>
              Notice how the green part glows and the second part is pure white on dark background.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center p-6 sm:p-10 bg-slate-950 rounded-2xl border border-slate-800 text-white">
              
              {/* iPhone Home Screen Mockup */}
              <div className="w-[280px] bg-slate-900/90 rounded-[40px] p-4 border-[4px] border-slate-700 shadow-2xl space-y-6 mx-auto backdrop-blur-md">
                <div className="w-24 h-4 bg-black rounded-full mx-auto" />

                <div className="grid grid-cols-4 gap-3 pt-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Mail</div>
                    <span className="text-[9px] text-slate-400">Mail</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Safari</div>
                    <span className="text-[9px] text-slate-400">Safari</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Fitness</div>
                    <span className="text-[9px] text-slate-400">Fitness</span>
                  </div>

                  {/* TOVELU MASTER APP ICON */}
                  <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#020617] border border-[#334155] shadow-lg flex items-center justify-center relative transform group-hover:scale-105 transition-all">
                      <HomeostasisLogo size={32} mode="on-dark" />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 text-[8px] font-bold text-slate-900 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                        1
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-white tracking-wide">Tovelu</span>
                  </div>
                </div>

                <div className="pt-24 pb-4 text-center">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    iOS 18 • iPhone Pro
                  </span>
                </div>
              </div>

              {/* Mobile App Splash Screen */}
              <div className="w-[280px] h-[460px] bg-[#090D14] rounded-[40px] p-6 border-[4px] border-slate-700 shadow-2xl flex flex-col items-center justify-between mx-auto text-center">
                <div className="w-20 h-3.5 bg-black rounded-full mx-auto" />

                <div className="space-y-4 my-auto">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                    <HomeostasisLogo size={52} mode="on-dark" />
                  </div>
                  {/* FULL LOGO (ICON + WORDMARK ONLY, ZERO TAGLINE) */}
                  <div className="pt-2">
                    <span className="font-sans font-bold tracking-[0.24em] text-2xl text-white block pl-1">
                      TOVELU
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500 pb-2">
                  Encrypted Health Intelligence Engine
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 2. SOCIAL MEDIA */}
      {activeTab === 'social' && (
        <Card>
          <CardHeader>
            <CardTitle>2. Social Media Avatars & Announcement Campaign</CardTitle>
            <CardDescription>
              Full Logo with Icon + Wordmark ONLY (No Tagline).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Instagram / LinkedIn 1080x1080 Post Mockup */}
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-800 p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                  <HomeostasisLogo size={320} mode="on-dark" />
                </div>

                {/* FULL LOGO: ICON + WORDMARK ONLY (NO TAGLINE) */}
                <div className="flex items-center gap-3">
                  <HomeostasisLogo size={42} mode="on-dark" showWordmark />
                </div>

                <div className="space-y-3 z-10">
                  <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-widest block">
                    The Human Health Revolution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                    Health is not a moment. <br />
                    It is a continuous living balance.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                    Built for 8 billion humans. Powered by objective clinical evidence, longitudinal biosignals, and zero fear.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 z-10">
                  <span className="text-xs font-mono text-slate-400">tovelu.com</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    Explore Platform →
                  </span>
                </div>
              </div>

              {/* Profile Avatars */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-text-primary">
                  Official Profile Avatars (Solid White Arc on Dark Surface)
                </h4>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-emerald-400/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">X / Twitter</span>
                    <span className="text-[9px] font-mono text-text-muted">400x400 Crop</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-emerald-400/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">Instagram</span>
                    <span className="text-[9px] font-mono text-text-muted">Story Highlight</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#090D14] border-2 border-emerald-400/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">LinkedIn</span>
                    <span className="text-[9px] font-mono text-text-muted">Company Logo</span>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 3. CARDS */}
      {activeTab === 'cards' && (
        <Card>
          <CardHeader>
            <CardTitle>3. Sovereign Member Passport & Executive Card</CardTitle>
            <CardDescription>
              Notice how the titanium card has a White 2nd part, and the cotton card has a Black 2nd part.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              
              {/* Apple Wallet Style Titanium Black Card */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-700 shadow-2xl p-6 flex flex-col justify-between text-white mx-auto relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <HomeostasisLogo size={32} mode="on-dark" showWordmark />
                  <span className="text-[8px] font-mono uppercase bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                    Sovereign Identity
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block tracking-wider uppercase">Health Vault Pass ID</span>
                  <div className="font-mono text-sm tracking-widest text-slate-200">
                    TOV • 9042 • 8810 • 7321
                  </div>
                </div>

                <div className="flex items-end justify-between border-t border-slate-700/60 pt-3">
                  <div>
                    <span className="text-[8px] font-mono text-slate-400 uppercase">Founder / Member</span>
                    <div className="text-xs font-semibold tracking-wide">AJAY • SOVEREIGN RECORD</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-mono text-slate-400 uppercase">Standard</span>
                    <div className="text-[9px] font-mono text-emerald-400">E2E ENCRYPTED (EHR)</div>
                  </div>
                </div>
              </div>

              {/* Minimalist Executive Business Card */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-[#FBF9F5] border border-[#E2E8F0] shadow-card p-6 flex flex-col justify-between text-[#0F172A] mx-auto">
                <div className="flex items-center justify-between">
                  <HomeostasisLogo size={32} mode="on-light" showWordmark />
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                    Geneva • Global HQ
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-bold text-base tracking-tight">Ajay</h4>
                  <p className="text-xs text-brand-dark font-mono font-medium">Founder & Chief Executive Officer</p>
                  <p className="text-[11px] text-slate-500 font-mono pt-1">ajay@tovelu.com</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-[10px] font-mono text-slate-400">
                  <span className="font-bold text-black tracking-wider">TOVELU</span>
                  <span>Health Intelligence</span>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 4. PACKAGING */}
      {activeTab === 'packaging' && (
        <Card>
          <CardHeader>
            <CardTitle>4. Clinical Diagnostic Test Kit & Wearable Biosensors</CardTitle>
            <CardDescription>
              Clean Icon + Wordmark branding without tagline clutter.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Wearable Sensor Pod */}
              <div className="p-8 rounded-2xl bg-[#090D14] border border-slate-800 text-white flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Wearable Continuous Biosensor Pod
                </span>
                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <HomeostasisLogo size={44} mode="on-dark" />
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Laser-Microetched • Grade 5 Titanium</span>
              </div>

              {/* Diagnostic Box Packaging */}
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-900 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Clinical Biomarker Test Kit Box
                </span>
                <div className="w-40 h-32 rounded-xl bg-white border border-slate-200 shadow-card p-4 flex flex-col items-center justify-center gap-2.5">
                  <HomeostasisLogo size={36} mode="on-light" showWordmark />
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block">
                    Cardiometabolic Kit
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Foil-Stamped • Clean Medical Grade</span>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 5. REPORTS */}
      {activeTab === 'reports' && (
        <Card>
          <CardHeader>
            <CardTitle>5. Official Clinical Laboratory Report Header</CardTitle>
            <CardDescription>
              Clean Icon + Wordmark on white clinical paper (No Tagline).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 bg-white border border-slate-300 rounded-xl shadow-card text-slate-900 space-y-6 max-w-2xl mx-auto">
              
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                <HomeostasisLogo size={36} mode="on-light" showWordmark />

                <div className="text-right text-[10px] font-mono text-slate-500 space-y-0.5">
                  <div>CLINICAL LAB REPORT #TL-2026-904</div>
                  <div>DATE: AUG 29, 2026 • 16:20 UTC</div>
                  <div className="text-emerald-700 font-semibold">VALIDATED REFERENCE RANGE</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <h5 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
                  Longitudinal Cardiometabolic Summary (Article 30)
                </h5>
                <table className="w-full text-left border-collapse font-sans">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono text-[10px]">
                      <th className="py-1">BIOMARKER</th>
                      <th className="py-1">RESULT</th>
                      <th className="py-1">REFERENCE INTERVAL</th>
                      <th className="py-1 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-xs">
                    <tr>
                      <td className="py-2 font-medium font-sans">Fasting Plasma Glucose</td>
                      <td className="py-2 font-bold text-slate-900">92 mg/dL</td>
                      <td className="py-2 text-slate-500">70 – 99 mg/dL</td>
                      <td className="py-2 text-right text-emerald-700 font-semibold">Optimal</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium font-sans">Hemoglobin A1c (HbA1c)</td>
                      <td className="py-2 font-bold text-slate-900">5.4 %</td>
                      <td className="py-2 text-slate-500">&lt; 5.7 %</td>
                      <td className="py-2 text-right text-emerald-700 font-semibold">Optimal</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium font-sans">High-Sensitivity CRP (hs-CRP)</td>
                      <td className="py-2 font-bold text-slate-900">0.6 mg/L</td>
                      <td className="py-2 text-slate-500">&lt; 1.0 mg/L</td>
                      <td className="py-2 text-right text-emerald-700 font-semibold">Low Risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Provenance: Quest Diagnostics Sync (Article 28)</span>
                <span>Cryptographically Signed • Tovelu Private Key</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
