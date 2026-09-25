import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
  Eye,
  Sliders,
  Layers,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const BloodBankInterface: React.FC = () => {
  const [filterRhesus, setFilterRhesus] = useState<'ALL' | 'POSITIVE' | 'NEGATIVE'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleUnits = [
    { id: 'UNIT-9041-A', group: 'O-', volume: '450 ml', daysLeft: 4, bay: 'BAY-C1-04', donor: 'D-4821 (Voluntary)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
    { id: 'UNIT-9042-B', group: 'A+', volume: '450 ml', daysLeft: 18, bay: 'BAY-A2-12', donor: 'D-3312 (Camp 14)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
    { id: 'UNIT-9043-C', group: 'B-', volume: '450 ml', daysLeft: 2, bay: 'BAY-C2-01', donor: 'D-9901 (Urgent Recall)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
    { id: 'UNIT-9044-D', group: 'O+', volume: '450 ml', daysLeft: 24, bay: 'BAY-A1-08', donor: 'D-2204 (Corporate Drive)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
    { id: 'UNIT-9045-E', group: 'AB-', volume: '350 ml', daysLeft: 1, bay: 'BAY-C3-03', donor: 'D-1198 (Voluntary)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
    { id: 'UNIT-9046-F', group: 'AB+', volume: '450 ml', daysLeft: 12, bay: 'BAY-B1-09', donor: 'D-7723 (Walk-in)', testStatus: 'VIRAL-SCREEN: NEGATIVE' },
  ];

  const filtered = sampleUnits.filter((u) => {
    if (filterRhesus === 'POSITIVE' && !u.group.includes('+')) return false;
    if (filterRhesus === 'NEGATIVE' && !u.group.includes('-')) return false;
    if (searchQuery && !u.group.toLowerCase().includes(searchQuery.toLowerCase()) && !u.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <section id="bb-interface" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#F43F5E] uppercase mb-2">
            HIGH-DENSITY USER INTERFACE DESIGN
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            TRIAGE DISPATCH CONSOLE.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Every pixel was designed for clinical light conditions: high-contrast dark palette to reduce glare during 24-hour shifts, oversized typography for blood groupings, and chromatic coding strictly reserved for urgency signals.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="Color Psychology: In clinical spaces, red means immediate hemorrhage/danger. Never use red for benign labels or decoration."
            rotation="-rotate-2"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* Interactive Mock Table Console */}
      <div className="rounded-2xl bg-[#111319] border border-white/10 overflow-hidden shadow-2xl">
        {/* Table Controls */}
        <div className="p-4 sm:p-5 bg-[#171b26] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search unit barcode or group..."
                className="pl-8 pr-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#F43F5E]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 font-mono-tech text-xs">
              {(['ALL', 'NEGATIVE', 'POSITIVE'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRhesus(r)}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    filterRhesus === r
                      ? 'bg-[#F43F5E] text-white font-bold'
                      : 'text-neutral-400 hover:text-white bg-white/5'
                  }`}
                >
                  {r === 'NEGATIVE' ? 'RH- NEGATIVE ONLY' : r === 'POSITIVE' ? 'RH+ POSITIVE ONLY' : 'ALL RH'}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-mono-tech text-neutral-400">
            SHOWING <span className="text-white font-bold">{filtered.length}</span> AUDITED UNITS
          </div>
        </div>

        {/* Table Records */}
        <div className="divide-y divide-white/5">
          {filtered.map((item) => {
            const isCritical = item.daysLeft <= 3;
            return (
              <div
                key={item.id}
                className="p-4 sm:px-6 hover:bg-white/[0.02] transition-colors flex flex-wrap items-center justify-between gap-4"
              >
                {/* Left: Blood Group Display */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-2xl font-bold ${
                      isCritical
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
                        : 'bg-[#181d29] text-white border border-white/10'
                    }`}
                  >
                    {item.group}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-xs font-bold text-white">{item.id}</span>
                      <span className="text-neutral-500">•</span>
                      <span className="font-mono-tech text-[10px] text-neutral-400">{item.bay}</span>
                    </div>
                    <div className="text-xs text-neutral-400 font-sans mt-0.5">{item.donor}</div>
                  </div>
                </div>

                {/* Center: Expiry & Shelf Life */}
                <div className="flex items-center gap-6 font-mono-tech text-xs">
                  <div>
                    <span className="text-neutral-500 block text-[10px]">VOLUME</span>
                    <span className="text-white font-bold">{item.volume}</span>
                  </div>

                  <div>
                    <span className="text-neutral-500 block text-[10px]">SHELF LIFE</span>
                    <span
                      className={`font-bold flex items-center gap-1 ${
                        isCritical ? 'text-red-400' : 'text-emerald-400'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      {item.daysLeft} DAYS LEFT
                    </span>
                  </div>

                  <div className="hidden sm:block">
                    <span className="text-neutral-500 block text-[10px]">DIAGNOSTICS</span>
                    <span className="text-neutral-300 text-[11px]">{item.testStatus}</span>
                  </div>
                </div>

                {/* Right: Dispatch Button */}
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#F43F5E] text-white text-xs font-syne font-bold uppercase transition-colors cursor-pointer flex items-center gap-1.5">
                    <span>ALLOCATE UNIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



