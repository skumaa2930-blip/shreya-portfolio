import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  ArrowUpRight,
  Smartphone,
} from 'lucide-react';
import { CylinderMediaWall } from './CylinderMediaWall';
import { InteractivePhoneAbout } from './InteractivePhoneAbout';

export const AboutSection: React.FC = () => {
  const [isPhoneOpen, setIsPhoneOpen] = useState<boolean>(false);
  const [isCylinderOpen, setIsCylinderOpen] = useState<boolean>(false);

  return (
    <section id="me" className="relative py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-transparent text-[#ededed] overflow-hidden">
      {/* Subtle radial background glow matching Figma radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(229, 226, 225, 0.08) 0%, rgba(19, 19, 19, 0) 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Polaroid Frame with Tape and Photo          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start pt-2 sm:pt-4">
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.015 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[390px] bg-[#1A1918] p-3.5 sm:p-4 rounded-[3px] border border-[#353534]/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              {/* Top-Left Angled Scotch Tape */}
              <div
                className="absolute -top-4 -left-4 w-24 sm:w-28 h-7 bg-white/20 backdrop-blur-[3px] border-t border-b border-white/25 shadow-sm -rotate-[34deg] pointer-events-none z-30"
                style={{
                  clipPath: 'polygon(3% 0%, 97% 4%, 100% 96%, 0% 100%)',
                }}
              />

              {/* Bottom-Right Angled Scotch Tape */}
              <div
                className="absolute -bottom-4 -right-4 w-24 sm:w-28 h-7 bg-white/20 backdrop-blur-[3px] border-t border-b border-white/25 shadow-sm -rotate-[34deg] pointer-events-none z-30"
                style={{
                  clipPath: 'polygon(0% 4%, 98% 0%, 96% 100%, 2% 96%)',
                }}
              />

              {/* Inner Photo Container */}
              <div
                onClick={() => setIsPhoneOpen(true)}
                className="relative aspect-[352/440] w-full bg-[#0E0E0E] rounded-[2px] overflow-hidden border border-white/5 cursor-pointer group/polaroid"
                title="Click to explore Shreya's mobile screen"
              >
                <img
                  src="/assets/shreya-photo.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop';
                  }}
                  alt="Shreya Kumavat"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.04] group-hover/polaroid:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Polaroid Bottom Lip / Frame */}
              <div className="pt-3 pb-1 px-1 flex items-end justify-between text-xs font-syne text-white/80 border-t border-white/5 mt-2">
                <div className="flex items-center gap-1.5 text-white/90 font-syne font-bold text-xs sm:text-[13px] tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#B6D63A] shrink-0" />
                  <span>PUNE</span>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="font-syne font-bold text-xs sm:text-[13px] text-[#F5F5F0] tracking-wider uppercase">
                    UX/UI DESIGNER
                  </span>
                  <span className="font-syne text-[10px] sm:text-[11px] text-[#A3A3A3] tracking-wider uppercase mt-0.5">
                    BACHELOR OF DESIGNER
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Heading, Bio Card, Habits                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            
            {/* Main Editorial Serif Heading */}
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white uppercase leading-[1.05] select-none">
                OH.
                <br />
                THAT’S WHO
                <br />
                <span className="relative inline-block mt-1">
                  MADE THIS.
                  <svg
                    viewBox="0 0 240 16"
                    className="absolute -bottom-2 left-0 w-full h-auto drop-shadow-[0_0_8px_rgba(182,214,58,0.3)] pointer-events-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 9.5C35 5 110 3 238 7" stroke="#B6D63A" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M10 14C50 10 130 8.5 225 12.5" stroke="#B6D63A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Top Bio Card with Overlapping Sticky Note 1 */}
            <div className="relative pt-4 sm:pt-6">
              
              {/* Sticky Note 1: "still figuring things out. always. ♡" */}
              <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: -8.4, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ rotate: -5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute -top-3 right-2 sm:right-6 z-20 w-36 sm:w-44 bg-[#2E261A] border border-[#4E402C] p-3 sm:p-3.5 rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.6)] cursor-pointer select-none"
              >
                {/* Glowing Lime Pushpin Badge */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#131313] border border-[#B6D63A]/80 flex items-center justify-center shadow-[0_0_8px_rgba(182,214,58,0.7)] mx-auto -mt-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B6D63A]" />
                </div>

                <p className="font-caveat text-[#F5F5F0] text-base sm:text-lg text-center leading-tight font-medium">
                  still figuring
                  <br />
                  things out.
                  <br />
                  always. ♡
                </p>
              </motion.div>

              {/* Bio Card Container */}
              <div className="bg-[#1C1B1B]/70 border border-[#353534]/40 rounded-[2px] p-6 sm:p-7 md:p-8 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.35)] relative z-10">
                <h3 className="font-caveat text-2xl sm:text-3xl text-white italic mb-4 font-normal">
                  Hello, I’m Shreya Kumavat.
                </h3>
                <div className="space-y-3.5 text-[#F5F5F0] text-[15px] sm:text-base font-sans leading-relaxed">
                  <p>
                    I like making things, figuring things out, and occasionally getting way too curious about something that was supposed to take five minutes.
                  </p>
                  <p>
                    I’m a UX designer who enjoys turning messy problems into simple, useful experiences. I care about details, storytelling, and making things feel human.
                  </p>
                  <p className="text-[#A3A3A3] text-sm sm:text-[15px]">
                    When i’m not designing, i’m probably behind a camera, editing a video, listening to music, or learning something new.
                  </p>
                </div>

                {/* Inline Written CTA: get to know me with single underline & arrow */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-start">
                  <button
                    type="button"
                    onClick={() => setIsPhoneOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[#B6D63A] hover:text-[#B6D63A] font-caveat text-2xl sm:text-3xl underline underline-offset-4 decoration-[#B6D63A]/70 hover:decoration-[#B6D63A] transition-all cursor-pointer group"
                  >
                    <span>get to know me</span>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#B6D63A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Samsung S21 FE Phone Modal */}
      <InteractivePhoneAbout
        isOpen={isPhoneOpen}
        onClose={() => setIsPhoneOpen(false)}
        onOpenPhotoWall={() => {
          setIsPhoneOpen(false);
          setIsCylinderOpen(true);
        }}
      />

      {/* 3D Cylinder Photo Wall Screen Component */}
      <CylinderMediaWall
        isOpen={isCylinderOpen}
        onClose={() => {
          setIsCylinderOpen(false);
          setIsPhoneOpen(true);
        }}
      />
    </section>
  );
};
