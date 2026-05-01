"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { id: 1, src: "/images/hero/hero-01.jpg", alt: "Star Citizen — Constellation Andromeda in space" },
  { id: 2, src: "/images/hero/hero-02.jpg", alt: "Star Citizen — Aegis Retaliator bomber" },
  { id: 3, src: "/images/hero/hero-03.jpg", alt: "Star Citizen — Stanton system from orbit" },
  { id: 4, src: "/images/hero/hero-04.jpg", alt: "Star Citizen — RSI Polaris capital ship" },
  { id: 5, src: "/images/hero/hero-05.jpg", alt: "Star Citizen — Crusader landing zone" },
  { id: 6, src: "/images/hero/hero-06.jpg", alt: "Star Citizen — Origin 890 Jump luxury liner" },
  { id: 7, src: "/images/hero/hero-07.jpg", alt: "Star Citizen — Drake Cutlass Black fighter" },
  { id: 8, src: "/images/hero/hero-08.jpg", alt: "Star Citizen — Microtech planet surface" },
  { id: 9, src: "/images/hero/hero-09.jpg", alt: "Star Citizen — Esperia Prowler exploration" },
  { id: 10, src: "/images/hero/hero-10.jpg", alt: "Star Citizen — Hurston industrial zone" },
  { id: 11, src: "/images/hero/hero-11.jpg", alt: "Star Citizen — Anvil Carrack explorer" },
  { id: 12, src: "/images/hero/hero-12.jpg", alt: "Star Citizen — planetary ring asteroid field" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[480px] overflow-hidden rounded-xl bg-midnight-mid">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            unoptimized
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-amber" : "bg-cream/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
