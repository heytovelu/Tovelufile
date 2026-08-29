import React, { useState, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Info, HelpCircle } from 'lucide-react';
import { Badge } from './Badge';

export interface DataPoint {
  date: string;
  displayDate: string;
  value: number | null; // null = missing observation (Article 29)
  provenance?: string;
}

export interface TrendChartProps {
  title: string;
  unit: string;
  data: DataPoint[];
  optimalMin?: number;
  optimalMax?: number;
  timeRangeOptions?: string[];
  selectedTimeRange?: string;
  onTimeRangeChange?: (range: string) => void;
  className?: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  title,
  unit,
  data,
  optimalMin,
  optimalMax,
  timeRangeOptions = ['7D', '30D', '90D', '1Y'],
  selectedTimeRange = '30D',
  onTimeRangeChange,
  className,
}) => {
  const chartId = useId();
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);

  // Filter valid data points
  const validPoints = data.filter(d => d.value !== null);
  const totalDays = data.length;
  const recordedDays = validPoints.length;
  const missingDays = totalDays - recordedDays;

  // Calculate statistics
  const values = validPoints.map(d => d.value as number);
  const average = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1) : '—';
  const minObserved = values.length > 0 ? Math.min(...values) : 0;
  const maxObserved = values.length > 0 ? Math.max(...values) : 100;

  // SVG Drawing Dimensions
  const svgWidth = 600;
  const svgHeight = 220;
  const paddingX = 36;
  const paddingTop = 24;
  const paddingBottom = 36;
  const plotWidth = svgWidth - paddingX * 2;
  const plotHeight = svgHeight - paddingTop - paddingBottom;

  const yMin = Math.min(minObserved, optimalMin !== undefined ? optimalMin - 10 : 50);
  const yMax = Math.max(maxObserved, optimalMax !== undefined ? optimalMax + 10 : 150);
  const yRange = yMax === yMin ? 1 : yMax - yMin;

  const getX = (index: number) => paddingX + (index / Math.max(1, totalDays - 1)) * plotWidth;
  const getY = (val: number) => paddingTop + plotHeight - ((val - yMin) / yRange) * plotHeight;

  // Generate SVG path segments for continuous recorded data
  const segments: { path: string }[] = [];
  let currentSegment = "";

  data.forEach((d, i) => {
    if (d.value !== null) {
      const x = getX(i);
      const y = getY(d.value);
      if (!currentSegment) {
        currentSegment = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
      } else {
        currentSegment += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      }
    } else {
      if (currentSegment) {
        segments.push({ path: currentSegment });
        currentSegment = "";
      }
    }
  });
  if (currentSegment) {
    segments.push({ path: currentSegment });
  }

  // Active highlighted point
  const activePoint = activePointIndex !== null ? data[activePointIndex] : null;

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-border-subtle bg-surface p-5 shadow-card space-y-4 select-none transition-all",
          className
        )
      )}
    >
      {/* Header: Title + Metric Stats + Range Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-border-subtle">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-text-primary tracking-tight">
              {title}
            </h4>
            <span className="text-[11px] font-mono text-text-muted">
              ({unit})
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-1">
            <span className="font-numeric text-2xl font-bold text-text-primary">
              {activePoint && activePoint.value !== null ? activePoint.value : average}
            </span>
            <span className="text-xs text-text-secondary">
              {activePoint ? (activePoint.value !== null ? activePoint.displayDate : "Missing observation") : `30-Day Avg`}
            </span>
          </div>
        </div>

        {/* Time-Range Segmented Control */}
        <div className="inline-flex p-1 bg-subtle rounded-md border border-border-subtle self-start sm:self-auto">
          {timeRangeOptions.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => onTimeRangeChange && onTimeRangeChange(range)}
              className={clsx(
                "px-2.5 py-1 text-xs font-mono font-medium rounded transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary",
                range === selectedTimeRange
                  ? "bg-surface text-brand-primary font-semibold shadow-subtle border border-border-subtle"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Chart Surface with Touch Scrubbing */}
      <div className="relative w-full overflow-hidden touch-pan-y">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible cursor-crosshair"
          onMouseLeave={() => setActivePointIndex(null)}
          onTouchEnd={() => setActivePointIndex(null)}
        >
          <defs>
            {/* Grid Line Pattern */}
            <linearGradient id={`${chartId}-fade`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--tds-color-brand-primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--tds-color-brand-primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Target Baseline Reference Zone (Optimal Range) */}
          {optimalMin !== undefined && optimalMax !== undefined && (
            <g aria-label="Optimal Range Band">
              <rect
                x={paddingX}
                y={getY(optimalMax)}
                width={plotWidth}
                height={Math.max(4, getY(optimalMin) - getY(optimalMax))}
                fill="currentColor"
                className="text-status-optimal/10"
              />
              <line
                x1={paddingX}
                x2={paddingX + plotWidth}
                y1={getY(optimalMax)}
                y2={getY(optimalMax)}
                stroke="var(--tds-color-status-optimal)"
                strokeDasharray="4 4"
                strokeWidth={1}
                opacity={0.4}
              />
              <line
                x1={paddingX}
                x2={paddingX + plotWidth}
                y1={getY(optimalMin)}
                y2={getY(optimalMin)}
                stroke="var(--tds-color-status-optimal)"
                strokeDasharray="4 4"
                strokeWidth={1}
                opacity={0.4}
              />
              <text
                x={paddingX + plotWidth - 4}
                y={getY(optimalMax) - 6}
                textAnchor="end"
                className="fill-status-optimal text-[10px] font-mono font-medium"
              >
                Target Range: {optimalMin}–{optimalMax} {unit}
              </text>
            </g>
          )}

          {/* Horizontal Reference Grid Lines */}
          <line
            x1={paddingX}
            x2={paddingX + plotWidth}
            y1={paddingTop + plotHeight}
            y2={paddingTop + plotHeight}
            stroke="var(--tds-color-border-subtle)"
            strokeWidth={1}
          />

          {/* Real Data Line Segments (Gap-Preserving per Article 29) */}
          {segments.map((seg, idx) => (
            <path
              key={idx}
              d={seg.path}
              fill="none"
              stroke="var(--tds-color-brand-primary)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {/* Missing-Data Gap Markers (Article 29: Explicitly show missing observations) */}
          {data.map((d, i) => {
            if (d.value === null) {
              const x = getX(i);
              return (
                <g key={`missing-${i}`}>
                  <line
                    x1={x}
                    x2={x}
                    y1={paddingTop}
                    y2={paddingTop + plotHeight}
                    stroke="var(--tds-color-border-default)"
                    strokeDasharray="2 3"
                    strokeWidth={1}
                    opacity={0.5}
                  />
                  <circle
                    cx={x}
                    cy={paddingTop + plotHeight}
                    r={2}
                    fill="var(--tds-color-status-unknown)"
                    opacity={0.5}
                  />
                </g>
              );
            }
            return null;
          })}

          {/* Data Points and Invisible Touch Targets */}
          {data.map((d, i) => {
            const x = getX(i);
            const y = d.value !== null ? getY(d.value) : paddingTop + plotHeight / 2;
            const isHovered = activePointIndex === i;

            return (
              <g
                key={i}
                onMouseEnter={() => setActivePointIndex(i)}
                onTouchStart={() => setActivePointIndex(i)}
                className="cursor-pointer"
              >
                {/* Large touch scrub hit-area */}
                <rect
                  x={x - (plotWidth / totalDays) / 2}
                  y={paddingTop}
                  width={plotWidth / totalDays}
                  height={plotHeight}
                  fill="transparent"
                />

                {/* Visible Data Dot */}
                {d.value !== null && (
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 5 : 3}
                    fill={isHovered ? "var(--tds-color-brand-primary)" : "var(--tds-color-bg-surface)"}
                    stroke="var(--tds-color-brand-primary)"
                    strokeWidth={2}
                    className="transition-all"
                  />
                )}
              </g>
            );
          })}

          {/* Active Crosshair & Tooltip Pin */}
          {activePointIndex !== null && (
            <g>
              <line
                x1={getX(activePointIndex)}
                x2={getX(activePointIndex)}
                y1={paddingTop}
                y2={paddingTop + plotHeight}
                stroke="var(--tds-color-brand-primary)"
                strokeWidth={1.5}
                strokeDasharray="3 3"
              />
            </g>
          )}

          {/* X-Axis Date Labels */}
          {data.length > 0 && (
            <>
              <text
                x={paddingX}
                y={svgHeight - 10}
                textAnchor="start"
                className="fill-text-muted text-[10px] font-mono"
              >
                {data[0].displayDate}
              </text>
              <text
                x={paddingX + plotWidth / 2}
                y={svgHeight - 10}
                textAnchor="middle"
                className="fill-text-muted text-[10px] font-mono"
              >
                {data[Math.floor(data.length / 2)].displayDate}
              </text>
              <text
                x={paddingX + plotWidth}
                y={svgHeight - 10}
                textAnchor="end"
                className="fill-text-muted text-[10px] font-mono"
              >
                {data[data.length - 1].displayDate}
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Footer: Data Quality & Missing Observation Transparency (Article 29) */}
      <div className="pt-2 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={missingDays === 0 ? "optimal" : "brand"} size="sm">
            {recordedDays} of {totalDays} Days Recorded
          </Badge>

          {missingDays > 0 && (
            <span className="flex items-center gap-1 text-status-attention text-[11px] font-mono">
              <HelpCircle className="w-3.5 h-3.5" />
              {missingDays} missing {missingDays === 1 ? 'day' : 'days'} (gap-preserving)
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-[11px] font-mono text-text-muted">
          <Info className="w-3 h-3 text-brand-primary" />
          <span>Longitudinal Intelligence (Article 30)</span>
        </div>
      </div>
    </div>
  );
};
