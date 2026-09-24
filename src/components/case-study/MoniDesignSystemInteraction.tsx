import React from 'react';
import { motion } from 'motion/react';

export const MoniDesignSystemInteraction: React.FC = () => {
  return (
    <section
      id="moni-design-system-interaction"
      className="w-full text-[#ededed] py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* =========================================================================
            BLOCK 1 – Centered Heading & Paragraph
            ========================================================================= */}
        <div className="max-w-[920px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-[#c9f14a] text-4xl sm:text-5xl md:text-[64px] leading-[1.02] tracking-[-0.01em]"
            style={{
              textShadow: '0 0 24px rgba(201, 241, 74, 0.15)',
            }}
          >
            Design System
            <br />
            and Key Interaction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-[#8a8a86] font-hanken font-light text-base sm:text-lg md:text-[20px] leading-[1.5] tracking-[-0.01em] max-w-[920px] mx-auto"
          >
            The design system creates calm, ambient financial interactions through consistent visual language, subtle motion, and contextual UI patterns. Elements like Moni’s adaptive logo, intelligent thinking layer, and ambient gradients communicate system awareness and proactive assistance without overwhelming the user.
          </motion.p>
        </div>

        {/* =========================================================================
            BLOCK 2 – 6-Column Bento Grid (27px gap, ~538px tiles, radius 28px)
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-[27px]">
          
          {/* ROW 1: TILE 1 (2 Cols) – Moni Logo Video Slot (Enlarged + Blended Background) */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative bg-[#141414] border border-white/[0.08] rounded-[28px] overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[538px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_18px_40px_rgba(0,0,0,0.4)] group"
          >
            {/* Center Upper Half: Enlarged Moni Logo Video with blended background */}
            <div className="flex-1 flex items-center justify-center pt-2 pb-2 relative overflow-hidden bg-[#141414]">
              <video
                src="/shreya-portfolio/assets/moni-logo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] h-auto max-h-[300px] object-contain block select-none mix-blend-screen bg-[#141414]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.moni-logo-svg-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'moni-logo-svg-fallback flex flex-col items-center justify-center';
                    fallback.innerHTML = `
                      <svg viewBox="0 0 200 200" fill="#ffffff" class="w-40 sm:w-48 md:w-56 h-auto select-none" aria-label="Moni Logo">
                        <rect x="88" y="128" width="64" height="38" rx="2" />
                        <rect x="30" y="72" width="36" height="72" rx="2" transform="rotate(32 48 108)" />
                        <rect x="70" y="14" width="36" height="76" rx="2" transform="rotate(-28 88 52)" />
                      </svg>
                      <span class="text-[10px] font-mono text-neutral-500 mt-2">moni-logo.mp4</span>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            {/* Bottom-left Caption & Bold Label */}
            <div className="relative z-10">
              <p className="text-[#b9b8b2] font-hanken font-light text-[16px] sm:text-[18px] leading-[1.25] tracking-[-0.01em] max-w-[340px]">
                The logo is 3 notes coming together to form an upward arrow, routinely morphing into coins as they rotate.
              </p>
              <div className="mt-4 font-hanken font-semibold text-white text-[15px] sm:text-[17px] tracking-[0.01em] uppercase">
                MONI
              </div>
            </div>
          </motion.article>

          {/* ROW 1: TILE 2 (4 Cols) – Intelligent Thinking / Moni Active Thinking Layer (Uses moni-thinking.png across whole tile) */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative bg-[#141414] border border-white/[0.08] rounded-[28px] overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[538px] flex flex-col justify-end shadow-[0_18px_40px_rgba(0,0,0,0.4)] group"
          >
            {/* Whole Rectangle Asset – No device mock-up frame */}
            <img
              src="/shreya-portfolio/assets/moni-thinking.png"
              alt="Moni Active Thinking Layer"
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Bottom Gradient for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Bottom-left Caption & Bold Label */}
            <div className="relative z-10 p-7 sm:p-9">
              <p className="text-[#b9b8b2] font-hanken font-light text-[18px] sm:text-[20px] leading-[1.2] tracking-[-0.01em]">
                Moni’s Active
                <br />
                Thinking Layer
              </p>
              <div className="mt-4 font-hanken font-semibold text-white text-[15px] sm:text-[17px] tracking-[0.01em] uppercase">
                INTELLIGENT THINKING
              </div>
            </div>
          </motion.article>

          {/* ROW 2: TILE 3 (2 Cols) – Video Space: moni-icons (Without Border) */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative bg-[#0d0d0d] border border-white/[0.08] rounded-[28px] overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[538px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_18px_40px_rgba(0,0,0,0.4)] group"
          >
            {/* Center Area: Borderless video container for moni-icons.mp4 */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-transparent flex items-center justify-center relative mb-4 border-0">
              <video
                src="/shreya-portfolio/assets/moni-icons.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block border-0"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.moni-icons-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'moni-icons-fallback w-full h-full flex flex-col items-center justify-center p-4 text-center';
                    fallback.innerHTML = `
                      <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#c9f14a] mb-2">▶</div>
                      <div class="font-mono text-xs text-white">moni-icons.mp4</div>
                      <div class="font-mono text-[9px] text-neutral-500 mt-1 uppercase">Dynamic Icon Motion Video</div>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="font-hanken font-semibold text-white text-[15px] sm:text-[17px] tracking-[0.01em] uppercase">
                DESIGN CONSISTENCY &amp; ICONS
              </div>
            </div>
          </motion.article>

          {/* ROW 2: TILE 4 (2 Cols) – Thinking Interaction: moni-active.mp4 video */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative bg-[#0d0d0d] border border-white/[0.08] rounded-[28px] overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[538px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_18px_40px_rgba(0,0,0,0.4)] group"
          >
            {/* Thinking Interaction Video container with moni-active.mp4 */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-[#161618] border border-white/5 relative flex items-center justify-center mb-4">
              <video
                src="/shreya-portfolio/assets/moni-active.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.moni-active-vid-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'moni-active-vid-fallback w-full h-full flex flex-col items-center justify-center p-4 text-center';
                    fallback.innerHTML = `
                      <div class="w-10 h-10 rounded-full bg-[#8a86e8]/20 border border-[#8a86e8]/40 flex items-center justify-center text-[#8a86e8] mb-2 animate-pulse">✦</div>
                      <div class="font-mono text-xs text-white">moni-active.mp4</div>
                      <div class="font-mono text-[9px] text-neutral-500 mt-1 uppercase">Thinking Interaction Video</div>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="font-hanken font-semibold text-white text-[15px] sm:text-[17px] tracking-[0.01em] uppercase">
                THINKING INTERACTION
              </div>
            </div>
          </motion.article>

          {/* ROW 2: TILE 5 (2 Cols) – Colour Gradient with 4 Nodes */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative bg-[#0d0d0d] border border-white/[0.08] rounded-[28px] overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[538px] p-6 sm:p-8 flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Inner rounded panel with gradient and nodes */}
            <div
              className="flex-1 w-full rounded-2xl relative mb-5 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #232e37 0%, #3e5560 30%, #6a9c93 68%, #86dcb0 100%)',
              }}
            >
              {/* Thin white vertical line */}
              <div className="absolute left-1/2 top-[8%] bottom-[8%] w-[1.5px] bg-[#f2f2f2] -translate-x-1/2 opacity-90" />

              {/* Node 1: Top Mint */}
              <div
                className="absolute left-1/2 top-[6%] -translate-x-1/2 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] border-[#f2f2f2] shadow-sm"
                style={{ backgroundColor: '#6fc5a4' }}
              />

              {/* Node 2: Sage / Mint */}
              <div
                className="absolute left-1/2 top-[27%] -translate-x-1/2 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] border-[#f2f2f2] shadow-sm"
                style={{ backgroundColor: '#6aa896' }}
              />

              {/* Node 3: Dark Navy */}
              <div
                className="absolute left-1/2 top-[74%] -translate-x-1/2 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] border-[#f2f2f2] shadow-sm"
                style={{ backgroundColor: '#2b3a44' }}
              />

              {/* Node 4: Dark Navy base */}
              <div
                className="absolute left-1/2 top-[87%] -translate-x-1/2 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] border-[#f2f2f2] shadow-sm"
                style={{ backgroundColor: '#28343d' }}
              />
            </div>

            <div className="relative z-10">
              <div className="font-hanken font-semibold text-white text-[15px] sm:text-[17px] tracking-[0.01em] uppercase">
                COLOUR GRADIENT
              </div>
            </div>
          </motion.article>

        </div>

      </div>
    </section>
  );
};


