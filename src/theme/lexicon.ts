/**
 * Tovelu Universal Voice & Lexicon Contracts
 * Enforces Constitutional Tone, Calibrated Uncertainty, and Standard Copy.
 * Constitution Alignment: Articles 3, 5, 6, 15, 16, 22, 33, 34, 39, 63, 70, 95, 105.
 */

export const ToveluVoice = {
  brand: {
    name: "Tovelu",
    tagline: "Towards Better Health",
    mission: "Build a globally trusted health-intelligence platform that continuously helps humanity move toward better health.",
    founder: "Ajay",
  },

  /* 4 Calibrated Voice State Profiles (Article 39 & 70) */
  voiceStates: {
    gear1_baseline: {
      name: "Baseline Peace",
      character: "Invisible, serene, brief, effortless.",
      example: "Your resting heart rate averaged 62 bpm this week. Everything is steady.",
    },
    gear2_insight: {
      name: "Insight & Learning",
      character: "Illuminating, curious, humble, educational.",
      example: "Your fasting glucose was 6 points lower on days you walked. Here is what we know, and what we are still observing.",
    },
    gear3_friction: {
      name: "Friction & Struggle",
      character: "Compassionate, analytical, forward-looking, zero guilt.",
      example: "Life gets demanding. We don't need to make up for lost time—what is the easiest step for today?",
    },
    gear4_triage: {
      name: "Acute Triage",
      character: "Direct, unambiguous, urgent without hysteria, protective.",
      example: "This combination of symptoms requires immediate clinical evaluation. Please contact local emergency services immediately.",
    },
  },

  /* Calibrated Uncertainty Standard (Article 22 & 33) */
  uncertainty: {
    high: "Strong clinical trial evidence demonstrates",
    moderate: "Current clinical research and observational data suggest",
    limited: "Preliminary studies in small populations indicate",
    conflicting: "Scientific literature is currently mixed regarding",
    insufficient: "There is currently not enough reliable evidence to conclude",
    insufficientUserData: "I do not have enough personal health data to interpret this safely",
  },

  /* Mandatory Clinical Disclaimers (Articles 11, 12 & 38) */
  disclaimers: {
    nonDiagnostic: "Tovelu provides evidence-based health intelligence, not medical diagnosis or clinical prescription. Always consult a qualified healthcare professional for medical decisions.",
    emergencyNotice: "Tovelu does not provide emergency triage. If experiencing severe chest pain, sudden numbness, or shortness of breath, call 112 / 911 immediately.",
    dataPrivacy: "Your health data is end-to-end encrypted under your personal credentials. Tovelu never sells or brokers your personal information.",
  },

  /* Standard Lexicon Vocabulary Mappings (Article 63) */
  lexiconMap: [
    {
      legacy: "You failed your goal",
      tovelu: "You achieved X today. That is progress in the right direction.",
      doctrine: "Zero guilt-based motivation (Article 63)",
    },
    {
      legacy: "Noncompliant patient",
      tovelu: "The routine proved difficult to maintain. Let us adjust the plan.",
      doctrine: "Radical dignity and human respect (Article 16)",
    },
    {
      legacy: "Danger! Fix immediately!",
      tovelu: "This reading is outside the recommended range. Here are proven steps.",
      doctrine: "Calm clinical authority without panic (Article 39)",
    },
    {
      legacy: "100% scientifically proven",
      tovelu: "Supported by high-quality randomized clinical trials.",
      doctrine: "Truth and calibrated certainty (Articles 5 & 37)",
    },
  ],
} as const;
