import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

interface DoctorShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'pdf' | 'qr';
  userName?: string;
  reportSummary: {
    reportTitle: string;
    biologicalAge: number;
    calendarAge: number;
    homaIrStatus: string;
    siboStatus: string;
    complianceScore: string;
  };
  darkMode?: boolean;
}

export const DoctorShareModal: React.FC<DoctorShareModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'pdf',
  userName = 'Ajay',
  reportSummary,
  darkMode = true,
}) => {
  const [shareMethod, setShareMethod] = useState<'pdf' | 'qr' | 'whatsapp' | 'email' | 'airdrop'>(initialMode);
  const [sentToast, setSentToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateShare = (methodName: string) => {
    setSentToast(`✅ Clinical Report prepared and sent via ${methodName}!`);
    setTimeout(() => {
      setSentToast(null);
      onClose();
    }, 2000);
  };

  const textTitle = darkMode ? 'text-white' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const subBoxCls = darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">🩺</span>
            <div>
              <h3 className={`text-sm font-bold tracking-tight ${textTitle}`}>
                Export & Send Health Report • {userName}
              </h3>
              <p className={`text-[11px] ${textSub}`}>{reportSummary.reportTitle}</p>
            </div>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
            ✕
          </button>
        </div>

        {/* TOAST */}
        {sentToast && (
          <div className="my-2 p-2 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
            {sentToast}
          </div>
        )}

        {/* Share Mode Tabs */}
        <div className={`grid grid-cols-4 gap-1.5 py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
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
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300'
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
              <div className="w-36 h-36 mx-auto p-2.5 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-slate-300">
                {/* Simulated High-Res QR Code */}
                <div className="w-full h-full bg-slate-950 p-2 rounded-xl flex flex-col items-center justify-center text-center">
                  <HomeostasisLogo size={28} mode="on-dark" showWordmark={false} />
                  <div className="text-[8px] font-mono text-[#00FF9D] mt-1">DOCTOR SCAN</div>
                  <div className="text-[7px] font-mono text-slate-400">HL7 / FHIR Verified</div>
                </div>
              </div>

              <div className={`text-xs ${textSub}`}>
                Ask your doctor or specialist to scan this with their phone or hospital tablet for an instant, secure read-only view.
              </div>

              <div className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${subBoxCls}`}>
                <span>Link Expires: 24 Hours</span>
                <span className="text-emerald-600 dark:text-[#00FF9D] font-bold">Encrypted E2E</span>
              </div>
            </div>
          )}

          {shareMethod === 'whatsapp' && (
            <div className="space-y-3 text-xs">
              <p className={textSub}>
                Send an encrypted PDF download link directly to your doctor, nutritionist, or family member via WhatsApp:
              </p>
              <input
                type="tel"
                placeholder="Doctor WhatsApp number (e.g. +1 555 0192)"
                className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                onClick={() => handleSimulateShare('WhatsApp')}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Send via WhatsApp
              </button>
            </div>
          )}

          {shareMethod === 'email' && (
            <div className="space-y-3 text-xs">
              <p className={textSub}>
                Email official clinical PDF packet with raw data attachments (HL7 / FHIR format):
              </p>
              <input
                type="email"
                placeholder="doctor@clinic.org"
                className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                onClick={() => handleSimulateShare('Doctor Email')}
                className="w-full py-2.5 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Send Official Clinical PDF
              </button>
            </div>
          )}

          {shareMethod === 'airdrop' && (
            <div className="text-center space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-700 dark:text-sky-300">
                <span className="text-2xl block mb-1">📡</span>
                <span className="font-bold">AirDrop or Bluetooth File Transfer</span>
                <p className={`text-[11px] mt-1 ${textSub}`}>
                  Transfer instantly to an adjacent iPad, iPhone, or Mac workstation.
                </p>
              </div>
              <button
                onClick={() => handleSimulateShare('AirDrop')}
                className="w-full py-2.5 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Broadcast to Nearby Device
              </button>
            </div>
          )}
        </div>

        {/* Universal 1-Tap PDF Direct Download */}
        <div className={`pt-3 border-t flex gap-2 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <button
            onClick={() => handleSimulateShare('Direct PDF Download')}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>📥 Download Clinical PDF Directly to Device</span>
          </button>
        </div>
      </div>
    </div>
  );
};
