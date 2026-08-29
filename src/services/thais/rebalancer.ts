/**
 * THAIS DYNAMIC NUTRIENT REBALANCING ENGINE
 * Rebalances remaining meal portions in real time when a meal varies
 */

import { MacroBudget, MealPortion } from './types';

export interface LoggedMealEvent {
  mealType: 'breakfast' | 'lunch' | 'dinner';
  consumedCalories: number;
  consumedProtein: number;
  consumedCarbs: number;
  consumedFat: number;
}

export class ThaisRebalancer {
  public static rebalanceRemainingMeals(
    dailyBudget: MacroBudget,
    loggedMeals: LoggedMealEvent[],
    currentMeals: MealPortion[]
  ): {
    remainingBudget: MacroBudget;
    updatedMeals: MealPortion[];
    rebalanceMessage: string;
  } {
    // Total consumed so far
    let consumedCals = 0;
    let consumedP = 0;
    let consumedC = 0;
    let consumedF = 0;

    const loggedTypes = new Set<string>();
    for (const log of loggedMeals) {
      consumedCals += log.consumedCalories;
      consumedP += log.consumedProtein;
      consumedC += log.consumedCarbs;
      consumedF += log.consumedFat;
      loggedTypes.add(log.mealType);
    }

    const remainingCalories = Math.max(0, dailyBudget.calories - consumedCals);
    const remainingProtein = Math.max(0, dailyBudget.proteinGrams - consumedP);
    const remainingCarbs = Math.max(0, dailyBudget.carbGrams - consumedC);
    const remainingFat = Math.max(0, dailyBudget.fatGrams - consumedF);

    const remainingBudget: MacroBudget = {
      calories: remainingCalories,
      proteinGrams: remainingProtein,
      carbGrams: remainingCarbs,
      fatGrams: remainingFat,
      fiberGrams: Math.max(0, dailyBudget.fiberGrams - Math.round(consumedCals / 100)),
      waterLiters: dailyBudget.waterLiters
    };

    // Find meals not yet logged
    const unloggedMeals = currentMeals.filter(m => !loggedTypes.has(m.mealType));

    let rebalanceMessage = "All meals logged for today. You hit your target!";
    const updatedMeals = currentMeals.map(meal => {
      if (loggedTypes.has(meal.mealType)) {
        return meal; // Already fixed
      }

      // Distribute remaining macros proportionally among unlogged meals
      const fraction = 1 / Math.max(1, unloggedMeals.length);
      const newCals = Math.round(remainingCalories * fraction);
      const newP = Math.round(remainingProtein * fraction);
      const newC = Math.round(remainingCarbs * fraction);
      const newF = Math.round(remainingFat * fraction);

      return {
        ...meal,
        calories: newCals,
        proteinGrams: newP,
        carbGrams: newC,
        fatGrams: newF,
        guidance: `Dynamically rebalanced by THAIS: ${newP}g Protein, ${newC}g Carbs, ${newF}g Fat.`
      };
    });

    if (unloggedMeals.length > 0) {
      const nextMealName = unloggedMeals[0].name;
      rebalanceMessage = `THAIS dynamically adjusted your remaining meals. ${nextMealName} now targets ${unloggedMeals[0].calories} kcal so you hit 100% of your daily goal.`;
    }

    return {
      remainingBudget,
      updatedMeals,
      rebalanceMessage
    };
  }
}
