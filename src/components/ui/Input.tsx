import React, { forwardRef, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  label,
  helperText,
  error,
  leftIcon,
  rightElement,
  fullWidth = true,
  id,
  disabled,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={clsx("flex flex-col space-y-1.5", fullWidth && "w-full")}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-text-primary select-none flex items-center justify-between"
        >
          <span>{label}</span>
          {props.required && <span className="text-status-alert text-[11px]">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-text-muted">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={twMerge(
            clsx(
              /* Minimum 48px touch height and 16px font size to prevent mobile auto-zoom */
              "min-h-touch w-full rounded-md border bg-surface px-3.5 text-base sm:text-sm text-text-primary placeholder:text-text-muted transition-all",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent",
              "disabled:opacity-50 disabled:bg-subtle disabled:cursor-not-allowed",
              leftIcon ? "pl-10" : "",
              rightElement ? "pr-16" : "",
              error
                ? "border-status-alert focus:ring-status-alert"
                : "border-border-default hover:border-brand-primary/50",
              className
            )
          )}
          {...props}
        />

        {rightElement && (
          <div className="absolute right-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>

      {error ? (
        <p id={errorId} className="text-xs text-status-alert font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
