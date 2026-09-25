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
  },
  {
    id: '03-solarify',
    number: '03',
    title: 'Solarify Website Coding',
    type: 'solarify',
    externalUrl: 'https://skumaa2930-blip.github.io/solarify-website/',
    fallbackImage: '/assets/card3.png',
    stickyText: 'solar physics in pure html & css ↗',
    stickyRotation: '-rotate-1',
    tools: ['HTML, CSS', 'VS Code', 'Framer', 'XAMPP'],
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
  },
  {
    id: '05-motion-study',
    number: '05',
    title: 'Parametric Motion Study',
    type: 'motion',
    stickyText: 'playing with timing & easing.\nnever gets old. ♡',
    stickyRotation: '-rotate-3',
    tools: ['Motion / Framer', 'CSS Cubic-Bezier Curves', 'Spring Physics', 'SVG Geometry', '60 FPS Motion'],
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
  },
  {
    id: '07-interface-exp',
    number: '07',
    title: 'Dial OS Tactile Interface',
    type: 'dial',
    stickyText: 'just exploring visual feels.\nno big logic.',
    stickyRotation: '-rotate-2',
    tools: ['React State Engine', 'SVG Arc Trigonometry', 'Continuous Radial Gestures', 'Tailwind CSS'],
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
              <span className="font-mono-tech text-xs sm:text-sm text-[#ccff00] font-bold tracking-wider px-2 py-0.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/20 uppercase">
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
                <div className="relative aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center p-6 overflow-hidden">
                  {/* Orbit Animation */}
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-amber-400/30 flex items-center justify-center">
                    {/* Sun */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.8)] animate-pulse" />

                    {/* Orbit 1 */}
                    <motion.div
                      animate={{ rotate: isPlayingSolar ? 360 : 0 }}
                      transition={{
                        repeat: Infinity,
                        duration: 6 / activeSpeed,
                        ease: 'linear',
                      }}
                      className="absolute inset-0"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#ccff00] absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_14px_#ccff00]" />
                    </motion.div>

                    {/* Orbit 2 */}
                    <motion.div
                      animate={{ rotate: isPlayingSolar ? -360 : 0 }}
                      transition={{
                        repeat: Infinity,
                        duration: 10 / activeSpeed,
                        ease: 'linear',
                      }}
                      className="absolute -inset-6 rounded-full border border-dashed border-cyan-400/30"
                    >
                      <div className="w-3 h-3 rounded-full bg-cyan-400 absolute bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#38bdf8]" />
                    </motion.div>
                  </div>

                  {/* Solarify Controls Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlayingSolar(!isPlayingSolar)}
                        className="px-3 py-1 text-xs font-mono-tech rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 cursor-pointer"
                      >
                        {isPlayingSolar ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        {isPlayingSolar ? 'PAUSE ORBIT' : 'RESUME ORBIT'}
                      </button>

                      <button
                        onClick={() => setActiveSpeed(activeSpeed === 1 ? 2 : activeSpeed === 2 ? 0.5 : 1)}
                        className="px-2.5 py-1 text-xs font-mono-tech rounded bg-white/10 hover:bg-white/20 text-[#ccff00] cursor-pointer"
                      >
                        {activeSpeed}x SPEED
                      </button>
                    </div>

                    {card.externalUrl && (
                      <a
                        href={card.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-lg bg-[#D1F047] text-black font-syne font-bold text-xs flex items-center gap-1.5 hover:bg-[#bce034] transition-all shadow-md"
                      >
                        OPEN LIVE SOLARIFY WEBSITE
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
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
                      className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#ccff00]/60 flex items-center justify-center relative"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[#ccff00] absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#ccff00]" />
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
                    <div className="w-4 h-4 rounded-full bg-[#ccff00]/80 animate-ping absolute" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] absolute" />
                  </div>

                  {/* Motion Study Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="font-mono-tech text-xs text-neutral-400">
                      CURVE: CUBIC_BEZIER(0.16, 1, 0.3, 1)
                    </span>
                    <div className="flex items-center gap-1.5">
                      {(['slow', 'normal', 'fast'] as const).map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setMotionSpeed(spd)}
                          className={`px-2.5 py-1 text-xs font-mono-tech uppercase rounded transition-colors cursor-pointer ${
                            motionSpeed === spd
                              ? 'bg-[#ccff00] text-black font-bold'
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
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-mono-tech text-xs text-white/90">
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
                        stroke="#ccff00"
                        strokeWidth="8"
                        strokeDasharray="500"
                        strokeDashoffset={500 - (500 * modalDialValue) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-150"
                      />
                    </svg>
                    <div className="text-center font-mono-tech">
                      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {modalDialValue}%
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#ccff00] uppercase tracking-widest mt-1">
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
                      className="w-full h-2 bg-neutral-800 rounded-lg accent-[#ccff00] cursor-pointer"
                    />
                    <div className="flex justify-between w-full font-mono-tech text-[10px] text-neutral-500">
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
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-mono-tech text-xs text-[#ccff00]">
                    CYCLES GPU • 512 SAMPLES • DENOISED OPTIX
                  </div>
                </div>
              )}
            </div>

            {/* External Action Button if Available */}
            {(card.externalUrl || card.driveUrl) && (
              <div className="pt-2 flex justify-end">
                {card.externalUrl && (
                  <a
                    href={card.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D1F047] text-black font-syne font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#bce034] transition-all shadow-lg hover:shadow-[#D1F047]/20 cursor-pointer"
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
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-syne font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#D1F047] hover:text-black hover:border-[#D1F047] transition-all shadow-md cursor-pointer"
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



