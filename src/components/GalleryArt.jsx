// Hand-crafted illustrated scenes with children — on-brand, interactive, never break.
// Positioning lives on the OUTER <g transform>; animation classes go on an INNER <g>
// so CSS animation transforms never clobber SVG positioning.

const base = {
  className: 'h-full w-full',
  viewBox: '0 0 400 300',
  preserveAspectRatio: 'xMidYMid slice',
  xmlns: 'http://www.w3.org/2000/svg',
};

// Reusable happy child. Head at local (0,0); feet at ~ +50 before scale.
function Kid({ x, y, s = 1, skin = '#F7C9A0', hair = '#5B3B24', shirt = '#FF8C6B', pants = '#5E7CA6', wave = false, flip = false }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <g className="sc-kid">
        <rect x="-8" y="34" width="6.5" height="16" rx="3.2" fill={pants} />
        <rect x="1.5" y="34" width="6.5" height="16" rx="3.2" fill={pants} />
        <ellipse cx="-5" cy="51" rx="5" ry="3" fill="#4A3B52" />
        <ellipse cx="5" cy="51" rx="5" ry="3" fill="#4A3B52" />
        <rect x="-12" y="13" width="24" height="27" rx="10" fill={shirt} />
        <rect x="-19" y="15" width="8" height="19" rx="4" fill={shirt} transform={wave ? 'rotate(-52 -15 17)' : ''} />
        <rect x="11" y="15" width="8" height="19" rx="4" fill={shirt} />
        <circle cx={wave ? -21 : -15} cy={wave ? 2 : 33} r="3.4" fill={skin} />
        <circle cx="15" cy="33" r="3.4" fill={skin} />
        <circle cx="0" cy="0" r="12" fill={skin} />
        <path d="M-12.5 -1c0-11 25-11 25 0 0-3-2-11-12.5-11S-12.5-4-12.5-1z" fill={hair} />
        <circle cx="-4.2" cy="1.5" r="1.6" fill="#4A3B52" />
        <circle cx="4.2" cy="1.5" r="1.6" fill="#4A3B52" />
        <path d="M-4 6.5q4 4 8 0" stroke="#4A3B52" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="-7.2" cy="4.5" r="2.1" fill="#FF8C6B" opacity="0.45" />
        <circle cx="7.2" cy="4.5" r="2.1" fill="#FF8C6B" opacity="0.45" />
      </g>
    </g>
  );
}

function Classroom() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="cl-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFF1E6" /><stop offset="1" stopColor="#FFE0CC" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#cl-bg)" />
      <rect y="222" width="400" height="78" fill="#F6C9A8" />
      <rect y="222" width="400" height="10" fill="#EBB891" />
      <ellipse cx="205" cy="272" rx="150" ry="24" fill="#7ED9B0" opacity="0.5" />
      <rect x="30" y="50" width="88" height="78" rx="12" fill="#DFF3FF" stroke="#fff" strokeWidth="6" />
      <circle cx="96" cy="74" r="11" fill="#FFC15E" />
      <path d="M36 112c13-13 23-13 38 0 13-11 25-11 38 0v14H36z" fill="#7ED9B0" opacity="0.7" />
      <rect x="172" y="44" width="180" height="102" rx="12" fill="#4A6A5A" stroke="#B98A5E" strokeWidth="8" />
      <text x="196" y="104" fontFamily="Fredoka, sans-serif" fontSize="40" fontWeight="700" fill="#FFF8F0">ABC</text>
      <g className="svg-anim sc-twinkle" style={{ transformOrigin: '316px 80px' }}><circle cx="316" cy="80" r="12" fill="#FFC15E" /></g>
      <rect x="104" y="196" width="80" height="15" rx="6" fill="#FF8C6B" />
      <rect x="112" y="211" width="8" height="32" fill="#E5714F" /><rect x="168" y="211" width="8" height="32" fill="#E5714F" />
      <rect x="124" y="183" width="38" height="15" rx="4" fill="#6FC3E8" />
      <rect x="330" y="214" width="32" height="28" rx="6" fill="#B49BE8" />
      <path d="M346 214c-13-6-17-22-6-32 4 15 11 19 6 32z" fill="#7ED9B0" />
      <path d="M346 216c11-8 11-24 0-32-2 15-7 21 0 32z" fill="#6DBF98" />
      <Kid x={250} y={198} s={0.95} skin="#F0B892" hair="#3E2A1C" shirt="#6FC3E8" pants="#B49BE8" wave />
    </svg>
  );
}

