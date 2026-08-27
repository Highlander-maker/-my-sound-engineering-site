import "server-only";
import { put } from "@vercel/blob";
import { revalidateTag } from "next/cache";
import { readJson, readJsonFresh } from "@/lib/blob-read";
import type { BlogPost, BlogPostInput } from "@/lib/types";
import { seedPosts } from "@/data/blog-seed";

const BLOG_PATH = "data/blog.json";
const BLOG_TAG = "blog";

function hasBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

// Read the canonical post list. Prefers the Blob-hosted blog.json; falls back
// to the committed seed when Blob is not configured or the file doesn't exist
// yet — same pattern as lib/jobs.ts.
export async function getPosts(): Promise<BlogPost[]> {
  if (!hasBlob()) return sortPosts(seedPosts);
  const data = await readJson<BlogPost[]>(BLOG_PATH, BLOG_TAG);
  return sortPosts(data ?? seedPosts);
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

export async function savePosts(posts: BlogPost[]): Promise<void> {
  if (!hasBlob()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not set — cannot persist posts.");
  }
  await put(BLOG_PATH, JSON.stringify(posts, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
  revalidateTag(BLOG_TAG, "max");
}

export async function ensureSeeded(): Promise<BlogPost[]> {
  const existing = await readJsonFresh<BlogPost[]>(BLOG_PATH);
  if (!existing) {
    const seeded = sortPosts(seedPosts);
    await savePosts(seeded);
    return seeded;
  }
  return sortPosts(existing);
}

export async function addPost(input: BlogPostInput): Promise<BlogPost> {
  const current = hasBlob() ? await ensureSeeded() : sortPosts(seedPosts);
  const post: BlogPost = { ...input, createdAt: new Date().toISOString() };
  await savePosts([post, ...current.filter((p) => p.slug !== post.slug)]);
  return post;
}

function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
}
