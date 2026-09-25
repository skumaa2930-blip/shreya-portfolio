import React from 'react';
import {
  CheckCircle2,
  TrendingDown,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  FileText,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

interface BloodBankImpactProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export const BloodBankImpact: React.FC<BloodBankImpactProps> = ({
  onBack,
  onNextProject,
}) => {
  return (
    <section id="bb-impact" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#F43F5E] uppercase mb-2">
            MEASURABLE HEALTHCARE OUTCOMES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            SYSTEM IMPACT & LEARNINGS.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Healthcare UX is not about aesthetic flair; it is about cognitive clarity under extreme stress. By moving from disconnected database spreadsheets to an Object-Oriented paradigm, the system achieved dramatic speed and safety gains.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="Takeaway: The best interface for an emergency is the one where the user never has to 'search' for where to click next."
            rotation="rotate-1"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* 4 Quantitative Impact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            TRIAGE DISPATCH VELOCITY
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
            -42%
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Emergency requisition fulfillment time dropped from 32 minutes to under 18 minutes on average.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            DATA ENTRY ERROR RATE
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-[#F43F5E] mt-2">
            0.0%
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Zero recorded cross-match mismatched blood group dispatches during simulated emergency runs.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            EXPIRED UNIT SPOILAGE
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-emerald-400 mt-2">
            -68%
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Predictive FIFO bay allocation prevented blood bags from lingering past their 35-day viabilities.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10">
          <div className="text-xs font-mono-tech text-neutral-400 uppercase">
            RECALL RESPONSE CONVERSION
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold text-[#ccff00] mt-2">
            3.8x
          </div>
          <div className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
            Geofenced, hyper-targeted SMS alerts achieved 3.8x higher volunteer turnout compared to broadcast emails.
          </div>
        </div>
      </div>

      {/* Navigation Footer Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161a24] to-[#0d0e13] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono-tech text-xs text-[#F43F5E] uppercase tracking-wider mb-1">
            EXPLORE NEXT CASE STUDY
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-white uppercase">
            CROMA — CONSUMER ELECTRONICS REDESIGN
          </h3>
          <p className="font-sans text-neutral-400 text-sm mt-1 max-w-xl">
            Rethinking omnichannel consumer tech shopping: eliminating spec fatigue, reducing catalog clutter, and humanizing decision making.
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
            <span>VIEW CROMA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};



