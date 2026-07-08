import { getAvailability } from "@/lib/calendar";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function key(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function MonthGrid({
  year,
  month,
  busy,
  todayKey,
}: {
  year: number;
  month: number;
  busy: Set<string>;
  todayKey: string;
}) {
  const first = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  // Monday-first offset
  const lead = (first.getUTCDay() + 6) % 7;
  const cells: (number | null)[] = [
    ...Array(lead).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const monthName = first.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });

  return (
    <div>
      <p className="display text-xl mb-4">
        {monthName} <span className="text-muted">{year}</span>
      </p>
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-[10px] uppercase tracking-wider text-muted pb-1">
            {w}
          </div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const k = key(year, month, d);
          const isBusy = busy.has(k);
          const isPast = k < todayKey;
          return (
            <div
              key={i}
              className={[
                "aspect-square rounded-md flex items-center justify-center text-sm border transition-colors",
                isPast
                  ? "border-transparent text-muted/30"
                  : isBusy
                  ? "border-transparent bg-ink3 text-muted/50 line-through"
                  : "border-line text-bone hover:border-tungsten/60",
              ].join(" ")}
              title={isBusy && !isPast ? "Booked" : undefined}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default async function Availability() {
  const availability = await getAvailability();
  if (!availability) return null; // not synced yet
  const busy = availability.busy;

  const now = new Date();
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth();
  const months = [0, 1, 2].map((offset) => {
    const dt = new Date(Date.UTC(y, m + offset, 1));
    return { year: dt.getUTCFullYear(), month: dt.getUTCMonth() };
  });
  const todayKey = key(y, m, now.getUTCDate());

  return (
    <section className="mx-auto max-w-container px-5 sm:px-8 py-20 border-t border-line">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p className="eyebrow mb-3">Availability</p>
          <h2 className="display text-4xl sm:text-5xl">When I’m free</h2>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border border-line" /> Available
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-ink3" /> Booked
          </span>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {months.map((mo) => (
          <MonthGrid
            key={`${mo.year}-${mo.month}`}
            year={mo.year}
            month={mo.month}
            busy={busy}
            todayKey={todayKey}
          />
        ))}
      </div>
      <p className="mt-8 text-xs text-muted">
        Synced from my tour calendar · free/busy only, no gig details.
        {availability.updatedAt
          ? ` Updated ${new Date(availability.updatedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}.`
          : ""}{" "}
        For anything further out, just ask.
      </p>
    </section>
  );
}
