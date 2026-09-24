import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LayerData {
  id: string;
  badge: string;
  title: string;
  desc: string;
  topDesktop: string; // CSS top or bottom for desktop popover
  isBottomDesktop?: boolean;
}

const LAYERS: LayerData[] = [
  {
    id: '1',
    badge: '1',
    title: 'Agent status & backend logic',
    desc: 'A small pill at the top shows what Moni is doing right now, whether it is observing, reasoning or acting, so the system never feels like a black box.',
    topDesktop: 'top-[0px]',
  },
  {
    id: '2',
    badge: '2',
    title: 'Reasoning layer & dynamic widget',
    desc: 'The widget appears only when there is something worth showing. It carries its own header and content, and Moni’s suggestions sit right beneath it.',
    topDesktop: 'top-[200px]',
  },
  {
    id: '3',
    badge: '3',
    title: 'Conversational layer',
    desc: 'Where Moni talks back in plain language, explaining what it noticed or what it is about to do.',
    topDesktop: 'bottom-[100px]',
    isBottomDesktop: true,
  },
  {
    id: '4',
    badge: '4',
    title: 'User input field',
    desc: 'Always within reach, so the user can ask a question, correct Moni, or take control at any moment.',
    topDesktop: 'bottom-[20px]',
    isBottomDesktop: true,
  },
];

