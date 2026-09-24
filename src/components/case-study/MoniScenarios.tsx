import React, { useState } from 'react';
import { ShoppingBag, Wine, ArrowRightLeft, Sparkles, Check, ArrowRight, Shield } from 'lucide-react';

export const MoniScenarios: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: 'scenario-1',
      badge: 'SCENARIO 01',
      title: 'Context-Aware Purchase Feasibility',
      subtitle: '"Can I afford this right now without panic?"',
      icon: ShoppingBag,
      userPrompt: 'Hey Moni, I really want to buy this Sony 35mm f/1.4 lens for ₹1,10,000. Can I do it?',
      moniVerdict: 'Safe to proceed with minor trade-off.',
      moniVerdictType: 'safe',
      agentResponse:
        "Yes, you can afford it! Your ₹1,50,000 emergency fund remains 100% untouched. Your daily discretionary envelope will temporarily adjust from ₹2,840 to ₹2,040 for the next 14 days.",
      recommendation:
        'Alternative: Your client invoice of ₹45,000 clears in 11 days. If you wait until then, your daily buffer will barely budge.',
      metrics: [
        { label: 'Emergency Fund', val: '₹1,50,000 (Protected)', status: 'text-emerald-400' },
        { label: 'Daily Buffer Impact', val: '-₹800/day for 14d', status: 'text-amber-400' },
        { label: 'Goal Delay', val: '0 Days (No delay)', status: 'text-[#D4F34A]' },
      ],
    },
    {
      id: 'scenario-2',
      badge: 'SCENARIO 02',
      title: 'The Friday Night Envelope',
      subtitle: 'Proactive weekend boundary without guilt',
      icon: Wine,
      userPrompt: 'Friday 5:30 PM — Ambient Briefing Triggered',
      moniVerdict: 'Weekend Dining Envelope: ₹4,800',
      moniVerdictType: 'optimal',
      agentResponse:
        "Happy Friday, Shreya! You spent ₹1,400 less on weekday lunches this week. That rolled over directly into your weekend envelope. You have ₹4,800 to enjoy dinner and drinks guilt-free.",
      recommendation:
        'All recurring bills for next Monday are already locked in escrow. Go have fun.',
      metrics: [
        { label: 'Rollover Savings', val: '+₹1,400 Added', status: 'text-emerald-400' },
        { label: 'Monday Escrow', val: '100% Pre-funded', status: 'text-[#D4F34A]' },
        { label: 'Guilt Factor', val: 'Zero', status: 'text-white' },
      ],
    },
    {
      id: 'scenario-3',
      badge: 'SCENARIO 03',
      title: 'Autonomous Float Rebalancing',
      subtitle: 'Putting idle cash to work with 1-tap confirmation',
      icon: ArrowRightLeft,
      userPrompt: 'Day 26: Cash balance analysis indicates surplus float',
      moniVerdict: 'Opportunity: ₹28,000 idle cash detected',
      moniVerdictType: 'action',
      agentResponse:
        "You have ₹28,000 sitting in your 2.5% checking account beyond your safe operational buffer. Should I transfer ₹20,000 into your 7.1% Liquid Emergency Yield?",
      recommendation:
        'This earns an extra ₹1,420 annually with instant 24/7 withdrawal access.',
      metrics: [
        { label: 'Idle Cash Detected', val: '₹28,000', status: 'text-amber-400' },
        { label: 'Yield Delta', val: '2.5% → 7.1%', status: 'text-emerald-400' },
        { label: 'Approval Required', val: '1-Tap Confirmation', status: 'text-[#D4F34A]' },
      ],
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section id="moni-scenarios" className="py-20 md:py-28 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
          <span>04 / INTERACTION SCENARIOS</span>
          <span className="text-neutral-500">•</span>
          <span>REAL-WORLD APPLICATION</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight leading-tight max-w-4xl">
          Three Moments Where Moni
          <br />
          <span className="text-[#D4F34A]">Replaces Fear with Calm Guidance.</span>
        </h2>

        <p className="mt-5 text-neutral-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
          Design is proven at the edge cases of human emotion. Here is how Moni behaves during high-stress
          purchases, casual weekend unwinding, and wealth optimization.
        </p>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {scenarios.map((sc, idx) => {
          const Icon = sc.icon;
          const isActive = activeScenario === idx;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#181820] border-[#D4F34A] shadow-[0_0_25px_rgba(212,243,74,0.15)] text-white'
                  : 'bg-[#121215] border-white/10 text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-syne font-bold uppercase tracking-wider text-[#D4F34A]">
                  {sc.badge}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4F34A]' : 'text-neutral-500'}`} />
              </div>

              <div>
                <h4 className="font-display text-xl text-white font-normal leading-tight mb-1">
                  {sc.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans">{sc.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Scenario Stage */}
      <div className="rounded-3xl bg-[#131317] border border-white/15 p-6 sm:p-9 md:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Mobile Phone Simulation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] rounded-[36px] bg-[#0E0E11] border-[4px] border-[#2B2B33] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              {/* Dynamic island / speaker bar */}
              <div className="w-24 h-4 bg-[#1B1B22] rounded-full mx-auto mb-4" />

              {/* Chat Thread */}
              <div className="space-y-3 font-sans text-xs">
                {/* User Message */}
                <div className="p-3 rounded-2xl rounded-tr-none bg-[#D4F34A] text-black font-semibold ml-auto max-w-[85%] leading-snug">
                  {current.userPrompt}
                </div>

                {/* Moni Agent Response */}
                <div className="p-3.5 rounded-2xl rounded-tl-none bg-[#1A1A22] text-neutral-200 border border-white/10 space-y-2 leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[10px] font-syne font-bold uppercase text-[#D4F34A]">
                    <Sparkles className="w-3 h-3" />
                    <span>MONI EVALUATION</span>
                  </div>

                  <p>{current.agentResponse}</p>

                  <div className="pt-2 border-t border-white/10 text-[11px] text-[#2DD4BF] font-sans">
                    {current.recommendation}
                  </div>
                </div>

                {/* One Tap Action Button */}
                <div className="pt-2">
                  <button className="w-full py-2.5 rounded-xl bg-[#D4F34A] hover:bg-[#e2ff62] text-black font-syne text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Confirm Decision with Moni</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Design Rationale & Metric Indicators */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-syne font-bold uppercase tracking-widest text-[#D4F34A]">
                UX RATIONALE & PSYCHOLOGICAL GOAL
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white font-normal uppercase tracking-tight mt-1">
                {current.title}
              </h3>
              <p className="mt-3 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                Notice how Moni avoids binary judgment. Instead of an aggressive "No, you're breaking your budget"
                or a passive "It's your money", Moni acts as a clear-eyed advisor: showing the exact mechanical
                trade-offs and presenting actionable compromises.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[10px] font-syne uppercase text-neutral-400 font-bold">
                    {m.label}
                  </div>
                  <div className={`text-base font-bold mt-1 font-sans ${m.status}`}>
                    {m.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Takeaway Banner */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#D4F34A] shrink-0 mt-0.5" />
              <div className="text-xs font-sans text-neutral-300 leading-relaxed">
                <strong className="text-white">Design Principle:</strong> Financial transparency is only
                useful if it is paired with clear choices. Information without agency creates panic;
                information with clear levers creates calm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

