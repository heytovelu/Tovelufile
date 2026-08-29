import React, { useState } from 'react';
import { 
  Bot, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Copy, 
  Check, 
  ExternalLink,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';
import { AIConfidenceLevel } from './ExplanationCard';

export interface AIGroundedCardProps {
  query: string;
  sourceFact: string;
  sourceCitation: string;
  sourceUrl?: string;
  aiInference: string;
  uncertaintyNotes: string;
  confidence: AIConfidenceLevel;
  modelIdentifier?: string;
  onFeedback?: (isPositive: boolean) => void;
  className?: string;
}

export const AIGroundedCard: React.FC<AIGroundedCardProps> = ({
  query,
  sourceFact,
  sourceCitation,
  sourceUrl,
  aiInference,
  uncertaintyNotes,
  confidence,
  modelIdentifier = "Tovelu Health Intelligence Engine v1.0",
  onFeedback,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState<'up' | 'down' | null>(null);

  const handleCopy = () => {
    const textToCopy = `Tovelu AI Synthesis\n\nQuery: ${query}\n\n[1] Source Fact:\n${sourceFact}\nCitation: ${sourceCitation}\n\n[2] AI Inference:\n${aiInference}\n\n[3] Uncertainty & Boundaries:\n${uncertaintyNotes}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const confidenceBadge = {
    high: { label: "High Confidence", variant: "optimal" as const },
    moderate: { label: "Moderate Confidence", variant: "brand" as const },
    low: { label: "Low Confidence", variant: "attention" as const },
    insufficient: { label: "Insufficient Info", variant: "unknown" as const },
    conflicting: { label: "Conflicting Data", variant: "attention" as const },
  }[confidence];

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-4 select-none transition-all",
          className
        )
      )}
    >
      {/* Header with AI Indicator, Query, & Confidence */}
      <div className="flex items-start justify-between gap-3 border-b border-border-subtle pb-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-subtle text-brand-dark flex items-center justify-center shrink-0 shadow-subtle mt-0.5">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-text-primary">
                Evidence-Grounded AI Synthesis
              </span>
              <span className="text-[10px] font-mono text-text-muted">
                Article 70 Compliant
              </span>
            </div>
            <p className="text-xs text-text-secondary italic mt-0.5">
              &ldquo;{query}&rdquo;
            </p>
          </div>
        </div>

        <Badge variant={confidenceBadge.variant} size="sm" hasDot>
          {confidenceBadge.label}
        </Badge>
      </div>

      {/* THREE-LAYER CONSTITUTIONAL SEPARATION (ARTICLE 70) */}
      <div className="space-y-3">
        {/* Layer 1: What the Source Says (Strict Truth) */}
        <div className="p-3.5 rounded-lg bg-status-evidence-bg/50 border border-status-evidence-border space-y-1.5 text-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono font-semibold text-status-evidence flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              1. What The Clinical Source Says
            </span>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono text-status-evidence hover:underline"
              >
                <span>Verify Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <p className="text-text-primary leading-relaxed">
            {sourceFact}
          </p>
          <p className="text-[11px] font-mono text-text-secondary pt-0.5">
            Source: {sourceCitation}
          </p>
        </div>

        {/* Layer 2: What the AI Infers (Calculated Synthesis) */}
        <div className="p-3.5 rounded-lg bg-brand-subtle/40 border border-brand-primary/20 space-y-1.5 text-xs">
          <span className="font-mono font-semibold text-brand-dark flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            2. What The AI Infers For You
          </span>
          <p className="text-text-primary leading-relaxed">
            {aiInference}
          </p>
        </div>

        {/* Layer 3: What Remains Uncertain (Boundaries & Limits) */}
        <div className="p-3.5 rounded-lg bg-status-attention-bg/40 border border-status-attention-border/60 space-y-1.5 text-xs">
          <span className="font-mono font-semibold text-status-attention flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            3. What Remains Uncertain (Article 22)
          </span>
          <p className="text-text-secondary leading-relaxed">
            {uncertaintyNotes}
          </p>
        </div>
      </div>

      {/* Footer: Controls & Audit Metadata */}
      <div className="pt-2 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0" />
          <span className="truncate">{modelIdentifier}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Helpful Feedback */}
          <div className="flex items-center border border-border-subtle rounded-md bg-subtle overflow-hidden">
            <button
              onClick={() => {
                setFeedbackSent('up');
                if (onFeedback) onFeedback(true);
              }}
              title="Accurate and grounded"
              className={clsx(
                "p-1.5 hover:bg-muted transition-colors text-text-secondary",
                feedbackSent === 'up' && "text-status-optimal bg-status-optimal-bg"
              )}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <div className="w-[1px] h-4 bg-border-subtle" />
            <button
              onClick={() => {
                setFeedbackSent('down');
                if (onFeedback) onFeedback(false);
              }}
              title="Misleading or inaccurate"
              className={clsx(
                "p-1.5 hover:bg-muted transition-colors text-text-secondary",
                feedbackSent === 'down' && "text-status-alert bg-status-alert-bg"
              )}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Synthesis */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-border-subtle bg-subtle hover:bg-muted text-text-secondary hover:text-text-primary text-xs font-mono transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-status-optimal" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
