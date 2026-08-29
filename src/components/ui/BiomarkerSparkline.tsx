import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface SparklinePoint {
  date: string;
  value: number | null; // null represents missing observation (Article 29)
}

export interface BiomarkerSparklineProps {
  data: SparklinePoint[];
  optimalMin?: number;
  optimalMax?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const BiomarkerSparkline: React.FC<BiomarkerSparklineProps> = ({
  data,
  optimalMin,
  optimalMax,
  height = 36,
  width = 120,
  className,
}) => {
  // Extract valid numerical values to calculate bounds
  const validValues = data.map(d => d.value).filter((v): v is number => v !== null);
  
  if (validValues.length === 0) {
    return (
      <div className={twMerge("flex items-center justify-center text-[10px] font-mono text-text-muted", className)}>
        No Data
      </div>
    );
  }

  const minVal = Math.min(...validValues, optimalMin !== undefined ? optimalMin : Infinity);
  const maxVal = Math.max(...validValues, optimalMax !== undefined ? optimalMax : -Infinity);
  const padding = 4;
  const drawWidth = width - padding * 2;
  const drawHeight = height - padding * 2;
  const range = maxVal === minVal ? 1 : maxVal - minVal;

  const getX = (index: number) => padding + (index / (data.length - 1)) * drawWidth;
  const getY = (val: number) => padding + drawHeight - ((val - minVal) / range) * drawHeight;

  // Build SVG segments (Article 29: NEVER draw continuous line over missing data)
  const segments: { path: string; isDashed?: boolean }[] = [];
  let currentPath = "";

  data.forEach((pt, i) => {
    if (pt.value !== null) {
      const x = getX(i);
      const y = getY(pt.value);
      if (!currentPath) {
        currentPath = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
      } else {
        currentPath += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      }
    } else {
      if (currentPath) {
        segments.push({ path: currentPath });
        currentPath = "";
      }
    }
  });
  if (currentPath) {
    segments.push({ path: currentPath });
  }

  // Calculate trend direction between first and last valid points
  const firstVal = validValues[0];
  const lastVal = validValues[validValues.length - 1];
  const delta = lastVal - firstVal;
  const percentChange = firstVal !== 0 ? ((delta / firstVal) * 100).toFixed(1) : "0";

  return (
    <div className={twMerge("flex items-center gap-2 select-none", className)}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Optional Baseline Zone */}
        {optimalMin !== undefined && optimalMax !== undefined && (
          <rect
            x={padding}
            y={getY(optimalMax)}
            width={drawWidth}
            height={Math.max(2, getY(optimalMin) - getY(optimalMax))}
            fill="currentColor"
            className="text-status-optimal/10"
            rx={2}
          />
        )}

        {/* Real Data Line Segments (Gap-Preserving) */}
        {segments.map((seg, idx) => (
          <path
            key={idx}
            d={seg.path}
            fill="none"
            stroke="var(--tds-color-brand-primary)"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Last Observation Point Dot */}
        {data[data.length - 1]?.value !== null && (
          <circle
            cx={getX(data.length - 1)}
            cy={getY(data[data.length - 1].value!)}
            r={2.5}
            fill="var(--tds-color-brand-primary)"
          />
        )}
      </svg>

      {/* Trend Direction Micro Badge */}
      <div className="flex items-center gap-0.5 text-[10px] font-mono text-text-secondary">
        {Math.abs(delta) < 0.5 ? (
          <span className="flex items-center text-text-muted gap-0.5">
            <Minus className="w-3 h-3" /> Baseline
          </span>
        ) : delta > 0 ? (
          <span className="flex items-center text-status-attention gap-0.5 font-medium">
            <TrendingUp className="w-3 h-3" /> +{percentChange}%
          </span>
        ) : (
          <span className="flex items-center text-status-optimal gap-0.5 font-medium">
            <TrendingDown className="w-3 h-3" /> {percentChange}%
          </span>
        )}
      </div>
    </div>
  );
};
