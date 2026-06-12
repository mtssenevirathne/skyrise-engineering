import Image from "next/image";
import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">

    

      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* Orange Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

      <div className="relative z-10">

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-14">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Build the Future Together
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Delivering innovative engineering, construction,
              infrastructure and development solutions across Sri Lanka.
            </p>

          </div>

        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Company */}
            <div>

              <div className="flex items-center gap-4 mb-6">

                <Image
                  src="/skyrise-logo (1).png"
                  alt="Skyrise Engineering"
                  width={65}
                  height={65}
                  className="w-auto h-auto"
                />

                <div>

                  <h3 className="text-white text-2xl font-bold">
                    Skyrise Engineering
                  </h3>

                  <p className="text-orange-500">
                    Engineering Excellence
                  </p>

                </div>

              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                Skyrise Engineering (Pvt) Ltd provides professional
                engineering, construction, infrastructure,
                property development and land reclamation solutions
                with a commitment to quality, innovation and
                client satisfaction.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-gray-300 text-sm">
                  Civil Engineering
                </span>

                <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-gray-300 text-sm">
                  Construction
                </span>

                <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-gray-300 text-sm">
                  Property Development
                </span>

                <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-gray-300 text-sm">
                  Land Reclamation
                </span>

              </div>

            </div>

            {/* Contact */}
            <div>

              <h3 className="text-white text-2xl font-bold mb-8 flex">
                Contact Information
              </h3>

              <div className="space-y-6">

                <a
                  href="https://wa.me/94777311795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >

                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">

                    <MessageCircle
                      size={22}
                      className="text-green-500"
                    />

                  </div>

                  <div>

                    <p className="text-white font-medium">
                      WhatsApp Office
                    </p>

                    <p className="text-gray-400 group-hover:text-green-500 transition">
                      +94 777 311 795
                    </p>

                  </div>

                </a>

                <a
                  href="mailto:info@skyriseengineering.com"
                  className="flex items-start gap-4 group"
                >

                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

                    <Mail
                      size={22}
                      className="text-orange-500"
                    />

                  </div>

                  <div>

                    <p className="text-white font-medium">
                      Email Address
                    </p>

                    <p className="text-gray-400 group-hover:text-orange-500 transition break-all">
                      skyrise.eng.pvt.ltd@gmail.com
                    </p>

                  </div>

                </a>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

                    <MapPin
                      size={22}
                      className="text-orange-500"
                    />

                  </div>

                  <div>

                    <p className="text-white font-medium">
                      Location
                    </p>

                    <p className="text-gray-400">
                      Sri Lanka
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Skyrise Engineering (Pvt) Ltd.
              All Rights Reserved.
            </p>

            <a
              href="#top"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition"
            >
              Back to Top
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}