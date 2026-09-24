import React from 'react';

export const HeroVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-[1140px] mx-auto flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 1280 944"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g clipPath="url(#clip0_hero)">
          {/* Ambient lime glow backdrop */}
          <g filter="url(#filter0_f_hero)">
            <rect x="193" y="289" width="908" height="575" rx="12" fill="#D4F34A" fillOpacity="0.05" />
          </g>

          {/* Central main photo: Ghats / Sunset river */}
          <g filter="url(#filter1_d_hero)">
            <rect
              x="396.864"
              y="289"
              width="490"
              height="335.994"
              rx="2"
              transform="rotate(0.999999 396.864 289)"
              fill="#1C1B1B"
              shapeRendering="crispEdges"
            />
            <rect
              x="397.355"
              y="289.509"
              width="489"
              height="334.994"
              rx="1.5"
              transform="rotate(0.999999 397.355 289.509)"
              stroke="#353534"
              strokeOpacity="0.8"
              shapeRendering="crispEdges"
            />
            {/* Top tape on main photo */}
            <g filter="url(#filter2_d_hero)">
              <rect
                x="601.575"
                y="280.98"
                width="80.0023"
                height="27.9943"
                rx="1"
                transform="rotate(-1 601.575 280.98)"
                fill="white"
                fillOpacity="0.25"
                stroke="white"
                strokeOpacity="0.3"
                shapeRendering="crispEdges"
              />
            </g>
            <g clipPath="url(#clip2_hero)">
              <rect
                x="409.636"
                y="302.225"
                width="464"
                height="289.994"
                rx="2"
                transform="rotate(0.999999 409.636 302.225)"
                fill="#0E0E0E"
              />
              <image
                x="409.636"
                y="302.225"
                width="464"
                height="289.994"
                preserveAspectRatio="xMidYMid slice"
                transform="rotate(0.999999 409.636 302.225)"
                href="/assets/hero-center.png"
                onError={(e) => {
                  const target = e.currentTarget as SVGImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.setAttribute('href', 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=900&auto=format&fit=crop');
                  }
                }}
              />
            </g>
          </g>

          {/* Left photo: Bougainvillea & sun flare */}
          <g filter="url(#filter3_d_hero)">
            <rect
              x="193"
              y="469.599"
              width="256"
              height="276.005"
              rx="2"
              transform="rotate(-5.73884 193 469.599)"
              fill="#1C1B1B"
              shapeRendering="crispEdges"
            />
            <rect
              x="193.547"
              y="470.046"
              width="255"
              height="275.005"
              rx="1.5"
              transform="rotate(-5.73884 193.547 470.046)"
              stroke="#353534"
              strokeOpacity="0.8"
              shapeRendering="crispEdges"
            />
            {/* Top tape on left photo */}
            <g filter="url(#filter4_d_hero)">
              <rect
                x="287.068"
                y="447.648"
                width="64.0063"
                height="23.9989"
                rx="1"
                transform="rotate(-6.73884 287.068 447.648)"
                fill="#4A473E"
                fillOpacity="0.8"
                stroke="#CBC6BB"
                strokeOpacity="0.4"
                shapeRendering="crispEdges"
              />
            </g>
            <g clipPath="url(#clip4_hero)">
              <rect
                x="207.234"
                y="481.233"
                width="230"
                height="230.005"
                rx="1"
                transform="rotate(-5.73884 207.234 481.233)"
                fill="#0E0E0E"
              />
              <image
                x="207.234"
                y="481.233"
                width="230"
                height="230.005"
                preserveAspectRatio="xMidYMid slice"
                transform="rotate(-5.73884 207.234 481.233)"
                href="/assets/hero-left.png"
                onError={(e) => {
                  const target = e.currentTarget as SVGImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.setAttribute('href', 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop');
                  }
                }}
              />
            </g>
          </g>

          {/* Right photo: Black and white window / tree shadows */}
          <g filter="url(#filter5_d_hero)">
            <rect
              x="842.223"
              y="453"
              width="224"
              height="303.572"
              rx="2"
              transform="rotate(6.47288 842.223 453)"
              fill="#1C1B1B"
              shapeRendering="crispEdges"
            />
            <rect
              x="842.663"
              y="453.553"
              width="223"
              height="302.572"
              rx="1.5"
              transform="rotate(6.47288 842.663 453.553)"
              stroke="#353534"
              strokeOpacity="0.8"
              shapeRendering="crispEdges"
            />
            <g clipPath="url(#clip5_hero)">
              <rect
                x="851.912"
                y="465.17"
                width="202"
                height="269.329"
                rx="1"
                transform="rotate(6.47288 851.912 465.17)"
                fill="#0E0E0E"
              />
              <image
                x="851.912"
                y="465.17"
                width="202"
                height="269.329"
                preserveAspectRatio="xMidYMid slice"
                transform="rotate(6.47288 851.912 465.17)"
                href="/assets/hero-right.png"
                onError={(e) => {
                  const target = e.currentTarget as SVGImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.setAttribute('href', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop');
                  }
                }}
              />
            </g>
            {/* Top tape on right photo */}
            <g filter="url(#filter6_d_hero)">
              <rect
                x="979.316"
                y="454.607"
                width="55.9994"
                height="23.9948"
                rx="1"
                transform="rotate(12.4728 979.316 454.607)"
                fill="white"
                fillOpacity="0.25"
                stroke="white"
                strokeOpacity="0.3"
                shapeRendering="crispEdges"
              />
            </g>
          </g>

          {/* Quote Card (Dark frosted glass): "I notice things. Then I can't stop thinking about them." */}
          <g id="hero-quote-card">
            <rect
              x="379.827"
              y="616"
              width="384"
              height="84"
              rx="4"
              transform="rotate(1.24622 379.827 616)"
              fill="#222225"
              fillOpacity="0.95"
              stroke="#3a3a40"
              strokeOpacity="0.8"
            />
            {/* Quote tape on top left */}
            <g filter="url(#filter9_d_hero)">
              <rect
                x="404.774"
                y="606.382"
                width="47.9957"
                height="16.0021"
                rx="1"
                transform="rotate(-0.753783 404.774 606.382)"
                fill="white"
                fillOpacity="0.3"
                stroke="white"
                strokeOpacity="0.35"
                shapeRendering="crispEdges"
              />
            </g>
            {/* Handwritten Quote Text */}
            <g transform="translate(390, 620) rotate(1.24622 0 0)">
              <text
                x="16"
                y="34"
                fill="#EDEDED"
                className="font-handwriting"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.02em',
                }}
              >
                &ldquo;I notice things. Then I can&rsquo;t stop
              </text>
              <text
                x="16"
                y="62"
                fill="#EDEDED"
                className="font-handwriting"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.02em',
                }}
              >
                thinking about them.&rdquo;
              </text>
            </g>
          </g>

          {/* Memo #08 Card with branch illustration (moved slightly below) */}
          <g id="hero-memo-card" transform="translate(0, 18)">
            <rect
              x="628.987"
              y="666.509"
              width="239"
              height="142.002"
              rx="2"
              transform="rotate(1 628.987 666.509)"
              fill="#20201d"
              stroke="#383730"
            />
            {/* Plant sprout graphic */}
            <g opacity="0.9">
              <path
                d="M663.818 762.63C662.834 742.61 663.241 719.28 665.04 692.641"
                stroke="#D4F34A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M664.08 747.632C669.459 745.059 673.528 741.13 676.287 735.844C670.931 737.084 666.862 741.013 664.08 747.632V747.632"
                fill="#D4F34A"
                fillOpacity="0.25"
                stroke="#D4F34A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M663.289 735.617C657.337 732.846 653.074 728.771 650.501 723.392C655.81 724.818 660.073 728.893 663.289 735.617V735.617"
                fill="#D4F34A"
                fillOpacity="0.25"
                stroke="#D4F34A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M664.516 722.636C671.24 719.42 675.982 715.169 678.741 709.883C672.719 711.111 667.977 715.363 664.516 722.636V722.636"
                fill="#D4F34A"
                fillOpacity="0.25"
                stroke="#D4F34A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M663.743 709.621C657.124 706.839 652.528 702.758 649.955 697.379C655.931 698.817 660.527 702.897 663.743 709.621V709.621"
                fill="#D4F34A"
                fillOpacity="0.25"
                stroke="#D4F34A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="665.04" cy="692.641" r="2.5" fill="#D4F34A" />
            </g>

            {/* Memo #08 Title & text */}
            <g transform="translate(692, 680) rotate(1 0 0)">
              <text
                x="0"
                y="14"
                fill="#D4F34A"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                }}
              >
                MEMO #08
              </text>
              <text
                x="0"
                y="46"
                fill="#E5E2E1"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  fontSize: '22px',
                  letterSpacing: '0.01em',
                }}
              >
                ideas from random
              </text>
              <text
                x="0"
                y="74"
                fill="#E5E2E1"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  fontSize: '22px',
                  letterSpacing: '0.01em',
                }}
              >
                moments. i collect
              </text>
              <text
                x="0"
                y="102"
                fill="#E5E2E1"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  fontSize: '22px',
                  letterSpacing: '0.01em',
                }}
              >
                everything.
              </text>
            </g>

            {/* Neon lime pin/dot at top right of quote card overlapping memo */}
            <g filter="url(#filter11_d_hero)">
              <circle cx="748.637" cy="666.96" r="8" fill="#D4F34A" />
            </g>
          </g>

          {/* Top text: THIS IS ME */}
          <g>
            <text
              x="640"
              y="90"
              textAnchor="middle"
              fill="#D4F34A"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.2em',
              }}
            >
              THIS IS ME
            </text>
          </g>

          {/* SHREYA Large Display Title (without full stop) */}
          <text
            x="640"
            y="178"
            textAnchor="middle"
            fill="#FFFFFF"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '84px',
              fontWeight: 400,
              letterSpacing: '0.06em',
            }}
          >
            SHREYA
          </text>

          {/* Subtitle: I like figuring things out by making them. */}
          <text
            x="640"
            y="222"
            textAnchor="middle"
            fill="#B5B2AF"
            style={{
              fontFamily: "'General Sans', system-ui, -apple-system, sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            I like figuring things out by making them.
          </text>
        </g>

        {/* Filters and clip definitions */}
        <defs>
          <filter id="filter0_f_hero" x="73" y="169" width="1148" height="815" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <filter id="filter1_d_hero" x="359" y="263.6" width="560" height="418" filterUnits="userSpaceOnUse">
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="16" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter2_d_hero" x="589.5" y="267.6" width="104" height="53" filterUnits="userSpaceOnUse">
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter3_d_hero" x="161" y="424.2" width="346" height="368" filterUnits="userSpaceOnUse">
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="16" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter4_d_hero" x="275" y="428" width="90" height="55" filterUnits="userSpaceOnUse">
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter5_d_hero" x="780" y="437" width="313" height="383" filterUnits="userSpaceOnUse">
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="14" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter6_d_hero" x="962" y="442" width="84" height="60" filterUnits="userSpaceOnUse">
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter9_d_hero" x="392" y="593" width="72" height="41" filterUnits="userSpaceOnUse">
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <filter id="filter11_d_hero" x="732" y="651" width="32" height="32" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.83 0 0 0 0 0.95 0 0 0 0 0.29 0 0 0 0.7 0" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <clipPath id="clip0_hero">
            <rect width="1280" height="944" fill="white" />
          </clipPath>
          <clipPath id="clip2_hero">
            <rect
              x="409.636"
              y="302.225"
              width="464"
              height="289.994"
              rx="2"
              transform="rotate(0.999999 409.636 302.225)"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip4_hero">
            <rect
              x="207.234"
              y="481.233"
              width="230"
              height="230.005"
              rx="1"
              transform="rotate(-5.73884 207.234 481.233)"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip5_hero">
            <rect
              x="851.912"
              y="465.17"
              width="202"
              height="269.329"
              rx="1"
              transform="rotate(6.47288 851.912 465.17)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
