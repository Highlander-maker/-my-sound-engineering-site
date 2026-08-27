"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/technical", label: "Technical" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-container px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-semibold text-lg tracking-tightest">
            HIGHLANDER
          </span>
          <span className="text-tungsten font-display text-lg tracking-tightest">
            AUDIO
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline pb-1 transition-colors ${
                    active ? "text-bone" : "text-muted hover:text-bone"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-bone/25 px-4 py-1.5 text-sm text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Book me
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 bg-bone transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span className={`block h-px w-6 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-bone transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-md">
          <ul className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-2xl display text-bone">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
