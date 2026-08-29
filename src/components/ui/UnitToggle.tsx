import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface UnitToggleProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  size?: 'sm' | 'default';
  disabled?: boolean;
}

export const UnitToggle: React.FC<UnitToggleProps> = ({
  options,
  value,
  onChange,
  className,
  size = 'default',
  disabled = false,
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Unit selection"
      className={twMerge(
        clsx(
          "inline-flex p-1 bg-subtle rounded-md border border-border-subtle select-none",
          disabled && "opacity-50 pointer-events-none",
          className
        )
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={clsx(
              "font-mono font-medium rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
              size === 'sm' 
                ? "text-[11px] px-2.5 py-1" 
                : "text-xs px-3.5 py-1.5 min-h-[36px]",
              isSelected
                ? "bg-surface text-brand-primary shadow-subtle font-semibold border border-border-subtle"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
