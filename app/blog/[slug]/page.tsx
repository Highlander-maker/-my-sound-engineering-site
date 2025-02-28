import { notFound } from "next/navigation";

// ✅ Corrected Type for Next.js 15+
interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {  
  if (!params?.slug) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-extrabold text-celticGreen">
        Blog Post: {params.slug}
      </h1>
      <p className="text-gray-300 mt-4 text-lg">Content coming soon...</p>
    </div>
  );
}