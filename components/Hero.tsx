import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/backgrond-img.jpg"
        alt="Skyrise Engineering"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-21">

          

          <h1 className="max-w-4xl text-5xl md:text-7xl font-bold leading-tight text-white">
            Building The Future Through
            <span className="block text-orange-500">
              Engineering Excellence
            </span>
          </h1>

          <p className="max-w-3xl mt-6 text-lg md:text-xl leading-relaxed text-gray-300">
            Skyrise Engineering (Pvt) Ltd delivers professional
            Civil Engineering, Construction, Electrical &
            Electronic Engineering, Property Development,
            Property Sales and Land Reclamation solutions
            across Sri Lanka.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
  href="https://wa.me/94777311795"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
>
  <FaWhatsapp size={22} />
  WhatsApp Us
</a>

<Link
  href="/projects"
  className="
    inline-flex items-center justify-center
    px-8 py-4
    font-semibold text-white
    border border-white/40
    rounded-full
    hover:bg-white/10
    transition
  "
>
  View Projects
</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-gray-400">Services</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-gray-400">Commitment</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-gray-400">Support</p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce">
        ↓
      </div>

    </section>
  );
}