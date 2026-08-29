import React, { useState } from 'react';
import { 
  Plus, 
  Activity, 
  ArrowRight, 
  Heart, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  BookOpen, 
  HelpCircle, 
  Search 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Input } from '../ui/Input';
import { UnitToggle } from '../ui/UnitToggle';

export const PrimitivesShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [glucoseUnit, setGlucoseUnit] = useState<'mg/dL' | 'mmol/L'>('mg/dL');
  const [glucoseValue, setGlucoseValue] = useState<number>(95);
  const [patientInput, setPatientInput] = useState('');
  const [inputError, setInputError] = useState('');

  const handleUnitChange = (newUnit: string) => {
    if (newUnit === glucoseUnit) return;
    if (newUnit === 'mmol/L') {
      setGlucoseValue(Number((glucoseValue * 0.0555).toFixed(1)));
    } else {
      setGlucoseValue(Math.round(glucoseValue / 0.0555));
    }
    setGlucoseUnit(newUnit as 'mg/dL' | 'mmol/L');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. BUTTONS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-text-primary">1. Touch-First Buttons (≥ 48px Target)</h3>
            <p className="text-xs text-text-secondary">Minimum 48px touch target with active press tactile haptic feedback.</p>
          </div>
          <button
            onClick={() => setIsLoading(!isLoading)}
            className="text-xs font-mono text-brand-primary hover:underline"
          >
            Toggle Loading
          </button>
        </div>

        <Card>
          <CardContent className="pt-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" isLoading={isLoading} leftIcon={<Plus className="w-4 h-4" />}>
                Log Biomarker
              </Button>
              <Button variant="secondary" isLoading={isLoading} leftIcon={<Activity className="w-4 h-4" />}>
                View Trends
              </Button>
              <Button variant="outline" isLoading={isLoading}>
                Review Evidence
              </Button>
              <Button variant="ghost" isLoading={isLoading} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Learn More
              </Button>
              <Button variant="destructive" isLoading={isLoading}>
                Emergency Triage
              </Button>
            </div>

            <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-3">
              <Button size="sm" variant="secondary">Small Action (40px)</Button>
              <Button size="default" variant="primary">Standard Touch (48px)</Button>
              <Button size="lg" variant="primary" rightIcon={<Heart className="w-5 h-5 text-status-alert" />}>
                Large Primary (56px)
              </Button>
              <Button disabled variant="primary">Disabled State</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. BADGES */}
      <section className="space-y-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary">2. Badges & Provenance Indicators</h3>
          <p className="text-xs text-text-secondary">Visual status indicators distinguishing data truth, evidence strength, and clinical alerts.</p>
        </div>

        <Card>
          <CardContent className="pt-5 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="optimal" hasDot icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
                Optimal Range
              </Badge>
              <Badge variant="attention" hasDot icon={<AlertTriangle className="w-3.5 h-3.5" />}>
                Borderline Advisory
              </Badge>
              <Badge variant="alert" hasDot pulseDot icon={<AlertOctagon className="w-3.5 h-3.5" />}>
                Urgent Escalation
              </Badge>
              <Badge variant="evidence" icon={<BookOpen className="w-3.5 h-3.5" />}>
                Evidence Grade A
              </Badge>
              <Badge variant="unknown" icon={<HelpCircle className="w-3.5 h-3.5" />}>
                Unverified (Self-Reported)
              </Badge>
              <Badge variant="brand">
                Tovelu Verified
              </Badge>
              <Badge variant="neutral">
                Lab Sync
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. INPUTS & UNIT CONVERSION */}
      <section className="space-y-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary">3. Form Inputs & Deterministic Unit Toggle</h3>
          <p className="text-xs text-text-secondary">Mobile-first inputs with 16px font and built-in medical unit conversion (Article 26).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Metric Search Input</CardTitle>
              <CardDescription>Clean text input with icon prefix.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                label="Search Health Metric"
                placeholder="e.g. Fasting Glucose, HbA1c..."
                value={patientInput}
                onChange={(e) => setPatientInput(e.target.value)}
                leftIcon={<Search className="w-4 h-4" />}
                helperText="Search over 120+ clinical biomarkers"
              />

              <Input
                label="Simulated Input with Error Validation"
                placeholder="Enter blood pressure..."
                value={inputError ? '999/999' : ''}
                onChange={(e) => {
                  if (e.target.value) setInputError('Reading exceeds physiological range. Please verify input.');
                  else setInputError('');
                }}
                error={inputError || undefined}
                helperText={!inputError ? "Type anything to trigger validation error" : undefined}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Deterministic Unit Conversion</CardTitle>
                  <CardDescription>Fasting Blood Glucose</CardDescription>
                </div>
                <UnitToggle
                  options={[
                    { label: 'mg/dL', value: 'mg/dL' },
                    { label: 'mmol/L', value: 'mmol/L' },
                  ]}
                  value={glucoseUnit}
                  onChange={handleUnitChange}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-subtle border border-border-subtle flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-text-secondary block">Validated Metric Value</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-numeric text-3xl font-bold text-text-primary">
                      {glucoseValue}
                    </span>
                    <span className="text-sm font-sans font-medium text-text-secondary">
                      {glucoseUnit}
                    </span>
                  </div>
                </div>
                <Badge variant="optimal" hasDot>
                  Normal (Fasting)
                </Badge>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Converted deterministically via <code className="font-mono bg-muted px-1 py-0.5 rounded text-[11px]">1 mg/dL = 0.0555 mmol/L</code> without generative hallucination risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
