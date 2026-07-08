import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line mt-32">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">
              Let’s make it
              <br />
              sound <span className="text-tungsten">flawless.</span>
            </h2>
            <a
              href="mailto:highlander1952@protonmail.com"
              className="link-underline inline-block mt-6 text-lg text-bone"
            >
              highlander1952@protonmail.com
            </a>
          </div>

          <div className="text-sm">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-muted">
              <li><Link href="/work" className="hover:text-bone transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-bone transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-bone transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-bone transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="eyebrow mb-4">Discipline</p>
            <ul className="space-y-2 text-muted">
              <li>System Engineering</li>
              <li>RF Coordination</li>
              <li>Monitor World</li>
              <li>Corporate AV</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Highlander Audio. Ireland / UK.</p>
          <p className="font-display tracking-tightest text-bone/60">
            HIGHLANDER<span className="text-tungsten">AUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
