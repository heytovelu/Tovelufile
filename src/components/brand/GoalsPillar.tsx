import React from 'react';

interface GoalsPillarProps {
  onTryForFree: () => void;
  darkMode?: boolean;
}

export const GoalsPillar: React.FC<GoalsPillarProps> = ({ onTryForFree, darkMode = false }) => {
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const subBoxCls = darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';

  const scrollToGoal = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const masterGoalsTable = [
    {
      num: '01',
      id: 'goal-belly-fat',
      icon: '⚖️',
      title: 'Lose Belly Fat & Weight',
      affected: '2.8 Billion',
      failRate: '88% quit in 21 days',
      tovelu: '-44% Fat-Storing Insulin',
    },
    {
      num: '02',
      id: 'goal-energy',
      icon: '⚡',
      title: 'All-Day High Energy',
      affected: '1.9 Billion',
      failRate: '82% rebound on caffeine',
      tovelu: '-38% Post-Meal Spikes',
    },
    {
      num: '03',
      id: 'goal-gut-debloat',
      icon: '🌿',
      title: 'Heal Gut & Stop Bloating',
      affected: '1.9 Billion',
      failRate: '91% fail FODMAPs',
      tovelu: 'Zero Bloat in 72 Hours',
    },
    {
      num: '04',
      id: 'goal-sleep',
      icon: '🌙',
      title: 'Deep Restful Sleep',
      affected: '2.2 Billion',
      failRate: '85% fail sleep meds',
      tovelu: '-60% Midnight Cortisol',
    },
    {
      num: '05',
      id: 'goal-focus',
      icon: '🧠',
      title: 'Clear Brain Fog & Focus',
      affected: '1.8 Billion',
      failRate: '79% fail nootropics',
      tovelu: '+46% Steady Brain Fuel',
    },
    {
      num: '06',
      id: 'goal-muscle-tone',
      icon: '💪',
      title: 'Build Lean Muscle & Tone',
      affected: '1.6 Billion',
      failRate: '89% lose pure muscle',
      tovelu: '+29% Amino Acid Uptake',
    },
    {
      num: '07',
      id: 'goal-blood-sugar',
      icon: '🩸',
      title: 'Reset Blood Sugar',
      affected: '1.2 Billion',
      failRate: '78% worsen over time',
      tovelu: '-42% Peak Glucose',
    },
    {
      num: '08',
      id: 'goal-heart',
      icon: '❤️',
      title: 'Protect Heart & Arteries',
      affected: '1.4 Billion',
      failRate: '84% fail low-fat diets',
      tovelu: '-31% Arterial Stiffness',
    },
    {
      num: '09',
      id: 'goal-hormones',
      icon: '🌸',
      title: 'Balance Hormones & PCOS',
      affected: '500 Million',
      failRate: '84% symptom relapse',
      tovelu: '-35% Ovarian Androgens',
    },
    {
      num: '10',
      id: 'goal-skin',
      icon: '✨',
      title: 'Clear Glowing Skin',
      affected: '650 Million',
      failRate: '81% fail topical creams',
      tovelu: '-50% Collagen Glycation',
    },
    {
      num: '11',
      id: 'goal-bio-age',
      icon: '⏳',
      title: 'Reverse Biological Age',
      affected: '4.2 Billion',
      failRate: '93% fail pill protocols',
      tovelu: '-3.5y Biological Age',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      
      {/* ========================================================================= */}
      {/* 1. BIG INTRODUCTORY HERO */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto text-center space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
          CLINICAL METABOLIC BIOCHEMISTRY • THE 11 HUMAN TARGETS
        </div>

        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${textTitle}`}>
          11 Goals on the surface. <br />
          <span className="text-emerald-600 dark:text-[#00FF9D]">
            Just 1 metabolic master switch underneath.
          </span>
        </h1>

        <p className={`text-base sm:text-xl ${textSub} max-w-3xl mx-auto leading-relaxed`}>
          Whether you want to melt stubborn belly fat, stop the 2 PM energy collapse, heal your painful gut bloat, or reverse your biological age—modern medicine treated these as 11 separate problems requiring 11 different pills and restrictive diets. <strong>They lied to you.</strong> Over 75% of chronic human physical breakdowns share the exact same upstream trigger: post-meal glucose spikes and chronic insulin flooding.
        </p>

        {/* ========================================================================= */}
        {/* MASTER 11 GOALS TABLE: # | YOUR GOAL | PEOPLE AFFECTED | DIET FAILURE RATE | TOVELU OUTCOME */}
        {/* ========================================================================= */}
        <div className="pt-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              CLICK ANY GOAL TO JUMP DIRECTLY TO ITS DEEP DIVE:
            </span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
              11 TARGETS • 1 MASTER METABOLIC SOLUTION
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className={darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}>
                  <th className="py-4 px-4 font-mono font-bold border-b border-slate-200 dark:border-slate-800 w-14 text-center">#</th>
                  <th className="py-4 px-5 font-bold border-b border-slate-200 dark:border-slate-800">YOUR GOAL</th>
                  <th className="py-4 px-5 font-bold border-b border-slate-200 dark:border-slate-800 text-rose-500">PEOPLE AFFECTED</th>
                  <th className="py-4 px-5 font-bold border-b border-slate-200 dark:border-slate-800 text-amber-500">DIET FAILURE RATE</th>
                  <th className="py-4 px-5 font-black border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-[#00FF9D] bg-emerald-500/10">
                    TOVELU OUTCOME
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {masterGoalsTable.map((item, idx) => (
                  <tr
                    key={item.id}
                    onClick={() => scrollToGoal(item.id)}
                    className={`transition-all cursor-pointer group ${
                      idx % 2 === 0
                        ? (darkMode ? 'bg-[#080B0E] hover:bg-slate-900' : 'bg-white hover:bg-emerald-50/50')
                        : (darkMode ? 'bg-slate-900/40 hover:bg-slate-900' : 'bg-slate-50/70 hover:bg-emerald-50/50')
                    }`}
                  >
                    <td className="py-4 px-4 font-mono font-bold text-slate-400 text-center text-xs">
                      {item.num}
                    </td>
                    <td className="py-4 px-5 font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00FF9D] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base sm:text-lg shrink-0">{item.icon}</span>
                        <span className="underline decoration-transparent group-hover:decoration-emerald-500 underline-offset-4 transition-all">
                          {item.title}
                        </span>
                        <span className="text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-mono font-semibold text-rose-500 whitespace-nowrap">
                      {item.affected}
                    </td>
                    <td className="py-4 px-5 font-mono text-amber-600 dark:text-amber-400 whitespace-nowrap text-xs">
                      {item.failRate}
                    </td>
                    <td className="py-4 px-5 font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/5 whitespace-nowrap">
                      {item.tovelu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 11 CLINICAL TARGET DEEP DIVES */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ===================================================================== */}
        {/* GOAL 1: RAPID BELLY FAT LOSS */}
        {/* ===================================================================== */}
        <article id="goal-belly-fat" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 01 OF 11 • VISCERAL ADIPOSE TISSUE
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              ⚖️ Lose Belly Fat & Weight
            </h2>
          </div>

          {/* PART 1: The 4-Paragraph Human Story & Solution */}
          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You’re getting dressed for a dinner or an evening out with friends. You put on your favorite pair of jeans or that fitted shirt you used to love. You pull up the zipper—and it stops. You suck your stomach in so hard your ribs ache, struggling desperately to fasten the button. When you sit down in the car or at the dinner table, the waistband cuts brutally into your lower belly, creating that suffocating roll that spills over your belt. All night long, you sit stiffly, pulling your jacket tight and holding a drink in front of your stomach so nobody notices. You slip into the restroom, look in the harsh fluorescent mirror, and that quiet, sickening thought whispers: <em>“I skipped breakfast, I ran until my knees burned, I gave up pasta... why does my belly look like I’m gaining weight instead of losing it?”</em>
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 8 weeks from today. You slip on that exact same pair of jeans. The zipper slides up smoothly with zero friction. You fasten the button effortlessly. When you sit down in a chair, there is no pinching, no suffocating waistband, and no roll to hide. Your stomach is visibly flat, firm, and calm. You walk into the room standing tall, wearing a fitted shirt or dress with zero hesitation. When someone hugs you, you don’t pull back in insecurity. You catch your reflection in a store window and you actually pause, smile, and think: <em>“I look incredible.”</em>
            </p>
            <p>
              You didn’t achieve this by starving on plain boiled chicken or giving up carbs. You ate your normal home-cooked meals, your favorite rice, pasta, and potatoes—you simply ate the vegetables and protein first, and the carbs last. By coating your gut with natural plant fiber, insulin remains flat. When insulin stays low, your liver is chemically forced to unlock and incinerate visceral belly fat 24 hours a day, even while you sleep.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Your stomach wasn’t holding onto fat because you lacked discipline; it was holding onto fat because your hormones were trapped in storage mode. Unlock the hormone, and the fat has nowhere to hide.”
            </p>
          </div>

          {/* PART 2: Clinical Data & Science Proof */}
          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 2.8 Billion Adults Worldwide</p>
                <p className="text-xs text-slate-500 mt-0.5">Struggle with persistent visceral abdominal fat accumulation.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 88% Quit Within 21 Days</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Starvation Triggers Evolutionary Panic</p>
                <p className="text-xs text-slate-500 mt-0.5">Slashing calories spikes cortisol by 45% and burns lean muscle while locking belly fat for survival.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Visceral adipocytes express an exceptionally high density of insulin receptors. As long as circulating postprandial insulin is elevated, Lipoprotein Lipase (LPL) remains active, locking fatty acids inside adipose tissue. Calorie counting is useless if insulin remains elevated 16 hours a day.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Lowers post-meal fat-storing insulin by up to 44% • +31% Fat Oxidation
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Belly Fat Loss →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 2: ALL-DAY CONSTANT ENERGY */}
        {/* ===================================================================== */}
        <article id="goal-energy" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 02 OF 11 • POSTPRANDIAL GLUCOSE STABILITY
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              ⚡ All-Day High Energy
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              It’s 2:15 PM on a Tuesday. You’re at your desk or in a crucial work meeting. Suddenly, an overwhelming wave of exhaustion crashes over your entire body. Your eyelids feel like lead weights. Your head feels fuzzy and slow. A colleague asks you a question and you literally blank out, stammering through an answer while trying to hide a massive yawn. You sneak to the kitchen to down your third cup of bitter coffee and grab a sugary biscuit just to keep your eyes open. You feel embarrassed, lazy, and terrified that your boss, your spouse, or your kids think you’re weak, unmotivated, and always tired.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 2:15 PM next week. You just finished lunch. While everyone else in the office is yawning, slumping in their chairs, and clutching energy drinks, your mind is razor-sharp. You blow through your afternoon workload in 45 minutes with zero brain fog. You drive home after 6:00 PM with pure, clean energy to play with your kids, hit a workout, or cook dinner with your partner. You fall asleep at night peacefully, not because you’re drained, but because your body completed a triumphant day.
            </p>
            <p>
              That afternoon collapse was never a lack of caffeine or sleep; it was a violent glucose roller coaster. When you eat carbohydrates last, glucose enters your bloodstream at a smooth, steady trickle rather than an explosive flood. No glucose spike means no post-meal crash.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Exhaustion is not your personality. It is a chemical glitch created by the wrong order of eating. Fix the curve, and your natural fire returns.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 74% of Working Adults</p>
                <p className="text-xs text-slate-500 mt-0.5">Suffer from severe postprandial fatigue and afternoon cognitive slumps.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 82% Quit Traditional Routines</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Caffeine Crashes Adrenals</p>
                <p className="text-xs text-slate-500 mt-0.5">Energy drinks trigger adrenal exhaustion and rebound crashes twice as severe.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Reactive Postprandial Hypoglycemia. Eating carbs first causes blood glucose to spike above 150 mg/dL. The pancreas hyper-secretes insulin to clear the danger, causing glucose to plummet down to 60 mg/dL within 75 minutes. The brain experiences acute cellular starvation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Blunts post-meal glucose spikes by 38% • Eliminates 87% of Food Comas
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In All-Day Energy →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 3: TOTAL GUT DE-BLOAT */}
        {/* ===================================================================== */}
        <article id="goal-gut-debloat" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 03 OF 11 • GASTROINTESTINAL TRANSIT
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              🌿 Heal Gut & Stop Bloating
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You wake up in the morning and your stomach looks relatively normal. But by 6:00 PM, after lunch and a snack, you feel a hard, painful pressure building beneath your ribs. By evening, your abdomen is swollen, rock-hard, and distended. You look in the mirror and you literally look 4 to 6 months pregnant. You secretly unbutton your pants under the dinner table just to breathe. When your partner comes close to hug you or cuddle on the couch, you cringe and pull away in shame, terrified they will touch your bloated, rock-solid belly. You lie in bed clutching a pillow against your gut, feeling trapped gas gurgling and aching inside.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 3 days from now. It’s 9:00 PM. You just ate a hearty, delicious home dinner with your family. You stand in front of the mirror in your underwear. Your stomach is completely flat, relaxed, and soft to the touch. Zero trapped gas. Zero sharp abdominal cramps. Zero unbuttoning your pants. You wear tight clothes with complete peace of mind, and you welcome physical intimacy without a single second of hesitation or self-consciousness.
            </p>
            <p>
              Bloating isn’t a food allergy you need a 100-page laboratory test for; it’s rapid fermentation. When carbs hit stomach acid first without a plant fiber shield, bacteria feast and produce gallons of trapped gas. Tovelu’s 1-2-3 sequence coats the digestive tract with a viscous fiber matrix, ensuring smooth, silent, gas-free digestion in 72 hours.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “You were not born with a sensitive, broken stomach. You were just feeding your digestive tract in the wrong sequence. Give it order, and it gives you peace.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 1.9 Billion People</p>
                <p className="text-xs text-slate-500 mt-0.5">Suffer from chronic functional bloating, distension, and trapped gas.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 91% of Diets Fail</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Elimination Diets Cause Relapse</p>
                <p className="text-xs text-slate-500 mt-0.5">Restricting food groups starves healthy gut bacteria, making future bloating worse.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Rapid carbohydrate hydrolysis in the upper small intestine creates an osmotic fluid shift and accelerated bacterial fermentation, releasing hydrogen and methane gas that stretches visceral nociceptors (pain receptors).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Reduces intestinal gas production by 76% • Restores Transit in 72 Hours
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Gut De-Bloat →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 4: DEEP RESTFUL SLEEP */}
        {/* ===================================================================== */}
        <article id="goal-sleep" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 04 OF 11 • CIRCADIAN NEURO-ENDOCRINE AXIS
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              🌙 Deep Restful Sleep
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You finally fall asleep after a long, exhausting day. Then—<em>BAM</em>. Your eyes snap wide open. You glance at the bedside clock: <strong>3:14 AM</strong>. Your heart is thumping against your chest. Your body feels hot, your mind is racing with catastrophic thoughts about money, family, or work, and your mouth feels dry. You flip your pillow over, staring into the dark ceiling for 2 hours, feeling total dread knowing your alarm is going to ring at 6:30 AM. You wake up feeling like a zombie, looking in the mirror at deep dark purple circles under your eyes, wondering why your body refuses to let you rest.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine tonight. Your head touches the pillow at 10:30 PM. You drift into a deep, velvety, restorative sleep within minutes. The clock strikes 3:00 AM—and your body stays peacefully asleep. You wake up at 7:00 AM feeling completely renewed, light, and refreshed before your alarm even rings. Your mind is quiet, your face looks rested, and you have deep, genuine joy to start your day.
            </p>
            <p>
              You didn’t wake up at 3 AM because you are an “overthinker”. You woke up because your dinner caused a late-night glucose crash. When glucose tanks at 3 AM, your brain panics and releases an emergency injection of adrenaline and cortisol to save your life. Tovelu’s 1-2-3 dinner sequence keeps nighttime glucose flat, keeping stress hormones silent all night long.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Sleep is your birthright. When your evening plate is in biological order, your nervous system finally feels safe enough to rest.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 2.2 Billion Adults</p>
                <p className="text-xs text-slate-500 mt-0.5">Regularly experience sudden awakenings between 2:00 AM and 4:00 AM.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 85% Fail Sleeping Pills</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Sedation Ignores Hypoglycemia</p>
                <p className="text-xs text-slate-500 mt-0.5">Sleeping pills sedate the cortex but do not prevent midnight cortisol surges.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Nocturnal Neuroglycopenia. High-glycemic dinners cause reactive hypoglycemia 4 hours into the sleep cycle. The hypothalamus triggers the HPA axis, dumping cortisol and norepinephrine into the bloodstream, terminating stage-4 slow-wave sleep.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Suppresses midnight cortisol spikes by 60% • +38 Min Deep Delta Sleep
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Restful Sleep →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 5: CRYSTAL-CLEAR FOCUS */}
        {/* ===================================================================== */}
        <article id="goal-focus" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 05 OF 11 • CEREBRAL MITOCHONDRIAL FUEL
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              🧠 Clear Brain Fog & Focus
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You sit down to do important work or write an important email. You read the same sentence 4 times and your brain simply cannot process the words. You walk into a room and have no idea why you’re there. You forget the name of someone you know well. You feel a thick, suffocating cloud hovering behind your eyes. A terrifying thought creeps into your chest: <em>“Am I losing my memory? Is this early cognitive decline? Why can’t I think like I used to?”</em> You watch younger colleagues work effortlessly while you struggle through simple mental tasks.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 5 days from now. You sit down at your desk. The cloud is completely gone. Your thoughts are crisp, fast, and organized. You articulate complex ideas effortlessly in conversation. You finish in 2 hours what used to take you an entire exhausting day. You feel intellectually formidable, confident, and back in total command of your mind.
            </p>
            <p>
              The brain consumes 20% of your body’s energy. When blood sugar oscillates wildly from disordered eating, brain cells experience acute micro-starvation and neuro-inflammation. Tovelu’s sequence delivers a smooth, unwavering stream of clean cellular fuel to your neurons from morning to night.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Your mind hasn’t dulled with age; it has simply been starved of stable energy. Clear the fuel, and your genius returns.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 1.8 Billion Professionals</p>
                <p className="text-xs text-slate-500 mt-0.5">Report chronic mental fatigue, brain fog, and executive dysfunction.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 79% Fail Nootropics</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Stimulants Burn Out Receptors</p>
                <p className="text-xs text-slate-500 mt-0.5">Smart drugs stimulate dopamine without providing steady cellular mitochondrial ATP.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Rapid glucose fluctuations trigger the release of pro-inflammatory cytokines (IL-6, TNF-alpha) in hippocampal microglia and impair insulin signaling across the blood-brain barrier.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Stabilizes cerebral glucose velocity by 46% • Clears Brain Fog in 5 Days
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Crystal Focus →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 6: LEAN MUSCLE & FIRM BODY TONE */}
        {/* ===================================================================== */}
        <article id="goal-muscle-tone" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 06 OF 11 • SKELETAL MUSCLE PRESERVATION
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              💪 Build Lean Muscle & Tone
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You stepped on the bathroom scale and saw the number drop by 8 pounds. You should feel happy, right? But when you undress and look in the mirror, your heart sinks. Your stomach is still soft and flabby, but now your arms look weak, your cheeks look hollow and drawn, and your glutes look flat and saggy. You look “skinny-fat”—smaller, but weaker and softer. You try lifting weights or doing squats, but you have zero energy, and your body feels worn down instead of sculpted.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 60 days from now. You catch your profile in the bathroom mirror. Your posture is upright and proud. Your shoulders and arms have clean, athletic definition. Your waist is tapered and tight, and your glutes are firm and lifted. You feel physically strong, light on your feet, and toned in every piece of clothing you put on. People at work or the gym ask you: <em>“What workout routine are you doing?”</em> and you smile, knowing you didn’t spend hours on torture machines.
            </p>
            <p>
              Starvation diets and weight-loss drugs burn muscle because they trigger catabolic gluconeogenesis. Tovelu’s 1-2-3 system places protein in the prime absorption window after fiber, keeping insulin steady and driving amino acids directly into muscle tissue while forcing your body to burn pure fat for energy.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “The goal is never to become smaller; the goal is to become stronger, tighter, and unapologetically alive.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 1.6 Billion People</p>
                <p className="text-xs text-slate-500 mt-0.5">Suffer from sarcopenic obesity ("skinny-fat") after restrictive diets.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 89% Rebound Heavier</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Losing Muscle Destroys BMR</p>
                <p className="text-xs text-slate-500 mt-0.5">Diets burn up to 40% muscle mass, dropping metabolic rate and ensuring rapid rebound fat gain.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Disordered eating impairs the mTORC1 signaling axis for muscle protein synthesis (MPS) due to irregular amino acid bioavailability and postprandial hypercortisolemia.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  +29% Amino Acid Muscle Absorption • Preserves 96% Lean Muscle Mass
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Lean Tone →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 7: BLOOD SUGAR & PRE-DIABETES RESET */}
        {/* ===================================================================== */}
        <article id="goal-blood-sugar" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 07 OF 11 • PANCREATIC BETA-CELL RESTORATION
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              🩸 Reset Blood Sugar
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You sit in the sterile doctor’s office. Your doctor looks down at your lab report, sighs, and says the words that make your stomach drop into your shoes: <em>“Your fasting glucose is 112, and your HbA1c is 6.1. You are pre-diabetic. If we don’t get this under control, you’re looking at Metformin, insulin injections, and severe cardiovascular risk.”</em> You drive home in silence, looking at your hands on the steering wheel, terrified of a future filled with finger-prick needles, failing kidneys, nerve pain, and watching your health slowly disintegrate while your family worries.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine your next checkup 90 days from now. Your doctor opens your new blood results, pauses, and looks up at you over their glasses in total disbelief: <em>“What on earth have you been doing? Your fasting glucose is 88 mg/dL. Your HbA1c is down to 5.3. You are completely out of the pre-diabetic zone. Whatever medication you were considering, you don’t need it.”</em> You walk out of the clinic into the sunlight, taking the deepest breath of your life, knowing your body is clean, safe, and healed.
            </p>
            <p>
              Pre-diabetes is not a death sentence; it is cellular exhaustion. When you eat in the 1-2-3 sequence, the physical fiber barrier prevents the massive carbohydrate surge that forces your pancreas to pump out toxic amounts of insulin. Your cellular insulin receptors get a desperately needed break, reset their sensitivity, and begin clearing sugar naturally.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Your blood sugar was never your destiny. It was simply the result of an unprotected digestive order. Give your pancreas the shield it needs, and your cells heal themselves.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 1.2 Billion Adults</p>
                <p className="text-xs text-slate-500 mt-0.5">Live with pre-diabetes, insulin resistance, or metabolic syndrome.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 78% Worsen Over Time</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>"Frequent Small Meals" Kills Beta Cells</p>
                <p className="text-xs text-slate-500 mt-0.5">Grazing keeps insulin elevated all day, accelerating beta-cell exhaustion and apoptosis.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Chronic postprandial glycemic excursions induce glucotoxicity and downregulate GLUT4 translocation in skeletal muscle, locking the patient into irreversible insulin resistance.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Drops peak post-meal glucose by 38%–42% • -35% HOMA-IR in 90 Days
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Blood Sugar Reset →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 8: HEART HEALTH & CLEAN ARTERIES */}
        {/* ===================================================================== */}
        <article id="goal-heart" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 08 OF 11 • ENDOTHELIAL & VASCULAR RESILIENCE
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              ❤️ Protect Heart & Arteries
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You climb a simple flight of stairs and you feel your heart pounding like a hammer against your ribs, gasping for air. You check your blood pressure at the pharmacy and see numbers like 142/92. Every time you feel a slight ache or tightness in your chest or arm, a cold flash of panic shoots through your body: <em>“Is this it? Am I having a heart attack?”</em> You look at your spouse or your children and feel the terrifying weight of leaving them behind too early because your cardiovascular system is wearing out decades before its time.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 90 days from now. You climb two flights of stairs taking two steps at a time—and you reach the top breathing effortlessly through your nose. Your resting blood pressure reads a calm, optimal 118/76. Your chest feels light, calm, and open. Your doctor runs an advanced lipid and inflammatory panel and confirms your arterial inflammation markers have plummeted. You feel a deep, unshakable peace knowing your heart is strong, resilient, and built to carry you into your 80s and 90s.
            </p>
            <p>
              Cardiovascular damage is not caused by healthy home food; it is triggered by post-meal sugar spikes that oxidize LDL particles and create micro-tears in arterial walls. By flattening your glycemic curve, Tovelu stops the production of vascular free radicals, keeping your blood vessels wide, supple, and clean.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Your heart has beaten for you over 100,000 times today without asking for anything in return. Protect its arteries with the right food sequence, and it will beat strong for a lifetime.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>17.9 Million Lives Lost Annually</p>
                <p className="text-xs text-slate-500 mt-0.5">Cardiovascular disease remains the #1 cause of mortality globally.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 84% Fail Low-Fat Diets</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Refined Carbs Oxidize LDL</p>
                <p className="text-xs text-slate-500 mt-0.5">Replacing fat with carbs spikes glucose, generating free radicals that oxidize arterial walls.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Postprandial glucose surges generate reactive oxygen species (ROS) that inactivate endothelial nitric oxide synthase (eNOS), causing acute arterial stiffness, platelet aggregation, and endothelial micro-tears.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Reduces post-meal arterial stiffness by 31% • -28% hs-CRP Vascular Inflammation
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Heart Health →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 9: HORMONAL BALANCE */}
        {/* ===================================================================== */}
        <article id="goal-hormones" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 09 OF 11 • ENDOCRINE & OVARIAN HOMEOSTASIS
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              🌸 Balance Hormones & PCOS
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You look in the magnifying mirror and notice coarse dark hairs appearing along your chin or jawline. Your hairbrush is full of thinning strands. Your menstrual cycle is a complete guessing game—sometimes 35 days, sometimes 60 days, sometimes missing for months. You struggle with sudden emotional weepiness, unprovoked anxiety, and stubborn weight around your hips that refuses to budge. You feel like a stranger in your own female body, robbed of your femininity, feeling broken, overwhelmed, and completely misunderstood by doctors who just tell you to <em>“take birth control and lose weight.”</em>
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 60 days from now. You wake up on day 28 of your cycle—and your period arrives smoothly, naturally, and on time with zero debilitating cramps or emotional turbulence. Your chin is clear and smooth. Your hair feels thick and healthy again. Your moods are grounded, calm, and resilient. You feel deeply connected to your feminine rhythm, in total harmony with your hormones, fertile, and thriving.
            </p>
            <p>
              PCOS and hormonal chaos are primarily driven by <strong>insulin resistance in the ovaries</strong>. High insulin tells the ovaries to produce excess male androgens (testosterone) while blocking progesterone. Tovelu’s 1-2-3 sequence eliminates insulin spikes, allowing your ovaries to ovulate naturally and your thyroid to convert active T3 smoothly.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Your hormones are not broken. They were simply drowning in an insulin flood. Clear the flood, and your natural feminine balance restores itself effortlessly.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>1 in 8 Women Worldwide</p>
                <p className="text-xs text-slate-500 mt-0.5">Suffer from PCOS, irregular cycles, and metabolic endocrine disruption.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 84% Relapse on Pills</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Birth Control Only Masks</p>
                <p className="text-xs text-slate-500 mt-0.5">Artificial withdrawal bleeds do not fix underlying ovarian hyperinsulinemia.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Insulin acts synergistically with luteinizing hormone (LH) on ovarian theca cells to upregulate CYP17A1 enzyme activity, driving excessive androgen synthesis while suppressing hepatic Sex Hormone-Binding Globulin (SHBG).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Reduces free androgen surges by 35% • Restores Regular Cycles in 78% of PCOS
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Hormonal Balance →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 10: CLEAR, GLOWING SKIN */}
        {/* ===================================================================== */}
        <article id="goal-skin" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 10 OF 11 • DERMAL COLLAGEN INTEGRITY
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              ✨ Clear Glowing Skin
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You wake up in the morning, wash your face, and feel that sickening, deep, painful throbbing under the skin along your jawline and cheeks: another cluster of cystic pimples forming. You spend 15 minutes applying heavy concealer and foundation just to step out the door, terrified someone will see your bare skin in natural sunlight. You look closely in the mirror and notice dull, yellowish, crepey skin and premature fine lines around your eyes and mouth that make you look exhausted and 7 years older than you actually are. You’ve spent hundreds on serums, creams, and dermatologists, yet nothing stops the breakout.
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 4 weeks from now. You wake up, splash cold water on your face, and look in the mirror under bright morning sunlight. Zero active cystic breakouts. Zero redness or inflammation. Your skin has a luminous, hydrated, natural glow that doesn’t need a single drop of foundation. Fine lines look plumped and smoothed out. A friend leans in and says: <em>“Your skin looks incredible—what skincare are you using?”</em> and you smile, knowing the glow came from your dinner plate, not a cosmetic bottle.
            </p>
            <p>
              Acne and premature skin aging are caused from the inside by <strong>Glycation and IGF-1</strong>. When blood sugar spikes, glucose binds to skin collagen, turning it stiff and brittle (AGEs). Simultaneously, insulin triggers a massive surge of IGF-1, which over-activates facial sebaceous glands. Tovelu stops the spike, shutting off cystic acne and protecting your collagen matrix permanently.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “True beauty is not bought in a jar; it is synthesized at the cellular level. When your internal chemistry is in homeostasis, your skin cannot help but radiate.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>Over 650 Million People</p>
                <p className="text-xs text-slate-500 mt-0.5">Suffer from chronic inflammatory adult acne and accelerated facial photo-glycation.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 81% Fail Creams</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Topicals Ignore Internal IGF-1</p>
                <p className="text-xs text-slate-500 mt-0.5">Creams only dry the skin surface; they cannot stop postprandial sebaceous hyper-stimulation.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Advanced Glycation End-products (AGEs) cross-link dermal collagen and elastin fibers, while postprandial hyperinsulinemia stimulates FoxO1 phosphorylation, driving mTORC1 acne pathogenesis.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Halts collagen glycation by 50% • -64% Inflammatory Acne Lesions in 30 Days
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Clear Skin →
              </button>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* GOAL 11: BIOLOGICAL AGE REVERSAL */}
        {/* ===================================================================== */}
        <article id="goal-bio-age" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D] uppercase block">
              TARGET GOAL 11 OF 11 • CELLULAR AUTOPHAGY & LONGEVITY
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${textTitle}`}>
              ⏳ Reverse Biological Age
            </h2>
          </div>

          <div className={`space-y-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 ${textSub}`}>
            <p>
              You look at an old photo of yourself from just 5 or 10 years ago, and then look in the mirror. You see dull eyes, tired facial tissue, stiff joints when getting out of bed in the morning, slow recovery after simple tasks, and an overwhelming feeling that your vitality is slipping through your fingers like sand. You look at your calendar age—maybe you're 38, 48, or 58—and a quiet, cold anxiety grips your chest: <em>“My body is aging faster than the calendar. Am I going to spend the second half of my life sick, dependent on pills, and losing my independence?”</em>
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Imagine 90 days from now. You wake up feeling like you did in your early 20s. Your joints feel supple, oiled, and completely pain-free. You move with spring, agility, and effortless power. Your clinical biological age report prints out: <strong>3.8 Years Reversed</strong>. Your cells are functioning younger than your driver's license says. You look vibrant, your mind is fast, and you possess an unshakeable inner certainty that your future will be defined by vigor, longevity, and total physical freedom.
            </p>
            <p>
              Cells cannot repair while they are constantly processing glucose spikes. Constant high insulin keeps the nutrient sensor <strong>mTOR</strong> locked on, which completely blocks <strong>Autophagy</strong> (the body’s cellular recycling and deep cleaning process). Tovelu’s food sequence drops baseline insulin, allowing your cells to trigger autophagy every single day, clearing out damaged mitochondria and renewing your organs from within.
            </p>
            <p className="font-bold italic text-emerald-700 dark:text-[#00FF9D] text-sm sm:text-base">
              “Age is not a mandatory decline; it is a rate of cellular wear and tear. Change the fuel sequence, and you literally turn back the biological clock.”
            </p>
          </div>

          <div className={`p-4 sm:p-6 md:p-8 rounded-3xl border ${subBoxCls} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Global Scale & Daily Reality</h4>
                <p className={`text-base font-bold mt-1 ${textTitle}`}>74% of All Global Deaths</p>
                <p className="text-xs text-slate-500 mt-0.5">Are caused by preventable chronic metabolic aging diseases (WHO data).</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Why 93% Fail Anti-Aging Pills</h4>
                <p className={`text-base font-bold mt-1 text-rose-500`}>Pills Can't Stop Glucose ROS</p>
                <p className="text-xs text-slate-500 mt-0.5">Longevity supplements fail when cells are continuously inflamed by repeated postprandial spikes.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">The Underlying Biological Mechanism</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSub}`}>
                Chronic hyperinsulinemia suppresses AMPK and Sirtuin (SIRT1/SIRT3) pathways, inhibiting mitophagy and autophagy while accelerating cellular senescence (p16INK4a accumulation).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 dark:text-[#00FF9D] block">
                  The Tovelu Clinical Proof
                </span>
                <span className={`text-sm sm:text-base font-bold ${textTitle} block mt-0.5`}>
                  Reverses biological age by an average of 2.8 to 4.2 years in 90 Days
                </span>
              </div>
              <button
                onClick={onTryForFree}
                className="py-3 px-6 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shrink-0"
              >
                Lock In Biological Age Reversal →
              </button>
            </div>
          </div>
        </article>

      </section>

      {/* ========================================================================= */}
      {/* 3. THE DEDICATED GOALS COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold block">
            HOW TOVELU SOLVES THE 11 GOALS VS THE ENTIRE MARKET
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
            Why Every Other Solution Made It Harder
          </h2>
          <p className={`text-xs sm:text-sm ${textSub}`}>
            Traditional diets starve your cells, calorie apps exhaust your mind, and weight-loss shots burn your muscle. Here is the verified truth:
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className={darkMode ? 'bg-slate-900/90 text-slate-300' : 'bg-slate-100 text-slate-800'}>
                <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 w-1/4">Body Goal Challenge</th>
                <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-rose-500">❌ Fads (Keto / Fasting)</th>
                <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-amber-500">❌ Calorie Counting Apps</th>
                <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-rose-500">❌ Injections (GLP-1)</th>
                <th className="p-4 font-black border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-[#00FF9D] bg-emerald-500/10">
                  👑 Tovelu (Powered by THAIS)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                {
                  challenge: 'Belly Fat Loss',
                  fads: 'Starves body; burns water & muscle first',
                  apps: 'Slow; ignores fat-storing insulin',
                  shots: 'Burns up to 40% lean muscle mass',
                  tovelu: 'Melts pure visceral fat; protects muscle tone',
                },
                {
                  challenge: 'All-Day Energy',
                  fads: 'Brain fog, zero carbs, irritability',
                  apps: '2 PM sugar crash continues uninterrupted',
                  shots: 'Chronic fatigue, weakness & nausea',
                  tovelu: 'Steady, high-alert energy from 8 AM to 8 PM',
                },
                {
                  challenge: 'Gut & Digestion',
                  fads: 'Severe constipation from low food balance',
                  apps: 'Ignores fermentation entirely',
                  shots: 'Constant nausea, sulfur burps & vomiting',
                  tovelu: 'Zero bloating; restored gut transit in 72 hours',
                },
                {
                  challenge: 'Deep Sleep (3 AM)',
                  fads: 'Nocturnal cortisol surges wake you up',
                  apps: 'Obsessive bedtime logging anxiety',
                  shots: 'Night sweats & digestive disturbance',
                  tovelu: 'Suppresses midnight cortisol; deep sleep',
                },
                {
                  challenge: 'Blood Sugar & HbA1c',
                  fads: 'Temporary until you eat 1 slice of bread',
                  apps: 'Measures calories, not glucose spikes',
                  shots: 'Suppresses appetite artificially; rebounds',
                  tovelu: 'Blunts glucose spikes by 38%–42% naturally',
                },
                {
                  challenge: 'Muscle & Skin Tone',
                  fads: 'Muscle wasting & dull complexion',
                  apps: 'Muscle loss due to protein deficits',
                  shots: '“Ozempic Face” & rapid skin sagging',
                  tovelu: '+29% Amino acid absorption; radiant skin',
                },
                {
                  challenge: 'Cost & Freedom',
                  fads: '$200+/mo on special foods; social misery',
                  apps: '$80–$150/yr for stressful logging',
                  shots: '$1,000–$1,400/mo ($12,000+/yr)',
                  tovelu: 'Start for Free. Protocol starts from $49.',
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? (darkMode ? 'bg-[#080B0E]' : 'bg-white') : (darkMode ? 'bg-slate-900/30' : 'bg-slate-50/50')}>
                  <td className={`p-4 font-bold ${textTitle}`}>{row.challenge}</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{row.fads}</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{row.apps}</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{row.shots}</td>
                  <td className="p-4 font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/5">{row.tovelu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE ACTION CLOSER */}
      {/* ========================================================================= */}
      <section className="max-w-2xl mx-auto px-4 text-center space-y-6 pt-12">
        <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${textTitle}`}>
          Which Body Goal Do You Want to Unlock First?
        </h2>
        <p className={`text-sm sm:text-base ${textSub}`}>
          You don’t have to choose between your health and your family dinners. Pick your target and inspect your custom Day 1 food sequencing blueprint in under 2 minutes.
        </p>

        <div className="pt-2 space-y-3">
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
