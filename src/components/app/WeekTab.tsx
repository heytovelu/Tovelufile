import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { PlanYourWeekModal } from './PlanYourWeekModal';
import { MedicalReportModal } from '../thais/MedicalReportModal';
import { CreateGroceryModal, KitchenIngredient } from './CreateGroceryModal';

interface WeekTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

export const WeekTab: React.FC<WeekTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  // Modals state
  const [isPlanWeekOpen, setIsPlanWeekOpen] = useState(false);
  const [isMedicalModalOpen, setIsMedicalModalOpen] = useState(false);
  const [isGroceryModalOpen, setIsGroceryModalOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(5); // Saturday by default
  const [weekToast, setWeekToast] = useState<string | null>(null);
  const [doctorEventBanner, setDoctorEventBanner] = useState<string | null>(null);

  // 7 Days Data
  const days = [
    { name: 'Mon', date: 'Aug 25', status: 'completed', percent: 100, tag: 'Standard' },
    { name: 'Tue', date: 'Aug 26', status: 'completed', percent: 100, tag: '✈️ Early Travel' },
    { name: 'Wed', date: 'Aug 27', status: 'completed', percent: 100, tag: 'Standard' },
    { name: 'Thu', date: 'Aug 28', status: 'completed', percent: 100, tag: '💼 Late Work' },
    { name: 'Fri', date: 'Aug 29', status: 'completed', percent: 100, tag: 'Standard' },
    { name: 'Sat', date: 'Aug 30', status: 'today', percent: 75, tag: '🍷 Dining Out' },
    { name: 'Sun', date: 'Aug 31', status: 'planned', percent: 0, tag: 'Standard' },
  ];

  // Kitchen Inventory (User's pantry/fridge)
  const [kitchenItems, setKitchenItems] = useState<KitchenIngredient[]>([
    { id: 'k1', name: 'Pasture-Raised Eggs', quantity: '12 count' },
    { id: 'k2', name: 'Wild Sockeye Salmon', quantity: '500g' },
    { id: 'k3', name: 'Cold-Pressed Olive Oil', quantity: '500ml' },
    { id: 'k4', name: 'Greek Yogurt (0% Sugar)', quantity: '400g' },
    { id: 'k5', name: 'Raw Walnuts & Pecans', quantity: '150g' },
  ]);

  // Recommended Ingredients to Buy This Week (Lifestyle + Government Approved Trusted Fillers)
  const recommendedBuys = [
    {
      name: 'Baby Spinach & Bok Choy Mix',
      type: 'Lifestyle Fresh Greens',
      why: 'Provides insoluble fiber mesh to line stomach before meals.',
      category: 'diet',
    },
    {
      name: 'Organic Hass Avocados (4 count)',
      type: 'High Satiety Lipids',
      why: 'Oleic acid stimulates intestinal GLP-1 for 4-hour fullness.',
      category: 'diet',
    },
    {
      name: 'Cold-Filtered Whey Isolate / Pea Protein',
      type: 'Govt-Approved Trusted Filler',
      cert: 'FSSAI Grade A • Informed-Sport • USDA Organic',
      why: 'Fill missing protein budget (25g-50g) in 30 seconds without excess carbs or oils if daily meals fall short.',
      category: 'filler',
    },
    {
      name: 'Acacia Prebiotic Fiber (USP Certified)',
      type: 'Clinical Microbiome Filler',
      cert: 'USP Certified • 100% Soluble FODMAP-Free',
      why: 'Guarantees your 38g daily fiber target is hit to feed Akkermansia muciniphila gut bacteria.',
      category: 'filler',
    },
    {
      name: 'Wild Alaskan Canned Salmon (MSC Certified)',
      type: 'Emergency Shelf-Stable Protein',
      cert: 'FDA Inspected • Marine Stewardship Council',
      why: 'Zero cooking required; provides 32g pure protein and 1,400mg EPA/DHA Omega-3s when travel strikes.',
      category: 'filler',
    },
  ];

  const selectedDay = days[selectedDayIndex];

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

      {/* 2. WEEKLY BIOLOGICAL MILESTONE BANNER */}
      <div className={`p-4 rounded-2xl border ${
        darkMode ? 'bg-gradient-to-br from-[#0E1318] to-[#0A0D11] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#00FF9D]">
            Weekly Clinical Milestone
          </span>
          <span className="text-[10px] font-mono text-slate-400">Week 2 of 12</span>
        </div>
        <h3 className="text-sm font-black tracking-tight text-slate-100">
          Visceral Fat Access & Hepatic Glycogen Depletion
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Liver glycogen has cleared through food sequencing. Mitochondria have transitioned to direct fatty acid oxidation and deep cellular autophagy.
        </p>
      </div>

      {/* 3. MASTER ACTION BUTTONS: PLAN YOUR WEEK & DOCTOR VISIT */}
      <div className="grid grid-cols-2 gap-2">
        {/* Plan Your Week Button */}
        <button
          onClick={() => setIsPlanWeekOpen(true)}
          className="p-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-500 transition-all text-left active:scale-98"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🗓️</span>
            <span className="text-xs font-bold text-emerald-300">Plan Your Week</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            Tag travel, late work, or dining out (24/7)
          </p>
        </button>

        {/* Doctor Visit Button */}
        <button
          onClick={() => setIsMedicalModalOpen(true)}
          className="p-3 rounded-2xl border border-sky-500/40 bg-sky-500/10 hover:border-sky-500 transition-all text-left active:scale-98"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📄</span>
            <span className="text-xs font-bold text-sky-300">Doctor Report</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            Upload prescription & auto-adapt week
          </p>
        </button>
      </div>

      {/* DOCTOR ADAPTATION BANNER */}
      {doctorEventBanner && (
        <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-500/40 text-xs text-sky-200">
          <span className="font-bold block mb-0.5">🩺 Acute Plan Adaptation Active:</span>
          {doctorEventBanner}
        </div>
      )}

      {/* TOAST */}
      {weekToast && (
        <div className="p-2.5 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
          {weekToast}
        </div>
      )}

      {/* 4. 7-DAY VISUAL MOMENTUM ARC */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              7-Day Momentum Arc
            </span>
            <div className="text-xs font-bold text-slate-200">
              5 of 7 Days Conquered • <span className="text-[#00FF9D]">Top 5% Consistency</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded-md border border-[#00FF9D]/30">
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
                    ? 'border-[#00FF9D] bg-[#00FF9D]/10 shadow-[0_0_10px_rgba(0,255,157,0.2)]'
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] font-bold text-slate-400">{d.name}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isCompleted
                      ? 'bg-emerald-500/20 text-[#00FF9D] border border-emerald-500/50'
                      : isToday
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50 animate-pulse'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}
                >
                  {isCompleted ? '✓' : isToday ? '75%' : '○'}
                </div>
                <span className="text-[9px] font-mono text-slate-400">{d.date.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. SELECTED DAY SCHEDULE PREVIEW */}
      <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-200">
              {selectedDay.name} Schedule ({selectedDay.date})
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {selectedDay.tag}
            </span>
          </div>
          <span className="text-[11px] text-[#00FF9D] font-mono">1,850 kcal target</span>
        </div>

        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
            <span>🌅 <strong>Breakfast:</strong> Greek Yogurt with Chia & Walnuts</span>
            <span className="text-slate-400 font-mono">450 kcal</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
            <span>☀️ <strong>Lunch:</strong> Wild Salmon with Steamed Bok Choy</span>
            <span className="text-slate-400 font-mono">650 kcal</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
            <span>🌙 <strong>Dinner:</strong> {selectedDay.tag.includes('Dining Out') ? '🍷 Restaurant Defense: Protein First + Sparkling Water' : 'Grass-Fed Steak or Tofu with Zucchini'}</span>
            <span className="text-slate-400 font-mono">550 kcal</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. WHAT TO DO THIS WEEK & WHAT TO AVOID (Ajay's Mandate) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* WHAT TO DO */}
        <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-200'} space-y-2.5`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              What To Do This Week
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">1. Food Sequencing at Every Meal</span>
              <p className="text-[11px] text-slate-300">Fiber/Greens first → Protein & Fats second → Complex Carbs last. Blunts glucose spike by up to 38%.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">2. Post-Lunch 10-Minute Walk</span>
              <p className="text-[11px] text-slate-300">Soleus calf muscle contractions trigger GLUT4 to absorb glucose without triggering insulin.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">3. 15-Min Morning Sunlight</span>
              <p className="text-[11px] text-slate-300">Retinal photon exposure sets your circadian pacemaker, elevating daytime energy and nighttime melatonin.</p>
            </div>
          </div>
        </div>

        {/* WHAT TO AVOID */}
        <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-rose-500/30' : 'bg-rose-50/50 border-rose-200'} space-y-2.5`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">❌</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-rose-400">
              What To Avoid This Week
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">1. Avoid Seed Oils in Restaurants</span>
              <p className="text-[11px] text-slate-300">Say "no canola/soybean oil; please cook with olive oil or dry grill" to prevent vascular inflammation.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">2. Avoid Iced Drinks with Meals</span>
              <p className="text-[11px] text-slate-300">Cold water dilutes stomach acid (HCl) and stalls digestive enzymes, triggering bloating and fermentation.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-bold text-slate-100 block">3. Avoid Overhead White LED After 8:30 PM</span>
              <p className="text-[11px] text-slate-300">Blue light suppresses sleep-inducing melatonin by 90 minutes. Switch to warm yellow lamps.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. PROBLEMS YOU MAY FACE THIS WEEK & SOLUTIONS (Ajay's Mandate) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚠️</span>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Problems You May Face This Week & Clinical Solutions
            </h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Week 2 Traps</span>
        </div>

        <div className="space-y-2.5 text-xs">
          {/* Problem 1 */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-amber-300 font-bold">
              <span>⚡ Problem 1: Sudden 3 PM Sugar or Salt Cravings</span>
              <span className="text-[10px] font-mono text-slate-400">Day 8-10</span>
            </div>
            <p className="text-[11px] text-slate-400">
              <strong>Why it happens:</strong> Liver glycogen stores are emptying as your body switches to visceral fat. Your brain demands fast glucose.
            </p>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
              <strong>💡 Solution:</strong> Sip 300ml warm water with a pinch of rock salt, and have 2 squares of 85%+ dark chocolate or 5 almonds. Satiety arrives in 7 minutes!
            </div>
          </div>

          {/* Problem 2 */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-amber-300 font-bold">
              <span>💨 Problem 2: Evening Stomach Bloating or Mild Gas</span>
              <span className="text-[10px] font-mono text-slate-400">Duodenal Cleansing</span>
            </div>
            <p className="text-[11px] text-slate-400">
              <strong>Why it happens:</strong> Small intestinal bacterial fermentation (SIBO clearance) as gut microbiome re-balances.
            </p>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
              <strong>💡 Solution:</strong> Sip warm ginger infusion. Avoid large raw salads at dinner—switch to well-cooked steamed zucchini and warm broth.
            </div>
          </div>

          {/* Problem 3 */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-amber-300 font-bold">
              <span>🍷 Problem 3: Social Dinners & Dining Out Pressure</span>
              <span className="text-[10px] font-mono text-slate-400">Weekend Events</span>
            </div>
            <p className="text-[11px] text-slate-400">
              <strong>Why it happens:</strong> High-carb restaurant menus and bread baskets.
            </p>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
              <strong>💡 Solution:</strong> Order sparkling water with lime. Ask waiter for double steamed greens first, and select grilled fish, chicken, or steak.
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. CREATE YOUR GROCERY BUTTON & INGREDIENT SUGGESTIONS (Ajay's Mandate) */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3.5`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              Kitchen & Pantry Management
            </span>
            <h3 className="text-xs font-black text-slate-100 uppercase tracking-wider">
              Create Your Grocery & Smart Suggestions
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">{kitchenItems.length} items logged</span>
        </div>

        {/* CREATE YOUR GROCERY BUTTON (Opens popup to add ingredients & quantities available) */}
        <button
          onClick={() => setIsGroceryModalOpen(true)}
          className="w-full py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,157,0.25)]"
        >
          <span className="text-base">🛒</span>
          <span>Create Your Grocery (What's in Your Kitchen)</span>
        </button>

        {/* Current Kitchen Snapshot Summary */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
            Recorded In Your Kitchen:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {kitchenItems.map((item) => (
              <span
                key={item.id}
                className="py-0.5 px-2 rounded-lg bg-slate-800 text-[10px] text-slate-200 font-medium"
              >
                {item.name} ({item.quantity})
              </span>
            ))}
          </div>
        </div>

        {/* SHORT SECTION: INGREDIENT SUGGESTIONS TO BUY THIS WEEK */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
              Smart Ingredients To Buy This Week:
            </span>
            <span className="text-[9px] font-mono text-[#00FF9D]">Lifestyle + Govt-Approved Fillers</span>
          </div>

          <div className="space-y-2 text-xs">
            {recommendedBuys.map((buy) => (
              <div
                key={buy.name}
                className={`p-3 rounded-xl border ${
                  buy.category === 'filler'
                    ? 'border-[#00FF9D]/30 bg-gradient-to-r from-slate-900 to-emerald-950/20'
                    : 'border-slate-800 bg-slate-900/60'
                } space-y-1`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-100 flex items-center gap-1.5">
                    <span>{buy.category === 'filler' ? '🛡️' : '🥗'}</span>
                    <span>{buy.name}</span>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    buy.category === 'filler'
                      ? 'bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {buy.type}
                  </span>
                </div>

                {buy.cert && (
                  <div className="text-[9px] font-mono text-emerald-400 font-bold">
                    ✓ Verified: {buy.cert}
                  </div>
                )}

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {buy.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. SUNDAY 20-MINUTE BATCH PREP BLUEPRINT */}
      <div className={`p-4 rounded-2xl border ${
        darkMode ? 'bg-gradient-to-br from-slate-900 to-[#0B1015] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base">⏱️</span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00FF9D]">
            Sunday 20-Minute Batch Prep Blueprint
          </span>
        </div>
        <p className="text-xs text-slate-300 mb-2.5">
          Spend 20 minutes on Sunday to save 4 hours of cooking during the busy work week:
        </p>
        <div className="space-y-2 text-xs">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2">
            <span className="text-[#00FF9D] font-bold">1.</span>
            <span><strong>Sheet-Pan Roast:</strong> Toss zucchini, sweet potatoes & broccoli with olive oil. Roast at 200°C for 18 minutes. Store in glass container.</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2">
            <span className="text-[#00FF9D] font-bold">2.</span>
            <span><strong>Fast Protein Prep:</strong> Hard-boil 6 pasture-raised eggs or grill 3 wild salmon fillets. Ready to grab in 10 seconds.</span>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <PlanYourWeekModal
        isOpen={isPlanWeekOpen}
        onClose={() => setIsPlanWeekOpen(false)}
        onSaveSchedule={(_tags) => {
          setWeekToast('🗓️ Weekly schedule recalibrated! Tasks & macros adjusted.');
          setTimeout(() => setWeekToast(null), 3000);
        }}
      />

      <MedicalReportModal
        isOpen={isMedicalModalOpen}
        onClose={() => setIsMedicalModalOpen(false)}
        onUploadComplete={(_title, _notes, adaptation) => {
          setDoctorEventBanner(adaptation);
          setWeekToast('📄 Doctor Report Ingested! Week adapted.');
          setTimeout(() => setWeekToast(null), 4000);
        }}
      />

      <CreateGroceryModal
        isOpen={isGroceryModalOpen}
        onClose={() => setIsGroceryModalOpen(false)}
        kitchenItems={kitchenItems}
        onUpdateKitchen={(updated) => {
          setKitchenItems(updated);
          setWeekToast(`🛒 Kitchen inventory updated with ${updated.length} items!`);
          setTimeout(() => setWeekToast(null), 3000);
        }}
        darkMode={darkMode}
      />
    </div>
  );
};
