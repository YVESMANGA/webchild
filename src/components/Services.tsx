"use client";

import Link from "next/link";
import { services } from "@/data/service";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-12">Nos Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon; // instanciation du composant
            return (
              <div
                key={service.slug}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
