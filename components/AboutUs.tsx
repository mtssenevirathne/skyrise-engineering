"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about us/bgabout.png"
          alt="Blueprint Background"
          fill
          priority
          className="object-cover opacity-[0.08]"
        />
      </div>

      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-4xl md:text-5xl font-bold">
            About Us
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
            Building Excellence Through Engineering
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Delivering innovative engineering and construction
            solutions with quality, integrity and professionalism.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Skyrise Engineering (Pvt) Ltd
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Skyrise Engineering (Pvt) Ltd is a professional
              engineering and construction company committed to
              delivering innovative, reliable and sustainable
              solutions across Sri Lanka.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Our expertise spans Civil Engineering, Construction,
              Electrical & Electronic Engineering, Property
              Development, Property Sales and Land Reclamation.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We take pride in maintaining the highest standards
              of quality, safety and client satisfaction while
              ensuring every project is completed with excellence.
            </p>

            {/* Animated Stats */}
            <div
              ref={ref}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
                <h4 className="text-3xl font-bold text-orange-500">
                  {inView && (
                    <CountUp end={50} duration={3} />
                  )}
                  +
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
                <h4 className="text-3xl font-bold text-orange-500">
                  {inView && (
                    <CountUp end={36} duration={3} />
                  )}
                  +
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  Years
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
                <h4 className="text-3xl font-bold text-orange-500">
                  {inView && (
                    <CountUp end={100} duration={3} />
                  )}
                  %
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  Commitment
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800">

              <Image
                src="/about us/about-us.jpg"
                alt="About Skyrise Engineering"
                width={800}
                height={600}
                className="w-full h-[550px] object-cover"
              />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-slate-950/90 backdrop-blur-md border border-slate-700 rounded-2xl px-6 py-4">

                <h4 className="text-3xl font-bold text-orange-500">
                  50+
                </h4>

                <p className="text-white text-sm">
                  Successfully Completed Projects
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-24">

          <div className="text-center mb-14">
            <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold text-white mt-4">
              Trusted Engineering Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">
              <Building2
                size={40}
                className="text-orange-500 mb-5"
              />

              <h3 className="text-white font-bold text-xl mb-3">
                Professional Expertise
              </h3>

              <p className="text-gray-400">
                Experienced engineering professionals
                delivering high-quality solutions.
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">
              <ShieldCheck
                size={40}
                className="text-orange-500 mb-5"
              />

              <h3 className="text-white font-bold text-xl mb-3">
                Quality Assurance
              </h3>

              <p className="text-gray-400">
                We maintain strict quality standards
                in every project we undertake.
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">
              <Clock3
                size={40}
                className="text-orange-500 mb-5"
              />

              <h3 className="text-white font-bold text-xl mb-3">
                Timely Delivery
              </h3>

              <p className="text-gray-400">
                Efficient project management ensures
                on-time completion of projects.
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">
              <Users
                size={40}
                className="text-orange-500 mb-5"
              />

              <h3 className="text-white font-bold text-xl mb-3">
                Client Satisfaction
              </h3>

              <p className="text-gray-400">
                Building long-term relationships through
                trust and excellent service.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}