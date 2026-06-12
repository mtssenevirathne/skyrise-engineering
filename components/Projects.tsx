"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24  bg-slate-950 overflow-hidden"
    >
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

        
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mt-4">
            Our Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Delivering successful engineering, construction,
            infrastructure and development projects across Sri Lanka.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.slice(0, 6).map((project) => (

            <motion.div
              key={project.slug}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >

                <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300">

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">

                      <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-orange-400 text-sm font-medium">
                        {project.year}
                      </span>

                    </div>

                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-orange-500 transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-orange-500 font-medium">

                      View Project

                      <ArrowUpRight
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                      />

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

        {/* View All Button */}
        <div className="text-center mt-14">

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            View All Projects

            <ArrowUpRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}