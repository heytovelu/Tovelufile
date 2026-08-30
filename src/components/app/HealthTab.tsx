import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { DoctorShareModal } from './DoctorShareModal';

interface HealthTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

export const HealthTab: React.FC<HealthTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // 14 Organ Systems Data
  const organSystems = [
    { name: '1. Metabolic & Glycemic', grade: 'Grade A', status: 'Optimal / Sensitive', metrics: 'Fasting glucose 88 mg/dL • HOMA-IR 1.1' },
    { name: '2. Cardiovascular & Artery', grade: 'Grade A', status: 'Optimal Flow', metrics: 'Resting BP 118/76 mmHg • Compliance normal' },
    { name: '3. Hepatic & Liver (MASLD)', grade: 'Grade A', status: 'Clearing / Reversing', metrics: 'Steatosis resolving • ALT/AST optimal mid-range' },
    { name: '4. Gastrointestinal & Gut', grade: 'Grade A', status: 'Optimal Transit', metrics: 'Rome IV score optimal • SIBO gas cleared' },
    { name: '5. Endocrine & Hormonal Axis', grade: 'Grade A-', status: 'Balancing', metrics: 'Thyroid T3 normal • Cortisol rhythm restored' },
    { name: '6. Neurological & Sleep Architecture', grade: 'Grade A', status: 'Deep Restorative', metrics: 'Sleep latency 14m • 0 nocturnal awakenings' },
    { name: '7. Immune & Chronic Inflammation', grade: 'Grade A', status: 'Low / Protective', metrics: 'SCI Score 34/100 (Optimal Low) • 0 cytokine flare' },
    { name: '8. Renal & Fluid Electrolytes', grade: 'Grade A', status: 'Optimal Filtration', metrics: 'eGFR support optimal • 0 nocturia episodes' },
    { name: '9. Musculoskeletal & Joints', grade: 'Grade A', status: 'Strong / Resilient', metrics: 'Sarcopenia index optimal • 0 uric acid flares' },
    { name: '10. Respiratory & Oxygen Vitals', grade: 'Grade A', status: 'Optimal Oxygenation', metrics: 'Resting respiration 12/min • 0 nocturnal hypoxia' },
    { name: '11. Integumentary (Skin, Hair)', grade: 'Grade A', status: 'Vibrant / Clear', metrics: 'Keratin synthesis normal • Capillary beds clear' },
    { name: '12. Hematological & Oxygen Flow', grade: 'Grade A', status: 'Optimal Perfusion', metrics: 'O2 Saturation 99% • Iron turnover optimal' },
    { name: '13. Autonomic Vagal Tone', grade: 'Grade A', status: 'High Parasympathetic', metrics: 'Vagal nerve tone high • Resting heart-rate 58 bpm' },
    { name: '14. Cellular Senescence & Longevity', grade: 'Grade A', status: 'Decelerated Aging', metrics: '-3.6 Biological Years • 38% aging deceleration' },
  ];

  const handleQuickDownload = () => {
    setDownloadToast('📥 Generating Doctor-Ready Health Transcript (PDF)...');
    setTimeout(() => setDownloadToast(null), 3000);
  };

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

      {/* 2. TOP ACTIONS BAR (Ajay's Mandate: Download as PDF & Send to Anyone) */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleQuickDownload}
          className="p-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-500 transition-all flex items-center gap-2.5 text-left active:scale-98"
        >
          <span className="text-xl">📥</span>
          <div>
            <span className="text-xs font-bold text-emerald-300 block">Download as PDF</span>
            <span className="text-[10px] text-slate-400">Official multi-page transcript</span>
          </div>
        </button>

        <button
          onClick={() => setIsShareModalOpen(true)}
          className="p-3 rounded-2xl border border-sky-500/40 bg-sky-500/10 hover:border-sky-500 transition-all flex items-center gap-2.5 text-left active:scale-98"
        >
          <span className="text-xl">📤</span>
          <div>
            <span className="text-xs font-bold text-sky-300 block">Send to Doctor / QR</span>
            <span className="text-[10px] text-slate-400">WhatsApp, Email, or Clinic Link</span>
          </div>
        </button>
      </div>

      {/* TOAST */}
      {downloadToast && (
        <div className="p-2.5 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
          {downloadToast}
        </div>
      )}

      {/* SECTION A: PATIENT IDENTIFICATION & CLINICAL STANDARDS */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-mono text-[#00FF9D] font-bold tracking-wider">
              LIFETIME CLINICAL TRANSCRIPT • WEEKLY RE-CALIBRATION
            </span>
            <h2 className="text-base font-black text-slate-100 mt-0.5">
              Ajay • Sovereign Health Record
            </h2>
            <div className="text-[11px] font-mono text-slate-400">
              ID: #TVL-SOV-8941 • Blood Group: O+ • Height: 178 cm • Weight: 76.4 kg
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 block">Updated:</span>
            <span className="text-xs font-mono font-bold text-emerald-400">Aug 30, 2026</span>
          </div>
        </div>

        {/* Biological vs Chronological Age */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Epigenetic Biological Age
            </span>
            <div className="text-xl font-black text-white">
              29.4 Years <span className="text-xs font-bold text-[#00FF9D]">(-3.6 Years Reversal)</span>
            </div>
          </div>
          <div className="text-right text-xs">
            <span className="text-slate-400 block text-[10px]">Calendar Age</span>
            <span className="font-bold text-slate-200">33.0 Years</span>
          </div>
        </div>

        {/* Clinical Reference Standards Cited */}
        <div className="text-[10px] text-slate-500 font-mono leading-relaxed border-t border-slate-800/80 pt-2">
          Clinical Guidance Framework: Rome IV (GI) • Rotterdam 2018 (PCOS) • Framingham & ACC/AHA (Cardiovascular) • ADA Standards of Care (Metabolic) • ATP III (Metabolic Syndrome).
        </div>
      </div>

      {/* SECTION B: THE 3-DIMENSIONAL MIRROR OF HEALTH (Physical • Mental • Emotional) */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              The 3-Dimensional Mirror of Health
            </span>
            <h3 className="text-sm font-black text-slate-100">
              Whole-Person Homeostasis
            </h3>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">
            96% Optimal Balance
          </span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Physical */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">🫀 1. Physical Homeostasis</span>
              <span className="text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Metabolic substrate oxidation efficiency: 96% optimal. Visceral waist-to-height ratio 0.50 (low organ fat pressure). Microvascular capillary refill in hands and feet restored.
            </p>
          </div>

          {/* Mental */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">🧠 2. Mental & Cognitive Acuity</span>
              <span className="text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Neuro-inflammation index: low. Brain fog episodes: 0 reported over past 14 days. Slow-wave Delta deep sleep: 24% (optimal restorative). Sleep onset latency: 14 mins.
            </p>
          </div>

          {/* Emotional */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">🧘 3. Emotional & Autonomic Nervous Tone</span>
              <span className="text-emerald-400 font-bold">Grade A</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Autonomic vagal tone: high parasympathetic dominance (Rest & Digest). Diurnal cortisol awakening response restored; evening melatonin surge verified. Allostatic burnout resilience: high.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION C: THE 14-ORGAN SYSTEMS CLINICAL MATRIX */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              Clinical Matrix
            </span>
            <h3 className="text-sm font-black text-slate-100">
              14 Physiological Organ Systems
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">All Systems Graded</span>
        </div>

        <div className="space-y-2">
          {organSystems.map((sys) => (
            <div
              key={sys.name}
              className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-200">{sys.name}</span>
                  <span className="text-[10px] font-bold text-[#00FF9D]">{sys.grade}</span>
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {sys.metrics}
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                {sys.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: MASTER 500-DISEASE REVERSAL & PREVENTION REGISTRY */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-3`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
              500-Disease Index Ledger
            </span>
            <h3 className="text-sm font-black text-slate-100">
              Chronic Disease Reversal Registry
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Bayesian Audit</span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Condition 5 */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">Condition #5: Insulin Resistance / Pre-Diabetes</span>
              <span className="text-xs font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
                Reversal Achieved
              </span>
            </div>
            <div className="text-[11px] text-slate-300">
              Baseline Risk: <span className="text-amber-400 font-bold">94%</span> → Current Risk: <span className="text-[#00FF9D] font-bold">28%</span>
            </div>
            <p className="text-[10px] text-slate-400">
              Food sequencing and post-meal muscle GLUT4 activation have normalized cellular insulin sensitivity.
            </p>
          </div>

          {/* Condition 109 */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">Condition #109: SIBO / Small Bowel Dysbiosis</span>
              <span className="text-xs font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
                Clinical Remission
              </span>
            </div>
            <div className="text-[11px] text-slate-300">
              Baseline Risk: <span className="text-amber-400 font-bold">88%</span> → Current Risk: <span className="text-[#00FF9D] font-bold">16%</span>
            </div>
            <p className="text-[10px] text-slate-400">
              Bacterial fermentation in the duodenum resolved. Rome IV bloating score dropped by 75%.
            </p>
          </div>

          {/* Condition 302 */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">Condition #302: Non-Alcoholic Fatty Liver (MASLD)</span>
              <span className="text-xs font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
                Hepatic Clearance
              </span>
            </div>
            <div className="text-[11px] text-slate-300">
              Baseline Risk: <span className="text-amber-400 font-bold">81%</span> → Current Risk: <span className="text-[#00FF9D] font-bold">22%</span>
            </div>
            <p className="text-[10px] text-slate-400">
              Hepatic steatosis clearing via 72-hour sustained glycogen depletion and choline/omega-3 optimization.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300 text-center font-bold">
            ✓ 497 Other Chronic Conditions Monitored & Verified Negative / Protected
          </div>
        </div>
      </div>

      {/* SECTION E: PHARMACOLOGICAL & SUPPLEMENT LEDGER */}
      <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#0E1318] border-slate-800' : 'bg-white border-slate-200'} space-y-2 text-xs`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF9D]">
            Pharmacological Ledger
          </span>
          <span className="text-[10px] text-slate-400">0 Contraindications</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="font-bold text-slate-200">Active Prescriptions & Nutrient Synergies:</div>
          <p className="text-[11px] text-slate-400">
            Currently on 0 prescription drugs. Proactive nutritional support active for magnesium, zinc, and polyphenol antioxidant defense.
          </p>
        </div>
      </div>

      {/* DOCTOR SHARE / PDF EXPORT MODAL */}
      <DoctorShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
};
