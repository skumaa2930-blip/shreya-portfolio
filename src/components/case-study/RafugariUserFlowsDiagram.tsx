import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface UserFlowsProps {
  className?: string;
}

export const RafugariUserFlowsDiagram: React.FC<UserFlowsProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'rafugar' | 'customer'>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(65);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {/* Control bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-dm-serif text-[clamp(24px,3vw,38px)] leading-[1.05] text-[#efe9db]">
            User Flow
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 self-end sm:self-auto">
          {/* Tab Selector */}
          <div className="flex items-center bg-[#18181e] border border-white/10 rounded-full p-1 text-xs font-mono">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#c9f14a] text-black font-semibold shadow-sm'
                  : 'text-[#a29d90] hover:text-[#efe9db]'
              }`}
            >
              Both Flows
            </button>
            <button
              onClick={() => setActiveTab('rafugar')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'rafugar'
                  ? 'bg-[#d8a878] text-black font-semibold shadow-sm'
                  : 'text-[#a29d90] hover:text-[#efe9db]'
              }`}
            >
              Rafugar Flow
            </button>
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'customer'
                  ? 'bg-[#73b3e6] text-black font-semibold shadow-sm'
                  : 'text-[#a29d90] hover:text-[#efe9db]'
              }`}
            >
              Customer Flow
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-[#18181e] border border-white/10 rounded-full p-1 shadow-lg select-none">
            <button
              onClick={() => setZoomLevel((z) => Math.max(35, z - 15))}
              disabled={zoomLevel <= 35}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/10 hover:text-[#c9f14a] disabled:opacity-30 transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setZoomLevel(65)}
              className="px-2 py-0.5 rounded-full text-xs font-mono font-semibold text-[#c9f14a] hover:bg-white/10 transition-colors cursor-pointer"
              title="Reset Zoom"
            >
              {zoomLevel}%
            </button>

            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 15))}
              disabled={zoomLevel >= 150}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#efe9db] hover:bg-white/10 hover:text-[#c9f14a] disabled:opacity-30 transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>

            <div className="w-[1px] h-3.5 bg-white/15 mx-0.5" />

            <button
              onClick={() => setZoomLevel(65)}
              className="p-1 rounded-full text-[#a29d90] hover:text-[#efe9db] hover:bg-white/10 transition-colors cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Diagram Canvas Container (Matches Information Architecture Board Size & Styling) */}
      <div
        className="w-full h-[380px] sm:h-[540px] rounded-2xl md:rounded-3xl border border-[rgba(239,233,219,0.18)] bg-[#141418] shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-x-auto overflow-y-auto p-4 sm:p-8 md:p-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent select-none relative"
        style={{
          backgroundImage: 'radial-gradient(rgba(239, 233, 219, 0.16) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div
          className="transition-transform duration-200 ease-out origin-top-left flex flex-col gap-16 py-4"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            minWidth: '2720px',
          }}
        >
          {/* ============================================================
              1. RAFUGAR WORKBENCH USER FLOW
             ============================================================ */}
          {(activeTab === 'all' || activeTab === 'rafugar') && (
            <div className="flex flex-col">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#d8a878] ring-4 ring-[#d8a878]/20" />
                <span className="font-mono text-xs font-bold text-[#d8a878] uppercase tracking-wider">
                  FLOW 01 · RAFUGAR EXPERIENCE (JOB INTAKE, DIAGNOSIS, STATUS &amp; SHOWCASE)
                </span>
              </div>

              {/* Rafugar Flow SVG Canvas */}
              <div className="relative bg-[#19191e]/60 p-8 rounded-2xl border border-white/5 shadow-inner">
                <svg
                  viewBox="0 0 2700 580"
                  className="w-full h-auto select-none font-sans"
                  style={{ minWidth: '2640px', minHeight: '560px' }}
                >
                  <defs>
                    {/* Arrowhead Markers */}
                    <marker
                      id="rf-arrow-tan"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9e663a" />
                    </marker>

                    <marker
                      id="rf-arrow-green"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#22c55e" />
                    </marker>

                    <marker
                      id="rf-arrow-red"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444" />
                    </marker>

                    <marker
                      id="rf-arrow-cyan"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7" />
                    </marker>

                    <marker
                      id="rf-arrow-purple"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9333ea" />
                    </marker>

                    {/* Node Drop Shadow */}
                    <filter id="rf-shadow" x="-5%" y="-10%" width="112%" height="130%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  {/* ========================================================
                      TOP PROFILE SUB-FLOW CONNECTOR LINES
                     ======================================================== */}
                  {/* From PROFILE tab to Name, Location... */}
                  <path
                    d="M 1485,42 L 1515,42 Q 1525,42 1525,32 L 1525,22 Q 1525,12 1535,12 L 1550,12"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* From PROFILE tab to Repair History */}
                  <path
                    d="M 1485,42 L 1515,42 Q 1525,42 1525,62 L 1525,82 Q 1525,92 1535,92 L 1550,92"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* From Repair History to Completed Repairs */}
                  <path
                    d="M 1670,92 L 1730,92"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* From Completed Repairs to Diamond Add to Show... */}
                  <path
                    d="M 1850,92 L 1910,92"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* From Diamond to Stays private (no - red) */}
                  <path
                    d="M 2000,92 L 2130,92"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-red)"
                  />
                  {/* From Diamond to Take Final Repair Photo (yes - green) */}
                  <path
                    d="M 1955,122 L 1955,160 Q 1955,170 1965,170 L 2140,170"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-green)"
                  />
                  {/* From Stays private to Public Work Gallery across top */}
                  <path
                    d="M 2250,92 L 2615,92 Q 2625,92 2625,102 L 2625,115"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* ========================================================
                      MAIN LINE CONNECTORS (LEFT TO RIGHT)
                     ======================================================== */}
                  {/* Rafugar opens app -> HOME tab */}
                  <path
                    d="M 120,280 L 180,280"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* HOME tab -> Tap NEW JOB (top fork) */}
                  <path
                    d="M 290,280 L 320,280 Q 330,280 330,268 L 330,230 Q 330,220 340,220 L 360,220"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* HOME tab -> JOBS tab (bottom fork) */}
                  <path
                    d="M 290,280 L 320,280 Q 330,280 330,292 L 330,300 L 830,300 Q 840,300 840,305 L 840,310"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* Tap NEW JOB sequence */}
                  {/* -> Garment photo */}
                  <path
                    d="M 480,220 L 540,220"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* -> Customer details */}
                  <path
                    d="M 660,220 L 720,220"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* -> Repair details */}
                  <path
                    d="M 850,220 L 910,220"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* -> View Job */}
                  <path
                    d="M 1030,220 L 1090,220"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* View Job -> Garment Details block */}
                  <path
                    d="M 1200,220 L 1235,220 Q 1245,220 1245,232 L 1245,248 Q 1245,255 1255,255 L 1270,255"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* JOBS tab -> Filter by status */}
                  <path
                    d="M 960,310 L 1020,310"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* Filter by status -> Garment Details block */}
                  <path
                    d="M 1140,310 L 1235,310 Q 1245,310 1245,278 L 1245,262 Q 1245,255 1255,255 L 1270,255"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* Garment Details block -> Diamond Mark the st... */}
                  <path
                    d="M 1390,255 L 1450,255"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* ========================================================
                      STATUS DECISION BRANCHES FROM DIAMOND "Mark the st..."
                     ======================================================== */}
                  {/* 1. Branch: In Progress */}
                  <path
                    d="M 1495,225 L 1495,160 Q 1495,150 1505,150 L 1690,150"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* 2. Branch: Ready */}
                  <path
                    d="M 1540,255 L 1690,255"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* 3. Branch: Collected */}
                  <path
                    d="M 1495,285 L 1495,360 Q 1495,370 1505,370 L 1690,370"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* From Status set to Ready -> Send ready message & Add to Show... */}
                  <path
                    d="M 1810,255 L 1835,255 Q 1845,255 1845,245 L 1845,205 Q 1845,195 1855,195 L 1870,195"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  <path
                    d="M 1810,255 L 1835,255 Q 1845,255 1845,265 L 1845,275 Q 1845,285 1855,285 L 1870,285"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* From Diamond Add to Show... (Bottom) -> yes (Green) -> Take Final Repair Photo */}
                  <path
                    d="M 1960,285 L 2040,285 Q 2050,285 2050,235 L 2050,185 Q 2050,170 2060,170 L 2140,170"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-green)"
                  />

                  {/* From Diamond Add to Show... (Bottom) -> no (Red) -> Stays in Repair History */}
                  <path
                    d="M 1915,315 L 1915,330 Q 1915,340 1925,340 L 2130,340"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-red)"
                  />

                  {/* From Status set to Collected -> Stays in Repair History */}
                  <path
                    d="M 1810,370 L 2040,370 Q 2050,370 2050,355 L 2050,345 Q 2050,340 2060,340 L 2130,340"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* ========================================================
                      SHOWCASE FINAL FLOW (Take Final Photo -> Add Label -> Add -> Public Gallery)
                     ======================================================== */}
                  {/* Take Final Repair Photo -> Add Repair Label */}
                  <path
                    d="M 2260,170 L 2320,170"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* Add Repair Label -> Add */}
                  <path
                    d="M 2450,170 L 2510,170"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />
                  {/* Add -> Public Work Gallery */}
                  <path
                    d="M 2570,170 L 2615,170 Q 2625,170 2625,160 L 2625,150"
                    fill="none"
                    stroke="#9e663a"
                    strokeWidth="1.8"
                    markerEnd="url(#rf-arrow-tan)"
                  />

                  {/* ========================================================
                      TEXT LABELS ON BRANCH ARROWS
                     ======================================================== */}
                  {/* Branch label: In Progress */}
                  <text x="1590" y="142" fill="#d8a878" fontSize="11" fontWeight="600" fontStyle="italic">
                    In Progress
                  </text>

                  {/* Branch label: Ready */}
                  <text x="1620" y="247" fill="#d8a878" fontSize="11" fontWeight="600" fontStyle="italic">
                    Ready
                  </text>

                  {/* Branch label: Collected */}
                  <text x="1590" y="362" fill="#d8a878" fontSize="11" fontWeight="600" fontStyle="italic">
                    Collected
                  </text>

                  {/* Decision labels: Top Diamond Add to Show... */}
                  <text x="2045" y="85" fill="#ef4444" fontSize="11" fontWeight="700">
                    no
                  </text>
                  <text x="1970" y="155" fill="#22c55e" fontSize="11" fontWeight="700">
                    yes
                  </text>

                  {/* Decision labels: Bottom Diamond Add to Show... */}
                  <text x="2005" y="235" fill="#22c55e" fontSize="11" fontWeight="700">
                    yes
                  </text>
                  <text x="1940" y="333" fill="#ef4444" fontSize="11" fontWeight="700">
                    no
                  </text>

                  {/* ========================================================
                      NODE RENDERING (CARDS, PILLS & DECISION DIAMONDS)
                     ======================================================== */}
                  {/* START PILL: Rafugar opens app */}
                  <g filter="url(#rf-shadow)">
                    <rect x="10" y="258" width="110" height="44" rx="22" fill="#e8eaed" stroke="#9aa0a6" strokeWidth="1.5" />
                    <text x="65" y="278" textAnchor="middle" fill="#202124" fontSize="10.5" fontWeight="500">
                      Rafugar opens
                    </text>
                    <text x="65" y="292" textAnchor="middle" fill="#202124" fontSize="10.5" fontWeight="500">
                      app
                    </text>
                  </g>

                  {/* HOME tab */}
                  <g filter="url(#rf-shadow)">
                    <rect x="180" y="258" width="110" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="235" y="285" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="600">
                      HOME tab
                    </text>
                  </g>

                  {/* Tap NEW JOB sequence */}
                  <g filter="url(#rf-shadow)">
                    {/* Tap NEW JOB */}
                    <rect x="360" y="198" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="420" y="225" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Tap NEW JOB
                    </text>

                    {/* Garment photo */}
                    <rect x="540" y="198" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="600" y="225" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Garment photo
                    </text>

                    {/* Customer details */}
                    <rect x="720" y="198" width="130" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="785" y="225" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Customer details
                    </text>

                    {/* Repair details */}
                    <rect x="910" y="198" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="970" y="225" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Repair details
                    </text>

                    {/* View Job */}
                    <rect x="1090" y="198" width="110" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1145" y="225" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      View Job
                    </text>

                    {/* JOBS tab */}
                    <rect x="850" y="288" width="110" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="905" y="315" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="600">
                      JOBS tab
                    </text>

                    {/* Filter by status... */}
                    <rect x="1020" y="280" width="120" height="60" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1080" y="299" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      Filter by status -
                    </text>
                    <text x="1080" y="313" textAnchor="middle" fill="#2c1a0e" fontSize="9.5" fontWeight="500">
                      Received, In
                    </text>
                    <text x="1080" y="327" textAnchor="middle" fill="#2c1a0e" fontSize="9.5" fontWeight="500">
                      Progress, Ready,
                    </text>
                    <text x="1080" y="339" textAnchor="middle" fill="#2c1a0e" fontSize="9.5" fontWeight="500">
                      Collected
                    </text>

                    {/* Garment Details block */}
                    <rect x="1270" y="233" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1330" y="252" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Garment Details
                    </text>
                    <text x="1330" y="266" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      block - photo,...
                    </text>
                  </g>

                  {/* DECISION DIAMOND: Mark the st... */}
                  <g filter="url(#rf-shadow)">
                    <polygon
                      points="1495,225 1540,255 1495,285 1450,255"
                      fill="#e0f2fe"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                    />
                    <text x="1495" y="252" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      Mark
                    </text>
                    <text x="1495" y="264" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      the st...
                    </text>
                  </g>

                  {/* Status Outcome Boxes */}
                  <g filter="url(#rf-shadow)">
                    {/* Status set to In Progress */}
                    <rect x="1690" y="128" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1750" y="148" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Status set to In
                    </text>
                    <text x="1750" y="162" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Progress
                    </text>

                    {/* Status set to Ready */}
                    <rect x="1690" y="233" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1750" y="253" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Status set to
                    </text>
                    <text x="1750" y="267" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Ready
                    </text>

                    {/* Status set to Collected */}
                    <rect x="1690" y="348" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1750" y="368" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Status set to
                    </text>
                    <text x="1750" y="382" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Collected
                    </text>

                    {/* PURPLE BOX: Send ready message */}
                    <rect x="1870" y="173" width="120" height="44" rx="8" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1.5" />
                    <text x="1930" y="193" textAnchor="middle" fill="#4c1d95" fontSize="10.5" fontWeight="600">
                      Send ready
                    </text>
                    <text x="1930" y="207" textAnchor="middle" fill="#4c1d95" fontSize="10.5" fontWeight="600">
                      message
                    </text>
                  </g>

                  {/* DECISION DIAMOND (BOTTOM): Add to Show... */}
                  <g filter="url(#rf-shadow)">
                    <polygon
                      points="1915,255 1960,285 1915,315 1870,285"
                      fill="#e0f2fe"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                    />
                    <text x="1915" y="282" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      Add to
                    </text>
                    <text x="1915" y="294" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      Show...
                    </text>
                  </g>

                  {/* Stays in Repair History */}
                  <g filter="url(#rf-shadow)">
                    <rect x="2130" y="318" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2190" y="338" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Stays in Repair
                    </text>
                    <text x="2190" y="352" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      History
                    </text>
                  </g>

                  {/* ========================================================
                      TOP PROFILE SUB-TREE NODES
                     ======================================================== */}
                  <g filter="url(#rf-shadow)">
                    {/* PROFILE tab */}
                    <rect x="1375" y="20" width="110" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1430" y="47" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="600">
                      PROFILE tab
                    </text>

                    {/* Name, Location, Experience, Sp... */}
                    <rect x="1550" y="0" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1610" y="19" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Name, Location,
                    </text>
                    <text x="1610" y="33" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      Experience, Sp...
                    </text>

                    {/* Repair History */}
                    <rect x="1550" y="70" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1610" y="97" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Repair History
                    </text>

                    {/* Completed Repairs */}
                    <rect x="1730" y="70" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="1790" y="90" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Completed
                    </text>
                    <text x="1790" y="104" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">
                      Repairs
                    </text>
                  </g>

                  {/* DECISION DIAMOND (TOP): Add to Show... */}
                  <g filter="url(#rf-shadow)">
                    <polygon
                      points="1955,62 2000,92 1955,122 1910,92"
                      fill="#e0f2fe"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                    />
                    <text x="1955" y="89" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      Add to
                    </text>
                    <text x="1955" y="101" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      Show...
                    </text>
                  </g>

                  {/* Stays private */}
                  <g filter="url(#rf-shadow)">
                    <rect x="2130" y="70" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2190" y="97" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">
                      Stays private
                    </text>
                  </g>

                  {/* ========================================================
                      SHOWCASE OUTPUT NODES
                     ======================================================== */}
                  <g filter="url(#rf-shadow)">
                    {/* Take Final Repair Photo */}
                    <rect x="2140" y="148" width="120" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2200" y="168" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      Take Final Repair
                    </text>
                    <text x="2200" y="182" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      Photo
                    </text>

                    {/* Add Repair Label - eg Silk, Borde... */}
                    <rect x="2320" y="148" width="130" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2385" y="168" textAnchor="middle" fill="#2c1a0e" fontSize="10" fontWeight="500">
                      Add Repair Label
                    </text>
                    <text x="2385" y="182" textAnchor="middle" fill="#2c1a0e" fontSize="9.5" fontWeight="500">
                      - eg Silk, Borde...
                    </text>

                    {/* Add */}
                    <rect x="2510" y="148" width="60" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2540" y="175" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="600">
                      Add
                    </text>

                    {/* Public Work Gallery */}
                    <rect x="2570" y="105" width="110" height="44" rx="8" fill="#f6ebdd" stroke="#b37d4e" strokeWidth="1.5" />
                    <text x="2625" y="125" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="600">
                      Public Work
                    </text>
                    <text x="2625" y="139" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="600">
                      Gallery
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          )}

          {/* ============================================================
              2. CUSTOMER DISCOVERY & EXPERIENCE USER FLOW
             ============================================================ */}
          {(activeTab === 'all' || activeTab === 'customer') && (
            <div className="flex flex-col">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#73b3e6] ring-4 ring-[#73b3e6]/20" />
                <span className="font-mono text-xs font-bold text-[#73b3e6] uppercase tracking-wider">
                  FLOW 02 · CUSTOMER EXPERIENCE (HOME, EXPLORE RAFUGARS, PROFILE &amp; WHATSAPP CONTACT)
                </span>
              </div>

              {/* Customer Flow SVG Canvas */}
              <div className="relative bg-[#19191e]/60 p-8 rounded-2xl border border-white/5 shadow-inner">
                <svg
                  viewBox="0 0 2000 660"
                  className="w-full h-auto select-none font-sans"
                  style={{ minWidth: '1960px', minHeight: '640px' }}
                >
                  <defs>
                    {/* Blue Arrow Marker */}
                    <marker
                      id="cs-arrow-blue"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7" />
                    </marker>

                    {/* Ochre Arrow Marker */}
                    <marker
                      id="cs-arrow-ochre"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c2410c" />
                    </marker>

                    {/* Customer Node Shadow */}
                    <filter id="cs-shadow" x="-5%" y="-10%" width="112%" height="130%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  {/* ========================================================
                      CUSTOMER FLOW CONNECTOR LINES
                     ======================================================== */}
                  {/* From Customer opens app -> HOME tab */}
                  <path
                    d="M 130,285 L 185,285"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From Customer opens app -> EXPLORE RAFUGARS tab (Direct bottom branch) */}
                  <path
                    d="M 65,308 L 65,490 Q 65,505 80,505 L 435,505"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From HOME tab -> 4 Children Bracket Spine */}
                  <path
                    d="M 295,285 L 325,285"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  {/* Vertical spine from HOME */}
                  <path
                    d="M 325,75 L 325,405"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />

                  {/* -> Why Repair? (y=75) */}
                  <path
                    d="M 325,75 Q 325,65 335,65 L 355,65"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> About Rafugari (y=175) */}
                  <path
                    d="M 325,175 L 355,175"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> How Rafugari Works (y=285) */}
                  <path
                    d="M 325,285 L 355,285"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Find a Rafugar (y=395) */}
                  <path
                    d="M 325,395 Q 325,405 335,405 L 355,405"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From Find a Rafugar -> EXPLORE RAFUGARS tab */}
                  <path
                    d="M 465,405 L 490,405 Q 500,405 500,420 L 500,460 Q 500,475 490,475 L 490,485"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From EXPLORE RAFUGARS tab -> 3 Sub-views Bracket */}
                  <path
                    d="M 545,505 L 575,505"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  {/* Vertical spine before sub-views */}
                  <path
                    d="M 575,420 L 575,580"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  {/* -> Nearby Rafugars */}
                  <path
                    d="M 575,420 Q 575,410 585,410 L 600,410"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Filters */}
                  <path
                    d="M 575,505 L 600,505"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Map */}
                  <path
                    d="M 575,580 Q 575,590 585,590 L 600,590"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From 3 Sub-views -> Converge into Rafugar Profile */}
                  <path
                    d="M 710,410 L 735,410 Q 745,410 745,425 L 745,575 Q 745,590 735,590"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M 710,505 L 775,505"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From Rafugar Profile -> 6 Attributes Bracket */}
                  <path
                    d="M 885,505 L 915,505"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  {/* Vertical spine for profile attributes */}
                  <path
                    d="M 915,185 L 915,640"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  {/* -> Location */}
                  <path
                    d="M 915,185 Q 915,175 925,175 L 945,175"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Showcase Work */}
                  <path
                    d="M 915,265 L 945,265"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Name */}
                  <path
                    d="M 915,355 L 945,355"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Repair Specialties */}
                  <path
                    d="M 915,445 L 945,445"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Contact */}
                  <path
                    d="M 915,545 L 945,545"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />
                  {/* -> Experience */}
                  <path
                    d="M 915,640 Q 915,650 925,650 L 945,650"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From Repair Specialties -> Diamond How to contact? */}
                  <path
                    d="M 1055,445 L 1110,445"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* From Diamond How to contact? -> Call (top fork) */}
                  <path
                    d="M 1165,415 L 1165,370 Q 1165,360 1175,360 L 1235,360"
                    fill="none"
                    stroke="#c2410c"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-ochre)"
                  />

                  {/* From Diamond How to contact? -> WhatsApp (bottom fork) */}
                  <path
                    d="M 1165,475 L 1165,520 Q 1165,530 1175,530 L 1235,530"
                    fill="none"
                    stroke="#c2410c"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-ochre)"
                  />

                  {/* From WhatsApp -> Conversation continues on WhatsApp */}
                  <path
                    d="M 1345,530 L 1400,530"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    markerEnd="url(#cs-arrow-blue)"
                  />

                  {/* ========================================================
                      CUSTOMER FLOW NODES (PILLS, BOXES & DIAMOND)
                     ======================================================== */}
                  {/* START PILL: Customer opens app */}
                  <g filter="url(#cs-shadow)">
                    <rect x="20" y="263" width="110" height="44" rx="22" fill="#e8eaed" stroke="#9aa0a6" strokeWidth="1.5" />
                    <text x="75" y="283" textAnchor="middle" fill="#202124" fontSize="10.5" fontWeight="500">
                      Customer opens
                    </text>
                    <text x="75" y="297" textAnchor="middle" fill="#202124" fontSize="10.5" fontWeight="500">
                      app
                    </text>
                  </g>

                  {/* HOME tab */}
                  <g filter="url(#cs-shadow)">
                    <rect x="185" y="263" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="240" y="290" textAnchor="middle" fill="#0369a1" fontSize="11.5" fontWeight="600">
                      HOME tab
                    </text>
                  </g>

                  {/* HOME Sub-options */}
                  <g filter="url(#cs-shadow)">
                    {/* Why Repair? */}
                    <rect x="355" y="43" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="410" y="70" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Why Repair?
                    </text>

                    {/* About Rafugari */}
                    <rect x="355" y="153" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="410" y="180" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      About Rafugari
                    </text>

                    {/* How Rafugari Works */}
                    <rect x="355" y="263" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="410" y="283" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontWeight="500">
                      How Rafugari
                    </text>
                    <text x="410" y="297" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontWeight="500">
                      Works
                    </text>

                    {/* Find a Rafugar */}
                    <rect x="355" y="383" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="410" y="410" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Find a Rafugar
                    </text>
                  </g>

                  {/* EXPLORE RAFUGARS tab */}
                  <g filter="url(#cs-shadow)">
                    <rect x="435" y="483" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="490" y="503" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontWeight="600">
                      EXPLORE
                    </text>
                    <text x="490" y="517" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="600">
                      RAFUGARS tab
                    </text>
                  </g>

                  {/* EXPLORE Sub-options */}
                  <g filter="url(#cs-shadow)">
                    {/* Nearby Rafugars */}
                    <rect x="600" y="388" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="655" y="415" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Nearby Rafugars
                    </text>

                    {/* Filters */}
                    <rect x="600" y="483" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="655" y="510" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Filters
                    </text>

                    {/* Map */}
                    <rect x="600" y="568" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="655" y="595" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Map
                    </text>
                  </g>

                  {/* Rafugar Profile */}
                  <g filter="url(#cs-shadow)">
                    <rect x="775" y="483" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="830" y="510" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="600">
                      Rafugar Profile
                    </text>
                  </g>

                  {/* Rafugar Profile Sub-options */}
                  <g filter="url(#cs-shadow)">
                    {/* Location */}
                    <rect x="945" y="153" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="180" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Location
                    </text>

                    {/* Showcase Work */}
                    <rect x="945" y="243" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="270" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Showcase Work
                    </text>

                    {/* Name */}
                    <rect x="945" y="333" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="360" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Name
                    </text>

                    {/* Repair Specialties */}
                    <rect x="945" y="423" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="443" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontWeight="500">
                      Repair
                    </text>
                    <text x="1000" y="457" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontWeight="500">
                      Specialties
                    </text>

                    {/* Contact */}
                    <rect x="945" y="523" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="550" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Contact
                    </text>

                    {/* Experience */}
                    <rect x="945" y="628" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1000" y="655" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Experience
                    </text>
                  </g>

                  {/* DECISION DIAMOND: How to contact? */}
                  <g filter="url(#cs-shadow)">
                    <polygon
                      points="1165,415 1210,445 1165,475 1120,445"
                      fill="#ffedd5"
                      stroke="#ea580c"
                      strokeWidth="1.5"
                    />
                    <text x="1165" y="441" textAnchor="middle" fill="#9a3412" fontSize="9.5" fontWeight="600">
                      How to
                    </text>
                    <text x="1165" y="453" textAnchor="middle" fill="#9a3412" fontSize="9.5" fontWeight="600">
                      contact?
                    </text>
                  </g>

                  {/* Contact Outcomes */}
                  <g filter="url(#cs-shadow)">
                    {/* Call */}
                    <rect x="1235" y="338" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1290" y="365" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      Call
                    </text>

                    {/* WhatsApp */}
                    <rect x="1235" y="508" width="110" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="1290" y="535" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="500">
                      WhatsApp
                    </text>

                    {/* Conversation continues on WhatsApp (Pill) */}
                    <rect x="1400" y="503" width="120" height="54" rx="18" fill="#e8eaed" stroke="#9aa0a6" strokeWidth="1.5" />
                    <text x="1460" y="522" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">
                      Conversation
                    </text>
                    <text x="1460" y="536" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">
                      continues on
                    </text>
                    <text x="1460" y="548" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">
                      WhatsApp
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
