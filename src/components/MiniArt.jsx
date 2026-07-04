// Small custom illustrations (64x64) for activity + method cards.
// Each is a soft colour disc with a simple, recognisable icon in brand colours.

const S = ({ bg, children }) => (
  <svg viewBox="0 0 64 64" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="30" fill={bg} />
    {children}
  </svg>
);

export const miniArt = {
  /* ---- Activities ---- */
  arts: (
    <S bg="#FFE0CC">
      <path d="M32 17c9 0 17 7 17 15 0 5-4 8-9 7-3-1-4 4-8 4-8 0-16-6-16-14s7-12 16-12z" fill="#FF8C6B" />
      <circle cx="27" cy="27" r="2.6" fill="#FFC15E" /><circle cx="35" cy="24" r="2.6" fill="#6FC3E8" />
      <circle cx="41" cy="30" r="2.6" fill="#7ED9B0" /><circle cx="30" cy="35" r="2.6" fill="#B49BE8" />
    </S>
  ),
  music: (
    <S bg="#D7ECFF">
      <g fill="#3E6AA6">
        <rect x="26.5" y="21" width="3" height="21" rx="1.5" /><rect x="42.5" y="18" width="3" height="21" rx="1.5" />
        <path d="M26.5 21 L45.5 18 L45.5 24 L26.5 27 Z" />
        <ellipse cx="25" cy="43" rx="6" ry="4.6" /><ellipse cx="41" cy="40" rx="6" ry="4.6" />
      </g>
    </S>
  ),
  dance: (
    <S bg="#E7DEFF">
      <circle cx="30" cy="20" r="5" fill="#9B7FD4" />
      <path d="M30 25 l4 12 l-8 9" stroke="#9B7FD4" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M34 37 l7 8" stroke="#9B7FD4" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 29 l-9 -3" stroke="#9B7FD4" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 31 l11 -3" stroke="#9B7FD4" strokeWidth="4" strokeLinecap="round" />
      <circle cx="46" cy="24" r="2" fill="#FFC15E" /><circle cx="18" cy="40" r="2" fill="#FFC15E" />
    </S>
  ),
  story: (
    <S bg="#FFEFC9">
      <path d="M32 45 L17 41 V26 c0-1 1-2 2-2 l13 3 z" fill="#FFF8F0" stroke="#E5B98C" strokeWidth="1" />
      <path d="M32 45 L47 41 V26 c0-1 -1-2 -2-2 l-13 3 z" fill="#FDEEDD" />
      <path d="M17 41 L32 45 L47 41 l2 4 -17 5 -17-5z" fill="#FFC15E" />
      <path d="M42 16 l1.4 4 4 1.4 -4 1.4 -1.4 4 -1.4-4 -4-1.4 4-1.4z" fill="#FF8C6B" />
    </S>
  ),
  ball: (
    <S bg="#D7ECFF">
      <circle cx="32" cy="32" r="14" fill="#7ED9B0" />
      <path d="M32 18 a14 14 0 0 1 0 28" fill="#FF8C6B" opacity="0.9" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="#fff" strokeWidth="2.5" />
    </S>
  ),
  flask: (
    <S bg="#D5F5E8">
      <path d="M28 18h8v10l8 16c1.5 3-.5 6-4 6H24c-3.5 0-5.5-3-4-6l8-16z" fill="#EAF6FF" stroke="#6FC3E8" strokeWidth="2" />
      <path d="M23.5 40c1-6 16-6 17 0 1 4-1.5 6-4 6h-9c-2.5 0-4.5-2-4-6z" fill="#7ED9B0" />
      <rect x="27" y="15" width="10" height="4" rx="2" fill="#6FC3E8" />
      <circle cx="30" cy="41" r="1.6" fill="#fff" /><circle cx="35" cy="38" r="1.3" fill="#fff" />
    </S>
  ),
  puzzle: (
    <S bg="#FFE0CC">
      <rect x="22" y="25" width="20" height="20" rx="4" fill="#FF8C6B" />
      <circle cx="32" cy="24" r="4.5" fill="#FF8C6B" /><circle cx="43" cy="35" r="4.5" fill="#FF8C6B" />
      <circle cx="32" cy="35" r="3" fill="#fff" opacity="0.5" />
    </S>
  ),
  reading: (
    <S bg="#E7DEFF">
      <path d="M32 44 L18 40 V26 c0-1 1-2 2-2 l12 3 z" fill="#FFF8F0" stroke="#B49BE8" strokeWidth="1" />
      <path d="M32 44 L46 40 V26 c0-1 -1-2 -2-2 l-12 3 z" fill="#F1EAFF" />
      <g stroke="#C9B7E8" strokeWidth="2" strokeLinecap="round">
        <line x1="22" y1="30" x2="30" y2="32" /><line x1="22" y1="34" x2="30" y2="36" />
        <line x1="34" y1="32" x2="42" y2="30" /><line x1="34" y1="36" x2="42" y2="34" />
      </g>
    </S>
  ),
  yoga: (
    <S bg="#D5F5E8">
      <circle cx="32" cy="21" r="5" fill="#6DBF98" />
      <path d="M32 26 v8" stroke="#6DBF98" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 43 q12 -8 24 0 q-12 5 -24 0z" fill="#7ED9B0" />
      <path d="M32 31 l-10 6 M32 31 l10 6" stroke="#6DBF98" strokeWidth="3.4" strokeLinecap="round" />
    </S>
  ),
  nature: (
    <S bg="#FFEFC9">
      <path d="M32 47 V29" stroke="#6DBF98" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 33 c-11 0 -15 -8 -15 -14 11 0 15 6 15 14z" fill="#7ED9B0" />
      <path d="M32 29 c11 0 15 -8 15 -14 -11 0 -15 6 -15 14z" fill="#6DBF98" />
    </S>
  ),
  blocks: (
    <S bg="#FFE0CC">
      <rect x="19" y="34" width="13" height="13" rx="2.5" fill="#FF8C6B" />
      <rect x="33" y="34" width="13" height="13" rx="2.5" fill="#6FC3E8" />
      <rect x="26" y="20" width="13" height="13" rx="2.5" fill="#FFC15E" />
      <circle cx="32.5" cy="26.5" r="2.4" fill="#fff" opacity="0.7" />
    </S>
  ),
  robot: (
    <S bg="#D7ECFF">
      <line x1="32" y1="16" x2="32" y2="24" stroke="#B49BE8" strokeWidth="2" />
      <circle cx="32" cy="15" r="2.6" fill="#FF8C6B" />
      <rect x="21" y="24" width="22" height="18" rx="6" fill="#6FC3E8" />
      <circle cx="28" cy="32" r="3.2" fill="#fff" /><circle cx="36" cy="32" r="3.2" fill="#fff" />
      <circle cx="28" cy="32" r="1.5" fill="#4A3B52" /><circle cx="36" cy="32" r="1.5" fill="#4A3B52" />
      <rect x="27" y="37" width="10" height="2.4" rx="1.2" fill="#fff" />
    </S>
  ),

  /* ---- Method ---- */
  explore: (
    <S bg="#D7ECFF">
      <circle cx="29" cy="28" r="11" fill="#CFF0FF" stroke="#6FC3E8" strokeWidth="3.5" />
      <line x1="38" y1="37" x2="47" y2="46" stroke="#6FC3E8" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M24 25 a6 6 0 0 1 5-4" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </S>
  ),
  imagine: (
    <S bg="#E7DEFF">
      <path d="M32 17 a11 11 0 0 1 7 19 v3 h-14 v-3 a11 11 0 0 1 7-19z" fill="#FFC15E" />
      <rect x="26" y="40" width="12" height="3.4" rx="1.7" fill="#B49BE8" />
      <rect x="27.5" y="44" width="9" height="3" rx="1.5" fill="#B49BE8" />
    </S>
  ),
  create: (
    <S bg="#FFE0CC">
      <g transform="rotate(24 32 32)">
        <rect x="28" y="21" width="8" height="20" rx="2" fill="#FF8C6B" />
        <path d="M28 21 l4 -7 4 7z" fill="#FFC15E" />
        <rect x="28" y="37" width="8" height="4" fill="#E5714F" />
      </g>
    </S>
  ),
  learn: (
    <S bg="#FFEFC9">
      <path d="M32 16 l4.2 10 10.8 1 -8.2 7.2 2.8 10.8 -9.6-6 -9.6 6 2.8-10.8 -8.2-7.2 10.8-1z" fill="#FFC15E" />
    </S>
  ),
  grow: (
    <S bg="#D5F5E8">
      <path d="M20 41 h24 v3 a4 4 0 0 1 -4 4 H24 a4 4 0 0 1 -4-4z" fill="#C08C5A" />
      <path d="M32 41 V29" stroke="#6DBF98" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 33 c-8 0 -11 -6 -11 -10 8 0 11 4 11 10z" fill="#7ED9B0" />
      <path d="M32 31 c8 0 11 -6 11 -10 -8 0 -11 4 -11 10z" fill="#6DBF98" />
    </S>
  ),
  celebrate: (
    <S bg="#FFE0CC">
      <path d="M17 47 L31 31 l5 5 z" fill="#FFC15E" />
      <path d="M31 31 l5 5" stroke="#E5A93E" strokeWidth="1.5" />
      <circle cx="40" cy="23" r="2" fill="#FF8C6B" /><circle cx="45" cy="29" r="2" fill="#6FC3E8" />
      <circle cx="38" cy="33" r="2" fill="#7ED9B0" /><circle cx="46" cy="21" r="2" fill="#B49BE8" />
      <path d="M34 28 l4 -3 M38 32 l5 -1" stroke="#B49BE8" strokeWidth="2" strokeLinecap="round" />
    </S>
  ),

  /* ---- Admissions steps ---- */
  calendar: (
    <S bg="#FFE0CC">
      <line x1="25" y1="16" x2="25" y2="23" stroke="#E5714F" strokeWidth="3" strokeLinecap="round" />
      <line x1="39" y1="16" x2="39" y2="23" stroke="#E5714F" strokeWidth="3" strokeLinecap="round" />
      <rect x="18" y="20" width="28" height="26" rx="5" fill="#fff" stroke="#FF8C6B" strokeWidth="2.5" />
      <path d="M18 28 h28" stroke="#FF8C6B" strokeWidth="2.5" />
      <circle cx="32" cy="38" r="5" fill="#FFC15E" />
      <path d="M30 38 l1.5 1.6 3-3.4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  tour: (
    <S bg="#D7ECFF">
      <path d="M20 45 V31 l12 -9 12 9 V45 z" fill="#6FC3E8" />
      <path d="M20 31 l12 -9 12 9" fill="none" stroke="#4E9BC4" strokeWidth="2" strokeLinejoin="round" />
      <rect x="28" y="35" width="8" height="10" rx="1" fill="#CDEBF8" />
      <rect x="24" y="32" width="5" height="5" rx="1" fill="#EAF6FF" /><rect x="35" y="32" width="5" height="5" rx="1" fill="#EAF6FF" />
      <line x1="32" y1="22" x2="32" y2="15" stroke="#B49BE8" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 15 l7 2 -7 3 z" fill="#FF8C6B" />
    </S>
  ),
  teacher: (
    <S bg="#D5F5E8">
      <circle cx="25" cy="29" r="8" fill="#F0B892" />
      <path d="M17 28 c0-9 16-9 16 0 0-3-2-8-8-8s-8 5-8 8z" fill="#3E2A1C" />
      <circle cx="22.5" cy="29" r="1.3" fill="#4A3B52" /><circle cx="27.5" cy="29" r="1.3" fill="#4A3B52" />
      <path d="M22.5 32 q2.5 2.5 5 0" stroke="#4A3B52" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="34" r="6" fill="#EEC49E" />
      <path d="M36 33 c0-7 12-7 12 0 0-2-2-6-6-6s-6 4-6 6z" fill="#5B3B24" />
      <circle cx="40" cy="34" r="1" fill="#4A3B52" /><circle cx="44" cy="34" r="1" fill="#4A3B52" />
      <path d="M40.5 36 q1.5 1.5 3 0" stroke="#4A3B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </S>
  ),
  form: (
    <S bg="#E7DEFF">
      <rect x="20" y="19" width="24" height="30" rx="3" fill="#fff" stroke="#B49BE8" strokeWidth="2.5" />
      <rect x="27" y="15" width="10" height="7" rx="2.5" fill="#B49BE8" />
      <line x1="25" y1="30" x2="39" y2="30" stroke="#CDBBEC" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="25" y1="36" x2="39" y2="36" stroke="#CDBBEC" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24.5 42 l3 3 5.5 -6.5" stroke="#7ED9B0" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  welcome: (
    <S bg="#FFEFC9">
      <path d="M32 45 C17 34 18 21 26 21 c4 0 6 3.5 6 3.5 s2-3.5 6-3.5 c8 0 9 13 -6 24z" fill="#FF8C6B" />
      <circle cx="19" cy="20" r="2" fill="#FFC15E" /><circle cx="45" cy="22" r="2" fill="#6FC3E8" />
      <circle cx="43" cy="40" r="2" fill="#B49BE8" /><circle cx="21" cy="40" r="2" fill="#7ED9B0" />
    </S>
  ),
};
