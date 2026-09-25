import React from 'react';
import { motion } from 'motion/react';

interface ApproachItem {
  id: string;
  title: string;
  description: string;
}

const approachData: ApproachItem[] = [
  {
    id: 'users',
    title: 'Understanding users',
    description: 'Pain points, frictions, psychological load, goals and intent.',
  },
  {
    id: 'mapping',
    title: 'Mapping the agent',
    description: 'Understanding where the agent should intervene and how its functions coordinate.',
  },
  {
    id: 'bridging',
    title: 'Bridging agent and user',
    description: 'Understanding the interaction between the agentic system and the user.',
  },
  {
    id: 'visualizing',
    title: 'Visualizing the agent',
    description: 'High-fidelity screens and realistic visualization of the agent in action.',
  },
];

export const MoniOurApproachVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mt-16 sm:mt-20 md:mt-24"
    >
      {/* 1. Big Serif Headline: Our Approach */}
      <h3 className="font-playfair font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F0] tracking-tight leading-[1.1]">
        Our Approach
      </h3>

      {/* 2. Lead Paragraph Description */}
      <p className="font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl mt-4 mb-8 sm:mb-12">
        We focused on understanding the mental burden of managing money, identifying
        where agents should intervene, and designing calm, context aware interactions
        that make finance feel supportive instead of demanding.
      </p>

      {/* 3. Four-Column Structured Grid Container matching the 1 in 2 card style */}
      <div className="w-full overflow-hidden border border-white/5 bg-[#121212] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {approachData.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-7 sm:p-8 flex flex-col justify-start min-h-[190px] sm:min-h-[220px] lg:min-h-[240px] transition-colors duration-200 hover:bg-[#161616]"
            >
              {/* Column Title */}
              <h4 className="font-sans font-semibold text-lg sm:text-xl text-[#F5F5F0] mb-3 leading-snug tracking-tight">
                {col.title}
              </h4>

              {/* Column Description */}
              <p className="font-sans text-sm text-[#949490] font-normal leading-relaxed mt-auto">
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



