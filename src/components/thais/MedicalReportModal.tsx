import React, { useState } from 'react';
import { X, UploadCloud, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface MedicalReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (reportTitle: string, doctorNotes: string, acuteAdaptationSummary: string) => void;
}

export const MedicalReportModal: React.FC<MedicalReportModalProps> = ({
  isOpen,
  onClose,
  onUploadComplete
}) => {
  const [reportTitle, setReportTitle] = useState<string>('Recent Clinic Visit');
  const [doctorNotes, setDoctorNotes] = useState<string>('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSimulateUpload = () => {
    setUploadedFileName('Doctor_Prescription_Report_2026.pdf');
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);

      // Generate THAIS acute adaptation summary based on input
      let adaptation = "THAIS has ingested your medical event. Workouts have been auto-softened to restorative mobility, and anti-inflammatory nutrients have been prioritized.";
      const notesLower = doctorNotes.toLowerCase();
      if (notesLower.includes('antibiotic')) {
        adaptation = "Antibiotic Course Detected: THAIS has auto-added bone broth protocols, saccharomyces boulardii, and temporary dairy exclusion to preserve your gut microbiome.";
      } else if (notesLower.includes('ankle') || notesLower.includes('sprain') || notesLower.includes('injury')) {
        adaptation = "Musculoskeletal Recovery Active: Running and heavy squats locked. Seated upper body mobility and collagen-vitamin C timing activated.";
      }

      onUploadComplete(reportTitle, doctorNotes, adaptation);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-surface border border-border-default rounded-3xl p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-default pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-teal-500/20 text-teal-500">
              <Stethoscope className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wider">
                Clinical Event Ingestion
              </span>
              <h3 className="text-sm font-bold text-text-primary">Upload Doctor Report or Treatment</h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary">
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed">
          If you received medical care, a diagnosis, or a prescription: upload it here. THAIS immediately adjusts your daily plan for recovery and stores it for lifelong memory.
        </p>

        {/* Upload Zone */}
        <div 
          onClick={handleSimulateUpload}
          className="p-6 rounded-2xl border-2 border-dashed border-border-default bg-surface-raised text-center space-y-2 cursor-pointer hover:border-brand-primary transition-all"
        >
          <UploadCloud className="w-8 h-8 text-brand-primary mx-auto" />
          {uploadedFileName ? (
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> {uploadedFileName} Attached
            </div>
          ) : (
            <>
              <div className="text-xs font-bold text-text-primary">Tap to upload PDF, lab report, or prescription photo</div>
              <p className="text-[10px] text-text-muted">End-to-End Cryptographically Encrypted (Article 16)</p>
            </>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-text-muted uppercase">Visit or Report Name:</label>
            <input
              type="text"
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              className="w-full bg-surface-raised border border-border-default rounded-xl px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-text-muted uppercase">
              What problem did you have, and what did the doctor tell you?
            </label>
            <textarea
              value={doctorNotes}
              onChange={(e) => setDoctorNotes(e.target.value)}
              placeholder="e.g. Doctor said I have mild food poisoning and prescribed antibiotics for 5 days. Told me to avoid heavy fats and dairy..."
              className="w-full h-24 bg-surface-raised border border-border-default rounded-xl p-3 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          size="sm"
          variant="primary"
          fullWidth
          disabled={isProcessing || !doctorNotes.trim()}
          onClick={handleSubmit}
          className="rounded-xl py-3 font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-600"
        >
          {isProcessing ? "THAIS Analyzing & Adapting Plan..." : "Submit to THAIS • Auto-Adapt My Plan"}
        </Button>
      </div>
    </div>
  );
};
