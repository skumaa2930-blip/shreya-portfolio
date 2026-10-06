import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState<'explore' | 'make' | 'experiment' | 'me' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(currentScrollY > 40);

      const navThreshold = 240;

      const exploreEl = document.getElementById('explore');
      const makeEl = document.getElementById('make');
      const experimentEl = document.getElementById('experiment');
      const meEl = document.getElementById('me');
      const contactEl = document.getElementById('contact');

      // 1. While on Hero (before 'explore' / I Notice section), do not highlight anything
      if (!exploreEl || exploreEl.getBoundingClientRect().top > navThreshold) {
        setActiveSection(null);
        return;
      }

      // 2. ME section ends in About section only: if scrolled past About into Footer, clear active section
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;
      const meBottom = meEl ? meEl.getBoundingClientRect().bottom : -Infinity;
      if (contactTop <= navThreshold || meBottom <= navThreshold) {
        setActiveSection(null);
        return;
      }

      // 3. ME (About section)
      if (meEl && meEl.getBoundingClientRect().top <= navThreshold) {
        setActiveSection('me');
        return;
      }

      // 4. EXPLORED (Curiosity Playground / Experiments)
      if (experimentEl && experimentEl.getBoundingClientRect().top <= navThreshold) {
        setActiveSection('experiment');
        return;
      }

      // 5. MADE (Projects)
      if (makeEl && makeEl.getBoundingClientRect().top <= navThreshold) {
        setActiveSection('make');
        return;
      }

      // 6. PROCESS (I Notice / Process Loop section)
      setActiveSection('explore');
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();
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
              className={`font-playfair font-semibold text-white group-hover:text-[#B6D63A] tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}
            >
              SHREYA
            </span>
            <span
              className={`rounded-full bg-[#B6D63A] inline-block transition-all duration-300 ${
                isScrolled ? 'w-1.5 h-1.5 mb-0.5' : 'w-1.5 h-1.5 mb-1'
              } group-hover:scale-125`}
            />
          </button>

          {/* Mobile Menu Button */}
<button
  type="button"
  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
  className="md:hidden inline-flex items-center justify-center rounded-full bg-[#151417]/95 px-4 py-2.5 font-syne font-bold text-[11px] uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
  aria-label="Toggle navigation menu"
  aria-expanded={isMobileMenuOpen}
>
  {isMobileMenuOpen ? "CLOSE" : "MENU"}
</button>
{/* Center: Global Navigation Links (Order: PROCESS -> MADE -> EXPLORED -> ME) */}
          <nav
            id="floating-pill-nav"
            aria-label="Global Navigation"
            className={`hidden md:flex items-center gap-1 text-xs sm:text-[13px] font-syne font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 border-none outline-none ${
              isScrolled
                ? 'bg-transparent p-0'
                : 'bg-[#151417]/92 p-1 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.6)] backdrop-blur-md'
            }`}
          >
            <button
              id="nav-link-explore"
              onClick={() => scrollTo('explore')}
              className={`rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isScrolled
                  ? 'px-3 sm:px-4 py-1.5'
                  : 'px-4 sm:px-5 py-2'
              } ${
                activeSection === 'explore'
                  ? 'bg-[#B6D63A] text-black shadow-[0_0_16px_rgba(182,214,58,0.35)]'
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
                  ? 'px-3 sm:px-4 py-1.5'
                  : 'px-4 sm:px-5 py-2'
              } ${
                activeSection === 'make'
                  ? 'bg-[#B6D63A] text-black shadow-[0_0_16px_rgba(182,214,58,0.35)]'
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
                  ? 'px-3 sm:px-4 py-1.5'
                  : 'px-4 sm:px-5 py-2'
              } ${
                activeSection === 'experiment'
                  ? 'bg-[#B6D63A] text-black shadow-[0_0_16px_rgba(182,214,58,0.35)]'
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
                  ? 'px-3 sm:px-4 py-1.5'
                  : 'px-4 sm:px-5 py-2'
              } ${
                activeSection === 'me'
                  ? 'bg-[#B6D63A] text-black shadow-[0_0_16px_rgba(182,214,58,0.35)]'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              ME
            </button>
          </nav>

          {/* Right: Crisp White Resume Pill Button (Standardized padding & typography) */}
          <div className="hidden md:flex items-center">
            <a
              id="nav-resume-btn"
              href="/resume/shreya-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full font-syne font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none whitespace-nowrap bg-white hover:bg-[#B6D63A] text-black shadow-[0_4px_16px_rgba(0,0,0,0.4)] ${
                isScrolled
                  ? 'px-4 sm:px-5 py-1.5 sm:py-2 text-xs'
                  : 'px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px]'
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




