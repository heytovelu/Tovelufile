import React, { useState } from 'react';
import { TOVELU_USER_RULE_BOOK } from '../../data/userRuleBook';

interface YouDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const YouDrawer: React.FC<YouDrawerProps> = ({
  isOpen,
  onClose,
  darkMode = true,
}) => {
  const [activeChapter, setActiveChapter] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'rulebook' | 'baseline' | 'sovereignty'>('rulebook');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-md h-full flex flex-col shadow-2xl transition-all ${
          darkMode ? 'bg-[#080A0E] text-slate-100 border-l border-slate-800' : 'bg-white text-slate-900 border-l border-slate-200'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs">
              AJ
            </div>
            <div>
              <h2 className="text-sm font-black tracking-tight text-slate-100">Ajay (Sovereign Profile)</h2>
              <p className="text-[11px] text-[#00FF9D] font-mono">Tovelu Health ID: #TVL-SOV-8941</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800/80 shrink-0 bg-slate-900/40">
          <button
            onClick={() => setActiveTab('rulebook')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'rulebook'
                ? 'border-[#00FF9D] text-[#00FF9D]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📖 Rule Book
          </button>
          <button
            onClick={() => setActiveTab('baseline')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'baseline'
                ? 'border-[#00FF9D] text-[#00FF9D]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🧬 Biometrics
          </button>
          <button
            onClick={() => setActiveTab('sovereignty')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'sovereignty'
                ? 'border-[#00FF9D] text-[#00FF9D]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🛡️ Privacy & Art 15
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeTab === 'rulebook' ? (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-[#00FF9D] block mb-1">
                  The Official Tovelu Operating Manual
                </span>
                5 chapters of non-negotiable dignity, daily habits, and travel protocols.
              </div>

              {/* Chapters Accordion */}
              {TOVELU_USER_RULE_BOOK.map((chap) => {
                const isOpen = activeChapter === chap.number;
                return (
                  <div
                    key={chap.id}
                    className="rounded-xl border border-slate-800 bg-[#0E1318] overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveChapter(isOpen ? null : chap.number)}
                      className="w-full p-3 flex items-center justify-between text-left"
                    >
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                          Chapter {chap.number} • {chap.icon}
                        </div>
                        <div className="text-xs font-bold text-slate-200 mt-0.5">
                          {chap.title}
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                        <p className="italic text-slate-400">{chap.subtitle}</p>
                        <div className="space-y-1.5 pt-1">
                          {chap.points.map((pt, idx) => (
                            <div key={idx} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/60">
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
          ) : activeTab === 'baseline' ? (
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0E1318] space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Biological Baseline</span>
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Height</span>
                    <span className="font-bold text-slate-100">178 cm</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Weight</span>
                    <span className="font-bold text-slate-100">76.4 kg</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">BMR</span>
                    <span className="font-bold text-emerald-400">1,680 kcal</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">TDEE</span>
                    <span className="font-bold text-emerald-400">2,350 kcal</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#0E1318] space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dietary Philosophy</span>
                <div className="font-bold text-slate-200">Non-Vegetarian (High Protein / Mediterranean Metabolic)</div>
                <div className="text-[11px] text-slate-400">Allergen Locks: Peanuts (100% Locked Out)</div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0E1318] space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">🛡️</span>
                  <span className="font-bold text-slate-100">Article 16: Zero Data Selling</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Your biological records are end-to-end encrypted with zero third-party advertising or insurance sharing.
                </p>
                <button className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 mt-2">
                  📥 Download Complete Health Data (JSON/PDF)
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#0E1318] space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">⏸️</span>
                  <span className="font-bold text-slate-100">Article 15: Commercial Dignity</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Pause your membership anytime in 1 tap with zero retention tricks.
                </p>
                <button className="w-full py-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-bold mt-2">
                  1-Tap Instant Membership Pause
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
