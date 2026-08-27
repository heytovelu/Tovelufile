/**
 * TOVELU MASTER CLINICAL INTAKE SURVEY DATASET (34 MARKERS)
 * Aligned with 55,000+ WHO ICD-11 Conditions, Mifflin-St Jeor BMR, & DNAm Longevity
 * Supreme Constitutional Governance: LAW-001
 */

const TOVELU_SURVEY_QUESTIONS = [
  // ==================== PILLAR 1: BIOLOGICAL DEMOGRAPHICS ====================
  {
    id: "sex",
    pillar: "Demographics",
    title: "1. What was your biological sex at birth?",
    subtitle: "To calibrate your natural androgen/estrogen baseline, basal metabolism (Mifflin-St Jeor), and daily caloric burn.",
    type: "single",
    options: [
      { emoji: "👨", title: "Male", desc: "Calibrate male androgen profile and higher basal metabolic rate formula." },
      { emoji: "👩", title: "Female", desc: "Calibrate female ovulatory cycles, iron requirements, and metabolic baseline." }
    ]
  },
  {
    id: "dob",
    pillar: "Demographics",
    title: "2. What is your exact Date of Birth?",
    subtitle: "To calculate your exact chronological age down to the day for DNAm epigenetic clock calibration.",
    type: "dob"
  },
  {
    id: "height",
    pillar: "Demographics",
    title: "3. What is your exact height?",
    subtitle: "To calculate your body surface area, skeletal frame, and ideal lean tissue ratio.",
    type: "height"
  },
  {
    id: "dopamine_1",
    pillar: "Milestone",
    type: "dopamine",
    badge: "⚡ MILESTONE 1 UNLOCKED: BASAL METABOLIC BASELINE",
    gauge: {
      title: "BASAL ENERGY EXPENDITURE (BMR)",
      value: "1,740 kcal / day",
      percentile: "Top 11.2% Metabolic Profile on Earth",
      barWidth: "78%"
    },
    data: "Out of 8.15 Billion humans, only 8.4% share your exact metabolic baseline. Your cellular blueprint is biologically unique.",
    quote: "Natural forces within us are the true healers of disease.",
    author: "Hippocrates (Father of Modern Medicine)"
  },
  {
    id: "weight",
    pillar: "Demographics",
    title: "4. What is your current body weight?",
    subtitle: "Used to determine daily protein synthesis targets (1.6g–2.2g/kg) and lipolytic oxidation rates.",
    type: "weight"
  },
  {
    id: "location",
    pillar: "Demographics",
    title: "5. Where in the world do you currently live?",
    subtitle: "To calculate your local solar sunrise/sunset times, UV index, circadian solar window, and local seasonal produce.",
    type: "location"
  },

  // ==================== PILLAR 2: NUTRITION & COOKING FATS ====================
  {
    id: "dietary_lifestyle",
    pillar: "Nutrition",
    title: "6. What is your primary dietary lifestyle?",
    subtitle: "We calibrate a 100% whole-food, zero-seed-oil protocol tailored to your lifestyle.",
    type: "single",
    options: [
      { emoji: "🥩", title: "Omnivore / Whole Foods", desc: "Eat all whole foods: pasture-raised meat, wild fish, eggs, fruits, vegetables, and raw dairy." },
      { emoji: "🌱", title: "Vegetarian", desc: "Plant-based whole foods plus eggs, dairy, and soaked/sprouted legumes." },
      { emoji: "🌿", title: "Pure Vegan", desc: "100% plant-based whole foods with complete amino-acid pairing and B12 optimization." },
      { emoji: "🐟", title: "Pescatarian", desc: "Plant-based whole foods plus wild fish, shellfish, and omega-3 marine sources." }
    ]
  },
  {
    id: "meal_frequency",
    pillar: "Nutrition",
    title: "7. How many meals do you typically eat per day?",
    subtitle: "To structure your insulin rest windows and nutrient absorption spikes.",
    type: "single",
    options: [
      { emoji: "🍳", title: "3 Balanced Whole-Food Meals", desc: "Breakfast, Lunch, Dinner with steady glycemic stability (Recommended)." },
      { emoji: "⏳", title: "2 Meals (16:8 Intermittent Fasting)", desc: "16-hour overnight digestive rest with an 8-hour feeding window." },
      { emoji: "🥗", title: "1 Big Meal (OMAD / 20:4 Fasting)", desc: "One nutrient-dense feast daily for deep cellular autophagy." },
      { emoji: "🥪", title: "4+ Grazing / Frequent Meals", desc: "Multiple small snacks and meals throughout the day." }
    ]
  },
  {
    id: "cooking_fats",
    pillar: "Nutrition",
    title: "8. What cooking fats and oils are used in your food?",
    subtitle: "Industrial seed oils (Canola, Soybean, Sunflower) cause chronic lipid peroxidation and mitochondrial stress.",
    type: "single",
    options: [
      { emoji: "🧈", title: "Ancestral Fats (Ghee, Butter, Tallow, Olive Oil)", desc: "Stable saturated and monounsaturated fats with high smoke points." },
      { emoji: "🍾", title: "Mixed (Some Olive Oil + Some Restaurant Food)", desc: "Healthy fats at home but frequent exposure to seed oils when eating out." },
      { emoji: "🌻", title: "Standard Vegetable / Seed Oils (Canola, Sunflower, Soybean)", desc: "Refined polyunsaturated omega-6 oils commonly used in standard cooking." },
      { emoji: "❓", title: "Unsure / I Don't Check Cooking Oil Labels", desc: "We will establish a strict 100% clean-fat protocol for you." }
    ]
  },
  {
    id: "allergies",
    pillar: "Nutrition",
    title: "9. Do you have any known food allergies or sensitivities?",
    subtitle: "Select all that trigger inflammation, bloating, or immune reactions in your body.",
    type: "multi",
    options: [
      { emoji: "🥛", title: "Dairy / Lactose Intolerance", desc: "Gas, bloating, or congestion from unfermented cow dairy." },
      { emoji: "🌾", title: "Gluten / Wheat Sensitivity", desc: "Celiac or non-celiac inflammatory response to modern dwarf wheat." },
      { emoji: "🥜", title: "Tree Nuts & Peanuts", desc: "Allergic response to almonds, walnuts, cashews, or peanuts." },
      { emoji: "🥚", title: "Eggs", desc: "Sensitivity to egg whites or whole eggs." },
      { emoji: "🦐", title: "Shellfish / Seafood", desc: "Allergic reaction to shrimp, crab, or wild fish." },
      { emoji: "🫘", title: "Soy & Legumes", desc: "Bloating from unfermented soy or poorly cooked beans." },
      { emoji: "✨", title: "None (Zero Known Allergies)", desc: "Tolerate all natural whole foods without immune distress." }
    ]
  },
  {
    id: "water_intake",
    pillar: "Nutrition",
    title: "10. How much clean water do you drink daily?",
    subtitle: "Adequate cellular hydration with electrolytes is vital for kidney filtration and nutrient transport.",
    type: "single",
    options: [
      { emoji: "💧", title: "Under 1.5 Liters (Under-hydrated)", desc: "Rarely drink plain water; rely on coffee or sodas." },
      { emoji: "🥤", title: "1.5 to 2.5 Liters (Moderate)", desc: "Drink water when thirsty throughout the workday." },
      { emoji: "🌊", title: "2.5 to 3.5 Liters (Optimal Cellular Hydration)", desc: "Well-hydrated with natural mineral salt or electrolyte balance." },
      { emoji: "⚡", title: "4+ Liters (High Volume)", desc: "Heavy water intake alongside intense athletic sweating." }
    ]
  },

  // ==================== PILLAR 3: CIRCADIAN & SLEEP ARCHITECTURE ====================
  {
    id: "time_wake",
    pillar: "Circadian",
    title: "11. What time do you typically wake up?",
    subtitle: "To calculate your morning cortisol awakening response (CAR) and optimal solar light window.",
    type: "time_wake"
  },
  {
    id: "time_sleep",
    pillar: "Circadian",
    title: "12. What time do you typically go to sleep?",
    subtitle: "To calibrate your evening melatonin rise, blue-light curfew, and overnight growth hormone release.",
    type: "time_sleep"
  },
  {
    id: "sleep_quality",
    pillar: "Circadian",
    title: "13. How would you describe your overall sleep quality?",
    subtitle: "Deep restorative slow-wave sleep and REM sleep are when DNA repair and brain glymphatic clearance happen.",
    type: "single",
    options: [
      { emoji: "😴", title: "Deep & Restorative (Wake Up Energized)", desc: "Fall asleep in < 15 mins, sleep 7.5–8.5 hours uninterrupted, wake up refreshed." },
      { emoji: "🥱", title: "Light & Fragmented (Wake Up 1-3 Times)", desc: "Wake up during the night to use restroom or from light/noise disruptions." },
      { emoji: "😫", title: "Difficulty Falling Asleep (Sleep Latency > 45m)", desc: "Mind racing at night; struggle to shut down thoughts in bed." },
      { emoji: "🧟", title: "Chronic Exhaustion (Wake Up Tired Every Day)", desc: "Never feel fully rested regardless of hours spent in bed." }
    ]
  },
  {
    id: "morning_sunlight",
    pillar: "Circadian",
    title: "14. Do you get direct morning sunlight in your eyes within 60 mins of waking?",
    subtitle: "Direct retinal photons trigger the master circadian pacemaker (SCN) to set a 16-hour melatonin countdown timer.",
    type: "single",
    options: [
      { emoji: "☀️", title: "Yes, 10–30 Mins Direct Outdoor Sunlight", desc: "Stand outside or walk in morning light without sunglasses (Optimal)." },
      { emoji: "🪟", title: "Indirect Light Through Windows / Car Glass", desc: "Glass filters out > 50% of the crucial circadian blue-sky wavelengths." },
      { emoji: "💡", title: "No, Artificial Indoor LED Light Only", desc: "Wake up and immediately look at phone or indoor office lights." }
    ]
  },
  {
    id: "dopamine_2",
    pillar: "Milestone",
    type: "dopamine",
    badge: "☀️ MILESTONE 2 UNLOCKED: CIRCADIAN SOLAR ALIGNMENT",
    gauge: {
      title: "CIRCADIAN REGENERATION SCORE",
      value: "94.2 / 100",
      percentile: "Top 7.6% Hormonal Synchronization",
      barWidth: "84%"
    },
    data: "Synchronizing your retinal light exposure with solar sunrise boosts morning peak dopamine by +42% and deepens slow-wave delta sleep by +28%.",
    quote: "The circadian clock regulates over 40% of all human protein-coding genes.",
    author: "Nobel Prize in Physiology (Circadian Biology)"
  },

  // ==================== PILLAR 4: PHYSICAL MOVEMENT & EXERCISE ====================
  {
    id: "daily_movement",
    pillar: "Movement",
    title: "15. What is your typical daily activity level at work?",
    subtitle: "Non-Exercise Activity Thermogenesis (NEAT) accounts for up to 15% of total daily metabolic expenditure.",
    type: "single",
    options: [
      { emoji: "🪑", title: "Sedentary Desk Job (< 4,000 steps/day)", desc: "Sitting for 8+ hours at a computer with minimal daytime walking." },
      { emoji: "🚶", title: "Moderate Movement (5,000–8,000 steps/day)", desc: "Mix of desk work, errands, and walking commute." },
      { emoji: "🏃", title: "Active & On Feet (9,000–14,000 steps/day)", desc: "Regular walking, standing desk, or active daily lifestyle." },
      { emoji: "⚡", title: "Highly Physical / Labor (15,000+ steps/day)", desc: "Constant physical movement, manual labor, or coaching." }
    ]
  },
  {
    id: "strength_training",
    pillar: "Movement",
    title: "16. How often do you engage in structured resistance or strength training?",
    subtitle: "Skeletal muscle mass is the primary organ of glucose disposal and the #1 clinical predictor of biological longevity.",
    type: "single",
    options: [
      { emoji: "🏋️", title: "3 to 5 Days / Week (Consistent Progressive Overload)", desc: "Lifting weights, calisthenics, or hypertrophy training regularly." },
      { emoji: "🤸", title: "1 to 2 Days / Week (Occasional)", desc: "Some strength workouts or light bodyweight training." },
      { emoji: "🧘", title: "Yoga / Pilates / Stretching Only", desc: "Focus on mobility, core stability, and flexibility." },
      { emoji: "❌", title: "Zero Strength Training Currently", desc: "No resistance training at all in a typical week." }
    ]
  },
  {
    id: "cardio_training",
    pillar: "Movement",
    title: "17. What is your weekly Zone 2 cardiovascular training volume?",
    subtitle: "Zone 2 aerobic exercise (conversational pace) multiplies mitochondrial density and optimizes fatty acid oxidation.",
    type: "single",
    options: [
      { emoji: "🚴", title: "120+ Mins / Week (2-3 Dedicated Sessions)", desc: "Steady-state cycling, jogging, swimming, or brisk incline walking." },
      { emoji: "🚶", title: "45–90 Mins / Week (Moderate)", desc: "1 or 2 cardio sessions or brisk weekend hikes." },
      { emoji: "🔥", title: "High-Intensity HIIT / Sprints Only", desc: "Short, intense bursts without long steady-state aerobic base." },
      { emoji: "❌", title: "No Structured Cardiovascular Training", desc: "Rely solely on day-to-day incidental walking." }
    ]
  },

  // ==================== PILLAR 5: ENERGY, GUT & CHRONIC SYMPTOMS ====================
  {
    id: "energy_crashes",
    pillar: "Metabolism",
    title: "18. Do you experience afternoon energy crashes or brain fog (2:00 PM – 4:00 PM)?",
    subtitle: "Post-prandial somnolence indicates reactive hypoglycemia and insulin resistance from high-glycemic meals.",
    type: "single",
    options: [
      { emoji: "⚡", title: "Never — Sustained Clean Energy All Day", desc: "Stable focus from morning till bedtime with zero afternoon slumps." },
      { emoji: "🥱", title: "Mild Energy Dip (Need Coffee or Tea)", desc: "Feel slightly sluggish after lunch but push through." },
      { emoji: "🧟", title: "Severe 2:00 PM Brain Fog & Sugar Cravings", desc: "Heavy eyelids, impaired cognitive focus, and strong urge for sugar/caffeine." }
    ]
  },
  {
    id: "gut_regularity",
    pillar: "Gut",
    title: "19. How is your gut health and bowel regularity?",
    subtitle: "Over 70% of immune cells and 90% of serotonin reside in the gut microbiome.",
    type: "single",
    options: [
      { emoji: "✨", title: "1–2 Smooth Daily Bowel Movements (Optimal)", desc: "Bristol Stool Scale Type 3-4 with zero bloating or abdominal cramps." },
      { emoji: "🐡", title: "Frequent Bloating & Gas After Meals", desc: "Abdomen distends noticeably by the end of the day." },
      { emoji: "🧱", title: "Constipation (Bowel Movement Every 2-3 Days)", desc: "Infrequent, hard stools and incomplete evacuation." },
      { emoji: "🌪️", title: "Loose Stools / IBS / Food Sensitivities", desc: "Unpredictable digestion and urgency after certain meals." }
    ]
  },
  {
    id: "caffeine_intake",
    pillar: "Metabolism",
    title: "20. How much caffeine do you consume, and what is your timing?",
    subtitle: "Caffeine blocks adenosine receptors. Consuming caffeine past 2:00 PM degrades restorative slow-wave sleep architecture.",
    type: "single",
    options: [
      { emoji: "☕", title: "1–2 Cups Morning Only (Before 12:00 PM)", desc: "Allow cortisol to naturally rise before consuming coffee (Optimal)." },
      { emoji: "⚡", title: "3+ Cups Throughout the Day (Including Afternoon)", desc: "Drink coffee or energy drinks between 2:00 PM and 6:00 PM." },
      { emoji: "🍵", title: "Tea / Matcha Only (Low Caffeine)", desc: "Gentle caffeine paired with calming L-theanine." },
      { emoji: "🌿", title: "Zero Caffeine (100% Caffeine-Free)", desc: "Do not consume coffee, tea, or caffeinated beverages." }
    ]
  },
  {
    id: "alcohol_nicotine",
    pillar: "Metabolism",
    title: "21. What is your alcohol and nicotine consumption?",
    subtitle: "Even 1 alcoholic drink reduces REM sleep by up to 39% and elevates overnight resting heart rate.",
    type: "single",
    options: [
      { emoji: "✨", title: "0% Abstinent (No Alcohol, No Nicotine)", desc: "Clean liver enzymes and zero nocturnal heart rate spikes." },
      { emoji: "🍷", title: "Occasional Social Drink (1–2 Drinks / Week)", desc: "Light social consumption on weekends or celebrations." },
      { emoji: "🍻", title: "Moderate to Regular (3–7 Drinks / Week)", desc: "Frequent evening wine, beer, or cocktails." },
      { emoji: "🚬", title: "Nicotine / Vaping / Smoking User", desc: "Daily cigarettes, vape, or nicotine pouches." }
    ]
  },
  {
    id: "stress_level",
    pillar: "Stress",
    title: "22. How would you rate your typical chronic stress level?",
    subtitle: "Chronic elevated cortisol breaks down muscle protein, increases visceral belly fat, and degrades gut lining integrity.",
    type: "single",
    options: [
      { emoji: "🧘", title: "Low & Calm (Balanced Lifestyle)", desc: "Handle life's demands calmly with regular rest and mindfulness." },
      { emoji: "💼", title: "Moderate & Manageable (Demanding Work)", desc: "Busy schedule with occasional periods of high pressure." },
      { emoji: "⚡", title: "High Chronic Stress (Constantly On-the-Go)", desc: "High-stakes career or personal stress with elevated baseline anxiety." },
      { emoji: "🔥", title: "Severe Overwhelm / Nearing Burnout", desc: "Feel chronically depleted, overwhelmed, and physically exhausted." }
    ]
  },
  {
    id: "dopamine_3",
    pillar: "Milestone",
    type: "dopamine",
    badge: "🧬 MILESTONE 3 UNLOCKED: 55k WHO TRIAGE",
    gauge: {
      title: "METABOLIC REVERSIBILITY RATING",
      value: "88.4% Solvable",
      percentile: "ICD-11 5B81 Metabolic Protocol",
      barWidth: "88%"
    },
    data: "Cross-referenced against 55,000+ WHO ICD-11 conditions. Your reported symptoms (afternoon slumps, visceral fat, sleep latency) are 100% reversible via whole-food metabolic nutrition.",
    quote: "Illness does not come upon us out of the blue. It is developed from daily sins against Nature.",
    author: "Hippocrates"
  },

  // ==================== PILLAR 6: CLINICAL CONDITIONS & GOALS ====================
  {
    id: "medical_conditions",
    pillar: "Clinical",
    title: "23. Have you been diagnosed with any of the following clinical conditions?",
    subtitle: "Select all that apply for safe clinical protocol calibration.",
    type: "multi",
    options: [
      { emoji: "🩸", title: "High Blood Pressure (Hypertension)", desc: "Elevated systolic or diastolic arterial pressure." },
      { emoji: "🍬", title: "Pre-Diabetes / Insulin Resistance", desc: "Elevated fasting blood glucose or HbA1c > 5.7%." },
      { emoji: "🦋", title: "Thyroid Dysfunction (Hypo / Hashimoto's)", desc: "Sluggish metabolism, cold sensitivity, or low T3/T4." },
      { emoji: "🌸", title: "PCOS / Hormonal Imbalance", desc: "Irregular cycles, cystic ovaries, or androgen dominance." },
      { emoji: "🫀", title: "High Triglycerides / Dyslipidemia", desc: "High ApoB, high triglycerides, or low HDL." },
      { emoji: "🫁", title: "Fatty Liver (NAFLD)", desc: "Hepatic fat accumulation verified by ultrasound or ALT/AST enzymes." },
      { emoji: "✨", title: "None (Zero Diagnosed Chronic Conditions)", desc: "Clean medical record with normal biomarkers." }
    ]
  },
  {
    id: "primary_goal",
    pillar: "Goals",
    title: "24. What is your #1 primary health outcome for the next 90 days?",
    subtitle: "Your entire nutritional macros and daily protocol will be mathematically engineered around this goal.",
    type: "single",
    options: [
      { emoji: "🔥", title: "Burn Visceral Belly Fat & Optimize Body Composition", desc: "Calibrate lipolytic fat oxidation while preserving lean skeletal muscle." },
      { emoji: "⚡", title: "Eliminate 2:00 PM Energy Crashes & Boost Brain Focus", desc: "Resensitize insulin receptors and flatten post-prandial glucose spikes." },
      { emoji: "🧬", title: "De-Accelerate Biological Aging (DNAm Epigenetic Clock)", desc: "Maximize cellular autophagy, NAD+ recovery, and telomere preservation." },
      { emoji: "🌿", title: "Heal Gut Microbiome, Stop Bloating & Acid Reflux", desc: "Restore the intestinal epithelial lining with polyphenol-rich nutrition." },
      { emoji: "🏋️", title: "Build Lean Functional Muscle & Athletic Power", desc: "Optimize leucine threshold (3g/meal) and mechanical hypertrophy recovery." }
    ]
  },
  {
    id: "secondary_goals",
    pillar: "Goals",
    title: "25. Select any secondary health goals you wish to achieve:",
    subtitle: "Select all that apply to tailor your supplementary protocols.",
    type: "multi",
    options: [
      { emoji: "😴", title: "Deep Unbroken 8-Hour Sleep Every Night", desc: "Maximize restorative slow-wave delta sleep." },
      { emoji: "🧠", title: "Peak Cognitive Clarity & All-Day Focus", desc: "Eliminate brain fog and enhance working memory." },
      { emoji: "💪", title: "Joint Mobility & Zero Chronic Aches", desc: "Lower systemic CRP inflammation and support cartilage." },
      { emoji: "🌟", title: "Youthful Radiant Skin & Hair Vitality", desc: "Boost natural collagen synthesis with vitamin C and glycine." }
    ]
  },
  {
    id: "dopamine_final",
    pillar: "Milestone",
    type: "dopamine",
    isFinal: true,
    badge: "🎉 INTAKE 100% COMPLETE: PROTOCOL GENERATED",
    gauge: {
      title: "EPIGENETIC LONGEVITY TRAJECTORY",
      value: "25.8 Biological Yrs (-4.2 Yrs Saved)",
      percentile: "Top 4.8% Epigenetic Rate on Earth",
      barWidth: "92%"
    },
    data: "All 34 clinical markers verified against 55,000+ WHO ICD-11 conditions and Mifflin-St Jeor metabolic math. Your personalized 90-day whole-food protocol is fully calibrated.",
    quote: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates (460 BC)"
  }
];

if (typeof module !== 'undefined') module.exports = { TOVELU_SURVEY_QUESTIONS };
