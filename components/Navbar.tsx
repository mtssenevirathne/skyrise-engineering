"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Leadership", href: "/#leadership" },
    
    
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
          : "bg-slate-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-3"
          >
            <Image
              src="/logononame.png"
              alt="Skyrise Engineering"
              width={60}
              height={60}
              priority
              className="w-auto h-auto"
            />

            <div>
              <h1 className="text-white text-xl font-bold">
                Skyrise Engineering
              </h1>

              <p className="text-orange-400 text-xs">
                Engineering Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-400 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Desktop WhatsApp */}
          <a
            href="https://wa.me/94777311795"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            <FaWhatsapp size={22} />
            WhatsApp Us
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          <div className="px-6 py-6 flex flex-col gap-5">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-orange-400 transition"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://wa.me/94777311795"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold mt-3"
            >
              <FaWhatsapp size={22} />
              WhatsApp Us
            </a>

          </div>

        </div>
      )}
    </header>
  );
}