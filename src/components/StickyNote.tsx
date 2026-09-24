import React from 'react';
import { motion } from 'motion/react';
import { StickyNoteProps } from '../types';

export const StickyNote: React.FC<StickyNoteProps> = ({
  id,
  text,
  author,
  rotation = '-rotate-2',
  className = '',
  tapePosition = 'top',
  variant = 'yellow',
}) => {
  const bgStyles = {
    yellow: 'bg-gradient-to-b from-[#fff799] to-[#fef08a] text-[#1c1917] border border-[#fde047]/60 shadow-[0_8px_20px_rgba(0,0,0,0.35)]',
    lime: 'bg-gradient-to-b from-[#e5ff66] to-[#ccff00] text-[#0a0a0a] border border-[#b8e600] shadow-[0_8px_20px_rgba(0,0,0,0.35)]',
    paper: 'bg-gradient-to-b from-[#f5f5f4] to-[#e7e5e4] text-[#1c1917] border border-[#d6d3d1] shadow-[0_8px_20px_rgba(0,0,0,0.35)]',
  }[variant];

  return (
    <motion.div
      id={id}
      whileHover={{ scale: 1.04, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`relative p-3.5 sm:p-4 rounded-sm transition-transform cursor-pointer select-none ${rotation} ${bgStyles} ${className}`}
    >
      {/* Scotch tape piece */}
      {tapePosition === 'top' && (
        <div className="tape-strip top-[-8px] left-1/2 -translate-x-1/2 w-12 sm:w-16 opacity-75" />
      )}
      {tapePosition === 'top-left' && (
        <div className="tape-strip top-[-6px] left-1 w-10 sm:w-12 -rotate-12 opacity-75" />
      )}
      {tapePosition === 'top-right' && (
        <div className="tape-strip top-[-6px] right-1 w-10 sm:w-12 rotate-12 opacity-75" />
      )}

      <p className="font-handwriting text-lg sm:text-xl leading-snug whitespace-pre-line tracking-wide font-medium">
        {text}
      </p>

      {author && (
        <div className="mt-1 text-right font-handwriting text-sm opacity-75">
          — {author}
        </div>
      )}
    </motion.div>
  );
};
