import React, { useState } from 'react';
import { Bot, Clock, Lock, Bell, WifiOff } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { AIGroundedCard } from '../ui/AIGroundedCard';
import { HealthTimeline, TimelineEvent } from '../ui/HealthTimeline';
import { PrivacyConsentCard } from '../ui/PrivacyConsentCard';
import { Toast } from '../ui/Toast';
import { OfflineBanner } from '../ui/OfflineBanner';

export const ExtensionsShowcase: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const sampleEvents: TimelineEvent[] = [
    {
      id: 'ev-1',
      time: '07:45 AM',
      type: 'measurement',
      title: 'Fasting Blood Glucose Logged',
      description: 'Morning baseline reading within target range.',
      metricValue: '92 mg/dL',
      metricStatus: 'optimal',
      provenance: 'Quest Diagnostics Sync',
    },
    {
      id: 'ev-2',
      time: '08:15 AM',
      type: 'nutrition',
      title: 'Breakfast: Steel-Cut Oats with Blueberries',
      description: 'Estimated carbohydrates: 42g • Fiber: 8g.',
    },
    {
      id: 'ev-3',
      time: '09:00 AM',
      type: 'activity',
      title: 'Zone-2 Morning Brisk Walk',
      description: '35 minutes • Average Heart Rate: 108 bpm.',
      metricValue: '108 bpm',
      metricStatus: 'optimal',
      provenance: 'Apple Watch Series 9',
    },
    {
      id: 'ev-4',
      time: '01:30 PM',
      type: 'medication',
      title: 'Supplements Ingested',
      description: 'Omega-3 (1000mg) & Vitamin D3 (2000 IU).',
    },
    {
      id: 'ev-5',
      time: '03:15 PM',
      type: 'symptom',
      title: 'Mild Post-Lunch Lethargy',
      description: 'Reported after prolonged sitting; resolved after 5-minute hydration break.',
      metricStatus: 'attention',
    },
  ];

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setIsOffline(false);
      setShowToast(true);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Offline Status Simulation Banner */}
      <OfflineBanner
        isOffline={isOffline}
        isSyncing={isSyncing}
        onSync={handleSync}
      />

      {/* Toast Notification */}
      <Toast
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        title="Offline Changes Synchronized"
        message="3 pending health observations encrypted and safely committed to your private health profile (Article 15)."
        variant="success"
      />

      {/* Milestone Header */}
      <Card>
        <CardHeader>
          <CardTitle>Step 08: Critical Health & Privacy Extensions</CardTitle>
          <CardDescription>
            These 4 components complete the critical missing requirements identified during the constitutional audit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="sm"
              variant={isOffline ? "destructive" : "secondary"}
              leftIcon={<WifiOff className="w-4 h-4" />}
              onClick={() => setIsOffline(!isOffline)}
            >
              {isOffline ? "Restore Online Connection" : "Simulate Offline Mode (Article 44)"}
            </Button>

            <Button
              size="sm"
              variant="outline"
              leftIcon={<Bell className="w-4 h-4" />}
              onClick={() => setShowToast(true)}
            >
              Trigger Success Toast (Article 41)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 1. EVIDENCE-GROUNDED AI CARD (ARTICLE 70) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">
            1. Evidence-Grounded AI Response Card (Article 70)
          </h3>
        </div>

        <AIGroundedCard
          query="Why did my fasting glucose drop from 98 to 91 mg/dL over the past 3 weeks?"
          sourceFact="Systematic reviews demonstrate that regular morning aerobic physical activity (≥150 min/week) increases GLUT-4 glucose transporter translocation in skeletal muscle, lowering fasting plasma glucose by an average of 4–8 mg/dL over 4–12 weeks."
          sourceCitation="American Diabetes Association (ADA) Standards of Care & Circulation Meta-Analysis (2024)"
          sourceUrl="https://pubmed.ncbi.nlm.nih.gov/"
          aiInference="Your Apple Watch logs show you completed 35-minute morning walks on 18 of the last 21 days. This regular post-prandial muscular contraction directly correlates with your 7-point drop in fasting blood sugar."
          uncertaintyNotes="This analysis is correlational, not clinical diagnosis. Sleep variability, dietary changes, and hydration status can also introduce transient fluctuations."
          confidence="high"
          onFeedback={(isPos) => alert(`Feedback registered: ${isPos ? 'Accurate & grounded' : 'Flagged for clinical review'}`)}
        />
      </section>

      {/* 2. LONGITUDINAL HEALTH TIMELINE (ARTICLE 30) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">
            2. Longitudinal Health Timeline (Article 30)
          </h3>
        </div>

        <HealthTimeline
          dateTitle="Today • Saturday, August 29, 2026"
          events={sampleEvents}
          onSelectEvent={(ev) => alert(`Inspecting timeline event: ${ev.title}`)}
        />
      </section>

      {/* 3. USER OWNERSHIP & PRIVACY CONTROLS (ARTICLE 15 & 16) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-status-optimal" />
          <h3 className="text-base font-semibold text-text-primary">
            3. Privacy & User Ownership Controls (Articles 15 & 16)
          </h3>
        </div>

        <PrivacyConsentCard
          onExportData={() => alert("Packaging encrypted health export (JSON/CSV)...")}
          onPurgeData={() => alert("Triggering Article 20 Reversible Confirmation Dialog before deletion...")}
        />
      </section>
    </div>
  );
};
