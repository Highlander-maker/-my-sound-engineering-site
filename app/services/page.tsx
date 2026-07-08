import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "System engineering, RF coordination, monitors, corporate AV — plus remote advancing and showfile builds. Highlander Audio.",
};

const onSite = [
  {
    n: "01",
    title: "System Engineering",
    body: "PA design, deployment and time alignment on d&b (ArrayCalc / R1) — measured with ARTA and SMAART for even coverage, barrier to back wall, indoor or open-air festival. Happy to fly L-Acoustics rigs too.",
    tags: ["d&b design · ArrayCalc / R1", "ARTA & SMAART", "Can fly L-Acoustics"],
  },
  {
    n: "02",
    title: "RF Coordination",
    body: "Clean, reliable radio for mics and IEMs across busy spectrum. Full coordination, deployment and show-time monitoring.",
    tags: ["Shure Axient Digital", "Sennheiser EWDX / DG6000", "PSM1000 · SoundBase"],
  },
  {
    n: "03",
    title: "FOH & Monitor Mixing",
    body: "Out front or at the side of stage. I mix FOH for bands and run a calm, confident monitor world — wedges or in-ears, large input counts and orchestra looms handled cleanly, with fast, tidy line checks.",
    tags: ["DiGiCo SD5 / Quantum", "A&H dLive / SQ", "FOH & Mons"],
  },
  {
    n: "04",
    title: "Corporate AV & Show Control",
    body: "Conferences, awards shows and hybrid events. Multi-presenter setups, auto-mix, timecode and automated show control that simply works.",
    tags: ["Bitfocus Companion", "Timecode / OSC", "Hybrid events"],
  },
];

const remote = [
  {
    title: "Remote Advancing & Prep Support",
    body: "Venue advancing, RF planning, patch checks and clear tech notes — handled remotely so preventable show-day issues are locked out before you land. Priced per-show or as extra cover during peak weeks.",
    points: [
      "Venue comms & advance calls (audio scope)",
      "Input list / stage plot review + corrections",
      "RF plan & coordination support",
      "Day-of-show handover summary",
    ],
    turnaround: "24–72 hours",
  },
  {
    title: "Showfile & Template Builds",
    body: "Tour-ready console templates and prep documentation so you walk in with a proven workflow — especially useful when several shows are moving at once.",
    points: [
      "DiGiCo / general workflow templates",
      "Monitor & IEM layouts + labelling",
      "Snapshot / macro planning",
      "Exportable patch + workflow notes",
    ],
    turnaround: "2–5 days",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-28">
        <p className="eyebrow mb-5">What I do</p>
        <h1 className="display text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
          Systems, RF and
          <br />a <span className="text-tungsten">calm stage</span>.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
          Freelance engineering for festivals, arenas, stadiums and corporate
          rooms — on-site or advanced remotely to take pressure off busy crews.
        </p>
      </header>

      {/* On-site services */}
      <section className="mx-auto max-w-container px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {onSite.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.08}>
              <div className="bg-ink h-full p-8 sm:p-10 hover:bg-ink2 transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-tungsten text-sm">{s.n}</span>
                  <h2 className="display text-2xl sm:text-3xl">{s.title}</h2>
                </div>
                <p className="mt-4 text-muted leading-relaxed">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Remote services */}
      <section className="mx-auto max-w-container px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-3">Can’t get me on-site?</p>
          <h2 className="display text-4xl sm:text-5xl mb-12">Remote support</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {remote.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-ink2 p-8 sm:p-10">
                <h3 className="display text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-bone/85">
                      <span className="text-tungsten">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted">
                  Typical turnaround{" "}
                  <span className="text-bone">{s.turnaround}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Software & artists */}
      <section className="mx-auto max-w-container px-5 sm:px-8 py-16 sm:py-24 border-t border-line">
        <Reveal>
          <p className="eyebrow mb-3">Beyond the desk</p>
          <h2 className="display text-4xl sm:text-6xl max-w-3xl">
            Building tools that put money back in{" "}
            <span className="text-tungsten">artists’</span> hands.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            I’ve spent my career on the road with grassroots and independent
            acts, and I’ve seen up close how the live-music machine is stacked
            against the people who actually make the music — ticketing
            monopolies squeezing artists and fans alike. So I started learning
            to code and building the tools I wished existed.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {/* Shoal */}
          <Reveal>
            <a
              href="https://shoaltickets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-ink2 p-8 sm:p-10 hover:border-tungsten/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-tungsten">
                  <span className="w-1.5 h-1.5 rounded-full bg-tungsten animate-pulse" />
                  Live now
                </span>
                <span className="text-sm text-muted group-hover:text-bone transition-colors">
                  shoaltickets.com ↗
                </span>
              </div>
              <h3 className="display text-3xl mt-5">Shoal</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Artist-first ticketing, built and live on-chain. The artist is
                paid directly, pricing is fair and fixed, and the whole model is
                designed to cut out scalpers and the Ticketmaster middleman — with
                the bigger goal of resale royalties flowing back to the act. The
                idea: alone, an artist is prey to the monopolies; banded together
                on one platform, a shoal can’t be picked off.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Direct artist payment", "Anti-scalping", "Fan-owned"].map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>

          {/* Pipeline */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-ink p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                In the pipeline
              </span>
              <h3 className="display text-3xl mt-5">More on the way</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Shoal is the first of several tools I’m building for artists and
                live events — more in active development now. Same thread running
                through all of it: give independent artists and the venues that
                back them better technology and a bigger share of what they earn.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Consulting */}
        <Reveal>
          <div className="mt-5 rounded-2xl border border-line bg-ink2 p-8 sm:p-10">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:items-center">
              <div>
                <p className="eyebrow mb-3">Consulting</p>
                <h3 className="display text-2xl sm:text-3xl">
                  Grassroots artist &amp; promoter consulting
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  Most people building tech for music have never loaded a truck.
                  I’m a working touring engineer who knows artists, promoters and
                  venues from the inside — so I can help grassroots acts and small
                  venues get to grips with ticketing, direct-to-fan tools and new
                  tech, and keep more of what they make. Practical, honest advice
                  from someone who’s actually in the room.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-bone hover:bg-bone hover:text-ink transition-colors"
                >
                  Talk it through <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-ink2 p-10 sm:p-16 text-center">
            <h2 className="display text-3xl sm:text-5xl">
              Tell me about the show.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-bone px-8 py-4 text-ink font-medium hover:bg-tungsten transition-colors"
            >
              Get a quote <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
