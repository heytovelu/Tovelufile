import { useState, useEffect } from 'react';
import { BrandWebsite } from './components/brand/BrandWebsite';
import { AuthScreen } from './components/auth/AuthScreen';
import { DopamineSurveyRunner } from './components/survey/DopamineSurveyRunner';
import { MobileAppShell } from './components/app/MobileAppShell';
import { AppBottomNav, AppTab } from './components/app/AppBottomNav';
import { TodayTab } from './components/app/TodayTab';
import { WeekTab } from './components/app/WeekTab';
import { ReportTab } from './components/app/ReportTab';
import { HealthTab } from './components/app/HealthTab';
import { YouTab } from './components/app/YouTab';
import { PaywallModal } from './components/paywall/PaywallModal';
import { StartDatePickerModal } from './components/onboarding/StartDatePickerModal';

type AppFlowState = 'website' | 'auth' | 'survey' | 'app';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [appTab, setAppTab] = useState<AppTab>('today');

  // Real-world domain detection (tovelu.store vs app.tovelu.store)
  const [flowState, setFlowState] = useState<AppFlowState>('website');

  // User Authentication & Membership State
  const [userSession, setUserSession] = useState<{ name: string; email: string } | null>(null);
  const [isPaidMember, setIsPaidMember] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize flow state based on actual domain or URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;

      // If accessing app.tovelu.store or /app or /survey -> enter authenticated app flow
      if (hostname.startsWith('app.') || pathname.startsWith('/app') || pathname.startsWith('/survey')) {
        setFlowState('survey');
      } else {
        // Public domain tovelu.store -> show the real brand website
        setFlowState('website');
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050709] text-slate-100' : 'bg-slate-100 text-slate-900'} transition-colors duration-200`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full px-4">
          <div className="p-3 rounded-2xl bg-emerald-500/90 text-slate-950 text-center text-xs font-black shadow-xl animate-bounce">
            {toastMessage}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. REAL PUBLIC BRAND WEBSITE (At tovelu.store) */}
      {/* ========================================================================= */}
      {flowState === 'website' && (
        <BrandWebsite
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
          onTryForFree={() => setFlowState('auth')}
          onGoToLogin={() => setFlowState('auth')}
        />
      )}

      {/* ========================================================================= */}
      {/* 2. REAL AUTHENTICATION SCREEN: Create Free Account, Brevo Verify, Login */}
      {/* ========================================================================= */}
      {flowState === 'auth' && (
        <div className="min-h-screen flex items-center justify-center p-3">
          <div className="w-full max-w-[448px]">
            <AuthScreen
              darkMode={darkMode}
              onAuthSuccess={(user) => {
                setUserSession(user);
                setToastMessage(`🎉 Welcome ${user.name}! Starting your 52-Question Clinical Audit...`);
                setTimeout(() => {
                  setToastMessage(null);
                  setFlowState('survey');
                }, 1200);
              }}
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. REAL 52-QUESTION SURVEY & SHORT HEALTH REPORT (At app.tovelu.store) */}
      {/* ========================================================================= */}
      {flowState === 'survey' && (
        <div className="min-h-screen flex items-center justify-center p-3">
          <div className="w-full max-w-[448px]">
            <DopamineSurveyRunner
              onPayNow={(_input, _assessment, _plan) => {
                setIsPaywallOpen(true);
              }}
              onComplete={(_input, _assessment, _plan) => {
                setToastMessage('⏱️ 3-Hour Free Access Activated! Explore your full protocol in the app.');
                setTimeout(() => setToastMessage(null), 3500);
                setFlowState('app');
              }}
              onCancel={() => setFlowState('website')}
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. REAL SOVEREIGN WEB APP (At app.tovelu.store - 5 Core Sections) */}
      {/* ========================================================================= */}
      {flowState === 'app' && (
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
      )}

      {/* ========================================================================= */}
      {/* 5. DODO PAYMENTS 4-TIER PAYWALL MODAL */}
      {/* ========================================================================= */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        userEmail={userSession?.email || 'ajay@tovelu.store'}
        darkMode={darkMode}
        onPaymentSuccess={(_tier) => {
          setIsPaywallOpen(false);
          setIsStartDatePickerOpen(true);
        }}
      />

      {/* ========================================================================= */}
      {/* 6. POST-PAYMENT: CHOOSE START DATE FOR DAY 1 */}
      {/* ========================================================================= */}
      <StartDatePickerModal
        isOpen={isStartDatePickerOpen}
        darkMode={darkMode}
        onConfirmStartDate={(choice) => {
          setIsStartDatePickerOpen(false);
          setIsPaidMember(true);
          setToastMessage(`🏆 Day 1 Start Date Locked for "${choice}"! Full Protocol Active.`);
          setTimeout(() => setToastMessage(null), 4000);
          setFlowState('app');
          setAppTab('today');
        }}
      />
    </div>
  );
}
