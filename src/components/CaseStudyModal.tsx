import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Check,
  Search,
} from 'lucide-react';

export interface CaseStudyData {
  id: string;
  number: string;
  name: string;
  categories: string;
  handwrittenQuote: {
    line1: string;
    line2: string;
    underlinedWord: string;
  };
  headline: string;
  description: string;
  tags: string[];
  recognition: {
    label: string;
    title: string;
    badge: string;
  };
  mockup: {
    greeting: string;
    subtitle: string;
    metricLabel: string;
    metricValue: string;
    metricDelta: string;
    searchPlaceholder: string;
    glowColor: string;
  };
  projectUrl: string;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'moni',
    number: '01 / 03',
    name: 'MONI',
    categories: 'AI · FINANCE · AGENT',
    handwrittenQuote: {
      line1: 'finance,',
      line2: 'but make it human.',
      underlinedWord: 'human.',
    },
    headline: 'A finance agent for a more intentional you.',
    description:
      'Moni is a finance agent designed to help people make sense of their money through conversational autonomy, predictive cash-flow modeling, and low-cognitive load interfaces.',
    tags: ['CLARITY', 'CONTROL', 'CONVERSATION'],
    recognition: {
      label: 'RECOGNITION',
      title: 'SAMSUNG PRISM HACKATHON',
      badge: 'RUNNER UP',
    },
    mockup: {
      greeting: 'Hey Shreya,',
      subtitle: "Here's how your money moved this month.",
      metricLabel: 'TOTAL BALANCE',
      metricValue: '₹2,48,750.00',
      metricDelta: '↗ 8.6% vs last months',
      searchPlaceholder: 'Ask Moni anything...',
      glowColor: '#2DD4BF',
    },
    projectUrl: 'https://www.behance.net/shreyakumavat',
  },
  {
    id: 'blood-bank',
    number: '02 / 03',
    name: 'BLOOD BANK',
    categories: 'SYSTEM · UX · OOUX',
    handwrittenQuote: {
      line1: 'critical data,',
      line2: 'designed for empathy.',
      underlinedWord: 'empathy.',
    },
    headline: 'A life-critical system designed with clarity and care.',
    description:
      'A blood bank management system designed to map complex critical relations between emergency donors, donation camps, live inventory, and urgent request pipelines with zero cognitive friction.',
    tags: ['ACCURACY', 'EMPATHY', 'RELATIONSHIPS'],
    recognition: {
      label: 'RECOGNITION',
      title: 'OBJECT-ORIENTED UX ARCHIVE',
      badge: 'FEATURED SYSTEM',
    },
    mockup: {
      greeting: 'Urgent Dispatch,',
      subtitle: 'Live emergency inventory & donor match.',
      metricLabel: 'CRITICAL UNITS IN STOCK',
      metricValue: '1,420 Units (O- 48)',
      metricDelta: '↗ 12 Rapid Requests Resolved',
      searchPlaceholder: 'Search donor, camp, blood group...',
      glowColor: '#F43F5E',
    },
    projectUrl: 'https://www.behance.net/shreyakumavat',
  },
  {
    id: 'rafugari',
    number: '03 / 03',
    name: 'RAFUGARI',
    categories: 'CRAFT · HERITAGE · RESTORATION',
    handwrittenQuote: {
      line1: 'mending threads,',
      line2: 'preserving memories.',
      underlinedWord: 'memories.',
    },
    headline: 'Reviving the invisible art of Indian textile restoration.',
    description:
      'A living digital archive and artisan connection platform celebrating Rafugari—the centuries-old craft of invisible mending and heirloom textile conservation. Connecting generational master artisans with conscious fabric custodians.',
    tags: ['HEIRLOOM', 'CRAFT', 'SUSTAINABILITY'],
    recognition: {
      label: 'RESEARCH & ARCHIVE',
      title: 'INDIGENOUS CRAFT STUDY',
      badge: 'HERITAGE ARCHIVE',
    },
    mockup: {
      greeting: 'Condition Mapping,',
      subtitle: 'Microscopic warp & weft alignment scan.',
      metricLabel: 'WEAVE RESTORATION ACCURACY',
      metricValue: '99.6% Invisible Interlock',
      metricDelta: '↗ 320+ Heirloom Works Preserved',
      searchPlaceholder: 'Search weave, master artisan, fabric type...',
      glowColor: '#E5C17C',
    },
    projectUrl: 'https://www.behance.net/shreyakumavat',
  },
];

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  onNavigateToProject?: (studyId: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0,
  onNavigateToProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(24); // percent
  const [isNavigatingAway, setIsNavigatingAway] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsPlaying(false);
      setPlaybackProgress(24);
      setIsNavigatingAway(false);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex]);

  const currentStudy = CASE_STUDIES[currentIndex];

  const getInternalRoute = (id: string) => {
    if (id === 'moni') return '/work/moni';
    if (id === 'blood-bank') return '/work/blood-bank';
    if (id === 'rafugari' || id === 'croma') return '/work/rafugari';
    return null;
  };

  const internalRoute = getInternalRoute(currentStudy.id);

  const handleGoToProject = (e: React.MouseEvent) => {
    if (internalRoute && onNavigateToProject) {
      e.preventDefault();
      setIsNavigatingAway(true);
      setTimeout(() => {
        onClose();
        setIsNavigatingAway(false);
        onNavigateToProject(currentStudy.id);
      }, 200);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    setIsPlaying(false);
  };

  const formatSeconds = (pct: number) => {
    const totalSec = 84; // 1:24
    const current = Math.floor((pct / 100) * totalSec);
    const m = Math.floor(current / 60);
    const s = current % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-2.5 sm:px-4 md:px-5 py-3 sm:py-5 md:py-6 pt-24 sm:pt-28 md:pt-32 pb-24 bg-black/85 backdrop-blur-md overflow-y-auto">
          {/* Backdrop click dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            id="case-study-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 25 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[900px] mx-auto my-0 bg-[#161616] border border-[#2B2B2B] rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden text-white z-10 select-none py-5 sm:py-7 md:py-9 px-4 sm:px-6 md:px-7"
          >
            {/* Top Bar: CASE STUDY PREVIEW & PAGINATION / CLOSE */}
            <div className="flex items-center justify-between font-syne text-[11px] sm:text-xs tracking-[0.2em] text-[#A3A3A3] mb-6 select-none">
              <span className="uppercase font-syne">CASE STUDY PREVIEW</span>
              <div className="flex items-center gap-4">
                <span className="font-syne">{currentStudy.number}</span>
                <button
                  id="close-case-study-modal"
                  onClick={onClose}
                  className="p-1.5 hover:text-white transition-colors cursor-pointer rounded-full bg-white/5 hover:bg-white/15"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Handwritten Slogan Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white uppercase leading-none">
                  {currentStudy.name}
                </h1>
                <div className="mt-2 font-syne text-xs tracking-[0.2em] text-[#D1F047] font-bold uppercase">
                  {currentStudy.categories}
                </div>
              </div>

              {/* Handwritten cursive tagline with decorative underline */}
              <div className="sm:text-right font-handwriting text-xl sm:text-2xl md:text-[26px] text-neutral-300 leading-tight">
                <div>{currentStudy.handwrittenQuote.line1}</div>
                <div className="relative inline-block mt-0.5">
                  <span>{currentStudy.handwrittenQuote.line2}</span>
                  {/* Green curved hand-drawn underline */}
                  <svg
                    viewBox="0 0 120 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-1.5 right-0 w-24 sm:w-28 h-auto pointer-events-none drop-shadow-[0_0_6px_rgba(212,243,74,0.4)]"
                  >
                    <path
                      d="M3 8C35 2 75 1 115 6"
                      stroke="#D4F34A"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Media Box / Video Simulation Stage */}
            <div className="relative w-full rounded-xl overflow-hidden border border-[#2A2A2A] bg-gradient-to-b from-[#1C1917] via-[#111111] to-[#0A0A0A] shadow-inner">
              {/* Radial vignette glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background:
                    'radial-gradient(circle at 60% 40%, rgba(120, 105, 90, 0.4) 0%, transparent 70%)',
                }}
              />

              {/* Center Canvas with Simulated UI */}
              <div className="relative flex items-center justify-center p-6 sm:p-10 min-h-[300px] sm:min-h-[360px] md:min-h-[400px]">
                {/* Floating Mockup Card */}
                <div className="relative w-full max-w-[310px] bg-[#1A1C1E]/95 backdrop-blur-md rounded-[26px] border border-[#404040]/60 p-4 sm:p-5 shadow-2xl transition-transform duration-300">
                  {/* Top nav bar */}
                  <div className="flex items-center justify-between text-neutral-400 text-xs mb-3">
                    <span className="font-mono text-sm">←</span>
                    <span className="text-xs">✕</span>
                  </div>

                  {/* Greeting */}
                  <div className="text-white font-bold text-base sm:text-lg tracking-tight">
                    {currentStudy.mockup.greeting}
                  </div>
                  <div className="text-neutral-400 text-xs mt-0.5 font-light">
                    {currentStudy.mockup.subtitle}
                  </div>

                  {/* Inner Metric Box */}
                  <div className="mt-3.5 mb-3 bg-[#171717]/95 border border-[#262626] rounded-xl p-3">
                    <div className="text-[10px] font-syne text-neutral-500 uppercase tracking-wider">
                      {currentStudy.mockup.metricLabel}
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5 font-sans">
                      {currentStudy.mockup.metricValue}
                    </div>
                    <div className="text-xs font-semibold text-[#34D399] mt-1 flex items-center gap-1 font-sans">
                      {currentStudy.mockup.metricDelta}
                    </div>
                  </div>

                  {/* Bottom input simulation */}
                  <div className="bg-[#0A0A0A]/90 border border-[#262626] rounded-full px-3.5 py-2 flex items-center justify-between text-xs text-neutral-500 font-sans">
                    <span className="truncate">{currentStudy.mockup.searchPlaceholder}</span>
                    <span
                      className="w-3.5 h-3.5 rounded-full border-2 shrink-0 ml-2 animate-pulse"
                      style={{
                        borderColor: currentStudy.mockup.glowColor,
                        boxShadow: `0 0 8px ${currentStudy.mockup.glowColor}`,
                      }}
                    />
                  </div>
                </div>

                {/* Central Play Button */}
                <button
                  id="modal-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 backdrop-blur-[4px] flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.6)] z-20 group"
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 text-white fill-white ml-0.5 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              {/* Bottom Video Progress Control Bar */}
              <div className="h-10 bg-[#121212] border-t border-[#232323] px-4 flex items-center justify-between gap-3 text-xs font-syne text-[#A3A3A3]">
                {/* Progress bar */}
                <div
                  className="flex-1 h-1.5 bg-[#404040]/60 rounded-full overflow-hidden relative cursor-pointer group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    setPlaybackProgress(pct);
                  }}
                >
                  <div
                    className="h-full bg-[#D4F34A] rounded-full transition-all duration-150"
                    style={{ width: `${playbackProgress}%` }}
                  />
                </div>

                {/* Time Indicator */}
                <div className="shrink-0 tracking-wider text-[11px] font-syne">
                  {formatSeconds(playbackProgress)} / 1:24
                </div>

                {/* Volume & Fullscreen controls */}
                <div className="flex items-center gap-2 text-neutral-400">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors cursor-pointer p-0.5"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors cursor-pointer p-0.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Section: Story Details & Recognition Sticky Note */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Headline & Description */}
              <div className="md:col-span-7">
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-white tracking-tight leading-snug">
                  {currentStudy.headline}
                </h3>
                <p className="mt-3 text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {currentStudy.description}
                </p>
              </div>

              {/* Right Column: Tags & Tilted Recognition Kraft Note */}
              <div className="md:col-span-5 flex flex-col items-start md:items-end">
                {/* Horizontal Attributes */}
                <div className="relative pb-1.5 border-b border-[#D1F047] font-syne text-[11px] sm:text-xs text-[#D1F047] font-bold tracking-widest uppercase">
                  {currentStudy.tags.join('  /  ')}
                </div>

                {/* Tilted Recognition Sticky Card */}
                <div className="mt-5 relative w-full max-w-[220px] bg-[#CBB99F] rounded-[3px] p-3.5 shadow-[2px_6px_20px_rgba(0,0,0,0.5)] rotate-[1.5deg] text-black">
                  {/* Frosted tape at top center */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/25 backdrop-blur-[2px] border border-white/40 shadow-xs pointer-events-none" />

                  <div className="font-syne text-[9px] font-bold tracking-[0.16em] uppercase text-neutral-800">
                    {currentStudy.recognition.label}
                  </div>
                  <div className="font-sans font-extrabold text-xs sm:text-[13px] uppercase tracking-wide mt-1 text-[#171717] leading-tight">
                    {currentStudy.recognition.title}
                  </div>
                  <div className="mt-2.5">
                    <span className="inline-block bg-[#D4F34A] text-black font-syne text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px] shadow-xs">
                      {currentStudy.recognition.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Go To Project */}
            <div className="mt-8 rounded-xl bg-[#111111] border border-[#2B2B2B] p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left thumbnail mockup illustration with tilted tape */}
              <div className="relative flex items-center gap-2 p-2 bg-[#0A0A0A] rounded-lg border border-[#262626]">
                {/* Diagonal tape on corner */}
                <div className="absolute -top-1.5 -left-1.5 w-7 h-3 bg-white/25 backdrop-blur-[2px] -rotate-45 border border-white/40 shadow-xs pointer-events-none" />

                <div className="w-14 h-10 bg-[#262626]/90 rounded border border-[#404040]/50 flex flex-col justify-center items-center gap-1">
                  <div className="w-7 h-1 rounded bg-[#525252]" />
                  <div className="w-9 h-1 rounded bg-[#404040]" />
                </div>
                <div className="w-14 h-10 bg-[#262626]/90 rounded border border-[#404040]/50 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border border-[#D4F34A]/60 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#D4F34A]" />
                  </div>
                </div>
                <div className="w-14 h-10 bg-[#262626]/90 rounded border border-[#404040]/50 flex flex-col justify-center items-center gap-1">
                  <div className="w-7 h-1 rounded bg-[#525252]" />
                  <div className="w-5 h-1 rounded bg-[#404040]" />
                </div>
              </div>

              {/* Right: Dive into story & CTA Button */}
              <div
                onClick={handleGoToProject}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
              >
                <div className="text-right">
                  <div className="font-handwriting text-base sm:text-lg text-[#D4CFB4] group-hover:text-[#D4F34A] tracking-wide lowercase transition-colors">
                    dive into the full story →
                  </div>
                  <div className="font-sans text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4F34A] uppercase mt-0.5 transition-colors">
                    GO TO PROJECT
                  </div>
                </div>

                <a
                  id="modal-go-to-project-cta"
                  href={internalRoute || currentStudy.projectUrl}
                  target={internalRoute ? undefined : '_blank'}
                  rel={internalRoute ? undefined : 'noopener noreferrer'}
                  onClick={handleGoToProject}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D4F34A] hover:bg-[#e0ff54] text-black flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,243,74,0.3)] shrink-0 cursor-pointer ${
                    isNavigatingAway ? 'scale-125 bg-white' : ''
                  }`}
                  aria-label="Go to project"
                >
                  <ArrowRight
                    className={`w-5 h-5 stroke-[2.5] transition-transform ${
                      isNavigatingAway ? 'translate-x-1.5' : 'group-hover:translate-x-0.5'
                    }`}
                  />
                </a>
              </div>
            </div>

            {/* Footer Pagination / Switching across 01, 02, 03 */}
            <div className="mt-8 pt-4 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-3 font-syne text-xs tracking-wider text-[#A3A3A3]">
              <span className="uppercase text-[11px] tracking-widest text-neutral-500 font-syne">
                MORE PROJECTS
              </span>

              <div className="flex items-center gap-4 sm:gap-6 font-syne">
                <button
                  onClick={handlePrev}
                  className="hover:text-white transition-colors cursor-pointer text-sm"
                  aria-label="Previous case study"
                >
                  ←
                </button>

                {CASE_STUDIES.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`cursor-pointer transition-colors uppercase font-syne ${
                      currentIndex === idx
                        ? 'text-white font-bold underline decoration-[#D4F34A] decoration-2 underline-offset-4'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {study.id === 'moni' && '01 MONI'}
                    {study.id === 'blood-bank' && '02 BLOOD BANK'}
                    {(study.id === 'rafugari' || study.id === 'croma') && '03 RAFUGARI'}
                  </button>
                ))}

                <button
                  onClick={handleNext}
                  className="hover:text-white transition-colors cursor-pointer text-sm"
                  aria-label="Next case study"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};



