import React, { useState, useEffect } from 'react';
import { 
  LineChart, Sparkles, Shapes, 
  Activity, Bell, Type, Layers, Component, ShieldCheck,
  Bot, Moon, Sun, Cpu, Smartphone, Lock, CreditCard
} from 'lucide-react';
import { DopamineSurveyRunner } from './components/survey/DopamineSurveyRunner';
import { ThaisStudio } from './components/thais/ThaisStudio';
import { MobileAppShell } from './components/app/MobileAppShell';
import { AppBottomNav, AppTab } from './components/app/AppBottomNav';
import { TodayTab } from './components/app/TodayTab';
import { WeekTab } from './components/app/WeekTab';
import { ReportTab } from './components/app/ReportTab';
import { HealthTab } from './components/app/HealthTab';
import { YouTab } from './components/app/YouTab';
import { AuthScreen } from './components/auth/AuthScreen';
import { PaywallModal } from './components/paywall/PaywallModal';
import { StartDatePickerModal } from './components/onboarding/StartDatePickerModal';

// Showcase components for Design System
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

type AppMode = 'auth' | 'survey' | 'tovelu_app' | 'thais' | 'design_system';
type TDSGalleryTab = 'wordmark' | 'logo' | 'health' | 'extensions' | 'charts' | 'primitives' | 'navigation' | 'feedback' | 'tokens' | 'governance';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>('tovelu_app');
  const [appTab, setAppTab] = useState<AppTab>('today');

  // User Journey States
  const [userSession, setUserSession] = useState<{ name: string; email: string } | null>({
    name: 'Ajay',
    email: 'ajay@tovelu.store',
  });
  const [isPaidMember, setIsPaidMember] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [journeyToast, setJourneyToast] = useState<string | null>(null);

  // Design system state
  const [activeGalleryTab, setActiveGalleryTab] = useState<TDSGalleryTab>('wordmark');

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
      {/* Top Universal Mode Switcher Bar (User Journey Stages) */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-3 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* Journey Navigation Pills */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Step 1: Create Account / Login */}
            <button
              onClick={() => setAppMode('auth')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'auth'
                  ? 'bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Step 1: Create Free Account, Brevo Verification & Supabase Auth"
            >
              <Lock className="w-3 h-3" />
              1. Account & Verify
            </button>

            {/* Step 2: 52-Q Survey */}
            <button
              onClick={() => setAppMode('survey')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'survey'
                  ? 'bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300'
              }`}
              title="Step 2: 52-Q Survey & Short Health Report Reveal"
            >
              <Sparkles className="w-3 h-3" />
              2. 52-Q Survey
            </button>

            {/* Step 3: Web App */}
            <button
              onClick={() => setAppMode('tovelu_app')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1.5 shrink-0 ${
                appMode === 'tovelu_app'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-[0_0_15px_rgba(0,255,157,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Step 3: Web App with 3-Hour Free Access Window"
            >
              <Smartphone className="w-3.5 h-3.5" />
              3. Web App ({isPaidMember ? 'Member' : '3-Hr Trial'})
            </button>

            {/* Step 4: Paywall Trigger */}
            <button
              onClick={() => setIsPaywallOpen(true)}
              className="px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"
              title="Test Dodo Payments 4-Tier Paywall"
            >
              <CreditCard className="w-3 h-3" />
              💳 Dodo Paywall
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

      {/* Global Toast */}
      {journeyToast && (
        <div className="max-w-md mx-auto my-2 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
          {journeyToast}
        </div>
      )}

      {/* RENDER ACTIVE MODE */}
      {appMode === 'auth' ? (
        <div className="max-w-4xl mx-auto py-6 px-3">
          <AuthScreen
            darkMode={darkMode}
            onAuthSuccess={(user) => {
              setUserSession(user);
              setJourneyToast(`🎉 Welcome ${user.name}! Directing to 52-Question Clinical Survey...`);
              setTimeout(() => {
                setJourneyToast(null);
                setAppMode('survey');
              }, 1200);
            }}
          />
        </div>
      ) : appMode === 'survey' ? (
        <div className="max-w-4xl mx-auto py-4 px-3">
          <DopamineSurveyRunner
            onPayNow={(_input, _assessment, _plan) => {
              setIsPaywallOpen(true);
            }}
            onComplete={(_input, _assessment, _plan) => {
              setJourneyToast('⏱️ 3-Hour Free Access Activated! Explore your full protocol in the app.');
              setTimeout(() => setJourneyToast(null), 4000);
              setAppMode('tovelu_app');
            }}
            onCancel={() => setAppMode('tovelu_app')}
          />
        </div>
      ) : appMode === 'tovelu_app' ? (
        <MobileAppShell
          darkMode={darkMode}
          bottomNav={<AppBottomNav activeTab={appTab} onTabChange={setAppTab} darkMode={darkMode} />}
        >
          {appTab === 'today' ? (
            <TodayTab
              onOpenYou={() => setAppTab('you')}
              darkMode={darkMode}
              onToggleTheme={() => setDarkMode(!darkMode)}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              isPaidMember={isPaidMember}
            />
          ) : appTab === 'week' ? (
            <WeekTab onOpenYou={() => setAppTab('you')} darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
          ) : appTab === 'report' ? (
            <ReportTab onOpenYou={() => setAppTab('you')} darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
          ) : appTab === 'health' ? (
            <HealthTab onOpenYou={() => setAppTab('you')} darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
          ) : (
            <YouTab darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
          )}
        </MobileAppShell>
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
            {activeGalleryTab === 'health' && <HealthShowcase onInspectBiomarker={() => {}} />}
            {activeGalleryTab === 'charts' && <ChartsShowcase />}
            {activeGalleryTab === 'primitives' && <PrimitivesShowcase />}
            {activeGalleryTab === 'navigation' && <NavigationShowcase />}
            {activeGalleryTab === 'feedback' && <FeedbackShowcase />}
            {activeGalleryTab === 'tokens' && <TokensShowcase />}
            {activeGalleryTab === 'governance' && <GovernanceShowcase />}
          </div>
        </div>
      )}

      {/* DODO PAYMENTS 4-TIER PAYWALL MODAL */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        userEmail={userSession?.email}
        darkMode={darkMode}
        onPaymentSuccess={(_tier) => {
          setIsPaywallOpen(false);
          setIsStartDatePickerOpen(true);
        }}
      />

      {/* POST-PAYMENT: CHOOSE START DATE FOR DAY 1 */}
      <StartDatePickerModal
        isOpen={isStartDatePickerOpen}
        darkMode={darkMode}
        onConfirmStartDate={(choice) => {
          setIsStartDatePickerOpen(false);
          setIsPaidMember(true);
          setJourneyToast(`🏆 Day 1 Start Date Locked for "${choice}"! Full Protocol Active.`);
          setTimeout(() => setJourneyToast(null), 4000);
          setAppMode('tovelu_app');
          setAppTab('today');
        }}
      />
    </div>
  );
}
