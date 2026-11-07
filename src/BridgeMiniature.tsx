
import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const BridgeMiniature: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / 1800;

  const clamp = {
    extrapolateLeft: 'clamp' as const,
    extrapolateRight: 'clamp' as const,
  };

  const foundation = interpolate(frame, [0, 350], [0, 1], clamp);
  const pillars = interpolate(frame, [350, 750], [0, 1], clamp);
  const deck = interpolate(frame, [750, 1250], [0, 1], clamp);
  const finish = interpolate(frame, [1250, 1700], [0, 1], clamp);

  const phase =
    progress < 0.2 ? 'SITE PREPARATION' :
    progress < 0.42 ? 'BUILDING FOUNDATIONS' :
    progress < 0.7 ? 'BRIDGE STRUCTURE' :
    progress < 0.94 ? 'ROAD & FINISHING' :
    'PROJECT COMPLETED';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#b9d9e8',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#72b6d7"/>
            <stop offset="100%" stopColor="#e0edda"/>
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#65b9cf"/>
            <stop offset="100%" stopColor="#237caa"/>
          </linearGradient>
        </defs>

        <rect width="1080" height="1920" fill="url(#sky)"/>

        {/* Distant miniature landscape */}
        <circle cx="850" cy="240" r="95" fill="#ffe69a"/>
        <path d="M0 780 L180 490 L390 780 Z" fill="#86ad83"/>
        <path d="M250 780 L530 440 L800 780 Z" fill="#739c77"/>
        <path d="M650 780 L850 500 L1080 780 Z" fill="#92b58b"/>

        {/* Clouds */}
        <g fill="#fff" opacity="0.8">
          <ellipse cx="220" cy="250" rx="95" ry="35"/>
          <ellipse cx="270" cy="235" rx="60" ry="45"/>
          <ellipse cx="710" cy="360" rx="110" ry="35"/>
          <ellipse cx="770" cy="340" rx="65" ry="48"/>
        </g>

        {/* Ground */}
        <path d="M0 850 L1080 850 L1080 1450 L0 1450 Z"
          fill="#b68c5c"/>
        <path d="M0 850 Q500 810 1080 850 L1080 1050 L0 1050 Z"
          fill="#88a96b"/>

        {/* River */}
        <path d="M0 1110 Q250 1060 520 1130 Q800 1200 1080 1090 L1080 1920 L0 1920 Z"
          fill="url(#water)"/>

        <g stroke="#b6e5ed" strokeWidth="7" opacity="0.55">
          <path d="M60 1330 Q250 1290 430 1330"/>
          <path d="M600 1450 Q800 1410 1000 1450"/>
          <path d="M120 1640 Q330 1600 510 1640"/>
        </g>

        {/* Construction access roads */}
        <path d="M0 880 L1080 880 L1080 970 L0 970 Z"
          fill="#77736c"/>
        <path d="M0 920 L1080 920"
          stroke="#e6d6a5" strokeWidth="7" strokeDasharray="40 35"/>

        {/* Bridge foundations */}
        <g opacity={foundation}>
          <rect x="240" y="1070" width="120" height="100"
            fill="#777b80" stroke="#4c5055" strokeWidth="8"/>
          <rect x="720" y="1070" width="120" height="100"
            fill="#777b80" stroke="#4c5055" strokeWidth="8"/>
        </g>

        {/* Bridge pillars */}
        <g opacity={pillars}>
          <rect x="270" y="940" width="60" height="310"
            fill="#c4c6c4" stroke="#777" strokeWidth="8"/>
          <rect x="750" y="940" width="60" height="310"
            fill="#c4c6c4" stroke="#777" strokeWidth="8"/>
          <rect x="260" y="930" width="80" height="28" fill="#92999b"/>
          <rect x="740" y="930" width="80" height="28" fill="#92999b"/>
        </g>

        {/* Bridge deck */}
        <g opacity={deck}>
          <rect x="80" y="900" width={920 * deck} height="65"
            rx="8" fill="#777b80" stroke="#41464c" strokeWidth="9"/>
          <rect x="80" y="890" width={920 * deck} height="18"
            fill="#bfc4c6"/>
        </g>

        {/* Asphalt surface */}
        <g opacity={finish}>
          <rect x="85" y="865" width={910 * finish} height="35"
            fill="#343c44"/>
          <path d="M100 882 L980 882"
            stroke="#f6d66c" strokeWidth="7" strokeDasharray="45 35"/>
          <g fill="#e7e5d9">
            <rect x="100" y="855" width="12" height="22"/>
            <rect x="960" y="855" width="12" height="22"/>
          </g>
        </g>

        {/* Tower crane */}
        <g transform={`translate(${interpolate(frame,[0,1800],[120,150],clamp)},0)`}>
          <rect x="0" y="570" width="24" height="320" fill="#e5ad38"/>
          <rect x="-125" y="570" width="280" height="20" fill="#e5ad38"/>
          <path d="M12 570 L-100 590 L12 590 L125 590 Z"
            fill="#d58d22"/>
          <path d="M0 570 L0 890 M-110 590 L0 570 L140 590"
            fill="none" stroke="#9c6b25" strokeWidth="7"/>
          <path d="M110 590 L110 760" stroke="#555" strokeWidth="5"/>
          <rect x="88" y="760" width="44" height="35" fill="#e5ad38"/>
          <rect x="-35" y="890" width="95" height="25" fill="#777"/>
        </g>

        {/* Small construction workers */}
        <g fill="#f5a623" stroke="#493d2c" strokeWidth="5">
          <circle cx="430" cy="825" r="17"/>
          <rect x="415" y="845" width="30" height="65" rx="8"/>
          <circle cx="640" cy="825" r="17"/>
          <rect x="625" y="845" width="30" height="65" rx="8"/>
        </g>
        <g stroke="#343434" strokeWidth="9">
          <path d="M423 910 L410 950 M437 910 L450 950"/>
          <path d="M633 910 L620 950 M647 910 L660 950"/>
        </g>

        {/* Excavator */}
        <g transform={`translate(${interpolate(frame,[0,400],[30,180],clamp)},0)`}>
          <rect x="0" y="1050" width="150" height="38" rx="18" fill="#343a40"/>
          <rect x="25" y="1000" width="100" height="60" rx="12" fill="#e9aa24"/>
          <rect x="55" y="965" width="55" height="40" fill="#9dd3e5"/>
          <path d="M100 1000 L160 950 L190 1000"
            fill="none" stroke="#e9aa24" strokeWidth="22"/>
          <path d="M190 1000 L210 1040 L180 1040"
            fill="#bd8423"/>
        </g>

        {/* Progress indicator */}
        <rect x="100" y="1570" width="880" height="20" rx="10"
          fill="#ffffff" opacity="0.5"/>
        <rect x="100" y="1570" width={880 * progress} height="20"
          rx="10" fill="#f6bd45"/>

        <text x="540" y="1645" textAnchor="middle"
          fontSize="34" fontWeight="bold" fill="#fff">
          {phase}
        </text>

        <text x="540" y="1705" textAnchor="middle"
          fontSize="27" fill="#fff">
          MINIATURE BRIDGE CONSTRUCTION
        </text>

        <text x="540" y="1780" textAnchor="middle"
          fontSize="23" fill="#e8f4f7">
          {Math.round(progress * 100)}% COMPLETED
        </text>
      </svg>
    </AbsoluteFill>
  );
};
