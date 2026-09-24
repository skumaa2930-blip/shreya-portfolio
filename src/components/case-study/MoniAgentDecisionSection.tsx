import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const QUESTIONS = [
  { id: 'Q1', num: '1.', text: 'Is something actually happening?' },
  { id: 'Q2', num: '2.', text: 'Does the user need to know, or can I handle it?' },
  { id: 'Q3', num: '3.', text: 'How recently was the user nudged?' },
  { id: 'Q4', num: '4.', text: 'What is the risk level of acting vs not acting?' },
  { id: 'Q5', num: '5.', text: "Does this align with the user's stated and revealed preferences?" },
];

const LEVELS = [
  {
    level: 'LEVEL 01',
    title: 'SILENT',
    desc: 'Everything within pattern. State updates. No user contact.',
    isActive: false,
  },
  {
    level: 'LEVEL 02',
    title: 'NUDGE',
    desc: 'Something worth knowing, but not deciding.',
    isActive: false,
  },
  {
    level: 'LEVEL 03',
    title: 'CONFIRM',
    desc: 'System has a plan ready. User approves.',
    isActive: false,
  },
  {
    level: 'LEVEL 04',
    title: 'CHOICE',
    desc: "Two valid paths. The user's values matter.",
    isActive: true, // Olive border and lime label
  },
];

const AGENTS = [
  {
    num: '01',
    title: 'Perception Agent',
    desc: 'Ingests raw SMS, webhooks & cards',
    isHighlighted: false,
  },
  {
    num: '02',
    title: 'Orchestrator Agent',
    desc: 'Directs agent queues & priorities',
    isHighlighted: false,
  },
  {
    num: '03',
    title: 'Planner + Prediction Agent',
    desc: 'Runs daily 30-day survival models',
    isHighlighted: false,
  },
  {
    num: '04',
    title: 'Negotiator + Coordinator Agent',
    desc: 'Reconciles shared flat splits',
    isHighlighted: false,
  },
  {
    num: '05',
    title: 'Execution Agent',
    desc: 'Consented SIP & auto-sweeps',
    isHighlighted: false,
  },
  {
    num: '06',
    title: 'Communication Layer',
    desc: 'Conversational UI & glance cards',
    isHighlighted: false,
  },
  {
    num: '07',
    title: 'Learning Agent',
    desc: 'Refines heuristic weights across every cycle',
    isHighlighted: true, // Olive bg #26291a and olive border #3d4426
  },
];

