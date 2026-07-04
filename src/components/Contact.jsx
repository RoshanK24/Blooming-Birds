import { useState } from 'react';
import { contact, programOptions } from '../data.js';
import { SectionHead } from './Sections.jsx';

const info = [
  { emoji: '📍', label: 'Visit Us', value: contact.address, href: contact.mapLink },
  { emoji: '📞', label: 'Call Us', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { emoji: '✉️', label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  { emoji: '🕘', label: 'Office Hours', value: contact.hours },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ parent: '', phone: '', email: '', age: '', program: '', date: '' });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    if (!form.parent || !form.phone) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ parent: '', phone: '', email: '', age: '', program: '', date: '' });
  };

  const field =
    'w-full rounded-xl border border-white/70 bg-white/55 px-3 py-2 font-body text-sm text-ink placeholder-ink/40 outline-none transition focus:border-coral/60 focus:bg-white/80 sm:rounded-2xl sm:px-3.5 sm:py-2.5 sm:text-base';

  const infoCards = (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
      {info.map((it) => {
        const inner = (
          <>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/60 text-base sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
              {it.emoji}
            </span>
            <div className="min-w-0">
              <div className="font-body text-[0.62rem] font-700 uppercase tracking-wide text-ink/50 sm:text-xs">
                {it.label}
              </div>
              <div className="card-title mt-0.5 text-sm leading-snug sm:text-base">{it.value}</div>
            </div>
          </>
        );

        const cardClass =
          'reveal glass glass-hover flex items-start gap-2 rounded-xl p-2.5 sm:gap-3 sm:rounded-2xl sm:p-3.5';

        return it.href ? (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith('http') ? '_blank' : undefined}
            rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={cardClass}
          >
            {inner}
          </a>
        ) : (
          <div key={it.label} className={cardClass}>
            {inner}
          </div>
        );
      })}
    </div>
  );

  const mapBlock = (
    <div className="reveal glass-strong overflow-hidden rounded-2xl p-1 sm:rounded-[1.5rem] sm:p-1.5">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.85rem] sm:aspect-[16/9] lg:aspect-auto lg:h-[280px] sm:rounded-[1.25rem]">
        <iframe
          title="Blooming Birds Preschool location on Google Maps"
          src={contact.mapEmbed}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={contact.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-center font-body text-xs font-600 text-coral hover:underline sm:text-sm"
      >
        Open in Google Maps →
      </a>
    </div>
  );

  const formBlock = (
    <div className="reveal glass-strong h-fit rounded-2xl p-3.5 sm:rounded-[1.5rem] sm:p-6 lg:p-6">
      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
        <input className={field} placeholder="Parent's name *" value={form.parent} onChange={set('parent')} />
        <input className={field} type="tel" placeholder="Phone number *" value={form.phone} onChange={set('phone')} />
        <input className={field} type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
        <input className={field} placeholder="Child's age" value={form.age} onChange={set('age')} />
        <select className={`${field} appearance-none`} value={form.program} onChange={set('program')}>
          <option value="">Select a program</option>
          {programOptions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <input className={field} type="date" value={form.date} onChange={set('date')} />
      </div>
      <button onClick={submit} className="btn-primary mt-3 w-full !py-2.5 sm:mt-4">
        {sent ? '🎉 Thank you! We\u2019ll be in touch' : 'Request a Visit'}
      </button>
      <p className="mt-2 text-center font-body text-[0.65rem] text-ink/50 sm:text-xs">
        We usually respond within one working day. No spam, ever.
      </p>
    </div>
  );

  return (
    <section id="contact" className="px-4 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="🌟 Let's Talk"
          title="Come see us bloom in person"
          sub="Book a visit or drop your details — we'll reach out to plan your campus tour."
        />

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">{mapBlock}</div>
          <div id="visit-info" className="order-2 scroll-mt-24 scroll-mb-4 lg:col-span-2 lg:row-start-2 lg:scroll-mb-0">
            {infoCards}
          </div>
          <div id="visit-form" className="order-3 scroll-mt-24 scroll-mb-20 lg:col-start-2 lg:row-start-1 lg:self-start lg:scroll-mb-0">
            {formBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
