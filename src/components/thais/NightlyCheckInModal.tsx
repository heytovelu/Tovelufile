import React, { useState } from 'react';
import { 
  X, Moon, Check, SkipForward, Sparkles, Smile, Frown, Meh, 
  HelpCircle
} from 'lucide-react';
import { DailyHealthTask } from '../../services/thais/types';
import { Button } from '../ui/Button';

interface NightlyCheckInModalProps {
  isOpen: boolean;
  tasks: DailyHealthTask[];
  onClose: () => void;
  onSubmitCheckIn: (reconciledTasks: DailyHealthTask[], reflection: any) => void;
}

export const NightlyCheckInModal: React.FC<NightlyCheckInModalProps> = ({
  isOpen,
  tasks,
  onClose,
  onSubmitCheckIn
}) => {
  const [level, setLevel] = useState<1 | 2>(1);
  const [taskList, setTaskList] = useState<DailyHealthTask[]>(tasks);
  
  // Level 2 Reflections
  const [physicalState, setPhysicalState] = useState<'energized' | 'bloated' | 'tired'>('energized');
  const [mentalState, setMentalState] = useState<'sharp' | 'foggy' | 'overwhelmed'>('sharp');
  const [emotionalState, setEmotionalState] = useState<'calm' | 'stressed' | 'flat'>('calm');
  const [activeInquiryResponse, setActiveInquiryResponse] = useState<string>('no');
  const [personalNotes, setPersonalNotes] = useState<string>('');

  if (!isOpen) return null;

  const handleToggleTask = (taskId: string, status: boolean) => {
    setTaskList(prev => prev.map(t => t.id === taskId ? { ...t, isCompleted: status } : t));
  };

  const handleFinish = () => {
    onSubmitCheckIn(taskList, {
      physicalState,
      mentalState,
      emotionalState,
      activeInquiryResponse,
      personalNotes
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-surface border border-border-default rounded-3xl p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-default pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Moon className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                Nightly 1-Minute Check-In • Level {level} of 2
              </span>
              <h3 className="text-sm font-bold text-text-primary">
                {level === 1 ? "Reconcile Today's Tasks" : "60-Second Whole-Body Reflection"}
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* LEVEL 1: TASK RECONCILIATION */}
        {level === 1 && (
          <div className="space-y-4">
            <p className="text-xs text-text-secondary">
              Zero guilt. Did you complete these tasks today, or should we mark them as skipped?
            </p>

            <div className="space-y-2">
              {taskList.map((task) => (
                <div key={task.id} className="p-3 rounded-2xl bg-surface-raised border border-border-default flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">{task.title}</h4>
                    <span className="text-[10px] text-text-muted">{task.targetTiming}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleToggleTask(task.id, true)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                        task.isCompleted
                          ? 'bg-emerald-500 text-white shadow-sm'
                          : 'bg-surface text-text-muted hover:text-text-primary'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" /> Done
                    </button>
                    <button
                      onClick={() => handleToggleTask(task.id, false)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                        !task.isCompleted
                          ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-surface text-text-muted hover:text-text-primary'
                      }`}
                    >
                      <SkipForward className="w-3.5 h-3.5" /> Skip
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="sm"
              variant="primary"
              fullWidth
              onClick={() => setLevel(2)}
              className="rounded-xl py-2.5 font-bold text-xs"
            >
              Continue to Level 2 (Reflection) →
            </Button>
          </div>
        )}

        {/* LEVEL 2: 3-AXIS REFLECTION + ACTIVE INQUIRY */}
        {level === 2 && (
          <div className="space-y-4">
            {/* Physical */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-text-primary">1. Physical: How did your stomach & body feel today?</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPhysicalState('energized')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                    physicalState === 'energized' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  <Smile className="w-4 h-4" /> Energized & Light
                </button>
                <button
                  onClick={() => setPhysicalState('bloated')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                    physicalState === 'bloated' ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  <Meh className="w-4 h-4" /> Bloated / Heavy
                </button>
                <button
                  onClick={() => setPhysicalState('tired')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                    physicalState === 'tired' ? 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  <Frown className="w-4 h-4" /> Tired / Achy
                </button>
              </div>
            </div>

            {/* Mental */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-text-primary">2. Mental Clarity:</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMentalState('sharp')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    mentalState === 'sharp' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Sharp Focus
                </button>
                <button
                  onClick={() => setMentalState('foggy')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    mentalState === 'foggy' ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Brain Fog
                </button>
                <button
                  onClick={() => setMentalState('overwhelmed')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    mentalState === 'overwhelmed' ? 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Overwhelmed
                </button>
              </div>
            </div>

            {/* Emotional */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-text-primary">3. Emotional Nervous State:</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setEmotionalState('calm')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    emotionalState === 'calm' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Calm & Peaceful
                </button>
                <button
                  onClick={() => setEmotionalState('stressed')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    emotionalState === 'stressed' ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Stressed / Anxious
                </button>
                <button
                  onClick={() => setEmotionalState('flat')}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    emotionalState === 'flat' ? 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400' : 'bg-surface-raised border-border-default text-text-secondary'
                  }`}
                >
                  Flat / Numb
                </button>
              </div>
            </div>

            {/* Active Clinical Inquiry Question */}
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400">
                <HelpCircle className="w-4 h-4" />
                THAIS Precision Confirmation Inquiry
              </div>
              <p className="text-xs text-text-primary">
                "We noticed your step count was slightly lower and sodium was higher today. Did you feel any slight puffiness in your fingers or extra thirst this evening?"
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveInquiryResponse('yes')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                    activeInquiryResponse === 'yes' ? 'bg-indigo-500 text-white' : 'bg-surface text-text-muted border-border-default'
                  }`}
                >
                  Yes, slightly
                </button>
                <button
                  onClick={() => setActiveInquiryResponse('no')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                    activeInquiryResponse === 'no' ? 'bg-indigo-500 text-white' : 'bg-surface text-text-muted border-border-default'
                  }`}
                >
                  No, completely normal
                </button>
              </div>
            </div>

            {/* Optional 1-sentence note */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-text-muted">Anything personal that happened today? (Optional)</span>
              <input
                type="text"
                value={personalNotes}
                onChange={(e) => setPersonalNotes(e.target.value)}
                placeholder="e.g. Worked late, had 1 extra cookie..."
                className="w-full bg-surface-raised border border-border-default rounded-xl px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button onClick={() => setLevel(1)} className="px-3 py-2 text-xs text-text-muted hover:text-text-primary">
                ← Back
              </button>
              <Button
                size="sm"
                variant="primary"
                fullWidth
                onClick={handleFinish}
                className="rounded-xl py-2.5 font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                Submit Nightly Check-In • THAIS Learns Overnight
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
