import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Scissors,
  Check,
  ShieldCheck,
  Feather,
  Eye,
  Compass,
  Layers,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const RafugariHero: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<'sozni' | 'pashmina' | 'zari'>('pashmina');

  const techniques = {
    pashmina: {
      title: 'INVISIBLE KANI WEAVE DARNING',
      subtitle: 'Microscopic Warp-Weft Reconstruction',
      masterGuild: 'Najibabad & Srinagar Guild',
      density: '240 Threads/Inch Count',
      material: 'Handspun Changthangi Pashmina Underfleece',
      timeframe: '60 to 180 Hours per heirloom shawl',
      summary: 'Recreates missing fiber structures strand by strand, following original warp pathways with zero perceptible seam lines or added bulk.',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',
    },
    sozni: {
      title: 'EMBROIDERED MOTIF RESTORATION',
      subtitle: 'Needle-Fine Color Matching',
      masterGuild: 'Downtown Srinagar Heritage Guild',
      density: 'Ultra-Fine Single Ply Silk',
      material: 'Botanical Madder & Indigo-Dyed Thread',
      timeframe: '40 to 120 Hours per paisley motif',
      summary: 'Restores abraded floral paisleys and Jaal patterns without altering the structural tension of fragile 80-year-old ground fabrics.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    },
    zari: {
      title: 'GILDED METALLIC BROCADE MENDING',
      subtitle: 'Silver & Gold Thread Stabilization',
      masterGuild: 'Varanasi & Najibabad Masters',
      density: 'Micro-Couching Interlock',
      material: 'Electro-Plated Silver & Real Zari Wire',
      timeframe: '90 to 220 Hours per royal Angrakha',
      summary: 'Anchors fractured metallic threads back to silk warp foundations, preventing unraveling while conserving ancient patina.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=600&auto=format&fit=crop',
    },
  };

  const currentTechnique = techniques[selectedTechnique];

  return (
    <section id="rafugari-context" className="pt-28 sm:pt-36 pb-20 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto">
      {/* Top Meta Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-syne font-bold uppercase tracking-widest text-[#E5C17C]">
          <span className="px-2.5 py-1 rounded-md bg-[#E5C17C]/10 border border-[#E5C17C]/25 text-[#E5C17C]">
            PROJECT 03
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-300">INDIGENOUS CRAFT ARCHIVE · TEXTILE RESTORATION</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">HERITAGE UX & CIRCULAR CONSERVATION</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-syne font-bold text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-[#E5C17C]" />
          <span>रफ़ूगारी // LIVING ARCHIVE</span>
        </div>
      </div>

      {/* Main Title & Handwritten Subhead */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-white uppercase tracking-tight leading-[0.88] select-none">
            RAFUGARI<span className="text-[#E5C17C]">.</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-mono-tech text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
              THE ART OF INVISIBLE MENDING //
            </span>
            <span className="font-caveat font-handwriting text-2xl sm:text-3xl text-[#E5C17C]">
              mending threads, preserving living memories.
            </span>
          </div>

          <p className="mt-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
            Rafugari is India’s centuries-old indigenous craft of invisible textile restoration—where master artisans re-weave fractured threads with microscopic precision to heal historical heirlooms. This case study designs a digital archive, diagnostic condition mapper, and direct artisan-to-custodian connection system, ensuring this endangered knowledge system thrives in our modern circular economy.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
          <div className="w-64 sm:w-72">
            <StickyNote
              text="Repair is not about hiding wear—it is about honoring the emotional gravity of what has lived before us."
              rotation="rotate-2"
              tapePosition="top"
              variant="yellow"
            />
          </div>
        </div>
      </div>

      {/* Interactive Craft Diagnostics Cockpit */}
      <div className="rounded-2xl bg-[#131217] border border-[#3d3326]/60 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Browser Top Bar */}
        <div className="px-5 py-3.5 bg-[#1a171d] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
            </div>
            <span className="text-white font-bold ml-2">rafugari.heritage</span>
            <span className="text-neutral-500">|</span>
            <span className="text-[#E5C17C]">CRAFT PRESERVATION & DIAGNOSTICS</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-400 text-[11px]">TECHNIQUE:</span>
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
              {(['pashmina', 'sozni', 'zari'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTechnique(t)}
                  className={`px-2.5 py-1 rounded text-[10px] font-syne font-bold uppercase transition-colors cursor-pointer ${
                    selectedTechnique === t
                      ? 'bg-[#E5C17C] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Interactive Showcase Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: Curated Technique Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E5C17C]">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold tracking-wider uppercase">
                {currentTechnique.title}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {currentTechnique.subtitle}
            </h3>

            <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
              {currentTechnique.summary}
            </p>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#18151c] border border-white/5 mt-2">
              <div>
                <div className="font-mono-tech text-xs text-neutral-400">MASTER GUILD</div>
                <div className="font-syne text-sm font-bold text-white mt-0.5">
                  {currentTechnique.masterGuild}
                </div>
              </div>
              <div>
                <div className="font-mono-tech text-xs text-neutral-400">DENSITY & YARN</div>
                <div className="font-syne text-sm font-bold text-[#E5C17C] mt-0.5">
                  {currentTechnique.density}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-2.5 rounded-xl bg-[#E5C17C] hover:bg-[#ebd097] text-black font-syne text-xs font-bold uppercase transition-all shadow-[0_0_20px_rgba(229,193,124,0.3)] cursor-pointer flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>EXPLORE LIVING ARCHIVE</span>
              </button>
              <button className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-syne text-xs font-bold uppercase transition-colors cursor-pointer border border-white/10">
                DIAGNOSTIC WEAVE MAPPER
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Product Image Presentation with Ambient Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#E5C17C]/10 blur-3xl rounded-full" />
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#4a3e2a]/60 shadow-2xl bg-black/50 group">
              <img
                src={currentTechnique.image}
                alt={currentTechnique.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-neutral-300">
                ● 100% HAND-MENDED IN NAJIBABAD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
