import React, { useState } from 'react';
import { MealPortion, DailyHealthTask } from '../../services/thais/types';
import { MealLogModal } from '../thais/MealLogModal';
import { NightlyCheckInModal } from '../thais/NightlyCheckInModal';
import { SosRescueModal } from './SosRescueModal';
import { HabitLogModal, HabitType } from './HabitLogModal';
import { SwipeToComplete } from '../ui/SwipeToComplete';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface TodayTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

export interface TodayMealItem extends MealPortion {
  isLogged: boolean;
}

export const TodayTab: React.FC<TodayTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  // Calendar & Day Meta
  const fullCalendarDate = 'Sunday, August 30, 2026';
  const momentumLabel = 'Day 14 of 90 • High Momentum 🔥';
  const trialCountdown = '02:54:12';

  // Macro & Caloric Budget
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

  // Daily Meals with Sequencing
  const [meals, setMeals] = useState<TodayMealItem[]>([
    {
      mealType: 'breakfast',
      name: 'Breakfast',
      calories: 450,
      proteinGrams: 35,
      carbGrams: 28,
      fatGrams: 16,
      guidance: '1. Protein & Healthy Fats first to blunt dawn cortisol spike. 2. Fiber second. 3. Sourdough carbs last.',
      suggestedDish: 'Pasture-Raised Eggs with Avocado & Sourdough',
      ingredients: ['3 organic pasture eggs', '1/2 Hass avocado', '1 slice artisanal sourdough', '1 cup baby spinach wilted in ghee'],
      isLogged: true,
    },
    {
      mealType: 'lunch',
      name: 'Lunch',
      calories: 650,
      proteinGrams: 52,
      carbGrams: 46,
      fatGrams: 22,
      guidance: '1. Steamed greens & olive oil first to coat gut mucosa with fiber mesh. 2. Salmon protein second. 3. Quinoa last.',
      suggestedDish: 'Wild Sockeye Salmon with Quinoa & Steamed Greens',
      ingredients: ['180g wild sockeye salmon fillet', '3/4 cup cooked organic tri-color quinoa', '1.5 cups steamed broccoli and bok choy', '1 tbsp extra virgin olive oil drizzle'],
      isLogged: true,
    },
    {
      mealType: 'dinner',
      name: 'Dinner',
      calories: 550,
      proteinGrams: 44,
      carbGrams: 38,
      fatGrams: 18,
      guidance: '1. Leafy salad & apple cider vinegar first. 2. Grass-fed steak or tofu second. 3. Roasted sweet potato last to support serotonin & deep REM sleep.',
      suggestedDish: 'Grass-Fed Beef with Roasted Sweet Potato & Asparagus',
      ingredients: ['160g grass-fed sirloin (or grilled organic tempeh)', '120g roasted sweet potato cubes', '8 spears roasted asparagus with sea salt', 'Mixed herb green salad with lemon dressing'],
      isLogged: false,
    },
  ]);

  // Daily Habits & Vitals State
  const [habits, setHabits] = useState({
    walkSteps: 5420,
    walkMinutes: 38,
    walkUnit: 'steps' as 'steps' | 'minutes',
    sleepHours: 7.2,
    waterLiters: 2.1,
    waterUnit: 'liters' as 'liters' | 'glasses',
    exerciseMinutes: 20,
    sunlightMinutes: 15,
  });

  // Habit Logging Modal State
  const [activeHabitModal, setActiveHabitModal] = useState<HabitType | null>(null);

  // Targeted Daily Health Tasks
  const [tasks, setTasks] = useState<DailyHealthTask[]>([
    {
      id: 'task-1',
      title: 'Morning Circadian Hydration with Mineral Salt',
      category: 'hydration',
      targetTiming: '5 min • Morning',
      clinicalRationale: 'Re-establishes cellular osmolarity, activates adrenal medulla aldosterone balance, and triggers peristaltic gut clearance.',
      targetsDisease: 'SIBO / Electrolyte Imbalance',
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
  const [initialMealLogMode, setInitialMealLogMode] = useState<'scan' | 'manual' | 'ask_ai'>('scan');
  const [isNightlyOpen, setIsNightlyOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [activeExpandedMeal, setActiveExpandedMeal] = useState<'breakfast' | 'lunch' | 'dinner'>('dinner');
  const [oneTapToast, setOneTapToast] = useState<string | null>(null);

  // Homeostasis Calculation
  const totalItems = meals.length + tasks.length + 1;
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

  const handleOpenMealModal = (meal: MealPortion, mode: 'scan' | 'manual' | 'ask_ai') => {
    setActiveLogMeal(meal);
    setInitialMealLogMode(mode);
  };

  const handleHabitSave = (type: HabitType, newVal: number) => {
    setHabits((prev) => {
      if (type === 'walk') return { ...prev, walkSteps: newVal };
      if (type === 'sleep') return { ...prev, sleepHours: newVal };
      if (type === 'water') return { ...prev, waterLiters: newVal };
      if (type === 'exercise') return { ...prev, exerciseMinutes: newVal };
      if (type === 'sunlight') return { ...prev, sunlightMinutes: newVal };
      return prev;
    });
    setOneTapToast(`✅ Saved ${type.toUpperCase()} log!`);
    setTimeout(() => setOneTapToast(null), 2500);
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isCompleted: true } : t))
    );
  };

  const handleConfirmMeal = (
    mealType: 'breakfast' | 'lunch' | 'dinner',
    loggedCalories: number,
    loggedP: number,
    loggedC: number,
    loggedF: number
  ) => {
    setMeals((prev) =>
      prev.map((m) => (m.mealType === mealType ? { ...m, isLogged: true } : m))
    );
    setBudget((prev) => ({
      ...prev,
      consumedCalories: prev.consumedCalories + loggedCalories,
      consumedProtein: prev.consumedProtein + loggedP,
      consumedCarbs: prev.consumedCarbs + loggedC,
      consumedFats: prev.consumedFats + loggedF,
    }));
    setActiveLogMeal(null);
    setOneTapToast(`✅ ${mealType.toUpperCase()} locked with 100% precision!`);
    setTimeout(() => setOneTapToast(null), 3000);
  };

  const caloriesRemaining = Math.max(0, budget.targetCalories - budget.consumedCalories);

  // Theme helper classes for 100% crisp light/dark visibility
  const cardCls = darkMode ? 'bg-[#0E1318] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const btnSecCls = darkMode 
    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' 
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 font-bold';

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-8 animate-fadeIn">
      {/* 1. TOP HEADER */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        {/* Profile Avatar -> Opens YOU */}
        <button
          onClick={onOpenYou}
          className={`flex items-center gap-2 p-1.5 rounded-full border transition-all active:scale-95 ${
            darkMode
              ? 'bg-slate-900 border-slate-700 hover:border-[#00FF9D] text-slate-200'
              : 'bg-slate-100 border-slate-200 hover:border-emerald-500 text-slate-800'
          }`}
          title="Open YOU"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs">
            AJ
          </div>
          <span className="text-[11px] font-bold pr-1.5 uppercase tracking-wider text-slate-400">
            YOU
          </span>
        </button>
      </div>

      {/* 2. CURRENT DAY, FULL DATE & TRIAL COUNTDOWN BANNER */}
      <div className={`p-3.5 rounded-2xl border ${cardCls} flex items-center justify-between`}>
        <div>
          <div className="flex items-center gap-2">
            <h2 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              {fullCalendarDate}
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#00FF9D] border border-emerald-500/30 font-bold">
              Active
            </span>
          </div>
          <p className={`text-[11px] ${textSub} mt-0.5 font-medium`}>{momentumLabel}</p>
        </div>

        <div className="text-right">
          <span className="text-[9px] uppercase font-bold text-amber-500 dark:text-amber-400 block tracking-widest">
            Trial Clock
          </span>
          <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-300">
            {trialCountdown}
          </span>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {oneTapToast && (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
          {oneTapToast}
        </div>
      )}

      {/* 3. LIVING HOMEOSTASIS PROGRESS RING & METABOLIC STATE */}
      <div className={`p-4 rounded-3xl border transition-all ${
        isAllComplete
          ? 'border-[#00FF9D] bg-emerald-950/20 shadow-[0_0_30px_rgba(0,255,157,0.15)]'
          : cardCls
      } flex items-center justify-between`}>
        {/* Ring Left */}
        <div className="space-y-1 max-w-[62%]">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold">
            Homeostasis Engine
          </span>
          <h3 className={`text-base font-black tracking-tight ${textTitle}`}>
            {isAllComplete ? 'Day 14 Conquered! 🔥' : 'Day 14 in Progress'}
          </h3>
          <p className={`text-xs ${textSub} leading-snug font-medium`}>
            {completedMeals}/3 Meals Logged • {completedTasks}/3 Tasks Done
          </p>

          {/* Metabolic State Badge */}
          <div className="pt-1.5">
            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00FF9D] animate-ping" />
              Stable Glucose Arc • 0 Crashes
            </span>
          </div>
        </div>

        {/* Circular Progress Gauge */}
        <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              className={darkMode ? 'stroke-slate-800' : 'stroke-slate-200'}
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-[#00FF9D] transition-all duration-700 ease-out"
              strokeWidth="8"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * progressPercent) / 100}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={`text-xl font-black ${textTitle}`}>{progressPercent}%</span>
            <span className={`text-[8px] uppercase tracking-widest ${textSub} font-mono font-bold`}>
              Homeostasis
            </span>
          </div>
        </div>
      </div>

      {/* 4. DAILY PORTION BUDGET METER */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textSub}`}>
              Daily Portion Budget
            </span>
            <div className={`text-xs font-bold ${textTitle}`}>
              {budget.consumedCalories} / {budget.targetCalories} kcal
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-[#00FF9D] font-mono">
              {caloriesRemaining} kcal remaining
            </span>
          </div>
        </div>

        {/* 5-Macro Precision Bars */}
        <div className="grid grid-cols-5 gap-1.5 text-center pt-1">
          {/* Protein */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Protein</div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedProtein / budget.targetProtein) * 100)}%` }}
              />
            </div>
            <div className={`text-[10px] font-mono font-bold ${textTitle}`}>{budget.consumedProtein}g</div>
          </div>

          {/* Carbs */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">Carbs</div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 dark:bg-amber-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedCarbs / budget.targetCarbs) * 100)}%` }}
              />
            </div>
            <div className={`text-[10px] font-mono font-bold ${textTitle}`}>{budget.consumedCarbs}g</div>
          </div>

          {/* Fats */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase">Fats</div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500 dark:bg-sky-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedFats / budget.targetFats) * 100)}%` }}
              />
            </div>
            <div className={`text-[10px] font-mono font-bold ${textTitle}`}>{budget.consumedFats}g</div>
          </div>

          {/* Fiber */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase">Fiber</div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 dark:bg-teal-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedFiber / budget.targetFiber) * 100)}%` }}
              />
            </div>
            <div className={`text-[10px] font-mono font-bold ${textTitle}`}>{budget.consumedFiber}g</div>
          </div>

          {/* Water */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Water</div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (budget.consumedWaterL / budget.targetWaterL) * 100)}%` }}
              />
            </div>
            <div className={`text-[10px] font-mono font-bold ${textTitle}`}>{budget.consumedWaterL}L</div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. SECTION 1: FOOD LOG (DIET SEQUENCING - BREAKFAST | LUNCH | DINNER) */}
      {/* ========================================================================= */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between px-1">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              LOG 1 OF 3
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Diet Food Log (Sequenced)
            </h3>
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Food Sequencing = -38% Spikes</span>
        </div>

        {meals.map((meal) => {
          const isExpanded = activeExpandedMeal === meal.mealType;
          return (
            <div
              key={meal.mealType}
              className={`rounded-2xl border transition-all ${
                meal.isLogged
                  ? darkMode ? 'border-slate-800/80 bg-slate-900/40 opacity-90' : 'border-slate-200 bg-slate-50/70'
                  : isExpanded
                  ? darkMode ? 'border-[#00FF9D]/60 bg-[#0E1318] shadow-[0_0_20px_rgba(0,255,157,0.08)]' : 'border-emerald-500 bg-white shadow-md'
                  : cardCls
              }`}
            >
              {/* Card Header */}
              <div className={`p-3.5 flex items-center justify-between border-b ${darkMode ? 'border-slate-800/60' : 'border-slate-200'}`}>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                      meal.isLogged
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40'
                        : darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {meal.isLogged ? '✓' : meal.mealType === 'breakfast' ? '🌅' : meal.mealType === 'lunch' ? '☀️' : '🌙'}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
                        {meal.mealType}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-[#00FF9D]">
                        {meal.calories} kcal
                      </span>
                      {meal.isLogged && (
                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          Logged ✓
                        </span>
                      )}
                    </div>
                    <div className={`text-xs font-bold truncate mt-0.5 ${textTitle}`}>
                      {meal.suggestedDish}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveExpandedMeal(isExpanded ? (null as any) : meal.mealType)}
                  className={`text-xs font-mono p-1 font-bold ${textSub}`}
                >
                  {isExpanded ? 'Hide Details ▲' : 'Details ▼'}
                </button>
              </div>

              {/* Expanded details (Ingredients & Sequencing) */}
              {isExpanded && (
                <div className={`px-3.5 py-2.5 border-b ${darkMode ? 'bg-slate-900/40 border-slate-800/60' : 'bg-slate-50 border-slate-200'} space-y-2 text-xs`}>
                  <div className={`p-2 rounded-xl border ${subBoxCls} text-[11px]`}>
                    <span className="font-bold text-emerald-600 dark:text-[#00FF9D] uppercase block mb-0.5">
                      🥗 Sequencing Order:
                    </span>
                    {meal.guidance}
                  </div>
                  <div className={`text-[11px] ${textSub}`}>
                    <span className={`font-bold ${textTitle}`}>Ingredients: </span>
                    {meal.ingredients.join(' • ')}
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS: SCAN | MANUAL | ASK AI */}
              <div className="p-3 space-y-2">
                {!meal.isLogged ? (
                  <>
                    <div className="grid grid-cols-3 gap-2">
                      {/* SCAN BUTTON */}
                      <button
                        onClick={() => handleOpenMealModal(meal, 'scan')}
                        className={`py-3 px-2 rounded-xl border active:scale-95 transition-all flex flex-col items-center justify-center gap-1 shadow-sm ${btnSecCls}`}
                      >
                        <span className="text-base">📷</span>
                        <span className="text-[11px] font-black uppercase tracking-wider">
                          Scan
                        </span>
                      </button>

                      {/* MANUAL BUTTON */}
                      <button
                        onClick={() => handleOpenMealModal(meal, 'manual')}
                        className={`py-3 px-2 rounded-xl border active:scale-95 transition-all flex flex-col items-center justify-center gap-1 shadow-sm ${btnSecCls}`}
                      >
                        <span className="text-base">✍️</span>
                        <span className="text-[11px] font-black uppercase tracking-wider">
                          Manual
                        </span>
                      </button>

                      {/* ASK AI BUTTON */}
                      <button
                        onClick={() => handleOpenMealModal(meal, 'ask_ai')}
                        className={`py-3 px-2 rounded-xl border active:scale-95 transition-all flex flex-col items-center justify-center gap-1 shadow-sm ${
                          darkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-[#00FF9D]' : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-700'
                        }`}
                      >
                        <span className="text-base">🤖</span>
                        <span className="text-[11px] font-black uppercase tracking-wider">
                          Ask AI
                        </span>
                      </button>
                    </div>

                    {/* 1-Tap Log As Planned */}
                    <button
                      onClick={() => handleOneTapLogPlanned(meal.mealType)}
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                    >
                      <span>⚡ 1-Tap Log: Ate As Planned</span>
                    </button>
                  </>
                ) : (
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">✅ Logged with 100% Precision</span>
                    <button
                      onClick={() => handleOpenMealModal(meal, 'scan')}
                      className={`text-[11px] font-bold ${textSub} hover:underline`}
                    >
                      Re-log
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 6. SECTION 2: DAILY HABIT & VITALS LOG (METERS & MANUAL LOGGING) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3.5`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              LOG 2 OF 3
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Daily Habits & Vitals Log
            </h3>
          </div>
          <span className={`text-[10px] ${textSub} font-mono`}>Hit Daily Targets</span>
        </div>

        {/* 1. WALK METER */}
        <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚶</span>
              <div>
                <div className={`text-xs font-bold ${textTitle}`}>Daily Walk</div>
                <div className={`text-[10px] ${textSub}`}>
                  Target: {habits.walkUnit === 'steps' ? '8,000 steps' : '45 minutes'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setHabits((prev) => ({
                    ...prev,
                    walkUnit: prev.walkUnit === 'steps' ? 'minutes' : 'steps',
                  }))
                }
                className={`py-1 px-2 rounded-lg text-[10px] font-mono border ${btnSecCls}`}
              >
                {habits.walkUnit === 'steps' ? 'Steps' : 'Mins'} ⇄
              </button>
              <button
                onClick={() => setActiveHabitModal('walk')}
                className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
              >
                ✍️ Log
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className={`font-mono font-bold ${textTitle}`}>
                {habits.walkUnit === 'steps' ? `${habits.walkSteps} / 8,000 steps` : `${habits.walkMinutes} / 45 mins`}
              </span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {habits.walkUnit === 'steps'
                  ? `${Math.round((habits.walkSteps / 8000) * 100)}%`
                  : `${Math.round((habits.walkMinutes / 45) * 100)}%`}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 dark:bg-[#00FF9D] rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    habits.walkUnit === 'steps'
                      ? (habits.walkSteps / 8000) * 100
                      : (habits.walkMinutes / 45) * 100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 2. SLEEP METER */}
        <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌙</span>
              <div>
                <div className={`text-xs font-bold ${textTitle}`}>Night Sleep Window</div>
                <div className={`text-[10px] ${textSub}`}>Target: 8.0 hours restorative</div>
              </div>
            </div>

            <button
              onClick={() => setActiveHabitModal('sleep')}
              className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
            >
              ✍️ Log
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className={`font-mono font-bold ${textTitle}`}>
                {habits.sleepHours} / 8.0 hours
              </span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                {Math.round((habits.sleepHours / 8.0) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (habits.sleepHours / 8.0) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* 3. WATER HYDRATION METER */}
        <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">💧</span>
              <div>
                <div className={`text-xs font-bold ${textTitle}`}>Water Hydration</div>
                <div className={`text-[10px] ${textSub}`}>
                  Target: {habits.waterUnit === 'liters' ? '3.0 Liters' : '12 Glasses'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setHabits((prev) => ({
                    ...prev,
                    waterUnit: prev.waterUnit === 'liters' ? 'glasses' : 'liters',
                  }))
                }
                className={`py-1 px-2 rounded-lg text-[10px] font-mono border ${btnSecCls}`}
              >
                {habits.waterUnit === 'liters' ? 'Liters' : 'Glasses'} ⇄
              </button>
              <button
                onClick={() => setActiveHabitModal('water')}
                className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
              >
                ✍️ Log
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className={`font-mono font-bold ${textTitle}`}>
                {habits.waterUnit === 'liters'
                  ? `${habits.waterLiters} / 3.0 Liters`
                  : `${Math.round(habits.waterLiters * 4)} / 12 Glasses`}
              </span>
              <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">
                {Math.round((habits.waterLiters / 3.0) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500 dark:bg-sky-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (habits.waterLiters / 3.0) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4. EXERCISE & WORKOUT METER */}
        <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">💪</span>
              <div>
                <div className={`text-xs font-bold ${textTitle}`}>Exercise & Training</div>
                <div className={`text-[10px] ${textSub}`}>Target: 30 minutes</div>
              </div>
            </div>

            <button
              onClick={() => setActiveHabitModal('exercise')}
              className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
            >
              ✍️ Log
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className={`font-mono font-bold ${textTitle}`}>
                {habits.exerciseMinutes} / 30 mins
              </span>
              <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
                {Math.round((habits.exerciseMinutes / 30) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 dark:bg-amber-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (habits.exerciseMinutes / 30) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* 5. SUNLIGHT / OUTDOOR CIRCADIAN RESET */}
        <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">☀️</span>
              <div>
                <div className={`text-xs font-bold ${textTitle}`}>Morning Sunlight & Air</div>
                <div className={`text-[10px] ${textSub}`}>Target: 15 minutes retinal photon reset</div>
              </div>
            </div>

            <button
              onClick={() => setActiveHabitModal('sunlight')}
              className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
            >
              ✍️ Log
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className={`font-mono font-bold ${textTitle}`}>
                {habits.sunlightMinutes} / 15 mins
              </span>
              <span className="font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
                {Math.round((habits.sunlightMinutes / 15) * 100)}% (Goal Hit! 🔥)
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 dark:bg-[#00FF9D] rounded-full transition-all"
                style={{ width: `${Math.min(100, (habits.sunlightMinutes / 15) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. SECTION 3: TARGETED HEALING TASKS (SwipeToComplete) */}
      {/* ========================================================================= */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between px-1">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              LOG 3 OF 3
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Targeted Healing Tasks
            </h3>
          </div>
          <span className={`text-[10px] ${textSub} font-mono`}>Swipe to complete</span>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3.5 rounded-2xl border transition-all ${
                task.isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/5'
                  : cardCls
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className={`text-xs font-bold flex items-center gap-1.5 ${textTitle}`}>
                  <span>{task.isCompleted ? '✅' : '🎯'}</span>
                  <span>{task.title}</span>
                </div>
                <span className={`text-[10px] font-mono ${textSub}`}>
                  {task.targetTiming}
                </span>
              </div>

              <p className={`text-[11px] ${textSub} leading-relaxed mb-3`}>
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
          className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between text-left active:scale-98 ${
            darkMode
              ? 'border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent hover:border-amber-500/70'
              : 'border-amber-400 bg-amber-50/80 hover:bg-amber-100/80 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🆘</span>
            <div>
              <div className="text-xs font-bold text-amber-700 dark:text-amber-300">
                Bloated / Overate / Craving Something?
              </div>
              <div className={`text-[11px] ${textSub}`}>
                Tap for instant 2-minute zero-guilt clinical fix
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">Rescue →</span>
        </button>
      </div>

      {/* 9. TODAY'S THAIS DAILY SUGGESTION & CLINICAL NOTE */}
      <div className={`p-4 rounded-2xl border ${
        darkMode ? 'bg-gradient-to-br from-slate-900 to-[#0B1015] border-slate-800 text-slate-300' : 'bg-emerald-50/60 border-emerald-200 text-slate-800 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base">💡</span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#00FF9D]">
            Today's THAIS Clinical Note (Day 14)
          </span>
        </div>
        <p className="text-xs leading-relaxed font-medium">
          Your liver glycogen stores have depleted over the past 72 hours, meaning your cells are now directly accessing visceral fat for fuel. If you experience a mild salt craving around 4 PM, have a pinch of rock salt in warm water—it immediately balances your adrenal cortisol without breaking fat oxidation.
        </p>
      </div>

      {/* 10. 60-SECOND BEDTIME REFLECTION BUTTON */}
      <div className="pt-1">
        <button
          onClick={() => setIsNightlyOpen(true)}
          className={`w-full py-3.5 px-4 rounded-2xl border transition-all flex items-center justify-between text-left active:scale-98 shadow-sm ${
            darkMode
              ? 'border-indigo-500/40 bg-gradient-to-r from-indigo-500/15 via-indigo-500/10 to-transparent hover:border-indigo-500/70 text-indigo-200'
              : 'border-indigo-300 bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-950'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🌙</span>
            <div>
              <div className="text-xs font-bold">
                60-Second Bedtime Reflection
              </div>
              <div className={`text-[10px] ${textSub}`}>
                Reconcile today & calibrate tomorrow's biological plan
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 font-mono">Start →</span>
        </button>
      </div>

      {/* MODALS */}
      {activeLogMeal && (
        <MealLogModal
          isOpen={!!activeLogMeal}
          meal={activeLogMeal}
          initialMode={initialMealLogMode}
          onClose={() => setActiveLogMeal(null)}
          onConfirmMeal={handleConfirmMeal}
        />
      )}

      {activeHabitModal && (
        <HabitLogModal
          isOpen={!!activeHabitModal}
          onClose={() => setActiveHabitModal(null)}
          habitType={activeHabitModal}
          currentValue={
            activeHabitModal === 'walk'
              ? habits.walkSteps
              : activeHabitModal === 'sleep'
              ? habits.sleepHours
              : activeHabitModal === 'water'
              ? habits.waterLiters
              : activeHabitModal === 'exercise'
              ? habits.exerciseMinutes
              : habits.sunlightMinutes
          }
          onSave={handleHabitSave}
          darkMode={darkMode}
        />
      )}

      <NightlyCheckInModal
        isOpen={isNightlyOpen}
        tasks={tasks}
        onClose={() => setIsNightlyOpen(false)}
        onSubmitCheckIn={(_reconciledTasks, _reflection) => {
          setOneTapToast('🌙 Nightly reflection recorded! Overnight biological adaptation active.');
          setTimeout(() => setOneTapToast(null), 4000);
        }}
      />

      <SosRescueModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
        onApplyPlanAdjustment={(_note) => {
          setOneTapToast('🛡️ SOS Clinical Rescue active! 7-day budget preserved.');
          setTimeout(() => setOneTapToast(null), 4000);
        }}
      />
    </div>
  );
};
