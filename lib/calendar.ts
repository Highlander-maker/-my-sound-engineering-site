import "server-only";
import { list } from "@vercel/blob";

// Availability is synced privately: a trusted job (me / a scheduled agent) reads
// the Work Calendar, keeps only all-day gig commitments that AREN'T marked free,
// drops every timed admin reminder, and writes just the busy *dates* here. The
// calendar itself is never made public and no personal detail ever reaches the site.
const PATH = "data/availability.json";

export type Availability = {
  busy: Set<string>; // "YYYY-MM-DD"
  updatedAt?: string;
};

export async function getAvailability(): Promise<Availability | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const { blobs } = await list({ prefix: PATH });
    const match = blobs.find((b) => b.pathname === PATH);
    if (!match) return null;
    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { busy?: string[]; updatedAt?: string };
    return { busy: new Set(data.busy ?? []), updatedAt: data.updatedAt };
  } catch {
    return null;
  }
}
