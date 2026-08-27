import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SmARTA — Software",
  description:
    "SmARTA — a native macOS acoustic measurement app, built because ARTA and the rest of the tuning-capture world never made it off Windows.",
};

const features = [
  {
    title: "Dual-channel loop reference",
    body: "Deconvolves the measurement mic against a captured electrical loop instead of the raw generated sweep — mic ÷ loop, the standard SMAART-style transfer function, so interface latency cancels out and what's left is the acoustic path.",
  },
  {
    title: "Farina log-sweep measurement",
    body: "Log-sweep deconvolution with a gated frequency response — adjustable gate window and 1/n-octave smoothing, so a curve reflects the direct sound, not the room fighting with it.",
  },
  {
    title: "Sweep presets that match the job",
    body: "Sub, crossover, mid-high and full-range presets — the right sweep for the part of the system you're actually tuning, not one generic curve stretched over everything.",
  },
  {
    title: "Alignment click generator",
    body: "A dual-channel click generator with sample-accurate, adjustable relative delay — for checking sub-to-main timing by ear, the same idea as an ETC but live and interactive.",
  },
  {
    title: "Impulse response & analysis",
    body: "ETC, step response and CSD alongside the frequency response — the same toolkit an SD5 rig or a d&b system needs to be tuned properly.",
  },
  {
    title: "Native Core Audio",
    body: "Built directly on Core Audio and Accelerate — no Windows emulation, no Crossover, no Wine. It talks to your Mac's audio hardware the way a native Mac app should.",
  },
];

export default function SoftwarePage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-28">
        <p className="eyebrow mb-5">Beyond the desk</p>
        <h1 className="display text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
          Meet <span className="text-tungsten">SmARTA.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
          A native macOS acoustic measurement app — Swift, Core Audio and
          Accelerate, built from scratch because I loved ARTA and wanted it
          on Mac.
        </p>
      </header>

      {/* Why */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-20 sm:pb-28">
        <Reveal>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 rounded-2xl border border-line bg-ink2 p-8 sm:p-12">
            <div>
              <p className="eyebrow mb-3">Why it exists</p>
              <h2 className="display text-3xl sm:text-4xl mb-6">
                ARTA was amazing. It just never came to Mac.
              </h2>
              <p className="text-muted leading-relaxed">
                ARTA is a niche piece of measurement software, but I loved
                it — genuinely excellent for what it does. The trouble is
                it&apos;s Windows-only, so on Mac I was always stuck running
                it through Crossover or a Windows VM. Same story with most
                of the tuning-capture world: built for Windows, a
                compromise everywhere else. So I&apos;m building SmARTA as
                the tool I wanted for myself — a proper native Mac
                alternative, the measurement engine written from the ground
                up in Swift, running directly on Core Audio, no emulation
                layer between the app and the hardware.
              </p>
            </div>
            <div className="lg:text-right lg:self-end">
              <Link
                href="https://github.com/Highlander-maker/arta-mac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-bone hover:bg-bone hover:text-ink transition-colors"
              >
                View on GitHub <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-20 sm:pb-28">
        <Reveal>
          <p className="eyebrow mb-3">The app, on a real rig</p>
          <h2 className="display text-4xl sm:text-5xl mb-12">
            Measured, not mocked up.
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-2xl border border-line overflow-hidden bg-ink2">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/software/smarta-fr-loop.png"
                  alt="SmARTA frequency response measurement with dual-channel loop reference on a Scarlett 2i2"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="p-6 text-sm text-muted leading-relaxed">
                Dual-channel loop reference in use — mic on input 1, an
                electrical loop back on input 2, delay and correlation
                reported live alongside the frequency response.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line overflow-hidden bg-ink2">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/software/smarta-subtop-sweep.png"
                  alt="SmARTA sub/top crossover sweep measurement with the built-in generator panel"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="p-6 text-sm text-muted leading-relaxed">
                A Sub/Top crossover preset sweep, generator panel open — the
                sweep range and length set for the part of the system being
                tuned.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-20 sm:pb-28">
        <Reveal>
          <p className="eyebrow mb-3">What&apos;s built so far</p>
          <h2 className="display text-4xl sm:text-5xl mb-12">
            A real measurement engine, not a demo.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="bg-ink h-full p-8 hover:bg-ink2 transition-colors">
                <h3 className="display text-xl">{f.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Status / CTA */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-ink2 p-10 sm:p-16 text-center">
            <p className="eyebrow mb-3">Status</p>
            <h2 className="display text-3xl sm:text-5xl max-w-2xl mx-auto">
              Actively in development, field-tested on real rigs.
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted leading-relaxed">
              SmARTA isn&apos;t a shipped product yet — it&apos;s being built
              and proven on real speaker and console setups as it goes. If
              you want to follow along or try it early, get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-bone px-8 py-4 text-ink font-medium hover:bg-tungsten transition-colors"
            >
              Get in touch <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
