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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode
    ? 'bg-slate-900/80 border-slate-800 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  const goals = [
    { id: 1, icon: '🔥', title: 'Rapid Visceral Fat Loss', desc: 'Melt stubborn belly fat by stopping insulin spikes without cutting calories.' },
    { id: 2, icon: '⚡', title: 'All-Day Constant Energy', desc: 'End the dreaded 2:00 PM afternoon crash once and for all.' },
    { id: 3, icon: '✨', title: 'Total Gut De-Bloat', desc: 'Say goodbye to gas, bloating, and post-meal stomach heaviness in 72 hours.' },
    { id: 4, icon: '🌙', title: 'Deep Unbroken Sleep', desc: 'Stop waking up at 3:00 AM by balancing your liver’s overnight glycogen rhythm.' },
    { id: 5, icon: '🧠', title: 'Crystal-Clear Focus', desc: 'Wipe out brain fog caused by erratic blood sugar rollercoasters.' },
    { id: 6, icon: '💪', title: 'Lean Muscle & Firm Tone', desc: 'Absorb more protein by locking it into your second digestive window.' },
    { id: 7, icon: '🩸', title: 'Blood Sugar & Insulin Reset', desc: 'Blunt post-meal glucose spikes by up to 38% naturally.' },
    { id: 8, icon: '❤️', title: 'Heart & Artery Protection', desc: 'Protect your cardiovascular system and reduce daily arterial stress.' },
    { id: 9, icon: '🧬', title: 'Natural Hormonal Balance', desc: 'Soothe PCOS, thyroid sluggishness, and cortisol burnout.' },
    { id: 10, icon: '💎', title: 'Clear, Radiant Skin', desc: 'Stop sugar molecules from damaging your skin’s collagen.' },
    { id: 11, icon: '⏳', title: 'Biological Age Reversal', desc: 'Help your internal organs function up to 4 years younger in 90 days.' },
  ];

  const faqs = [
    {
      q: 'Do I have to stop eating rice, roti, bread, pasta, or sweets?',
      a: 'No, absolutely not! You still get to eat your favorite carbohydrates. You simply eat them last in your meal after your veggies and proteins. This slows down gastric digestion and stops your body from turning carbs into fat.',
    },
    {
      q: 'Can I do this with Indian, Asian, Mediterranean, or Vegetarian food?',
      a: 'Yes, 100%. Tovelu’s meal sequencing engine adapts to every regional cuisine on earth (Indian, Mediterranean, Asian, Mexican, Western) and all diets (Vegetarian, Non-Vegetarian, Vegan, Jain, Eggetarian, Halal).',
    },
    {
      q: 'What if I have diagnosed conditions like Thyroid, Fatty Liver, Diabetes, or PCOS?',
      a: 'That is exactly what our diagnostic engine is designed for. Your 52-question survey identifies your conditions and automatically formulates a meal sequence that protects your liver, pancreas, and endocrine system from inflammation.',
    },
    {
      q: 'Is this difficult or time-consuming to follow?',
      a: 'Not at all. There is zero calorie counting, no food weighing, and no special ingredients to buy. It takes less than 30 seconds a day to check your daily food sequence in the app.',
    },
    {
      q: 'How do I get started?',
      a: 'Simply tap "Try for Free" below to begin your personalized health audit. It takes just 2 minutes and maps your exact internal biological baseline.',
    },
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
              Try for Free →
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 1: MAIN HEADLINE + SUBHEADLINE (DIRECT TALK TO VISITOR) */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#00FF9D] text-xs font-mono font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
          A DIRECT MESSAGE FOR YOUR BODY & METABOLISM
        </div>

        <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.15] ${textTitle}`}>
          Your Body Can Face <span className="text-rose-500">55,000+ Diseases</span>. <br />
          Just <span className="text-amber-500">500</span> Are Responsible For 75% to 80% of All Deaths & Chronic Illnesses. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-[#00FF9D]">
            And You Can Prevent & Reverse Almost Every Single One By Fixing Your Diet Order & Daily Routine.
          </span>
        </h1>

        <div className={`text-base sm:text-lg ${textSub} max-w-2xl mx-auto leading-relaxed space-y-3`}>
          <p>
            <strong>Let’s be completely honest with you:</strong> You don’t have to live with a bloated stomach, exhausting afternoon fatigue, or stubborn belly fat. You don’t need dangerous crash diets, bitter powders, or synthetic pills.
          </p>
          <p className="font-semibold text-emerald-700 dark:text-[#00FF9D]">
            Our system solves these 500 root disease pathways automatically—while helping you achieve your #1 personal body goal at the same time.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-4 max-w-md mx-auto space-y-3">
          <button
            onClick={onTryForFree}
            className="w-full py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.45)] flex items-center justify-center gap-2"
          >
            <span>⚡ Try for Free →</span>
          </button>

          <div className="flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span>✓ Takes 2 Minutes</span>
            <span>•</span>
            <span>✓ 100% Private & Encrypted</span>
            <span>•</span>
            <span>✓ No Credit Card Needed</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 11 GOALS (HEADLINE + SHORT CARDS) */}
      {/* ========================================================================= */}
      <section className={`py-16 border-y ${darkMode ? 'bg-[#080A0E] border-slate-800' : 'bg-slate-50/70 border-slate-200'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
              STEP 1: IDENTIFY YOUR TARGET
            </span>
            <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
              Tell Us: What is Your #1 Goal Right Now?
            </h2>
            <p className={`text-xs sm:text-sm ${textSub}`}>
              Pick what matters to your body today. Tovelu crafts your daily meal order to hit your target from Day 1 while quietly shielding your 14 organs from the 500 diseases in the background:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {goals.map((g) => {
              const isSelected = selectedGoal === g.id;
              return (
                <div
                  key={g.id}
                  onClick={() => setSelectedGoal(isSelected ? null : g.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/15'
                      : `${cardCls} hover:border-slate-400 dark:hover:border-slate-700`
                  } space-y-1.5`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl shrink-0">{g.icon}</span>
                    <h3 className={`text-sm font-bold ${textTitle}`}>{g.title}</h3>
                  </div>
                  <p className={`text-xs ${textSub} leading-relaxed`}>{g.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onTryForFree}
              className="py-3 px-8 rounded-full bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20 inline-flex items-center gap-2"
            >
              <span>Select Your Goal & Try for Free →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: HOW IT WORKS (SHORT PARAGRAPH EXPLAINING WHAT WE SOLVE) */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            THE BIOLOGICAL MECHANISM
          </span>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
            How Do We Solve This For You?
          </h2>
        </div>

        <div className={`p-6 sm:p-8 rounded-3xl border ${cardCls} space-y-4 leading-relaxed text-sm sm:text-base`}>
          <p className={textSub}>
            Most health issues aren’t caused by <strong className={textTitle}>what</strong> you eat—they’re triggered by the <strong className={textTitle}>order</strong> you eat it. When you eat bread, rice, or sweets on an empty stomach, your blood sugar spikes violently. Your body releases a flood of insulin, which immediately locks your fat cells, forces your liver to store visceral belly fat, and triggers fatigue across your 14 organ systems.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-text-secondary space-y-2">
            <strong className="text-emerald-700 dark:text-[#00FF9D] font-bold block text-sm">
              ✨ Tovelu solves this with one simple golden rule: The 1-2-3 Eating Sequence
            </strong>
            <p className="leading-relaxed">
              You eat <strong className={textTitle}>Fiber & Veggies first</strong>, <strong className={textTitle}>Protein & Healthy Fats second</strong>, and <strong className={textTitle}>Carbohydrates & Sweets last</strong>. The vegetables create a gentle natural mesh in your stomach that slows down glucose absorption. Your peak insulin spikes drop by up to <strong className={textTitle}>38%</strong>, your body burns fat instead of storing it, and your 14 internal organs stay clean and protected from chronic disease.
            </p>
          </div>

          <p className={`font-semibold text-center ${textTitle}`}>
            Same food. Same plate. Zero starving. Real, irreversible results.
          </p>

          {/* 3 Step Visual Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className={`p-3.5 rounded-2xl border text-center space-y-1 ${subBoxCls}`}>
              <span className="text-2xl">🥗</span>
              <div className="font-bold text-xs text-emerald-600 dark:text-[#00FF9D]">1. Fiber & Veggies First</div>
              <p className={`text-[11px] ${textSub}`}>Forms stomach protective mesh</p>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center space-y-1 ${subBoxCls}`}>
              <span className="text-2xl">🍗</span>
              <div className="font-bold text-xs text-amber-500">2. Protein & Fats Second</div>
              <p className={`text-[11px] ${textSub}`}>Triggers fullness & stops cravings</p>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center space-y-1 ${subBoxCls}`}>
              <span className="text-2xl">🍚</span>
              <div className="font-bold text-xs text-sky-500">3. Carbs & Sweets Last</div>
              <p className={`text-[11px] ${textSub}`}>Smooth, slow sugar absorption</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: USER JOURNEY WITH APP PREVIEW */}
      {/* ========================================================================= */}
      <section className={`py-16 border-t ${darkMode ? 'bg-[#080A0E] border-slate-800' : 'bg-slate-50/70 border-slate-200'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
              YOUR DAY-TO-DAY EXPERIENCE
            </span>
            <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
              What Your Daily Life Looks Like With Tovelu
            </h2>
            <p className={`text-xs sm:text-sm ${textSub}`}>
              Here is the simple, stress-free routine you follow inside the Tovelu app:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: 3 Daily Steps */}
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌅</span>
                  <h3 className={`text-sm font-bold ${textTitle}`}>1. Morning Wake-Up (TODAY Tab)</h3>
                </div>
                <p className={`text-xs ${textSub} leading-relaxed pl-7`}>
                  Open the app. See your personalized breakfast sequence. Check it off when you finish. Enjoy clear, sharp focus with zero mid-morning cravings.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">☀️</span>
                  <h3 className={`text-sm font-bold ${textTitle}`}>2. Lunch & Dinner Sequence (TODAY Tab)</h3>
                </div>
                <p className={`text-xs ${textSub} leading-relaxed pl-7`}>
                  Eat your normal home-cooked meals or restaurant food in the 1-2-3 sequence. The dreaded 2:00 PM afternoon food coma completely disappears.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${cardCls} space-y-1.5`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  <h3 className={`text-sm font-bold ${textTitle}`}>3. Weekly Healing & Doctor Reports (REPORT & HEALTH)</h3>
                </div>
                <p className={`text-xs ${textSub} leading-relaxed pl-7`}>
                  Watch your internal Biological Age drop week after week. See all 14 organ systems stay in healthy green homeostasis. Export a 1-tap QR report for your doctor anytime.
                </p>
              </div>
            </div>

            {/* Right: Realistic Luxury Mobile UI Mockup */}
            <div className="flex justify-center">
              <div className={`w-full max-w-[340px] rounded-3xl p-4 border-2 ${
                darkMode ? 'bg-[#080A0E] border-slate-700 shadow-2xl' : 'bg-white border-slate-300 shadow-xl'
              } space-y-3 text-xs font-sans`}>
                <div className="flex items-center justify-between border-b pb-2 border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold text-[11px]">TODAY MEAL ENGINE</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-[#00FF9D]">DAY 14 OF 90</span>
                </div>

                {/* Biological Age Card */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Biological Age</span>
                    <span className="text-lg font-black text-emerald-600 dark:text-[#00FF9D]">31.2 Years</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    ⚡ -2.8y Reversed
                  </span>
                </div>

                {/* Meals Checklist */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Today's Sequence</span>
                  
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold block text-[11px]">Breakfast • 8:30 AM</span>
                      <span className="text-[10px] text-slate-500">Eggs & Avocado first → Toast last</span>
                    </div>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold block text-[11px]">Lunch • 1:15 PM</span>
                      <span className="text-[10px] text-slate-500">Cucumber salad → Chicken/Dal → Rice</span>
                    </div>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold block text-[11px]">Dinner • 7:45 PM</span>
                      <span className="text-[10px] text-slate-500">Steamed Greens → Salmon/Paneer → Sweet</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">Upcoming</span>
                  </div>
                </div>

                {/* Bottom mini nav */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around text-[9px] font-bold text-slate-400">
                  <span className="text-emerald-500">TODAY</span>
                  <span>WEEK</span>
                  <span>REPORT</span>
                  <span>HEALTH</span>
                  <span>YOU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ALL FAQS (KILL EVERY HESITATION) */}
      {/* ========================================================================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest">
            QUESTIONS & ANSWERS
          </span>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            Everything you need to know before taking your free audit:
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${cardCls}`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-sm sm:text-base font-bold ${textTitle}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xs font-mono ${textSub} shrink-0`}>
                    {isOpen ? '▲' : '▼'}
                  </span>
                </button>
                {isOpen && (
                  <div className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <p className={`text-xs sm:text-sm ${textSub} leading-relaxed`}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Box */}
        <div className={`p-8 rounded-3xl border text-center space-y-4 mt-8 ${
          darkMode ? 'bg-[#080A0E] border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-xl sm:text-2xl font-black ${textTitle}`}>
            Ready to Inspect Your Biological Health?
          </h3>
          <p className={`text-xs sm:text-sm ${textSub} max-w-md mx-auto`}>
            Take the 2-minute diagnostic audit now. See your biological age and unlock your personalized food order today.
          </p>
          <button
            onClick={onTryForFree}
            className="py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.35)] inline-flex items-center gap-2"
          >
            <span>Try for Free →</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`border-t py-8 text-center text-xs ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
        <p>© {new Date().getFullYear()} Tovelu Sovereign Health OS • Cellular Homeostasis & Metabolic Longevity</p>
      </footer>
    </div>
  );
};
