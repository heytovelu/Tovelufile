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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedGoal, setSelectedGoal] = useState<number | null>(1);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Scroll listener to show sticky mobile CTA after user scrolls past hero
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

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100 shadow-lg'
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
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200 font-sans pb-28`}>
      {/* 1. TOP NATIVE APP NAVIGATION BAR */}
      <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-all ${
        darkMode ? 'bg-[#050709]/90 border-slate-800/80' : 'bg-white/90 border-slate-200/80'
      }`}>
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HomeostasisLogo size={32} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>

          <div className="flex items-center gap-2">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            )}

            <button
              onClick={onGoToLogin}
              className={`py-1.5 px-3.5 rounded-xl text-xs font-bold transition-all border ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={onTryForFree}
              className="py-1.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,255,157,0.35)]"
            >
              Try for Free →
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE-FIRST APP CONTAINER */}
      <main className="max-w-2xl mx-auto px-3.5 sm:px-6 pt-5 space-y-6">

        {/* ========================================================================= */}
        {/* SECTION 1: THE MASTER HEADLINE & SUBHEADLINE (THE WHO PROOF HOOK) */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-5 text-left relative overflow-hidden`}>
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#00FF9D] text-[10px] sm:text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
            WORLD HEALTH ORGANIZATION DATA • CELLULAR HOMEOSTASIS OS
          </div>

          <h1 className={`text-2xl sm:text-4xl font-black tracking-tight leading-[1.18] sm:leading-[1.18] ${textTitle}`}>
            You Weren’t Failing Your Diets—<span className="text-rose-500">Your Diets Were Failing Your Biology:</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-[#00FF9D]">
              Just 500 Metabolic Pathways Cause 75% of Global Illnesses, and They Are Secretly Blocking Your Goals.
            </span>
          </h1>

          <div className={`text-xs sm:text-sm ${textSub} leading-relaxed space-y-2.5`}>
            <p>
              We know you just want to lose stubborn belly fat, stop the 2 PM energy crash, and feel light again. But clinical data from the WHO shows over 500 metabolic root conditions silently trigger post-meal insulin resistance, locking your body into fat storage regardless of calories.
            </p>
            <p className="font-semibold text-emerald-700 dark:text-[#00FF9D]">
              Tovelu’s 1-2-3 food sequencing blunts glucose spikes by up to 38% without starving—reversing those 500 hidden disease pathways while hitting your #1 body goal on the exact same daily plate.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 space-y-2.5">
            <button
              onClick={onTryForFree}
              className="w-full py-4 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
            >
              <span>⚡ Try for Free →</span>
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs font-mono text-slate-400">
              <span>✓ Takes 2 Minutes</span>
              <span>•</span>
              <span>✓ 100% Private & Encrypted</span>
              <span>•</span>
              <span>✓ No Card Needed</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: CHOOSE YOUR #1 GOAL (11 GOALS WITH CLINICAL DATA) */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-4`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              STEP 1 OF 3: YOUR PRIMARY TARGET
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              What is the #1 Thing You Want to Fix in Your Body Right Now?
            </h2>
            <p className={`text-xs ${textSub}`}>
              Tap what matters to you today. We build your daily food order to hit your target from Day 1 while quietly shielding your 14 organs from 500 hidden diseases in the background:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {goals.map((g) => {
              const isSelected = selectedGoal === g.id;
              return (
                <div
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer active:scale-[0.99] flex items-start gap-3 ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                      : `${subBoxCls} hover:border-slate-400 dark:hover:border-slate-700`
                  }`}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{g.icon}</span>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`text-xs sm:text-sm font-bold ${textTitle}`}>{g.title}</h3>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-emerald-500 border-emerald-500 text-slate-950 text-[10px] font-black' : 'border-slate-400 dark:border-slate-700'
                      }`}>
                        {isSelected ? '✓' : ''}
                      </span>
                    </div>
                    <p className={`text-[11px] sm:text-xs ${textSub} leading-relaxed`}>{g.simple}</p>
                    <div className="pt-0.5">
                      <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                        📊 {g.data}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onTryForFree}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20 mt-2"
          >
            <span>Select Your Goal & Try for Free →</span>
          </button>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: HOW IT WORKS (IN 3 SIMPLE STEPS) */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-5`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              EFFORTLESS AUTOPILOT
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              Zero Complicated Diet Rules. Zero Guesswork.
            </h2>
            <p className={`text-xs ${textSub}`}>
              Here is how simple it is to start, follow your daily routine, and eat with Tovelu:
            </p>
          </div>

          <div className="space-y-3">
            {/* Step 1 */}
            <div className={`p-4 rounded-2xl border ${subBoxCls} space-y-2`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-xs font-black font-mono">
                  1
                </span>
                <h3 className={`text-xs sm:text-sm font-black ${textTitle}`}>
                  The 2-Step Launch (Ready in 2 Minutes)
                </h3>
              </div>
              <ul className={`text-xs ${textSub} space-y-1.5 pl-8 leading-relaxed list-disc`}>
                <li><strong>Fill the Quick Survey:</strong> Answer simple questions about your digestion, energy crashes, and sleep. We calculate your true internal biological age and scan 500 hidden disease risks.</li>
                <li><strong>Choose & Start Day 1:</strong> Pick your launch date. The app instantly hands you your custom Day 1 food sequence using whatever food is already in your kitchen.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className={`p-4 rounded-2xl border ${subBoxCls} space-y-2`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-xs font-black font-mono">
                  2
                </span>
                <h3 className={`text-xs sm:text-sm font-black ${textTitle}`}>
                  Your Daily Routine (Effortless Daily Rhythm)
                </h3>
              </div>
              <ul className={`text-xs ${textSub} space-y-1.5 pl-8 leading-relaxed list-disc`}>
                <li><strong>Custom Tasks for Your Schedule:</strong> Built around your real wake-up, lunch, and bed times.</li>
                <li><strong>Visual Portion Levels:</strong> No food scales or calorie counting. Simple visual plate portions (Fiber first, Protein second, Carbs last).</li>
                <li><strong>1-Tap Checkmarks:</strong> Simply tap the checkmark when you finish eating. Your body stays in fat-burning mode while you go on with your day.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className={`p-4 rounded-2xl border ${subBoxCls} space-y-2.5`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] flex items-center justify-center text-xs font-black font-mono">
                  3
                </span>
                <h3 className={`text-xs sm:text-sm font-black ${textTitle}`}>
                  Log Your Food Your Way (Scan | Manual | Ask AI)
                </h3>
              </div>
              
              <div className="space-y-2 pl-8 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60 space-y-1">
                  <span className="font-bold text-emerald-600 dark:text-[#00FF9D] block">1. Scan, Upload, or Manual</span>
                  <p className={`${textSub} text-[11px]`}>
                    • <strong>By Dish:</strong> Snap a photo or type any finished meal (e.g. Biryani, Pasta, Steak, Dal). The app automatically breaks it down into your 1-2-3 order. <br />
                    • <strong>By Ingredients:</strong> Cooking at home? Snap your raw ingredients on the counter. Tovelu tells you what order to prepare and eat them. <br />
                    • <strong>By Menu:</strong> Sitting at a restaurant? Snap the physical food menu. The app instantly highlights what sequence to eat them in!
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60 space-y-1">
                  <span className="font-bold text-amber-500 block">2. Ask AI Coach</span>
                  <p className={`${textSub} text-[11px]`}>
                    Eating at a family dinner, wedding, or party? Just ask the AI like a friend: <em>“I’m at a party with pizza and drinks, how should I eat to avoid fat storage?”</em> You get an instant, judgment-free answer in 3 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onTryForFree}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20"
          >
            <span>Try for Free in 3 Simple Steps →</span>
          </button>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: USER DAILY JOURNEY WITH APP PREVIEW */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-5`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              INSIDE THE TOVELU APP
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              What Your Daily Life Looks Like With Tovelu
            </h2>
            <p className={`text-xs ${textSub}`}>
              Here is the simple, stress-free routine you follow inside the Tovelu app:
            </p>
          </div>

          {/* 3 Touchpoints */}
          <div className="space-y-2.5 text-xs">
            <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
              <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-[#00FF9D]">
                <span>🌅</span>
                <span>1. Morning Wake-Up (TODAY Tab)</span>
              </div>
              <p className={`text-[11px] ${textSub} pl-6 leading-relaxed`}>
                Open the app. See your personalized breakfast sequence. Check it off when you finish. Enjoy clear, sharp focus with zero mid-morning cravings.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
              <div className="flex items-center gap-2 font-bold text-amber-500">
                <span>☀️</span>
                <span>2. Lunch & Dinner Sequence (TODAY Tab)</span>
              </div>
              <p className={`text-[11px] ${textSub} pl-6 leading-relaxed`}>
                Eat your normal home-cooked meals or restaurant food in the 1-2-3 sequence. The dreaded 2:00 PM afternoon food coma completely disappears.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-1`}>
              <div className="flex items-center gap-2 font-bold text-sky-500">
                <span>📊</span>
                <span>3. Weekly Healing & Doctor Reports (REPORT & HEALTH Tabs)</span>
              </div>
              <p className={`text-[11px] ${textSub} pl-6 leading-relaxed`}>
                Watch your internal Biological Age drop week after week. See all 14 organ systems stay in healthy green homeostasis. Export a 1-tap QR report for your doctor anytime.
              </p>
            </div>
          </div>

          {/* Luxury Native Mobile Card Preview */}
          <div className="pt-2 flex justify-center">
            <div className={`w-full max-w-[340px] rounded-3xl p-4 border-2 ${
              darkMode ? 'bg-[#080A0E] border-slate-700 shadow-2xl' : 'bg-white border-slate-300 shadow-xl'
            } space-y-3 text-xs font-sans`}>
              <div className="flex items-center justify-between border-b pb-2 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-[11px]">TODAY MEAL ENGINE</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-[#00FF9D] font-bold">DAY 14 OF 90</span>
              </div>

              {/* Bio Age Card */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Biological Age</span>
                  <span className="text-lg font-black text-emerald-600 dark:text-[#00FF9D]">31.2 Years</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                  ⚡ -2.8y Reversed
                </span>
              </div>

              {/* Sequence Checklist */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Today’s Sequence</span>

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
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY CHOOSE TOVELU (MARKET REAL STRUGGLES VS. US) */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-5`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold text-rose-500 tracking-widest block">
              THE HONEST TRUTH
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              Why Has Every Other Diet, App, and Pill Failed You?
            </h2>
            <p className={`text-xs ${textSub}`}>
              Most health solutions force you to suffer, starve, or spend thousands of dollars on temporary fixes. Here is the reality of what people face every day:
            </p>
          </div>

          {/* Vertical Stacked Cards on Mobile (No Horizontal Scrolling) */}
          <div className="space-y-3">
            {marketComparisons.map((c, idx) => (
              <div key={idx} className={`p-3.5 rounded-2xl border ${subBoxCls} space-y-2`}>
                <h3 className={`text-xs font-black ${textTitle}`}>{c.struggle}</h3>
                
                <div className="grid grid-cols-1 gap-1.5 text-[11px]">
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
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-text-secondary space-y-2 leading-relaxed">
            <strong className="text-emerald-700 dark:text-[#00FF9D] block font-bold text-sm">
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

          <button
            onClick={onTryForFree}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#00FF9D]/20"
          >
            <span>Try for Free — Starts from $49 →</span>
          </button>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {/* ========================================================================= */}
        <section className={`p-5 sm:p-7 rounded-3xl border ${cardCls} space-y-5`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-[#00FF9D] tracking-widest block">
              100% HONEST ANSWERS
            </span>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xs ${textSub}`}>
              Everything you need to know before taking your free audit:
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${subBoxCls}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3"
                  >
                    <span className={`text-xs sm:text-sm font-bold ${textTitle}`}>
                      {faq.q}
                    </span>
                    <span className={`text-xs font-mono ${textSub} shrink-0`}>
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={`px-3.5 sm:px-4 pb-3.5 pt-1 border-t ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
                    }`}>
                      <p className={`text-xs ${textSub} leading-relaxed`}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Action Box */}
          <div className={`p-5 sm:p-6 rounded-2xl border text-center space-y-3 mt-4 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <h3 className={`text-base sm:text-lg font-black ${textTitle}`}>
              Ready to Inspect Your Biological Health?
            </h3>
            <p className={`text-xs ${textSub} max-w-sm mx-auto`}>
              Take the 2-minute diagnostic audit now. See your biological age and unlock your personalized food order today.
            </p>
            <button
              onClick={onTryForFree}
              className="py-3.5 px-8 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-[0.98] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.35)] inline-flex items-center gap-2"
            >
              <span>Start Your Free Clinical Audit Now →</span>
            </button>
            <div className="text-[10px] font-mono text-slate-400">
              Takes 2 Minutes • No Credit Card • Starts from $49
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`py-6 text-center text-[10px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <p>© {new Date().getFullYear()} Tovelu Sovereign Health OS • Cellular Homeostasis & Longevity</p>
        </footer>

      </main>

      {/* ========================================================================= */}
      {/* FLOATING STICKY THUMB CTA DOCKED AT BOTTOM ON MOBILE (THE 10X CONVERTER) */}
      {/* ========================================================================= */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/80 dark:bg-[#050709]/85 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 animate-slideUp">
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
              className="py-3 px-5 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,255,157,0.4)] shrink-0"
            >
              Try for Free →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
