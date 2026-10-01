import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const WIREFRAME_OVERVIEW_IMAGES = [
  { id: 'wf-1', src: '/assets/wireframes (1).png', alt: 'Wireframe Overview 1' },
  { id: 'wf-2', src: '/assets/wireframes (2).png', alt: 'Wireframe Overview 2' },
];

const LOW_FID_IMAGES = [
  { id: 'low-2', src: '/assets/lowfidrafu (2).png', alt: 'Low-fidelity wireframe 2' },
  { id: 'low-3', src: '/assets/lowfidrafu (3).png', alt: 'Low-fidelity wireframe 3' },
  { id: 'low-4', src: '/assets/lowfidrafu (4).png', alt: 'Low-fidelity wireframe 4' },
  { id: 'low-5', src: '/assets/lowfidrafu (5).png', alt: 'Low-fidelity wireframe 5' },
  { id: 'low-6', src: '/assets/lowfidrafu (6).png', alt: 'Low-fidelity wireframe 6' },
  { id: 'low-7', src: '/assets/lowfidrafu (7).png', alt: 'Low-fidelity wireframe 7' },
  { id: 'low-8', src: '/assets/lowfidrafu (8).png', alt: 'Low-fidelity wireframe 8' },
  { id: 'low-9', src: '/assets/lowfidrafu (9).png', alt: 'Low-fidelity wireframe 9' },
  { id: 'low-10', src: '/assets/lowfidrafu (10).png', alt: 'Low-fidelity wireframe 10' },
  { id: 'low-11', src: '/assets/lowfidrafu (11).png', alt: 'Low-fidelity wireframe 11' },
  { id: 'low-12', src: '/assets/lowfidrafu (12).png', alt: 'Low-fidelity wireframe 12' },
  { id: 'low-13', src: '/assets/lowfidrafu (13).png', alt: 'Low-fidelity wireframe 13' },
  { id: 'low-14', src: '/assets/lowfidrafu (14).png', alt: 'Low-fidelity wireframe 14' },
  { id: 'low-15', src: '/assets/lowfidrafu (15).png', alt: 'Low-fidelity wireframe 15' },
  { id: 'low-16', src: '/assets/lowfidrafu (16).png', alt: 'Low-fidelity wireframe 16' },
  { id: 'low-17', src: '/assets/lowfidrafu (17).png', alt: 'Low-fidelity wireframe 17' },
  { id: 'low-18', src: '/assets/lowfidrafu (18).png', alt: 'Low-fidelity wireframe 18' },
  { id: 'low-19', src: '/assets/lowfidrafu (19).png', alt: 'Low-fidelity wireframe 19' },
];

const HIGH_FID_IMAGES = Array.from({ length: 27 }, (_, i) => ({
  id: `high-${i + 1}`,
  src: `/assets/highfid/${i + 1}.png`,
  alt: `High-fidelity screen ${i + 1}`,
}));

const ALL_IMAGES = [
  ...WIREFRAME_OVERVIEW_IMAGES,
  ...LOW_FID_IMAGES,
  ...HIGH_FID_IMAGES,
];

export const RafugariWireframesSection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightboxBySrc = (src: string) => {
    const idx = ALL_IMAGES.findIndex((img) => img.src === src);
    if (idx !== -1) {
      setSelectedImageIndex(idx);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % ALL_IMAGES.length);
    }
  };

  return (
    <section id="wireframes" className="py-20 px-4 sm:px-8 md:px-12 max-w-[1340px] mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <h3 className="font-dm-serif text-[clamp(24px,3vw,38px)] leading-[1.05] text-[#efe9db] mb-2">
          Wireframes
        </h3>
        <p className="font-sans text-[clamp(14px,1.15vw,17px)] text-[#a29d90] font-normal">
          From low fidelity to high fidelity
        </p>
      </div>

      {/* 1. Wireframe Overview / Conceptual Sketches (wireframes 1 & 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center justify-items-center mb-16">
        {WIREFRAME_OVERVIEW_IMAGES.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightboxBySrc(img.src)}
            className="w-full flex items-center justify-center cursor-pointer select-none transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-contain block rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* 2. Low-Fidelity Wireframes Grid (lowfidrafu 2 to 19) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-16">
        {LOW_FID_IMAGES.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightboxBySrc(img.src)}
            className="w-full flex items-center justify-center cursor-pointer select-none transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full max-w-[220px] h-auto object-contain block"
            />
          </div>
        ))}
      </div>

      {/* 3. High-Fidelity UI Screens Grid (highfid 1 to 27) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
        {HIGH_FID_IMAGES.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightboxBySrc(img.src)}
            className="w-full flex items-center justify-center cursor-pointer select-none transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full max-w-[220px] h-auto object-contain block"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-2 right-2 sm:top-0 sm:right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image */}
              <img
                src={ALL_IMAGES[selectedImageIndex].src}
                alt={ALL_IMAGES[selectedImageIndex].alt}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#c9f14a] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                title="Previous Screen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#c9f14a] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                title="Next Screen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
