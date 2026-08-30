import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { PeriodPickerModal } from './PeriodPickerModal';
import { CertificateModal, MilestoneCertificate } from './CertificateModal';

interface ReportTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

type ReportTier = 'day' | 'week' | 'month' | 'year';

export const ReportTab: React.FC<ReportTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  const [activeTier, setActiveTier] = useState<ReportTier>('week');
  const [selectedPeriodLabel, setSelectedPeriodLabel] = useState('Week 2: Aug 24 - Aug 30, 2026 (Current Cycle)');
  const [isPeriodPickerOpen, setIsPeriodPickerOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<MilestoneCertificate | null>(null);

  // List of Milestone Certificates (Ajay's Mandate)
  const certificates: MilestoneCertificate[] = [
    {
      id: 'c1',
      title: 'Week 1 Consistency Champion',
      category: 'Habit Mastery',
      dateEarned: 'Aug 23, 2026',
      metric: '100% 7-Day Adherence Streak',
      clinicalSignificance: 'Achieved complete 7-day adherence to food sequencing and morning circadian hydration with zero missed logs.',
      sealColor: 'emerald',
    },
    {
      id: 'c2',
      title: 'Metabolic Reset Milestone',
      category: 'Fat Oxidation',
      dateEarned: 'Aug 28, 2026',
      metric: '-5.2 lbs Pure Fat Oxidized',
      clinicalSignificance: 'Verified visceral adipose tissue reduction without lean muscle loss via nitrogen-sparing protein protocols.',
      sealColor: 'gold',
    },
    {
      id: 'c3',
      title: 'Zero-Slump Master',
      category: 'Glycemic Stability',
      dateEarned: 'Aug 29, 2026',
      metric: '14 Consecutive Days 0 Slumps',
      clinicalSignificance: 'Maintained postprandial glucose stability within 70-130 mg/dL corridor across 42 consecutive meals.',
      sealColor: 'emerald',
    },
    {
      id: 'c4',
      title: 'Biological Clock Reversed',
      category: 'Epigenetic Rejuvenation',
      dateEarned: 'Aug 30, 2026',
      metric: '-2.4 Biological Years Younger',
      clinicalSignificance: 'Bayesian cellular age calculation confirmed cellular deceleration from 33.0 to 30.6 biological years.',
      sealColor: 'purple',
    },
    {
      id: 'c5',
      title: 'Gut Harmony Milestone',
      category: 'Microbiome Restoration',
      dateEarned: 'Aug 26, 2026',
      metric: '75% Reduction in Bloating',
      clinicalSignificance: 'Rome IV gastrointestinal audit verified significant reduction in small bowel bacterial gas and normalization of Bristol transit.',
      sealColor: 'sky',
    },
    {
      id: 'c6',
      title: 'Master of Homeostasis',
      category: '30-Day Laureate',
      dateEarned: 'In Progress (Day 14/30)',
      metric: '30 Consecutive Days Target',
      clinicalSignificance: 'Awarded upon reaching 30 consecutive days living in physiological homeostasis.',
      sealColor: 'gold',
    },
  ];

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-8 animate-fadeIn">
      {/* 1. TOP HEADER */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <HomeostasisLogo size={28} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
        </div>

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

      {/* 2. CHOOSE PARTICULAR DAY, WEEK, MONTH, OR YEAR BUTTON (Ajay's Mandate) */}
      <button
        onClick={() => setIsPeriodPickerOpen(true)}
        className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all active:scale-98 shadow-sm ${
          darkMode
            ? 'bg-[#0E1318] border-slate-800 hover:border-[#00FF9D]/60'
            : 'bg-white border-slate-200 hover:border-emerald-500'
        }`}
      >
        <div className="flex items-center gap-2.5 text-left min-w-0">
          <span className="text-xl shrink-0">📅</span>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D] block">
              Report Period Selected
            </span>
            <div className="text-xs font-bold text-slate-100 truncate">
              {selectedPeriodLabel}
            </div>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-400 font-mono shrink-0 pl-2">
          Change Period →
        </span>
      </button>

      {/* 3. THE 4 DISTINCT REPORT TIERS SWITCHER */}
      <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-slate-800">
        {(['day', 'week', 'month', 'year'] as const).map((tier) => (
          <button
            key={tier}
            onClick={() => setActiveTier(tier)}
            className={`py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              activeTier === tier
                ? 'bg-[#00FF9D] text-slate-950 shadow-[0_0_12px_rgba(0,255,157,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* 4. REPORT CONTENT (DIFFERENT FOR EACH TIER) */}

      {/* TIER 1: DAY REPORT */}
      {activeTier === 'day' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                  24-Hour Acute Clinical Log
                </span>
                <h3 className="text-sm font-black text-slate-100">Day 14 (Today) Performance</h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">
                100% Optimal
              </span>
            </div>

            {/* Substrate Precision */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[11px] font-bold text-slate-300 block">Metabolic Substrate Precision:</span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Calories</span>
                  <span className="font-bold text-slate-100">1,180 / 1,850 kcal</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Protein Hit</span>
                  <span className="font-bold text-emerald-400">98g (145g Goal)</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Hidden Oils</span>
                  <span className="font-bold text-[#00FF9D]">0g Detected</span>
                </div>
              </div>
            </div>

            {/* Glucose Stability & Tasks */}
            <div className="space-y-1.5 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <span>🟢 <strong>Estimated Postprandial Glucose Arc:</strong></span>
                <span className="text-emerald-400 font-bold">96% in optimal corridor</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <span>🎯 <strong>Targeted Healing Tasks Swiped:</strong></span>
                <span className="text-[#00FF9D] font-bold">2 of 3 Done (1 Evening Left)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <span>🥗 <strong>Food Sequencing Compliance:</strong></span>
                <span className="text-emerald-400 font-bold">100% (-38% spike drop)</span>
              </div>
            </div>

            {/* Specialist Diagnosis */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="text-[10px] font-bold uppercase text-[#00FF9D] block mb-1">
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
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                  7-Day Systemic Adaptation & Habit Audit
                </span>
                <h3 className="text-sm font-black text-slate-100">Week 2 Cumulative Clinical Report</h3>
              </div>
              <span className="text-xs font-mono font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
                Grade A+
              </span>
            </div>

            {/* Key Clinical Indicators */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>⚖️ <strong>7-Day Cumulative Caloric Balance:</strong></span>
                <span className="text-slate-100 font-bold">100% compliant with -500 kcal deficit</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🥩 <strong>Protein Preservation Index:</strong></span>
                <span className="text-emerald-400 font-bold">98% (zero lean muscle loss)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🥗 <strong>Gut Motility & SIBO Audit:</strong></span>
                <span className="text-[#00FF9D] font-bold">Bloating: 5 days/wk → 1 day/wk</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🌙 <strong>Sleep Architecture Recovery:</strong></span>
                <span className="text-indigo-300 font-bold">Onset: 42 mins → 14 mins</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🩸 <strong>Post-Meal Glucose Spikes Prevented:</strong></span>
                <span className="text-emerald-400 font-bold">20 of 21 meals properly sequenced</span>
              </div>
            </div>

            {/* Weekly Prescription */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="font-bold block mb-0.5">Specialist Prescription for Week 3:</span>
              Maintain current 145g daily protein baseline. Add 10g prebiotic acacia fiber to breakfast to foster Akkermansia muciniphila gut diversity.
            </div>
          </div>
        </div>
      )}

      {/* TIER 3: MONTH REPORT */}
      {activeTier === 'month' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                  30-Day Hormonal & Inflammatory Phenotype
                </span>
                <h3 className="text-sm font-black text-slate-100">Month 1 Transformation Audit</h3>
              </div>
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded border border-purple-400/30">
                Remodeling Active
              </span>
            </div>

            {/* Anthropometric & Inflammation */}
            <div className="grid grid-cols-2 gap-2 text-xs text-center">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Systemic Inflammation (SCI)</span>
                <span className="font-black text-emerald-400 text-sm">68/100 → 34/100</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">-50% Cellular Swelling</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Waist-to-Height Ratio</span>
                <span className="font-black text-emerald-400 text-sm">0.54 → 0.50</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Visceral Depletion Confirmed</span>
              </div>
            </div>

            {/* 500-Disease Reversal Radar */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[11px] font-bold text-slate-300 block">500-Disease Index Reversal Shift:</span>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>Insulin Resistance / Pre-Diabetes:</span>
                <span className="font-bold text-[#00FF9D]">94% → 42% (Reversing Fast)</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>SIBO / Small Intestinal Dysbiosis:</span>
                <span className="font-bold text-[#00FF9D]">88% → 19% (Clinical Remission)</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>Fatty Liver Risk (MASLD Grade 1):</span>
                <span className="font-bold text-[#00FF9D]">81% → 28% (Hepatic Clearance)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TIER 4: YEAR REPORT */}
      {activeTier === 'year' && (
        <div className="space-y-3">
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF9D]">
                  365-Day Epigenetic Longevity Transcript
                </span>
                <h3 className="text-sm font-black text-slate-100">Annual Cellular Rejuvenation Arc</h3>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                -3.6 Years Younger
              </span>
            </div>

            {/* Age Transcript */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-xs text-slate-400 block">Epigenetic Biological Age Reversal:</span>
              <div className="text-2xl font-black text-white">
                33.0 <span className="text-slate-500 font-normal">Chrono</span> → <span className="text-[#00FF9D]">29.4</span> <span className="text-xs text-[#00FF9D] font-bold">Biological</span>
              </div>
              <span className="text-xs font-bold text-emerald-400">
                Cellular Aging Velocity Decelerated by 38%
              </span>
            </div>

            {/* 14 Systems Scorecard Grade A */}
            <div className="space-y-1 text-xs">
              <span className="text-[11px] font-bold text-slate-300 block">14-Organ Systems Homeostasis Audit:</span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Metabolic System:</span>
                  <span className="font-bold text-emerald-400">Grade A</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Cardiovascular System:</span>
                  <span className="font-bold text-emerald-400">Grade A</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Hepatic & Liver:</span>
                  <span className="font-bold text-emerald-400">Grade A</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Gastrointestinal:</span>
                  <span className="font-bold text-emerald-400">Grade A</span>
                </div>
              </div>
            </div>

            {/* Actuarial Projection */}
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200">
              🧬 <strong>Actuarial Healthspan Extension:</strong> +8.4 healthy disease-free years added to your life trajectory.
            </div>
          </div>
        </div>
      )}

      {/* 5. OFFICIAL MILESTONE ACHIEVEMENT CERTIFICATES (Viral Growth Engine ⭐) */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Milestone Laureates
            </span>
            <h3 className="text-sm font-black text-slate-100">
              Official Achievement Certificates
            </h3>
          </div>
          <span className="text-[10px] text-slate-400">Tap to download & share</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Official verified credentials celebrating your biological milestones. Tap any certificate to download in high resolution or share to Instagram and WhatsApp:
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActiveCertificate(cert)}
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all active:scale-95 group"
            >
              <div className="text-lg mb-1">📜</div>
              <div className="text-xs font-bold text-slate-100 group-hover:text-amber-300 truncate">
                {cert.title}
              </div>
              <div className="text-[10px] font-mono text-[#00FF9D] mt-0.5 truncate">
                {cert.metric}
              </div>
              <div className="text-[9px] text-slate-500 mt-1">
                {cert.dateEarned}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CERTIFICATE VIEWER MODAL */}
      <CertificateModal
        isOpen={!!activeCertificate}
        onClose={() => setActiveCertificate(null)}
        certificate={activeCertificate}
        darkMode={darkMode}
      />

      {/* PERIOD PICKER MODAL */}
      <PeriodPickerModal
        isOpen={isPeriodPickerOpen}
        onClose={() => setIsPeriodPickerOpen(false)}
        onSelectPeriod={(type, label) => {
          setActiveTier(type);
          setSelectedPeriodLabel(label);
        }}
        darkMode={darkMode}
      />
    </div>
  );
};
