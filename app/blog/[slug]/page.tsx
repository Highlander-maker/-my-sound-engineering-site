import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.tsx`);

  if (!fs.existsSync(filePath)) return notFound();

  // ✅ Use dynamic import (ESM style)
  const Post = (await import(`../posts/${slug}.tsx`)).default;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <Post />
    </div>
  );
}