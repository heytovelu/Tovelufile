import React, { useState } from 'react';
import { Layers, Trash2, ExternalLink, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { BottomSheet } from '../ui/BottomSheet';
import { Dialog } from '../ui/Dialog';
import { Badge } from '../ui/Badge';

export const NavigationShowcase: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);

  const handleConfirmAction = () => {
    setDialogLoading(true);
    setTimeout(() => {
      setDialogLoading(false);
      setIsDialogOpen(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-primary" />
          <h3 className="text-base font-semibold text-text-primary">Mobile Overlays & Safe Navigation</h3>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Overlay Triggers</CardTitle>
            <CardDescription>Test bottom-up mobile inspection drawers and confirmation dialogs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button 
                variant="primary" 
                onClick={() => setIsSheetOpen(true)}
                leftIcon={<ExternalLink className="w-4 h-4" />}
              >
                Open Mobile Bottom Sheet
              </Button>

              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(true)}
                leftIcon={<Trash2 className="w-4 h-4 text-status-alert" />}
              >
                Test Reversible Confirmation Dialog (Article 20)
              </Button>
            </div>

            <div className="p-4 bg-subtle rounded-lg border border-border-subtle text-xs text-text-secondary space-y-2">
              <div className="flex items-center gap-1.5 text-text-primary font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Constitutional Navigation Doctrine:</span>
              </div>
              <p>• <strong>Bottom Sheets (Article 40)</strong>: Allows inspecting deep clinical evidence without navigating away or losing context.</p>
              <p>• <strong>Reversible Dialogs (Article 20)</strong>: Enforces &quot;Stop → Explain → Ask Ajay&quot; before deleting data or changing sensitive parameters.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Bottom Sheet */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Biomarker Inspection: Resting Heart Rate"
        description="Data Provenance: Apple Watch via HealthKit Sync"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-subtle border border-border-subtle flex items-center justify-between">
            <div>
              <span className="text-xs text-text-secondary font-mono">Current 7-Day Average</span>
              <div className="font-numeric text-3xl font-bold text-text-primary mt-1">
                62 <span className="text-sm font-sans font-normal text-text-secondary">bpm</span>
              </div>
            </div>
            <Badge variant="optimal" hasDot>
              Optimal Baseline
            </Badge>
          </div>

          <div className="space-y-2 text-xs text-text-secondary">
            <h4 className="font-semibold text-text-primary">Evidence & Context (Article 33)</h4>
            <p className="leading-relaxed">
              Resting heart rate in healthy adults typically ranges from 60 to 100 bpm. An average of 62 bpm indicates strong autonomic regulation and consistent cardiovascular conditioning.
            </p>
          </div>

          <div className="pt-2">
            <Button variant="primary" fullWidth onClick={() => setIsSheetOpen(false)}>
              Close Inspection
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Reversible Action Confirmation Dialog (Article 20) */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmAction}
        isLoading={dialogLoading}
        isDestructive={true}
        title="Delete Health Datapoint?"
        description="Article 20 Compliance: Are you sure you want to delete this glucose reading? This action cannot be undone once executed."
        confirmLabel="Delete Permanently"
        cancelLabel="Keep Record"
      >
        <div className="p-3 rounded-md bg-subtle border border-border-subtle text-xs space-y-1">
          <p className="font-mono text-text-secondary">Record ID: <strong className="text-text-primary">rec_bio_9042</strong></p>
          <p className="font-mono text-text-secondary">Value: <strong className="text-text-primary">95 mg/dL (Fasting)</strong></p>
          <p className="font-mono text-text-secondary">Timestamp: <strong className="text-text-primary">Today at 08:30 AM</strong></p>
        </div>
      </Dialog>
    </div>
  );
};
