export interface MilestoneData {
  step: number;
  badge: string;
  title: string;
  subtitle: string;
  statInsight: string;
  icon: string;
}

export const MILESTONES: Record<number, MilestoneData> = {
  5: {
    step: 5,
    badge: "Metabolic Baseline Calibrated",
    title: "You're in the top 5% taking action today! 🔥",
    subtitle: "THAIS just computed your Basal Metabolic Rate and caloric burn threshold.",
    statInsight: "83% of people with your baseline achieve noticeable fat loss in their first 14 days.",
    icon: "🔥"
  },
  11: {
    step: 11,
    badge: "Kitchen & Allergy Vault Sealed",
    title: "12,000 foods filtered for your exact plate! 🥑",
    subtitle: "Your dietary values and allergies are now 100% locked out from every future meal recommendation.",
    statInsight: "Zero willpower required: your meals are customized to foods you already love.",
    icon: "🥗"
  },
  16: {
    step: 16,
    badge: "Gut Microbiome Matrix Mapped",
    title: "Root cause of bloating uncovered! 🔬",
    subtitle: "You just revealed the exact timing of your digestion. THAIS knows whether to soothe stomach acid or small bowel bacteria.",
    statInsight: "Resolving gut transit timing reduces afternoon brain fog by up to 65%.",
    icon: "⚡"
  },
  22: {
    step: 22,
    badge: "Physical Somatic Scan 50% Milestone",
    title: "Halfway there! Your body's hidden signals decoded ✨",
    subtitle: "Your tongue, skin tags, and nail patterns gave THAIS clinical clues that standard blood tests often miss.",
    statInsight: "You're moving faster than 92% of users. Keep this incredible momentum going!",
    icon: "✨"
  },
  28: {
    step: 28,
    badge: "Circadian Rhythm & Sleep Clock Synced",
    title: "Deep sleep architecture unlocked! 🌙",
    subtitle: "THAIS now understands your nocturnal cortisol and liver glycogen rhythm. Say goodbye to 3 AM wakeups.",
    statInsight: "Optimizing morning sunlight and evening blue light doubles deep slow-wave sleep in 10 days.",
    icon: "🌙"
  },
  34: {
    step: 34,
    badge: "Cardiovascular Defense Initialized",
    title: "Artery defense & circulation mapped! ❤️",
    subtitle: "Cold hands, blood pressure trends, and fluid retention points have been integrated into your vascular score.",
    statInsight: "Targeted potassium-sodium balance normalizes microvascular capillary flow within 72 hours.",
    icon: "❤️"
  },
  40: {
    step: 40,
    badge: "Neuro-Vigor Engine Activated",
    title: "Brain fog & dopamine loop identified! 🧠",
    subtitle: "Your afternoon crashes and mental focus triggers are now mathematically understood by THAIS.",
    statInsight: "Stable blood sugar sequencing restores clean, calm all-day mental focus.",
    icon: "🚀"
  },
  46: {
    step: 46,
    badge: "Clinical Safety Firewall Certified",
    title: "Almost at the finish line! 🛡️",
    subtitle: "Your medical diagnoses and prescriptions are now protected by our Triple-Lock Safety Firewall.",
    statInsight: "100% medically safe recommendations guaranteed across all 500 conditions.",
    icon: "🛡️"
  },
  51: {
    step: 51,
    badge: "Grand Final Assembly",
    title: "All 52 biological puzzle pieces connected! 🧬",
    subtitle: "THAIS is holding all your data points. Ready to run your full multi-system biological scan.",
    statInsight: "Your personalized One Plan, Two Solutions blueprint is moments away!",
    icon: "🏆"
  }
};
