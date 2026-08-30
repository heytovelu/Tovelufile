import React, { useState } from 'react';

interface SosRescueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPlanAdjustment?: (note: string) => void;
  darkMode?: boolean;
}

export const SosRescueModal: React.FC<SosRescueModalProps> = ({
  isOpen,
  onClose,
  onApplyPlanAdjustment,
  darkMode = true,
}) => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  if (!isOpen) return null;

  const rescueProtocols = [
    {
      id: 'overate',
      title: 'Ate Heavy Carbs / Pizza / Overate',
      emoji: '🍕',
      severity: 'Common • Zero Guilt',
      summary: 'Activate muscle GLUT4 receptors to absorb excess glucose without insulin fat-storage.',
      actions: [
        'Take a 7 to 10-minute brisk walk immediately. Muscle contractions pull glucose directly from blood.',
        'Drink 300ml room-temperature water with 1 tbsp apple cider vinegar or lemon juice.',
        'THAIS will automatically rebalance your next meal calories. You remain 100% on track.',
      ],
      adjustment: 'Auto-rebalanced upcoming meals: -18g carbs, +10g fiber.',
    },
    {
      id: 'bloated',
      title: 'Stomach Distended / Painfully Bloated',
      emoji: '🎈',
      severity: 'Acute Gut Distress',
      summary: 'Clear trapped gastrointestinal gas and accelerate sluggish gastric emptying.',
      actions: [
        'Sip 250ml warm water with crushed ginger or peppermint tea.',
        'Perform 10 deep diaphragmatic belly breaths while sitting upright.',
        'Strictly avoid cold ice water, carbonated sodas, and chewing gum for the next 4 hours.',
      ],
      adjustment: 'Added 1 cup warm ginger-digestive infusion to evening routine.',
    },
    {
      id: 'craving',
      title: 'Intense Sugar / Late-Night Craving',
      emoji: '🍫',
      severity: 'Neuro-Chemical Signal',
      summary: 'Your brain dopamine or liver glycogen is signaling. Reset the receptor in 3 minutes.',
      actions: [
        'Place a tiny pinch of Himalayan mineral salt on your tongue and drink 250ml water.',
        'If still hungry, have 2 squares of 85%+ dark chocolate with 5 raw almonds (fat + fiber).',
        'Wait 5 minutes: dopamine cravings naturally decay after 300 seconds.',
      ],
      adjustment: 'Logged emergency low-glycemic satiety snack (90 kcal).',
    },
    {
      id: 'alcohol',
      title: 'Drank Alcohol / Cocktails Tonight',
      emoji: '🍷',
      severity: 'Liver & Hydration Defense',
      summary: 'Shield liver glutathione reserves and protect tonight’s deep REM sleep.',
      actions: [
        'Drink 400ml water with a pinch of salt and lemon before falling asleep.',
        'Do not eat high-fat fried food late; let your liver clear ethanol uninterrupted.',
        'Sleep with an extra pillow to prevent nocturnal acid reflux.',
      ],
      adjustment: 'Scheduled morning electrolyte replenishment protocol.',
    },
  ];

  const currentProtocol = rescueProtocols.find((p) => p.id === selectedIssue);

  const handleApply = () => {
    if (currentProtocol && onApplyPlanAdjustment) {
      onApplyPlanAdjustment(currentProtocol.adjustment);
      setApplied(true);
      setTimeout(() => {
        setApplied(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode
            ? 'bg-[#0E1318] text-slate-100 border-slate-700/80 shadow-black'
            : 'bg-white text-slate-900 border-slate-200 shadow-xl'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xl">🆘</span>
            <div>
              <h3 className="text-base font-bold tracking-tight">THAIS Emergency Rescue</h3>
              <p className="text-xs text-slate-400">Zero guilt • 100% biological recovery in 2 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {!selectedIssue ? (
            <>
              <p className="text-xs text-slate-300 font-medium">
                What is your body experiencing right now? Select an emergency fix:
              </p>
              <div className="space-y-2">
                {rescueProtocols.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedIssue(p.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 hover:border-[#00FF9D]/60 hover:bg-slate-800/50'
                        : 'bg-slate-50 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{p.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-200">{p.title}</div>
                      <div className="text-[11px] text-slate-400 truncate">{p.summary}</div>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">→</span>
                  </button>
                ))}
              </div>
            </>
          ) : currentProtocol ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedIssue(null)}
                  className="text-xs text-[#00FF9D] hover:underline flex items-center gap-1"
                >
                  ← Choose different issue
                </button>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentProtocol.severity}
                </span>
              </div>

              <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{currentProtocol.emoji}</span>
                  <h4 className="text-sm font-bold text-slate-100">{currentProtocol.title}</h4>
                </div>
                <p className="text-xs text-slate-300 mb-3">{currentProtocol.summary}</p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#00FF9D] uppercase tracking-wider">Immediate 2-Minute Actions:</span>
                  {currentProtocol.actions.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-[#00FF9D] font-bold shrink-0">{i + 1}.</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {applied ? (
                <div className="p-3 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
                  ✅ Plan Rebalanced! Cells are protected.
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)]"
                >
                  ⚡ Apply 1-Tap Recovery Protocol to Plan
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
