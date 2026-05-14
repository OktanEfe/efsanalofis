"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const hizmetler = [
  {
    no: "01",
    title: "Sanal Ofis Çözümleri",
    desc: "Yasal adres ve operasyonel yönetimle işletmenizi prestijli bir noktada konumlandırın. Sabit ofis maliyetlerinden kalıcı olarak kurtulun.",
    img: "/images/sanalofis1.jpeg",
  },
  {
    no: "02",
    title: "Yasal Adres & Kuruluş",
    desc: "Şirketinizi Kocaeli'nin kalbinde kurun. Sekreterya ve resmi tebligat yönetimiyle işinize kurumsal bir kimlik kazandırın.",
    img: "/images/hizmetler2.png",
  },
  {
    no: "03",
    title: "Resmi Adres Gösterimi",
    desc: "İşletmenizi merkezi bir konumda göstererek güven inşa edin. Tüm resmi yazışmalarınız ekibimizce titizlikle takip edilir.",
    img: "/images/sanalofis3.jpeg",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function SanalOfisHizmetler() {
  return (
    <section id="hizmetler" className="py-16 md:py-32 bg-[#050505] text-white overflow-hidden font-satoshi">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffbe00]/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="mb-10 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#ffbe00]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95]">
            Size Özel <br /> 
            <span className="text-[#ffbe00]">İş Çözümleri.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"
        >
          {hizmetler.map((h) => (
            <motion.div key={h.no} variants={itemVariants} className="group relative">
              <span className="absolute -top-8 -left-4 md:-top-12 md:-left-6 text-[6rem] md:text-[10rem] font-black text-white/[0.02] select-none group-hover:text-[#ffbe00]/10 transition-colors duration-700 leading-none">
                {h.no}
              </span>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] mb-5 md:mb-8 aspect-[4/3] md:aspect-[4/5] border border-white/10 bg-white/5 group-hover:border-[#ffbe00]/50 transition-all duration-700">
                  <Image
                    src={h.img}
                    alt={h.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="px-1 md:px-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 md:mb-4 group-hover:text-[#ffbe00] transition-colors duration-500 tracking-tight">
                    {h.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-lg group-hover:text-white transition-colors duration-500">
                    {h.desc}
                  </p>
                  
                  <div className="mt-5 md:mt-8 relative h-1 w-12 bg-white/20 overflow-hidden rounded-full group-hover:w-full transition-all duration-700">
                    <div className="absolute inset-0 bg-[#ffbe00] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 delay-100" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
