import React, { useState, useEffect } from 'react';
import { 
  LineChart, Sparkles, Shapes, 
  Activity, Bell, Type, Layers, Component, ShieldCheck,
  Bot, Moon, Sun, Cpu, Smartphone, Lock, CreditCard, Globe
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
import { MarketingLandingPage } from './components/marketing/MarketingLandingPage';
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

type AppMode = 'marketing' | 'auth' | 'survey' | 'tovelu_app' | 'thais' | 'design_system';
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

  // Intelligent Subdomain Detection for Vercel (tovelu.store vs app.tovelu.store)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname === 'tovelu.store' || hostname === 'www.tovelu.store') {
        setAppMode('marketing');
      } else if (hostname.startsWith('app.') || hostname.includes('app.tovelu.store')) {
        setAppMode('tovelu_app');
      }
    }
  }, []);

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
      {/* Top Universal Switcher Bar (Vercel Domain Routing) */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-3 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* Domain Routing Switcher */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Domain 1: tovelu.store */}
            <button
              onClick={() => setAppMode('marketing')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                appMode === 'marketing'
                  ? 'bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-black shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Public Domain: tovelu.store (Sales Page, Free Signup, Login)"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>🌐 tovelu.store (Sales & Auth)</span>
            </button>

            {/* Domain 2: app.tovelu.store */}
            <button
              onClick={() => setAppMode('tovelu_app')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1.5 shrink-0 ${
                appMode === 'tovelu_app'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-[0_0_15px_rgba(0,255,157,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="App Domain: app.tovelu.store (Web App, Today/Week, 3-Hr Trial, Paywall)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>📱 app.tovelu.store (App)</span>
            </button>

            {/* Sub-Funnel Jump Links for Testing */}
            <button
              onClick={() => setAppMode('auth')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'auth'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3 h-3" />
              Sign Up/Verify
            </button>

            <button
              onClick={() => setAppMode('survey')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                appMode === 'survey'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              52-Q Survey
            </button>

            <button
              onClick={() => setIsPaywallOpen(true)}
              className="px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 shrink-0 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"
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
              THAIS
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

      {/* ========================================================================= */}
      {/* 1. PUBLIC DOMAIN VIEW: tovelu.store (Marketing Landing & Sales Page) */}
      {/* ========================================================================= */}
      {appMode === 'marketing' ? (
        <MarketingLandingPage
          darkMode={darkMode}
          onStartSignUp={() => setAppMode('auth')}
          onGoToLogin={() => setAppMode('auth')}
          onEnterApp={() => setAppMode('tovelu_app')}
        />
      ) : appMode === 'auth' ? (
        /* ========================================================================= */
        /* 2. AUTH SCREEN: Create Free Account, Brevo Verification, Supabase Login */
        /* ========================================================================= */
        <div className="w-full max-w-[448px] mx-auto py-3 px-2">
          <AuthScreen
            darkMode={darkMode}
            onAuthSuccess={(user) => {
              setUserSession(user);
              setJourneyToast(`🎉 Welcome ${user.name}! Redirecting to app.tovelu.store 52-Q Survey...`);
              setTimeout(() => {
                setJourneyToast(null);
                setAppMode('survey');
              }, 1200);
            }}
          />
        </div>
      ) : appMode === 'survey' ? (
        /* ========================================================================= */
        /* 3. 52-QUESTION SURVEY & SHORT HEALTH REPORT (Inside app.tovelu.store) */
        /* ========================================================================= */
        <div className="w-full max-w-[448px] mx-auto py-2 px-2">
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
        /* ========================================================================= */
        /* 4. AUTHENTICATED SOVEREIGN WEB APP (app.tovelu.store - 5 Core Sections) */
        /* ========================================================================= */
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
