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
    <section id="rafugari-matrix" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#E5C17C] uppercase mb-2">
            THE TEXTILE RESTORATION COMPARISON
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            PRECISION CRAFT COMPARISON MATRIX.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Every fabric has a unique structural DNA. We created a comparative methodology matrix that guides custodians and conservators on matching specific fiber injuries with exact master artisanal techniques.
          </p>
        </div>

        {/* Toggle differences switch */}
        <div className="flex items-center gap-3 p-2 rounded-xl bg-[#151419] border border-[#3d3326]/60 shrink-0">
          <span className="font-mono-tech text-xs text-neutral-400">
            SPECIALIZED TECHNIQUES ONLY:
          </span>
          <button
            onClick={() => setHighlightSpecializedOnly(!highlightSpecializedOnly)}
            className={`w-11 h-6 rounded-full transition-colors cursor-pointer p-1 relative ${
              highlightSpecializedOnly ? 'bg-[#E5C17C]' : 'bg-white/10'
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
      <div className="rounded-2xl bg-[#131217] border border-[#3d3326]/60 overflow-hidden shadow-2xl">
        {/* Table Header with Technique Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 p-5 sm:p-6 bg-[#1a171d] border-b border-white/10 items-end gap-4">
          <div className="font-mono-tech text-xs text-neutral-400">
            CONSERVATION DIMENSION
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-[#E5C17C]/40">
            <span className="text-[10px] font-mono-tech text-[#E5C17C] uppercase font-bold">
              KASHMIR PASHMINA
            </span>
            <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
              Invisible Kani Darning
            </div>
            <div className="text-xs font-mono-tech text-neutral-300 mt-1">240 TPI Hand-Interlock</div>
          </div>

          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <span className="text-[10px] font-mono-tech text-neutral-400 uppercase">
              ROYAL ZARI BROCADE
            </span>
            <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
              Gilded Couching
            </div>
            <div className="text-xs font-mono-tech text-neutral-300 mt-1">Silver Wire Stabilization</div>
          </div>

          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <span className="text-[10px] font-mono-tech text-neutral-400 uppercase">
              CHANDERI TISSUE
            </span>
            <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
              Micro-Sheer Mending
            </div>
            <div className="text-xs font-mono-tech text-neutral-300 mt-1">Single-Ply Natural Silk</div>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5">
          {displayedRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-4 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors gap-4 text-xs items-center"
            >
              <div>
                <span className="font-mono-tech text-[10px] text-neutral-500 uppercase block">
                  {row.category}
                </span>
                <span className="font-bold text-white text-sm font-sans">{row.dimension}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#E5C17C]/10 text-neutral-200 font-sans border-l-2 border-[#E5C17C]">
                {row.pashmina}
              </div>

              <div className="p-2.5 rounded-lg bg-white/[0.02] text-neutral-300 font-sans">
                {row.zari}
              </div>

              <div className="p-2.5 rounded-lg bg-white/[0.02] text-neutral-300 font-sans">
                {row.chanderi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


