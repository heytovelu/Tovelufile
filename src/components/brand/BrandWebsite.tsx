import React, { useState, useEffect } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { GoalsPillar } from './GoalsPillar';
import { DietPillar } from './DietPillar';

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
  const [activeNav, setActiveNav] = useState<'home' | 'goals' | 'diet' | 'journey' | 'thais' | 'blog'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  const usps = [
    'EAT NORMAL FOOD',
    'REVERSE 500 DISEASES',
    'ZERO CALORIE COUNTING',
    'SHUT OFF FAT STORAGE',
    'DROP BIOLOGICAL AGE',
    'NO KITCHEN SCALES',
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Working Mom & Accountant',
      location: 'Chicago',
      quote:
        '“I was terrified I’d have to stop eating dinner with my kids or cook separate boiled meals. On Tovelu, I eat our regular pasta and rice—just after my salad and protein. Down 14 lbs in 8 weeks, and my 2 PM brain fog is completely gone without touching a diet pill.”',
      metric: '⚡ -14 lbs Visceral Fat • Glucose Spikes Reduced 34%',
    },
    {
      id: 2,
      name: 'Marcus T.',
      role: 'Software Executive',
      location: 'Austin',
      quote:
        '“My doctor warned me my HbA1c was creeping into danger territory. Calorie counting apps made me feel like an obsessive lunatic weighing rice on a scale. Tovelu’s 1-2-3 sequence is so effortless it feels like cheating. My fasting blood sugar dropped from 114 to 91.”',
      metric: '🩸 HbA1c Dropped 0.7% • Fasting 91 mg/dL',
    },
    {
      id: 3,
      name: 'Priya R.',
      role: 'Teacher & PCOS Fighter',
      location: 'London',
      quote:
        '“With PCOS, every diet told me carbs were poison. But Indian home cooking has roti and rice every single day. Tovelu showed me how to eat my dal and sabzi first, roti last. My painful stomach bloating vanished in literally 4 days, and my cycle is regular for the first time in 3 years.”',
      metric: '✨ Gut De-Bloat in 4 Days • Hormonal Balance',
    },
    {
      id: 4,
      name: 'David L.',
      role: 'Retired Engineer',
      location: 'Toronto',
      quote:
        '“I tried Ozempic last year and the constant sulfur burps and nausea were unbearable. Tovelu gave me my dignity back. No synthetic shots, no scales. I sleep through the night without waking at 3 AM, and my biological age dropped by 3.2 years on my report.”',
      metric: '⏳ -3.2 Years Biological Age • Zero Nausea',
    },
    {
      id: 5,
      name: 'Elena K.',
      role: 'Marketing Manager',
      location: 'Sydney',
      quote:
        '“I used to need 3 cups of coffee and a sugary snack just to survive past 2 PM. Changing the eating order smoothed out my energy so much that I don’t even think about sugar anymore. My skin has completely cleared up because my insulin isn’t spiking after lunch.”',
      metric: '⚡ Zero Afternoon Slumps • Clean Skin Homeostasis',
    },
  ];

  const [isAutoSlideActive, setIsAutoSlideActive] = useState(true);

  // Auto slide reviews every 5 seconds (until visitor manually slides)
  useEffect(() => {
    if (!isAutoSlideActive) return;
    const timer = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoSlideActive, reviews.length]);

  const activeReview = reviews[currentReviewIdx];

  const handlePrevReview = () => {
    setIsAutoSlideActive(false); // Stop auto-slide once user manually controls
    setCurrentReviewIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setIsAutoSlideActive(false); // Stop auto-slide once user manually controls
    setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
  };

  const handleNavClick = (target: 'home' | 'goals' | 'diet' | 'journey' | 'thais' | 'blog') => {
    setActiveNav(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-white text-slate-900'} transition-colors duration-200 font-sans`}>
      
      {/* CSS Animation for Seamless Infinite Auto-Scroll Ticker */}
      <style>{`
        @keyframes toveluTicker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-tovelu-ticker {
          display: flex;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          -webkit-font-smoothing: antialiased;
          animation: toveluTicker 58s linear infinite;
        }
        .animate-tovelu-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. TOP MINIMAL NAVIGATION BAR */}
      {/* ========================================================================= */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all ${
        darkMode ? 'bg-[#050709]/90 border-b border-slate-800/80' : 'bg-white/90 border-b border-slate-200/80'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Wordmark & Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <HomeostasisLogo size={36} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-semibold tracking-wider">
            {[
              { id: 'goals', label: 'GOALS' },
              { id: 'diet', label: 'DIET' },
              { id: 'journey', label: 'JOURNEY' },
              { id: 'thais', label: 'THAIS' },
              { id: 'blog', label: 'BLOG' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as any)}
                className={`transition-colors hover:text-emerald-500 ${
                  activeNav === item.id
                    ? 'text-emerald-600 dark:text-[#00FF9D] font-black'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Utilities (Theme + Sign In on Desktop, Theme + Menu on Mobile) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            )}

            {/* Desktop Only Sign In Button */}
            <button
              onClick={onGoToLogin}
              className={`hidden md:inline-flex py-2 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white'
                  : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            {/* Mobile 3-Dots / Menu Icon (Generous Tap Target) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-xl border border-slate-300 dark:border-slate-800 flex items-center justify-center text-base font-bold text-slate-700 dark:text-slate-200 active:scale-95 transition-all"
              aria-label="Open mobile menu"
            >
              •••
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE SIDE SLIDE-OUT DRAWER */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className={`relative w-4/5 max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between z-10 transition-transform duration-300 ease-in-out ${
            darkMode ? 'bg-[#0B0F14] text-slate-100 border-l border-slate-800' : 'bg-white text-slate-900 border-l border-slate-200'
          }`}>
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800">
                <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl border border-slate-300 dark:border-slate-800 flex items-center justify-center text-sm font-bold active:scale-95"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links in Drawer */}
              <nav className="space-y-2">
                {[
                  { id: 'home', label: 'HOME' },
                  { id: 'goals', label: 'GOALS' },
                  { id: 'diet', label: 'DIET' },
                  { id: 'journey', label: 'JOURNEY' },
                  { id: 'thais', label: 'THAIS' },
                  { id: 'blog', label: 'BLOG' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick(item.id as any);
                    }}
                    className={`w-full text-left py-3 px-4 rounded-xl text-sm font-black tracking-wider transition-all block ${
                      activeNav === item.id
                        ? 'text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions in Drawer: Sign In & CTA */}
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGoToLogin();
                }}
                className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold transition-all border text-center block ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTryForFree();
                }}
                className="w-full py-3.5 px-5 rounded-xl text-sm font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 shadow-md shadow-[#00FF9D]/20 text-center block active:scale-95"
              >
                CHOOSE YOUR #1 GOAL →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CONDITIONAL PILLAR VIEW ROUTER */}
      {/* ========================================================================= */}
      {activeNav === 'goals' ? (
        <GoalsPillar onTryForFree={onTryForFree} darkMode={darkMode} />
      ) : activeNav === 'diet' ? (
        <DietPillar onTryForFree={onTryForFree} darkMode={darkMode} />
      ) : (
        <>
          {/* ========================================================================= */}
          {/* 2. SECTION 1: MINIMAL HERO */}
          {/* ========================================================================= */}
          <section className="max-w-4xl mx-auto px-4 sm:px-8 pt-16 sm:pt-28 pb-16 sm:pb-24 text-center space-y-8">
            
            {/* Subtle Authority Pill */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
              WORLD HEALTH ORGANIZATION DATA • CELLULAR HOMEOSTASIS OS
            </div>

            {/* The Clean, Bold Headline */}
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${textTitle}`}>
              Eat what you love. <br />
              <span className="text-emerald-600 dark:text-[#00FF9D]">
                Just change the order.
              </span>
            </h1>

            {/* The Minimal, Human Subheadline */}
            <div className={`text-base sm:text-xl lg:text-2xl ${textSub} leading-relaxed max-w-2xl mx-auto space-y-3 font-normal`}>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                You never have to sit at family dinner picking at plain boiled food while everyone else eats delicious meals.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                Eating your normal home food in Tovelu’s <strong>1-2-3 sequence</strong> blunts post-meal glucose spikes by up to <strong>38%</strong> without starving or cutting carbs. Your body shuts off fat storage and shields your 14 organs from 500 hidden diseases—while hitting your #1 body goal on the same plate.
              </p>
            </div>

            {/* The High-Conversion CTA Button */}
            <div className="pt-6 space-y-3 max-w-md mx-auto">
              <button
                onClick={onTryForFree}
                className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
              >
                <span>CHOOSE YOUR #1 GOAL →</span>
              </button>

              {/* Clean Trust Line */}
              <div className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-500 dark:text-slate-400">
                TRY FOR FREE • NO CARD NEEDED
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MINI SECTION: INFINITE AUTO-SCROLLING TICKER */}
          {/* ========================================================================= */}
          <div className="w-full overflow-hidden py-4 bg-emerald-600 dark:bg-emerald-600 border-y border-emerald-700/60 shadow-inner">
            <div className="animate-tovelu-ticker flex items-center gap-10 text-sm sm:text-base font-mono font-extrabold tracking-wider text-white">
              {[...usps, ...usps, ...usps, ...usps].map((usp, i) => (
                <div key={i} className="flex items-center gap-10 shrink-0">
                  <span className="text-white flex items-center gap-2 drop-shadow-sm">
                    {usp}
                  </span>
                  <span className="text-emerald-200 text-sm">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. SECTION 2: 1-REVIEW AUTO-SLIDER WITH MANUAL ARROWS */}
          {/* ========================================================================= */}
          <section className="transition-colors">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-20 sm:py-24 space-y-10 text-center">
              
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
                  REAL DAILY LIFE EXPERIENCES
                </span>
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
                  Eat real food. Feel the difference.
                </h2>
              </div>

              {/* Active Review Display */}
              <div className="min-h-[220px] flex flex-col items-center justify-center space-y-6 transition-all duration-500">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 text-amber-400 text-lg">
                  ★★★★★
                </div>

                {/* Quote */}
                <blockquote className={`text-lg sm:text-2xl font-normal leading-relaxed italic max-w-3xl ${textTitle}`}>
                  {activeReview.quote}
                </blockquote>

                {/* Clinical Metric Pill */}
                <div>
                  <span className="inline-block text-xs font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
                    {activeReview.metric}
                  </span>
                </div>

                {/* Reviewer Details (Text Only) */}
                <div className="pt-2 text-center space-y-0.5">
                  <h3 className={`text-sm sm:text-base font-bold ${textTitle}`}>{activeReview.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activeReview.role} • {activeReview.location}</p>
                </div>
              </div>

              {/* MANUAL ARROW BUTTONS FOR ALL DEVICES */}
              <div className="flex items-center justify-center gap-5 pt-4">
                <button
                  onClick={handlePrevReview}
                  aria-label="Previous review"
                  className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg font-bold transition-all shadow-sm active:scale-90 ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-emerald-500 hover:text-[#00FF9D]'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-600'
                  }`}
                >
                  ←
                </button>

                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentReviewIdx + 1} / {reviews.length}
                </span>

                <button
                  onClick={handleNextReview}
                  aria-label="Next review"
                  className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg font-bold transition-all shadow-sm active:scale-90 ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-emerald-500 hover:text-[#00FF9D]'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-600'
                  }`}
                >
                  →
                </button>
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-6 space-y-3">
                <button
                  onClick={onTryForFree}
                  className="py-3.5 px-8 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#00FF9D]/20 transition-all inline-block"
                >
                  CHOOSE YOUR #1 GOAL →
                </button>
                <div className="text-xs font-bold font-mono tracking-wider text-slate-500 dark:text-slate-400 block">
                  TRY FOR FREE • NO CARD NEEDED
                </div>
              </div>

            </div>
          </section>
        </>
      )}

      {/* Clean Minimal Footer */}
      <footer className={`py-12 text-center text-xs font-mono border-t ${
        darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-400'
      }`}>
        <p>© {new Date().getFullYear()} Tovelu Sovereign Health OS • Cellular Homeostasis & Longevity</p>
      </footer>

    </div>
  );
};
