import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

export interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  variant?: ToastVariant;
  durationMs?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  isOpen,
  onClose,
  title,
  message,
  variant = 'success',
  durationMs = 4000,
  className,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [isOpen, durationMs, onClose]);

  if (!isOpen) return null;

  const iconConfig = {
    success: <CheckCircle2 className="w-4 h-4 text-status-optimal" />,
    warning: <AlertTriangle className="w-4 h-4 text-status-attention" />,
    error: <AlertCircle className="w-4 h-4 text-status-alert" />,
    info: <Info className="w-4 h-4 text-brand-primary" />,
  }[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={twMerge(
        clsx(
          "fixed top-4 right-4 z-50 max-w-sm w-full bg-surface border border-border-default rounded-xl p-4 shadow-modal",
          "flex items-start gap-3 animate-in slide-in-from-top duration-200 transition-all select-none",
          className
        )
      )}
    >
      <div className="shrink-0 mt-0.5">
        {iconConfig}
      </div>

      <div className="flex-1 min-w-0 space-y-0.5">
        <h5 className="text-xs font-semibold text-text-primary tracking-tight">
          {title}
        </h5>
        {message && (
          <p className="text-[11px] text-text-secondary leading-snug">
            {message}
          </p>
        )}
      </div>

      <button
        onClick={onClose}
        aria-label="Dismiss toast"
        className="w-6 h-6 rounded flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-subtle transition-all shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
