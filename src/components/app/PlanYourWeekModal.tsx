import React, { useState } from 'react';

interface PlanYourWeekModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveSchedule: (customDays: Record<string, string>) => void;
  darkMode?: boolean;
}

export const PlanYourWeekModal: React.FC<PlanYourWeekModalProps> = ({
  isOpen,
  onClose,
  onSaveSchedule,
  darkMode = true,
}) => {
  const [scheduleMode, setScheduleMode] = useState<'standard' | 'custom'>('standard');
  const [dayTags, setDayTags] = useState<Record<string, string>>({
    Tuesday: 'travel',
    Friday: 'dining_out',
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const tagOptions = [
    { id: 'normal', label: 'Standard Routine', emoji: '🟢' },
    { id: 'travel', label: 'Early Travel / Commute', emoji: '✈️' },
    { id: 'work_late', label: 'Late Work / High Stress', emoji: '💼' },
    { id: 'dining_out', label: 'Social Dinner / Party', emoji: '🍷' },
    { id: 'family', label: 'Family / Guests', emoji: '👨‍👩‍👧' },
  ];

  const handleTagChange = (day: string, tagId: string) => {
    setDayTags((prev) => {
      const updated = { ...prev };
      if (tagId === 'normal') {
        delete updated[day];
      } else {
        updated[day] = tagId;
      }
      return updated;
    });
  };

  const handleSave = () => {
    onSaveSchedule(dayTags);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

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
            <span className="text-xl">🗓️</span>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Plan Your Week / Update Schedule</h3>
              <p className="text-[11px] text-slate-400">Available 24/7 • The plan bends around your life</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            ✕
          </button>
        </div>

        {/* Mode Selector */}
        <div className="py-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setScheduleMode('standard');
                setDayTags({});
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                scheduleMode === 'standard'
                  ? 'border-[#00FF9D] bg-[#00FF9D]/10 text-slate-100 font-bold'
                  : 'border-slate-800 bg-slate-900/50 text-slate-400'
              }`}
            >
              <span className="text-base block mb-1">🟢 Standard Week</span>
              <span className="text-[10px] font-normal block leading-tight">
                Normal home cooking & standard task timings.
              </span>
            </button>

            <button
              onClick={() => setScheduleMode('custom')}
              className={`p-3 rounded-xl border text-left transition-all ${
                scheduleMode === 'custom'
                  ? 'border-[#00FF9D] bg-[#00FF9D]/10 text-slate-100 font-bold'
                  : 'border-slate-800 bg-slate-900/50 text-slate-400'
              }`}
            >
              <span className="text-base block mb-1">⚡ Some Days Are Different</span>
              <span className="text-[10px] font-normal block leading-tight">
                Travel, late work, or social dining out.
              </span>
            </button>
          </div>

          {/* Custom Day Customizer */}
          {scheduleMode === 'custom' && (
            <div className="space-y-2 pt-1 max-h-[48vh] overflow-y-auto pr-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Tag special circumstances for any day:
              </span>

              {daysOfWeek.map((day) => {
                const currentTag = dayTags[day] || 'normal';
                return (
                  <div
                    key={day}
                    className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-2"
                  >
                    <span className="text-xs font-bold text-slate-200 w-24 shrink-0">{day}</span>
                    <select
                      value={currentTag}
                      onChange={(e) => handleTagChange(day, e.target.value)}
                      className="bg-slate-800 border border-slate-700 text-slate-100 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#00FF9D] w-full"
                    >
                      {tagOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.emoji} {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300 leading-relaxed">
                🛡️ <strong>The Tovelu Iron Guarantee:</strong> THAIS automatically adjusts your tasks and macro timing on special days. Your 7-day caloric deficit and cellular healing target is <strong>never broken</strong>!
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-2">
            {savedSuccess ? (
              <div className="p-3 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
                ✅ Weekly Schedule Updated & Rebalanced!
              </div>
            ) : (
              <button
                onClick={handleSave}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)]"
              >
                Save & Recalibrate Week
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
