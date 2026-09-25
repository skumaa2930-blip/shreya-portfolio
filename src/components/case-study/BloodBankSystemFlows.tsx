import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertOctagon,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Droplet,
  Smartphone,
  Truck,
  HeartHandshake,
} from 'lucide-react';
import { StickyNote } from '../StickyNote';

export const BloodBankSystemFlows: React.FC = () => {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const flows = [
    {
      id: 'emergency-stat',
      title: 'FLOW A: CODE RED // EMERGENCY REQUISITION',
      subtitle: 'From incoming trauma ICU alert to dispatched cold-chain box in under 15 minutes',
      steps: [
        {
          stage: '01. INTENT RECEPTION',
          actor: 'Hospital Trauma Unit',
          description: 'Physician logs STAT request with 1-tap blood group selector. Cross-matching sample barcode scanned.',
          rule: 'Zero mandatory non-vital input fields allowed.',
        },
        {
          stage: '02. AUTO-ALLOCATION',
          actor: 'Blood Bank Inventory Engine',
          description: 'System checks real-time shelf stock. Locks oldest validated safe units (FIFO) with > 10 days shelf life.',
          rule: 'Universal Donor O- instantly prioritized if recipient unknown.',
        },
        {
          stage: '03. PHYSICAL AUDIT',
          actor: 'Bank Phlebotomist / Officer',
          description: 'Officer scans RFID badge of cold storage bay. Visual verification of color, hemolysis check, seal intactness.',
          rule: 'Double scan verification prevents group mix-ups.',
        },
        {
          stage: '04. DISPATCH IN TRANSIT',
          actor: 'Emergency Cold-Chain Courier',
          description: 'Units placed in temperature-monitored cooler (2°C - 6°C). GPS tracking link piped to hospital emergency ward.',
          rule: 'Live countdown timer triggers escalation if transit exceeds 30m.',
        },
      ],
    },
    {
      id: 'donor-recall',
      title: 'FLOW B: TARGETED DONOR RECALL (SHORTAGE MITIGATION)',
      subtitle: 'Preventing stockouts before emergencies strike through predictive reserve buffers',
      steps: [
        {
          stage: '01. THRESHOLD BREACH',
          actor: 'Predictive Stock Monitor',
          description: 'Rare blood type buffer (e.g. B- or O-) drops below the 3-day baseline threshold.',
          rule: 'Triggers silent alert without causing public panic.',
        },
        {
          stage: '02. PROXIMITY COHORT FILTER',
          actor: 'Donor Graph Algorithm',
          description: 'Filters registered donors: eligible date > 90 days, distance < 8km, historically reliable response score.',
          rule: 'Never spam donors who gave in the last quarter.',
        },
        {
          stage: '03. HYPER-PERSONALIZED PING',
          actor: 'SMS & WhatsApp Gateway',
          description: '"Hi Rahul, City Blood Bank is running low on your group (O-). A quick 20-min donation slot is reserved for you today at Metro Center."',
          rule: 'Direct 1-tap slot confirmation link.',
        },
        {
          stage: '04. EXPRESS INTAKE',
          actor: 'Donation Center Intake',
          description: 'Donor arrives, biometric scan pulls pre-filled questionnaire, fast-tracks vitals check to under 4 minutes.',
          rule: 'Guaranteed zero queue for emergency recall donors.',
        },
      ],
    },
  ];

  const currentFlow = flows[activeFlowIndex];

  return (
    <section id="bb-flows" className="py-24 px-3.5 sm:px-6 md:px-8 max-w-[1340px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-syne text-xs font-bold tracking-widest text-[#F43F5E] uppercase mb-2">
            CRITICAL WORKFLOW DESIGN // ZERO FRICTION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight">
            FAIL-SAFE INTERACTION FLOWS.
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            High stress and cognitive exhaustion lead to fatal medical errors. We designed every flow with high visual confirmation, automated fallback paths, and clear physical accountability.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-black/60 border border-white/10 shrink-0">
          {flows.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setActiveFlowIndex(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-syne font-bold uppercase transition-all cursor-pointer ${
                activeFlowIndex === idx
                  ? 'bg-[#F43F5E] text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {idx === 0 ? 'EMERGENCY STAT' : 'PREDICTIVE RECALL'}
            </button>
          ))}
        </div>
      </div>

      {/* Active Flow Timeline */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="font-mono-tech text-xs text-[#F43F5E] uppercase font-bold">
              SCENARIO ARCHITECTURE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mt-0.5">
              {currentFlow.title}
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-1">
              {currentFlow.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentFlow.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#171b26] border border-white/5 flex flex-col justify-between relative group hover:border-[#F43F5E]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono-tech text-xs mb-3">
                  <span className="text-[#F43F5E] font-bold">{step.stage}</span>
                  <span className="text-neutral-500">STEP 0{idx + 1}</span>
                </div>
                <div className="font-syne text-xs font-bold uppercase text-white tracking-wider mb-2">
                  {step.actor}
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono-tech text-amber-300">
                <span className="text-neutral-400 block text-[9px] uppercase">SAFETY GUARDRAIL:</span>
                {step.rule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



