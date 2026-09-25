import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

interface StageCard {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badgeType: 'dark' | 'lime';
  image: string;
  rotation?: string;
  hasNeonGlow?: boolean;
  notes?: string;
}

const STAGE_CARDS: StageCard[] = [
  {
    id: 'step-01',
    stepNumber: '01',
    title: 'IDEA DUMP',
    subtitle: 'Modular Kiosk Blueprint & Spatial Geometry',
    badgeType: 'dark',
    image: '/assets/process-01.png',
    rotation: 'rotate-0',
    notes: 'Rough architectural wireframe, customer flow & volumetric study.',
  },
  {
    id: 'step-02',
    stepNumber: '02',
    title: 'TRY THINGS OUT',
    subtitle: 'Street Scene | Charcoal Draft | Rough Wireframe Notes',
    badgeType: 'dark',
    image: '/assets/process-02.png',
    rotation: 'rotate-[2.2deg]',
    notes: 'Testing atmosphere, user flow, and vendor ergonomics in dark environments. #UXResearch #FieldStudy',
  },
  {
    id: 'step-03',
    stepNumber: '03',
    title: 'GETTING THERE',
    subtitle: 'Night Market Eats & Atmosphere Synthesis',
    badgeType: 'dark',
    image: '/assets/process-03.png',
    rotation: '-rotate-[2.4deg]',
    notes: 'Noodles & dumplings, late night signage, rain reflections, and density tuning.',
  },
  {
    id: 'step-04',
    stepNumber: '04',
    title: 'MAKE IT REAL',
    subtitle: 'NEON CHAI / ネオン茶屋 — Live Environment',
    badgeType: 'dark',
    image: '/assets/process-04.png',
    rotation: 'rotate-0',
    notes: 'Production-ready atmospheric stall with glowing paper lanterns, steam, tactile materiality, and crafted lighting.',
  },
];

