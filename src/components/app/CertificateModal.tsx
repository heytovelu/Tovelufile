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

export type CertificateFormat = 'ig_story' | 'fb_post';

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate,
  userName = 'Ajay',
  darkMode = true,
}) => {
  const [exportFormat, setExportFormat] = useState<CertificateFormat>('ig_story');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    const sizeLabel = exportFormat === 'ig_story' ? 'IG Story (9:16)' : 'FB Post (1:1)';
    setDownloadToast(`🏆 High-Res Certificate generated in ${sizeLabel} & downloaded!`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleShare = (platform: string) => {
    const sizeLabel = exportFormat === 'ig_story' ? '9:16 Story' : '1:1 Post';
    setDownloadToast(`📲 Shared ${sizeLabel} credential directly to ${platform}!`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const btnSecCls = darkMode
    ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200'
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-2 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">📜</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#00FF9D]">
                Official Tovelu Laureate
              </span>
              <a
                href="https://www.tovelu.store"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[10px] font-mono font-bold text-amber-500 hover:underline"
              >
                WWW.TOVELU.STORE
              </a>
            </div>
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

        {/* SIZE FORMAT SELECTOR (IG Story vs FB Post) */}
        <div className="my-3 space-y-1.5">
          <div className="flex items-center justify-between px-0.5">
            <span className={`text-[10px] uppercase font-bold tracking-wider ${textSub}`}>
              Select Certificate Export Size:
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-[#00FF9D] font-bold">
              {exportFormat === 'ig_story' ? '1080 x 1920 (9:16)' : '1080 x 1080 (1:1)'}
            </span>
          </div>

          <div className={`grid grid-cols-2 gap-1.5 p-1 rounded-xl border ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-300'}`}>
            <button
              onClick={() => setExportFormat('ig_story')}
              className={`py-2 px-3 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                exportFormat === 'ig_story'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>📱</span>
              <span>IG Story (9:16)</span>
            </button>

            <button
              onClick={() => setExportFormat('fb_post')}
              className={`py-2 px-3 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                exportFormat === 'fb_post'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>🖼️</span>
              <span>FB Post (1:1)</span>
            </button>
          </div>
        </div>

        {/* LUXURY CERTIFICATE FRAME (Gold/Emerald Border with Adaptive Size) */}
        <div
          className={`my-3 p-5 rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-[#10161C] via-[#0A0E13] to-[#080B0F] shadow-[0_0_35px_rgba(251,191,36,0.18)] text-center relative overflow-hidden text-slate-100 transition-all ${
            exportFormat === 'ig_story' ? 'min-h-[420px] flex flex-col justify-between' : 'min-h-[340px] flex flex-col justify-between'
          }`}
        >
          {/* Subtle Background Homeostasis Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <HomeostasisLogo size={260} mode="on-dark" showWordmark={false} />
          </div>

          {/* Top Section */}
          <div className="relative z-10 space-y-2.5">
            {/* Crest Logo */}
            <div className="flex justify-center">
              <HomeostasisLogo size={36} mode="on-dark" showWordmark={true} />
            </div>

            {/* Official Website URL */}
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-[#00FF9D]">
              WWW.TOVELU.STORE
            </div>

            <div className="text-[9px] uppercase tracking-[0.25em] font-mono text-amber-400 font-bold">
              Certificate of Clinical Milestone
            </div>

            <h2 className="text-lg font-black tracking-tight text-white px-2">
              {certificate.title}
            </h2>
          </div>

          {/* Middle Recipient & Metric Badge */}
          <div className="relative z-10 my-2 space-y-2">
            <div className="py-1">
              <div className="text-[11px] text-slate-400">Awarded to Sovereign Laureate</div>
              <div className="text-base font-black text-[#00FF9D] tracking-wide">
                {userName.toUpperCase()}
              </div>
              <div className="text-[10px] font-mono text-slate-400">Registry ID: #TVL-SOV-8941</div>
            </div>

            {/* Key Metric Badge */}
            <div className="inline-block py-1.5 px-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 font-black text-sm tracking-tight shadow-inner">
              {certificate.metricSummary}
            </div>

            {/* Clinical Significance */}
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto pt-1">
              {certificate.impactNote}
            </p>
          </div>

          {/* Bottom Verified & Registry Footer */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 text-[9px] font-mono text-slate-400 space-y-1">
            <div className="flex items-center justify-between">
              <span>Date: {certificate.dateEarned}</span>
              <span className="text-[#00FF9D] font-bold">✓ Verified by THAIS</span>
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-500 pt-0.5">
              <span>Aspect: {exportFormat === 'ig_story' ? '9:16 Vertical Story' : '1:1 Square Feed'}</span>
              <span className="text-amber-400/80 font-bold">WWW.TOVELU.STORE</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS (Download & Social Share) */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2"
          >
            <span>📥 1-Tap Download {exportFormat === 'ig_story' ? 'IG Story (9:16)' : 'FB Post (1:1)'}</span>
          </button>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleShare('Instagram Story')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              📸 IG Story
            </button>
            <button
              onClick={() => handleShare('Facebook Feed')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              📘 FB Post
            </button>
            <button
              onClick={() => handleShare('WhatsApp')}
              className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all ${btnSecCls}`}
            >
              💬 WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
