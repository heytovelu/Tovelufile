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
  Cpu,
  Smartphone
} from 'lucide-react';
import { 
  BottomSheet, 
} from './components/ui';

// Tovelu 5-Tab Application Shell
import { MobileAppShell } from './components/app/MobileAppShell';
import { AppBottomNav, AppTab } from './components/app/AppBottomNav';
import { TodayTab } from './components/app/TodayTab';
import { WeekTab } from './components/app/WeekTab';
import { ChatTab } from './components/app/ChatTab';
import { ReportTab } from './components/app/ReportTab';
import { YouDrawer } from './components/app/YouDrawer';

// THAIS AI Engine & Survey
import { ThaisStudio } from './components/thais/ThaisStudio';
import { DopamineSurveyRunner } from './components/survey/DopamineSurveyRunner';

// Showcase Views
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

type AppMode = 'tovelu_app' | 'thais' | 'survey' | 'design_system';
type TDSGalleryTab = 'wordmark' | 'logo' | 'health' | 'extensions' | 'charts' | 'primitives' | 'navigation' | 'feedback' | 'tokens' | 'governance';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [appMode, setAppMode] = useState<AppMode>('tovelu_app');
  const [appTab, setAppTab] = useState<AppTab>('today');
  const [isYouOpen, setIsYouOpen] = useState(false);

  // Design system state
  const [activeGalleryTab, setActiveGalleryTab] = useState<TDSGalleryTab>('wordmark');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [_inspectedBiomarker, setInspectedBiomarker] = useState('Fasting Glucose');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-slate-100 text-slate-900'} transition-colors duration-200`}>
      {/* Top Universal Mode Switcher Bar */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-3 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* App Mode Pills */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setAppMode('tovelu_app')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1.5 shrink-0 ${
                appMode === 'tovelu_app'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-[0_0_15px_rgba(0,255,157,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              📱 Tovelu App
            </button>

            <button
              onClick={() => setAppMode('survey')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'survey'
                  ? 'bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black shadow-sm ring-2 ring-emerald-500/30'
                  : 'bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              🔥 52-Q Survey
            </button>

            <button
              onClick={() => setAppMode('thais')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'thais'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              THAIS Engine
            </button>

            <button
              onClick={() => setAppMode('design_system')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'design_system'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Component className="w-3.5 h-3.5" />
              Design System
            </button>
          </div>

          {/* Dark / Light Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center hover:bg-slate-800 active:scale-95 transition-all text-slate-400 hover:text-white"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* RENDER ACTIVE MODE */}
      {appMode === 'tovelu_app' ? (
        <MobileAppShell
          darkMode={darkMode}
          bottomNav={<AppBottomNav activeTab={appTab} onTabChange={setAppTab} darkMode={darkMode} />}
        >
          {appTab === 'today' ? (
            <TodayTab onOpenYou={() => setIsYouOpen(true)} darkMode={darkMode} />
          ) : appTab === 'week' ? (
            <WeekTab onOpenYou={() => setIsYouOpen(true)} darkMode={darkMode} />
          ) : appTab === 'chat' ? (
            <ChatTab onOpenYou={() => setIsYouOpen(true)} darkMode={darkMode} />
          ) : appTab === 'report' ? (
            <ReportTab onOpenYou={() => setIsYouOpen(true)} darkMode={darkMode} />
          ) : (
            <div className="p-6 text-center space-y-4 pt-20">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-2xl">
                🩺
              </div>
              <h3 className="text-base font-black text-slate-100 uppercase tracking-wider">
                HEALTH Section
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                The Doctor-Ready Lifetime Health Report (Weekly Auto-Updating Medical Mirror) is queued next!
              </p>
              <button
                onClick={() => setAppTab('today')}
                className="py-2 px-4 rounded-xl text-xs font-bold bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90"
              >
                ← Back to TODAY
              </button>
            </div>
          )}

          {/* YOU DRAWER (Opened via Profile Avatar) */}
          <YouDrawer isOpen={isYouOpen} onClose={() => setIsYouOpen(false)} darkMode={darkMode} />
        </MobileAppShell>
      ) : appMode === 'survey' ? (
        <div className="max-w-4xl mx-auto py-4 px-3">
          <DopamineSurveyRunner
            onComplete={(_input, _assessment, _plan) => {
              setAppMode('tovelu_app');
            }}
            onCancel={() => setAppMode('tovelu_app')}
          />
        </div>
      ) : appMode === 'thais' ? (
        <div className="max-w-6xl mx-auto py-4 px-3">
          <ThaisStudio />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
            {navCategories.map((cat) => {
              const isSelected = cat.id === activeGalleryTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveGalleryTab(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#00FF9D] text-slate-950 font-bold shadow-sm"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            {activeGalleryTab === 'wordmark' && <WordmarkShowcase />}
            {activeGalleryTab === 'logo' && <LogoShowcase />}
            {activeGalleryTab === 'extensions' && <ExtensionsShowcase />}
            {activeGalleryTab === 'health' && <HealthShowcase onInspectBiomarker={(name) => { setInspectedBiomarker(name); setIsSheetOpen(true); }} />}
            {activeGalleryTab === 'charts' && <ChartsShowcase />}
            {activeGalleryTab === 'primitives' && <PrimitivesShowcase />}
            {activeGalleryTab === 'navigation' && <NavigationShowcase />}
            {activeGalleryTab === 'feedback' && <FeedbackShowcase />}
            {activeGalleryTab === 'tokens' && <TokensShowcase />}
            {activeGalleryTab === 'governance' && <GovernanceShowcase />}
          </div>
        </div>
      )}

      {/* Shared Inspection Drawer */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Biomarker Telemetry & Root Cause"
        description="THAIS Bayesian clinical evaluation"
      >
        <div className="space-y-4 text-slate-200">
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-[#00FF9D] uppercase tracking-wider block mb-1">
              Clinical Assessment
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Biomarker trajectory is currently within the optimal homeostasis corridor. No systemic acute alarm detected.
            </p>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
