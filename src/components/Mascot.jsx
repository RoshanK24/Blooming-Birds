// Friendly Blooming Birds mascot — a cheerful bird waving hello.
export default function Mascot({ className = '' }) {
  return (
    <svg viewBox="0 0 160 170" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* flower petals crown */}
      <g>
        <circle cx="80" cy="18" r="10" fill="#FF8C6B" />
        <circle cx="104" cy="30" r="10" fill="#FFC15E" />
        <circle cx="56" cy="30" r="10" fill="#B49BE8" />
        <circle cx="80" cy="26" r="7" fill="#FFF3D6" />
      </g>
      {/* body */}
      <path d="M40 92c0-24 18-40 42-40s38 16 38 36c0 26-20 46-46 46-22 0-34-16-34-32 0-4 0-6 0-10z" fill="#6FC3E8" />
      {/* belly */}
      <ellipse cx="78" cy="108" rx="24" ry="26" fill="#CDEBF8" />
      {/* wing (waving, up) */}
      <g className="mascot-wave" style={{ transformBox: 'fill-box', transformOrigin: 'bottom left' }}>
        <path d="M52 78c-14-6-26-2-34-14 12-4 20-4 30 2 4 3 6 8 4 12z" fill="#7ED9B0" />
      </g>
      {/* other wing */}
      <path d="M108 96c12 2 20 8 24 18-10 1-18-1-25-7-2-4-1-9 1-11z" fill="#7ED9B0" />
      {/* beak */}
      <path d="M40 84l-14 5 14 6z" fill="#FFC15E" />
      {/* eye */}
      <circle cx="58" cy="80" r="5" fill="#4A3B52" />
      <circle cx="60" cy="78" r="1.6" fill="#fff" />
      {/* cheek */}
      <circle cx="52" cy="90" r="4" fill="#FF8C6B" opacity="0.4" />
      {/* feet */}
      <path d="M66 136v10M62 148h8M78 136v10M74 148h8" stroke="#FFC15E" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
