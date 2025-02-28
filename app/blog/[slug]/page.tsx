"use client";
import { motion } from "framer-motion";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blog Post: {params.slug}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Content coming soon...
      </motion.p>
    </div>
  );
}