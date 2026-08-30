import React, { useState } from 'react';

export interface DailyChatLog {
  dayNumber: number;
  date: string;
  topic: string;
  preview: string;
  messages: {
    sender: 'user' | 'thais';
    text: string;
    time: string;
  }[];
}

interface ChatHistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDayLog: (log: DailyChatLog) => void;
  darkMode?: boolean;
}

export const ChatHistoryDrawer: React.FC<ChatHistoryDrawerProps> = ({
  isOpen,
  onClose,
  onSelectDayLog,
  darkMode = true,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  // Historical Daily Chat Transcripts (Day 1 to Day 14)
  const historyLogs: DailyChatLog[] = [
    {
      dayNumber: 14,
      date: 'Sunday, Aug 30, 2026',
      topic: 'Visceral Fat Lipolysis & Evening Dark Chocolate',
      preview: 'You asked about late-night sweet cravings and liver glycogen depletion.',
      messages: [
        { sender: 'user', text: 'I have a sweet craving right now at 4 PM. Can I have chocolate?', time: '4:12 PM' },
        { sender: 'thais', text: 'You never have to starve with Tovelu. Have 2 squares of 85%+ dark chocolate with 5 almonds. The fat and fiber buffer prevents an insulin spike.', time: '4:12 PM' },
        { sender: 'user', text: 'Why did I crave salt earlier today?', time: '4:15 PM' },
        { sender: 'thais', text: 'Your liver glycogen stores depleted over the last 72 hours. Your adrenals benefit from a pinch of mineral salt in warm water.', time: '4:16 PM' },
      ],
    },
    {
      dayNumber: 13,
      date: 'Saturday, Aug 29, 2026',
      topic: 'Restaurant Defense & Social Wine Protocol',
      preview: 'Discussed ordering strategy at Italian dining: protein first, sparkling water pacing.',
      messages: [
        { sender: 'user', text: "I'm going out for Italian dinner tonight. How do I not ruin my plan?", time: '6:30 PM' },
        { sender: 'thais', text: 'Enjoy your night! Order grilled branzino or steak with a double side of greens. Drink 1 glass of sparkling water between drinks.', time: '6:31 PM' },
      ],
    },
    {
      dayNumber: 12,
      date: 'Friday, Aug 28, 2026',
      topic: 'Post-Lunch Fatigue & Glucose Spike Clearing',
      preview: 'Soleus contraction walk protocol after heavy meeting lunch.',
      messages: [
        { sender: 'user', text: 'Stomach feels heavy and I am exhausted after lunch.', time: '2:15 PM' },
        { sender: 'thais', text: 'Take a brisk 10-minute walk right now. Muscle contractions clear blood glucose via GLUT4 without insulin.', time: '2:16 PM' },
      ],
    },
    {
      dayNumber: 11,
      date: 'Thursday, Aug 27, 2026',
      topic: 'Sleep Onset Latency & Magnesium Glycinate',
      preview: 'Protocol to reduce bedtime racing thoughts from 45 mins to 14 mins.',
      messages: [
        { sender: 'user', text: 'Took 45 mins to fall asleep last night. My brain was buzzing.', time: '9:40 AM' },
        { sender: 'thais', text: 'Turn off overhead white LEDs after 8 PM and take 300mg magnesium glycinate with dinner.', time: '9:41 AM' },
      ],
    },
    {
      dayNumber: 10,
      date: 'Wednesday, Aug 26, 2026',
      topic: 'Travel Adaptation & Airport Protein Blueprint',
      preview: 'Early morning flight nutrition and hydration strategy.',
      messages: [
        { sender: 'user', text: 'Have an early 6 AM flight on Tuesday. What can I eat at the airport?', time: '7:00 PM' },
        { sender: 'thais', text: 'Grab 2 hard-boiled eggs and black coffee or green tea. Avoid airport bagels and pastries.', time: '7:01 PM' },
      ],
    },
    {
      dayNumber: 7,
      date: 'Sunday, Aug 23, 2026',
      topic: 'Week 1 Milestone Victory Celebration',
      preview: 'Review of -3.4 lbs water flush and systolic blood pressure normalization.',
      messages: [
        { sender: 'user', text: 'Stepped on scale: down 3.4 lbs already in 7 days!', time: '8:30 AM' },
        { sender: 'thais', text: 'Congratulations Ajay! This is the systemic fluid and inflammation flush. Week 2 will now access deep visceral fat.', time: '8:31 AM' },
      ],
    },
    {
      dayNumber: 1,
      date: 'Monday, Aug 17, 2026',
      topic: 'Day 1 Launch & 52-Question Clinical Ingestion',
      preview: 'Initial onboarding calibration and baseline macro targets.',
      messages: [
        { sender: 'thais', text: 'Welcome to Tovelu, Ajay. I have locked your baseline: 1,850 kcal target, 145g protein, and gut healing protocols.', time: '7:00 AM' },
        { sender: 'user', text: 'Excited to begin. Let us heal this liver and get my energy back.', time: '7:02 AM' },
      ],
    },
  ];

  const filteredLogs = historyLogs.filter(
    (log) =>
      log.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `day ${log.dayNumber}`.includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-md h-full flex flex-col shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-l border-slate-800' : 'bg-white text-slate-900 border-l border-slate-200'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <div>
              <h2 className="text-sm font-black tracking-tight text-slate-100">Consultation History</h2>
              <p className="text-[11px] text-slate-400">Choose any day to view complete transcript</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-800/80 shrink-0">
          <input
            type="text"
            placeholder="Search by topic, symptom, or Day..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
          />
        </div>

        {/* List of Days */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredLogs.map((log) => (
            <button
              key={log.dayNumber}
              onClick={() => {
                onSelectDayLog(log);
                onClose();
              }}
              className="w-full p-3 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:border-[#00FF9D]/60 hover:bg-slate-800/50 text-left transition-all group active:scale-98"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#00FF9D]">
                  Day {log.dayNumber} • {log.date}
                </span>
                <span className="text-[10px] text-slate-500 font-mono group-hover:text-slate-300">
                  {log.messages.length} messages →
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 group-hover:text-white">
                {log.topic}
              </div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">
                {log.preview}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
