import "server-only";

// Geocode a free-text location to lat/lng using OpenStreetMap Nominatim.
// Best-effort: returns null on any failure so the admin flow never blocks on it
// (the job still saves; it just won't get a globe pin until coords are added).
export async function geocode(
  query: string
): Promise<{ lat: number; lng: number } | null> {
  const q = query.trim();
  if (!q) return null;
  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", q);
    url.searchParams.set("format", "json");
    url.searchParams.set("limit", "1");
    const res = await fetch(url, {
      headers: {
        "User-Agent": "highlanderaudio.com portfolio geocoder (contact: highlander1952@protonmail.com)",
        "Accept-Language": "en",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{ lat: string; lon: string }>;
    if (!data.length) return null;
    const lat = parseFloat(data[0].lat);
    const lng = parseFloat(data[0].lon);
    if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
    return { lat, lng };
  } catch {
    return null;
  }
}
