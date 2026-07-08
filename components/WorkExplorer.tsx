"use client";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { Job } from "@/lib/types";
import { clusterByLocation } from "@/lib/cluster";
import JobCard from "@/components/JobCard";

const JobsGlobe = dynamic(() => import("@/components/JobsGlobe"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full grid place-items-center text-muted text-sm">
      Loading globe…
    </div>
  ),
});

export default function WorkExplorer({ jobs }: { jobs: Job[] }) {
  const clusters = useMemo(() => clusterByLocation(jobs), [jobs]);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const activeCluster = clusters.find((c) => c.key === activeKey) ?? null;
  const visible = activeCluster ? activeCluster.jobs : jobs;

  const years = useMemo(
    () => Array.from(new Set(visible.map((j) => j.year))).sort((a, b) => b - a),
    [visible]
  );

  return (
    <div>
      {/* Globe */}
      <div className="relative h-[62vh] min-h-[440px] w-full border-y border-line bg-gradient-to-b from-ink2/40 to-ink">
        <JobsGlobe
          clusters={clusters}
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
        <div className="pointer-events-none absolute left-5 sm:left-8 bottom-5 max-w-xs">
          <p className="eyebrow mb-2">Interactive</p>
          <p className="text-sm text-muted">
            {activeCluster
              ? `${activeCluster.label} — ${activeCluster.jobs.length} show${
                  activeCluster.jobs.length > 1 ? "s" : ""
                }`
              : "Drag to spin · click a pin to filter the shows below"}
          </p>
        </div>
      </div>

      {/* Filter readout */}
      <div className="mx-auto max-w-container px-5 sm:px-8 pt-10 flex flex-wrap items-center gap-3">
        <span className="text-muted text-sm">
          {activeCluster ? (
            <>
              Showing <span className="text-bone">{activeCluster.label}</span>
            </>
          ) : (
            <>
              <span className="text-bone">{jobs.length}</span> shows &amp; tours
            </>
          )}
        </span>
        {activeCluster && (
          <button
            onClick={() => setActiveKey(null)}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:text-bone hover:border-bone/30 transition-colors"
          >
            Clear filter ✕
          </button>
        )}
      </div>

      {/* Job list grouped by year */}
      <div className="mx-auto max-w-container px-5 sm:px-8 pb-8">
        {years.map((year) => (
          <section key={year} className="pt-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="display text-3xl text-muted">{year}</h2>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible
                .filter((j) => j.year === year)
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
