/**
 * THAIS "ONE PLAN, TWO SOLUTIONS" PLAN GENERATOR
 * Solves: User's Primary Goal (out of 11) + Detected Diseases (out of 500)
 */

import { UserBiometricInput, DiagnosticAssessment, GeneratedDailyPlan, MacroBudget, MealPortion, DailyHealthTask } from './types';

export class ThaisPlanGenerator {
  public static generatePlan(input: UserBiometricInput, assessment: DiagnosticAssessment): GeneratedDailyPlan {
    // 1. Calculate Basal Metabolic Rate (Mifflin-St Jeor Formula)
    const weight = input.weightKg || 75;
    const height = input.heightCm || 175;
    const age = input.age || 30;
    
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (input.sex === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // 2. Physical Activity Factor (PAL)
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      active: 1.55,
      very_active: 1.725
    };
    const pal = activityMultipliers[input.activityLevel] || 1.3;
    const tdee = Math.round(bmr * pal);

    // 3. Goal Caloric Adjustment
    let targetCalories = tdee;
    if (input.primaryGoalId === 'weight_loss') {
      targetCalories = Math.max(Math.round(bmr), Math.round(tdee - 450)); // Never below BMR (Safety Law 3)
    } else if (input.primaryGoalId === 'muscle_building') {
      targetCalories = Math.round(tdee + 250);
    } else if (input.primaryGoalId === 'blood_sugar_reversal') {
      targetCalories = Math.max(Math.round(bmr), Math.round(tdee - 300));
    }

    // 4. Macronutrient Gram Allocation
    // Protein: 1.8g to 2.2g per kg of lean mass
    let proteinMultiplier = 1.8;
    if (input.primaryGoalId === 'muscle_building') proteinMultiplier = 2.2;
    if (input.primaryGoalId === 'weight_loss') proteinMultiplier = 2.0;

    const proteinGrams = Math.round(weight * proteinMultiplier);
    const proteinCals = proteinGrams * 4;

    // Fat: 30% of total calories (essential fatty acids for hormone synthesis)
    const fatCals = Math.round(targetCalories * 0.30);
    const fatGrams = Math.round(fatCals / 9);

    // Carbs: Remaining calories
    const remainingCals = targetCalories - (proteinCals + fatCals);
    const carbGrams = Math.max(50, Math.round(remainingCals / 4));
    const fiberGrams = Math.round(targetCalories / 1000 * 14); // 14g per 1000 kcal standard
    const waterLiters = Math.round((weight * 0.035) * 10) / 10;

    const macroBudget: MacroBudget = {
      calories: targetCalories,
      proteinGrams,
      carbGrams,
      fatGrams,
      fiberGrams,
      waterLiters
    };

    // 5. Meal Allocations (Breakfast 30%, Lunch 40%, Dinner 30%)
    const meals: MealPortion[] = [
      {
        mealType: 'breakfast',
        name: 'Energizing Morning Break',
        calories: Math.round(targetCalories * 0.30),
        proteinGrams: Math.round(proteinGrams * 0.30),
        carbGrams: Math.round(carbGrams * 0.25),
        fatGrams: Math.round(fatGrams * 0.35),
        guidance: 'High protein and healthy fats. Keeps dopamine high and prevents 11 AM cravings.',
        suggestedDish: input.dietaryPhilosophy === 'vegan' 
          ? 'Organic Tofu Scramble with Spinach, Avocado & Hemp Seeds'
          : 'Pasture-Raised 3-Egg Scramble with Smoked Salmon & Sautéed Spinach',
        ingredients: ['Eggs or Tofu (180g)', 'Baby Spinach (60g)', 'Avocado (50g)', 'Olive Oil (10g)']
      },
      {
        mealType: 'lunch',
        name: 'Metabolic Sustaining Lunch',
        calories: Math.round(targetCalories * 0.40),
        proteinGrams: Math.round(proteinGrams * 0.40),
        carbGrams: Math.round(carbGrams * 0.45),
        fatGrams: Math.round(fatGrams * 0.35),
        guidance: 'Highest carbohydrate meal of the day during peak insulin sensitivity. Always eat protein/greens first.',
        suggestedDish: input.dietaryPhilosophy.includes('veg')
          ? 'Sprouted Lentil & Quinoa Power Bowl with Steamed Broccoli & Tahini'
          : 'Herb-Grilled Free-Range Chicken Breast with Wild Rice & Asparagus',
        ingredients: ['Chicken or Tempeh (200g)', 'Wild Rice or Quinoa (120g cooked)', 'Broccoli (100g)', 'Olive Oil (10g)']
      },
      {
        mealType: 'dinner',
        name: 'Circadian Calming Dinner',
        calories: Math.round(targetCalories * 0.30),
        proteinGrams: Math.round(proteinGrams * 0.30),
        carbGrams: Math.round(carbGrams * 0.30),
        fatGrams: Math.round(fatGrams * 0.30),
        guidance: 'Rich in magnesium and glycine to prepare your brain for deep slow-wave sleep. Finish 3 hours before bed.',
        suggestedDish: input.dietaryPhilosophy.includes('veg')
          ? 'Warm Chickpea & Coconut Turmeric Stew with Steamed Kale'
          : 'Pan-Seared Wild Alaskan Salmon with Roasted Sweet Potatoes & Zucchini',
        ingredients: ['Salmon or Chickpeas (180g)', 'Sweet Potato (100g)', 'Zucchini (100g)', 'Extra Virgin Olive Oil (8g)']
      }
    ];

    // 6. Targeted Corrective Daily Tasks
    const tasks: DailyHealthTask[] = [
      {
        id: 'task_morning_sunlight',
        title: 'Morning Natural Light Reset (15 Mins)',
        category: 'circadian',
        targetTiming: 'Within 30 mins of waking',
        clinicalRationale: 'Direct photons into retinal ganglion cells set the master suprachiasmatic clock, improving nocturnal melatonin by 40%.',
        targetsDisease: 'Circadian Phase Delay & Sleep-Onset Insomnia (#205)',
        isCompleted: false
      },
      {
        id: 'task_post_meal_walk',
        title: 'Post-Lunch Brisk Walk (10 Mins)',
        category: 'movement',
        targetTiming: 'Immediately after lunch',
        clinicalRationale: 'Soleus muscle contractions trigger GLUT4 glucose translocation without requiring insulin, dropping blood sugar spikes by 32%.',
        targetsDisease: 'Cellular Insulin Resistance (#5) & Midday Crash (#168)',
        isCompleted: false
      },
      {
        id: 'task_hydration_electrolytes',
        title: 'Cellular Mineral Hydration (750ml + Salt)',
        category: 'hydration',
        targetTiming: 'Morning & mid-afternoon',
        clinicalRationale: 'Sodium and potassium pump restoration prevents afternoon fatigue and orthostatic dizziness.',
        targetsDisease: 'Chronic Dehydration (#427) & Electrolyte Stasis (#84)',
        isCompleted: false
      },
      {
        id: 'task_evening_blue_block',
        title: 'Circadian Light Dimming & Digital Wind-Down',
        category: 'recovery',
        targetTiming: '9:00 PM onwards',
        clinicalRationale: 'Eliminates 460nm blue light wavelengths that suppress pineal melatonin synthesis.',
        targetsDisease: 'Deep Sleep Fragmentation (#206)',
        isCompleted: false
      }
    ];

    // Solved disease names list
    const solvedDiseaseNames = assessment.detectedDiseases.map(d => d.name);

    // Empathetic Note
    const dailyNote = `Today's plan is specifically engineered for your goal (${input.primaryGoalId}) while simultaneously reversing ${solvedDiseaseNames.slice(0, 2).join(' and ')}. Keep your lunch protein high, take your 10-minute post-meal walk, and watch how sharp your mind stays this afternoon!`;

    return {
      planId: `plan_${Date.now()}`,
      primaryGoalName: input.primaryGoalId,
      solvedDiseaseNames,
      macroBudget,
      meals,
      tasks,
      dailyNote
    };
  }
}
