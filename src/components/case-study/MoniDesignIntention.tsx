import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MoniOurApproachVisual } from './MoniOurApproachVisual';
import { MoniUserPersona } from './MoniUserPersona';
import { MoniIntelligenceLayer } from './MoniIntelligenceLayer';
import { MoniWhatCanDoAndRoles } from './MoniWhatCanDoAndRoles';
import { MoniAgentDecisionSection } from './MoniAgentDecisionSection';

export const MoniDesignIntention: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="moni-design-intention"
      className="py-16 md:py-24 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center justify-between">
        {/* Left Column: Physical Moni Cardholder Mockup with Enhanced Glow & Visibility */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] aspect-[493/423] flex items-center justify-center group"
          >
            {/* Ambient soft luminous glow */}
            <div className="absolute inset-0 bg-[#C9F24A]/[0.08] blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-white/[0.08] blur-[45px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-6 w-[85%] h-14 bg-black/70 blur-2xl rounded-full pointer-events-none" />

            {/* Wallet & Cards Container */}
            <div className="relative w-[340px] sm:w-[390px] h-[270px] sm:h-[300px] flex flex-col items-center justify-end">
              {/* Back Card: Midnight Navy Slate */}
              <motion.div
                animate={{
                  y: hoveredCard === 1 ? -36 : 0,
                  rotate: hoveredCard === 1 ? -1.5 : 0,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                onHoverStart={() => setHoveredCard(1)}
                onHoverEnd={() => setHoveredCard(null)}
                className="absolute top-2 w-[285px] sm:w-[325px] h-[180px] sm:h-[200px] rounded-2xl bg-gradient-to-b from-[#2a374f] via-[#1e2738] to-[#161d2b] p-4 sm:p-5 shadow-[0_14px_34px_rgba(0,0,0,0.6)] border border-white/20 flex flex-col justify-between cursor-pointer z-10"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="font-syne font-black text-2xl sm:text-3xl tracking-tight text-white lowercase">
                    moni
                  </span>

                  {/* Contactless Waves */}
                  <svg
                    className="w-6 h-6 text-white/85"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                    <path d="M12 19a8.5 8.5 0 0 1 0-14" />
                    <path d="M15.5 21.5a12 12 0 0 1 0-19" />
                  </svg>
                </div>

                {/* Card Footer Detail */}
                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-white/60 uppercase">
                  <span>WORLD DEBIT</span>
                  <span>•••• 8492</span>
                </div>
              </motion.div>

              {/* Front Card: Brushed Matte Silver / Titanium */}
              <motion.div
                animate={{
                  y: hoveredCard === 2 ? -28 : 0,
                  rotate: hoveredCard === 2 ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                onHoverStart={() => setHoveredCard(2)}
                onHoverEnd={() => setHoveredCard(null)}
                className="absolute top-12 w-[285px] sm:w-[325px] h-[180px] sm:h-[200px] rounded-2xl bg-gradient-to-b from-[#f3f4f6] via-[#e5e7eb] to-[#d1d5db] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.5)] border border-white/80 flex flex-col justify-between cursor-pointer z-20"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="font-syne font-black text-2xl sm:text-3xl tracking-tight text-neutral-900 lowercase">
                    moni
                  </span>

                  {/* Contactless Waves */}
                  <svg
                    className="w-6 h-6 text-neutral-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                    <path d="M12 19a8.5 8.5 0 0 1 0-14" />
                    <path d="M15.5 21.5a12 12 0 0 1 0-19" />
                  </svg>
                </div>

                {/* Card Footer Detail */}
                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-neutral-700 uppercase font-semibold">
                  <span>METAL PREMIUM</span>
                  <span>•••• 3108</span>
                </div>
              </motion.div>

              {/* Front Brightened Pebbled Leather Pocket */}
              <div className="relative w-[308px] sm:w-[348px] h-[165px] sm:h-[185px] rounded-b-xl rounded-t-sm z-30 shadow-[0_24px_55px_rgba(0,0,0,0.85)] overflow-hidden bg-[#1c1c24] border border-white/20">
                {/* Realistic SVG Leather Texture & Tailored Stitching */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="leatherGlowExact" cx="50%" cy="20%" r="85%">
                      <stop offset="0%" stopColor="#3c3c4a" stopOpacity="1" />
                      <stop offset="55%" stopColor="#24242e" stopOpacity="1" />
                      <stop offset="100%" stopColor="#181820" stopOpacity="1" />
                    </radialGradient>
                    <filter id="leatherNoiseExact">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.08" />
                      </feComponentTransfer>
                      <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
                    </filter>
                  </defs>

                  {/* Leather surface */}
                  <rect width="100%" height="100%" fill="url(#leatherGlowExact)" />
                  <rect width="100%" height="100%" filter="url(#leatherNoiseExact)" />

                  {/* Top Pocket Rim Bevels */}
                  <line
                    x1="0"
                    y1="2"
                    x2="100%"
                    y2="2"
                    stroke="#78788a"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                  />
                  <line
                    x1="0"
                    y1="4"
                    x2="100%"
                    y2="4"
                    stroke="#111115"
                    strokeWidth="2"
                    strokeOpacity="0.8"
                  />

                  {/* Outer Stitching Line */}
                  <path
                    d="M 12 10 L 12 calc(100% - 12) Q 12 calc(100% - 4) 20 calc(100% - 4) L calc(100% - 20) calc(100% - 4) Q calc(100% - 12) calc(100% - 4) calc(100% - 12) calc(100% - 12) L calc(100% - 12) 10"
                    fill="none"
                    stroke="#8a8a9c"
                    strokeWidth="1.5"
                    strokeDasharray="4 3.5"
                  />
                  {/* Highlight Stitching Accent */}
                  <path
                    d="M 13 11 L 13 calc(100% - 13) Q 13 calc(100% - 5) 20 calc(100% - 5) L calc(100% - 20) calc(100% - 5) Q calc(100% - 13) calc(100% - 5) calc(100% - 13) calc(100% - 13) L calc(100% - 13) 11"
                    fill="none"
                    stroke="#cfcfe0"
                    strokeWidth="0.9"
                    strokeDasharray="4 3.5"
                    strokeOpacity="0.8"
                  />
                </svg>

                {/* Top Lip Inset Glow */}
                <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 inset-x-0 flex justify-center items-center pointer-events-none opacity-60">
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/80 font-medium">
                    MONI HARDWARE × TACTILE FINTECH
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Prominent Display Headline + Design Intention Box */}
        <div className="lg:col-span-6 flex flex-col justify-center max-w-[530px] mx-auto lg:mx-0">
          {/* 1. Big Serif Display Question Headline matching SVG */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h3 className="font-playfair font-normal text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-white leading-[1.14] tracking-tight">
              What if this
              <br />
              constant thinking
              <br />
              took a backseat?
            </h3>
          </motion.div>

          {/* 2. Dark Card with Design Intention Statement */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#131313] rounded-2xl border border-white/5 p-7 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Header: DESIGN INTENTION */}
            <div className="mb-4">
              <span className="text-[11px] font-mono font-medium tracking-[0.24em] uppercase text-[#8E8E8A]">
                DESIGN INTENTION
              </span>
            </div>

            {/* Paragraph Body Text */}
            <p className="font-sans text-[#F5F5F0]/90 text-sm sm:text-[15.5px] leading-[1.65] font-light">
              Small financial decisions constantly interrupt everyday life.
              We aimed to remove that mental layer so users can focus on
              experiences, not managing money.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SVG Our Approach Architecture Grid Visual */}
      <MoniOurApproachVisual />

      {/* Meet Rohan - User Persona & Goals Section */}
      <MoniUserPersona />

      {/* A Financial Intelligence Layer Section */}
      <MoniIntelligenceLayer />

      {/* What MONI Can Do & Agent Shifts Roles Landing Section */}
      <MoniWhatCanDoAndRoles />

      {/* Before Any Action, 5 Questions / When to Appear & Disappear / System of Agents */}
      <MoniAgentDecisionSection />
    </section>
  );
};
