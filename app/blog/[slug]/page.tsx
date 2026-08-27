import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/blog";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-16 min-h-screen">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-20">
        <Link
          href="/blog"
          className="link-underline pb-1 text-sm text-muted hover:text-bone"
        >
          ← Journal
        </Link>

        <p className="eyebrow mt-8 mb-3">{post.date}</p>
        <h1 className="display text-4xl sm:text-6xl mb-14 max-w-4xl">
          {post.title}
        </h1>

        <div
          className="max-w-3xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