export const ProcessLoopSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<StageCard | null>(null);

  return (
    <section 
      id="explore" 
      className="relative w-full bg-transparent text-white pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* ================= LEFT COLUMN: The Philosophy Statement ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              {/* Tag: [ MY PROCESS (AKA MY LOOP) ] without svg and without border, lighter fill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3.5 py-1.5 rounded-sm bg-[#38352D] mb-6 sm:mb-8 shadow-sm"
              >
                <span 
                  className="text-[#EAE5D8] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-syne"
                >
                  MY PROCESS (AKA MY LOOP)
                </span>
              </motion.div>

              {/* Big Serif Heading: I NOTICE. / I GET CURIOUS. / I TRY IT. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 
                  className="font-dm-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] uppercase"
                >
                  I NOTICE.
                  <br />
                  I GET CURIOUS.
                  <br />
                  <span 
                    className="text-[#D1F047] inline-block mt-1"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(209,240,71,0.35))',
                    }}
                  >
                    I TRY IT.
                  </span>
                </h2>
              </motion.div>

              {/* Personal statement description - split into 2 lines, underline removed */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-2.5 sm:mt-3.5 text-neutral-300 text-xl sm:text-2xl md:text-3xl font-light leading-relaxed max-w-xl font-caveat"
              >
                <p>
                  I&rsquo;m the kind of person who notices things.
                  <br />
                  Gets curious. And can&rsquo;t stop until I figure it out.
                </p>
              </motion.div>

              {/* WHAT DRIVES THIS LOOP? - Capitalized Curiosity, Obsession, Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-14 sm:mt-18 md:mt-20 flex items-start gap-3 sm:gap-3.5 max-w-xl"
              >
                {/* Enlarged 8-point lime asterisk icon */}
                <div className="shrink-0 text-5xl sm:text-6xl md:text-7xl text-[#D1F047] font-black leading-none select-none -mt-1 sm:-mt-2">
                  ✱
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <span 
                    className="text-[#9FA288] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    WHAT DRIVES THIS LOOP?
                  </span>
                  <p 
                    className="text-[#E8E2D7] text-lg sm:text-xl md:text-2xl font-light leading-snug"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    Curiosity to start.&nbsp;&nbsp;&nbsp;Obsession to continue.&nbsp;&nbsp;&nbsp;Purpose to finish.
                  </p>
                </div>
              </motion.div>

              {/* Realistic REMINDER Index Card (tapes removed, pill moved closer to text) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 sm:mt-20 md:mt-24 relative inline-block w-full max-w-md sm:max-w-lg"
              >
                {/* Card Body */}
                <div className="w-full bg-[#DFD9CE] text-[#131313] p-5 sm:p-6 rounded-[2px] shadow-xl relative z-10 flex flex-col justify-center">
                  <span 
                    className="text-[#525252] text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase mb-1.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    REMINDER
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span 
                      className="text-[#131313] text-sm sm:text-base md:text-lg font-black tracking-[0.06em] uppercase"
                      style={{ fontFamily: "'General Sans', system-ui, sans-serif" }}
                    >
                      NEVER SETTLE. MAKE IT BETTER.
                    </span>
                    {/* Lime Highlight Pill */}
                    <span 
                      className="bg-[#D1F047] text-[#5A6B00] px-2.5 py-1 text-sm sm:text-base md:text-lg font-black tracking-wider uppercase inline-block shadow-sm"
                      style={{ fontFamily: "'General Sans', system-ui, sans-serif" }}
                    >
                      REPEAT
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 4 Pinned Canvas Stage Boards (Made smaller, headings raised, glow removed) ================= */}
          <div className="lg:col-span-6 relative w-full pt-4">
            
            {/* Ambient grid placement layout for the 4 pinned boards */}
            <div className="relative w-full min-h-[660px] sm:min-h-[760px] md:min-h-[820px] lg:min-h-[860px]">
              
              {/* ------------ STAGE 01: 01 IDEA DUMP (Top Left) ------------ */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 top-0 w-[62%] sm:w-[52%] z-10 group"
              >
                {/* Badge Tag: 01 IDEA DUMP - Space increased above image */}
                <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-[10px] sm:text-[11px] font-syne text-white font-bold">
                    01
                  </div>
                  <span 
                    className="text-[#CBC6BB] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    IDEA DUMP
                  </span>
                </div>

                {/* Polaroid Frame */}
                <div className="relative bg-[#1C1B1B] p-2 sm:p-2.5 pb-2.5 rounded-[2px] border border-[#353534]/80 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Top center tape */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-white/20 backdrop-blur-sm z-20 border border-white/20" />
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-black">
                    <img
                      src={STAGE_CARDS[0].image}
                      alt="01 IDEA DUMP - Kiosk Sketch"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover filter contrast-125 brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => setSelectedCard(STAGE_CARDS[0])}
                      className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Enlarge"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* ------------ STAGE 02: 02 TRY THINGS OUT (Top Right, Rotated) ------------ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute right-0 top-[16%] w-[62%] sm:w-[54%] z-20 group"
                style={{ transform: 'rotate(2.2deg)' }}
              >
                {/* Badge Tag: 02 TRY THINGS OUT - Space increased above image */}
                <div className="flex items-center gap-2 mb-3.5 sm:mb-4 justify-end pr-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-[10px] sm:text-[11px] font-syne text-white font-bold">
                    02
                  </div>
                  <span 
                    className="text-[#CBC6BB] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    TRY THINGS OUT
                  </span>
                </div>

                {/* Polaroid Frame */}
                <div className="relative bg-[#1C1B1B] p-2 sm:p-2.5 pb-2.5 rounded-[2px] border border-[#353534]/80 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Top center tape */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-white/20 backdrop-blur-sm z-20 border border-white/20" />

                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-black">
                    <img
                      src={STAGE_CARDS[1].image}
                      alt="02 TRY THINGS OUT - Wireframe Notes"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover filter contrast-125 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => setSelectedCard(STAGE_CARDS[1])}
                      className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Enlarge"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* ------------ STAGE 03: 03 GETTING THERE (Middle Left, Tilted) ------------ */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute left-[-1%] sm:left-0 top-[47%] w-[62%] sm:w-[54%] z-30 group"
                style={{ transform: 'rotate(-2.4deg)' }}
              >
                {/* Badge Tag: 03 GETTING THERE - Space increased above image */}
                <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-[10px] sm:text-[11px] font-syne text-white font-bold">
                    03
                  </div>
                  <span 
                    className="text-[#CBC6BB] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    GETTING THERE
                  </span>
                </div>

                {/* Polaroid Frame */}
                <div className="relative bg-[#1C1B1B] p-2 sm:p-2.5 pb-2.5 rounded-[2px] border border-[#353534]/80 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Top center tape */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-white/20 backdrop-blur-sm z-20 border border-white/20" />

                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-black">
                    <img
                      src={STAGE_CARDS[2].image}
                      alt="03 GETTING THERE - Charcoal Night Scene"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => setSelectedCard(STAGE_CARDS[2])}
                      className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Enlarge"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* ------------ STAGE 04: 04 MAKE IT REAL (Bottom Right - Glow Removed, Clean & Sleek) ------------ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute right-0 bottom-0 w-[64%] sm:w-[56%] z-40 group"
              >
                {/* Badge Tag: 04 MAKE IT REAL - Space increased above image */}
                <div className="flex items-center gap-2 mb-3.5 sm:mb-4 justify-end pr-2">
                  <div 
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-[10px] sm:text-[11px] font-syne text-white font-bold"
                  >
                    04
                  </div>
                  <span 
                    className="text-[#CBC6BB] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    MAKE IT REAL
                  </span>
                </div>

                {/* Clean Polaroid Frame (Glow removed) */}
                <div 
                  className="relative bg-[#1C1B1B] p-2 sm:p-2.5 pb-2.5 rounded-[2px] border border-[#353534]/80 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  {/* Top center neutral tape */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-white/20 backdrop-blur-sm z-20 border border-white/20" />

                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-black">
                    <img
                      src={STAGE_CARDS[3].image}
                      alt="04 MAKE IT REAL - Neon Chai Stall"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover filter contrast-115 brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    <button
                      onClick={() => setSelectedCard(STAGE_CARDS[3])}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Enlarge"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL LIGHTBOX for enlarging any stage ================= */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full bg-[#1C1B1B] border border-white/20 rounded-lg p-5 sm:p-6 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-black/50 hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-syne font-bold text-[#D1F047] bg-[#D1F047]/10 px-2.5 py-1 rounded border border-[#D1F047]/30">
                  PHASE {selectedCard.stepNumber}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-syne tracking-wider text-white uppercase">
                  {selectedCard.title}
                </h3>
              </div>

              <div className="overflow-hidden rounded aspect-[16/10] bg-black mb-4">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-neutral-300 text-sm sm:text-base font-light font-sans leading-relaxed">
                {selectedCard.notes}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};




