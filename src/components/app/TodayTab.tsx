import React, { useState, useEffect } from 'react';
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
  onToggleTheme?: () => void;
  onOpenPaywall?: () => void;
  isPaidMember?: boolean;
}

export interface TodayMealItem extends MealPortion {
  isLogged: boolean;
}

export const TodayTab: React.FC<TodayTabProps> = ({
  onOpenYou,
  darkMode = true,
  onToggleTheme,
  onOpenPaywall,
  isPaidMember = false,
}) => {
  // Calendar & Day Meta
  const fullCalendarDate = 'Sunday, August 30, 2026';
  const momentumLabel = 'Day 14 of 90 • High Momentum 🔥';

  // Live 3-Hour Free Access Timer Logic (Zero Loophole)
  const [trialTimeLeft, setTrialTimeLeft] = useState<string>('03:00:00');
  const [isTrialExpired, setIsTrialExpired] = useState<boolean>(false);

  useEffect(() => {
    if (isPaidMember) return;

    const TRIAL_STORAGE_KEY = 'tovelu_trial_expires_at';
    let expiresAt: number;

    try {
      const stored = localStorage.getItem(TRIAL_STORAGE_KEY);
      if (stored) {
        expiresAt = parseInt(stored, 10);
      } else {
        // Initialize 3 hours from right now
        expiresAt = Date.now() + 3 * 60 * 60 * 1000;
        localStorage.setItem(TRIAL_STORAGE_KEY, expiresAt.toString());
      }
    } catch (_e) {
      expiresAt = Date.now() + 3 * 60 * 60 * 1000;
    }

    const updateCountdown = () => {
      const remainingMs = expiresAt - Date.now();
      if (remainingMs <= 0) {
        setTrialTimeLeft('00:00:00');
        setIsTrialExpired(true);
      } else {
        const totalSec = Math.floor(remainingMs / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        const formatted = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        setTrialTimeLeft(formatted);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [isPaidMember]);

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

  // Combined Chronological Daily Routine & Healing Tasks State
  const [sleepHours, setSleepHours] = useState(7.2);
  const [isMorningHydrationDone, setIsMorningHydrationDone] = useState(true);
  const [sunlightMins, setSunlightMins] = useState(15);
  const [isPostLunchWalkDone, setIsPostLunchWalkDone] = useState(true);
  const [waterLiters, setWaterLiters] = useState(2.1);
  const [waterUnit, setWaterUnit] = useState<'liters' | 'glasses'>('liters');
  const [exerciseMins, setExerciseMins] = useState(20);
  const [walkSteps, setWalkSteps] = useState(5420);
  const [walkUnit, setWalkUnit] = useState<'steps' | 'minutes'>('steps');
  const [isMagnesiumDone, setIsMagnesiumDone] = useState(false);

  // Modals state
  const [activeLogMeal, setActiveLogMeal] = useState<MealPortion | null>(null);
  const [initialMealLogMode, setInitialMealLogMode] = useState<'scan' | 'manual' | 'ask_ai'>('scan');
  const [activeHabitModal, setActiveHabitModal] = useState<HabitType | null>(null);
  const [isNightlyOpen, setIsNightlyOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [activeExpandedMeal, setActiveExpandedMeal] = useState<'breakfast' | 'lunch' | 'dinner'>('dinner');
  const [oneTapToast, setOneTapToast] = useState<string | null>(null);

  // Homeostasis Calculation (Meals + Routine Tasks)
  const totalTasksCount = 8;
  const completedTasksCount =
    (sleepHours >= 7.0 ? 1 : 0) +
    (isMorningHydrationDone ? 1 : 0) +
    (sunlightMins >= 15 ? 1 : 0) +
    (isPostLunchWalkDone ? 1 : 0) +
    (waterLiters >= 2.5 ? 1 : 0) +
    (exerciseMins >= 30 ? 1 : 0) +
    (walkSteps >= 8000 ? 1 : 0) +
    (isMagnesiumDone ? 1 : 0);

  const completedMeals = meals.filter((m) => m.isLogged).length;
  const progressPercent = Math.round(((completedMeals + completedTasksCount) / (meals.length + totalTasksCount)) * 100);
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
    if (type === 'walk') setWalkSteps(newVal);
    if (type === 'sleep') setSleepHours(newVal);
    if (type === 'water') {
      setWaterLiters(newVal);
      setBudget((prev) => ({ ...prev, consumedWaterL: newVal }));
    }
    if (type === 'exercise') setExerciseMins(newVal);
    if (type === 'sunlight') setSunlightMins(newVal);

    setOneTapToast(`✅ Saved ${type.toUpperCase()} log!`);
    setTimeout(() => setOneTapToast(null), 2500);
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

  // Quick helper for tasks for NightlyCheckInModal
  const dummyTasks: DailyHealthTask[] = [
    { id: '1', title: 'Sleep Window Audit', category: 'recovery', targetTiming: 'Morning', clinicalRationale: 'Cellular recovery', targetsDisease: 'Fatigue', isCompleted: sleepHours >= 7.0 },
    { id: '2', title: 'Circadian Hydration & Salt', category: 'hydration', targetTiming: 'Morning', clinicalRationale: 'Aldosterone balance', targetsDisease: 'Electrolyte imbalance', isCompleted: isMorningHydrationDone },
    { id: '3', title: 'Post-Lunch Glucose Walk', category: 'movement', targetTiming: 'Afternoon', clinicalRationale: 'GLUT4 activation', targetsDisease: 'Insulin resistance', isCompleted: isPostLunchWalkDone },
    { id: '4', title: 'Magnesium & Blue Light', category: 'recovery', targetTiming: 'Night', clinicalRationale: 'Melatonin protection', targetsDisease: 'Sleep latency', isCompleted: isMagnesiumDone },
  ];

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-8 animate-fadeIn">
      {/* 1. TOP HEADER */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        {/* Right side controls: Theme Toggle + Profile Avatar */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button (Sun ☀️ / Moon 🌙) */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-90 shadow-sm ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              <span className="text-sm">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          )}

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
      </div>

      {/* 2. CURRENT DAY, FULL DATE & TRIAL COUNTDOWN BANNER */}
      <div className={`p-3.5 rounded-2xl border ${cardCls} flex items-center justify-between`}>
        <div>
          <div className="flex items-center gap-2">
            <h2 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              {fullCalendarDate}
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#00FF9D] border border-emerald-500/30 font-bold">
              {isPaidMember ? 'Sovereign Active' : 'Trial Active'}
            </span>
          </div>
          <p className={`text-[11px] ${textSub} mt-0.5 font-medium`}>{momentumLabel}</p>
        </div>

        {isPaidMember ? (
          <div className="text-right">
            <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-[#00FF9D] block tracking-widest">
              Membership
            </span>
            <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-300">
              Active ✓
            </span>
          </div>
        ) : (
          <button
            onClick={onOpenPaywall}
            className={`text-right p-1.5 sm:p-2 rounded-xl border active:scale-95 transition-all ${
              isTrialExpired
                ? 'border-rose-500/50 bg-rose-500/10 text-rose-500 animate-pulse'
                : 'border-amber-500/30 hover:border-amber-500/60 bg-amber-500/10'
            }`}
            title="Upgrade to Full Sovereign Protocol"
          >
            <span className={`text-[9px] uppercase font-bold block tracking-widest ${
              isTrialExpired ? 'text-rose-500 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'
            }`}>
              {isTrialExpired ? '⚠️ Trial Expired' : `3-Hr Trial: ${trialTimeLeft}`}
            </span>
            <span className={`text-[11px] font-mono font-black underline ${
              isTrialExpired ? 'text-rose-600 dark:text-rose-300' : 'text-amber-700 dark:text-amber-300'
            }`}>
              {isTrialExpired ? 'Unlock Full Protocol →' : 'Unlock Full Plan →'}
            </span>
          </button>
        )}
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
            {completedMeals}/3 Meals Logged • {completedTasksCount}/{totalTasksCount} Tasks Done
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
      {/* 5. FOOD LOG (DIET SEQUENCING - BREAKFAST | LUNCH | DINNER) */}
      {/* ========================================================================= */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between px-1">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              FOOD LOG
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
      {/* 6. COMBINED CHRONOLOGICAL SECTION: DAILY ROUTINE & HEALING TASKS */}
      {/* (Morning to Night Sequence - Ajay's Mandate) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-4`}>
        <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              CHRONOLOGICAL TIMELINE
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Daily Routine & Healing Tasks
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
            {completedTasksCount} of {totalTasksCount} Done ({Math.round((completedTasksCount / totalTasksCount) * 100)}%)
          </span>
        </div>

        {/* ========================================== */}
        {/* PHASE 1: MORNING ROUTINE (Wake to 11 AM) */}
        {/* ========================================== */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-amber-600 dark:text-amber-400">
            <span>🌅</span>
            <span>Morning Routine (Wake to 11 AM)</span>
          </div>

          {/* Task 1: Sleep Log */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌙</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>1. Night Sleep Duration</div>
                  <div className={`text-[10px] ${textSub}`}>Target: 8.0 hrs restorative sleep</div>
                </div>
              </div>
              <button
                onClick={() => setActiveHabitModal('sleep')}
                className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
              >
                ✍️ Log Sleep
              </button>
            </div>

            {/* Quick in-card stepper & pills */}
            <div className="flex items-center justify-between pt-0.5">
              <span className={`text-xs font-mono font-bold ${textTitle}`}>
                Logged: <span className="text-emerald-600 dark:text-[#00FF9D] text-sm">{sleepHours} hrs</span>
              </span>
              <div className="flex items-center gap-1">
                {[6.5, 7.0, 7.5, 8.0, 8.5].map((h) => (
                  <button
                    key={h}
                    onClick={() => {
                      setSleepHours(h);
                      setOneTapToast(`🌙 Logged ${h} hrs sleep!`);
                      setTimeout(() => setOneTapToast(null), 2000);
                    }}
                    className={`py-0.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                      sleepHours === h
                        ? 'bg-[#00FF9D] text-slate-950 border-[#00FF9D]'
                        : darkMode
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    {h}h
                  </button>
                ))}
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (sleepHours / 8.0) * 100)}%` }}
              />
            </div>
          </div>

          {/* Task 2: Morning Hydration with Mineral Salt */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">💧</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>2. Mineral Hydration + Rock Salt</div>
                  <div className={`text-[10px] ${textSub}`}>Target: 500ml warm water with pink salt</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMorningHydrationDone(!isMorningHydrationDone);
                  setOneTapToast(!isMorningHydrationDone ? '💧 Morning mineral hydration logged!' : 'Reset hydration task');
                  setTimeout(() => setOneTapToast(null), 2500);
                }}
                className={`py-1 px-3 rounded-lg text-[11px] font-bold border transition-all active:scale-95 ${
                  isMorningHydrationDone
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                }`}
              >
                {isMorningHydrationDone ? 'Done ✓' : 'Log 500ml'}
              </button>
            </div>
            <p className={`text-[10px] ${textSub} leading-snug`}>
              Re-establishes cellular osmolarity and triggers adrenal aldosterone balance upon waking.
            </p>
          </div>

          {/* Task 3: Sunlight & Fresh Air */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">☀️</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>3. Morning Sunlight & Circadian Reset</div>
                  <div className={`text-[10px] ${textSub}`}>Target: 15 mins retinal photon exposure</div>
                </div>
              </div>
              <button
                onClick={() => setActiveHabitModal('sunlight')}
                className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
              >
                ✍️ Log Mins
              </button>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <span className={`text-xs font-mono font-bold ${textTitle}`}>
                Exposure: <span className="text-emerald-600 dark:text-[#00FF9D] text-sm">{sunlightMins} mins</span>
              </span>
              <div className="flex items-center gap-1">
                {[5, 10, 15, 20].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setSunlightMins(m);
                      setOneTapToast(`☀️ Logged ${m} mins morning sunlight!`);
                      setTimeout(() => setOneTapToast(null), 2000);
                    }}
                    className={`py-0.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                      sunlightMins === m
                        ? 'bg-[#00FF9D] text-slate-950 border-[#00FF9D]'
                        : darkMode
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 dark:bg-[#00FF9D] rounded-full transition-all"
                style={{ width: `${Math.min(100, (sunlightMins / 15) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PHASE 2: AFTERNOON ROUTINE (12 PM to 4 PM) */}
        {/* ========================================== */}
        <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-sky-600 dark:text-sky-400">
            <span>☀️</span>
            <span>Afternoon Routine (12 PM to 4 PM)</span>
          </div>

          {/* Task 4: Post-Lunch Walk */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🚶</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>4. Post-Lunch 10-Min Walk</div>
                  <div className={`text-[10px] ${textSub}`}>Soleus muscle contractions activate GLUT4</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsPostLunchWalkDone(!isPostLunchWalkDone);
                  setOneTapToast(!isPostLunchWalkDone ? '🚶 Post-lunch walk logged! Glucose blunted.' : 'Reset walk task');
                  setTimeout(() => setOneTapToast(null), 2500);
                }}
                className={`py-1 px-3 rounded-lg text-[11px] font-bold border transition-all active:scale-95 ${
                  isPostLunchWalkDone
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                }`}
              >
                {isPostLunchWalkDone ? 'Done ✓' : 'Log 10m'}
              </button>
            </div>
            <p className={`text-[10px] ${textSub} leading-snug`}>
              Absorbs circulating postprandial glucose into muscle cells independent of insulin (-38% spike).
            </p>
          </div>

          {/* Task 5: Daily Water Checkpoint */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">💧</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>5. Water Hydration Target</div>
                  <div className={`text-[10px] ${textSub}`}>
                    Target: {waterUnit === 'liters' ? '3.0 Liters' : '12 Glasses'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setWaterUnit(waterUnit === 'liters' ? 'glasses' : 'liters')}
                  className={`py-1 px-2 rounded-lg text-[10px] font-mono border ${btnSecCls}`}
                >
                  {waterUnit === 'liters' ? 'Liters' : 'Glasses'} ⇄
                </button>
                <button
                  onClick={() => setActiveHabitModal('water')}
                  className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
                >
                  ✍️ Log
                </button>
              </div>
            </div>

            {/* Quick 1-Tap Adders */}
            <div className="flex items-center justify-between pt-0.5">
              <span className={`text-xs font-mono font-bold ${textTitle}`}>
                {waterUnit === 'liters' ? `${waterLiters.toFixed(1)} / 3.0 L` : `${Math.round(waterLiters * 4)} / 12 Glasses`}
              </span>
              <div className="flex items-center gap-1">
                {[0.25, 0.5, 0.75].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      const newL = Number((waterLiters + amt).toFixed(2));
                      setWaterLiters(newL);
                      setBudget((prev) => ({ ...prev, consumedWaterL: newL }));
                      setOneTapToast(`💧 +${amt * 1000}ml water added!`);
                      setTimeout(() => setOneTapToast(null), 2000);
                    }}
                    className={`py-0.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                      darkMode
                        ? 'bg-slate-800 text-sky-300 border-slate-700 hover:border-sky-400'
                        : 'bg-sky-50 text-sky-800 border-sky-200 hover:border-sky-400'
                    }`}
                  >
                    +{amt * 1000}ml
                  </button>
                ))}
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500 dark:bg-sky-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (waterLiters / 3.0) * 100)}%` }}
              />
            </div>
          </div>

          {/* Task 6: Daily Exercise & Movement */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">💪</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>6. Exercise & Training Session</div>
                  <div className={`text-[10px] ${textSub}`}>Target: 30 minutes training</div>
                </div>
              </div>
              <button
                onClick={() => setActiveHabitModal('exercise')}
                className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
              >
                ✍️ Log Mins
              </button>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <span className={`text-xs font-mono font-bold ${textTitle}`}>
                Workout: <span className="text-amber-600 dark:text-amber-400 text-sm">{exerciseMins} / 30 mins</span>
              </span>
              <div className="flex items-center gap-1">
                {[15, 30, 45, 60].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setExerciseMins(m);
                      setOneTapToast(`💪 Logged ${m} mins exercise!`);
                      setTimeout(() => setOneTapToast(null), 2000);
                    }}
                    className={`py-0.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                      exerciseMins === m
                        ? 'bg-[#00FF9D] text-slate-950 border-[#00FF9D]'
                        : darkMode
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 dark:bg-amber-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (exerciseMins / 30) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PHASE 3: EVENING ROUTINE (5 PM to 8 PM) */}
        {/* ========================================== */}
        <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            <span>🌇</span>
            <span>Evening Routine (5 PM to 8 PM)</span>
          </div>

          {/* Task 7: Daily Steps Audit */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🚶</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>7. Daily Walk & Step Target</div>
                  <div className={`text-[10px] ${textSub}`}>
                    Target: {walkUnit === 'steps' ? '8,000 steps' : '45 minutes'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setWalkUnit(walkUnit === 'steps' ? 'minutes' : 'steps')}
                  className={`py-1 px-2 rounded-lg text-[10px] font-mono border ${btnSecCls}`}
                >
                  {walkUnit === 'steps' ? 'Steps' : 'Mins'} ⇄
                </button>
                <button
                  onClick={() => setActiveHabitModal('walk')}
                  className="py-1 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] text-[11px] font-bold border border-emerald-500/40 active:scale-95 transition-all"
                >
                  ✍️ Log
                </button>
              </div>
            </div>

            {/* Quick Step Adders */}
            <div className="flex items-center justify-between pt-0.5">
              <span className={`text-xs font-mono font-bold ${textTitle}`}>
                {walkUnit === 'steps' ? `${walkSteps.toLocaleString()} / 8,000 steps` : `${Math.round(walkSteps / 120)} / 45 mins`}
              </span>
              <div className="flex items-center gap-1">
                {[1000, 2000, 3000].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setWalkSteps((prev) => prev + s);
                      setOneTapToast(`🚶 +${s.toLocaleString()} steps added!`);
                      setTimeout(() => setOneTapToast(null), 2000);
                    }}
                    className={`py-0.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                      darkMode
                        ? 'bg-slate-800 text-emerald-300 border-slate-700 hover:border-emerald-500'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400'
                    }`}
                  >
                    +{s}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 dark:bg-[#00FF9D] rounded-full transition-all"
                style={{ width: `${Math.min(100, (walkSteps / 8000) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PHASE 4: NIGHT ROUTINE (8:30 PM to Bedtime) */}
        {/* ========================================== */}
        <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            <span>🌙</span>
            <span>Night Routine (8:30 PM to Bedtime)</span>
          </div>

          {/* Task 8: Magnesium & Blue Light Cutoff */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-2.5`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">💤</span>
                <div>
                  <div className={`text-xs font-bold ${textTitle}`}>8. Magnesium Glycinate & Blue Light Cutoff</div>
                  <div className={`text-[10px] ${textSub}`}>Target: 5 min wind-down • Pineal protection</div>
                </div>
              </div>
            </div>

            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Reduces neuro-muscular hyper-excitability and prevents pineal melatonin suppression before deep slow-wave sleep.
            </p>

            <SwipeToComplete
              label="Swipe to Lock Evening Protocol"
              completedLabel="Protocol Locked • Melatonin Protected"
              isCompleted={isMagnesiumDone}
              onComplete={() => {
                setIsMagnesiumDone(true);
                setOneTapToast('🌙 Evening protocol locked! Deep slow-wave sleep primed.');
                setTimeout(() => setOneTapToast(null), 3000);
              }}
            />
          </div>
        </div>
      </div>

      {/* 7. EMERGENCY SOS RESCUE BUTTON */}
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

      {/* 8. TODAY'S THAIS DAILY SUGGESTION & CLINICAL NOTE */}
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

      {/* 9. 60-SECOND BEDTIME REFLECTION BUTTON */}
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
              ? walkSteps
              : activeHabitModal === 'sleep'
              ? sleepHours
              : activeHabitModal === 'water'
              ? waterLiters
              : activeHabitModal === 'exercise'
              ? exerciseMins
              : sunlightMins
          }
          onSave={handleHabitSave}
          darkMode={darkMode}
        />
      )}

      <NightlyCheckInModal
        isOpen={isNightlyOpen}
        tasks={dummyTasks}
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