export const MoniVisualizingLayout: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeId = hoveredId || pinnedId;

  // Handle click outside to unpin
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (stageRef.current && !stageRef.current.contains(e.target as Node)) {
        setPinnedId(null);
        setHoveredId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMarkerClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPinnedId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="moni-visualizing-agent-layout"
      className="w-full text-[#ededed] py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* =========================================================================
            1. Centered Heading & Intro
            ========================================================================= */}
        <div className="max-w-[920px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-[#c9f14a] text-4xl sm:text-5xl md:text-[64px] leading-[1.02] tracking-[-0.01em]"
            style={{
              textShadow: '0 0 24px rgba(201, 241, 74, 0.15)',
            }}
          >
            Visualizing the
            <br />
            Agent’s New Layout
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-[#8a8a86] font-hanken font-light text-base sm:text-lg md:text-[20px] leading-[1.5] max-w-[920px] mx-auto"
          >
            Four layers work together on one screen, so Moni can think, suggest and talk without getting in the way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 text-xs sm:text-sm text-[#b1b1ac] font-hanken font-normal tracking-wide"
          >
            Hover over a number to see what each layer does.
          </motion.p>
        </div>

        {/* =========================================================================
            2. Interactive Stage with Markers & Phone Diagram
            ========================================================================= */}
        <div
          ref={stageRef}
          className="relative mx-auto mt-12 sm:mt-16 md:mt-24 w-full max-w-[400px] select-none"
        >
          {/* NUMBERED MARKERS (1–4) ON THE LEFT */}
          {/* MARKER 1: Points to Top Island (Agent Status) */}
          <button
            type="button"
            data-i="1"
            aria-label="1 Agent status & backend logic"
            onMouseEnter={() => setHoveredId('1')}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId('1')}
            onBlur={() => setHoveredId(null)}
            onClick={(e) => handleMarkerClick('1', e)}
            className={`absolute -left-[54px] sm:-left-[74px] top-[6px] w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center font-hanken text-[16px] sm:text-[19px] z-20 cursor-pointer transition-all duration-250 ease-out focus:outline-none ${
              activeId === '1'
                ? 'bg-[#c9f14a] text-black scale-115 shadow-[0_0_16px_rgba(201,241,74,0.6)] border-2 border-[#1f5c48]'
                : 'bg-[#86dcb8] text-[#0f2a20] border-2 border-[#1f5c48] hover:scale-115 hover:bg-[#c9f14a]'
            }`}
          >
            1
            {/* Connector line to device */}
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 w-[22px] sm:w-[32px] h-[1px] transition-colors duration-250 ${
                activeId === '1' ? 'bg-[#c9f14a]' : 'bg-[#b9b9b9]'
              }`}
            />
          </button>

          {/* MARKER 2: Points to Widget Card */}
          <button
            type="button"
            data-i="2"
            aria-label="2 Reasoning layer & dynamic widget"
            onMouseEnter={() => setHoveredId('2')}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId('2')}
            onBlur={() => setHoveredId(null)}
            onClick={(e) => handleMarkerClick('2', e)}
            className={`absolute -left-[54px] sm:-left-[74px] top-[214px] w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center font-hanken text-[16px] sm:text-[19px] z-20 cursor-pointer transition-all duration-250 ease-out focus:outline-none ${
              activeId === '2'
                ? 'bg-[#c9f14a] text-black scale-115 shadow-[0_0_16px_rgba(201,241,74,0.6)] border-2 border-[#1f5c48]'
                : 'bg-[#86dcb8] text-[#0f2a20] border-2 border-[#1f5c48] hover:scale-115 hover:bg-[#c9f14a]'
            }`}
          >
            2
            {/* Connector line */}
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 w-[22px] sm:w-[32px] h-[1px] transition-colors duration-250 ${
                activeId === '2' ? 'bg-[#c9f14a]' : 'bg-[#b9b9b9]'
              }`}
            />
          </button>

          {/* MARKER 3: Points to Conversational Layer */}
          <button
            type="button"
            data-i="3"
            aria-label="3 Conversational layer"
            onMouseEnter={() => setHoveredId('3')}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId('3')}
            onBlur={() => setHoveredId(null)}
            onClick={(e) => handleMarkerClick('3', e)}
            className={`absolute -left-[54px] sm:-left-[74px] bottom-[118px] w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center font-hanken text-[16px] sm:text-[19px] z-20 cursor-pointer transition-all duration-250 ease-out focus:outline-none ${
              activeId === '3'
                ? 'bg-[#c9f14a] text-black scale-115 shadow-[0_0_16px_rgba(201,241,74,0.6)] border-2 border-[#1f5c48]'
                : 'bg-[#86dcb8] text-[#0f2a20] border-2 border-[#1f5c48] hover:scale-115 hover:bg-[#c9f14a]'
            }`}
          >
            3
            {/* Connector line */}
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 w-[22px] sm:w-[32px] h-[1px] transition-colors duration-250 ${
                activeId === '3' ? 'bg-[#c9f14a]' : 'bg-[#b9b9b9]'
              }`}
            />
          </button>

          {/* MARKER 4: Points to User Input Field */}
          <button
            type="button"
            data-i="4"
            aria-label="4 User input field"
            onMouseEnter={() => setHoveredId('4')}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId('4')}
            onBlur={() => setHoveredId(null)}
            onClick={(e) => handleMarkerClick('4', e)}
            className={`absolute -left-[54px] sm:-left-[74px] bottom-[36px] w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center font-hanken text-[16px] sm:text-[19px] z-20 cursor-pointer transition-all duration-250 ease-out focus:outline-none ${
              activeId === '4'
                ? 'bg-[#c9f14a] text-black scale-115 shadow-[0_0_16px_rgba(201,241,74,0.6)] border-2 border-[#1f5c48]'
                : 'bg-[#86dcb8] text-[#0f2a20] border-2 border-[#1f5c48] hover:scale-115 hover:bg-[#c9f14a]'
            }`}
          >
            4
            {/* Connector line */}
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 w-[22px] sm:w-[32px] h-[1px] transition-colors duration-250 ${
                activeId === '4' ? 'bg-[#c9f14a]' : 'bg-[#b9b9b9]'
              }`}
            />
          </button>

          {/* PHONE DEVICE */}
          <div
            className="relative rounded-[48px] p-0 mt-[38px] shadow-[0_30px_70px_rgba(0,0,0,0.8)] border-0"
          >
            {/* Dynamic Island (Pill on top reading "Agent Status ◉ Backend Logic") */}
            <div
              data-zone="1"
              onMouseEnter={() => setHoveredId('1')}
              onMouseLeave={() => setHoveredId(null)}
              onClick={(e) => handleMarkerClick('1', e)}
              className={`absolute -top-[38px] left-1/2 -translate-x-1/2 bg-black rounded-full h-[44px] px-4 flex items-center gap-3 text-white text-[10px] font-hanken font-medium whitespace-nowrap z-30 shadow-md cursor-pointer transition-all duration-300 ease-out ${
                activeId === '1'
                  ? 'scale-[1.03] shadow-[0_0_0_3px_#c9f14a,0_0_24px_rgba(201,241,74,0.55)]'
                  : ''
              }`}
            >
              <span>Agent Status</span>
              {/* Glowing Purple Orb */}
              <span
                className="w-[22px] h-[22px] rounded-full flex-shrink-0 shadow-inner inline-block"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #8a86e8, #2a2a5e 55%, #0d0d1f)',
                }}
              />
              <span>Backend Logic</span>
            </div>

            {/* Device Screen with moni-mobile-bg background image */}
            <div
              className="rounded-[44px] overflow-hidden pt-[44px] px-2 pb-[10px] min-h-[620px] flex flex-col gap-3 relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/shreya-portfolio/assets/moni-mobile-bg.png'), radial-gradient(circle at 30% 55%, #dcdb9a 0, #b7b48a 28%, transparent 55%), linear-gradient(180deg, #bdbdbd 0%, #9d9da0 55%, #a5a8c8 88%, #7ad0b4 100%)`,
              }}
            >
              {/* Layer 2: Reasoning Layer (Widget Card + Suggestions Pill) */}
              <div
                data-zone="2"
                onMouseEnter={() => setHoveredId('2')}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => handleMarkerClick('2', e)}
                className={`flex flex-col gap-3 cursor-pointer rounded-[24px] p-1 transition-all duration-300 ease-out ${
                  activeId === '2'
                    ? 'scale-[1.015] shadow-[0_0_0_3px_#c9f14a,0_0_24px_rgba(201,241,74,0.55)]'
                    : ''
                }`}
              >
                {/* Black widget card */}
                <div className="bg-black rounded-[22px] p-[14px_14px_16px] text-white shadow-sm">
                  {/* Top status */}
                  <div className="flex items-center gap-2 text-[10px] text-[#ddd] font-hanken">
                    <span className="flex">
                      <i className="w-[18px] h-[18px] rounded-full bg-[#555] -mr-[6px] border border-black inline-block" />
                      <i className="w-[18px] h-[18px] rounded-full bg-[#555] border border-black inline-block" />
                    </span>
                    <span>Agent Reasoning Layer</span>
                  </div>

                  {/* Header */}
                  <div className="text-[11px] font-semibold text-white font-hanken mt-[10px] mb-2 pb-[10px] border-b border-[#333]">
                    Widget Header
                  </div>

                  {/* Grey body */}
                  <div className="bg-[#494949] rounded-[14px] h-[132px] flex items-center justify-center text-[11px] font-semibold text-white font-hanken">
                    Dynamic Contextual Widget
                  </div>
                </div>

                {/* Suggestions pill */}
                <div className="bg-[#3a3a3a] text-white rounded-full text-[10px] font-semibold font-hanken py-3 px-3.5 flex items-center gap-2.5 shadow-sm">
                  <svg viewBox="0 0 200 200" fill="#ffffff" className="w-[18px] h-[18px] flex-shrink-0">
                    <rect x="88" y="128" width="64" height="38" />
                    <rect
                      x="30"
                      y="72"
                      width="36"
                      height="72"
                      transform="rotate(32 48 108)"
                    />
                    <rect
                      x="70"
                      y="14"
                      width="36"
                      height="76"
                      transform="rotate(-28 88 52)"
                    />
                  </svg>
                  <span>Suggestions (Widget Active)</span>
                </div>
              </div>

              {/* Open wallpaper spacer */}
              <div className="flex-1 min-h-[150px]" />

              {/* Layer 3: Conversational Layer */}
              <div
                data-zone="3"
                onMouseEnter={() => setHoveredId('3')}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => handleMarkerClick('3', e)}
                className={`text-white rounded-[20px] h-[92px] flex items-center justify-center text-[11px] font-semibold font-hanken backdrop-blur-sm cursor-pointer transition-all duration-300 ease-out ${
                  activeId === '3'
                    ? 'scale-[1.015] shadow-[0_0_0_3px_#c9f14a,0_0_24px_rgba(201,241,74,0.55)]'
                    : ''
                }`}
                style={{ backgroundColor: 'rgba(70, 70, 70, 0.72)' }}
              >
                Conversational Layer
              </div>

              {/* Layer 4: User Input Field */}
              <div
                data-zone="4"
                onMouseEnter={() => setHoveredId('4')}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => handleMarkerClick('4', e)}
                className={`bg-black text-white rounded-full h-[54px] flex items-center justify-center text-[11px] font-semibold font-hanken shadow-md relative z-[1] cursor-pointer transition-all duration-300 ease-out ${
                  activeId === '4'
                    ? 'scale-[1.015] shadow-[0_0_0_3px_#c9f14a,0_0_24px_rgba(201,241,74,0.55)]'
                    : ''
                }`}
              >
                User Input Field
              </div>

              {/* Bottom mint gradient strip */}
              <div
                className="absolute inset-x-0 bottom-0 h-4"
                style={{
                  background: 'linear-gradient(90deg, #6ccfb5, #8fd7c3)',
                }}
              />
            </div>
          </div>

          {/* =========================================================================
              3. Detail Popovers (Right side of phone on desktop >860px)
              ========================================================================= */}
          <div className="hidden min-[861px]:block pointer-events-none">
            {LAYERS.map((layer) => {
              const isVisible = activeId === layer.id;
              return (
                <div
                  key={layer.id}
                  data-i={layer.id}
                  className={`absolute left-[calc(100%+56px)] w-[min(360px,30vw)] bg-[#141414] text-white rounded-[22px] p-[22px_24px] border border-white/[0.08] shadow-[0_18px_40px_rgba(0,0,0,0.5)] z-20 transition-all duration-300 ease-out ${
                    layer.topDesktop
                  } ${
                    isVisible
                      ? 'opacity-100 translate-x-0 pointer-events-auto'
                      : 'opacity-0 -translate-x-3 pointer-events-none'
                  }`}
                >
                  {/* Connector line to the left pointing back to the layer */}
                  <div className="absolute right-full top-[22px] w-[56px] h-[1px] bg-gradient-to-r from-transparent to-[#c9f14a]" />

                  {/* Mint badge */}
                  <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#86dcb8] text-[#0f2a20] font-hanken font-semibold text-[14px] mb-3">
                    {layer.badge}
                  </span>

                  {/* Title */}
                  <h4 className="font-hanken font-semibold text-[18px] text-white tracking-[-0.01em] mb-2 leading-[1.3]">
                    {layer.title}
                  </h4>

                  {/* Full Description */}
                  <p className="text-[#b9b8b2] font-hanken font-light text-[15px] leading-[1.5]">
                    {layer.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              4. Responsive Detail Panel under Phone (<=860px)
              ========================================================================= */}
          <div className="block min-[861px]:hidden mt-6 w-full max-w-[420px] mx-auto">
            <AnimatePresence mode="wait">
              {activeId ? (
                (() => {
                  const layer = LAYERS.find((l) => l.id === activeId);
                  if (!layer) return null;
                  return (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="bg-[#141414] border border-white/[0.08] rounded-[22px] p-6 shadow-xl text-left"
                    >
                      <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#86dcb8] text-[#0f2a20] font-hanken font-semibold text-[14px] mb-3">
                        {layer.badge}
                      </span>
                      <h4 className="font-hanken font-semibold text-[18px] text-white tracking-[-0.01em] mb-2">
                        {layer.title}
                      </h4>
                      <p className="text-[#b9b8b2] font-hanken font-light text-[15px] leading-[1.5]">
                        {layer.desc}
                      </p>
                    </motion.div>
                  );
                })()
              ) : (
                <div className="bg-[#141414]/60 border border-white/[0.05] rounded-[22px] p-5 text-center text-[#8a8a86] font-hanken text-sm">
                  Tap any number (1–4) above to inspect each layer.
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};


