import React, { useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export interface MilestoneData {
  step: number;
  badge: string;
  title: string;
  subtitle: string;
  statInsight: string;
  icon: string;
}

interface DopamineMilestoneProps {
  milestone: MilestoneData;
  onContinue: () => void;
}

export const MILESTONES: Record<number, MilestoneData> = {
  5: {
    step: 5,
    badge: "Metabolic Baseline Calibrated",
    title: "You're in the top 5% taking action today! 🔥",
    subtitle: "THAIS just computed your Basal Metabolic Rate and caloric burn threshold.",
    statInsight: "83% of people with your baseline achieve noticeable fat loss in their first 14 days.",
    icon: "🔥"
  },
  11: {
    step: 11,
    badge: "Kitchen & Allergy Vault Sealed",
    title: "12,000 foods filtered for your exact plate! 🥑",
    subtitle: "Your dietary values and allergies are now 100% locked out from every future meal recommendation.",
    statInsight: "Zero willpower required: your meals are customized to foods you already love.",
    icon: "🥗"
  },
  16: {
    step: 16,
    badge: "Gut Microbiome Matrix Mapped",
    title: "Root cause of bloating uncovered! 🔬",
    subtitle: "You just revealed the exact timing of your digestion. THAIS knows whether to soothe stomach acid or small bowel bacteria.",
    statInsight: "Resolving gut transit timing reduces afternoon brain fog by up to 65%.",
    icon: "⚡"
  },
  22: {
    step: 22,
    badge: "Physical Somatic Scan 50% Milestone",
    title: "Halfway there! Your body's hidden signals decoded ✨",
    subtitle: "Your tongue, skin tags, and nail patterns gave THAIS clinical clues that standard blood tests often miss.",
    statInsight: "You're moving faster than 92% of users. Keep this incredible momentum going!",
    icon: "✨"
  },
  28: {
    step: 28,
    badge: "Circadian Rhythm & Sleep Clock Synced",
    title: "Deep sleep architecture unlocked! 🌙",
    subtitle: "THAIS now understands your nocturnal cortisol and liver glycogen rhythm. Say goodbye to 3 AM wakeups.",
    statInsight: "Optimizing morning sunlight and evening blue light doubles deep slow-wave sleep in 10 days.",
    icon: "🌙"
  },
  34: {
    step: 34,
    badge: "Cardiovascular Defense Initialized",
    title: "Artery defense & circulation mapped! ❤️",
    subtitle: "Cold hands, blood pressure trends, and fluid retention points have been integrated into your vascular score.",
    statInsight: "Targeted potassium-sodium balance normalizes microvascular capillary flow within 72 hours.",
    icon: "❤️"
  },
  40: {
    step: 40,
    badge: "Neuro-Vigor Engine Activated",
    title: "Brain fog & dopamine loop identified! 🧠",
    subtitle: "Your afternoon crashes and mental focus triggers are now mathematically understood by THAIS.",
    statInsight: "Stable blood sugar sequencing restores clean, calm all-day mental focus.",
    icon: "🚀"
  },
  46: {
    step: 46,
    badge: "Clinical Safety Firewall Certified",
    title: "Almost at the finish line! 🛡️",
    subtitle: "Your medical diagnoses and prescriptions are now protected by our Triple-Lock Safety Firewall.",
    statInsight: "100% medically safe recommendations guaranteed across all 500 conditions.",
    icon: "🛡️"
  },
  51: {
    step: 51,
    badge: "Grand Final Assembly",
    title: "All 52 biological puzzle pieces connected! 🧬",
    subtitle: "THAIS is holding all your data points. Ready to run your full multi-system biological scan.",
    statInsight: "Your personalized One Plan, Two Solutions blueprint is moments away!",
    icon: "🏆"
  }
};

export const DopamineMilestone: React.FC<DopamineMilestoneProps> = ({
  milestone,
  onContinue
}) => {
  // Auto continue timer option or tap anywhere
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onContinue();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onContinue]);

  return (
    <div className="max-w-xl mx-auto p-6 md:p-8 bg-surface border border-emerald-500/40 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
      {/* Visual Ambient Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />

      {/* Floating Confetti Particle Emojis */}
      <div className="flex justify-center gap-3 text-2xl animate-bounce">
        <span>🎉</span>
        <span>✨</span>
        <span>🔥</span>
        <span>💪</span>
        <span>⚡</span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
        <Sparkles className="w-3.5 h-3.5" />
        {milestone.badge}
      </div>

      {/* Title & Subtitle */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight leading-snug">
          {milestone.title}
        </h2>
        <p className="text-xs md:text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
          {milestone.subtitle}
        </p>
      </div>

      {/* Social / Biological Proof Card */}
      <div className="p-4 rounded-2xl bg-surface-raised border border-border-default flex items-center gap-3 text-left">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 text-xl font-bold">
          {milestone.icon}
        </div>
        <div className="text-xs text-text-primary font-medium leading-relaxed">
          <strong className="text-emerald-600 dark:text-emerald-400 block font-bold text-[11px] uppercase tracking-wider mb-0.5">
            Biological Fact:
          </strong>
          {milestone.statInsight}
        </div>
      </div>

      {/* Tap to Continue Button */}
      <Button
        size="lg"
        variant="primary"
        fullWidth
        onClick={onContinue}
        className="rounded-2xl py-4 font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-lg shadow-emerald-500/25 active:scale-98 transition-all"
      >
        <span>Continue Streak</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <span className="block text-[11px] text-text-muted">
        Press <kbd className="px-1.5 py-0.5 rounded bg-surface-raised border text-[10px]">Enter ↵</kbd> or tap to keep going
      </span>
    </div>
  );
};
