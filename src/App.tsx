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
} from 'lucide-react';
import { 
  AppHeader, 
  BottomNav, 
  BottomSheet, 
  Button, 
  Badge, 
  NavTabItem 
} from './components/ui';

// Modular Showcase Views
import { TokensShowcase } from './components/showcase/TokensShowcase';
import { PrimitivesShowcase } from './components/showcase/PrimitivesShowcase';
import { NavigationShowcase } from './components/showcase/NavigationShowcase';
import { FeedbackShowcase } from './components/showcase/FeedbackShowcase';
import { HealthShowcase } from './components/showcase/HealthShowcase';
import { ChartsShowcase } from './components/showcase/ChartsShowcase';
import { GovernanceShowcase } from './components/showcase/GovernanceShowcase';
import { ExtensionsShowcase } from './components/showcase/ExtensionsShowcase';

type TDSGalleryTab = 'health' | 'extensions' | 'charts' | 'primitives' | 'navigation' | 'feedback' | 'tokens' | 'governance';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<TDSGalleryTab>('extensions');
  
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
    { id: 'extensions', label: 'AI, Timeline & Privacy (Step 08)', icon: <Bot className="w-4 h-4" /> },
    { id: 'health', label: 'Health & Evidence', icon: <Activity className="w-4 h-4" /> },
    { id: 'charts', label: 'Visualizations', icon: <LineChart className="w-4 h-4" /> },
    { id: 'primitives', label: 'UI Primitives', icon: <Component className="w-4 h-4" /> },
    { id: 'navigation', label: 'Navigation & Overlays', icon: <Layers className="w-4 h-4" /> },
    { id: 'feedback', label: 'Feedback & States', icon: <Bell className="w-4 h-4" /> },
    { id: 'tokens', label: 'Brand Tokens', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'governance', label: 'Constitution', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const bottomNavItems: NavTabItem[] = [
    { id: 'extensions', label: 'AI & Privacy', icon: <Bot className="w-5 h-5" />, badge: 'New' },
    { id: 'health', label: 'Vitals', icon: <Activity className="w-5 h-5" />, badge: 3 },
    { id: 'charts', label: 'Trends', icon: <LineChart className="w-5 h-5" /> },
    { id: 'governance', label: 'Doctrine', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-200 pb-28">
      {/* Mobile-First Sticky App Header */}
      <AppHeader
        title="Tovelu Design System"
        subtitle="Towards Better Health • Interactive Catalog"
        statusBadge={
          <span className="text-[10px] font-mono uppercase bg-brand-subtle text-brand-dark px-1.5 py-0.5 rounded font-medium">
            v1.1.0 • Step 08 Live
          </span>
        }
        rightAction={
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Notification Center: All 8 TDS modules verified against Constitution.")}
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

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Step 08 Extension Milestone Banner */}
        <section className="bg-surface border border-border-subtle rounded-xl p-5 shadow-card space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-brand-primary">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                Step 08: Critical Health & Privacy Extensions
              </span>
            </div>
            <span className="text-xs font-mono text-text-muted">8 Total TDS Steps Implemented</span>
          </div>

          <h2 className="text-xl font-bold text-text-primary tracking-tight">
            Tovelu Design System Master Catalog
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Constitutional health UI system with strict 3-layer AI grounding (<strong className="text-text-primary">Article 70</strong>), 
            longitudinal event timelines (<strong className="text-text-primary">Article 30</strong>), and user ownership privacy controls (<strong className="text-text-primary">Articles 15 & 16</strong>).
          </p>

          {/* Category Navigation Pills */}
          <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
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
        </section>

        {/* Dynamic Gallery Content Display */}
        <section>
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
        activeId={activeGalleryTab}
        onChange={(id) => setActiveGalleryTab(id as TDSGalleryTab)}
      />
    </div>
  );
}
