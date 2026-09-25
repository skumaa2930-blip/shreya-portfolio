import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  tags: string[];
  description: string;
  stickyText: string;
  keyFacts: { label: string; value: string }[];
  imageSrc: string;
  imageAlt: string;
  caption: string;
  route: string;
  caseStudyIndex: number;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'moni',
    number: '01',
    title: 'MONI',
    subtitle: 'Finance Agent',
    categoryTag: 'AI · FINANCE · AGENT',
    tags: ['AI', 'FINANCE', 'AGENT'],
    description:
      'A finance agent designed to help people make sense of their money through conversational autonomy, predictive cash-flow modeling, and low-cognitive load interfaces.',
    stickyText: 'this one got\na little serious.',
    keyFacts: [
      { label: 'ENGINE', value: 'Multi-Agent Adaptive UI' },
      { label: 'HONOR', value: 'Samsung Prism Runner Up' },
    ],
    imageSrc: '/assets/project-moni.png',
    imageAlt: 'MONI - AI Financial Agent Interface',
    caption: 'context-aware financial intelligence & dynamic views ↗',
    route: '/moni',
    caseStudyIndex: 0,
  },
  {
    id: 'blood-bank',
    number: '02',
    title: 'BLOOD BANK',
    subtitle: 'Management System',
    categoryTag: 'SYSTEM · UX · OOUX',
    tags: ['SYSTEM', 'UX', 'OOUX'],
    description:
      'A blood bank system designed with clarity, structure and empathy. Mapping complex critical relations between donors, camps, rapid requests, and shelf-life urgency.',
    stickyText: 'a lot of objects.\na lot of relationships.',
    keyFacts: [
      { label: 'METHOD', value: 'Object-Oriented UX (OOUX)' },
      { label: 'SPEED', value: 'Zero-Latency Matching' },
    ],
    imageSrc: '/assets/project-bb.png',
    imageAlt: 'Blood Bank System - OOUX Healthcare Platform',
    caption: 'clarity and calm empathy in critical emergencies ↗',
    route: '/blood-bank',
    caseStudyIndex: 1,
  },
  {
    id: 'rafugari',
    number: '03',
    title: 'RAFOOGHAR',
    subtitle: 'Craft & Textile Archive',
    categoryTag: 'HERITAGE · CRAFT · ARCHIVE',
    tags: ['CRAFT', 'TEXTILE', 'ARCHIVE'],
    description:
      'An archival research and interactive narrative platform documenting the living heritage, memory, and traditional restoration craft of Rafugari.',
    stickyText: 'mending threads,\npreserving memories.',
    keyFacts: [
      { label: 'FIELDWORK', value: 'Najibabad Artisan Guild' },
      { label: 'MEDIUM', value: 'Living Interactive Archive' },
    ],
    imageSrc: '/assets/project-rafu.png',
    imageAlt: 'Rafooghar - Traditional Textile Craft Preservation',
    caption: 'the quiet art of invisible mending and living memory ↗',
    route: '/rafugari',
    caseStudyIndex: 2,
  },
];

