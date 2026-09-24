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
    <section id="rafugari-archive" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#E5C17C] uppercase mb-2">
            PLATFORM ARCHITECTURE // HEIRLOOM PRESERVATION PIPELINE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            CONNECTING CUSTODIAN TO CRAFT.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
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
        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono-tech text-xs text-[#E5C17C] mb-4">
              <span>01. MICRO-FABRIC SCAN</span>
              <Camera className="w-4 h-4" />
            </div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">
              Optical Weave Diagnostic
            </h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Users capture raking light photos of fabric damage. The platform identifies weave classification (Twill, Satin, Jamawar), thread count, and fiber composition to suggest the exact restorative technique.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-black/40 border border-white/5 font-mono-tech text-[11px] text-neutral-400">
            AUTO-DETECTS MOTIF WEAR & WARP TENSION
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-2xl bg-[#131217] border border-[#E5C17C]/40 shadow-[0_0_25px_rgba(229,193,124,0.15)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono-tech text-xs text-[#E5C17C] mb-4">
              <span>02. GUILD ALLOCATION</span>
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">
              Master Artisan Match
            </h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              The project is matched with a verified Ustad specializing in that regional textile tradition. The custodian receives estimated timelines, vintage thread matching proof, and conservation quotes.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-[#E5C17C]/10 text-[#E5C17C] border border-[#E5C17C]/20 font-mono-tech text-[11px] font-bold">
            DIRECT ARTISAN DIALOGUE & FAIR COMPENSATION
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-2xl bg-[#131217] border border-[#3d3326]/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono-tech text-xs text-[#E5C17C] mb-4">
              <span>03. LIVING CERTIFICATE</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">
              Digital Provenance Vault
            </h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Upon completion, the garment is returned with an immutable digital provenance passport documenting its historical restoration record, master artisan signature, and archival storage care guide.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-black/40 border border-white/5 font-mono-tech text-[11px] text-neutral-400">
            PRESERVED FOR THE NEXT GENERATION
          </div>
        </div>
      </div>
    </section>
  );
};


