import logoFull from '../assets/logo-full.png';
import logoMark from '../assets/logo-mark.png';

function LogoText() {
  return (
    <span className="min-w-0 leading-none">
      <span className="block font-display font-700 text-[1.15rem]" style={{ color: '#3E9E99' }}>
        Blooming Birds
      </span>
      <span
        className="block font-body font-600 text-[0.6rem] tracking-[0.12em] lowercase"
        style={{ color: '#E08A5E' }}
      >
        where little minds bloom
      </span>
    </span>
  );
}

export default function Logo({ size = 44, withText = true, link = true, className = '' }) {
  const content = withText ? (
    <>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        style={{ height: size, width: size }}
        className="shrink-0 object-contain transition-transform duration-300 group-hover:-rotate-6"
      />
      <LogoText />
    </>
  ) : (
    <img
      src={logoFull}
      alt="Blooming Birds — where little minds bloom"
      style={{ height: size, width: 'auto' }}
      className="block shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />
  );

  const sharedClass = `group flex shrink-0 items-center gap-2.5 ${className}`;

  if (link) {
    return (
      <a href="#top" className={sharedClass} aria-label="Blooming Birds home">
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
