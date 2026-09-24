import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Droplet,
  Heart,
  AlertOctagon,
  Clock,
  ShieldAlert,
  ArrowRight,
  Database,
  Building2,
  Users,
  Activity,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const BloodBankHero: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('O-');
  const [activeTab, setActiveTab] = useState<'cockpit' | 'breakdown'>('cockpit');

  const bloodInventory = [
    { type: 'O-', units: 48, status: 'critical', days: 3.2, compatibility: 'Universal Donor' },
    { type: 'O+', units: 210, status: 'stable', days: 14.5, compatibility: 'Can donate to O+, A+, B+, AB+' },
    { type: 'A-', units: 32, status: 'warning', days: 4.8, compatibility: 'Can donate to A-, A+, AB-, AB+' },
    { type: 'A+', units: 145, status: 'stable', days: 11.2, compatibility: 'Can donate to A+, AB+' },
    { type: 'B-', units: 19, status: 'critical', days: 2.1, compatibility: 'Can donate to B-, B+, AB-, AB+' },
    { type: 'B+', units: 88, status: 'stable', days: 8.9, compatibility: 'Can donate to B+, AB+' },
    { type: 'AB-', units: 14, status: 'critical', days: 1.8, compatibility: 'Rare negative' },
    { type: 'AB+', units: 64, status: 'stable', days: 7.4, compatibility: 'Universal Recipient' },
  ];

  const currentItem = bloodInventory.find((b) => b.type === selectedGroup) || bloodInventory[0];

  return (
    <section id="bb-context" className="pt-28 sm:pt-36 pb-20 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto">
      {/* Meta Top Tag */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-syne font-bold uppercase tracking-widest text-[#F43F5E]">
          <span className="px-2.5 py-1 rounded-md bg-[#F43F5E]/10 border border-[#F43F5E]/25">
            PROJECT 02
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-300">CRITICAL HEALTHCARE SYSTEM · OOUX · UX ARCHITECTURE</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">RESEARCH & SYSTEM SPEC</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-syne font-bold text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-[#F43F5E] animate-ping" />
          <span>LIFE-CRITICAL DISPATCH OS</span>
        </div>
      </div>

      {/* Main Title & Handwritten Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-white uppercase tracking-tight leading-[0.88] select-none">
            BLOOD BANK<span className="text-[#F43F5E]">.</span>
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono-tech text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
              OBJECT-ORIENTED UX ARCHITECTURE //
            </span>
            <span className="font-caveat font-handwriting text-2xl sm:text-3xl text-[#F43F5E]">
              designed for zero ambiguity in emergency triage.
            </span>
          </div>

          <p className="mt-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
            In medical emergencies, every second lost deciphering mismatched records or ambiguous blood stock counts carries direct consequences. This case study maps out an end-to-end Object-Oriented UX architecture connecting emergency donors, donation drives, cold-chain live inventory, and multi-hospital urgency pipelines into a fail-safe, empathetic interface.
          </p>
        </div>

        {/* Sticky Note on right side */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
          <div className="w-64 sm:w-72">
            <StickyNote
              text="4 major objects. 14 core relationships. 0 room for visual ambiguity when a trauma unit calls at 3:15 AM."
              rotation="-rotate-2"
              tapePosition="top"
              variant="yellow"
            />
          </div>
        </div>
      </div>

      {/* Interactive System Cockpit Display */}
      <div className="rounded-2xl bg-[#111318] border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Cockpit Window Bar */}
        <div className="px-5 py-3.5 bg-[#171a22] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-neutral-400">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E]" />
            <span className="text-white font-bold tracking-wider">LIVE INVENTORY & EMERGENCY DISPATCH CONSOLE</span>
            <span className="text-neutral-500">|</span>
            <span className="text-[#F43F5E] bg-[#F43F5E]/10 px-2 py-0.5 rounded text-[10px] font-bold">
              3 EMERGENCY MATCHES ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('cockpit')}
              className={`px-3 py-1 rounded text-xs font-syne font-bold uppercase transition-all ${
                activeTab === 'cockpit'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              INVENTORY MATRIX
            </button>
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-3 py-1 rounded text-xs font-syne font-bold uppercase transition-all ${
                activeTab === 'breakdown'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              EMERGENCY QUEUE
            </button>
          </div>
        </div>

        {/* Cockpit Content */}
        <div className="p-5 sm:p-7">
          {activeTab === 'cockpit' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left 8 Cols: Blood Type Grid */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 pb-2 border-b border-white/10">
                  <span>SELECT BLOOD GROUP TO AUDIT BUFFER</span>
                  <span className="text-neutral-500">CLICK TO INSPECT COMPATIBILITY</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bloodInventory.map((item) => {
                    const isSelected = selectedGroup === item.type;
                    const isCritical = item.status === 'critical';
                    const isWarn = item.status === 'warning';

                    return (
                      <button
                        key={item.type}
                        onClick={() => setSelectedGroup(item.type)}
                        className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? 'bg-[#1e2330] border-[#F43F5E] shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                            : 'bg-[#141822] border-white/5 hover:border-white/20 hover:bg-[#181c28]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-2xl font-bold text-white">{item.type}</span>
                          <span
                            className={`text-[9px] font-mono-tech px-1.5 py-0.5 rounded font-bold uppercase ${
                              isCritical
                                ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                                : isWarn
                                ? 'bg-amber-500/20 text-amber-300'
                                : 'bg-emerald-500/20 text-emerald-300'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <div className="mt-3">
                          <div className="font-mono-tech text-xl font-bold text-neutral-100">
                            {item.units} <span className="text-xs font-normal text-neutral-400">units</span>
                          </div>
                          <div className="text-[11px] font-mono-tech text-neutral-400 mt-1">
                            {item.days} days reserve
                          </div>
                        </div>

                        {/* Visual fill bar */}
                        <div className="w-full h-1.5 bg-black/50 rounded-full mt-2.5 overflow-hidden">
                          <div
                            style={{ width: `${Math.min(100, (item.units / 220) * 100)}%` }}
                            className={`h-full ${
                              isCritical ? 'bg-red-500' : isWarn ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Group Quick Detail Card */}
                <div className="p-4 rounded-xl bg-[#151922] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-xs text-[#F43F5E] uppercase font-bold">
                        AUDITING GROUP: {currentItem.type}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-xs text-neutral-300">{currentItem.compatibility}</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-sans mt-1">
                      Minimum threshold for safe regional coverage is 30 units. Immediate donor notification auto-triggered when reserve drops below 3.0 days.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button className="px-3 py-1.5 rounded-lg bg-[#F43F5E] text-white font-syne text-xs font-bold uppercase hover:bg-[#e11d48] transition-colors cursor-pointer flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5" />
                      <span>Alert {currentItem.type} Donors</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Triage Live Statistics */}
              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-mono-tech">
                    <span className="uppercase">Trauma Units Connected</span>
                    <Building2 className="w-4 h-4 text-neutral-400" />
                  </div>
                  <div className="font-display text-3xl font-bold text-white mt-1">14 Hospitals</div>
                  <div className="text-[11px] text-emerald-400 font-mono-tech mt-1">
                    ● Real-time stock telemetry synced
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-mono-tech">
                    <span className="uppercase">Donation Camps Active</span>
                    <Calendar className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <div className="font-display text-3xl font-bold text-[#ccff00] mt-1">04 Drives</div>
                  <div className="text-[11px] text-neutral-400 font-mono-tech mt-1">
                    Est. 280 units projected intake today
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-mono-tech">
                    <span className="uppercase">Average Fulfillment Latency</span>
                    <Clock className="w-4 h-4 text-[#F43F5E]" />
                  </div>
                  <div className="font-display text-3xl font-bold text-neutral-100 mt-1">18.4 Mins</div>
                  <div className="text-[11px] text-emerald-400 font-mono-tech mt-1">
                    ▼ 42% reduction from manual phone calls
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Emergency Requests Queue view */
            <div className="flex flex-col gap-3">
              <div className="text-xs font-mono-tech text-neutral-400 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>PRIORITY DISPATCH PIPELINE</span>
                <span className="text-[#F43F5E]">3 URGENT REQUISITIONS</span>
              </div>

              {[
                {
                  id: 'REQ-8821',
                  hospital: 'Memorial Trauma Center ICU',
                  urgency: 'STAT / SURGICAL',
                  blood: 'O-',
                  units: '4 Units',
                  eta: '12 mins',
                  status: 'DISPATCHED',
                  statusColor: 'text-emerald-400 bg-emerald-500/10',
                },
                {
                  id: 'REQ-8822',
                  hospital: 'Metro General Maternity Ward',
                  urgency: 'URGENT',
                  blood: 'B+',
                  units: '2 Units',
                  eta: '25 mins',
                  status: 'PACKAGING COLD-CHAIN',
                  statusColor: 'text-amber-300 bg-amber-500/10',
                },
                {
                  id: 'REQ-8823',
                  hospital: 'St. Jude Pediatric Oncology',
                  urgency: 'SCHEDULED',
                  blood: 'A+',
                  units: '1 Unit Platelets',
                  eta: '2 hrs',
                  status: 'CROSS-MATCH COMPLETED',
                  statusColor: 'text-neutral-300 bg-white/5',
                },
              ].map((req) => (
                <div
                  key={req.id}
                  className="p-4 rounded-xl bg-[#141822] border border-white/5 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center font-display text-lg font-bold text-[#F43F5E]">
                      {req.blood}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-xs font-bold text-white">{req.id}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="font-mono-tech text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                          {req.urgency}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-300 font-sans mt-0.5">{req.hospital}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono-tech">
                    <div>
                      <div className="text-neutral-400 text-[10px]">QUANTITY</div>
                      <div className="text-white font-bold">{req.units}</div>
                    </div>
                    <div>
                      <div className="text-neutral-400 text-[10px]">TRANSIT ETA</div>
                      <div className="text-[#ccff00] font-bold">{req.eta}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold ${req.statusColor}`}>
                      {req.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

