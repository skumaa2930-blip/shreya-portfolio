import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Camera,
  Clapperboard,
  Headphones,
  FlaskConical,
  Wrench,
} from 'lucide-react';

const HABITS = [
  {
    icon: Camera,
    text: 'photographing random things',
    detail: 'Golden hour street lights, rusted iron textures, brutalist concrete corners, and shadows cast through blinds.',
  },
  {
    icon: Clapperboard,
    text: 'making things cinematic',
    detail: 'Color grading daily video snippets in DaVinci Resolve and finding melancholic 24fps rhythm in ordinary mundane moments.',
  },
  {
    icon: Headphones,
    text: 'finding the right song',
    detail: 'Hunting for ambient modular synth loops and analog synthwave that syncs at 110bpm to deep work sessions.',
  },
  {
    icon: FlaskConical,
    text: "trying tools i don't know yet",
    detail: 'Diving headfirst into Rive state machines, Three.js shaders, TouchDesigner noodles, and generative canvases.',
  },
  {
    icon: Wrench,
    text: 'making random things work',
    detail: 'MacGyvering custom CSS hacks, physics spring parameters, tactile haptic feedback, and untangling messy UX logic.',
  },
];

export const AboutSection: React.FC = () => {
  const [expandedHabitIndex, setExpandedHabitIndex] = useState<number | null>(null);

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
              <div className="relative aspect-[352/440] w-full bg-[#0E0E0E] rounded-[2px] overflow-hidden border border-white/5">
                <img
                  src="/shreya-portfolio/assets/shreya-photo.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop';
                  }}
                  alt="Shreya Kumavat"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Subtle Polaroid Bottom Lip / Frame */}
              <div className="h-6 sm:h-8" />
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Heading, Bio Cards, Notes, Habits           */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            
            {/* Main Editorial Serif Heading */}
            <div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-white uppercase leading-[0.96] select-none">
                OH.
                <br />
                THAT’S WHO
                <br />
                MADE THIS.
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
                <div className="w-3.5 h-3.5 rounded-full bg-[#131313] border border-[#D4F34A]/80 flex items-center justify-center shadow-[0_0_8px_rgba(212,243,74,0.7)] mx-auto -mt-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4F34A]" />
                </div>

                <p className="font-handwriting text-[#F1EBE1] text-base sm:text-lg text-center leading-tight font-medium">
                  still figuring
                  <br />
                  things out.
                  <br />
                  always. ♡
                </p>
              </motion.div>

              {/* Bio Card Container */}
              <div className="bg-[#1C1B1B]/70 border border-[#353534]/40 rounded-[2px] p-6 sm:p-7 md:p-8 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.35)] relative z-10">
                <h3 className="font-handwriting text-2xl sm:text-3xl text-white italic mb-4 font-normal">
                  Hello, I’m Shreya Kumavat.
                </h3>
                <div className="space-y-3.5 text-[#E5E2E1] text-[15px] sm:text-base font-sans leading-relaxed">
                  <p>
                    I like making things, figuring things out, and occasionally getting way too curious about something that was supposed to take five minutes.
                  </p>
                  <p>
                    I’m a UX designer who enjoys turning messy problems into simple, useful experiences. I care about details, storytelling, and making things feel human.
                  </p>
                  <p className="text-[#C6C9AF] text-sm sm:text-[15px]">
                    When i’m not designing, i’m probably behind a camera, editing a video, listening to music, or learning something new.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Card with Location/Education/Role & Overlapping Sticky Note 2 */}
            <div className="relative">
              
              {/* Sticky Note 2: "most of my best ideas come when i'm not trying to have ideas." */}
              <motion.div
                initial={{ opacity: 0, rotate: 4, scale: 0.95 }}
                whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute -top-5 right-[-10px] sm:right-[-16px] md:right-[-24px] z-20 w-60 sm:w-72 bg-[#2A241B] border border-[#483C2D] px-4 py-4 sm:px-5 sm:py-4.5 rounded-[2px] shadow-[0_16px_36px_rgba(0,0,0,0.7)] cursor-pointer select-none"
              >
                {/* Horizontal Scotch Tape at top center */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 bg-white/20 backdrop-blur-[2px] border-t border-b border-white/25 shadow-sm"
                  style={{
                    clipPath: 'polygon(2% 0%, 98% 3%, 97% 97%, 0% 100%)',
                  }}
                />

                <p className="font-handwriting text-[#F7F2EA] text-lg sm:text-xl leading-snug font-medium">
                  most of my best ideas come
                  <br />
                  when i&apos;m not trying to have
                  <br />
                  ideas.
                </p>

                {/* Bottom Lime Accent Line */}
                <div className="w-full h-[1.5px] bg-[#D4F34A]/80 rounded-full mt-3 shadow-[0_0_6px_rgba(212,243,74,0.4)]" />
              </motion.div>

              {/* Info Card Left Box */}
              <div className="bg-[#1C1B1B]/70 border border-[#353534]/40 rounded-[2px] p-6 sm:p-7 backdrop-blur-sm min-h-[130px] flex flex-col justify-center shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                <div className="space-y-3 max-w-[260px] sm:max-w-xs text-[#E5E2E1] text-sm sm:text-[15px] font-sans">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#D4F34A] shrink-0" />
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-[#D4F34A] shrink-0" />
                    <span>Bachelor Of Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#D4F34A] shrink-0" />
                    <span>UX / UI Designer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Subheading: THINGS I CAN'T STOP DOING */}
            <div className="pt-5 pb-1">
              <div className="inline-block relative">
                <h4 className="font-display italic text-lg sm:text-xl tracking-wide text-[#E5E2E1] font-normal">
                  THINGS I CAN’T STOP DOING
                </h4>

                {/* Authentic Sketchy Wavy Lime Underline from Figma SVG */}
                <div className="mt-1 w-full max-w-[260px] sm:max-w-[290px]">
                  <svg
                    viewBox="0 0 232 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto text-[#D1F047] drop-shadow-[0_0_4px_rgba(209,240,71,0.5)]"
                  >
                    <path
                      d="M2 5C15 4.5 35 6 50 5.5C70 4.8 90 5.2 110 5C135 4.7 160 5.4 185 5C200 4.8 215 5.2 230 5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 5 Habit Pill Cards (Without Arrows) */}
            <div className="space-y-2.5">
              {HABITS.map((habit, idx) => {
                const IconComponent = habit.icon;
                const isExpanded = expandedHabitIndex === idx;

                return (
                  <div
                    key={habit.text}
                    className="rounded-[2px] bg-[#1C1B1B]/80 hover:bg-[#222222] border border-[#353534]/40 hover:border-white/20 transition-all duration-200 overflow-hidden group shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedHabitIndex(isExpanded ? null : idx)}
                      className="w-full h-[46px] sm:h-[48px] px-4 sm:px-5 flex items-center text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <IconComponent className="w-4 h-4 text-[#D4F34A] shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-[#E5E2E1] group-hover:text-white font-sans text-sm sm:text-[15px] lowercase tracking-wide transition-colors">
                          {habit.text}
                        </span>
                      </div>
                    </button>

                    {/* Expandable note detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-3.5 pt-1 text-xs sm:text-sm text-[#C6C9AF] font-sans border-t border-white/5 bg-black/20"
                        >
                          {habit.detail}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


