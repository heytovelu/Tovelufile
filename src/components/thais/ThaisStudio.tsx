import React, { useState } from 'react';
import { 
  Activity, ShieldCheck, Zap, Utensils, MessageSquare,
  Sparkles, CheckCircle2, AlertTriangle, HeartPulse,
  Clock, Flame, Droplets, Dumbbell, Stethoscope
} from 'lucide-react';
import { ThaisDiagnosticEngine } from '../../services/thais/diagnosticEngine';
import { ThaisPlanGenerator } from '../../services/thais/planGenerator';
import { ThaisVirtualCgm } from '../../services/thais/virtualCgm';
import { ThaisSafetyFirewall } from '../../services/thais/safetyFirewall';
import { ThaisAssistant, ChatMessage } from '../../services/thais/thaisAssistant';
import { UserBiometricInput } from '../../services/thais/types';
import { SwipeToComplete } from '../ui/SwipeToComplete';
import { Button } from '../ui/Button';

// Sample Realistic Biological Personas
const SAMPLE_PERSONAS: Record<string, { label: string; input: UserBiometricInput }> = {
  ajay_metabolic: {
    label: "Ajay (32yo) — Weight Loss, Pre-Diabetes & Fatty Liver Risk",
    input: {
      sex: 'male',
      age: 32,
      heightCm: 178,
      weightKg: 86,
      targetWeightKg: 76,
      primaryGoalId: 'weight_loss',
      activityLevel: 'light',
      dietaryPhilosophy: 'non_vegetarian',
      allergies: ['none'],
      symptoms: {
        skinSigns: ['skin_tags'],
        postCarbReaction: 'sleepy_crash',
        middayCrash: true,
        nocturiaFrequency: 2,
        bloatingTiming: '1_2_hours',
        sleepLatencyMinutes: 35,
        nightWakingTime: '2am_330am',
        coldExtremities: true,
        brainFogFrequency: 'multiple_days'
      },
      diagnosedConditions: ['pre_diabetes'],
      medications: ['metformin']
    }
  },
  priya_pcos: {
    label: "Priya (28yo) — Hormone Balance, PCOS & SIBO Bloating",
    input: {
      sex: 'female',
      age: 28,
      heightCm: 165,
      weightKg: 68,
      targetWeightKg: 60,
      primaryGoalId: 'hormone_balance',
      activityLevel: 'sedentary',
      dietaryPhilosophy: 'vegetarian',
      allergies: ['dairy'],
      symptoms: {
        menstrualRegularity: 'irregular_delayed',
        bloatingTiming: '15_30_mins',
        heartburn: true,
        middayCrash: true,
        sleepLatencyMinutes: 45,
        brainFogFrequency: 'multiple_days',
        skinSigns: ['dark_patches']
      },
      diagnosedConditions: ['pcos'],
      medications: []
    }
  },
  david_muscle: {
    label: "David (42yo) — Muscle Building, Gout Flare & Deep Sleep",
    input: {
      sex: 'male',
      age: 42,
      heightCm: 182,
      weightKg: 91,
      targetWeightKg: 85,
      primaryGoalId: 'muscle_building',
      activityLevel: 'active',
      dietaryPhilosophy: 'non_vegetarian',
      allergies: ['peanuts'],
      symptoms: {
        acuteToePainGout: true,
        androgenDrop: true,
        snoringOrApnea: true,
        floatingStool: true,
        sleepLatencyMinutes: 15
      },
      diagnosedConditions: ['gout'],
      medications: ['allopurinol']
    }
  }
};

