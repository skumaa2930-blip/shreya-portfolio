import React from 'react';
import { motion } from 'motion/react';

export const MoniUserPersona: React.FC = () => {
  const userGoals = [
    {
      number: '01',
      text: 'Feel organized and aware of finances without constant effort.',
    },
    {
      number: '02',
      text: 'Eliminate the daily hassle of financial decision-making.',
    },
    {
      number: '03',
      text: 'Feel secure and less worried about the financial future.',
    },
    {
      number: '04',
      text: 'Supervise decisions without doubt, regret, or second-guessing.',
    },
  ];

  return (
    <motion.section
      id="moni-user-persona"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto"
    >
      {/* Outer Dark Bento Container matching SVG (#131313, rx=24, border=white/10) */}
      <div className="relative w-full rounded-[24px] bg-[#131313] border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2563eb]/[0.08] via-[#C9F24A]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Main 2-Column Flex/Grid Layout: Left Div (All Content) + Right Div (Full Size Beside It) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
          
          {/* DIV 1: All Content (Meet Rohan + Profile Card + User Goals Grid) */}
          <div className="lg:col-span-8 flex flex-col justify-start space-y-5 sm:space-y-6">
            {/* Top Sub-Grid: Meet Rohan Intro & Rohan Verma Profile Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-center">
              {/* Meet Rohan Headline & Bio */}
              <div className="flex flex-col justify-center">
                <h3 className="font-playfair font-normal text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F0] leading-[1.1] tracking-tight">
                  Meet Rohan
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8E8E8A] leading-relaxed font-light mt-3 sm:mt-4 max-w-md">
                  A young professional aged between 22 to 35, digitally active, urban, and constantly
                  managing multiple financial decisions across work, lifestyle, social plans, subscriptions,
                  travel goals, and shared expenses.
                </p>
              </div>

              {/* Rohan Verma Profile Attribute Card (#181818, border-white/5, rx=16) - Slightly more compact */}
              <div className="bg-[#181818] rounded-xl border border-white/5 p-4 sm:p-4.5 shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-white/10">
                {/* Name & Age */}
                <div className="font-mono font-semibold text-xs sm:text-sm text-[#C9F24A] tracking-wide">
                  Rohan Verma, 27
                </div>

                {/* Role & City */}
                <div className="font-mono text-[11px] sm:text-xs text-[#F5F5F0] mt-0.5 tracking-wide flex items-center gap-1.5">
                  <span>Product Analyst</span>
                  <span className="text-[#8E8E8A]">•</span>
                  <span>Bangalore</span>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 my-2.5" />

                {/* Key-Value Details */}
                <div className="space-y-1.5 font-mono text-[11px] sm:text-xs leading-relaxed">
                  <div className="flex items-baseline justify-between sm:justify-start">
                    <span className="font-semibold text-[#F5F5F0] w-20 sm:w-24 shrink-0">Salary:</span>
                    <span className="text-[#8E8E8A]">₹85,000/mo</span>
                  </div>
                  <div className="flex items-baseline justify-between sm:justify-start">
                    <span className="font-semibold text-[#F5F5F0] w-20 sm:w-24 shrink-0">Cards:</span>
                    <span className="text-[#8E8E8A] truncate">HDFC, Axis, SBI</span>
                  </div>
                  <div className="flex items-baseline justify-between sm:justify-start">
                    <span className="font-semibold text-[#F5F5F0] w-20 sm:w-24 shrink-0">Workforce:</span>
                    <span className="text-[#8E8E8A]">3 years</span>
                  </div>
                  <div className="flex items-baseline justify-between sm:justify-start">
                    <span className="font-semibold text-[#F5F5F0] w-20 sm:w-24 shrink-0">Lifestyle:</span>
                    <span className="text-[#8E8E8A]">Active, Hybrid WFH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: USER GOALS Header & 2x2 Grid (Brought Closer to Above Div) */}
            <div className="pt-4 sm:pt-5 border-t border-white/10">
              {/* Eyebrow / Label (#C9F24A) */}
              <div className="mb-3">
                <span className="text-xs font-mono font-semibold tracking-[0.24em] uppercase text-[#C9F24A]">
                  USER GOALS
                </span>
              </div>

              {/* 4 Cards Grid (2x2 layout: #161616, border-white/5, rx=12) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
                {userGoals.map((goal, index) => (
                  <motion.div
                    key={goal.number}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-[#161616] rounded-xl border border-white/5 p-3.5 sm:p-4 flex flex-col justify-between min-h-[88px] sm:min-h-[96px] transition-all duration-300 hover:border-white/15 hover:bg-[#191919]"
                  >
                    {/* Number Badge */}
                    <div className="font-mono text-xs sm:text-sm font-semibold text-[#C9F24A] mb-1.5 leading-none">
                      {goal.number}
                    </div>

                    {/* Goal Description Text */}
                    <p className="font-sans text-xs sm:text-[13px] text-[#F5F5F0] leading-relaxed font-normal">
                      {goal.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* DIV 2: Image Holder (No border, no glow, vertically centered with equal top/bottom spacing, touching extreme right) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative lg:-mr-12 self-stretch overflow-visible py-2 lg:py-0">
            <img
              src="/shreya-portfolio/assets/moni-persona.png"
              alt="Moni User Persona - Rohan"
              className="w-full max-w-[290px] sm:max-w-[330px] lg:max-w-[380px] h-auto object-contain object-right select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </motion.section>
  );
};


