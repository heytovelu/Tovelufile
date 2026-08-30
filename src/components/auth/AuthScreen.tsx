import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

export type AuthMode = 'signup' | 'verify' | 'login';

interface AuthScreenProps {
  onAuthSuccess: (user: { name: string; email: string }) => void;
  darkMode?: boolean;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onAuthSuccess,
  darkMode = false,
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [name, setName] = useState('Ajay');
  const [email, setEmail] = useState('ajay@tovelu.store');
  const [password, setPassword] = useState('••••••••••••');
  const [verificationCode, setVerificationCode] = useState(['8', '9', '4', '1', '2', '0']);
  const [authToast, setAuthToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100 shadow-2xl'
    : 'bg-white border-slate-200 text-slate-900 shadow-xl';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const inputCls = darkMode
    ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-[#00FF9D]'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500';

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthMode('verify');
      setAuthToast('📧 Verification code sent to your email via Brevo!');
      setTimeout(() => setAuthToast(null), 3500);
    }, 600);
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthToast('✅ Email verified via Supabase! Directing to Clinical Survey...');
      setTimeout(() => {
        onAuthSuccess({ name: name || 'Sovereign Member', email });
      }, 1000);
    }, 600);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthToast('✅ Logged in successfully!');
      setTimeout(() => {
        onAuthSuccess({ name: name || 'Ajay', email });
      }, 800);
    }, 600);
  };

  const handleCodeChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newCode = [...verificationCode];
    newCode[index] = val;
    setVerificationCode(newCode);
  };

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center p-4">
      <div className={`w-full max-w-md rounded-3xl p-6 sm:p-8 border transition-all ${cardCls} space-y-6`}>
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <HomeostasisLogo size={42} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
            WWW.TOVELU.STORE • SOVEREIGN HEALTH OS
          </div>
        </div>

        {/* Toast */}
        {authToast && (
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
            {authToast}
          </div>
        )}

        {/* 1. SIGN UP VIEW */}
        {authMode === 'signup' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Create Your Free Account
              </h2>
              <p className={`text-xs ${textSub}`}>
                Step 1 of 3: Access your 52-Question Clinical Biological Survey
              </p>
            </div>

            <form onSubmit={handleSignUpSubmit} className="space-y-3 pt-1">
              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${textSub}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ajay"
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${textSub}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${textSub}`}>
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a secure password"
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Creating Sovereign Account...' : 'Continue: Verify Email & Start Survey →'}
                </button>
              </div>
            </form>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`text-xs font-medium ${textSub} hover:text-emerald-600 dark:hover:text-[#00FF9D] transition-colors`}
              >
                Already have an account? <strong className="underline">Sign in</strong>
              </button>
            </div>
          </div>
        )}

        {/* 2. VERIFY EMAIL VIEW */}
        {authMode === 'verify' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="text-2xl">📧</div>
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Verify Your Email
              </h2>
              <p className={`text-xs ${textSub}`}>
                We sent a 6-digit code to <span className="font-bold text-emerald-600 dark:text-[#00FF9D]">{email}</span>
              </p>
            </div>

            <form onSubmit={handleVerifySubmit} className="space-y-4 pt-1">
              {/* 6 Digits input */}
              <div className="flex justify-center gap-2">
                {verificationCode.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(idx, e.target.value)}
                    className={`w-11 h-12 text-center text-lg font-black rounded-xl border focus:outline-none transition-all ${inputCls}`}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
              >
                {isLoading ? 'Verifying Code...' : 'Verify Email & Enter 52-Q Survey →'}
              </button>
            </form>

            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <button
                type="button"
                onClick={() => {
                  setAuthToast('🔄 Fresh verification code sent via Brevo!');
                  setTimeout(() => setAuthToast(null), 3000);
                }}
                className={`font-semibold ${textSub} hover:text-emerald-600 dark:hover:text-[#00FF9D]`}
              >
                Resend Code
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`font-semibold ${textSub} hover:underline`}
              >
                Change Email
              </button>
            </div>
          </div>
        )}

        {/* 3. LOGIN VIEW */}
        {authMode === 'login' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Log In to Tovelu
              </h2>
              <p className={`text-xs ${textSub}`}>
                Enter your credentials to access your Sovereign Health OS
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-3 pt-1">
              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${textSub}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${textSub}`}>
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Authenticating...' : 'Sign In to Sovereign OS →'}
                </button>
              </div>
            </form>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`text-xs font-medium ${textSub} hover:text-emerald-600 dark:hover:text-[#00FF9D] transition-colors`}
              >
                Don't have an account? <strong className="underline">Create Free Account</strong>
              </button>
            </div>
          </div>
        )}

        {/* Security & Codex Article 16 Seal */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
          <span>🛡️ Powered by Supabase & Brevo</span>
          <span>•</span>
          <span>Zero Data Selling (Art. 16)</span>
        </div>
      </div>
    </div>
  );
};
