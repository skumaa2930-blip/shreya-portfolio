import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { StickyNote } from './StickyNote';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Sliders,
  Camera,
  Play,
  Pause,
  RotateCcw,
  Film,
  Box,
  Code2,
  Layers,
} from 'lucide-react';

export interface PlaygroundCardData {
  id: string;
  number: string;
  title: string;
  type: 'video' | 'solarify' | 'motion' | 'photo' | 'dial' | 'render';
  mediaSrc?: string;
  driveUrl?: string;
  fallbackImage?: string;
  externalUrl?: string;
  stickyText: string;
  stickyRotation?: string;
  tools: string[];
  description?: string;
}

export const getDriveEmbedUrl = (url?: string): string | null => {
  if (!url) return null;
  // If user pasted an iframe embed code, extract src URL
  const iframeSrcMatch = url.match(/src=["'](https:\/\/[^"']+)["']/);
  const cleanUrl = iframeSrcMatch ? iframeSrcMatch[1] : url;

  // Match drive.google.com/file/d/<id>
  const driveMatch = cleanUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  // Match drive.google.com/open?id=<id> or uc?id=<id>
  const idMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (cleanUrl.includes('drive.google.com') && idMatch && idMatch[1]) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }
  return null;
};

export const PLAYGROUND_CARDS: PlaygroundCardData[] = [
  {
    id: '01-tmm-video',
    number: '01',
    title: 'Semiotics and Semantics Game Design',
    type: 'video',
    driveUrl: 'https://drive.google.com/file/d/14qSFp54KU0MQIgZipn1ExgomM7qgnYiO/preview',
    mediaSrc: '/assets/tmm-video.mp4',
    fallbackImage: '/assets/card1.png',
    stickyText: 'the midnight mystery game. ☺',
    stickyRotation: '-rotate-2',
    tools: ['Figma', 'Runway AI', 'ChatGPT', 'Leonardo AI', 'ElevenLabs'],
    description: "I really enjoyed making this RPG game, especially designing its flow and building the story around it. It was fun figuring out how the narrative, interactions, and gameplay could come together into one experience.",
  },
  {
    id: '02-tangible-game',
    number: '02',
    title: 'Tangible Interaction Prototype',
    type: 'video',
    mediaSrc: '/assets/tangible-game.mp4',
    fallbackImage: '/assets/card2.png',
    stickyText: 'tangible interaction gameplay test.',
    stickyRotation: 'rotate-2',
    tools: ['Figma', 'Android Studio', 'Arduino IDE', 'Tinkercad'],
    description: "This was a challenge for me because it was my first time working so closely with hardware and its coding. But somewhere along the way, I started really enjoying the process—especially adding the logic and interactions that turned the idea into a more seamless working prototype.",
  },
  {
    id: '03-solarify',
    number: '03',
    title: 'Solarify Website Coding',
    type: 'solarify',
    externalUrl: 'https://skumaa2930-blip.github.io/solarify-website/',
    mediaSrc: '/assets/solarify.png',
    fallbackImage: '/assets/card3.png',
    stickyText: 'solar physics in pure html & css ↗',
    stickyRotation: '-rotate-1',
    tools: ['HTML, CSS', 'VS Code', 'Framer', 'XAMPP'],
    description: "This was the second time I worked with coding tools after school. I designed three pages for this website—the About, Contact, and Blog pages—while the rest were designed by my teammates. I’m glad I got to learn the basics through making it, because those fundamentals helped me with my later projects and even with building this portfolio website. :)",
  },
  {
    id: '04-vibe-coding',
    number: '04',
    title: 'Vibe Coding',
    type: 'video',
    driveUrl: 'https://drive.google.com/file/d/1CQjr9aplTjg3nn-MRdO74QQ7WwoIon7G/preview',
    mediaSrc: '/assets/disha-video.mp4',
    fallbackImage: '/assets/card4.png',
    stickyText: 'vibe coding exploration. ☺',
    stickyRotation: 'rotate-2',
    tools: ['Google AI Studio', 'ChatGPT'],
    description: "This was my 2 AM project—a challenge I took up as part of a design submission. I experimented with vibe coding and got to understand much better how it actually works, from turning an idea into something functional to figuring things out as I went. Definitely one of those late-night projects that taught me a lot.",
  },
  {
    id: '05-motion-study',
    number: '05',
    title: 'Parametric Motion Study',
    type: 'motion',
    stickyText: 'playing with timing & easing.\nnever gets old. ♡',
    stickyRotation: '-rotate-3',
    tools: ['Motion / Framer', 'CSS Cubic-Bezier Curves', 'Spring Physics', 'SVG Geometry', '60 FPS Motion'],
    description: "Exploring physics-based motion dynamics, responsive spring dampening, and procedural timing.",
  },
  {
    id: '06-photography',
    number: '06',
    title: '35mm Darkroom Photography',
    type: 'photo',
    mediaSrc: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1600&auto=format&fit=crop',
    stickyText: 'clicked this without thinking much.\nturned out okay.',
    stickyRotation: 'rotate-1',
    tools: ['35mm SLR Camera', 'Kodak Tri-X 400 Film', 'Manual Darkroom Development', 'Silver Halide Print'],
    description: "Documenting candid geometry, shadow contrast, and light leaks through a manual analog workflow.",
  },
  {
    id: '07-interface-exp',
    number: '07',
    title: 'Dial OS Tactile Interface',
    type: 'dial',
    stickyText: 'just exploring visual feels.\nno big logic.',
    stickyRotation: '-rotate-2',
    tools: ['React State Engine', 'SVG Arc Trigonometry', 'Continuous Radial Gestures', 'Tailwind CSS'],
    description: "Investigating radial input mechanics and continuous tactile feedback loops on digital screens.",
  },
  {
    id: '08-3d-blender',
    number: '08',
    title: '3D Isometric Composition',
    type: 'render',
    mediaSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    stickyText: 'wanted to learn 3d. started somewhere. ☺\nokay this one got weird. ☺',
    stickyRotation: 'rotate-2',
    tools: ['Blender 4.x', 'Cycles Ray-Tracing Engine', 'Procedural Shaders', 'Denoised OptiX Pass'],
    description: "Spatial volumetrics, procedural emissive shaders, and complex lighting studies rendered in Cycles.",
  },
];

