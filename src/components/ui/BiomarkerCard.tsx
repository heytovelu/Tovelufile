import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  HelpCircle, 
  Watch, 
  FlaskConical, 
  UserCheck, 
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';
import { HealthStatusType, DataProvenanceType } from '../../theme/tokens';

export interface BiomarkerRange {
  min: number;
  max: number;
  current: number;
  optimalMin: number;
  optimalMax: number;
}

export interface BiomarkerCardProps {
  name: string;
  value: string | number;
  unit: string;
  status: HealthStatusType;
  statusLabel: string;
  timestamp: string;
  provenance: DataProvenanceType;
  provenanceSource: string;
  range?: BiomarkerRange;
  onInspect?: () => void;
  className?: string;
}

export const BiomarkerCard: React.FC<BiomarkerCardProps> = ({
  name,
  value,
  unit,
  status,
  statusLabel,
  timestamp,
  provenance,
  provenanceSource,
  range,
  onInspect,
  className,
}) => {
  // Provenance Icon & Label mapping (Article 28)
  const provenanceConfig = {
    lab_verified: {
      icon: <FlaskConical className="w-3.5 h-3.5 text-brand-primary" />,
      label: "Lab Verified",
      variant: "brand" as const,
    },
    wearable_sync: {
      icon: <Watch className="w-3.5 h-3.5 text-status-evidence" />,
      label: "Wearable Sync",
      variant: "evidence" as const,
    },
    clinical_report: {
      icon: <FileCheck className="w-3.5 h-3.5 text-status-optimal" />,
      label: "Clinical Record",
      variant: "optimal" as const,
    },
    manual: {
      icon: <UserCheck className="w-3.5 h-3.5 text-status-unknown" />,
      label: "Self-Reported",
      variant: "neutral" as const,
    },
  }[provenance];

  // Status icons
  const statusIcon = {
    optimal: <CheckCircle2 className="w-3.5 h-3.5" />,
    attention: <AlertTriangle className="w-3.5 h-3.5" />,
    alert: <AlertOctagon className="w-3.5 h-3.5" />,
    evidence: <FileCheck className="w-3.5 h-3.5" />,
    unknown: <HelpCircle className="w-3.5 h-3.5" />,
  }[status];

  // Calculate position percentage on the range bar
  let rangePercent = 50;
  if (range && range.max > range.min) {
    rangePercent = Math.min(
      100,
      Math.max(0, ((range.current - range.min) / (range.max - range.min)) * 100)
    );
  }

  return (
    <div
      onClick={onInspect}
      role={onInspect ? "button" : undefined}
      tabIndex={onInspect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onInspect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onInspect();
        }
      }}
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card transition-all select-none",
          onInspect ? "hover:border-brand-primary/40 hover:shadow-modal active:scale-[0.99] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary" : "",
          className
        )
      )}
    >
      {/* Header: Title + Status Badge */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-text-primary tracking-tight">
            {name}
          </h4>
          <span className="text-[11px] font-mono text-text-muted">
            {timestamp}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Badge variant={status} hasDot icon={statusIcon}>
            {statusLabel}
          </Badge>
          {onInspect && (
            <ChevronRight className="w-4 h-4 text-text-muted shrink-0" />
          )}
        </div>
      </div>

      {/* Main Metric Numeric Display */}
      <div className="flex items-baseline gap-2 mt-3">
        <span className="font-numeric text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          {value}
        </span>
        <span className="text-sm font-sans font-medium text-text-secondary">
          {unit}
        </span>
      </div>

      {/* Physiological Range Indicator Bar */}
      {range && (
        <div className="mt-4 space-y-1.5">
          <div className="relative h-2 w-full rounded-full bg-subtle overflow-hidden border border-border-subtle">
            {/* Target Optimal Zone highlight */}
            <div
              className="absolute top-0 bottom-0 bg-status-optimal-bg border-x border-status-optimal-border"
              style={{
                left: `${((range.optimalMin - range.min) / (range.max - range.min)) * 100}%`,
                width: `${((range.optimalMax - range.optimalMin) / (range.max - range.min)) * 100}%`,
              }}
            />
            {/* Value Pin Indicator */}
            <div
              className={clsx(
                "absolute top-0 bottom-0 w-2.5 -ml-1 rounded-full shadow-sm",
                status === 'optimal' ? 'bg-status-optimal' : status === 'attention' ? 'bg-status-attention' : 'bg-status-alert'
              )}
              style={{ left: `${rangePercent}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] font-mono text-text-muted">
            <span>{range.min}</span>
            <span className="text-status-optimal font-medium">
              Target: {range.optimalMin}–{range.optimalMax} {unit}
            </span>
            <span>{range.max}</span>
          </div>
        </div>
      )}

      {/* Footer: Data Provenance (Article 28) */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 min-w-0">
          <Badge size="sm" variant={provenanceConfig.variant} icon={provenanceConfig.icon}>
            {provenanceConfig.label}
          </Badge>
          <span className="text-[11px] font-mono text-text-secondary truncate">
            {provenanceSource}
          </span>
        </div>

        {onInspect && (
          <span className="text-[11px] font-mono text-brand-primary shrink-0 hover:underline">
            Inspect Trends →
          </span>
        )}
      </div>
    </div>
  );
};
