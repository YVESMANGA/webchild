"use client";

import { motion } from "framer-motion";

export default function AnimatedCode() {
  return (
    <motion.span
      style={{ display: "inline-block", fontSize: "2rem", color: "#38b6ff" }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,   // répète l’animation indéfiniment
        duration: 5,        // 5 secondes pour faire un tour complet
        ease: "linear",     // rotation uniforme
      }}
    >
      {`</>`}
    </motion.span>
  );
}
