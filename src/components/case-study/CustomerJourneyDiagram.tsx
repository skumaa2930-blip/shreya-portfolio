import React from 'react';

interface DiagramProps {
  className?: string;
}

export const CustomerJourneyDiagram: React.FC<DiagramProps> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-visible ${className}`}>
      <svg
        viewBox="0 0 1360 1020"
        className="w-full h-auto select-none font-sans"
        style={{ minWidth: '1280px' }}
      >
        <defs>
          {/* Blue-gray Arrowhead Marker */}
          <marker
            id="arrow-blue"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#357297" />
          </marker>

          {/* Shadow filter for nodes */}
          <filter id="customer-node-shadow" x="-5%" y="-5%" width="115%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ============================================================
            MAIN TOP CONNECTIONS (CUSTOMER -> HOME, EXPLORE RAFUGARS, MY Profile)
           ============================================================ */}
        {/* Stem down from root */}
        <path d="M 410,68 L 410,115" fill="none" stroke="#357297" strokeWidth="2" />
        {/* Horizontal top bar */}
        <path d="M 60,125 Q 60,115 75,115 L 865,115 Q 880,115 880,125 L 880,155" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* To HOME */}
        <path d="M 410,115 L 75,115 Q 60,115 60,125 L 60,155" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* To EXPLORE RAFUGARS */}
        <path d="M 280,115 L 280,155" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* ROOT NODE: CUSTOMER */}
        <g filter="url(#customer-node-shadow)">
          <rect x="360" y="16" width="100" height="52" rx="8" fill="#e6eef5" stroke="#475569" strokeWidth="2" />
          <text x="410" y="47" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="600" letterSpacing="0.5">
            CUSTOMER
          </text>
        </g>


        {/* ============================================================
            BRANCH 1: HOME (LEFT)
           ============================================================ */}
        {/* HOME Node */}
        <g filter="url(#customer-node-shadow)">
          <rect x="10" y="160" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="60" y="191" textAnchor="middle" fill="#0f3453" fontSize="12" fontWeight="600" letterSpacing="0.5">
            HOME
          </text>
        </g>

        {/* HOME Spine down & branches */}
        <path d="M 60,212 L 60,468 Q 60,476 70,476 L 125,476" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Why Repair? (y=240, center y=266) */}
        <path d="M 60,260 Q 60,266 70,266 L 125,266" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> About Rafugari (y=310, center y=336) */}
        <path d="M 60,330 Q 60,336 70,336 L 125,336" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> How Rafugari Works (y=380, center y=406) */}
        <path d="M 60,400 Q 60,406 70,406 L 125,406" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* HOME Level 3 Nodes */}
        <g filter="url(#customer-node-shadow)">
          {/* Why Repair? */}
          <rect x="135" y="240" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="187" y="271" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Why Repair?</text>

          {/* About Rafugari */}
          <rect x="135" y="310" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="187" y="341" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">About Rafugari</text>

          {/* How Rafugari Works */}
          <rect x="135" y="380" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="187" y="403" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">How Rafugari</text>
          <text x="187" y="419" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Works</text>

          {/* Find a Rafugar */}
          <rect x="135" y="450" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="187" y="481" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Find a Rafugar</text>
        </g>


        {/* ============================================================
            BRANCH 2: EXPLORE RAFUGARS (CENTER)
           ============================================================ */}
        {/* EXPLORE RAFUGARS Node */}
        <g filter="url(#customer-node-shadow)">
          <rect x="230" y="160" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="280" y="184" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="600">EXPLORE</text>
          <text x="280" y="200" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="600">RAFUGARS</text>
        </g>

        {/* EXPLORE Spine down */}
        <path d="M 280,212 L 280,398 Q 280,406 290,406 L 345,406" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Map */}
        <path d="M 280,260 Q 280,266 290,266 L 345,266" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Filters */}
        <path d="M 280,330 Q 280,336 290,336 L 345,336" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* EXPLORE Level 3 Nodes */}
        <g filter="url(#customer-node-shadow)">
          <rect x="355" y="240" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="407" y="271" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Map</text>

          <rect x="355" y="310" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="407" y="341" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Filters</text>

          <rect x="355" y="380" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="407" y="411" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Nearby Rafugars</text>
        </g>

        {/* From Nearby Rafugars (center x=407, bottom y=432) -> Rafugar Profile at (485, 450) */}
        <path d="M 407,432 L 407,468 Q 407,476 417,476 L 475,476" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        <g filter="url(#customer-node-shadow)">
          <rect x="485" y="450" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="537" y="481" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Rafugar Profile</text>
        </g>

        {/* Rafugar Profile Spine down */}
        <path d="M 537,502 L 537,888 Q 537,896 547,896 L 600,896" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Name (y=520, center y=546) */}
        <path d="M 537,540 Q 537,546 547,546 L 600,546" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Location (y=590, center y=616) */}
        <path d="M 537,610 Q 537,616 547,616 L 600,616" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Experience (y=660, center y=686) */}
        <path d="M 537,680 Q 537,686 547,686 L 600,686" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Contact (y=730, center y=756) */}
        <path d="M 537,750 Q 537,756 547,756 L 600,756" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Repair Specialties (y=800, center y=826) */}
        <path d="M 537,820 Q 537,826 547,826 L 600,826" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* Rafugar Profile Detail Nodes */}
        <g filter="url(#customer-node-shadow)">
          <rect x="610" y="520" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="551" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Name</text>

          <rect x="610" y="590" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="621" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Location</text>

          <rect x="610" y="660" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="691" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Experience</text>

          {/* Contact */}
          <rect x="610" y="730" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="761" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Contact</text>

          {/* Repair Specialties */}
          <rect x="610" y="800" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="823" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Repair</text>
          <text x="662" y="839" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Specialties</text>

          {/* Showcase Work */}
          <rect x="610" y="870" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="662" y="901" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Showcase Work</text>
        </g>

        {/* From Contact -> Call & Chat */}
        <path d="M 715,756 L 735,756" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        <path d="M 715,756 L 725,756 Q 730,756 730,764 L 730,818 Q 730,826 735,826 L 735,826" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        <g filter="url(#customer-node-shadow)">
          <rect x="745" y="730" width="95" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="792" y="761" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Call</text>

          <rect x="745" y="800" width="95" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="792" y="831" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Chat</text>
        </g>


        {/* ============================================================
            BRANCH 3: MY Profile (RIGHT)
           ============================================================ */}
        {/* MY Profile Node */}
        <g filter="url(#customer-node-shadow)">
          <rect x="830" y="160" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="880" y="191" textAnchor="middle" fill="#0f3453" fontSize="12" fontWeight="600">
            MY Profile
          </text>
        </g>

        {/* MY Profile Spine down */}
        <path d="M 880,212 L 880,758 Q 880,766 890,766 L 945,766" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Name (y=240, center y=266) */}
        <path d="M 880,260 Q 880,266 890,266 L 945,266" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Ongoing Repair (y=310, center y=336) */}
        <path d="M 880,330 Q 880,336 890,336 L 945,336" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* MY Profile Child Nodes */}
        <g filter="url(#customer-node-shadow)">
          <rect x="955" y="240" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1007" y="271" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Name</text>

          <rect x="955" y="310" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1007" y="341" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Ongoing Repair</text>
        </g>

        {/* From Ongoing Repair -> garment Photo, Status, Expected Price, Ready By */}
        {/* Spine from Ongoing Repair (center x=1007, bottom y=362) */}
        <path d="M 1007,362 L 1007,678 Q 1007,686 1017,686 L 1070,686" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> garment Photo (y=310, direct from Ongoing Repair right) */}
        <path d="M 1060,336 L 1070,336" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Status (y=380, center y=406) */}
        <path d="M 1007,400 Q 1007,406 1017,406 L 1070,406" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Expected Price (y=590, center y=616) */}
        <path d="M 1007,610 Q 1007,616 1017,616 L 1070,616" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        {/* Ongoing Repair Details */}
        <g filter="url(#customer-node-shadow)">
          {/* garment Photo */}
          <rect x="1080" y="310" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1132" y="341" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">garment Photo</text>

          {/* Status */}
          <rect x="1080" y="380" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1132" y="411" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Status</text>

          {/* Expected Price */}
          <rect x="1080" y="590" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1132" y="621" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Expected Price</text>

          {/* Ready By */}
          <rect x="1080" y="660" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1132" y="691" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Ready By</text>
        </g>

        {/* From Status -> Received, In Progress, Ready */}
        <path d="M 1132,432 L 1132,538 Q 1132,546 1142,546 L 1195,546" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> Received (y=380, direct from Status right) */}
        <path d="M 1185,406 L 1195,406" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        {/* -> In Progress (y=450, center y=476) */}
        <path d="M 1132,470 Q 1132,476 1142,476 L 1195,476" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />

        <g filter="url(#customer-node-shadow)">
          <rect x="1205" y="380" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1255" y="411" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Received</text>

          <rect x="1205" y="450" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1255" y="481" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">In Progress</text>

          <rect x="1205" y="520" width="100" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1255" y="551" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Ready</text>
        </g>

        {/* Completed Repair -> Give Review */}
        <g filter="url(#customer-node-shadow)">
          <rect x="955" y="740" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1007" y="763" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Completed</text>
          <text x="1007" y="779" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Repair</text>

          {/* Give Review */}
          <rect x="1080" y="740" width="105" height="52" rx="8" fill="#e1effa" stroke="#357297" strokeWidth="2" />
          <text x="1132" y="771" textAnchor="middle" fill="#0f3453" fontSize="11" fontWeight="500">Give Review</text>
        </g>

        {/* Arrow between Completed Repair and Give Review */}
        <path d="M 1060,766 L 1070,766" fill="none" stroke="#357297" strokeWidth="2" markerEnd="url(#arrow-blue)" />
      </svg>
    </div>
  );
};
