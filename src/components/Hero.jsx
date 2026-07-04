import { heroStats } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pt-32 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="eyebrow animate-bloom">
            🌸 Neshvilla Road, Dehradun
          </span>
          <h1 className="mt-5 font-display font-700 leading-[1.05] text-ink" style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)' }}>
            Where little minds
            <br />
            <span className="gradient-text">bloom every day</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg text-ink/70 lg:mx-0">
            An activity-based preschool founded by a{' '}
            <span className="font-700 text-ink">PhD Scientist &amp; Mom</span> — where play, curiosity
            and kindness grow little humans, not just students.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#contact" className="btn-primary">Book a Visit →</a>
            <a href="#programs" className="btn-ghost glass">Explore Programs</a>
          </div>

          {/* Stat pills */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-2xl px-3 py-4 text-center">
                <div className="text-2xl">{s.emoji}</div>
                <div className="mt-1 font-display font-700 text-ink">{s.value}</div>
                <div className="font-body text-[0.72rem] font-600 uppercase tracking-wide text-ink/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-2.5">
            <div
              className="aspect-[4/5] w-full rounded-[2rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(140deg,#FFE3D1,#E4E0FF 55%,#D5F5E8), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=75)',
                backgroundBlendMode: 'overlay',
              }}
            />
          </div>

          {/* Floating glass badges */}
          <div className="glass-strong absolute -left-3 top-8 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 animate-float sm:-left-6">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/30 text-lg">🎨</span>
            <div className="pr-1">
              <div className="font-display font-700 text-sm leading-none text-ink">Learn by</div>
              <div className="font-display font-700 text-sm leading-tight text-coral">Doing</div>
            </div>
          </div>

          <div className="glass-strong absolute -right-2 bottom-10 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 animate-floatSlow sm:-right-5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lavender/30 text-lg">🛡️</span>
            <div className="pr-1">
              <div className="font-display font-700 text-sm leading-none text-ink">Safe &amp;</div>
              <div className="font-display font-700 text-sm leading-tight text-sky">Secure</div>
            </div>
          </div>

          <div className="glass absolute -top-4 right-10 h-14 w-14 animate-wiggle rounded-2xl grid place-items-center text-2xl">
            🐣
          </div>
        </div>
      </div>
    </section>
  );
}
