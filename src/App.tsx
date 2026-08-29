import { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ShieldCheck, 
  AlertOctagon, 
  Activity, 
  Search, 
  Layers, 
  Trash2, 
  Bell, 
  Home, 
  FileText, 
  UserCheck, 
  Database,
  Radio,
  Dna,
  HeartPulse
} from 'lucide-react';
import { 
  Button, 
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
  EmergencyBanner,
  BiomarkerCard,
  EvidenceCard,
  ExplanationCard
} from './components/ui';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Overlay interactive states
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [inspectedBiomarker, setInspectedBiomarker] = useState('Resting Heart Rate');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);

  // State Simulation controls (Step 04)
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  // Unit conversion state
  const [glucoseUnit, setGlucoseUnit] = useState<'mg/dL' | 'mmol/L'>('mg/dL');
  const [glucoseValue, setGlucoseValue] = useState<number>(92);
  const [patientInput, setPatientInput] = useState('');

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
    { id: 'biomarkers', label: 'Biomarkers', icon: <Activity className="w-5 h-5" />, badge: 3 },
    { id: 'evidence', label: 'Evidence', icon: <FileText className="w-5 h-5" /> },
    { id: 'governance', label: 'Governance', icon: <UserCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-28">
      {/* Mobile-First Sticky App Header */}
      <AppHeader
        title="Tovelu Design System"
        subtitle="Towards Better Health"
        statusBadge={
          <span className="text-[10px] font-mono uppercase bg-brand-subtle text-brand-dark px-1.5 py-0.5 rounded font-medium">
            v0.5.0 • Health Components
          </span>
        }
        rightAction={
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Notification Center: All clinical evidence validated.")}
              aria-label="Notifications"
              className="w-10 h-10 rounded-md border border-border-default flex items-center justify-center hover:bg-subtle active:scale-95 transition-all relative"
            >
              <Bell className="w-4 h-4 text-text-secondary" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-primary" />
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
        {/* Step 05 Milestone Banner */}
        <section className="bg-surface border border-border-subtle rounded-lg p-5 shadow-card space-y-3">
          <div className="flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Step 05: Core Health Components</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">Clinical Biomarker Cards, Provenance & Evidence Registry</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Direct implementation of <strong className="text-text-primary">Article 28 (Data Provenance)</strong>, 
            <strong className="text-text-primary"> Article 33 (The Explanation Standard)</strong>, and 
            <strong className="text-text-primary"> Article 67 (The Evidence Graph)</strong>.
          </p>
        </section>

        {/* 1. BIOMARKER & VITAL CARDS WITH DATA PROVENANCE (ARTICLE 28) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-brand-primary" />
              <h3 className="text-base font-semibold text-text-primary">1. Biomarker Cards with Data Provenance (Article 28)</h3>
            </div>
            <span className="text-xs font-mono text-text-muted">Interactive Tap to Inspect</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lab-Verified Card */}
            <BiomarkerCard
              name="Fasting Glucose"
              value={glucoseValue}
              unit={glucoseUnit}
              status="optimal"
              statusLabel="Optimal"
              timestamp="Yesterday at 08:30 AM"
              provenance="lab_verified"
              provenanceSource="Quest Lab Panel #9218"
              range={{
                min: 60,
                max: 140,
                current: glucoseValue,
                optimalMin: 70,
                optimalMax: 99,
              }}
              onInspect={() => {
                setInspectedBiomarker('Fasting Glucose (Quest Diagnostics)');
                setIsSheetOpen(true);
              }}
            />

            {/* Wearable-Sync Card */}
            <BiomarkerCard
              name="Resting Heart Rate"
              value="62"
              unit="bpm"
              status="optimal"
              statusLabel="Optimal"
              timestamp="Updated 15m ago"
              provenance="wearable_sync"
              provenanceSource="Apple Watch Series 9"
              range={{
                min: 45,
                max: 110,
                current: 62,
                optimalMin: 60,
                optimalMax: 80,
              }}
              onInspect={() => {
                setInspectedBiomarker('Resting Heart Rate (Apple Watch)');
                setIsSheetOpen(true);
              }}
            />

            {/* Self-Reported / Borderline Card */}
            <BiomarkerCard
              name="Blood Pressure"
              value="128/84"
              unit="mmHg"
              status="attention"
              statusLabel="Pre-Hypertension"
              timestamp="3 days ago"
              provenance="manual"
              provenanceSource="Self-Reported"
              range={{
                min: 90,
                max: 160,
                current: 128,
                optimalMin: 100,
                optimalMax: 120,
              }}
              onInspect={() => {
                setInspectedBiomarker('Blood Pressure (Self-Reported)');
                setIsSheetOpen(true);
              }}
            />
          </div>
        </section>

        {/* 2. THE EVIDENCE REGISTRY CARD (ARTICLE 8, 24, 67) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Dna className="w-5 h-5 text-status-evidence" />
            <h3 className="text-base font-semibold text-text-primary">2. Scientific Evidence Card (Articles 8, 24 & 67)</h3>
          </div>

          <EvidenceCard
            claim="Sustained zone-2 aerobic activity improves insulin sensitivity and reduces cardiovascular risk markers."
            grade="A"
            evidenceStrengthLabel="Meta-Analysis & Systematic Review"
            sourceTitle="Exercise Interventions and Cardiometabolic Risk in Adults: A Systematic Review and Meta-Analysis of Randomized Trials"
            journalOrAuthority="Circulation / American Heart Association"
            publicationYear={2024}
            studyPopulation="Adults aged 35–65 without prior cardiovascular events (n=14,200 across 38 RCTs)"
            citationUrl="https://pubmed.ncbi.nlm.nih.gov/"
            reviewDate="January 2026"
            limitations="Benefits diminish if baseline physical activity is not maintained longitudinally; individual metabolic adaptation varies with sleep duration and genetic factors."
          />
        </section>

        {/* 3. THE EXPLANATION STANDARD CARD (ARTICLE 33 & 22) */}
        <section className="space-y-4">
          <h3 className="text-base font-semibold text-text-primary">3. The Explanation Standard (Articles 33 & 22)</h3>
          
          <ExplanationCard
            what="Gradually incorporate 30 minutes of low-intensity morning walking 4 days per week."
            why="Your 7-day fasting glucose average is 92 mg/dL with a slight upward deviation on weekends. Early morning post-prandial movement accelerates peripheral glucose uptake without stressing joint structures."
            evidenceSummary="Supported by the American Diabetes Association (ADA) 2025 Standards of Care (Level A clinical trial evidence)."
            confidence="high"
            limitations="This does not constitute a clinical prescription or treatment for metabolic disease. Does not replace physician-supervised diabetes care."
            nextStep="Schedule a reminder for a 30-minute brisk walk after breakfast tomorrow."
            onNextStepAction={() => alert("Scheduled 30-minute morning walk reminder!")}
          />
        </section>

        {/* 4. EMERGENCY SAFETY TRIAGE BANNER (ARTICLE 34) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-status-alert" />
              <h3 className="text-base font-semibold text-text-primary">4. Emergency Safety Escalation (Article 34)</h3>
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

        {/* 5. STATE SWITCHBOARD */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">5. State Simulation Switchboard</h3>
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
                  {showSkeleton ? "Disable Shimmer" : "Simulate Loading Shimmer"}
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
                  {showEmpty ? "Hide Empty" : "Simulate Empty State"}
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
                  {showError ? "Dismiss Error" : "Simulate Error State"}
                </Button>
              </div>

              <div className="pt-4">
                {showSkeleton ? (
                  <BiomarkerCardSkeleton />
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
                    Click one of the buttons above to preview the shimmer loader, empty prompt, or error recovery handler.
                  </div>
                )}
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
                  <span className="text-xs font-mono bg-status-optimal-bg text-status-optimal px-2 py-0.5 rounded border border-status-optimal-border font-medium">
                    Normal (Fasting)
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 7. OVERLAY DEMOS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">7. Reversible Action Confirmation Dialog</h3>
          </div>

          <Card>
            <CardContent className="pt-5 space-y-4">
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(true)}
                leftIcon={<Trash2 className="w-4 h-4 text-status-alert" />}
              >
                Test Reversible Confirmation Dialog (Article 20)
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Interactive Bottom Sheet (Triggered by Tapping Biomarker Card) */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title={`Inspecting: ${inspectedBiomarker}`}
        description="Longitudinal Trend & Clinical Context (Article 30)"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-subtle border border-border-subtle flex items-center justify-between">
            <div>
              <span className="text-xs text-text-secondary font-mono">Current Reading</span>
              <div className="font-numeric text-3xl font-bold text-text-primary mt-1">
                {glucoseValue} <span className="text-sm font-sans font-normal text-text-secondary">{glucoseUnit}</span>
              </div>
            </div>
            <span className="text-xs font-mono bg-status-optimal-bg text-status-optimal px-2.5 py-1 rounded-full border border-status-optimal-border font-medium">
              Target Baseline Met
            </span>
          </div>

          <div className="space-y-2 text-xs text-text-secondary">
            <h4 className="font-semibold text-text-primary">Data Provenance Verification (Article 28)</h4>
            <p className="leading-relaxed">
              This reading was ingested directly via certified laboratory interface. Timestamp, reference ranges, and calibration standards were cryptographically logged.
            </p>
          </div>

          <div className="pt-2">
            <Button variant="primary" fullWidth onClick={() => setIsSheetOpen(false)}>
              Done Inspecting
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
          <p className="font-mono text-text-secondary">Value: <strong className="text-text-primary">92 mg/dL (Fasting)</strong></p>
          <p className="font-mono text-text-secondary">Timestamp: <strong className="text-text-primary">Yesterday at 08:30 AM</strong></p>
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
