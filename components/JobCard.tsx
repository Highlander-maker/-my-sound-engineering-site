import Link from "next/link";
import Image from "next/image";
import type { Job } from "@/lib/types";

export default function JobCard({
  job,
  priority = false,
}: {
  job: Job;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/work/${job.id}`}
      className="group block relative overflow-hidden rounded-xl bg-ink2 border border-line"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={job.mainImage}
          alt={`${job.title} — ${job.role}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-display tracking-widest text-bone/70">
          {job.year}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-tungsten mb-1.5">
          {job.role}
        </p>
        <h3 className="display text-2xl leading-tight">{job.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {job.company ? `${job.company} · ` : ""}
          {job.location}
        </p>
      </div>
    </Link>
  );
}
