import React, { useState } from 'react';
import { Database, Cpu, Brain, ShieldAlert, Sparkles, ArrowRight, Code, Layers } from 'lucide-react';

export const MoniArchitecture: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      id: '01',
      title: 'Stream Ingestion & Entity Resolution',
      tagline: 'Translating noisy financial logs into human meaning',
      icon: Database,
      input: 'SMS: "INR 450.00 debited via UPI to POS*BK-BLR-8921 on 24-Oct"',
      process: 'Entity Resolution Engine cross-references merchant GST registry and geographical terminal metadata.',
      output: 'Normalized Entity: "Blue Tokai Coffee Roasters (Koramangala) · Category: Discretionary / Dining · ₹450.00"',
      codeHighlight: `{
  "merchant": "Blue Tokai",
  "category": "DISCRETIONARY_DINING",
  "amount": 450.00,
  "confidence": 0.984
}`,
    },
    {
      id: '02',
      title: 'Temporal Cash Flow Engine',
      tagline: 'Modeling recurring commitments and burn velocity',
      icon: Cpu,
      input: 'Normalized transaction stream across 3 accounts + 2 credit cards',
      process: 'Recurrent time-series analysis computes salary inflow cadence, fixed bills, and velocity of discretionary spend.',
      output: 'Committed obligations over next 14 days: ₹38,400. Remaining safe daily liquidity: ₹2,840.',
      codeHighlight: `{
  "committed_outflows": 38400,
  "days_to_salary": 9,
  "safe_daily_spend": 2840.50,
  "buffer_health": "EXCELLENT"
}`,
    },
    {
      id: '03',
      title: 'Vector Context Memory Graph',
      tagline: 'Remembering what matters to the human',
      icon: Brain,
      input: 'User goals: "Save for Sony lens (₹24,000)" & "Maintain ₹1.5L Emergency buffer"',
      process: 'Semantic vector graph maps every new discretionary purchase against user aspirations and emotional priorities.',
      output: 'Dynamic goal weights: Discretionary dining is flexible (-15%), Tech goal is protected (100%).',
      codeHighlight: `{
  "primary_goal": "Sony A7IV Lens",
  "goal_target": 24000,
  "goal_current": 18500,
  "priority_rank": "HIGH"
}`,
    },
    {
      id: '04',
      title: 'The Deterministic Math Guardrail',
      tagline: 'Why Moni never lets an LLM do financial arithmetic',
      icon: ShieldAlert,
      input: 'Candidate advice from conversational intent parser',
      process: 'Strict deterministic arithmetic checker validates balances, interest, and liquidity deltas before any text is output.',
      output: 'VERIFIED: Zero hallucinations. Mathematical accuracy is guaranteed at the runtime boundary.',
      codeHighlight: `// Runtime Deterministic Guardrail
assert(calculated_safe_spend === (liquid_cash - committed - goal_reserve) / days);
// Pass exact validated JSON facts to generative synthesis`,
    },
    {
      id: '05',
      title: 'Generative UI Synthesis',
      tagline: 'Not just a wall of text: generative interactive widgets',
      icon: Sparkles,
      input: 'Validated financial facts + conversational response intent',
      process: 'Component generator synthesizes interactive card widgets with embedded slider simulators and 1-tap action buttons.',
      output: 'Rendered Cockpit Card with live haptic slider and instant transfer authorization.',
      codeHighlight: `{
  "widget": "PurchaseSimulatorCard",
  "safe_to_buy": true,
  "daily_delta": -800,
  "action_chip": "Approve Allocation"
}`,
    },
  ];

  const current = steps[selectedStep];

  return (
    <section id="moni-system" className="py-20 md:py-28 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/[0.08]">
      <div id="moni-architecture" />
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
          <span>03 / SYSTEM ARCHITECTURE</span>
          <span className="text-neutral-500">•</span>
          <span>THE AUTONOMOUS AGENT LOOP</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight leading-tight max-w-4xl">
          How Moni Thinks:
          <br />
          <span className="text-[#D4F34A]">Deterministic Core, Empathetic Surface.</span>
        </h2>

        <p className="mt-5 text-neutral-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
          The foundational engineering and design rule of Moni: <strong className="text-white">Never let a Language Model do financial arithmetic.</strong> LLMs
          are brilliant at conversational empathy and parsing intent, but prone to math hallucinations. Moni strictly decouples
          the linguistic reasoning layer from the deterministic math engine.
        </p>
      </div>

      {/* 5-Step Pipeline Progression Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = selectedStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px] ${
                isActive
                  ? 'bg-[#1C1B22] border-[#D4F34A] text-white shadow-[0_0_20px_rgba(212,243,74,0.15)]'
                  : 'bg-[#121215] border-white/10 text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-syne text-xs font-bold">{s.id}</span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4F34A]' : 'text-neutral-500'}`} />
              </div>
              <div>
                <div className="font-syne text-xs font-bold uppercase tracking-tight line-clamp-2 mt-2">
                  {s.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep Dive Inspector */}
      <div className="rounded-2xl bg-[#141418] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A]">
              STAGE {current.id} DEEP DIVE
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white font-normal uppercase tracking-tight mt-1">
              {current.title}
            </h3>
            <p className="text-sm text-neutral-400 font-sans mt-1">
              {current.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-syne text-neutral-400">
            <span>PIPELINE VELOCITY:</span>
            <span className="text-emerald-400 font-bold">&lt; 140ms END-TO-END</span>
          </div>
        </div>

        {/* 3-Column Execution Matrix: Raw Input -> Logic Process -> Verified Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Left: Input & Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[10px] font-syne uppercase text-neutral-400 font-bold tracking-wider mb-1.5">
                STEP INPUT:
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-300 bg-white/5 p-3 rounded-lg border border-white/5">
                {current.input}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[10px] font-syne uppercase text-[#D4F34A] font-bold tracking-wider mb-1.5">
                EXECUTION LOGIC:
              </div>
              <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
                {current.process}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#D4F34A]/5 border border-[#D4F34A]/25">
              <div className="text-[10px] font-syne uppercase text-[#D4F34A] font-bold tracking-wider mb-1.5">
                VERIFIED OUTCOME:
              </div>
              <p className="text-xs sm:text-sm font-sans text-white font-semibold leading-relaxed">
                {current.output}
              </p>
            </div>
          </div>

          {/* Right: Code Schema / JSON Fact representation */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl bg-[#1A1A22] border-t border-x border-white/10 text-[10px] font-syne uppercase text-neutral-400 font-bold tracking-wider">
              <span>SYSTEM SCHEMA // PAYLOAD</span>
              <span className="text-[#D4F34A]">JSON FACT</span>
            </div>
            <pre className="flex-1 p-4 rounded-b-xl bg-[#0C0C0E] border border-white/10 font-mono text-xs text-emerald-300/90 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
              {current.codeHighlight}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

