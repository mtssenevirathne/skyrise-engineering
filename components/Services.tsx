"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Zap,
  House,
  Trees,
} from "lucide-react";

const services = [
  {
    title: "Civil Engineering Works",
    slug: "civil-engineering",
    description:
      "Infrastructure development, roads, drainage systems and structural engineering solutions.",
    icon: Building2,
    image: "/services/civil-new.jpg",
  },
  {
    title: "Construction Works",
    slug: "construction",
    description:
      "Residential, commercial and industrial construction projects delivered with quality and precision.",
    icon: Hammer,
    image: "/services/constrution-new.jpg",
  },
  {
    title: "Electrical & Electronic Engineering",
    slug: "electrical-electronic",
    description:
      "Electrical installations, power systems, automation, CCTV and electronic engineering services.",
    icon: Zap,
    image: "/services/electrical.jpg",
  },
  {
    title: "Property Development & Sales",
    slug: "property-development",
    description:
      "Modern property development solutions and real estate investment opportunities.",
    icon: House,
    image: "/services/property-new.jpg",
  },
  {
    title: "Land Reclamation Works",
    slug: "land-reclamation",
    description:
      "Land filling, site preparation, ground improvement and land development solutions.",
    icon: Trees,
    image: "/services/land-new.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-24 overflow-hidden"
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

        <div className="absolute inset-0 " />
      </div>

      {/* Orange Glows */}
      <div className="absolute top-20 left-10 md:left-20 w-56 md:w-72 h-56 md:h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 md:right-20 w-56 md:w-72 h-56 md:h-72 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 md:mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            Our Services
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Skyrise Engineering provides comprehensive engineering,
            construction and development solutions tailored to
            meet the highest industry standards.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="relative overflow-hidden rounded-3xl h-[420px] md:h-96 group cursor-pointer shadow-2xl block"
                >
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 group-hover:from-black/90 transition duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">

                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 backdrop-blur-sm flex items-center justify-center mb-5 border border-orange-500/20">

                      <Icon
                        size={30}
                        className="text-orange-500"
                      />

                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-5 text-orange-400 font-medium group-hover:translate-x-1 transition duration-300">
                      Learn More →
                    </div>

                  </div>

                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}