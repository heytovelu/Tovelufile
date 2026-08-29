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
              Permanent Brand Identity • The Homeostasis Ring
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Universal Contrast Law Enforced
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Full Logo: Icon + Wordmark (No Tagline)
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong>Founder Mandates Enforced</strong>: <br />
          1. <strong>No Tagline with Full Logo</strong>: The sovereign icon pairs cleanly with the architectural wordmark <code>TOVELU</code>.<br />
          2. <strong>Universal Contrast Law</strong>: In dark theme, Arc 1 shifts to a <strong>Luminous Electric Mint Gradient</strong> so it never hides against black. In light theme, Arc 1 uses deep, rich <strong>Clinical Sea-Teal</strong>. Arc 2 is strictly solid white on dark, and solid black on light.
        </p>

        {/* Category Navigation Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
          <Button
            size="sm"
            variant={activeTab === 'contrast_law' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('contrast_law')}
            className="text-xs flex items-center gap-1.5"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>★ Universal Contrast Law</span>
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

      {/* ★ UNIVERSAL CONTRAST LAW SHOWCASE */}
      {activeTab === 'contrast_law' && (
        <Card className="overflow-hidden border-2 border-border-default">
          <CardHeader>
            <CardTitle>Universal Contrast Law: Visible Across Every Surface</CardTitle>
            <CardDescription>
              Demonstrating the 4 situations. Notice how the green in dark mode pops with high-luminance electric mint, while on light surfaces it is deep clinical sea-teal. Zero tagline clutter.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Situation 1: Pure Obsidian Dark Surface */}
              <div className="p-6 rounded-2xl bg-[#090D14] border border-slate-800 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1"><Moon className="w-3 h-3 text-teal-400" /> DARK SURFACE</span>
                  <span className="text-teal-400 font-bold">ARC 1: LUMINOUS MINT</span>
                </div>
                {/* Full Logo: Icon + Wordmark ONLY */}
                <HomeostasisLogo size={52} mode="on-dark" showWordmark />
                <div className="text-[10px] font-mono text-slate-400 space-y-0.5">
                  <span className="text-white block font-semibold">Arc 1: Electric Mint • Arc 2: Solid White</span>
                  <span>Contrast Ratio: 18.2:1 (WCAG AAA)</span>
                </div>
              </div>

              {/* Situation 2: Pure White Light Surface */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-between text-center gap-5 shadow-subtle min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1"><Sun className="w-3 h-3 text-amber-500" /> LIGHT SURFACE</span>
                  <span className="text-teal-700 font-bold">ARC 1: SEA-TEAL</span>
                </div>
                {/* Full Logo: Icon + Wordmark ONLY */}
                <HomeostasisLogo size={52} mode="on-light" showWordmark />
                <div className="text-[10px] font-mono text-slate-500 space-y-0.5">
                  <span className="text-slate-900 block font-semibold">Arc 1: Clinical Sea-Teal • Arc 2: Solid Black</span>
                  <span>Contrast Ratio: 17.8:1 (WCAG AAA)</span>
                </div>
              </div>

              {/* Situation 3: Warm Luxury Cotton */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E2E8F0] flex flex-col items-center justify-between text-center gap-5 shadow-subtle min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>WARM COTTON</span>
                  <span className="text-teal-700 font-bold">ARC 2: SOLID BLACK</span>
                </div>
                <HomeostasisLogo size={52} mode="on-light" showWordmark />
                <div className="text-[10px] font-mono text-slate-500 space-y-0.5">
                  <span className="text-slate-900 block font-semibold">Luxury Paper / Business Card</span>
                  <span>Contrast Ratio: 17.2:1 (WCAG AAA)</span>
                </div>
              </div>

              {/* Situation 4: Titanium Slate Grey */}
              <div className="p-6 rounded-2xl bg-[#1E293B] border border-slate-700 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>TITANIUM SLATE</span>
                  <span className="text-teal-400 font-bold">ARC 2: SOLID WHITE</span>
                </div>
                <HomeostasisLogo size={52} mode="on-dark" showWordmark />
                <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                  <span className="text-white block font-semibold">Apple Wallet Member Card</span>
                  <span>Contrast Ratio: 16.5:1 (WCAG AAA)</span>
                </div>
              </div>

              {/* Situation 5: Vibrant Brand Teal Surface */}
              <div className="p-6 rounded-2xl bg-[#0D9488] border border-teal-600 flex flex-col items-center justify-between text-center gap-5 shadow-card min-h-[230px] text-white">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-teal-200">
                  <span>BRAND TEAL</span>
                  <span className="text-white font-bold">MONOCHROME INVERSION</span>
                </div>
                <HomeostasisLogo size={52} mode="on-colored" showWordmark />
                <div className="text-[10px] font-mono text-teal-100 space-y-0.5">
                  <span className="text-white block font-semibold">Pure Solid White Inversion</span>
                  <span>Marketing Billboard / Conference</span>
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
                  <span className="text-black block font-semibold">100% Solid Ink Density</span>
                  <span>Prescription Slips & Physical Stamps</span>
                </div>
              </div>

            </div>

            {/* Strict Specification Table */}
            <div className="border border-border-subtle rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-subtle text-text-secondary border-b border-border-subtle font-mono text-[10px] uppercase">
                  <tr>
                    <th className="p-3">Environment Scenario</th>
                    <th className="p-3">Arc 1 (Living Intelligence)</th>
                    <th className="p-3">Arc 2 (Human Reality)</th>
                    <th className="p-3">Full Logo Lockup</th>
                    <th className="p-3">Visibility Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle font-mono text-xs">
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Dark Surfaces (&lt; 25% Luminance)</td>
                    <td className="p-3 text-teal-400 font-bold">Luminous Electric Mint</td>
                    <td className="p-3 text-white bg-slate-900 px-2 py-0.5 rounded inline-block font-bold">#FFFFFF (Crisp White)</td>
                    <td className="p-3 text-white font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">100% High Glow</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Light Surfaces (&gt; 75% Luminance)</td>
                    <td className="p-3 text-teal-700 font-bold">Deep Clinical Sea-Teal</td>
                    <td className="p-3 font-bold text-slate-900">#090D14 (Obsidian Black)</td>
                    <td className="p-3 text-slate-900 font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">100% Deep Punch</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Colored / Brand Surfaces</td>
                    <td className="p-3 text-slate-700">Pure Solid White</td>
                    <td className="p-3 text-slate-700">Solid White (80% Opacity)</td>
                    <td className="p-3 text-slate-700 font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">Crisp Inversion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">1-Color Monochrome Print</td>
                    <td className="p-3 text-black">Pure Solid Black</td>
                    <td className="p-3 text-black font-bold">Solid Black (75% Density)</td>
                    <td className="p-3 text-black font-bold">Icon + TOVELU</td>
                    <td className="p-3 text-status-optimal">100% Ink Contrast</td>
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
              Notice how the electric mint pops with razor-sharp luminescence against the obsidian background.
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
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-400 text-[8px] font-bold text-slate-900 rounded-full flex items-center justify-center ring-2 ring-slate-900">
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
                  <span className="text-xs font-mono font-semibold uppercase text-teal-400 tracking-widest block">
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
                  <span className="text-xs font-semibold text-teal-400 flex items-center gap-1">
                    Explore Platform →
                  </span>
                </div>
              </div>

              {/* Profile Avatars */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-text-primary">
                  Official Profile Avatars (Solid White Arc + Luminous Electric Mint Arc)
                </h4>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-teal-400/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">X / Twitter</span>
                    <span className="text-[9px] font-mono text-text-muted">400x400 Crop</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-teal-400/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">Instagram</span>
                    <span className="text-[9px] font-mono text-text-muted">Story Highlight</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#090D14] border-2 border-teal-400/40 flex items-center justify-center shadow-subtle">
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

      {/* 3. MEMBER PASSPORT & EXECUTIVE CARDS */}
      {activeTab === 'cards' && (
        <Card>
          <CardHeader>
            <CardTitle>3. Sovereign Member Passport & Executive Card</CardTitle>
            <CardDescription>
              Full Logo with Icon + Wordmark ONLY (No Tagline).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              
              {/* Apple Wallet Style Titanium Black Card */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-700 shadow-2xl p-6 flex flex-col justify-between text-white mx-auto relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <HomeostasisLogo size={32} mode="on-dark" showWordmark />
                  <span className="text-[8px] font-mono uppercase bg-teal-400/20 text-teal-300 px-2 py-0.5 rounded border border-teal-400/30">
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
                    <div className="text-[9px] font-mono text-teal-400">E2E ENCRYPTED (EHR)</div>
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
                  <span className="font-bold text-slate-900 tracking-wider">TOVELU</span>
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
