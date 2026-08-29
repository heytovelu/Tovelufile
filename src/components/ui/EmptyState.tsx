import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  className,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col items-center justify-center text-center p-8 rounded-xl border border-dashed border-border-default bg-surface/50 max-w-md mx-auto space-y-4",
          className
        )
      )}
    >
      {/* Calm Icon Container */}
      <div className="w-14 h-14 rounded-full bg-subtle border border-border-subtle flex items-center justify-center text-brand-primary shadow-subtle">
        {icon}
      </div>

      {/* Text Copy */}
      <div className="space-y-1.5 max-w-xs">
        <h3 className="text-base font-semibold text-text-primary tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Buttons */}
      {(actionLabel || secondaryActionLabel) && (
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 w-full justify-center">
          {actionLabel && onAction && (
            <Button variant="primary" onClick={onAction} className="w-full sm:w-auto">
              {actionLabel}
            </Button>
          )}

          {secondaryActionLabel && onSecondaryAction && (
            <Button variant="outline" onClick={onSecondaryAction} className="w-full sm:w-auto">
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
