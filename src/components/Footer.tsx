'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12">
      {/* Fond bleu flouté */}
      <div className="absolute inset-0 bg-[#38b6ff] backdrop-blur-sm -z-10"></div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-white">

        {/* Logo & Présentation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">
            Webchild
          </h2>
          <p className="text-gray-200 text-sm">
            Agence digitale créative qui accompagne entreprises, marques et entrepreneurs dans leur transformation numérique. Nous allions technologie et innovation pour créer des solutions sur-mesure : sites web modernes, e-commerce, applications performantes, stratégies digitales et contenus engageants.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
          <ul className="space-y-3 text-black text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-black" />
              Dakar – Sénégal
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-black" />
              +221 76 475 73 40
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-black" />
              <a href="mailto:webchild@proton.me" className="underline hover:text-blue-300">
              webchild@proton.me
              </a>
            </li>
            <li className="mt-2">
              <a
                href={`https://wa.me/221764757340?text=${encodeURIComponent(
                  "Bonjour Webchild, je souhaite vous contacter."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md"
              >
                Contactez-nous sur WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bas de page */}
      <div className="mt-10 text-center text-gray-300 text-xs border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} Webchild. Tous droits réservés.
      </div>
    </footer>
  )
}
