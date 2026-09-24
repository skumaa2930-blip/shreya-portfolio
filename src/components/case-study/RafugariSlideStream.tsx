import React from 'react';
import { motion } from 'motion/react';

// Exact slide PNGs f1 through f34 in /public/shreya-portfolio/assets/
const RAFUGARI_SLIDES = Array.from({ length: 34 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    src: `/shreya-portfolio/assets/f${num}.png`,
    alt: `Rafugari case study slide ${num}`,
  };
});

export const RafugariSlideStream: React.FC = () => {
  return (
    <section id="rafugari-slides-stream" className="w-full relative py-0">
      <div className="max-w-[1280px] mx-auto px-0">
        {/* Vertical stack of images with 0 spacing and sharp corners */}
        <div className="flex flex-col space-y-0 gap-0">
          {RAFUGARI_SLIDES.map((slide, index) => (
            <div
              key={`rafugari-slide-${slide.id}`}
              className="w-full bg-transparent rounded-none border-0 p-0 m-0"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto block select-none rounded-none border-0 p-0 m-0"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

