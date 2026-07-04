import { useState } from 'react';
import { contact, programOptions } from '../data.js';
import { SectionHead } from './Sections.jsx';

const info = [
  { emoji: '📍', label: 'Visit Us', value: contact.address },
  { emoji: '📞', label: 'Call Us', value: contact.phone },
  { emoji: '✉️', label: 'Email Us', value: contact.email },
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
    'w-full rounded-2xl border border-white/70 bg-white/55 px-4 py-3 font-body text-ink placeholder-ink/40 outline-none transition focus:border-coral/60 focus:bg-white/80';

  return (
    <section id="contact" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="🌟 Let's Talk"
          title="Come see us bloom in person"
          sub="Book a visit or drop your details — we'll reach out to plan your campus tour."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {info.map((it) => (
              <div key={it.label} className="reveal glass glass-hover flex items-start gap-4 rounded-3xl p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/60 text-2xl">
                  {it.emoji}
                </span>
                <div>
                  <div className="font-body text-xs font-700 uppercase tracking-wide text-ink/50">{it.label}</div>
                  <div className="mt-0.5 font-display font-600 text-ink">{it.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal glass-strong rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={field} placeholder="Parent's name *" value={form.parent} onChange={set('parent')} />
              <input className={field} placeholder="Phone number *" value={form.phone} onChange={set('phone')} />
              <input className={field} placeholder="Email address" value={form.email} onChange={set('email')} />
              <input className={field} placeholder="Child's age" value={form.age} onChange={set('age')} />
              <select className={`${field} appearance-none`} value={form.program} onChange={set('program')}>
                <option value="">Select a program</option>
                {programOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <input className={field} type="date" value={form.date} onChange={set('date')} />
            </div>
            <button onClick={submit} className="btn-primary mt-5 w-full">
              {sent ? '🎉 Thank you! We\u2019ll be in touch' : 'Request a Visit'}
            </button>
            <p className="mt-3 text-center font-body text-xs text-ink/50">
              We usually respond within one working day. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
