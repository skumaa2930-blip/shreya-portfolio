import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  CreditCard,
  PieChart,
  Bot,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const MoniWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'insights' | 'chat'>('insights');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'moni'; text: string }[]>([
    {
      sender: 'moni',
      text: "Hey Shreya! You're on track to save ₹32,000 this month. Should I automatically allocate ₹8,000 to your Tech Fund?",
    },
  ]);

  const handleSend = (query?: string) => {
    const textToSend = query || chatInput;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "I've checked your cash flow. You have safe buffer room for that!";
      if (textToSend.toLowerCase().includes('dining') || textToSend.toLowerCase().includes('food')) {
        reply = 'Dining spend is at ₹14,200 (21% of monthly spend). That is 6% lower than last month. Nice!';
      } else if (textToSend.toLowerCase().includes('save') || textToSend.toLowerCase().includes('saving')) {
        reply = 'Current savings rate is 20% (₹49,750). On track for your annual goals!';
      } else if (textToSend.toLowerCase().includes('camera') || textToSend.toLowerCase().includes('buy')) {
        reply = 'You can afford the ₹24,000 lens purchase without dipping into your emergency fund.';
      }

      setMessages((prev) => [...prev, { sender: 'moni', text: reply }]);
    }, 600);
  };

  return (
    <div className="w-full rounded-xl bg-[#111114] border border-white/10 overflow-hidden shadow-2xl text-white font-sans text-xs">
      {/* Top OS Window Header */}
      <div className="px-4 py-2.5 bg-[#17171c] border-b border-white/10 flex items-center justify-between font-mono-tech text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-white font-bold tracking-wider">MONI // DESKTOP_V04.2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
          <span className="text-[#ccff00]">WEBSOCKET LIVE</span>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="p-4 sm:p-5 flex flex-col gap-4">
        {/* Top bar with greeting & quick mode toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-editorial text-lg text-white font-bold tracking-tight">Hey Shreya,</h4>
              <span className="text-neutral-400 font-mono-tech text-[11px]">Here's how your money moved this month.</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-3 py-1 rounded text-[11px] font-mono-tech cursor-pointer transition-all ${
                activeTab === 'insights' ? 'bg-[#ccff00] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-3 py-1 rounded text-[11px] font-mono-tech cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'chat' ? 'bg-[#ccff00] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Bot className="w-3 h-3" />
              <span>Ask Moni</span>
            </button>
          </div>
        </div>

        {activeTab === 'insights' ? (
          <>
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Total Balance Card */}
              <div className="p-3.5 rounded-lg bg-neutral-900/90 border border-white/10 relative overflow-hidden">
                <div className="text-[11px] font-mono-tech text-neutral-400 uppercase">Total Balance</div>
                <div className="text-xl sm:text-2xl font-bold font-mono-tech mt-1 text-white">
                  ₹2,48,750.00
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-mono-tech text-[#ccff00]">
                  <TrendingUp className="w-3 h-3" />
                  <span>▲ 8.6% vs last month</span>
                </div>
              </div>

              {/* Monthly Spend Card */}
              <div className="p-3.5 rounded-lg bg-neutral-900/90 border border-white/10 relative overflow-hidden">
                <div className="text-[11px] font-mono-tech text-neutral-400 uppercase">Monthly Spend</div>
                <div className="text-xl sm:text-2xl font-bold font-mono-tech mt-1 text-white">
                  ₹68,420.00
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-mono-tech text-amber-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>▲ 12.3% vs last month</span>
                </div>
              </div>
            </div>

            {/* Middle Section: Spending Breakdown + Cash Flow Chart */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Spending Breakdown */}
              <div className="sm:col-span-5 p-3.5 rounded-lg bg-neutral-900/70 border border-white/10 flex flex-col justify-between">
                <div className="font-mono-tech text-[11px] text-neutral-300 uppercase tracking-wider mb-2">
                  Spending Breakdown
                </div>
                {/* Visual Segment Bar */}
                <div className="h-4 rounded-full overflow-hidden flex w-full my-2 bg-neutral-800">
                  <div style={{ width: '40%' }} className="bg-[#ccff00] h-full" title="Needs 40%" />
                  <div style={{ width: '30%' }} className="bg-sky-400 h-full" title="Wants 30%" />
                  <div style={{ width: '20%' }} className="bg-emerald-400 h-full" title="Savings 20%" />
                  <div style={{ width: '10%' }} className="bg-purple-400 h-full" title="Invest 10%" />
                </div>
                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 mt-2 font-mono-tech text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                    <span className="text-neutral-300">Needs 40%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="text-neutral-300">Wants 30%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-neutral-300">Savings 20%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-neutral-300">Invest 10%</span>
                  </div>
                </div>
              </div>

              {/* Cash Flow Histogram / Sparklines */}
              <div className="sm:col-span-7 p-3.5 rounded-lg bg-neutral-900/70 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono-tech text-[11px] text-neutral-300 uppercase tracking-wider mb-2">
                  <span>Cash Flow Trajectory</span>
                  <span className="text-neutral-400">Income vs Expense</span>
                </div>
                {/* Visual Chart Bars */}
                <div className="flex items-end justify-between h-20 px-2 pt-2 gap-2 border-b border-white/10">
                  {[
                    { month: 'MAY', income: 75, expense: 50 },
                    { month: 'JUN', income: 82, expense: 58 },
                    { month: 'JUL', income: 90, expense: 62 },
                    { month: 'AUG', income: 85, expense: 54 },
                    { month: 'SEP', income: 96, expense: 68 },
                  ].map((item) => (
                    <div key={item.month} className="flex flex-col items-center gap-1 flex-1">
                      <div className="flex items-end gap-1 w-full justify-center h-14">
                        <div
                          style={{ height: `${item.income}%` }}
                          className="w-2 sm:w-2.5 bg-[#ccff00] rounded-t-sm"
                        />
                        <div
                          style={{ height: `${item.expense}%` }}
                          className="w-2 sm:w-2.5 bg-neutral-600 rounded-t-sm"
                        />
                      </div>
                      <span className="font-mono-tech text-[10px] text-neutral-400">{item.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 text-[10px] font-mono-tech text-neutral-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#ccff00]" /> Income
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-neutral-600" /> Expense
                  </span>
                </div>
              </div>
            </div>

            {/* Conversational Floating Agent Banner */}
            <div className="p-3 rounded-lg bg-neutral-900 border border-[#ccff00]/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold font-mono-tech">
                  M
                </div>
                <div>
                  <span className="font-bold text-white">I'm Moni.</span>
                  <span className="text-neutral-400 ml-1.5">Your finance agent. Ask me to forecast any purchase.</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setActiveTab('chat');
                    handleSend('Can I buy that camera lens?');
                  }}
                  className="px-2.5 py-1 rounded bg-neutral-800 text-[11px] font-mono-tech text-neutral-300 hover:text-white hover:border-[#ccff00] border border-white/10 cursor-pointer"
                >
                  "Can I buy camera?"
                </button>
                <button
                  onClick={() => {
                    setActiveTab('chat');
                    handleSend('How are my savings looking?');
                  }}
                  className="px-2.5 py-1 rounded bg-neutral-800 text-[11px] font-mono-tech text-neutral-300 hover:text-white hover:border-[#ccff00] border border-white/10 cursor-pointer"
                >
                  "Savings status"
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Interactive Chat Frame */
          <div className="flex flex-col h-64 justify-between bg-neutral-900/80 rounded-lg p-3 border border-white/10">
            <div className="overflow-y-auto space-y-2 pr-1">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#ccff00] text-black font-medium'
                        : 'bg-neutral-800 text-neutral-200 border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="mt-2 flex items-center gap-2 pt-2 border-t border-white/10"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Moni anything (e.g., 'Dining spend?')"
                className="flex-1 bg-black/60 border border-white/10 rounded px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ccff00]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded bg-[#ccff00] text-black font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Ask</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        )}

        {/* Footer specs */}
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 pt-2 border-t border-white/5">
          <span>FRAME: V04.2_AI_AGENT_DESKTOP</span>
          <span>LATENCY: ~140MS • WEBSOCKET READY</span>
        </div>
      </div>
    </div>
  );
};


