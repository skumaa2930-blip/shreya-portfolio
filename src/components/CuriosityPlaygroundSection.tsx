import React, { useState } from 'react';
import { motion } from 'motion/react';
import { StickyNote } from './StickyNote';
import {
  PlaygroundCardModal,
  PLAYGROUND_CARDS,
  PlaygroundCardData,
} from './PlaygroundCardModal';

export const CuriosityPlaygroundSection: React.FC = () => {
  // Modal state for active playground card
  const [selectedModalCard, setSelectedModalCard] = useState<PlaygroundCardData | null>(null);

  const openCardModal = (cardId: string) => {
    const card = PLAYGROUND_CARDS.find((c) => c.id === cardId);
    if (card) {
      setSelectedModalCard(card);
    }
  };

  return (
    <section id="experiment" className="relative py-20 md:py-28 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
      {/* Modal viewer for all playground experiment cards */}
      <PlaygroundCardModal
        card={selectedModalCard}
        onClose={() => setSelectedModalCard(null)}
        onSelectCard={(c) => setSelectedModalCard(c)}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white uppercase leading-[1.05]">
            THINGS I EXPLORED
            <br />
            <span className="text-white">
              BECAUSE I WAS{' '}
              <span className="relative inline-block">
                CURIOUS.
                <svg
                  viewBox="0 0 200 16"
                  className="absolute -bottom-2 left-0 w-full h-auto drop-shadow-[0_0_8px_rgba(182,214,58,0.3)] pointer-events-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9.5C30 5.2 90 3 198 7" stroke="#B6D63A" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M8 14C45 10 110 8.5 190 12.5" stroke="#B6D63A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h2>
          <p className="mt-3 font-caveat text-2xl sm:text-3xl text-[#B6D63A]">
            some worked. some needed a lot of redo
          </p>
        </div>

        {/* Playful Handwritten Annotation with Arrow */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="text-right">
            <p className="font-caveat text-xl sm:text-2xl text-[#B6D63A] leading-tight whitespace-nowrap">
              click any card
            </p>
          </div>
          <svg
            className="w-10 h-10 text-[#B6D63A] animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M12 4v14" />
          </svg>
        </div>
      </div>

      {/* 4 Bento Experiment Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* CARD 1: Semiotics & Semantics Game Design */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => openCardModal('01-tmm-video')}
          className="group relative rounded-xl bg-[#151417] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer hover:border-white/25 transition-all"
        >
          {/* Top Bar with Centered Title */}
          <div className="flex items-center justify-center font-syne pb-2 border-b border-white/5 mb-2.5">
            <span className="text-[#F5F5F0] font-semibold text-xs sm:text-[13px] text-center truncate px-1 uppercase tracking-wider" title="Semiotics and Semantics Game Design">
              Semiotics & Semantics Game Design
            </span>
          </div>

          {/* Video / Image Player Container */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black transition-all">
            <img
              src="/assets/card1.png"
              alt="Semiotics and Semantics Game Design Preview"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop';
                }
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sticky Note with Tools Used */}
          <div className="mt-3">
            <StickyNote
              text={"Tools used:\nFigma · Runway AI · Leonardo AI · ElevenLabs · ChatGPT"}
              rotation="-rotate-2"
              tapePosition="top"
              variant="yellow"
              className="text-xs"
            />
          </div>
        </motion.div>

        {/* CARD 2: Tangible Interaction Prototype */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => openCardModal('02-tangible-game')}
          className="group relative rounded-xl bg-[#151417] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer hover:border-white/25 transition-all"
        >
          {/* Top Bar with Centered Title */}
          <div className="flex items-center justify-center font-syne pb-2 border-b border-white/5 mb-2.5">
            <span className="text-[#F5F5F0] font-semibold text-xs sm:text-[13px] text-center truncate px-1 uppercase tracking-wider" title="Tangible Interaction Prototype">
              Tangible Interaction Prototype
            </span>
          </div>

          {/* Video / Image Player Container */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black transition-all">
            <img
              src="/assets/card2.png"
              alt="Tangible Interaction Preview"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop';
                }
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sticky Note with Tools Used */}
          <div className="mt-3">
            <StickyNote
              text={"Tools used:\nFigma · Android Studio · Arduino IDE · Tinkercad"}
              rotation="rotate-2"
              tapePosition="top"
              variant="yellow"
              className="text-xs"
            />
          </div>
        </motion.div>

        {/* CARD 3: Solarify Website Coding */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => openCardModal('03-solarify')}
          className="group relative rounded-xl bg-[#151417] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer hover:border-white/25 transition-all"
        >
          {/* Top Bar with Centered Title */}
          <div className="flex items-center justify-center font-syne pb-2 border-b border-white/5 mb-2.5">
            <span className="text-[#F5F5F0] font-semibold text-xs sm:text-[13px] text-center truncate px-1 uppercase tracking-wider" title="Solarify Website Coding">
              Solarify Website Coding
            </span>
          </div>

          {/* Image / Interactive Container */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black transition-all">
            <img
              src="/assets/card3.png"
              alt="Solarify Website Coding Preview"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop';
                }
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sticky Note with Tools Used */}
          <div className="mt-3">
            <StickyNote
              text={"Tools used:\nVS Code(HTML, CSS)· Framer · XAMPP"}
              rotation="-rotate-1"
              tapePosition="top"
              variant="yellow"
              className="text-xs"
            />
          </div>
        </motion.div>

        {/* CARD 4: Vibe Coding */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => openCardModal('04-vibe-coding')}
          className="group relative rounded-xl bg-[#151417] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer hover:border-white/25 transition-all"
        >
          {/* Top Bar with Centered Title */}
          <div className="flex items-center justify-center font-syne pb-2 border-b border-white/5 mb-2.5">
            <span className="text-[#F5F5F0] font-semibold text-xs sm:text-[13px] text-center truncate px-1 uppercase tracking-wider" title="Vibe Coding">
              Vibe Coding
            </span>
          </div>

          {/* Video / Image Player Container */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black transition-all">
            <img
              src="/assets/card4.png"
              alt="Vibe Coding Preview"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                }
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sticky Note with Tools Used */}
          <div className="mt-3">
            <StickyNote
              text={"Tools used:\nGoogle AI Studio · ChatGPT"}
              rotation="rotate-2"
              tapePosition="top"
              variant="yellow"
              className="text-xs"
            />
          </div>
        </motion.div>
      </div>

      {/* Sub-caption: still curious??? */}
      <div className="py-20 sm:py-28 text-center">
        <p className="font-caveat text-3xl sm:text-4xl text-[#B6D63A] tracking-wider">
          still curious???
        </p>
      </div>
    </section>
  );
};

