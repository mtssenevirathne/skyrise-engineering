import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const constructionProjects = [
  {
    title: "Luxury Apartment - Wattala",
    year: "2010",
    image: "/projects/pro1.jpeg",
  },
  {
    title: "Semi Luxury Apartment - Borella",
    year: "2008",
    image: "/projects/pro2.jpeg",
  },
  {
    title: "Semi Luxury Apartment - Kadawatha",
    year: "2011",
    image: "/projects/pro3.jpeg",
  },
  {
    title: "Semi Luxury Apartment - Ja-Ela",
    year: "2012",
    image: "/projects/pro4.jpeg",
  },
  {
    title: "Luxury Apartment - Bambalapitiya",
    year: "2015",
    image: "/projects/pro5.jpeg",
  },
];

const civilProjects = [
  {
    year: "1997",
    title: "Kataragama Water Supply Scheme",
  },
  {
    year: "2000",
    title: "Kethhena Water Treatment Plant",
  },
  {
    year: "2003",
    title: "Town South of Colombo Water Supply Project (JICA Funded)",
  },
  {
    year: "2004",
    title: "Kalu Ganga Water Supply Project Phase II",
  },
  {
    year: "2008",
    title: "Town East of Colombo Water Supply Project (JICA & ADB Funded)",
  },
  {
    year: "2011",
    title: "Kalu Ganga Water Supply Expansion Project",
  },
  {
    year: "2015",
    title: "Town North of Colombo Water Supply Project (JICA & ADB Funded)",
  },
];

const landProjects = [
  {
    location: "Adiyambalama",
    year: "2010",
  },
  {
    location: "Bellanwila",
    year: "2009",
  },
  {
    location: "Wattala - Mabola",
    year: "2011",
  },
];

const propertyProjects = [
  "Negombo - 2010",
  "Chilaw - 2009",
  "Kaduwela - 2007",
  "Hanwella - 2008",
  "Millaniya - 2009",
  "Horana - 2022",
  "Bandaragama - 2024",
];

export default function ProjectsPage() {
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

        <div className="absolute inset-0" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* Orange Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

          {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-10"
        >
          <ArrowLeft size={23} />
          
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center"></div>

        {/* Hero */}
        <div className="text-center mb-24">

          <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
            Our Portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Projects & Experience
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Over 36 years of engineering excellence delivering
            successful infrastructure, construction, property
            development and land reclamation projects across Sri Lanka.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-orange-500">
                50+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-orange-500">
                36+
              </h3>
              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 col-span-2 md:col-span-1">
              <h3 className="text-3xl font-bold text-orange-500">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Commitment
              </p>
            </div>

          </div>

        </div>

        {/* Construction Projects */}
        <section className="mb-28">

          <h2 className="text-4xl font-bold text-white mb-10">
            Construction Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {constructionProjects.map((project, index) => (

              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500 transition"
              >

                <div className="relative h-64">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <span className="text-orange-500 text-sm">
                    {project.year}
                  </span>

                  <h3 className="text-white text-xl font-bold mt-2">
                    {project.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Civil Engineering */}
        <section className="mb-28">

          <h2 className="text-4xl font-bold text-white mb-10">
            Civil Engineering Experience
          </h2>

          <div className="space-y-6">

            {civilProjects.map((project, index) => (

              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4"
              >

                <div className="text-orange-500 font-bold text-xl min-w-[80px]">
                  {project.year}
                </div>

                <div className="text-gray-300">
                  {project.title}
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Land Reclamation */}
        <section className="mb-28">

          <h2 className="text-4xl font-bold text-white mb-10">
            Land Reclamation Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {landProjects.map((project, index) => (

              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center"
              >

                <h3 className="text-white font-bold text-xl">
                  {project.location}
                </h3>

                <p className="text-orange-500 mt-2">
                  Earth Filling
                </p>

                <p className="text-gray-400 mt-3">
                  {project.year}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Property Development */}
        <section>

          <h2 className="text-4xl font-bold text-white mb-10">
            Property Development Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {propertyProjects.map((project, index) => (

              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center"
              >

                <h3 className="text-white font-semibold">
                  {project}
                </h3>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}