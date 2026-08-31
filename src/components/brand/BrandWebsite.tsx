import React, { useState, useEffect } from 'react';
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
  // Calculator state
  const [age, setAge] = useState(32);
  const [symptoms, setSymptoms] = useState<string[]>(['bloat', 'crash']);
  
  // Interactive Example User Task Logging state
  const [interactiveTasks, setInteractiveTasks] = useState({
    breakfast: true,
    lunch: true,
    dinner: false,
    walk: false,
  });
  const [loggedToast, setLoggedToast] = useState<string | null>(null);

  // Section states
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedGoal, setSelectedGoal] = useState<number | null>(1);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Scroll listener for floating mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSymptom = (id: string) => {
    setSymptoms(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const calculatedLag = (symptoms.includes('bloat') ? 1.8 : 0) + 
                        (symptoms.includes('crash') ? 1.4 : 0) + 
                        (symptoms.includes('sleep') ? 1.2 : 0) +
                        (symptoms.includes('cravings') ? 1.1 : 0);
  const estimatedBioAge = (age + calculatedLag).toFixed(1);

  const toggleTask = (task: 'breakfast' | 'lunch' | 'dinner' | 'walk') => {
    const nextVal = !interactiveTasks[task];
    setInteractiveTasks(prev => ({ ...prev, [task]: nextVal }));
    if (nextVal) {
      setLoggedToast(`⚡ 1-Tap Logged! Day 14 sequence verified.`);
      setTimeout(() => setLoggedToast(null), 2500);
    }
  };

  const completedCount = Object.values(interactiveTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 4) * 100);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100 shadow-xl'
    : 'bg-white border-slate-200 text-slate-900 shadow-md';
  const subBoxCls = darkMode
    ? 'bg-slate-900/90 border-slate-800/80 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  const goals = [
    {
      id: 1,
      icon: '🔥',
      title: 'Rapid Belly Fat Loss (Visceral Fat Melt)',
      simple: 'Melt the deep, dangerous fat around your stomach without starving yourself or cutting out carbs.',
      data: 'Lowers fat-storing insulin by up to 44%, unlocking continuous fat-burning after every meal.',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'All-Day Constant Energy (End 2 PM Crash)',
      simple: 'Stop feeling sluggish, sleepy, and exhausted after lunch. Stay fresh and alert from morning until bedtime.',
      data: 'Blunts post-meal glucose spikes by 38%, preventing 87% of afternoon food comas and sugar crashes.',
    },
    {
      id: 3,
      icon: '✨',
      title: 'Total Gut De-Bloat (Flat & Calm Stomach)',
      simple: 'Say goodbye to painful gas, stomach heaviness, and looking 3 months pregnant after eating.',
      data: 'Fiber coating reduces intestinal gas fermentation and restores normal digestion transit in 72 hours.',
    },
    {
      id: 4,
      icon: '🌙',
      title: 'Deep Restful Sleep (Stop Waking at 3 AM)',
      simple: 'Fall asleep quickly, stay asleep all night, and wake up refreshed instead of tired.',
      data: 'Meal sequencing prevents nighttime cortisol surges by 60%, stopping 2 AM – 4 AM sudden wake-ups.',
    },
    {
      id: 5,
      icon: '🧠',
      title: 'Crystal-Clear Focus (No More Brain Fog)',
      simple: 'Clear the fuzzy, sluggish feeling in your head so you can think sharply, work faster, and remember easily.',
      data: 'Smooth glucose curves restore clean brain energy delivery, clearing mental fatigue within 5 days.',
    },
    {
      id: 6,
      icon: '💪',
      title: 'Lean Muscle & Firm Body Tone',
      simple: 'Keep and tone your muscles while you lose fat, without needing to spend 2 hours lifting weights every day.',
      data: 'Sequencing increases amino acid muscle absorption by 29%, preserving tone while burning pure fat.',
    },
    {
      id: 7,
      icon: '🩸',
      title: 'Blood Sugar & Pre-Diabetes Reset',
      simple: 'Protect your body from high blood sugar, diabetes, and dangerous insulin resistance naturally.',
      data: 'Reduces peak post-meal blood sugar by 38% to 42%, naturally mimicking first-line metabolic therapy.',
    },
    {
      id: 8,
      icon: '❤️',
      title: 'Heart Health & Clean Arteries',
      simple: 'Lower internal inflammation, keep blood pressure smooth, and protect your heart for the long run.',
      data: 'Prevents post-meal arterial stiffness and reduces systemic cardiovascular stress by 31%.',
    },
    {
      id: 9,
      icon: '🧬',
      title: 'Hormonal Balance (PCOS, Thyroid & Stress)',
      simple: 'Calm down irregular periods, facial hair, mood swings, thyroid sluggishness, and feeling stressed.',
      data: 'Flat insulin curves reduce excess androgen and cortisol surges by up to 35%, restoring endocrine calm.',
    },
    {
      id: 10,
      icon: '💎',
      title: 'Clear, Glowing Skin (Anti-Acne & Aging)',
      simple: 'Stop sudden breakouts, calm red skin, and protect your face from looking tired and wrinkled prematurely.',
      data: 'Halts the glycation of facial collagen fibers by 50%, preventing premature wrinkles and cystic flare-ups.',
    },
    {
      id: 11,
      icon: '⏳',
      title: 'Biological Age Reversal (Younger Cells)',
      simple: 'Turn back the internal clock on your heart, liver, and gut so your body performs 4 years younger.',
      data: 'Triggers cellular autophagy, reversing internal biological age by an average of 2.8 to 4.2 years in 90 days.',
    },
  ];

  const marketComparisons = [
    {
      struggle: 'Can you eat dinner with your family?',
      diet: '❌ NO. Eat boring plain food while family eats normal meals.',
      calorie: '⚠️ Annoying. Weigh every potato & bite on a scale.',
      injections: '❌ NO. Constant nausea makes looking at food repulsive.',
      tovelu: '✅ YES 100%. Eat the exact same home food as your family in sequence.',
    },
    {
      struggle: 'What happens at restaurants & parties?',
      diet: '❌ Social misery. Can’t touch bread, pasta, or drinks without guilt.',
      calorie: '❌ Embarrassing. Spend 10 minutes typing grams at the table.',
      injections: '❌ Stomach pain. One restaurant bite triggers cramps or nausea.',
      tovelu: '✅ Zero stress. Just eat veggies first, protein second, carbs last. Enjoy!',
    },
    {
      struggle: 'How does your body feel at 2:00 PM?',
      diet: '❌ Lightheaded & angry. Brain fog from zero carbs ruins work.',
      calorie: '❌ Exhausted. Calorie counting doesn’t stop the 2 PM crash.',
      injections: '❌ Drained. Chronic, all-day fatigue and muscle weakness.',
      tovelu: '✅ Sharp & energetic. No afternoon slump. Clean energy from 8 AM to 8 PM.',
    },
    {
      struggle: 'Do you think about food all day long?',
      diet: '❌ Constant obsession. Sleep hungry and crave bread 24/7.',
      calorie: '❌ Exhausting math. Calculating daily grams burns out your mind.',
      injections: '⚠️ Suppressed until shots wear off, then intense rebound hunger.',
      tovelu: '✅ Total peace of mind. Eat until fully satisfied. No scales, no math.',
    },
    {
      struggle: 'What happens when you stop?',
      diet: '❌ Gain everything back plus 5 extra pounds in 30 days.',
      calorie: '❌ You burn out. Nobody can weigh food forever without quitting.',
      injections: '❌ Instant rebound. Stop the shots and 100% of weight rushes back.',
      tovelu: '✅ Permanent habit. A natural eating rhythm you easily keep for life.',
    },
    {
      struggle: 'Uncomfortable side effects?',
      diet: '❌ Bad breath, hair thinning, and feeling constantly cold.',
      calorie: '❌ Daily anxiety and guilt every time you eat a cookie.',
      injections: '❌ Nausea, sulfur burps, vomiting, diarrhea, and facial hollowing.',
      tovelu: '✅ Zero side effects. Clean digestion, flat stomach, and deep sleep.',
    },
    {
      struggle: 'What does it actually cost you?',
      diet: '$150 – $300 / mo (Special foods & nutritionists)',
      calorie: '$79 – $150 / yr (For a stressful calculator)',
      injections: '$1,000 – $1,400 / mo ($12,000+ every year)',
      tovelu: '👑 Start for Free. Full protocol starts from $49.',
    },
  ];

  const faqs = [
    {
      q: 'Do I really NOT have to give up rice, roti, bread, pasta, or dessert?',
      a: 'Yes, 100%! You do not have to give up a single carb. You eat your normal rice, chapati/roti, potatoes, pasta, or sweets. The only change is timing: you eat them last in your meal, after your vegetables and protein. This simple change allows the fiber and protein to slow down gastric digestion, blunting your blood sugar spike by up to 38% so your body burns the carbs instead of turning them into belly fat.',
    },
    {
      q: 'Does this work with Indian, Asian, Mediterranean, Mexican, or Western food?',
      a: 'Yes. Tovelu was engineered to adapt to every culture and cuisine on earth. Whether your plate has Dal, Sabzi, and Rice (Indian), Chicken Stir-fry and Noodles (Asian), Pasta and Salad (Italian), or Steak and Potatoes (Western), our THAIS engine shows you the exact 1-2-3 eating sequence for your local food.',
    },
    {
      q: 'What if I am a Vegetarian, Vegan, Jain, or Eggetarian?',
      a: 'Tovelu works completely seamlessly for you. When you take the 2-minute survey, you simply select your dietary preference (Vegetarian, Vegan, Jain, Eggetarian, Halal, or Non-Veg). Your sequence uses plant-based proteins like paneer, tofu, lentils, dal, edamame, and Greek yogurt.',
    },
    {
      q: 'What if I eat at a restaurant, wedding, or party?',
      a: 'You don’t need to look weird or bring special food containers. When you’re eating out, just use our simple rule of thumb: start with any salad or veggie appetizer on the table, eat the protein dish next, and enjoy the bread, pasta, or rice at the end. You can also snap a photo of the restaurant menu in the app, or ask our AI Coach: “What order should I eat this?” for an instant 3-second answer.',
    },
    {
      q: 'What if I cheat and eat a slice of pizza or ice cream first? Did I ruin everything?',
      a: 'Absolutely not! Life happens. If you eat sweets or carbs first at a birthday party, you didn\'t fail. All you do is: 1. Drink a glass of water. 2. Take a relaxed 10-minute walk. 3. On your very next meal, simply go back to eating your veggies first. Your body resets quickly without guilt.',
    },
    {
      q: 'How does this solve 500 diseases while helping me lose weight?',
      a: 'Medical research shows that over 75% of chronic human diseases (like Type 2 Diabetes, Fatty Liver, high cholesterol, hypertension, gout, and chronic inflammation) are triggered by the exact same root mechanism: repeated post-meal glucose and insulin spikes. By sequencing your meals (Fiber → Protein → Carbs), you keep baseline insulin low. When insulin is low, your liver burns visceral fat and your 14 organ systems stay in clean, disease-free healing mode.',
    },
    {
      q: 'What if I have diagnosed conditions like Thyroid, Fatty Liver, PCOS, or Pre-Diabetes?',
      a: 'That is exactly what Tovelu’s THAIS engine is built for. Your 52-question clinical scan detects your specific conditions and automatically adjusts your meal sequence to protect your sluggish liver, soothe inflamed gut lining, or balance PCOS hormones naturally.',
    },
    {
      q: 'Will I lose muscle on Tovelu?',
      a: 'No—you will actually protect and tone your muscle. Unlike crash diets or weight-loss injections that cause you to lose up to 40% lean muscle mass, food sequencing locks your protein into your second digestive window, increasing your body\'s amino acid absorption by up to 29%. You burn pure body fat while preserving firm muscle tone.',
    },
    {
      q: 'Can I do this if I am pregnant, breastfeeding, or taking medication?',
      a: 'Yes, because Tovelu is not a restrictive diet, a fasting protocol, or a synthetic pill—it is simply the healthiest biological order to eat real, nourishing food. However, as with any lifestyle change, you can export your Tovelu clinical report with 1 tap to show your doctor.',
    },
    {
      q: 'Do I have to weigh my food on kitchen scales or count calories?',
      a: 'Never. We hate food scales and calorie math as much as you do. Tovelu uses simple, intuitive visual plate portions (Fiber first, Protein second, Carbs last). You eat until you are genuinely full and satisfied.',
    },
    {
      q: 'How much time does Tovelu take each day?',
      a: 'Less than 60 seconds a day! You open the app, look at your TODAY meal checklist (takes 5 seconds), eat your meal in order, and tap the checkmark when you’re done.',
    },
    {
      q: 'How do I log my meals?',
      a: 'However you prefer! You can: 1. Scan: Take a quick photo of your plate, raw ingredients, or restaurant menu. 2. Manual: Type your meal in 5 seconds. 3. Ask AI: Chat with your pocket AI coach anytime you want instant eating guidance.',
    },
    {
      q: 'How does the Free Access work?',
      a: 'You start 100% free. You take your 2-minute diagnostic audit, calculate your true internal biological age, see your top metabolic risks, and inspect your Day 1 food sequencing blueprint before making any decision.',
    },
    {
      q: 'How much does Tovelu cost after the free trial?',
      a: 'Our complete sovereign protocol starts from just $49. There are zero hidden fees, and you never have to pay thousands of dollars for nutritionists or dangerous weekly injections.',
    },
    {
      q: 'Can I pause or cancel anytime?',
      a: 'Yes! Under Article 15 of our Founder\'s Codex, we believe in complete commercial dignity. You can pause or cancel your membership with a single tap directly in the app. No customer support phone calls, no arguing with chat agents, and no tricky retention traps.',
    },
    {
      q: 'Do you sell my private health data to insurance or ad companies?',
      a: 'Absolutely never. Under Article 16 of our Codex, your health data is cryptographically encrypted. We will never sell, monetize, or share your medical information with advertisers, insurance companies, or third parties. Your data belongs to you alone.',
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200 font-sans pb-24 sm:pb-16`}>
      {/* 1. TOP RESPONSIVE NAVIGATION BAR */}
      <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-all ${
        darkMode ? 'bg-[#050709]/90 border-slate-800/80' : 'bg-white/90 border-slate-200/80'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HomeostasisLogo size={36} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>

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

            <button
              onClick={onGoToLogin}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={onTryForFree}
              className="py-2 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,157,0.35)]"
            >
              Try for Free →
            </button>
          </div>
        </div>
      </header>

      {/* RESPONSIVE CONTAINER */}
      <main className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-8 sm:space-y-12">

        {/* ========================================================================= */}
        {/* SECTION 1: THE MASTER HEADLINE & SUBHEADLINE (THE WHO PROOF HOOK) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 lg:p-12 rounded-3xl border ${cardCls} space-y-6 text-left relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#00FF9D] text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
            WORLD HEALTH ORGANIZATION DATA • CELLULAR HOMEOSTASIS OS
          </div>

          <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] sm:leading-[1.15] max-w-5xl ${textTitle}`}>
            You Weren’t Failing Your Diets—<span className="text-rose-500">Your Diets Were Failing Your Biology:</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-[#00FF9D]">
              Just 500 Metabolic Pathways Cause 75% of Global Illnesses, and They Are Secretly Blocking Your Goals.
            </span>
          </h1>

          <div className={`text-sm sm:text-base md:text-lg ${textSub} leading-relaxed space-y-3 max-w-4xl`}>
            <p>
              We know you just want to lose stubborn belly fat, stop the 2 PM energy crash, and feel light again. But clinical data from the WHO shows over 500 metabolic root conditions silently trigger post-meal insulin resistance, locking your body into fat storage regardless of calories.
            </p>
            <p className="font-semibold text-emerald-700 dark:text-[#00FF9D]">
              Tovelu’s 1-2-3 food sequencing blunts glucose spikes by up to 38% without starving—reversing those 500 hidden disease pathways while hitting your #1 body goal on the exact same daily plate.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 max-w-md space-y-3">
            <button
              onClick={onTryForFree}
              className="w-full py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,157,0.45)] flex items-center justify-center gap-2"
            >
              <span>⚡ Try for Free →</span>
            </button>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
              <span>✓ Takes 2 Minutes</span>
              <span>•</span>
              <span>✓ 100% Private & Encrypted</span>
              <span>•</span>
              <span>✓ No Card Needed</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE BIOLOGICAL AGE CALCULATOR (SHOWS REVERSIBLE AGE) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border-2 shadow-xl ${
          calculatedLag > 2
            ? 'border-amber-500/40 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5'
            : cardCls
        } space-y-6`}>
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono font-bold text-amber-500 tracking-widest block">
              INTERACTIVE PREVIEW CALCULATOR
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitle}`}>
              Calculate Your Cellular Age vs Calendar Age
            </h2>
            <p className={`text-xs sm:text-sm ${textSub}`}>
              Slide your age and tap your daily symptoms to see your estimated biological lag—and how fast food sequencing can reverse it:
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-5">
            {/* Age Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className={textSub}>Your Calendar Age:</span>
                <span className={`text-base sm:text-lg font-black font-mono ${textTitle}`}>{age} Years Old</span>
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
              <span className={`text-xs font-bold block ${textSub}`}>Select Daily Symptoms:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'bloat', label: 'Post-Meal Bloat', icon: '🎈' },
                  { id: 'crash', label: '2 PM Energy Crash', icon: '🥱' },
                  { id: 'sleep', label: 'Restless Sleep (3 AM)', icon: '🌙' },
                  { id: 'cravings', label: 'Evening Sugar Cravings', icon: '🍩' },
                ].map(s => {
                  const isActive = symptoms.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggleSymptom(s.id)}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1 ${
                        isActive
                          ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/50 shadow-sm'
                          : subBoxCls
                      }`}
                    >
                      <span className="text-lg">{s.icon}</span>
                      <span>{s.label}</span>
                      <span className="text-[10px] opacity-75 font-mono">{isActive ? '✓ Selected' : '+ Tap to add'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Result Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-slate-500 dark:text-slate-400 block">
                  Estimated Cellular Biological Age:
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 pt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-[#00FF9D] font-mono">
                    {estimatedBioAge} Years
                  </span>
                  {calculatedLag > 0 && (
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                      (+{calculatedLag.toFixed(1)}y Metabolic Lag)
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 block pt-1">
                  ⚡ <strong>100% Reversible:</strong> Food sequencing blunts glucose spikes to drop biological age within 90 days.
                </span>
              </div>

              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.35)] shrink-0"
              >
                Reverse My Bio-Age →
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: CHOOSE YOUR #1 GOAL (11 GOALS WITH CLINICAL DATA) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border ${cardCls} space-y-6`}>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              STEP 1 OF 3: YOUR PRIMARY TARGET
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              What is the #1 Thing You Want to Fix in Your Body Right Now?
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-3xl`}>
              Tap what matters to you today. We build your daily food order to hit your target from Day 1 while quietly shielding your 14 organs from 500 hidden diseases in the background:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {goals.map((g) => {
              const isSelected = selectedGoal === g.id;
              return (
                <div
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-[0.99] flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                      : `${subBoxCls} hover:border-slate-400 dark:hover:border-slate-700`
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl shrink-0">{g.icon}</span>
                        <h3 className={`text-xs sm:text-sm font-bold ${textTitle}`}>{g.title}</h3>
                      </div>
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-emerald-500 border-emerald-500 text-slate-950 text-xs font-black' : 'border-slate-400 dark:border-slate-700'
                      }`}>
                        {isSelected ? '✓' : ''}
                      </span>
                    </div>
                    <p className={`text-xs ${textSub} leading-relaxed`}>{g.simple}</p>
                  </div>
                  <div className="pt-3">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2.5 py-1 rounded-lg inline-block">
                      📊 {g.data}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={onTryForFree}
              className="py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20 inline-flex items-center gap-2"
            >
              <span>Select Your Goal & Try for Free →</span>
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: HOW IT WORKS (IN 3 SIMPLE STEPS - 100% AS LOCKED) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border ${cardCls} space-y-6`}>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              EFFORTLESS AUTOPILOT
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              Zero Complicated Diet Rules. Zero Guesswork.
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-3xl`}>
              Here is how simple it is to start, follow your daily routine, and eat with Tovelu:
            </p>
          </div>

          <div className="space-y-4">
            {/* STEP 1 */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${subBoxCls} space-y-3`}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-sm font-black font-mono">
                  1
                </span>
                <h3 className={`text-sm sm:text-base font-black ${textTitle}`}>
                  STEP 1: The 2-Step Launch (Ready in 2 Minutes)
                </h3>
              </div>
              <ul className={`text-xs sm:text-sm ${textSub} space-y-2 pl-4 sm:pl-11 leading-relaxed list-disc`}>
                <li><strong>Fill the Quick Survey:</strong> Answer simple questions about your digestion, energy crashes, and sleep. We calculate your true internal biological age and scan 500 hidden disease risks.</li>
                <li><strong>Choose & Start Day 1:</strong> Pick your launch date. The app instantly hands you your custom Day 1 food sequence using whatever food is already in your kitchen.</li>
              </ul>
            </div>

            {/* STEP 2 */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${subBoxCls} space-y-3`}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-sm font-black font-mono">
                  2
                </span>
                <h3 className={`text-sm sm:text-base font-black ${textTitle}`}>
                  STEP 2: Your Daily Routine (Effortless Daily Rhythm)
                </h3>
              </div>
              <ul className={`text-xs sm:text-sm ${textSub} space-y-2 pl-4 sm:pl-11 leading-relaxed list-disc`}>
                <li><strong>Custom Tasks for Your Schedule:</strong> Built around your real wake-up, lunch, and bed times.</li>
                <li><strong>Visual Portion Levels:</strong> No food scales or calorie counting. Simple visual plate portions (Fiber first, Protein second, Carbs last).</li>
                <li><strong>1-Tap Checkmarks:</strong> Simply tap the checkmark when you finish eating. Your body stays in fat-burning mode while you go on with your day.</li>
              </ul>
            </div>

            {/* STEP 3 */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${subBoxCls} space-y-4`}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-sm font-black font-mono">
                  3
                </span>
                <div>
                  <h3 className={`text-sm sm:text-base font-black ${textTitle}`}>
                    STEP 3: Log Your Food Your Way (Scan, Manual, or Ask AI)
                  </h3>
                  <p className={`text-xs sm:text-sm ${textSub}`}>
                    Log your meals however you like—we built it for real, busy human life:
                  </p>
                </div>
              </div>

              <div className="space-y-3 pl-2 sm:pl-11">
                {/* 1. SCAN / UPLOAD / MANUAL */}
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} space-y-2.5`}>
                  <div className="font-bold text-xs sm:text-sm text-emerald-600 dark:text-[#00FF9D] flex items-center gap-2">
                    <span>📸</span>
                    <span>1. SCAN / UPLOAD / MANUAL (Plate, Ingredients, or Restaurant Menu):</span>
                  </div>
                  <div className={`space-y-2 text-xs sm:text-sm ${textSub} pl-2 sm:pl-4 leading-relaxed`}>
                    <div className="flex items-start gap-2">
                      <span className="text-base shrink-0">🍲</span>
                      <p>
                        <strong className={textTitle}>By Dish:</strong> Snap a photo or type the dish name (e.g. Biryani, Pasta, Steak, Dal Tadka). The app automatically breaks it down into your 1-2-3 eating order.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base shrink-0">🥗</span>
                      <p>
                        <strong className={textTitle}>By Ingredients:</strong> Cooking at home? Snap your raw ingredients on the counter. Tovelu tells you what order to prepare and eat them.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base shrink-0">📋</span>
                      <p>
                        <strong className={textTitle}>By Menu:</strong> Sitting at a restaurant? Snap the physical food menu. The app instantly highlights the best dishes to order and what sequence to eat them in!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. ASK AI */}
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <div className="font-bold text-xs sm:text-sm text-amber-500 flex items-center gap-2">
                    <span>🤖</span>
                    <span>2. ASK AI (Your Personal Pocket Health Coach):</span>
                  </div>
                  <div className={`text-xs sm:text-sm ${textSub} pl-2 sm:pl-4 space-y-2`}>
                    <p className="italic">
                      Eating at a family dinner, wedding, or party? Just ask the AI like a friend:
                    </p>
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 font-mono text-xs sm:text-sm">
                      “I’m at a party with pizza and drinks, how should I eat to avoid fat storage?”
                    </div>
                    <p className="pt-1">
                      You get an instant, friendly, judgment-free answer in 3 seconds so you can enjoy your life without ruining your progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onTryForFree}
              className="py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20 inline-flex items-center gap-2"
            >
              <span>Try for Free in 3 Simple Steps →</span>
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: USER DAILY JOURNEY WITH INTERACTIVE 1-TAP EXAMPLE LOGGING */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border ${cardCls} space-y-6`}>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              EXPERIENCE THE APP IN REAL TIME
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              What Your Daily Life Looks Like With Tovelu
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-3xl`}>
              <strong>Try it yourself below!</strong> Tap the meals and tasks to experience how an example user logs their full day in under 30 seconds with 1-tap checkmarks:
            </p>
          </div>

          {/* Toast for Interactive logging demo */}
          {loggedToast && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
              {loggedToast}
            </div>
          )}

          {/* Desktop 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-2">
            {/* Left: 3 Daily Steps with Example User Journey */}
            <div className="space-y-3.5">
              <div className={`p-4 sm:p-5 rounded-2xl border ${subBoxCls} space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-emerald-600 dark:text-[#00FF9D]">
                    <span className="text-xl">🌅</span>
                    <span>1. Morning Wake-Up (Breakfast In Sequence)</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-[#00FF9D]">Takes 5 sec</span>
                </div>
                <p className={`text-xs sm:text-sm ${textSub} pl-7 leading-relaxed`}>
                  You wake up and glance at your TODAY tab. It says: <em>Eggs & Avocado first, Toast second</em>. You eat, tap the checkmark, and enjoy crystal-clear focus all morning.
                </p>
              </div>

              <div className={`p-4 sm:p-5 rounded-2xl border ${subBoxCls} space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-amber-500">
                    <span className="text-xl">☀️</span>
                    <span>2. Lunch & Dinner Sequence (No Afternoon Slump)</span>
                  </div>
                  <span className="text-[10px] font-mono bg-amber-500/10 px-2 py-0.5 rounded text-amber-500">1-Tap Log</span>
                </div>
                <p className={`text-xs sm:text-sm ${textSub} pl-7 leading-relaxed`}>
                  At 1:15 PM, you eat your normal home food or office lunch in sequence: <em>Salad first, Chicken/Dal second, Rice last</em>. Tap checkmark. The 2:00 PM food coma is 100% eliminated!
                </p>
              </div>

              <div className={`p-4 sm:p-5 rounded-2xl border ${subBoxCls} space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-sky-500">
                    <span className="text-xl">📊</span>
                    <span>3. Weekly Healing & Doctor Reports (REPORT Tab)</span>
                  </div>
                  <span className="text-[10px] font-mono bg-sky-500/10 px-2 py-0.5 rounded text-sky-500">1-Tap Export</span>
                </div>
                <p className={`text-xs sm:text-sm ${textSub} pl-7 leading-relaxed`}>
                  Watch your internal Biological Age drop week after week. See all 14 organ systems stay in healthy green homeostasis. Export a 1-tap encrypted QR report for your doctor anytime.
                </p>
              </div>
            </div>

            {/* Right: INTERACTIVE 1-TAP EXAMPLE USER CARD MOCKUP */}
            <div className="flex justify-center">
              <div className={`w-full max-w-[360px] rounded-3xl p-5 border-2 ${
                darkMode ? 'bg-[#080A0E] border-slate-700 shadow-2xl' : 'bg-white border-slate-300 shadow-xl'
              } space-y-3.5 text-xs font-sans`}>
                <div className="flex items-center justify-between border-b pb-2.5 border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-xs tracking-tight">EXAMPLE USER • AJAY (DAY 14)</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-[#00FF9D] font-bold">
                    {progressPercent}% Complete
                  </span>
                </div>

                {/* Bio Age Card */}
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Biological Age</span>
                    <span className="text-xl font-black text-emerald-600 dark:text-[#00FF9D]">31.2 Years</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">
                    ⚡ -2.8y Reversed
                  </span>
                </div>

                {/* Interactive Meals & Tasks: VISITOR CAN TAP TO LOG! */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Tap to Test 1-Tap Logging:</span>
                    <span className="text-emerald-500">Tap Any Item 👇</span>
                  </div>

                  {/* Breakfast */}
                  <div
                    onClick={() => toggleTask('breakfast')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between active:scale-95 ${
                      interactiveTasks.breakfast
                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 dark:text-emerald-200'
                        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-bold block text-xs">Breakfast • 8:30 AM</span>
                      <span className="text-[11px] opacity-75">Eggs & Avocado first → Toast last</span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      interactiveTasks.breakfast ? 'bg-emerald-500 text-slate-950' : 'border border-slate-400'
                    }`}>
                      {interactiveTasks.breakfast ? '✓' : ''}
                    </span>
                  </div>

                  {/* Lunch */}
                  <div
                    onClick={() => toggleTask('lunch')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between active:scale-95 ${
                      interactiveTasks.lunch
                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 dark:text-emerald-200'
                        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-bold block text-xs">Lunch • 1:15 PM</span>
                      <span className="text-[11px] opacity-75">Cucumber salad → Chicken/Dal → Rice</span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      interactiveTasks.lunch ? 'bg-emerald-500 text-slate-950' : 'border border-slate-400'
                    }`}>
                      {interactiveTasks.lunch ? '✓' : ''}
                    </span>
                  </div>

                  {/* Dinner */}
                  <div
                    onClick={() => toggleTask('dinner')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between active:scale-95 ${
                      interactiveTasks.dinner
                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 dark:text-emerald-200'
                        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-bold block text-xs">Dinner • 7:45 PM</span>
                      <span className="text-[11px] opacity-75">Steamed Greens → Salmon/Paneer → Sweet</span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      interactiveTasks.dinner ? 'bg-emerald-500 text-slate-950' : 'border border-slate-400'
                    }`}>
                      {interactiveTasks.dinner ? '✓' : ''}
                    </span>
                  </div>

                  {/* 10-Min Walk */}
                  <div
                    onClick={() => toggleTask('walk')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between active:scale-95 ${
                      interactiveTasks.walk
                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 dark:text-emerald-200'
                        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-bold block text-xs">Post-Meal Habit • 10-Min Walk</span>
                      <span className="text-[11px] opacity-75">Smooth muscle glucose absorption</span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      interactiveTasks.walk ? 'bg-emerald-500 text-slate-950' : 'border border-slate-400'
                    }`}>
                      {interactiveTasks.walk ? '✓' : ''}
                    </span>
                  </div>
                </div>

                {/* Bottom mini nav */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around text-[10px] font-bold text-slate-400">
                  <span className="text-emerald-500">TODAY</span>
                  <span>WEEK</span>
                  <span>REPORT</span>
                  <span>HEALTH</span>
                  <span>YOU</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY CHOOSE TOVELU (SAVED SECTION 5 FULL COMPARISON TABLE) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border ${cardCls} space-y-6`}>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-rose-500 tracking-widest block">
              THE HONEST TRUTH
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              Why Has Every Other Diet, App, and Pill Failed You?
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-3xl`}>
              Most health solutions force you to suffer, starve, or spend thousands of dollars on temporary fixes. Here is the reality of what people face every day:
            </p>
          </div>

          {/* FULL COMPARISON TABLE ON DESKTOP */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className={darkMode ? 'bg-slate-900/90 text-slate-300' : 'bg-slate-100 text-slate-800'}>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 w-1/4">Real Daily Life Struggle</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-rose-500">❌ Starvation / Keto Diets</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-amber-500">❌ Calorie Counting Apps</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-rose-500">❌ Injections (Ozempic / Wegovy)</th>
                  <th className="p-4 font-black border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-[#00FF9D] bg-emerald-500/10">
                    👑 Tovelu (Powered by THAIS)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {marketComparisons.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? (darkMode ? 'bg-[#0E1318]' : 'bg-white') : (darkMode ? 'bg-slate-900/40' : 'bg-slate-50/50')}>
                    <td className={`p-4 font-bold ${textTitle}`}>{row.struggle}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.diet}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.calorie}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.injections}</td>
                    <td className="p-4 font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/5">{row.tovelu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE STACKED COMPARISON CARDS */}
          <div className="grid grid-cols-1 gap-3.5 md:hidden">
            {marketComparisons.map((c, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border ${subBoxCls} space-y-2`}>
                <h3 className={`text-xs font-black ${textTitle}`}>{c.struggle}</h3>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300">
                    <strong className="block text-[10px] uppercase text-rose-600 dark:text-rose-400">Other Diets & Injections:</strong>
                    {c.diet}
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-semibold">
                    <strong className="block text-[10px] uppercase text-emerald-700 dark:text-[#00FF9D]">👑 Tovelu (Powered by THAIS):</strong>
                    {c.tovelu}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Proof Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-text-secondary space-y-2.5 leading-relaxed">
            <strong className="text-emerald-700 dark:text-[#00FF9D] block font-bold text-sm sm:text-base">
              💡 How is this possible? (The Science Behind THAIS)
            </strong>
            <p>
              Inside your stomach, food doesn’t digest all at once—it digests in <strong>layers</strong>. When you eat carbs first, they dissolve into sugar in 8 minutes, causing a violent insulin flood that stores everything as belly fat.
            </p>
            <p>
              When you eat in our 1-2-3 sequence (Fiber first → Protein second → Carbs last), the fiber mesh and protein slow down carb digestion by up to <strong>38%</strong>. Blood sugar stays flat, fat burning stays on, and your 14 organs stay protected.
            </p>
            <p className="font-semibold text-text-primary">
              This is why we built THAIS: To show you the exact sequence for any meal, anywhere, so you enjoy your life with your family while your body heals.
            </p>
          </div>

          <div className="pt-1">
            <button
              onClick={onTryForFree}
              className="py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20 inline-flex items-center gap-2"
            >
              <span>Try for Free — Starts from $49 →</span>
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {/* ========================================================================= */}
        <section className={`p-6 sm:p-10 rounded-3xl border ${cardCls} space-y-6`}>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              100% HONEST ANSWERS
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xs sm:text-sm ${textSub} max-w-3xl`}>
              Everything you need to know before taking your free audit:
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${subBoxCls}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className={`text-xs sm:text-sm md:text-base font-bold ${textTitle}`}>
                      {faq.q}
                    </span>
                    <span className={`text-xs font-mono ${textSub} shrink-0`}>
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
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

          {/* Final Action Box */}
          <div className={`p-6 sm:p-8 rounded-3xl border text-center space-y-3.5 mt-6 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-black ${textTitle}`}>
              Ready to Inspect Your Biological Health?
            </h3>
            <p className={`text-xs sm:text-sm ${textSub} max-w-md mx-auto`}>
              Take the 2-minute diagnostic audit now. See your biological age and unlock your personalized food order today.
            </p>
            <button
              onClick={onTryForFree}
              className="py-4 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.35)] inline-flex items-center gap-2"
            >
              <span>Start Your Free Clinical Audit Now →</span>
            </button>
            <div className="text-[11px] font-mono text-slate-400">
              Takes 2 Minutes • No Credit Card • Starts from $49
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`py-8 text-center text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <p>© {new Date().getFullYear()} Tovelu Sovereign Health OS • Cellular Homeostasis & Longevity</p>
        </footer>

      </main>

      {/* ========================================================================= */}
      {/* FLOATING STICKY THUMB CTA DOCKED AT BOTTOM ON MOBILE (THE 10X CONVERTER) */}
      {/* ========================================================================= */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/85 dark:bg-[#050709]/85 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 animate-slideUp">
          <div className="max-w-md mx-auto flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-[#00FF9D] block uppercase">
                ⚡ 2-Minute Audit
              </span>
              <span className="text-xs font-bold truncate block text-slate-800 dark:text-slate-200">
                Unlock Day 1 Food Sequence
              </span>
            </div>
            <button
              onClick={onTryForFree}
              className="py-2.5 px-5 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,255,157,0.4)] shrink-0"
            >
              Try for Free →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
