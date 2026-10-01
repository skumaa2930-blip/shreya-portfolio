import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CaseStudyStickyHeader } from './CaseStudyStickyHeader';
import { BloodBankTopSection } from './BloodBankTopSection';
import { BloodBankSlideStream } from './BloodBankSlideStream';
import { CaseStudyFooterSection } from './CaseStudyFooterSection';

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
      className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative selection:bg-[#B6D63A] selection:text-black overflow-x-hidden"
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
      <CaseStudyStickyHeader onBack={onBack} accentColor="#B6D63A" />

      {/* Main Case Study Sections */}
      <main className="relative z-10">
        {/* SECTION 1 to 3: Hero, Project Overview, and Primary Research + Our Approach */}
        <BloodBankTopSection onBack={onBack} />

        {/* Vertical Smooth Long-Scroll PPT Slide Stream */}
        <BloodBankSlideStream />

        {/* Consistent Next Project Footer Card */}
        <CaseStudyFooterSection
          nextProjectTitle="RAFUGARI — TEXTILE RESTORATION & CRAFT ARCHIVE"
          nextProjectDescription="Preserving the ancient Indian craft of invisible darning: digital diagnostics, master artisan mapping, and circular heirloom textile conservation."
          nextProjectButtonLabel="VIEW RAFUGARI"
          accentColor="#B6D63A"
          onBack={onBack}
          onOpenNextProject={onOpenNextProject}
        />
      </main>
    </motion.div>
  );
};
