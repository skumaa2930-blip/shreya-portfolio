import React from 'react';
import { Target, Users, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const MoniOverview: React.FC = () => {
  return (
    <section id="moni-overview" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-[1340px] mx-auto">
      {/* 01 Overview Headline matching design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: 01 ———— Overview */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-xs font-syne font-bold uppercase tracking-widest text-[#D1F047] mb-3">
            <span>01</span>
            <div className="w-12 h-[1px] bg-[#D1F047]/60" />
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white font-normal uppercase tracking-tight leading-[0.95]">
            Overview
          </h2>
        </div>

        {/* Right Column: Statement Lead */}
        <div className="lg:col-span-7 pt-2">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed">
            MONI is a conversational AI finance agent designed for young adults who want to understand,
            manage and improve their financial lives — without judgment, jargon or spreadsheets.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-[10px] font-syne font-bold uppercase tracking-widest text-[#D1F047]">
                THE PREMISE
              </div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Traditional banking dashboards induce anxiety. Moni replaces audit charts with a calm, forward-looking financial companion.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-syne font-bold uppercase tracking-widest text-[#D1F047]">
                AGENTIC MODEL
              </div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Deterministic mathematical cashflow engine paired with an empathetic conversational agent. Zero hallucinations.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-syne font-bold uppercase tracking-widest text-[#D1F047]">
                OUTCOME
              </div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Samsung PRISM Runner Up national honor with 91% reduction in financial checking anxiety in user trials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
