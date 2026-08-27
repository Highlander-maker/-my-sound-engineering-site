import type { Metadata } from "next";
import Availability from "@/components/Availability";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Highlander Audio for system engineering, RF coordination, monitors or corporate AV — UK and worldwide.",
};

const channels = [
  { label: "Email", value: "rab@highlanderaudio.com", href: "mailto:rab@highlanderaudio.com" },
  { label: "Web", value: "highlanderaudio.com", href: "https://highlanderaudio.com" },
  { label: "Based", value: "Ireland / UK · touring worldwide", href: undefined },
];

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-24 sm:py-32">
        <p className="eyebrow mb-6">Contact</p>
        <h1 className="display text-5xl sm:text-8xl max-w-4xl">
          Got a show that needs to
          <span className="text-tungsten"> sound right?</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
          Festivals, arenas, stadiums, corporate rooms — system tech, RF,
          monitors or full production support. Tell me the dates and the rig and
          I’ll come straight back to you.
        </p>

        <a
          href="mailto:rab@highlanderaudio.com?subject=Show%20enquiry"
          className="inline-flex items-center gap-2 mt-12 rounded-full bg-bone px-8 py-4 text-ink font-medium hover:bg-tungsten transition-colors"
        >
          Send an enquiry <span aria-hidden>→</span>
        </a>

        <dl className="mt-20 grid sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {channels.map((c) => (
            <div key={c.label} className="bg-ink p-8">
              <dt className="eyebrow mb-3">{c.label}</dt>
              <dd className="text-lg">
                {c.href ? (
                  <a href={c.href} className="link-underline pb-1 hover:text-tungsten transition-colors">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Renders only once CALENDAR_ICS_URL is configured */}
      <Availability />
    </div>
  );
}
