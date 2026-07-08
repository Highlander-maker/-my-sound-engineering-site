"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero({ credits }: { credits: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Parallax stage photograph */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/images/concert.jpg"
          alt="Highlander Audio at front of house on a stadium show"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 h-full mx-auto max-w-container px-5 sm:px-8 flex flex-col justify-end pb-14"
      >
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          FOH &amp; Monitor Mix · System Engineering · RF
        </motion.p>

        <h1 className="display text-[15vw] sm:text-[12vw] lg:text-[10rem] leading-[0.85]">
          {["TURNING UP", "THE ART OF", "LIVE SOUND"].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {i === 2 ? (
                <>
                  LIVE <span className="text-tungsten">SOUND</span>
                </>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <p className="max-w-md text-muted text-base sm:text-lg leading-relaxed">
            Freelance engineer on the UK &amp; international touring circuit —
            precise systems, clean RF and a calm stage, from festival main stages
            to stadiums.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-ink font-medium hover:bg-tungsten transition-colors"
            >
              View the work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-bone/25 px-6 py-3 text-bone hover:bg-bone/10 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Credit marquee pinned to the very bottom */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-line bg-ink/40 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_38s_linear_infinite] gap-10 text-sm text-muted">
          {[...credits, ...credits].map((c, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="uppercase tracking-widest">{c}</span>
              <span className="text-tungsten/60">✳</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
