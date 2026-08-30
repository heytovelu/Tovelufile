import React, { useState, useRef, useEffect } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';
import { ChatHistoryDrawer, DailyChatLog } from './ChatHistoryDrawer';

interface Message {
  id: string;
  sender: 'user' | 'thais';
  text: string;
  time: string;
  actionButton?: {
    label: string;
    actionNote: string;
  };
}

interface ChatTabProps {
  onOpenYou: () => void;
  darkMode?: boolean;
}

export const ChatTab: React.FC<ChatTabProps> = ({
  onOpenYou,
  darkMode = true,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'thais',
      text: "Good afternoon, Ajay. Your liver glycogen stores have been steadily clearing over the past 72 hours, meaning your cells are now tapping visceral fat for baseline energy.\n\nHow is your energy and digestion feeling right now?",
      time: '1:45 PM',
    },
    {
      id: 'm2',
      sender: 'user',
      text: "I felt a bit sluggish after my 1 PM meeting, and I am craving something sweet like chocolate.",
      time: '2:10 PM',
    },
    {
      id: 'm3',
      sender: 'thais',
      text: "You never have to starve or feel guilty with Tovelu.\n\nWhen your body transitions to fat burning, brain dopamine receptors signal for rapid glucose. Have 2 squares of 85%+ dark chocolate with 5 raw almonds. The fat and polyphenols will satisfy your dopamine without spiking insulin.",
      time: '2:11 PM',
      actionButton: {
        label: '⚡ Log 2 Squares Dark Chocolate (90 kcal)',
        actionNote: 'Logged 90 kcal low-glycemic satiety snack',
      },
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [activeHistoryDay, setActiveHistoryDay] = useState<number | null>(null);
  const [actionToast, setActionToast] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Context-Aware Quick Prompts
  const quickPrompts = [
    'Why am I feeling sluggish? 3-min fix',
    'Can I have dark chocolate or dessert tonight?',
    'Stomach is bloated—what can I sip right now?',
    "I'm eating Italian / Mexican—what to order?",
    'Adjust my dinner for fewer carbs',
    'How did my lunch affect my blood sugar?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery.trim();
    if (!text) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    // Generate intelligent THAIS response
    setTimeout(() => {
      let replyText = "I have cross-referenced your clinical baseline. Your metabolic rate and organ markers remain in the optimal healing corridor.";
      let actionBtn: { label: string; actionNote: string } | undefined = undefined;

      const q = text.toLowerCase();
      if (q.includes('sluggish') || q.includes('tired') || q.includes('fatigue')) {
        replyText = "Your midday dip is driven by cellular electrolyte balance after your active morning. Drink 350ml water with a pinch of rock salt, and take a 5-minute walk outside. This resets your adrenal cortisol without requiring caffeine.";
        actionBtn = {
          label: '⚡ Log 5-Min Circadian Light Reset',
          actionNote: 'Reset adrenal cortisol via photon exposure',
        };
      } else if (q.includes('chocolate') || q.includes('dessert') || q.includes('sweet')) {
        replyText = "Enjoy 2 squares of 85% dark chocolate with 5 almonds! Pairing it with healthy fats prevents an insulin spike so your fat-burning mode continues uninterrupted tonight.";
        actionBtn = {
          label: '⚡ Log 2 Squares Dark Chocolate (90 kcal)',
          actionNote: 'Logged 90 kcal low-glycemic satiety snack',
        };
      } else if (q.includes('bloated') || q.includes('stomach') || q.includes('gas')) {
        replyText = "Sip 250ml of warm water with fresh crushed ginger. Avoid iced drinks for the next 3 hours to allow your gastric enzymes to decompress your small intestine.";
        actionBtn = {
          label: '⚡ Add Warm Ginger Infusion to Evening',
          actionNote: 'Added carminative infusion for gastric decompression',
        };
      } else if (q.includes('italian') || q.includes('mexican') || q.includes('order')) {
        replyText = "Here is your Restaurant Defense Strategy: 1. Order grilled protein (fish, chicken, or steak). 2. Ask for a double side of leafy greens or broccoli first. 3. Drink 1 glass of sparkling water between cocktails. You will wake up tomorrow with zero water bloat!";
        actionBtn = {
          label: '⚡ Activate Restaurant Defense Protocol',
          actionNote: 'Activated dining out glucose-attenuation protocol',
        };
      } else if (q.includes('dinner') || q.includes('carbs')) {
        replyText = "I can adjust tonight's dinner: replace sweet potato with roasted asparagus and increase salmon protein by 15g. This keeps your 7-day fat loss budget 100% on target.";
        actionBtn = {
          label: '⚡ Apply Dinner Update to Today’s Plan',
          actionNote: 'Updated dinner: -22g carbs, +15g protein',
        };
      }

      const thaisMsg: Message = {
        id: `t-${Date.now()}`,
        sender: 'thais',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButton: actionBtn,
      };

      setMessages((prev) => [...prev, thaisMsg]);
    }, 600);
  };

  const handleApplyAction = (btn: { label: string; actionNote: string }) => {
    setActionToast(`✅ ${btn.actionNote}`);
    setTimeout(() => setActionToast(null), 3000);
  };

  const handleSelectHistoryLog = (log: DailyChatLog) => {
    setActiveHistoryDay(log.dayNumber);
    const converted: Message[] = log.messages.map((m, idx) => ({
      id: `hist-${idx}`,
      sender: m.sender,
      text: m.text,
      time: m.time,
    }));
    setMessages(converted);
  };

  const handleReturnToLive = () => {
    setActiveHistoryDay(null);
    setMessages([
      {
        id: 'm1',
        sender: 'thais',
        text: "Back to live consultation, Ajay. I am active and monitoring today's metabolic signals.",
        time: 'Just now',
      },
    ]);
  };

  return (
    <div className="w-full flex flex-col h-[calc(100vh-145px)] animate-fadeIn">
      {/* 1. TOP HEADER */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-slate-800/80 shrink-0 bg-[#080A0E]/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <HomeostasisLogo size={24} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          <span className="hidden sm:inline text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            DPHKG Active
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* History Button (Ajay's Mandate) */}
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="py-1 px-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:border-[#00FF9D] text-slate-200 text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all"
            title="View Past Day Chat Transcripts"
          >
            <span>📅</span>
            <span>History</span>
          </button>

          {/* Profile Avatar -> Opens YOU */}
          <button
            onClick={onOpenYou}
            className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs shadow-sm"
            title="Open YOU"
          >
            AJ
          </button>
        </div>
      </div>

      {/* HISTORICAL BANNER (If viewing a past day) */}
      {activeHistoryDay && (
        <div className="px-4 py-2 bg-amber-500/15 border-b border-amber-500/30 flex items-center justify-between text-xs text-amber-300 shrink-0">
          <span>📜 Viewing Day {activeHistoryDay} Consultation Transcript</span>
          <button
            onClick={handleReturnToLive}
            className="font-bold underline hover:text-white"
          >
            Return to Live Chat →
          </button>
        </div>
      )}

      {/* ACTION TOAST */}
      {actionToast && (
        <div className="mx-4 mt-2 p-2 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce shrink-0">
          {actionToast}
        </div>
      )}

      {/* 2. CONTEXT-AWARE SMART QUICK PROMPTS */}
      <div className="px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 border-b border-slate-800/60 bg-slate-900/30">
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="py-1 px-2.5 rounded-full border border-slate-800 bg-slate-900 hover:border-[#00FF9D]/60 text-slate-300 hover:text-white text-[11px] font-medium whitespace-nowrap active:scale-95 transition-all shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* 3. CONVERSATION MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
            >
              <div className="flex items-center gap-1 text-[10px] text-slate-500 px-1">
                <span>{isUser ? 'You' : 'THAIS Clinical Mentor'}</span>
                <span>•</span>
                <span>{msg.time}</span>
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  isUser
                    ? 'bg-[#00FF9D] text-slate-950 font-medium rounded-br-none shadow-sm'
                    : 'bg-[#0E1318] text-slate-200 border border-slate-800 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* In-Message Interactive Action Button */}
                {msg.actionButton && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                    <button
                      onClick={() => handleApplyAction(msg.actionButton!)}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-[#00FF9D]/20 border border-[#00FF9D]/60 hover:border-[#00FF9D] text-[#00FF9D] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-[0_0_10px_rgba(0,255,157,0.15)]"
                    >
                      {msg.actionButton.label}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* VOICE AI ANIMATION (When active) */}
      {isVoiceActive && (
        <div className="p-3 mx-4 mb-2 rounded-2xl bg-slate-900 border border-[#00FF9D]/60 flex items-center justify-between text-xs text-slate-200 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="font-bold text-[#00FF9D]">Listening in Natural Voice...</span>
          </div>
          <span className="font-mono text-xs text-slate-400">Speak naturally</span>
          <button
            onClick={() => setIsVoiceActive(false)}
            className="text-xs font-bold text-slate-400 hover:text-white"
          >
            Done
          </button>
        </div>
      )}

      {/* 4. MULTIMODAL INPUT SUITE */}
      <div className="p-3 border-t border-slate-800/80 bg-[#080A0E] shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          {/* Voice AI Button */}
          <button
            type="button"
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
              isVoiceActive
                ? 'border-[#00FF9D] bg-[#00FF9D]/20 text-[#00FF9D]'
                : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
            }`}
            title="Voice AI Listen & Speak"
          >
            🎙️
          </button>

          {/* Photo Scan Attachment Button */}
          <button
            type="button"
            onClick={() => {
              handleSend("I uploaded a photo of my meal. Can you analyze the portion and sequencing?");
            }}
            className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            title="Snap Meal or Menu Photo"
          >
            📷
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask THAIS anything (diet, fatigue, cravings)..."
            className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center transition-all ${
              inputQuery.trim()
                ? 'bg-[#00FF9D] text-slate-950 shadow-[0_0_10px_rgba(0,255,157,0.4)] active:scale-95'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            →
          </button>
        </form>
      </div>

      {/* CHAT HISTORY DRAWER */}
      <ChatHistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onSelectDayLog={handleSelectHistoryLog}
        darkMode={darkMode}
      />
    </div>
  );
};
