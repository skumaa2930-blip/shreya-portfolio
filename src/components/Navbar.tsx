import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState<'explore' | 'make' | 'experiment' | 'me'>('explore');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(currentScrollY > 40);

      // Section intersection detection based on viewport scroll
      const sections: ('explore' | 'make' | 'experiment' | 'me')[] = ['me', 'experiment', 'make', 'explore'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementTop = el.getBoundingClientRect().top + (window.scrollY || document.documentElement.scrollTop || 0);
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Black Gradient Header Background (Smooth scroll fade under nav) */}
      <div
        id="nav-gradient-scrim"
        className="fixed top-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent pointer-events-none z-40"
      />

      <header
        id="site-unified-navigation"
        className={`fixed z-50 inset-x-0 mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none flex justify-center px-4 sm:px-8 md:px-12 ${
          isScrolled ? 'top-3 sm:top-4' : 'top-4 sm:top-6 w-full max-w-[1280px]'
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
            id="nav-brand-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-0.5 cursor-pointer focus:outline-none transition-all duration-300 bg-transparent border-0 p-0 shadow-none"
            title="Back to top"
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

          {/* Center: Global Navigation Links (Order: PROCESS -> MADE -> TRIED -> ME) */}
          <nav
            id="floating-pill-nav"
            aria-label="Global Navigation"
            className={`flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-syne font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 ${
              isScrolled
                ? 'bg-transparent p-0'
                : 'bg-[#151417]/92 border border-white/[0.12] p-1 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.6)] backdrop-blur-md'
            }`}
          >
            <button
              id="nav-link-explore"
              onClick={() => scrollTo('explore')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } ${
                activeSection === 'explore'
                  ? 'bg-[#D1F047] text-black shadow-[0_0_16px_rgba(209,240,71,0.35)]'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              PROCESS
            </button>

            <button
              id="nav-link-make"
              onClick={() => scrollTo('make')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } ${
                activeSection === 'make'
                  ? 'bg-[#D1F047] text-black shadow-[0_0_16px_rgba(209,240,71,0.35)]'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              MADE
            </button>

            <button
              id="nav-link-experiment"
              onClick={() => scrollTo('experiment')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } ${
                activeSection === 'experiment'
                  ? 'bg-[#D1F047] text-black shadow-[0_0_16px_rgba(209,240,71,0.35)]'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              EXPLORED
            </button>

            <button
              id="nav-link-me"
              onClick={() => scrollTo('me')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-2.5 sm:px-3 py-1 sm:py-1.5'
                  : 'px-3 sm:px-3.5 py-1.5'
              } ${
                activeSection === 'me'
                  ? 'bg-[#D1F047] text-black shadow-[0_0_16px_rgba(209,240,71,0.35)]'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              ME
            </button>
          </nav>

          {/* Right: Crisp White Resume Pill Button (Maintained in both states) */}
          <div className="flex items-center">
            <a
              id="nav-resume-btn"
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







