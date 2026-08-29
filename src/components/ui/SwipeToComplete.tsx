import React, { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Check, ChevronRight, Sparkles } from 'lucide-react';

export interface SwipeToCompleteProps {
  label?: string;
  completedLabel?: string;
  onComplete: () => void;
  isCompleted?: boolean;
  className?: string;
  disabled?: boolean;
}

export const SwipeToComplete: React.FC<SwipeToCompleteProps> = ({
  label = "Swipe to Complete",
  completedLabel = "Completed",
  onComplete,
  isCompleted = false,
  className,
  disabled = false,
}) => {
  const [dragProgress, setDragProgress] = useState(isCompleted ? 1 : 0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  useEffect(() => {
    if (isCompleted) {
      setDragProgress(1);
    }
  }, [isCompleted]);

  const handleStart = (clientX: number) => {
    if (disabled || isCompleted) return;
    setIsDragging(true);
    startXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current || isCompleted) return;
    const containerWidth = containerRef.current.clientWidth;
    const thumbWidth = 48;
    const maxDrag = containerWidth - thumbWidth;
    
    const delta = clientX - startXRef.current;
    const clampedDelta = Math.max(0, Math.min(delta, maxDrag));
    const progress = clampedDelta / maxDrag;
    setDragProgress(progress);

    if (progress >= 0.95) {
      setIsDragging(false);
      setDragProgress(1);
      onComplete();
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragProgress < 0.95) {
      setDragProgress(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={twMerge(
        clsx(
          "relative h-12 rounded-full overflow-hidden select-none border transition-all duration-300",
          isCompleted
            ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
            : "bg-surface border-border-default hover:border-border-strong",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )
      )}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Background Progress Fill */}
      <div
        className={clsx(
          "absolute inset-y-0 left-0 transition-all duration-75",
          isCompleted
            ? "w-full bg-emerald-500/20"
            : "bg-brand-primary/15"
        )}
        style={{ width: isCompleted ? '100%' : `${dragProgress * 100}%` }}
      />

      {/* Center Label Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-semibold tracking-wide transition-opacity">
        {isCompleted ? (
          <span className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 animate-in zoom-in-95 duration-200">
            <Check className="w-4 h-4 stroke-[2.5]" />
            {completedLabel}
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="text-text-secondary pl-6 flex items-center gap-1">
            {label}
            <ChevronRight className="w-3.5 h-3.5 opacity-40 animate-pulse" />
          </span>
        )}
      </div>

      {/* Draggable Thumb / Slider Knob */}
      {!isCompleted && (
        <div
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          className={clsx(
            "absolute top-1 left-1 w-10 h-10 rounded-full bg-brand-primary text-white shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform",
            isDragging && "scale-105 shadow-elevated"
          )}
          style={{
            transform: `translateX(${
              containerRef.current
                ? dragProgress * (containerRef.current.clientWidth - 48)
                : 0
            }px)`,
          }}
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </div>
      )}
    </div>
  );
};
