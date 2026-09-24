import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export interface CaseStudySectionItem {
  id: string;
  label: string;
}

interface CaseStudySubNavProps {
  sections: CaseStudySectionItem[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  accentColor?: string; // defaults to #D1F047
  showScrollPrompt?: boolean;
}

export const CaseStudySubNav: React.FC<CaseStudySubNavProps> = ({
  sections,
  activeSection,
  onSelectSection,
  accentColor = '#D1F047',
  showScrollPrompt = true,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled past a small threshold
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNext = () => {
    // If on overview, scroll to research, or next section in sequence
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    const nextSection = sections[currentIndex + 1] || sections[1] || sections[0];
    if (nextSection) {
      onSelectSection(nextSection.id);
    }
  };

  return (
    <div
      id="case-study-subnav-bar"
      className={`w-full sticky top-0 z-40 transition-all duration-300 border-y border-white/[0.08] backdrop-blur-md ${
        isSticky
          ? 'bg-[#0c0c0e]/95 py-2.5 sm:py-3 shadow-[0_12px_36px_rgba(0,0,0,0.8)]'
          : 'bg-[#0c0c0e]/90 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between relative">
        {/* Left Spacer for true center balance on desktop */}
        <div className="hidden lg:block w-36 shrink-0" />

        {/* Centered Pill Navigation */}
        <div className="flex-1 flex justify-center min-w-0">
          <nav
            aria-label="Case study sections navigation"
            className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-[#141417]/95 border border-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.65)] backdrop-blur-md max-w-full overflow-x-auto no-scrollbar"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  id={`subnav-tab-${section.id}`}
                  onClick={() => onSelectSection(section.id)}
                  className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-[13px] font-syne font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? 'text-black shadow-[0_0_24px_rgba(209,240,71,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  style={{
                    backgroundColor: isActive ? accentColor : 'transparent',
                  }}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Scroll to explore prompt */}
        {showScrollPrompt && (
          <div className="hidden md:flex items-center justify-end w-36 shrink-0">
            <button
              onClick={handleScrollToNext}
              className="group inline-flex items-center gap-1.5 text-xs font-syne text-neutral-400 hover:text-white tracking-wide transition-colors cursor-pointer select-none"
              title="Scroll to next section"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D1F047] group-hover:translate-y-0.5 transition-all" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
