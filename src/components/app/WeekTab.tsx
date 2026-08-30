import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { PlanYourWeekModal } from './PlanYourWeekModal';
import { MedicalReportModal } from '../thais/MedicalReportModal';

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
  const [selectedDayIndex, setSelectedDayIndex] = useState(5); // Saturday by default
  const [groceryToast, setGroceryToast] = useState<string | null>(null);
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

  // Kitchen Inventory vs Need to Buy
  const [groceryCategories, setGroceryCategories] = useState([
    {
      name: '🥩 Proteins & Fish',
      items: [
        { id: 'p1', name: 'Wild Sockeye Salmon Fillets', qty: '500g', inKitchen: true },
        { id: 'p2', name: 'Pasture-Raised Organic Eggs', qty: '12 count', inKitchen: false },
        { id: 'p3', name: 'Greek Yogurt (0% Sugar, High Protein)', qty: '400g', inKitchen: true },
        { id: 'p4', name: 'Grass-Fed Ground Beef (90/10)', qty: '450g', inKitchen: false },
      ],
    },
    {
      name: '🥦 Fibrous Greens & Veggies',
      items: [
        { id: 'v1', name: 'Baby Spinach & Arugula Mix', qty: '2 bags (300g)', inKitchen: false },
        { id: 'v2', name: 'Fresh Broccoli Crowns', qty: '2 heads', inKitchen: true },
        { id: 'v3', name: 'Organic Hass Avocados', qty: '4 count', inKitchen: false },
        { id: 'v4', name: 'Zucchini & Yellow Squash', qty: '3 medium', inKitchen: false },
      ],
    },
    {
      name: '🥑 Healthy Fats & Pantry',
      items: [
        { id: 'f1', name: 'Cold-Pressed Extra Virgin Olive Oil', qty: '500ml', inKitchen: true },
        { id: 'f2', name: 'Raw Walnuts & Pecans', qty: '150g', inKitchen: false },
        { id: 'f3', name: 'Organic Chia & Flax Seeds', qty: '100g', inKitchen: true },
      ],
    },
  ]);

  const toggleKitchenItem = (catIndex: number, itemId: string) => {
    setGroceryCategories((prev) =>
      prev.map((cat, cIdx) =>
        cIdx === catIndex
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, inKitchen: !item.inKitchen } : item
              ),
            }
          : cat
      )
    );
  };

  const handleExportDelivery = (service: 'Instacart' | 'Amazon Fresh' | 'Blinkit') => {
    const missingCount = groceryCategories
      .flatMap((c) => c.items)
      .filter((i) => !i.inKitchen).length;
    setGroceryToast(`🛒 Exported ${missingCount} missing items directly into your ${service} cart!`);
    setTimeout(() => setGroceryToast(null), 4000);
  };

  const selectedDay = days[selectedDayIndex];

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-6 animate-fadeIn">
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
          Liver glycogen has been depleted through food sequencing. Your mitochondria have switched to direct fatty acid oxidation and deep cellular autophagy.
        </p>
      </div>

      {/* 3. MASTER ACTION BUTTONS: PLAN YOUR WEEK & DOCTOR VISIT UPLOADER */}
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

        {/* Doctor Visit / Medical Report Button (Ajay's Mandate) */}
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

      {/* DOCTOR ADAPTATION BANNER (If uploaded) */}
      {doctorEventBanner && (
        <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-500/40 text-xs text-sky-200">
          <span className="font-bold block mb-0.5">🩺 Acute Plan Adaptation Active:</span>
          {doctorEventBanner}
        </div>
      )}

      {/* GROCERY EXPORT TOAST */}
      {groceryToast && (
        <div className="p-2.5 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
          {groceryToast}
        </div>
      )}

      {/* 4. 7-DAY VISUAL MOMENTUM ARC (Loss Aversion Dopamine) */}
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

      {/* 6. ZERO-WASTE KITCHEN AUTOPILOT (GROCERY DELIVERY IN 1 TAP) */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              Zero-Waste Kitchen Autopilot
            </span>
            <div className="text-xs font-bold text-slate-200">
              Weekly Smart Grocery Checklist
            </div>
          </div>
          <span className="text-[10px] text-slate-400">Tap items already in your fridge</span>
        </div>

        {/* Categories Accordion / Checklists */}
        <div className="space-y-3 pt-1">
          {groceryCategories.map((cat, catIdx) => (
            <div key={cat.name} className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-300 block">{cat.name}</span>
              <div className="space-y-1">
                {cat.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleKitchenItem(catIdx, item.id)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                      item.inKitchen
                        ? 'border-slate-800/60 bg-slate-900/30 text-slate-500 line-through'
                        : 'border-slate-800 bg-slate-900/80 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        item.inKitchen ? 'border-[#00FF9D] bg-[#00FF9D] text-slate-950 font-black' : 'border-slate-600'
                      }`}>
                        {item.inKitchen ? '✓' : ''}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{item.qty}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 1-Tap Delivery Export Buttons */}
        <div className="pt-2 space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block text-center">
            1-Tap Export Missing Items To Delivery Cart:
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleExportDelivery('Instacart')}
              className="py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1 active:scale-95 transition-all"
            >
              🥕 Instacart
            </button>
            <button
              onClick={() => handleExportDelivery('Amazon Fresh')}
              className="py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1 active:scale-95 transition-all"
            >
              📦 Amazon
            </button>
            <button
              onClick={() => handleExportDelivery('Blinkit')}
              className="py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1 active:scale-95 transition-all"
            >
              ⚡ Blinkit
            </button>
          </div>
        </div>
      </div>

      {/* 7. SUNDAY 20-MINUTE BATCH PREP BLUEPRINT */}
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
          setGroceryToast('🗓️ Weekly schedule recalibrated! Tasks & macros adjusted.');
          setTimeout(() => setGroceryToast(null), 3000);
        }}
      />

      <MedicalReportModal
        isOpen={isMedicalModalOpen}
        onClose={() => setIsMedicalModalOpen(false)}
        onUploadComplete={(_title, _notes, adaptation) => {
          setDoctorEventBanner(adaptation);
          setGroceryToast('📄 Doctor Report Ingested! Week adapted.');
          setTimeout(() => setGroceryToast(null), 4000);
        }}
      />
    </div>
  );
};
