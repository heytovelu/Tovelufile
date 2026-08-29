import React from 'react';
import { HeartPulse, Dna } from 'lucide-react';
import { BiomarkerCard } from '../ui/BiomarkerCard';
import { EvidenceCard } from '../ui/EvidenceCard';
import { ExplanationCard } from '../ui/ExplanationCard';

export interface HealthShowcaseProps {
  onInspectBiomarker: (name: string) => void;
}

export const HealthShowcase: React.FC<HealthShowcaseProps> = ({
  onInspectBiomarker,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. BIOMARKER & VITAL CARDS WITH DATA PROVENANCE (ARTICLE 28) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-semibold text-text-primary">1. Biomarker Cards with Data Provenance (Article 28)</h3>
          </div>
          <span className="text-xs font-mono text-text-muted">Tap to Inspect</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BiomarkerCard
            name="Fasting Glucose"
            value="92"
            unit="mg/dL"
            status="optimal"
            statusLabel="Optimal"
            timestamp="Yesterday at 08:30 AM"
            provenance="lab_verified"
            provenanceSource="Quest Lab Panel #9218"
            range={{
              min: 60,
              max: 140,
              current: 92,
              optimalMin: 70,
              optimalMax: 99,
            }}
            onInspect={() => onInspectBiomarker('Fasting Glucose (Quest Diagnostics)')}
          />

          <BiomarkerCard
            name="Resting Heart Rate"
            value="62"
            unit="bpm"
            status="optimal"
            statusLabel="Optimal"
            timestamp="Updated 15m ago"
            provenance="wearable_sync"
            provenanceSource="Apple Watch Series 9"
            range={{
              min: 45,
              max: 110,
              current: 62,
              optimalMin: 60,
              optimalMax: 80,
            }}
            onInspect={() => onInspectBiomarker('Resting Heart Rate (Apple Watch)')}
          />

          <BiomarkerCard
            name="Blood Pressure"
            value="128/84"
            unit="mmHg"
            status="attention"
            statusLabel="Pre-Hypertension"
            timestamp="3 days ago"
            provenance="manual"
            provenanceSource="Self-Reported"
            range={{
              min: 90,
              max: 160,
              current: 128,
              optimalMin: 100,
              optimalMax: 120,
            }}
            onInspect={() => onInspectBiomarker('Blood Pressure (Self-Reported)')}
          />
        </div>
      </section>

      {/* 2. THE EVIDENCE REGISTRY CARD (ARTICLE 8, 24, 67) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Dna className="w-5 h-5 text-status-evidence" />
          <h3 className="text-base font-semibold text-text-primary">2. Scientific Evidence Card (Articles 8, 24 & 67)</h3>
        </div>

        <EvidenceCard
          claim="Sustained zone-2 aerobic activity improves insulin sensitivity and reduces cardiovascular risk markers."
          grade="A"
          evidenceStrengthLabel="Meta-Analysis & Systematic Review"
          sourceTitle="Exercise Interventions and Cardiometabolic Risk in Adults: A Systematic Review and Meta-Analysis of Randomized Trials"
          journalOrAuthority="Circulation / American Heart Association"
          publicationYear={2024}
          studyPopulation="Adults aged 35–65 without prior cardiovascular events (n=14,200 across 38 RCTs)"
          citationUrl="https://pubmed.ncbi.nlm.nih.gov/"
          reviewDate="January 2026"
          limitations="Benefits diminish if baseline physical activity is not maintained longitudinally; individual metabolic adaptation varies with sleep duration and genetic factors."
        />
      </section>

      {/* 3. THE EXPLANATION STANDARD CARD (ARTICLE 33 & 22) */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold text-text-primary">3. The Explanation Standard (Articles 33 & 22)</h3>
        
        <ExplanationCard
          what="Gradually incorporate 30 minutes of low-intensity morning walking 4 days per week."
          why="Your 7-day fasting glucose average is 92 mg/dL with a slight upward deviation on weekends. Early morning post-prandial movement accelerates peripheral glucose uptake without stressing joint structures."
          evidenceSummary="Supported by the American Diabetes Association (ADA) 2025 Standards of Care (Level A clinical trial evidence)."
          confidence="high"
          limitations="This does not constitute a clinical prescription or treatment for metabolic disease. Does not replace physician-supervised diabetes care."
          nextStep="Schedule a reminder for a 30-minute brisk walk after breakfast tomorrow."
          onNextStepAction={() => alert("Scheduled 30-minute morning walk reminder!")}
        />
      </section>
    </div>
  );
};
