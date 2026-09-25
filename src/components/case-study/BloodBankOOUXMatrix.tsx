import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Boxes,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Check,
  AlertTriangle,
  Users,
  Building2,
  Calendar,
  Layers,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const BloodBankOOUXMatrix: React.FC = () => {
  const [selectedObject, setSelectedObject] = useState<string>('blood_unit');

  const objects = [
    {
      id: 'blood_unit',
      name: '01. BLOOD UNIT / INVENTORY',
      role: 'Core Physical Commodity',
      coreAttributes: ['Unit ID', 'Blood Group & Rh', 'Volume (ml)', 'Component (RBC/Platelets)', 'Collection Date', 'Expiry Date (35-42 days)', 'Cold Storage Bay'],
      relationships: [
        { target: 'Donor', rel: 'Donated by exactly 1 verified donor' },
        { target: 'Camp / Center', rel: 'Collected at 1 Drive or Central Lab' },
        { target: 'Emergency Request', rel: 'Allocated to 0 or 1 Hospital Requisition' },
        { target: 'Lab Test', rel: 'Validated by 5 mandatory viral marker tests' },
      ],
      ctaAction: 'Audit Shelf-life, Flag Expiry, Dispatch Batch',
    },
    {
      id: 'donor',
      name: '02. VOLUNTARY DONOR',
      role: 'Human Life Supply Agent',
      coreAttributes: ['Donor ID', 'Blood Type', 'Eligibility Window (90 days)', 'Hemoglobin Level', 'Contact & Locality', 'Donation History', 'Badge Level'],
      relationships: [
        { target: 'Blood Unit', rel: 'Has authored 1..N historical blood units' },
        { target: 'Camp', rel: 'Registered for upcoming neighborhood camp' },
        { target: 'Emergency Alert', rel: 'Pings if proximity < 5km & blood type matches urgent trauma' },
      ],
      ctaAction: 'Schedule Slot, Send Critical Shortage SMS, Defer Donor',
    },
    {
      id: 'request',
      name: '03. HOSPITAL REQUISITION',
      role: 'Emergency Demand Trigger',
      coreAttributes: ['Requisition ID', 'Requesting Hospital', 'Patient ID (Anonymized)', 'Urgency Tier (STAT / Urgent / Routine)', 'Required Group', 'Cross-match Sample'],
      relationships: [
        { target: 'Blood Unit', rel: 'Requires 1..N verified compatible units' },
        { target: 'Hospital / Officer', rel: 'Signed off by verified medical practitioner' },
        { target: 'Courier / Cold Box', rel: 'Assigned cold-chain seal & real-time transit tracker' },
      ],
      ctaAction: 'Cross-match Verify, Auto-Reserve Stock, Authorize Transit',
    },
    {
      id: 'camp',
      name: '04. DONATION DRIVE / CAMP',
      role: 'Community Aggregation Event',
      coreAttributes: ['Camp ID', 'Partner NGO / Corporate', 'Location & Geofence', 'Date & Duration', 'Target Units (e.g. 150)', 'Assigned Phlebotomists'],
      relationships: [
        { target: 'Donor', rel: 'Attracts 50..500 regional donors' },
        { target: 'Blood Unit', rel: 'Yields batch of un-tested units for intake processing' },
      ],
      ctaAction: 'Forecast Camp Yield, Allocate Phlebotomy Kits, Publish Drive',
    },
  ];

  const current = objects.find((o) => o.id === selectedObject) || objects[0];

  return (
    <section id="bb-ooux" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#F43F5E] uppercase mb-2">
            OBJECT-ORIENTED ARCHITECTURE // OOUX
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            DECONSTRUCTING THE DOMAIN.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Before sketching wireframes, we mapped the raw mental model of a blood bank. Traditional systems fail because they treat everything as disconnected tabular database rows instead of interconnected real-world entities.
          </p>
        </div>

        <div className="w-64 shrink-0">
          <StickyNote
            text="OOUX Rule: An object's actions must mirror real-life clinical affordances. Don't make doctors hunt through nested menus."
            rotation="rotate-2"
            tapePosition="top"
            variant="yellow"
          />
        </div>
      </div>

      {/* Interactive Object Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Object Selector List */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          <div className="font-mono-tech text-xs text-neutral-400 uppercase tracking-wider mb-1">
            CORE SYSTEM ENTITIES (ORCA MODEL)
          </div>
          {objects.map((obj) => {
            const isSelected = selectedObject === obj.id;
            return (
              <button
                key={obj.id}
                onClick={() => setSelectedObject(obj.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-[#181b24] border-[#F43F5E] shadow-[0_0_24px_rgba(244,63,94,0.2)]'
                    : 'bg-[#111319] border-white/5 hover:border-white/20 hover:bg-[#141720]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-syne text-xs font-bold uppercase tracking-wider text-white">
                    {obj.name}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#F43F5E]" />}
                </div>
                <span className="text-xs text-neutral-400 font-sans">{obj.role}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Entity Blueprint Detail Card */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#13161f] border border-white/10 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono-tech text-xs text-[#F43F5E] uppercase tracking-wider">
                  OBJECT DEFINITION SPEC
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mt-0.5">
                  {current.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-neutral-300">
                ROLE: {current.role}
              </span>
            </div>

            {/* Core Attributes */}
            <div className="mt-6">
              <div className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider mb-2.5">
                INTRINSIC ATTRIBUTES & METADATA
              </div>
              <div className="flex flex-wrap gap-2">
                {current.coreAttributes.map((attr, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-xs font-mono-tech text-neutral-200"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Relationships */}
            <div className="mt-6">
              <div className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider mb-2.5">
                CROSS-OBJECT RELATIONSHIPS (CARDINALITY)
              </div>
              <div className="flex flex-col gap-2">
                {current.relationships.map((rel, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#181d28] border border-white/5 flex items-start sm:items-center gap-3 text-xs"
                  >
                    <GitBranch className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5 sm:mt-0" />
                    <span className="font-bold text-white font-mono-tech">{rel.target}:</span>
                    <span className="text-neutral-300 font-sans">{rel.rel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Affordance Callout */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono-tech text-neutral-400">
              <span className="text-white font-bold uppercase">PRIMARY AFFORDANCE:</span> {current.ctaAction}
            </div>
            <div className="text-[11px] font-mono-tech text-emerald-400">
              ✓ ZERO-NESTED NAVIGATION RULE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



