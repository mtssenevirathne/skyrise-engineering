"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { team } from "@/app/data/team";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative py-24 pb-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">

        <Image
          src="/about us/bgabout.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-[0.08]"
        />

        <div className="absolute inset-0" />

      </div>

      {/* Orange Glow Left */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Orange Glow Right */}
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mt-4">
            Meet Our Directors
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals leading Skyrise Engineering
            with expertise in engineering, project management,
            technology and innovation.
          </p>

        </div>

        {/* Director Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member) => (

            <motion.div
              key={member.slug}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <Link
                href={`/team/${member.slug}`}
                className="group block h-full"
              >

                <div className="h-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300 shadow-xl">

                  {/* Image */}
                  <div className="relative h-72 md:h-80 overflow-hidden">

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-white font-bold text-lg leading-snug min-h-[60px]">
                      {member.name}
                    </h3>

                    <p className="text-orange-500 mt-2 text-sm font-medium">
                      {member.position}
                    </p>

                    <p className="text-gray-400 text-sm mt-3">
                      {member.experience} Experience
                    </p>

                    <div className="mt-5 text-orange-400 font-medium group-hover:translate-x-1 transition duration-300">
                      View Profile →
                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}