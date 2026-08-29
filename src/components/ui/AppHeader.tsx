import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HomeostasisLogo } from './HomeostasisLogo';

export interface AppHeaderProps {
  statusBadge?: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  darkMode?: boolean;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  statusBadge,
  leftAction,
  rightAction,
  darkMode = false,
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
        {/* Left Section: Full Logo (Icon + Wordmark ONLY, NO TAGLINE) */}
        <div className="flex items-center gap-3 min-w-0">
          {leftAction ? (
            leftAction
          ) : (
            <HomeostasisLogo
              size={32}
              mode={darkMode ? 'on-dark' : 'on-light'}
              showWordmark
              className="shrink-0"
            />
          )}

          {statusBadge && (
            <div className="hidden sm:inline-flex shrink-0">
              {statusBadge}
            </div>
          )}
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
