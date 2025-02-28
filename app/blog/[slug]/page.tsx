import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {  // ✅ Explicitly define the type
  if (!params || !params.slug) {
    return notFound();
  }

  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>Content coming soon...</p>
    </div>
  );
}