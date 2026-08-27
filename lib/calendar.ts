import "server-only";
import { readJson } from "@/lib/blob-read";

// Availability is synced privately: a trusted job (me / a scheduled agent) reads
// the Work Calendar, keeps only all-day gig commitments that AREN'T marked free,
// drops every timed admin reminder, and writes just the busy *dates* here. The
// calendar itself is never made public and no personal detail ever reaches the site.
const PATH = "data/availability.json";
const TAG = "availability";

export type Availability = {
  busy: Set<string>; // "YYYY-MM-DD"
  updatedAt?: string;
};

export async function getAvailability(): Promise<Availability | null> {
  const data = await readJson<{ busy?: string[]; updatedAt?: string }>(PATH, TAG);
  if (!data) return null;
  return { busy: new Set(data.busy ?? []), updatedAt: data.updatedAt };
}
