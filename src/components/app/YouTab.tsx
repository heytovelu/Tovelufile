import React, { useState } from 'react';
import { TOVELU_USER_RULE_BOOK } from '../../data/userRuleBook';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface YouTabProps {
  darkMode?: boolean;
}

type YouModule = 'rulebook' | 'biometrics' | 'schedule' | 'wearables' | 'membership' | 'privacy' | 'founder';

export const YouTab: React.FC<YouTabProps> = ({
  darkMode = true,
}) => {
  const [activeTab, setActiveTab] = useState<YouModule>('rulebook');
  const [activeChapter, setActiveChapter] = useState<number | null>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [actionToast, setActionToast] = useState<string | null>(null);

  // Wearables state
  const [wearables, setWearables] = useState({
    appleHealth: true,
    googleFit: false,
    whoop: true,
    oura: false,
    dexcomCgm: false,
  });

  // Schedule state
  const [wakeTime, setWakeTime] = useState('07:00');
  const [bedTime, setBedTime] = useState('22:30');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  const handleToast = (msg: string) => {
    setActionToast(msg);
    setTimeout(() => setActionToast(null), 3000);
  };

  const navItems: { id: YouModule; label: string; icon: string }[] = [
    { id: 'rulebook', label: 'Rule Book', icon: '📖' },
    { id: 'biometrics', label: 'Biometrics', icon: '🧬' },
    { id: 'schedule', label: 'Schedule', icon: '⏰' },
    { id: 'wearables', label: 'Wearables', icon: '⌚' },
    { id: 'membership', label: 'Membership', icon: '💳' },
    { id: 'privacy', label: 'Privacy & Art 16', icon: '🛡️' },
    { id: 'founder', label: 'Founder Line', icon: '📞' },
  ];

  // Theme helper classes for 100% crisp light/dark visibility
  const cardCls = darkMode ? 'bg-[#0E1318] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm';
  const subBoxCls = darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const btnSecCls = darkMode 
    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' 
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 font-bold';

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-8 animate-fadeIn">
      {/* 1. TOP HEADER */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#00FF9D] border border-emerald-500/30 font-mono">
          SOVEREIGN HEALTH OS
        </span>
      </div>

      {/* 2. USER PROFILE BANNER */}
      <div className={`p-4 rounded-2xl border ${cardCls} flex items-center justify-between shadow-sm`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
            AJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`text-base font-black tracking-tight ${textTitle}`}>Ajay</h2>
              <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-[#00FF9D] border border-emerald-500/30">
                Sovereign Member
              </span>
            </div>
            <p className={`text-xs ${textSub} font-mono mt-0.5`}>
              ID: #TVL-SOV-8941 • Day 14 of 90 Arc
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className={`text-[10px] ${textSub} uppercase font-mono block`}>Status:</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Active</span>
        </div>
      </div>

      {/* TOAST */}
      {actionToast && (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
          {actionToast}
        </div>
      )}

      {/* 3. HORIZONTAL MODULE NAVIGATION PILLS */}
      <div className="flex items-center gap-1.5 p-1 overflow-x-auto no-scrollbar rounded-2xl bg-slate-200 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === item.id
                ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* 4. MODULE CONTENT AREA */}

      {/* MODULE 1: THE OFFICIAL TOVELU RULE BOOK */}
      {activeTab === 'rulebook' && (
        <div className="space-y-3">
          <div className={`p-3.5 rounded-2xl border text-xs ${subBoxCls}`}>
            <span className="font-bold text-emerald-600 dark:text-[#00FF9D] block mb-1">
              The Official Tovelu Operating Manual
            </span>
            5 chapters of non-negotiable dignity, daily habits, and travel protocols.
          </div>

          {TOVELU_USER_RULE_BOOK.map((chap) => {
            const isOpen = activeChapter === chap.number;
            return (
              <div
                key={chap.id}
                className={`rounded-2xl border ${cardCls} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => setActiveChapter(isOpen ? null : chap.number)}
                  className="w-full p-3.5 flex items-center justify-between text-left"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                      Chapter {chap.number} • {chap.icon}
                    </div>
                    <div className={`text-xs font-bold ${textTitle} mt-0.5`}>
                      {chap.title}
                    </div>
                  </div>
                  <span className={`text-xs ${textSub} font-mono`}>{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div className={`px-3.5 pb-3.5 pt-1 border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-200'} space-y-2 text-xs`}>
                    <p className={`italic ${textSub} leading-relaxed`}>{chap.subtitle}</p>
                    <div className="space-y-2 pt-1">
                      {chap.points.map((pt, idx) => (
                        <div key={idx} className={`p-2.5 rounded-xl border ${subBoxCls}`}>
                          <span className={`font-bold block mb-0.5 ${textTitle}`}>{pt.heading}</span>
                          <p className={`text-[11px] ${textSub} leading-relaxed`}>{pt.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* MODULE 2: BIOLOGICAL BASELINE & CALIBRATION */}
      {activeTab === 'biometrics' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${textSub}`}>
              Metabolic Substrate Profile
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className={`p-2.5 rounded-xl border ${subBoxCls}`}>
                <span className={`block text-[10px] ${textSub}`}>Current Weight</span>
                <span className={`font-bold text-sm ${textTitle}`}>76.4 kg</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${subBoxCls}`}>
                <span className={`block text-[10px] ${textSub}`}>Goal Weight</span>
                <span className="font-bold text-emerald-600 dark:text-[#00FF9D] text-sm">72.0 kg</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${subBoxCls}`}>
                <span className={`block text-[10px] ${textSub}`}>Basal Metabolic Rate (BMR)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">1,680 kcal</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${subBoxCls}`}>
                <span className={`block text-[10px] ${textSub}`}>Daily Expenditure (TDEE)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">2,350 kcal</span>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${cardCls} space-y-2 text-xs`}>
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${textSub}`}>
              Dietary Philosophy & Locks
            </span>
            <div className={`p-2.5 rounded-xl border ${subBoxCls} flex items-center justify-between`}>
              <div>
                <div className={`font-bold ${textTitle}`}>Non-Vegetarian (Mediterranean Metabolic)</div>
                <div className={`text-[11px] ${textSub}`}>Targeting High Protein & Low Glycemic Index</div>
              </div>
              <span className="text-xs text-emerald-600 dark:text-[#00FF9D] font-bold">Active ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
              <span className="font-bold block text-[11px]">🔒 Allergen Lockout Vault:</span>
              <div className="text-[11px] mt-0.5 text-slate-700 dark:text-slate-300">
                Peanuts (100% Deterministic Safety Lock). Recipes with peanuts are permanently blocked.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: CHRONOBIOLOGY & DAILY SCHEDULE */}
      {activeTab === 'schedule' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 text-xs`}>
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${textSub}`}>
              Circadian Sleep & Meal Windows
            </span>

            <div className="grid grid-cols-2 gap-2">
              <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-1`}>
                <span className={`block text-[10px] ${textSub}`}>Wake-Up Target</span>
                <input
                  type="time"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className={`border font-bold rounded-lg px-2 py-1 text-xs w-full ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div className={`p-2.5 rounded-xl border ${subBoxCls} space-y-1`}>
                <span className={`block text-[10px] ${textSub}`}>Bedtime Target</span>
                <input
                  type="time"
                  value={bedTime}
                  onChange={(e) => setBedTime(e.target.value)}
                  className={`border font-bold rounded-lg px-2 py-1 text-xs w-full ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className={`p-3 rounded-xl border ${subBoxCls} flex items-center justify-between`}>
              <div>
                <span className={`font-bold block ${textTitle}`}>Unit System</span>
                <span className={`text-[10px] ${textSub}`}>Kilograms & cm vs Pounds & feet</span>
              </div>
              <button
                onClick={() => setUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
                className="py-1 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-[#00FF9D] font-bold text-xs uppercase"
              >
                {unitSystem.toUpperCase()}
              </button>
            </div>

            <p className={`text-[11px] ${textSub} leading-relaxed pt-1`}>
              Adjusting wake and sleep times recalibrates when chronobiological meals auto-expand and when the 1-minute bedtime survey surfaces.
            </p>
          </div>
        </div>
      )}

      {/* MODULE 4: CONNECTED WEARABLES & SENSORS */}
      {activeTab === 'wearables' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 text-xs`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] uppercase font-bold tracking-wider ${textSub}`}>
                Superpower #2: Sensor Sync
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-[#00FF9D] font-mono">Passive Telemetry</span>
            </div>

            {[
              { key: 'appleHealth', name: 'Apple Health / Apple Watch', icon: '⌚' },
              { key: 'googleFit', name: 'Google Health Connect', icon: '🤖' },
              { key: 'whoop', name: 'Whoop Band (Recovery / Strain)', icon: '⚡' },
              { key: 'oura', name: 'Oura Ring (Sleep Stages)', icon: '💍' },
              { key: 'dexcomCgm', name: 'Dexcom / Libre CGM', icon: '🩸' },
            ].map((sensor) => {
              const isConnected = (wearables as any)[sensor.key];
              return (
                <div
                  key={sensor.key}
                  className={`p-3 rounded-xl border ${subBoxCls} flex items-center justify-between`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{sensor.icon}</span>
                    <div>
                      <div className={`font-bold ${textTitle}`}>{sensor.name}</div>
                      <div className={`text-[10px] ${textSub}`}>
                        {isConnected ? 'Syncing steps, sleep & HRV' : 'Disconnected'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setWearables((prev) => ({ ...prev, [sensor.key]: !isConnected }));
                      handleToast(`${sensor.name} ${!isConnected ? 'Connected ✓' : 'Disconnected'}`);
                    }}
                    className={`py-1 px-2.5 rounded-xl font-bold text-[11px] transition-all ${
                      isConnected
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40'
                        : btnSecCls
                    }`}
                  >
                    {isConnected ? 'Connected ✓' : 'Connect'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODULE 5: COMMERCIAL DIGNITY & MEMBERSHIP (ARTICLE 15) */}
      {activeTab === 'membership' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 text-xs`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-[#00FF9D] tracking-wider">
                Article 15: Commercial Dignity
              </span>
              <span className={`text-[10px] font-mono ${textSub}`}>Zero Retention Traps</span>
            </div>

            <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
              <div className={`text-xs font-bold ${textTitle}`}>Current Status: Active Member</div>
              <div className={`text-[11px] ${textSub}`}>Billing Cycle: Monthly ($0 hidden fees)</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Next Renewal: November 24, 2026</div>
            </div>

            {/* 1-Click Instant Membership Pause */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <span className="font-bold text-amber-700 dark:text-amber-300 block text-xs">
                ⏸️ 1-Click Instant Membership Pause
              </span>
              <p className={`text-[11px] ${textSub} leading-relaxed`}>
                Going on vacation or taking a break? Pause your subscription anytime. No phone calls, no exit surveys, no dark patterns.
              </p>
              <button
                onClick={() => {
                  setIsPaused(!isPaused);
                  handleToast(isPaused ? 'Membership Resumed!' : 'Membership Paused with Zero Penalty');
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  isPaused
                    ? 'bg-[#00FF9D] text-slate-950'
                    : 'bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-400/40 hover:bg-amber-400/30'
                }`}
              >
                {isPaused ? '▶️ Resume Membership Now' : '⏸️ 1-Tap Pause Membership'}
              </button>
            </div>

            {/* Choose Your Day 1 */}
            <button
              onClick={() => handleToast('Day 1 Launch set to Monday, Sept 1, 2026')}
              className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${btnSecCls}`}
            >
              <span>🚀 Set Official Day 1 Launch Date</span>
            </button>
          </div>
        </div>
      )}

      {/* MODULE 6: PRIVACY & DATA SOVEREIGNTY (ARTICLE 16) */}
      {activeTab === 'privacy' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 text-xs`}>
            <div className="flex items-center gap-2">
              <span className="text-xl">🛡️</span>
              <div>
                <h4 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
                  Article 16: Zero Data Selling Pledge
                </h4>
                <span className={`text-[10px] ${textSub}`}>Cryptographically Sealed Sovereignty</span>
              </div>
            </div>

            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Your biological records, meal logs, and medical events are encrypted with end-to-end keys. We never sell, monetize, or disclose your health data to advertisers, pharmaceutical corporations, or insurers.
            </p>

            <div className={`p-2.5 rounded-xl border text-[10px] font-mono ${subBoxCls}`}>
              SHA-256 Public Key: 8f9b2c41a798d103e5b6c7a8f9021d
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => handleToast('Downloaded complete health record (JSON/PDF)')}
                className={`w-full py-2.5 rounded-xl border text-xs font-bold ${btnSecCls}`}
              >
                📥 1-Click Complete Data Export (JSON/PDF)
              </button>

              <button
                onClick={() => handleToast('Nuclear Account Deletion confirmation initiated')}
                className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-bold text-rose-700 dark:text-rose-300"
              >
                🛑 Permanent Nuclear Account & Data Wipe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 7: FOUNDER CONCIERGE & EMERGENCY LINE */}
      {activeTab === 'founder' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 text-xs`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-sm">
                👑
              </div>
              <div>
                <h4 className={`text-xs font-bold ${textTitle}`}>Direct Line to Founder Ajay</h4>
                <span className={`text-[10px] ${textSub}`}>Executive & Clinical Escalation</span>
              </div>
            </div>

            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Have a suggestion, an issue with your plan, or want to share feedback directly? Your message goes straight to Ajay's desk.
            </p>

            <textarea
              rows={3}
              placeholder="Type a direct note to Founder Ajay..."
              className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                darkMode ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />

            <button
              onClick={() => handleToast('Message sent directly to Founder Ajay!')}
              className="w-full py-2.5 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00FF9D]/90 shadow-[0_0_12px_rgba(0,255,157,0.3)] active:scale-98 transition-all"
            >
              Send Direct to Founder
            </button>
          </div>

          {/* Version Specs */}
          <div className={`text-center text-[10px] font-mono ${textSub} space-y-0.5 pt-2`}>
            <div>Tovelu Health OS • Version 1.0.0 Sovereign</div>
            <div>Master Codex Sealed by Founder Ajay • August 2026</div>
          </div>
        </div>
      )}
    </div>
  );
};
