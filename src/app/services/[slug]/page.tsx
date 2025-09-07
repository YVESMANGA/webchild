import { services } from "@/data/service";

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Service non trouvé</h1>
        <p className="text-gray-700">Le service que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-blue-200 relative overflow-hidden">
      {/* Overlay flou */}
      <div className="absolute inset-0 bg-blue-200/50 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto py-16 px-6">
        {/* Icône et titre */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-blue-600 mb-4 animate-bounce">
            <Icon size={60} />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-2">{service.title}</h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl">{service.description}</p>
        </div>

        {/* Détails */}
        {service.details && (
          <div className="bg-white/90 shadow-xl rounded-2xl p-10 text-gray-700 space-y-6 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            {service.details.split("\n").map((line, index) => {
              if (/^\s*(\d+\.|-)/.test(line)) {
                return (
                  <li key={index} className="ml-6 list-inside list-disc text-gray-600">
                    {line.replace(/^\s*(\d+\.|-)\s*/, "")}
                  </li>
                );
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <a
            href={`https://wa.me/221764757340?text=${encodeURIComponent(
              `Bonjour Webchild, je souhaite en savoir plus sur votre service : ${service.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md"
          >
            Nous contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
