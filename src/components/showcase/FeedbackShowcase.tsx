import React, { useState } from 'react';
import { AlertOctagon, Radio, Database } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { EmergencyBanner } from '../ui/EmergencyBanner';
import { BiomarkerCardSkeleton } from '../ui/Skeleton';
import { EmptyState } from '../ui/EmptyState';
import { ErrorState } from '../ui/ErrorState';

export const FeedbackShowcase: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [showEmergency, setShowEmergency] = useState(true);

  const handleRetryError = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      setShowError(false);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. EMERGENCY SAFETY TRIAGE BANNER (ARTICLE 34) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-status-alert" />
            <h3 className="text-base font-semibold text-text-primary">1. Emergency Safety Escalation (Article 34)</h3>
          </div>
          <button
            onClick={() => setShowEmergency(!showEmergency)}
            className="text-xs font-mono text-brand-primary hover:underline"
          >
            {showEmergency ? "Hide Banner" : "Show Banner"}
          </button>
        </div>

        {showEmergency && (
          <EmergencyBanner
            emergencyNumber="112 / 911"
            jurisdiction="Global Emergency Safety Standard (Article 34)"
            message="If you are experiencing acute chest pain, sudden numbness, severe difficulty breathing, or trauma, seek emergency medical care immediately. Tovelu does not provide clinical emergency diagnosis."
          />
        )}
      </section>

      {/* 2. STATE SWITCHBOARD */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">2. State Simulation Switchboard (Article 87)</h3>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Simulate System States</CardTitle>
            <CardDescription>Preview loading, empty, and transparent error recovery states.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-border-subtle">
              <Button
                size="sm"
                variant={showSkeleton ? "primary" : "secondary"}
                onClick={() => {
                  setShowSkeleton(!showSkeleton);
                  setShowEmpty(false);
                  setShowError(false);
                }}
              >
                {showSkeleton ? "Disable Shimmer" : "Simulate Loading Shimmer"}
              </Button>

              <Button
                size="sm"
                variant={showEmpty ? "primary" : "secondary"}
                onClick={() => {
                  setShowEmpty(!showEmpty);
                  setShowSkeleton(false);
                  setShowError(false);
                }}
              >
                {showEmpty ? "Hide Empty" : "Simulate Empty State"}
              </Button>

              <Button
                size="sm"
                variant={showError ? "destructive" : "secondary"}
                onClick={() => {
                  setShowError(!showError);
                  setShowSkeleton(false);
                  setShowEmpty(false);
                }}
              >
                {showError ? "Dismiss Error" : "Simulate Error State"}
              </Button>
            </div>

            <div className="pt-4">
              {showSkeleton ? (
                <BiomarkerCardSkeleton />
              ) : showEmpty ? (
                <EmptyState
                  icon={<Database className="w-6 h-6" />}
                  title="No Biomarker Logs Recorded"
                  description="You have not logged any blood pressure or glucose readings yet. Begin tracking to generate longitudinal intelligence."
                  actionLabel="Log First Measurement"
                  onAction={() => alert("Opening biometric intake form...")}
                  secondaryActionLabel="Sync from Apple Health"
                  onSecondaryAction={() => alert("Connecting to HealthKit...")}
                />
              ) : showError ? (
                <ErrorState
                  title="Health Data Sync Interrupted"
                  message="Unable to reach the clinical database. Please check your internet connection or try again shortly."
                  errorCode="ERR_CONN_TIMEOUT_503"
                  isRetrying={isRetrying}
                  onRetry={handleRetryError}
                />
              ) : (
                <div className="p-4 rounded-lg bg-subtle border border-border-subtle text-xs text-text-secondary">
                  Click one of the buttons above to preview the shimmer loader, empty prompt, or error recovery handler.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
