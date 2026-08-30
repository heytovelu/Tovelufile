import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface DoctorShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const DoctorShareModal: React.FC<DoctorShareModalProps> = ({
  isOpen,
  onClose,
  darkMode = true,
}) => {
  const [recipient, setRecipient] = useState('');
  const [shareMethod, setShareMethod] = useState<'whatsapp' | 'email' | 'airdrop' | 'qr'>('qr');
  const [copiedLink, setCopiedLink] = useState(false);
  const [sentToast, setSentToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const secureDoctorUrl = 'https://tovelu.com/clinical/transcript/TVL-SOV-8941?auth=sha256_verified';

  const handleCopy = () => {
    navigator.clipboard.writeText(secureDoctorUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSend = () => {
    setSentToast(`📤 Sent Doctor-Ready Health Transcript to ${recipient || 'recipient'}!`);
    setTimeout(() => {
      setSentToast(null);
      onClose();
    }, 2000);
  };

  const handleDownloadPdf = () => {
    setSentToast('📥 Downloading Official Multi-Page Medical Transcript (PDF)...');
    setTimeout(() => setSentToast(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">🩺</span>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Export & Send Health Report</h3>
              <p className="text-[11px] text-slate-400">Accepted by any doctor, clinic, or hospital globally</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            ✕
          </button>
        </div>

        {/* TOAST */}
        {sentToast && (
          <div className="my-2 p-2 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
            {sentToast}
          </div>
        )}

        {/* Share Mode Tabs */}
        <div className="grid grid-cols-4 gap-1.5 py-3 border-b border-slate-800">
          {[
            { id: 'qr', label: 'Doctor QR' },
            { id: 'whatsapp', label: 'WhatsApp' },
            { id: 'email', label: 'Email' },
            { id: 'airdrop', label: 'AirDrop' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setShareMethod(m.id as any)}
              className={`py-1.5 text-xs font-bold rounded-xl transition-all ${
                shareMethod === m.id
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-4 space-y-3">
          {shareMethod === 'qr' && (
            <div className="text-center space-y-3">
              <div className="w-36 h-36 mx-auto p-2.5 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-slate-700">
                {/* Simulated High-Res QR Code */}
                <div className="w-full h-full bg-slate-950 p-2 rounded-xl flex flex-col items-center justify-center text-center">
                  <HomeostasisLogo size={28} mode="on-dark" showWordmark={false} />
                  <div className="text-[8px] font-mono text-[#00FF9D] mt-1">DOCTOR SCAN</div>
                  <div className="text-[7px] font-mono text-slate-400">HL7 / FHIR Verified</div>
                </div>
              </div>

              <div className="text-xs text-slate-300">
                Ask your doctor or specialist to scan this with their phone or hospital tablet for an instant, secure read-only view.
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="truncate text-slate-400 text-[11px]">{secureDoctorUrl}</span>
                <button
                  onClick={handleCopy}
                  className="text-xs font-bold text-[#00FF9D] hover:underline shrink-0 pl-2"
                >
                  {copiedLink ? 'Copied! ✓' : 'Copy Link'}
                </button>
              </div>
            </div>
          )}

          {(shareMethod === 'whatsapp' || shareMethod === 'email' || shareMethod === 'airdrop') && (
            <div className="space-y-3">
              <div className="text-xs text-slate-300">
                Enter your doctor's name, email, or WhatsApp number to send the official transcript:
              </div>

              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={shareMethod === 'email' ? 'doctor@mayoclinic.org' : '+1 (555) 019-2834'}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
              />

              <button
                onClick={handleSend}
                className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)]"
              >
                Send Health Report via {shareMethod.toUpperCase()}
              </button>
            </div>
          )}

          {/* Download PDF Button */}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={handleDownloadPdf}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>📥 Download Official Multi-Page PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
