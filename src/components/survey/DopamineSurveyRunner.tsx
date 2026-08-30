import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ChevronLeft, Sparkles, Check, HeartPulse, 
  Calendar, Zap, Flame, Award
} from 'lucide-react';
import { SURVEY_QUESTIONS, SurveyQuestion } from '../../data/surveyQuestions';
import { UserBiometricInput, DiagnosticAssessment, GeneratedDailyPlan } from '../../services/thais/types';
import { ThaisDiagnosticEngine } from '../../services/thais/diagnosticEngine';
import { ThaisPlanGenerator } from '../../services/thais/planGenerator';
import { DopamineMilestone } from './DopamineMilestone';
import { MILESTONES, MilestoneData } from '../../data/milestonesData';
import { Button } from '../ui/Button';

interface DopamineSurveyRunnerProps {
  onComplete: (input: UserBiometricInput, assessment: DiagnosticAssessment, plan: GeneratedDailyPlan) => void;
  onPayNow?: (input: UserBiometricInput, assessment: DiagnosticAssessment, plan: GeneratedDailyPlan) => void;
  onCancel?: () => void;
}

const STORAGE_KEY = 'tovelu_dopamine_survey_v1';

export const DopamineSurveyRunner: React.FC<DopamineSurveyRunnerProps> = ({ onComplete, onPayNow, onCancel }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [customText, setCustomText] = useState<string>('');
  
  // Dopamine Interstitial State
  const [activeMilestone, setActiveMilestone] = useState<MilestoneData | null>(null);
  const [streakCount, setStreakCount] = useState<number>(1);

  // Pre-Survey Note & Step View State
  const [hasAcceptedClinicalNote, setHasAcceptedClinicalNote] = useState<boolean>(false);
  const [surveyView, setSurveyView] = useState<'survey' | 'short_report' | 'decision'>('survey');

  // Health Report Reveal State
  const [generatedAssessment, setGeneratedAssessment] = useState<DiagnosticAssessment | null>(null);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedDailyPlan | null>(null);
  const [compiledInput, setCompiledInput] = useState<UserBiometricInput | null>(null);

  // Height & Weight Sliders State
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(78);
  const [dobYear, setDobYear] = useState<number>(1994);
  const [dobMonth, setDobMonth] = useState<string>('April');
  const [dobDay, setDobDay] = useState<number>(15);

  // Restore saved progress on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) {
          setAnswers(parsed.answers);
          if (Object.keys(parsed.answers).length > 0) {
            setHasAcceptedClinicalNote(true);
          }
        }
        if (parsed.stepIndex) {
          setCurrentStepIndex(parsed.stepIndex);
          setStreakCount(parsed.stepIndex + 1);
          setHasAcceptedClinicalNote(true);
        }
      }
    } catch (e) {
      console.error("Failed to restore dopamine survey progress", e);
    }
  }, []);

  const saveProgress = (newAnswers: Record<string, any>, nextStep: number) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: newAnswers, stepIndex: nextStep }));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  };

  const currentQuestion: SurveyQuestion = SURVEY_QUESTIONS[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / SURVEY_QUESTIONS.length) * 100);

  // Advance to next step (called ONLY by clicking Next button)
  const checkMilestoneAndAdvance = (nextStep: number, updatedAnswers: Record<string, any>) => {
    setStreakCount(prev => prev + 1);
    if (MILESTONES[nextStep]) {
      setActiveMilestone(MILESTONES[nextStep]);
    } else {
      setCurrentStepIndex(nextStep);
      saveProgress(updatedAnswers, nextStep);
    }
  };

  // SINGLE CHOICE: Selects option without auto-advance (waits for Next button)
  const handleSelectSingleOption = (optionId: string) => {
    const qId = currentQuestion.id;
    const newAnswers = { ...answers, [qId]: optionId };
    setAnswers(newAnswers);
    saveProgress(newAnswers, currentStepIndex);
  };

  // MULTI CHOICE: Toggles option in array (user can select multiple, waits for Next button)
  const handleToggleMultiOption = (optionId: string) => {
    const qId = currentQuestion.id;
    const currentVal = answers[qId];
    const currentList: string[] = Array.isArray(currentVal) ? currentVal : (currentVal ? [currentVal] : []);
    
    let updated: string[];
    if (optionId === 'none') {
      updated = ['none'];
    } else {
      const filtered = currentList.filter(id => id !== 'none');
      if (filtered.includes(optionId)) {
        updated = filtered.filter(id => id !== optionId);
      } else {
        updated = [...filtered, optionId];
      }
    }
    const newAnswers = { ...answers, [qId]: updated };
    setAnswers(newAnswers);
    saveProgress(newAnswers, currentStepIndex);
  };

  // FULL LENGTH NEXT BUTTON CLICK HANDLER
  const handleNextClick = () => {
    if (customText.trim()) {
      answers[`${currentQuestion.id}_custom`] = customText.trim();
      setCustomText('');
    }

    if (currentStepIndex >= SURVEY_QUESTIONS.length - 1) {
      finishAndEvaluate(answers);
      return;
    }

    checkMilestoneAndAdvance(currentStepIndex + 1, answers);
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      saveProgress(answers, prevIndex);
    }
  };

  const finishAndEvaluate = (finalAnswers: Record<string, any>) => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = Math.max(18, currentYear - dobYear);

    // Helpers to safely read single or multiple answers
    const getPrimaryString = (qKey: string, fallback: string): string => {
      const val = finalAnswers[qKey];
      if (Array.isArray(val)) return val[0] || fallback;
      return val || fallback;
    };

    const hasOption = (qKey: string, optVal: string): boolean => {
      const val = finalAnswers[qKey];
      if (Array.isArray(val)) return val.includes(optVal);
      return val === optVal;
    };

    const input: UserBiometricInput = {
      sex: getPrimaryString('q01_biological_sex', 'male') === 'female' ? 'female' : 'male',
      age: calculatedAge,
      dob: `${dobYear}-${dobMonth}-${dobDay}`,
      heightCm: heightCm,
      weightKg: weightKg,
      targetWeightKg: weightKg - 7,
      primaryGoalId: getPrimaryString('q04_primary_goal', 'weight_loss'),
      activityLevel: (getPrimaryString('q07_daily_activity_level', 'light') as any) || 'light',
      dietaryPhilosophy: (getPrimaryString('q08_dietary_philosophy', 'non_vegetarian') as any) || 'non_vegetarian',
      allergies: Array.isArray(finalAnswers['q09_food_allergies']) ? finalAnswers['q09_food_allergies'] : ['none'],
      symptoms: {
        bloatingTiming: getPrimaryString('q13_bloating_timing', '1_2_hours'),
        bristolStoolType: getPrimaryString('q14_bristol_stool_type', 'type_3_4_normal'),
        floatingStool: hasOption('q15_floating_greasy_stool', 'yes_floating'),
        heartburn: hasOption('q16_heartburn_reflux', 'classic_gerd') || hasOption('q16_heartburn_reflux', 'silent_reflux'),
        postCarbReaction: getPrimaryString('q17_post_carb_reaction', 'normal_energy'),
        middayCrash: hasOption('q18_midday_crash', 'daily_crash') || hasOption('q18_midday_crash', 'sluggish'),
        fastingHangry: hasOption('q19_fasting_irritability', 'hangry_shaky'),
        skinSigns: Array.isArray(finalAnswers['q22_skin_markers']) ? finalAnswers['q22_skin_markers'] : [],
        sleepLatencyMinutes: hasOption('q25_sleep_latency', 'over_30_mins') ? 45 : 15,
        nightWakingTime: getPrimaryString('q26_night_waking_time', 'sleep_through'),
        nocturiaFrequency: hasOption('q27_nocturia_frequency', 'two_plus') ? 2 : 0,
        coldExtremities: hasOption('q30_cold_extremities', 'cold_hands_feet'),
        brainFogFrequency: getPrimaryString('q38_brain_fog_frequency', 'rarely'),
        acuteToePainGout: hasOption('q35_acute_toe_pain_gout', 'yes_gout')
      },
      diagnosedConditions: Array.isArray(finalAnswers['q46_diagnosed_conditions']) ? finalAnswers['q46_diagnosed_conditions'] : [],
      medications: Array.isArray(finalAnswers['q47_daily_medications']) ? finalAnswers['q47_daily_medications'] : []
    };

    const assessmentResult = ThaisDiagnosticEngine.evaluate(input);
    const planResult = ThaisPlanGenerator.generatePlan(input, assessmentResult);

    setCompiledInput(input);
    setGeneratedAssessment(assessmentResult);
    setGeneratedPlan(planResult);
    setSurveyView('short_report');
  };

  // Helper to count selected options on current question
  const currentAnswer = answers[currentQuestion?.id];
  const selectedCount = Array.isArray(currentAnswer) 
    ? currentAnswer.length 
    : currentAnswer ? 1 : 0;

  // =========================================================================
  // PAGE 1: PRE-SURVEY CLINICAL SERIOUSNESS NOTE (Before Q1)
  // =========================================================================
  if (!hasAcceptedClinicalNote && currentStepIndex === 0) {
    return (
      <div className="max-w-[448px] w-full mx-auto p-4 sm:p-6 bg-surface border border-emerald-500/30 rounded-3xl space-y-5 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <HeartPulse className="w-9 h-9" />
          </div>
          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D] uppercase tracking-widest">
            CLINICAL INTEGRITY PROTOCOL
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight">
            Please Read Before Answering Question 1
          </h1>
        </div>

        {/* Warning Notice Box */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider">
            <span>⚠️</span>
            <span>Your Every Single Answer Matters Deeply</span>
          </div>
          <p>
            Unlike generic online quizzes, Tovelu does <strong>not</strong> use estimated guesses. Your answers directly program our clinical diagnostic engine across <strong>14 physiological organ systems</strong> and cross-examine <strong>500 metabolic root conditions</strong>.
          </p>
        </div>

        {/* Three Rules */}
        <div className="space-y-2.5 text-xs text-text-secondary">
          <div className="p-3.5 rounded-2xl bg-surface-raised border border-border-default flex items-start gap-3">
            <span className="text-lg shrink-0">⏳</span>
            <div>
              <strong className="text-text-primary block font-bold">1. Take Your Time — Do Not Rush</strong>
              <span>Please read every single question and all answer options carefully before answering. A hurried or false answer corrupts your biological age calculation and produces an inaccurate food sequence.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-raised border border-border-default flex items-start gap-3">
            <span className="text-lg shrink-0">🎯</span>
            <div>
              <strong className="text-text-primary block font-bold">2. Answer with 100% Real Honesty</strong>
              <span>Do not choose what sounds "healthy" or "ideal". Select what actually happens in your body (digestion, sleep, mid-day crashes, cravings, skin). Truthful answers allow our system to pinpoint and reverse your exact root bottlenecks.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-raised border border-border-default flex items-start gap-3">
            <span className="text-lg shrink-0">🔒</span>
            <div>
              <strong className="text-text-primary block font-bold">3. Zero Data Selling (Article 16)</strong>
              <span>Your responses are cryptographically sealed. We never sell, rent, or disclose your biological data to insurance companies, pharmaceutical corporations, or advertisers.</span>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          variant="primary"
          fullWidth
          className="rounded-2xl py-4 font-black text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-xl shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
          onClick={() => setHasAcceptedClinicalNote(true)}
        >
          <span>I Promise to Answer Accurately — Begin Survey (Q1) →</span>
        </Button>
      </div>
    );
  }

  // Render Milestone Celebration Interstitial
  if (activeMilestone) {
    return (
      <DopamineMilestone
        milestone={activeMilestone}
        onContinue={() => {
          const nextStep = activeMilestone.step;
          setActiveMilestone(null);
          setCurrentStepIndex(nextStep);
          saveProgress(answers, nextStep);
        }}
      />
    );
  }

  // =========================================================================
  // PAGE 2: SHORT HEALTH REPORT (Motivates immediate action & buying)
  // =========================================================================
  if (surveyView === 'short_report' && generatedAssessment && generatedPlan && compiledInput) {
    return (
      <div className="max-w-[448px] w-full mx-auto p-4 sm:p-5 bg-surface border border-emerald-500/40 rounded-3xl space-y-5 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-pulse">
            <HeartPulse className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Biological Diagnostic Audit Complete
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-text-primary">
            Your Personal THAIS Health Report
          </h2>
          <p className="text-xs md:text-sm text-text-secondary">
            Synthesized across 52 somatic markers and 14 physiological systems.
          </p>
        </div>

        {/* Biological Age Reveal Card */}
        <div className="p-5 rounded-3xl bg-surface-raised border border-border-default flex items-center justify-between shadow-sm">
          <div>
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Chronological vs Biological</span>
            <div className="text-3xl md:text-4xl font-black text-text-primary mt-0.5">
              {generatedAssessment.biologicalAge} <span className="text-sm font-medium text-text-muted">bio years</span>
            </div>
            <span className={`text-xs font-extrabold ${generatedAssessment.ageDifferential > 0 ? 'text-amber-500' : 'text-emerald-500'}`}>
              {generatedAssessment.ageDifferential > 0 
                ? `+${generatedAssessment.ageDifferential}y biological lag (Fully reversible)` 
                : generatedAssessment.ageDifferential < 0
                ? `${Math.abs(generatedAssessment.ageDifferential)}y biologically younger! ⚡`
                : 'Optimal cellular baseline match ⚡'}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Systemic Inflammation</span>
            <div className="text-3xl font-black text-rose-500 mt-0.5">
              {generatedAssessment.systemicInflammationScore}/100
            </div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">100% Targetable</span>
          </div>
        </div>

        {/* Top Detected Conditions */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            Detected Root Conditions ({generatedAssessment.detectedDiseases.length} from 500-Index)
          </h3>

          <div className="space-y-2">
            {generatedAssessment.detectedDiseases.slice(0, 3).map((d) => (
              <div key={d.diseaseId} className="p-3.5 rounded-2xl bg-surface-raised border border-border-default flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase">{d.system} • #{d.diseaseId}</span>
                  <h4 className="text-xs md:text-sm font-bold text-text-primary">{d.name}</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {d.confidencePercentage}% Match
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DEEP MOTIVATION & REVERSIBILITY MESSAGE */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-text-secondary space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-text-primary text-xs">
            <span className="text-base">🧬</span>
            <span>Why This Biological Lag is 100% Reversible in 90 Days:</span>
          </div>
          <p>
            Your results show active metabolic friction, but human cellular biology is completely regenerative. When you eat in exact clinical sequence (<strong>Fiber first → Protein & Fats second → Starches last</strong>), you blunt peak glucose spikes by up to 38% and trigger deep autophagy without starving or giving up carbs.
          </p>
          <p className="font-semibold text-emerald-700 dark:text-[#00FF9D]">
            ⚡ Delaying allows metabolic fatigue to compound. Starting today halts visceral fat storage and resets your biological age within 12 weeks.
          </p>
        </div>

        {/* Single Forward CTA: Advance to Decision Page */}
        <Button
          size="lg"
          variant="primary"
          fullWidth
          className="rounded-2xl py-4 font-black text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-xl shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
          onClick={() => setSurveyView('decision')}
        >
          <span>Review Reversal Protocol & Start Options →</span>
        </Button>
      </div>
    );
  }

  // =========================================================================
  // PAGE 3: DEDICATED DECISION PAGE (Pay Instant vs 3-Hour Free Trial)
  // =========================================================================
  if (surveyView === 'decision' && generatedAssessment && generatedPlan && compiledInput) {
    return (
      <div className="max-w-[448px] w-full mx-auto p-4 sm:p-5 bg-surface border border-emerald-500/40 rounded-3xl space-y-5 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D] uppercase tracking-widest">
            STEP 2 OF 2: CHOOSE YOUR START PATH
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight">
            Your Protocol is Formulated
          </h2>
          <p className="text-xs text-text-secondary">
            Choose how you would like to begin your Tovelu metabolic transformation today:
          </p>
        </div>

        {/* OPTION 1: INSTANT PAY & START DAY 1 (RECOMMENDED) */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-emerald-500/15 to-surface-raised border-2 border-emerald-500/60 shadow-lg space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950">
              ⭐ RECOMMENDED • FASTEST RESET
            </span>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#00FF9D]">Full Access</span>
          </div>

          <div>
            <h3 className="text-base font-black text-text-primary">Instant Protocol Activation</h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Lock in your personalized 90-Day Metabolic Arc, select your official Day 1 Start Date, and begin immediately with full support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-text-primary pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> 100% Tax-Inclusive
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Pick Day 1 Start Date
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Subscriptions from $49/mo
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> 30-Day Guarantee
            </div>
          </div>

          <Button
            size="lg"
            variant="primary"
            fullWidth
            className="rounded-2xl py-4 font-black text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-xl shadow-emerald-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 mt-2"
            onClick={() => {
              if (onPayNow) {
                onPayNow(compiledInput, generatedAssessment, generatedPlan);
              } else {
                onComplete(compiledInput, generatedAssessment, generatedPlan);
              }
            }}
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>⚡ Pay Now & Select Day 1 Launch Date →</span>
          </Button>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border-default" />
          <span className="text-[10px] uppercase font-mono font-bold text-text-muted tracking-widest">
            OR TEST-DRIVE FIRST
          </span>
          <div className="flex-1 h-px bg-border-default" />
        </div>

        {/* OPTION 2: 3-HOUR FREE TRIAL */}
        <div className="p-4 rounded-3xl bg-surface-raised border border-border-default space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 text-text-secondary">
              ⏱️ 3-HOUR FREE ACCESS
            </span>
            <span className="text-[11px] font-bold text-text-muted">No Card Needed</span>
          </div>

          <p className="text-xs text-text-secondary leading-relaxed">
            Want to inspect your sequenced meal engine, day 1 recipes, and organ mirrors first? Explore the entire Tovelu Web App free for the next 3 hours. Pay only when you are ready to continue.
          </p>

          <button
            type="button"
            className="w-full py-3.5 px-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-[#00FF9D] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98 shadow-sm"
            onClick={() => onComplete(compiledInput, generatedAssessment, generatedPlan)}
          >
            <span>⏱️ Explore Web App Free for 3 Hours →</span>
          </button>
        </div>
      </div>
    );
  }

  // Standard Question Screen
  return (
    <div className="max-w-[448px] w-full mx-auto p-4 sm:p-5 bg-surface border border-border-default rounded-3xl space-y-4 shadow-xl animate-in fade-in duration-200">
      {/* Top Momentum & Streak Banner */}
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 animate-pulse">
          <Flame className="w-3.5 h-3.5 fill-amber-500" />
          {streakCount}-Question Streak • High Momentum
        </span>
        <span className="text-text-muted">
          Q{currentStepIndex + 1} of {SURVEY_QUESTIONS.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="w-full h-2 bg-surface-raised rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-primary via-teal-400 to-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-text-muted font-semibold">
          <span>Start</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{progressPercent}% Completed</span>
          <span>THAIS Scan</span>
        </div>
      </div>

      {/* Question Header */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-brand-primary uppercase tracking-wider">
            {currentQuestion.section}
          </span>
          {currentQuestion.inputType === 'multi-choice' && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              Select one or multiple
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-black text-text-primary leading-tight tracking-tight">
          {currentQuestion.title}
        </h2>
        <p className="text-xs text-text-secondary italic">
          💡 "{currentQuestion.whyWeAsk}"
        </p>
      </div>

      {/* DYNAMIC INPUTS */}
      <div className="pt-2">
        {/* Date of Birth Picker (Q2) */}
        {currentQuestion.inputType === 'date-picker' && (
          <div className="p-4 rounded-2xl bg-surface-raised border border-border-default space-y-3">
            <span className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-primary" /> Select Your Date of Birth:
            </span>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={dobYear}
                onChange={(e) => setDobYear(Number(e.target.value))}
                className="bg-surface border border-border-default rounded-xl p-2.5 text-xs text-text-primary font-bold focus:outline-none"
              >
                {Array.from({ length: 70 }, (_, i) => 2008 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                value={dobMonth}
                onChange={(e) => setDobMonth(e.target.value)}
                className="bg-surface border border-border-default rounded-xl p-2.5 text-xs text-text-primary font-bold focus:outline-none"
              >
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              <select
                value={dobDay}
                onChange={(e) => setDobDay(Number(e.target.value))}
                className="bg-surface border border-border-default rounded-xl p-2.5 text-xs text-text-primary font-bold focus:outline-none"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <p className="text-[11px] text-text-muted">Calculated Age: {new Date().getFullYear() - dobYear} years old</p>
          </div>
        )}

        {/* Dual Slider for Height & Weight (Q3) */}
        {currentQuestion.inputType === 'dual-slider' && (
          <div className="p-4 rounded-2xl bg-surface-raised border border-border-default space-y-5">
            <div className="flex items-center justify-between border-b border-border-default pb-2">
              <span className="text-xs font-bold text-text-primary">Units:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsMetric(true)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${isMetric ? 'bg-brand-primary text-white' : 'bg-surface text-text-muted'}`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  type="button"
                  onClick={() => setIsMetric(false)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${!isMetric ? 'bg-brand-primary text-white' : 'bg-surface text-text-muted'}`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>
            </div>

            {/* Height */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-text-secondary">Height:</span>
                <span className="text-brand-primary font-bold">
                  {isMetric ? `${heightCm} cm` : `${Math.floor(heightCm / 30.48)} ft ${Math.round((heightCm % 30.48) / 2.54)} in`}
                </span>
              </div>
              <input
                type="range"
                min="130"
                max="220"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-brand-primary cursor-pointer"
              />
            </div>

            {/* Weight */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-text-secondary">Current Weight:</span>
                <span className="text-brand-primary font-bold">
                  {isMetric ? `${weightKg} kg` : `${Math.round(weightKg * 2.20462)} lbs`}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-brand-primary cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Number Stepper (Q5 Target Weight) */}
        {currentQuestion.inputType === 'number-stepper' && (
          <div className="p-5 rounded-2xl bg-surface-raised border border-border-default space-y-4 text-center">
            <span className="text-xs font-semibold text-text-secondary">Target Goal Weight:</span>
            <div className="text-4xl font-black text-brand-primary">{weightKg - 6} kg</div>
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setWeightKg(Math.max(40, weightKg - 1))}
                className="w-10 h-10 rounded-xl bg-surface border border-border-default font-bold text-lg hover:border-brand-primary transition-all active:scale-95"
              >
                -
              </button>
              <span className="text-xs text-text-muted font-medium">Adjust Target</span>
              <button
                type="button"
                onClick={() => setWeightKg(Math.min(150, weightKg + 1))}
                className="w-10 h-10 rounded-xl bg-surface border border-border-default font-bold text-lg hover:border-brand-primary transition-all active:scale-95"
              >
                +
              </button>
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ Safe rate: 0.5 kg to 0.7 kg sustainable fat loss per week
            </p>
          </div>
        )}

        {/* Single-Choice Cards (Tap selects, stays on screen until Next clicked) */}
        {currentQuestion.inputType === 'single-choice' && currentQuestion.options && (
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((opt) => {
              const isSelected = answers[currentQuestion.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectSingleOption(opt.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-150 flex items-center justify-between transform active:scale-[0.98] ${
                    isSelected
                      ? 'scale-[1.01] bg-emerald-500/20 border-emerald-500 shadow-md ring-2 ring-emerald-500/40'
                      : 'bg-surface-raised border-border-default hover:border-brand-primary hover:scale-[1.005]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {opt.icon && <span className="text-2xl shrink-0">{opt.icon}</span>}
                    <div>
                      <div className="text-xs md:text-sm font-bold text-text-primary">{opt.label}</div>
                      {opt.sublabel && <div className="text-[11px] text-text-muted mt-0.5">{opt.sublabel}</div>}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-emerald-500 border-emerald-500 text-white scale-110' : 'border-border-default'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Multi-Choice Cards (User can select multiple options freely) */}
        {currentQuestion.inputType === 'multi-choice' && currentQuestion.options && (
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((opt) => {
              const currentVal = answers[currentQuestion.id];
              const selectedList: string[] = Array.isArray(currentVal) ? currentVal : (currentVal ? [currentVal] : []);
              const isSelected = selectedList.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleToggleMultiOption(opt.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-150 flex items-center justify-between transform active:scale-[0.98] ${
                    isSelected
                      ? 'scale-[1.01] bg-emerald-500/20 border-emerald-500 shadow-md ring-2 ring-emerald-500/40'
                      : 'bg-surface-raised border-border-default hover:border-brand-primary hover:scale-[1.005]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {opt.icon && <span className="text-2xl shrink-0">{opt.icon}</span>}
                    <div>
                      <div className="text-xs md:text-sm font-bold text-text-primary">{opt.label}</div>
                      {opt.sublabel && <div className="text-[11px] text-text-muted mt-0.5">{opt.sublabel}</div>}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-emerald-500 border-emerald-500 text-white scale-110 shadow-sm' : 'border-border-default'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Action Trigger (Q52 Final) */}
        {currentQuestion.inputType === 'action-trigger' && (
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-brand-primary/10 to-teal-500/10 border border-emerald-500/40 text-center space-y-4 shadow-lg animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-text-primary">All 52 Biometric Points Captured!</h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-md mx-auto">
              THAIS is ready to evaluate your risks across the 500-Disease Index and generate your custom One Plan, Two Solutions daily plan.
            </p>
            <Button
              size="lg"
              variant="primary"
              fullWidth
              className="rounded-2xl py-4 font-black text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-xl shadow-emerald-500/25 active:scale-98 transition-all"
              onClick={() => finishAndEvaluate(answers)}
            >
              <Zap className="w-4 h-4 mr-2" />
              Run Full Biological Scan & Generate My Plan
            </Button>
          </div>
        )}

        {/* Custom Text Write-In Area */}
        <div className="pt-3 border-t border-border-default mt-4 space-y-1.5">
          <span className="text-[11px] font-semibold text-text-muted">Or write details in your own words (Optional):</span>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Type anything specific here..."
            className="w-full bg-surface-raised border border-border-default rounded-xl px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
          />
        </div>
      </div>

      {/* FULL LENGTH NEXT BUTTON & NAVIGATION FOOTER */}
      {currentQuestion.inputType !== 'action-trigger' && (
        <div className="space-y-3 pt-4 border-t border-border-default">
          {/* HUGE FULL-LENGTH NEXT BUTTON */}
          <Button
            size="lg"
            variant="primary"
            fullWidth
            onClick={handleNextClick}
            className="rounded-2xl py-4 text-sm md:text-base font-black bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-primary shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <span>
              {selectedCount > 1 
                ? `Next Question (${selectedCount} Selected)` 
                : selectedCount === 1 
                ? 'Next Question' 
                : 'Next Question'}
            </span>
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </Button>

          {/* Previous & Exit Controls */}
          <div className="flex items-center justify-between text-xs font-semibold px-1">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              className={`flex items-center gap-1 py-1.5 transition-all ${
                currentStepIndex === 0 
                  ? 'opacity-30 cursor-not-allowed text-text-muted' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous Question
            </button>

            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="text-text-muted hover:text-text-primary py-1.5"
              >
                Save & Exit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
