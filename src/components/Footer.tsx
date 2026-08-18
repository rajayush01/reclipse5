import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">RECLIPSE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              A product photography studio based in Mumbai, working with
              makers, brands, and galleries.
            </p>
          </div>

       <div className="flex flex-col gap-2">
  <span className="eyebrow mb-2">Studio</span>

  <Link
    to="/photography"
    className="text-sm text-ink/80 transition-colors hover:text-accent"
  >
    Photography
  </Link>

  <Link
    to="/films"
    className="text-sm text-ink/80 transition-colors hover:text-accent"
  >
    Films
  </Link>

  <Link
    to="/faqs"
    className="text-sm text-ink/80 transition-colors hover:text-accent"
  >
    FAQs
  </Link>

  <Link
    to="/enquire"
    className="text-sm text-ink/80 transition-colors hover:text-accent"
  >
    Enquire
  </Link>
</div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow mb-2">Contact</span>
            <a href="mailto:hello@RECLIPSE-studio.com" className="text-sm text-ink/80 hover:text-accent transition-colors">
              hello@RECLIPSE-studio.com
            </a>
            <a href="tel:+912200000000" className="text-sm text-ink/80 hover:text-accent transition-colors">
              +91 22 0000 0000
            </a>
            <span className="text-sm text-mute">Mumbai, India</span>
          
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-stone pt-6 md:flex-row md:items-center">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-mute">
            © {new Date().getFullYear()} RECLIPSE Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[11px] uppercase tracking-widest2 text-mute hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="font-mono text-[11px] uppercase tracking-widest2 text-mute hover:text-accent transition-colors">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
