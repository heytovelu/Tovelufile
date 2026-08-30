import React, { useState } from 'react';
import { TOVELU_USER_RULE_BOOK } from '../../data/userRuleBook';

interface YouDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

type YouTab = 'rulebook' | 'biometrics' | 'schedule' | 'wearables' | 'membership' | 'privacy' | 'founder';

export const YouDrawer: React.FC<YouDrawerProps> = ({
  isOpen,
  onClose,
  darkMode = true,
}) => {
  const [activeTab, setActiveTab] = useState<YouTab>('rulebook');
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

  if (!isOpen) return null;

  const handleToast = (msg: string) => {
    setActionToast(msg);
    setTimeout(() => setActionToast(null), 3000);
  };

  const navItems: { id: YouTab; label: string; icon: string }[] = [
    { id: 'rulebook', label: 'Rule Book', icon: '📖' },
    { id: 'biometrics', label: 'Biometrics', icon: '🧬' },
    { id: 'schedule', label: 'Schedule', icon: '⏰' },
    { id: 'wearables', label: 'Wearables', icon: '⌚' },
    { id: 'membership', label: 'Membership', icon: '💳' },
    { id: 'privacy', label: 'Privacy & Art 16', icon: '🛡️' },
    { id: 'founder', label: 'Founder Line', icon: '📞' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-md h-full flex flex-col shadow-2xl transition-all ${
          darkMode ? 'bg-[#0A0D11] text-slate-100 border-l border-slate-800' : 'bg-white text-slate-900 border-l border-slate-200'
        }`}
      >
        {/* TOP HEADER */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between shrink-0 bg-[#0E1318]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
              AJ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-black tracking-tight text-white">Ajay</h2>
                <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                  Sovereign
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">ID: #TVL-SOV-8941 • Day 14 of 90</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            ✕
          </button>
        </div>

        {/* TOAST */}
        {actionToast && (
          <div className="m-3 p-2 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce shrink-0">
            {actionToast}
          </div>
        )}

        {/* HORIZONTAL MODULE NAV PILLS */}
        <div className="flex items-center gap-1.5 p-2.5 overflow-x-auto no-scrollbar border-b border-slate-800/80 bg-slate-950/60 shrink-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-1.5 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === item.id
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* MODULE CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* MODULE 1: THE OFFICIAL TOVELU RULE BOOK */}
          {activeTab === 'rulebook' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-[#00FF9D] block mb-1">
                  The Official Tovelu Operating Manual
                </span>
                5 chapters of non-negotiable dignity, daily habits, and travel protocols.
              </div>

              {TOVELU_USER_RULE_BOOK.map((chap) => {
                const isOpen = activeChapter === chap.number;
                return (
                  <div
                    key={chap.id}
                    className="rounded-2xl border border-slate-800 bg-[#0E1318] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveChapter(isOpen ? null : chap.number)}
                      className="w-full p-3.5 flex items-center justify-between text-left"
                    >
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                          Chapter {chap.number} • {chap.icon}
                        </div>
                        <div className="text-xs font-bold text-slate-100 mt-0.5">
                          {chap.title}
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                        <p className="italic text-slate-400 leading-relaxed">{chap.subtitle}</p>
                        <div className="space-y-2 pt-1">
                          {chap.points.map((pt, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                              <span className="font-bold text-slate-100 block mb-0.5">{pt.heading}</span>
                              <p className="text-[11px] text-slate-300 leading-relaxed">{pt.description}</p>
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
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Metabolic Substrate Profile
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Current Weight</span>
                    <span className="font-bold text-white text-sm">76.4 kg</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Goal Weight</span>
                    <span className="font-bold text-[#00FF9D] text-sm">72.0 kg</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Basal Metabolic Rate (BMR)</span>
                    <span className="font-bold text-emerald-400">1,680 kcal</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Daily Expenditure (TDEE)</span>
                    <span className="font-bold text-emerald-400">2,350 kcal</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Dietary Philosophy & Locks
                </span>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-200">Non-Vegetarian (Mediterranean Metabolic)</div>
                    <div className="text-[11px] text-slate-400">Targeting High Protein & Low Glycemic Index</div>
                  </div>
                  <span className="text-xs text-[#00FF9D] font-bold">Active ✓</span>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300">
                  <span className="font-bold block text-[11px]">🔒 Allergen Lockout Vault:</span>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Peanuts (100% Deterministic Safety Lock). Recipes with peanuts are permanently blocked.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 3: CHRONOBIOLOGY & DAILY SCHEDULE */}
          {activeTab === 'schedule' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Circadian Sleep & Meal Windows
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">Wake-Up Target</span>
                    <input
                      type="time"
                      value={wakeTime}
                      onChange={(e) => setWakeTime(e.target.value)}
                      className="bg-slate-800 border border-slate-700 text-white font-bold rounded-lg px-2 py-1 text-xs w-full"
                    />
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">Bedtime Target</span>
                    <input
                      type="time"
                      value={bedTime}
                      onChange={(e) => setBedTime(e.target.value)}
                      className="bg-slate-800 border border-slate-700 text-white font-bold rounded-lg px-2 py-1 text-xs w-full"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200 block">Unit System</span>
                    <span className="text-[10px] text-slate-400">Kilograms & cm vs Pounds & feet</span>
                  </div>
                  <button
                    onClick={() => setUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
                    className="py-1 px-3 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/40 text-[#00FF9D] font-bold text-xs uppercase"
                  >
                    {unitSystem.toUpperCase()}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Adjusting wake and sleep times recalibrates when chronobiological meals auto-expand and when the 1-minute bedtime survey surfaces.
                </p>
              </div>
            </div>
          )}

          {/* MODULE 4: CONNECTED WEARABLES & SENSORS */}
          {activeTab === 'wearables' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Superpower #2: Sensor Sync
                  </span>
                  <span className="text-[10px] text-[#00FF9D] font-mono">Passive Telemetry</span>
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
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{sensor.icon}</span>
                        <div>
                          <div className="font-bold text-slate-200">{sensor.name}</div>
                          <div className="text-[10px] text-slate-400">
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
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
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
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-[#00FF9D] tracking-wider">
                    Article 15: Commercial Dignity
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Zero Retention Traps</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200">Current Status: Active Member</div>
                  <div className="text-[11px] text-slate-400">Billing Cycle: Monthly ($0 hidden fees)</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Next Renewal: November 24, 2026</div>
                </div>

                {/* 1-Click Instant Membership Pause */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                  <span className="font-bold text-amber-300 block text-xs">
                    ⏸️ 1-Click Instant Membership Pause
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
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
                        : 'bg-amber-400/20 text-amber-300 border border-amber-400/40 hover:bg-amber-400/30'
                    }`}
                  >
                    {isPaused ? '▶️ Resume Membership Now' : '⏸️ 1-Tap Pause Membership'}
                  </button>
                </div>

                {/* Choose Your Day 1 */}
                <button
                  onClick={() => handleToast('Day 1 Launch set to Monday, Sept 1, 2026')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-2"
                >
                  <span>🚀 Set Official Day 1 Launch Date</span>
                </button>
              </div>
            </div>
          )}

          {/* MODULE 6: PRIVACY & DATA SOVEREIGNTY (ARTICLE 16) */}
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">
                      Article 16: Zero Data Selling Pledge
                    </h4>
                    <span className="text-[10px] text-slate-400">Cryptographically Sealed Sovereignty</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Your biological records, meal logs, and medical events are encrypted with end-to-end keys. We never sell, monetize, or disclose your health data to advertisers, pharmaceutical corporations, or insurers.
                </p>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                  SHA-256 Public Key: 8f9b2c41a798d103e5b6c7a8f9021d
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => handleToast('Downloaded complete health record (JSON/PDF)')}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200"
                  >
                    📥 1-Click Complete Data Export (JSON/PDF)
                  </button>

                  <button
                    onClick={() => handleToast('Nuclear Account Deletion confirmation initiated')}
                    className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-bold text-rose-300"
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
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#0E1318] space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-sm">
                    👑
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Direct Line to Founder Ajay</h4>
                    <span className="text-[10px] text-slate-400">Executive & Clinical Escalation</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Have a suggestion, an issue with your plan, or want to share feedback directly? Your message goes straight to Ajay's desk.
                </p>

                <textarea
                  rows={3}
                  placeholder="Type a direct note to Founder Ajay..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
                />

                <button
                  onClick={() => handleToast('Message sent directly to Founder Ajay!')}
                  className="w-full py-2.5 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00FF9D]/90 shadow-[0_0_12px_rgba(0,255,157,0.3)]"
                >
                  Send Direct to Founder
                </button>
              </div>

              {/* Version Specs */}
              <div className="text-center text-[10px] font-mono text-slate-500 space-y-0.5 pt-2">
                <div>Tovelu Health OS • Version 1.0.0 Sovereign</div>
                <div>Master Codex Sealed by Founder Ajay • August 2026</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
