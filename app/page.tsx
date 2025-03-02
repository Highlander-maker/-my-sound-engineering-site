"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundImage: "url('/images/concert.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay (Adjusted for better readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* ✅ Centered Logo with Motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex justify-center mb-6"
      >
        <Image
          src="/logo.png"
          alt="HighlanderAudio Logo"
          width={200}
          height={100}
          className="opacity-100 mx-auto"
          priority
        />
      </motion.div>

      {/* ✅ Animated Title (Brighter & More Readable) */}
      <motion.h1
        className="text-5xl font-extrabold text-white drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Turning Up the Art of Live Sound
      </motion.h1>

      {/* ✅ Animated Subtitle (Brighter & More Readable) */}
      <motion.p
        className="mt-4 text-lg text-gray-200 leading-relaxed drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Elevating live performances with precision, passion, Dedicated to delivering{" "}
        <span className="text-celticGreen font-bold">flawless</span> sound,
        ensuring every project exceeds expectations.
      </motion.p>
      
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
>
  
</motion.div>

    </div>
  );
}
