import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Droplet,
  AlertTriangle,
  Calendar,
  Users,
  Building2,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const BloodBankWidget: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const bloodStock = [
    { type: 'A+', units: 120, status: 'stable' },
    { type: 'B+', units: 85, status: 'stable' },
    { type: 'AB+', units: 42, status: 'medium' },
    { type: 'O+', units: 210, status: 'stable' },
    { type: 'A-', units: 30, status: 'medium' },
    { type: 'B-', units: 18, status: 'critical' },
    { type: 'AB-', units: 12, status: 'critical' },
    { type: 'O-', units: 45, status: 'medium' },
  ];

  const requests = [
    { id: 'RQ1234', hospital: 'City Memorial', type: 'O+', bags: '2 Bags', status: 'PENDING' },
    { id: 'RQ1235', hospital: 'Red Cross Center', type: 'A+', bags: '1 Bag', status: 'APPROVED' },
    { id: 'RQ1236', hospital: 'Sunrise Hospital', type: 'B+', bags: '2 Bags', status: 'PENDING' },
  ];

  return (
    <div className="w-full rounded-xl bg-[#0f1115] border border-white/10 overflow-hidden shadow-2xl text-white font-sans text-xs">
      {/* Top System Header */}
      <div className="px-4 py-2.5 bg-[#161a22] border-b border-white/10 flex items-center justify-between font-mono-tech text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <Droplet className="w-4 h-4 text-red-500 fill-red-500" />
          <span className="text-white font-bold tracking-wider">Blood Bank Management V2.1</span>
          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">
            ● LIVE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-400">Officer:</span>
          <span className="text-white font-bold">Dr. Shreya</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-4">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-lg bg-[#141820] border border-white/5">
            <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">Total Donors</div>
            <div className="text-xl font-bold font-mono-tech mt-1 text-white">1,248</div>
            <div className="text-[10px] font-mono-tech text-emerald-400 mt-0.5">▲ 12 this month</div>
          </div>

          <div className="p-3 rounded-lg bg-[#141820] border border-white/5">
            <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">Units in Stock</div>
            <div className="text-xl font-bold font-mono-tech mt-1 text-white">932</div>
            <div className="text-[10px] font-mono-tech text-emerald-400 mt-0.5">▲ 24 this week</div>
          </div>

          <div className="p-3 rounded-lg bg-[#141820] border border-white/5">
            <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">Urgent Requests</div>
            <div className="text-xl font-bold font-mono-tech mt-1 text-red-400">18</div>
            <div className="text-[10px] font-mono-tech text-red-400/80 mt-0.5">CRITICAL &lt; 30 UNITS</div>
          </div>

          <div className="p-3 rounded-lg bg-[#141820] border border-white/5">
            <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">Camps This Month</div>
            <div className="text-xl font-bold font-mono-tech mt-1 text-[#ccff00]">06</div>
            <div className="text-[10px] font-mono-tech text-neutral-400 mt-0.5">3 completed</div>
          </div>
        </div>

        {/* Middle: Blood Stock Inventory Graphic */}
        <div className="p-3.5 rounded-lg bg-[#141820] border border-white/5">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3 font-mono-tech text-[11px]">
            <span className="text-neutral-200 uppercase tracking-wider font-bold">BLOOD STOCK INVENTORY</span>
            <span className="text-red-400 text-[10px]">CRITICAL LEVEL: &lt; 30 UNITS</span>
          </div>

          {/* Bar Chart representing inventory */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 items-end pt-2">
            {bloodStock.map((item) => {
              const heightPercent = Math.min(100, Math.max(15, (item.units / 220) * 100));
              const isCritical = item.units < 30;
              const isSelected = selectedGroup === item.type;

              return (
                <button
                  key={item.type}
                  onClick={() => setSelectedGroup(isSelected ? null : item.type)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded transition-all cursor-pointer ${
                    isSelected ? 'bg-white/10 ring-1 ring-[#ccff00]' : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] font-mono-tech text-neutral-400">{item.units}</span>
                  <div className="w-full h-20 flex items-end justify-center bg-black/40 rounded-sm p-1">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-xs transition-all ${
                        isCritical
                          ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                          : item.units < 60
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                      }`}
                    />
                  </div>
                  <span
                    className={`font-mono-tech text-xs font-bold ${
                      isCritical ? 'text-red-400' : 'text-white'
                    }`}
                  >
                    {item.type}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Split: Recent Hospital Dispatch Requests & Upcoming Camp */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Recent Hospital Dispatch */}
          <div className="sm:col-span-7 p-3 rounded-lg bg-[#141820] border border-white/5">
            <div className="font-mono-tech text-[11px] text-neutral-300 uppercase tracking-wider mb-2">
              Recent Hospital Dispatch Requests
            </div>
            <div className="space-y-1.5">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center justify-between p-2 rounded bg-black/30 border border-white/5 text-[11px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-[#ccff00] font-bold">{req.id}</span>
                    <span className="text-neutral-300 truncate max-w-[120px] sm:max-w-none">
                      {req.hospital}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-red-400 font-bold">{req.type}</span>
                    <span className="text-neutral-400 text-[10px]">{req.bags}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] font-mono-tech font-bold ${
                        req.status === 'APPROVED'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Camp Card */}
          <div className="sm:col-span-5 p-3 rounded-lg bg-gradient-to-br from-[#1b2230] to-[#121620] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 font-mono-tech text-[10px] text-[#ccff00] uppercase tracking-wider mb-1">
                <Calendar className="w-3 h-3" />
                <span>UPCOMING CAMP</span>
              </div>
              <h5 className="font-bold text-sm text-white mt-1">Nashik City Drive</h5>
              <p className="text-neutral-400 text-[11px] mt-0.5">20 Aug, 2024 • 10:00 AM</p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10">
              <button
                onClick={() => {}}
                className="flex items-center justify-between w-full text-left font-mono-tech text-[10px] text-[#ccff00] hover:underline cursor-pointer"
              >
                <span>VIEW DRIVE LOGISTICS</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info line */}
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 pt-2 border-t border-white/5">
          <span>OOUX DIAGRAM: CORE OBJECT CARDS</span>
          <span>RELATIONSHIP DENSITY: HIGH</span>
        </div>
      </div>
    </div>
  );
};


