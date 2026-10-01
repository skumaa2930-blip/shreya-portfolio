import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Scissors,
  Check,
  ShieldCheck,
  Feather,
  Eye,
  Sliders,
  Layers,
} from 'lucide-react';

export const RafugariRestorationMatrix: React.FC = () => {
  const [highlightSpecializedOnly, setHighlightSpecializedOnly] = useState(false);

  const matrixRows = [
    {
      category: 'WEAVE INTERACTION',
      dimension: 'Warp-Weft Thread Interlock',
      pashmina: 'Micro-looped strand-by-strand into original tension paths (Invisible)',
      zari: 'Couched with gold-plated silk wire anchored to reverse ground',
      chanderi: 'Ultralight needle re-threading with zero bulk on sheer borders',
      isSpecialized: true,
    },
    {
      category: 'OPTICAL BLEND',
      dimension: 'Visual Seam Concealment',
      pashmina: '99.6% Imperceptible to naked eye under natural and raking light',
      zari: 'Conserves antique patina with age-matched oxidization tone',
      chanderi: 'Matches transparent sheer luster without rigid stiffening',
      isSpecialized: true,
    },
    {
      category: 'MATERIAL RIGOR',
      dimension: 'Fiber Age & Dye Matching',
      pashmina: 'Vintage Changthangi underwool extracted from unraveled period swatches',
      zari: 'Authentic 92.5% silver wire with hand-spun raw mulberry silk core',
      chanderi: 'Hand-dyed botanical madder and tea-stained pure organic silk',
      isSpecialized: true,
    },
    {
      category: 'CONSERVATION ETHICS',
      dimension: 'Archival Reversibility',
      pashmina: '100% Reversible without damaging historic fibers or selvedge',
      zari: '100% Reversible without damaging historic fibers or selvedge',
      chanderi: '100% Reversible without damaging historic fibers or selvedge',
      isSpecialized: false,
    },
  ];

  const displayedRows = highlightSpecializedOnly
    ? matrixRows.filter((r) => r.isSpecialized)
    : matrixRows;

  return (
    <section id="rafugari-matrix" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-[rgba(239,233,219,0.14)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase mb-2">
            THE TEXTILE RESTORATION COMPARISON
          </div>
          <h2 className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] uppercase">
            PRECISION CRAFT COMPARISON MATRIX.
          </h2>
          <p className="font-sans font-light text-[clamp(15px,1.25vw,19px)] max-w-[56ch] text-[#efe9db]/85 mt-3 leading-relaxed">
            Every fabric has a unique structural DNA. We created a comparative methodology matrix that guides custodians and conservators on matching specific fiber injuries with exact master artisanal techniques.
          </p>
        </div>

        {/* Toggle differences switch */}
        <div className="flex items-center gap-3 p-2 rounded-xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] shrink-0">
          <span className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            SPECIALIZED TECHNIQUES ONLY:
          </span>
          <button
            onClick={() => setHighlightSpecializedOnly(!highlightSpecializedOnly)}
            className={`w-11 h-6 rounded-full transition-colors cursor-pointer p-1 relative ${
              highlightSpecializedOnly ? 'bg-[#c9f14a]' : 'bg-white/10'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-black transition-transform ${
                highlightSpecializedOnly ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] overflow-hidden shadow-2xl">
        {/* Table Header with Technique Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 p-5 sm:p-6 bg-[#161614] border-b border-[rgba(239,233,219,0.14)] items-end gap-4">
          <div className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            CONSERVATION DIMENSION
          </div>

          <div className="p-3.5 rounded-xl bg-[#1d1d1a] border border-[#c9f14a]/40">
            <span className="text-[11px] font-syne text-[#c9f14a] uppercase tracking-[0.14em] font-semibold">
              KASHMIR PASHMINA
            </span>
            <div className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mt-1">
              Invisible Kani Darning
            </div>
            <div className="text-[13px] font-sans text-[#a29d90] mt-1">240 TPI Hand-Interlock</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
            <span className="text-[11px] font-syne text-[#a29d90] uppercase tracking-[0.14em] font-semibold">
              ROYAL ZARI BROCADE
            </span>
            <div className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mt-1">
              Gilded Couching
            </div>
            <div className="text-[13px] font-sans text-[#a29d90] mt-1">Silver Wire Stabilization</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
            <span className="text-[11px] font-syne text-[#a29d90] uppercase tracking-[0.14em] font-semibold">
              CHANDERI TISSUE
            </span>
            <div className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mt-1">
              Micro-Sheer Mending
            </div>
            <div className="text-[13px] font-sans text-[#a29d90] mt-1">Single-Ply Natural Silk</div>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[rgba(239,233,219,0.08)]">
          {displayedRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-4 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors gap-4 items-center"
            >
              <div>
                <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-1">
                  {row.category}
                </span>
                <span className="font-sans font-medium text-[#efe9db] text-[14px]">{row.dimension}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#c9f14a]/10 text-[#efe9db] font-sans text-[14px] leading-relaxed border-l-2 border-[#c9f14a]">
                {row.pashmina}
              </div>

              <div className="p-3 rounded-lg bg-[#161614] text-[#a29d90] font-sans text-[14px] leading-relaxed border border-[rgba(239,233,219,0.08)]">
                {row.zari}
              </div>

              <div className="p-3 rounded-lg bg-[#161614] text-[#a29d90] font-sans text-[14px] leading-relaxed border border-[rgba(239,233,219,0.08)]">
                {row.chanderi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
