import React, { useState } from 'react';
import { 
  Smartphone, 
  Share2, 
  CreditCard, 
  Package, 
  FileText, 
  ShieldCheck, 
  Palette,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

type UsageTab = 'contrast_engine' | 'app' | 'social' | 'cards' | 'packaging' | 'reports';

export const LogoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UsageTab>('contrast_engine');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Master Milestone Banner */}
      <div className="rounded-xl border-2 border-brand-primary/40 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Permanent Brand Mark • The Homeostasis Ring
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Deterministic Contrast Engine Enforced
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          The Homeostasis Ring • Color & Contrast Law
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong>Founder Rule Enforced</strong>: Arc 2 never relies on fragile ambient theme inheritance. On any light/white surface, it is <strong>Pure Solid Obsidian Black (#090D14)</strong>. On any dark surface, it is <strong>Pure Solid Crisp White (#FFFFFF)</strong>.
        </p>

        {/* Category Navigation Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
          <Button
            size="sm"
            variant={activeTab === 'contrast_engine' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('contrast_engine')}
            className="text-xs flex items-center gap-1.5"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>★ Color & Contrast Engine</span>
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
            <span>2. Social Media & Posts</span>
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

      {/* ★ THE CONTRAST & COLOR ENGINE SHOWCASE */}
      {activeTab === 'contrast_engine' && (
        <Card className="overflow-hidden border-2 border-border-default">
          <CardHeader>
            <CardTitle>The Universal Contrast & Background Matrix (Founder Law)</CardTitle>
            <CardDescription>
              Testing how The Homeostasis Ring strictly adapts its second arc across light, dark, colored, and single-color surfaces.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Box 1: Pure White Background */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-between text-center gap-4 shadow-subtle min-h-[220px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>LIGHT SURFACE</span>
                  <span className="text-emerald-700 font-bold">ARC 2: SOLID BLACK</span>
                </div>
                <HomeostasisLogo size={56} mode="on-light" showWordmark showTagline />
                <span className="text-[10px] font-mono text-slate-500">
                  Background: #FFFFFF (Paper, Clean Web)
                </span>
              </div>

              {/* Box 2: Pure Obsidian Black Background */}
              <div className="p-6 rounded-2xl bg-[#090D14] border border-slate-800 flex flex-col items-center justify-between text-center gap-4 shadow-card min-h-[220px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-500">
                  <span>DARK SURFACE</span>
                  <span className="text-emerald-400 font-bold">ARC 2: SOLID WHITE</span>
                </div>
                <HomeostasisLogo size={56} mode="on-dark" showWordmark showTagline />
                <span className="text-[10px] font-mono text-slate-400">
                  Background: #090D14 (Obsidian Dark Mode)
                </span>
              </div>

              {/* Box 3: Warm Luxury Cotton / Beige */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E2E8F0] flex flex-col items-center justify-between text-center gap-4 shadow-subtle min-h-[220px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>WARM COTTON</span>
                  <span className="text-emerald-700 font-bold">ARC 2: SOLID BLACK</span>
                </div>
                <HomeostasisLogo size={56} mode="on-light" showWordmark showTagline />
                <span className="text-[10px] font-mono text-slate-500">
                  Background: #FBF9F5 (Luxury Stationery)
                </span>
              </div>

              {/* Box 4: Titanium Slate Grey */}
              <div className="p-6 rounded-2xl bg-[#1E293B] border border-slate-700 flex flex-col items-center justify-between text-center gap-4 shadow-card min-h-[220px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>TITANIUM SLATE</span>
                  <span className="text-emerald-400 font-bold">ARC 2: SOLID WHITE</span>
                </div>
                <HomeostasisLogo size={56} mode="on-dark" showWordmark showTagline />
                <span className="text-[10px] font-mono text-slate-300">
                  Background: #1E293B (Apple Wallet Card)
                </span>
              </div>

              {/* Box 5: Deep Brand Teal Surface */}
              <div className="p-6 rounded-2xl bg-[#0D9488] border border-teal-600 flex flex-col items-center justify-between text-center gap-4 shadow-card min-h-[220px] text-white">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-teal-200">
                  <span>BRAND TEAL</span>
                  <span className="text-white font-bold">MONOCHROME WHITE</span>
                </div>
                <HomeostasisLogo size={56} mode="monochrome-white" showWordmark showTagline />
                <span className="text-[10px] font-mono text-teal-100">
                  Background: #0D9488 (Marketing Hero)
                </span>
              </div>

              {/* Box 6: 1-Color Thermal / Fax / Print */}
              <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-slate-300 flex flex-col items-center justify-between text-center gap-4 min-h-[220px]">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>MONOCHROME PRINT</span>
                  <span className="text-black font-bold">100% SOLID BLACK</span>
                </div>
                <HomeostasisLogo size={56} mode="monochrome-black" showWordmark showTagline />
                <span className="text-[10px] font-mono text-slate-500">
                  1-Color Print / Prescription Receipt
                </span>
              </div>

            </div>

            {/* Strict Specification Table */}
            <div className="border border-border-subtle rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-subtle text-text-secondary border-b border-border-subtle font-mono text-[10px] uppercase">
                  <tr>
                    <th className="p-3">Container Surface</th>
                    <th className="p-3">Arc 1 (Living Science)</th>
                    <th className="p-3">Arc 2 (Human Reality)</th>
                    <th className="p-3">Compliance Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle font-mono text-xs">
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Light Backgrounds (&gt; 50% Luminance)</td>
                    <td className="p-3 text-brand-primary">Teal/Emerald Gradient</td>
                    <td className="p-3 font-bold text-slate-900">#090D14 (Pure Solid Black)</td>
                    <td className="p-3 text-status-optimal">WCAG AAA (18.4:1)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Dark Backgrounds (&lt; 50% Luminance)</td>
                    <td className="p-3 text-brand-primary">Teal/Emerald Gradient</td>
                    <td className="p-3 font-bold text-white bg-slate-900 px-2 py-0.5 rounded inline-block">#FFFFFF (Pure Solid White)</td>
                    <td className="p-3 text-status-optimal">WCAG AAA (19.2:1)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Vibrant Brand Surfaces</td>
                    <td className="p-3 text-slate-700">Pure Solid White</td>
                    <td className="p-3 text-slate-700">Pure Solid White (85% Opacity)</td>
                    <td className="p-3 text-status-optimal">High Contrast Inversion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-text-primary">Monochrome Single-Color Printing</td>
                    <td className="p-3 text-black">100% Solid Black</td>
                    <td className="p-3 text-black font-bold">100% Solid Black</td>
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
              Notice how Arc 2 is crisp Solid White on the dark app icon and splash screen.
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
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-primary text-[8px] font-bold text-white rounded-full flex items-center justify-center ring-2 ring-slate-900">
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
                  <div>
                    <span className="font-sans font-bold tracking-[0.22em] text-xl text-white block pl-1">
                      TOVELU
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.3em] text-slate-400 uppercase block mt-1">
                      Towards Better Health
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

      {/* 2. SOCIAL MEDIA CAMPAIGN & PROMOTIONS */}
      {activeTab === 'social' && (
        <Card>
          <CardHeader>
            <CardTitle>2. Social Media Avatars & Announcement Post</CardTitle>
            <CardDescription>
              Notice how the avatar uses Solid White Arc 2 on dark circular backgrounds.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Instagram / LinkedIn 1080x1080 Post Mockup */}
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-800 p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                  <HomeostasisLogo size={320} mode="on-dark" />
                </div>

                <div className="flex items-center gap-3">
                  <HomeostasisLogo size={40} mode="on-dark" showWordmark showTagline />
                </div>

                <div className="space-y-3 z-10">
                  <span className="text-xs font-mono font-semibold uppercase text-brand-primary tracking-widest block">
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
                  <span className="text-xs font-semibold text-brand-primary flex items-center gap-1">
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
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">X / Twitter</span>
                    <span className="text-[9px] font-mono text-text-muted">400x400 Crop</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisLogo size={38} mode="on-dark" />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">Instagram</span>
                    <span className="text-[9px] font-mono text-text-muted">Story Highlight</span>
                  </div>

                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
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
              Notice the contrast difference: Titanium card uses Solid White Arc; Cotton business card uses Solid Black Arc.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              
              {/* Apple Wallet Style Titanium Black Card (Dark Surface -> Arc 2 is White) */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-700 shadow-2xl p-6 flex flex-col justify-between text-white mx-auto relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <HomeostasisLogo size={32} mode="on-dark" showWordmark />
                  <span className="text-[8px] font-mono uppercase bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded border border-brand-primary/30">
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
                    <div className="text-[9px] font-mono text-brand-primary">E2E ENCRYPTED (EHR)</div>
                  </div>
                </div>
              </div>

              {/* Minimalist Executive Business Card (Light Cotton Surface -> Arc 2 is Solid Black) */}
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
                  <span>Towards Better Health</span>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 4. DIAGNOSTIC TEST KITS & WEARABLE HARDWARE */}
      {activeTab === 'packaging' && (
        <Card>
          <CardHeader>
            <CardTitle>4. Clinical Diagnostic Test Kit & Wearable Biosensors</CardTitle>
            <CardDescription>
              Hardware sensor pod uses Solid White Arc; Diagnostic box uses Solid Black Arc.
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

              {/* Diagnostic Box Packaging (Light Surface -> Arc 2 is Solid Black) */}
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-900 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Clinical Biomarker Test Kit Box
                </span>
                <div className="w-40 h-32 rounded-xl bg-white border border-slate-200 shadow-card p-4 flex flex-col items-center justify-center gap-2.5">
                  <HomeostasisLogo size={36} mode="on-light" showWordmark showTagline />
                </div>
                <span className="text-xs text-slate-500 font-mono">Foil-Stamped • Clean Medical Grade</span>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 5. CLINICAL LABORATORY REPORT */}
      {activeTab === 'reports' && (
        <Card>
          <CardHeader>
            <CardTitle>5. Official Clinical Laboratory Report Header</CardTitle>
            <CardDescription>
              On white clinical paper, Arc 2 is strictly Pure Solid Obsidian Black for crystal-clear readability.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 bg-white border border-slate-300 rounded-xl shadow-card text-slate-900 space-y-6 max-w-2xl mx-auto">
              
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                <HomeostasisLogo size={36} mode="on-light" showWordmark showTagline />

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
