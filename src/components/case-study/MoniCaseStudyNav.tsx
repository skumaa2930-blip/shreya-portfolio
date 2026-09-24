import React, { useState, useEffect } from 'react';

interface MoniCaseStudyNavProps {
  onBack: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const MoniCaseStudyNav: React.FC<MoniCaseStudyNavProps> = ({ onBack, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onBack();
    if (onNavigateSection) {
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 100);
    }
  };

  return (
    <>
      {/* Top Black Gradient Header Background (Smooth scroll fade under nav) */}
      <div
        id="moni-nav-gradient-scrim"
        className="fixed top-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent pointer-events-none z-40"
      />

      <header
        id="moni-top-nav"
        className={`fixed z-50 inset-x-0 mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none flex justify-center px-3 sm:px-6 md:px-8 ${
          isScrolled ? 'top-3 sm:top-4' : 'top-4 sm:top-6 w-full max-w-[1340px]'
        }`}
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center select-none ${
            isScrolled
              ? 'bg-[#151417]/95 rounded-full p-1.5 pl-3.5 pr-1.5 sm:pl-4 sm:pr-2 gap-2 sm:gap-4 shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-md'
              : 'w-full justify-between gap-2'
          }`}
        >
          {/* Left: Brand "SHREYA." */}
          <button
            onClick={onBack}
            className="group flex items-center gap-0.5 cursor-pointer focus:outline-none transition-all duration-300 bg-transparent border-0 p-0 shadow-none"
            title="Back to portfolio"
          >
            <span
              className={`font-display font-medium text-white group-hover:text-[#D1F047] tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-xs sm:text-sm font-semibold' : 'text-sm sm:text-base tracking-wide font-semibold'
              }`}
            >
              SHREYA
            </span>
            <span
              className={`rounded-full bg-[#D1F047] inline-block transition-all duration-300 ${
                isScrolled ? 'w-1.5 h-1.5 mb-0.5' : 'w-1.5 h-1.5 mb-1'
              } group-hover:scale-125`}
            />
          </button>

          {/* Center: Global Navigation Links with "MADE" active */}
          <nav
            aria-label="Portfolio primary navigation"
            className={`flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-syne font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 ${
              isScrolled
                ? 'bg-transparent p-0'
                : 'bg-[#151417]/92 border border-white/[0.12] p-1 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.6)] backdrop-blur-md'
            }`}
          >
            <button
              onClick={() => handleNavClick('explore')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } hover:text-white hover:bg-white/5`}
            >
              PROCESS
            </button>

            <button
              onClick={() => handleNavClick('make')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } bg-[#D1F047] text-black shadow-[0_0_16px_rgba(209,240,71,0.35)]`}
            >
              MADE
            </button>

            <button
              onClick={() => handleNavClick('experiment')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } hover:text-white hover:bg-white/5`}
            >
              TRIED
            </button>

            <button
              onClick={() => handleNavClick('me')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } hover:text-white hover:bg-white/5`}
            >
              ME
            </button>
          </nav>

          {/* Right: Crisp White Resume button */}
          <div className="flex items-center">
            <a
              href={`${import.meta.env.BASE_URL}resume/shreya-resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full font-syne font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none whitespace-nowrap bg-white hover:bg-[#D1F047] text-black shadow-[0_4px_16px_rgba(0,0,0,0.4)] ${
                isScrolled
                  ? 'px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs'
                  : 'px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs'
              }`}
            >
              RESUME
            </a>
          </div>
        </div>
      </header>
    </>
  );
};




