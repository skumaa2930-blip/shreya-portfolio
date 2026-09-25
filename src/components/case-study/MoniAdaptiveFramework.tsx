import React from 'react';
import { motion } from 'motion/react';

interface RiskLevel {
  id: string;
  level: string;
  color: string;
  title: string;
  desc: string;
  borderColor?: string;
}

const RISK_LEVELS: RiskLevel[] = [
  {
    id: 'risk-low',
    level: 'LOW RISK',
    color: '#2fd6a3',
    title: 'Passive Logging',
    desc: 'Reversible micro-transactions. Silent ledger reconciliations with no notification ping.',
  },
  {
    id: 'risk-medium',
    level: 'MEDIUM RISK',
    color: '#5b9cf5',
    title: 'Glanceable Nudge',
    desc: 'Elevated category burn rate. Ambient lock-screen badge when phone is next unlocked.',
  },
  {
    id: 'risk-high',
    level: 'HIGH RISK',
    color: '#f5c542',
    title: 'Mandated Consent',
    desc: 'Discretionary capital transfer or subscription lock. Requires deliberate single tap.',
  },
  {
    id: 'risk-critical',
    level: 'CRITICAL RISK',
    color: '#ff5a7a',
    title: 'Instant Halt',
    desc: 'Immediate interrupt for rent threshold breach or suspected fraudulent debit.',
    borderColor: '#7a2038',
  },
];

export const MoniAdaptiveFramework: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 mt-16 sm:mt-24 lg:mt-32 mb-20 sm:mb-28 lg:mb-36 select-none">
      <section
        id="moni-adaptive-framework"
        className="w-full"
      >
      {/* Heading & Subtitle */}
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[72px] leading-[1.05] tracking-tight text-[#f5f5ef]"
        >
          Adaptive Intervention Framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-hanken font-light text-[#8a8a86] text-base sm:text-xl lg:text-[24px] mt-3 sm:mt-4 leading-relaxed max-w-3xl"
        >
          How the system decides when to stay silent, when to inform, and when to intervene.
        </motion.p>
      </div>

      {/* 4 Equal Dark Cards */}
      <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {RISK_LEVELS.map((item, index) => (
          <motion.article
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`bg-[#141414] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 min-h-[220px] sm:min-h-[290px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg ${
              item.borderColor ? 'border' : 'border border-white/5'
            }`}
            style={{
              borderColor: item.borderColor || undefined,
            }}
          >
            <div>
              {/* JetBrains Mono Uppercase Bold Label */}
              <div
                className="font-mono font-bold text-xs sm:text-sm lg:text-[15px] uppercase tracking-wider mb-5 sm:mb-7 lg:mb-8"
                style={{ color: item.color }}
              >
                {item.level}
              </div>

              {/* Syne Medium White Title */}
              <h3 className="font-syne font-medium text-white text-xl sm:text-2xl lg:text-[30px] leading-tight mb-3 sm:mb-4">
                {item.title}
              </h3>
            </div>

            {/* Grey Hanken Grotesk Light Description */}
            <p className="font-hanken font-light text-[#a3a29b] text-sm sm:text-[15px] lg:text-[16.5px] leading-relaxed">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </div>
      </section>
    </div>
  );
};



