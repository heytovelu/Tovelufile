import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface OfflineBannerProps {
  isOffline: boolean;
  onSync?: () => void;
  isSyncing?: boolean;
  className?: string;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({
  isOffline,
  onSync,
  isSyncing = false,
  className,
}) => {
  if (!isOffline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={twMerge(
        clsx(
          "w-full bg-status-attention-bg border-b border-status-attention-border px-4 py-2 text-xs text-status-attention flex items-center justify-between gap-3 select-none",
          className
        )
      )}
    >
      <div className="flex items-center gap-2 min-w-0">
        <WifiOff className="w-4 h-4 shrink-0" />
        <span className="truncate">
          <strong>Offline Mode Active:</strong> Changes are encrypted locally and will sync once connection returns (Article 44).
        </span>
      </div>

      {onSync && (
        <button
          onClick={onSync}
          disabled={isSyncing}
          className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-status-attention hover:underline shrink-0"
        >
          <RefreshCw className={clsx("w-3 h-3", isSyncing && "animate-spin")} />
          <span>{isSyncing ? "Syncing..." : "Sync Now"}</span>
        </button>
      )}
    </div>
  );
};
