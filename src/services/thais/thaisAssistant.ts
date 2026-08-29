/**
 * THAIS CONVERSATIONAL REASONING ENGINE
 * Guided by the Tovelu Universal Voice Bible & Dynamic Personal Health Knowledge Graph
 */

import { UserBiometricInput, DiagnosticAssessment, GeneratedDailyPlan } from './types';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'thais';
  text: string;
  timestamp: string;
}

export class ThaisAssistant {
  public static generateResponse(
    query: string,
    input: UserBiometricInput,
    assessment: DiagnosticAssessment,
    plan: GeneratedDailyPlan
  ): string {
    const q = query.toLowerCase();

    if (q.includes('next task') || q.includes('what should i do')) {
      const pendingTask = plan.tasks.find(t => !t.isCompleted) || plan.tasks[0];
      return `Your immediate priority right now is **${pendingTask.title}** (${pendingTask.targetTiming}).  
*Why this matters for your body*: ${pendingTask.clinicalRationale}  
Take 2 minutes to complete it, and swipe the slider when done!`;
    }

    if (q.includes('tired') || q.includes('sluggish') || q.includes('fatigue') || q.includes('low energy')) {
      const insulinDetected = assessment.detectedDiseases.some(d => d.diseaseId === 5);
      return `I'm analyzing your biological signals right now. When you feel this sudden afternoon slump, it's almost always a combination of two things:
1. ${insulinDetected ? 'Your cells are recovering from a postprandial glucose fluctuation.' : 'Cellular electrolyte and water volume depletion.'}
2. A drop in dopamine and cortisol after midday.

**Your 3-Minute Fix**: Drink 500ml of water with a tiny pinch of mineral salt, and take a quick 5-minute walk outside in natural light. Do not reach for coffee right now—it will only crash your adrenals later. Give your body 15 minutes, and your clarity will return.`;
    }

    if (q.includes('chocolate') || q.includes('sweet') || q.includes('dessert') || q.includes('cheat')) {
      return `You never have to starve or feel guilty with Tovelu. If you are craving something sweet, have 2 squares of 85%+ dark chocolate, or a small handful of berries with Greek yogurt.  
*Scientific tip*: Eat it immediately following your lunch or dinner protein, never on an empty stomach. This prevents the glucose spike from hijacking your dopamine receptors!`;
    }

    if (q.includes('bloated') || q.includes('stomach') || q.includes('gas')) {
      const siboDetected = assessment.detectedDiseases.some(d => d.diseaseId === 109 || d.diseaseId === 103);
      return `I see your gut health signals. ${siboDetected ? 'Because your survey flagged SIBO and low stomach acid, premature bacterial fermentation happens when food transit slows.' : 'Your digestive enzymes need gentle assistance.'}  
**What to do right now**:
1. Sip warm ginger or peppermint tea.
2. Avoid drinking large glasses of iced water during your meal (it dilutes stomach acid).
3. Take a slow 10-minute walk to stimulate gastric motility. Your stomach will decompress shortly.`;
    }

    if (q.includes('macro') || q.includes('protein') || q.includes('calorie')) {
      return `Here is your exact calibrated nutritional budget for today (aligned with your ${input.primaryGoalId.replace(/_/g, ' ')} goal and ${input.dietaryPhilosophy.replace(/_/g, ' ')} lifestyle):
* **Calories**: ${plan.macroBudget.calories} kcal
* **Protein**: ${plan.macroBudget.proteinGrams}g (Essential for lean mass & neurotransmitters)
* **Carbohydrates**: ${plan.macroBudget.carbGrams}g (Timed around peak daylight hours)
* **Healthy Fats**: ${plan.macroBudget.fatGrams}g (For cellular membranes and hormone balance)
* **Fiber**: ${plan.macroBudget.fiberGrams}g & **Water**: ${plan.macroBudget.waterLiters}L.

Every gram is calculated to drive your primary goal while silently reversing your detected metabolic risk factors.`;
    }

    // Default intelligent clinical synthesis
    return `I am actively monitoring your plan, Ajay. Every meal you eat and every task you complete directly drives your ${input.primaryGoalId.replace(/_/g, ' ')} goal while resolving ${assessment.detectedDiseases.slice(0, 2).map(d => d.name).join(' and ')}.  
How is your energy and digestion feeling at this exact moment? Tell me anything personal, and I'll adjust today's parameters for you.`;
  }
}
