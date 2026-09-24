import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CurrentlyFiguringOutBanner } from './components/CurrentlyFiguringOutBanner';
import { ProcessLoopSection } from './components/ProcessLoopSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CuriosityPlaygroundSection } from './components/CuriosityPlaygroundSection';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { MoniCaseStudyPage } from './components/case-study/MoniCaseStudyPage';
import { BloodBankCaseStudyPage } from './components/case-study/BloodBankCaseStudyPage';
import { RafugariCaseStudyPage } from './components/case-study/RafugariCaseStudyPage';

// ============================================================================
// 1 & 2. Fragment Data & Sound Effects
// ============================================================================
type FragmentType =
  | "photo"
  | "ui"
  | "video"
  | "sketch"
  | "object"
  | "experiment"
  | "detail"
  | "portfolio";

type Fragment = {
  src: string;
  fallbackSrc: string;
  label: string;
  type: FragmentType;
  className: string;
  idName: string;
};

// Fragment images 1 through 8 in /public/shreya-portfolio/assets/
const fragments: Fragment[] = [
  {
    idName: "fragment1",
    src: "/shreya-portfolio/assets/fragment1.png",
    fallbackSrc: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    label: "PHOTO",
    type: "photo",
    className: "fragment fragment-photo",
  },
  {
    idName: "fragment2",
    src: "/shreya-portfolio/assets/fragment2.png",
    fallbackSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    label: "UX",
    type: "ui",
    className: "fragment fragment-ui",
  },
  {
    idName: "fragment3",
    src: "/shreya-portfolio/assets/fragment3.png",
    fallbackSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    label: "VIDEO",
    type: "video",
    className: "fragment fragment-video",
  },
  {
    idName: "fragment4",
    src: "/shreya-portfolio/assets/fragment4.png",
    fallbackSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    label: "SKETCH",
    type: "sketch",
    className: "fragment fragment-sketch",
  },
  {
    idName: "fragment5",
    src: "/shreya-portfolio/assets/fragment5.png",
    fallbackSrc: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    label: "OBJECT",
    type: "object",
    className: "fragment fragment-object",
  },
  {
    idName: "fragment6",
    src: "/shreya-portfolio/assets/fragment6.png",
    fallbackSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    label: "EXPERIMENT",
    type: "experiment",
    className: "fragment fragment-experiment",
  },
  {
    idName: "fragment7",
    src: "/shreya-portfolio/assets/fragment7.png",
    fallbackSrc: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    label: "DETAIL",
    type: "detail",
    className: "fragment fragment-detail",
  },
  {
    idName: "fragment8",
    src: "/shreya-portfolio/assets/fragment8.png",
    fallbackSrc: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    label: "PORTFOLIO",
    type: "portfolio",
    className: "fragment fragment-portfolio",
  },
];

const SELECTED_FRAGMENT_INDEX = 7;
const STACK_ROTATIONS = [-7, 5, -4, 6, -2, 4, -3, 0];

// Synthetic pops and clicks using Web Audio API
const playPopSound = (pitch = 190, duration = 0.055, filterFreq = 650, vol = 0.26) => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFreq, audioCtx.currentTime);
    filter.Q.setValueAtTime(2.2, audioCtx.currentTime);

    osc.type = "sine";
    osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(32, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch {}
};

const playClickSound = () => {
  playPopSound(340, 0.04, 1200, 0.32);
};

