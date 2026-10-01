import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Mic, 
  Check, 
  ShieldCheck, 
  Eye, 
  ExternalLink,
  ChevronRight,
  Clock,
  Layers,
  Search,
  BookOpen,
  Camera,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Move
} from 'lucide-react';
import { CaseStudyStickyHeader } from './CaseStudyStickyHeader';
import { RafugarWorkbenchDiagram } from './RafugarWorkbenchDiagram';
import { CustomerJourneyDiagram } from './CustomerJourneyDiagram';
import { RafugariUserFlowsDiagram } from './RafugariUserFlowsDiagram';
import { RafugariWireframesSection } from './RafugariWireframesSection';
import { RafugariUsabilityTestingSection } from './RafugariUsabilityTestingSection';
import { CaseStudyFooterSection } from './CaseStudyFooterSection';

interface RafugariCaseStudyPageProps {
  onBack: () => void;
  onOpenNextProject?: () => void;
}

const STICKY_NOTES_COLORS = [
  { bg: '#FFF9A6', border: '#EDE07B', text: '#2C2718', rot: '-rotate-1', tapeRot: 'rotate-1' }, // Yellow
  { bg: '#FED7AA', border: '#FDBA74', text: '#431407', rot: 'rotate-1', tapeRot: '-rotate-2' }, // Peach
  { bg: '#BBF7D0', border: '#86EFAC', text: '#052E16', rot: '-rotate-2', tapeRot: 'rotate-1' }, // Green
  { bg: '#BAE6FD', border: '#7DD3FC', text: '#082F49', rot: 'rotate-1', tapeRot: '-rotate-1' }, // Blue
  { bg: '#E9D5FF', border: '#D8B4FE', text: '#3B0764', rot: '-rotate-1', tapeRot: 'rotate-2' }, // Lavender
  { bg: '#FECDD3', border: '#FDA4AF', text: '#4C0519', rot: 'rotate-2', tapeRot: '-rotate-1' }, // Rose Pink
  { bg: '#D9F99D', border: '#BEF264', text: '#1A2E05', rot: '-rotate-1', tapeRot: 'rotate-1' }, // Lime
] as const;

const SYSTEMS_MAP_CATEGORIES = [
  {
    title: 'PEOPLE',
    items: ['Master Rafugar', 'Apprentice / Son', 'Heirloom Custodian', 'Dry Cleaner Agent'],
  },
  {
    title: 'RELATIONSHIPS',
    items: ['Family Guild', 'Ustad-Shagird', 'Subcontract Network', 'Patron Loyalty'],
  },
  {
    title: 'PRACTICES',
    items: ['Tactile Diagnosis', 'Warp Extraction', 'Informal Pricing', 'Post-care Handover'],
  },
  {
    title: 'KNOWLEDGE',
    items: ['Weave Topologies', 'Fiber Resilience', 'Tension Balance', 'Unwritten Memory'],
  },
  {
    title: 'OBJECTS',
    items: ['Micro Darning Needle', 'Vintage Hem Spools', 'Bone Folding Knife', 'Paper Tag Scraps'],
  },
  {
    title: 'VALUES',
    items: ['Invisible Patience', 'Sacred Integrity', 'Circular Thrift', 'Generational Honor'],
  },
  {
    title: 'CHANGE',
    items: ['Synthetic Blends', 'WhatsApp Statuses', 'UPI Payment QR', 'Career Flight'],
  },
];