function ArtCorner() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="ar-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#EDE6FF" /><stop offset="1" stopColor="#DCEEFF" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#ar-bg)" />
      <ellipse cx="215" cy="274" rx="170" ry="22" fill="#B49BE8" opacity="0.32" />
      <line x1="150" y1="94" x2="120" y2="260" stroke="#C08C5A" strokeWidth="10" strokeLinecap="round" />
      <line x1="252" y1="94" x2="284" y2="260" stroke="#C08C5A" strokeWidth="10" strokeLinecap="round" />
      <line x1="176" y1="198" x2="228" y2="198" stroke="#A87745" strokeWidth="9" strokeLinecap="round" />
      <rect x="132" y="66" width="140" height="116" rx="8" fill="#FFFDF8" stroke="#fff" strokeWidth="7" />
      <circle cx="238" cy="100" r="16" fill="#FFC15E" />
      <path d="M150 164l30-42 26 30 20-26 26 38z" fill="#7ED9B0" />
      <path d="M148 164l40-16 34 16z" fill="#6FC3E8" />
      <rect x="162" y="124" width="30" height="30" rx="4" fill="#FF8C6B" /><path d="M162 124h30v10h-30z" fill="#E5714F" />
      <path d="M300 208c26 0 40 16 40 30s-16 24-30 20c-10-3-6-14-16-14s-8 12-18 8c-12-5-16-18-10-30 6-11 20-24 34-24z" fill="#FFF3E6" stroke="#fff" strokeWidth="4" />
      <circle cx="316" cy="220" r="6" fill="#FF8C6B" /><circle cx="332" cy="232" r="6" fill="#6FC3E8" />
      <circle cx="320" cy="246" r="6" fill="#7ED9B0" /><circle cx="302" cy="238" r="6" fill="#B49BE8" />
      <line x1="90" y1="150" x2="120" y2="120" stroke="#C08C5A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="120" r="4" fill="#FF8C6B" />
      <Kid x={78} y={196} s={0.92} skin="#8D5A3C" hair="#241812" shirt="#FFC15E" pants="#6FC3E8" wave />
    </svg>
  );
}

function Outdoor() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="ou-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#CFEFFF" /><stop offset="1" stopColor="#E9FBF3" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#ou-sky)" />
      <path d="M0 214c60-20 120-20 200-6s140 6 200-8v100H0z" fill="#7ED9B0" />
      <path d="M0 244c80-14 150-8 200 0s140 8 200-4v60H0z" fill="#6DBF98" />
      <g className="svg-anim sc-sun" style={{ transformOrigin: '62px 62px' }}>
        <circle cx="62" cy="62" r="24" fill="#FFC15E" />
        <g stroke="#FFC15E" strokeWidth="5" strokeLinecap="round">
          <line x1="62" y1="20" x2="62" y2="30" /><line x1="62" y1="94" x2="62" y2="104" />
          <line x1="20" y1="62" x2="30" y2="62" /><line x1="94" y1="62" x2="104" y2="62" />
          <line x1="32" y1="32" x2="39" y2="39" /><line x1="85" y1="85" x2="92" y2="92" />
          <line x1="92" y1="32" x2="85" y2="39" /><line x1="39" y1="85" x2="32" y2="92" />
        </g>
      </g>
      <g className="svg-anim sc-bob" fill="#FFFFFF" opacity="0.92"><ellipse cx="308" cy="66" rx="34" ry="19" /><ellipse cx="338" cy="70" rx="24" ry="15" /><ellipse cx="280" cy="72" rx="22" ry="13" /></g>
      <rect x="252" y="122" width="12" height="96" rx="6" fill="#B49BE8" /><rect x="302" y="122" width="12" height="96" rx="6" fill="#B49BE8" />
      <rect x="242" y="116" width="82" height="14" rx="6" fill="#9B7FD4" />
      <path d="M258 134c0 40-10 58-70 78l-8-20c48-16 54-30 54-58z" fill="#FF8C6B" />
      <rect x="178" y="146" width="14" height="70" rx="6" fill="#E5714F" />
      <g className="svg-anim sc-bob-2">
        <circle cx="330" cy="238" r="20" fill="#6FC3E8" />
        <path d="M330 218a20 20 0 0 1 0 40" fill="#FF8C6B" opacity="0.85" />
        <circle cx="330" cy="238" r="20" fill="none" stroke="#fff" strokeWidth="3" />
      </g>
      <Kid x={150} y={198} s={0.95} skin="#F0B892" hair="#4A2E1E" shirt="#B49BE8" pants="#FF8C6B" wave />
      <circle cx="58" cy="256" r="6" fill="#FF8C6B" /><circle cx="58" cy="256" r="2.5" fill="#FFC15E" />
    </svg>
  );
}

