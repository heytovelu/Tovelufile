import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'optimal' | 'attention' | 'alert' | 'evidence' | 'unknown' | 'brand' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  hasDot?: boolean;
  pulseDot?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'md',
  hasDot = false,
  pulseDot = false,
  icon,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium font-sans select-none rounded border transition-colors";

  const variantStyles = {
    optimal: "bg-status-optimal-bg text-status-optimal border-status-optimal-border",
    attention: "bg-status-attention-bg text-status-attention border-status-attention-border",
    alert: "bg-status-alert-bg text-status-alert border-status-alert-border",
    evidence: "bg-status-evidence-bg text-status-evidence border-status-evidence-border",
    unknown: "bg-status-unknown-bg text-status-unknown border-status-unknown-border",
    brand: "bg-brand-subtle text-brand-dark border-brand-primary/20",
    neutral: "bg-subtle text-text-secondary border-border-subtle",
    outline: "bg-transparent text-text-secondary border-border-default",
  };

  const dotColors = {
    optimal: "bg-status-optimal",
    attention: "bg-status-attention",
    alert: "bg-status-alert",
    evidence: "bg-status-evidence",
    unknown: "bg-status-unknown",
    brand: "bg-brand-primary",
    neutral: "bg-text-secondary",
    outline: "bg-text-secondary",
  };

  const sizeStyles = {
    sm: "text-[11px] px-1.5 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  return (
    <span
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )
      )}
      {...props}
    >
      {hasDot && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          {pulseDot && (
            <span className={clsx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotColors[variant])} />
          )}
          <span className={clsx("relative inline-flex rounded-full h-1.5 w-1.5", dotColors[variant])} />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
