import React, { useState } from 'react';
import { LineChart, Info } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { TrendChart, DataPoint } from '../ui/TrendChart';
import { BiomarkerSparkline, SparklinePoint } from '../ui/BiomarkerSparkline';

export const ChartsShowcase: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30D');

  const glucoseDataPoints: DataPoint[] = [
    { date: '2026-08-01', displayDate: 'Aug 1', value: 96 },
    { date: '2026-08-02', displayDate: 'Aug 2', value: 94 },
    { date: '2026-08-03', displayDate: 'Aug 3', value: 92 },
    { date: '2026-08-04', displayDate: 'Aug 4', value: 95 },
    { date: '2026-08-05', displayDate: 'Aug 5', value: 98 },
    { date: '2026-08-06', displayDate: 'Aug 6', value: 91 },
    { date: '2026-08-07', displayDate: 'Aug 7', value: 89 },
    { date: '2026-08-08', displayDate: 'Aug 8', value: 93 },
    { date: '2026-08-09', displayDate: 'Aug 9', value: 95 },
    { date: '2026-08-10', displayDate: 'Aug 10', value: 97 },
    { date: '2026-08-11', displayDate: 'Aug 11', value: null }, // Missing day (Article 29)
    { date: '2026-08-12', displayDate: 'Aug 12', value: null }, // Missing day
    { date: '2026-08-13', displayDate: 'Aug 13', value: 94 },
    { date: '2026-08-14', displayDate: 'Aug 14', value: 90 },
    { date: '2026-08-15', displayDate: 'Aug 15', value: 88 },
    { date: '2026-08-16', displayDate: 'Aug 16', value: 91 },
    { date: '2026-08-17', displayDate: 'Aug 17', value: 93 },
    { date: '2026-08-18', displayDate: 'Aug 18', value: 96 },
    { date: '2026-08-19', displayDate: 'Aug 19', value: null }, // Missing day
    { date: '2026-08-20', displayDate: 'Aug 20', value: 94 },
    { date: '2026-08-21', displayDate: 'Aug 21', value: 92 },
    { date: '2026-08-22', displayDate: 'Aug 22', value: 89 },
    { date: '2026-08-23', displayDate: 'Aug 23', value: 90 },
    { date: '2026-08-24', displayDate: 'Aug 24', value: 92 },
    { date: '2026-08-25', displayDate: 'Aug 25', value: 91 },
    { date: '2026-08-26', displayDate: 'Aug 26', value: 94 },
    { date: '2026-08-27', displayDate: 'Aug 27', value: 90 },
    { date: '2026-08-28', displayDate: 'Aug 28', value: 88 },
    { date: '2026-08-29', displayDate: 'Aug 29', value: 92 },
  ];

  const rhrSparkline: SparklinePoint[] = [
    { date: 'Day 1', value: 65 },
    { date: 'Day 2', value: 64 },
    { date: 'Day 3', value: 63 },
    { date: 'Day 4', value: null },
    { date: 'Day 5', value: 62 },
    { date: 'Day 6', value: 61 },
    { date: 'Day 7', value: 62 },
  ];

  const glucoseSparkline: SparklinePoint[] = [
    { date: 'Day 1', value: 96 },
    { date: 'Day 2', value: 94 },
    { date: 'Day 3', value: 91 },
    { date: 'Day 4', value: 93 },
    { date: 'Day 5', value: 90 },
    { date: 'Day 6', value: 88 },
    { date: 'Day 7', value: 92 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. LONGITUDINAL TREND CHART (ARTICLE 29 & 30) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LineChart className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">1. Longitudinal Trend Chart (Touch-Scrubbable)</h3>
          </div>
          <span className="text-xs font-mono text-text-muted">Touch to Scrub</span>
        </div>

        <TrendChart
          title="Fasting Blood Glucose Trend"
          unit="mg/dL"
          data={glucoseDataPoints}
          optimalMin={70}
          optimalMax={99}
          selectedTimeRange={timeRange}
          onTimeRangeChange={(r) => setTimeRange(r)}
        />
      </section>

      {/* 2. INLINE SPARKLINE TRENDS */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold text-text-primary">2. Inline Biomarker Sparklines</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-text-primary">Resting Heart Rate (7-Day Trend)</span>
                <BiomarkerSparkline data={rhrSparkline} optimalMin={60} optimalMax={80} />
              </div>
              <p className="text-xs text-text-secondary">
                Includes explicit sensor detachment gap on Day 4 without misleading interpolation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-text-primary">Fasting Glucose (7-Day Trend)</span>
                <BiomarkerSparkline data={glucoseSparkline} optimalMin={70} optimalMax={99} />
              </div>
              <p className="text-xs text-text-secondary">
                Consistent 4.2% downward stabilization toward central target window.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Constitutional Architecture Rule */}
      <div className="p-4 rounded-xl bg-subtle border border-border-subtle flex items-start gap-3">
        <Info className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-text-secondary">
          <h5 className="font-semibold text-text-primary">Data Quality Mandate (Article 29)</h5>
          <p>
            Never build strong conclusions on weak data without acknowledging limitations. Tovelu’s native vector charting engine preserves gaps in observation rather than smoothing over missing days.
          </p>
        </div>
      </div>
    </div>
  );
};