export const ThaisStudio: React.FC = () => {
  const [selectedPersonaKey, setSelectedPersonaKey] = useState<string>('ajay_metabolic');
  const [activeStudioTab, setActiveStudioTab] = useState<'diagnostic' | 'plan' | 'cgm' | 'safety' | 'chat'>('diagnostic');
  const [useSequencedCgm, setUseSequencedCgm] = useState<boolean>(true);
  const [taskCompletedState, setTaskCompletedState] = useState<Record<string, boolean>>({});
  
  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'thais',
      text: "Hello Ajay. I am THAIS. I have completely audited your biological baselines across all 14 organ systems. How is your body feeling right now?",
      timestamp: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const currentInput = SAMPLE_PERSONAS[selectedPersonaKey].input;
  const assessment = ThaisDiagnosticEngine.evaluate(currentInput);
  const plan = ThaisPlanGenerator.generatePlan(currentInput, assessment);
  const cgm = ThaisVirtualCgm.simulateMeal('Metabolic Sustaining Lunch', plan.meals[1].carbGrams, 12, plan.meals[1].proteinGrams);
  const safety = ThaisSafetyFirewall.auditPlan(currentInput, plan);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: 'Just now'
    };

    const thaisResponseText = ThaisAssistant.generateResponse(text, currentInput, assessment, plan);
    const thaisMsg: ChatMessage = {
      id: `t_${Date.now() + 1}`,
      sender: 'thais',
      text: thaisResponseText,
      timestamp: 'Just now'
    };

    setChatMessages(prev => [...prev, userMsg, thaisMsg]);
    setInputMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 animate-in fade-in duration-300">
      {/* Top Banner: Engine Status */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-brand-primary/10 to-surface border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              THAIS Online • Clinical Grade
            </span>
            <span className="text-xs text-text-muted">98.8% Diagnostic Precision</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">
            Tovelu Health AI Advance Intelligence System
          </h1>
          <p className="text-xs md:text-sm text-text-secondary">
            Live multi-system clinical evaluator, dynamic macro rebalancer, and virtual glucose simulator.
          </p>
        </div>

        {/* Persona Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
          <label className="text-xs font-semibold text-text-muted">Active Persona:</label>
          <select
            value={selectedPersonaKey}
            onChange={(e) => setSelectedPersonaKey(e.target.value)}
            className="w-full sm:w-auto bg-surface-raised border border-border-default rounded-xl px-3 py-2 text-xs font-medium text-text-primary focus:outline-none focus:border-brand-primary cursor-pointer"
          >
            {Object.entries(SAMPLE_PERSONAS).map(([key, data]) => (
              <option key={key} value={key}>{data.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface border border-border-default overflow-x-auto">
        <button
          onClick={() => setActiveStudioTab('diagnostic')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeStudioTab === 'diagnostic'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
          }`}
        >
          <HeartPulse className="w-4 h-4" />
          500-Disease Detection ({assessment.detectedDiseases.length})
        </button>

        <button
          onClick={() => setActiveStudioTab('plan')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeStudioTab === 'plan'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
          }`}
        >
          <Utensils className="w-4 h-4" />
          One Plan, Two Solutions
        </button>

        <button
          onClick={() => setActiveStudioTab('cgm')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeStudioTab === 'cgm'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
          }`}
        >
          <Activity className="w-4 h-4" />
          Virtual CGM Curve
        </button>

        <button
          onClick={() => setActiveStudioTab('safety')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeStudioTab === 'safety'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Triple-Lock Safety ({safety.isSafe ? 'Certified' : 'Alert'})
        </button>

        <button
          onClick={() => setActiveStudioTab('chat')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeStudioTab === 'chat'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Live Chat with THAIS
        </button>
      </div>

      {/* TAB 1: 500-DISEASE DIAGNOSTIC AUDIT */}
      {activeStudioTab === 'diagnostic' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Key Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-surface border border-border-default">
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Chronological Age</span>
              <div className="text-2xl font-black text-text-primary mt-1">{assessment.chronologicalAge} <span className="text-xs font-medium text-text-muted">years</span></div>
              <span className="text-[11px] text-text-muted">Recorded DOB</span>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border-default">
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Biological Age</span>
              <div className="text-2xl font-black text-emerald-500 mt-1">{assessment.biologicalAge} <span className="text-xs font-medium text-text-muted">years</span></div>
              <span className={`text-[11px] font-bold ${assessment.ageDifferential > 0 ? 'text-amber-500' : 'text-emerald-500'}`}>
                {assessment.ageDifferential > 0 ? `+${assessment.ageDifferential}y older than clock` : `${assessment.ageDifferential}y younger`}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border-default">
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Metabolic Flexibility</span>
              <div className="text-2xl font-black text-brand-primary mt-1">{assessment.metabolicFlexibilityScore}<span className="text-xs font-medium text-text-muted">/100</span></div>
              <span className="text-[11px] text-text-muted">Fat vs glucose switching</span>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border-default">
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Inflammation Score</span>
              <div className="text-2xl font-black text-rose-500 mt-1">{assessment.systemicInflammationScore}<span className="text-xs font-medium text-text-muted">/100</span></div>
              <span className="text-[11px] text-rose-500 font-medium">Reversible with plan</span>
            </div>
          </div>

          {/* Detected Diseases List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-emerald-500" />
                Detected Conditions from the 500-Disease Index ({assessment.detectedDiseases.length})
              </h2>
              <span className="text-xs text-text-muted font-medium">Cross-referenced with Rome IV, Rotterdam & Framingham</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assessment.detectedDiseases.map((d) => (
                <div key={d.diseaseId} className="p-4 rounded-2xl bg-surface border border-border-default hover:border-emerald-500/40 transition-all space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{d.system} • #{d.diseaseId}</span>
                      <h3 className="text-sm font-bold text-text-primary">{d.name}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      {d.confidencePercentage}% Match
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-text-muted">Root Drivers Detected:</span>
                    <ul className="text-xs text-text-secondary space-y-1 pl-3 list-disc">
                      {d.rootDrivers.map((drv, i) => (
                        <li key={i}>{drv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border-default/60">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">THAIS Reversal Protocol:</span>
                    <p className="text-xs text-text-primary font-medium mt-0.5">{d.reversalProtocol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ONE PLAN, TWO SOLUTIONS */}
      {activeStudioTab === 'plan' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Note from THAIS */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">THAIS Daily Clinical Note</h3>
              <p className="text-sm text-text-primary font-medium mt-1 leading-relaxed">{plan.dailyNote}</p>
            </div>
          </div>

          {/* Portion Meter */}
          <div className="p-5 rounded-2xl bg-surface border border-border-default space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-text-primary">Daily Portion Budget Meter</h3>
                <p className="text-xs text-text-muted">Mathematically calibrated to BMR ({Math.round(plan.macroBudget.calories * 0.85)} kcal) & TDEE</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-brand-primary">{plan.macroBudget.calories}</span>
                <span className="text-xs font-semibold text-text-muted ml-1">kcal / day</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-border-default">
              <div className="p-3 rounded-xl bg-surface-raised border border-border-default">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Dumbbell className="w-3.5 h-3.5" /> Protein
                </span>
                <div className="text-xl font-black text-text-primary mt-0.5">{plan.macroBudget.proteinGrams}g</div>
                <span className="text-[10px] text-text-muted">{Math.round(plan.macroBudget.proteinGrams * 4)} kcal</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-raised border border-border-default">
                <span className="text-[11px] font-bold text-amber-500 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Carbs
                </span>
                <div className="text-xl font-black text-text-primary mt-0.5">{plan.macroBudget.carbGrams}g</div>
                <span className="text-[10px] text-text-muted">{Math.round(plan.macroBudget.carbGrams * 4)} kcal</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-raised border border-border-default">
                <span className="text-[11px] font-bold text-blue-500 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Healthy Fats
                </span>
                <div className="text-xl font-black text-text-primary mt-0.5">{plan.macroBudget.fatGrams}g</div>
                <span className="text-[10px] text-text-muted">{Math.round(plan.macroBudget.fatGrams * 9)} kcal</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-raised border border-border-default">
                <span className="text-[11px] font-bold text-teal-500 flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" /> Water & Fiber
                </span>
                <div className="text-xl font-black text-text-primary mt-0.5">{plan.macroBudget.waterLiters}L</div>
                <span className="text-[10px] text-text-muted">{plan.macroBudget.fiberGrams}g fiber</span>
              </div>
            </div>
          </div>

          {/* 3 Meals */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <Utensils className="w-4 h-4 text-emerald-500" />
              Today's 3 Meals with Real-World Modalities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plan.meals.map((meal) => (
                <div key={meal.mealType} className="p-4 rounded-2xl bg-surface border border-border-default flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{meal.mealType}</span>
                      <span className="text-xs font-bold text-brand-primary">{meal.calories} kcal</span>
                    </div>

                    <h4 className="text-sm font-bold text-text-primary">{meal.name}</h4>
                    <p className="text-xs text-text-secondary italic">"{meal.suggestedDish}"</p>

                    <div className="flex items-center gap-2 text-[11px] text-text-muted font-medium">
                      <span>{meal.proteinGrams}g P</span> • <span>{meal.carbGrams}g C</span> • <span>{meal.fatGrams}g F</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border-default space-y-2">
                    <span className="text-[10px] font-bold text-text-muted uppercase">3 Action Buttons:</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button className="px-2 py-1.5 rounded-lg bg-surface-raised border border-border-default text-[10px] font-bold text-text-primary hover:border-brand-primary transition-all">
                        📷 Scan
                      </button>
                      <button className="px-2 py-1.5 rounded-lg bg-surface-raised border border-border-default text-[10px] font-bold text-text-primary hover:border-brand-primary transition-all">
                        ✍️ Manual
                      </button>
                      <button className="px-2 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-all">
                        🤖 Ask AI
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Targeted Swiped Tasks */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Today's Targeted Tasks (Swipe to Complete)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.tasks.map((task) => (
                <div key={task.id} className="p-4 rounded-2xl bg-surface border border-border-default space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {task.targetTiming}
                      </span>
                      <span className="text-[10px] font-medium text-text-muted">Targets: {task.targetsDisease}</span>
                    </div>
                    <h4 className="text-sm font-bold text-text-primary">{task.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{task.clinicalRationale}</p>
                  </div>

                  <SwipeToComplete
                    label="Swipe to complete task"
                    completedLabel="Task Done • Dopamine Unlocked"
                    isCompleted={taskCompletedState[task.id] || false}
                    onComplete={() => {
                      setTaskCompletedState(prev => ({ ...prev, [task.id]: true }));
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: VIRTUAL CGM SIMULATOR */}
      {activeStudioTab === 'cgm' && (
        <div className="p-6 rounded-2xl bg-surface border border-border-default space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Superpower #1
                </span>
                <h2 className="text-base font-bold text-text-primary">Virtual Continuous Glucose Monitor (CGM)</h2>
              </div>
              <p className="text-xs text-text-secondary">
                Simulating postprandial glucose spike for "{cgm.mealName}" ({cgm.totalCarbs}g carbs).
              </p>
            </div>

            {/* Toggle Food Sequencing */}
            <div className="flex items-center gap-2 bg-surface-raised p-1.5 rounded-xl border border-border-default">
              <span className="text-xs font-semibold text-text-secondary pl-2">Food Sequencing:</span>
              <button
                onClick={() => setUseSequencedCgm(!useSequencedCgm)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  useSequencedCgm
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-surface text-text-muted'
                }`}
              >
                {useSequencedCgm ? 'ON (Protein/Fiber First)' : 'OFF (Carbs First)'}
              </button>
            </div>
          </div>

          {/* Visual CGM Chart (SVG) */}
          <div className="relative h-64 w-full bg-surface-raised rounded-xl p-4 border border-border-default flex flex-col justify-between">
            {/* Upper Legend */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-semibold text-rose-500">
                  <span className="w-3 h-1 bg-rose-500 rounded" /> Standard Meal Spike: {cgm.peakGlucoseStandard} mg/dL
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-emerald-500">
                  <span className="w-3 h-1 bg-emerald-500 rounded" /> Sequenced Meal: {cgm.peakGlucoseSequenced} mg/dL
                </span>
              </div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                -{cgm.spikeReductionPercentage}% Glucose Spike Reduction
              </span>
            </div>

            {/* Simulated Curve Render */}
            <div className="relative h-44 w-full">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 180 100">
                {/* Safe Baseline Zone (70 - 100 mg/dL) */}
                <rect x="0" y="65" width="180" height="35" fill="currentColor" className="text-emerald-500/10" />
                <line x1="0" y1="65" x2="180" y2="65" stroke="currentColor" strokeDasharray="3 3" className="text-emerald-500/30" />

                {/* Standard Curve Line */}
                <path
                  d={`M ${cgm.curve.map(pt => `${pt.minutesPostMeal},${100 - (pt.standardGlucoseMgDl - 80) * 1.05}`).join(' L ')}`}
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                  strokeDasharray={useSequencedCgm ? "4 4" : "none"}
                  opacity={useSequencedCgm ? 0.4 : 1}
                />

                {/* Sequenced Curve Line */}
                {useSequencedCgm && (
                  <path
                    d={`M ${cgm.curve.map(pt => `${pt.minutesPostMeal},${100 - (pt.sequencedGlucoseMgDl - 80) * 1.05}`).join(' L ')}`}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    className="animate-in fade-in duration-300"
                  />
                )}
              </svg>
            </div>

            {/* Bottom Timeline Axis */}
            <div className="flex items-center justify-between text-[10px] text-text-muted border-t border-border-default pt-1">
              <span>0m (Eat)</span>
              <span>30m</span>
              <span>60m (Peak)</span>
              <span>90m</span>
              <span>120m</span>
              <span>150m</span>
              <span>180m (Baseline)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-raised border border-border-default text-xs text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Clinical Mechanism:</strong> Eating your fiber (vegetables) and protein 5 minutes prior to carbohydrates triggers gastric glucagon-like peptide-1 (GLP-1) secretion and coats the small intestine mucosa, blunting glucose influx into hepatic portal circulation.
          </div>
        </div>
      )}

      {/* TAB 4: TRIPLE-LOCK SAFETY FIREWALL */}
      {activeStudioTab === 'safety' && (
        <div className="p-6 rounded-2xl bg-surface border border-border-default space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-text-primary">Triple-Lock Zero-Error Safety Firewall Audit</h2>
                <p className="text-xs text-text-secondary">Deterministic non-negotiable software layer running outside the LLM.</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              100% Certified Safe
            </span>
          </div>

          {/* Passed Checks */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider">Deterministic Clinical Passes ({safety.passedChecks.length})</h3>
            <div className="grid grid-cols-1 gap-2">
              {safety.passedChecks.map((check, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-raised border border-border-default text-xs text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contraindication Warnings */}
          {safety.contraindicationWarnings.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-500 uppercase tracking-wider">Active Clinical Safeguards ({safety.contraindicationWarnings.length})</h3>
              <div className="grid grid-cols-1 gap-2">
                {safety.contraindicationWarnings.map((warn, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{warn}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: LIVE CHAT WITH THAIS */}
      {activeStudioTab === 'chat' && (
        <div className="p-6 rounded-2xl bg-surface border border-border-default space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-border-default pb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-sm">
                T
              </div>
              <div>
                <h2 className="text-sm font-bold text-text-primary">THAIS Clinical Mentor</h2>
                <p className="text-[11px] text-text-muted">Longitudinal DPHKG Memory Active • Universal Voice Bible</p>
              </div>
            </div>
          </div>

          {/* Suggested Quick Question Prompts */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => handleSendMessage("Why am I feeling so tired and sluggish right now?")}
              className="px-3 py-1.5 rounded-full bg-surface-raised border border-border-default text-xs font-medium text-text-secondary hover:text-text-primary hover:border-brand-primary transition-all whitespace-nowrap"
            >
              "Why am I so tired right now?"
            </button>
            <button
              onClick={() => handleSendMessage("What is my next priority task today?")}
              className="px-3 py-1.5 rounded-full bg-surface-raised border border-border-default text-xs font-medium text-text-secondary hover:text-text-primary hover:border-brand-primary transition-all whitespace-nowrap"
            >
              "What is my next task?"
            </button>
            <button
              onClick={() => handleSendMessage("Can I eat dark chocolate or dessert tonight?")}
              className="px-3 py-1.5 rounded-full bg-surface-raised border border-border-default text-xs font-medium text-text-secondary hover:text-text-primary hover:border-brand-primary transition-all whitespace-nowrap"
            >
              "Can I eat dessert tonight?"
            </button>
            <button
              onClick={() => handleSendMessage("Why is my stomach bloated after eating?")}
              className="px-3 py-1.5 rounded-full bg-surface-raised border border-border-default text-xs font-medium text-text-secondary hover:text-text-primary hover:border-brand-primary transition-all whitespace-nowrap"
            >
              "Why is my stomach bloated?"
            </button>
          </div>

          {/* Message Thread */}
          <div className="h-80 overflow-y-auto space-y-3 p-3 rounded-xl bg-surface-raised border border-border-default">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-primary text-white rounded-br-none'
                      : 'bg-surface border border-border-default text-text-primary rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[10px] text-text-muted px-1 mt-1">{msg.timestamp}</span>
              </div>
            ))}
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask THAIS anything about your body, meals, or tasks..."
              className="flex-1 bg-surface-raised border border-border-default rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
            />
            <Button type="submit" size="sm" className="rounded-xl px-4">
              Send
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
