import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Technical",
  description:
    "DiGiCo, Optocore and MADI, plus the rest of the rig — Allen & Heath, Yamaha, DirectOut, Fourier, Waves and UAD. Notes from a working system engineer.",
};

const gear = [
  {
    n: "01",
    title: "Optocore",
    body: "A dual-fibre redundant ring, used across DiGiCo and increasingly bridged into other systems via R-series I/O. The bit that actually matters on a show day: it's the rack that decides which path is live, not the desk — so a cut fibre or a dead engine can fail over on its own, with nobody touching a fader. Clocking follows the same logic: the lowest-numbered device on the loop runs the master clock, and it hands off automatically if that device drops.",
    tags: ["Redundant ring", "Rack-led failover", "Distributed clocking"],
  },
  {
    n: "02",
    title: "DirectOut",
    body: "PRODIGY.MP would be my choice for a drive rack — DSP, RAVENNA/AES67 and Dante networking side by side (RAV.IO / DANTE.IO), GPIO and clocking all in one box. Build it into a proper showfile rather than patching it together on the day, and it's the same box behaving the same way, show after show.",
    tags: ["PRODIGY.MP", "RAV.IO / DANTE.IO", "Showfile builds"],
  },
  {
    n: "03",
    title: "Allen & Heath",
    body: "dLive and SQ cover far more than monitor world — dense scenes, fast recalls, and a sound that holds up at the top end too. It's Nick Warren's desk of choice on Paul Weller, and it's easy to hear why — it sounds awesome.",
    tags: ["dLive", "SQ", "FOH-proven"],
  },
  {
    n: "04",
    title: "Yamaha",
    body: "Still turn up on plenty of corporate rooms and house systems — dependable digital consoles worth being genuinely fluent on, not just tolerating for the day.",
    tags: ["Digital consoles", "Corporate & house systems"],
  },
  {
    n: "05",
    title: "Fourier",
    body: "Dante-native audio distribution and processing for corporate and broadcast-adjacent rigs — flexible routing across a network rather than a fixed analogue snake. The feature that's genuinely useful on a festival day: it can hold multiple plugin licence keys at once, so several engineers on different consoles can each run their own authorised processing from the same shared hardware — no dongle-swapping between changeovers.",
    tags: ["Dante-native", "Multi-key licensing", "Festival changeovers"],
  },
  {
    n: "06",
    title: "Waves",
    body: "SoundGrid processing, brought into the signal chain where a desk supports it. It's still everywhere on tour riders and stageplots — plenty of engineers swear by it, even if the plugin set itself is starting to show its age.",
    tags: ["SoundGrid", "Industry standard"],
  },
  {
    n: "07",
    title: "UAD",
    body: "Universal Audio's DSP-accelerated plugin world — genuinely one of my favourites. The Apollo's DSP and the tonality it brings is a big part of my home studio, and there's a warmth to it that's hard to get elsewhere.",
    tags: ["UAD-2 / Apollo", "Home studio"],
  },
];

export default function TechnicalPage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-28">
        <p className="eyebrow mb-5">Under the hood</p>
        <h1 className="display text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
          Consoles, protocols,
          <br />
          and the <span className="text-tungsten">plumbing</span> between them.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
          The gear I actually run, and the parts of it that matter when
          something needs to keep working under pressure.
        </p>
      </header>

      {/* DiGiCo — featured */}
      <section className="mx-auto max-w-container px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-ink2 p-8 sm:p-12 lg:p-16">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-tungsten text-sm">Primary desk</span>
            </div>
            <h2 className="display text-4xl sm:text-6xl mt-4">DiGiCo</h2>
            <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  SD5, SD-Mini and Quantum 326 — these are the desks I mix
                  and system-engineer on week to week, FOH and monitor world
                  both.
                </p>
                <p>
                  <span className="text-bone">Optocore redundancy</span> is
                  the part worth understanding properly rather than trusting
                  blindly: in a mirrored-engine system, both engines&apos;
                  MADI outputs are always live and identical — nothing
                  switches on the engine side. It&apos;s the{" "}
                  <span className="text-bone">rack</span> that decides which
                  one it&apos;s listening to, using a set of internal
                  priorities and a signalling channel carried inside the
                  MADI stream. That&apos;s what gives broken-cable and
                  dead-engine redundancy without a MIDI message or an
                  operator having to do anything.
                </p>
              </div>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  <span className="text-bone">Clocking</span> follows the
                  same distributed logic — the lowest-numbered ID on the
                  Optocore loop runs the master clock, and the system hands
                  off automatically to the next lowest ID if that device
                  drops off the network. Useful in practice: you can clock
                  from a stage rack instead of FOH, which matters when an OB
                  truck is sat right next to the stage.
                </p>
                <p>
                  <span className="text-bone">MADI</span> carries 56
                  channels of audio plus a control channel for the racks —
                  and at 96kHz there are two incompatible ways of packing
                  that data (SMUX and the confusingly-named Hi-Speed, which
                  isn&apos;t actually faster, just ordered differently).
                  Getting that wrong when feeding a third-party recorder is
                  a classic way to end up with audio landing on the wrong
                  channels — so it&apos;s one of the first things I check
                  when patching in outside record gear.
                </p>
              </div>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {["SD5 · SD-Mini · Quantum 326", "Optocore redundancy", "MADI · SMUX vs Hi-Speed"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Rest of the rig */}
      <section className="mx-auto max-w-container px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-3">The rest of the rig</p>
          <h2 className="display text-4xl sm:text-5xl mb-12">
            Every desk has its place.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {gear.map((g, i) => (
            <Reveal key={g.n} delay={(i % 2) * 0.08}>
              <div className="bg-ink h-full p-8 sm:p-10 hover:bg-ink2 transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-tungsten text-sm">{g.n}</span>
                  <h3 className="display text-2xl sm:text-3xl">{g.title}</h3>
                </div>
                <p className="mt-4 text-muted leading-relaxed">{g.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
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

      {/* Teaser -> /software */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-24 sm:pb-32">
        <Reveal>
          <Link
            href="/software"
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-line bg-ink2 p-8 sm:p-12 hover:border-tungsten/40 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">And when the tool doesn&apos;t exist yet</p>
              <h2 className="display text-3xl sm:text-5xl">
                I build my <span className="text-tungsten">own.</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted leading-relaxed">
                Meet SmARTA — a native Mac acoustic measurement app, built
                because the industry-standard tool never was.
              </p>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-bone group-hover:bg-bone group-hover:text-ink transition-colors">
              See the build <span aria-hidden>→</span>
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