function Storytelling() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="st-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3B2F55" /><stop offset="1" stopColor="#5A4A7A" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#st-bg)" />
      <circle cx="332" cy="60" r="28" fill="#FFE7B0" /><circle cx="344" cy="54" r="24" fill="#3B2F55" />
      <g fill="#FFF3D6"><circle cx="70" cy="48" r="2.5" /><circle cx="120" cy="78" r="2" /><circle cx="262" cy="44" r="2.5" /><circle cx="180" cy="38" r="2" /><circle cx="300" cy="108" r="2" /><circle cx="40" cy="108" r="2" /></g>
      <path d="M200 236l-96-22V126c0-8 6-12 14-10l82 20z" fill="#FFF8F0" />
      <path d="M200 236l96-22V126c0-8-6-12-14-10l-82 20z" fill="#FDEEDD" />
      <path d="M200 156v80" stroke="#E7D4C2" strokeWidth="4" />
      <path d="M104 214l96 22 96-22 8 20-104 24-104-24z" fill="#FF8C6B" />
      <path d="M200 236l104-24 8 20-112 26z" fill="#E5714F" />
      <g stroke="#C9A98E" strokeWidth="4" strokeLinecap="round">
        <line x1="122" y1="148" x2="184" y2="162" /><line x1="122" y1="164" x2="176" y2="176" /><line x1="122" y1="180" x2="184" y2="192" />
        <line x1="216" y1="162" x2="278" y2="148" /><line x1="224" y1="176" x2="278" y2="164" /><line x1="216" y1="192" x2="278" y2="180" />
      </g>
      <g transform="translate(200 150)"><g className="sc-kid">
        <circle cx="0" cy="0" r="15" fill="#EEC49E" />
        <path d="M-16 -2c0-14 32-14 32 0 0-4-3-14-16-14s-16 10-16 14z" fill="#2E1F16" />
        <circle cx="-5.5" cy="1.5" r="2" fill="#4A3B52" /><circle cx="5.5" cy="1.5" r="2" fill="#4A3B52" />
        <path d="M-5 7q5 5 10 0" stroke="#4A3B52" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="-9" cy="5" r="2.6" fill="#FF8C6B" opacity="0.45" /><circle cx="9" cy="5" r="2.6" fill="#FF8C6B" opacity="0.45" />
        <circle cx="-17" cy="20" r="4.5" fill="#EEC49E" /><circle cx="17" cy="20" r="4.5" fill="#EEC49E" />
      </g></g>
      <g className="svg-anim sc-twinkle" style={{ transformOrigin: '153px 116px' }}><path d="M150 110l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFC15E" /></g>
      <g className="svg-anim sc-twinkle-2" style={{ transformOrigin: '253px 112px' }}><path d="M250 106l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFC15E" /></g>
    </svg>
  );
}

function Science() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="sc-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCEEFF" /><stop offset="1" stopColor="#EDE6FF" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#sc-bg)" />
      <ellipse cx="215" cy="272" rx="165" ry="22" fill="#6FC3E8" opacity="0.28" />
      <path d="M150 92h34v46l40 74c6 12-2 24-16 24h-82c-14 0-22-12-16-24l40-74z" fill="#EAF6FF" stroke="#fff" strokeWidth="6" />
      <path d="M132 192c4-30 66-30 70 0 4 20-6 32-20 32h-30c-14 0-22-12-20-32z" fill="#7ED9B0" opacity="0.85" />
      <rect x="146" y="84" width="42" height="12" rx="6" fill="#6FC3E8" />
      <g className="svg-anim sc-bob" fill="#FFFFFF" opacity="0.9"><circle cx="158" cy="184" r="6" /><circle cx="178" cy="172" r="4" /><circle cx="168" cy="200" r="5" /></g>
      <rect x="240" y="118" width="26" height="94" rx="13" fill="#EAF6FF" stroke="#fff" strokeWidth="5" />
      <path d="M243 174h20v26a10 10 0 0 1-20 0z" fill="#FF8C6B" />
      <rect x="236" y="110" width="34" height="10" rx="5" fill="#B49BE8" />
      <circle cx="308" cy="112" r="28" fill="#CFF0FF" stroke="#FFC15E" strokeWidth="8" />
      <line x1="328" y1="132" x2="352" y2="156" stroke="#FFC15E" strokeWidth="12" strokeLinecap="round" />
      <Kid x={86} y={200} s={0.9} skin="#C98A5B" hair="#1E140E" shirt="#6FC3E8" pants="#FFC15E" />
      <g className="svg-anim sc-twinkle" style={{ transformOrigin: '121px 72px' }}><path d="M118 66l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFC15E" /></g>
    </svg>
  );
}

