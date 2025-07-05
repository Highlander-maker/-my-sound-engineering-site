import Link from "next/link";

// Define the shape of a blog post
type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// Manually defined blog posts (can be automated later)
const blogPosts: BlogPostMeta[] = [
  {
    slug: "optocore-on-digico",
    title: "What is DiGiCo Optocore?",
    date: "2025-07-04",
    description: "A beginner’s overview of DiGiCo Optocore and how it connects consoles and racks.",
  },
  // Add more blog posts here as needed
];

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-celticGreen mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post: BlogPostMeta) => (
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