interface PlaygroundCardModalProps {
  card: PlaygroundCardData | null;
  onClose: () => void;
  onSelectCard: (card: PlaygroundCardData) => void;
}

export const PlaygroundCardModal: React.FC<PlaygroundCardModalProps> = ({
  card,
  onClose,
  onSelectCard,
}) => {
  // Dial state inside modal
  const [modalDialValue, setModalDialValue] = useState(72);
  const [activeSpeed, setActiveSpeed] = useState<number>(1);
  const [isPlayingSolar, setIsPlayingSolar] = useState(true);

  // Motion study speed state
  const [motionSpeed, setMotionSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  useEffect(() => {
    if (!card) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = PLAYGROUND_CARDS.findIndex((c) => c.id === card.id);
        const nextIndex = (currentIndex + 1) % PLAYGROUND_CARDS.length;
        onSelectCard(PLAYGROUND_CARDS[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = PLAYGROUND_CARDS.findIndex((c) => c.id === card.id);
        const prevIndex = (currentIndex - 1 + PLAYGROUND_CARDS.length) % PLAYGROUND_CARDS.length;
        onSelectCard(PLAYGROUND_CARDS[prevIndex]);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [card, onClose, onSelectCard]);

  if (!card) return null;

  const currentIndex = PLAYGROUND_CARDS.findIndex((c) => c.id === card.id);
  const prevCard = PLAYGROUND_CARDS[(currentIndex - 1 + PLAYGROUND_CARDS.length) % PLAYGROUND_CARDS.length];
  const nextCard = PLAYGROUND_CARDS[(currentIndex + 1) % PLAYGROUND_CARDS.length];

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#141416] text-white rounded-2xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
        >
          {/* Top Header Bar */}
          <div className="px-5 sm:px-7 py-4 border-b border-white/10 flex items-center justify-between bg-[#18181C] shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-syne text-xs sm:text-sm text-[#B6D63A] font-bold tracking-wider px-2 py-0.5 rounded bg-[#B6D63A]/10 border border-[#B6D63A]/20 uppercase">
                {card.title}
              </span>
            </div>

            {/* Top Navigation & Close Action */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectCard(prevCard)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectCard(nextCard)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-4 bg-white/15 mx-1" />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Close Modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-5 sm:p-7 md:p-8 overflow-y-auto space-y-6 flex-1">
            {/* Main Interactive / Media Stage */}
            <div className="w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
              {/* VIDEO CARDS */}
              {card.type === 'video' && (
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  {(() => {
                    const embedUrl = getDriveEmbedUrl(card.driveUrl || card.mediaSrc);
                    if (embedUrl) {
                      return (
                        <iframe
                          src={embedUrl}
                          title={card.title}
                          className="w-full h-full border-0 rounded-lg"
                          allow="autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; clipboard-write; gyroscope"
                          allowFullScreen
                          loading="eager"
                        />
                      );
                    }
                    return (
                      <video
                        src={card.mediaSrc}
                        poster={card.fallbackImage}
                        controls
                        autoPlay
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                      >
                        <img
                          src={card.fallbackImage}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </video>
                    );
                  })()}
                </div>
              )}

              {/* SOLARIFY CARD */}
              {card.type === 'solarify' && (
                <div className="relative aspect-video w-full bg-[#0d0d10] flex items-center justify-center overflow-hidden p-2 sm:p-4">
                  <img
                    src="/assets/solarify.png"
                    alt={card.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('card3.png')) {
                        target.src = '/assets/card3.png';
                      }
                    }}
                  />
                  {card.externalUrl && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-3">
                      <a
                        href={card.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-[#B6D63A] text-black font-syne font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all shadow-xl"
                      >
                        OPEN LIVE SOLARIFY WEBSITE
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* MOTION STUDY CARD */}
              {card.type === 'motion' && (
                <div className="relative aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center p-6 overflow-hidden">
                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
                    {/* Ring 1 */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: motionSpeed === 'slow' ? 14 : motionSpeed === 'fast' ? 4 : 8,
                        ease: 'linear',
                      }}
                      className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#B6D63A]/60 flex items-center justify-center relative"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B6D63A] absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#B6D63A]" />
                    </motion.div>

                    {/* Ring 2 */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: motionSpeed === 'slow' ? 8 : motionSpeed === 'fast' ? 2 : 4,
                        ease: 'linear',
                      }}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/40 flex items-center justify-center absolute"
                    >
                      <div className="w-3 h-3 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />
                    </motion.div>

                    {/* Center Point */}
                    <div className="w-4 h-4 rounded-full bg-[#B6D63A]/80 animate-ping absolute" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B6D63A] absolute" />
                  </div>

                  {/* Motion Study Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="font-syne text-xs text-neutral-400">
                      CURVE: CUBIC_BEZIER(0.16, 1, 0.3, 1)
                    </span>
                    <div className="flex items-center gap-1.5">
                      {(['slow', 'normal', 'fast'] as const).map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setMotionSpeed(spd)}
                          className={`px-2.5 py-1 text-xs font-syne uppercase rounded transition-colors cursor-pointer ${
                            motionSpeed === spd
                              ? 'bg-[#B6D63A] text-black font-bold'
                              : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PHOTOGRAPHY CARD */}
              {card.type === 'photo' && (
                <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={card.mediaSrc}
                    alt={card.title}
                    className="w-full h-full object-cover grayscale contrast-150"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-syne text-xs text-white/90">
                    KODAK TRI-X 400 • 35MM PRIME LENS • DARKROOM SILVER PRINT
                  </div>
                </div>
              )}

              {/* DIAL OS CARD */}
              {card.type === 'dial' && (
                <div className="relative aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center p-6 overflow-hidden">
                  {/* Big Interactive Dial */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-neutral-800 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        fill="none"
                        stroke="#262626"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        fill="none"
                        stroke="#B6D63A"
                        strokeWidth="8"
                        strokeDasharray="500"
                        strokeDashoffset={500 - (500 * modalDialValue) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-150"
                      />
                    </svg>
                    <div className="text-center font-syne">
                      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {modalDialValue}%
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#B6D63A] uppercase tracking-widest mt-1">
                        FOCUS VELOCITY
                      </div>
                    </div>
                  </div>

                  {/* Dial Control Slider */}
                  <div className="mt-5 w-full max-w-xs flex flex-col items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={modalDialValue}
                      onChange={(e) => setModalDialValue(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg accent-[#B6D63A] cursor-pointer"
                    />
                    <div className="flex justify-between w-full font-syne text-[10px] text-neutral-500">
                      <span>0% IDLE</span>
                      <span>50% FLOW</span>
                      <span>100% MAXIMUM</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3D / BLENDER CARD */}
              {card.type === 'render' && (
                <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={card.mediaSrc}
                    alt={card.title}
                    className="w-full h-full object-cover contrast-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-syne text-xs text-[#B6D63A]">
                    CYCLES GPU • 512 SAMPLES • DENOISED OPTIX
                  </div>
                </div>
              )}
            </div>

            {/* Description & Reflection Card */}
            {card.description && (
              <div className="relative rounded-xl bg-[#19191D] border border-white/10 p-5 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#B6D63A]" />
                  <span className="font-syne text-[11px] font-bold uppercase tracking-wider text-[#B6D63A]">
                    Behind The Experiment
                  </span>
                </div>
                <p className="font-general text-[#F5F5F0] text-sm sm:text-[15px] leading-relaxed">
                  "{card.description}"
                </p>

                {/* Tools used tag list */}
                {card.tools && card.tools.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="font-syne text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mr-1">
                      Tools:
                    </span>
                    {card.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-syne text-[11px] text-neutral-300 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* External Action Button if Available */}
            {(card.externalUrl || card.driveUrl) && (
              <div className="pt-2 flex justify-end">
                {card.externalUrl && (
                  <a
                    href={card.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B6D63A] text-black font-syne font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg hover:shadow-[#B6D63A]/20 cursor-pointer"
                  >
                    Open Live Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {card.driveUrl && !card.externalUrl && (
                  <a
                    href={card.driveUrl.replace('/preview', '/view?usp=sharing')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-syne font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#B6D63A] hover:text-black hover:border-[#B6D63A] transition-all shadow-md cursor-pointer"
                  >
                    Watch Original HD in Google Drive
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
