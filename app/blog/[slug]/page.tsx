import { notFound } from "next/navigation";

const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "mixing-large-venues": {
    title: "Mixing for Large Venues",
    date: "Feb 15, 2025",
    content: "Here are some tips for handling live sound in large concert venues...",
  },
  "studio-recording": {
    title: "Studio Recording Techniques",
    date: "Jan 30, 2025",
    content: "Best practices for capturing clean, high-quality recordings...",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] || null;

  if (!post) return notFound(); // Show 404 if the post doesn't exist

  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold text-white">{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
      <div className="mt-6 text-gray-300 max-w-2xl mx-auto">{post.content}</div>
    </div>
  );
}