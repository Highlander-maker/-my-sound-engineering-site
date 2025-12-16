"use client";

import { useMemo, useState } from "react";

type Tone = "green" | "blue" | "amber";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  tags: { label: string; tone: Tone }[];
  bullets: { text: string; tone: Tone }[];
  details: {
    overview: string;
    includes: string[];
    youProvide: string[];
    deliverables: string[];
    turnaround: string;
    pricingNote: string;
  };
};

export default function ServicesPage() {
  const services: Service[] = useMemo(
    () => [
      {
        id: "advancing",
        title: "Remote Audio Advancing & Prep Support",
        subtitle:
          "Venue advancing, RF planning, patch checks, and tech notes — handled remotely.",
        tags: [
          { label: "Venue Advance", tone: "blue" },
          { label: "RF Planning", tone: "green" },
          { label: "Tech Notes", tone: "amber" },
        ],
        bullets: [
          { text: "Audio advance with venues (audio scope)", tone: "blue" },
          { text: "RF planning / coordination support", tone: "green" },
          { text: "Input list + patch sanity checks", tone: "amber" },
          { text: "Clear handover notes for show crew", tone: "blue" },
        ],
        details: {
          overview:
            "I provide remote audio advancing and technical prep support for production/audio companies and touring teams. The goal is simple: remove preventable show-day issues by locking the important details in advance.",
          includes: [
            "Venue comms & advance calls (audio scope)",
            "Input list / stage plot review + corrections",
            "Console & infrastructure compatibility checks",
            "RF plan / coordination support (where applicable)",
            "Practical tech notes for FOH/Mons/System techs",
          ],
          youProvide: [
            "Rider or brief (or just ‘what the show is’)",
            "Input list + stage plot (rough is fine)",
            "Console/system info + any constraints",
            "Venue contact details (if you have them)",
          ],
          deliverables: [
            "Advance notes (PDF or email-ready)",
            "Updated patch/input notes (if needed)",
            "RF notes / coordination file (if applicable)",
            "Clear ‘day-of-show’ handover summary",
          ],
          turnaround:
            "Typically 24–72 hours depending on scope and show dates.",
          pricingNote:
            "Priced per-show or as extra support during peak weeks. Happy to quote after a quick brief.",
        },
      },
      {
        id: "showfiles",
        title: "Showfile & Template Builds",
        subtitle:
          "Tour-ready templates and prep documentation so you land smoother on the day.",
        tags: [
          { label: "Console Templates", tone: "green" },
          { label: "Workflow Setup", tone: "blue" },
          { label: "Patch + Notes", tone: "amber" },
        ],
        bullets: [
          { text: "DiGiCo / general workflow templates", tone: "green" },
          { text: "Monitor/IEM layouts & labelling", tone: "blue" },
          { text: "Snapshot / macro planning (where relevant)", tone: "amber" },
          { text: "Exportable patch + workflow notes", tone: "blue" },
        ],
        details: {
          overview:
            "I can build clean, reusable showfile templates and prep documentation so you walk into the day with a proven workflow — especially useful when you’ve got multiple shows moving at once.",
          includes: [
            "Template/showfile structure",
            "Channel layout + colour/label conventions",
            "Snapshot/macro suggestions (where relevant)",
            "Exportable patch notes",
          ],
          youProvide: [
            "Preferred console + show type",
            "Input list / typical patch",
            "Any workflow preferences",
          ],
          deliverables: [
            "Showfile/template (where possible)",
            "PDF patch + workflow notes",
          ],
          turnaround: "Usually 2–5 days depending on complexity.",
          pricingNote: "Quoted per template/project.",
        },
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(
    services[0]?.id ?? "advancing"
  );
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-ashGray">
          Services
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ashGray/70">
          Remote support and prep services built around real touring workflows —
          designed to reduce show-day issues and take pressure off busy crews.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={[
                "group text-left rounded-2xl border transition overflow-hidden",
                "bg-charcoalGray/40 border-ashGray/15 hover:border-ashGray/30 hover:bg-charcoalGray/45",
                isActive ? "ring-2 ring-celticGreen/60" : "",
              ].join(" ")}
            >
              {/* Header bar */}
              <div className="px-5 pt-5 pb-4 bg-gradient-to-r from-charcoalGray/80 via-charcoalGray/50 to-charcoalGray/30">
                <div>
                  <h2 className="text-xl font-extrabold">
                    <span className="text-celticGreen">{s.title}</span>
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-ashGray/70">
                    {s.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t.label} className={badgeClass(t.tone)}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <div className="px-5 pb-5">
                <ul className="mt-4 space-y-2 text-sm text-ashGray/75">
                  {s.bullets.map((b) => (
                    <li key={b.text} className="flex gap-3">
                      <span className={dotClass(b.tone)} aria-hidden="true" />
                      <span className="leading-relaxed">{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>

      {/* More services note */}
      <div className="mt-6 rounded-2xl border border-ashGray/15 bg-charcoalGray/35 p-4">
        <p className="text-sm text-ashGray/70">
          Need something slightly different (festival shout systems, RF packs,
          system notes)?{" "}
          <span className="font-semibold text-celticGreen">
            Just ask — I can tailor a prep pack to your workflow.
          </span>
        </p>
      </div>

      {/* Details */}
      {active && (
        <section className="mt-10 rounded-2xl border border-ashGray/15 bg-charcoalGray/45 overflow-hidden">
          <div className="px-6 py-5 bg-gradient-to-r from-charcoalGray/85 via-charcoalGray/55 to-charcoalGray/35">
            <h3 className="text-2xl font-extrabold text-celticGreen">
              {active.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ashGray/75">
              {active.details.overview}
            </p>
          </div>

          <div className="p-6 grid gap-6 md:grid-cols-2">
            <InfoBlock
              title="What’s included"
              items={active.details.includes}
            />
            <InfoBlock
              title="What I need from you"
              items={active.details.youProvide}
            />
            <InfoBlock
              title="Deliverables"
              items={active.details.deliverables}
            />

            <div className="rounded-2xl border border-ashGray/15 bg-charcoalGray/35 p-5">
              <h4 className="text-base font-bold text-ashGray">
                Turnaround & pricing
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-ashGray/75">
                <span className="font-semibold text-ashGray">Turnaround:</span>{" "}
                {active.details.turnaround}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-ashGray/75">
                <span className="font-semibold text-ashGray">Pricing:</span>{" "}
                {active.details.pricingNote}
              </p>

              <div className="mt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-celticGreen px-6 py-3 text-sm font-bold text-charcoalGray hover:opacity-90"
                >
                  Enquire via Contact →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-ashGray/15 bg-charcoalGray/35 p-5">
      <h4 className="text-base font-bold text-ashGray">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-ashGray/75">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span
              className="mt-2 h-2.5 w-2.5 rounded-full bg-celticGreen/75"
              aria-hidden="true"
            />
            <span className="leading-relaxed">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function badgeClass(tone: Tone) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide";

  if (tone === "green")
    return `${base} border-celticGreen/35 bg-celticGreen/10 text-celticGreen`;

  if (tone === "blue")
    return `${base} border-celticGreen/15 bg-charcoalGray/60 text-ashGray/80`;

  return `${base} border-ashGray/15 bg-charcoalGray/60 text-ashGray/80`;
}

function dotClass(tone: Tone) {
  const base = "mt-2 h-2.5 w-2.5 rounded-full";
  if (tone === "green") return `${base} bg-celticGreen`;
  if (tone === "blue") return `${base} bg-celticGreen/60`;
  return `${base} bg-celticGreen/35`;
}
