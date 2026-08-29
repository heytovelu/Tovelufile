import React, { useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { MilestoneData } from '../../data/milestonesData';

interface DopamineMilestoneProps {
  milestone: MilestoneData;
  onContinue: () => void;
}

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
