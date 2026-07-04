import { useRef, useState, useEffect } from 'react';
import { gallery, testimonials, facilities, admissions } from '../data.js';
import { SectionHead } from './Sections.jsx';
import { scenes } from './GalleryArt.jsx';
import { miniArt } from './MiniArt.jsx';
import Logo from './Logo.jsx';

/* ---------------- Gallery (interactive illustrated scenes) ---------------- */
export function Gallery() {
  return (
    <section id="gallery" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="📸 A Peek Inside"
          title="Little moments, big smiles"
          sub="A glimpse of the joyful days that fill our classrooms. Hover to see them come alive."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <figure
              key={g.label}
              className="gal-fig reveal group relative aspect-[4/3] overflow-hidden rounded-3xl glass-strong p-1.5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.06]">
                  {scenes[g.key]}
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent px-2.5 pb-2 pt-7 sm:gap-2 sm:px-3.5 sm:pb-3 sm:pt-9">
                  <span className="text-base drop-shadow-md sm:text-xl">{g.emoji}</span>
                  <span className="font-display text-sm font-700 text-white drop-shadow-md sm:text-base">{g.label}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials (carousel on mobile, grid on desktop) ------- */
export function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0];
    if (!card) return;
    const step = card.offsetWidth + 16; // gap-4
    setActive(Math.round(el.scrollLeft / step));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0];
    const step = card.offsetWidth + 16;
    el.scrollTo({ left: i * step, behavior: 'smooth' });
  };

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="⭐ Loved by Parents" title="Words from our Blooming Birds family" />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0"
        >
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="reveal glass glass-hover flex w-[84%] shrink-0 snap-center flex-col rounded-2xl p-4 sm:w-[47%] sm:rounded-[1.75rem] sm:p-6 lg:w-auto"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="text-base text-amber-400 sm:text-lg">★★★★★</div>
              <p className="card-text mt-2 grow text-ink/75 sm:mt-3">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-coral/30 to-lavender/30 text-lg sm:h-11 sm:w-11 sm:text-xl">
                  {t.emoji}
                </span>
                <div>
                  <div className="card-title-bold">{t.name}</div>
                  <div className="font-body text-xs text-ink/55 sm:text-xs">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* dots — mobile only */}
        <div className="mt-5 flex justify-center gap-2 lg:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === i ? 'w-7 bg-coral' : 'w-2.5 bg-ink/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Facilities (interactive flip cards) --------------------- */
const facilityStyles = {
  coral: {
    soft: 'bg-coral/15',
    back: 'linear-gradient(140deg, #FFF5F0 0%, #FFE8DC 50%, #FFF0E6 100%)',
    accent: '#FF8C6B',
  },
  sky: {
    soft: 'bg-sky/15',
    back: 'linear-gradient(140deg, #F0F9FF 0%, #E8F4FF 50%, #EDE8FF 100%)',
    accent: '#6FC3E8',
  },
  mint: {
    soft: 'bg-mint/15',
    back: 'linear-gradient(140deg, #F0FFF8 0%, #E5FAF2 50%, #E8F6FF 100%)',
    accent: '#7ED9B0',
  },
  lavender: {
    soft: 'bg-lavender/15',
    back: 'linear-gradient(140deg, #F8F4FF 0%, #F0EBFF 50%, #FFF0F5 100%)',
    accent: '#B49BE8',
  },
  sunshine: {
    soft: 'bg-sunshine/20',
    back: 'linear-gradient(140deg, #FFFBF0 0%, #FFF5E0 50%, #F0FFF8 100%)',
    accent: '#FFC15E',
  },
};

export function Facilities() {
  const [flipped, setFlipped] = useState({});
  const toggle = (i) => setFlipped((f) => ({ ...f, [i]: !f[i] }));

  return (
    <section id="facilities" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="🏡 Our Campus"
          title="Everything little ones need to thrive"
          sub="Tap or hover any card to flip and see what makes each space special."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map((f, i) => {
            const s = facilityStyles[f.color];
            const isOpen = !!flipped[i];
            return (
              <div key={f.name} className="reveal" style={{ transitionDelay: `${i * 45}ms` }}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? `Hide details for ${f.name}` : `Show details for ${f.name}`}
                  className={`flip-scene h-44 ${isOpen ? 'is-flipped' : ''}`}
                >
                  <div className="flip-card">
                    <div className="flip-face flip-face-front">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl text-3xl sm:h-20 sm:w-20 sm:rounded-3xl sm:text-5xl ${s.soft}`}>
                        {f.emoji}
                      </span>
                      <span className="card-title-bold mt-2 sm:mt-3">{f.name}</span>
                      <span className="mt-0.5 font-body text-[0.65rem] font-600 uppercase tracking-wide text-ink/40 sm:mt-1 sm:text-[0.62rem]">
                        Tap to see
                      </span>
                    </div>
                    <div
                      className="flip-face flip-face-back"
                      style={{ background: s.back, borderColor: `${s.accent}33` }}
                    >
                      <span className="text-2xl sm:text-4xl">{f.emoji}</span>
                      <span className="card-title-bold mt-1.5 sm:mt-2" style={{ color: s.accent }}>
                        {f.name}
                      </span>
                      <span className="card-text mt-1.5 text-ink/70 sm:mt-2">{f.desc}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Admissions (premium journey) ---------------------------- */
export function Admissions() {
  return (
    <section id="admissions" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="🎈 Admissions"
          title="Joining us is as easy as 1-2-3"
          sub="A warm, simple welcome — five gentle steps from hello to first day."
        />

        <div className="glass-strong rounded-[2.25rem] p-6 sm:p-10">
          {/* ---- Desktop: horizontal journey ---- */}
          <div className="relative hidden lg:block">
            {/* connector line */}
            <svg className="absolute inset-x-0 top-11 h-3 w-full" preserveAspectRatio="none" viewBox="0 0 1000 12">
              <line x1="20" y1="6" x2="980" y2="6" stroke="#B49BE8" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" opacity="0.6" />
            </svg>
            <ol className="relative grid grid-cols-5 gap-4">
              {admissions.map((a, i) => (
                <li key={a.step} className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="h-[5.5rem] w-[5.5rem] drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105">
                      {miniArt[a.key]}
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 grid h-7 w-7 place-items-center rounded-full bg-white font-display font-700 text-sm text-ink shadow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="card-title-bold mt-3 sm:mt-4">{a.step}</h3>
                  <p className="card-text mt-1 text-ink/60">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* ---- Mobile/tablet: vertical timeline ---- */}
          <ol className="relative space-y-6 lg:hidden">
            <span className="absolute bottom-6 left-[27px] top-6 w-0.5 bg-lavender/40" aria-hidden="true" />
            {admissions.map((a, i) => (
              <li key={a.step} className="relative flex items-start gap-4">
                <div className="relative z-10 shrink-0">
                  <div className="h-16 w-16">{miniArt[a.key]}</div>
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white font-display font-700 text-xs text-ink shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="card-title-bold">{a.step}</h3>
                  <p className="card-text mt-0.5 text-ink/60">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <Logo size={120} withText={false} link={false} className="drop-shadow-sm" />
            <div className="text-center sm:text-left">
              <p className="card-title mb-2 sm:font-600">Ready when you are — we'll guide every step!</p>
              <a href="#contact" className="btn-primary">Start Step 1 — Book a Visit →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
