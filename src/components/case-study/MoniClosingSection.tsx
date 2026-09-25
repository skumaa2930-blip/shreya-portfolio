import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const PRINCIPLES = [
  {
    num: 'Principle 01',
    title: 'User stays in control',
    desc: 'Every automation retains a single zero-friction kill switch.',
  },
  {
    num: 'Principle 02',
    title: 'Clear financial context',
    desc: 'Surfaces transparent deterministic formulas behind every decision.',
  },
  {
    num: 'Principle 03',
    title: 'Non-judgemental guidance',
    desc: 'No shaming badges, red warnings, or guilt-tripping notifications.',
  },
  {
    num: 'Principle 04',
    title: 'Invisible reliability',
    desc: 'Operates silently under the hood without asking for constant logging praise.',
  },
  {
    num: 'Principle 05',
    title: 'Automation builds gradually',
    desc: 'Starts with pure observation before asking for autonomous execution keys.',
  },
  {
    num: 'Principle 06',
    title: 'Interrupts only when needed',
    desc: 'Treats human focus as sacred, batching non-urgent context into calm recaps.',
  },
];

const CYCLE_STEPS = [
  { num: '01', name: 'Observes', highlight: false },
  { num: '02', name: 'Interprets', highlight: false },
  { num: '03', name: 'Acts', highlight: false },
  { num: '04', name: 'Predicts', highlight: false },
  { num: '05', name: 'Learns', highlight: true },
];

