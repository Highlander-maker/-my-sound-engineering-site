import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the road — RF, system engineering and show-control write-ups from Highlander Audio.",
};

type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const blogPosts: BlogPostMeta[] = [
  {
    slug: "optocore-on-digico",
    title: "What is DiGiCo Optocore?",
    date: "2025-07-04",
    description:
      "A beginner’s overview of DiGiCo Optocore and how it connects consoles and racks.",
  },
];

export default function BlogIndex() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-20">
        <p className="eyebrow mb-5">Journal</p>
        <h1 className="display text-5xl sm:text-7xl mb-14">
          Notes from
          <br />
          the <span className="text-tungsten">road</span>.
        </h1>

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
      </div>
    </div>
  );
}
