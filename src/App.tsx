import { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Sparkles, 
  Component, 
  Bell, 
  LineChart,
  Bot,
  Shapes,
  Type,
  Cpu
} from 'lucide-react';
import { 
  AppHeader, 
  BottomNav, 
  BottomSheet, 
  Button, 
  Badge, 
  NavTabItem 
} from './components/ui';

// THAIS AI Engine & Survey
import { ThaisStudio } from './components/thais/ThaisStudio';
import { DopamineSurveyRunner } from './components/survey/DopamineSurveyRunner';

// Modular Showcase Views
import { TokensShowcase } from './components/showcase/TokensShowcase';
import { PrimitivesShowcase } from './components/showcase/PrimitivesShowcase';
import { NavigationShowcase } from './components/showcase/NavigationShowcase';
import { FeedbackShowcase } from './components/showcase/FeedbackShowcase';
import { HealthShowcase } from './components/showcase/HealthShowcase';
import { ChartsShowcase } from './components/showcase/ChartsShowcase';
import { GovernanceShowcase } from './components/showcase/GovernanceShowcase';
import { ExtensionsShowcase } from './components/showcase/ExtensionsShowcase';
import { LogoShowcase } from './components/showcase/LogoShowcase';
import { WordmarkShowcase } from './components/showcase/WordmarkShowcase';

type AppMode = 'thais' | 'survey' | 'design_system';
type TDSGalleryTab = 'wordmark' | 'logo' | 'health' | 'extensions' | 'charts' | 'primitives' | 'navigation' | 'feedback' | 'tokens' | 'governance';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>('thais');
  const [activeGalleryTab, setActiveGalleryTab] = useState<TDSGalleryTab>('wordmark');
  
  // Shared Biomarker Inspection Drawer
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [inspectedBiomarker, setInspectedBiomarker] = useState('Fasting Glucose');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenInspect = (name: string) => {
    setInspectedBiomarker(name);
    setIsSheetOpen(true);
  };

  const navCategories: { id: TDSGalleryTab; label: string; icon: React.ReactNode }[] = [
    { id: 'wordmark', label: 'Wordmark Typography Lab', icon: <Type className="w-4 h-4" /> },
    { id: 'logo', label: 'The Homeostasis Ring', icon: <Shapes className="w-4 h-4" /> },
    { id: 'extensions', label: 'AI & Privacy', icon: <Bot className="w-4 h-4" /> },
    { id: 'health', label: 'Health & Evidence', icon: <Activity className="w-4 h-4" /> },
    { id: 'charts', label: 'Visualizations', icon: <LineChart className="w-4 h-4" /> },
    { id: 'primitives', label: 'UI Primitives', icon: <Component className="w-4 h-4" /> },
    { id: 'navigation', label: 'Navigation & Overlays', icon: <Layers className="w-4 h-4" /> },
    { id: 'feedback', label: 'Feedback & States', icon: <Bell className="w-4 h-4" /> },
    { id: 'tokens', label: 'Brand Tokens', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'governance', label: 'Constitution & Voice', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const bottomNavItems: NavTabItem[] = [
    { id: 'thais_nav', label: 'THAIS AI', icon: <Cpu className="w-5 h-5" />, badge: 'Active' },
    { id: 'wordmark', label: 'Wordmark', icon: <Type className="w-5 h-5" /> },
    { id: 'logo', label: 'Logo Mark', icon: <Shapes className="w-5 h-5" /> },
    { id: 'health', label: 'Vitals', icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-28">
      {/* Mobile-First Sticky App Header */}
      <AppHeader
        darkMode={darkMode}
        statusBadge={
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setAppMode('thais')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'thais'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-surface border border-border-default text-text-secondary hover:text-text-primary'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              THAIS Engine
            </button>

            <button
              onClick={() => setAppMode('survey')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'survey'
                  ? 'bg-gradient-to-r from-emerald-500 to-brand-primary text-white shadow-sm ring-2 ring-emerald-500/30'
                  : 'bg-surface border border-border-default text-emerald-600 dark:text-emerald-400 hover:text-emerald-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              🔥 Live Dopamine Survey
            </button>

            <button
              onClick={() => setAppMode('design_system')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'design_system'
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-surface border border-border-default text-text-secondary hover:text-text-primary'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Brand & Design
            </button>
          </div>
        }
        rightAction={
          <div className="flex items-center gap-2">
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

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-4 space-y-6">
        {/* Render Dopamine Survey Full Screen */}
        {appMode === 'survey' ? (
          <div className="py-2">
            <DopamineSurveyRunner
              onComplete={(_input, _assessment, _plan) => {
                setAppMode('thais');
              }}
              onCancel={() => setAppMode('thais')}
            />
          </div>
        ) : appMode === 'thais' ? (
          <ThaisStudio />
        ) : (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Navigation Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
              {navCategories.map((cat) => {
                const isSelected = cat.id === activeGalleryTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveGalleryTab(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary min-h-[40px] ${
                      isSelected
                        ? "bg-brand-primary text-text-inverse shadow-subtle font-semibold"
                        : "bg-subtle text-text-secondary hover:text-text-primary hover:bg-muted border border-border-subtle"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Showcase View */}
            <section>
              {activeGalleryTab === 'wordmark' && (
                <WordmarkShowcase />
              )}

              {activeGalleryTab === 'logo' && (
                <LogoShowcase />
              )}

              {activeGalleryTab === 'extensions' && (
                <ExtensionsShowcase />
              )}

              {activeGalleryTab === 'health' && (
                <HealthShowcase onInspectBiomarker={handleOpenInspect} />
              )}

              {activeGalleryTab === 'charts' && (
                <ChartsShowcase />
              )}

              {activeGalleryTab === 'primitives' && (
                <PrimitivesShowcase />
              )}

              {activeGalleryTab === 'navigation' && (
                <NavigationShowcase />
              )}

              {activeGalleryTab === 'feedback' && (
                <FeedbackShowcase />
              )}

              {activeGalleryTab === 'tokens' && (
                <TokensShowcase />
              )}

              {activeGalleryTab === 'governance' && (
                <GovernanceShowcase />
              )}
            </section>
          </div>
        )}
      </main>

      {/* Global Mobile Bottom Sheet for Biomarker Inspection */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title={`Inspecting: ${inspectedBiomarker}`}
        description="Longitudinal Trend & Clinical Context (Article 30)"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-subtle border border-border-subtle flex items-center justify-between">
            <div>
              <span className="text-xs text-text-secondary font-mono">Current Status</span>
              <div className="font-numeric text-2xl font-bold text-text-primary mt-0.5">
                Target Met
              </div>
            </div>
            <Badge variant="optimal" hasDot>
              Clinical Optimal Range
            </Badge>
          </div>

          <div className="space-y-2 text-xs text-text-secondary">
            <h4 className="font-semibold text-text-primary">Data Provenance Verification (Article 28)</h4>
            <p className="leading-relaxed">
              This metric is ingested through verified clinical endpoints. Units, ranges, and calibration standards are cryptographically validated against reference standards.
            </p>
          </div>

          <div className="pt-2">
            <Button variant="primary" fullWidth onClick={() => setIsSheetOpen(false)}>
              Done Inspecting
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Mobile-First Fixed Bottom Navigation Bar */}
      <BottomNav
        items={bottomNavItems}
        activeId={appMode === 'thais' ? 'thais_nav' : activeGalleryTab}
        onChange={(id) => {
          if (id === 'thais_nav') {
            setAppMode('thais');
          } else {
            setAppMode('design_system');
            setActiveGalleryTab(id as TDSGalleryTab);
          }
        }}
      />
    </div>
  );
}
