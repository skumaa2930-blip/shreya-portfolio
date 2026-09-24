import React from 'react';
import { Award, TrendingUp, Users, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface MoniOutcomesLearningsProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export const MoniOutcomesLearnings: React.FC<MoniOutcomesLearningsProps> = ({
  onBack,
  onNextProject,
}) => {
  return (
    <section id="moni-learnings" className="py-20 md:py-28 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/[0.08]">
      <div id="moni-impact" />
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
          <span>06 / OUTCOMES & REFLECTIONS</span>
          <span className="text-neutral-500">•</span>
          <span>EVALUATION & BEYOND</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight leading-tight max-w-4xl">
          Recognition & Real-World Impact.
        </h2>

        <p className="mt-5 text-neutral-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
          From winning national recognition at Samsung PRISM to measuring qualitative anxiety relief
          in everyday testers, here is what Moni accomplished and what building it taught me.
        </p>
      </div>

      {/* Recognition Card & Metrics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
        {/* Left: Hackathon Award Feature Card */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-[#141418] border border-[#D4F34A]/50 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4F34A]/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-[#D4F34A] mb-4">
              <Award className="w-5 h-5" />
              <span className="font-syne text-xs font-extrabold uppercase tracking-widest">
                NATIONAL HACKATHON RECOGNITION
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              Runner Up // Samsung PRISM
            </h3>

            <p className="mt-4 text-sm text-neutral-300 font-sans leading-relaxed">
              Selected out of 240+ national project teams across India. Evaluated by senior Samsung
              engineering directors and design leadership for novel integration of autonomous conversational
              agents paired with zero-hallucination deterministic financial pipelines.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-syne text-xs text-neutral-400">
            <span>TRACK: AI & FINTECH INNOVATION</span>
            <span className="text-[#D4F34A] font-bold">RANK: #02 NATIONWIDE</span>
          </div>
        </div>

        {/* Right: 3 Key Usability Test Metrics */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
            <div className="text-[10px] font-syne uppercase tracking-wider text-neutral-400 font-bold">
              ANXIETY REDUCTION
            </div>
            <div className="text-4xl sm:text-5xl font-display text-[#D4F34A] my-2">
              -91%
            </div>
            <p className="text-xs text-neutral-400 font-sans">
              Testers reported lower dread opening the app compared to their standard banking portals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
            <div className="text-[10px] font-syne uppercase tracking-wider text-neutral-400 font-bold">
              DECISION VELOCITY
            </div>
            <div className="text-4xl sm:text-5xl font-display text-white my-2">
              3.4×
            </div>
            <p className="text-xs text-neutral-400 font-sans">
              Faster time evaluating if a large discretionary purchase fits within monthly safe liquidity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
            <div className="text-[10px] font-syne uppercase tracking-wider text-neutral-400 font-bold">
              ENGAGEMENT RETENTION
            </div>
            <div className="text-4xl sm:text-5xl font-display text-[#2DD4BF] my-2">
              88%
            </div>
            <p className="text-xs text-neutral-400 font-sans">
              Weekly active check-ins sustained across a 4-week trial cohort with zero push notification spam.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
            <div className="text-[10px] font-syne uppercase tracking-wider text-neutral-400 font-bold">
              UI PARADIGM PREFERENCE
            </div>
            <div className="text-4xl sm:text-5xl font-display text-white my-2">
              84%
            </div>
            <p className="text-xs text-neutral-400 font-sans">
              Preferred hybrid card+chat interface over purely conversational text-only chatbots.
            </p>
          </div>
        </div>
      </div>

      {/* What I Learned Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
        <div className="lg:col-span-8 space-y-6">
          <div className="text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A]">
            07 / PERSONAL LEARNINGS
          </div>
          <h3 className="font-display text-3xl text-white font-normal uppercase tracking-tight">
            What Building Moni Taught Me
          </h3>

          <div className="space-y-4 font-sans text-sm text-neutral-300">
            <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">
                1. Empathy in design is not cheerful copywriting.
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                Adding cute emojis and congratulatory text to a budgeting app doesn't make it human.
                True empathy is respecting a user's limited cognitive energy: doing the math in the
                background, isolating fixed bills quietly, and only asking for decisions when necessary.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">
                2. Never let a generative model do arithmetic.
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                In high-stakes products like finance or healthcare, trust is binary. A single mathematical
                hallucination destroys user faith permanently. Decoupling the AI conversational layer from
                a strict deterministic calculator was the most important architectural choice of this project.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">
                3. Negative space is a functional feature in finance.
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                When people feel stressed about money, visual density increases panic. Removing secondary
                widgets, hiding historical transaction noise behind progressive disclosure, and centering
                a single clean number—the Safe-to-Spend Dial—created an immediate feeling of relief.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Kraft Paper Note */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[290px] bg-[#CBB99F] text-[#1E1B15] p-6 rounded-[2px] shadow-[0_16px_36px_rgba(0,0,0,0.5)] rotate-2 hover:rotate-0 transition-transform duration-200 text-left">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/35 backdrop-blur-[2px] -rotate-1 border border-white/40 shadow-xs pointer-events-none" />
            <div className="font-handwriting text-2xl leading-[1.3] font-semibold pt-1">
              "design for money isn't about numbers. it's about shame, hope, and habits. if an interface can give someone 5 minutes of peace every day, it's worth building."
            </div>
            <div className="mt-4 pt-3 border-t border-[#1E1B15]/20 text-[10px] font-syne font-bold uppercase tracking-wider text-[#1E1B15]/50">
              — SHREYA KUMAVAT // REFLECTION
            </div>
          </div>
        </div>
      </div>

      {/* Next Project & Return to Portfolio Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#17171E] via-[#141418] to-[#17171E] border border-white/15 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-syne font-bold uppercase tracking-widest text-[#D4F34A]">
            READY FOR MORE?
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-white font-normal uppercase tracking-tight mt-1">
            Explore Blood Bank Management System
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
            Life-critical emergency donor coordination, shelf-life mapping & OOUX relationships.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onBack}
            className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-syne text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Selected Work</span>
          </button>

          {onNextProject && (
            <button
              onClick={onNextProject}
              className="px-6 py-3 rounded-full bg-[#D4F34A] hover:bg-[#e2ff62] text-black font-syne text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_20px_rgba(212,243,74,0.3)] hover:scale-105 active:scale-95"
            >
              <span>Next: Blood Bank</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
