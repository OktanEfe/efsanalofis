"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    bg: "/images/yasaladres.jpg",
    title: "Şirketinizi <br/> <span class='text-[#ffbe00]'>Bugün Kurun.</span>",
    desc: "EF Sanal Ofis, minimum yatırım ile maksimum prestij sağlar. Yasal adresiniz dakikalar içinde hazır.",
    btn: "Süreci Başlat",
  },
  {
    bg: "/images/hero3.jpg",
    title: "Giderleri Sıfırlayın, <br/> <span class='text-[#ffbe00]'>İşinize Odaklanın.</span>",
    desc: "Kira yok, fatura yok, personel gideri yok. Sadece işinizi büyütmek için gereken profesyonel altyapı var.",
    btn: "Hemen Başvur",
  },
  {
    bg: "/images/prestij.jpg",
    title: "Birlikte Daha <br/> <span class='text-[#ffbe00]'>Büyük İşlere.</span>",
    desc: "Kocaeli'nin merkezinde yasal adres ve kurumsal iletişim desteğiyle prestijli bir başlangıç yapın.",
    btn: "Detayları Gör",
  },
];

export default function SanalOfisHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].bg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 
                className="font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] tracking-tighter"
                dangerouslySetInnerHTML={{ __html: slides[current].title }}
              />
              <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl font-medium leading-relaxed">
                {slides[current].desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="bg-[#ffbe00] hover:bg-white text-black font-black px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-md"
                >
                  {slides[current].btn}
                </Link>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? "bg-[#ffbe00] h-12 w-1.5" : "bg-white/30 h-3 w-1.5 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}