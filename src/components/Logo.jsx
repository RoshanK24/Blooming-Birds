import logoFull from '../assets/logo-full.png';

export default function Logo({ size = 52, link = true, className = '' }) {
  const content = (
    <img
      src={logoFull}
      alt="Blooming Birds — where little minds bloom"
      style={{ height: size, width: 'auto' }}
      className="block shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />
  );

  const sharedClass = `group shrink-0 ${className}`;

  if (link) {
    return (
      <a href="#top" className={sharedClass} aria-label="Blooming Birds home">
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
