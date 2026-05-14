"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function HakkimizdaContent() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-[#ffbe00]/10 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/farkımız.jpg"
                alt="EF Sanal Ofis Farkımız"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
           
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <span className="text-[#ffbe00] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Vizyoner Yaklaşım</span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1] tracking-tighter mb-8">
              Farkımız <br /> 
              <span className="text-gray-400 italic font-light tracking-tight">Sadece Bir Adres Değil.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-medium">
              <p>
                EF Sanal Ofis, işi sadece bir &quot;kağıt üzerinde adres&quot; olarak görmez. Kocaeli&apos;de denetim süreçlerine tam uyumlu, profesyonel bir <span className="text-black font-bold underline decoration-[#ffbe00] decoration-2">yasal altyapı</span> sunarız.
              </p>
              <p>
                Fethiye Caddesi&apos;nin kalbinde, marka itibarınızı güçlendiren merkezi konumumuzla her tebligat ve kargoyu anında raporlarız. Şeffaf sözleşme ve <span className="text-black">sıfır gizli maliyet</span> prensibiyle çalışıyoruz.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={itemVariants} className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[#ffbe00] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Kurumsal Kimlik</span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1] tracking-tighter mb-8">
              EF Kimdir? <br />
              <span className="text-gray-400 italic font-light tracking-tight">Geleceği Kuranlar İçin.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-medium">
              <p>
                Biz, girişimcilerin ve freelancerların önündeki <span className="text-black font-bold">operasyonel yükleri</span> kaldırmak için yola çıktık. Kira, stopaj, aidat ve bakım masraflarını tarihe gömüyoruz.
              </p>
              <p>
                EF Sanal Ofis olarak amacımız; işletmenize prestijli bir duruş kazandırırken, sizin sadece <span className="text-black">işinizi büyütmeye</span> odaklanmanızı sağlamaktır. Geri kalan tüm kurumsal süreçleri biz profesyonellikle hallediyoruz.
              </p>
            </div>
            
            <div className="mt-12 flex gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-black text-black">100%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Yasal Uyum</p>
              </div>
              <div>
                <p className="text-2xl font-black text-black">7/24</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bilgilendirme</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-gray-50 flex items-center justify-center p-12 lg:p-24 shadow-inner">
              <Image
                src="/images/logo.jpeg"
                alt="EF Sanal Ofis Logo"
                width={400}
                height={300}
                className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[15rem] font-black uppercase">EF</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}