import React from 'react';
import { motion } from 'motion/react';

export const CurrentlyFiguringOutBanner: React.FC = () => {
  return (
    <section 
      id="currently-figuring-out-section" 
      className="w-full relative overflow-hidden -mt-6 sm:-mt-10 md:-mt-14 pb-6 sm:pb-8 my-0 select-none"
    >
      <div className="w-full pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-0 flex items-center justify-between">
        {/* Left: CURRENTLY FIGURING OUT - Slides in from left with extra push to the right */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 flex items-center pr-3 sm:pr-6 md:pr-8"
        >
          <span 
            className="text-[#CBC6BB] text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.22em] uppercase whitespace-nowrap font-syne"
          >
            CURRENTLY FIGURING OUT
          </span>
        </motion.div>

        {/* Right: Green rectangle comes in from right, touching the page border */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative flex items-center justify-end min-w-[240px]"
        >
          {/* Slanted Lime Banner Container Touching Right Screen Border */}
          <div 
            className="w-full relative py-2.5 sm:py-3.5 pl-6 sm:pl-10 pr-6 sm:pr-10 bg-[#D4F34A] shadow-[0_0_25px_rgba(212,243,74,0.45)] transition-all flex items-center"
            style={{
              clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* PORTFOLIO in handwritten font that appears after the rectangle slides in */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85, y: 4 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#2B3500] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide select-none inline-block pl-2 font-caveat"
            >
              portfolio
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

