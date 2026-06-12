import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/app/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden">

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

      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-10"
        >
          <ArrowLeft size={23} />
          
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800">

              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-[500px] object-cover"
              />

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">
              {project.title}
            </h1>

            <p className="text-orange-500 text-lg mt-4">
              Year: {project.year}
            </p>

            <p className="text-gray-400 leading-relaxed mt-8">
              {project.description}
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-orange-500 font-bold">
                  Category
                </h3>

                <p className="text-white mt-2">
                  {project.category}
                </p>

              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-orange-500 font-bold">
                  Completion Year
                </h3>

                <p className="text-white mt-2">
                  {project.year}
                </p>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <a
                href="https://wa.me/94777311795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Discuss Similar Project
              </a>

            </div>

          </div>

        </div>

        {/* Project Overview */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold text-white mb-6">
            Project Overview
          </h2>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">

            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              Skyrise Engineering successfully delivered this project
              with a strong commitment to quality, safety and client
              satisfaction while maintaining industry standards and
              engineering best practices.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}