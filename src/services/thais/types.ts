/**
 * THAIS CORE TYPES & INTERFACES
 * Engine: Tovelu Health AI Advance Intelligence System
 * Authority: Locked by Founder Ajay on August 29, 2026
 */

export interface UserBiometricInput {
  sex: 'male' | 'female' | 'other';
  age: number;
  dob?: string;
  heightCm: number;
  weightKg: number;
  targetWeightKg: number;
  primaryGoalId: string;
  activityLevel: 'sedentary' | 'light' | 'active' | 'very_active';
  dietaryPhilosophy: string;
  allergies: string[];
  symptoms: {
    bloatingTiming?: string;
    bristolStoolType?: string;
    floatingStool?: boolean;
    heartburn?: boolean;
    postCarbReaction?: string;
    middayCrash?: boolean;
    fastingHangry?: boolean;
    tongueSigns?: string;
    nailSigns?: string[];
    skinSigns?: string[];
    acneLocation?: string;
    sleepLatencyMinutes?: number;
    nightWakingTime?: string;
    nocturiaFrequency?: number;
    snoringOrApnea?: boolean;
    restlessLegs?: boolean;
    coldExtremities?: boolean;
    orthostaticDizziness?: boolean;
    ankleEdema?: boolean;
    palpitations?: boolean;
    morningJointStiffness?: boolean;
    acuteToePainGout?: boolean;
    nightCalfCramps?: boolean;
    brainFogFrequency?: string;
    headacheType?: string;
    emotionalState?: string;
    menstrualRegularity?: string;
    androgenDrop?: boolean;
  };
  diagnosedConditions: string[];
  medications: string[];
}

export interface DiseaseRiskMatch {
  diseaseId: number;
  name: string;
  system: string;
  confidencePercentage: number;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  rootDrivers: string[];
  reversalProtocol: string;
}

export interface DiagnosticAssessment {
  biologicalAge: number;
  chronologicalAge: number;
  ageDifferential: number; // e.g. -4 (younger) or +6 (older)
  metabolicFlexibilityScore: number; // 0 to 100
  systemicInflammationScore: number; // 0 to 100
  detectedDiseases: DiseaseRiskMatch[];
  topClinicalRisks: DiseaseRiskMatch[];
}

export interface MacroBudget {
  calories: number;
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
  fiberGrams: number;
  waterLiters: number;
}

export interface MealPortion {
  mealType: 'breakfast' | 'lunch' | 'dinner';
  name: string;
  calories: number;
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
  guidance: string;
  suggestedDish: string;
  ingredients: string[];
}

export interface DailyHealthTask {
  id: string;
  title: string;
  category: 'hydration' | 'movement' | 'nutrition' | 'circadian' | 'recovery';
  targetTiming: string;
  clinicalRationale: string;
  targetsDisease: string;
  isCompleted: boolean;
}

export interface GeneratedDailyPlan {
  planId: string;
  primaryGoalName: string;
  solvedDiseaseNames: string[];
  macroBudget: MacroBudget;
  meals: MealPortion[];
  tasks: DailyHealthTask[];
  dailyNote: string;
}

export interface VirtualCgmCurvePoint {
  minutesPostMeal: number;
  standardGlucoseMgDl: number;
  sequencedGlucoseMgDl: number;
}

export interface VirtualCgmSimulation {
  mealName: string;
  totalCarbs: number;
  peakGlucoseStandard: number;
  peakGlucoseSequenced: number;
  spikeReductionPercentage: number;
  curve: VirtualCgmCurvePoint[];
}

export interface SafetyAuditResult {
  isSafe: boolean;
  passedChecks: string[];
  blockedFlags: string[];
  contraindicationWarnings: string[];
}
