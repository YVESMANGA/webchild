'use client'
import { useState } from "react";
import TypingLoop from "./TypingLoop";
import { Phone } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background interactif */}
      <div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.4), rgba(15, 23, 42, 1))`,
          transition: "background 0.1s",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Titre avec dégradé bleu */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-text-fade">
          Bienvenue chez <span className="text-white">Webchild</span>
        </h1>

        {/* Description */}
        <TypingLoop text="Création de sites vitrines et e-commerce modernes et performants " speed={50} delay={2000} />

        {/* Bouton CTA bleu */}
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          <Phone size={20} />
          Nous contacter
        </a>

      </div>
    </section>
  );
}
