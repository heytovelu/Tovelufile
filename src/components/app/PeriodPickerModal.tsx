import React, { useState } from 'react';

interface PeriodPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPeriod: (type: 'day' | 'week' | 'month' | 'year', label: string) => void;
  darkMode?: boolean;
}

export const PeriodPickerModal: React.FC<PeriodPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectPeriod,
  darkMode = true,
}) => {
  const [selectedType, setSelectedType] = useState<'day' | 'week' | 'month' | 'year'>('week');

  if (!isOpen) return null;

  const pastDays = [
    { label: 'Day 14: Sunday, Aug 30, 2026 (Today)', id: 'd14' },
    { label: 'Day 13: Saturday, Aug 29, 2026', id: 'd13' },
    { label: 'Day 12: Friday, Aug 28, 2026', id: 'd12' },
    { label: 'Day 11: Thursday, Aug 27, 2026', id: 'd11' },
    { label: 'Day 10: Wednesday, Aug 26, 2026', id: 'd10' },
    { label: 'Day 7: Sunday, Aug 23, 2026', id: 'd7' },
    { label: 'Day 1: Monday, Aug 17, 2026', id: 'd1' },
  ];

  const pastWeeks = [
    { label: 'Week 2: Aug 24 - Aug 30, 2026 (Current Cycle)', id: 'w2' },
    { label: 'Week 1: Aug 17 - Aug 23, 2026 (Inflammation Flush)', id: 'w1' },
  ];

  const pastMonths = [
    { label: 'Month 1: August 2026 (Metabolic Adaptation)', id: 'm1' },
  ];

  const pastYears = [
    { label: 'Year 2026 (Sovereign Transformation Arc)', id: 'y2026' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Choose Particular Report Period</h3>
              <p className="text-[11px] text-slate-400">Inspect any exact Day, Week, Month, or Year</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            ✕
          </button>
        </div>

        {/* Type Switcher */}
        <div className="grid grid-cols-4 gap-1.5 py-3 border-b border-slate-800">
          {(['day', 'week', 'month', 'year'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                selectedType === t
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* List of Periods */}
        <div className="py-3 space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {selectedType === 'day' &&
            pastDays.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod('day', item.label);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-[#00FF9D] hover:bg-slate-800 text-left text-xs text-slate-200 transition-all flex items-center justify-between active:scale-98"
              >
                <span>{item.label}</span>
                <span className="text-slate-500 font-mono">→</span>
              </button>
            ))}

          {selectedType === 'week' &&
            pastWeeks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod('week', item.label);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-[#00FF9D] hover:bg-slate-800 text-left text-xs text-slate-200 transition-all flex items-center justify-between active:scale-98"
              >
                <span>{item.label}</span>
                <span className="text-slate-500 font-mono">→</span>
              </button>
            ))}

          {selectedType === 'month' &&
            pastMonths.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod('month', item.label);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-[#00FF9D] hover:bg-slate-800 text-left text-xs text-slate-200 transition-all flex items-center justify-between active:scale-98"
              >
                <span>{item.label}</span>
                <span className="text-slate-500 font-mono">→</span>
              </button>
            ))}

          {selectedType === 'year' &&
            pastYears.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod('year', item.label);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-[#00FF9D] hover:bg-slate-800 text-left text-xs text-slate-200 transition-all flex items-center justify-between active:scale-98"
              >
                <span>{item.label}</span>
                <span className="text-slate-500 font-mono">→</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
