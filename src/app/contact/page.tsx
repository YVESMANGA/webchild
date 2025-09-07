"use client";

export default function ContactPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#38b6ff] mb-6">
          Contactez Webchild
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Nous sommes disponibles pour répondre à toutes vos demandes et vous accompagner dans vos projets digitaux.
        </p>

        {/* Bloc contact */}
        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl text-left space-y-6">
          {/* Adresse */}
          <div>
            <h3 className="text-lg font-semibold text-[#38b6ff]">Adresse :</h3>
            <p className="text-gray-700">
              Quartier Plateau – Conakry / Guinée
            </p>
          </div>

          {/* Téléphones */}
          <div>
            <h3 className="text-lg font-semibold text-[#38b6ff]">Téléphones :</h3>
            <p className="text-gray-700">
              +224 613 80 67 28 / +224 625 17 96 63
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-[#38b6ff]">Emails :</h3>
            <p className="text-gray-700">
              <a href="mailto:contact@webchild.com" className="underline hover:text-blue-600">
                contact@webchild.com
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="text-center mt-6">
            <a
              href={`https://wa.me/221764757340?text=${encodeURIComponent(
                "Bonjour Webchild, je souhaite vous contacter concernant vos services."
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
    </section>
  );
}