export const RafugariCaseStudyPage: React.FC<RafugariCaseStudyPageProps> = ({
  onBack,
  onOpenNextProject,
}) => {
  const [selectedPersonaTab, setSelectedPersonaTab] = useState<'all' | 'artisans' | 'customers'>('all');
  const [activeUiFlow, setActiveUiFlow] = useState<number>(0);
  const [isVoiceSimActive, setIsVoiceSimActive] = useState<boolean>(false);
  const [showPrototypeModal, setShowPrototypeModal] = useState<boolean>(false);
  const [personaZoom, setPersonaZoom] = useState<number>(100);
  const [iaZoom, setIaZoom] = useState<number>(65);
  const [iaActiveTab, setIaActiveTab] = useState<'all' | 'rafugar' | 'customer'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'Rafooghar — Designing for the People Behind Invisible Repairs | Shreya Kumavat';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <motion.div
      id="rafooghar-case-study-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative selection:bg-[#c9f14a] selection:text-black overflow-x-hidden font-sans"
    >
      {/* Background subtle technical grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Sticky Back Navigation Bar with Gradient Scrim */}
      <CaseStudyStickyHeader onBack={onBack} accentColor="#c9f14a" />

      {/* Main Content (All 24 Sections in Order) */}
      <main className="relative z-10 pt-16 sm:pt-20">
        
        {/* ============================================================
            1. HERO
           ============================================================ */}
        <section id="hero" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 pt-0 mt-0">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c9f14a]/10 border border-[#c9f14a]/25 text-[11px] font-syne font-semibold uppercase tracking-[0.14em] text-[#c9f14a] mb-6">
                <span>UX RESEARCH · CRAFT · SERVICE DESIGN</span>
              </div>

              {/* Project Title */}
              <h1 className="font-dm-serif text-[clamp(32px,4.8vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] mb-2">
                Rafooghar
              </h1>

              {/* Italic Accent Sub-Headline in same size as rafooghar */}
              <h2 className="font-dm-serif italic text-[clamp(32px,4.8vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#c9f14a] mb-6">
                for everyday practice of  rarfugars
              </h2>

              {/* One-Paragraph Summary */}
              <p className="font-sans font-light text-[clamp(15px,1.25vw,19px)] text-[#efe9db]/90 leading-relaxed max-w-[56ch] mb-6">
                A repair-management experience designed to help Rafugars navigate everyday work through voice-based documentation, shared repair status, customer communication, and lightweight record-keeping—while preserving the human judgement that makes Rafugari possible.
              </p>

              {/* Script Pull-Quote */}
              <div className="font-caveat font-medium text-[clamp(1.25rem,2.4vw,1.75rem)] text-[#c9f14a] mb-6">
                "We started with a repair. We ended up studying a culture of practice."
              </div>

              {/* Try Prototype Action */}
              <div className="mb-8">
                <button
                  onClick={() => setShowPrototypeModal(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#c9f14a] hover:bg-[#d8ff5e] text-black font-syne text-[12px] font-bold uppercase tracking-[0.12em] transition-all shadow-[0_0_25px_rgba(201,241,74,0.3)] hover:shadow-[0_0_35px_rgba(201,241,74,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Try the Prototype</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Meta Row */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-[rgba(239,233,219,0.14)]">
                <div>
                  <span className="block font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90] mb-1">
                    MY ROLE
                  </span>
                  <span className="font-sans text-[14px] text-[#efe9db] font-medium">
                    Lead UX Researcher
                  </span>
                </div>
                <div>
                  <span className="block font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90] mb-1">
                    TIMELINE
                  </span>
                  <span className="font-sans text-[14px] text-[#efe9db] font-medium">
                    3 Weeks (Field + Design)
                  </span>
                </div>
                <div>
                  <span className="block font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90] mb-1">
                    TOOLS
                  </span>
                  <span className="font-sans text-[14px] text-[#efe9db] font-medium">
                    Figma, Audio Ethnography
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Phone Device Mockup with rafu-intro video asset */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-0 mt-0">
              <div
                id="rafooghar-phone-mockup"
                className="w-[310px] sm:w-[345px] md:w-[370px] aspect-[9/19.5] max-h-[760px] rounded-[48px] bg-black border-[3.5px] border-[#222226] p-0 flex flex-col justify-center items-center shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(201,241,74,0.08)] relative overflow-hidden group select-none ring-1 ring-white/10"
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-3.5 inset-x-0 mx-auto w-24 h-4 bg-black rounded-full flex items-center justify-end pr-2.5 z-30 pointer-events-none shadow-sm border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9f14a] animate-pulse" />
                </div>

                {/* Glass reflection sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] rounded-[48px] z-20" />

                {/* Top Status Bar */}
                <div className="absolute top-0 inset-x-0 pt-3 px-6 flex justify-between items-center text-[11px] font-mono text-neutral-400 z-30 shrink-0 pointer-events-none">
                  <span className="font-semibold tracking-wide">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold">5G</span>
                    <div className="w-5 h-2.5 rounded-sm border border-neutral-400 p-0.5 flex items-center">
                      <div className="w-full h-full bg-[#c9f14a] rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* rafu-intro video asset */}
                <video
                  src="/assets/rafu-intro-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  data-asset="rafu-intro"
                  className="w-full h-full object-cover rounded-[44px] select-none block z-10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('rafu-intro-1') !== -1) {
                      target.src = '/assets/rafu-intro.mp4';
                      target.play().catch(() => {});
                      return;
                    }
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.rafu-hero-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'rafu-hero-fallback w-full h-full rounded-[44px] bg-[#141416] flex flex-col justify-between p-6 pt-12 text-center z-10';
                      fallback.innerHTML = `
                        <div class="text-[10px] font-mono tracking-widest text-[#c9f14a] uppercase">ASSET · RAFU-INTRO</div>
                        <div class="my-auto flex flex-col items-center gap-3">
                          <div class="w-14 h-14 rounded-2xl bg-[#c9f14a]/10 border border-[#c9f14a]/30 flex items-center justify-center text-[#c9f14a] font-bold text-xl">▶</div>
                          <div class="text-xs font-mono text-neutral-300 font-semibold">rafu-intro-1.mp4</div>
                          <div class="text-[10px] font-mono text-neutral-500">Living Practice Mobile View</div>
                        </div>
                        <div class="text-[10px] font-mono text-neutral-400 uppercase">Craft &amp; Service Prototype</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />

                {/* Bottom Home Indicator Bar */}
                <div className="absolute bottom-2.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                  <div className="w-28 h-1 rounded-full bg-white/40 backdrop-blur-md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. STATEMENT & THE FOUR LAYERS (EXACT USER SPECIFICATION)
           ============================================================ */}
        <section id="statement-and-layers" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          {/* Top Visual Row: rafu1 image on the left, heading on the right */}
          <div className="w-full relative mb-5 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: rafu1 image from asset - no border, no background, enlarged size */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col items-center md:items-start justify-center">
              <img 
                src="/assets/rafu1.png" 
                alt="rafu1 · Hand darning and weaving repair"
                data-asset="rafu1"
                className="w-full max-w-[540px] h-auto object-contain block select-none"
              />
            </div>

            {/* Right: Heading text - centered, no span, uniform font color, no italics */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center items-center text-center">
              <h2 className="font-dm-serif text-[clamp(30px,4.2vw,56px)] leading-[1.15] text-[#efe9db] tracking-[-0.01em] text-center">
                A small tear <br />
                does not always mean <br />
                a small problem.
              </h2>
            </div>
          </div>

          {/* Statement Paragraph directly below visual row - shifted up, reduced space, centered on desktop */}
          <div className="w-full max-w-none mb-8 -mt-2 flex justify-center text-center">
            <p className="font-sans text-[clamp(14px,1.15vw,17px)] leading-[1.65] text-[#efe9db]/90 font-light w-full xl:whitespace-nowrap text-center">
              Here, for one person a favourite garment is damaged, and for another it is a challenge to weave and repair it without disturbing what already exists.
            </p>
          </div>

          {/* More space between h4 and above text */}
          <div className="w-full max-w-none mb-9 mt-24 sm:mt-28">
            <h4 className="font-dm-serif text-[clamp(24px,3.2vw,38px)] leading-[1.2] text-[#efe9db] mb-2">
              What does it actually take to repair a tiny hole or a garment without making the repair visible?
            </h4>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#a29d90] font-normal mt-2">
              This question led us from
            </p>
          </div>

          {/* 4 Stepped Progressive Width Tier Bars */}
          <div className="flex flex-col gap-3.5 items-start w-full">
            {/* Layer 01: The Garment (Narrowest: 620px) */}
            <div className="w-full sm:max-w-[620px] bg-[#121214] border border-[rgba(239,233,219,0.16)] rounded-lg px-6 py-4 flex items-center justify-between shadow-lg transition-all hover:border-[#c9f14a]/40 hover:bg-[#18181b] group">
              <span className="font-mono text-[11px] sm:text-[12px] font-medium tracking-[0.14em] text-[#a29d90] uppercase shrink-0">
                LAYER 01
              </span>
              <span className="font-syne font-extrabold text-[17px] sm:text-[20px] tracking-[0.04em] uppercase text-white group-hover:text-[#c9f14a] transition-colors mx-4 text-center">
                THE GARMENT
              </span>
              <span className="font-caveat text-[17px] sm:text-[20px] text-[#efe9db]/90 italic shrink-0">
                The damaged artifact
              </span>
            </div>

            {/* Layer 02: The Craft (Wider: 780px) */}
            <div className="w-full sm:max-w-[780px] bg-[#121214] border border-[rgba(239,233,219,0.16)] rounded-lg px-6 py-4 flex items-center justify-between shadow-lg transition-all hover:border-[#c9f14a]/40 hover:bg-[#18181b] group">
              <span className="font-mono text-[11px] sm:text-[12px] font-medium tracking-[0.14em] text-[#a29d90] uppercase shrink-0">
                LAYER 02
              </span>
              <span className="font-syne font-extrabold text-[17px] sm:text-[20px] tracking-[0.04em] uppercase text-white group-hover:text-[#c9f14a] transition-colors mx-4 text-center">
                THE CRAFT
              </span>
              <span className="font-caveat text-[17px] sm:text-[20px] text-[#efe9db]/90 italic shrink-0">
                Tactile hand-weaving logic
              </span>
            </div>

            {/* Layer 03: The Person (Wider still: 940px) */}
            <div className="w-full sm:max-w-[940px] bg-[#121214] border border-[rgba(239,233,219,0.16)] rounded-lg px-6 py-4 flex items-center justify-between shadow-lg transition-all hover:border-[#c9f14a]/40 hover:bg-[#18181b] group">
              <span className="font-mono text-[11px] sm:text-[12px] font-medium tracking-[0.14em] text-[#a29d90] uppercase shrink-0">
                LAYER 03
              </span>
              <span className="font-syne font-extrabold text-[17px] sm:text-[20px] tracking-[0.04em] uppercase text-white group-hover:text-[#c9f14a] transition-colors mx-4 text-center">
                THE PERSON
              </span>
              <span className="font-caveat text-[17px] sm:text-[20px] text-[#efe9db]/90 italic shrink-0">
                Cognitive burden &amp; eyesight
              </span>
            </div>

            {/* Layer 04: The System (Full Width) */}
            <div className="w-full bg-[#121214] border border-[rgba(239,233,219,0.16)] rounded-lg px-6 py-4 flex items-center justify-between shadow-lg transition-all hover:border-[#c9f14a]/40 hover:bg-[#18181b] group">
              <span className="font-mono text-[11px] sm:text-[12px] font-medium tracking-[0.14em] text-[#a29d90] uppercase shrink-0">
                LAYER 04
              </span>
              <span className="font-syne font-extrabold text-[17px] sm:text-[20px] tracking-[0.04em] uppercase text-white group-hover:text-[#c9f14a] transition-colors mx-4 text-center">
                THE SYSTEM
              </span>
              <span className="font-caveat text-[17px] sm:text-[20px] text-[#efe9db]/90 italic shrink-0">
                Informal market dynamics
              </span>
            </div>
          </div>
        </section>


        {/* ============================================================
            4. CRAFT INTRODUCTION
           ============================================================ */}
        <section id="craft-intro" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          {/* Big 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-8">
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* rafu2 image asset - similar width as below text of p */}
              <div className="mb-6 w-full">
                <img 
                  src="/assets/rafu2.png" 
                  alt="rafu2 · Artisan craft" 
                  data-asset="rafu2" 
                  className="w-full h-auto object-contain block select-none"
                />
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#a29d90] leading-relaxed mb-4">
                Rafugari is a highly specialised Indian practice of invisible textile darning and needle-based reweaving. Rafugars reconstruct a textile's original warp and weft, thread by thread, so the repair visually merges with the original cloth.
              </p>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#efe9db] leading-relaxed mb-3">
                This unique community of local artisans was chosen because their practice exists at the intersection of:
              </p>

              {/* Moni sticky note style for intersection - shifted down */}
              <div className="relative inline-block w-full max-w-full bg-[#BEAC75] text-[#1E1B15] p-4 sm:p-5 rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.45)] border border-black/10 -rotate-0.5 hover:rotate-0 transition-transform duration-200 select-none mt-7 mb-4">
                {/* Scotch tape piece */}
                <div className="absolute -top-2.5 left-8 w-16 h-4 bg-white/40 backdrop-blur-[2px] -rotate-1 border border-white/50 pointer-events-none shadow-xs" />
                <div className="font-mono text-[12px] sm:text-[13px] font-semibold tracking-wide text-[#1E1B15] leading-relaxed">
                  craft + tacit knowledge + livelihood + customer relationship + cultural continuity
                </div>
              </div>
            </div>

            {/* Right column: rafu3 full image without border/background matching the vertical height */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <img 
                src="/assets/rafu3.png" 
                alt="rafu3 · Master Rafugar at work in Pune shop"
                data-asset="rafu3"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/process-01.png';
                }}
                className="w-full max-w-[480px] h-auto max-h-[560px] object-contain block select-none drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Quote text below the whole div, centered */}
          <div className="w-full pt-4 flex justify-center text-center">
            <div className="font-caveat font-medium text-[clamp(1rem,1.35vw,1.25rem)] text-[#c9f14a] leading-relaxed text-center mx-auto">
              "We are not studying Rafugari only as a heritage craft. We are studying the lived experience of Rafugars practising it in Pune today."
            </div>
          </div>
        </section>


        {/* ============================================================
            5. 8-STEP PROCESS STRIP
           ============================================================ */}
        <section id="process-strip" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              What does a Rafugar actually do?
            </h2>
            <p className="font-sans text-[14px] text-[#a29d90]">
              A repair begins long before the needle touches the fabric.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { num: '01', title: 'Garment Damage', desc: 'Inspection of\ntear boundary' },
              { num: '02', title: 'Inspect Fabric', desc: 'Bias stretch &\nfiber count' },
              { num: '03', title: 'Understand Tech', desc: 'Twill, satin,\nor plain weave' },
              { num: '04', title: 'Choose Thread', desc: 'Unravel matching\nhem weft' },
              { num: '05', title: 'Match Quality', desc: 'Colorfastness\nunder light' },
              { num: '06', title: 'Reweave / Repair', desc: 'Microscopic loop\nknotting' },
              { num: '07', title: 'Quality Check', desc: 'Raking light\nsurface test' },
              { num: '08', title: 'Customer Return', desc: 'Preservation\ncare advice' },
            ].map((step, idx) => (
              <div 
                key={idx}
                className="p-[10px] rounded-xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] text-center flex flex-col justify-between min-h-[140px]"
              >
                <span className="font-mono text-[12px] font-semibold text-[#c9f14a]">
                  {step.num}
                </span>
                <div>
                  <h5 className="font-syne text-[11px] font-semibold uppercase tracking-[0.08em] text-[#efe9db] mb-1">
                    {step.title}
                  </h5>
                  <p className="font-sans text-[11px] text-[#a29d90] leading-tight whitespace-pre-line min-h-[2.4em] flex items-center justify-center">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Validation note below process strip */}
          <div className="mt-7 text-center">
            <p className="font-sans text-[14px] text-[#a29d90] tracking-wide italic">
              Later validated through interviews with The Rafugars.
            </p>
          </div>
        </section>


        {/* ============================================================
            6. 2x2 GRID: WHAT MAKES A GARMENT WORTH SAVING
           ============================================================ */}
        <section id="worth-saving" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-3">
                WHY REPAIR INSTEAD OF REPLACE?
              </span>
              <h3 className="font-dm-serif text-[clamp(26px,3.2vw,42px)] leading-[1.1] font-normal text-[#efe9db] mb-4">
                What makes a damaged garment worth saving?
              </h3>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Fast fashion treats garments as disposable. But in Indian households, specific garments hold multi-dimensional value that compels custodians to seek out invisible darning over buying anew.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                  Economic Value
                </h4>
                <p className="font-sans text-[14px] leading-relaxed">
                  <span className="text-[#efe9db] font-medium block mb-2">
                    Is repairing more practical than replacing?
                  </span>
                  <span className="text-[#a29d90] block">
                    Bespoke wool suits, pure silk Paithani sarees, and vintage cashmere coats costing upwards of ₹30,000.
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                  Material Value
                </h4>
                <p className="font-sans text-[14px] leading-relaxed">
                  <span className="text-[#efe9db] font-medium block mb-2">
                    Is the fabric itself irreplaceable?
                  </span>
                  <span className="text-[#a29d90] block">
                    Handspun khadi, antique gold zari threads, and Himalayan pashmina unavailable in modern industrial looms.
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                  Personal Value
                </h4>
                <p className="font-sans text-[14px] leading-relaxed">
                  <span className="text-[#efe9db] font-medium block mb-2">
                    Is the garment gifted or inherited?
                  </span>
                  <span className="text-[#a29d90] block">
                    A father's convocation blazer, a grandmother's wedding saree handed down through three generations.
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                  Emotional Value
                </h4>
                <p className="font-sans text-[14px] leading-relaxed">
                  <span className="text-[#efe9db] font-medium block mb-2">
                    Does the garment carry memory?
                  </span>
                  <span className="text-[#a29d90] block">
                    The tactile comfort and identity stitched into every crease that money cannot re-purchase.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            7. SYSTEMS MAP (7 DISTINCT CHIP CATEGORIES)
           ============================================================ */}
        <section id="systems-map" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              A Rafugar does not work in isolation.
            </h2>
            <p className="font-sans text-[14px] text-[#a29d90]">
              The practice sits within a wider ecosystem of relationships, tools, and social shifts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-4">
            {SYSTEMS_MAP_CATEGORIES.map((cat, idx) => {
              const color = STICKY_NOTES_COLORS[idx % STICKY_NOTES_COLORS.length];
              return (
                <div 
                  key={cat.title} 
                  className={`relative p-4 rounded-xs shadow-[2px_12px_24px_rgba(0,0,0,0.38)] flex flex-col justify-between min-h-[190px] transition-transform duration-200 hover:scale-105 hover:z-20 ${color.rot} border border-black/10 select-none`}
                  style={{
                    backgroundColor: '#BEAC75',
                    color: '#1E1B15',
                  }}
                >
                  {/* Frosted translucent masking tape strip above */}
                  <div 
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4.5 bg-white/75 backdrop-blur-[2px] border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.18)] z-10 pointer-events-none ${color.tapeRot}`}
                  />

                  <div>
                    <h4 
                      className="font-syne text-[11px] font-bold uppercase tracking-[0.14em] pb-2 mb-2 text-[#1E1B15]"
                      style={{ borderBottom: '1px solid rgba(30,27,21,0.2)' }}
                    >
                      {cat.title}
                    </h4>
                    <ul className="text-[12px] space-y-1.5 font-medium font-sans text-[#1E1B15]">
                      {cat.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* ============================================================
            8. VISIBLE VS INVISIBLE SKILL
           ============================================================ */}
        <section id="skills" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex items-center justify-center">
              <img 
                src="/assets/rafu4.png" 
                alt="rafu4 · Master craft technique close-up"
                data-asset="rafu4"
                className="w-full max-w-[520px] h-auto object-contain block select-none drop-shadow-2xl"
              />
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-dm-serif text-[clamp(26px,3.2vw,42px)] leading-[1.1] font-normal text-[#efe9db] mb-4">
                The visible skill is stitching.<br />
                <span className="text-[#c9f14a]">The invisible skill is judgement.</span>
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#a29d90] leading-relaxed mb-4">
                The expertise lies not only in making the repair, but in knowing how to approach it. Tacit knowledge is taught through demonstration, observation, and repeated practice:
              </p>
              <div className="mt-4 font-sans text-[12px] text-[#c9f14a] leading-relaxed">
                Watch → Start Simple → Learn from Mistakes → Build Consistency → Understand Material Through Touch → Develop Independent Judgement.
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            9. SIX RESEARCH QUESTIONS GRID
           ============================================================ */}
        <section id="questions" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 lg:pr-8">
              <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-3">
                WHAT WE WANTED TO UNDERSTAND
              </span>
              <h2 className="font-dm-serif text-[clamp(28px,3.4vw,44px)] leading-[1.12] text-white font-normal mb-5">
                From description → to understanding.
              </h2>
              <p className="font-sans text-[15px] text-[#CBC6BB] leading-relaxed max-w-md">
                We were looking for the relationship between cultural practices and their everyday experience.
              </p>
            </div>

            {/* Right Column: Numbered Questions List with left dividing border */}
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-white/20 flex flex-col space-y-6 sm:space-y-7 pt-2 lg:pt-0">
              {[
                { num: '01', text: 'How is a repair actually performed?' },
                { num: '02', text: 'What decisions depend on experience?' },
                { num: '03', text: 'Who teaches, learns, and works in modern multi-generational darning workshop?' },
                { num: '04', text: 'How do customers communicate and build trust?' },
                { num: '05', text: 'How are time, pricing and orders managed?' },
                { num: '06', text: 'What is changing in the craft, and where has smartphone technology already quietly entered the shop?' },
              ].map((q) => (
                <div key={q.num} className="flex items-start gap-5 group">
                  <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#c9f14a] tracking-wider shrink-0 pt-0.5">
                    {q.num}
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] text-[#E5E2E1] leading-relaxed">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================
            10. WHAT EXISTING LITERATURE SAYS (6 FINDINGS)
           ============================================================ */}
        <section id="literature" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              What existing research tells us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Preserving craft ≠ sustaining practitioner
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Documentation can record the craft stitches, but not the bodily judgement built through observation, correction and repetition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Tech preserves craft &gt; supports work
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Digital tools document museum specimens, but rarely help Rafugars run everyday business: pricing, timelines, tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Knowledge is only learned through doing
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Research raises concerns around continuity as markets change and practitioners' livelihoods shift away from family trades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Documented as heritage, not everyday work
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Most research treats Rafugari as a tradition to preserve in books, not a demanding commercial livelihood practised today.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Concentration in historic centres
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                We know far more about Kashmir and Najibabad than about how practitioners work in rapidly urbanizing Indian centres.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Adapting, not disappearing
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Changing markets and generations are reshaping the practice with smartphones and UPI, rather than erasing it completely.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 font-syne text-[12px] font-semibold uppercase tracking-[0.14em] text-[#c9f14a]">
            "The craft is well documented, but the practitioner is less visible."
          </div>
        </section>


        {/* ============================================================
            11. HISTORICAL ORIGINS TIMELINE
           ============================================================ */}
        <section id="timeline" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-2">
              ORIGINS & SPREAD OF RAFUGARI
            </span>
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              A craft that moved with the people who practised it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto pt-2">
            {[
              { yr: 'Before 1700s', ev: 'Central Asian craft lineages — Samarkand, Bukhara, Iran. Carpet darning and fine tapestry mending arrive along Silk corridors.', rot: '-rotate-1', tapeRot: 'rotate-1' },
              { yr: '1700s', ev: "Tied to Kashmir's Pashmina & Kani shawl industry. Taxation on complete shawls leads to panel assembly and invisible joining by master Rafugars.", rot: 'rotate-1', tapeRot: '-rotate-2' },
              { yr: '1770s–1840s', ev: 'Pahadi famine and oppressive colonial taxation push artisans to Punjab & Najibabad (UP). Cross-pollination with Dhaka and Santipur cotton traditions.', rot: '-rotate-2', tapeRot: 'rotate-2' },
              { yr: 'Late 1800s', ev: 'The shawl export industry collapses with European Jacquard imitations — pivot from luxury fabrication to repairing family heirlooms.', rot: 'rotate-1.5', tapeRot: '-rotate-1' },
              { yr: '1900s', ev: 'Artisans travel door-to-door across Delhi, Lucknow, Patna, and Calcutta, carrying needle cases and yarn spools in wooden boxes.', rot: '-rotate-1', tapeRot: 'rotate-1' },
              { yr: '1947', ev: 'Partition scatters Najibabad families across emerging commercial hubs including Pune, Bombay, and Hyderabad.', rot: 'rotate-2', tapeRot: '-rotate-2' },
            ].map((row, idx) => (
              <div 
                key={idx}
                className={`relative p-4.5 sm:p-5 rounded-xs shadow-[2px_10px_22px_rgba(0,0,0,0.38)] flex flex-col justify-between min-h-[165px] transition-transform duration-200 hover:scale-105 hover:z-20 hover:rotate-0 ${row.rot} border border-[#1e1b15]/15 select-none`}
                style={{
                  backgroundColor: '#FAF5E8',
                  color: '#1E1B15',
                }}
              >
                {/* Frosted translucent masking tape strip above */}
                <div 
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-11 h-4 bg-white/75 backdrop-blur-[2px] border border-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.18)] z-10 pointer-events-none ${row.tapeRot}`}
                />

                <div>
                  <div className="flex items-center justify-between border-b border-[#1E1B15]/15 pb-1.5 mb-2.5">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-[#6B5E3C]">
                      NOTE 0{idx + 1}
                    </span>
                    <span className="font-syne text-[11px] sm:text-[12px] font-bold text-[#1E1B15]">
                      {row.yr}
                    </span>
                  </div>

                  <p className="font-caveat font-medium text-[17px] sm:text-[18px] leading-[1.35] text-[#1E1B15]">
                    {row.ev}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ============================================================
            12. FOUR-REGION COMPARISON
           ============================================================ */}
        <section id="regions" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-2">
              GEOGRAPHIC CONTEXT
            </span>
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              The same craft, practised differently depending on where it lands.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#a29d90] uppercase tracking-[0.14em] block mb-2">
                ORIGIN ZONE
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Kashmir
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Pashmina/Kani shawl ecosystem, museum conservation, and export-focused production lineage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#a29d90] uppercase tracking-[0.14em] block mb-2">
                HERITAGE COLONY
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Najibabad
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Most documented hub — hereditary artisan colonies, full classical vocabulary, and generational guild heritage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#a29d90] uppercase tracking-[0.14em] block mb-2">
                METROPOLITAN
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Delhi / NCR
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Hybrid contemporary art, couture designer ateliers, and institutional restoration projects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[#c9f14a]/40 shadow-[0_0_25px_rgba(201,241,74,0.1)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                FIELDWORK FOCUS
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#c9f14a] mb-2">
                Pune
              </h4>
              <p className="font-sans text-[14px] text-[#efe9db]/90 leading-relaxed">
                Newer urban outpost — informal service networks keeping the craft alive with fewer institutional safety nets, serving students, tech workers, and heritage families.
              </p>
            </div>
          </div>
        </section>


        {/* ============================================================
            12B. WHAT WE NOTICED & RESEARCH GAPS IN PUNE
           ============================================================ */}
        <section id="research-gaps" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto text-center flex flex-col items-center">
          {/* Tan Callout Note */}
          <div className="bg-[#dec19b] text-[#1e1b15] p-6 sm:p-7 rounded-xl shadow-lg border border-black/10 max-w-3xl w-full mb-8 text-left">
            <span className="block font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#1e1b15] uppercase mb-2">
              WHAT WE NOTICED:
            </span>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#1e1b15] leading-relaxed font-normal">
              Most existing research gave us strong understanding of Rafugari as heritage. But there was less understanding of: Rafugari as everyday work in an urban context.
            </p>
          </div>

          {/* Urban Context Paragraph */}
          <p className="font-sans text-[16px] sm:text-[18px] text-[#efe9db]/85 leading-relaxed max-w-4xl mb-12 font-light text-center mx-auto">
            So we looked at Pune. Not because it represented all Rafugari. But because it gave us a contemporary urban context to study — where historic family peths meet fast-paced student towns and tech corridors.
          </p>

          {/* Research Gaps Intro */}
          <p className="font-sans text-[15px] sm:text-[17px] text-[#a29d90] leading-relaxed mb-6 text-center w-full">
            Secondary research gave us a foundation but not the complete picture of everyday Rafugari in Pune. We still did not know:
          </p>

          {/* 8-Card Grid (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8 w-full text-left">
            {[
              { num: '01', text: 'How many Rafugars are currently practising in Pune and in what neighbourhoods?' },
              { num: '02', text: 'How do modern urban customers discover them without digital presence?' },
              { num: '03', text: 'How are prices calculated for complex multi-yarn restorations?' },
              { num: '04', text: 'What happens when a customer refuses to accept a visible repair seam?' },
              { num: '05', text: 'How do artisans source raw silk yarns when historical suppliers shut down?' },
              { num: '06', text: 'How does customer impatience interact with the slow pace of hand darning?' },
              { num: '07', text: 'Are younger family members willing to inherit an eye-straining occupation?' },
              { num: '08', text: 'What role do everyday mobile apps currently play in their daily bookkeeping?' },
            ].map((item) => (
              <div 
                key={item.num}
                className="bg-[#121214] border border-[rgba(239,233,219,0.14)] rounded-xl px-5 py-4 flex items-center gap-4.5 hover:border-[#c9f14a]/30 transition-colors shadow-sm"
              >
                <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#c9f14a] shrink-0">
                  {item.num}
                </span>
                <span className="font-sans text-[14px] sm:text-[15px] text-[#efe9db] leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Field Research Transition Banner */}
          <div className="w-full p-5 sm:p-6 rounded-xl bg-[#121214] border border-[rgba(239,233,219,0.14)] shadow-md text-center">
            <p className="font-caveat font-medium text-[clamp(19px,2vw,24px)] text-[#c9f14a] leading-normal text-center">
              This gap became the reason for our primary field research in Pune.
            </p>
          </div>
        </section>


        {/* ============================================================
            13. PRIMARY RESEARCH METHODOLOGY + WORKBENCH PHOTO
           ============================================================ */}
        <section id="methodology" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          {/* Heading */}
          <div className="mb-10 sm:mb-12">
            <h2 className="font-dm-serif text-[clamp(28px,3.6vw,46px)] leading-[1.15] text-[#efe9db] font-normal tracking-[-0.01em]">
              From reading about the craft to<br className="hidden sm:inline" />
              {' '}observing the practice.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: 5 Terminal-style Monospace Rows */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 w-full">
              {/* Row 01 */}
              <div className="w-full bg-[#191917] border border-[rgba(239,233,219,0.14)] rounded-[4px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between font-mono text-[12px] sm:text-[13px] tracking-wider uppercase">
                <span className="text-[#efe9db] font-medium">01. SECONDARY RESEARCH</span>
                <span className="text-[#c9f14a] font-medium tracking-wide">HISTORICAL LITERATURE &amp; ARCHIVES</span>
              </div>

              {/* Row 02 */}
              <div className="w-full bg-[#191917] border border-[rgba(239,233,219,0.14)] rounded-[4px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between font-mono text-[12px] sm:text-[13px] tracking-wider uppercase">
                <span className="text-[#efe9db] font-medium">02. INTERVIEWS</span>
                <span className="text-[#c9f14a] font-medium tracking-wide">5 ARTISANS + 3 CUSTOMERS</span>
              </div>

              {/* Row 03 */}
              <div className="w-full bg-[#191917] border border-[rgba(239,233,219,0.14)] rounded-[4px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between font-mono text-[12px] sm:text-[13px] tracking-wider uppercase">
                <span className="text-[#efe9db] font-medium">03. OBSERVATION</span>
                <span></span>
              </div>

              {/* Row 04 */}
              <div className="w-full bg-[#191917] border border-[rgba(239,233,219,0.14)] rounded-[4px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between font-mono text-[12px] sm:text-[13px] tracking-wider uppercase">
                <span className="text-[#efe9db] font-medium">04. ARTIFACT STUDY</span>
                <span className="text-[#c9f14a] font-medium tracking-wide">DAMAGED &amp; MENDED SPECIMENS</span>
              </div>

              {/* Row 05 */}
              <div className="w-full bg-[#191917] border border-[rgba(239,233,219,0.14)] rounded-[4px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between font-mono text-[12px] sm:text-[13px] tracking-wider uppercase">
                <span className="text-[#c9f14a] font-medium">05. SYNTHESIS</span>
                <span className="text-[#c9f14a] font-medium tracking-wide">FRAMEWORK &amp; OPPORTUNITY</span>
              </div>
            </div>

            {/* Right Column: Framed Photo Card */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl overflow-hidden bg-[#181816] border-2 border-[rgba(239,233,219,0.18)] shadow-2xl flex flex-col">
                <img 
                  src="/assets/rafu5.png" 
                  alt="rafu5 · Master Rafugar at workbench under natural light in Pune"
                  data-asset="rafu5"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.indexOf('process-02.png') === -1) {
                      target.src = '/assets/process-02.png';
                    }
                  }}
                  className="w-full h-auto object-cover block select-none"
                />
                <div className="bg-[#181816] px-4 sm:px-5 py-3 border-t border-[rgba(239,233,219,0.14)] flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#efe9db]/90 tracking-widest uppercase">
                  <span>SHUTTER NO. 14 · APPA BALWANT CHOWK · PUNE</span>
                  <span className="text-[#efe9db]/70">NATURAL LIGHT WORKBENCH</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            14. PRIMARY RESEARCH FINDINGS
           ============================================================ */}
        <section id="findings" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              Primary Research Findings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                1. Diagnosis before repair
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                The artisan touches, pulls at diagonal biases, and tests light transmission before naming an estimated price.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                2. Learned by hand, not word
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                "Haath se hi samajh aata hai" — understanding only arrives through the fingers. 7–10 years to reach independent mastery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                3. The hardest part, unanimously
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Thread and colour matching, not stitching — unravelling matching weft from hidden hems is an artform in itself.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                4. Informal, negotiated pricing
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Priced by damage size and time, not garment value — leaving artisan margins perpetually vulnerable to bargaining.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                5. Records live in memory or scraps
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Faded single-line diaries or numbers scrawled on paper scraps. Detached tags are the #1 catalyst for customer dispute.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                6. A consistent tech boundary
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Technology is welcomed for communication and payments — never for the tactile, sacred judgement of the repair itself.
              </p>
            </div>
          </div>
        </section>


        {/* ============================================================
            14B. TECHNOLOGY HAS A BOUNDARY (CULTURAL OBSERVATION)
           ============================================================ */}
        <section id="tech-boundary" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          {/* Top Header Row */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <span className="font-mono text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-[#c9f14a]">
              18 — TECHNOLOGY HAS A BOUNDARY
            </span>
            <div className="px-3 py-1 rounded bg-[#1c1c1a] border border-[rgba(239,233,219,0.14)] text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-[#efe9db]">
              CULTURAL OBSERVATION
            </div>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: Welcome and Adopted */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141412] border border-[rgba(239,233,219,0.14)] shadow-xl flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-6">
                <svg className="w-5 h-5 text-[#c9f14a] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#c9f14a]">
                  WELCOME AND ADOPTED
                </span>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#efe9db]/90 leading-relaxed mb-6 font-light">
                Technology readily accepted when it eliminates logistics burdens and speeds up financial trust:
              </p>
              <ul className="space-y-3.5 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/85 leading-relaxed pl-4">
                <li>Customer communication &amp; phone calls</li>
                <li>WhatsApp photo sharing for initial pickup estimates</li>
                <li>Instant UPI payments via QR standees on workbenches</li>
                <li>Job records and date notifications</li>
                <li>Logistics &amp; pickup notifications</li>
              </ul>
            </div>

            {/* Right Card: Does Not Enter */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141412] border border-[rgba(239,233,219,0.14)] shadow-xl flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-6">
                <svg className="w-5 h-5 text-[#fca5a5] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#fca5a5]">
                  DOES NOT ENTER
                </span>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#efe9db]/90 leading-relaxed mb-6 font-light">
                Technology is strictly excluded where embodied physical intelligence operates:
              </p>
              <ul className="space-y-3.5 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/85 leading-relaxed pl-4">
                <li>Tactile fabric diagnosis (feeling grain and elasticity)</li>
                <li>Shade matching under natural sunlight</li>
                <li>Needle gauge selection for delicate weaves</li>
                <li>Tension calculation across warp threads</li>
                <li>Artisanal judgement and final sign-off</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ============================================================
            15. EVIDENCE VS ASSUMPTIONS (3 COLUMNS)
           ============================================================ */}
        <section id="evidence" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              Cultural Evidence vs. Assumptions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-3">
                EVIDENCED — RAFUGAR SIDE
              </span>
              <ul className="space-y-3 font-sans text-[14px] text-[#a29d90] leading-relaxed">
                <li>• Diagnosis-first approach is non-negotiable.</li>
                <li>• Thread extraction from garment hem is universally preferred over polyester spools.</li>
                <li>• Severe eye and back fatigue sets in after 3:30pm when natural window light fades.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-3">
                EVIDENCED — CUSTOMER SIDE
              </span>
              <ul className="space-y-3 font-sans text-[14px] text-[#a29d90] leading-relaxed">
                <li>• Highly selective about which specific garments undergo invisible darning.</li>
                <li>• Intense anxiety over clothes getting stained or misplaced in tiny crowded stalls.</li>
                <li>• Ready to pay 2x higher rates whenshown macro photos of reconstructed warp knots.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-amber-500/30">
              <span className="font-syne text-[11px] font-semibold text-amber-400 uppercase tracking-[0.14em] block mb-3">
                STILL AN ASSUMPTION (OPEN)
              </span>
              <ul className="space-y-3 font-sans text-[14px] text-[#a29d90] leading-relaxed">
                <li>• Whether Gen-Z customers will value invisible mending over fast-fashion replacement.</li>
                <li>• How touchscreen devices will perform under bright glare in open-shutter stalls.</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ============================================================
            16. FOUR KEY INSIGHTS
           ============================================================ */}
        <section id="insights" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-2">
              KEY INSIGHTS
            </span>
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              What the research pointed to
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                INSIGHT A
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Judgement is the product
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Customers buy the artisan's diagnostic assurance, not simply mechanical stitches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                INSIGHT B
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Trust is the marketing
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                No billboards or SEO exist — word-of-mouth rooted in flawless past execution is the sole engine.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                INSIGHT C
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Record-keeping is fragile
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                The craft survived 300 years; service failure happens from lost phone numbers and mixed-up tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                INSIGHT D
              </span>
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                Clear tech boundary
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Digital tools must support communication and operational clarity — never simulate handcraft.
              </p>
            </div>
          </div>
        </section>


        {/* ============================================================
            17. PROBLEM STATEMENT CALLOUT
           ============================================================ */}
        <section id="problem-statement" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#192015] border border-[#c9f14a]/30 border-l-4 border-l-[#c9f14a] shadow-xl">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-3">
              PROBLEM STATEMENT
            </span>
            <h3 className="font-dm-serif text-[clamp(24px,3.2vw,40px)] leading-[1.15] font-normal text-[#efe9db] mb-4">
              Pune's Rafugars and their customers need a simple, shared way to track a repair's status and understand its value,
            </h3>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#efe9db]/85 leading-relaxed max-w-3xl">
              because right now jobs live only in memory or a notebook and customers get no visibility once they walk away — leaving both sides stuck with repeat "is it ready?" calls, unclear pricing, and eroding trust.
            </p>
          </div>
        </section>


        {/* ============================================================
            18. OPPORTUNITY — 3 PILLARS
           ============================================================ */}
        <section id="opportunity" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-2">
              OPPORTUNITY
            </span>
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              A digital platform that respects the boundary of craft
            </h2>
            <p className="font-sans text-[14px] text-[#a29d90]">
              Three strategic pillars designed around the artisan's hands and the customer's anxiety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
              <div>
                <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                  PILLAR A
                </span>
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-3">
                  Frictionless Capture
                </h4>
                <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                  Lets the Rafugar capture and track jobs with minimal friction — photo + voice, not tedious form-filling with needle-fatigued fingers.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[rgba(239,233,219,0.08)] font-syne text-[10px] text-[#c9f14a] uppercase tracking-[0.14em]">
                8-SECOND VOICE INTAKE
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
              <div>
                <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                  PILLAR B
                </span>
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-3">
                  Automated Transparency
                </h4>
                <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                  Automatically keeps the customer informed via familiar WhatsApp receipts and ready alerts, without extra manual calls.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[rgba(239,233,219,0.08)] font-syne text-[10px] text-[#c9f14a] uppercase tracking-[0.14em]">
                ZERO UNNECESSARY CALLS
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
              <div>
                <span className="font-syne text-[11px] font-semibold text-[#c9f14a] uppercase tracking-[0.14em] block mb-2">
                  PILLAR C
                </span>
                <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-3">
                  Honoring Judgement
                </h4>
                <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                  Makes the invisible craft judgement visible enough to trust the price, without pulling the repair decision onto a screen.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[rgba(239,233,219,0.08)] font-syne text-[10px] text-[#c9f14a] uppercase tracking-[0.14em]">
                MICROSCOPIC PROVENANCE
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            19. USER PERSONAS (FIGJAM BOARD CANVAS)
           ============================================================ */}
        <section id="personas" className="py-16 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,38px)] leading-[1.05] text-[#efe9db]">
              User Personas
            </h2>
          </div>

          {/* Interactive Scrollable & Zoomable FigJam Canvas Board (Compact + Floating Controls on Board) */}
          <div className="relative w-full rounded-2xl md:rounded-3xl border border-[rgba(239,233,219,0.18)] bg-[#141418] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Floating Zoom & Navigation Controls On The Board */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1 bg-[#18181e]/90 backdrop-blur-md border border-white/15 rounded-full p-1 sm:p-1.5 shadow-xl select-none">
              <button
                onClick={() => setPersonaZoom((z) => Math.max(50, z - 15))}
                disabled={personaZoom <= 50}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/15 hover:text-[#c9f14a] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={() => setPersonaZoom(100)}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold text-[#c9f14a] hover:bg-white/15 transition-colors cursor-pointer"
                title="Reset Zoom to 100%"
              >
                {personaZoom}%
              </button>

              <button
                onClick={() => setPersonaZoom((z) => Math.min(175, z + 15))}
                disabled={personaZoom >= 175}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/15 hover:text-[#c9f14a] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <div className="w-[1px] h-3.5 bg-white/15 mx-0.5" />

              <button
                onClick={() => setPersonaZoom(100)}
                className="p-1.5 rounded-full text-[#a29d90] hover:text-[#efe9db] hover:bg-white/15 transition-colors cursor-pointer"
                title="Reset View"
              >
                <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>

            {/* Scrollable Canvas Surface */}
            <div 
              className="w-full h-[420px] sm:h-[480px] overflow-x-auto overflow-y-auto p-4 sm:p-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent select-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(239, 233, 219, 0.2) 1.1px, transparent 1.1px)',
                backgroundSize: '22px 22px',
              }}
            >
              <div 
                className="min-w-[1200px] w-max py-2 px-2 flex items-center gap-5 sm:gap-6 transition-transform duration-200 ease-out origin-top-left"
                style={{
                  transform: `scale(${personaZoom / 100})`,
                }}
              >
                {[
                  { id: 1, title: 'Persona 01', filename: 'persona (1).png' },
                  { id: 2, title: 'Persona 02', filename: 'persona (2).png' },
                  { id: 3, title: 'Persona 03', filename: 'persona (3).png' },
                  { id: 4, title: 'Persona 04', filename: 'persona (4).png' },
                ].map((persona) => (
                  <div 
                    key={persona.id}
                    className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 flex items-center justify-center"
                  >
                    <img 
                      src={`/assets/${persona.filename}`}
                      alt={persona.title} 
                      data-asset={`persona-${persona.id}`}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src.indexOf('moni-persona.png') === -1) {
                          target.src = '/assets/moni-persona.png';
                        }
                      }}
                      className="w-full h-auto object-contain block select-none drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            20. EMPATHY MAP (THINKS / SAYS / DOES / FEELS - 4 QUADRANTS)
           ============================================================ */}
        <section id="empathy" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              Inside the Mind of the Traditional Rafugar
            </h2>
          </div>

          {/* 4-Quadrant Canvas with Intersecting Center Photo */}
          <div className="relative bg-[#161614] rounded-2xl md:rounded-3xl border border-[rgba(239,233,219,0.14)] overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16">
            {/* Thin Dividing Cross Lines (Desktop) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20 z-0 pointer-events-none" />
            <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/20 z-0 pointer-events-none" />

            {/* Central Intersecting Artisan Portrait Photo (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] lg:w-[240px] aspect-[3/4] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden rounded-xl border border-white/10">
              <img 
                src="/assets/rafu6.png" 
                alt="Master Rafugar repairing fabric"
                data-asset="rafu6"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src.indexOf('process-01.png') === -1) {
                    target.src = '/assets/process-01.png';
                  }
                }}
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Quadrants Grid */}
            <div className="relative z-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-28 md:gap-y-20 items-stretch">
              {/* Quadrant 1: THINKS (Top Left) */}
              <div className="flex flex-col justify-start md:pr-8 md:pb-4">
                <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#c9f14a] uppercase tracking-[0.16em] mb-4 block">
                  THINKS
                </span>
                <ul className="space-y-3 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/90 leading-relaxed font-light">
                  <li>• Every garment is different.</li>
                  <li>• The fabric needs to be checked first.</li>
                  <li>• Matching the thread takes skill.</li>
                  <li>• Customers don't see the work behind the repair.</li>
                  <li>• I need to remember many orders.</li>
                </ul>
              </div>

              {/* Quadrant 2: SAYS (Top Right) */}
              <div className="flex flex-col justify-start md:pl-8 md:pb-4 md:text-right md:items-end">
                <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#c9f14a] uppercase tracking-[0.16em] mb-4 block">
                  SAYS
                </span>
                <ul className="space-y-3 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/90 leading-relaxed font-light md:text-right">
                  <li>• &ldquo;Let me check the fabric first.&rdquo;</li>
                  <li>• &ldquo;This will take some time.&rdquo;</li>
                  <li>• &ldquo;The charge depends on the repair.&rdquo;</li>
                  <li>• &ldquo;I&rsquo;ll let you know when it's ready.&rdquo;</li>
                  <li>• &ldquo;The repair needs careful matching.&rdquo;</li>
                </ul>
              </div>

              {/* Mobile Centered Photo */}
              <div className="md:hidden w-full max-w-[220px] mx-auto aspect-[3/4] shadow-2xl rounded-xl border border-white/10 overflow-hidden my-2">
                <img 
                  src="/assets/rafu6.png" 
                  alt="Master Rafugar repairing fabric"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.indexOf('process-01.png') === -1) {
                      target.src = '/assets/process-01.png';
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quadrant 3: DOES (Bottom Left) */}
              <div className="flex flex-col justify-start md:pr-8 md:pt-4">
                <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#c9f14a] uppercase tracking-[0.16em] mb-4 block">
                  DOES
                </span>
                <ul className="space-y-3 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/90 leading-relaxed font-light">
                  <li>• Records orders in notebook/memory</li>
                  <li>• Communicates via phone calls</li>
                  <li>• Inspects fabric manually by eye &amp; touch</li>
                  <li>• Matches thread, colour, and weave</li>
                  <li>• Performs careful hand repair under lamp</li>
                  <li>• Records &amp; accepts UPI payments</li>
                </ul>
              </div>

              {/* Quadrant 4: FEELS (Bottom Right) */}
              <div className="flex flex-col justify-start md:pl-8 md:pt-4 md:text-right md:items-end">
                <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#c9f14a] uppercase tracking-[0.16em] mb-4 block">
                  FEELS
                </span>
                <ul className="space-y-3.5 font-sans text-[14px] sm:text-[15px] text-[#efe9db]/90 leading-relaxed md:text-right">
                  <li>
                    <strong className="font-bold text-white uppercase tracking-wide">PROUD</strong>{' '}
                    <span className="text-[#efe9db]/85 font-light">of invisible results</span>
                  </li>
                  <li>
                    <strong className="font-bold text-white uppercase tracking-wide">RESPONSIBLE</strong>{' '}
                    <span className="text-[#efe9db]/85 font-light">for preserving family memories</span>
                  </li>
                  <li>
                    <strong className="font-bold text-white uppercase tracking-wide">FRUSTRATED</strong>{' '}
                    <span className="text-[#efe9db]/85 font-light">by customer rush and questioning</span>
                  </li>
                  <li>
                    <strong className="font-bold text-white uppercase tracking-wide">WORRIED</strong>{' '}
                    <span className="text-[#efe9db]/85 font-light">about losing orders or mixed labels</span>
                  </li>
                  <li>
                    <strong className="font-bold text-white uppercase tracking-wide">SATISFIED</strong>{' '}
                    <span className="text-[#efe9db]/85 font-light">when a customer cannot find the hole</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            21. 6-STAGE USER JOURNEY MAP
           ============================================================ */}
        <section id="journey" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              6 Stages of Service Exchange
            </h2>
            <p className="font-sans text-[14px] text-[#a29d90]">
              Needs and pain points across the repair lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {[
              {
                title: 'GARMENT ARRIVES',
                thinks: '"Is this moth hole or cigarette burn?"',
                needs: 'Customer to explain history.',
                pain: 'Customer in a rush.',
              },
              {
                title: 'INSPECT & DIAGNOSE',
                thinks: '"Weft is brittle; needs reinforcement."',
                needs: 'Natural window daylight.',
                pain: 'Concealed micro-tears found late.',
              },
              {
                title: 'EXPLAIN & AGREE PRICE',
                thinks: '"Will they think ₹400 is too much?"',
                needs: 'Mutual price agreement.',
                pain: 'Bargaining without craft comprehension.',
              },
              {
                title: 'LOG THE JOB',
                thinks: '"Need to write this in the diary."',
                needs: 'Tag garment with phone number.',
                pain: 'Paper slips get detached.',
              },
              {
                title: 'REPAIR WORK',
                thinks: '"Deep focus mode. Do not interrupt."',
                needs: 'Unbroken hours of calm.',
                pain: 'Interruptive status phone calls.',
              },
              {
                title: 'UPDATE & HANDOVER',
                thinks: '"They won\'t be able to spot the stitch."',
                needs: 'Prompt collection & UPI settlement.',
                pain: 'Uncollected clothes cluttering workshop.',
              },
            ].map((st, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-5.5 rounded-2xl bg-[#141412] border border-[rgba(239,233,219,0.12)] flex flex-col justify-between shadow-xl min-h-[260px]"
              >
                <div>
                  <h3 className="font-syne font-bold text-[15px] sm:text-[16px] text-white uppercase tracking-wider mb-4 leading-tight">
                    {st.title}
                  </h3>
                  <div className="space-y-3 font-sans text-[13.5px] leading-relaxed">
                    <p className="text-[#efe9db]/90 font-light">
                      <span className="text-white font-medium">Thinks:</span> {st.thinks}
                    </p>
                    <p className="text-[#efe9db]/90 font-light">
                      <span className="text-white font-medium">Needs:</span> {st.needs}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 font-sans text-[13.5px] leading-snug">
                  <p className="text-[#c9f14a]">
                    <span className="font-semibold text-[#c9f14a]">Pain:</span> {st.pain}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ============================================================
            22. DESIGN INSIGHTS (PRODUCT DECISIONS)
           ============================================================ */}
        <section id="design-insights" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase block mb-2">
              DESIGN INSIGHTS
            </span>
            <h2 className="font-dm-serif text-[clamp(24px,3vw,40px)] leading-[1.05] text-[#efe9db] mb-3">
              Translating Ethnography into Product Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                1. Speech over typing
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                Artisans hold dusty textiles and needles; typing long forms causes friction. Speaking into the phone captures fabric, colour and customer name in 8 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                2. Automate the nagging, not the trust
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                An automated WhatsApp status when a job is received and finished eliminates interruptive phone calls during delicate darning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                3. Make the invisible visible
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                A concise before/after graphic explaining warp/weft reconstruction reassures the customer, defending fair pricing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
              <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
                4. Showcase, don't gatekeep
              </h4>
              <p className="font-sans text-[14px] text-[#a29d90] leading-relaxed">
                An opt-in Memory Bank lets artisans curate photo reels of their finest repairs (with consent) as proof of capability.
              </p>
            </div>
          </div>
        </section>


        {/* ============================================================
            23. INFORMATION ARCHITECTURE & USER FLOWS (TREE DIAGRAM)
           ============================================================ */}
        <section id="information-architecture" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1340px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-dm-serif text-[clamp(24px,3vw,38px)] leading-[1.05] text-[#efe9db]">
                Information Architecture
              </h2>
            </div>

            {/* Filter Tabs & Zoom Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Tab Selector */}
              <div className="flex items-center bg-[#18181e] border border-white/10 rounded-full p-1 text-xs font-mono">
                <button
                  onClick={() => setIaActiveTab('all')}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    iaActiveTab === 'all'
                      ? 'bg-[#c9f14a] text-black font-semibold shadow-sm'
                      : 'text-[#a29d90] hover:text-[#efe9db]'
                  }`}
                >
                  All Flows
                </button>
                <button
                  onClick={() => setIaActiveTab('rafugar')}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    iaActiveTab === 'rafugar'
                      ? 'bg-[#e2aa76] text-black font-semibold shadow-sm'
                      : 'text-[#a29d90] hover:text-[#efe9db]'
                  }`}
                >
                  Artisan
                </button>
                <button
                  onClick={() => setIaActiveTab('customer')}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    iaActiveTab === 'customer'
                      ? 'bg-[#7eb3db] text-black font-semibold shadow-sm'
                      : 'text-[#a29d90] hover:text-[#efe9db]'
                  }`}
                >
                  Customer
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 bg-[#18181e] border border-white/10 rounded-full p-1 shadow-lg select-none">
                <button
                  onClick={() => setIaZoom((z) => Math.max(35, z - 15))}
                  disabled={iaZoom <= 35}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/10 hover:text-[#c9f14a] disabled:opacity-30 transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                
                <button
                  onClick={() => setIaZoom(65)}
                  className="px-2 py-0.5 rounded-full text-xs font-mono font-semibold text-[#c9f14a] hover:bg-white/10 transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  {iaZoom}%
                </button>

                <button
                  onClick={() => setIaZoom((z) => Math.min(150, z + 15))}
                  disabled={iaZoom >= 150}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/10 hover:text-[#c9f14a] disabled:opacity-30 transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>

                <div className="w-[1px] h-3.5 bg-white/15 mx-0.5" />

                <button
                  onClick={() => setIaZoom(65)}
                  className="p-1 rounded-full text-[#a29d90] hover:text-[#efe9db] hover:bg-white/10 transition-colors cursor-pointer"
                  title="Reset View"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive FigJam-style Canvas */}
          <div 
            className="w-full h-[380px] sm:h-[540px] rounded-2xl md:rounded-3xl border border-[rgba(239,233,219,0.18)] bg-[#141418] shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-x-auto overflow-y-auto p-4 sm:p-8 md:p-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent select-none relative"
            style={{
              backgroundImage: 'radial-gradient(rgba(239, 233, 219, 0.16) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          >
            <div 
              className="w-max transition-transform duration-200 ease-out origin-top-left flex items-start gap-16 py-4"
              style={{
                transform: `scale(${iaZoom / 100})`,
                minWidth: iaActiveTab === 'all' ? '3000px' : '1500px',
              }}
            >
              {(iaActiveTab === 'all' || iaActiveTab === 'rafugar') && (
                <div className="flex flex-col">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e2aa76]" />
                    <span className="font-mono text-xs font-bold text-[#e2aa76] uppercase tracking-wider">
                      01 · Artisan Workbench Architecture
                    </span>
                  </div>
                  <RafugarWorkbenchDiagram />
                </div>
              )}

              {(iaActiveTab === 'all' || iaActiveTab === 'customer') && (
                <div className="flex flex-col">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7eb3db]" />
                    <span className="font-mono text-xs font-bold text-[#7eb3db] uppercase tracking-wider">
                      02 · Customer Experience Architecture
                    </span>
                  </div>
                  <CustomerJourneyDiagram />
                </div>
              )}
            </div>
          </div>
        </section>


        {/* ============================================================
            24. USER FLOWS & DECISION LOGIC
           ============================================================ */}
        <section id="user-flows" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1340px] mx-auto">
          <RafugariUserFlowsDiagram />
        </section>


        {/* ============================================================
            25. WIREFRAMES: FROM LOW FIDELITY TO HIGH FIDELITY
           ============================================================ */}
        <RafugariWireframesSection />


        {/* ============================================================
            26. INTERACTIVE PROTOTYPE
           ============================================================ */}
        <section id="interactive-prototype" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-dm-serif text-[clamp(28px,3.5vw,46px)] leading-[1.05] text-[#efe9db] mb-2">
                Interactive Prototype
              </h2>
              <p className="font-sans text-[clamp(15px,1.2vw,18px)] text-[#c9f14a] font-normal">
                Try the interactive prototype here
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/rafooghar.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9f14a] hover:bg-[#d8ff5e] text-black font-syne text-[12px] font-bold uppercase tracking-[0.12em] transition-all shadow-[0_0_25px_rgba(201,241,74,0.3)] hover:shadow-[0_0_35px_rgba(201,241,74,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Try Prototype Full Screen</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Designer's Time Constraint & Studio Note */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#18181c] border border-white/10 max-w-3xl">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[#c9f14a] uppercase tracking-wider block">
                Note
              </span>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#efe9db]/90 leading-relaxed font-light">
                Due to time constraints, I prototyped it on Google AI Studio, so the high-fidelity screens do not match fully with my designs.
              </p>
            </div>
          </div>

          {/* Usability Testing · Cognitive Walkthrough Section */}
          <RafugariUsabilityTestingSection />
        </section>


        {/* ============================================================
            27. CRAFT PHILOSOPHY STATEMENT
           ============================================================ */}
        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-12 max-w-[1100px] mx-auto text-center">
          <h2 className="font-syne font-semibold text-[clamp(14px,1.4vw,20px)] leading-relaxed tracking-[0.08em] uppercase text-white max-w-3xl mx-auto">
            SOMETIMES, TO DESIGN FOR A CRAFT, YOU FIRST HAVE TO UNDERSTAND THE WORLD THAT KEEPS IT ALIVE.
          </h2>
        </section>


        {/* Consistent Next Project Exploration Card & Footer */}
        <CaseStudyFooterSection
          nextProjectTitle="MONI — AI AGENT WITH WORKSPACE MEMORY"
          nextProjectDescription="Adaptive intervention UX, contextual ambient intelligence, and system trust design for creative workflows."
          nextProjectButtonLabel="VIEW MONI (AI AGENT)"
          accentColor="#c9f14a"
          onBack={onBack}
          onOpenNextProject={onOpenNextProject}
        />
      </main>
    </motion.div>
  );
};
