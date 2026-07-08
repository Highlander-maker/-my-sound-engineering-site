"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import type { Job } from "@/lib/types";

type Uploaded = { url: string; name: string };

export default function AdminDashboard({ jobs }: { jobs: Job[] }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [blurb, setBlurb] = useState("");
  const [featured, setFeatured] = useState(false);
  const [main, setMain] = useState<Uploaded | null>(null);
  const [gallery, setGallery] = useState<Uploaded[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [dragging, setDragging] = useState(false);
  const galleryInput = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File): Promise<Uploaded> {
    const blob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });
    return { url: blob.url, name: file.name };
  }

  async function onMain(file?: File | null) {
    if (!file) return;
    setStatus("Uploading main image…");
    try {
      setMain(await uploadFile(file));
      setStatus("");
    } catch (e) {
      setStatus(`Upload failed: ${(e as Error).message}`);
    }
  }

  async function onGallery(files: FileList | null) {
    if (!files?.length) return;
    setStatus("Uploading images…");
    try {
      const done = await Promise.all(Array.from(files).map(uploadFile));
      setGallery((g) => [...g, ...done]);
      setStatus("");
    } catch (e) {
      setStatus(`Upload failed: ${(e as Error).message}`);
    }
  }

  function reset() {
    setTitle("");
    setRole("");
    setCompany("");
    setLocation("");
    setYear(new Date().getFullYear());
    setBlurb("");
    setFeatured(false);
    setMain(null);
    setGallery([]);
  }

  async function publish() {
    if (!title || !main) {
      setStatus("Add a title and a main image first.");
      return;
    }
    setBusy(true);
    setStatus("Publishing…");
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        role,
        company,
        location,
        year,
        blurb,
        featured,
        mainImage: main.url,
        images: gallery.map((g) => g.url),
      }),
    });
    setBusy(false);
    if (res.ok) {
      setStatus("Published — it’s live.");
      reset();
      router.refresh();
    } else {
      const j = await res.json().catch(() => ({}));
      setStatus(`Failed: ${j.error ?? res.statusText}`);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this job?")) return;
    await fetch(`/api/jobs?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    router.refresh();
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  }

  const field =
    "w-full rounded-lg bg-ink border border-line px-4 py-2.5 outline-none focus:border-tungsten/60 transition-colors";

  return (
    <div className="mx-auto max-w-container px-5 sm:px-8 pt-24 pb-24">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="eyebrow mb-2">Studio · {jobs.length} jobs live</p>
          <h1 className="display text-4xl">Add a job</h1>
        </div>
        <button
          onClick={logout}
          className="text-sm text-muted hover:text-bone link-underline pb-1"
        >
          Sign out
        </button>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        {/* Form */}
        <div className="space-y-5">
          {/* Main image dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              onMain(e.dataTransfer.files?.[0]);
            }}
            className={`relative rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
              dragging ? "border-tungsten bg-tungsten/5" : "border-line"
            }`}
          >
            {main ? (
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image src={main.url} alt="Main" fill className="object-cover" />
                <button
                  onClick={() => setMain(null)}
                  className="absolute top-2 right-2 bg-ink/80 rounded-full w-8 h-8 text-sm"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="block cursor-pointer py-10">
                <span className="text-tungsten text-lg">Drop the main photo here</span>
                <span className="block text-sm text-muted mt-1">
                  or click to choose · JPG / PNG / HEIC
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onMain(e.target.files?.[0])}
                />
              </label>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input className={field} placeholder="Title (e.g. Coldplay)" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className={field} placeholder="Role (e.g. System Tech)" value={role} onChange={(e) => setRole(e.target.value)} />
            <input className={field} placeholder="Company / client" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input className={field} placeholder="Location (e.g. Halifax, UK)" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input className={field} type="number" placeholder="Year" value={year} onChange={(e) => setYear(Number(e.target.value))} />
            <label className="flex items-center gap-3 text-sm text-muted px-1">
              <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="accent-tungsten w-4 h-4" />
              Feature on homepage
            </label>
          </div>

          <textarea
            className={`${field} min-h-[140px] resize-y`}
            placeholder="A bit about the work — what you did, the kit, the story…"
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
          />

          {/* Gallery */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => galleryInput.current?.click()}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:text-bone hover:border-bone/30 transition-colors"
              >
                + Add more photos
              </button>
              <span className="text-xs text-muted">{gallery.length} added</span>
              <input
                ref={galleryInput}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => onGallery(e.target.files)}
              />
            </div>
            {gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {gallery.map((g, i) => (
                  <div key={g.url} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={g.url} alt={g.name} fill className="object-cover" />
                    <button
                      onClick={() => setGallery((arr) => arr.filter((_, idx) => idx !== i))}
                      className="absolute top-1 right-1 bg-ink/80 rounded-full w-6 h-6 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={publish}
              disabled={busy}
              className="rounded-full bg-bone text-ink font-medium px-8 py-3 hover:bg-tungsten transition-colors disabled:opacity-50"
            >
              {busy ? "Publishing…" : "Publish job"}
            </button>
            {status && <span className="text-sm text-muted">{status}</span>}
          </div>
        </div>

        {/* Existing jobs */}
        <div>
          <p className="eyebrow mb-4">Live jobs</p>
          <div className="space-y-2 max-h-[70vh] overflow-y-auto hide-scrollbar pr-1">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center gap-3 rounded-lg border border-line bg-ink2 p-2"
              >
                <div className="relative w-14 h-14 rounded-md overflow-hidden shrink-0">
                  <Image src={job.mainImage} alt={job.title} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{job.title}</p>
                  <p className="truncate text-xs text-muted">
                    {job.year} · {job.location}
                  </p>
                </div>
                {job.featured && <span className="text-tungsten text-xs">★</span>}
                <button
                  onClick={() => remove(job.id)}
                  className="text-muted hover:text-signal text-sm px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
