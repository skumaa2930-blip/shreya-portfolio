import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface WalkthroughItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  taskTitle: string;
  actionStep: string;
  improvementsTitle?: string;
  bullets: string[];
}

const WALKTHROUGH_ITEMS: WalkthroughItem[] = [
  {
    id: 1,
    imageSrc: '/assets/cw (1).png',
    imageAlt: 'Cognitive Walkthrough 1 · Take a photo of the garment and tap Use Photo',
    taskTitle: 'Task 01: Capture Garment Damage',
    actionStep: 'Take a photo of the garment and taps Use Photo.',
    bullets: [
      'Make the photo instructions larger or more visible.',
      'Add a visual guide showing where the damaged area should be placed.',
      'Show a warning if the photo is too far away or unclear.',
      'Explain that the photo is used to record the garment and repair, not to automatically identify the damage.',
    ],
  },
  {
    id: 2,
    imageSrc: '/assets/cw (2).png',
    imageAlt: 'Cognitive Walkthrough 2 · Choose either Speak Details or Type Details',
    taskTitle: 'Task 02: Intake Input Mode',
    actionStep: 'Choose either Speak Details or Type Details.',
    improvementsTitle: 'Rewrite the short explanations below the buttons:',
    bullets: [
      'Speak Details: Say the repair information using your voice.',
      'Type Details: Enter the repair information using the keyboard.',
    ],
  },
  {
    id: 3,
    imageSrc: '/assets/cw (3).png',
    imageAlt: 'Cognitive Walkthrough 3 · Type the repair details and confirm it',
    taskTitle: 'Task 03: Detail Review & Confirmation',
    actionStep: 'Type the repair details and confirm it',
    improvementsTitle: 'Use different labels for the two steps:',
    bullets: [
      'Review Details for the first button',
      'Confirm Repair for the final button',
    ],
  },
  {
    id: 4,
    imageSrc: '/assets/cw (4).png',
    imageAlt: 'Cognitive Walkthrough 4 · Move the Repair to In Progress',
    taskTitle: 'Task 04: Status Transition',
    actionStep: 'Move the Repair to In Progress',
    bullets: [
      'Change the button label from - Start Repair to Mark In Progress',
      'Add supporting text - This updates the repair status.',
    ],
  },
  {
    id: 5,
    imageSrc: '/assets/cw (5).png',
    imageAlt: 'Cognitive Walkthrough 5 · Add the Repair to the Showcase',
    taskTitle: 'Task 05: Portfolio Showcase Selection',
    actionStep: 'Add the Repair to the Showcase',
    bullets: [
      'Explain the option in simple language - Add this finished repair to your profile so customers can see your work.',
      'Add a remove button - so that the user can remove it from the showcase',
    ],
  },
];

export const RafugariUsabilityTestingSection: React.FC = () => {
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedLightboxIndex !== null) {
      setSelectedLightboxIndex((selectedLightboxIndex - 1 + WALKTHROUGH_ITEMS.length) % WALKTHROUGH_ITEMS.length);
    }
  };

  const handleNext = () => {
    if (selectedLightboxIndex !== null) {
      setSelectedLightboxIndex((selectedLightboxIndex + 1) % WALKTHROUGH_ITEMS.length);
    }
  };

  return (
    <div className="w-full mt-12">
      {/* Usability Testing & Cognitive Walkthrough Header */}
      <div className="mb-10">
        <h2 className="font-dm-serif text-[clamp(26px,3.4vw,44px)] leading-[1.1] text-[#efe9db] mb-3">
          Cognitive Walkthrough - Rafugar Flow
        </h2>
        <p className="font-sans text-[clamp(14px,1.2vw,17px)] text-[#efe9db]/85 max-w-[85ch] leading-relaxed font-light">
          This slide presents a summary of all participants who took part in the cognitive walkthrough, including their actions, difficulties, and overall experience while using the Rafooghar repair flow.
        </p>
      </div>

      {/* Overview Banner for Improvements */}
      <div className="mb-12 p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)]">
        <h3 className="font-dm-serif text-xl sm:text-2xl text-[#efe9db] mb-1">
          What Can Be Improved?
        </h3>
        <p className="font-sans text-sm text-[#a29d90]">
          Based on the participant walkthrough, the following improvements were identified:
        </p>
      </div>

      {/* 5 Cognitive Walkthrough Rows */}
      <div className="space-y-12 sm:space-y-14">
        {WALKTHROUGH_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Cognitive Walkthrough Table Sheet Image */}
            <div className="lg:col-span-7 flex flex-col">
              <div
                onClick={() => setSelectedLightboxIndex(idx)}
                className="w-full bg-[#111113] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}

                  className="w-full h-auto object-contain block"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.opacity = '0.7';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Improvement Sticky Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div 
                className="w-full p-6 sm:p-7 rounded-2xl border transition-all relative overflow-hidden"
                style={{
                  backgroundColor: '#f2e8cf',
                  borderColor: '#d8caa3',
                  color: '#2b2315',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                {item.improvementsTitle && (
                  <p className="font-sans font-semibold text-[14px] sm:text-[15px] leading-snug mb-3 text-[#2a2214]">
                    {item.improvementsTitle}
                  </p>
                )}

                <ul className="space-y-2.5 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#2a2214]/95 font-normal">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[#8c6b2d] font-bold text-base leading-tight shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Walkthrough Sheets */}
      <AnimatePresence>
        {selectedLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setSelectedLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#141418] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
            >
              {/* Header */}
              <div className="p-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-[#18181e]/80">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-black bg-[#c9f14a] px-2.5 py-0.5 rounded-full">
                    SHEET {selectedLightboxIndex + 1} / {WALKTHROUGH_ITEMS.length}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm sm:text-base font-semibold text-[#efe9db]">
                      {WALKTHROUGH_ITEMS[selectedLightboxIndex].taskTitle}
                    </h4>
                    <p className="font-mono text-[11px] text-[#a29d90]">
                      {WALKTHROUGH_ITEMS[selectedLightboxIndex].actionStep}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLightboxIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="relative flex-1 min-h-[400px] max-h-[72vh] p-4 sm:p-6 flex items-center justify-center bg-[#0d0d10] overflow-auto">
                <img
                  src={WALKTHROUGH_ITEMS[selectedLightboxIndex].imageSrc}
                  alt={WALKTHROUGH_ITEMS[selectedLightboxIndex].imageAlt}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#c9f14a] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  title="Previous Sheet"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#c9f14a] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  title="Next Sheet"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Footer */}
              <div className="p-3 sm:px-6 border-t border-white/10 bg-[#18181e]/80 flex items-center justify-between text-xs font-mono text-[#a29d90]">
                <span>Click outside or press X to close</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1 rounded bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-1 rounded bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
