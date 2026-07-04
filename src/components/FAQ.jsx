import { useState } from 'react';
import { faqs } from '../data.js';
import { SectionHead } from './Sections.jsx';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="❓ Good to Know" title="Questions parents often ask" />
        <div className="grid items-start gap-3 lg:grid-cols-2 lg:gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal glass overflow-hidden rounded-2xl" style={{ transitionDelay: `${i * 50}ms` }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-600 text-ink">{f.q}</span>
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
                    <p className="px-5 pb-5 font-body text-ink/70">{f.a}</p>
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
