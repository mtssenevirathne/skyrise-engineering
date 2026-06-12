import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section  id="contact" className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Orange Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="text-orange-500 text-4xl md:text-5xl font-bold">
            Contact Us
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Build Something Great Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Contact Skyrise Engineering today and discuss your
            next engineering, construction or development project.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Address Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 p-6">

              <div className="absolute inset-0">
                <img
                  src="/about us/bgabout.png"
                  alt=""
                  className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0" />
              </div>

              <div className="relative z-10">

                <MapPin
                  className="text-orange-500 mb-4"
                  size={30}
                />

                <h3 className="text-white text-xl font-bold mb-3">
                  Office Address
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  62/C2, Jayathilaka Garden,
                  <br />
                  Munagama, Horana,
                  <br />
                  Sri Lanka
                </p>

              </div>

            </div>

            {/* Office Numbers */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6">

              <Phone
                className="text-orange-500 mb-4"
                size={30}
              />

              <h3 className="text-white text-xl font-bold mb-3">
                Office Numbers
              </h3>

              <p className="text-gray-400">
                034 226 5322
              </p>

              <p className="text-gray-400">
                034 226 5238
              </p>

            </div>

            {/* Email Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 p-6">

              <div className="absolute inset-0">
                <img
                  src="/about us/bgabout.png"
                  alt=""
                  className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0" />
              </div>

              <div className="relative z-10">

                <Mail
                  className="text-orange-500 mb-4"
                  size={30}
                />

                <h3 className="text-white text-xl font-bold mb-3">
                  Email Address
                </h3>

                <a
                  href="mailto:skyrise.eng.pvt.ltd@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  skyrise.eng.pvt.ltd@gmail.com
                </a>

              </div>

            </div>

            {/* Working Hours */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6">

              <Clock
                className="text-orange-500 mb-4"
                size={30}
              />

              <h3 className="text-white text-xl font-bold mb-3">
                Working Hours
              </h3>

              <p className="text-gray-400">
                Monday - Saturday
              </p>

              <p className="text-gray-400">
                8.00 AM - 6.00 PM
              </p>

            </div>

          </div>

          {/* Quick Contact Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 p-8">

            <div className="absolute inset-0">
              <img
                src="/about us/bgabout.png"
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0" />
            </div>

            <div className="relative z-10">

              <h3 className="text-white text-2xl font-bold mb-4">
                Quick Contact
              </h3>

              <p className="text-gray-400 mb-8">
                Reach us instantly through WhatsApp
                or call us directly.
              </p>

              <div className="space-y-4">

                {/* WhatsApp Director */}
                <a
                  href="https://wa.me/13368443521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-5 hover:bg-green-500/20 transition"
                >
                  <div>

                    <h4 className="text-white font-semibold">
                      WhatsApp Director
                    </h4>

                    <p className="text-green-400 text-sm">
                      +1 (336) 844-3521
                    </p>

                  </div>

                  <MessageCircle
                    className="text-green-400"
                    size={26}
                  />
                </a>

                {/* WhatsApp Office */}
                <a
                  href="https://wa.me/94777311795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-5 hover:bg-green-500/20 transition"
                >
                  <div>

                    <h4 className="text-white font-semibold">
                      WhatsApp Office
                    </h4>

                    <p className="text-green-400 text-sm">
                      +94 777 311 795
                    </p>

                  </div>

                  <MessageCircle
                    className="text-green-400"
                    size={26}
                  />
                </a>

                {/* Call Now */}
                <a
                  href="tel:789942547"
                  className="flex items-center justify-between bg-orange-500/10 border border-orange-500/20 rounded-2xl px-5 py-5 hover:bg-orange-500/20 transition"
                >
                  <div>

                    <h4 className="text-white font-semibold">
                      Call Now
                    </h4>

                    <p className="text-orange-400 text-sm">
                      (78) 994 2547
                    </p>

                  </div>

                  <Phone
                    className="text-orange-400"
                    size={24}
                  />
                </a>
{/* Google Map */}

<div className="mt-16">

  <h3 className="text-3xl font-bold text-white text-center mb-8">
    Our Location
  </h3>

  <div className="overflow-hidden rounded-3xl border border-slate-800">

    <iframe
      src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />

  </div>

</div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}