import { useState, useEffect } from 'react';
import { BrandWebsite } from './components/brand/BrandWebsite';
import { AuthScreen, UserSessionData } from './components/auth/AuthScreen';
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

  // User Authentication & Membership State with LocalStorage Persistence
  const [userSession, setUserSession] = useState<UserSessionData | null>(() => {
    try {
      const stored = localStorage.getItem('tovelu_user_session');
      return stored ? JSON.parse(stored) : null;
    } catch (_e) {
      return null;
    }
  });

  const [isPaidMember, setIsPaidMember] = useState<boolean>(() => {
    try {
      return localStorage.getItem('tovelu_membership_status') === 'paid';
    } catch (_e) {
      return false;
    }
  });

  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize flow state based on actual domain or URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);

      const emailParam = searchParams.get('email');
      const nameParam = searchParams.get('name');
      const countryParam = searchParams.get('country') || 'United States';

      if (emailParam && nameParam) {
        const session: UserSessionData = {
          name: nameParam,
          firstName: nameParam.split(' ')[0] || 'Member',
          lastName: nameParam.split(' ')[1] || '',
          email: emailParam,
          country: countryParam,
        };
        setUserSession(session);
        try {
          localStorage.setItem('tovelu_user_session', JSON.stringify(session));
        } catch (_e) {}
      }

      // If accessing app.tovelu.store or /app or /survey
      if (hostname.startsWith('app.') || pathname.startsWith('/app') || pathname.startsWith('/survey')) {
        let isSurveyDone = false;
        try {
          isSurveyDone = localStorage.getItem('tovelu_survey_completed') === 'true';
        } catch (_e) {}

        if (isSurveyDone) {
          setFlowState('app');
        } else {
          setFlowState('survey');
        }
      } else {
        // Public domain tovelu.store -> strictly website or auth
        setFlowState('website');
      }
    }
  }, []);

  const handleAuthSuccess = (user: UserSessionData) => {
    setUserSession(user);
    try {
      localStorage.setItem('tovelu_user_session', JSON.stringify(user));
    } catch (_e) {}

    // If user is on tovelu.store, REDIRECT IMMEDIATELY TO app.tovelu.store
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.includes('tovelu.store') && !hostname.startsWith('app.')) {
        setToastMessage(`🎉 Account Verified! Redirecting to app.tovelu.store...`);
        setTimeout(() => {
          window.location.href = `https://app.tovelu.store/?email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(user.name)}&country=${encodeURIComponent(user.country)}`;
        }, 600);
        return;
      }
    }

    // If on app.tovelu.store or local environment:
    setToastMessage(`🎉 Welcome ${user.firstName}! Starting your 52-Question Clinical Audit...`);
    setTimeout(() => {
      setToastMessage(null);
      setFlowState('survey');
    }, 1000);
  };

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
      {/* 1. REAL PUBLIC BRAND WEBSITE (Strictly at tovelu.store) */}
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
      {/* 2. REAL AUTHENTICATION SCREEN: Sign Up / Login (Redirects to app.tovelu.store) */}
      {/* ========================================================================= */}
      {flowState === 'auth' && (
        <div className="min-h-screen flex items-center justify-center p-3">
          <div className="w-full max-w-[448px]">
            <AuthScreen
              darkMode={darkMode}
              onAuthSuccess={handleAuthSuccess}
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
                try {
                  localStorage.setItem('tovelu_survey_completed', 'true');
                } catch (_e) {}
                setIsPaywallOpen(true);
              }}
              onComplete={(_input, _assessment, _plan) => {
                try {
                  localStorage.setItem('tovelu_survey_completed', 'true');
                  // Initialize 3-hour trial if not already running
                  if (!localStorage.getItem('tovelu_trial_expires_at')) {
                    localStorage.setItem('tovelu_trial_expires_at', (Date.now() + 3 * 60 * 60 * 1000).toString());
                  }
                } catch (_e) {}
                setToastMessage('⏱️ 3-Hour Free Access Activated! Explore your full protocol in the app.');
                setTimeout(() => setToastMessage(null), 3500);
                setFlowState('app');
              }}
              onCancel={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = 'https://tovelu.store';
                } else {
                  setFlowState('website');
                }
              }}
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
          try {
            localStorage.setItem('tovelu_membership_status', 'paid');
            localStorage.setItem('tovelu_start_date_choice', choice);
          } catch (_e) {}
          setToastMessage(`🏆 Day 1 Start Date Locked for "${choice}"! Full Protocol Active.`);
          setTimeout(() => setToastMessage(null), 4000);
          setFlowState('app');
          setAppTab('today');
        }}
      />
    </div>
  );
}
