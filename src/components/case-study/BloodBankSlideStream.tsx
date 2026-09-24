import React from 'react';
import { motion } from 'motion/react';

// Exact slide PNGs provided in /public/shreya-portfolio/assets/ (5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
const SLIDES = [
  { id: 5, src: '/shreya-portfolio/assets/5.png', alt: 'Blood bank case study slide 5' },
  { id: 6, src: '/shreya-portfolio/assets/6.png', alt: 'Blood bank case study slide 6' },
  { id: 7, src: '/shreya-portfolio/assets/7.png', alt: 'Blood bank case study slide 7' },
  { id: 8, src: '/shreya-portfolio/assets/8.png', alt: 'Blood bank case study slide 8' },
  { id: 9, src: '/shreya-portfolio/assets/9.png', alt: 'Blood bank case study slide 9' },
  { id: 10, src: '/shreya-portfolio/assets/10.png', alt: 'Blood bank case study slide 10' },
  { id: 11, src: '/shreya-portfolio/assets/11.png', alt: 'Blood bank case study slide 11' },
  { id: 12, src: '/shreya-portfolio/assets/12.png', alt: 'Blood bank case study slide 12' },
  { id: 13, src: '/shreya-portfolio/assets/13.png', alt: 'Blood bank case study slide 13' },
  { id: 14, src: '/shreya-portfolio/assets/14.png', alt: 'Blood bank case study slide 14' },
  { id: 15, src: '/shreya-portfolio/assets/15.png', alt: 'Blood bank case study slide 15' },
];

export const BloodBankSlideStream: React.FC = () => {
  return (
    <section id="bb-slides-stream" className="w-full relative py-0">
      <div className="max-w-[1280px] mx-auto px-0">
        {/* Vertical stack of images with 0 spacing and sharp corners */}
        <div className="flex flex-col space-y-0 gap-0">
          {SLIDES.map((slide, index) => (
            <div
              key={`slide-${slide.id}`}
              className="w-full bg-transparent rounded-none border-0 p-0 m-0"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto block select-none rounded-none border-0 p-0 m-0"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

