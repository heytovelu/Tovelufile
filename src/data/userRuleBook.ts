/**
 * TOVELU USER RULE BOOK (THE OPERATING MANUAL)
 * Location: Section 4 (YOU)
 * Authority: Locked by Founder Ajay on August 29, 2026
 * Governed by: Articles 4, 6, 11, 15, 16, 39, 83 & 86 of the Tovelu Constitution
 */

export interface RuleBookSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  points: {
    heading: string;
    description: string;
  }[];
}

export const TOVELU_USER_RULE_BOOK: RuleBookSection[] = [
  {
    id: 'three_golden_commitments',
    number: 1,
    title: 'The 3 Golden Daily Commitments',
    subtitle: 'This is all it takes to transform your health for life. Less than 4 minutes a day.',
    icon: '✨',
    points: [
      {
        heading: '1. Morning Glance (30 Seconds)',
        description: 'Open the FLOW Day tab when you wake up. Look at your daily calorie & macro targets, and see your 3 to 4 simple tasks for today.'
      },
      {
        heading: '2. Log Your 3 Meals (1 Minute Each)',
        description: 'Whenever you eat Breakfast, Lunch, or Dinner, tap your meal and choose: Scan a photo, Type what you have, or tap Ask AI. THAIS handles all the calorie and macro math for you.'
      },
      {
        heading: '3. The 1-Minute Bedtime Check-In (60 Seconds)',
        description: 'Before you close your eyes, open Tovelu. Reconcile any missed tasks, and answer a 30-second reflection on your physical, mental, and emotional state. THAIS uses this to optimize tomorrow while you sleep.'
      }
    ]
  },
  {
    id: 'what_to_log',
    number: 2,
    title: 'What You Must Log (And What You Can Ignore)',
    subtitle: 'We respect your time. Zero useless tracking. Only log what moves the needle.',
    icon: '📝',
    points: [
      {
        heading: 'What You MUST Log',
        description: 'Your 3 primary meals (Breakfast, Lunch, Dinner), any significant snacks over 150 calories, and completed daily tasks via the tactile swipe slider.'
      },
      {
        heading: 'What You Can IGNORE',
        description: 'Do not waste time weighing every lettuce leaf, pinch of salt, or splash of vinegar. Zero obsessive calorie counting. THAIS is designed for real humans living real lives.'
      },
      {
        heading: 'Swipe to Complete',
        description: 'Always swipe the slider to complete a task or meal. Swiping prevents accidental taps and gives you a tangible, physical dopamine reward.'
      }
    ]
  },
  {
    id: 'when_life_happens',
    number: 3,
    title: 'What to Do When Life Happens (Social Dinners, Travel & Overeating)',
    subtitle: 'Health is never ruined by a single meal or a busy weekend. Math always fixes it.',
    icon: '🍕',
    points: [
      {
        heading: 'If You Overeat at Lunch',
        description: 'Never feel guilty. Never starve yourself. Simply log what you ate, and THAIS will automatically adjust your Dinner portion so you still hit your daily goals.'
      },
      {
        heading: 'If You Are Eating Out at a Restaurant',
        description: 'Open your meal, tap "Scan" or "Manual", and upload a photo of the restaurant menu. THAIS will tell you the #1 best dish to order and how to ask for it.'
      },
      {
        heading: 'If You Go on Vacation or Travel',
        description: 'You can tap your profile in YOU and switch to "Travel Maintenance Mode". THAIS will give you 1 simple rule a day so you can enjoy your trip without stress.'
      }
    ]
  },
  {
    id: 'doctor_visits_and_reports',
    number: 4,
    title: 'Doctor Visits, Hospital Events & Medical Reports',
    subtitle: 'How Tovelu protects you when unexpected illness or treatments occur.',
    icon: '🏥',
    points: [
      {
        heading: 'Upload Any Medical Event',
        description: 'If you visit a doctor, go to a clinic, receive a blood test, get a prescription, or have surgery: go to the HEALTH section and tap "Upload Health Report / Doctor Visit".'
      },
      {
        heading: 'Write in Your Own Human Words',
        description: 'Upload the paper or photo, and write simply: "What problem I had, and what the doctor told me to do."'
      },
      {
        heading: 'THAIS Automatically Adapts Your Plan',
        description: 'THAIS instantly modifies your daily meals and tasks for your recovery period (e.g. swapping workouts for gentle walking, adjusting food for medications) and remembers this event for the rest of your life.'
      }
    ]
  },
  {
    id: 'the_tovelu_mindset',
    number: 5,
    title: 'The Tovelu Mindset: Radical Dignity & Zero Guilt',
    subtitle: 'You are a human being, not a machine. We treat you with unshakeable respect.',
    icon: '🛡️',
    points: [
      {
        heading: 'Progress Over Perfection',
        description: 'Consistency beats perfection every single time. Hitting 80% of your plan for 6 months will transform your life infinitely more than hitting 100% for 1 week and quitting.'
      },
      {
        heading: 'Zero Guilt, Zero Shame',
        description: 'Tovelu will NEVER shame you, show red failure icons, or scold you for missing a day. Returning to Tovelu is always a welcoming, peaceful experience.'
      },
      {
        heading: 'Sovereign Control',
        description: 'Your health data belongs 100% to you. It is encrypted, private, and can be downloaded or permanently deleted at any time with one tap.'
      }
    ]
  }
];
