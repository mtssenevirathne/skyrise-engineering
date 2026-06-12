import Image from "next/image";

import { services, Service } from "@/app/data/services";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import {
  Building2,
  Hammer,
  Zap,
  House,
  Trees,
  
} from "lucide-react";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service: Service | undefined = services[slug];

  const serviceIcons = {
    "civil-engineering": Building2,
    construction: Hammer,
    "electrical-electronic": Zap,
    "property-development": House,
    "land-reclamation": Trees,
  };

  const Icon =
    serviceIcons[slug as keyof typeof serviceIcons] ||
    Building2;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">

      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Orange Glow */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">

        {/* Hero Banner */}
        <div className="relative h-[500px]">

          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

            <div className="w-24 h-24 rounded-3xl bg-orange-500/20 backdrop-blur-sm border border-orange-500/20 flex items-center justify-center mb-6">
              <Icon
                size={50}
                className="text-orange-500"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white">
              {service.title}
            </h1>

          </div>
        </div>



        {/* Main Content */}
        
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          <Link
  href="/#services"
  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-10"
>
  <ArrowLeft size={23} />
  
</Link>
          

          {/* About Section */}
          <div className="max-w-4xl">

            <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
              Service Overview
            </span>

            <h2 className="text-4xl font-bold text-white mt-4">
              About This Service
            </h2>

            <p className="text-gray-300 text-lg mt-8 leading-relaxed">
              {service.description}
            </p>

          </div>

          {/* Features */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold text-white mb-12">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-5">

                    <Icon
                      size={28}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {feature}
                  </h3>

                </div>
              ))}

            </div>
          </div>

          {/* CTA Section */}
<div className="mt-24">

  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl p-12 text-center">

    {/* Orange Glow Effects */}
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

    <div className="relative z-10">

      <span className="inline-block text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
        
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Need Professional Assistance?
      </h2>

      <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
        Contact Skyrise Engineering today and let our experienced
        team provide innovative engineering solutions for your
        next project.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94777311795"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.2 1.62 6.02L0 24l6.18-1.61A11.96 11.96 0 0012.04 24c6.63 0 12-5.38 12-12 0-3.2-1.25-6.2-3.52-8.52zM12.04 21.8c-1.82 0-3.59-.49-5.14-1.41l-.37-.22-3.67.96.98-3.57-.24-.37A9.72 9.72 0 012.34 12c0-5.35 4.35-9.7 9.7-9.7 2.59 0 5.03 1.01 6.86 2.84a9.65 9.65 0 012.84 6.86c0 5.35-4.35 9.8-9.7 9.8zm5.32-7.28c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.49-.49-.66-.5h-.56c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.34s1 2.71 1.14 2.9c.15.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          </svg>

          WhatsApp Us
        </a>

        {/* Contact Button */}
        <Link
  href="/#contact"
  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-600 bg-slate-800/50 hover:bg-slate-700 text-white font-semibold transition-all duration-300"
>
  Contact Us
</Link>

      </div>

    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}