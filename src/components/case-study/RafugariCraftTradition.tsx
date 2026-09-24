import React from 'react';
import {
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Scissors,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const RafugariCraftTradition: React.FC = () => {
  const coreChallenges = [
    {
      title: '01. ENDANGERED TACIT KNOWLEDGE',
      traditional: 'Over 85% of master rafugars in Najibabad and Srinagar are over the age of 55, with their generational tacit knowledge unrecorded in any digital or visual schema.',
      rafugariSolution: 'Interactive Weave Schematics: High-resolution optical capture and digital thread-vector mapping to systematically document intricate Kani and Jamawar restoration pathways.',
    },
    {
      title: '02. THE DISCARD & REPLACEMENT BIAS',
      traditional: 'Fast consumption models frame textile tears and moth holes as terminal defects, leading to premature disposal of precious heritage and handloom textiles.',
      rafugariSolution: 'Condition Assessment & Longevity Modeling: Evaluates heirloom value, estimating lifecycle extension and carbon footprint saved through artisanal restoration.',
    },
    {
      title: '03. GEOGRAPHIC & TRUST FRICTION',
      traditional: 'Custodians with priceless 100-year-old shawls hesitate to ship family heirlooms across states without transparency, insured chain of custody, or artisan verification.',
      rafugariSolution: 'Verified Guild Passport: Digital provenance tracking with milestone micro-photography, escrow insurance, and direct artisan dialogue.',
    },
  ];

  return (
    <section id="rafugari-tradition" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#E5C17C] uppercase mb-2">
            INDIGENOUS KNOWLEDGE & CULTURAL DIAGNOSIS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            DECONSTRUCTING THE RESTORATION DIVIDE.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            We conducted field research and contextual interviews with 14 master rafugars in Uttar Pradesh and Kashmir, alongside 26 textile conservators and heirloom collectors. The central hurdle was connecting dispersed generational artisans with conscious patrons.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="Ustad quote: 'A needle in the hand of a Rafugar is not just a tool; it is a lens through which we read the breath of the original weaver.'"
            rotation="-rotate-2"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coreChallenges.map((c, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono-tech text-xs text-[#E5C17C] uppercase tracking-wider mb-4">
                {c.title}
              </div>

              {/* Status Quo Friction */}
              <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 mb-4">
                <div className="flex items-center gap-2 text-red-400 font-syne text-xs font-bold uppercase mb-1">
                  <XCircle className="w-4 h-4" />
                  <span>CURRENT SYSTEMIC GAP</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {c.traditional}
                </p>
              </div>

              {/* Rafugari Digital Solution */}
              <div className="p-3.5 rounded-xl bg-[#E5C17C]/10 border border-[#E5C17C]/30">
                <div className="flex items-center gap-2 text-[#E5C17C] font-syne text-xs font-bold uppercase mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RAFUGARI ARCHIVE PARADIGM</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {c.rafugariSolution}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono-tech text-neutral-500">
              CIRCULAR HERITAGE FRAMEWORK
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


