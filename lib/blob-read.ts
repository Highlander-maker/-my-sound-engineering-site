import "server-only";

// Reading a Blob used to go: list() to discover the URL, then fetch it. But
// list() is a *paid advanced operation* (10k/month on Hobby) and every one of
// these reads runs on a page with `revalidate = 60`, so a single crawler ticking
// over the ~37 rendered pages was enough to exhaust the month's quota and get
// the store suspended (twice: 14 Aug and 27 Aug 2026).
//
// We never actually needed list(). Everything is written with
// `addRandomSuffix: false`, so the public URL is fixed and derivable from the
// store id embedded in the RW token (vercel_blob_rw_<STOREID>_<secret>).
// Fetching it directly costs zero operations.
function publicBase(): string | null {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;
  const storeId = token.split("_")[3];
  if (!storeId) return null;
  return `https://${storeId.toLowerCase()}.public.blob.vercel-storage.com`;
}

async function fetchJson<T>(pathname: string, init: RequestInit): Promise<T | null> {
  const base = publicBase();
  if (!base) return null;
  try {
    const res = await fetch(`${base}/${pathname}`, init);
    // 404 = not written yet, 403 = store suspended. Both mean "use the seed".
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

// Cached read for page rendering. Tagged so a write can invalidate it
// immediately rather than waiting out the hour.
export async function readJson<T>(pathname: string, tag: string): Promise<T | null> {
  return fetchJson<T>(pathname, { next: { revalidate: 3600, tags: [tag] } });
}

// Uncached read, for the admin paths that need to know the current truth.
export async function readJsonFresh<T>(pathname: string): Promise<T | null> {
  return fetchJson<T>(pathname, { cache: "no-store" });
}
