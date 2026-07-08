import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getJob, getJobs } from "@/lib/jobs";
import Reveal from "@/components/Reveal";

export const revalidate = 60;

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) return { title: "Not found" };
  return {
    title: `${job.title} — ${job.role}`,
    description: job.blurb.slice(0, 160),
    openGraph: { images: [job.mainImage] },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) notFound();

  const gallery = [job.mainImage, ...job.images].filter(Boolean);

  return (
    <article className="pt-16">
      {/* Hero image */}
      <div className="relative h-[56vh] min-h-[420px] w-full">
        <Image
          src={job.mainImage}
          alt={`${job.title} — ${job.role}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
        <div className="absolute bottom-0 inset-x-0">
          <div className="mx-auto max-w-container px-5 sm:px-8 pb-10">
            <Link
              href="/work"
              className="link-underline pb-1 text-sm text-muted hover:text-bone"
            >
              ← Back to all work
            </Link>
            <p className="mt-6 text-tungsten uppercase tracking-[0.2em] text-sm">
              {job.role}
            </p>
            <h1 className="display text-5xl sm:text-7xl mt-2">{job.title}</h1>
          </div>
        </div>
      </div>

      {/* Meta + story */}
      <div className="mx-auto max-w-container px-5 sm:px-8 py-16 grid lg:grid-cols-[1fr_2fr] gap-12">
        <aside className="space-y-6">
          {[
            { k: "Year", v: String(job.year) },
            { k: "Location", v: job.location },
            { k: "Company", v: job.company || "—" },
            { k: "Role", v: job.role },
          ].map((m) => (
            <div key={m.k} className="border-b border-line pb-4">
              <dt className="eyebrow mb-1">{m.k}</dt>
              <dd className="text-lg">{m.v}</dd>
            </div>
          ))}
        </aside>

        <div>
          <p className="text-xl sm:text-2xl leading-relaxed text-bone/90 whitespace-pre-line">
            {job.blurb || "More on this show coming soon."}
          </p>
        </div>
      </div>

      {/* Video */}
      {job.video && (
        <div className="mx-auto max-w-container px-5 sm:px-8 pb-8">
          <video
            className="w-full rounded-xl border border-line"
            controls
            playsInline
            preload="metadata"
          >
            <source src={job.video} />
          </video>
        </div>
      )}

      {/* Gallery */}
      {gallery.length > 1 && (
        <div className="mx-auto max-w-container px-5 sm:px-8 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.slice(1).map((src, i) => (
              <Reveal key={src + i} delay={(i % 2) * 0.08}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-line">
                  <Image
                    src={src}
                    alt={`${job.title} — image ${i + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
