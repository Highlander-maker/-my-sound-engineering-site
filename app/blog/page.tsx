import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function BlogIndex() {
  const postsDir = path.join(process.cwd(), "app", "blog", "posts");
  const slugs = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""));

  const blogPosts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`./posts/${slug}.tsx`);
      return {
        slug,
        ...mod.meta, // get title, date, description from meta export
      };
    })
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-celticGreen mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-gray-700 rounded-lg p-6 hover:border-celticGreen transition"
          >
            <h2 className="text-2xl font-semibold text-celticGreen">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-300">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}