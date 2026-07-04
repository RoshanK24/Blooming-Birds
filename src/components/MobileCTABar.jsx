export default function MobileCTABar() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-2 sm:hidden"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mobile-cta-frost relative mx-auto max-w-lg rounded-[1.75rem] p-2">
        <div className="flex gap-2">
          <a href="#contact" className="btn-primary pointer-events-auto flex-1 !px-4 !py-3 text-sm">
            Book a Visit →
          </a>
          <a href="#programs" className="btn-ghost glass pointer-events-auto flex-1 !px-4 !py-3 text-sm">
            Explore Programs
          </a>
        </div>
      </div>
    </div>
  );
}
