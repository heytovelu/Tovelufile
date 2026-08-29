import React from 'react';
import { AlertOctagon, PhoneCall, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';

export interface EmergencyBannerProps {
  title?: string;
  message?: string;
  emergencyNumber?: string;
  jurisdiction?: string;
  onFindHospital?: () => void;
  className?: string;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  title = "Time-Sensitive Medical Escalation Notice",
  message = "If you or someone you are caring for is experiencing severe chest pain, shortness of breath, sudden numbness, or acute trauma, please seek emergency medical attention immediately. Tovelu does not provide emergency triage.",
  emergencyNumber = "112 / 911",
  jurisdiction = "Emergency Response Protocol (Article 34)",
  onFindHospital,
  className,
}) => {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={twMerge(
        clsx(
          "rounded-xl border-2 border-status-alert bg-status-alert-bg p-5 shadow-modal space-y-4",
          className
        )
      )}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-status-alert text-text-inverse flex items-center justify-center shrink-0 shadow-subtle">
          <AlertOctagon className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-status-alert tracking-tight">
              {title}
            </h3>
            <span className="text-[10px] font-mono font-semibold uppercase bg-status-alert text-text-inverse px-1.5 py-0.5 rounded">
              High Priority
            </span>
          </div>

          <p className="text-xs text-text-primary leading-relaxed">
            {message}
          </p>

          <p className="text-[11px] font-mono text-text-secondary pt-0.5">
            Jurisdiction standard: {jurisdiction}
          </p>
        </div>
      </div>

      {/* Emergency Action Escalations */}
      <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-status-alert-border/60">
        <a
          href={`tel:${emergencyNumber.split('/')[0].trim()}`}
          className="inline-flex items-center justify-center font-medium transition-all select-none min-h-touch px-5 py-2.5 rounded-md text-sm gap-2 bg-status-alert text-text-inverse hover:opacity-95 shadow-subtle active:scale-95"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call Emergency ({emergencyNumber})</span>
        </a>

        {onFindHospital ? (
          <Button
            variant="outline"
            onClick={onFindHospital}
            leftIcon={<MapPin className="w-4 h-4" />}
            className="border-status-alert text-status-alert hover:bg-status-alert/10"
          >
            Locate Nearest Hospital
          </Button>
        ) : (
          <a
            href="https://www.google.com/maps/search/nearest+emergency+hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-all select-none min-h-touch px-5 py-2.5 rounded-md text-sm gap-2 bg-surface border border-status-alert-border text-status-alert hover:bg-status-alert-bg active:scale-95"
          >
            <MapPin className="w-4 h-4" />
            <span>Locate Nearest Emergency Room</span>
          </a>
        )}
      </div>
    </div>
  );
};
