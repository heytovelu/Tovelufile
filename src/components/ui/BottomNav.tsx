import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface NavTabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  badge?: number | string | boolean;
}

export interface BottomNavProps {
  items: NavTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  onChange,
  className,
}) => {
  return (
    <nav
      role="tablist"
      aria-label="Main Navigation"
      className={twMerge(
        clsx(
          "fixed bottom-0 left-0 right-0 z-30 bg-surface/95 backdrop-blur-lg border-t border-border-subtle pb-safe transition-colors",
          className
        )
      )}
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-1">
        {items.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-label={tab.label}
              onClick={() => onChange(tab.id)}
              className={clsx(
                /* Minimum 48px touch target for thumb ergonomics (Article 40 & 42) */
                "flex flex-col items-center justify-center flex-1 min-h-touch py-1 px-2 rounded-lg transition-all relative select-none",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary active:scale-95",
                isActive 
                  ? "text-brand-primary font-semibold" 
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center">
                <span className={clsx("transition-transform", isActive ? "scale-110" : "scale-100")}>
                  {isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
                </span>

                {tab.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-status-alert text-[10px] font-bold text-text-inverse font-mono shadow-subtle">
                    {typeof tab.badge === 'boolean' ? '' : tab.badge}
                  </span>
                )}
              </div>

              {/* Tab Label */}
              <span className={clsx(
                "text-[10px] tracking-tight mt-1 transition-colors leading-none",
                isActive ? "text-brand-primary font-medium" : "text-text-muted"
              )}>
                {tab.label}
              </span>

              {/* Active Sub-bar Indicator */}
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 rounded-full bg-brand-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
