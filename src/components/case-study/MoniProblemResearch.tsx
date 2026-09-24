import React from 'react';

export const MoniProblemResearch: React.FC = () => {
  return (
    <section
      id="moni-research"
      className="pt-16 pb-20 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto select-none"
    >
      {/* 1. Tag: THE PROBLEM */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-[#C9F24A]">
          THE PROBLEM
        </span>
      </div>

      {/* 2. Main Title: Finance is a constant background burden across everyday life. */}
      <h2 className="text-center font-playfair font-normal text-4xl sm:text-5xl md:text-[56px] lg:text-[60px] text-[#F5F5F0] leading-[1.14] max-w-4xl mx-auto tracking-tight">
        Finance is a
        <br />
        constant background burden
        <br />
        across everyday life.
      </h2>

      {/* 3. Subtitle Description */}
      <p className="text-center font-sans text-sm sm:text-base text-[#949490] leading-relaxed max-w-2xl mx-auto mt-6 font-normal">
        It demands continuous attention, having people constantly make decisions, track spending,
        and think about money at every step, turning it into a persistent mental load.
      </p>

      {/* 4. Three Bento Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto items-stretch">
        {/* Card 1: 1 in 2 */}
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-7 sm:p-8 flex flex-col justify-between min-h-[265px] hover:border-white/10 transition-colors">
          <div>
            <div className="font-playfair text-5xl sm:text-[56px] font-bold text-[#C9F24A] leading-none tracking-tight">
              1 in 2
            </div>
            <p className="text-[#F5F5F0] font-sans text-sm sm:text-[14.5px] leading-relaxed mt-5 font-normal">
              Urban Indians say financial pressure has impacted their daily life
            </p>
          </div>

          <div>
            <div className="w-full h-[1px] bg-white/5 my-4" />
            <div className="text-[10px] font-mono tracking-widest text-[#949490] uppercase">
              SOURCE: Ipsos World Mental Health Survey 2024
            </div>
          </div>
        </div>

        {/* Card 2: 74% */}
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-7 sm:p-8 flex flex-col justify-between min-h-[265px] hover:border-white/10 transition-colors">
          <div>
            <div className="font-playfair text-5xl sm:text-[56px] font-bold text-[#C9F24A] leading-none tracking-tight">
              74%
            </div>
            <p className="text-[#F5F5F0] font-sans text-sm sm:text-[14.5px] leading-relaxed mt-5 font-normal">
              Users spend more with UPI one tap, where no friction leads to more overspending
            </p>
          </div>

          <div>
            <div className="w-full h-[1px] bg-white/5 my-4" />
            <div className="text-[10px] font-mono tracking-widest text-[#949490] uppercase">
              SOURCE: arXiv Study 2024 × NPCI Data
            </div>
          </div>
        </div>

        {/* Card 3: 27% */}
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-7 sm:p-8 flex flex-col justify-between min-h-[265px] hover:border-white/10 transition-colors">
          <div>
            <div className="font-playfair text-5xl sm:text-[56px] font-bold text-[#C9F24A] leading-none tracking-tight">
              27%
            </div>
            <p className="text-[#F5F5F0] font-sans text-sm sm:text-[14.5px] leading-relaxed mt-5 font-normal">
              Indians are financially literate so 3 in 4 are making decisions without the knowledge to do so
            </p>
          </div>

          <div>
            <div className="w-full h-[1px] bg-white/5 my-4" />
            <div className="text-[10px] font-mono tracking-widest text-[#949490] uppercase">
              SOURCE: NCFE-Financial Literacy and Inclusion Survey (NCFE-FLIS), 2019
            </div>
          </div>
        </div>
      </div>

      {/* 5. Sticky Note at Bottom */}
      <div className="mt-14 flex justify-center">
        <div className="relative bg-[#BEAC75] text-[#1E1B15] px-8 sm:px-12 py-3.5 sm:py-4 rounded -rotate-1 shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-white/10 backdrop-blur-sm transition-transform hover:rotate-0 duration-300">
          <p className="font-caveat text-2xl sm:text-[28px] font-medium tracking-wide">
            "Where did my money go this month?"
          </p>
        </div>
      </div>
    </section>
  );
};


