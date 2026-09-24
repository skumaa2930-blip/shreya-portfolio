import React from 'react';
import { ArrowLeft, Award } from 'lucide-react';

interface CaseStudyNavProps {
  onBack: () => void;
  title: string;
  badgeLabel: string;
  badgeIconColor?: string;
  sections: { id: string; label: string }[];
}

export const CaseStudyNav: React.FC<CaseStudyNavProps> = ({
  onBack,
  title,
  badgeLabel,
  badgeIconColor = '#D4F34A',
  sections,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="case-study-nav"
      className="fixed top-3 sm:top-4 inset-x-0 mx-auto z-50 pointer-events-none w-full max-w-[1340px] px-3 sm:px-5 flex items-center justify-between"
    >
      {/* Back button pill */}
      <button
        onClick={onBack}
        className="pointer-events-auto group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#151417]/92 border border-white/[0.14] text-white hover:text-[#D4F34A] hover:border-[#D4F34A]/50 backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.7)] transition-all duration-200 cursor-pointer text-xs font-syne font-bold uppercase tracking-wider"
        title="Back to portfolio"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>BACK</span>
        <span className="hidden sm:inline text-neutral-500 font-normal">/ ALL WORK</span>
      </button>

      {/* Center navigation pill */}
      <nav
        aria-label="Case study sections"
        className="pointer-events-auto hidden md:flex items-center gap-1 bg-[#151417]/92 border border-white/[0.12] rounded-full p-1 shadow-[0_16px_36px_rgba(0,0,0,0.65)] backdrop-blur-md text-[11px] font-syne font-bold tracking-wider uppercase text-neutral-400"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Right pill: Award badge + Resume */}
      <div className="pointer-events-auto flex items-center gap-2">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-[10px] font-syne font-extrabold uppercase tracking-wider backdrop-blur-md">
          <Award className="w-3 h-3" style={{ color: badgeIconColor }} />
          <span>{badgeLabel}</span>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}resume/shreya-resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-full font-syne font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-[#262529] hover:bg-[#D4F34A] text-white hover:text-black border border-white/20 hover:border-[#D4F34A] shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-all duration-200 cursor-pointer"
        >
          RESUME
        </a>
      </div>
    </header>
  );
};


