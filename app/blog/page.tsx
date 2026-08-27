import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the road — RF, system engineering and show-control write-ups from Highlander Audio.",
};

export default async function BlogIndex() {
  const blogPosts = await getPosts();
  return (
    <div className="pt-16 min-h-screen">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-20">
        <p className="eyebrow mb-5">Journal</p>
        <h1 className="display text-5xl sm:text-7xl mb-14">
          Notes from
          <br />
          the <span className="text-tungsten">road</span>.
        </h1>

        {blogPosts.length > 0 ? (
          <div className="border-t border-line">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-b border-line py-8 sm:py-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h2 className="display text-2xl sm:text-4xl group-hover:text-tungsten transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-muted shrink-0">{post.date}</span>
                </div>
                <p className="mt-3 max-w-2xl text-muted">{post.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-t border-line py-16">
            <p className="text-muted max-w-xl">
              Write-ups are on the way. In the meantime, the technical depth
              lives on the{" "}
              <Link href="/technical" className="link-underline text-bone">
                Technical
              </Link>{" "}
              page — DiGiCo, Optocore, MADI and the rest of the rig.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
