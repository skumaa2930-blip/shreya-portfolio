import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Scenario {
  l1: string;
  l2: string;
  text: string;
  img: string;
  label: string;
  badge: string;
  title: string;
  desc: string;
  val: string;
}

const SCENARIOS: Scenario[] = [
  {
    l1: 'Salary hits.',
    l2: 'The agent takes over.',
    text: 'As soon as Rohan’s salary is credited, the agent understands his financial patterns using salary signals, recurring expenses, and spending behavior. In the background, it automatically structures budgets across essentials, lifestyle, and savings, then surfaces a simple monthly snapshot ready to lock in.',
    img: '/assets/s1.png',
    label: 'Salary credited · lock-screen notification',
    badge: 'SIGNAL // SALARY_CREDIT',
    title: 'Salary Credited · ₹1,42,000',
    desc: 'Autonomously structured ₹45k Essentials • ₹32k Lifestyle • ₹65k Investments & Emergency.',
    val: 'Ready to lock in snapshot',
  },
  {
    l1: 'Going Out, Without',
    l2: 'Overthinking Money',
    text: 'When Rohan plans to go out for dinner, the agent understands his budget, spending patterns, location, and offers in real time. It suggests places, manages payments, tracks spending automatically, and quietly helps him stay financially balanced.',
    img: '/assets/s2.png',
    label: 'Going out · dinner suggestion',
    badge: 'CONTEXT // DINING_OUT',
    title: 'Indiranagar · ₹3,200 Safe Envelope',
    desc: 'Burma Burma suggested. 15% card dining discount applied automatically.',
    val: 'Quiet balance guard active',
  },
  {
    l1: 'Eat In Instead Of',
    l2: 'Spending Another Night Out',
    text: 'After eating out multiple times, Rohan decides to cook at home instead. The agent understands his grocery list, compares prices across apps, manages payments automatically, and places optimized orders with minimal effort.',
    img: '/assets/s3.png',
    label: 'Cooking at home · grocery orders',
    badge: 'OPTIMIZATION // GROCERIES',
    title: 'Cook at Home · Optimized Basket',
    desc: 'Cross-compared Blinkit vs Instamart vs Zepto. Saved ₹340 on fresh staples.',
    val: '1-Tap consent auto-placed',
  },
  {
    l1: 'Splitting Bills Should Not',
    l2: 'Feel Like Managing Them',
    text: 'When Rohan pays for shared expenses like rent, the agent automatically handles splits, tracks repayments, and updates only his actual share in the budget while quietly managing reminders and pending balances in the background.',
    img: '/assets/s4.png',
    label: 'Shared rent · split & reminders',
    badge: 'COORDINATION // FLAT_RENT',
    title: 'Flat Rent · ₹45,000 Reconciled',
    desc: 'Your share ₹15,000 locked in ledger. 2 flatmate split reminders scheduled.',
    val: 'Zero awkward manual texts',
  },
  {
    l1: 'We also thought about',
    l2: 'a Bali trip.',
    text: 'How Rohan could plan a Bali trip while the agent quietly builds a savings plan around his lifestyle, tracks the best flight prices, and adapts to unexpected expenses or emergencies in real time, helping him stay financially stable while still keeping his travel goal on track.',
    img: '/assets/s5.png',
    label: 'Bonus · Bali trip plan',
    badge: 'GOAL // BALI_GETAWAY',
    title: 'Bali Flight Alert · ₹24,800 (-12%)',
    desc: 'Lifestyle envelope auto-saved ₹8,000/mo without touching emergency reserves.',
    val: 'Trip goal trajectory on track',
  },
];

