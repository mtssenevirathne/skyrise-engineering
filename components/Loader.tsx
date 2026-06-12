"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Logo */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Image
          src="/skyrise-logo (1).png"
          alt="Skyrise Engineering"
          width={120}
          height={120}
          priority
          className="w-auto h-auto"
        />
      </motion.div>

      {/* Company Name */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="text-4xl md:text-5xl font-bold text-white mt-8 text-center"
      >
        Skyrise Engineering
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        className="text-orange-500 mt-3 tracking-wide"
      >
        Engineering Excellence
      </motion.p>

      {/* Loading Bar */}
      <div className="mt-10 w-56 h-1 bg-slate-800 rounded-full overflow-hidden">

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="h-full bg-orange-500"
        />

      </div>

    </div>
  );
}