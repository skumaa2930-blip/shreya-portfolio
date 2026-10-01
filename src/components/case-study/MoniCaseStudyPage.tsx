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
import { CaseStudyFooterSection } from './CaseStudyFooterSection';

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
      className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative selection:bg-[#B6D63A] selection:text-black overflow-x-hidden"
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
      <CaseStudyStickyHeader onBack={onBack} accentColor="#B6D63A" />

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

        {/* Consistent Next Project Exploration Card & Footer */}
        <CaseStudyFooterSection
          nextProjectTitle="BLOOD BANK MANAGEMENT SYSTEM — OOUX"
          nextProjectDescription="Object-Oriented UX architecture, multi-stakeholder hospital logistics, and life-critical inventory supply chain management."
          nextProjectButtonLabel="VIEW BLOOD BANK"
          accentColor="#B6D63A"
          onBack={onBack}
          onOpenNextProject={onOpenNextProject}
        />
      </main>
    </motion.div>
  );
};
