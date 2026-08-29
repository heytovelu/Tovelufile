import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';

export interface ErrorStateProps {
  title?: string;
  message: string;
  errorCode?: string;
  onRetry?: () => void;
  isRetrying?: boolean;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Data Retrieval Paused",
  message,
  errorCode,
  onRetry,
  isRetrying = false,
  className,
}) => {
  return (
    <div
      role="alert"
      aria-live="polite"
      className={twMerge(
        clsx(
          "rounded-xl border border-status-alert-border bg-status-alert-bg/50 p-6 max-w-md mx-auto space-y-4 text-center flex flex-col items-center justify-center",
          className
        )
      )}
    >
      <div className="w-12 h-12 rounded-full bg-status-alert-bg border border-status-alert-border flex items-center justify-center text-status-alert shadow-subtle">
        <AlertCircle className="w-6 h-6" />
      </div>

      <div className="space-y-1.5 max-w-xs">
        <h3 className="text-base font-semibold text-text-primary">
          {title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {message}
        </p>
        {errorCode && (
          <p className="text-[11px] font-mono text-text-muted">
            Error Diagnostic: {errorCode} (Article 87)
          </p>
        )}
      </div>

      {onRetry && (
        <Button
          variant="secondary"
          size="sm"
          isLoading={isRetrying}
          onClick={onRetry}
          leftIcon={<RefreshCw className="w-4 h-4" />}
        >
          Retry Connection
        </Button>
      )}
    </div>
  );
};
