import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CaseStudyStickyHeader } from './CaseStudyStickyHeader';
import { BloodBankTopSection } from './BloodBankTopSection';
import { BloodBankSlideStream } from './BloodBankSlideStream';

interface BloodBankCaseStudyPageProps {
  onBack: () => void;
  onOpenNextProject?: () => void;
}

export const BloodBankCaseStudyPage: React.FC<BloodBankCaseStudyPageProps> = ({
  onBack,
  onOpenNextProject,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'Blood Bank Management System Case Study — Shreya Kumavat';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <motion.div
      id="blood-bank-case-study-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative selection:bg-[#c9f14a] selection:text-black overflow-x-hidden"
    >
      {/* Background subtle technical grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Sticky Back Navigation Bar with Black Gradient Header Scrim */}
      <CaseStudyStickyHeader onBack={onBack} accentColor="#c9f14a" />

      {/* Main Case Study Sections */}
      <main className="relative z-10">
        {/* SECTION 1 to 3: Hero, Project Overview, and Primary Research + Our Approach */}
        <BloodBankTopSection onBack={onBack} />

        {/* Vertical Smooth Long-Scroll PPT Slide Stream */}
        <BloodBankSlideStream />

        {/* Next Project Footer Card */}
        <section className="py-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto border-t border-white/5">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <div className="font-mono text-xs text-[#c9f14a] uppercase tracking-wider mb-2">
                EXPLORE NEXT CASE STUDY
              </div>
              <h3 className="font-playfair text-3xl sm:text-4xl text-white">
                RAFUGARI — TEXTILE RESTORATION &amp; CRAFT ARCHIVE
              </h3>
              <p className="font-sans text-neutral-400 text-sm mt-2 max-w-xl">
                Preserving the ancient Indian craft of invisible darning: digital diagnostics, master artisan mapping, and circular heirloom textile conservation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-syne text-xs font-bold uppercase transition-all cursor-pointer"
              >
                ← ALL WORK
              </button>
              {onOpenNextProject && (
                <button
                  onClick={onOpenNextProject}
                  className="px-6 py-3 rounded-full bg-[#E5C17C] hover:bg-[#ebd097] text-black font-syne text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(229,193,124,0.35)] cursor-pointer flex items-center gap-2"
                >
                  <span>VIEW RAFUGARI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Case Study Clean Footer Bar */}
          <footer className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#9E9B82] uppercase tracking-widest text-[11px]">
                EST. 2024 / PROTO-LAB —
              </span>
              <span className="font-handwriting text-sm sm:text-base text-[#D4CFB4]">
                imperfect iterations, continuous craft
              </span>
            </div>
            <div className="font-mono text-[#9E9B82] uppercase tracking-widest text-[11px] text-center sm:text-right">
              SHREYA STUDIO © ALL RIGHTS RESERVED
            </div>
          </footer>
        </section>
      </main>
    </motion.div>
  );
};



