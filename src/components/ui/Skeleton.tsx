import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  style,
  ...props
}) => {
  const baseStyles = "animate-pulse bg-muted select-none";

  const variantStyles = {
    text: "h-4 w-full rounded",
    circular: "rounded-full shrink-0",
    rectangular: "rounded-md",
    card: "rounded-lg border border-border-subtle p-5 space-y-4",
  };

  const customStyle: React.CSSProperties = {
    width: width !== undefined ? width : undefined,
    height: height !== undefined ? height : undefined,
    ...style,
  };

  return (
    <div
      className={twMerge(clsx(baseStyles, variantStyles[variant], className))}
      style={customStyle}
      aria-hidden="true"
      {...props}
    />
  );
};

export const BiomarkerCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface p-5 shadow-card space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton variant="text" className="w-32 h-4" />
        <Skeleton variant="rectangular" className="w-16 h-5 rounded" />
      </div>
      <div className="flex items-baseline gap-3">
        <Skeleton variant="text" className="w-24 h-8" />
        <Skeleton variant="text" className="w-12 h-4" />
      </div>
      <Skeleton variant="rectangular" className="w-full h-2 rounded-full" />
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
        <Skeleton variant="text" className="w-28 h-3" />
        <Skeleton variant="text" className="w-16 h-3" />
      </div>
    </div>
  );
};
