import { scrollToVisit } from '../utils/scrollToVisit.js';

export default function MobileCTABar() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 sm:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mobile-cta-frost relative mx-auto max-w-lg rounded-2xl p-1.5">
        <div className="flex gap-1.5">
          <a href="#visit-form" onClick={scrollToVisit} className="btn-primary pointer-events-auto flex-1 !px-3 !py-2 text-sm">
            Book a Visit →
          </a>
          <a href="#programs" className="btn-ghost glass pointer-events-auto flex-1 !px-3 !py-2 text-sm">
            Explore Programs
          </a>
        </div>
      </div>
    </div>
  );
}