export const MoniAgentDecisionSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <div
      id="moni-agent-decision-section"
      className="w-full text-[#EDEDED] my-24 sm:my-32 md:my-40 relative"
    >
      <div className="w-full space-y-24 sm:space-y-32 md:space-y-40">
        
        {/* =========================================================================
            BLOCK 1 – Heading (2 lines) & 5 full-width dark rows
            ========================================================================= */}
        <section id="agent-5-questions">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.04] tracking-tight text-[#F5F5EF]"
          >
            Before any action,<br />
            the agent <span className="text-[#C9F14A]">asks these 5 questions</span>
          </motion.h2>

          <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col gap-[18px]">
            {QUESTIONS.map((q, idx) => (
              <motion.div
                key={q.id}
                id={`moni-question-row-${idx + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-[#141414] hover:bg-[#181818] rounded-[24px] min-h-[70px] sm:h-[77px] px-5 sm:px-7 flex items-center gap-4 sm:gap-5 shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition-all duration-200 border border-white/[0.03]"
              >
                <div className="w-[42px] h-[40px] rounded-[8px] bg-[#23291a] border border-[#3a4520] text-[#c9f14a] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {q.id}
                </div>
                <p className="font-hanken text-[#F1F1EC] font-normal text-[15px] sm:text-[17px] md:text-[18px] tracking-[-0.01em]">
                  {q.num} {q.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            BLOCK 2 – Heading (2 lines) & 4 equal dark cards in one row
            ========================================================================= */}
        <section id="when-to-appear-disappear">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.04] tracking-tight text-[#F5F5EF]"
          >
            When to <span className="text-[#C9F14A]">appear.</span><br />
            When to <span className="text-[#C9F14A]">disappear.</span>
          </motion.h2>

          <div className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-1 min-[560px]:grid-cols-2 min-[1000px]:grid-cols-4 gap-4 sm:gap-6">
            {LEVELS.map((item, idx) => (
              <motion.article
                key={item.level}
                id={`moni-level-card-${idx + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`bg-[#141414] rounded-[24px] p-7 min-h-[179px] flex flex-col justify-start shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                  item.isActive
                    ? 'border border-[#3d4426] shadow-[0_0_28px_rgba(61,68,38,0.35)]'
                    : 'border border-transparent hover:border-white/10'
                }`}
              >
                <div
                  className={`font-mono text-[13px] tracking-[0.04em] uppercase mb-5 ${
                    item.isActive ? 'text-[#c9f14a] font-bold' : 'text-[#a3a29b] font-medium'
                  }`}
                >
                  {item.level}
                </div>
                <h3 className="font-syne font-semibold text-xl sm:text-[22px] tracking-[0.03em] uppercase text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-hanken font-light text-[#a3a29b] text-[15px] leading-[1.45]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* =========================================================================
            BLOCK 3 – Heading, Sub-paragraph & Big dark container with 2 columns
            ========================================================================= */}
        <section id="continuous-system-of-agents">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.04] tracking-tight text-[#F5F5EF]"
          >
            A continuous <span className="text-[#C9F14A]">system of agents</span>
          </motion.h2>

          <p className="font-hanken font-light text-[#8a8a86] text-lg sm:text-xl md:text-[22px] leading-[1.35] tracking-[-0.015em] mt-4 max-w-[52ch]">
            That observe, predict, decide, and act in real time all working together in the background.
          </p>

          <div className="mt-9 sm:mt-12 md:mt-16 bg-[#141414] rounded-[36px] sm:rounded-[42px] p-5 sm:p-7 md:p-[38px] grid grid-cols-1 min-[1000px]:grid-cols-[0.72fr_1.28fr] gap-6 sm:gap-8 lg:gap-[38px] shadow-[0_24px_60px_rgba(0,0,0,0.38)] border border-white/[0.03]">
            
            {/* LEFT (~40% width): Vertical list of 7 centred cards on slightly darker bg (#0d0d0d) */}
            <div className="flex flex-col gap-1">
              {AGENTS.map((agent, idx) => (
                <div
                  key={agent.num}
                  id={`agent-list-item-${idx + 1}`}
                  className={`rounded-[18px] py-4 px-3.5 text-center transition-all duration-200 border ${
                    agent.isHighlighted
                      ? 'bg-[#26291a] border-[#3d4426] shadow-[0_0_20px_rgba(61,68,38,0.25)]'
                      : 'bg-[#0d0d0d] border-transparent hover:bg-[#121212]'
                  }`}
                >
                  <div className="font-mono text-[#c9f14a] text-[13px] mb-1.5 font-semibold">
                    {agent.num}
                  </div>
                  <div className="font-syne font-medium text-white text-[15px] mb-1.5 tracking-[0.01em]">
                    {agent.title}
                  </div>
                  <div className="font-mono text-[11.5px] text-[#a3a29b] tracking-[0.02em] leading-snug">
                    {agent.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT (~60% width): Centred Syne title + near-black box (#050505) with diagram & lightbox */}
            <div className="flex flex-col">
              <div className="font-syne font-medium text-white text-center text-lg sm:text-xl md:text-[23px] my-2.5 mb-6 tracking-[0.02em]">
                Tap to open the image
              </div>

              <div
                id="moni-agent-diagram-trigger"
                onClick={() => setIsLightboxOpen(true)}
                title="Tap to open full-screen in lightbox"
                className="group flex-1 min-h-[440px] bg-[#050505] rounded-[18px] overflow-hidden cursor-zoom-in flex items-center justify-center relative border border-white/[0.06] hover:border-[#c9f14a]/35 p-3.5 sm:p-5 transition-all duration-250 shadow-inner"
              >
                {/* Floating zoom indicator hint */}
                <div className="absolute top-3 right-3 z-10 bg-[#23291a]/80 backdrop-blur-sm border border-[#3a4520] text-[#c9f14a] rounded-full p-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* =========================================================================
                    TO SWAP IN YOUR OWN IMAGE:
                    Replace the <ArchitectureDiagramVisual /> below with:
                    <img src="YOUR_IMAGE_PATH" alt="Agent Architecture Diagram" className="w-full h-full object-contain" />
                    ========================================================================= */}
                <ArchitectureDiagramVisual />
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Agent architecture diagram full screen"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[92vh] overflow-y-auto bg-[#090909] border border-[#c9f14a]/35 rounded-[24px] p-4 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.95)] relative"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <span className="font-syne font-medium text-white text-base tracking-wide">
                  Agent System Architecture Diagram
                </span>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="bg-[#23291a] hover:bg-[#333d24] border border-[#3a4520] text-[#c9f14a] font-mono text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>ESC / Close</span>
                </button>
              </div>

              <div className="w-full">
                {/* =========================================================================
                    TO SWAP IN YOUR OWN IMAGE:
                    Replace the <ArchitectureDiagramVisual /> below with:
                    <img src="YOUR_IMAGE_PATH" alt="Agent Architecture Diagram" className="w-full h-auto object-contain rounded-xl" />
                    ========================================================================= */}
                <ArchitectureDiagramVisual isExpanded />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Vector UI representation of the Architecture Diagram
const ArchitectureDiagramVisual: React.FC<{ isExpanded?: boolean }> = ({ isExpanded }) => {
  return (
    <div className={`w-full flex flex-col items-center gap-3 select-none text-left ${isExpanded ? 'scale-100 py-2' : ''}`}>
      
      {/* 01 Perception Node */}
      <div className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-3 sm:p-3.5 text-[#e5e5e0]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
          <span className="font-syne font-semibold text-xs sm:text-[13px] text-white tracking-wide">
            Perception Agent
          </span>
          <span className="font-mono text-[9.5px] text-[#c9f14a] bg-[#191f13] border border-[#2f3a1d] px-2 py-0.5 rounded tracking-wider">
            Always active, combines all awareness signals
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-1.5">
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Screen Context
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Current app, screen text, forms, alerts, cart
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Financial Tracker
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Recent transactions, categorized balances, accounts
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              External Signals
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Merchant pricing, market context, location, time
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              State Synthesis
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Combines everything into unified system state
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 mb-2">
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              User Data Context
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Goals, rules, budgets, risk preferences
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Session Profiler
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Temporal patterns, activity velocity
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Trigger Detection
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Detected anomalies, spending triggers, alerts
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between pt-1.5 border-t border-white/[0.04] text-[9px] gap-2">
          <span className="font-mono bg-[#192013] border border-[#3a4520] text-[#c9f14a] px-2 py-0.5 rounded-full">
            ⚡ Ex: KOKO Bill on Zomato
          </span>
          <span className="font-mono bg-[#141414] border border-[#282828] text-[#a3a29b] px-2 py-0.5 rounded-full">
            Ex: Order Active, 41m wait
          </span>
          <span className="font-mono bg-[#192013] border border-[#3a4520] text-[#c9f14a] px-2 py-0.5 rounded-full">
            To: Orchestrator Agent →
          </span>
        </div>
      </div>

      {/* Downward Arrow */}
      <div className="text-[#c9f14a] font-mono text-sm leading-none opacity-80">↓</div>

      {/* 02 Orchestrator Node */}
      <div className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-3 sm:p-3.5 text-[#e5e5e0]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
          <span className="font-syne font-semibold text-xs sm:text-[13px] text-white tracking-wide">
            Orchestrator Agent
          </span>
          <span className="font-mono text-[9.5px] text-[#c9f14a] bg-[#191f13] border border-[#2f3a1d] px-2 py-0.5 rounded tracking-wider">
            Queue &amp; Execution Coordinator
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 mb-2">
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              INPUTS
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Trigger, System State, Priority weights
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              DECIDES
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Call Predictor? Channel Execution? Split group?
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              OUTPUT
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Execution Plan &amp; Multi-agent routing
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-1 border-t border-white/[0.04]">
          <span className="font-mono text-[9px] bg-[#192013] border border-[#3a4520] text-[#c9f14a] px-2 py-0.5 rounded-full">
            To: Activate Planner / Negotiator
          </span>
        </div>
      </div>

      {/* Split Arrows */}
      <div className="text-[#c9f14a] font-mono text-sm leading-none opacity-80">
        ↙ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↘
      </div>

      {/* 03 & 04 Parallel Nodes */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-3 text-[#e5e5e0]">
          <div className="font-syne font-semibold text-xs sm:text-[12px] text-white tracking-wide mb-2">
            Planner + Prediction Agent
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2 mb-2">
            <div className="font-syne text-[9.5px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              BEHAVIORS
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Runs daily 30-day survival models. Forecasts cash flow trajectory &amp; flag risks.
            </div>
          </div>
          <span className="font-mono text-[8.5px] bg-[#192013] border border-[#3a4520] text-[#c9f14a] px-2 py-0.5 rounded-full inline-block">
            Ex: Recalculate 30-day forecast
          </span>
        </div>

        <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-3 text-[#e5e5e0]">
          <div className="font-syne font-semibold text-xs sm:text-[12px] text-white tracking-wide mb-2">
            Negotiator + Coordinator Agent
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2 mb-2">
            <div className="font-syne text-[9.5px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              BEHAVIORS
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Reconciles shared flat splits, balance fairness &amp; auto-settle options.
            </div>
          </div>
          <span className="font-mono text-[8.5px] bg-[#192013] border border-[#3a4520] text-[#c9f14a] px-2 py-0.5 rounded-full inline-block">
            Ex: Split calculation, flatmate logic
          </span>
        </div>
      </div>

      {/* Converge Arrows */}
      <div className="text-[#c9f14a] font-mono text-sm leading-none opacity-80">
        ↘ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↙
      </div>

      {/* 05 Execution Node */}
      <div className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-3 sm:p-3.5 text-[#e5e5e0]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
          <span className="font-syne font-semibold text-xs sm:text-[13px] text-white tracking-wide">
            Execution Agent
          </span>
          <span className="font-mono text-[9.5px] text-[#c9f14a] bg-[#191f13] border border-[#2f3a1d] px-2 py-0.5 rounded tracking-wider">
            Consented &amp; Verified
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Commerce Executor
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Auto-pay, instant sweep, merchant order
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Social Executor
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Splits sent to flatmates, notification nudges
            </div>
          </div>
          <div className="bg-[#050505] border border-[#181818] rounded-md p-2">
            <div className="font-syne text-[10px] font-semibold text-[#c9f14a] uppercase tracking-wider mb-0.5">
              Communication
            </div>
            <div className="font-hanken text-[9px] text-[#8a8a86] leading-tight">
              Inter-agent state sync, push glance alerts
            </div>
          </div>
        </div>
      </div>

      {/* Downward Arrow */}
      <div className="text-[#c9f14a] font-mono text-sm leading-none opacity-80">↓</div>

      {/* 07 Learning Agent (Mint Gradient) */}
      <div className="w-full bg-gradient-to-b from-[#A5FFC9] to-[#6DE3C0] text-[#0B2B22] border border-[#6DE3C0] rounded-xl p-3.5 sm:p-4 shadow-[0_4px_18px_rgba(109,227,192,0.25)]">
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#06231b]/15">
          <span className="font-syne font-bold text-xs sm:text-[13px] text-[#06231B] tracking-wide">
            Learning Agent (Continuous Adaptation)
          </span>
          <span className="font-mono text-[9.5px] bg-[#06231B] text-[#A5FFC9] px-2 py-0.5 rounded tracking-wider font-semibold">
            Cycle Heuristics
          </span>
        </div>
        <div className="bg-white/40 border border-[#06231b]/15 rounded-md p-2 mb-2">
          <div className="font-syne text-[10px] font-bold text-[#06231B] uppercase tracking-wider mb-0.5">
            Inputs &amp; Outputs
          </div>
          <div className="font-hanken text-[9.5px] text-[#11362B] leading-tight font-medium">
            Predicted vs actual spend, user overrides → Refined decision rules &amp; improved prediction models across every cycle.
          </div>
        </div>
        <div className="font-mono text-[8.5px] sm:text-[9px] bg-white/30 border border-[#06231b]/20 text-[#06231B] px-2.5 py-1 rounded-full inline-block font-semibold">
          ✨ Ex: User approved order despite budget warning → Learn: User prioritizes food quality over budget on weekends
        </div>
      </div>

    </div>
  );
};
