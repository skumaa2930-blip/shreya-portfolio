import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Feather,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

interface RafugariOutcomesProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export const RafugariOutcomes: React.FC<RafugariOutcomesProps> = ({
  onBack,
  onNextProject,
}) => {
  return (
    <section id="rafugari-outcomes" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-[rgba(239,233,219,0.14)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase mb-2">
            RESEARCH VALIDATION &amp; CRAFT IMPACT
          </div>
          <h2 className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] uppercase">
            SUSTAINABILITY IMPACT &amp; LEARNINGS.
          </h2>
          <p className="font-sans font-light text-[clamp(15px,1.25vw,19px)] max-w-[56ch] text-[#efe9db]/85 mt-3 leading-relaxed">
            By creating an accessible, digital gateway for indigenous repair, we proved that valuing longevity over disposal breathes new life into irreplaceable artisan traditions and family heirlooms.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="Craft Truth: When you restore an heirloom shawl, you aren't just saving a fabric—you are sustaining a centuries-old language of human touch."
            rotation="-rotate-2"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* 4 Outcome Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
          <div className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            HEIRLOOM LIFESPAN EXTENSION
          </div>
          <div className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] mt-2">
            +45 Yrs
          </div>
          <div className="text-[14px] text-[#a29d90] font-sans mt-2 leading-relaxed">
            Average projected structural longevity added to vintage silk and wool garments after microscopic warp stabilization.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
          <div className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            ARTISAN WAGE EQUITY
          </div>
          <div className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#c9f14a] mt-2">
            2.8x
          </div>
          <div className="text-[14px] text-[#a29d90] font-sans mt-2 leading-relaxed">
            Direct patron-to-artisan connection eliminated exploitative middlemen, returning fair wages directly to master rafugars.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
          <div className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            WEAVE RESTORATION ACCURACY
          </div>
          <div className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-emerald-400 mt-2">
            99.6%
          </div>
          <div className="text-[14px] text-[#a29d90] font-sans mt-2 leading-relaxed">
            Consistently rated completely invisible across optical raking light assessments by certified textile conservators.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
          <div className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            FABRIC WASTE DIVERTED
          </div>
          <div className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#c9f14a] mt-2">
            320+
          </div>
          <div className="text-[14px] text-[#a29d90] font-sans mt-2 leading-relaxed">
            Rare handloom and heirloom garments preserved from landfill or destruction during pilot study phase.
          </div>
        </div>
      </div>

      {/* Navigation Footer Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div>
          <div className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c9f14a] mb-2">
            RETURN TO PORTFOLIO
          </div>
          <h3 className="font-dm-serif text-[clamp(22px,2.6vw,36px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] uppercase">
            EXPLORE MORE EXPERIMENTS &amp; CASE STUDIES
          </h3>
          <p className="font-sans text-[#a29d90] text-[14px] mt-2 max-w-[56ch] leading-relaxed">
            Check out Moni (Autonomous AI Finance Agent) or dive into the Curiosity Playground featuring 8 interactive tactile explorations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#efe9db] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
          >
            ← ALL WORK
          </button>
          <button
            onClick={onNextProject}
            className="px-6 py-3 rounded-full bg-[#c9f14a] hover:bg-[#d8f56e] text-black font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-all shadow-[0_0_25px_rgba(201,241,74,0.35)] cursor-pointer flex items-center gap-2"
          >
            <span>VIEW MONI (AI AGENT)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