export const MoniScenarioCarousel: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const mediaRef = useRef<HTMLDivElement>(null);

  const scenario = SCENARIOS[activeIdx];

  // Preload image test
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = scenario.img;
  }, [scenario.img]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SCENARIOS.length) % SCENARIOS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SCENARIOS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches && e.changedTouches[0]) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - touchStartX;
      const diffY = endY - touchStartY;

      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 my-12 sm:my-16 lg:my-24">
      <section
        id="moni-scenario-carousel"
        className="w-full bg-[#141414] rounded-[24px] sm:rounded-[36px] lg:rounded-[48px] p-6 sm:p-9 lg:p-12 border border-white/5 shadow-2xl relative"
        aria-roledescription="carousel"
        aria-label="MONI scenarios"
      >
        {/* Top row, 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start min-h-0 sm:min-h-[90px] lg:min-h-[105px]">
          {/* LEFT: Two-line Playfair Display Bold heading */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${activeIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="font-playfair font-bold text-xl sm:text-2xl md:text-[34px] lg:text-[40px] leading-[1.08] tracking-tight"
              >
                <span className="block text-[#c9f14a] text-xl sm:text-2xl md:text-[34px] lg:text-[40px]">{scenario.l1}</span>
                <span className="block text-[#f4f2ea] text-xl sm:text-2xl md:text-[34px] lg:text-[40px]">{scenario.l2}</span>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* RIGHT: Grey Hanken Grotesk Light paragraph */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="font-hanken font-light text-[#a3a29b] text-sm sm:text-base lg:text-[17px] leading-[1.5] tracking-[-0.005em]"
              >
                {scenario.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Pure black media box */}
        <div className="relative mt-5 sm:mt-7 lg:mt-8">
          <div
            ref={mediaRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="bg-black aspect-[16/9] w-full max-h-[460px] sm:max-h-[500px] lg:max-h-[520px] rounded-2xl sm:rounded-3xl lg:rounded-[28px] border border-white/10 relative overflow-hidden flex items-center justify-center shadow-inner"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-${activeIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-4"
              >
                <img
                  src={scenario.img}
                  alt={scenario.label}
                  className="max-w-full max-h-full object-contain select-none"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    const fallbackEl = parent?.querySelector('.scenario-fallback-mockup');
                    if (fallbackEl) {
                      (fallbackEl as HTMLElement).style.display = 'flex';
                    }
                  }}
                  onLoad={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'block';
                    const parent = target.parentElement;
                    const fallbackEl = parent?.querySelector('.scenario-fallback-mockup');
                    if (fallbackEl) {
                      (fallbackEl as HTMLElement).style.display = 'none';
                    }
                  }}
                />

                {/* Interactive Realistic Smartphone Screen Mockup Fallback (shown only if image fails) */}
                <div
                  className="scenario-fallback-mockup hidden h-[92%] max-h-[430px] aspect-[9/19] rounded-[20px] sm:rounded-[30px] lg:rounded-[36px] bg-[#0d0d10] border-[3.5px] sm:border-[4.5px] border-[#28282e] relative flex-col justify-between p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] select-none overflow-hidden"
                  aria-label={scenario.label}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[28%] h-[3%] bg-black rounded-full z-10" />

                  {/* Top Status Bar */}
                  <div className="flex justify-between items-center font-mono text-[8.5px] sm:text-[10px] text-[#8a8a86] px-1 mt-0.5">
                    <span>09:41</span>
                    <span>5G · 100%</span>
                  </div>

                  {/* Scenario Screen Content */}
                  <div className="flex-1 flex flex-col justify-center gap-2.5 my-2">
                    <div className="self-start font-mono text-[8.5px] sm:text-[9.5px] font-semibold text-[#c9f14a] bg-[#192112] border border-[#303e1e] px-2 py-0.5 rounded tracking-wider uppercase">
                      {scenario.badge}
                    </div>
                    <div className="bg-[#16161a] border border-white/10 rounded-xl p-2.5 sm:p-3.5">
                      <div className="font-syne text-xs sm:text-[14px] font-semibold text-white mb-1">
                        {scenario.title}
                      </div>
                      <div className="font-hanken font-light text-[10px] sm:text-[11.5px] text-[#a3a29b] leading-snug">
                        {scenario.desc}
                      </div>
                      <div className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10.5px] text-[#c9f14a] mt-1.5 font-medium">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9f14a] animate-pulse" />
                        {scenario.val}
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom System Bar */}
                  <div className="border-t border-white/10 pt-1.5 flex justify-between items-center font-mono text-[8px] sm:text-[9px] text-[#6e6e6b]">
                    <span>MONI SCENARIO {String(activeIdx + 1).padStart(2, '0')}</span>
                    <span className="text-[#c9f14a] font-semibold">ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Circular Arrows (Left & Right edges, vertically centered) */}
        <button
          onClick={handlePrev}
          aria-label="Previous scenario"
          className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 lg:-left-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-[#141414]/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#c9f14a] hover:text-[#141414] hover:border-[#c9f14a] transition-all duration-200 z-10 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9f14a]"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next scenario"
          className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 lg:-right-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-[#141414]/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#c9f14a] hover:text-[#141414] hover:border-[#c9f14a] transition-all duration-200 z-10 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9f14a]"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Under media footer: Counter & Pill dots */}
      <div className="flex items-center justify-between mt-3.5 sm:mt-4">
        <div className="font-mono text-xs sm:text-[13px] tracking-wider text-[#a3a29b]">
          <b className="text-[#c9f14a] font-bold">
            {String(activeIdx + 1).padStart(2, '0')}
          </b>{' '}
          / <span>{String(SCENARIOS.length).padStart(2, '0')}</span>
        </div>

        {/* Pill dots */}
        <div className="flex items-center gap-2">
          {SCENARIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Go to scenario ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIdx ? 'w-7 bg-[#c9f14a]' : 'w-2 bg-[#4a4a47] hover:bg-[#6e6e6b]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};



