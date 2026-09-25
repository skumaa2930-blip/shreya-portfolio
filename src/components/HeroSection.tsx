import React from 'react';
import { motion } from 'motion/react';
import { HeroVisual } from './HeroVisual';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto flex flex-col items-center text-center">
      {/* Exact Figma Visual Screen Component */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative"
      >
        <HeroVisual className="w-full" />
      </motion.div>
    </section>
  );
};




