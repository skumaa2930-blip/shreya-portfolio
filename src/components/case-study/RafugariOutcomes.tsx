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
    <section id="rafugari-outcomes" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#E5C17C] uppercase mb-2">
            RESEARCH VALIDATION & CRAFT IMPACT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            SUSTAINABILITY IMPACT & LEARNINGS.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
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
        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            HEIRLOOM LIFESPAN EXTENSION
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
            +45 Yrs
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Average projected structural longevity added to vintage silk and wool garments after microscopic warp stabilization.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            ARTISAN WAGE EQUITY
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-[#E5C17C] mt-2">
            2.8x
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Direct patron-to-artisan connection eliminated exploitative middlemen, returning fair wages directly to master rafugars.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            WEAVE RESTORATION ACCURACY
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-emerald-400 mt-2">
            99.6%
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Consistently rated completely invisible across optical raking light assessments by certified textile conservators.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            FABRIC WASTE DIVERTED
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-[#ccff00] mt-2">
            320+
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Rare handloom and heirloom garments preserved from landfill or destruction during pilot study phase.
          </div>
        </div>
      </div>

      {/* Navigation Footer Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1a171d] to-[#0e0d11] border border-[#3d3326]/60 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono-tech text-xs text-[#E5C17C] uppercase tracking-wider mb-1">
            RETURN TO PORTFOLIO
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-white uppercase">
            EXPLORE MORE EXPERIMENTS & CASE STUDIES
          </h3>
          <p className="font-sans text-neutral-400 text-sm mt-1 max-w-xl">
            Check out Moni (Autonomous AI Finance Agent) or dive into the Curiosity Playground featuring 8 interactive tactile explorations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-syne text-xs font-bold uppercase transition-all cursor-pointer"
          >
            ← ALL WORK
          </button>
          <button
            onClick={onNextProject}
            className="px-6 py-3 rounded-full bg-[#D4F34A] hover:bg-[#e0ff54] text-black font-syne text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(212,243,74,0.4)] cursor-pointer flex items-center gap-2"
          >
            <span>VIEW MONI (AI AGENT)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};



