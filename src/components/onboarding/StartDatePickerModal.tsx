import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface StartDatePickerModalProps {
  isOpen: boolean;
  onConfirmStartDate: (dateChoice: string) => void;
  darkMode?: boolean;
}

export const StartDatePickerModal: React.FC<StartDatePickerModalProps> = ({
  isOpen,
  onConfirmStartDate,
  darkMode = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<'tomorrow' | 'monday' | 'today'>('tomorrow');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onConfirmStartDate(selectedOption);
    }, 600);
  };

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-2xl';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';

  const options = [
    {
      id: 'tomorrow' as const,
      title: 'Tomorrow Morning (Recommended)',
      subtitle: 'Monday, August 31 • Gives you today to review your kitchen groceries.',
      icon: '🌅',
      badge: 'POPULAR CHOICE',
    },
    {
      id: 'today' as const,
      title: 'Start Right Now (Day 1 Today)',
      subtitle: 'Sunday, August 30 • Jump straight into today\'s chronological routine.',
      icon: '⚡',
      badge: null,
    },
    {
      id: 'monday' as const,
      title: 'Next Monday Clean Reset',
      subtitle: 'Monday, September 7 • Full 7 days to organize batch prep and pantry.',
      icon: '🗓️',
      badge: null,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`w-full max-w-md rounded-3xl p-6 sm:p-7 border transition-all ${cardCls} space-y-5`}>
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <HomeostasisLogo size={36} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
            MEMBERSHIP ACTIVATED • STEP 2 OF 2
          </div>
          <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
            When Do You Want to Start Day 1?
          </h2>
          <p className={`text-xs ${textSub}`}>
            THAIS will lock your biological schedule and synchronize your meals to this start date.
          </p>
        </div>

        {/* Date Choices */}
        <div className="space-y-2.5">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? darkMode
                      ? 'border-[#00FF9D] bg-emerald-950/20 shadow-[0_0_15px_rgba(0,255,157,0.15)]'
                      : 'border-emerald-500 bg-emerald-50/60 shadow-sm'
                    : subBoxCls
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span className="text-2xl">{opt.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black tracking-tight ${textTitle}`}>
                        {opt.title}
                      </span>
                      {opt.badge && (
                        <span className="text-[8px] font-black uppercase px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-700 dark:text-[#00FF9D] border border-emerald-500/30">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-[10px] ${textSub} leading-tight mt-0.5 truncate`}>
                      {opt.subtitle}
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  isSelected
                    ? 'border-[#00FF9D] bg-[#00FF9D]'
                    : darkMode ? 'border-slate-700' : 'border-slate-300'
                }`}>
                  {isSelected && <span className="text-slate-950 text-xs font-black">✓</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Launch Button */}
        <div className="pt-2">
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
          >
            <span>{isSubmitting ? 'Calibrating Day 1 Biological Plan...' : 'Lock Start Date & Enter Day 1 →'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
