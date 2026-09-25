import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MoniHeroProps {
  onBack?: () => void;
  onExplorePrototype?: () => void;
}

export const MoniHero: React.FC<MoniHeroProps> = ({ onBack }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [askInput, setAskInput] = useState('');

  return (
    <section
      id="moni-hero"
      className="pt-20 sm:pt-24 pb-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none"
    >
      {/* Main Two-Column Hero: Left Copy & Right Phone */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Left Column: Tag, Title, Subtitle, Handwritten Note, Metadata */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag Pill: AI · FINANCE · AGENT */}
          <div className="inline-flex items-center px-3 py-1 rounded bg-[#C9F24A]/10 border border-[#C9F24A]/20 text-[#C9F24A] text-[11px] font-mono tracking-widest uppercase mb-6 sm:mb-8">
            AI · FINANCE · AGENT
          </div>

          {/* Title: MONI Finance Agent */}
          <h1 className="leading-[1.05] tracking-tight">
            <span className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#F5F5F0] tracking-tight">
              MONI{' '}
            </span>
            <span className="font-playfair italic text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-[#C9F24A] tracking-tight">
              Finance Agent
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="mt-7 text-[#F5F5F0]/80 font-sans text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-xl">
            A finance agent designed to help people make sense of their money through
            conversational autonomy, predictive cash-flow modeling, and low-cognitive-load interfaces.
          </p>

          {/* Handwritten Quote */}
          <div className="mt-8 sm:mt-10">
            <span className="font-caveat text-2xl sm:text-[28px] text-[#C9F24A] tracking-wide inline-block">
              "this one got a little serious. but finance always is."
            </span>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-[#222222] my-8 sm:my-10" />

          {/* 4 Metadata Columns */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            <div>
              <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#8E8E8A]">
                MY ROLE
              </div>
              <div className="text-xs sm:text-[13px] font-sans text-[#F5F5F0] mt-1.5 font-normal">
                UX Researcher
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#8E8E8A]">
                TIMELINE
              </div>
              <div className="text-xs sm:text-[13px] font-sans text-[#F5F5F0] mt-1.5 font-normal">
                3 Weeks
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#8E8E8A]">
                TEAM
              </div>
              <div className="text-xs sm:text-[13px] font-sans text-[#F5F5F0] mt-1.5 font-normal">
                5 Members
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#8E8E8A]">
                TOOLS
              </div>
              <div className="text-xs sm:text-[13px] font-sans text-[#F5F5F0] mt-1.5 font-normal">
                Figma
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Standard Mobile Phone Layout with moni-video.mp4 */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 lg:pt-0">
          <div
            id="moni-phone-mockup"
            className="w-[310px] sm:w-[345px] md:w-[370px] aspect-[9/19.5] max-h-[760px] rounded-[48px] bg-black border-0 p-0 flex flex-col justify-center items-center shadow-[0_30px_80px_rgba(0,0,0,0.85)] relative overflow-hidden group"
          >
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 inset-x-0 mx-auto w-24 h-4 bg-black rounded-full flex items-center justify-end pr-2.5 z-20 pointer-events-none shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            </div>

            <video
              src="/assets/moni-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[48px] select-none block"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.moni-hero-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'moni-hero-fallback w-full h-full rounded-[48px] bg-[#141416] border-0 flex flex-col justify-between p-6 pt-10 text-center';
                  fallback.innerHTML = `
                    <div class="text-[10px] font-mono tracking-widest text-[#C9F24A] uppercase">MONI · MOBILE HERO</div>
                    <div class="my-auto flex flex-col items-center gap-3">
                      <div class="w-14 h-14 rounded-2xl bg-[#C9F24A]/10 border border-[#C9F24A]/30 flex items-center justify-center text-[#C9F24A] font-bold text-xl">▶</div>
                      <div class="text-xs font-mono text-neutral-300 font-semibold">moni-video.mp4</div>
                      <div class="text-[10px] font-mono text-neutral-500">Standard Mobile Device Viewport</div>
                    </div>
                    <div class="text-[10px] font-mono text-neutral-400 uppercase">Available Safe-Spend ₹2,48,750</div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};



