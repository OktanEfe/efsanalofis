"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IletisimHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/contact2.jpg"
            alt="EF Sanal Ofis İletişim"
            fill
            sizes="100vw"
            className="object-cover grayscale opacity-60"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#ffbe00] font-black tracking-[0.5em] uppercase text-xs mb-6 block">
            İş Birliği Başlasın
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            Bize <span className="text-gray-500 italic">Ulaşın.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Kocaeli&apos;nin kalbinde, prestijli bir adrese giden yol bir mesaj uzağınızda. Ekibimiz sizinle tanışmak için hazır.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fffdf5] to-transparent z-20" />
    </section>
  );
}