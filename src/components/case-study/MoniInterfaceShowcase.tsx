import React, { useState } from 'react';
import { Eye, Layers, Palette, Type, Smartphone, Monitor, Sliders, Shield } from 'lucide-react';

export const MoniInterfaceShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'cockpit' | 'chat' | 'goals'>('cockpit');

  return (
    <section id="moni-experience" className="py-20 md:py-28 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/[0.08]">
      <div id="moni-ui" />
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
          <span>05 / VISUAL LANGUAGE & UI RIGOR</span>
          <span className="text-neutral-500">•</span>
          <span>CRAFTING OPTICAL CALM</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight leading-tight max-w-4xl">
          Designed for Clarity.
          <br />
          <span className="text-[#D4F34A]">Engineered with Mathematical Restraint.</span>
        </h2>

        <p className="mt-5 text-neutral-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
          High-stress domains require generous negative space, deliberate optical contrast, and
          typography that never yells. Every component in Moni balances dark charcoal depth with
          delicate neon telemetry accents.
        </p>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveScreen('cockpit')}
          className={`px-4 py-2 rounded-full font-syne text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeScreen === 'cockpit'
              ? 'bg-[#D4F34A] text-black shadow-[0_0_15px_rgba(212,243,74,0.3)]'
              : 'bg-[#15151A] text-neutral-400 hover:text-white border border-white/10'
          }`}
        >
          01 // The Safe-to-Spend Cockpit
        </button>
        <button
          onClick={() => setActiveScreen('chat')}
          className={`px-4 py-2 rounded-full font-syne text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeScreen === 'chat'
              ? 'bg-[#D4F34A] text-black shadow-[0_0_15px_rgba(212,243,74,0.3)]'
              : 'bg-[#15151A] text-neutral-400 hover:text-white border border-white/10'
          }`}
        >
          02 // The Conversational Canvas
        </button>
        <button
          onClick={() => setActiveScreen('goals')}
          className={`px-4 py-2 rounded-full font-syne text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeScreen === 'goals'
              ? 'bg-[#D4F34A] text-black shadow-[0_0_15px_rgba(212,243,74,0.3)]'
              : 'bg-[#15151A] text-neutral-400 hover:text-white border border-white/10'
          }`}
        >
          03 // Tangible Goal Jars
        </button>
      </div>

      {/* Main UI Showcase Frame */}
      <div className="rounded-3xl bg-[#111114] border border-white/15 p-6 sm:p-10 shadow-2xl mb-16">
        {activeScreen === 'cockpit' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-syne font-bold uppercase text-[#D4F34A]">
                  SCREEN ARCHITECTURE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">
                  The Safe-to-Spend Ambient Cockpit
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                  Elevating daily discretionary clarity while keeping long-term goals and obligations softly visible.
                </p>
              </div>
              <div className="text-xs font-syne text-neutral-400">
                RESOLUTION: 1440 × 900 // FLUID RESPONSIVE
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className="rounded-2xl bg-[#181820] border border-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left col: Big Safe to Spend Gauge */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101014] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-syne text-neutral-400">
                      <span className="font-bold uppercase">TODAY'S LIQUIDITY</span>
                      <span className="text-[#D4F34A] font-bold">ACTIVE ENVELOPE</span>
                    </div>

                    <div className="my-8 text-center">
                      <div className="text-6xl sm:text-7xl font-display text-white tracking-tight">
                        ₹2,840
                      </div>
                      <div className="text-xs font-syne uppercase tracking-wider text-[#D4F34A] mt-2 font-bold">
                        SAFE TO SPEND TODAY WITHOUT COMPROMISE
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-sans">
                    <span>Rent Reserved: ₹28,000</span>
                    <span>Goals Locked: ₹35,000</span>
                  </div>
                </div>

                {/* Right col: Upcoming obligations stream */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="p-4 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center font-bold text-xs">
                        TECH
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Sony Lens Sinking Fund</div>
                        <div className="text-[11px] text-neutral-400">Auto-allocated ₹500 today</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2DD4BF]">₹18,500 / ₹24k</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D4F34A]/10 text-[#D4F34A] flex items-center justify-center font-bold text-xs">
                        RENT
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Koramangala Flat Rent</div>
                        <div className="text-[11px] text-neutral-400">Pre-funded & locked in escrow</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D4F34A]">₹28,000 Secured</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 text-neutral-400 flex items-center justify-center font-bold text-xs">
                        SUB
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Apple iCloud + Figma</div>
                        <div className="text-[11px] text-neutral-400">Renews on the 4th</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white">₹1,469</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 'chat' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-syne font-bold uppercase text-[#D4F34A]">
                  SCREEN ARCHITECTURE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">
                  The Conversational Canvas
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                  Why chat alone is not enough: Hybrid dialogue embedding dynamic, generative card widgets.
                </p>
              </div>
              <div className="text-xs font-syne text-neutral-400">
                MULTIMODAL FINTECH CONVERSATION
              </div>
            </div>

            <div className="rounded-2xl bg-[#181820] border border-white/10 p-6 sm:p-8">
              <div className="max-w-2xl mx-auto space-y-4 font-sans text-xs">
                {/* User Prompt */}
                <div className="p-4 rounded-2xl rounded-tr-none bg-[#D4F34A] text-black font-semibold ml-auto max-w-[80%] leading-relaxed">
                  "If I spend ₹14,000 on flight tickets to Mumbai this weekend, does it affect my rent payment next Tuesday?"
                </div>

                {/* Moni Agent Response with structured mini-widget */}
                <div className="p-5 rounded-2xl rounded-tl-none bg-[#101014] border border-white/15 text-neutral-200 space-y-3 leading-relaxed">
                  <div className="flex items-center gap-2 text-[10px] font-syne font-bold uppercase text-[#D4F34A]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>DETERMINISTIC LIQUIDITY CHECK: PASSED</span>
                  </div>

                  <p className="text-sm">
                    No, your rent payment is 100% secure! The ₹28,000 rent escrow is isolated in a separate sub-account
                    and cannot be debited by flight bookings.
                  </p>

                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 space-y-2">
                    <div className="flex justify-between text-neutral-400">
                      <span>Mumbai Flight:</span>
                      <span className="text-white font-bold">-₹14,000</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Post-Booking Discretionary:</span>
                      <span className="text-emerald-400 font-bold">₹1,940 / day</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Rent Escrow Status:</span>
                      <span className="text-[#D4F34A] font-bold">Fully Protected</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-[#D4F34A] text-black font-syne text-[11px] font-bold uppercase tracking-wider cursor-pointer">
                      Log Flight Booking
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-white/5 text-neutral-300 font-syne text-[11px] font-bold uppercase tracking-wider hover:bg-white/15 cursor-pointer">
                      Explore Cheaper Dates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 'goals' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-syne font-bold uppercase text-[#D4F34A]">
                  SCREEN ARCHITECTURE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">
                  Tangible Goal Jars & Micro-Sinking Funds
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                  Replacing abstract savings goals with tangible psychological jars that auto-fund quietly.
                </p>
              </div>
              <div className="text-xs font-syne text-neutral-400">
                MICRO-RESERVE SYSTEM
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#14141A] border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-syne uppercase">
                  <span>JAR 01 // TRAVEL</span>
                  <span className="text-[#D4F34A] font-bold">92%</span>
                </div>
                <div className="text-2xl font-black text-white font-sans">₹46,000</div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">Goal: Japan Trip (₹50,000)</div>
                <div className="w-full h-2 rounded-full bg-white/10 mt-4 overflow-hidden">
                  <div className="w-[92%] h-full bg-[#D4F34A] rounded-full" />
                </div>
                <div className="mt-3 text-[10px] font-syne uppercase text-neutral-500">
                  Target Date: 15 Nov 2026
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141A] border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-syne uppercase">
                  <span>JAR 02 // HARDWARE</span>
                  <span className="text-[#2DD4BF] font-bold">78%</span>
                </div>
                <div className="text-2xl font-black text-white font-sans">₹18,500</div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">Goal: Sony 35mm (₹24,000)</div>
                <div className="w-full h-2 rounded-full bg-white/10 mt-4 overflow-hidden">
                  <div className="w-[78%] h-full bg-[#2DD4BF] rounded-full" />
                </div>
                <div className="mt-3 text-[10px] font-syne uppercase text-neutral-500">
                  Target Date: 30 Dec 2026
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141A] border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-syne uppercase">
                  <span>JAR 03 // SAFETY</span>
                  <span className="text-emerald-400 font-bold">100%</span>
                </div>
                <div className="text-2xl font-black text-white font-sans">₹1,50,000</div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">Emergency Buffer (3 Months)</div>
                <div className="w-full h-2 rounded-full bg-white/10 mt-4 overflow-hidden">
                  <div className="w-full h-full bg-emerald-400 rounded-full" />
                </div>
                <div className="mt-3 text-[10px] font-syne uppercase text-emerald-400 font-bold">
                  LOCKED IN 7.1% HIGH YIELD
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Design System & Token Specs Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Color Palette Tokens */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131317] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
            <Palette className="w-4 h-4" />
            <span>OPTICAL COLOR TOKENS</span>
          </div>

          <h4 className="font-display text-2xl text-white font-normal mb-4">
            Dark Atmosphere with Deliberate Accents
          </h4>

          <div className="space-y-3 font-sans text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0C0C0E] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#0C0C0E] border border-white/20" />
                <span className="font-bold text-white">Obsidian Canvas</span>
              </div>
              <span className="font-mono text-neutral-400">#0C0C0E</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#141418] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#141418] border border-white/20" />
                <span className="font-bold text-white">Titanium Card Surface</span>
              </div>
              <span className="font-mono text-neutral-400">#141418</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#D4F34A]" />
                <span className="font-bold text-white">Moni Ambient Lime</span>
              </div>
              <span className="font-mono text-[#D4F34A]">#D4F34A</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2DD4BF]" />
                <span className="font-bold text-white">Teal Horizon Pulse</span>
              </div>
              <span className="font-mono text-[#2DD4BF]">#2DD4BF</span>
            </div>
          </div>
        </div>

        {/* Typography Specs */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131317] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-widest text-[#D4F34A] mb-3">
            <Type className="w-4 h-4" />
            <span>TYPOGRAPHY PAIRING</span>
          </div>

          <h4 className="font-display text-2xl text-white font-normal mb-4">
            Four Typographic Registers
          </h4>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[10px] font-syne uppercase text-neutral-400 font-bold">
                DISPLAY & EDITORIAL HEADINGS
              </div>
              <div className="font-display text-xl text-white mt-1">DM Serif Display</div>
              <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                Generates warm, literary gravitas and breaks the cold fintech mold.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[10px] font-syne uppercase text-neutral-400 font-bold">
                TELEMETRY & LABELS
              </div>
              <div className="font-syne text-sm font-bold text-[#D4F34A] mt-1 tracking-wider uppercase">
                SYNE 700 / MONOSPACE REGISTER
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                Precision tracking for numerical ratios, timestamps, and pipeline states.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[10px] font-syne uppercase text-neutral-400 font-bold">
                HUMAN VOICE & THOUGHT MARGINS
              </div>
              <div className="font-handwriting text-2xl text-[#D4CFB4] mt-0.5">
                Caveat cursive script
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                Raw tactile thoughts, sticky note remarks, and human annotations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

