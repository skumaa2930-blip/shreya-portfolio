import React from 'react';

interface DiagramProps {
  className?: string;
}

export const RafugarWorkbenchDiagram: React.FC<DiagramProps> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-visible ${className}`}>
      <svg
        viewBox="0 0 1740 1080"
        className="w-full h-auto select-none font-sans"
        style={{ minWidth: '1540px' }}
      >
        <defs>
          {/* Brown Arrowhead Marker */}
          <marker
            id="arrow-brown"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#96603a" />
          </marker>

          {/* Purple Arrowhead Marker */}
          <marker
            id="arrow-purple"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9333ea" />
          </marker>

          {/* Shadow filter for nodes */}
          <filter id="node-shadow" x="-5%" y="-5%" width="115%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ============================================================
            MAIN TOP CONNECTIONS (RAFUGAR WORKBENCH -> HOME, Jobs, PROFILE)
           ============================================================ */}
        {/* Stem down from root */}
        <path d="M 515,68 L 515,115" fill="none" stroke="#96603a" strokeWidth="2" />
        {/* Horizontal top bar */}
        <path d="M 95,125 Q 95,115 110,115 L 970,115 Q 985,115 985,125 L 985,160" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* To HOME */}
        <path d="M 515,115 L 110,115 Q 95,115 95,125 L 95,160" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* To Jobs */}
        <path d="M 515,115 L 515,160" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* ROOT NODE: RAFUGAR WORKBENCH */}
        <g filter="url(#node-shadow)">
          <rect x="450" y="16" width="130" height="52" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="515" y="38" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="600" letterSpacing="0.5">
            RAFUGAR
          </text>
          <text x="515" y="52" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="600" letterSpacing="0.5">
            WORKBENCH
          </text>
        </g>


        {/* ============================================================
            BRANCH 1: HOME (LEFT)
           ============================================================ */}
        {/* HOME Node */}
        <g filter="url(#node-shadow)">
          <rect x="35" y="165" width="120" height="52" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="95" y="196" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="600" letterSpacing="0.5">
            HOME
          </text>
        </g>

        {/* HOME Children Connector Spine */}
        <path d="M 95,217 L 95,478 Q 95,486 105,486 L 150,486" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        
        {/* Horizontal branches from HOME spine (step: 54px) */}
        {/* -> Ready (y=250, center y=270) */}
        <path d="M 95,264 Q 95,270 105,270 L 150,270" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> In Progress (y=304, center y=324) */}
        <path d="M 95,318 Q 95,324 105,324 L 150,324" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Received (y=358, center y=378) */}
        <path d="M 95,372 Q 95,378 105,378 L 150,378" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Collected (y=412, center y=432) */}
        <path d="M 95,426 Q 95,432 105,432 L 150,432" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* HOME Level 3 Nodes */}
        <g filter="url(#node-shadow)">
          {/* Ready */}
          <rect x="160" y="250" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="225" y="275" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Ready</text>

          {/* In Progress */}
          <rect x="160" y="304" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="225" y="329" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">In Progress</text>

          {/* Received */}
          <rect x="160" y="358" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="225" y="383" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Received</text>

          {/* Collected */}
          <rect x="160" y="412" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="225" y="437" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Collected</text>

          {/* NEW JOB */}
          <rect x="160" y="466" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="225" y="491" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="600">NEW JOB</text>
        </g>

        {/* NEW JOB Sub-spine */}
        <path d="M 225,506 L 225,704 Q 225,712 235,712 L 260,712" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Garment photo (y=530, center y=550) */}
        <path d="M 225,544 Q 225,550 235,550 L 260,550" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Customer details (y=584, center y=604) */}
        <path d="M 225,598 Q 225,604 235,604 L 260,604" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Repair details (y=638, center y=658) */}
        <path d="M 225,652 Q 225,658 235,658 L 260,658" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* NEW JOB Level 4 Nodes */}
        <g filter="url(#node-shadow)">
          {/* Garment photo */}
          <rect x="270" y="530" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="335" y="555" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Garment photo</text>

          {/* Customer details */}
          <rect x="270" y="584" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="335" y="609" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Customer details</text>

          {/* Repair details */}
          <rect x="270" y="638" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="335" y="663" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Repair details</text>

          {/* View Job */}
          <rect x="270" y="692" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="335" y="717" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">View Job</text>
        </g>


        {/* ============================================================
            BRANCH 2: Jobs (CENTER)
           ============================================================ */}
        {/* Jobs Node */}
        <g filter="url(#node-shadow)">
          <rect x="450" y="165" width="130" height="52" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="515" y="196" textAnchor="middle" fill="#2c1a0e" fontSize="13" fontWeight="600">
            Jobs
          </text>
        </g>

        {/* Jobs Children Connector Spine */}
        <path d="M 515,217 L 515,482 Q 515,490 525,490 L 550,490" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        
        {/* -> Received (y=250, center y=270) */}
        <path d="M 515,264 Q 515,270 525,270 L 550,270" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> In Progress (y=304, center y=324) */}
        <path d="M 515,318 Q 515,324 525,324 L 550,324" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Ready (y=358, center y=378) */}
        <path d="M 515,372 Q 515,378 525,378 L 550,378" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Collected (y=412, center y=432) */}
        <path d="M 515,426 Q 515,432 525,432 L 550,432" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* Jobs Level 3 Nodes */}
        <g filter="url(#node-shadow)">
          <rect x="560" y="250" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="625" y="275" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Received</text>

          <rect x="560" y="304" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="625" y="329" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">In Progress</text>

          <rect x="560" y="358" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="625" y="383" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Ready</text>

          <rect x="560" y="412" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="625" y="437" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Collected</text>

          {/* Garment Details block */}
          <rect x="560" y="466" width="130" height="48" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="625" y="487" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">Garment Details</text>
          <text x="625" y="503" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">block</text>
        </g>

        {/* Garment Details block Sub-spine */}
        <path d="M 625,514 L 625,812 Q 625,820 635,820 L 680,820" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Garment Photo (y=530, center y=550) */}
        <path d="M 625,544 Q 625,550 635,550 L 680,550" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Customer Name (y=584, center y=604) */}
        <path d="M 625,598 Q 625,604 635,604 L 680,604" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Damage (y=638, center y=658) */}
        <path d="M 625,652 Q 625,658 635,658 L 680,658" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Price (y=692, center y=712) */}
        <path d="M 625,706 Q 625,712 635,712 L 680,712" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Due Date (y=746, center y=766) */}
        <path d="M 625,760 Q 625,766 635,766 L 680,766" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* Garment Details block Level 4 Nodes */}
        <g filter="url(#node-shadow)">
          <rect x="690" y="530" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="555" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Garment Photo</text>

          <rect x="690" y="584" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="609" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Customer Name</text>

          <rect x="690" y="638" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="663" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Damage</text>

          <rect x="690" y="692" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="717" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Price</text>

          <rect x="690" y="746" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="771" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Due Date</text>

          {/* Mark the status */}
          <rect x="690" y="800" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="755" y="825" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Mark the status</text>
        </g>

        {/* Mark the status -> Branches (In Progress, Ready, Collected) */}
        <path d="M 820,820 L 845,820 Q 855,820 855,828 L 855,954 Q 855,962 865,962 L 890,962" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> In Progress (y=800, center y=820) */}
        <path d="M 855,820 L 890,820" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Ready (y=854, center y=874) */}
        <path d="M 855,868 Q 855,874 865,874 L 890,874" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* Status Options Nodes */}
        <g filter="url(#node-shadow)">
          <rect x="900" y="800" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="965" y="825" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">In Progress</text>

          <rect x="900" y="854" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="965" y="879" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Ready</text>

          <rect x="900" y="942" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="965" y="967" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Collected</text>
        </g>

        {/* From Ready -> Send ready message & Add to Showcase */}
        <path d="M 1030,874 L 1055,874 Q 1065,874 1065,882 L 1065,920 Q 1065,928 1075,928 L 1090,928" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Send ready message */}
        <path d="M 1030,874 L 1090,874" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        <g filter="url(#node-shadow)">
          <rect x="1100" y="854" width="160" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1180" y="879" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Send ready message</text>

          {/* Add to Showcase (Purple) */}
          <rect x="1100" y="908" width="130" height="40" rx="8" fill="#ebd8fd" stroke="#7e22ce" strokeWidth="2" />
          <text x="1165" y="933" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="600">Add to Showcase</text>
        </g>

        {/* From Add to Showcase (Purple) -> Take Final Repair Photo & Add Repair Label */}
        <path d="M 1230,928 L 1260,928 Q 1270,928 1270,936 L 1270,992 Q 1270,1000 1280,1000 L 1290,1000" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow-purple)" />
        {/* -> Take Final Repair Photo */}
        <path d="M 1230,928 L 1290,928" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow-purple)" />

        <g filter="url(#node-shadow)">
          <rect x="1300" y="904" width="145" height="48" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1372" y="926" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Take Final Repair</text>
          <text x="1372" y="942" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Photo</text>

          <rect x="1300" y="966" width="145" height="68" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1372" y="987" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Add Repair Label</text>
          <text x="1372" y="1003" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">- eg Silk, Border</text>
          <text x="1372" y="1019" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">repair, Fine rafu</text>
        </g>


        {/* ============================================================
            BRANCH 3: PROFILE (RIGHT)
           ============================================================ */}
        {/* PROFILE Node */}
        <g filter="url(#node-shadow)">
          <rect x="920" y="165" width="130" height="52" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="985" y="196" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="600" letterSpacing="0.5">
            PROFILE
          </text>
        </g>

        {/* PROFILE Children Connector Spine */}
        <path d="M 985,217 L 985,614 Q 985,622 995,622 L 1020,622" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        
        {/* -> Name (y=250, center y=270) */}
        <path d="M 985,264 Q 985,270 995,270 L 1020,270" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Location (y=304, center y=324) */}
        <path d="M 985,318 Q 985,324 995,324 L 1020,324" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Experience (y=358, center y=378) */}
        <path d="M 985,372 Q 985,378 995,378 L 1020,378" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Specialties (y=412, center y=432) */}
        <path d="M 985,426 Q 985,432 995,432 L 1020,432" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />
        {/* -> Repair History (y=466, center y=488) */}
        <path d="M 985,482 Q 985,488 995,488 L 1020,488" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        {/* PROFILE Level 3 Nodes */}
        <g filter="url(#node-shadow)">
          <rect x="1030" y="250" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="275" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Name</text>

          <rect x="1030" y="304" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="329" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Location</text>

          <rect x="1030" y="358" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="383" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Experience</text>

          <rect x="1030" y="412" width="130" height="40" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="437" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Specialties</text>

          {/* Repair History */}
          <rect x="1030" y="466" width="130" height="44" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="493" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Repair History</text>

          {/* Public Work Gallery */}
          <rect x="1030" y="598" width="130" height="48" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1095" y="620" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">Public Work</text>
          <text x="1095" y="636" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">Gallery</text>
        </g>

        {/* From Repair History -> Completed Repairs */}
        <path d="M 1095,510 L 1095,544 Q 1095,552 1105,552 L 1120,552" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        <g filter="url(#node-shadow)">
          <rect x="1130" y="530" width="130" height="44" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1195" y="551" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">Completed</text>
          <text x="1195" y="567" textAnchor="middle" fill="#2c1a0e" fontSize="11.5" fontWeight="500">Repairs</text>
        </g>

        {/* From Completed Repairs -> Add to Showcase */}
        <path d="M 1260,552 L 1310,552" fill="none" stroke="#96603a" strokeWidth="2" markerEnd="url(#arrow-brown)" />

        <g filter="url(#node-shadow)">
          <rect x="1320" y="532" width="130" height="40" rx="8" fill="#ebd8fd" stroke="#7e22ce" strokeWidth="2" />
          <text x="1385" y="557" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="600">Add to Showcase</text>
        </g>

        {/* From Add to Showcase -> Take Final Repair Photo, Add Repair Label, Add */}
        <path d="M 1450,552 L 1500,552" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow-purple)" />
        {/* -> Add Repair Label */}
        <path d="M 1450,552 L 1475,552 Q 1485,552 1485,560 L 1485,622 Q 1485,630 1495,630 L 1500,630" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow-purple)" />
        {/* -> Add */}
        <path d="M 1450,552 L 1475,552 Q 1485,552 1485,560 L 1485,702 Q 1485,710 1495,710 L 1500,710" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow-purple)" />

        <g filter="url(#node-shadow)">
          {/* Take Final Repair Photo */}
          <rect x="1510" y="528" width="145" height="48" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1582" y="550" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Take Final Repair</text>
          <text x="1582" y="566" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Photo</text>

          {/* Add Repair Label */}
          <rect x="1510" y="594" width="145" height="72" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1582" y="615" textAnchor="middle" fill="#2c1a0e" fontSize="11" fontWeight="500">Add Repair Label</text>
          <text x="1582" y="631" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">- eg Silk, Border</text>
          <text x="1582" y="647" textAnchor="middle" fill="#2c1a0e" fontSize="10.5" fontWeight="500">repair, Fine rafu</text>

          {/* Add */}
          <rect x="1510" y="684" width="145" height="42" rx="8" fill="#ebd9c4" stroke="#96603a" strokeWidth="2" />
          <text x="1582" y="710" textAnchor="middle" fill="#2c1a0e" fontSize="12" fontWeight="500">Add</text>
        </g>
      </svg>
    </div>
  );
};
