export type Job = {
  id: string;
  year: number;
  title: string;
  role: string;
  company: string;
  location: string; // human-readable, e.g. "Halifax, UK"
  lat: number | null; // for the globe; null = not plotted
  lng: number | null;
  blurb: string;
  mainImage: string; // absolute Blob URL or /images/... fallback
  images: string[]; // additional images
  video?: string;
  featured?: boolean;
  createdAt: string; // ISO
};

export type JobInput = Omit<Job, "id" | "createdAt">;

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // human-readable, e.g. "18 Jul 2026"
  description: string;
  contentHtml: string; // hand-authored HTML body, rendered via dangerouslySetInnerHTML
  createdAt: string; // ISO
};

export type BlogPostInput = Omit<BlogPost, "createdAt">;
