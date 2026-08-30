import React from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface MarketingLandingPageProps {
  onStartSignUp: () => void;
  onGoToLogin: () => void;
  onEnterApp: () => void;
  darkMode?: boolean;
}

export const MarketingLandingPage: React.FC<MarketingLandingPageProps> = ({
  onStartSignUp,
  onGoToLogin,
  onEnterApp,
  darkMode = false,
}) => {
  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* 1. TOP MARKETING NAVIGATION */}
      <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={36} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onGoToLogin}
            className={`py-1.5 px-3 rounded-full text-xs font-bold transition-all border ${
              darkMode ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={onStartSignUp}
            className="py-1.5 px-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,255,157,0.3)]"
          >
            Create Free Account →
          </button>
        </div>
      </div>

      {/* 2. HERO VALUE PROPOSITION */}
      <div className="text-center space-y-4 max-w-2xl mx-auto pt-4">
        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-700 dark:text-[#00FF9D] font-mono uppercase tracking-widest">
          Sovereign Health OS • WWW.TOVELU.STORE
        </span>

        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${textTitle}`}>
          Stop Fighting Willpower. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-[#00FF9D]">
            Fix Cellular Homeostasis.
          </span>
        </h1>

        <p className={`text-sm sm:text-base ${textSub} leading-relaxed max-w-xl mx-auto`}>
          The world's first clinical operating system that calculates your <strong>real biological age</strong> and optimizes food sequencing to eliminate glucose crashes and visceral belly fat.
        </p>

        {/* Hero CTA Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onStartSignUp}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.35)] flex items-center justify-center gap-2"
          >
            <span>Create Free Account & Take Survey →</span>
          </button>

          <button
            onClick={onEnterApp}
            className={`w-full sm:w-auto py-4 px-6 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all active:scale-98 ${
              darkMode ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <span>📱 Enter app.tovelu.store</span>
          </button>
        </div>

        <div className="text-[11px] font-mono text-slate-400 pt-1 flex items-center justify-center gap-3">
          <span>✓ 52-Question Clinical Audit</span>
          <span>•</span>
          <span>✓ Free 3-Hour Full App Trial</span>
          <span>•</span>
          <span>✓ Zero Willpower Fights</span>
        </div>
      </div>

      {/* 3. THE CLINICAL PILLARS (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {/* Pillar 1 */}
        <div className={`p-5 rounded-3xl border ${cardCls} space-y-2`}>
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-xl">
            🥗
          </div>
          <h3 className={`text-base font-black tracking-tight ${textTitle}`}>
            Food Sequencing = -38% Spikes
          </h3>
          <p className={`text-xs ${textSub} leading-relaxed`}>
            Never starve or cut foods. Eating fiber first, protein second, and carbs last coats your duodenum in a viscous mesh that cuts insulin spikes by up to 38%.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className={`p-5 rounded-3xl border ${cardCls} space-y-2`}>
          <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-xl">
            🧬
          </div>
          <h3 className={`text-base font-black tracking-tight ${textTitle}`}>
            52-Marker Biological Age Test
          </h3>
          <p className={`text-xs ${textSub} leading-relaxed`}>
            Discover your true cellular age vs. calendar age across 14 physiological organ systems and a 500-disease prevention registry.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className={`p-5 rounded-3xl border ${cardCls} space-y-2`}>
          <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-xl">
            📜
          </div>
          <h3 className={`text-base font-black tracking-tight ${textTitle}`}>
            Verifiable Milestone Certificates
          </h3>
          <p className={`text-xs ${textSub} leading-relaxed`}>
            Earn and export cryptographic milestone credentials in Instagram Story (9:16) and Facebook Post (1:1) sizes with official registry accreditation.
          </p>
        </div>
      </div>

      {/* 4. THE STEP-BY-STEP USER JOURNEY */}
      <div className={`p-6 rounded-3xl border ${cardCls} space-y-4`}>
        <div className="text-center space-y-1">
          <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            THE PROTOCOL EXPERIENCE
          </span>
          <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
            How Tovelu Works in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
            <div className="text-xs font-mono font-black text-emerald-600 dark:text-[#00FF9D]">01. Free Account</div>
            <div className={`text-xs font-bold ${textTitle}`}>Sign Up & Verify</div>
            <p className={`text-[11px] ${textSub}`}>Create your free account and verify email via Brevo & Supabase.</p>
          </div>

          <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
            <div className="text-xs font-mono font-black text-emerald-600 dark:text-[#00FF9D]">02. Biological Test</div>
            <div className={`text-xs font-bold ${textTitle}`}>52-Q Clinical Survey</div>
            <p className={`text-[11px] ${textSub}`}>Evaluate insulin, gut, and sleep to generate your biological age report.</p>
          </div>

          <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
            <div className="text-xs font-mono font-black text-emerald-600 dark:text-[#00FF9D]">03. 3-Hour Access</div>
            <div className={`text-xs font-bold ${textTitle}`}>Explore Full Web App</div>
            <p className={`text-[11px] ${textSub}`}>Full 3-hour free trial inside app.tovelu.store to inspect your custom plan.</p>
          </div>

          <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
            <div className="text-xs font-mono font-black text-emerald-600 dark:text-[#00FF9D]">04. Unlock Arc</div>
            <div className={`text-xs font-bold ${textTitle}`}>Day 1 Launch</div>
            <p className={`text-[11px] ${textSub}`}>Choose your start date and begin your 90-day sovereign transformation.</p>
          </div>
        </div>
      </div>

      {/* 5. FOOTER */}
      <div className="text-center py-4 space-y-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400">
        <div className="flex items-center justify-center gap-4 font-bold">
          <a href="https://tovelu.store" className="hover:underline">tovelu.store (Public Portal)</a>
          <span>•</span>
          <a href="https://app.tovelu.store" className="hover:underline">app.tovelu.store (Sovereign OS)</a>
        </div>
        <p className="text-[10px] font-mono">
          © 2026 Tovelu. Sovereign Health Operating System. All Rights Reserved. Founder: Ajay.
        </p>
      </div>
    </div>
  );
};
