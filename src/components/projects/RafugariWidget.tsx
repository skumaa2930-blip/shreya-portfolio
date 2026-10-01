import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  Scissors,
  Eye,
  Check,
  Search,
  Feather,
  ShieldCheck,
  Compass,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

export const RafugariWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weave' | 'artisans' | 'archive'>('weave');
  const [mendingProgress, setMendingProgress] = useState(72);
  const [selectedFabric, setSelectedFabric] = useState('Kashmir Pashmina (1880)');

  const restorationArtifacts = [
    {
      id: 'a1',
      title: 'Kashmir Pashmina Shawl',
      period: 'c. 1880 • Jamawar Floral Weave',
      technique: 'Invisible Warp-Weft Interlock',
      damage: 'Moth wear & warp tension tear',
      status: 'Restored',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'a2',
      title: 'Zari Brocade Angrakha',
      period: 'c. 1920 • Real Silver Thread',
      technique: 'Couched Gilded Re-anchoring',
      damage: 'Tarnished thread separation',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'a3',
      title: 'Chanderi Silk Saree',
      period: 'c. 1950 • Handspun Tissue',
      technique: 'Needle-Fine Micro Darning',
      damage: 'Fold crease fiber fracture',
      status: 'Documented',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'a4',
      title: 'Kalamkari Tree of Life',
      period: 'c. 1910 • Natural Indigo Dye',
      technique: 'Botanical Color-Match Threading',
      damage: 'Pigment abrasion & selvage rip',
      status: 'Restored',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <div className="w-full rounded-xl bg-[#161614] border border-[rgba(239,233,219,0.14)] overflow-hidden shadow-2xl text-[#efe9db] font-sans text-xs">
      {/* Top Browser Bar */}
      <div className="px-4 py-2.5 bg-[#1d1d1a] border-b border-[rgba(239,233,219,0.14)] flex items-center justify-between font-syne text-[11px] text-[#a29d90]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#a29d90]/40" />
          </div>
          <span className="text-[#c9f14a] font-dm-serif font-bold ml-2 tracking-wide">रफ़ूगारी</span>
          <span className="text-[#a29d90]">•</span>
          <span className="text-[11px] text-[#efe9db] uppercase tracking-[0.14em]">
            LIVING TEXTILE RESTORATION ARCHIVE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#c9f14a] text-[11px] font-syne font-semibold uppercase tracking-[0.14em]">RAFUGARI.ARCHIVE</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-4">
        {/* Navigation & Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[rgba(239,233,219,0.14)]">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#a29d90]" />
            <input
              type="text"
              readOnly
              value="Search heirloom fabrics, weaves & master rafugars..."
              className="w-full pl-8 pr-3 py-1.5 rounded-full bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] text-[#a29d90] text-xs cursor-default truncate font-sans"
            />
          </div>

          <div className="flex items-center gap-2 font-syne text-[11px]">
            {[
              { id: 'weave', label: 'Micro-Weave Diagnostic' },
              { id: 'artisans', label: 'Master Rafugars' },
              { id: 'archive', label: 'Heirloom Vault' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-2.5 py-1 rounded uppercase tracking-[0.14em] font-semibold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-[#c9f14a] font-bold bg-[#c9f14a]/10 border border-[#c9f14a]/30'
                    : 'text-[#a29d90] hover:text-[#efe9db]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Interactive Weave Diagnostic Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Left 8 Cols: Interactive Restoration Simulator */}
          <div className="md:col-span-8 p-5 rounded-lg bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="font-syne text-[11px] text-[#c9f14a] uppercase tracking-[0.14em] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  OPTICAL WEAVE RECONSTRUCTION
                </span>
                <span className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  99.6% INVISIBLE BLEND
                </span>
              </div>

              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] font-normal text-[#efe9db] mt-2 leading-[1.2]">
                Mending threads, reviving histories.
              </h4>
              <p className="text-[#a29d90] font-sans text-[14px] mt-1.5 max-w-md leading-relaxed">
                Rafugars map the original warp and weft density with hand-matched vintage yarn, inserting microscopic loop knots that seamlessly mirror the historic weave structure.
              </p>

              {/* Interactive Weave Slider */}
              <div className="mt-4 p-3 rounded-lg bg-[#161614] border border-[rgba(239,233,219,0.14)]">
                <div className="flex items-center justify-between text-[11px] font-syne uppercase tracking-[0.14em] mb-2">
                  <span className="text-[#a29d90]">REPAIR STAGE: {mendingProgress}%</span>
                  <span className="text-[#c9f14a] font-semibold">
                    {mendingProgress < 35
                      ? 'Warp Tension Mapping'
                      : mendingProgress < 75
                      ? 'Invisible Fiber Weaving'
                      : 'Micro-Steam Finish & Alignment'}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={mendingProgress}
                  onChange={(e) => setMendingProgress(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#c9f14a]"
                />
              </div>
            </div>

            {/* Micro Badges */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-[rgba(239,233,219,0.14)] text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-[#c9f14a]" /> AUTHENTIC THREAD MATCH
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#c9f14a]" /> ARCHIVAL CONSERVATION
              </span>
              <span className="flex items-center gap-1">
                <Feather className="w-3 h-3 text-[#c9f14a]" /> ZERO WEIGHT ADDITION
              </span>
            </div>
          </div>

          {/* Right 4 Cols: Artisan Spotlight */}
          <div className="md:col-span-4 p-3.5 rounded-lg bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(239,233,219,0.14)] text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
              <span>MASTER GUILD</span>
              <span className="text-[#c9f14a]">NAJIBABAD &amp; KASHMIR</span>
            </div>

            <div className="my-2 p-2.5 rounded bg-[#161614] border border-[rgba(239,233,219,0.14)] space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-syne font-semibold text-[#efe9db]">Ustad Mohammad Rafiq</span>
                <span className="text-[#c9f14a] font-syne font-bold">4th Gen</span>
              </div>
              <div className="text-[13px] text-[#a29d90] font-sans leading-relaxed">
                Specialist in 19th-century Kani shawls and reversible double-sided Jamawar restoration.
              </div>
              <div className="flex items-center justify-between text-[11px] font-syne uppercase tracking-[0.14em] pt-1 border-t border-[rgba(239,233,219,0.14)]">
                <span className="text-[#a29d90]">Active Restorations</span>
                <span className="text-[#c9f14a] font-bold">18 Pieces</span>
              </div>
            </div>

            <div className="text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90] text-center">
              PRESERVING LIVING CULTURAL MEMORY
            </div>
          </div>
        </div>

        {/* Artifact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {restorationArtifacts.map((item) => (
            <div
              key={item.id}
              className="p-2.5 rounded-lg bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between hover:border-[#c9f14a]/40 transition-all group"
            >
              <div className="rounded overflow-hidden aspect-square bg-[#161614] mb-2 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[10px] font-syne font-semibold uppercase tracking-[0.14em] bg-black/80 text-[#c9f14a] border border-[#c9f14a]/30">
                  {item.status}
                </span>
              </div>
              <div>
                <div className="font-sans font-medium text-[#efe9db] text-xs truncate">{item.title}</div>
                <div className="text-[11px] font-sans text-[#a29d90] truncate">{item.period}</div>
              </div>
              <div className="mt-2 flex items-center justify-between pt-2 border-t border-[rgba(239,233,219,0.14)] font-syne text-[11px]">
                <span className="text-[#c9f14a] uppercase tracking-[0.14em] truncate">{item.technique}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer specs */}
        <div className="flex items-center justify-between text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#a29d90] pt-2 border-t border-[rgba(239,233,219,0.14)]">
          <span>CIRCULAR CRAFT &amp; SUSTAINABLE HERITAGE</span>
          <span>WEAVE RESOLUTION: SUB-MILLIMETER</span>
        </div>
      </div>
    </div>
  );
};
