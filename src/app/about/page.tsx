'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Texte principal */}
        <div>
          <h2 className="text-sm font-semibold uppercase text-[#38b6ff] tracking-widest mb-4">
            Qui sommes-nous ?
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Votre partenaire digital pour tous vos projets
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-medium text-[#38b6ff]">Webchild</span> est une agence digitale innovante, spécialisée dans la création de <span className="text-[#38b6ff] font-medium">sites web</span>, le <span className="text-[#38b6ff] font-medium">e-commerce</span> et la <span className="text-[#38b6ff] font-medium">maintenance</span>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nous accompagnons nos clients avec des solutions sur-mesure pour booster leur visibilité en ligne, maximiser leurs ventes et rendre leur présence digitale mémorable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chez Webchild, chaque projet est traité avec <span className="text-[#38b6ff] font-medium">créativité</span>, <span className="text-[#38b6ff] font-medium">rigueur</span> et <span className="text-[#38b6ff] font-medium">innovation</span>.
          </p>
        </div>

        {/* Image avec effets */}
        <div className="relative flex justify-center">
          <div className="absolute top-[-30px] left-[-30px] w-32 h-32 bg-indigo-400 rounded-full blur-3xl opacity-20 z-0" />
          <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-20 z-0" />
          <Image
            src="/Logo Webchild.png"  // remplace par ton logo ou illustration
            alt="Webchild"
            width={400}
            height={300}
            className="relative z-10 rounded-2xl shadow-xl border border-gray-200 object-cover"
          />
        </div>

      </div>
    </section>
  )
}
