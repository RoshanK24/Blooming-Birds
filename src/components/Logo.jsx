import logoFull from '../assets/logo-full.png';

function LogoText({ compact = false }) {
  return (
    <span className="min-w-0 leading-none">
      <span
        className={`block font-display font-700 ${compact ? 'text-sm sm:text-base' : 'text-base sm:text-[1.15rem]'}`}
        style={{ color: '#3E9E99' }}
      >
        Blooming Birds
      </span>
      <span
        className={`block font-body font-600 tracking-[0.1em] lowercase ${
          compact ? 'text-[0.5rem] sm:text-[0.55rem]' : 'text-[0.58rem] sm:text-[0.6rem]'
        } sm:tracking-[0.12em]`}
        style={{ color: '#E08A5E' }}
      >
        where little minds bloom
      </span>
    </span>
  );
}

export default function Logo({ size = 44, withText = true, link = true, className = '' }) {
  const compact = size <= 36;

  const content = (
    <>
      <img
        src={logoFull}
        alt={withText ? '' : 'Blooming Birds — where little minds bloom'}
        aria-hidden={withText || undefined}
        style={{ height: size, width: 'auto' }}
        className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {withText && <LogoText compact={compact} />}
    </>
  );

  const sharedClass = `group flex shrink-0 items-center ${compact ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-2.5'} ${className}`;

  if (link) {
    return (
      <a
        href="#top"
        className={sharedClass}
        aria-label="Blooming Birds — where little minds bloom"
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
