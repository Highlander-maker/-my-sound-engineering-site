import { notFound } from "next/navigation";

// ✅ Corrected Type for Next.js 15+
interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPageProps) {
  if (!params?.slug) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-celticGreen">Blog Post: {decodeURIComponent(params.slug)}</h1>
      <p className="mt-4 text-lg text-gray-300">Content coming soon...</p>
    </div>
  );
}