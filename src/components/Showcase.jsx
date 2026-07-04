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
      <div className="mx-auto max-w-6xl">
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
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent px-3.5 pb-3 pt-9">
                  <span className="text-xl drop-shadow-md">{g.emoji}</span>
                  <span className="font-display font-700 text-white text-base drop-shadow-md">{g.label}</span>
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
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="⭐ Loved by Parents" title="Words from our Blooming Birds family" />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0"
        >
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="reveal glass glass-hover flex w-[84%] shrink-0 snap-center flex-col rounded-[1.75rem] p-6 sm:w-[47%] lg:w-auto"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="text-lg text-amber-400">★★★★★</div>
              <p className="mt-3 grow font-body text-ink/75">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-coral/30 to-lavender/30 text-xl">
                  {t.emoji}
                </span>
                <div>
                  <div className="font-display font-700 text-ink">{t.name}</div>
                  <div className="font-body text-xs text-ink/55">{t.role}</div>
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
  coral: { grad: 'from-coral to-sunshine', soft: 'bg-coral/15' },
  sky: { grad: 'from-sky to-lavender', soft: 'bg-sky/15' },
  mint: { grad: 'from-mint to-sky', soft: 'bg-mint/15' },
  lavender: { grad: 'from-lavender to-coral', soft: 'bg-lavender/15' },
  sunshine: { grad: 'from-sunshine to-mint', soft: 'bg-sunshine/20' },
};

export function Facilities() {
  const [flipped, setFlipped] = useState({});
  const toggle = (i) => setFlipped((f) => ({ ...f, [i]: !f[i] }));

  return (
    <section id="facilities" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="🏡 Our Campus"
          title="Everything little ones need to thrive"
          sub="Tap or hover any card to flip it and see what makes each space special."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map((f, i) => {
            const s = facilityStyles[f.color];
            return (
              <div
                key={f.name}
                onClick={() => toggle(i)}
                className={`flip reveal h-44 cursor-pointer ${flipped[i] ? 'is-flipped' : ''}`}
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                <div className="flip-inner">
                  {/* front (solid — no backdrop-filter) */}
                  <div className="flip-face flip-front text-center">
                    <span className={`grid h-20 w-20 place-items-center rounded-3xl ${s.soft} text-5xl`}>
                      {f.emoji}
                    </span>
                    <span className="mt-3 font-display font-700 text-base text-ink">{f.name}</span>
                    <span className="mt-1 font-body text-[0.62rem] font-600 uppercase tracking-wide text-ink/40">
                      Tap to flip
                    </span>
                  </div>
                  {/* back */}
                  <div className={`flip-face flip-back bg-gradient-to-br ${s.grad} px-4 text-center`}>
                    <span className="text-4xl">{f.emoji}</span>
                    <span className="mt-2 font-display font-700 text-lg leading-tight text-white">{f.name}</span>
                    <span className="mt-2 font-body text-sm leading-snug text-white/95">{f.desc}</span>
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
      <div className="mx-auto max-w-6xl">
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
                  <h3 className="mt-4 font-display font-700 text-ink">{a.step}</h3>
                  <p className="mt-1 font-body text-sm text-ink/60">{a.text}</p>
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
                  <h3 className="font-display font-700 text-ink">{a.step}</h3>
                  <p className="mt-0.5 font-body text-sm text-ink/60">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <Logo size={140} withText={false} link={false} className="drop-shadow-sm" />
            <div className="text-center sm:text-left">
              <p className="mb-2 font-display font-600 text-ink">Ready when you are — we'll guide every step!</p>
              <a href="#contact" className="btn-primary">Start Step 1 — Book a Visit →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
