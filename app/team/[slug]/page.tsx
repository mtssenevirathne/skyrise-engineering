import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { team } from "@/app/data/team";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = team.find(
    (item) => item.slug === slug
  );

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Team Member Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        <Image
          src="/about us/bgabout.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-[0.08]"
        />

        <div className="absolute inset-0 bg-slate-950/90" />

      </div>

      {/* Orange Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Back Button */}
        <Link
          href="/#leadership"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-12 transition"
        >
          <ArrowLeft size={23} />
          
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40">

              <Image
                src={member.image}
                alt={member.name}
                width={800}
                height={1000}
                className="w-full h-[650px] object-cover"
              />

            </div>

          </div>

          {/* Right Side */}
          <div>

            <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
              Leadership Team
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              {member.name}
            </h1>

            <h2 className="text-xl text-orange-500 mt-4">
              {member.position}
            </h2>

            <div className="mt-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-white font-bold mb-2">
                Professional Experience
              </h3>

              <p className="text-orange-500 text-lg font-semibold">
                {member.experience}
              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-white text-2xl font-bold mb-4">
                Profile Summary
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {member.description}
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/94777311795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                <MessageCircle size={20} />
                Contact via WhatsApp
              </a>

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

    </section>
  );
}