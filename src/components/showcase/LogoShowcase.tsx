import React, { useState } from 'react';
import { 
  Smartphone, 
  Share2, 
  CreditCard, 
  Package, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type UsageTab = 'app' | 'social' | 'cards' | 'packaging' | 'reports';

export const LogoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UsageTab>('app');
  // Master SVG Component: The Homeostasis Ring
  const HomeostasisRing = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 84 84" fill="none" className={className}>
      <defs>
        <linearGradient id="hr-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" />
          <stop offset="50%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Outer Homeostatic Arc 1 (Human Reality) */}
      <path
        d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
        stroke="url(#hr-teal-grad)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      {/* Outer Homeostatic Arc 2 (Objective Science) */}
      <path
        d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
        className="text-text-primary opacity-85"
      />
      {/* Central Living Geometric Core */}
      <circle cx="42" cy="42" r="5" fill="url(#hr-teal-grad)" />
    </svg>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Master Milestone Banner */}
      <div className="rounded-xl border-2 border-brand-primary/40 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Permanent Brand Identity Locked • Concept 1: The Homeostasis Ring
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Official Global Mark
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Comprehensive Real-World Application Suite
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Exploring every physical and digital touchpoint for <strong>The Homeostasis Ring (The Living Equilibrium)</strong>: Mobile App, Social Media Campaigns, Titanium Member Cards, Diagnostic Packaging, and Official Lab Reports.
        </p>

        {/* Category Navigation Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
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
            <span>3. Cards & Member Passport</span>
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
            <span>5. Clinical Lab Reports</span>
          </Button>
        </div>
      </div>

      {/* 1. MOBILE APP ICON & SPLASH SCREEN */}
      {activeTab === 'app' && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>1. Mobile App Icon & Launch Screen (iOS & Android)</CardTitle>
            <CardDescription>
              How The Homeostasis Ring greets users on their phone screen and during initial app launch.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center p-6 sm:p-10 bg-slate-950 rounded-2xl border border-slate-800 text-white">
              
              {/* iPhone Home Screen Mockup */}
              <div className="w-[280px] bg-slate-900/90 rounded-[40px] p-4 border-[4px] border-slate-700 shadow-2xl space-y-6 mx-auto backdrop-blur-md">
                <div className="w-24 h-4 bg-black rounded-full mx-auto" />

                {/* App Grid Simulation */}
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

                  {/* TOVELU HOMEOSTASIS APP ICON */}
                  <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#020617] border border-[#334155] shadow-lg flex items-center justify-center relative transform group-hover:scale-105 transition-all">
                      <HomeostasisRing size={32} />
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

              {/* Mobile App Splash / Loading Screen Mockup */}
              <div className="w-[280px] h-[460px] bg-[#090D14] rounded-[40px] p-6 border-[4px] border-slate-700 shadow-2xl flex flex-col items-center justify-between mx-auto text-center">
                <div className="w-20 h-3.5 bg-black rounded-full mx-auto" />

                <div className="space-y-4 my-auto">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                    <HomeostasisRing size={52} />
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

      {/* 2. SOCIAL MEDIA AVATARS & PROMOTIONAL POST */}
      {activeTab === 'social' && (
        <Card>
          <CardHeader>
            <CardTitle>2. Social Media Avatars & Announcement Post (Instagram / LinkedIn / X)</CardTitle>
            <CardDescription>
              How The Homeostasis Ring builds recognizable global brand awareness across all digital media feeds.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Instagram / LinkedIn 1080x1080 Post Mockup */}
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-800 p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
                {/* Subtle Background Watermark Ring */}
                <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                  <HomeostasisRing size={320} />
                </div>

                {/* Post Top: Logo & Tagline Lockup */}
                <div className="flex items-center gap-3">
                  <HomeostasisRing size={40} />
                  <div>
                    <span className="font-sans font-bold tracking-[0.2em] text-base text-white block">
                      TOVELU
                    </span>
                    <span className="text-[8px] font-mono tracking-widest text-brand-primary uppercase">
                      Towards Better Health
                    </span>
                  </div>
                </div>

                {/* Post Center: Powerful Mission Statement */}
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

                {/* Post Bottom: Call to Action & Website */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 z-10">
                  <span className="text-xs font-mono text-slate-400">tovelu.com</span>
                  <span className="text-xs font-semibold text-brand-primary flex items-center gap-1">
                    Explore Platform →
                  </span>
                </div>
              </div>

              {/* Social Media Profile Avatars & Banner */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-text-primary">
                  Official Profile Avatars (Square & Circular Crops)
                </h4>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {/* Twitter/X Round Avatar */}
                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisRing size={38} />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">X / Twitter</span>
                    <span className="text-[9px] font-mono text-text-muted">400x400 Crop</span>
                  </div>

                  {/* Instagram Avatar */}
                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisRing size={38} />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">Instagram</span>
                    <span className="text-[9px] font-mono text-text-muted">Story Highlight</span>
                  </div>

                  {/* LinkedIn Company Avatar */}
                  <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#090D14] border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                      <HomeostasisRing size={38} />
                    </div>
                    <span className="text-[11px] font-medium text-text-primary">LinkedIn</span>
                    <span className="text-[9px] font-mono text-text-muted">Company Logo</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-subtle border border-border-subtle space-y-2 text-xs text-text-secondary">
                  <span className="font-semibold text-text-primary block">Instant Silhouette Memorability</span>
                  <p>
                    Because the two interlocking arcs create an unmistakable organic ring, users scrolling at high speeds on social feeds immediately associate this symbol with Tovelu.
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 3. MEMBER PASSPORT & EXECUTIVE BUSINESS CARDS */}
      {activeTab === 'cards' && (
        <Card>
          <CardHeader>
            <CardTitle>3. Sovereign Health Passport & Executive Business Card</CardTitle>
            <CardDescription>
              Article 16 in physical form: The user's private, encrypted health identity card (Apple Wallet / Physical Titanium).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              
              {/* Apple Wallet Style Titanium Black Card */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-br from-[#090D14] via-[#0F172A] to-[#042F2E] border border-slate-700 shadow-2xl p-6 flex flex-col justify-between text-white mx-auto relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <HomeostasisRing size={200} />
                </div>

                {/* Card Top: Brand Lockup & Chip */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <HomeostasisRing size={32} />
                    <span className="font-sans font-bold tracking-[0.2em] text-sm">TOVELU</span>
                  </div>
                  <span className="text-[8px] font-mono uppercase bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded border border-brand-primary/30">
                    Sovereign Identity
                  </span>
                </div>

                {/* Card Middle: Health Vault Key */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block tracking-wider uppercase">Health Vault Pass ID</span>
                  <div className="font-mono text-sm tracking-widest text-slate-200">
                    TOV • 9042 • 8810 • 7321
                  </div>
                </div>

                {/* Card Bottom: Member Name & Encryption */}
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

              {/* Minimalist Executive Business Card (Matte Cotton) */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-[#FBF9F5] border border-[#E2E8F0] shadow-card p-6 flex flex-col justify-between text-[#0F172A] mx-auto">
                <div className="flex items-center justify-between">
                  <HomeostasisRing size={32} />
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                    Geneva • Global Headquarters
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
              How The Homeostasis Ring commands clinical authority and precision engineering on physical products.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Wearable Sensor Pod / Smart Patch */}
              <div className="p-8 rounded-2xl bg-[#090D14] border border-slate-800 text-white flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Wearable Continuous Biosensor Pod
                </span>
                {/* Circular Pod Mockup */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <HomeostasisRing size={44} />
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Laser-Microetched • Grade 5 Titanium</span>
              </div>

              {/* Clinical Diagnostic Kit Box Packaging */}
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-900 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Clinical Biomarker Test Kit Box
                </span>
                {/* Packaging Box Simulation */}
                <div className="w-40 h-32 rounded-xl bg-white border border-slate-200 shadow-card p-4 flex flex-col items-center justify-center gap-2.5">
                  <HomeostasisRing size={36} />
                  <div className="text-center">
                    <span className="font-sans font-bold text-sm tracking-[0.2em] block text-slate-900">
                      TOVELU
                    </span>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
                      Cardiometabolic Kit
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-mono">Foil-Stamped • Clean Medical Grade</span>
              </div>

            </div>
          </CardContent>
        </Card>
      )}

      {/* 5. CLINICAL LABORATORY REPORT & DOCTOR'S SUMMARY */}
      {activeTab === 'reports' && (
        <Card>
          <CardHeader>
            <CardTitle>5. Official Clinical Laboratory Report Header</CardTitle>
            <CardDescription>
              The authoritative clinical print header seen by primary care doctors and laboratory directors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Printed Report Paper Frame */}
            <div className="p-8 bg-white border border-slate-300 rounded-xl shadow-card text-slate-900 space-y-6 max-w-2xl mx-auto">
              
              {/* Document Top Header */}
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <HomeostasisRing size={32} />
                    <div>
                      <span className="font-sans font-bold text-xl tracking-[0.2em] text-slate-900 block">
                        TOVELU
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
                        Health Intelligence & Longitudinal Registry
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right text-[10px] font-mono text-slate-500 space-y-0.5">
                  <div>CLINICAL LAB REPORT #TL-2026-904</div>
                  <div>DATE: AUG 29, 2026 • 16:20 UTC</div>
                  <div className="text-emerald-700 font-semibold">VALIDATED REFERENCE RANGE</div>
                </div>
              </div>

              {/* Sample Lab Values Table */}
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

              {/* Report Footer Verification */}
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
