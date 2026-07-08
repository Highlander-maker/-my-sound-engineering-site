import Link from "next/link";
import { getJobs } from "@/lib/jobs";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import JobCard from "@/components/JobCard";

export const revalidate = 60;

const services = [
  {
    n: "01",
    title: "System Engineering",
    body: "PA design, deployment and time alignment. d&b, L-Acoustics and more — measured with ARTA, tuned for even coverage from the barrier to the back.",
  },
  {
    n: "02",
    title: "RF Coordination",
    body: "Clean, reliable radio for mics and IEMs. Shure Axient Digital, Sennheiser EWDX / Digital 6000 and PSM1000, coordinated with SoundBase.",
  },
  {
    n: "03",
    title: "Monitor World",
    body: "Calm, confident monitors and stage management. Wedges or in-ears, big input counts and orchestra looms handled without drama.",
  },
  {
    n: "04",
    title: "Corporate AV & Show Control",
    body: "Conferences, awards shows and hybrid events. Bitfocus Companion, timecode and automated show control that just works.",
  },
];

export default async function Home() {
  const jobs = await getJobs();
  const featured = jobs.filter((j) => j.featured).slice(0, 3);
  const showcase = featured.length ? featured : jobs.slice(0, 3);

  const credits = Array.from(
    new Set(jobs.map((j) => j.title.split(" — ")[0].split(" (")[0]))
  ).slice(0, 14);

  const countries = new Set(
    jobs.map((j) => j.location.split(",").pop()?.trim()).filter(Boolean)
  ).size;
  const earliest = Math.min(...jobs.map((j) => j.year));
  const yearsActive = new Date().getFullYear() - earliest;

  const stats = [
    { k: `${yearsActive}+`, v: "Years touring" },
    { k: `${jobs.length}+`, v: "Shows & tours logged" },
    { k: `${countries}`, v: "Countries worked" },
    { k: "FOH", v: "to systems — a true all-rounder" },
  ];

  return (
    <>
      <Hero credits={credits} />

      {/* Stats strip */}
      <section className="relative z-10 border-b border-line bg-ink">
        <div className="mx-auto max-w-container px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.v}
              delay={i * 0.08}
              className="py-10 lg:py-14 px-2 border-line [&:not(:nth-child(2n))]:border-r lg:[&:not(:nth-child(4n))]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            >
              <div className="display text-4xl sm:text-5xl text-tungsten">{s.k}</div>
              <div className="mt-2 text-sm text-muted">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro statement */}
      <section className="mx-auto max-w-container px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-8">The work</p>
          <h2 className="display text-3xl sm:text-5xl lg:text-6xl max-w-4xl">
            I make big systems disappear — so the only thing anyone notices is
            the <span className="text-tungsten">show</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            From flying PA in arenas with Wigwam to systems, RF and —
            increasingly — mixing bands out front at FOH. A solid all-rounder
            heading deeper into the mix. Currently control tech &amp; RF on
            Scissor Sisters, Summer 2026.
          </p>
        </Reveal>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-8">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <p className="eyebrow mb-3">Selected shows</p>
            <h2 className="display text-4xl sm:text-5xl">Featured work</h2>
          </Reveal>
          <Link
            href="/work"
            className="hidden sm:inline-flex link-underline pb-1 text-muted hover:text-bone transition-colors"
          >
            See all {jobs.length} →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {showcase.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1}>
              <JobCard job={job} priority={i === 0} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/work" className="link-underline pb-1 text-muted">
            See all {jobs.length} →
          </Link>
        </div>
      </section>

      {/* Globe CTA */}
      <section className="mx-auto max-w-container px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink2 px-6 sm:px-14 py-16 sm:py-24">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-tungsten/10 blur-3xl" />
            <p className="eyebrow mb-6">Everywhere the job has taken me</p>
            <h2 className="display text-4xl sm:text-6xl max-w-3xl">
              From Halifax to Abu Dhabi, Dublin to Jeddah.
            </h2>
            <p className="mt-6 max-w-xl text-muted text-lg">
              Explore an interactive globe of every show and tour — spin it,
              pick a pin, read the story behind the gig.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 mt-10 rounded-full bg-bone px-6 py-3 text-ink font-medium hover:bg-tungsten transition-colors"
            >
              Explore the globe
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-container px-5 sm:px-8 pb-8">
        <Reveal>
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="display text-4xl sm:text-5xl mb-12">Services</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.1}>
              <div className="bg-ink h-full p-8 sm:p-10 hover:bg-ink2 transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-tungsten text-sm">{s.n}</span>
                  <h3 className="display text-2xl sm:text-3xl">{s.title}</h3>
                </div>
                <p className="mt-4 text-muted leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/services" className="link-underline pb-1 text-muted hover:text-bone">
            Full service list &amp; toolkit →
          </Link>
        </div>
      </section>
    </>
  );
}
