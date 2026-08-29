import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  User, 
  FileText, 
  Watch, 
  ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const LogoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'app' | 'web' | 'profile' | 'hardware' | 'document'>('app');

  // Pure SVG Component of The Vitruvian Column
  const VitruvianIcon = ({ size = 32, gold = true, className = "" }: { size?: number; gold?: boolean; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="vitruvian-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F3E5AB" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>
      {/* Curved Shoulders Horizon */}
      <path
        d="M 16 28 C 30 22, 70 22, 84 28 C 76 34, 60 32, 50 32 C 40 32, 24 34, 16 28 Z"
        fill={gold ? "url(#vitruvian-gold)" : "currentColor"}
      />
      {/* Upright Spine Pillar */}
      <path
        d="M 46 34 L 54 34 L 52 82 C 52 84, 48 84, 48 82 Z"
        fill={gold ? "url(#vitruvian-gold)" : "currentColor"}
      />
      {/* Meridian Crown Orb */}
      <circle cx="50" cy="18" r="3.5" fill={gold ? "url(#vitruvian-gold)" : "currentColor"} />
    </svg>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Master Milestone Header */}
      <div className="rounded-xl border-2 border-brand-primary/30 bg-surface p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Selected Global Identity • The Vitruvian Column
            </span>
          </div>
          <Badge variant="optimal" size="sm">
            Official Brand Mark Locked
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Comprehensive Usage Showcase: The Vitruvian Column
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Testing our locked hallmark across all critical touchpoints: <strong>iOS/Android App Icon, Website Navigation, Sovereign Profile Passport, Wearable Hardware, and Clinical Lab Documents</strong>.
        </p>

        {/* View Switcher Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
          <Button
            size="sm"
            variant={activeTab === 'app' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('app')}
            className="text-xs flex items-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>1. App Icon & Mobile Screen</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'web' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('web')}
            className="text-xs flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>2. Website & App Navigation</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'profile' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('profile')}
            className="text-xs flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5" />
            <span>3. Member Passport & Profile</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'hardware' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('hardware')}
            className="text-xs flex items-center gap-1.5"
          >
            <Watch className="w-3.5 h-3.5" />
            <span>4. Hardware & Wearables</span>
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'document' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('document')}
            className="text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>5. Clinical Lab Report</span>
          </Button>
        </div>
      </div>

      {/* 1. APP ICON ON MOBILE PHONE HOME SCREEN */}
      {activeTab === 'app' && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>1. iOS & Android App Icon Experience</CardTitle>
            <CardDescription>
              How Tovelu sits with quiet luxury on an iPhone home screen alongside everyday apps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-slate-950 rounded-2xl border border-slate-800 text-white">
              
              {/* iPhone Home Screen Mockup Frame */}
              <div className="w-[280px] bg-slate-900/90 rounded-[40px] p-4 border-[4px] border-slate-700 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
                {/* Dynamic Island / Speaker Notch */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto" />

                {/* App Grid Simulation */}
                <div className="grid grid-cols-4 gap-3 pt-2">
                  {/* Dummy App 1 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Mail</div>
                    <span className="text-[9px] text-slate-400">Mail</span>
                  </div>
                  {/* Dummy App 2 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Photos</div>
                    <span className="text-[9px] text-slate-400">Photos</span>
                  </div>
                  {/* Dummy App 3 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400">Health</div>
                    <span className="text-[9px] text-slate-400">Health</span>
                  </div>

                  {/* TOVELU MASTER APP ICON */}
                  <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#020617] border border-[#334155] shadow-lg flex items-center justify-center relative transform group-hover:scale-105 transition-all">
                      <VitruvianIcon size={32} />
                      {/* Notification Badge */}
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-primary text-[8px] font-bold text-white rounded-full flex items-center justify-center ring-2 ring-slate-900">
                        1
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-white tracking-wide">Tovelu</span>
                  </div>
                </div>

                {/* Status Bar Text */}
                <div className="pt-24 pb-4 text-center">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    iOS 18 • 120Hz OLED
                  </span>
                </div>
              </div>

              {/* Close-Up High-Res App Icon Detail */}
              <div className="space-y-4 max-w-xs text-center md:text-left">
                <div className="w-24 h-24 rounded-[22px] bg-gradient-to-b from-[#0F172A] to-[#020617] border border-[#334155] shadow-2xl flex items-center justify-center mx-auto md:mx-0">
                  <VitruvianIcon size={64} />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">The 512px App Store Icon</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Rendered with obsidian ceramic background, champagne gold brushed metal geometry, and micro-bevel highlights. Distinctive from 5 meters away.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 2. WEBSITE & DESKTOP NAVBAR LOCKUP */}
      {activeTab === 'web' && (
        <Card>
          <CardHeader>
            <CardTitle>2. Website & Global Navigation Lockup</CardTitle>
            <CardDescription>
              How Tovelu appears in the top header of tovelu.com across both Light and Dark themes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Desktop Light Header Simulation */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-subtle space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">Light Theme Navbar</span>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                {/* Brand Lockup */}
                <div className="flex items-center gap-3">
                  <VitruvianIcon size={28} />
                  <span className="font-serif text-xl tracking-[0.28em] text-slate-900 font-normal">
                    TOVELU
                  </span>
                </div>

                {/* Nav Links */}
                <div className="hidden sm:flex items-center gap-6 text-xs text-slate-600 font-medium">
                  <span className="text-slate-900 font-semibold cursor-pointer">Health Intelligence</span>
                  <span className="hover:text-slate-900 cursor-pointer">Longitudinal Biomarkers</span>
                  <span className="hover:text-slate-900 cursor-pointer">Science & Evidence</span>
                  <span className="hover:text-slate-900 cursor-pointer">Privacy Guarantee</span>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="primary" className="text-xs">
                    Access Portal
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Dark Theme Header Simulation */}
            <div className="rounded-xl border border-slate-800 bg-[#090D14] p-4 shadow-card space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">Dark Theme Navbar</span>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                {/* Brand Lockup */}
                <div className="flex items-center gap-3">
                  <VitruvianIcon size={28} />
                  <span className="font-serif text-xl tracking-[0.28em] text-white font-normal">
                    TOVELU
                  </span>
                </div>

                {/* Nav Links */}
                <div className="hidden sm:flex items-center gap-6 text-xs text-slate-400 font-medium">
                  <span className="text-white font-semibold cursor-pointer">Health Intelligence</span>
                  <span className="hover:text-white cursor-pointer">Longitudinal Biomarkers</span>
                  <span className="hover:text-white cursor-pointer">Science & Evidence</span>
                  <span className="hover:text-white cursor-pointer">Privacy Guarantee</span>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="primary" className="text-xs">
                    Access Portal
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 3. MEMBER PASSPORT & DIGITAL WALLET PROFILE */}
      {activeTab === 'profile' && (
        <Card>
          <CardHeader>
            <CardTitle>3. Sovereign Health Passport & Member Card</CardTitle>
            <CardDescription>
              Article 16 in physical form: The user's private, encrypted health identity card (Apple Wallet / Physical Titanium).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center p-8 bg-subtle/50 rounded-2xl border border-border-subtle">
              {/* Apple Wallet Style Titanium Card */}
              <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-br from-[#0B0F17] via-[#1E293B] to-[#020617] border border-[#334155] shadow-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
                {/* Subtle Background Watermark */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <VitruvianIcon size={200} />
                </div>

                {/* Card Top: Brand Hallmark & Chip */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <VitruvianIcon size={32} />
                    <span className="font-serif text-lg tracking-[0.3em] font-light">TOVELU</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded border border-brand-primary/30">
                    Sovereign Identity
                  </span>
                </div>

                {/* Card Middle: User ID & Biometrics Encrypted */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">Health Vault Key</span>
                  <div className="font-mono text-sm tracking-widest text-slate-200">
                    TOV • 8820 • 4910 • 7741
                  </div>
                </div>

                {/* Card Bottom: Member Name & Encryption */}
                <div className="flex items-end justify-between border-t border-slate-700/60 pt-3">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Cardholder</span>
                    <div className="text-xs font-semibold tracking-wide">AJAY • FOUNDING MEMBER</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Standard</span>
                    <div className="text-[10px] font-mono text-brand-primary">E2E ENCRYPTED (EHR)</div>
                  </div>
                </div>
              </div>

              {/* Profile Avatar Variations */}
              <div className="flex items-center gap-6 mt-8">
                {/* Large Avatar (Twitter / LinkedIn) */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-brand-primary/40 flex items-center justify-center shadow-subtle">
                    <VitruvianIcon size={36} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">64px Profile</span>
                </div>

                {/* Medium Avatar (In-App Navbar) */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-border-default flex items-center justify-center">
                    <VitruvianIcon size={22} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">40px Navbar</span>
                </div>

                {/* Micro Favicon (Browser Tab) */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center border border-slate-700">
                    <VitruvianIcon size={12} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">16px Favicon</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 4. PHYSICAL HARDWARE & WEARABLE BIOSENSORS */}
      {activeTab === 'hardware' && (
        <Card>
          <CardHeader>
            <CardTitle>4. Physical Hardware & Wearable Biosensor Integration</CardTitle>
            <CardDescription>
              Laser-etched into medical sensors, continuous glucose monitor patches, and smart ring hardware.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Smart Ring / Sensor Pod Case */}
              <div className="p-8 rounded-2xl bg-[#090D14] border border-slate-800 text-white flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Titanium Smart Ring / Biosensor Pod
                </span>
                {/* Circular Pod Mockup */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <VitruvianIcon size={40} />
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Laser-Microetched • Grade 5 Titanium</span>
              </div>

              {/* Clinical Diagnostic Device Packaging */}
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-900 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Clinical Diagnostic Kit Packaging
                </span>
                {/* Packaging Box Simulation */}
                <div className="w-36 h-28 rounded-xl bg-white border border-slate-200 shadow-card p-4 flex flex-col items-center justify-center gap-2">
                  <VitruvianIcon size={32} />
                  <span className="font-serif text-sm tracking-[0.25em] font-normal">TOVELU</span>
                  <span className="text-[8px] font-mono text-slate-400 uppercase">Metabolic Panel Kit</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Foil-Stamped • Recycled Medical Paper</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 5. CLINICAL LAB REPORT / PHYSICIAN SUMMARY */}
      {activeTab === 'document' && (
        <Card>
          <CardHeader>
            <CardTitle>5. Clinical Laboratory Report & Physician Summary</CardTitle>
            <CardDescription>
              The authoritative clinical print header seen by real-world doctors and medical laboratories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Printed Paper Mockup Frame */}
            <div className="p-8 bg-white border border-slate-300 rounded-xl shadow-card text-slate-900 space-y-6 max-w-2xl mx-auto">
              {/* Document Header */}
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <VitruvianIcon size={28} />
                    <span className="font-serif text-xl tracking-[0.25em] font-medium text-slate-900">
                      TOVELU
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Health Intelligence & Longitudinal Biomarker Registry
                  </p>
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

              {/* Physician Footer Stamp */}
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
