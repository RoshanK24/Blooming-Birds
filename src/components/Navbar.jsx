import { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import { nav } from '../data.js';
import { scrollToVisit } from '../utils/scrollToVisit.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between overflow-visible rounded-full px-3 py-1.5 sm:px-5 sm:py-2 transition-all duration-300 ${
          scrolled ? 'glass-strong' : 'glass'
        }`}
      >
        <Logo size={34} withText />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-3 py-1.5 font-body text-sm font-600 text-ink/75 transition-colors hover:bg-white/60 hover:text-ink"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a href="#visit-form" onClick={scrollToVisit} className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
            Enroll Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-full glass-tint lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[30rem] glass-strong' : 'max-h-0'
        }`}
      >
        <ul className="grid grid-cols-2 gap-1 p-3">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-2.5 font-body text-base font-600 text-ink/80 hover:bg-white/60 sm:px-4 sm:py-3"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="col-span-2 mt-1">
            <a
              href="#visit-form"
              onClick={(e) => {
                setOpen(false);
                scrollToVisit(e);
              }}
              className="btn-primary w-full"
            >
              Enroll Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
