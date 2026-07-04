import { useState } from 'react';
import { faqs } from '../data.js';
import { SectionHead } from './Sections.jsx';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="❓ Good to Know" title="Questions parents often ask" />
        <div className="grid items-start gap-3 lg:grid-cols-2 lg:gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal glass overflow-hidden rounded-2xl" style={{ transitionDelay: `${i * 50}ms` }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
                  aria-expanded={isOpen}
                >
                  <span className="card-title pr-1">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/70 font-display text-ink transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="card-text px-4 pb-4 text-ink/70 sm:px-5 sm:pb-5">{f.a}</p>
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
