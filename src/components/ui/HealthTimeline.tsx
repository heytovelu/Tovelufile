import React from 'react';
import { 
  Activity, 
  Utensils, 
  Pill, 
  Footprints, 
  AlertCircle, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';

export type TimelineEventType = 'measurement' | 'nutrition' | 'activity' | 'medication' | 'symptom';

export interface TimelineEvent {
  id: string;
  time: string;
  type: TimelineEventType;
  title: string;
  description?: string;
  metricValue?: string;
  metricStatus?: 'optimal' | 'attention' | 'alert' | 'unknown';
  provenance?: string;
}

export interface HealthTimelineProps {
  dateTitle: string;
  events: TimelineEvent[];
  onSelectEvent?: (event: TimelineEvent) => void;
  className?: string;
}

export const HealthTimeline: React.FC<HealthTimelineProps> = ({
  dateTitle,
  events,
  onSelectEvent,
  className,
}) => {
  const typeConfig = {
    measurement: {
      icon: <Activity className="w-4 h-4 text-brand-primary" />,
      bg: "bg-brand-subtle",
      border: "border-brand-primary/20",
      label: "Measurement",
    },
    nutrition: {
      icon: <Utensils className="w-4 h-4 text-status-attention" />,
      bg: "bg-status-attention-bg",
      border: "border-status-attention-border",
      label: "Nutrition",
    },
    activity: {
      icon: <Footprints className="w-4 h-4 text-status-optimal" />,
      bg: "bg-status-optimal-bg",
      border: "border-status-optimal-border",
      label: "Activity",
    },
    medication: {
      icon: <Pill className="w-4 h-4 text-status-evidence" />,
      bg: "bg-status-evidence-bg",
      border: "border-status-evidence-border",
      label: "Medication",
    },
    symptom: {
      icon: <AlertCircle className="w-4 h-4 text-status-alert" />,
      bg: "bg-status-alert-bg",
      border: "border-status-alert-border",
      label: "Symptom",
    },
  };

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-4 select-none",
          className
        )
      )}
    >
      {/* Timeline Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-primary" />
          <h4 className="text-sm font-semibold text-text-primary">
            Longitudinal Daily Timeline (Article 30)
          </h4>
        </div>
        <span className="text-xs font-mono text-text-muted">
          {dateTitle}
        </span>
      </div>

      {/* Vertical Timeline Nodes */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border-subtle">
        {events.map((ev) => {
          const config = typeConfig[ev.type];

          return (
            <div
              key={ev.id}
              onClick={() => onSelectEvent && onSelectEvent(ev)}
              className={clsx(
                "relative group",
                onSelectEvent && "cursor-pointer"
              )}
            >
              {/* Timeline Bullet Node */}
              <div className={clsx(
                "absolute -left-6 top-0.5 w-6 h-6 rounded-full border flex items-center justify-center shadow-subtle transition-transform group-hover:scale-110",
                config.bg,
                config.border
              )}>
                {config.icon}
              </div>

              {/* Event Content Box */}
              <div className="p-3.5 rounded-lg bg-subtle/70 border border-border-subtle hover:border-brand-primary/40 hover:bg-subtle transition-all">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-text-primary">
                        {ev.title}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">
                        {ev.time}
                      </span>
                    </div>

                    {ev.description && (
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {ev.description}
                      </p>
                    )}
                  </div>

                  {/* Optional Right Metric Value */}
                  {ev.metricValue && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="font-numeric text-sm font-bold text-text-primary">
                        {ev.metricValue}
                      </span>
                      {ev.metricStatus && (
                        <Badge variant={ev.metricStatus} size="sm" hasDot />
                      )}
                    </div>
                  )}
                </div>

                {ev.provenance && (
                  <div className="mt-2 pt-1.5 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-muted">
                    <span>Provenance: {ev.provenance}</span>
                    {onSelectEvent && (
                      <span className="flex items-center text-brand-primary">
                        Details <ChevronRight className="w-3 h-3 ml-0.5" />
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
