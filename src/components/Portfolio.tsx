"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Modexa",
    description: "Market place de mode.",
    image: "/Logo modexa.jpg",
    link: "https://modexa.moda/",
  },
  {
    title: "Saoro Negoce",
    description: "Site vitrine de l'entreprise Saoro Negoce.",
    image: "/logo saoro.png",
    link: "https://saoronegoce.com/",
  },
  {
    title: "Zenghyan",
    description: "Site vitrine de l'entreprise Zenghyan.",
    image: "/logo z.png",
    link: "https://zhengyuan.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-12">Nos Réalisations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <a
                  href={project.link || "#"}
                  className="mt-4 inline-block px-6 py-2 bg-[#38b6ff] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 text-center"
                >
                  Consulter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
