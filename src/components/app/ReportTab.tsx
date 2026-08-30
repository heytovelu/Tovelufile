import React, { useState } from 'react';
import { PeriodPickerModal, ReportPeriod } from './PeriodPickerModal';
import { CertificateModal, MilestoneCertificate } from './CertificateModal';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface ReportTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
  onToggleTheme?: () => void;
}

type ReportTier = 'day' | 'week' | 'month' | 'year';

export const ReportTab: React.FC<ReportTabProps> = ({
  onOpenYou,
  darkMode = true,
  onToggleTheme,
}) => {
  const [activeTier, setActiveTier] = useState<ReportTier>('week');
  const [isPeriodPickerOpen, setIsPeriodPickerOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<ReportPeriod>({
    tier: 'week',
    label: 'Week 2 (Aug 24 – Aug 30, 2026)',
  });

  const [activeCertificate, setActiveCertificate] = useState<MilestoneCertificate | null>(null);
  const [reportToast, setReportToast] = useState<string | null>(null);

  // Available Milestones for Certificates
  const certificates: MilestoneCertificate[] = [
    {
      id: 'cert-1',
      title: '1 Week Perfect Consistency',
      category: 'Momentum',
      dateEarned: 'August 30, 2026',
      badgeIcon: '🔥',
      metricSummary: '7/7 Days 100% Homeostasis • 0 Crashes',
      impactNote: 'Liver glycogen depletion achieved. Metabolic flexibility unlocked.',
    },
    {
      id: 'cert-2',
      title: '5 kg Visceral Fat Reversal',
      category: 'Metabolic',
      dateEarned: 'Projected Sept 28, 2026',
      badgeIcon: '⚖️',
      metricSummary: 'Waist-to-Height Ratio < 0.50 Achieved',
      impactNote: 'Deep abdominal organ decompression and microvascular capillary renewal.',
    },
    {
      id: 'cert-3',
      title: '1 Month SIBO & Gut Remission',
      category: 'Digestive',
      dateEarned: 'Projected Sept 28, 2026',
      badgeIcon: '🌱',
      metricSummary: 'Rome IV Bloating Score: 0/10 for 30 Days',
      impactNote: 'Migrating motor complex motility permanently re-established.',
    },
    {
      id: 'cert-4',
      title: '3 Biological Years Younger',
      category: 'Epigenetic',
      dateEarned: 'Projected Dec 2026',
      badgeIcon: '🧬',
      metricSummary: 'Biological Age: 33.0 → 29.4 Years',
      impactNote: 'DNA methylation clock reversal confirmed via Levine PhenoAge algorithm.',
    },
  ];

  const handleSelectPeriod = (period: ReportPeriod) => {
    setSelectedPeriod(period);
    setActiveTier(period.tier);
    setReportToast(`📅 Viewing Specialist Report for ${period.label}`);
    setTimeout(() => setReportToast(null), 3500);
  };

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

      {/* 2. CHOOSE PARTICULAR DAY/WEEK/MONTH/YEAR (Ajay's Mandate) */}
      <div className={`p-3.5 rounded-2xl border ${cardCls} flex items-center justify-between shadow-sm`}>
        <div className="min-w-0 pr-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${textSub} block`}>
            Inspecting Clinical Interval:
          </span>
          <div className={`text-xs font-black truncate ${textTitle}`}>
            {selectedPeriod.label}
          </div>
        </div>

        {/* Period Picker Button */}
        <button
          onClick={() => setIsPeriodPickerOpen(true)}
          className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shrink-0 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
        >
          <span>📅 Change Period</span>
        </button>
      </div>

      {/* TOAST */}
      {reportToast && (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
          {reportToast}
        </div>
      )}

      {/* 3. REPORT TIER SELECTOR TABS */}
      <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-slate-200 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-center">
        {(['day', 'week', 'month', 'year'] as ReportTier[]).map((tier) => (
          <button
            key={tier}
            onClick={() => {
              setActiveTier(tier);
              setSelectedPeriod({
                tier,
                label:
                  tier === 'day'
                    ? 'Day 14 (Sunday, Aug 30, 2026)'
                    : tier === 'week'
                    ? 'Week 2 (Aug 24 – Aug 30, 2026)'
                    : tier === 'month'
                    ? 'Month 1 (August 2026)'
                    : 'Year 2026 Cumulative (90-Day Arc)',
              });
            }}
            className={`py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              activeTier === tier
                ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 4. CLINICAL REPORT CONTENT (Based on Tier) */}
      {/* ========================================================================= */}

      {/* TIER 1: DAY REPORT */}
      {activeTier === 'day' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
            <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                  24-Hour Acute Clinical Log
                </span>
                <h3 className={`text-sm font-black ${textTitle}`}>Day 14 (Today) Performance</h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                100% Optimal
              </span>
            </div>

            {/* Substrate Precision */}
            <div className="space-y-1.5 text-xs">
              <span className={`text-[11px] font-bold block ${textTitle}`}>Metabolic Substrate Precision:</span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className={`p-2 rounded-xl border ${subBoxCls}`}>
                  <span className={`text-[10px] block ${textSub}`}>Calories</span>
                  <span className={`font-bold ${textTitle}`}>1,180 / 1,850 kcal</span>
                </div>
                <div className={`p-2 rounded-xl border ${subBoxCls}`}>
                  <span className={`text-[10px] block ${textSub}`}>Protein Hit</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">98g (145g Goal)</span>
                </div>
                <div className={`p-2 rounded-xl border ${subBoxCls}`}>
                  <span className={`text-[10px] block ${textSub}`}>Hidden Oils</span>
                  <span className="font-bold text-emerald-600 dark:text-[#00FF9D]">0g Detected</span>
                </div>
              </div>
            </div>

            {/* Glucose Stability & Tasks */}
            <div className="space-y-1.5 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🟢 <strong>Estimated Postprandial Glucose Arc:</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">96% in optimal corridor</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🎯 <strong>Targeted Healing Tasks Swiped:</strong></span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">2 of 3 Done (1 Evening Left)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🥗 <strong>Food Sequencing Compliance:</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% (-38% spike drop)</span>
              </div>
            </div>

            {/* Specialist Diagnosis */}
            <div className={`p-3 rounded-xl border text-xs ${subBoxCls}`}>
              <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-[#00FF9D] block mb-1">
                Attending Specialist Assessment (Day 14)
              </span>
              Hepatic glycogen clearance confirmed. Cellular fuel partition is now primarily fatty acid oxidation. Evening parasympathetic sleep wind-down protocol active.
            </div>
          </div>
        </div>
      )}

      {/* TIER 2: WEEK REPORT */}
      {activeTier === 'week' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
            <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                  7-Day Systemic Adaptation & Habit Audit
                </span>
                <h3 className={`text-sm font-black ${textTitle}`}>Week 2 Cumulative Clinical Report</h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Grade A+
              </span>
            </div>

            {/* Key Clinical Indicators */}
            <div className="space-y-2 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>⚖️ <strong>7-Day Cumulative Caloric Balance:</strong></span>
                <span className={`font-bold ${textTitle}`}>100% compliant with -500 kcal deficit</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🥩 <strong>Protein Preservation Index:</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">98% (zero lean muscle loss)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🥗 <strong>Gut Motility & SIBO Audit:</strong></span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">Bloating: 5 days/wk → 1 day/wk</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🌙 <strong>Sleep Architecture Recovery:</strong></span>
                <span className="text-indigo-600 dark:text-indigo-300 font-bold">Onset: 42 mins → 14 mins</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🩸 <strong>Post-Meal Glucose Spikes Prevented:</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">20 of 21 meals properly sequenced</span>
              </div>
            </div>

            {/* Biomarker Trend Matrix */}
            <div className={`p-3 rounded-xl border ${subBoxCls} space-y-1 text-xs`}>
              <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-[#00FF9D] block">
                7-Day Biomarker Delta Summary
              </span>
              <p className={`${textSub} leading-relaxed`}>
                Estimated fasting glucose improved from 104 mg/dL to 91 mg/dL. Resting heart rate dropped from 72 bpm to 66 bpm. Visceral bloat index decreased by 65%.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TIER 3: MONTH REPORT */}
      {activeTier === 'month' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
            <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                  30-Day Physiological Remodeling
                </span>
                <h3 className={`text-sm font-black ${textTitle}`}>Month 1 Structural Transformation</h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Phase 1 Complete
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🧬 <strong>Visceral Adiposity Remodeling:</strong></span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">Waist-to-height: 0.50 (low organ fat)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🔥 <strong>Systemic Chronic Inflammation (SCI):</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">-50% drop (hs-CRP correlated)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>⚡ <strong>Mitochondrial Beta-Oxidation Rate:</strong></span>
                <span className="text-sky-600 dark:text-sky-300 font-bold">+34% increase in fat-burning enzymes</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🛡️ <strong>500-Disease Reversal Shift:</strong></span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">3 High Risks shifted to Safe Corridor</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TIER 4: YEAR REPORT */}
      {activeTier === 'year' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
            <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                  365-Day Epigenetic Longevity Scorecard
                </span>
                <h3 className={`text-sm font-black ${textTitle}`}>Year 2026 Biological Lifespan Audit</h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#00FF9D] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                -3.6 Yrs Younger
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🧬 <strong>Biological vs Chronological Age:</strong></span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">33.0 Calendar → 29.4 Biological (-3.6 Yrs)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>🫀 <strong>14-System Physiological Age:</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">All 14 Systems at Grade A Longevity</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-between ${subBoxCls}`}>
                <span className={textTitle}>⏳ <strong>Estimated Healthy Lifespan Extension:</strong></span>
                <span className="text-sky-600 dark:text-sky-300 font-bold">+8.4 Disease-Free Years Projected</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. DOWNLOADABLE MILESTONE ACHIEVEMENT CERTIFICATES */}
      {/* ========================================================================= */}
      <div className={`p-4 rounded-2xl border ${cardCls} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textSub}`}>
              Verified Milestones & Credentials
            </span>
            <h3 className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
              Achievement Certificates
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">1-Tap Download & Share</span>
        </div>

        <p className={`text-xs ${textSub} leading-relaxed font-medium`}>
          Celebrate your clinical milestones with cryptographic credentials. Export in Instagram Story (9:16) or Facebook Post (1:1) size with official registry accreditation (<span className="text-amber-500 font-mono font-bold">WWW.TOVELU.STORE</span>).
        </p>

        {/* Milestone Cards Carousel */}
        <div className="space-y-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                cert.dateEarned.includes('Projected')
                  ? darkMode ? 'border-slate-800 bg-slate-900/40 opacity-70' : 'border-slate-200 bg-slate-50/70'
                  : darkMode ? 'border-[#00FF9D]/40 bg-gradient-to-r from-emerald-950/20 to-slate-900 shadow-[0_0_15px_rgba(0,255,157,0.06)]' : 'border-emerald-300 bg-emerald-50/40 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
                  {cert.badgeIcon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold truncate ${textTitle}`}>{cert.title}</span>
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                      {cert.category}
                    </span>
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-[#00FF9D] font-mono mt-0.5">
                    {cert.metricSummary}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveCertificate(cert)}
                className={`py-1.5 px-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider shrink-0 transition-all ${
                  cert.dateEarned.includes('Projected')
                    ? btnSecCls
                    : 'bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 shadow-sm active:scale-95'
                }`}
              >
                {cert.dateEarned.includes('Projected') ? 'Preview' : 'Download 🏆'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODALS */}
      <PeriodPickerModal
        isOpen={isPeriodPickerOpen}
        onClose={() => setIsPeriodPickerOpen(false)}
        currentTier={activeTier}
        onSelectPeriod={handleSelectPeriod}
        darkMode={darkMode}
      />

      {activeCertificate && (
        <CertificateModal
          isOpen={!!activeCertificate}
          certificate={activeCertificate}
          userName="Ajay"
          onClose={() => setActiveCertificate(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};
