import "server-only";
import { list, put } from "@vercel/blob";
import type { Job, JobInput } from "@/lib/types";
import { seedJobs } from "@/data/seed";

const JOBS_PATH = "data/jobs.json";

function hasBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

// Read the canonical jobs list. Prefers the Blob-hosted jobs.json (which the
// /admin flow writes to); falls back to the committed seed when Blob is not
// configured (e.g. local dev with no token) or the file doesn't exist yet.
export async function getJobs(): Promise<Job[]> {
  if (!hasBlob()) return sortJobs(seedJobs);
  try {
    const { blobs } = await list({ prefix: JOBS_PATH });
    const match = blobs.find((b) => b.pathname === JOBS_PATH);
    if (!match) return sortJobs(seedJobs);
    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return sortJobs(seedJobs);
    const data = (await res.json()) as Job[];
    return sortJobs(data);
  } catch (err) {
    console.error("getJobs: falling back to seed —", err);
    return sortJobs(seedJobs);
  }
}

export async function getJob(id: string): Promise<Job | undefined> {
  const jobs = await getJobs();
  return jobs.find((j) => j.id === id);
}

// Persist the whole list to Blob as jobs.json (single source of truth).
export async function saveJobs(jobs: Job[]): Promise<void> {
  if (!hasBlob()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not set — cannot persist jobs.");
  }
  await put(JOBS_PATH, JSON.stringify(jobs, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
}

// One-time convenience: if Blob has no jobs.json yet, seed it from the committed
// data so the admin has something to edit. Safe to call repeatedly.
export async function ensureSeeded(): Promise<Job[]> {
  const { blobs } = await list({ prefix: JOBS_PATH });
  if (!blobs.some((b) => b.pathname === JOBS_PATH)) {
    await saveJobs(sortJobs(seedJobs));
    return sortJobs(seedJobs);
  }
  return getJobs();
}

export async function addJob(input: JobInput): Promise<Job> {
  const current = hasBlob() ? await ensureSeeded() : sortJobs(seedJobs);
  const job: Job = {
    ...input,
    id: makeId(input.title, input.year, current),
    createdAt: new Date().toISOString(),
  };
  await saveJobs([job, ...current]);
  return job;
}

export async function deleteJob(id: string): Promise<void> {
  const current = await getJobs();
  await saveJobs(current.filter((j) => j.id !== id));
}

function sortJobs(jobs: Job[]): Job[] {
  return [...jobs].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.createdAt ?? "").localeCompare(a.createdAt ?? "");
  });
}

function makeId(title: string, year: number, existing: Job[]): string {
  const base =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 48) || "job";
  let id = `${base}-${year}`;
  let n = 2;
  while (existing.some((j) => j.id === id)) {
    id = `${base}-${year}-${n++}`;
  }
  return id;
}
