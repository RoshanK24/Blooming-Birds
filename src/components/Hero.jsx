import { heroStats } from '../data.js';
import { scrollToVisit } from '../utils/scrollToVisit.js';

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="eyebrow animate-bloom">
            🌸 Neshvilla Road, Dehradun
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,7.5vw,4.2rem)] font-700 leading-[1.08] text-ink sm:mt-5">
            Where little minds
            <br />
            <span className="gradient-text">bloom every day</span>
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-xl sm:mt-5 lg:mx-0">
            An activity-based preschool founded by a{' '}
            <span className="font-700 text-ink">PhD Scientist &amp; Mom</span> — where play, curiosity
            and kindness grow little humans, not just students.
          </p>
          <div className="mt-8 hidden flex-wrap items-center justify-center gap-3 sm:flex lg:justify-start">
            <a href="#visit-form" onClick={scrollToVisit} className="btn-primary">Book a Visit →</a>
            <a href="#programs" className="btn-ghost glass">Explore Programs</a>
          </div>

          {/* Stat pills */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-xl px-2 py-3 text-center sm:rounded-2xl sm:px-3 sm:py-4">
                <div className="text-xl sm:text-2xl">{s.emoji}</div>
                <div className="mt-1 font-display text-base font-700 text-ink">{s.value}</div>
                <div className="font-body text-[0.7rem] font-600 uppercase tracking-wide text-ink/55 sm:text-[0.72rem]">
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
          <div className="glass-strong absolute -left-2 top-8 flex items-center gap-1.5 rounded-xl px-2.5 py-2 animate-float sm:-left-6 sm:gap-2 sm:rounded-2xl sm:px-3.5 sm:py-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-mint/30 text-sm sm:h-9 sm:w-9 sm:rounded-xl sm:text-lg">🎨</span>
            <div className="pr-0.5">
              <div className="font-display text-sm font-700 leading-none text-ink sm:text-sm">Learn by</div>
              <div className="font-display text-sm font-700 leading-tight text-coral sm:text-sm">Doing</div>
            </div>
          </div>

          <div className="glass-strong absolute -right-1 bottom-10 flex items-center gap-1.5 rounded-xl px-2.5 py-2 animate-floatSlow sm:-right-5 sm:gap-2 sm:rounded-2xl sm:px-3.5 sm:py-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-lavender/30 text-sm sm:h-9 sm:w-9 sm:rounded-xl sm:text-lg">🛡️</span>
            <div className="pr-0.5">
              <div className="font-display text-sm font-700 leading-none text-ink sm:text-sm">Safe &amp;</div>
              <div className="font-display text-sm font-700 leading-tight text-sky sm:text-sm">Secure</div>
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
