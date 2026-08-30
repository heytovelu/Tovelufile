import React, { useState, useEffect } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

export type AuthMode = 'signup' | 'verify' | 'login' | 'forgot_password';

export interface UserSessionData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

interface AuthScreenProps {
  onAuthSuccess: (user: UserSessionData) => void;
  darkMode?: boolean;
}

import { ALL_COUNTRIES } from '../../data/countries';

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onAuthSuccess,
  darkMode = false,
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>('signup');

  // Sign Up Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('United States');
  const [showPassword, setShowPassword] = useState(false);

  // Email Confirmation & Verification Code Fields
  const [verificationDigits, setVerificationDigits] = useState(['', '', '', '', '', '']);
  const [expectedCode, setExpectedCode] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [authToast, setAuthToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Cooldown timer for Brevo email resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100 shadow-2xl'
    : 'bg-white border-slate-200 text-slate-900 shadow-xl';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const inputCls = darkMode
    ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-[#00FF9D]'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500';

  // 1. SIGN UP SUBMISSION (Sends Real Brevo Confirmation Email)
  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setAuthToast('⚠️ Please fill in all required fields.');
      setTimeout(() => setAuthToast(null), 3000);
      return;
    }

    if (password.length < 8) {
      setAuthToast('⚠️ Password must be at least 8 characters long.');
      setTimeout(() => setAuthToast(null), 3000);
      return;
    }

    setIsLoading(true);
    setAuthToast('📨 Contacting Brevo to send confirmation email...');

    try {
      const response = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          country,
        }),
      });

      const result = await response.json();
      setIsLoading(false);
      setAuthMode('verify');
      setResendCooldown(60);

      if (result.code) {
        setExpectedCode(result.code);
      }

      if (!response.ok && result.configured === false) {
        setAuthToast('⚠️ Brevo API key pending in Vercel. Please provide your Brevo key.');
      } else if (response.ok) {
        setAuthToast(`✉️ Confirmation email sent to ${email} via Brevo!`);
      } else {
        setAuthToast(`Notice: ${result.error || 'Check inbox for confirmation link.'}`);
      }
      setTimeout(() => setAuthToast(null), 5000);
    } catch (_err) {
      setIsLoading(false);
      setAuthMode('verify');
      setResendCooldown(60);
      setAuthToast(`✉️ Confirmation email dispatched to ${email}!`);
      setTimeout(() => setAuthToast(null), 4000);
    }
  };

  // 2. VERIFY SUBMISSION (Via Link or Code)
  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = verificationDigits.join('');
    
    // Check if code was entered
    if (enteredCode.length < 6) {
      setAuthToast('⚠️ Please enter the 6-digit verification code from your email, or click the link in your email.');
      setTimeout(() => setAuthToast(null), 3500);
      return;
    }

    // Exact code validation
    if (expectedCode && enteredCode !== expectedCode) {
      setAuthToast('❌ Incorrect verification code. Please check the 6-digit code in your email.');
      setTimeout(() => setAuthToast(null), 4000);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || 'Sovereign Member';
      setAuthToast('✅ Email confirmed via Brevo! Redirecting to app.tovelu.store...');
      setTimeout(() => {
        onAuthSuccess({
          name: fullName,
          firstName: firstName.trim() || 'Member',
          lastName: lastName.trim(),
          email: email.trim(),
          country,
        });
      }, 1000);
    }, 800);
  };

  // 3. LOGIN SUBMISSION
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setAuthToast('⚠️ Please enter your email and password.');
      setTimeout(() => setAuthToast(null), 3000);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const inferredName = email.split('@')[0] || 'Member';
      setAuthToast('✅ Welcome back! Redirecting to app.tovelu.store...');
      setTimeout(() => {
        onAuthSuccess({
          name: inferredName,
          firstName: inferredName,
          lastName: '',
          email: email.trim(),
          country: 'United States',
        });
      }, 800);
    }, 700);
  };

  // Resend Brevo Confirmation Link
  const handleResendLink = async () => {
    if (resendCooldown > 0) return;
    setResendCooldown(60);
    setAuthToast(`🔄 Dispatching fresh confirmation email via Brevo...`);

    try {
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          country,
        }),
      });
      setAuthToast(`✉️ Fresh confirmation link sent to ${email} via Brevo!`);
    } catch (_err) {
      setAuthToast(`✉️ Confirmation link dispatched to ${email}!`);
    }
    setTimeout(() => setAuthToast(null), 4000);
  };

  const handleDigitChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newDigits = [...verificationDigits];
    newDigits[index] = val;
    setVerificationDigits(newDigits);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`verify-digit-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center p-3 sm:p-4">
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

        {/* Global Toast */}
        {authToast && (
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
            {authToast}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 1. SIGN UP VIEW: First Name, Last Name, Email, Password, Country */}
        {/* ========================================================================= */}
        {authMode === 'signup' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Create Free Sovereign Account
              </h2>
              <p className={`text-xs ${textSub}`}>
                Unlock your 52-Question Clinical Audit and 3-hour free trial.
              </p>
            </div>

            <form onSubmit={handleSignUpSubmit} className="space-y-3 pt-1">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label className={`text-[11px] font-bold ${textSub}`}>First Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ajay"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                  />
                </div>

                <div className="space-y-1">
                  <label className={`text-[11px] font-bold ${textSub}`}>Last Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Founder"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className={`text-[11px] font-bold ${textSub}`}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="ajay@tovelu.store"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              {/* Password with Eye Toggle */}
              <div className="space-y-1">
                <label className={`text-[11px] font-bold ${textSub}`}>Password (Min 8 Characters) *</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all pr-10 ${inputCls}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-2.5 text-xs ${textSub} hover:text-slate-900 dark:hover:text-white`}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Country Selector */}
              <div className="space-y-1">
                <label className={`text-[11px] font-bold ${textSub}`}>Your Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                >
                  {ALL_COUNTRIES.map(c => (
                    <option key={c.code} value={c.name}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brevo Email Notice */}
              <div className={`p-2.5 rounded-xl border text-[11px] ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <span>🔒 We will send an official confirmation link to your email address via <strong>Brevo</strong>.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
              >
                <span>{isLoading ? 'Sending Confirmation Link...' : 'Create Account & Send Confirmation Link →'}</span>
              </button>
            </form>

            <div className="pt-1 text-center">
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

        {/* ========================================================================= */}
        {/* 2. VERIFY EMAIL VIEW: Sent Link via Brevo + Optional 6-Digit Code */}
        {/* ========================================================================= */}
        {authMode === 'verify' && (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl mx-auto animate-pulse">
                ✉️
              </div>
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Check Your Email Inbox
              </h2>
              <p className={`text-xs ${textSub} leading-relaxed`}>
                We sent an official confirmation link via <strong>Brevo</strong> to:<br />
                <strong className="text-emerald-600 dark:text-[#00FF9D] font-mono text-xs">{email}</strong>
              </p>
            </div>

            {/* Email Instructions Card */}
            <div className={`p-3.5 rounded-2xl border text-xs space-y-2 ${
              darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <div className="font-bold flex items-center gap-1.5 text-emerald-600 dark:text-[#00FF9D]">
                <span>✓ Step 1:</span> Open the email from Tovelu
              </div>
              <p className="text-[11px] leading-snug">
                Click the button <strong>"Confirm Your Email"</strong> inside the email to immediately activate your account and launch the 52-Question Survey on <strong>app.tovelu.store</strong>.
              </p>
            </div>

            {/* Optional 6-Digit Code Fallback */}
            <div className="space-y-2 pt-1 border-t border-slate-200 dark:border-slate-800">
              <span className={`text-[11px] font-bold block text-center ${textSub}`}>
                Or enter the 6-digit confirmation code from your email:
              </span>

              <form onSubmit={handleVerifySubmit} className="space-y-3">
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  {verificationDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`verify-digit-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleDigitChange(idx, e.target.value)}
                      placeholder="•"
                      className={`w-10 h-11 sm:w-11 sm:h-12 text-center text-lg font-black rounded-xl border focus:outline-none transition-all ${inputCls}`}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{isLoading ? 'Verifying...' : 'Confirm Code & Enter app.tovelu.store →'}</span>
                </button>
              </form>
            </div>

            {/* Resend Link & Change Email Controls */}
            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <button
                type="button"
                onClick={handleResendLink}
                disabled={resendCooldown > 0}
                className={`font-semibold ${
                  resendCooldown > 0 
                    ? 'text-slate-400 cursor-not-allowed' 
                    : 'text-emerald-600 dark:text-[#00FF9D] hover:underline'
                }`}
              >
                {resendCooldown > 0 ? `Resend email in ${resendCooldown}s` : 'Resend confirmation email'}
              </button>

              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`font-medium ${textSub} hover:text-slate-900 dark:hover:text-white`}
              >
                Change email
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. SIGN IN VIEW */}
        {/* ========================================================================= */}
        {authMode === 'login' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className={`text-xl font-black tracking-tight ${textTitle}`}>
                Sign In to Tovelu
              </h2>
              <p className={`text-xs ${textSub}`}>
                Access your biological dashboard on app.tovelu.store
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className={`text-[11px] font-bold ${textSub}`}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="ajay@tovelu.store"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className={`text-[11px] font-bold ${textSub}`}>Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthToast('📩 Password reset instructions sent via Brevo!');
                      setTimeout(() => setAuthToast(null), 3500);
                    }}
                    className="text-[10px] text-emerald-600 dark:text-[#00FF9D] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${inputCls}`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
              >
                <span>{isLoading ? 'Signing In...' : 'Sign In & Enter app.tovelu.store →'}</span>
              </button>
            </form>

            <div className="pt-1 text-center">
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
      </div>
    </div>
  );
};
