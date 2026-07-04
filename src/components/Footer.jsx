import Logo from './Logo.jsx';
import { nav, contact } from '../data.js';
import { scrollToVisit } from '../utils/scrollToVisit.js';

export default function Footer() {
  return (
    <footer className="px-4 pb-[4.5rem] pt-10 sm:pb-8">
      <div className="mx-auto max-w-7xl">
        {/* CTA band */}
        <div className="glass-strong relative overflow-hidden rounded-[1.5rem] p-6 text-center sm:rounded-[2rem] sm:p-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />
          <div className="relative">
            <h2 className="section-title">Ready to watch your little one bloom? 🌸</h2>
            <p className="body-lg mx-auto mt-2 max-w-lg sm:mt-3">
              Seats fill fast each season. Book a visit today and see the joy for yourself.
            </p>
            <a href="#visit-form" onClick={scrollToVisit} className="btn-primary mt-6">Book a Visit →</a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={52} withText />
            <p className="card-text mt-3 max-w-xs sm:mt-4">
              An activity-based preschool in Dehradun, founded by a PhD Scientist &amp; Mom — where little
              minds bloom every day.
            </p>
          </div>
          <div>
            <h4 className="card-title-bold">Explore</h4>
            <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              {nav.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="card-text text-ink/60 hover:text-coral">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="card-title-bold">More</h4>
            <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              {nav.slice(5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="card-text text-ink/60 hover:text-coral">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="card-title-bold">Reach Us</h4>
            <ul className="card-text mt-2 space-y-1.5 text-ink/60 sm:mt-3 sm:space-y-2">
              <li>📍 {contact.address}</li>
              <li>📞 {contact.phone}</li>
              <li>✉️ {contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/50 pt-5 text-center font-body text-xs text-ink/50 sm:mt-8 sm:pt-6">
          © {new Date().getFullYear()} Blooming Birds Preschool, Dehradun · Made with 💛 for little learners
        </div>
      </div>
    </footer>
  );
}
