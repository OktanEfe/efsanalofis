"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Prestijli Yasal Adres",
    desc: "İş kartlarınızdan sözleşmelerinize kadar her yerde güven veren, Kocaeli merkezli resmi iş adresi.",
  },
  {
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Tam Dijital Altyapı",
    desc: "Nerede olursanız olun işinizi yönetin. Kira, fatura, aidat derdi olmadan sadece işinize odaklanın.",
  },
  {
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Minimum Maliyet",
    desc: "Geleneksel ofis giderlerinin küçük bir kesirine, tam kapsamlı kurumsal kimlik ve destek.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffbe00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-[#ffbe00]/20 rounded-full bg-[#ffbe00]/5">
               <p className="text-[#ffbe00] text-[11px] font-bold uppercase tracking-[0.2em]">Neden EF Sanal Ofis?</p>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1] tracking-tight">
              Ofis masrafı olmadan<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                kurumsal kimlik.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[17px] text-gray-400 leading-relaxed font-light">
              Fiziksel bir ofis kiralamadan, Kocaeli&apos;nin en merkezi noktasında yasal ve prestijli bir iş adresine sahip olun. 
              <span className="text-white font-medium"> Geleceğin iş dünyasına bugün adım atın.</span>
            </p>
            <Link
              href="/sanal-ofis"
              className="group relative self-start overflow-hidden px-6 py-3 rounded-full bg-white text-black font-bold text-[14px] transition-all hover:pr-8 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Detayları Gör
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-[2rem] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#ffbe00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#ffbe00] to-[#ff9900] flex items-center justify-center text-black mb-5 md:mb-8 shadow-[0_0_20px_rgba(255,190,0,0.3)] group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
                
                <h3 className="text-[17px] md:text-[20px] font-bold text-white mb-3 md:mb-4 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {f.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] bg-[#ffbe00] w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