export default function App() {
  const [activeBookStep, setActiveBookStep] = useState<number>(0);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Intro Animation State & DOM Refs
  const [navVisible, setNavVisible] = useState(false);
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const introStageRef = useRef<HTMLElement>(null);
  const fragmentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const portfolioFlipRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const soDidPaperRef = useRef<HTMLDivElement>(null);
  const soDidTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const masterTimeline = useRef<gsap.core.Timeline | null>(null);

  // Listen to browser back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // ============================================================================
  // 3. GSAP Master Intro Timeline
  // ============================================================================
  const runIntroAnimation = () => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

if (
  currentPath !== '/' &&
  currentPath !== '' &&
  currentPath !== basePath &&
  currentPath !== `${basePath}/`
) {
  return;
}

    // Lock page scrolling while intro plays
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const cursor = cursorRef.current;
    const selectedRot = STACK_ROTATIONS[SELECTED_FRAGMENT_INDEX] ?? 0;
    const selectedFragment = fragmentRefs.current[SELECTED_FRAGMENT_INDEX];

    // Kill any existing timeline
    if (masterTimeline.current) {
      masterTimeline.current.kill();
    }

    // Reset initial states before timeline starts
    if (introStageRef.current) {
      gsap.set(introStageRef.current, { autoAlpha: 1, pointerEvents: "auto" });
    }
    if (cursor) {
      gsap.set(cursor, { autoAlpha: 0, scale: 0.8, x: 0, y: 130 });
    }
    gsap.set(".intro-glow", { autoAlpha: 0, scale: 0.2 });
    gsap.set(fragmentRefs.current, { autoAlpha: 0, scale: 1, x: 0, y: 0, opacity: 1, filter: "none" });
    if (portfolioFlipRef.current) {
      gsap.set(portfolioFlipRef.current, { rotateY: 0 });
    }
    if (focusRef.current) {
      gsap.set(focusRef.current, { autoAlpha: 0, scale: 1.1, rotate: selectedRot });
    }
    if (soDidPaperRef.current && soDidTextRef.current) {
      gsap.set([soDidPaperRef.current, soDidTextRef.current], { autoAlpha: 0, scale: 0.96, y: 0 });
    }
    gsap.set("#site-unified-navigation", { autoAlpha: 0, y: -20 });
    if (portfolioRef.current) {
      gsap.set(portfolioRef.current, { autoAlpha: 0, scale: 0.98, pointerEvents: "none" });
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        setNavVisible(true);
        setIsIntroFinished(true);
      },
    });
    masterTimeline.current = tl;

    // 00 — Cursor enters center from below and clicks
    if (cursor) {
      tl.to(cursor, {
        autoAlpha: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      });

      tl.to(cursor, {
        scale: 0.68,
        duration: 0.08,
        onStart: () => {
          playClickSound();
          gsap.fromTo(
            ".intro-cursor-click-ring",
            { scale: 0.5, autoAlpha: 0.85 },
            { scale: 1.8, autoAlpha: 0, duration: 0.35, ease: "power2.out" }
          );
        },
      }, "+=0.06");

      tl.to(cursor, { scale: 1, duration: 0.12 });
    }

    // 01 — Ambient center glow arrives
    tl.to(".intro-glow", {
      autoAlpha: 1,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    }, "+=0.04");

    // 02 — Fragments stack one by one with varied rotations and pop sounds
    fragmentRefs.current.forEach((fragment, index) => {
      if (!fragment) return;
      const rot = STACK_ROTATIONS[index] ?? 0;
      tl.set(fragment, { zIndex: index + 1 });

      tl.fromTo(
        fragment,
        { autoAlpha: 0, scale: 0.74, rotate: rot * 1.6, x: 0, y: 18 },
        {
          autoAlpha: 1,
          scale: 1,
          rotate: rot,
          x: 0,
          y: 0,
          duration: 0.28,
          ease: "back.out(1.25)",
          onStart: () => playPopSound(150 + index * 16, 0.055, 600, 0.26),
        },
        index === 0 ? "+=0.08" : "+=0.06"
      );

      if (index > 0) {
        const olderOpacity = Math.max(0.18, 0.78 - index * 0.08);
        tl.to(
          fragmentRefs.current.slice(0, index),
          { opacity: olderOpacity, duration: 0.16, ease: "power2.out" },
          "-=0.18"
        );
      }
    });

    // 03 — Cursor targets PORTFOLIO fragment and focus viewfinder locks on
    if (cursor) {
      tl.to(cursor, { x: 0, y: 0, duration: 0.42, ease: "power2.inOut" }, "+=0.1");
    }

    if (focusRef.current) {
      tl.fromTo(
        focusRef.current,
        { autoAlpha: 0, scale: 1.1, rotate: selectedRot },
        { autoAlpha: 1, scale: 1, rotate: selectedRot, duration: 0.28, ease: "power2.out" },
        "-=0.15"
      );
    }

    tl.to({}, { duration: 0.35 });

    if (cursor) {
      tl.to(cursor, {
        scale: 0.68,
        duration: 0.08,
        onStart: () => {
          playClickSound();
          gsap.fromTo(
            ".intro-cursor-click-ring",
            { scale: 0.5, autoAlpha: 0.85 },
            { scale: 1.8, autoAlpha: 0, duration: 0.35, ease: "power2.out" }
          );
        },
      }, "+=0.04");

      tl.to(cursor, { scale: 1, duration: 0.12 });
    }

    // 04 — PORTFOLIO fragment 3D flip (rotateY: 0deg → 180deg)
    if (portfolioFlipRef.current) {
      tl.to(
        portfolioFlipRef.current,
        { rotateY: 180, duration: 0.75, ease: "power3.inOut", force3D: true },
        "+=0.04"
      );
    }

    // Focus frame disappears during flip
    if (focusRef.current) {
      tl.to(focusRef.current, {
        autoAlpha: 0,
        scale: 0.95,
        rotate: selectedRot,
        duration: 0.25,
        ease: "power2.out",
      }, "-=0.35");
    }

    // Background fragments pull subtly backward
    tl.to(
      fragmentRefs.current.slice(0, 7).filter(Boolean),
      { scale: 0.88, opacity: 0.08, filter: "blur(2.5px)", duration: 0.5, ease: "power2.inOut" },
      "-=0.25"
    );

    // Hold white "HMM." note briefly
    tl.to({}, { duration: 0.45 });

    // 05 — Transition to blank dark screen: "HMM" card pulls back sharply and disappears fast
    if (selectedFragment) {
      tl.to(selectedFragment, {
        scale: 0.52,
        z: -160,
        autoAlpha: 0,
        duration: 0.26,
        ease: "back.in(1.8)",
      });
    }

    tl.to(
      [...fragmentRefs.current.slice(0, 7).filter(Boolean), cursor, ".intro-glow"].filter(Boolean),
      { autoAlpha: 0, duration: 0.2 },
      "-=0.22"
    );

    tl.to({}, { duration: 0.35 });

    // 06 — "SO I DID." dead-center reveal
    if (soDidPaperRef.current && soDidTextRef.current) {
      tl.fromTo(
        [soDidPaperRef.current, soDidTextRef.current],
        { autoAlpha: 0, scale: 0.96, y: 0 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.65, ease: "power2.out" }
      );
    }

    // Hold "SO I DID."
    tl.to({}, { duration: 0.6 });

    // "SO I DID." pulls fast to the left side and exits
    if (soDidPaperRef.current && soDidTextRef.current) {
      tl.to([soDidPaperRef.current, soDidTextRef.current], {
        x: -120,
        autoAlpha: 0,
        duration: 0.32,
        ease: "power3.in",
        onComplete: () => {
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          setNavVisible(true);
        },
      });
    }

    // Navigation arrives & main portfolio studio enters
    tl.to("#site-unified-navigation", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      clearProps: "transform",
    }, "-=0.1");

    if (portfolioRef.current) {
      tl.to(portfolioRef.current, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        pointerEvents: "auto",
        clearProps: "transform",
      }, "-=0.4");
    }

    // Cleanly fade out intro container so all content is clickable
    if (introStageRef.current) {
      tl.to(introStageRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        pointerEvents: "none",
        onComplete: () => {
          setIsIntroFinished(true);
        },
      }, "-=0.2");
    }
  };

  // Mount intro timeline on initial page load
  useEffect(() => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

if (
  currentPath === '/' ||
  currentPath === '' ||
  currentPath === basePath ||
  currentPath === `${basePath}/`
) {
      if (!isIntroFinished) {
        runIntroAnimation();
      } else {
        // If returning to home after intro has already played, ensure page is unlocked and elements are visible
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        if (introStageRef.current) {
          gsap.set(introStageRef.current, { autoAlpha: 0, pointerEvents: "none" });
        }
        if (portfolioRef.current) {
          gsap.set(portfolioRef.current, { autoAlpha: 1, pointerEvents: "auto", clearProps: "transform" });
        }
        gsap.set("#site-unified-navigation", { autoAlpha: 1, clearProps: "transform" });
      }
    }
    return () => {
      if (masterTimeline.current) {
        masterTimeline.current.kill();
      }
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [currentPath, isIntroFinished]);

  // Fast forward / skip intro handler
  const skipIntro = () => {
    if (masterTimeline.current) {
      masterTimeline.current.progress(1);
    }
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setNavVisible(true);
    setIsIntroFinished(true);
    if (introStageRef.current) {
      gsap.set(introStageRef.current, { autoAlpha: 0, pointerEvents: "none" });
    }
    if (portfolioRef.current) {
      gsap.set(portfolioRef.current, { autoAlpha: 1, pointerEvents: "auto", clearProps: "transform" });
    }
    gsap.set("#site-unified-navigation", { autoAlpha: 1, clearProps: "transform" });
  };

  // Dedicated Route: /work/moni
  if (currentPath === '/work/moni' || currentPath === '/work/moni/') {
    return (
      <MoniCaseStudyPage
        onBack={() => {
          setActiveBookStep(1);
          setIsIntroFinished(true);
          navigateTo('/');
          setTimeout(() => {
            const el = document.getElementById('make');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }}
        onOpenNextProject={() => {
          setActiveBookStep(2);
          navigateTo('/work/blood-bank');
        }}
      />
    );
  }

  // Dedicated Route: /work/blood-bank
  if (currentPath === '/work/blood-bank' || currentPath === '/work/blood-bank/') {
    return (
      <BloodBankCaseStudyPage
        onBack={() => {
          setActiveBookStep(2);
          setIsIntroFinished(true);
          navigateTo('/');
          setTimeout(() => {
            const el = document.getElementById('make');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }}
        onOpenNextProject={() => {
          setActiveBookStep(3);
          navigateTo('/work/rafugari');
        }}
      />
    );
  }

  // Dedicated Route: /work/rafugari (with /work/croma alias support)
  if (
    currentPath === '/work/rafugari' ||
    currentPath === '/work/rafugari/' ||
    currentPath === '/work/croma' ||
    currentPath === '/work/croma/'
  ) {
    return (
      <RafugariCaseStudyPage
        onBack={() => {
          setActiveBookStep(3);
          setIsIntroFinished(true);
          navigateTo('/');
          setTimeout(() => {
            const el = document.getElementById('make');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }}
        onOpenNextProject={() => {
          setActiveBookStep(1);
          navigateTo('/work/moni');
        }}
      />
    );
  }

  // ============================================================================
  // 4. Primary Portfolio Route & React JSX Structure
  // ============================================================================
  return (
    <>
      {/* Intro Animation Stage Overlay */}
      <section
        ref={introStageRef}
        className="intro-stage"
        aria-label="Portfolio Intro Animation"
      >
        {/* Radial Ambient Glow */}
        <div className="intro-glow" />

        {/* Custom Synthetic Click Cursor */}
        <div ref={cursorRef} className="intro-cursor-element">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            <path
              d="M3 3L10.07 20.97L13.58 13.58L20.97 10.07L3 3Z"
              fill="#FFFFFF"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className="intro-cursor-click-ring" />
        </div>

        {/* 8-Card Centered Fragment Stack */}
        <div className="fragment-stage">
          {fragments.map((fragment, index) => {
            const isFloatingAsset =
              fragment.type === "object" ||
              fragment.type === "sketch" ||
              fragment.type === "experiment";

            return (
              <div
                key={fragment.src}
                ref={(el) => {
                  fragmentRefs.current[index] = el;
                }}
                className={`${fragment.className} ${
                  isFloatingAsset ? "floating-asset" : "framed-image"
                }`}
              >
                {fragment.type === "portfolio" ? (
                  /* 3D Flip Card Container */
                  <div ref={portfolioFlipRef} className="portfolio-flip-card">
                    {/* Front: B&W Cover Photo */}
                    <div className="portfolio-photo-face portfolio-flip-face">
                      <img
                        src={fragment.src}
                        alt="Selected Works preview"
                        draggable={false}
                        referrerPolicy="no-referrer"
                        className="bw-image"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src.endsWith(".png")) {
                            target.src = target.src.replace(/\.png$/, ".jpg");
                          } else if (target.src.endsWith(".jpg")) {
                            target.src = target.src.replace(/\.jpg$/, ".jpeg");
                          } else if (target.src !== fragment.fallbackSrc) {
                            target.src = fragment.fallbackSrc;
                          }
                        }}
                      />
                    </div>

                    {/* Back: Clean White Card */}
                    <div className="portfolio-note-face portfolio-flip-face">
                      <h2 className="portfolio-note-serif-title">HMM.</h2>
                      <p className="portfolio-note-serif-sub">
                        I COULD PROBABLY MAKE THAT.
                      </p>
                      <div className="portfolio-note-accent-bar" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={fragment.src}
                    alt={fragment.idName}
                    draggable={false}
                    referrerPolicy="no-referrer"
                    className="bw-image"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith(".png")) {
                        target.src = target.src.replace(/\.png$/, ".jpg");
                      } else if (target.src.endsWith(".jpg")) {
                        target.src = target.src.replace(/\.jpg$/, ".jpeg");
                      } else if (target.src !== fragment.fallbackSrc) {
                        target.src = fragment.fallbackSrc;
                      }
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Corner Viewfinder / Camera Focus Frame */}
        <div ref={focusRef} className="focus-frame">
          <span className="focus-corner top-left" />
          <span className="focus-corner top-right" />
          <span className="focus-corner bottom-left" />
          <span className="focus-corner bottom-right" />
        </div>

        {/* "SO I DID." — Fullscreen Centered */}
        <div ref={soDidPaperRef} className="so-did-fullscreen-center">
          <h1 ref={soDidTextRef} className="so-did-one-line">
            SO I DID.
          </h1>
        </div>

        {/* Skip Intro Control Button */}
        <div className="absolute top-5 right-5 z-[260] flex items-center gap-2.5">
          <button
            onClick={skipIntro}
            id="intro-skip-btn"
            className="text-[11px] font-syne font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-black/60 hover:bg-black/80 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/30 transition-all backdrop-blur-md cursor-pointer shadow-lg"
          >
            Skip intro ↗
          </button>
        </div>
      </section>

      {/* Main Unified Navigation Bar - Fixed to viewport */}
      <Navbar />

      {/* Main Portfolio Studio Container */}
      <div
        ref={portfolioRef}
        className="min-h-screen bg-[#0c0c0e] text-[#ededed] relative overflow-x-hidden selection:bg-[#ccff00] selection:text-black"
      >
        {/* Subtle background grid pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Main Content Sections */}
        <main className="relative z-10 pb-20 sm:pb-28">
          {/* Section 1: Hero & Polaroid Collage */}
          <HeroSection />

          {/* Transition Banner: CURRENTLY FIGURING OUT [ PORTFOLIO ] */}
          <CurrentlyFiguringOutBanner />

          {/* Section 2: Process Loop (I Notice. I Get Curious. I Try It.) */}
          <ProcessLoopSection />

          {/* Section 3: Things I Actually Made (Moni, Blood Bank, Rafugari) */}
          <ProjectsSection
            activeStep={activeBookStep}
            onStepChange={setActiveBookStep}
            onNavigateToProject={(projectId) => {
              if (projectId === 'moni') {
                setActiveBookStep(1);
                navigateTo('/work/moni');
              } else if (projectId === 'blood-bank') {
                setActiveBookStep(2);
                navigateTo('/work/blood-bank');
              } else if (projectId === 'rafugari' || projectId === 'croma') {
                setActiveBookStep(3);
                navigateTo('/work/rafugari');
              }
            }}
          />

          {/* Section 4: Things I Tried Because I Was Curious (8 Bento Experiments) */}
          <CuriosityPlaygroundSection />

          {/* Section 5: Oh. That's Who Made This (About Shreya, Habits, Motion) */}
          <AboutSection />

          {/* Section 6: Main Portfolio Footer (CTA & Socials) */}
          <FooterSection />
        </main>
      </div>
    </>
  );
}



