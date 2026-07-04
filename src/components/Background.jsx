import { useEffect } from 'react';

// Ambient drifting pastel orbs behind the frosted glass
export function Orbs() {
  const orbs = [
    { c: '#FF8C6B', s: 320, top: '6%', left: '-6%', a: 'animate-float' },
    { c: '#6FC3E8', s: 260, top: '38%', left: '84%', a: 'animate-floatSlow' },
    { c: '#B49BE8', s: 300, top: '68%', left: '-4%', a: 'animate-float' },
    { c: '#7ED9B0', s: 240, top: '84%', left: '78%', a: 'animate-floatSlow' },
    { c: '#FFC15E', s: 200, top: '20%', left: '46%', a: 'animate-float' },
  ];
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {orbs.map((o, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${o.a}`}
          style={{
            width: o.s,
            height: o.s,
            top: o.top,
            left: o.left,
            background: o.c,
            opacity: 0.28,
            filter: 'blur(70px)',
            animationDelay: `${i * 1.4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Scroll-reveal: adds .in when elements enter viewport
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
