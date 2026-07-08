import type { Metadata } from "next";
import { getJobs } from "@/lib/jobs";
import WorkExplorer from "@/components/WorkExplorer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Work",
  description:
    "An interactive map of every show, festival and tour — system engineering, RF and monitors across the UK and worldwide.",
};

export default async function WorkPage() {
  const jobs = await getJobs();

  return (
    <div className="pt-16">
      <header className="mx-auto max-w-container px-5 sm:px-8 py-16 sm:py-20">
        <p className="eyebrow mb-5">Selected work · 2017 — present</p>
        <h1 className="display text-5xl sm:text-7xl lg:text-8xl">
          Every gig
          <br />
          on the <span className="text-tungsten">map</span>.
        </h1>
        <p className="mt-6 max-w-xl text-muted text-lg">
          From flying PA in arenas to system tech and monitors on international
          stages. Spin the globe, pick a place, read the story.
        </p>
      </header>

      <WorkExplorer jobs={jobs} />
    </div>
  );
}
