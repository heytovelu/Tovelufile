import React, { useState } from 'react';
import { 
  Lock, 
  Download, 
  Trash2, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';

export interface PrivacyConsentCardProps {
  onExportData?: () => void;
  onPurgeData?: () => void;
  className?: string;
}

export const PrivacyConsentCard: React.FC<PrivacyConsentCardProps> = ({
  onExportData,
  onPurgeData,
  className,
}) => {
  const [wearableSync, setWearableSync] = useState(true);
  const [aiMemory, setAiMemory] = useState(true);
  const [researchContrib, setResearchContrib] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExported(true);
    if (onExportData) onExportData();
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-5 select-none",
          className
        )
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-border-subtle pb-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-status-optimal-bg text-status-optimal flex items-center justify-center shrink-0 border border-status-optimal-border">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary tracking-tight">
              User Ownership & Privacy Controls
            </h4>
            <p className="text-xs text-text-secondary mt-0.5">
              Articles 15 & 16: You own your health data. Zero dark patterns.
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono font-medium uppercase bg-status-optimal-bg text-status-optimal px-2 py-0.5 rounded border border-status-optimal-border">
          E2E Encrypted
        </span>
      </div>

      {/* Granular Permission Toggles */}
      <div className="space-y-3">
        {/* Toggle 1: Wearables */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-subtle/60 border border-border-subtle">
          <div className="space-y-0.5 pr-3">
            <span className="text-xs font-semibold text-text-primary block">
              Continuous Wearable Biosignal Sync
            </span>
            <p className="text-[11px] text-text-secondary leading-tight">
              Ingests background heart rate and activity metrics from Apple Health / Google Health Connect.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={wearableSync}
            onClick={() => setWearableSync(!wearableSync)}
            className={clsx(
              "w-11 h-6 rounded-full transition-colors relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
              wearableSync ? "bg-brand-primary" : "bg-muted"
            )}
          >
            <span className={clsx(
              "w-5 h-5 rounded-full bg-surface shadow-subtle transform transition-transform absolute top-0.5 left-0.5",
              wearableSync ? "translate-x-5" : "translate-x-0"
            )} />
          </button>
        </div>

        {/* Toggle 2: AI Memory (Article 71) */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-subtle/60 border border-border-subtle">
          <div className="space-y-0.5 pr-3">
            <span className="text-xs font-semibold text-text-primary block">
              Longitudinal AI Memory (Article 71)
            </span>
            <p className="text-[11px] text-text-secondary leading-tight">
              Permits Tovelu intelligence to connect health context across past conversations rather than starting blank.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={aiMemory}
            onClick={() => setAiMemory(!aiMemory)}
            className={clsx(
              "w-11 h-6 rounded-full transition-colors relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
              aiMemory ? "bg-brand-primary" : "bg-muted"
            )}
          >
            <span className={clsx(
              "w-5 h-5 rounded-full bg-surface shadow-subtle transform transition-transform absolute top-0.5 left-0.5",
              aiMemory ? "translate-x-5" : "translate-x-0"
            )} />
          </button>
        </div>

        {/* Toggle 3: Anonymized Clinical Research */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-subtle/60 border border-border-subtle">
          <div className="space-y-0.5 pr-3">
            <span className="text-xs font-semibold text-text-primary block">
              Anonymized Scientific Research Contribution
            </span>
            <p className="text-[11px] text-text-secondary leading-tight">
              Voluntary de-identified contribution to open biomedical research. Off by default.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={researchContrib}
            onClick={() => setResearchContrib(!researchContrib)}
            className={clsx(
              "w-11 h-6 rounded-full transition-colors relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
              researchContrib ? "bg-brand-primary" : "bg-muted"
            )}
          >
            <span className={clsx(
              "w-5 h-5 rounded-full bg-surface shadow-subtle transform transition-transform absolute top-0.5 left-0.5",
              researchContrib ? "translate-x-5" : "translate-x-0"
            )} />
          </button>
        </div>
      </div>

      {/* Data Portability & Rights Actions */}
      <div className="pt-2 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
        <Button
          size="sm"
          variant="outline"
          onClick={handleExport}
          leftIcon={exported ? <CheckCircle2 className="w-4 h-4 text-status-optimal" /> : <Download className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {exported ? "Data Export Ready" : "Export Health Data (JSON/CSV)"}
        </Button>

        {onPurgeData && (
          <Button
            size="sm"
            variant="ghost"
            onClick={onPurgeData}
            leftIcon={<Trash2 className="w-4 h-4 text-status-alert" />}
            className="text-status-alert hover:bg-status-alert/10 w-full sm:w-auto"
          >
            Purge All Stored Records
          </Button>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-muted pt-1">
        <Info className="w-3.5 h-3.5 text-brand-primary shrink-0" />
        <span>Tovelu never sells, rents, or brokers personal health data. Ever.</span>
      </div>
    </div>
  );
};
