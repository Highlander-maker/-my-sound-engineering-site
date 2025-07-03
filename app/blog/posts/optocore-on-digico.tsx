export default function DigicoOptocorePage() {
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

      {/* 🎬 Embedded Video */}
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

      {/* Section: Loop */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-celticGreen mb-4">
          🔄 How the Loop (Redundant Ring) Works
        </h2>

        <h3 className="text-xl font-semibold mb-2">✨ Basic Concept</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
          <li>Devices are connected in a ring topology: Mixer → Rack → I/O unit → back to Mixer.</li>
          <li>Two fibres create a redundant loop, allowing audio to be rerouted instantly if one path fails.</li>
          <li>Latency is minimal (~41 µs per link), which is essentially inaudible.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">⚙️ Sync and Word Clock</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>One device—usually the lowest ID node—becomes the word‑clock master and distributes clock to all others.</li>
          <li>If the master fails, the next-lowest ID automatically takes over to prevent audio issues.</li>
        </ul>
      </section>

      {/* Section: Devices */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-celticGreen mb-4">
          🔌 Devices on the Loop: FX vs TP
        </h2>

        <h3 className="text-xl font-semibold mb-2">FX Devices (Fibre Nodes)</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
          <li><strong>Examples:</strong> DD32R‑FX, DD4MR‑FX, X6R‑FX</li>
          <li>Rack units with direct fibre connections for routing audio, MADI, video, and data.</li>
          <li>Support for redundant fibre ports and high sample rates (up to 192 kHz).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">TP Devices (Cat5 via SANE)</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
          <li><strong>Examples:</strong> X6R‑TP, V3R‑TP</li>
          <li>Connect via Cat5 to FX units using SANE protocol, sending up to 64 audio channels + Ethernet.</li>
          <li>Great for local stage boxes without needing fibre extensions.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Bridging FX + TP</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>TP units expand FX capacity, clocked and managed over the main fibre loop.</li>
        </ul>
      </section>

      {/* Section: Live Use */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-celticGreen mb-4">
          ⚡ Use‑Case Example: Live Concert Rig
        </h2>

        <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300">
          <li>Layout: FOH mixer → FOH rack (DD32R‑FX) → Stage rack (X6R‑FX + X6R‑TP) → back to FOH mixer.</li>
          <li>Assign node IDs and fibre speeds using Optocore Control software.</li>
          <li>Patch mics, instruments, or backups into the system using the loop.</li>
          <li>Enable redundancy using an AutoRouter (e.g., BroaMan Route66) to maintain loop closure automatically.</li>
          <li>Test by disconnecting fibre — the system reroutes and continues without issue.</li>
        </ol>

        <p className="italic text-gray-400">
          💡 On Coldplay tours, techs use Route66 AutoRouter to hot‑plug devices in any order without causing interruptions.
        </p>
      </section>

      {/* Section: Summary */}
      <section>
        <h2 className="text-3xl font-bold text-celticGreen mb-4">
          🛠️ Why You Want Optocore
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Scalable I/O:</strong> Up to 1,024 channels over a dual-fibre loop.</li>
          <li><strong>Redundant & reliable:</strong> Fibre + power redundancy means no single point of failure.</li>
          <li><strong>Flexible topology:</strong> Daisy-chain, local split, Cat5 extension, or remote loop.</li>
          <li><strong>Perfect sync:</strong> Distributed clocking with auto-master failover.</li>
          <li><strong>Multi‑signal transport:</strong> Carry audio, word clock, video, MADI, Ethernet & DMX all in one loop.</li>
        </ul>
      </section>
    </div>
  );
}