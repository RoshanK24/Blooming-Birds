import Logo from './Logo.jsx';
import { nav, contact } from '../data.js';

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10">
      <div className="mx-auto max-w-6xl">
        {/* CTA band */}
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />
          <div className="relative">
            <h2 className="section-title">Ready to watch your little one bloom? 🌸</h2>
            <p className="mx-auto mt-3 max-w-lg font-body text-ink/65">
              Seats fill fast each season. Book a visit today and see the joy for yourself.
            </p>
            <a href="#contact" className="btn-primary mt-6">Book a Visit →</a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={64} />
            <p className="mt-4 max-w-xs font-body text-sm text-ink/60">
              An activity-based preschool in Dehradun, founded by a PhD Scientist &amp; Mom — where little
              minds bloom every day.
            </p>
          </div>
          <div>
            <h4 className="font-display font-700 text-ink">Explore</h4>
            <ul className="mt-3 space-y-2">
              {nav.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-body text-sm text-ink/60 hover:text-coral">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-ink">More</h4>
            <ul className="mt-3 space-y-2">
              {nav.slice(5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-body text-sm text-ink/60 hover:text-coral">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-ink">Reach Us</h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink/60">
              <li>📍 {contact.address}</li>
              <li>📞 {contact.phone}</li>
              <li>✉️ {contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/50 pt-6 text-center font-body text-xs text-ink/50">
          © {new Date().getFullYear()} Blooming Birds Preschool, Dehradun · Made with 💛 for little learners
        </div>
      </div>
    </footer>
  );
}
