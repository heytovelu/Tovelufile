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
  Layers, 
  Trash2, 
  ExternalLink, 
  Bell, 
  Home, 
  FileText, 
  UserCheck, 
  Database,
  Radio
} from 'lucide-react';
import { 
  Button, 
  Badge, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  Input, 
  UnitToggle, 
  AppHeader, 
  BottomNav, 
  BottomSheet, 
  Dialog, 
  NavTabItem,
  BiomarkerCardSkeleton,
  EmptyState,
  ErrorState,
  EmergencyBanner
} from './components/ui';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Overlay interactive states
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);

  // Step 04: Feedback & State Handler controls
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [showEmergency, setShowEmergency] = useState(true);

  // Unit conversion state
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

  const handleUnitChange = (newUnit: string) => {
    if (newUnit === glucoseUnit) return;
    if (newUnit === 'mmol/L') {
      setGlucoseValue(Number((glucoseValue * 0.0555).toFixed(1)));
    } else {
      setGlucoseValue(Math.round(glucoseValue / 0.0555));
    }
    setGlucoseUnit(newUnit as 'mg/dL' | 'mmol/L');
  };

  const handleConfirmAction = () => {
    setDialogLoading(true);
    setTimeout(() => {
      setDialogLoading(false);
      setIsDialogOpen(false);
    }, 1200);
  };

  const handleRetryError = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      setShowError(false);
    }, 1500);
  };

  const navItems: NavTabItem[] = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-5 h-5" /> },
    { id: 'biomarkers', label: 'Vitals', icon: <Activity className="w-5 h-5" />, badge: 2 },
    { id: 'evidence', label: 'Evidence', icon: <FileText className="w-5 h-5" /> },
    { id: 'profile', label: 'Governance', icon: <UserCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-28">
      {/* Mobile-First Sticky App Header */}
      <AppHeader
        title="Tovelu Design System"
        subtitle="Towards Better Health"
        statusBadge={
          <span className="text-[10px] font-mono uppercase bg-brand-subtle text-brand-dark px-1.5 py-0.5 rounded font-medium">
            v0.4.0 • Step 04
          </span>
        }
        rightAction={
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Notification Center: All clinical notifications verified.")}
              aria-label="Notifications"
              className="w-10 h-10 rounded-md border border-border-default flex items-center justify-center hover:bg-subtle active:scale-95 transition-all relative"
            >
              <Bell className="w-4 h-4 text-text-secondary" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-alert" />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-md border border-border-default flex items-center justify-center hover:bg-subtle active:scale-95 transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4 text-brand-accent" /> : <Moon className="w-4 h-4 text-text-secondary" />}
            </button>
          </div>
        }
      />

      {/* Main Content Showcase */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">
        {/* Step 04 Milestone Banner */}
        <section className="bg-surface border border-border-subtle rounded-lg p-5 shadow-card space-y-3">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Step 04: Feedback & State Handlers</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">Reliable Feedback, Shimmer Loaders & Emergency Safety</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Eliminates silent failures (<strong className="text-text-primary">Article 87</strong>), guarantees zero blank loading screens, and enforces prompt clinical triage guidance (<strong className="text-text-primary">Article 34</strong>).
          </p>
        </section>

        {/* 1. EMERGENCY SAFETY TRIAGE BANNER (ARTICLE 34) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-status-alert" />
              <h3 className="text-base font-semibold text-text-primary">1. Emergency Safety Escalation (Article 34)</h3>
            </div>
            <button
              onClick={() => setShowEmergency(!showEmergency)}
              className="text-xs font-mono text-brand-primary hover:underline"
            >
              {showEmergency ? "Hide Banner" : "Show Banner"}
            </button>
          </div>

          {showEmergency && (
            <EmergencyBanner
              emergencyNumber="112 / 911"
              jurisdiction="Global Emergency Safety Standard (Article 34)"
              message="If you are experiencing acute chest pain, sudden numbness, severe difficulty breathing, or trauma, seek emergency medical care immediately. Tovelu does not provide clinical emergency diagnosis."
            />
          )}
        </section>

        {/* 2. FEEDBACK & STATE DEMO SWITCHBOARD */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">2. State Simulation Switchboard</h3>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Simulate Component States</CardTitle>
              <CardDescription>Click to preview how users experience loading, empty, and error states.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-border-subtle">
                <Button
                  size="sm"
                  variant={showSkeleton ? "primary" : "secondary"}
                  onClick={() => {
                    setShowSkeleton(!showSkeleton);
                    setShowEmpty(false);
                    setShowError(false);
                  }}
                >
                  {showSkeleton ? "Disable Shimmer Skeleton" : "Simulate Loading Skeleton"}
                </Button>

                <Button
                  size="sm"
                  variant={showEmpty ? "primary" : "secondary"}
                  onClick={() => {
                    setShowEmpty(!showEmpty);
                    setShowSkeleton(false);
                    setShowError(false);
                  }}
                >
                  {showEmpty ? "Hide Empty State" : "Simulate Empty State"}
                </Button>

                <Button
                  size="sm"
                  variant={showError ? "destructive" : "secondary"}
                  onClick={() => {
                    setShowError(!showError);
                    setShowSkeleton(false);
                    setShowEmpty(false);
                  }}
                >
                  {showError ? "Dismiss Error State" : "Simulate Error State"}
                </Button>
              </div>

              {/* Dynamic State Preview Container */}
              <div className="pt-4">
                {showSkeleton ? (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-text-muted block">Simulated Shimmer State:</span>
                    <BiomarkerCardSkeleton />
                  </div>
                ) : showEmpty ? (
                  <EmptyState
                    icon={<Database className="w-6 h-6" />}
                    title="No Biomarker Logs Recorded"
                    description="You have not logged any blood pressure or glucose readings yet. Begin tracking to generate longitudinal intelligence."
                    actionLabel="Log First Measurement"
                    onAction={() => alert("Initiating first biometric intake form...")}
                    secondaryActionLabel="Sync from Apple Health"
                    onSecondaryAction={() => alert("Connecting to HealthKit...")}
                  />
                ) : showError ? (
                  <ErrorState
                    title="Health Data Sync Interrupted"
                    message="Unable to reach the clinical database. Please check your internet connection or try again shortly."
                    errorCode="ERR_CONN_TIMEOUT_503"
                    isRetrying={isRetrying}
                    onRetry={handleRetryError}
                  />
                ) : (
                  <div className="p-4 rounded-lg bg-subtle border border-border-subtle text-xs text-text-secondary">
                    All simulated states are currently idle. Click one of the buttons above to preview the shimmer loader, empty prompt, or error recovery handler.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. MOBILE OVERLAYS & SHEETS DEMO */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">3. Mobile Bottom Sheets & Reversible Dialogs</h3>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Overlay Triggers</CardTitle>
              <CardDescription>Test the bottom-up sheet and confirmation modal.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button 
                  variant="primary" 
                  onClick={() => setIsSheetOpen(true)}
                  leftIcon={<ExternalLink className="w-4 h-4" />}
                >
                  Open Mobile Bottom Sheet
                </Button>

                <Button 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(true)}
                  leftIcon={<Trash2 className="w-4 h-4 text-status-alert" />}
                >
                  Test Reversible Confirmation Dialog
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. TOUCH-FIRST BUTTONS SHOWCASE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-text-primary">4. Touch-First Buttons (≥ 48px Target)</h3>
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

        {/* 5. STATUS BADGES */}
        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">5. Badges & Provenance Indicators</h3>
            <p className="text-xs text-text-secondary">Distinguishing data truth, evidence strength, and clinical alerts.</p>
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

        {/* 6. FORM INPUTS & UNIT CONVERSION */}
        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">6. Form Inputs & Deterministic Unit Toggle</h3>
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
      </main>

      {/* Interactive Bottom Sheet */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Biomarker Inspection: Resting Heart Rate"
        description="Data Provenance: Apple Watch via HealthKit Sync"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-subtle border border-border-subtle flex items-center justify-between">
            <div>
              <span className="text-xs text-text-secondary font-mono">Current 7-Day Average</span>
              <div className="font-numeric text-3xl font-bold text-text-primary mt-1">
                62 <span className="text-sm font-sans font-normal text-text-secondary">bpm</span>
              </div>
            </div>
            <Badge variant="optimal" hasDot>
              Optimal Cardiovascular Baseline
            </Badge>
          </div>

          <div className="space-y-2 text-xs text-text-secondary">
            <h4 className="font-semibold text-text-primary">Evidence & Context (Article 33)</h4>
            <p className="leading-relaxed">
              Resting heart rate in healthy adults typically ranges from 60 to 100 bpm. An average of 62 bpm indicates strong autonomic regulation and consistent cardiovascular conditioning.
            </p>
            <p className="text-text-muted">
              Source: American Heart Association (AHA) Clinical Reference Guidelines.
            </p>
          </div>

          <div className="pt-2">
            <Button variant="primary" fullWidth onClick={() => setIsSheetOpen(false)}>
              Close Inspection
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Reversible Action Confirmation Dialog (Article 20) */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmAction}
        isLoading={dialogLoading}
        isDestructive={true}
        title="Delete Health Datapoint?"
        description="Article 20 Compliance: Are you sure you want to delete this glucose reading? This action cannot be undone once executed."
        confirmLabel="Delete Permanently"
        cancelLabel="Keep Record"
      >
        <div className="p-3 rounded-md bg-subtle border border-border-subtle text-xs space-y-1">
          <p className="font-mono text-text-secondary">Record ID: <strong className="text-text-primary">rec_bio_9042</strong></p>
          <p className="font-mono text-text-secondary">Value: <strong className="text-text-primary">95 mg/dL (Fasting)</strong></p>
          <p className="font-mono text-text-secondary">Timestamp: <strong className="text-text-primary">Today at 08:30 AM</strong></p>
        </div>
      </Dialog>

      {/* Mobile-First Fixed Bottom Navigation Bar */}
      <BottomNav
        items={navItems}
        activeId={activeTab}
        onChange={(id) => setActiveTab(id)}
      />
    </div>
  );
}
