import { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  BookOpen, 
  HelpCircle,
  Activity,
  Heart,
  Plus,
  ArrowRight,
  Search,
  Sliders
} from 'lucide-react';
import { 
  Button, 
  Badge, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  UnitToggle 
} from './components/ui';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Interactive state demo for unit conversion & input
  const [glucoseUnit, setGlucoseUnit] = useState<'mg/dL' | 'mmol/L'>('mg/dL');
  const [glucoseValue, setGlucoseValue] = useState<number>(95);
  const [patientInput, setPatientInput] = useState('Resting Heart Rate');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Deterministic Unit Conversion (Article 26)
  const handleUnitChange = (newUnit: string) => {
    if (newUnit === glucoseUnit) return;
    if (newUnit === 'mmol/L') {
      // 1 mg/dL = 0.0555 mmol/L (deterministic medical formula)
      setGlucoseValue(Number((glucoseValue * 0.0555).toFixed(1)));
    } else {
      // 1 mmol/L = 18.0182 mg/dL
      setGlucoseValue(Math.round(glucoseValue / 0.0555));
    }
    setGlucoseUnit(newUnit as 'mg/dL' | 'mmol/L');
  };

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-safe">
      {/* Mobile-First Sticky App Header */}
      <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b border-border-subtle pt-safe px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-brand-primary flex items-center justify-center text-text-inverse font-bold text-lg shadow-subtle">
              T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-base tracking-tight text-text-primary">Tovelu Design System</h1>
                <span className="text-[10px] font-mono uppercase bg-brand-subtle text-brand-dark px-1.5 py-0.5 rounded font-medium">
                  v0.2.0 • Primitives
                </span>
              </div>
              <p className="text-xs text-text-secondary">Towards Better Health</p>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-md border border-border-default flex items-center justify-center hover:bg-subtle active:scale-95 transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4 text-brand-accent" /> : <Moon className="w-4 h-4 text-text-secondary" />}
          </button>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">
        {/* Step 02 Milestone Banner */}
        <section className="bg-surface border border-border-subtle rounded-lg p-5 shadow-card space-y-3">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Step 02: Base Interactive Primitives</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">Reusable UI Primitives (Touch-First & Accessible)</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            All base components strictly adhere to <strong className="text-text-primary">Article 40 (≥ 48px touch targets)</strong>, 
            <strong className="text-text-primary"> Article 42 (WCAG Accessibility)</strong>, and 
            <strong className="text-text-primary"> Article 26 (Deterministic Calculations)</strong>.
          </p>
        </section>

        {/* 1. BUTTONS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-text-primary">1. Touch-First Buttons</h3>
              <p className="text-xs text-text-secondary">Minimum 48px touch target with active press haptic feedback.</p>
            </div>
            <button
              onClick={() => setIsLoading(!isLoading)}
              className="text-xs font-mono text-brand-primary hover:underline"
            >
              Toggle Loading State
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
                  Large Primary Touch (56px)
                </Button>
                <Button disabled variant="primary">Disabled State</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. BADGES & HEALTH STATUS PILLS */}
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
            <p className="text-xs text-text-secondary">Mobile-first inputs with 16px font (no auto-zoom) and built-in medical unit conversion (Article 26).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input with Search Icon */}
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

            {/* Interactive Clinical Unit Conversion */}
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

        {/* 4. COMPOSABLE CARD SURFACES */}
        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">4. Composable Surface Cards</h3>
            <p className="text-xs text-text-secondary">Structured containers with calm elevation layers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Standard Health Card</CardTitle>
                  <Sliders className="w-4 h-4 text-text-muted" />
                </div>
                <CardDescription>Base container for summary panels and profile data.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary">
                  Uses soft shadows and subtle borders to keep visual noise minimal on OLED mobile screens.
                </p>
              </CardContent>
              <CardFooter className="justify-between border-t border-border-subtle pt-3 mt-2">
                <span className="text-xs text-text-muted">Updated today</span>
                <Button size="sm" variant="ghost">Details</Button>
              </CardFooter>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Interactive Tap Card</CardTitle>
                  <ArrowRight className="w-4 h-4 text-brand-primary" />
                </div>
                <CardDescription>Click or tap to test tactile feedback.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary">
                  Provides subtle hover elevation and 0.99x micro-scale tap response on mobile screens.
                </p>
              </CardContent>
              <CardFooter className="justify-between border-t border-border-subtle pt-3 mt-2">
                <Badge variant="brand">Tap to Inspect</Badge>
                <span className="text-xs font-mono text-brand-primary">Interactive</span>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
