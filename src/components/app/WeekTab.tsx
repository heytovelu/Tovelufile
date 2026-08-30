import React, { useState } from 'react';
import { PlanYourWeekModal } from './PlanYourWeekModal';
import { MedicalReportModal } from '../thais/MedicalReportModal';
import { CreateGroceryModal } from './CreateGroceryModal';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface WeekTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
  onToggleTheme?: () => void;
}

export const WeekTab: React.FC<WeekTabProps> = ({
  onOpenYou,
  darkMode = true,
  onToggleTheme,
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0); // 0 = Mon
  const [isPlanWeekOpen, setIsPlanWeekOpen] = useState(false);
  const [isDoctorReportOpen, setIsDoctorReportOpen] = useState(false);
  const [isGroceryModalOpen, setIsGroceryModalOpen] = useState(false);
  const [weekToast, setWeekToast] = useState<string | null>(null);
  const [doctorEventBanner, setDoctorEventBanner] = useState<string | null>(null);

  // 7-day momentum arc
  const days = [
    { name: 'Mon', date: 'Aug 24', status: 'completed', score: 98, tag: 'Standard Day' },
    { name: 'Tue', date: 'Aug 25', status: 'completed', score: 100, tag: 'Standard Day' },
    { name: 'Wed', date: 'Aug 26', status: 'completed', score: 94, tag: 'Late Meeting' },
    { name: 'Thu', date: 'Aug 27', status: 'completed', score: 96, tag: 'Standard Day' },
    { name: 'Fri', date: 'Aug 28', status: 'completed', score: 92, tag: 'Dining Out' },
    { name: 'Sat', date: 'Aug 29', status: 'completed', score: 95, tag: 'Travel Day' },
    { name: 'Sun', date: 'Aug 30', status: 'today', score: 75, tag: 'Batch Prep Today' },
  ];

  const selectedDay = days[selectedDayIndex];

  // Theme helper classes for 100% crisp light/dark visibility
  const cardCls = darkMode ? 'bg-[#0E1318] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

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

      {/* 2. WEEK TITLE & CLINICAL PHASE BANNER */}
      <div className={`p-4 rounded-2xl border ${
        darkMode ? 'bg-gradient-to-r from-emerald-950/30 via-slate-900 to-[#0E1318] border-emerald-500/30' : 'bg-emerald-50/70 border-emerald-200 shadow-sm'
      } space-y-1`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
            Week 2 of 12 Strategy
          </span>
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
            Aug 24 – Aug 30
          </span>
        </div>
        <h2 className={`text-sm font-black tracking-tight ${textTitle}`}>
          Clinical Phase: Visceral Fat Access & Glycogen Depletion
        </h2>
        <p className={`text-xs ${textSub} leading-relaxed font-medium`}>
          Your 7-day cumulative calorie deficit is on track at -3,500 kcal (approx. 0.45 kg pure fat loss). Zero muscle loss detected.
        </p>
      </div>

      {/* 3. SCHEDULE CALIBRATOR TRIGGER BUTTONS */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Plan Your Week Button */}
        <button
          onClick={() => setIsPlanWeekOpen(true)}
          className={`p-3 rounded-2xl border transition-all flex flex-col items-start gap-1 text-left active:scale-98 shadow-sm ${
            darkMode
              ? 'border-emerald-500/40 bg-slate-900 hover:border-[#00FF9D]'
              : 'border-emerald-300 bg-white hover:border-emerald-500'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-lg">🗓️</span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Plan Your Week</span>
          </div>
          <p className={`text-[10px] ${textSub} leading-tight`}>
            Calibrate routine 24/7 (Travel, Events, Work)
          </p>
        </button>

        {/* Doctor Report Button */}
        <button
          onClick={() => setIsDoctorReportOpen(true)}
          className={`p-3 rounded-2xl border transition-all flex flex-col items-start gap-1 text-left active:scale-98 shadow-sm ${
            darkMode
              ? 'border-sky-500/40 bg-slate-900 hover:border-sky-400'
              : 'border-sky-300 bg-white hover:border-sky-500'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-lg">📄</span>
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300">Doctor Report</span>
          </div>
          <p className={`text-[10px] ${textSub} leading-tight`}>
            Upload prescription & auto-adapt week
          </p>
        </button>
      </div>

      {/* DOCTOR ADAPTATION BANNER */}
      {doctorEventBanner && (
        <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-500/40 text-xs text-sky-800 dark:text-sky-200">
          <span className="font-bold block mb-0.5">🩺 Acute Plan Adaptation Active:</span>
          {doctorEventBanner}
        </div>
      )}

      {/* TOAST */}
      {weekToast && (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
          {weekToast}
        </div>
      )}

      {/* 4. 7-DAY VISUAL MOMENTUM ARC */}
      <div className={`p-4 rounded-2xl border ${cardCls}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textSub}`}>
              7-Day Momentum Arc
            </span>
            <div className={`text-xs font-bold ${textTitle}`}>
              5 of 7 Days Conquered • <span className="text-emerald-600 dark:text-[#00FF9D]">Top 5% Consistency</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
            🔥 14 Streak
          </span>
        </div>

        {/* 7 Daily Rings Strip */}
        <div className="grid grid-cols-7 gap-1 pt-1 text-center">
          {days.map((d, index) => {
            const isSelected = selectedDayIndex === index;
            const isCompleted = d.status === 'completed';
            const isToday = d.status === 'today';

            return (
              <button
                key={d.name}
                onClick={() => setSelectedDayIndex(index)}
                className={`py-2 px-1 rounded-xl border transition-all flex flex-col items-center gap-1 active:scale-95 ${
                  isSelected
                    ? 'border-[#00FF9D] bg-emerald-500/15 shadow-[0_0_10px_rgba(0,255,157,0.25)]'
                    : darkMode ? 'border-slate-800 bg-slate-900/50 hover:border-slate-700' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] font-bold ${isSelected ? 'text-emerald-600 dark:text-[#00FF9D]' : textSub}`}>{d.name}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isCompleted
                      ? 'bg-emerald-500/20 text-emerald-600 dark:text-[#00FF9D] border border-emerald-500/50'
                      : isToday
                      ? 'bg-amber-400/20 text-amber-600 dark:text-amber-300 border border-amber-400/50 animate-pulse'
                      : darkMode ? 'bg-slate-800 text-slate-500 border border-slate-700' : 'bg-slate-200 text-slate-500 border border-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : isToday ? '75%' : '○'}
                </div>
                <span className={`text-[9px] font-mono ${textSub}`}>{d.date.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. INSPECTED DAY BREAKDOWN */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${textTitle}`}>
              {selectedDay.name} Schedule ({selectedDay.date})
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300'
            }`}>
              {selectedDay.tag}
            </span>
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-[#00FF9D] font-mono font-bold">1,850 kcal target</span>
        </div>

        <div className="space-y-1.5 text-xs">
          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
            <span className={textTitle}>🌅 <strong>Breakfast:</strong> Greek Yogurt with Chia & Walnuts</span>
            <span className={`font-mono ${textSub}`}>450 kcal</span>
          </div>
          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
            <span className={textTitle}>☀️ <strong>Lunch:</strong> Wild Salmon with Steamed Bok Choy</span>
            <span className={`font-mono ${textSub}`}>650 kcal</span>
          </div>
          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
            <span className={textTitle}>🌙 <strong>Dinner:</strong> {selectedDay.tag.includes('Dining Out') ? '🍷 Restaurant Defense: Protein First + Sparkling Water' : 'Grass-Fed Steak or Tofu with Zucchini'}</span>
            <span className={`font-mono ${textSub}`}>550 kcal</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. WHAT TO DO THIS WEEK & WHAT TO AVOID */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* WHAT TO DO */}
        <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-200 shadow-sm'} space-y-2.5`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              What To Do This Week
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>1. Food Sequencing at Every Meal</span>
              <p className={`text-[11px] ${textSub}`}>Fiber/Greens first → Protein & Fats second → Complex Carbs last. Blunts glucose spike by up to 38%.</p>
            </div>
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>2. Post-Lunch 10-Minute Walk</span>
              <p className={`text-[11px] ${textSub}`}>Soleus calf muscle contractions trigger GLUT4 to absorb glucose without triggering insulin.</p>
            </div>
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>3. 15-Min Morning Sunlight</span>
              <p className={`text-[11px] ${textSub}`}>Retinal photon exposure sets your circadian pacemaker, elevating daytime energy and nighttime melatonin.</p>
            </div>
          </div>
        </div>

        {/* WHAT TO AVOID */}
        <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-rose-500/30' : 'bg-rose-50/50 border-rose-200 shadow-sm'} space-y-2.5`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">❌</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400">
              What To Avoid This Week
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>1. Avoid Seed Oils in Restaurants</span>
              <p className={`text-[11px] ${textSub}`}>Say "no canola/soybean oil; please cook with olive oil or dry grill" to prevent vascular inflammation.</p>
            </div>
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>2. Avoid Iced Drinks with Meals</span>
              <p className={`text-[11px] ${textSub}`}>Cold water dilutes stomach acid (HCl) and stalls digestive enzymes, triggering bloating and fermentation.</p>
            </div>
            <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-0.5`}>
              <span className={`font-bold block ${textTitle}`}>3. Avoid Overhead White LED After 8:30 PM</span>
              <p className={`text-[11px] ${textSub}`}>Blue light suppresses sleep-inducing melatonin by 90 minutes. Switch to warm yellow lamps.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. PROBLEMS YOU MAY FACE THIS WEEK & SOLUTIONS */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚠️</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Problems You May Face This Week & Clinical Solutions
            </h3>
          </div>
          <span className={`text-[10px] ${textSub} font-mono`}>Acute Playbook</span>
        </div>

        <div className="space-y-2.5 text-xs">
          {/* Problem 1 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold text-amber-700 dark:text-amber-300`}>
                Problem 1: Sudden 3 PM Sugar or Salt Cravings
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                Glycogen Depletion
              </span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              <strong className={textTitle}>Why it happens:</strong> Your liver glycogen stores are emptying as your metabolism switches to fat burning. The brain interprets this transition as urgent need for quick glucose.
            </p>
            <div className={`p-2 rounded-lg border text-[11px] ${darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
              <strong className="block mb-0.5">💡 Clinical Solution:</strong>
              Drink 300ml warm water with a pinch of pink Himalayan rock salt, and have 2 squares 85%+ dark chocolate with 5 raw almonds. Salt balances adrenal aldosterone; polyphenols satisfy brain dopamine without spiking insulin.
            </div>
          </div>

          {/* Problem 2 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold text-amber-700 dark:text-amber-300`}>
                Problem 2: Evening Stomach Bloating or Mild Gas
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                Microbiome Shift
              </span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              <strong className={textTitle}>Why it happens:</strong> As gut bacteria adjust to higher vegetable fiber and eliminated seed oils, transient fermentation gas can pool in the small intestine before bed.
            </p>
            <div className={`p-2 rounded-lg border text-[11px] ${darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
              <strong className="block mb-0.5">💡 Clinical Solution:</strong>
              Drink warm ginger tea after dinner. Avoid large raw salads after 7 PM—eat steamed vegetables (zucchini, broccoli) instead so fibers are pre-softened for easy digestion.
            </div>
          </div>

          {/* Problem 3 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold text-amber-700 dark:text-amber-300`}>
                Problem 3: Social Dinners & Dining Out Pressure
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                Social Environment
              </span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              <strong className={textTitle}>Why it happens:</strong> Bread baskets, heavy sauces, and alcohol at restaurant tables make staying on plan feel socially awkward or restrictive.
            </p>
            <div className={`p-2 rounded-lg border text-[11px] ${darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
              <strong className="block mb-0.5">💡 Clinical Solution:</strong>
              Order sparkling water with lime right away. Request a double side of steamed greens or house salad with olive oil/lemon first, then order grilled fish, chicken, or steak. You will wake up tomorrow with zero water bloat!
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. CREATE YOUR GROCERY (KITCHEN INVENTORY MODAL TRIGGER) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              KITCHEN INVENTORY
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Zero-Waste Kitchen Management
            </h3>
          </div>
          <span className={`text-[10px] ${textSub} font-mono`}>Smart Log</span>
        </div>

        <p className={`text-xs ${textSub} leading-relaxed font-medium`}>
          Tell us what ingredients and quantities you already have in your kitchen. We will tailor your recipes so you waste zero food and only buy what you truly need.
        </p>

        {/* The dedicated button */}
        <button
          onClick={() => setIsGroceryModalOpen(true)}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black text-xs uppercase tracking-wider hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,157,0.3)]"
        >
          <span className="text-base">🛒</span>
          <span>Create Your Grocery (What's in Your Kitchen)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 9. INGREDIENT SUGGESTIONS TO BUY THIS WEEK (Lifestyle & Trusted Fillers) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textSub}`}>
              Smart Recommendations
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Ingredients To Buy This Week
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">Portion Optimized</span>
        </div>

        <p className={`text-xs ${textSub} leading-relaxed font-medium`}>
          Personalized based on your Mediterranean metabolic baseline, plus <strong>government-approved, trusted clinical source items</strong> to fill macro portions if your daily cooking falls short.
        </p>

        {/* Suggestions List */}
        <div className="space-y-2 text-xs">
          {/* Government Approved Portion Filler 1 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold flex items-center gap-1.5 ${textTitle}`}>
                <span>🛡️</span>
                <span>Cold-Filtered Whey Isolate or Pea Protein</span>
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                FSSAI / USDA Grade A
              </span>
            </div>
            <p className={`text-[11px] ${textSub}`}>
              <strong className={textTitle}>Why Buy:</strong> High-protein trusted portion filler. If lunch or dinner falls 25g short of your 145g daily target, 1 scoop with water fills your exact amino acid corridor with zero added seed oils or excess carbs.
            </p>
          </div>

          {/* Government Approved Portion Filler 2 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold flex items-center gap-1.5 ${textTitle}`}>
                <span>🛡️</span>
                <span>Organic Acacia Prebiotic Fiber (USP Certified)</span>
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30">
                USP Tested Source
              </span>
            </div>
            <p className={`text-[11px] ${textSub}`}>
              <strong className={textTitle}>Why Buy:</strong> Soluble prebiotic fiber filler. Easily stirred into morning water or yogurt to guarantee you hit the 38g daily fiber target without triggering SIBO gas.
            </p>
          </div>

          {/* Government Approved Portion Filler 3 */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold flex items-center gap-1.5 ${textTitle}`}>
                <span>🛡️</span>
                <span>Wild Alaskan Canned Salmon (Water Packed)</span>
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                FDA Inspected • MSC
              </span>
            </div>
            <p className={`text-[11px] ${textSub}`}>
              <strong className={textTitle}>Why Buy:</strong> Emergency pantry protein. Ready in 30 seconds when busy with work; delivers 32g clean protein and 1,400mg EPA/DHA Omega-3s.
            </p>
          </div>

          {/* Lifestyle Item 1 */}
          <div className={`p-2.5 rounded-xl border ${subBoxCls} flex items-center justify-between`}>
            <div>
              <span className={`font-bold block ${textTitle}`}>🥗 Organic Baby Spinach & Bok Choy Mix</span>
              <span className={`text-[10px] ${textSub}`}>Lifestyle fiber mesh to eat before lunch carbs</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">2 Large Bags</span>
          </div>

          {/* Lifestyle Item 2 */}
          <div className={`p-2.5 rounded-xl border ${subBoxCls} flex items-center justify-between`}>
            <div>
              <span className={`font-bold block ${textTitle}`}>🥑 Ripe Hass Avocados</span>
              <span className={`text-[10px] ${textSub}`}>Monounsaturated oleic acid for 4-hour fullness</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">4 Count</span>
          </div>
        </div>
      </div>

      {/* 10. SUNDAY BATCH PREP BLUEPRINT */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-2 text-xs`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
            Sunday 20-Minute Batch Prep
          </span>
          <span className={`text-[10px] ${textSub} font-mono`}>Save 4 Hours This Week</span>
        </div>
        <p className={`${textSub} leading-relaxed`}>
          Boil 6 pasture eggs and roast 2 trays of broccoli and asparagus in olive oil at 200°C for 18 minutes. Having ready protein and greens ensures you never fall victim to quick delivery apps when late work strikes.
        </p>
      </div>

      {/* MODALS */}
      <PlanYourWeekModal
        isOpen={isPlanWeekOpen}
        onClose={() => setIsPlanWeekOpen(false)}
        onSaveSchedule={(_tags) => {
          setWeekToast('🗓️ Weekly schedule recalibrated! Tasks & macros adjusted.');
          setTimeout(() => setWeekToast(null), 3000);
        }}
        darkMode={darkMode}
      />

      <MedicalReportModal
        isOpen={isDoctorReportOpen}
        onClose={() => setIsDoctorReportOpen(false)}
        onUploadComplete={(_title, _notes, adaptation) => {
          setDoctorEventBanner(adaptation);
          setWeekToast('📄 Doctor Report Ingested! Week adapted.');
          setTimeout(() => setWeekToast(null), 4000);
        }}
      />

      <CreateGroceryModal
        isOpen={isGroceryModalOpen}
        onClose={() => setIsGroceryModalOpen(false)}
        onSave={(items) => {
          setWeekToast(`🛒 Saved ${items.length} kitchen ingredients to weekly inventory!`);
          setTimeout(() => setWeekToast(null), 3500);
        }}
        darkMode={darkMode}
      />
    </div>
  );
};
