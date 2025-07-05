// app/blog/optocore-on-digico/page.tsx

export const metadata = {
  title: "What is DiGiCo Optocore?",
  description: "A beginner’s overview of DiGiCo Optocore and how it connects consoles and racks.",
};

export default function DigicoOptocorePost() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white leading-relaxed">
      <h1 className="text-5xl font-extrabold text-celticGreen mb-8">
        🎛️ What is DiGiCo Optocore?
      </h1>

      <p className="text-lg mb-8 text-gray-200">
        DiGiCo Optocore is a robust fibre‑optic audio networking system that professionals use for large-scale live sound and broadcast setups.
        It transports hundreds of channels of audio, along with word‑clock, sync, video, and data — all simultaneously over a dual‑fibre ring,
        ensuring rock‑solid connectivity with ultra-low latency.
      </p>

      <div className="rounded-xl overflow-hidden mb-12 shadow-lg">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/pTCX9Zu7rng"
          title="DiGiCo Optocore and Racks Explained"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* You can keep your remaining content as-is */}
    </div>
  );
}