import React, { useState } from 'react';
import { BookOpen, ExternalLink, ShieldCheck, ChevronDown, ChevronUp, Users, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';
import { EvidenceGradeType } from '../../theme/tokens';

export interface EvidenceCardProps {
  claim: string;
  grade: EvidenceGradeType;
  sourceTitle: string;
  journalOrAuthority: string;
  publicationYear: number | string;
  studyPopulation?: string;
  evidenceStrengthLabel: string;
  limitations?: string;
  citationUrl?: string;
  reviewDate?: string;
  className?: string;
}

export const EvidenceCard: React.FC<EvidenceCardProps> = ({
  claim,
  grade,
  sourceTitle,
  journalOrAuthority,
  publicationYear,
  studyPopulation,
  evidenceStrengthLabel,
  limitations,
  citationUrl,
  reviewDate = "Jan 2026",
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const gradeBadgeVariant = {
    A: "optimal" as const,
    B: "brand" as const,
    C: "attention" as const,
    preliminary: "unknown" as const,
  }[grade];

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-3.5 transition-all",
          className
        )
      )}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <Badge variant="evidence" icon={<BookOpen className="w-3.5 h-3.5" />}>
            Evidence Registry
          </Badge>
          <Badge variant={gradeBadgeVariant} size="sm">
            Grade {grade} • {evidenceStrengthLabel}
          </Badge>
        </div>

        <span className="text-[11px] font-mono text-text-muted">
          Review Date: {reviewDate}
        </span>
      </div>

      {/* Primary Health Claim (Article 37) */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-text-primary leading-snug">
          &ldquo;{claim}&rdquo;
        </p>
      </div>

      {/* Source Citation Info */}
      <div className="rounded-lg bg-subtle p-3 border border-border-subtle space-y-1.5 text-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-medium text-text-primary">
              {sourceTitle}
            </p>
            <p className="text-text-secondary">
              {journalOrAuthority} ({publicationYear})
            </p>
          </div>

          {citationUrl && (
            <a
              href={citationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-primary hover:underline shrink-0 pt-0.5"
            >
              <span>Verify DOI</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {studyPopulation && (
          <div className="flex items-center gap-1.5 text-text-muted text-[11px] pt-1">
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>Target Population: {studyPopulation}</span>
          </div>
        )}
      </div>

      {/* Expandable Limitations & Caveats (Article 33 & 123) */}
      {limitations && (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-xs font-mono text-text-secondary hover:text-text-primary py-1"
          >
            <span className="flex items-center gap-1.5 text-text-primary font-medium">
              <Info className="w-3.5 h-3.5 text-brand-primary" />
              Limitations & Clinical Boundaries (Article 33)
            </span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isExpanded && (
            <div className="mt-2 p-3 rounded-md bg-status-attention-bg/40 border border-status-attention-border/60 text-xs text-text-secondary space-y-1 animate-in fade-in duration-200">
              <p className="font-semibold text-text-primary">What Cannot Be Concluded:</p>
              <p className="leading-relaxed">{limitations}</p>
            </div>
          )}
        </div>
      )}

      {/* Scientific Governance Footer */}
      <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
        <span className="flex items-center gap-1 text-brand-primary">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Non-Hallucinated Citation (Article 24)
        </span>
      </div>
    </div>
  );
};
