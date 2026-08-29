import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ChevronLeft, Sparkles, Check, HeartPulse, 
  Calendar, ShieldCheck, Zap
} from 'lucide-react';
import { SURVEY_QUESTIONS, SurveyQuestion } from '../../data/surveyQuestions';
import { UserBiometricInput, DiagnosticAssessment, GeneratedDailyPlan } from '../../services/thais/types';
import { ThaisDiagnosticEngine } from '../../services/thais/diagnosticEngine';
import { ThaisPlanGenerator } from '../../services/thais/planGenerator';
import { Button } from '../ui/Button';

interface LiveSurveyRunnerProps {
  onComplete: (input: UserBiometricInput, assessment: DiagnosticAssessment, plan: GeneratedDailyPlan) => void;
  onCancel?: () => void;
}

const STORAGE_KEY = 'tovelu_survey_progress_v1';

export const LiveSurveyRunner: React.FC<LiveSurveyRunnerProps> = ({ onComplete, onCancel }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [customText, setCustomText] = useState<string>('');
  const [showReveal, setShowReveal] = useState<boolean>(false);
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
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.stepIndex) setCurrentStepIndex(parsed.stepIndex);
      }
    } catch (e) {
      console.error("Failed to restore survey progress", e);
    }
  }, []);

  // Save progress on every step
  const saveProgress = (newAnswers: Record<string, any>, nextStep: number) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: newAnswers, stepIndex: nextStep }));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  };

  const currentQuestion: SurveyQuestion = SURVEY_QUESTIONS[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / SURVEY_QUESTIONS.length) * 100);

  const handleSelectOption = (optionId: string) => {
    const qId = currentQuestion.id;
    const newAnswers = { ...answers, [qId]: optionId };
    setAnswers(newAnswers);
    saveProgress(newAnswers, currentStepIndex);
  };

  const handleToggleMultiOption = (optionId: string) => {
    const qId = currentQuestion.id;
    const currentList: string[] = answers[qId] || [];
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

  const handleNext = () => {
    // If custom text was entered, store it
    if (customText.trim()) {
      answers[`${currentQuestion.id}_custom`] = customText.trim();
      setCustomText('');
    }

    // Check if on final question (Q52)
    if (currentStepIndex >= SURVEY_QUESTIONS.length - 1) {
      finishAndEvaluate();
      return;
    }

    const nextIndex = currentStepIndex + 1;
    setCurrentStepIndex(nextIndex);
    saveProgress(answers, nextIndex);
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      saveProgress(answers, prevIndex);
    }
  };

  const finishAndEvaluate = () => {
    // Calculate approximate age from DOB
    const currentYear = new Date().getFullYear();
    const calculatedAge = Math.max(18, currentYear - dobYear);

    // Map survey answers into UserBiometricInput
    const input: UserBiometricInput = {
      sex: answers['q01_biological_sex'] === 'female' ? 'female' : 'male',
      age: calculatedAge,
      dob: `${dobYear}-${dobMonth}-${dobDay}`,
      heightCm: heightCm,
      weightKg: weightKg,
      targetWeightKg: weightKg - 7,
      primaryGoalId: answers['q04_primary_goal'] || 'weight_loss',
      activityLevel: answers['q07_daily_activity_level'] || 'light',
      dietaryPhilosophy: answers['q08_dietary_philosophy'] || 'non_vegetarian',
      allergies: answers['q09_food_allergies'] || ['none'],
      symptoms: {
        bloatingTiming: answers['q13_bloating_timing'],
        bristolStoolType: answers['q14_bristol_stool_type'],
        floatingStool: answers['q15_floating_greasy_stool'] === 'yes_floating',
        heartburn: answers['q16_heartburn_reflux'] === 'classic_gerd',
        postCarbReaction: answers['q17_post_carb_reaction'],
        middayCrash: answers['q18_midday_crash'] === 'daily_crash',
        fastingHangry: answers['q19_fasting_irritability'] === 'hangry_shaky',
        skinSigns: answers['q22_skin_markers'] || [],
        sleepLatencyMinutes: answers['q25_sleep_latency'] === 'over_30_mins' ? 45 : 15,
        nightWakingTime: answers['q26_night_waking_time'],
        nocturiaFrequency: answers['q27_nocturia_frequency'] === 'two_plus' ? 2 : 0,
        coldExtremities: answers['q30_cold_extremities'] === 'cold_hands_feet',
        brainFogFrequency: answers['q38_brain_fog_frequency'],
        acuteToePainGout: answers['q35_acute_toe_pain_gout'] === 'yes_gout'
      },
      diagnosedConditions: answers['q46_diagnosed_conditions'] || [],
      medications: answers['q47_daily_medications'] || []
    };

    const assessmentResult = ThaisDiagnosticEngine.evaluate(input);
    const planResult = ThaisPlanGenerator.generatePlan(input, assessmentResult);

    setCompiledInput(input);
    setGeneratedAssessment(assessmentResult);
    setGeneratedPlan(planResult);
    setShowReveal(true);
  };

  // If in Health Report Reveal Mode
  if (showReveal && generatedAssessment && generatedPlan && compiledInput) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-surface border border-border-default rounded-3xl space-y-6 shadow-xl animate-in zoom-in-95 duration-300">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
            <HeartPulse className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Biological Diagnostic Audit Complete
          </span>
          <h2 className="text-2xl font-black text-text-primary">
            Your Personal THAIS Health Report
          </h2>
          <p className="text-xs text-text-secondary">
            Cross-analyzed across 52 phenotypic markers and 14 physiological systems.
          </p>
        </div>

        {/* Biological Age Reveal Card */}
        <div className="p-5 rounded-2xl bg-surface-raised border border-border-default flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-text-muted uppercase">Chronological vs Biological</span>
            <div className="text-3xl font-black text-text-primary mt-0.5">
              {generatedAssessment.biologicalAge} <span className="text-xs font-medium text-text-muted">biological years</span>
            </div>
            <span className={`text-xs font-bold ${generatedAssessment.ageDifferential > 0 ? 'text-amber-500' : 'text-emerald-500'}`}>
              {generatedAssessment.ageDifferential > 0 ? `+${generatedAssessment.ageDifferential}y older than chronological (${generatedAssessment.chronologicalAge}y)` : `${generatedAssessment.ageDifferential}y younger than calendar!`}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-bold text-text-muted uppercase">Inflammation Score</span>
            <div className="text-2xl font-black text-rose-500 mt-0.5">
              {generatedAssessment.systemicInflammationScore}/100
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">100% Reversible</span>
          </div>
        </div>

        {/* Top Detected Conditions */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Detected Conditions from the 500-Disease Index ({generatedAssessment.detectedDiseases.length})
          </h3>

          <div className="space-y-2">
            {generatedAssessment.detectedDiseases.slice(0, 3).map((d) => (
              <div key={d.diseaseId} className="p-3.5 rounded-xl bg-surface-raised border border-border-default flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase">{d.system}</span>
                  <h4 className="text-xs font-bold text-text-primary">{d.name}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {d.confidencePercentage}% Match
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* One Plan, Two Solutions Potential */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-text-secondary space-y-1">
          <strong className="text-text-primary font-bold">The Tovelu Promise: One Plan, Two Solutions</strong>
          <p>
            Your plan is calibrated to achieve your primary goal (<strong>{compiledInput.primaryGoalId.replace(/_/g, ' ')}</strong>) while systematically reversing your top detected health risks.
          </p>
        </div>

        {/* 3-Hour Free Trial Launch Button */}
        <Button
          size="lg"
          variant="primary"
          fullWidth
          className="rounded-2xl py-4 font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
          onClick={() => onComplete(compiledInput, generatedAssessment, generatedPlan)}
        >
          <Zap className="w-4 h-4 mr-2" />
          Explore Your Full Plan Free for 3 Hours
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-surface border border-border-default rounded-3xl space-y-6 shadow-xl animate-in fade-in duration-200">
      {/* Progress Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-text-muted">
          <span className="uppercase tracking-wider">Question {currentStepIndex + 1} of {SURVEY_QUESTIONS.length}</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{progressPercent}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-surface-raised rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-primary to-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Header */}
      <div className="space-y-1.5 pt-2">
        <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">
          {currentQuestion.section}
        </span>
        <h2 className="text-lg md:text-xl font-black text-text-primary leading-snug">
          {currentQuestion.title}
        </h2>
        <p className="text-xs text-text-secondary italic">
          💡 "{currentQuestion.whyWeAsk}"
        </p>
      </div>

      {/* DYNAMIC INPUT RENDERING */}
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

        {/* Dual Slider for Height and Weight (Q3) */}
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
          <div className="p-4 rounded-2xl bg-surface-raised border border-border-default space-y-4 text-center">
            <span className="text-xs font-semibold text-text-secondary">Target Goal Weight:</span>
            <div className="text-4xl font-black text-brand-primary">{weightKg - 6} kg</div>
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setWeightKg(Math.max(40, weightKg - 1))}
                className="w-10 h-10 rounded-xl bg-surface border border-border-default font-bold text-lg"
              >
                -
              </button>
              <span className="text-xs text-text-muted font-medium">Adjust Target</span>
              <button
                type="button"
                onClick={() => setWeightKg(Math.min(150, weightKg + 1))}
                className="w-10 h-10 rounded-xl bg-surface border border-border-default font-bold text-lg"
              >
                +
              </button>
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ Safe rate: 0.5 kg to 0.7 kg sustainable fat loss per week
            </p>
          </div>
        )}

        {/* Single-Choice Cards */}
        {currentQuestion.inputType === 'single-choice' && currentQuestion.options && (
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((opt) => {
              const isSelected = answers[currentQuestion.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500 shadow-sm'
                      : 'bg-surface-raised border-border-default hover:border-brand-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {opt.icon && <span className="text-xl">{opt.icon}</span>}
                    <div>
                      <div className="text-xs font-bold text-text-primary">{opt.label}</div>
                      {opt.sublabel && <div className="text-[11px] text-text-muted">{opt.sublabel}</div>}
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        )}

        {/* Multi-Choice Checkboxes */}
        {currentQuestion.inputType === 'multi-choice' && currentQuestion.options && (
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((opt) => {
              const selectedList: string[] = answers[currentQuestion.id] || [];
              const isSelected = selectedList.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleToggleMultiOption(opt.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500 shadow-sm'
                      : 'bg-surface-raised border-border-default hover:border-brand-primary'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-text-primary">{opt.label}</div>
                    {opt.sublabel && <div className="text-[11px] text-text-muted">{opt.sublabel}</div>}
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    isSelected ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-border-default'
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
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-brand-primary/10 border border-emerald-500/30 text-center space-y-4">
            <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-base font-bold text-text-primary">All 52 Biometric Points Captured</h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-md mx-auto">
              THAIS is ready to evaluate your risks across the 500-Disease Index and generate your custom One Plan, Two Solutions daily plan.
            </p>
            <Button
              size="lg"
              variant="primary"
              fullWidth
              className="rounded-2xl py-4 font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600"
              onClick={finishAndEvaluate}
            >
              <Sparkles className="w-4 h-4 mr-2" />
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

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-border-default">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStepIndex === 0}
          className={`flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl transition-all ${
            currentStepIndex === 0 ? 'opacity-30 cursor-not-allowed text-text-muted' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <div className="flex items-center gap-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="text-xs text-text-muted hover:text-text-primary px-3 py-2"
            >
              Exit
            </button>
          )}

          {currentQuestion.inputType !== 'action-trigger' && (
            <Button
              size="sm"
              variant="primary"
              onClick={handleNext}
              className="rounded-xl px-5 font-bold text-xs"
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
