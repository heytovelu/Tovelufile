import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  statusBadge?: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title = "Tovelu",
  subtitle = "Towards Better Health",
  statusBadge,
  leftAction,
  rightAction,
  className,
}) => {
  return (
    <header 
      className={twMerge(
        clsx(
          "sticky top-0 z-30 w-full bg-surface/90 backdrop-blur-md border-b border-border-subtle pt-safe transition-colors",
          className
        )
      )}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Left Section: Optional Custom Action or Brand Icon */}
        <div className="flex items-center gap-3 min-w-0">
          {leftAction ? (
            leftAction
          ) : (
            <div className="w-9 h-9 rounded-md bg-brand-primary flex items-center justify-center text-text-inverse font-bold text-lg shadow-subtle shrink-0">
              T
            </div>
          )}

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-semibold text-base tracking-tight text-text-primary truncate">
                {title}
              </h1>
              {statusBadge}
            </div>
            {subtitle && (
              <p className="text-xs text-text-secondary truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Actions */}
        {rightAction && (
          <div className="flex items-center gap-2 shrink-0">
            {rightAction}
          </div>
        )}
      </div>
    </header>
  );
};
