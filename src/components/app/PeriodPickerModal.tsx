import React, { useState } from 'react';

export interface ReportPeriod {
  tier: 'day' | 'week' | 'month' | 'year';
  label: string;
}

interface PeriodPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier: 'day' | 'week' | 'month' | 'year';
  onSelectPeriod: (period: ReportPeriod) => void;
  darkMode?: boolean;
}

export const PeriodPickerModal: React.FC<PeriodPickerModalProps> = ({
  isOpen,
  onClose,
  currentTier,
  onSelectPeriod,
  darkMode = true,
}) => {
  const [selectedTier, setSelectedTier] = useState<'day' | 'week' | 'month' | 'year'>(currentTier);

  if (!isOpen) return null;

  const pastDays = [
    { id: 'd14', label: 'Day 14 (Today • Sun, Aug 30, 2026)' },
    { id: 'd13', label: 'Day 13 (Sat, Aug 29, 2026)' },
    { id: 'd12', label: 'Day 12 (Fri, Aug 28, 2026)' },
    { id: 'd11', label: 'Day 11 (Thu, Aug 27, 2026)' },
    { id: 'd10', label: 'Day 10 (Wed, Aug 26, 2026)' },
    { id: 'd9', label: 'Day 9 (Tue, Aug 25, 2026)' },
    { id: 'd8', label: 'Day 8 (Mon, Aug 24, 2026)' },
  ];

  const pastWeeks = [
    { id: 'w2', label: 'Week 2 (Aug 24 – Aug 30, 2026)' },
    { id: 'w1', label: 'Week 1 (Aug 17 – Aug 23, 2026)' },
  ];

  const pastMonths = [
    { id: 'm1', label: 'Month 1 (August 2026)' },
  ];

  const pastYears = [
    { id: 'y2026', label: 'Year 2026 Cumulative (90-Day Arc)' },
  ];

  const textTitle = darkMode ? 'text-white' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const itemCls = darkMode
    ? 'border-slate-800 bg-slate-900/60 hover:border-[#00FF9D] hover:bg-slate-800 text-slate-200'
    : 'border-slate-200 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50 text-slate-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-sm rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <div>
              <h3 className={`text-sm font-bold tracking-tight ${textTitle}`}>Choose Clinical Interval</h3>
              <p className={`text-[11px] ${textSub}`}>Inspect acute daily, weekly, or monthly reports</p>
            </div>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
            ✕
          </button>
        </div>

        {/* Tier Tabs */}
        <div className={`grid grid-cols-4 gap-1.5 py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          {(['day', 'week', 'month', 'year'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                selectedTier === t
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* List of Periods */}
        <div className="py-3 space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {selectedTier === 'day' &&
            pastDays.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod({ tier: 'day', label: item.label });
                  onClose();
                }}
                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between active:scale-98 ${itemCls}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-mono">→</span>
              </button>
            ))}

          {selectedTier === 'week' &&
            pastWeeks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod({ tier: 'week', label: item.label });
                  onClose();
                }}
                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between active:scale-98 ${itemCls}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-mono">→</span>
              </button>
            ))}

          {selectedTier === 'month' &&
            pastMonths.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod({ tier: 'month', label: item.label });
                  onClose();
                }}
                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between active:scale-98 ${itemCls}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-mono">→</span>
              </button>
            ))}

          {selectedTier === 'year' &&
            pastYears.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPeriod({ tier: 'year', label: item.label });
                  onClose();
                }}
                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between active:scale-98 ${itemCls}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-mono">→</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
