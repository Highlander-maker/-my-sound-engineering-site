import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: Awaited<Promise<{ slug: string }>> }) {
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