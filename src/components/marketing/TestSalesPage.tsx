import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface TestSalesPageProps {
  onTryForFree: () => void;
  onGoToLogin: () => void;
  darkMode?: boolean;
}

export const TestSalesPage: React.FC<TestSalesPageProps> = ({
  onTryForFree,
  onGoToLogin,
  darkMode = false,
}) => {
  // Interactive Biological Age Teaser state
  const [teaserAge, setTeaserAge] = useState(32);
  const [hasBloating, setHasBloating] = useState(true);
  const [hasAfternoonCrash, setHasAfternoonCrash] = useState(true);
  const [hasLateSleep, setHasLateSleep] = useState(false);

  // Dynamic projected biological age based on symptoms
  const calculatedLag = (hasBloating ? 2.1 : 0) + (hasAfternoonCrash ? 1.8 : 0) + (hasLateSleep ? 1.5 : 0);
  const projectedBioAge = (teaserAge + calculatedLag).toFixed(1);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-10 animate-fadeIn font-sans">
      {/* 1. TOP STICKY SALES HEADER */}
      <header className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={34} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGoToLogin}
            className={`py-2 px-4 rounded-full text-xs font-bold transition-all border ${
              darkMode ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>

          <button
            onClick={onTryForFree}
            className="py-2 px-5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,157,0.35)]"
          >
            Try It For Free →
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <div className="text-center space-y-4 max-w-2xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#00FF9D] text-xs font-black font-mono uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
          100% Free 3-Hour Full Access • No Card Required
        </div>

        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${textTitle}`}>
          Stop Fighting Willpower. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-[#00FF9D]">
            Fix Cellular Homeostasis.
          </span>
        </h1>

        <p className={`text-sm sm:text-base ${textSub} leading-relaxed max-w-xl mx-auto`}>
          Calorie counting fails because your biology is not a math equation. Discover how clinical <strong>food sequencing</strong> cuts glucose spikes by 38% and reverses your real biological age.
        </p>

        {/* PRIMARY HERO CTA BUTTON */}
        <div className="pt-2 max-w-md mx-auto space-y-2">
          <button
            onClick={onTryForFree}
            className="w-full py-4 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
          >
            <span>⚡ Try It For Free (Get 3-Hour Access) →</span>
          </button>

          <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-slate-400">
            <span>✓ No credit card needed</span>
            <span>•</span>
            <span>✓ 52-Q Clinical Audit</span>
            <span>•</span>
            <span>✓ Instant Access</span>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE "TEST YOUR BIOLOGICAL LAG" TEASER WIDGET */}
      <div className={`p-6 sm:p-8 rounded-3xl border-2 ${
        calculatedLag > 2
          ? 'border-amber-400/40 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5'
          : cardCls
      } space-y-5 max-w-xl mx-auto shadow-lg`}>
        <div className="text-center space-y-1">
          <span className="text-[10px] uppercase font-mono font-bold text-amber-500 tracking-widest">
            INTERACTIVE PREVIEW
          </span>
          <h3 className={`text-lg sm:text-xl font-black tracking-tight ${textTitle}`}>
            Are Your Cells Older Than You Are?
          </h3>
          <p className={`text-xs ${textSub}`}>
            Slide your age and tap your symptoms to see your estimated biological lag:
          </p>
        </div>

        {/* Age Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className={textSub}>Your Calendar Age:</span>
            <span className={`text-base font-black font-mono ${textTitle}`}>{teaserAge} Years Old</span>
          </div>
          <input
            type="range"
            min={18}
            max={75}
            value={teaserAge}
            onChange={(e) => setTeaserAge(Number(e.target.value))}
            className="w-full accent-[#00FF9D] cursor-pointer"
          />
        </div>

        {/* Symptom Toggle Pills */}
        <div className="space-y-1.5">
          <span className={`text-[11px] font-bold block ${textSub}`}>Select Any Symptoms You Experience:</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => setHasBloating(!hasBloating)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                hasBloating
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/50'
                  : subBoxCls
              }`}
            >
              <span>{hasBloating ? '✓' : '+'}</span>
              <span>Post-Meal Bloat</span>
            </button>

            <button
              onClick={() => setHasAfternoonCrash(!hasAfternoonCrash)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                hasAfternoonCrash
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/50'
                  : subBoxCls
              }`}
            >
              <span>{hasAfternoonCrash ? '✓' : '+'}</span>
              <span>2 PM Brain Fog</span>
            </button>

            <button
              onClick={() => setHasLateSleep(!hasLateSleep)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                hasLateSleep
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/50'
                  : subBoxCls
              }`}
            >
              <span>{hasLateSleep ? '✓' : '+'}</span>
              <span>Restless Sleep</span>
            </button>
          </div>
        </div>

        {/* Dynamic Calculation Result */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between border border-slate-800">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Estimated Biological Age:</span>
            <div className="text-2xl font-black text-[#00FF9D] font-mono">
              {projectedBioAge} Years Old
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-amber-400 font-bold uppercase block">Metabolic Lag:</span>
            <span className="text-sm font-black text-amber-300 font-mono">
              +{calculatedLag.toFixed(1)} Years
            </span>
          </div>
        </div>

        {/* CTA Inside Widget */}
        <button
          onClick={onTryForFree}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black text-xs uppercase tracking-wider hover:opacity-90 active:scale-98 transition-all shadow-md flex items-center justify-center gap-1.5"
        >
          <span>Run 52-Question Clinical Audit to Reverse This (Free) →</span>
        </button>
      </div>

      {/* 4. WHAT YOU GET IN THE FREE 3-HOUR TRIAL */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            ZERO RISK • FULL EXPLORATION
          </span>
          <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
            What You Unlock For Free Today:
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
            <div className="text-xl">🥗</div>
            <h4 className={`text-sm font-black ${textTitle}`}>1. Food Sequencing Blueprint</h4>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Eat your favorite meals without fat storage. Discover the exact order to eat your plate to blunt peak glucose by up to 38%.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
            <div className="text-xl">🧬</div>
            <h4 className={`text-sm font-black ${textTitle}`}>2. 14 Organ Systems Matrix</h4>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Inspect clinical grades (A to F) across your gut motility, liver glycogen, insulin sensitivity, and deep slow-wave sleep.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
            <div className="text-xl">🛒</div>
            <h4 className={`text-sm font-black ${textTitle}`}>3. Zero-Waste Kitchen Autopilot</h4>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Tell THAIS what is in your fridge or pantry. It automatically designs your daily portions without wasting groceries.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
            <div className="text-xl">📜</div>
            <h4 className={`text-sm font-black ${textTitle}`}>4. Verified Milestone Certificates</h4>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Export clinical certificates in Instagram Story (9:16) and Facebook Post (1:1) sizes with official registry validation.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CLINICAL EVIDENCE COMPARISON */}
      <div className={`p-6 rounded-3xl border ${cardCls} space-y-4 max-w-2xl mx-auto`}>
        <h3 className={`text-base font-black text-center ${textTitle}`}>
          Why Tovelu Beats Every Traditional Diet App:
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="flex items-start gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-rose-500 font-bold text-sm">✕</span>
            <div>
              <strong className={textTitle}>Traditional Diet Apps:</strong>
              <p className={textSub}>Force you to starve, count every calorie, fight hunger, and rebound within 60 days.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-emerald-500 font-bold text-sm">✓</span>
            <div>
              <strong className="text-emerald-600 dark:text-[#00FF9D]">Tovelu Sovereign Health OS:</strong>
              <p className={textSub}>You eat real food. Food sequencing prevents insulin spikes. Your biology clears visceral fat on autopilot.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FINAL BOTTOM CTA BANNER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-[#10161C] via-[#0A0E13] to-[#080B0F] border-2 border-emerald-500/40 text-center text-white space-y-4 shadow-2xl max-w-2xl mx-auto">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#00FF9D]">
          WWW.TOVELU.STORE • SOVEREIGN PROTOCOL
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Ready to See Your Real Biological Age?
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Join thousands of sovereign members who reversed their metabolic friction without fighting willpower.
        </p>

        <div className="pt-2 max-w-sm mx-auto">
          <button
            onClick={onTryForFree}
            className="w-full py-4 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.45)] flex items-center justify-center gap-2"
          >
            <span>⚡ Try It For Free (Get 3-Hour Access) →</span>
          </button>
        </div>

        <div className="text-[10px] font-mono text-slate-400 pt-1">
          Takes 3 minutes • 100% Free • Direct access to app.tovelu.store
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-xs text-slate-400 py-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <p className="font-bold">WWW.TOVELU.STORE • SOVEREIGN HEALTH OPERATING SYSTEM</p>
        <p className="text-[10px] font-mono">
          © 2026 Tovelu Inc. All clinical models verified by THAIS. Founder: Ajay.
        </p>
      </footer>
    </div>
  );
};