export const MoniClosingSection: React.FC = () => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>('/assets/hands-moni-card.png');

  useEffect(() => {
    // Check client-side cached image first if user previously provided it
    try {
      const cached = localStorage.getItem('moni_hands_card_image');
      if (cached) {
        setHeroImageSrc(cached);
        return;
      }
    } catch {
      // Ignore
    }

    // Candidate paths in case the user named or saved the file with another extension
    const candidatePaths = [
      '/assets/hands-moni-card.png',
      '/assets/hands-moni-card.PNG',
      '/assets/hands-moni-card.webp',
      '/assets/hands-moni-card.jpg',
      '/assets/hands-moni-card.jpeg',
      '/assets/hands-card.png',
      '/assets/moni-card.png',
      '/assets/hands.png',
      '/assets/card.png',
      '/hands-moni-card.png',
      'assets/hands-moni-card.png',
    ];

    let isMounted = true;

    const probeCandidate = (index: number) => {
      if (!isMounted || index >= candidatePaths.length) return;
      const path = candidatePaths[index];
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          setHeroImageSrc(path);
        }
      };
      img.onerror = () => {
        probeCandidate(index + 1);
      };
      img.src = path;
    };

    probeCandidate(0);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full select-none">
      {/* ================= BLOCK 0 – HERO IMAGE (NO OPAQUE BACKGROUND, NON-INTERACTIVE) ================= */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 my-8 sm:my-12 lg:my-16">
        <section
          id="moni-closing-hero-slot"
          className="w-full relative flex items-center justify-center bg-transparent"
        >
          <img
            src={heroImageSrc}
            alt="Two hands passing the Moni card"
            className="w-full h-auto max-h-[700px] object-contain object-center block"
          />
        </section>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        {/* ================= BLOCK 1 – TRUST & TRANSPARENCY ================= */}
        <section
          id="moni-trust-transparency"
          className="grid grid-cols-1 min-[900px]:grid-cols-12 gap-8 min-[900px]:gap-12 items-start pt-4 sm:pt-8"
        >
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="min-[900px]:col-span-5"
          >
            <h2 className="font-playfair font-bold text-3xl sm:text-5xl min-[900px]:text-[56px] lg:text-[60px] leading-[1.05] tracking-tight text-[#f5f5ef]">
              Trust &amp;<br />Transparency
            </h2>
            <p className="mt-5 sm:mt-7 font-hanken font-light text-[#8a8a86] text-base sm:text-xl min-[900px]:text-[22px] leading-[1.45] tracking-[-0.01em] max-w-xl">
              Trust is the most critical part of a financial agent. It is built gradually through consistent, transparent behaviour not assumed upfront. If an agent can't say no, it wouldn't be an effective one.
            </p>
          </motion.div>

          {/* Right Column: 2x3 Grid of Dark Cards */}
          <div className="min-[900px]:col-span-7 grid grid-cols-1 min-[560px]:grid-cols-2 gap-4 sm:gap-6 min-[900px]:gap-7">
            {PRINCIPLES.map((principle, index) => (
              <motion.article
                key={principle.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className="bg-[#141414] rounded-[22px] p-6 sm:p-7 min-h-[140px] sm:min-h-[170px] border border-white/5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-md"
              >
                <div>
                  <div className="font-mono font-medium text-xs sm:text-[13px] tracking-wider uppercase text-[#c9f14a] mb-2.5 sm:mb-3">
                    {principle.num}
                  </div>
                  <h3 className="font-syne font-medium text-white text-base sm:text-lg min-[900px]:text-[21px] tracking-[0.005em] mb-2 leading-snug">
                    {principle.title}
                  </h3>
                </div>
                <p className="font-hanken font-light text-[#a3a29b] text-xs sm:text-[13.5px] min-[900px]:text-[14.5px] leading-relaxed">
                  {principle.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= BLOCK 2 – LEARNING CYCLE ================= */}
        <section
          id="moni-learning-cycle"
          className="mt-20 sm:mt-28 min-[900px]:mt-36"
        >
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-playfair font-bold text-3xl sm:text-5xl min-[900px]:text-[56px] lg:text-[60px] leading-[1.05] tracking-tight text-[#f5f5ef]"
          >
            Agent that gets smarter<br />with every cycle
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="mt-8 sm:mt-12 min-[900px]:mt-16 bg-[#141414] rounded-[26px] sm:rounded-[36px] min-[900px]:rounded-[44px] p-5 sm:p-8 min-[900px]:p-10 flex flex-col min-[900px]:flex-row items-stretch min-[900px]:items-center gap-2 sm:gap-3 min-[900px]:gap-3.5 border border-white/5 shadow-2xl"
          >
            {CYCLE_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div
                  className={`flex-1 rounded-[16px] min-h-[70px] min-[900px]:min-h-[82px] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-1 ${
                    step.highlight
                      ? 'bg-[#26291a] border border-[#4a5226]'
                      : 'bg-[#0a0a0a] border border-transparent hover:border-[#4a5226]'
                  }`}
                >
                  <span className="font-mono font-medium text-xs sm:text-[13px] text-[#c9f14a]">
                    {step.num}
                  </span>
                  <span
                    className={`font-syne font-medium text-sm sm:text-base min-[900px]:text-[18px] ${
                      step.highlight ? 'text-[#c9f14a]' : 'text-white'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>

                {/* Arrow divider */}
                {idx < CYCLE_STEPS.length - 1 && (
                  <span className="text-[#c9f14a] font-mono text-sm sm:text-base min-[900px]:text-[18px] flex-none text-center transform min-[900px]:transform-none rotate-90 min-[900px]:rotate-0 py-1 min-[900px]:py-0 min-[900px]:px-1">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </section>

        {/* ================= BLOCK 3 – GOAL + THANK YOU ================= */}
        <section
          id="moni-goal-thank-you"
          className="mt-24 sm:mt-36 min-[900px]:mt-48 text-center pb-20 sm:pb-28 min-[900px]:pb-40"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-mono text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#8f8f8a]"
          >
            OUR GOAL
          </motion.p>

          {/* Large Italic Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-playfair italic font-bold text-[#f5f5ef] text-2xl sm:text-3xl min-[900px]:text-[46px] leading-[1.18] max-w-[20em] mx-auto mt-5 sm:mt-8 tracking-tight"
          >
            “The goal is not to build a better finance tool, but to make financial decisions fade into the background so people can focus on living their lives instead of constantly thinking about money.”
          </motion.blockquote>

          {/* Big Lime Thank You */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-playfair font-bold text-[#c9f14a] text-5xl sm:text-7xl min-[900px]:text-[86px] tracking-[0.005em] mt-12 sm:mt-20 min-[900px]:mt-28 leading-none"
          >
            THANK YOU.
          </motion.p>
        </section>
      </div>
    </div>
  );
};



