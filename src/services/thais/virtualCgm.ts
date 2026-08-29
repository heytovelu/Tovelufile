/**
 * THAIS VIRTUAL CONTINUOUS GLUCOSE MONITOR (CGM) SIMULATOR
 * Simulates interstitial glucose curves and food sequencing flattening math without needles
 */

import { VirtualCgmSimulation, VirtualCgmCurvePoint } from './types';

export class ThaisVirtualCgm {
  public static simulateMeal(
    mealName: string,
    carbGrams: number,
    fiberGrams: number,
    proteinGrams: number
  ): VirtualCgmSimulation {
    const curve: VirtualCgmCurvePoint[] = [];
    const baselineGlucose = 90; // mg/dL fasting baseline

    // Net glycemic load impact
    const netCarbs = Math.max(5, carbGrams - fiberGrams);
    const standardPeakDelta = Math.min(85, Math.round(netCarbs * 1.4));
    
    // Sequencing benefit: Fiber coat + protein GLP-1 delays gastric emptying
    const proteinBenefit = Math.min(0.08, (proteinGrams / 100) * 0.15);
    const sequencingAttenuationFactor = Math.max(0.52, 0.64 - proteinBenefit); // 36% to 48% spike reduction
    const sequencedPeakDelta = Math.round(standardPeakDelta * sequencingAttenuationFactor);

    for (let minute = 0; minute <= 180; minute += 15) {
      // Standard Gaussian-like curve peaking at minute 45-60
      const standardRise = Math.exp(-Math.pow((minute - 55) / 32, 2)) * standardPeakDelta;
      const standardGlucose = Math.round(baselineGlucose + standardRise);

      // Sequenced Curve: gentler slope, lower delayed peak at minute 75
      const sequencedRise = Math.exp(-Math.pow((minute - 70) / 45, 2)) * sequencedPeakDelta;
      const sequencedGlucose = Math.round(baselineGlucose + sequencedRise);

      curve.push({
        minutesPostMeal: minute,
        standardGlucoseMgDl: standardGlucose,
        sequencedGlucoseMgDl: sequencedGlucose
      });
    }

    const peakGlucoseStandard = baselineGlucose + standardPeakDelta;
    const peakGlucoseSequenced = baselineGlucose + sequencedPeakDelta;
    const spikeReductionPercentage = Math.round(
      ((peakGlucoseStandard - peakGlucoseSequenced) / (peakGlucoseStandard - baselineGlucose)) * 100
    );

    return {
      mealName,
      totalCarbs: carbGrams,
      peakGlucoseStandard,
      peakGlucoseSequenced,
      spikeReductionPercentage,
      curve
    };
  }
}
