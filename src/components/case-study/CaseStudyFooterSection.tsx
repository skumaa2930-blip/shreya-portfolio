import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyFooterSectionProps {
  nextProjectEyebrow?: string;
  nextProjectTitle: string;
  nextProjectDescription: string;
  nextProjectButtonLabel: string;
  accentColor?: string;
  onBack: () => void;
  onOpenNextProject?: () => void;
}

export const CaseStudyFooterSection: React.FC<CaseStudyFooterSectionProps> = ({
  nextProjectEyebrow = 'EXPLORE NEXT CASE STUDY',
  nextProjectTitle,
  nextProjectDescription,
  nextProjectButtonLabel,
  accentColor = '#B6D63A',
  onBack,
  onOpenNextProject,
}) => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto border-t border-white/5 select-none">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="max-w-2xl">
          <div
            className="font-syne text-[11px] font-semibold uppercase tracking-[0.14em] mb-2"
            style={{ color: accentColor }}
          >
            {nextProjectEyebrow}
          </div>
          <h3 className="font-playfair text-[clamp(22px,2.6vw,36px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db]">
            {nextProjectTitle}
          </h3>
          <p className="font-sans text-[#a29d90] text-[14px] mt-2 max-w-[56ch] leading-relaxed">
            {nextProjectDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#efe9db] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
          >
            ← ALL WORK
          </button>
          {onOpenNextProject && (
            <button
              onClick={onOpenNextProject}
              className="px-6 py-3 rounded-full bg-[#B6D63A] hover:bg-[#d8f56e] text-black font-syne text-[11px] font-semibold uppercase tracking-[0.14em] transition-all shadow-[0_0_25px_rgba(201,241,74,0.35)] cursor-pointer flex items-center gap-2"
            >
              <span>{nextProjectButtonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Case Study Clean Footer Bar */}
      <footer className="mt-16 sm:mt-20 pt-8 border-t border-[rgba(239,233,219,0.14)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <div className="flex items-center gap-2">
          <span className="font-syne text-[11px] font-semibold text-[#a29d90] uppercase tracking-[0.14em]">
            EST. 2024 / PROTO-LAB —
          </span>
          <span className="font-caveat font-medium text-base sm:text-lg text-[#efe9db]">
            imperfect iterations, continuous craft
          </span>
        </div>
        <div className="font-syne text-[11px] font-semibold text-[#a29d90] uppercase tracking-[0.14em] text-center sm:text-right">
          SHREYA STUDIO © ALL RIGHTS RESERVED
        </div>
      </footer>
    </section>
  );
};
