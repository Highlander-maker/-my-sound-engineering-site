import type { Job } from "@/lib/types";

export type LocationCluster = {
  key: string;
  label: string;
  lat: number;
  lng: number;
  jobs: Job[];
};

// Group jobs that share (roughly) the same coordinates into a single globe pin.
export function clusterByLocation(jobs: Job[]): LocationCluster[] {
  const map = new Map<string, LocationCluster>();
  for (const job of jobs) {
    if (job.lat == null || job.lng == null) continue;
    const key = `${job.lat.toFixed(2)},${job.lng.toFixed(2)}`;
    const existing = map.get(key);
    if (existing) {
      existing.jobs.push(job);
    } else {
      map.set(key, {
        key,
        label: job.location,
        lat: job.lat,
        lng: job.lng,
        jobs: [job],
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.jobs.length - a.jobs.length);
}
