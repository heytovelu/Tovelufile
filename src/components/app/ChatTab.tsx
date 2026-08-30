import React, { useState, useRef, useEffect } from 'react';
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
      text: "Good afternoon, Ajay. Your liver glycogen stores have been steadily clearing over the past 72 hours, meaning your cells are now tapping visceral fat for fuel.\n\nHow is your energy and digestion feeling right now?",
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

  // Predecided Questions (Rendered UNDER chat, directly above typing bar)
  const predecidedQuestions = [
    'Why am I tired? 3-min fix',
    'Can I have dark chocolate tonight?',
    'Stomach is bloated—what to drink?',
    'Eating Italian / Mexican—how to order?',
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
    <div className="w-full h-full flex flex-col bg-[#0B141A] text-slate-100 overflow-hidden relative select-none">
      {/* 1. FIXED TOP BAR (WhatsApp Style) */}
      <div className="w-full px-3.5 py-2.5 bg-[#1F2C34] border-b border-slate-700/60 flex items-center justify-between shrink-0 z-30 shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Avatar with live online green indicator */}
          <div className="relative shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-[#00FF9D] flex items-center justify-center text-slate-950 font-black text-xs shadow-md">
              TH
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00FF9D] border-2 border-[#1F2C34]" />
          </div>

          {/* Title & Online Status */}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-bold text-slate-100 truncate">
                THAIS Clinical Mentor
              </h2>
              <span className="text-[9px] font-mono text-[#00FF9D] bg-[#00FF9D]/10 px-1.5 py-0.2 rounded border border-[#00FF9D]/30 hidden sm:inline">
                DPHKG
              </span>
            </div>
            <p className="text-[10px] text-[#00FF9D] font-medium leading-tight">
              online • 24/7 metabolic memory
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* History Button (Ajay's Mandate) */}
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="py-1 px-2.5 rounded-xl border border-slate-600 bg-slate-800 hover:border-[#00FF9D] text-slate-200 text-xs font-bold flex items-center gap-1 active:scale-95 transition-all"
            title="Choose any day to see chat"
          >
            <span>📅</span>
            <span>History</span>
          </button>

          {/* Profile Avatar -> Opens YOU */}
          <button
            onClick={onOpenYou}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-200"
            title="Open YOU"
          >
            AJ
          </button>
        </div>
      </div>

      {/* HISTORICAL BANNER (If viewing a past day) */}
      {activeHistoryDay && (
        <div className="px-4 py-1.5 bg-amber-500/20 border-b border-amber-500/40 flex items-center justify-between text-xs text-amber-300 shrink-0 z-20">
          <span className="text-[11px]">📜 Viewing Day {activeHistoryDay} Consultation Transcript</span>
          <button
            onClick={handleReturnToLive}
            className="font-bold underline text-xs hover:text-white"
          >
            Return to Live →
          </button>
        </div>
      )}

      {/* ACTION TOAST */}
      {actionToast && (
        <div className="absolute top-14 left-4 right-4 z-40 p-2 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce shadow-lg">
          {actionToast}
        </div>
      )}

      {/* 2. SCROLLABLE MESSAGES CONTAINER (WhatsApp Style) */}
      <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-2.5 overscroll-contain">
        {/* Date Stamp Separator */}
        <div className="flex justify-center my-1">
          <span className="py-0.5 px-3 rounded-md bg-[#182229] text-[10px] font-mono text-slate-400 border border-slate-800 shadow-sm">
            TODAY • AUGUST 30, 2026
          </span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`relative max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-md ${
                  isUser
                    ? 'bg-[#005C4B] text-[#E9EDEF] rounded-tr-none'
                    : 'bg-[#202C33] text-[#D1D7DB] rounded-tl-none border border-slate-700/40'
                }`}
              >
                {/* Sender Name in Group/Mentor Chat */}
                {!isUser && (
                  <div className="text-[10px] font-bold text-[#00FF9D] mb-1">
                    THAIS Clinical Mentor
                  </div>
                )}

                {/* Message Body */}
                <div className="whitespace-pre-line text-xs font-normal">
                  {msg.text}
                </div>

                {/* In-Message Interactive Action Button */}
                {msg.actionButton && (
                  <div className="mt-2.5 pt-2 border-t border-slate-700/80">
                    <button
                      onClick={() => handleApplyAction(msg.actionButton!)}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500/25 to-[#00FF9D]/25 border border-[#00FF9D]/60 hover:border-[#00FF9D] text-[#00FF9D] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                    >
                      {msg.actionButton.label}
                    </button>
                  </div>
                )}

                {/* Timestamp + WhatsApp Double Checkmark */}
                <div className="flex items-center justify-end gap-1 text-[9px] text-slate-400 mt-1 font-mono">
                  <span>{msg.time}</span>
                  {isUser && <span className="text-[#53BDEB] font-bold">✓✓</span>}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* VOICE AI ANIMATION (When active) */}
      {isVoiceActive && (
        <div className="p-2.5 mx-3 mb-1 rounded-xl bg-[#1F2C34] border border-[#00FF9D]/60 flex items-center justify-between text-xs text-slate-200 shrink-0 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="font-bold text-[#00FF9D]">Listening in Natural Voice...</span>
          </div>
          <button
            onClick={() => setIsVoiceActive(false)}
            className="text-xs font-bold text-slate-400 hover:text-white"
          >
            Done
          </button>
        </div>
      )}

      {/* 3. PREDECIDED QUESTIONS (SHOW UNDER CHAT, NOT ON TOP - Ajay's Mandate) */}
      <div className="px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 bg-[#121B22]/90 border-t border-slate-800/60">
        {predecidedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            className="py-1 px-3 rounded-full border border-slate-700/80 bg-[#1F2C34] hover:border-[#00FF9D]/60 text-[#D1D7DB] hover:text-white text-[11px] font-medium whitespace-nowrap active:scale-95 transition-all shrink-0 shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>

      {/* 4. FIXED TYPING BAR (EXACT WHATSAPP SIZE & LAYOUT - Ajay's Mandate) */}
      <div className="p-2.5 bg-[#1F2C34] border-t border-slate-800/80 shrink-0 z-30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          {/* Main WhatsApp Rounded Pill Input */}
          <div className="flex-1 flex items-center gap-2 bg-[#2A3942] rounded-3xl px-3 py-1.5 border border-slate-700/60 shadow-inner">
            {/* Emoji / Mode Button */}
            <button
              type="button"
              onClick={() => handleSend("Give me a quick 60-second summary of today's progress.")}
              className="text-slate-400 hover:text-slate-200 text-base shrink-0"
              title="Quick Summary"
            >
              😊
            </button>

            {/* WhatsApp Text Input */}
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Message THAIS..."
              className="flex-1 bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none min-w-0"
            />

            {/* Photo / Camera Scan */}
            <button
              type="button"
              onClick={() => handleSend("I uploaded a photo of my meal. Can you verify the food sequencing?")}
              className="text-slate-400 hover:text-slate-200 text-base shrink-0"
              title="Scan Meal / Menu"
            >
              📷
            </button>
          </div>

          {/* WhatsApp Circular Send Button (or Mic Button) */}
          {inputQuery.trim() ? (
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#00A884] hover:bg-[#00A884]/90 text-white flex items-center justify-center shrink-0 shadow-md active:scale-95 transition-all"
              title="Send Message"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsVoiceActive(!isVoiceActive)}
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md active:scale-95 transition-all ${
                isVoiceActive
                  ? 'bg-[#00FF9D] text-slate-950 animate-pulse'
                  : 'bg-[#00A884] text-white hover:bg-[#00A884]/90'
              }`}
              title="Voice AI"
            >
              <span className="text-base">🎙️</span>
            </button>
          )}
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
