import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HomeostasisLogo } from './HomeostasisLogo';

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  statusBadge?: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  showOfficialLogo?: boolean;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title = "TOVELU",
  subtitle = "Towards Better Health",
  statusBadge,
  leftAction,
  rightAction,
  showOfficialLogo = true,
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
        {/* Left Section: Official Locked Brand Mark & Title */}
        <div className="flex items-center gap-3 min-w-0">
          {leftAction ? (
            leftAction
          ) : showOfficialLogo ? (
            <HomeostasisLogo size={32} mode="on-light" className="shrink-0 dark:hidden" />
          ) : null}
          {showOfficialLogo && (
            <HomeostasisLogo size={32} mode="on-dark" className="shrink-0 hidden dark:inline-flex" />
          )}

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-sans font-bold text-base tracking-[0.2em] text-text-primary truncate">
                {title}
              </h1>
              {statusBadge}
            </div>
            {subtitle && (
              <p className="text-[11px] font-mono tracking-wider text-text-secondary truncate">
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
