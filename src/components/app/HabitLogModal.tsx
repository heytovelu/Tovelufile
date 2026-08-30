import React, { useState } from 'react';

export type HabitType = 'walk' | 'sleep' | 'water' | 'exercise' | 'sunlight';

interface HabitLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  habitType: HabitType;
  currentValue: number;
  onSave: (type: HabitType, value: number) => void;
  darkMode?: boolean;
}

export const HabitLogModal: React.FC<HabitLogModalProps> = ({
  isOpen,
  onClose,
  habitType,
  currentValue,
  onSave,
  darkMode = true,
}) => {
  const [val, setVal] = useState(currentValue);

  if (!isOpen) return null;

  const habitConfig: Record<
    HabitType,
    {
      title: string;
      icon: string;
      unit: string;
      target: number;
      step: number;
      quickAdds: number[];
      rationale: string;
    }
  > = {
    walk: {
      title: 'Daily Walk & Steps',
      icon: '🚶',
      unit: 'steps',
      target: 8000,
      step: 500,
      quickAdds: [500, 1000, 2000, 3000],
      rationale: '8,000 steps blunts visceral adipose storage and clears postprandial glucose via skeletal muscle GLUT4.',
    },
    sleep: {
      title: 'Night Sleep Window',
      icon: '🌙',
      unit: 'hours',
      target: 8.0,
      step: 0.5,
      quickAdds: [0.5, 1.0, 1.5, 2.0],
      rationale: '8 hours restorative sleep balances leptin/ghrelin appetite hormones and allows glymphatic brain clearance.',
    },
    water: {
      title: 'Water Hydration',
      icon: '💧',
      unit: 'liters',
      target: 3.0,
      step: 0.25,
      quickAdds: [0.25, 0.5, 0.75, 1.0],
      rationale: '3.0L maintains cellular osmolarity, kidney filtration, and prevents false dehydration cravings.',
    },
    exercise: {
      title: 'Exercise & Training',
      icon: '💪',
      unit: 'minutes',
      target: 30,
      step: 5,
      quickAdds: [10, 15, 20, 30],
      rationale: '30 minutes protects metabolic mitochondria and stimulates nitrogen-sparing lean muscle preservation.',
    },
    sunlight: {
      title: 'Morning Sunlight & Circadian Reset',
      icon: '☀️',
      unit: 'minutes',
      target: 15,
      step: 5,
      quickAdds: [5, 10, 15],
      rationale: '15 minutes retinal photon exposure sets suprachiasmatic nucleus clock and anchors evening melatonin.',
    },
  };

  const currentConfig = habitConfig[habitType];

  const handleSave = () => {
    onSave(habitType, val);
    onClose();
  };

  const textTitle = darkMode ? 'text-white' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const btnSecCls = darkMode
    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 font-bold';
  const boxCls = darkMode
    ? 'bg-slate-900 border-slate-800 text-slate-300'
    : 'bg-slate-50 border-slate-200 text-slate-800';

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
            <span className="text-2xl">{currentConfig.icon}</span>
            <div>
              <h3 className={`text-sm font-bold tracking-tight ${textTitle}`}>Log {currentConfig.title}</h3>
              <p className={`text-[11px] ${textSub}`}>Target: {currentConfig.target} {currentConfig.unit}</p>
            </div>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
            ✕
          </button>
        </div>

        {/* Counter and Input */}
        <div className="py-4 space-y-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setVal((prev) => Math.max(0, Number((prev - currentConfig.step).toFixed(1))))}
              className={`w-11 h-11 rounded-xl border text-lg font-black active:scale-95 transition-all flex items-center justify-center ${btnSecCls}`}
            >
              -
            </button>
            <div className="min-w-[120px]">
              <span className={`text-3xl font-black ${textTitle}`}>{val}</span>
              <span className={`text-xs block font-mono uppercase ${textSub}`}>{currentConfig.unit}</span>
            </div>
            <button
              onClick={() => setVal((prev) => Number((prev + currentConfig.step).toFixed(1)))}
              className={`w-11 h-11 rounded-xl border text-lg font-black active:scale-95 transition-all flex items-center justify-center ${btnSecCls}`}
            >
              +
            </button>
          </div>

          {/* Quick Add Pills */}
          <div className="space-y-1.5 pt-1">
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${textSub}`}>
              Quick Add:
            </span>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {currentConfig.quickAdds.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setVal((prev) => Number((prev + amt).toFixed(1)))}
                  className={`py-1 px-3 rounded-lg border text-xs font-bold active:scale-95 transition-all ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-[#00FF9D]'
                      : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                  }`}
                >
                  +{amt} {currentConfig.unit === 'steps' ? '' : currentConfig.unit}
                </button>
              ))}
            </div>
          </div>

          {/* Clinical Rationale */}
          <div className={`p-2.5 rounded-xl border text-[11px] leading-relaxed text-left ${boxCls}`}>
            💡 {currentConfig.rationale}
          </div>
        </div>

        {/* Action */}
        <button
          onClick={handleSave}
          className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)]"
        >
          Confirm & Save Habit Log
        </button>
      </div>
    </div>
  );
};
