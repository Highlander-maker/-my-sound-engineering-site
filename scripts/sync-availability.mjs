// Writes the free/busy availability feed the site reads (data/availability.json in Blob).
// Busy = all-day gig commitments from the Work Calendar that are NOT marked free;
// timed admin reminders are excluded entirely. Re-run to refresh (a scheduled
// agent can regenerate `busy` from live calendar data and call this).
import { readFileSync } from "node:fs";
import { put } from "@vercel/blob";

// Load BLOB_READ_WRITE_TOKEN from .env.local
for (const line of readFileSync(new URL("../.env.local", import.meta.url), "utf8").split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

// Current busy dates (synced 2026-07-08 from Work Calendar; free-flagged days excluded).
const busy = [
  "2026-07-09", "2026-07-10", "2026-07-11", "2026-07-16", "2026-07-17",
  "2026-07-24", "2026-07-25", "2026-07-26", "2026-07-27", "2026-07-28",
  "2026-07-29", "2026-07-30", "2026-07-31",
  "2026-08-01", "2026-08-02", "2026-08-05", "2026-08-06", "2026-08-07",
  "2026-08-08", "2026-08-09", "2026-08-10", "2026-08-16",
  "2026-08-27", "2026-08-28", "2026-08-29", "2026-08-30",
  "2026-09-03", "2026-09-04", "2026-09-05", "2026-09-06", "2026-09-07",
  "2026-09-08", "2026-09-09", "2026-09-10", "2026-09-11", "2026-09-12",
  "2026-09-13", "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19",
  "2026-09-20", "2026-09-21",
];

const payload = { busy: [...new Set(busy)].sort(), updatedAt: new Date().toISOString() };

const res = await put("data/availability.json", JSON.stringify(payload, null, 2), {
  access: "public",
  contentType: "application/json",
  addRandomSuffix: false,
  allowOverwrite: true,
  cacheControlMaxAge: 0,
});
console.log(`Uploaded ${payload.busy.length} busy days → ${res.url}`);
