import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface BrandWebsiteProps {
  onTryForFree: () => void;
  onGoToLogin: () => void;
  darkMode?: boolean;
  onToggleTheme?: () => void;
}

export const BrandWebsite: React.FC<BrandWebsiteProps> = ({
  onTryForFree,
  onGoToLogin,
  darkMode = false,
  onToggleTheme,
}) => {
  // Interactive Biological Age Calculator State
  const [age, setAge] = useState(32);
  const [symptoms, setSymptoms] = useState<string[]>(['bloat', 'crash']);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleSymptom = (id: string) => {
    setSymptoms(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const calculatedLag = (symptoms.includes('bloat') ? 2.1 : 0) + 
                        (symptoms.includes('crash') ? 1.8 : 0) + 
                        (symptoms.includes('sleep') ? 1.5 : 0) +
                        (symptoms.includes('cravings') ? 1.4 : 0);
  const estimatedBioAge = (age + calculatedLag).toFixed(1);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  const faqs = [
    {
      q: "What is Food Sequencing and how does it prevent fat storage?",
      a: "Food sequencing is the clinical science of eating your meal in an exact biological order: Fiber/Greens first, Protein & Healthy Fats second, and Carbohydrates & Starches last. Fiber creates a viscous mesh in the small intestine that slows gastric emptying and blunts peak glucose spikes by up to 38% without cutting calories or starving."
    },
    {
      q: "What do I get with the 3-Hour Free Access?",
      a: "You get 100% unrestricted access to the entire Tovelu Operating System: your 52-Question Biological Age calculation, 14 organ systems diagnostic matrix, custom daily food sequencing blueprint, zero-waste kitchen autopilot, and cryptographic milestone certificates. Zero credit card is required to explore."
    },
    {
      q: "Are all taxes included in your pricing?",
      a: "Yes. All Tovelu protocol memberships are 100% tax-inclusive (VAT & GST included). What you see is what you pay—there are zero surprise add-ons at checkout."
    },
    {
      q: "Can I share my clinical reports with my doctor?",
      a: "Yes. Tovelu includes a 1-tap HIPAA/GDPR compliant Doctor Report export that generates a scannable QR code and clinical summary across your 14 organ systems."
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-white text-slate-900'} transition-colors duration-200 font-sans`}>
      {/* 1. BRAND NAVIGATION HEADER */}
      <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all ${
        darkMode ? 'bg-[#050709]/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HomeostasisLogo size={36} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            )}

            <button
              onClick={onGoToLogin}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all border ${
                darkMode ? 'bg-slate-900 border-slate-700 text-slate-200 hover:text-white' : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={onTryForFree}
              className="py-2.5 px-5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,157,0.35)]"
            >
              Try It For Free →
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#00FF9D] text-xs font-bold font-mono uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
          The Sovereign Health Operating System
        </div>

        <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto ${textTitle}`}>
          Stop Fighting Willpower. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-[#00FF9D]">
            Fix Cellular Homeostasis.
          </span>
        </h1>

        <p className={`text-base sm:text-lg ${textSub} max-w-2xl mx-auto leading-relaxed`}>
          Calorie restriction fails because your metabolism is not a calculator. Tovelu calculates your <strong>real biological age</strong> and uses clinical food sequencing to cut glucose spikes by 38% without starving.
        </p>

        {/* Primary CTA Box */}
        <div className="pt-4 max-w-md mx-auto space-y-3">
          <button
            onClick={onTryForFree}
            className="w-full py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
          >
            <span>⚡ Try It For Free (Get 3-Hour Access) →</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ 52-Q Clinical Audit</span>
            <span>•</span>
            <span>✓ 100% Free</span>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BIOLOGICAL AGE PREVIEW CALCULATOR */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className={`p-6 sm:p-10 rounded-3xl border-2 shadow-xl ${
          calculatedLag > 2
            ? 'border-amber-500/40 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5'
            : cardCls
        } space-y-6`}>
          <div className="text-center space-y-1.5">
            <span className="text-xs uppercase font-mono font-bold text-amber-500 tracking-widest">
              INTERACTIVE DIAGNOSTIC PREVIEW
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              Are Your Cells Older Than Your Calendar Age?
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-md mx-auto`}>
              Slide your age and tap your daily symptoms to estimate your cellular metabolic lag:
            </p>
          </div>

          {/* Age Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-bold">
              <span className={textSub}>Your Calendar Age:</span>
              <span className={`text-lg font-black font-mono ${textTitle}`}>{age} Years Old</span>
            </div>
            <input
              type="range"
              min={18}
              max={75}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-[#00FF9D] cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
            />
          </div>

          {/* Symptom Chips */}
          <div className="space-y-2">
            <span className={`text-xs font-bold block ${textSub}`}>Select Common Symptoms:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'bloat', label: 'Post-Meal Bloat' },
                { id: 'crash', label: '2 PM Energy Crash' },
                { id: 'sleep', label: 'Restless Sleep' },
                { id: 'cravings', label: 'Evening Sugar Cravings' },
              ].map(s => {
                const isActive = symptoms.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSymptom(s.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/50 shadow-sm'
                        : subBoxCls
                    }`}
                  >
                    {isActive ? '✓ ' : '+ '} {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculation Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Estimated Biological Age:</span>
              <div className="text-3xl font-black text-[#00FF9D] font-mono">
                {estimatedBioAge} <span className="text-sm font-sans font-normal text-slate-300">Years</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-[11px] text-amber-400 font-bold uppercase block">Cellular Metabolic Lag:</span>
              <div className="text-lg font-black text-amber-300 font-mono">
                +{calculatedLag.toFixed(1)} Years
              </div>
            </div>
          </div>

          {/* CTA Inside Widget */}
          <button
            onClick={onTryForFree}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black text-xs uppercase tracking-wider hover:opacity-90 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Run Complete 52-Question Clinical Audit to Reverse This →</span>
          </button>
        </div>
      </section>

      {/* 4. THE 3 CLINICAL PILLARS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            CLINICALLY GROUNDED METHODOLOGY
          </span>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
            Three Scientific Pillars That Replace Willpower
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-3xl border ${cardCls} space-y-3`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl">
              🥗
            </div>
            <h3 className={`text-lg font-black tracking-tight ${textTitle}`}>
              1. Food Sequencing = -38% Spikes
            </h3>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Eating vegetables and fiber before protein and carbs coats your duodenum in a viscous mesh that slows carbohydrate absorption, blunting postprandial insulin surges by up to 38%.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${cardCls} space-y-3`}>
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-2xl">
              🧬
            </div>
            <h3 className={`text-lg font-black tracking-tight ${textTitle}`}>
              2. 14 Organ Systems Matrix
            </h3>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Inspect real-time clinical grades (A to F) across endocrine, gut motility, cardiovascular, and liver detoxification markers, cross-referenced against a 500-disease prevention index.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${cardCls} space-y-3`}>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl">
              📜
            </div>
            <h3 className={`text-lg font-black tracking-tight ${textTitle}`}>
              3. Verified Milestone Credentials
            </h3>
            <p className={`text-xs ${textSub} leading-relaxed`}>
              Earn cryptographic certificates of biological mastery formatted for Instagram Stories (9:16) and Facebook Posts (1:1) with official accreditation at WWW.TOVELU.STORE.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            CLEAR ANSWERS
          </span>
          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitle}`}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${cardCls}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className={`text-sm font-bold tracking-tight ${textTitle}`}>
                    {faq.q}
                  </h4>
                  <span className={`text-xs font-bold text-emerald-600 dark:text-[#00FF9D] shrink-0`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <p className={`text-xs ${textSub} leading-relaxed pt-2.5 border-t mt-2.5 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-[#0F141A] via-[#090C0F] to-[#040608] border-2 border-emerald-500/40 text-center text-white space-y-5 shadow-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00FF9D]">
            WWW.TOVELU.STORE • SOVEREIGN PROTOCOL
          </span>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto">
            Ready to Reverse Your Biological Age?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Take the 52-question clinical test and unlock your full 3-hour access to the Tovelu Operating System.
          </p>

          <div className="pt-2 max-w-sm mx-auto">
            <button
              onClick={onTryForFree}
              className="w-full py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.45)]"
            >
              ⚡ Try It For Free (Get 3-Hour Access) →
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Takes 3 minutes • 100% Free • No credit card needed
          </div>
        </div>
      </section>

      {/* 7. BRAND FOOTER */}
      <footer className={`border-t py-8 text-center text-xs text-slate-400 space-y-2 ${
        darkMode ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center justify-center gap-4 font-bold">
          <a href="https://tovelu.store" className="hover:underline">tovelu.store</a>
          <span>•</span>
          <a href="https://app.tovelu.store" className="hover:underline">app.tovelu.store</a>
          <span>•</span>
          <button onClick={onGoToLogin} className="hover:underline">Member Sign In</button>
        </div>
        <p className="text-[10px] font-mono">
          © 2026 Tovelu Inc. All clinical calculations powered by THAIS. Founder: Ajay.
        </p>
      </footer>
    </div>
  );
};
