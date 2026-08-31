import React, { useState } from 'react';

interface DietPillarProps {
  onTryForFree: () => void;
  darkMode?: boolean;
}

export const DietPillar: React.FC<DietPillarProps> = ({ onTryForFree, darkMode = false }) => {
  const [activeCuisine, setActiveCuisine] = useState<'american' | 'italian' | 'indian' | 'mexican'>('american');
  const [activeLogMode, setActiveLogMode] = useState<'scan_manual' | 'ask_ai'>('scan_manual');

  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const cardBg = darkMode ? 'bg-[#0A0E14] border-slate-800/90' : 'bg-white border-slate-200';
  const subBoxCls = darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';

  const culturalPlates = {
    american: {
      name: 'American Classic: Burger & Crispy Fries',
      tag: 'FAVORITE DINER MEAL',
      wrongWay: 'Eating fries and warm bun first floods blood with fast carbs, spiking glucose to 160+ mg/dL and triggering an immediate insulin surge that stores the meal as belly fat.',
      steps: [
        { num: '1', title: 'FIBER FIRST', item: 'Side Garden Salad or Lettuce, Tomato & Pickles', benefit: 'Builds gut mesh in 2 mins' },
        { num: '2', title: 'PROTEIN & FATS SECOND', item: 'Beef or Turkey Patty, Cheddar Cheese & Bacon', benefit: 'Triggers natural GLP-1 fullness' },
        { num: '3', title: 'CARBS LAST', item: 'Warm Brioche Bun & Golden Crispy Fries', benefit: 'Absorbs at a slow trickle' },
      ],
      verdict: 'You eat 100% of the burger and fries. Zero food coma, zero afternoon guilt, and your fat-burning switch stays on.',
    },
    italian: {
      name: 'Italian Feast: Pasta & Garlic Bread',
      tag: 'FAMILY DINNER NIGHT',
      wrongWay: 'Reaching for the warm bread basket first and diving into pasta dumps bare starch onto an empty stomach, causing severe bloating and a heavy 2 PM food coma.',
      steps: [
        { num: '1', title: 'FIBER FIRST', item: 'Caesar or Arugula Salad with Extra Virgin Olive Oil', benefit: 'Coats stomach mucosal lining' },
        { num: '2', title: 'PROTEIN & FATS SECOND', item: 'Italian Meatballs, Grilled Chicken, or Calamari', benefit: 'Maximizes muscle amino acid uptake' },
        { num: '3', title: 'CARBS LAST', item: 'Al Dente Rigatoni / Spaghetti & Warm Garlic Bread', benefit: 'Blunts post-meal glucose spike by 38%' },
      ],
      verdict: 'Zero stomach distension. Zero unbuttoning your pants under the table. You enjoy authentic Italian cooking with flat blood sugar.',
    },
    indian: {
      name: 'Indian Home Thali: Roti, Dal, Sabzi & Rice',
      tag: 'TRADITIONAL HOME COOKING',
      wrongWay: 'Mixing hot rice or tearing roti into dal first creates an immediate glycemic wave, leaving you sleepy 45 minutes later and locking insulin in fat-storage mode.',
      steps: [
        { num: '1', title: 'FIBER FIRST', item: 'Kachumber Cucumber Salad & Green Bhindi/Gobhi Sabzi', benefit: 'Natural plant fiber barrier' },
        { num: '2', title: 'PROTEIN & FATS SECOND', item: 'Thick Dal Tadka, Paneer Tikka, or Chicken Curry', benefit: 'Nourishes lean body tissue' },
        { num: '3', title: 'CARBS LAST', item: 'Warm Whole Wheat Roti & Fragrant Basmati Rice', benefit: 'Slow, steady cellular energy' },
      ],
      verdict: 'Zero post-lunch sleepiness. Your mom or spouse’s cooking is fully respected, while your HbA1c and energy remain optimal.',
    },
    mexican: {
      name: 'Mexican Fiesta: Tacos or Burrito Bowl',
      tag: 'FRESH & FLAVORFUL',
      wrongWay: 'Mindlessly eating tortilla chips and salsa while waiting, followed by white rice, triggers rapid carbohydrate fermentation and uncomfortable gut pressure.',
      steps: [
        { num: '1', title: 'FIBER FIRST', item: 'Fresh Guacamole, Fajita Bell Peppers & Pico de Gallo', benefit: 'Healthy fats & soluble fibers' },
        { num: '2', title: 'PROTEIN & FATS SECOND', item: 'Grilled Barbacoa, Carnitas, Chicken, or Black Beans', benefit: 'Keeps you full for 5+ hours' },
        { num: '3', title: 'CARBS LAST', item: 'Cilantro Lime Rice, Warm Tortillas, or Churros', benefit: 'Zero insulin panic spike' },
      ],
      verdict: 'Deep satiety without sluggishness. Perfect digestion and steady mental clarity through the evening.',
    },
  };

  const currentPlate = culturalPlates[activeCuisine];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: THE REVOLUTION */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
          BIOCHEMICAL NUTRITION ORDER • THE ANTI-DIET PROTOCOL
        </div>

        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${textTitle}`}>
          The 1-2-3 Diet System: <br />
          <span className="text-emerald-600 dark:text-[#00FF9D]">
            Eat what you love. Just change the order.
          </span>
        </h1>

        <p className={`text-sm sm:text-base md:text-lg ${textSub} max-w-3xl mx-auto leading-relaxed sm:leading-8 font-normal`}>
          For 70 years, the diet industry told you that food is your enemy. They told you to weigh lettuce on a kitchen scale, count every calorie in a notebook, ban bread, pasta, and rice, and sit miserably at family dinner while everyone else enjoys real food. <strong className="text-slate-800 dark:text-slate-200">They lied to you.</strong> Medical science has proven that when you eat the exact same food in the 1-2-3 sequence, your body processes it through a completely different biological pathway.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTryForFree}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(0,255,157,0.4)]"
          >
            CHOOSE YOUR #1 GOAL →
          </button>
          <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
            TRY FOR FREE • NO CARD NEEDED
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HOW TO LOG YOUR FOOD INSIDE TOVELU */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            ZERO KITCHEN SCALES • ZERO CALORIE MATH
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
            How Food Logging Works Inside Tovelu
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            You always see two powerful ways to log your food inside the app:
          </p>
        </div>

        {/* Master Logging Mode Toggle */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveLogMode('scan_manual')}
            className={`py-3 px-6 rounded-2xl border text-xs sm:text-sm font-black transition-all active:scale-95 flex items-center gap-2 ${
              activeLogMode === 'scan_manual'
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D] shadow-sm'
                : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>📸 SCAN | ✍️ MANUAL</span>
          </button>

          <button
            onClick={() => setActiveLogMode('ask_ai')}
            className={`py-3 px-6 rounded-2xl border text-xs sm:text-sm font-black transition-all active:scale-95 flex items-center gap-2 ${
              activeLogMode === 'ask_ai'
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D] shadow-sm'
                : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>💬 ASK AI</span>
          </button>
        </div>

        {/* MODE 1: SCAN | MANUAL (DISH, INGREDIENT, MENU) */}
        {activeLogMode === 'scan_manual' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className={`text-xs sm:text-sm font-mono ${textSub}`}>
                Whether you <strong>snap a live photo</strong>, <strong>upload an image</strong> from your gallery, or <strong>type it manually</strong>, you choose one of these 3 paths:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. DISH */}
              <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 flex flex-col justify-between`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D] font-mono font-black text-sm flex items-center justify-center">
                      01
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                      WHOLE MEAL
                    </span>
                  </div>

                  <h3 className={`text-xl font-black ${textTitle}`}>
                    DISH
                  </h3>

                  <p className="text-xs font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
                    If you scan, upload, or add a manual dish:
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                    You simply show or search the complete prepared meal (e.g. <em>“Spaghetti Bolognese”</em>, <em>“Chicken Tikka Masala with Rice”</em>, or <em>“Cheeseburger & Fries”</em>).
                  </p>

                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">How the system works:</span>
                    <p className={`font-semibold ${textTitle}`}>
                      THAIS automatically deconstructs the entire recipe into its biological components and shows you the exact 1-2-3 bite sequence in 1.2 seconds.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                  ✓ Zero recipe math • Just eat in order
                </div>
              </div>

              {/* 2. INGREDIENT */}
              <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 flex flex-col justify-between`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-400 font-mono font-black text-sm flex items-center justify-center">
                      02
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      HOME COOKING
                    </span>
                  </div>

                  <h3 className={`text-xl font-black ${textTitle}`}>
                    INGREDIENT
                  </h3>

                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                    If you scan, upload, or add manual ingredients:
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                    You show or add individual raw or cooked items (e.g. <em>2 eggs, 1 cup sautéed spinach, half an avocado, 1 slice sourdough toast</em>).
                  </p>

                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">How the system works:</span>
                    <p className={`font-semibold ${textTitle}`}>
                      THAIS analyzes fiber, protein, fat, and starch density across each item and automatically groups them into Step 1 (Fiber), Step 2 (Protein), and Step 3 (Carbs).
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                  ✓ Perfect for home chefs cooking from scratch
                </div>
              </div>

              {/* 3. MENU */}
              <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 flex flex-col justify-between`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono font-black text-sm flex items-center justify-center">
                      03
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      DINING OUT
                    </span>
                  </div>

                  <h3 className={`text-xl font-black ${textTitle}`}>
                    MENU
                  </h3>

                  <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                    If you scan, upload, or add a manual menu:
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                    You snap a restaurant paper menu, upload a menu screenshot, or search from our 10,000+ restaurant database (Chipotle, Olive Garden, Subway, local diners).
                  </p>

                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">How the system works:</span>
                    <p className={`font-semibold ${textTitle}`}>
                      THAIS reads the restaurant options, highlights the best meals for your specific goal, and gives you the exact table sequencing order before your food arrives.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                  ✓ Dine out with 100% confidence & zero stress
                </div>
              </div>

            </div>
          </div>
        )}

        {/* MODE 2: ASK AI */}
        {activeLogMode === 'ask_ai' && (
          <div className={`p-6 sm:p-10 rounded-3xl border ${cardBg} shadow-xl max-w-4xl mx-auto space-y-6`}>
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                💬
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
                THE CONVERSATIONAL ASSISTANT
              </span>
              <h3 className={`text-2xl sm:text-3xl font-black ${textTitle}`}>
                Ask AI: How It Works
              </h3>
              <p className={`text-xs sm:text-sm ${textSub}`}>
                When you are in an unpredictable real-life situation and don't have time to scan or search:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">1. You Speak or Text in Plain Words:</span>
                <p className={`text-xs sm:text-sm font-semibold ${textTitle}`}>
                  “I’m at my mother-in-law’s house and dinner is beef lasagna, garlic bread, and a Caesar salad. What order should I eat this so I don’t spike my blood sugar?”
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-[#00FF9D] uppercase">
                    2. THAIS AI Answers In 2 Seconds:
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D]">Instant Diagnostic</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${textTitle} font-medium`}>
                  “Enjoy dinner with your family! Eat a big bowl of the Caesar salad first (Fiber). Then enjoy the beef and cheese layers of the lasagna (Protein & Fat). Finish with the pasta sheets and garlic bread last (Carbs). You will stay in active fat-burning mode with zero post-meal bloat!”
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center text-xs font-mono text-slate-500">
              Works for airport layovers, weddings, business lunches, holiday buffets, and late-night cravings.
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 2. THE SINK VS FILTER ANALOGY (THE MASTER REVELATION) */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-10 rounded-3xl border ${cardBg} shadow-xl space-y-8`}>
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              THE BIOMECHANICS OF YOUR STOMACH
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              The "Sink vs Filter" Secret: Why Order Changes Everything
            </h2>
            <p className={`text-xs sm:text-sm md:text-base ${textSub}`}>
              Your stomach and small intestine act like a kitchen sink with a drainage pipe. What you pour in first dictates how your bloodstream reacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* The Old Way: Open Drain */}
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-rose-950/10 border-rose-900/30' : 'bg-rose-50/60 border-rose-200'} space-y-4`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
                  ❌ What Happens When You Eat Carbs First
                </span>
                <span className="text-xl">🌊</span>
              </div>
              <h3 className={`text-lg font-bold ${textTitle}`}>
                The Open Drain (Glucose Tidal Wave)
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                When bread, rice, or pasta enters an empty stomach first, it breaks down into pure glucose in under 10 minutes. With no barrier in place, glucose floods your blood in a massive surge (up to 160+ mg/dL).
              </p>
              <div className="space-y-1.5 pt-2 border-t border-rose-200 dark:border-rose-900/40 text-xs font-mono">
                <div className="text-rose-600 dark:text-rose-400 font-bold">• Pancreas hyper-secretes Insulin</div>
                <div className="text-rose-600 dark:text-rose-400 font-bold">• Locks all fat cells shut (Storage Mode)</div>
                <div className="text-rose-600 dark:text-rose-400 font-bold">• Triggers brutal 2:00 PM brain fog crash</div>
              </div>
            </div>

            {/* The Tovelu 1-2-3 Way: The Protective Mesh */}
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-emerald-950/10 border-emerald-900/30' : 'bg-emerald-50/60 border-emerald-200'} space-y-4`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                  👑 The Tovelu 1-2-3 Sequence
                </span>
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className={`text-lg font-bold ${textTitle}`}>
                The Protective Mesh Filter (Gentle Stream)
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Eating fiber first coats your intestinal walls with a temporary, viscous plant gel. When your protein, fats, and carbs land on top of that shield, glucose absorbs at a smooth, steady trickle.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-emerald-200 dark:border-emerald-900/40 text-xs font-mono">
                <div className="text-emerald-700 dark:text-[#00FF9D] font-bold">• Blunts glucose spike by up to 38%</div>
                <div className="text-emerald-700 dark:text-[#00FF9D] font-bold">• Keeps insulin low (Active Fat Burning)</div>
                <div className="text-emerald-700 dark:text-[#00FF9D] font-bold">• Steady all-day high energy with zero comas</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE 1-2-3 SEQUENCE VISUAL BLUEPRINT */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            THE EXACT SEQUENCE
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
            Three Simple Steps. On Every Single Plate.
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            You don't need a kitchen scale. Just look at your plate and eat in this natural order:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* STEP 1 */}
          <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] font-mono font-black flex items-center justify-center text-lg">
                1
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 dark:text-[#00FF9D] uppercase">
                THE SHIELD
              </span>
            </div>
            <h3 className={`text-xl font-black ${textTitle}`}>
              Fiber First
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Start with your salad, greens, steamed broccoli, sauteed vegetables, or raw veggie sticks.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
              <span className="text-slate-400 block uppercase font-bold text-[10px]">What it does in 2 mins:</span>
              <span className="text-emerald-700 dark:text-[#00FF9D] font-bold block">
                Builds a physical gel mesh in the duodenum that slows carb absorption.
              </span>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-mono font-black flex items-center justify-center text-lg">
                2
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                THE ANCHOR
              </span>
            </div>
            <h3 className={`text-xl font-black ${textTitle}`}>
              Protein & Fats Second
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Eat your chicken, fish, eggs, tofu, paneer, lentils, beef, avocado, or healthy cheeses next.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
              <span className="text-slate-400 block uppercase font-bold text-[10px]">What it does in 5 mins:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold block">
                Triggers natural GLP-1 & PYY hormones, telling your brain you are fully satisfied.
              </span>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`p-6 rounded-3xl border ${cardBg} shadow-md space-y-4 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono font-black flex items-center justify-center text-lg">
                3
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
                THE SAFE FUEL
              </span>
            </div>
            <h3 className={`text-xl font-black ${textTitle}`}>
              Carbs & Sweets Last
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Finish with your warm rice, pasta, potatoes, bread, roti, pizza, or occasional dessert.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono space-y-1">
              <span className="text-slate-400 block uppercase font-bold text-[10px]">What it does:</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold block">
                Digests at a gentle trickle with flat insulin. Eat what you love in total peace.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOUR REAL-LIFE CULTURAL PLATES */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            WORKS WITH EVERY CUISINE ON EARTH
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
            See How Your Favorite Meals Look in 1-2-3
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            You never have to quit your culture’s home cooking or decline social restaurant dinners.
          </p>
        </div>

        {/* Cuisine Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'american', label: '🍔 American Classic' },
            { id: 'italian', label: '🍝 Italian Feast' },
            { id: 'indian', label: '🍛 Indian Home Thali' },
            { id: 'mexican', label: '🌮 Mexican Fiesta' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCuisine(c.id as any)}
              className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
                activeCuisine === c.id
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D]'
                  : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Active Plate Demonstration Card */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${cardBg} shadow-lg space-y-6`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D] block">
                {currentPlate.tag}
              </span>
              <h3 className={`text-xl sm:text-2xl font-black ${textTitle} mt-0.5`}>
                {currentPlate.name}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
              Full Meal Eaten • Zero Foods Banned
            </span>
          </div>

          {/* The Wrong vs 1-2-3 Sequence */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* The 1-2-3 Order */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                THE TOVELU 1-2-3 ORDER:
              </span>
              <div className="space-y-2.5">
                {currentPlate.steps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 bg-slate-50/50 dark:bg-slate-900/30">
                    <span className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D] font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D]">{step.title}</span>
                        <span className="text-[10px] font-mono text-slate-400">{step.benefit}</span>
                      </div>
                      <p className={`text-xs sm:text-sm font-semibold ${textTitle}`}>{step.item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verdict Box */}
            <div className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 ${subBoxCls}`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-rose-500 uppercase block">
                  The Old Way Mistake:
                </span>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {currentPlate.wrongWay}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D] uppercase block">
                  The Tovelu Outcome:
                </span>
                <p className={`text-xs sm:text-sm font-bold ${textTitle}`}>
                  {currentPlate.verdict}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ONE PLATE, TWO SOLUTIONS (GOAL + 500 DISEASES) */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            THE TWO SOLUTIONS ENGINE
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
            One Single Plate. Two Massive Transformations.
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            Every time you sit down to eat 1-2-3, your body accomplishes two things simultaneously:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Solution 1: Your #1 Personal Body Goal */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${cardBg} shadow-md space-y-4`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D] uppercase block">
                  SOLUTION 01 (ON THE OUTSIDE)
                </span>
                <h3 className={`text-xl font-black ${textTitle}`}>
                  Hits Your #1 Personal Mirror Goal
                </h3>
              </div>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Whether you selected <strong>Lose Belly Fat & Weight</strong>, <strong>All-Day High Energy</strong>, or <strong>Heal Gut & Stop Bloating</strong>, the 1-2-3 sequence directly unlocks your desired physical outcome from your very first meal:
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Melts visceral belly fat while keeping lean muscle intact
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Eliminates the 2 PM energy collapse and afternoon sugar cravings
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Calms painful abdominal gas and distension in 72 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Stops midnight cortisol surges for deep, unbroken 8-hour sleep
              </li>
            </ul>
          </div>

          {/* Solution 2: Shields 14 Organs from 500 Diseases */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${cardBg} shadow-md space-y-4`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase block">
                  SOLUTION 02 (ON THE INSIDE)
                </span>
                <h3 className={`text-xl font-black ${textTitle}`}>
                  Shields 14 Organs from 500 Diseases
                </h3>
              </div>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              According to the World Health Organization (WHO), over 75% of chronic illnesses stem from the exact same upstream trigger: repeated post-meal glucose spikes and chronic insulin flooding.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✦</span> <strong>Pancreas:</strong> Relieved of beta-cell exhaustion (reverses pre-diabetes)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✦</span> <strong>Heart & Arteries:</strong> Stops free radical tears and plaque formation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✦</span> <strong>Liver:</strong> Halts excess fat storage (prevents Fatty Liver Disease)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✦</span> <strong>Brain & Skin:</strong> Prevents microglial neuro-inflammation & collagen glycation
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ZERO LIFESTYLE DISRUPTION */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            DESIGNED FOR REAL HUMAN BEINGS
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
            Zero Lifestyle Disruption. 100% Social Freedom.
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            Here is why Tovelu is sustainable for the next 50 years of your life:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-3xl border ${cardBg} space-y-3`}>
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <h3 className={`text-lg font-bold ${textTitle}`}>No Separate Cooking</h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Never cook a separate bland diet meal for yourself while your family eats delicious real food. You all eat the exact same dinner from the exact same pots.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${cardBg} space-y-3`}>
            <span className="text-2xl">🥂</span>
            <h3 className={`text-lg font-bold ${textTitle}`}>Zero Social Embarrassment</h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              At restaurants, dinner parties, and weddings, you never have to decline meals or carry containers. You just eat your veggies first, protein second, carbs last. Nobody even notices.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${cardBg} space-y-3`}>
            <span className="text-2xl">🍰</span>
            <h3 className={`text-lg font-bold ${textTitle}`}>Zero Guilt, 100% Dignity</h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
              Eat birthday cake, fresh bread, and weekend treats without self-loathing. Eaten in the right sequence, your body handles it safely without insulin panic.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. THE ACTION CLOSER */}
      {/* ========================================================================= */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-6 pt-12">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${textTitle}`}>
          You Don’t Need A New Diet. <br />
          <span className="text-emerald-600 dark:text-[#00FF9D]">
            You Just Need A New Sequence.
          </span>
        </h2>
        <p className={`text-sm sm:text-base ${textSub} max-w-xl mx-auto`}>
          Eat your favorite home food tonight. Just eat it 1-2-3. Select your #1 personal body goal to generate your custom Day 1 plate blueprint right now.
        </p>

        <div className="pt-2 space-y-3 max-w-md mx-auto">
          <button
            onClick={onTryForFree}
            className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
          >
            <span>CHOOSE YOUR #1 GOAL →</span>
          </button>
          <div className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-500 dark:text-slate-400">
            TRY FOR FREE • NO CARD NEEDED
          </div>
        </div>
      </section>

    </div>
  );
};
