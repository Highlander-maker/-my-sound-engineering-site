// /app/blog/page.tsx
import Link from "next/link";

const blogPosts = [
  {
    slug: "digico-optocore",
    title: "Understanding DiGiCo Optocore Loops",
    date: "July 3, 2025",
    description: "A simple guide to Optocore loops, devices, and redundancy in DiGiCo systems.",
  },
  // more posts...
];

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-celticGreen mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
              <h2 className="text-2xl font-semibold text-celticGreen">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}