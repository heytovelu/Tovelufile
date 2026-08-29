import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Compass
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';
import { Button } from './Button';

export type AIConfidenceLevel = 'high' | 'moderate' | 'low' | 'insufficient' | 'conflicting';

export interface ExplanationCardProps {
  what: string;
  why: string;
  evidenceSummary: string;
  confidence: AIConfidenceLevel;
  limitations: string;
  nextStep: string;
  onNextStepAction?: () => void;
  className?: string;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  what,
  why,
  evidenceSummary,
  confidence,
  limitations,
  nextStep,
  onNextStepAction,
  className,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const confidenceConfig = {
    high: {
      label: "High Confidence",
      variant: "optimal" as const,
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    },
    moderate: {
      label: "Moderate Confidence",
      variant: "brand" as const,
      icon: <HelpCircle className="w-3.5 h-3.5" />,
    },
    low: {
      label: "Low Confidence",
      variant: "attention" as const,
      icon: <AlertCircle className="w-3.5 h-3.5" />,
    },
    insufficient: {
      label: "Insufficient Evidence",
      variant: "unknown" as const,
      icon: <HelpCircle className="w-3.5 h-3.5" />,
    },
    conflicting: {
      label: "Conflicting Data",
      variant: "attention" as const,
      icon: <AlertCircle className="w-3.5 h-3.5" />,
    },
  }[confidence];

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-4 transition-all",
          className
        )
      )}
    >
      {/* Header with Title and AI Confidence Pill (Article 22) */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-brand-primary" />
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-secondary">
            The Explanation Standard (Article 33)
          </h4>
        </div>

        <Badge variant={confidenceConfig.variant} hasDot icon={confidenceConfig.icon}>
          {confidenceConfig.label}
        </Badge>
      </div>

      {/* 1. WHAT: The Recommendation */}
      <div className="space-y-1">
        <span className="text-[11px] font-mono text-brand-primary font-semibold uppercase">
          What Tovelu Recommends
        </span>
        <p className="text-base font-semibold text-text-primary leading-snug">
          {what}
        </p>
      </div>

      {/* 2. WHY: Relevance Context */}
      <div className="p-3.5 rounded-lg bg-subtle border border-border-subtle space-y-1">
        <span className="text-[11px] font-mono text-text-secondary font-semibold uppercase">
          Why It Matters
        </span>
        <p className="text-xs text-text-secondary leading-relaxed">
          {why}
        </p>
      </div>

      {/* Collapsible Scientific Details */}
      <div>
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full py-1 text-xs font-mono text-text-secondary hover:text-text-primary"
        >
          <span className="flex items-center gap-1.5 font-medium text-text-primary">
            <FileText className="w-3.5 h-3.5 text-brand-primary" />
            Evidence & Clinical Boundaries
          </span>
          {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showDetails && (
          <div className="mt-3 space-y-3 p-3.5 rounded-lg bg-subtle/70 border border-border-subtle text-xs animate-in fade-in duration-200">
            {/* EVIDENCE */}
            <div className="space-y-0.5">
              <span className="font-mono text-[11px] text-status-evidence font-semibold uppercase">
                Supporting Evidence
              </span>
              <p className="text-text-secondary leading-relaxed">{evidenceSummary}</p>
            </div>

            {/* LIMITATIONS */}
            <div className="space-y-0.5 pt-2 border-t border-border-subtle">
              <span className="font-mono text-[11px] text-status-attention font-semibold uppercase">
                Limitations & What Cannot Be Concluded
              </span>
              <p className="text-text-secondary leading-relaxed">{limitations}</p>
            </div>
          </div>
        )}
      </div>

      {/* NEXT STEP (Actionable Call to Action) */}
      <div className="pt-2 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <span className="text-[11px] font-mono text-text-muted uppercase">Recommended Next Action</span>
          <p className="text-xs font-medium text-text-primary truncate">{nextStep}</p>
        </div>

        {onNextStepAction && (
          <Button
            size="sm"
            variant="primary"
            onClick={onNextStepAction}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shrink-0"
          >
            Take Action
          </Button>
        )}
      </div>
    </div>
  );
};
