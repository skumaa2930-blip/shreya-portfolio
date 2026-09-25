import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CaseStudyStickyHeader } from './CaseStudyStickyHeader';
import { MoniHero } from './MoniHero';
import { MoniProblemResearch } from './MoniProblemResearch';
import { MoniDesignIntention } from './MoniDesignIntention';
import { MoniDesignSystemInteraction } from './MoniDesignSystemInteraction';
import { MoniVisualizingLayout } from './MoniVisualizingLayout';
import { MoniScenarioCarousel } from './MoniScenarioCarousel';
import { MoniAdaptiveFramework } from './MoniAdaptiveFramework';
import { MoniClosingSection } from './MoniClosingSection';

interface MoniCaseStudyPageProps {
  onBack: () => void;
  onOpenNextProject?: () => void;
}

export const MoniCaseStudyPage: React.FC<MoniCaseStudyPageProps> = ({
  onBack,
  onOpenNextProject,
}) => {
  // Ensure we start at top of page when route loads
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'Moni Case Study — Shreya Kumavat';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <motion.div
      id="moni-case-study-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative selection:bg-[#D1F047] selection:text-black overflow-x-hidden"
    >
      {/* Background subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Sticky Back Navigation Bar with Black Gradient Header Scrim */}
      <CaseStudyStickyHeader onBack={onBack} accentColor="#D1F047" />

      {/* Main Case Study Flow */}
      <main className="relative z-10">
        {/* 1. Hero Screen (Exact Figma Mockup Match) */}
        <MoniHero
          onBack={onBack}
        />

        {/* 2. The Problem Section (Exact Figma Mockup Match) */}
        <MoniProblemResearch />

        {/* 2.5 Design Intention Section (Includes Capabilities, Roles, 5 Questions, When to Appear/Disappear, & Continuous System of Agents) */}
        <MoniDesignIntention />

        {/* 3. Design System and Key Interaction Section */}
        <MoniDesignSystemInteraction />

        {/* 4. Visualizing the Agent's New Layout Section */}
        <MoniVisualizingLayout />

        {/* 5. Scenario Carousel */}
        <MoniScenarioCarousel />

        {/* 6. Adaptive Intervention Framework */}
        <MoniAdaptiveFramework />

        {/* 7. Closing Sections: Hero Image Slot, Trust & Transparency, Learning Cycle, Goal & Thank You */}
        <MoniClosingSection />
        {/* Next Project Exploration Card (Blood Bank Footer Style) */}
        <section className="py-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto border-t border-white/5">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <div className="font-mono text-xs text-[#c9f14a] uppercase tracking-wider mb-2">
                EXPLORE NEXT CASE STUDY
              </div>
              <h3 className="font-playfair text-3xl sm:text-4xl text-white">
                BLOOD BANK MANAGEMENT SYSTEM — OOUX
              </h3>
              <p className="font-sans text-neutral-400 text-sm mt-2 max-w-xl">
                Object-Oriented UX architecture, multi-stakeholder hospital logistics, and life-critical inventory supply chain management.
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
                  className="px-6 py-3 rounded-full bg-[#c9f14a] hover:bg-[#d8ff5e] text-black font-syne text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(201,241,74,0.35)] cursor-pointer flex items-center gap-2"
                >
                  <span>VIEW BLOOD BANK</span>
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



