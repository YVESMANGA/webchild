"use client";

import { useEffect, useState } from "react";

interface TypingLoopProps {
  text: string;
  speed?: number;       // vitesse d’écriture en ms par lettre
  delay?: number;       // pause avant de recommencer
}

export default function TypingLoop({ text, speed = 50, delay = 2000 }: TypingLoopProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    if (index < text.length) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      // une fois le texte terminé, attendre puis réinitialiser
      resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
    }

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, [index, text, speed, delay]);

  return (
    <p className="relative mt-6 text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-200">
      {displayedText}
      <span className="border-r-2 border-gray-200 animate-pulse ml-1"></span>
    </p>
  );
}
