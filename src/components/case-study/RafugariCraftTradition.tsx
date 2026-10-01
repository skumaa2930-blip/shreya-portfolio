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
    <section id="rafugari-tradition" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-[rgba(239,233,219,0.14)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase mb-2">
            INDIGENOUS KNOWLEDGE &amp; CULTURAL DIAGNOSIS
          </div>
          <h2 className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] uppercase">
            DECONSTRUCTING THE RESTORATION DIVIDE.
          </h2>
          <p className="font-sans font-light text-[clamp(15px,1.25vw,19px)] max-w-[56ch] text-[#efe9db]/85 mt-3 leading-relaxed">
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
            className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between"
          >
            <div>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-4">
                {c.title}
              </h4>

              {/* Status Quo Friction */}
              <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 mb-4">
                <div className="flex items-center gap-2 text-red-400 font-syne text-[11px] font-semibold uppercase tracking-[0.14em] mb-1">
                  <XCircle className="w-4 h-4" />
                  <span>CURRENT SYSTEMIC GAP</span>
                </div>
                <p className="text-[14px] text-[#a29d90] font-sans leading-relaxed">
                  {c.traditional}
                </p>
              </div>

              {/* Rafugari Digital Solution */}
              <div className="p-3.5 rounded-xl bg-[#c9f14a]/10 border border-[#c9f14a]/25">
                <div className="flex items-center gap-2 text-[#c9f14a] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RAFUGARI ARCHIVE PARADIGM</span>
                </div>
                <p className="text-[14px] text-[#efe9db]/90 font-sans leading-relaxed">
                  {c.rafugariSolution}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(239,233,219,0.14)] text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
              CIRCULAR HERITAGE FRAMEWORK
            </div>
          </div>
        ))}
      </div>

      {/* Thought Process Callout in Olive-Green Flagged Style */}
      <div className="mt-8 callout-thought-process">
        <div className="text-[11px] font-syne font-bold uppercase tracking-[0.14em] text-[#c9f14a] mb-1">
          ＋ Added — thought process
        </div>
        <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-1.5">
          Contextual Field Inquiry &amp; Ethical Stewardship
        </h4>
        <p className="font-sans text-[14px] leading-relaxed text-[#a29d90]">
          Initial assumptions focused solely on consumer-facing e-commerce. Through master artisan interviews in Najibabad, we recognized that trust and verifiable guild provenance—not transaction speed—were the existential prerequisites for preserving living heritage.
        </p>
      </div>
    </section>
  );
};
