import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { SwipeToComplete } from '../ui/SwipeToComplete';
import { MealLogModal } from '../thais/MealLogModal';
import { NightlyCheckInModal } from '../thais/NightlyCheckInModal';
import { SosRescueModal } from './SosRescueModal';
import { MealPortion, DailyHealthTask } from '../../services/thais/types';

interface TodayMeal extends MealPortion {
  isLogged: boolean;
}

interface TodayTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

export const TodayTab: React.FC<TodayTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  // Calendar Day & Date
  const todayDate = new Date();
  const dateFormatted = todayDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Daily Budget & Macros State
  const [budget, setBudget] = useState({
    targetCalories: 1850,
    consumedCalories: 1180,
    targetProtein: 145,
    consumedProtein: 98,
    targetCarbs: 160,
    consumedCarbs: 104,
    targetFats: 65,
    consumedFats: 42,
    targetFiber: 38,
    consumedFiber: 26,
    targetWaterL: 3.0,
    consumedWaterL: 2.1,
  });

  // Meals State
  const [meals, setMeals] = useState<TodayMeal[]>([
    {
      mealType: 'breakfast',
      name: 'Breakfast',
      calories: 450,
      proteinGrams: 35,
      carbGrams: 30,
      fatGrams: 16,
      suggestedDish: 'Greek Yogurt with Chia Seeds, Walnuts & Wild Berries',
      guidance: 'Consume protein & healthy fats first to prevent insulin spike.',
      ingredients: ['Greek yogurt (200g)', 'Chia seeds (15g)', 'Walnuts (15g)', 'Blueberries (50g)'],
      isLogged: true,
    },
    {
      mealType: 'lunch',
      name: 'Lunch',
      calories: 650,
      proteinGrams: 52,
      carbGrams: 55,
      fatGrams: 22,
      suggestedDish: 'Wild Salmon with Steamed Bok Choy & Black Rice',
      guidance: '1. Eat steamed bok choy & broccoli first (fiber mesh) -> 2. Salmon (protein) -> 3. Black rice last.',
      ingredients: ['Wild salmon fillet (180g)', 'Bok choy & broccoli (150g)', 'Cooked black rice (100g)', 'Cold-pressed olive oil (10g)'],
      isLogged: true,
    },
    {
      mealType: 'dinner',
      name: 'Dinner',
      calories: 550,
      proteinGrams: 45,
      carbGrams: 42,
      fatGrams: 18,
      suggestedDish: 'Grass-Fed Beef or Tofu with Roasted Zucchini & Sweet Potato',
      guidance: '1. Roasted zucchini first -> 2. Protein -> 3. Sweet potato last.',
      ingredients: ['Grass-fed beef steak or firm tofu (160g)', 'Roasted zucchini & asparagus (150g)', 'Baked sweet potato (120g)'],
      isLogged: false,
    },
  ]);

  // Tasks State
  const [tasks, setTasks] = useState<DailyHealthTask[]>([
    {
      id: 'task-1',
      title: 'Morning Sunlight & 500ml Mineral Hydration',
      category: 'circadian',
      targetTiming: '10 min • Morning',
      clinicalRationale: 'Direct photon exposure to retinal ganglion cells resets suprachiasmatic circadian rhythm and cortisol awakening response.',
      targetsDisease: 'Circadian Dysrhythmia',
      isCompleted: true,
    },
    {
      id: 'task-2',
      title: 'Post-Lunch 10-Minute Glucose Clearing Walk',
      category: 'movement',
      targetTiming: '10 min • Post-Lunch',
      clinicalRationale: 'Soleus and quadricep muscle contractions activate GLUT4 glucose transporters independent of insulin, blunting peak glucose excursion by up to 38%.',
      targetsDisease: 'Insulin Resistance',
      isCompleted: true,
    },
    {
      id: 'task-3',
      title: 'Magnesium Glycinate & Blue Light Cutoff',
      category: 'recovery',
      targetTiming: '5 min • Night',
      clinicalRationale: 'Reduces neuro-muscular hyper-excitability and prevents pineal melatonin suppression before deep slow-wave sleep.',
      targetsDisease: 'Sleep Latency',
      isCompleted: false,
    },
  ]);

  // Modals state
  const [activeLogMeal, setActiveLogMeal] = useState<MealPortion | null>(null);
  const [isNightlyOpen, setIsNightlyOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [activeExpandedMeal, setActiveExpandedMeal] = useState<'breakfast' | 'lunch' | 'dinner'>('dinner');
  const [oneTapToast, setOneTapToast] = useState<string | null>(null);

  // Homeostasis Calculation
  const totalItems = meals.length + tasks.length + 1; // +1 for nightly check-in
  const completedMeals = meals.filter((m) => m.isLogged).length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;
  const progressPercent = Math.round(((completedMeals + completedTasks) / totalItems) * 100);
  const isAllComplete = progressPercent >= 100;

  // 1-Tap Log As Planned Handler
  const handleOneTapLogPlanned = (mealType: 'breakfast' | 'lunch' | 'dinner') => {
    const meal = meals.find((m) => m.mealType === mealType);
    if (!meal) return;

    setMeals((prev) =>
      prev.map((m) => (m.mealType === mealType ? { ...m, isLogged: true } : m))
    );

    setBudget((prev) => ({
      ...prev,
      consumedCalories: prev.consumedCalories + meal.calories,
      consumedProtein: prev.consumedProtein + meal.proteinGrams,
      consumedCarbs: prev.consumedCarbs + meal.carbGrams,
      consumedFats: prev.consumedFats + meal.fatGrams,
    }));

    setOneTapToast(`⚡ Logged ${meal.suggestedDish} as planned!`);
    setTimeout(() => setOneTapToast(null), 3000);
  };

  // Task Swipe Complete Handler
  const handleTaskComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isCompleted: true } : t))
    );
  };

  // Meal Modal Confirm Handler
  const handleConfirmCustomMeal = (
    mealType: 'breakfast' | 'lunch' | 'dinner',
    cals: number,
    p: number,
    c: number,
    f: number
  ) => {
    setMeals((prev) =>
      prev.map((m) => (m.mealType === mealType ? { ...m, isLogged: true } : m))
    );
    setBudget((prev) => ({
      ...prev,
      consumedCalories: prev.consumedCalories + cals,
      consumedProtein: prev.consumedProtein + p,
      consumedCarbs: prev.consumedCarbs + c,
      consumedFats: prev.consumedFats + f,
    }));
    setActiveLogMeal(null);
  };

  const caloriesRemaining = Math.max(0, budget.targetCalories - budget.consumedCalories);

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-6 animate-fadeIn">
      {/* 1. TOP HEADER WITH WORDMARK & PROFILE AVATAR TRIGGER */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        {/* User Profile Avatar Button -> Opens YOU section */}
        <button
          onClick={onOpenYou}
          className={`flex items-center gap-2 p-1.5 rounded-full border transition-all active:scale-95 ${
            darkMode
              ? 'bg-slate-900 border-slate-700 hover:border-[#00FF9D] text-slate-200'
              : 'bg-slate-100 border-slate-200 hover:border-emerald-500 text-slate-800'
          }`}
          title="Open YOU (Profile & Rule Book)"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs shadow-sm">
            AJ
          </div>
          <span className="text-[11px] font-bold pr-1.5 uppercase tracking-wider text-slate-400 hover:text-white">
            YOU
          </span>
        </button>
      </div>

      {/* 2. CURRENT DAY & FULL CALENDAR DATE */}
      <div className={`p-3.5 rounded-2xl border flex items-center justify-between shadow-sm ${
        darkMode ? 'bg-[#0E1318] border-slate-800/80' : 'bg-white border-slate-200'
      }`}>
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {dateFormatted}
          </div>
          <div className="text-sm font-black tracking-tight text-slate-100 flex items-center gap-1.5 mt-0.5">
            <span>Day 14 of 90</span>
            <span className="text-xs font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded-full border border-[#00FF9D]/30">
              High Momentum 🔥
            </span>
          </div>
        </div>

        {/* 3-Hour Free Trial Clock (or Active Subscription) */}
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Trial Clock</span>
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/30">
            02:54:12
          </span>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {oneTapToast && (
        <div className="p-2.5 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
          {oneTapToast}
        </div>
      )}

      {/* 3. LIVING HOMEOSTASIS PROGRESS RING & METABOLIC STATE */}
      <div className={`p-4 rounded-2xl border relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-b from-[#0E1318] to-[#0A0D11] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              Living Homeostasis Ring
            </span>
            <h3 className="text-lg font-black tracking-tight text-slate-100">
              {progressPercent}% Complete
            </h3>
            {/* 4. REAL-TIME METABOLIC STATE BADGE */}
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-medium mt-1">
              <span>🟢</span>
              <span>Stable Glucose Arc • 0 Energy Crashes</span>
            </div>
          </div>

          {/* Circular SVG Gauge */}
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800 stroke-current"
                strokeWidth="3.5"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#00FF9D] stroke-current transition-all duration-700 ease-out"
                strokeDasharray={`${progressPercent}, 100`}
                strokeLinecap="round"
                strokeWidth="3.5"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-xs font-black text-slate-100">{progressPercent}%</span>
          </div>
        </div>

        {isAllComplete && (
          <div className="mt-3 p-2 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D]">
            🎉 Day 14 Conquered! Cells in Peak Repair Tonight.
          </div>
        )}
      </div>

      {/* 5. DAILY PORTION BUDGET METER */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Portion Meter</span>
            <div className="text-base font-black text-slate-100">
              {caloriesRemaining} <span className="text-xs font-normal text-slate-400">kcal remaining</span>
            </div>
          </div>
          <div className="text-right text-xs font-bold text-slate-400">
            {budget.consumedCalories} / {budget.targetCalories} kcal
          </div>
        </div>

        {/* Macro Progress Bars */}
        <div className="grid grid-cols-5 gap-2 pt-1 text-center">
          {/* Protein */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-emerald-400 uppercase">Protein</div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedProtein / budget.targetProtein) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300">{budget.consumedProtein}g</div>
          </div>

          {/* Carbs */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-amber-400 uppercase">Carbs</div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedCarbs / budget.targetCarbs) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300">{budget.consumedCarbs}g</div>
          </div>

          {/* Fats */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-sky-400 uppercase">Fats</div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedFats / budget.targetFats) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300">{budget.consumedFats}g</div>
          </div>

          {/* Fiber */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-teal-400 uppercase">Fiber</div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedFiber / budget.targetFiber) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300">{budget.consumedFiber}g</div>
          </div>

          {/* Water */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-blue-400 uppercase">Water</div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedWaterL / budget.targetWaterL) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300">{budget.consumedWaterL}L</div>
          </div>
        </div>
      </div>

      {/* 6. CHRONOBIOLOGICAL SMART ACTIVE MEAL CARDS */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Today's 3 Meals (Sequenced)
          </span>
          <span className="text-[10px] text-emerald-400 font-bold">Food Sequencing = -38% Spikes</span>
        </div>

        {meals.map((meal) => {
          const isExpanded = activeExpandedMeal === meal.mealType;
          return (
            <div
              key={meal.mealType}
              className={`rounded-2xl border transition-all ${
                meal.isLogged
                  ? 'border-slate-800/80 bg-slate-900/40 opacity-85'
                  : isExpanded
                  ? 'border-[#00FF9D]/60 bg-[#0E1318] shadow-[0_0_20px_rgba(0,255,157,0.08)]'
                  : 'border-slate-800 bg-[#0E1318]'
              }`}
            >
              {/* Card Header (Accordion toggle) */}
              <button
                onClick={() => setActiveExpandedMeal(meal.mealType)}
                className="w-full p-3.5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                      meal.isLogged
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    {meal.isLogged ? '✓' : meal.mealType === 'breakfast' ? '🌅' : meal.mealType === 'lunch' ? '☀️' : '🌙'}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        {meal.mealType}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {meal.calories} kcal
                      </span>
                      {meal.isLogged && (
                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Logged
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-100 truncate mt-0.5">
                      {meal.suggestedDish}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-mono pl-2">
                  {isExpanded ? '▲' : '▼'}
                </span>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-800/80 space-y-3">
                  {/* Sequencing Guideline */}
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
                    <span className="font-bold text-[#00FF9D] uppercase tracking-wider block mb-1">
                      🥗 Optimal Sequencing Order:
                    </span>
                    {meal.guidance}
                  </div>

                  {/* Recommended Ingredients */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Ingredients Prescribed:
                    </span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-0.5">
                      {meal.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  {!meal.isLogged ? (
                    <div className="space-y-2 pt-1">
                      {/* 1-Tap Log As Planned */}
                      <button
                        onClick={() => handleOneTapLogPlanned(meal.mealType)}
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,157,0.2)]"
                      >
                        <span>⚡ 1-Tap Log: Ate As Planned</span>
                      </button>

                      {/* Custom Log Trigger (opens MealLogModal) */}
                      <button
                        onClick={() => setActiveLogMeal(meal)}
                        className="w-full py-2 px-3 rounded-xl font-bold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 active:scale-98 transition-all flex items-center justify-center gap-2"
                      >
                        <span>📷 Scan Photo / ✍️ Manual / 🤖 Ask AI</span>
                      </button>
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-center text-xs font-bold">
                      ✅ Meal Logged with 100% Precision
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 7. TODAY'S TARGETED HEALING TASKS (SwipeToComplete) */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Today's Targeted Healing Tasks
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Swipe to complete</span>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3.5 rounded-2xl border transition-all ${
                task.isCompleted
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-slate-800 bg-[#0E1318]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <span>{task.isCompleted ? '✅' : '🎯'}</span>
                  <span>{task.title}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {task.targetTiming}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                {task.clinicalRationale}
              </p>

              {/* Swipe Slider */}
              <SwipeToComplete
                label="Swipe to Complete Task"
                completedLabel="Task Completed • Dopamine Locked"
                isCompleted={task.isCompleted}
                onComplete={() => handleTaskComplete(task.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 8. EMERGENCY SOS RESCUE BUTTON */}
      <div className="pt-1">
        <button
          onClick={() => setIsSosOpen(true)}
          className="w-full p-3 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent hover:border-amber-500/70 transition-all flex items-center justify-between text-left active:scale-98"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🆘</span>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Bloated / Overate / Craving Something?
              </div>
              <div className="text-[11px] text-slate-400">
                Tap for instant 2-minute zero-guilt clinical fix
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-400 font-mono">Rescue →</span>
        </button>
      </div>

      {/* 9. TODAY'S THAIS DAILY SUGGESTION & CLINICAL NOTE */}
      <div className={`p-4 rounded-2xl border ${
        darkMode ? 'bg-gradient-to-br from-slate-900 to-[#0B1015] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base">💡</span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00FF9D]">
            Today's THAIS Clinical Note (Day 14)
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Your liver glycogen stores have depleted over the past 72 hours, meaning your cells are now directly accessing visceral fat for fuel. If you experience a mild salt craving around 4 PM, have a pinch of rock salt in warm water—it immediately balances your adrenal cortisol without breaking fat oxidation.
        </p>
      </div>

      {/* 10. NIGHTLY 1-MINUTE BEDTIME CHECK-IN TRIGGER */}
      <div className="pt-1">
        <button
          onClick={() => setIsNightlyOpen(true)}
          className="w-full py-3.5 px-4 rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 text-slate-100 hover:border-indigo-500 active:scale-98 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🌙</span>
            <div className="text-left">
              <div className="text-xs font-bold text-indigo-300">
                60-Second Bedtime Reflection
              </div>
              <div className="text-[10px] text-slate-400">
                Reconcile today's tasks & train THAIS overnight
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-indigo-300 font-mono">Start →</span>
        </button>
      </div>

      {/* MODALS */}
      {activeLogMeal && (
        <MealLogModal
          isOpen={true}
          meal={activeLogMeal}
          onClose={() => setActiveLogMeal(null)}
          onConfirmMeal={handleConfirmCustomMeal}
        />
      )}

      <NightlyCheckInModal
        isOpen={isNightlyOpen}
        tasks={tasks}
        onClose={() => setIsNightlyOpen(false)}
        onSubmitCheckIn={(reconciled) => {
          setTasks(reconciled);
          setIsNightlyOpen(false);
        }}
      />

      <SosRescueModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
        onApplyPlanAdjustment={(note) => {
          setOneTapToast(`⚡ SOS Applied: ${note}`);
          setTimeout(() => setOneTapToast(null), 3000);
        }}
      />
    </div>
  );
};
