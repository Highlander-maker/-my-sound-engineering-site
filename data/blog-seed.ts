import type { BlogPost } from "@/lib/types";

// Committed fallback for blog posts — same pattern as data/seed.ts for jobs.
// Shows immediately in prod until Blob's data/blog.json exists (first /admin
// write seeds it from here).
export const seedPosts: BlogPost[] = [
  {
    slug: "setting-the-optocore-loop",
    title: "Setting the Optocore loop: two consoles, three racks",
    date: "18 Jul 2026",
    description:
      "A field guide to closing a five-device Optocore ring — FOH console, FOH rack, MON SD-Rack, MON SD-Mini rack, MON console — with a red/blue send-return colour code that actually means something on the patch.",
    createdAt: "2026-07-18T09:00:00.000Z",
    contentHtml: `
      <p class="text-xl sm:text-2xl leading-relaxed text-bone/90">
        One closed Optocore ring linking FOH and monitor world — FOH console and rack on one side, MON console with two racks on the other. Five devices, one loop, red carrying the send, blue carrying the return.
      </p>

      <h2 class="display text-3xl sm:text-4xl mt-14 mb-4">The shape of it</h2>
      <p class="text-lg text-bone/85 leading-relaxed">
        Five devices, one ring — no dual-loop trickery, since two independent loops is an SD5/SD7-only feature and nothing here needs it. One loop, one ID scheme, one fibre speed for the whole system, all five devices on the same ring regardless of which side of the stage they sit on.
      </p>

      <div class="my-10 rounded-xl border border-line bg-ink2 p-6 sm:p-8 overflow-x-auto">
        <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Optocore ring diagram: five devices in a pentagon — FOH Console, FOH Rack, MON SD-Rack, MON SD-Mini Rack, MON Console — linked by a red clockwise send ring and a blue counter-clockwise return ring." style="display:block;margin:0 auto;min-width:560px;max-width:640px;">
          <defs>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#D8442F"></path>
            </marker>
            <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#5B8DEF"></path>
            </marker>
          </defs>
          <line x1="360" y1="60"  x2="503" y2="164" stroke="#D8442F" stroke-width="3" marker-end="url(#arrowRed)"></line>
          <line x1="503" y1="164" x2="448" y2="331" stroke="#D8442F" stroke-width="3" marker-end="url(#arrowRed)"></line>
          <line x1="448" y1="331" x2="272" y2="331" stroke="#D8442F" stroke-width="3" marker-end="url(#arrowRed)"></line>
          <line x1="272" y1="331" x2="217" y2="164" stroke="#D8442F" stroke-width="3" marker-end="url(#arrowRed)"></line>
          <line x1="217" y1="164" x2="360" y2="60"  stroke="#D8442F" stroke-width="3" marker-end="url(#arrowRed)"></line>
          <line x1="360" y1="76"  x2="233" y2="169" stroke="#5B8DEF" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <line x1="233" y1="169" x2="281" y2="318" stroke="#5B8DEF" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <line x1="281" y1="318" x2="439" y2="318" stroke="#5B8DEF" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <line x1="439" y1="318" x2="487" y2="169" stroke="#5B8DEF" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <line x1="487" y1="169" x2="360" y2="76"  stroke="#5B8DEF" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <g><rect x="285" y="36" width="150" height="64" rx="8" fill="#131316" stroke="rgba(237,235,230,0.14)" stroke-width="1.5"></rect>
            <text x="360" y="60" text-anchor="middle" font-family="var(--font-body), system-ui, sans-serif" font-weight="700" font-size="14" fill="#EDEBE6">FOH Console</text>
            <text x="360" y="80" text-anchor="middle" font-family="monospace" font-size="11" fill="#8C887E">ID 1</text></g>
          <g><rect x="420" y="134" width="150" height="64" rx="8" fill="#131316" stroke="rgba(237,235,230,0.14)" stroke-width="1.5"></rect>
            <text x="495" y="158" text-anchor="middle" font-family="var(--font-body), system-ui, sans-serif" font-weight="700" font-size="14" fill="#EDEBE6">FOH Rack</text>
            <text x="495" y="178" text-anchor="middle" font-family="monospace" font-size="11" fill="#8C887E">SD Rack · ID 11</text></g>
          <g><rect x="369" y="293" width="150" height="64" rx="8" fill="#131316" stroke="rgba(237,235,230,0.14)" stroke-width="1.5"></rect>
            <text x="444" y="317" text-anchor="middle" font-family="var(--font-body), system-ui, sans-serif" font-weight="700" font-size="14" fill="#EDEBE6">MON SD-Rack</text>
            <text x="444" y="337" text-anchor="middle" font-family="monospace" font-size="11" fill="#8C887E">ID 12</text></g>
          <g><rect x="202" y="293" width="150" height="64" rx="8" fill="#131316" stroke="rgba(237,235,230,0.14)" stroke-width="1.5"></rect>
            <text x="277" y="317" text-anchor="middle" font-family="var(--font-body), system-ui, sans-serif" font-weight="700" font-size="14" fill="#EDEBE6">MON SD-Mini Rack</text>
            <text x="277" y="337" text-anchor="middle" font-family="monospace" font-size="11" fill="#8C887E">ID 13</text></g>
          <g><rect x="150" y="134" width="150" height="64" rx="8" fill="#131316" stroke="rgba(237,235,230,0.14)" stroke-width="1.5"></rect>
            <text x="225" y="158" text-anchor="middle" font-family="var(--font-body), system-ui, sans-serif" font-weight="700" font-size="14" fill="#EDEBE6">MON Console</text>
            <text x="225" y="178" text-anchor="middle" font-family="monospace" font-size="11" fill="#8C887E">SD-Mini · ID 3</text></g>
          <text x="360" y="215" text-anchor="middle" font-family="monospace" font-size="11" letter-spacing="0.08em" fill="#8C887E">ONE LOOP · 2G FIBRE</text>
          <text x="360" y="231" text-anchor="middle" font-family="monospace" font-size="11" letter-spacing="0.08em" fill="#8C887E">MATCH ALL 5 DEVICES</text>
        </svg>
        <div class="flex flex-wrap justify-center gap-6 mt-6 font-mono text-xs text-muted">
          <span class="inline-flex items-center gap-2"><i style="width:18px;height:3px;border-radius:2px;display:inline-block;background:#D8442F"></i>RED — Snd, outbound, clockwise</span>
          <span class="inline-flex items-center gap-2"><i style="width:18px;height:3px;border-radius:2px;display:inline-block;background:#5B8DEF"></i>BLUE — Rcv, return, counter-clockwise</span>
        </div>
      </div>

      <div class="rounded-lg border-l-2 pl-5 py-4 my-6" style="border-color:#5B8DEF;background:rgba(91,141,239,0.08);">
        <p class="text-bone/90"><strong class="text-bone">Red to A, blue to B?</strong> DiGiCo's ports genuinely are labelled A and B — pick A as red and B as blue and hold that on every device, no exceptions. That consistency is the entire value of the scheme: a fresh pair of eyes at 2am on a fibre run doesn't have to trace the cable, just check colour against letter.</p>
      </div>

      <div class="rounded-lg border-l-2 pl-5 py-4 my-6" style="border-color:#D8442F;background:rgba(216,68,47,0.08);">
        <p class="text-bone/90"><strong class="text-bone">But don't assume A pairs straight across to A at the far end.</strong> DiGiCo has one documented case where it doesn't — wiring an R-series Optocore box (DD4MR, X6R, etc.) into an SD console's loop ports crosses: DiGiCo A → Optocore Link 2, DiGiCo B → Optocore Link 1, not 1-to-1. That rule is written for R-series boxes specifically; there's no confirmation it applies between two plain SD Racks/consoles in a ring like this one. Treat "A is always red" as solid — treat "A always lands on A at the other end" as something to verify at the connector.</p>
      </div>

      <h2 class="display text-3xl sm:text-4xl mt-14 mb-4">Step by step</h2>
      <p class="text-lg text-bone/85 leading-relaxed mb-8">Do these in order — ID and fibre-speed decisions upstream save you from chasing a "loop won't link" fault later, especially with five devices instead of two.</p>

      <div class="space-y-8 border-t border-line pt-8">
        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">01</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Plan the ring and write down every ID</h3>
          <p class="text-bone/80 leading-relaxed">Five devices, five unique Optocore IDs. Consoles take the low primary IDs; racks take the rack range — and with two racks sharing monitor world, they still each need their own unique number.</p>
          <p class="font-mono text-sm text-muted mt-3">FOH Console → ID 1 · MON Console → ID 3 · FOH Rack → ID 11 · MON SD-Rack → ID 12 · MON SD-Mini Rack → ID 13</p>
          <p class="text-bone/80 leading-relaxed mt-3">Neither console is a dual-loop SD5/SD7, so there's no loop-1/loop-2 split to think about — every device lives on the one loop, primary console IDs run odd (1, 3, 5, 7, 9).</p>
        </div>

        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">02</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Run the physical ring — and colour it</h3>
          <p class="text-bone/80 leading-relaxed">Thread one continuous fibre path through all five devices and back to where it started:</p>
          <p class="font-mono text-sm text-muted mt-3">FOH Console → FOH Rack → [run to stage] → MON SD-Rack → MON SD-Mini Rack → MON Console → [run back] → FOH Console</p>
          <p class="text-bone/80 leading-relaxed mt-3">Five hops, five unique IDs, one loop. Every hop's send-direction fibre is red, its return-direction fibre is blue — same physical port position on every device. Never cross a red into a blue port.</p>
        </div>

        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">03</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Set each rack's ID and fibre speed</h3>
          <p class="text-bone/80 leading-relaxed">On each rack's MADIPod display: unlock with left + right held 2 seconds, set Rack Type to match the physical unit, then open Optocore ID &amp; Fibre Speed and dial in the ID. Do this on all three racks — easy to do two and forget the small one.</p>
          <p class="text-bone/80 leading-relaxed mt-3"><strong class="text-bone">Fibre speed must match on all five devices.</strong> Default is 2G — only drop to 1G for a run over ~350m or 1G-only gear. Dropping to 1G caps the whole system at 224 I/O @ 96kHz — don't do it on just one rack, a mismatched device simply won't link.</p>
        </div>

        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">04</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Enable Optocore on both consoles</h3>
          <p class="text-bone/80 leading-relaxed">Options → Console menu → Enable Optocore on each desk, then restart. Since neither console has dual-loop optics, this is a straight on/off — no Loop 1 / Loop 2 / Both choice to make.</p>
        </div>

        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">05</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Set the clock source — on both engines</h3>
          <p class="text-bone/80 leading-relaxed">Sync source = Optocore on both consoles. Not Master, not Internal — those are for MADI-only rigs and will hand you random clock errors here for no benefit.</p>
          <p class="text-bone/80 leading-relaxed mt-3">The lowest ID on the ring (FOH Console, ID 1) becomes clock master automatically. If it drops off the loop, ID 3 takes over instantly — no menu diving required mid-show.</p>
        </div>

        <div class="border-b border-line pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">06</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Power up, close the loop, bring up I/O</h3>
          <p class="text-bone/80 leading-relaxed">Both PSUs on every rack, both separately earthed. Patch the ring closed across all five devices, power everything, then on each console: Setup Optocore → Conform All Ports, then check the Optocore Details panel — all three racks should show, sample rate correct, no channel errors.</p>
          <p class="text-bone/80 leading-relaxed mt-3">Head into Audio I/O on each console and pull the channels you need — a channel from the small MON SD-Mini Rack routes exactly the same way as one from the main MON SD-Rack, the loop doesn't care which rack it physically came from.</p>
        </div>

        <div class="pb-8">
          <p class="font-mono text-sm text-tungsten mb-1">07</p>
          <h3 class="text-xl font-semibold text-bone mb-2">Verify the ring is actually closed</h3>
          <p class="text-bone/80 leading-relaxed">On each rack's main display, confirm <code class="font-mono text-sm px-1 py-0.5 rounded bg-ink3">s: O</code> (Optocore-synced) and that the sync-order line shows the active arrow under O. All five devices should agree on sample rate.</p>
          <p class="text-bone/80 leading-relaxed mt-3">The real proof: with a channel live, pull one fibre leg — unplug a blue return run at the furthest rack from FOH — and confirm audio holds. The ring should self-heal through the other direction instantly. Reconnect straight after; don't leave a leg open on a show day.</p>
        </div>
      </div>

      <h2 class="display text-3xl sm:text-4xl mt-14 mb-4">Quick reference</h2>
      <div class="overflow-x-auto rounded-lg border border-line">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line">
              <th class="text-left font-mono text-xs uppercase tracking-wider text-muted px-4 py-3">Device</th>
              <th class="text-left font-mono text-xs uppercase tracking-wider text-muted px-4 py-3">Role</th>
              <th class="text-left font-mono text-xs uppercase tracking-wider text-muted px-4 py-3">Optocore ID</th>
              <th class="text-left font-mono text-xs uppercase tracking-wider text-muted px-4 py-3">Fibre speed</th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr class="border-b border-line"><td class="px-4 py-3 font-sans font-semibold text-bone">FOH Console</td><td class="px-4 py-3 text-muted">—</td><td class="px-4 py-3">1</td><td class="px-4 py-3">2G</td></tr>
            <tr class="border-b border-line"><td class="px-4 py-3 font-sans font-semibold text-bone">MON Console</td><td class="px-4 py-3 text-muted">SD-Mini</td><td class="px-4 py-3">3</td><td class="px-4 py-3">2G</td></tr>
            <tr class="border-b border-line"><td class="px-4 py-3 font-sans font-semibold text-bone">FOH Rack</td><td class="px-4 py-3 text-muted">SD Rack</td><td class="px-4 py-3">11</td><td class="px-4 py-3">2G</td></tr>
            <tr class="border-b border-line"><td class="px-4 py-3 font-sans font-semibold text-bone">MON SD-Rack</td><td class="px-4 py-3 text-muted">SD Rack</td><td class="px-4 py-3">12</td><td class="px-4 py-3">2G</td></tr>
            <tr><td class="px-4 py-3 font-sans font-semibold text-bone">MON SD-Mini Rack</td><td class="px-4 py-3 text-muted">—</td><td class="px-4 py-3">13</td><td class="px-4 py-3">2G</td></tr>
          </tbody>
        </table>
      </div>

      <p class="mt-10 pt-6 border-t border-line font-mono text-xs text-muted leading-relaxed">
        Sources: TN320 (SD dual-loop info, primary ID scheme), TN300 (Optocore clock operations), TN319 (Optocore port labelling and the R-series A/B cross gotcha), SD Rack User Manual B (rack menu system, ID range, fibre speed). Model/ID assignment for the MON SD-Mini Rack assumed to follow the same rack-class rules as the full SD Rack — verify against that unit's own manual on site if it differs.
      </p>
    `,
  },
];
