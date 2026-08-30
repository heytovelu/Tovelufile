import React, { useState } from 'react';
import { DoctorShareModal } from './DoctorShareModal';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface HealthTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
  onToggleTheme?: () => void;
}

export const HealthTab: React.FC<HealthTabProps> = ({
  onOpenYou,
  darkMode = true,
  onToggleTheme,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareMode, setShareMode] = useState<'pdf' | 'qr'>('pdf');
  const [activeOrganCategory, setActiveOrganCategory] = useState<string | null>(null);

  const handleOpenShare = (mode: 'pdf' | 'qr') => {
    setShareMode(mode);
    setIsShareModalOpen(true);
  };

  // 14 Organ Systems Matrix
  const organSystems = [
    { id: 'endo', name: 'Endocrine & Insulin Sensitivity', grade: 'A', status: 'HOMA-IR: 1.1 (Optimal)', icon: '🩸' },
    { id: 'cardio', name: 'Cardiovascular & Endothelial', grade: 'A', status: 'ApoB/A1: 0.58 • BP: 116/74', icon: '🫀' },
    { id: 'gi', name: 'Gastrointestinal & Microbiome', grade: 'A', status: 'Rome IV: 1/10 • SIBO Remission', icon: '🌱' },
    { id: 'hepatic', name: 'Hepatic & Bile Acid Flow', grade: 'A', status: 'ALT: 19 U/L • Fatty Liver: Reversing', icon: '🧪' },
    { id: 'neuro', name: 'Neurological & Circadian Tone', grade: 'A', status: 'Deep Sleep: 24% • Cortisol: Balanced', icon: '🧠' },
    { id: 'renal', name: 'Renal & Electrolyte Osmolarity', grade: 'A', status: 'eGFR: >90 • Creatinine: 0.9', icon: '💧' },
    { id: 'immune', name: 'Immunological & Autoimmune', grade: 'A', status: 'hs-CRP: 0.4 mg/L (Low SCI)', icon: '🛡️' },
    { id: 'pulmo', name: 'Pulmonary & Oxygen Kinetics', grade: 'A', status: 'SpO2: 99% • VO2 Max Corridor: Optimal', icon: '🫁' },
    { id: 'musculo', name: 'Musculoskeletal & Bone Density', grade: 'A', status: 'Lean Mass Retained: 98%', icon: '🦴' },
    { id: 'derm', name: 'Dermatological & Microvascular', grade: 'A', status: 'Capillary Refill: <2 sec', icon: '✨' },
    { id: 'mitochondria', name: 'Mitochondrial Bioenergetics', grade: 'A', status: 'Beta-Oxidation Rate: High', icon: '⚡' },
    { id: 'lymphatic', name: 'Lymphatic & Glymphatic Clearance', grade: 'A', status: 'Nightly Delta Flush: Normal', icon: '🌊' },
    { id: 'ocular', name: 'Ocular & Retinal Microcirculation', grade: 'A', status: 'Circadian Light Responsive', icon: '👁️' },
    { id: 'gonadal', name: 'Reproductive & Hormonal Axis', grade: 'A', status: 'Free Testosterone/Estrogen: Stable', icon: '🧬' },
  ];

  // 500-Disease Prevention Registry
  const monitoredDiseases = [
    { name: 'Pre-Diabetes / Type 2 Diabetes', initialRisk: 94, currentRisk: 28, status: 'Reversed to Normal Corridors', icon: '📉' },
    { name: 'SIBO / Dysbiosis (Small Intestine Bloating)', initialRisk: 88, currentRisk: 16, status: 'Full Motility Restored', icon: '🌱' },
    { name: 'Non-Alcoholic Fatty Liver (MASLD)', initialRisk: 81, currentRisk: 22, status: 'Hepatic Fat Clearance Active', icon: '🧪' },
    { name: 'Atherosclerosis / Vascular Plaque', initialRisk: 62, currentRisk: 18, status: 'Vascular Endothelium Calm', icon: '🫀' },
    { name: 'Metabolic Syndrome (ATP III Criteria)', initialRisk: 89, currentRisk: 12, status: 'Criteria Cleared (5/5 Cleared)', icon: '✅' },
    { name: 'Systemic Chronic Inflammation (SCI)', initialRisk: 79, currentRisk: 24, status: 'Inflammatory Cascades Quenched', icon: '🛡️' },
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

        {/* Right side controls: Theme Toggle + Profile Avatar */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button (Sun ☀️ / Moon 🌙) */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-90 shadow-sm ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              <span className="text-sm">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          )}

          {/* Profile Avatar -> Opens YOU */}
          <button
            onClick={onOpenYou}
            className={`flex items-center gap-2 p-1.5 rounded-full border transition-all active:scale-95 ${
              darkMode
                ? 'bg-slate-900 border-slate-700 hover:border-[#00FF9D] text-slate-200'
                : 'bg-slate-100 border-slate-200 hover:border-emerald-500 text-slate-800'
            }`}
            title="Open YOU"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs">
              AJ
            </div>
            <span className="text-[11px] font-bold pr-1.5 uppercase tracking-wider text-slate-400">
              YOU
            </span>
          </button>
        </div>
      </div>

      {/* 2. DOCTOR ACTION BAR: DOWNLOAD AS PDF & SEND TO ANYONE (Ajay's Mandate) */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3 shadow-sm`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
              Clinical Interoperability Hub
            </span>
            <h2 className={`text-sm font-black tracking-tight ${textTitle}`}>
              Lifetime Health Report
            </h2>
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            Updates Weekly
          </span>
        </div>

        <p className={`text-xs ${textSub} leading-relaxed font-medium`}>
          A single living document tracking your entire lifetime biological health, physical-mental-emotional homeostasis, 14 organ systems, and 500-disease reversal registry.
        </p>

        {/* 2 Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Download as PDF */}
          <button
            onClick={() => handleOpenShare('pdf')}
            className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
          >
            <span>📥</span>
            <span>Download as PDF</span>
          </button>

          {/* Send to Doctor / QR */}
          <button
            onClick={() => handleOpenShare('qr')}
            className={`py-2.5 px-3 rounded-xl border font-bold text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-1.5 ${btnSecCls}`}
          >
            <span>📤</span>
            <span>Send to Anyone</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION A: CLINICAL PATIENT IDENTIFIER & EPIGENETIC AGE */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center font-black text-sm text-emerald-700 dark:text-[#00FF9D]">
              AJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-black ${textTitle}`}>Ajay</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  #TVL-SOV-8941
                </span>
              </div>
              <span className={`text-[10px] ${textSub}`}>
                Standardized Clinical Record • Blood Group: O+ • Male
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className={`text-[9px] uppercase font-mono ${textSub} block`}>Registry Status</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Verified Grade A</span>
          </div>
        </div>

        {/* Biological vs Chronological Age */}
        <div className="grid grid-cols-2 gap-2 text-center pt-1">
          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
            <span className="text-[10px] font-bold block">Biological Epigenetic Age</span>
            <span className="text-lg font-black text-emerald-600 dark:text-[#00FF9D]">29.4 Years</span>
            <span className="text-[9px] block text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">-3.6 Yrs Reversal</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${subBoxCls}`}>
            <span className={`text-[10px] block ${textSub}`}>Calendar Age</span>
            <span className={`font-bold text-lg ${textTitle}`}>33.0 Years</span>
            <span className={`text-[9px] block ${textSub} mt-0.5`}>Chronological Reference</span>
          </div>
        </div>

        {/* Clinical Reference Standards */}
        <div className={`text-[10px] ${textSub} font-mono leading-relaxed border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-200'} pt-2`}>
          Clinical Guidance Framework: Rome IV (GI) • Rotterdam 2018 (PCOS) • Framingham & ACC/AHA (Cardiovascular) • ADA Standards of Care (Metabolic) • ATP III (Metabolic Syndrome).
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION B: THE 3-DIMENSIONAL MIRROR OF HEALTH */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              The 3-Dimensional Mirror of Health
            </span>
            <h3 className={`text-sm font-black ${textTitle}`}>
              Whole-Person Homeostasis
            </h3>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
            96% Optimal Balance
          </span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Physical */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold ${textTitle}`}>🫀 1. Physical Homeostasis</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Metabolic substrate oxidation efficiency: 96% optimal. Visceral waist-to-height ratio 0.50 (low organ fat pressure). Microvascular capillary refill in hands and feet restored.
            </p>
          </div>

          {/* Mental */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold ${textTitle}`}>🧠 2. Mental & Cognitive Acuity</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Neuro-inflammation index: low. Brain fog episodes: 0 reported over past 14 days. Slow-wave Delta deep sleep: 24% (optimal restorative). Sleep onset latency: 14 mins.
            </p>
          </div>

          {/* Emotional */}
          <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`font-bold ${textTitle}`}>🧘 3. Emotional & Autonomic Nervous Tone</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className={`text-[11px] ${textSub} leading-relaxed`}>
              Autonomic vagal tone: high parasympathetic dominance (Rest & Digest). Diurnal cortisol awakening response restored; evening melatonin surge verified. Allostatic burnout resilience: high.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION C: THE 14-ORGAN SYSTEMS CLINICAL MATRIX */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              Clinical Matrix
            </span>
            <h3 className={`text-sm font-black ${textTitle}`}>
              14 Physiological Organ Systems
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">14/14 Grade A</span>
        </div>

        <div className="space-y-1.5">
          {organSystems.map((organ) => {
            const isExpanded = activeOrganCategory === organ.id;
            return (
              <div
                key={organ.id}
                onClick={() => setActiveOrganCategory(isExpanded ? null : organ.id)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${subBoxCls} hover:border-emerald-500/50`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-base">{organ.icon}</span>
                    <span className={`text-xs font-bold truncate ${textTitle}`}>{organ.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      Grade {organ.grade}
                    </span>
                    <span className={`text-xs font-mono ${textSub}`}>{isExpanded ? '▲' : '▼'}</span>
                  </div>
                </div>

                {isExpanded && (
                  <div className={`mt-2 pt-2 border-t text-[11px] ${darkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                    <span className="font-bold text-emerald-600 dark:text-[#00FF9D]">Biomarker Readings: </span>
                    {organ.status}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION D: 500-DISEASE PREVENTION & REVERSAL REGISTRY */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-[#00FF9D]">
              Clinical Surveillance
            </span>
            <h3 className={`text-sm font-black ${textTitle}`}>
              500-Disease Prevention Registry
            </h3>
          </div>
          <span className={`text-[10px] ${textSub} font-mono`}>500 Monitored</span>
        </div>

        <div className="space-y-2 text-xs">
          {monitoredDiseases.map((d) => (
            <div
              key={d.name}
              className={`p-3 rounded-xl border ${subBoxCls} space-y-1.5`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-bold ${textTitle}`}>{d.name}</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
                  {d.status}
                </span>
              </div>

              {/* Visual Risk Drop Track */}
              <div className="space-y-1 pt-0.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={textSub}>Initial Risk: {d.initialRisk}%</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Current: {d.currentRisk}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${100 - d.currentRisk}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 494 Remaining Diseases Banner */}
        <div className={`p-2.5 rounded-xl border text-center text-xs ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
          <span className="font-bold text-emerald-600 dark:text-[#00FF9D]">🛡️ 494 Other Chronic Diseases: </span>
          Zero Risk Corridors Detected. Protected via daily anti-inflammatory habit matrix.
        </div>
      </div>

      {/* DOCTOR SHARE MODAL */}
      <DoctorShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        initialMode={shareMode}
        userName="Ajay"
        reportSummary={{
          reportTitle: 'Tovelu Lifetime Health Report • Comprehensive Homeostasis',
          biologicalAge: 29.4,
          calendarAge: 33.0,
          homaIrStatus: 'Optimal (1.1)',
          siboStatus: 'Remission (Rome IV: 1/10)',
          complianceScore: 'Grade A+ (96%)',
        }}
        darkMode={darkMode}
      />
    </div>
  );
};
