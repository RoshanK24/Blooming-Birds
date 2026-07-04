import { pillars, whyUs, programs, activities, method } from '../data.js';
import { miniArt } from './MiniArt.jsx';

export function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="reveal mx-auto mb-8 max-w-3xl text-center sm:mb-12">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title mt-4">{title}</h2>
      {sub && <p className="section-sub mt-3 sm:mt-4">{sub}</p>}
    </div>
  );
}

// Shared static colour maps (kept literal so Tailwind JIT picks them up)
const blob = {
  coral: 'bg-coral/25',
  sky: 'bg-sky/25',
  mint: 'bg-mint/25',
  lavender: 'bg-lavender/25',
  sunshine: 'bg-sunshine/30',
};
const gradLight = {
  coral: 'from-coral/25 to-sunshine/25',
  sky: 'from-sky/25 to-lavender/25',
  mint: 'from-mint/25 to-sky/25',
  lavender: 'from-lavender/25 to-coral/25',
  sunshine: 'from-sunshine/30 to-mint/25',
};

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="🌷 Our Philosophy"
          title="A preschool built by a scientist, run with a mother's heart"
          sub="We believe the early years aren't a race. They're a season to explore, wonder, and grow — gently and joyfully."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="reveal glass glass-hover rounded-2xl p-3.5 sm:rounded-3xl sm:p-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl ${p.tint}`}>
                {p.emoji}
              </div>
              <h3 className="card-title mt-2.5 sm:mt-4">{p.title}</h3>
              <p className="card-text mt-1.5 sm:mt-2">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyCycle = ['coral', 'sky', 'mint', 'lavender', 'sunshine', 'coral', 'sky', 'lavender'];

export function WhyUs() {
  return (
    <section id="why" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="💛 Why Parents Choose Us" title="Little things we do, that make a big difference" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const col = whyCycle[i % whyCycle.length];
            return (
              <article
                key={w.title}
                className="reveal group glass glass-hover relative overflow-hidden rounded-2xl p-3.5 sm:rounded-3xl sm:p-5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={`pointer-events-none absolute -right-7 -top-7 h-20 w-20 rounded-full ${blob[col]} blur-xl transition-transform duration-500 group-hover:scale-150`} />
                <div className={`hover-pop relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-xl sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl ${gradLight[col]}`}>
                  {w.emoji}
                </div>
                <h3 className="card-title-bold relative mt-2.5 sm:mt-3.5">{w.title}</h3>
                <p className="card-text relative mt-1">{w.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const programColors = {
  coral: { orb: 'bg-coral', badge: 'bg-coral/20', dot: 'bg-coral' },
  sunshine: { orb: 'bg-sunshine', badge: 'bg-sunshine/25', dot: 'bg-sunshine' },
  mint: { orb: 'bg-mint', badge: 'bg-mint/25', dot: 'bg-mint' },
  lavender: { orb: 'bg-lavender', badge: 'bg-lavender/25', dot: 'bg-lavender' },
};

export function Programs() {
  return (
    <section id="programs" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="📚 Our Programs"
          title="The right nest for every age"
          sub="Four thoughtfully designed programs that grow with your child, from first steps to school-ready."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {programs.map((p, i) => {
            const c = programColors[p.color];
            return (
              <article
                key={p.name}
                className="reveal glass glass-hover group relative overflow-hidden rounded-2xl p-3.5 sm:rounded-[1.75rem] sm:p-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${c.orb} opacity-20 blur-xl transition-transform group-hover:scale-150`} />
                <div className="relative">
                  <span className="text-2xl sm:text-4xl">{p.emoji}</span>
                  <div className="mt-2 sm:mt-3">
                    <h3 className="card-title-bold">{p.name}</h3>
                    <span className={`mt-1 inline-block rounded-full ${c.badge} px-2 py-0.5 font-body text-[0.7rem] font-700 text-ink sm:px-3 sm:py-1 sm:text-xs`}>
                      {p.age}
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1 sm:mt-4 sm:space-y-1.5">
                    {p.activities.map((a) => (
                      <li key={a} className="card-text flex items-start gap-1.5 text-ink/70 sm:items-center sm:gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full sm:mt-0 ${c.dot}`} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="🎪 Daily Activities"
          title="Every day is a new adventure"
          sub="A rotating mix of play, art, movement and discovery keeps little minds curious and joyful."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {activities.map((a, i) => (
            <article
              key={a.name}
              className="reveal group glass glass-hover flex items-center gap-4 rounded-3xl p-4"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <div className="hover-pop h-12 w-12 shrink-0 sm:h-16 sm:w-16">{miniArt[a.key]}</div>
              <div className="min-w-0">
                <div className="card-title-bold leading-tight">{a.name}</div>
                <div className="font-body text-xs text-ink/50 sm:text-xs">Hands-on fun</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const methodChip = {
  sky: 'text-sky', lavender: 'text-lavender', coral: 'text-coral',
  sunshine: 'text-[#E5A93E]', mint: 'text-[#4FB98A]',
};

export function Method() {
  return (
    <section id="method" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="🌱 The Blooming Method"
          title="How a little seed becomes a confident child"
          sub="Our six-stage journey turns everyday play into lifelong learning."
        />

        {/* Desktop journey */}
        <div className="relative hidden lg:block">
          <svg className="absolute inset-x-0 top-10 h-3 w-full" preserveAspectRatio="none" viewBox="0 0 1000 12">
            <line x1="30" y1="6" x2="970" y2="6" stroke="#7ED9B0" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" opacity="0.65" />
          </svg>
          <ol className="relative grid grid-cols-6 gap-3">
            {method.map((m, i) => (
              <li key={m.step} className="group flex flex-col items-center text-center">
                <div className="relative transition-transform duration-300 group-hover:-translate-y-1.5">
                  <div className="hover-pop h-20 w-20 drop-shadow-sm">{miniArt[m.key]}</div>
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white font-display font-700 text-xs text-ink shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className={`card-title-bold mt-2.5 sm:mt-3 ${methodChip[m.color]}`}>{m.step}</h3>
                <p className="card-text mt-1 text-ink/60">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile timeline */}
        <ol className="relative space-y-5 lg:hidden">
          <span className="absolute bottom-8 left-[38px] top-8 w-0.5 bg-mint/40" aria-hidden="true" />
          {method.map((m, i) => (
            <li key={m.step} className="relative flex items-start gap-4">
              <div className="relative z-10 h-[4.75rem] w-[4.75rem] shrink-0">
                {miniArt[m.key]}
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white font-display font-700 text-xs text-ink shadow">
                  {i + 1}
                </span>
              </div>
              <div className="pt-2">
                <h3 className={`card-title-bold ${methodChip[m.color]}`}>{m.step}</h3>
                <p className="card-text mt-0.5 text-ink/60">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
