import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface BloodBankTopSectionProps {
  onBack?: () => void;
}

export const BloodBankTopSection: React.FC<BloodBankTopSectionProps> = ({ onBack }) => {
  return (
    <div className="w-full bg-[#0c0c0e] text-[#ededed] font-sans antialiased selection:bg-[#c9f14a] selection:text-black">
      {/* ========================================================================= */}
      {/* SECTION 1 – HERO (matching Moni hero layout, font sizes, colors, and padding) */}
      {/* ========================================================================= */}
      <header
        id="bb-hero-top"
        className="pt-20 sm:pt-24 pb-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: 7 columns, matching MoniHero */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tag Pill: SYSTEM · UX · OOUX in lime tint matching Moni pill */}
            <div className="inline-flex items-center px-3 py-1 rounded bg-[#c9f14a]/10 border border-[#c9f14a]/20 text-[#c9f14a] text-[11px] font-mono tracking-widest uppercase mb-6 sm:mb-8">
              SYSTEM · UX · OOUX
            </div>

            {/* Title: BLOOD BANK Management Software */}
            <h1 className="leading-[1.05] tracking-tight">
              <span className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#F5F5F0] tracking-tight">
                BLOOD BANK{' '}
              </span>
              <span className="font-playfair italic text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-[#c9f14a] tracking-tight block sm:inline">
                Management Software
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-7 text-[#F5F5F0]/80 font-sans text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-xl">
              A blood bank system designed with clarity, structure and empathy. Mapping complex relationships between donors, camps, blood requests, and shelf-life urgency.
            </p>

            {/* Handwritten Quote matching Moni font, size, and lime color */}
            <div className="mt-8 sm:mt-10">
              <span className="font-caveat text-2xl sm:text-[28px] text-[#c9f14a] tracking-wide inline-block">
                &ldquo;a lot of objects.&rdquo;
              </span>
            </div>

            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-[#222222] my-8 sm:my-10" />

            {/* 4 Metadata Columns matching Moni typography & palette */}
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
          </motion.div>

          {/* RIGHT: Laptop mock-up in the right column (col-span-5, borderless, zoomed and enlarged) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end mt-6 lg:mt-0 overflow-visible"
          >
            <div className="relative w-full max-w-[640px] lg:max-w-none flex items-center justify-center lg:justify-end py-2 sm:py-4">
              <img
                src="/shreya-portfolio/assets/bb-laptop.png"
                alt="Blood Bank Management Dashboard on Laptop"
                className="w-full sm:w-[110%] lg:w-[124%] max-w-none h-auto object-contain block drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)] select-none transform scale-105 sm:scale-115 lg:scale-125 origin-center lg:origin-right hover:scale-[1.28] transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('project-bb')) {
                    target.src = '/shreya-portfolio/assets/project-bb.png';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 2 – PROJECT OVERVIEW (dark theme, matching MoniProblemResearch / Moni stats) */}
      {/* ========================================================================= */}
      <section
        id="bb-overview-band"
        className="pt-16 pb-20 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none border-t border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT Column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tag */}
            <div className="mb-4">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-[#c9f14a]">
                PROJECT OVERVIEW
              </span>
            </div>

            {/* Headline in Playfair Display matching Moni section headlines */}
            <h2 className="font-playfair font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#F5F5F0] leading-[1.12] tracking-tight">
              Blood banks are
              <br />
              <span className="text-[#F5F5F0]">high-reliability systems.</span>
            </h2>

            {/* Subtitle / Description */}
            <p className="mt-6 text-[#949490] font-sans text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl font-normal">
              Blood banks are critical healthcare service institutions responsible for the safe collection, laboratory testing, physical component separation, cold-chain storage, and urgent distribution of life-saving blood units. A single manual clerical mismatch can be lethal.
            </p>
          </motion.div>

          {/* RIGHT Column: Bento Stat Cards matching Moni Bento card style */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 lg:mt-2">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#121212] rounded-2xl border border-white/5 p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:border-white/10 transition-colors shadow-lg"
            >
              <div>
                <div className="font-playfair text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#c9f14a] leading-none tracking-tight">
                  2,760+
                </div>
                <p className="text-[#F5F5F0] font-sans text-sm sm:text-[14.5px] leading-relaxed mt-4 font-normal">
                  Licensed blood banks in India
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-white/5 my-3.5" />
                <div className="text-[10px] font-mono tracking-widest text-[#949490] uppercase">
                  SOURCE: National Health Portal Registry
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#121212] rounded-2xl border border-white/5 p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:border-white/10 transition-colors shadow-lg"
            >
              <div>
                <div className="font-playfair text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#c9f14a] leading-none tracking-tight">
                  14.6M
                </div>
                <p className="text-[#F5F5F0] font-sans text-sm sm:text-[14.5px] leading-relaxed mt-4 font-normal">
                  Blood units collected annually
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-white/5 my-3.5" />
                <div className="text-[10px] font-mono tracking-widest text-[#949490] uppercase">
                  HIGH VOLATILITY IN PERISHABLES
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 – PRIMARY RESEARCH + OUR APPROACH (matching MoniDesignIntention styling) */}
      {/* ========================================================================= */}
      <section
        id="bb-research-approach"
        className="pt-16 pb-20 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none border-t border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Card matching Moni Design Intention card with dark background and clean borders */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#131313] rounded-2xl border border-white/5 p-7 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-4">
              <span className="text-[11px] font-mono font-medium tracking-[0.24em] uppercase text-[#8E8E8A]">
                PRIMARY RESEARCH
              </span>
            </div>

            <h3 className="font-playfair font-normal text-2xl sm:text-3xl text-white leading-snug mb-6 tracking-tight">
              Semi-structured contextual interviews
            </h3>

            <div className="space-y-4 pt-2 border-t border-white/5">
              <div className="flex justify-between items-baseline gap-4 py-2">
                <span className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-[#8E8E8A]">
                  Participants
                </span>
                <span className="font-sans text-sm sm:text-[15px] text-[#F5F5F0] text-right font-normal">
                  Nurses · Technicians · Supervisors
                </span>
              </div>

              <div className="w-full h-[1px] bg-white/5" />

              <div className="flex justify-between items-baseline gap-4 py-2">
                <span className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-[#8E8E8A]">
                  Duration
                </span>
                <span className="font-sans text-sm sm:text-[15px] text-[#c9f14a] text-right font-mono font-medium">
                  30–45 minutes
                </span>
              </div>
            </div>
          </motion.article>

          {/* RIGHT: Approach headline & description */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            <div className="mb-4">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-[#c9f14a]">
                METHODOLOGY
              </span>
            </div>

            <h2 className="font-playfair font-normal text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.14] tracking-tight">
              Our Approach
            </h2>

            <p className="mt-6 text-[#949490] font-sans text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
              To understand real-world operational workflows, decision-making behaviours, pain points, and system dependencies in blood bank settings.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


