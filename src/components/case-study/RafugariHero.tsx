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
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#c9f14a]">
          <span className="px-2.5 py-1 rounded bg-[#c9f14a]/10 border border-[#c9f14a]/20 text-[#c9f14a]">
            PROJECT 03
          </span>
          <span className="text-[#a29d90]">•</span>
          <span className="text-[#efe9db]">INDIGENOUS CRAFT ARCHIVE · TEXTILE RESTORATION</span>
          <span className="text-[#a29d90]">•</span>
          <span className="text-[#a29d90]">HERITAGE UX & CIRCULAR CONSERVATION</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#efe9db]">
          <span className="w-2 h-2 rounded-full bg-[#c9f14a]" />
          <span>रफ़ूगारी // LIVING ARCHIVE</span>
        </div>
      </div>

      {/* Main Title & Handwritten Subhead */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
        <div className="lg:col-span-8">
          <h1 className="font-dm-serif text-[clamp(30px,4.6vw,64px)] font-normal text-[#efe9db] uppercase tracking-[-0.01em] leading-[1.05] select-none">
            RAFUGARI<span className="text-[#c9f14a]">.</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-syne text-[11px] tracking-[0.14em] text-[#a29d90] uppercase font-semibold">
              THE ART OF INVISIBLE MENDING //
            </span>
            <span className="font-caveat font-medium text-2xl sm:text-[28px] text-[#c9f14a]">
              mending threads, preserving living memories.
            </span>
          </div>

          <p className="mt-6 text-[#efe9db]/85 font-sans font-light text-[clamp(15px,1.25vw,19px)] leading-relaxed max-w-[56ch]">
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
      <div className="rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Browser Top Bar */}
        <div className="px-5 py-3.5 bg-[#161614] border-b border-[rgba(239,233,219,0.14)] flex flex-wrap items-center justify-between gap-3 text-[11px] font-syne text-[#a29d90]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
            </div>
            <span className="text-[#efe9db] font-semibold ml-2">rafugari.heritage</span>
            <span className="text-[#a29d90]">•</span>
            <span className="text-[#c9f14a] uppercase tracking-[0.14em]">CRAFT PRESERVATION & DIAGNOSTICS</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#a29d90] text-[11px] uppercase tracking-[0.14em]">TECHNIQUE:</span>
            <div className="flex items-center gap-1 bg-[#161614] p-1 rounded-lg border border-[rgba(239,233,219,0.14)]">
              {(['pashmina', 'sozni', 'zari'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTechnique(t)}
                  className={`px-2.5 py-1 rounded text-[11px] font-syne font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    selectedTechnique === t
                      ? 'bg-[#c9f14a] text-black shadow-sm'
                      : 'text-[#a29d90] hover:text-[#efe9db]'
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
            <div className="flex items-center gap-2 text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#c9f14a]">
              <Sparkles className="w-4 h-4" />
              <span className="tracking-[0.14em] uppercase">
                {currentTechnique.title}
              </span>
            </div>

            <h3 className="font-dm-serif text-[clamp(22px,2.6vw,36px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db]">
              {currentTechnique.subtitle}
            </h3>

            <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
              {currentTechnique.summary}
            </p>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#161614] border border-[rgba(239,233,219,0.14)] mt-2">
              <div>
                <div className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
                  MASTER GUILD
                </div>
                <div className="font-sans text-[14px] text-[#efe9db] mt-1 font-normal">
                  {currentTechnique.masterGuild}
                </div>
              </div>
              <div>
                <div className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
                  DENSITY & YARN
                </div>
                <div className="font-sans text-[14px] text-[#c9f14a] mt-1 font-normal">
                  {currentTechnique.density}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-2.5 rounded-full bg-[#c9f14a] hover:bg-[#d8f56e] text-black font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-all shadow-[0_0_20px_rgba(201,241,74,0.3)] cursor-pointer flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>EXPLORE LIVING ARCHIVE</span>
              </button>
              <button className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#efe9db] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer border border-[rgba(239,233,219,0.14)]">
                DIAGNOSTIC WEAVE MAPPER
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Product Image Presentation with Ambient Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#c9f14a]/10 blur-3xl rounded-full" />
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[rgba(239,233,219,0.14)] shadow-2xl bg-black/50 group">
              <img
                src={currentTechnique.image}
                alt={currentTechnique.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[rgba(239,233,219,0.14)] text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#efe9db]">
                ● 100% HAND-MENDED IN NAJIBABAD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
