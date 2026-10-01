import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Camera,
  Layers,
  Compass,
  Feather,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const RafugariDigitalArchive: React.FC = () => {
  return (
    <section id="rafugari-archive" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-[rgba(239,233,219,0.14)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-[11px] font-semibold tracking-[0.14em] text-[#c9f14a] uppercase mb-2">
            PLATFORM ARCHITECTURE // HEIRLOOM PRESERVATION PIPELINE
          </div>
          <h2 className="font-dm-serif text-[clamp(30px,4.6vw,64px)] leading-[1.05] tracking-[-0.01em] font-normal text-[#efe9db] uppercase">
            CONNECTING CUSTODIAN TO CRAFT.
          </h2>
          <p className="font-sans font-light text-[clamp(15px,1.25vw,19px)] max-w-[56ch] text-[#efe9db]/85 mt-3 leading-relaxed">
            The Rafugari platform establishes a seamless, trusted pathway from high-resolution fabric capture on a smartphone to the workbench of a 4th-generation master rafugar.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="Heirloom Custody Rule: Transparency and micro-progress photos build the trust needed to hand over a 100-year-old family treasure."
            rotation="rotate-1"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* 3 Step Interactive Workflow Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c9f14a] mb-4">
              <span>01. MICRO-FABRIC SCAN</span>
              <Camera className="w-4 h-4" />
            </div>
            <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
              Optical Weave Diagnostic
            </h4>
            <p className="text-[14px] text-[#a29d90] font-sans leading-relaxed">
              Users capture raking light photos of fabric damage. The platform identifies weave classification (Twill, Satin, Jamawar), thread count, and fiber composition to suggest the exact restorative technique.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-[#161614] border border-[rgba(239,233,219,0.14)] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            AUTO-DETECTS MOTIF WEAR &amp; WARP TENSION
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[#c9f14a]/30 shadow-[0_0_25px_rgba(201,241,74,0.1)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c9f14a] mb-4">
              <span>02. GUILD ALLOCATION</span>
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
              Master Artisan Match
            </h4>
            <p className="text-[14px] text-[#a29d90] font-sans leading-relaxed">
              The project is matched with a verified Ustad specializing in that regional textile tradition. The custodian receives estimated timelines, vintage thread matching proof, and conservation quotes.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-[#c9f14a]/10 text-[#c9f14a] border border-[#c9f14a]/25 font-syne text-[11px] font-semibold uppercase tracking-[0.14em]">
            DIRECT ARTISAN DIALOGUE &amp; FAIR COMPENSATION
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-2xl bg-[#1d1d1a] border border-[rgba(239,233,219,0.14)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c9f14a] mb-4">
              <span>03. LIVING CERTIFICATE</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-dm-serif text-[clamp(19px,1.8vw,24px)] leading-[1.2] font-normal text-[#efe9db] mb-2">
              Digital Provenance Vault
            </h4>
            <p className="text-[14px] text-[#a29d90] font-sans leading-relaxed">
              Upon completion, the garment is returned with an immutable digital provenance passport documenting its historical restoration record, master artisan signature, and archival storage care guide.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-[#161614] border border-[rgba(239,233,219,0.14)] font-syne text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a29d90]">
            PRESERVED FOR THE NEXT GENERATION
          </div>
        </div>
      </div>
    </section>
  );
};