function Celebrations() {
  return (
    <svg {...base} aria-hidden="true">
      <defs><linearGradient id="ce-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFE6EE" /><stop offset="1" stopColor="#EEE6FF" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#ce-bg)" />
      <path d="M12 38C140 88 260 88 388 38" fill="none" stroke="#B49BE8" strokeWidth="3" />
      {[[40, '#FF8C6B'], [86, '#FFC15E'], [132, '#6FC3E8'], [178, '#7ED9B0'], [224, '#B49BE8'], [270, '#FF8C6B'], [316, '#FFC15E'], [360, '#6FC3E8']].map(([x, c], i) => (
        <path key={i} d={`M${x - 14} ${50 + Math.abs(200 - x) * 0.06} L${x + 14} ${50 + Math.abs(200 - x) * 0.06} L${x} ${84 + Math.abs(200 - x) * 0.06} Z`} fill={c} />
      ))}
      <g className="svg-anim sc-bob">
        <ellipse cx="86" cy="132" rx="24" ry="30" fill="#FF8C6B" />
        <ellipse cx="79" cy="123" rx="6" ry="9" fill="#fff" opacity="0.4" />
        <path d="M86 162 l-4 8 4 6 -4 8" fill="none" stroke="#B49BE8" strokeWidth="2" />
      </g>
      <g className="svg-anim sc-bob-2">
        <ellipse cx="312" cy="130" rx="24" ry="30" fill="#7ED9B0" />
        <ellipse cx="305" cy="121" rx="6" ry="9" fill="#fff" opacity="0.4" />
        <path d="M312 160 l-4 8 4 6 -4 8" fill="none" stroke="#B49BE8" strokeWidth="2" />
      </g>
      <path d="M172 214h56l-8 44h-40z" fill="#FFE0CC" /><path d="M172 214h56l-2 12h-52z" fill="#E9C6AC" />
      <path d="M166 214c0-24 68-24 68 0z" fill="#FF8C6B" /><path d="M176 206c0-14 48-14 48 0z" fill="#E5714F" />
      <g className="svg-anim sc-twinkle" style={{ transformOrigin: '200px 188px' }}><circle cx="200" cy="188" r="7" fill="#FFC15E" /></g>
      <line x1="146" y1="214" x2="150" y2="150" stroke="#B49BE8" strokeWidth="2" />
      <g className="svg-anim sc-bob"><ellipse cx="150" cy="132" rx="18" ry="22" fill="#6FC3E8" /><ellipse cx="145" cy="126" rx="4" ry="7" fill="#fff" opacity="0.4" /></g>
      <Kid x={120} y={214} s={0.9} skin="#F0B892" hair="#3E2A1C" shirt="#FFC15E" pants="#6FC3E8" wave />
      <rect x="60" y="208" width="8" height="8" rx="2" fill="#6FC3E8" transform="rotate(20 64 212)" />
      <rect x="330" y="218" width="8" height="8" rx="2" fill="#FF8C6B" transform="rotate(-25 334 222)" />
      <circle cx="300" cy="248" r="4" fill="#7ED9B0" /><circle cx="66" cy="252" r="4" fill="#B49BE8" />
      <rect x="252" y="240" width="7" height="7" rx="2" fill="#FFC15E" transform="rotate(30 255 243)" />
    </svg>
  );
}

export const scenes = {
  classroom: <Classroom />,
  art: <ArtCorner />,
  outdoor: <Outdoor />,
  story: <Storytelling />,
  science: <Science />,
  celebration: <Celebrations />,
};
