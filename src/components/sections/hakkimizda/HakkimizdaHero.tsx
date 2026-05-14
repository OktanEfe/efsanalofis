"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HakkimizdaHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white font-satoshi pt-40 pb-24">
      <div className="absolute inset-x-4 top-40 bottom-12 md:inset-x-8 md:top-48 md:bottom-16 lg:inset-x-12 overflow-hidden rounded-[4rem] shadow-2xl border-[1px] border-gray-100 z-0">
        <Image
          src="/images/herofoto.png"
          alt="EF Sanal Ofis Hero"
          fill
          priority
          className="object-cover scale-105"
          sizes="98vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-20 lg:px-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
           

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-[-0.04em] mb-8">
              Sınırları <br />
              <span className="text-[#ffbe00]">Kaldırın.</span>
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed font-medium mb-12">
              EF Sanal Ofis ile işinizi fiziksel sınırlardan kurtarın. 
              Prestijli bir kurumsal kimlikle dünyayı ofisiniz haline getirin.
            </p>

            <div className="flex flex-wrap gap-16 border-t border-white/10 pt-10">
              <div className="group">
                <p className="text-white text-2xl font-black mb-1 tracking-tighter">200+</p>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">Aktif Üye</p>
              </div>
              <div className="group">
                <p className="text-white text-2xl font-black mb-1 tracking-tighter">24h</p>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">Aktivasyon</p>
              </div>
             
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-16 bottom-24 z-10 hidden 2xl:block opacity-40">
        <div className="flex flex-col items-end gap-4">
          <p className="text-white text-[9px] font-black uppercase tracking-[1em] rotate-90 origin-right translate-y-12">
            EF SOLUTION
          </p>
        </div>
      </div>
    </section>
  );
}