interface ProjectsSectionProps {
  onNavigateToProject?: (projectId: string) => void;
  activeStep?: number;
  onStepChange?: (step: number) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigateToProject,
  activeStep,
  onStepChange,
}) => {
  // Book step: 0 = Closed Cover, 1 = Project 01 Spread, 2 = Project 02 Spread, 3 = Project 03 Spread, 4 = Last Page
  const [internalStep, setInternalStep] = useState<number>(activeStep ?? 0);
  const currentStep = activeStep !== undefined ? activeStep : internalStep;

  const setCurrentStep = useCallback(
    (action: number | ((prev: number) => number)) => {
      const nextVal = typeof action === 'function' ? action(currentStep) : action;
      setInternalStep(nextVal);
      if (onStepChange) {
        onStepChange(nextVal);
      }
    },
    [currentStep, onStepChange]
  );

  useEffect(() => {
    if (activeStep !== undefined) {
      setInternalStep(activeStep);
    }
  }, [activeStep]);

  const [selectedCaseStudyIndex, setSelectedCaseStudyIndex] = useState<number | null>(null);
  const [isHoveringBook, setIsHoveringBook] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSteps = 4; // 0 (cover), 1 (P1), 2 (P2), 3 (P3), 4 (end)

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Keyboard navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      } else if (e.key === 'ArrowLeft') {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSteps]);

  // Touch & Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      if (diff > 50) {
        // Swipe left -> turn forward
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      } else if (diff < -50) {
        // Swipe right -> turn back
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleProjectClick = (project: Project) => {
    if (onNavigateToProject) {
      onNavigateToProject(project.id);
    } else {
      setSelectedCaseStudyIndex(project.caseStudyIndex);
    }
  };

  // Turn to specific spread
  const goToSpread = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  // Get book container horizontal slide position
  // 0 -> centered on cover (translateX(-25%))
  // 1, 2, 3 -> centered on 2-page spread (translateX(0%))
  // 4 -> centered on last page (translateX(25%))
  const getBookTranslateX = () => {
    if (currentStep === 0) return '-25%';
    if (currentStep === totalSteps) return '25%';
    return '0%';
  };

  const transitionDuration = prefersReducedMotion ? '0.001s' : '1.1s';
  const transitionEase = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

  return (
    <section
      id="make"
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto overflow-hidden select-none"
    >
      {/* Side-by-Side Main Container (Hugging the Book tightly on Desktop) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 xl:gap-10 max-w-fit mx-auto">
        {/* LEFT COLUMN: Section Header & Sticky Note (Left-aligned, safely within bounds) */}
        <div
          className="w-full lg:w-auto flex flex-col items-center lg:items-start text-left shrink-0 pl-0 lg:pl-2"
          style={{
            transform:
              currentStep > 0
                ? 'translateX(0px)'
                : 'translateX(clamp(8px, 1.2vw, 24px))',
            transition: `transform ${transitionDuration} ${transitionEase}`,
          }}
        >
          <h2
            className="font-dm-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] uppercase select-none text-left"
          >
            SOME OF
            <br />
            MY BEST
            <br />
            <span>
              PROJECTS<span className="text-[#D1F047]">.</span>
            </span>
          </h2>

          {/* Neon lime hand-drawn double underline from SVG */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] mt-2.5 mb-7 flex justify-start">
            <svg
              viewBox="0 0 280 20"
              className="w-full h-auto drop-shadow-[0_0_8px_rgba(209,240,71,0.3)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 14C54 5 144 16 274 6M19 16C84 10 184 15 264 11"
                stroke="#D1F047"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Kraft Paper Sticky Note */}
          <div className="relative w-[240px] sm:w-[260px] bg-[#BEAC75] rounded-[1px] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.45)] text-left transition-transform hover:scale-[1.02] duration-200">
            {/* Top Tape Strip */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#3A3939]/45 backdrop-blur-[2px] -rotate-2 border border-white/15 shadow-xs pointer-events-none"
              style={{ zIndex: 10 }}
            />

            {/* Note Content */}
            <div className="font-handwriting text-[#1E1B15] text-[20px] sm:text-[22px] leading-[1.3] font-semibold pt-1">
              <p>Ideas. Rabbitholes.</p>
              <p>Way too many late nights.</p>
              <p>But worth it.</p>
            </div>

            {/* Double underline underneath "But worth it." */}
            <div className="mt-2 space-y-[3px]">
              <div className="w-full h-[1.5px] bg-[#1E1B15]/40" />
              <div className="w-4/5 h-[1.5px] bg-[#1E1B15]/40" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Interactive Book (Desktop & Tablet) */}
        <div className="w-full lg:w-auto flex flex-col items-center justify-center shrink-0">
          <div className="hidden md:flex flex-col items-center justify-center relative w-fit min-h-[560px] lg:min-h-[600px]">
            {/* Soft Blurred Shadow Under The Book */}
            <div
              className="absolute -bottom-4 w-[75%] max-w-[660px] h-10 bg-black/75 blur-2xl rounded-full transition-transform pointer-events-none"
              style={{
                transform: `translateX(${getBookTranslateX()}) scale(${currentStep === 0 || currentStep === totalSteps ? 0.65 : 1})`,
                transition: `transform ${transitionDuration} ${transitionEase}`,
              }}
            />

            {/* 3D Scene Wrapper (Tightly hugging the 3D book) */}
            <div
              className="relative w-[720px] lg:w-[760px] xl:w-[820px] h-[480px] lg:h-[510px] xl:h-[530px] flex items-center justify-center"
              style={{
                perspective: '2600px',
              }}
              onMouseEnter={() => setIsHoveringBook(true)}
              onMouseLeave={() => setIsHoveringBook(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Entire Book Stage (Slides to keep active view centered) */}
              <div
                className="relative w-full h-full"
                style={{
                  transform: `translateX(${getBookTranslateX()})`,
                  transformStyle: 'preserve-3d',
                  transition: `transform ${transitionDuration} ${transitionEase}`,
                }}
              >
                {/* Left Page Base Bed (For realistic spine structure) */}
                <div
                  className="absolute left-0 top-0 w-1/2 h-full rounded-l-[6px] bg-[#ECE7D8] border-y border-l border-black/15 shadow-2xl pointer-events-none"
                  style={{
                    zIndex: 0,
                    opacity: currentStep > 0 ? 1 : 0,
                    transition: `opacity 0.4s ease`,
                  }}
                />

                {/* Right Page Base Bed */}
                <div
                  className="absolute right-0 top-0 w-1/2 h-full rounded-r-[6px] bg-[#ECE7D8] border-y border-r border-black/15 shadow-2xl pointer-events-none"
                  style={{
                    zIndex: 0,
                    opacity: currentStep < totalSteps ? 1 : 0,
                    transition: `opacity 0.4s ease`,
                  }}
                />

            {/* --------------------------------------------------------------------- */}
            {/* LEAF 0: Front Cover <---> Left Page 1 (MONI Info)                      */}
            {/* --------------------------------------------------------------------- */}
            <div
              className="book-leaf absolute top-0 left-1/2 w-1/2 h-full origin-left cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentStep >= 1 ? -180 : 0}deg)`,
                zIndex: currentStep === 0 ? 10 : currentStep === 1 ? 12 : 1,
                transition: `transform ${transitionDuration} ${transitionEase}`,
              }}
              onClick={(e) => {
                // Click cover to open
                if (currentStep === 0) {
                  setCurrentStep(1);
                } else if (currentStep === 1) {
                  // Click left page to close to cover
                  setCurrentStep(0);
                }
              }}
            >
              {/* FRONT OF LEAF 0: COVER (Muted Yellow Ochre) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-[6px] bg-[#C89D3C] text-[#1E1810] p-8 lg:p-10 flex flex-col justify-between border-y border-r border-[#A87C26] shadow-[inset_16px_0_24px_rgba(0,0,0,0.16),0_20px_40px_rgba(0,0,0,0.45)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundImage:
                    'linear-gradient(145deg, #DCB154 0%, #C89D3C 52%, #B3862D 100%)',
                }}
              >
                {/* Book Spine Texture Line */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 via-black/12 to-transparent pointer-events-none" />

                {/* Author name formatted on top in one line */}
                <div className="border-b border-[#3D2E12]/20 pb-4 flex items-center justify-between">
                  <span className="font-syne text-[12px] tracking-[0.25em] uppercase text-[#1E1810] font-black whitespace-nowrap">
                    SHREYA KUMAVAT
                  </span>
                </div>

                {/* Cover Main Title (Big, commanding, single consistent color throughout) */}
                <div className="my-auto py-2 flex-1 flex flex-col justify-center">
                  <h3
                    className="font-dm-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[74px] text-[#1E1810] font-normal leading-[0.94] tracking-tight"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    A Life
                    <br />
                    in
                    <br />
                    Projects.
                  </h3>
                  <p className="font-sans text-[#3D2E12]/85 text-[11px] sm:text-xs lg:text-[12.5px] mt-4 font-medium whitespace-nowrap tracking-tight leading-normal">
                    A selection of projects, processes, and perspectives
                  </p>
                </div>

                {/* Cover Bottom Callout */}
                <div className="flex items-center justify-between pt-4 border-t border-[#3D2E12]/20">
                  <span className="font-syne text-[10px] sm:text-[11px] text-[#2C200C] uppercase tracking-[0.22em] font-bold">
                    TAP TO OPEN →
                  </span>
                </div>
              </div>

              {/* BACK OF LEAF 0: SPREAD 1 - LEFT PAGE (01 MONI Reference Cream Dotted Page) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-[6px] bg-[#ECE7D8] text-[#181716] p-6 lg:p-7 flex flex-col justify-between border-y border-l border-black/15 shadow-[inset_-20px_0_30px_rgba(0,0,0,0.12),-12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Right gutter shadow (spine seam) */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Top Row: Large 01 Number (Left) & Filled Tag Pills (Right) */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-dm-serif text-5xl sm:text-6xl text-[#9E988A] font-normal leading-none select-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[0].number}
                    </span>

                    {/* Metadata tags in small dark text with filled background */}
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {PROJECTS_DATA[0].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#DDD7C6] text-[#3A3832] font-syne font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3
                      className="font-dm-serif text-3xl sm:text-4xl lg:text-[42px] text-[#181716] font-bold uppercase tracking-tight leading-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[0].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[#423E38] text-xs sm:text-[13px] leading-relaxed mt-3 max-w-sm font-normal">
                    {PROJECTS_DATA[0].description}
                  </p>
                </div>

                {/* Bottom Section: Dark GO TO PROJECT CTA */}
                <div className="mt-auto pt-3">
                  {/* GO TO PROJECT CTA Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(PROJECTS_DATA[0]);
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#181816] hover:bg-black text-[#D1F047] font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>GO TO PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D1F047] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* LEAF 1: Right Page 1 (MONI Image) <---> Left Page 2 (Blood Bank Info)  */}
            {/* --------------------------------------------------------------------- */}
            <div
              className="book-leaf absolute top-0 left-1/2 w-1/2 h-full origin-left cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentStep >= 2 ? -180 : 0}deg)`,
                zIndex: currentStep === 1 ? 9 : currentStep === 2 ? 11 : 2,
                transition: `transform ${transitionDuration} ${transitionEase}`,
              }}
              onClick={() => {
                if (currentStep === 1) {
                  setCurrentStep(2);
                } else if (currentStep === 2) {
                  setCurrentStep(1);
                }
              }}
            >
              {/* FRONT OF LEAF 1: SPREAD 1 - RIGHT PAGE (01 MONI Cream Dotted Frame) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-[6px] bg-[#ECE7D8] text-[#181716] p-7 lg:p-8 flex flex-col justify-between border-y border-r border-black/15 shadow-[inset_20px_0_30px_rgba(0,0,0,0.12),12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Left gutter shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Clean Photo Container with Tape on Top */}
                <div className="relative w-full my-auto flex flex-col items-center">
                  {/* Tape strip on top of photo */}
                  <div className="absolute -top-3 z-20 w-16 h-5 bg-white/75 backdrop-blur-[2px] border border-white/50 shadow-2xs -rotate-2" />

                  {/* Image Slot / Mockup */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-[#161618] relative group">
                    <img
                      src={PROJECTS_DATA[0].imageSrc}
                      alt={PROJECTS_DATA[0].imageAlt}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Yellow Sticky Note on Page */}
                  <div className="absolute -bottom-4 -right-1 sm:-bottom-3 sm:right-0 z-30 w-36 sm:w-44 bg-[#FFF9A6] text-[#2C2718] p-2.5 sm:p-3 shadow-[2px_10px_20px_rgba(0,0,0,0.22)] rotate-[-3deg] border border-[#EDE07B] rounded-xs select-none pointer-events-none">
                    {/* Small tape piece at top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/80 backdrop-blur-xs border border-white/60 shadow-2xs rotate-1" />
                    <p
                      className="font-caveat text-base sm:text-lg leading-tight font-medium text-[#3b331f] whitespace-pre-line"
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    >
                      {PROJECTS_DATA[0].stickyText}
                    </p>
                  </div>
                </div>

                {/* Page Footer (Divider line with turn prompt, no spread numbering) */}
                <div className="flex justify-end items-center text-[10px] font-syne text-black/40 pt-2 border-t border-black/10">
                  <span className="uppercase tracking-wider">CLICK TO TURN →</span>
                </div>
              </div>

              {/* BACK OF LEAF 1: SPREAD 2 - LEFT PAGE (02 BLOOD BANK Cream Dotted Page) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-[6px] bg-[#ECE7D8] text-[#181716] p-6 lg:p-7 flex flex-col justify-between border-y border-l border-black/15 shadow-[inset_-20px_0_30px_rgba(0,0,0,0.12),-12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Right gutter shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Top Row: Large 02 Number (Left) & Filled Tag Pills (Right) */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-dm-serif text-5xl sm:text-6xl text-[#9E988A] font-normal leading-none select-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[1].number}
                    </span>

                    {/* Metadata tags in small dark text with filled background */}
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {PROJECTS_DATA[1].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#DDD7C6] text-[#3A3832] font-syne font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3
                      className="font-dm-serif text-3xl sm:text-4xl lg:text-[42px] text-[#181716] font-bold uppercase tracking-tight leading-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[1].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[#423E38] text-xs sm:text-[13px] leading-relaxed mt-3 max-w-sm font-normal">
                    {PROJECTS_DATA[1].description}
                  </p>
                </div>

                {/* Bottom Section: Dark GO TO PROJECT CTA */}
                <div className="mt-auto pt-3">
                  {/* GO TO PROJECT CTA Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(PROJECTS_DATA[1]);
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#181816] hover:bg-black text-[#D1F047] font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>GO TO PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D1F047] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* LEAF 2: Right Page 2 (Blood Bank Img) <---> Left Page 3 (Croma Info)   */}
            {/* --------------------------------------------------------------------- */}
            <div
              className="book-leaf absolute top-0 left-1/2 w-1/2 h-full origin-left cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentStep >= 3 ? -180 : 0}deg)`,
                zIndex: currentStep === 2 ? 8 : currentStep === 3 ? 10 : 3,
                transition: `transform ${transitionDuration} ${transitionEase}`,
              }}
              onClick={() => {
                if (currentStep === 2) {
                  setCurrentStep(3);
                } else if (currentStep === 3) {
                  setCurrentStep(2);
                }
              }}
            >
              {/* FRONT OF LEAF 2: SPREAD 2 - RIGHT PAGE (02 Blood Bank Cream Dotted Frame) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-[6px] bg-[#ECE7D8] text-[#181716] p-7 lg:p-8 flex flex-col justify-between border-y border-r border-black/15 shadow-[inset_20px_0_30px_rgba(0,0,0,0.12),12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Left gutter shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Clean Photo Container with Tape on Top */}
                <div className="relative w-full my-auto flex flex-col items-center">
                  {/* Tape strip on top of photo */}
                  <div className="absolute -top-3 z-20 w-16 h-5 bg-white/75 backdrop-blur-[2px] border border-white/50 shadow-2xs rotate-1" />

                  {/* Image Slot / Mockup */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-[#161618] relative group">
                    <img
                      src={PROJECTS_DATA[1].imageSrc}
                      alt={PROJECTS_DATA[1].imageAlt}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('project-bb-1.png')) {
                          target.src = '/assets/project-bb-1.png';
                        } else {
                          target.src =
                            'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop';
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Yellow Sticky Note on Page */}
                  <div className="absolute -bottom-4 -right-1 sm:-bottom-3 sm:right-0 z-30 w-36 sm:w-44 bg-[#FFF9A6] text-[#2C2718] p-2.5 sm:p-3 shadow-[2px_10px_20px_rgba(0,0,0,0.22)] rotate-[2.5deg] border border-[#EDE07B] rounded-xs select-none pointer-events-none">
                    {/* Small tape piece at top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/80 backdrop-blur-xs border border-white/60 shadow-2xs -rotate-2" />
                    <p
                      className="font-caveat text-base sm:text-lg leading-tight font-medium text-[#3b331f] whitespace-pre-line"
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    >
                      {PROJECTS_DATA[1].stickyText}
                    </p>
                  </div>
                </div>

                {/* Page Footer */}
                <div className="flex justify-end items-center text-[10px] font-syne text-black/40 pt-2 border-t border-black/10">
                  <span className="uppercase tracking-wider">CLICK TO TURN →</span>
                </div>
              </div>

              {/* BACK OF LEAF 2: SPREAD 3 - LEFT PAGE (03 CROMA Cream Dotted Page) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-[6px] bg-[#ECE7D8] text-[#181716] p-6 lg:p-7 flex flex-col justify-between border-y border-l border-black/15 shadow-[inset_-20px_0_30px_rgba(0,0,0,0.12),-12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Right gutter shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Top Row: Large 03 Number (Left) & Filled Tag Pills (Right) */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-dm-serif text-5xl sm:text-6xl text-[#9E988A] font-normal leading-none select-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[2].number}
                    </span>

                    {/* Metadata tags in small dark text with filled background */}
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {PROJECTS_DATA[2].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#DDD7C6] text-[#3A3832] font-syne font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3
                      className="font-dm-serif text-3xl sm:text-4xl lg:text-[42px] text-[#181716] font-bold uppercase tracking-tight leading-none"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {PROJECTS_DATA[2].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[#423E38] text-xs sm:text-[13px] leading-relaxed mt-3 max-w-sm font-normal">
                    {PROJECTS_DATA[2].description}
                  </p>
                </div>

                {/* Bottom Section: Dark GO TO PROJECT CTA */}
                <div className="mt-auto pt-3">
                  {/* GO TO PROJECT CTA Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(PROJECTS_DATA[2]);
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#181816] hover:bg-black text-[#D1F047] font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>GO TO PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D1F047] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* LEAF 3: Right Page 3 (Croma Img) <---> Last Page (Back Cover)         */}
            {/* --------------------------------------------------------------------- */}
            <div
              className="book-leaf absolute top-0 left-1/2 w-1/2 h-full origin-left cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentStep >= 4 ? -180 : 0}deg)`,
                zIndex: currentStep === 3 ? 7 : currentStep === 4 ? 9 : 4,
                transition: `transform ${transitionDuration} ${transitionEase}`,
              }}
              onClick={() => {
                if (currentStep === 3) {
                  setCurrentStep(4);
                } else if (currentStep === 4) {
                  setCurrentStep(3);
                }
              }}
            >
              {/* FRONT OF LEAF 3: SPREAD 3 - RIGHT PAGE (03 Croma Cream Dotted Frame) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-[6px] bg-[#ECE7D8] text-[#181716] p-7 lg:p-8 flex flex-col justify-between border-y border-r border-black/15 shadow-[inset_20px_0_30px_rgba(0,0,0,0.12),12px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundImage:
                    'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '18px 18px',
                }}
              >
                {/* Left gutter shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/12 via-black/4 to-transparent pointer-events-none" />

                {/* Clean Photo Container with Tape on Top */}
                <div className="relative w-full my-auto flex flex-col items-center">
                  {/* Tape strip on top of photo */}
                  <div className="absolute -top-3 z-20 w-16 h-5 bg-white/75 backdrop-blur-[2px] border border-white/50 shadow-2xs -rotate-2" />

                  {/* Image Slot / Mockup */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-[#161618] relative group">
                    <img
                      src={PROJECTS_DATA[2].imageSrc}
                      alt={PROJECTS_DATA[2].imageAlt}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('project-rafu-1.png')) {
                          target.src = '/assets/project-rafu-1.png';
                        } else {
                          target.src =
                            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop';
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Yellow Sticky Note on Page */}
                  <div className="absolute -bottom-4 -right-1 sm:-bottom-3 sm:right-0 z-30 w-36 sm:w-44 bg-[#FFF9A6] text-[#2C2718] p-2.5 sm:p-3 shadow-[2px_10px_20px_rgba(0,0,0,0.22)] rotate-[-2deg] border border-[#EDE07B] rounded-xs select-none pointer-events-none">
                    {/* Small tape piece at top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/80 backdrop-blur-xs border border-white/60 shadow-2xs rotate-1" />
                    <p
                      className="font-caveat text-base sm:text-lg leading-tight font-medium text-[#3b331f] whitespace-pre-line"
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    >
                      {PROJECTS_DATA[2].stickyText}
                    </p>
                  </div>
                </div>

                {/* Page Footer */}
                <div className="flex justify-end items-center text-[10px] font-syne text-black/40 pt-2 border-t border-black/10">
                  <span className="uppercase tracking-wider">FINISH BOOK →</span>
                </div>
              </div>

              {/* BACK OF LEAF 3: LAST PAGE (Muted Yellow Ochre Theme) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-[6px] bg-[#C89D3C] text-[#1E1810] p-8 lg:p-10 flex flex-col justify-between border-y border-l border-[#A87C26] shadow-[inset_-16px_0_24px_rgba(0,0,0,0.16),0_20px_40px_rgba(0,0,0,0.45)] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundImage:
                    'linear-gradient(215deg, #DCB154 0%, #C89D3C 52%, #B3862D 100%)',
                }}
              >
                {/* Book Spine Texture Line */}
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/30 via-black/12 to-transparent pointer-events-none" />

                {/* Top header */}
                <div className="flex items-center justify-between border-b border-[#3D2E12]/20 pb-4">
                  <span className="font-syne text-[11px] tracking-[0.2em] uppercase text-[#1E1810] font-black">
                    END OF SELECTED WORKS
                  </span>
                  <span className="font-syne text-[10px] text-[#3D2E12]/70 uppercase font-semibold">
                    2026
                  </span>
                </div>

                {/* Middle Content */}
                <div className="my-auto py-4">
                  <h3 className="font-dm-serif text-4xl lg:text-5xl text-[#1E1810] font-normal leading-tight tracking-tight">
                    More on <br />
                    the way.
                  </h3>
                  <p className="font-sans text-[#3D2E12]/85 text-sm mt-3 leading-relaxed max-w-[280px] font-medium">
                    Always prototyping new interactions, generative tools, and tangible ideas.
                  </p>
                  <p
                    className="font-caveat text-2xl text-[#2B1F0A] mt-4 rotate-[-1deg] font-bold"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    scroll down to see live experiments ↓
                  </p>
                </div>

                {/* Bottom: Reset Button */}
                <div className="pt-4 border-t border-[#3D2E12]/20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentStep(0);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#2B1F0A] text-[#FAF5EC] hover:bg-[#1A1205] font-syne text-xs font-bold uppercase tracking-wider py-3 rounded-full border border-[#473412] shadow-md transition-colors cursor-pointer"
                  >
                    <span>← BACK TO COVER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Round Prev / Next Controls Floating Below */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
            aria-label="Previous Page"
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
              currentStep === 0
                ? 'border-white/5 text-neutral-600 cursor-not-allowed opacity-40'
                : 'border-white/20 text-white hover:border-[#c9f14a] hover:text-[#c9f14a] hover:bg-white/5 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
            disabled={currentStep === totalSteps}
            aria-label="Next Page"
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
              currentStep === totalSteps
                ? 'border-white/5 text-neutral-600 cursor-not-allowed opacity-40'
                : 'border-white/20 text-white hover:border-[#c9f14a] hover:text-[#c9f14a] hover:bg-white/5 cursor-pointer'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RESPONSIVE MOBILE STACKED LIST (< 760px)                                  */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col gap-8 w-full mt-2">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="w-full bg-[#ECE7D8] text-[#181716] rounded-2xl p-6 sm:p-7 shadow-xl border border-black/15 relative overflow-hidden"
            style={{
              backgroundImage:
                'radial-gradient(rgba(45, 40, 35, 0.18) 1.2px, transparent 1.2px)',
              backgroundSize: '18px 18px',
            }}
          >
            {/* Top Row: Large Number (Left) & Filled Tag Pills (Right) */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-dm-serif text-5xl font-normal text-[#9E988A] select-none leading-none"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {project.number}
              </span>
              <div className="flex items-center gap-1.5 flex-wrap justify-end">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#DDD7C6] text-[#3A3832] font-syne font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Title */}
            <h3
              className="font-dm-serif text-3xl sm:text-4xl font-bold text-[#181716] tracking-tight uppercase"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-[#423E38] text-sm leading-relaxed mt-2.5 mb-4 font-normal">
              {project.description}
            </p>

            {/* Key Facts / Specs Grid (No borders, filled beige background) */}
            <div className="grid grid-cols-2 gap-2.5 my-3">
              {project.keyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-[#E2DCCB] rounded-[8px] p-3 shadow-2xs flex flex-col justify-center"
                >
                  <span className="text-[9.5px] uppercase font-syne font-bold tracking-widest text-[#736C5F] block">
                    {fact.label}
                  </span>
                  <p className="text-xs font-bold text-[#181716] leading-snug mt-0.5">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* GO TO PROJECT Button */}
            <button
              onClick={() => handleProjectClick(project)}
              className="w-full py-3.5 px-6 rounded-full bg-[#181816] hover:bg-black text-[#D1F047] font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md mb-6 transition-all group cursor-pointer"
            >
              <span>GO TO PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#D1F047] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Image Card with Tape */}
            <div className="relative my-4 flex flex-col items-center">
              <div className="absolute -top-3 z-20 w-14 h-4 bg-white/70 backdrop-blur-[2px] border border-white/50 shadow-2xs -rotate-2" />
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#161618] border border-black/15 shadow-md">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p
                className="font-caveat text-lg text-[#2d2c28] mt-2 text-center"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                {project.caption}
              </p>
            </div>

            {/* Yellow Sticky Note pinned on mobile card */}
            <div className="mt-4 flex justify-end">
              <div className="relative bg-[#faea65] text-[#1a1a18] px-4 py-3 rounded-[2px] shadow-md max-w-[220px] rotate-[-2deg] border border-black/10">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/65 backdrop-blur-[2px] border border-white/40 shadow-2xs pointer-events-none" />
                <p
                  className="font-caveat text-[16px] leading-[1.2] text-[#1a1a18] whitespace-pre-line text-left"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                >
                  {project.stickyText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

      {/* Interactive Fullscreen Case Study Modal */}
      {selectedCaseStudyIndex !== null && (
        <CaseStudyModal
          initialIndex={selectedCaseStudyIndex}
          isOpen={selectedCaseStudyIndex !== null}
          onClose={() => setSelectedCaseStudyIndex(null)}
        />
      )}
    </section>
  );
};



