import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'default',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.98]";

  const variantStyles = {
    primary: "bg-brand-primary text-text-inverse hover:bg-brand-primary-hover shadow-subtle",
    secondary: "bg-subtle text-text-primary hover:bg-muted border border-border-subtle",
    outline: "bg-transparent border border-border-default text-text-primary hover:bg-subtle",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-subtle",
    destructive: "bg-status-alert text-text-inverse hover:opacity-90 shadow-subtle",
  };

  /* Mobile-first touch targets: default size is min 48px (Article 40 & 42) */
  const sizeStyles = {
    default: "min-h-touch px-5 py-2.5 rounded-md text-sm gap-2",
    sm: "h-10 px-3.5 rounded-md text-xs gap-1.5",
    lg: "min-h-[56px] px-6 py-3.5 rounded-lg text-base gap-2.5",
    icon: "min-h-touch min-w-touch p-2.5 rounded-md",
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? "w-full" : "",
          className
        )
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';
