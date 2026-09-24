import React from 'react';

interface CaseStudyStickyHeaderProps {
  onBack: () => void;
  accentColor?: string;
}

export const CaseStudyStickyHeader: React.FC<CaseStudyStickyHeaderProps> = ({
  onBack,
  accentColor = '#c9f14a',
}) => {
  return (
    <>
      {/* Top Black Gradient Header Scrim (smooth gradient background matching main nav) */}
      <div
        id="case-study-gradient-scrim"
        className="fixed top-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent pointer-events-none z-40"
      />

      {/* Fixed "BACK TO SELECTED WORK" Navigation Bar */}
      <header
        id="case-study-sticky-bar"
        className="fixed top-0 inset-x-0 z-50 w-full px-4 sm:px-8 md:px-12 py-3.5 sm:py-4 pointer-events-none"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between pointer-events-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#a5a5a0] hover:text-white transition-all cursor-pointer group bg-[#151417]/90 hover:bg-[#1f1e24] px-4 py-2 sm:py-2.5 rounded-full border border-white/10 hover:border-white/25 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            id="case-study-back-btn"
          >
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-2.5 transition-transform group-hover:-translate-x-1"
            >
              <path
                d="M5 1L1 5M1 5L5 9M1 5H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>BACK TO SELECTED WORK</span>
          </button>
        </div>
      </header>
    </>
  );
};


