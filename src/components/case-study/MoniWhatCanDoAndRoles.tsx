import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface CapabilityItem {
  id: string;
  title: string;
  text: string;
}

interface RoleItem {
  id: string;
  number: string;
  label: string;
  desc: string;
  isSpecial?: boolean;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cap-01',
    title: 'Tracks & Categorises',
    text: 'Decodes messy transaction strings into verified clear ledger items.',
  },
  {
    id: 'cap-02',
    title: 'Plans',
    text: 'Dynamically maps upcoming fixed commitments and liquid buffers.',
  },
  {
    id: 'cap-03',
    title: 'Predicts',
    text: 'Simulates month-end cash flow trajectory curves in real time.',
  },
  {
    id: 'cap-04',
    title: 'Pays',
    text: 'Handles consenting recurring bills and auto-sweeps quietly.',
  },
  {
    id: 'cap-05',
    title: 'Suggests',
    text: 'Surfaces timely guidance tailored to real-world context and intent.',
  },
  {
    id: 'cap-06',
    title: 'Prevents',
    text: 'Halts overdraft cascades, sneaky subscription renewals and fees.',
  },
  {
    id: 'cap-07',
    title: 'Compares',
    text: 'Articulates tangible trade-offs before high-spend decisions.',
  },
  {
    id: 'cap-08',
    title: 'Coordinates',
    text: 'Syncs roommate bills, group trips, and split settlements seamlessly.',
  },
];

const ROLES: RoleItem[] = [
  {
    id: 'role-01',
    number: '01',
    label: 'OBSERVER',
    desc: 'Tracks signals, routines and activity quietly.',
  },
  {
    id: 'role-02',
    number: '02',
    label: 'ADVISOR',
    desc: 'Interprets context and surfaces timely guidance.',
  },
  {
    id: 'role-03',
    number: '03',
    label: 'PLANNER',
    desc: 'Builds adaptive financial plans.',
  },
  {
    id: 'role-04',
    number: '04',
    label: 'EXECUTOR',
    desc: 'Handles payments and recurring financial actions.',
  },
  {
    id: 'role-05',
    number: '05',
    label: 'PROTECTOR',
    desc: 'Anticipates risks before they impact goals.',
    isSpecial: true,
  },
];

export const MoniWhatCanDoAndRoles: React.FC = () => {
  return (
    <div
      id="moni-capabilities-and-roles-section"
      className="w-full text-[#ededed] my-24 sm:my-32 md:my-40 relative space-y-28 sm:space-y-36 md:space-y-44"
    >
      {/* =========================================================
          SECTION 1 – What MONI can do
          ========================================================= */}
      <section id="what-moni-can-do">
        {/* Heading in Playfair Display with vibrant lime highlight */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.08] tracking-tight text-[#F5F5F0]"
        >
          What MONI <span className="text-[#C9F24A]">can do</span>
        </motion.h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#8E8E8A] leading-relaxed font-light mt-4 max-w-2xl">
          Eight deterministic autonomous primitives driving continuous financial harmony across your daily life.
        </p>

        {/* 4-column x 2-row Bento Card Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <motion.article
              key={cap.id}
              id={`moni-cap-card-${idx + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#131315] hover:bg-[#171719] rounded-[22px] sm:rounded-[26px] border border-white/[0.08] hover:border-white/20 p-7 sm:p-8 flex flex-col justify-start min-h-[175px] sm:min-h-[190px] transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
            >
              {/* Top Accent Line Highlight on hover matching Intelligence Layer */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9F24A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="font-syne font-medium text-[#F5F5F0] text-lg sm:text-xl tracking-wide mb-3 sm:mb-4 leading-snug">
                {cap.title}
              </h3>
              <p className="font-sans text-sm sm:text-[14.5px] text-[#8E8E8A] leading-relaxed font-light">
                {cap.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 2 – Agent shifts roles based on context
          ========================================================= */}
      <section
        id="agent-shifts-roles"
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start"
      >
        {/* Left Column: Heading & Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:sticky lg:top-32"
        >
          <h2 className="font-playfair font-normal text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] leading-[1.08] tracking-tight text-[#F5F5F0]">
            Agent <span className="text-[#C9F24A]">shifts roles</span> based on context
          </h2>

          <p className="mt-6 sm:mt-8 text-[#8E8E8A] font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            A context-aware financial intelligence system that continuously adapts its role based on user needs and situations.
          </p>
        </motion.div>

        {/* Right Column: 2-column Grid of Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {ROLES.map((role, idx) => (
            <motion.article
              key={role.id}
              id={`moni-role-card-${role.number.toLowerCase()}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-[22px] sm:rounded-[26px] p-7 sm:p-8 flex flex-col justify-start min-h-[175px] sm:min-h-[190px] transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.4)] ${
                role.isSpecial
                  ? 'bg-[#151a11] hover:bg-[#181f13] border-2 border-[#C9F24A]/40 hover:border-[#C9F24A]/70 shadow-[0_0_35px_rgba(201,242,74,0.08)]'
                  : 'bg-[#131315] hover:bg-[#171719] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* Top Accent line */}
              <div
                className={`absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent ${
                  role.isSpecial ? 'via-[#C9F24A]/70' : 'via-[#C9F24A]/40'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs sm:text-[13px] font-semibold text-[#C9F24A] uppercase tracking-wider">
                  {role.number} {role.label}
                </span>
              </div>

              <p
                className={`font-sans font-light text-base sm:text-[17px] leading-relaxed ${
                  role.isSpecial ? 'text-[#E0E5D5]' : 'text-[#A3A29B]'
                }`}
              >
                {role.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};


