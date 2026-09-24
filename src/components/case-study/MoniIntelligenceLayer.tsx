import React from 'react';
import { motion } from 'motion/react';

interface IntelligencePillar {
  title: string;
  description: string;
}

const PILLARS: IntelligencePillar[] = [
  {
    title: 'OBSERVES',
    description:
      'Continuously tracking every signal, without interruption or effort from the user',
  },
  {
    title: 'INTERPRETS',
    description:
      'Making sense of context, patterns, behavior and intent in real time',
  },
  {
    title: 'ACTS',
    description:
      'Removing need for decisions by handling them, or involving you only when needed',
  },
];

export const MoniIntelligenceLayer: React.FC = () => {
  return (
    <motion.section
      id="moni-intelligence-layer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mt-24 sm:mt-32 md:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Centered Display Header */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight uppercase text-[#C9F24A]"
        >
          A FINANCIAL <br className="hidden sm:inline" />
          INTELLIGENCE LAYER
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm sm:text-base md:text-lg text-[#8E8E8A] leading-relaxed font-light mt-6 sm:mt-8 max-w-2xl mx-auto"
        >
          Not an app. Not a dashboard. A system that continuously understands your money,
          decides what matters, and acts without asking you to manage it.
        </motion.p>
      </div>

      {/* 3 Pillars Bento Grid - Hugging Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-14 max-w-5xl mx-auto items-start">
        {PILLARS.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.1 + idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -3 }}
            className="group relative bg-[#131315] hover:bg-[#171719] rounded-[20px] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 transition-all duration-300 shadow-[0_12px_28px_rgba(0,0,0,0.4)] flex flex-col justify-start h-auto"
          >
            {/* Top Accent Line Highlight on hover */}
            <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-[#C9F24A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Pillar Title */}
            <h3 className="font-sans font-bold text-base sm:text-lg tracking-wider text-[#F5F5F0] uppercase mb-2.5">
              {pillar.title}
            </h3>

            {/* Pillar Description */}
            <p className="font-sans text-xs sm:text-sm text-[#8E8E8A] leading-relaxed font-light m-0">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
