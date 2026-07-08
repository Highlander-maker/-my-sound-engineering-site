import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthed } from "@/lib/auth";
import { addJob, deleteJob } from "@/lib/jobs";
import { geocode } from "@/lib/geo";
import type { JobInput } from "@/lib/types";

function revalidateAll(id?: string) {
  revalidatePath("/");
  revalidatePath("/work");
  if (id) revalidatePath(`/work/${id}`);
}

export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }

  const b = await request.json();
  if (!b?.title || !b?.mainImage) {
    return NextResponse.json(
      { error: "Title and a main image are required." },
      { status: 400 }
    );
  }

  // Geocode from the location text unless coords were supplied.
  let lat: number | null = typeof b.lat === "number" ? b.lat : null;
  let lng: number | null = typeof b.lng === "number" ? b.lng : null;
  if ((lat == null || lng == null) && b.location) {
    const geo = await geocode(String(b.location));
    if (geo) {
      lat = geo.lat;
      lng = geo.lng;
    }
  }

  const input: JobInput = {
    title: String(b.title).trim(),
    role: String(b.role ?? "").trim(),
    company: String(b.company ?? "").trim(),
    location: String(b.location ?? "").trim(),
    year: Number(b.year) || new Date().getFullYear(),
    blurb: String(b.blurb ?? "").trim(),
    mainImage: String(b.mainImage),
    images: Array.isArray(b.images) ? b.images.filter(Boolean) : [],
    video: b.video ? String(b.video) : undefined,
    featured: Boolean(b.featured),
    lat,
    lng,
  };

  try {
    const job = await addJob(input);
    revalidateAll(job.id);
    return NextResponse.json({ job });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await deleteJob(id);
    revalidateAll(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
