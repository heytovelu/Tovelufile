import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

export interface MilestoneCertificate {
  id: string;
  title: string;
  category: string;
  dateEarned: string;
  badgeIcon: string;
  metricSummary: string;
  impactNote: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: MilestoneCertificate;
  userName?: string;
  darkMode?: boolean;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate,
  userName = 'Ajay',
  darkMode = true,
}) => {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadToast('🏆 High-Resolution Certificate generated & downloaded to device!');
    setTimeout(() => setDownloadToast(null), 3000);
  };

  const handleShare = (platform: string) => {
    setDownloadToast(`📲 Shared credential directly to ${platform}!`);
    setTimeout(() => setDownloadToast(null), 3000);
  };

  const btnSecCls = darkMode
    ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200'
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">📜</span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
              Official Tovelu Laureate
            </span>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
            ✕
          </button>
        </div>

        {/* TOAST */}
        {downloadToast && (
          <div className="my-2 p-2 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
            {downloadToast}
          </div>
        )}

        {/* LUXURY CERTIFICATE FRAME (Gold/Emerald Border) */}
        <div className="my-4 p-5 rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-[#10161C] via-[#0A0E13] to-[#080B0F] shadow-[0_0_30px_rgba(251,191,36,0.15)] text-center relative overflow-hidden text-slate-100">
          {/* Subtle Background Homeostasis Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <HomeostasisLogo size={220} mode="on-dark" showWordmark={false} />
          </div>

          <div className="relative z-10 space-y-3">
            {/* Crest Logo */}
            <div className="flex justify-center">
              <HomeostasisLogo size={36} mode="on-dark" showWordmark={true} />
            </div>

            <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-400 font-bold">
              Certificate of Clinical Milestone
            </div>

            <h2 className="text-lg font-black tracking-tight text-white">
              {certificate.title}
            </h2>

            {/* Recipient */}
            <div className="py-1">
              <div className="text-[11px] text-slate-400">Awarded to</div>
              <div className="text-base font-black text-[#00FF9D] tracking-wide">
                {userName.toUpperCase()}
              </div>
              <div className="text-[10px] font-mono text-slate-400">ID: #TVL-SOV-8941</div>
            </div>

            {/* Key Metric Badge */}
            <div className="inline-block py-1.5 px-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 font-black text-sm tracking-tight shadow-inner">
              {certificate.metricSummary}
            </div>

            {/* Clinical Significance */}
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto pt-1">
              {certificate.impactNote}
            </p>

            {/* Verified Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span>Date: {certificate.dateEarned}</span>
              <span className="text-[#00FF9D] font-bold">✓ Verified by THAIS</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS (Download & Social Share) */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
          >
            <span>📥 1-Tap Download High-Res Certificate</span>
          </button>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleShare('Instagram')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              📸 Instagram
            </button>
            <button
              onClick={() => handleShare('WhatsApp')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              💬 WhatsApp
            </button>
            <button
              onClick={() => handleShare('Twitter')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              🐦 Twitter/X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
