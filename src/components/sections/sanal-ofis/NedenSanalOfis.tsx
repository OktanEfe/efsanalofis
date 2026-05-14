"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const maddeler = [
  { 
    title: "Kurumsal Görünürlük", 
    desc: "Yasal bir iş adresiyle markanızın profesyonel imajını anında güçlendirin.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    title: "Maliyet Tasarrufu", 
    desc: "Kira ve fatura yükünü sıfırlayarak bütçenizi işinizi büyütmeye ayırın.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    title: "Esnek Çalışma", 
    desc: "Dünyanın neresinde olursanız olun, prestijli bir merkeze bağlı kalın.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h.293m1.586-3.414l1.414 1.414M11 19v-1a1 1 0 00-1-1H7M15 20v-1a1 1 0 001-1h2a1 1 0 011 1v1m-7-4v.01M9 16v.01" />
      </svg>
    )
  },
  { 
    title: "Yasal Adres Desteği", 
    desc: "Vergi dairesi ve ticaret sicili süreçlerini yasal bir adresle kolayca yönetin.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function NedenSanalOfis() {
  return (
    <section id="neden-sanal-ofis" className="py-16 md:py-24 bg-white text-black font-satoshi">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          
          <motion.div
            className="lg:w-[45%] lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#ffbe00]" />
              <span className="text-sm font-black uppercase tracking-widest text-[#ffbe00]">Avantajlar</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              Geleceğin Ofis <br/> 
              <span className="text-gray-300 italic font-light">Modeliyle Tanışın.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Günümüz iş dünyasında başarı, yalnızca bir masaya sahip olmaktan değil; zamanı ve kaynakları doğru yönetmekten geçiyor.
              </p>
              <p>
                Girişimciler ve freelancerlar için ideal çözüm olan sanal ofis; fiziksel giderleri ortadan kaldırırken prestijli bir kimlik sunar.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 p-5 md:p-8 bg-gray-50 rounded-2xl md:rounded-[2rem] border border-gray-100">
              <p className="text-sm font-bold text-black uppercase tracking-tight mb-2">Hızlı Kurulum</p>
              <p className="text-gray-500 text-sm italic">Sözleşmenizi imzaladığınız gün yasal adresinizi kullanmaya başlayın.</p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-[55%] grid grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {maddeler.map((m) => (
              <motion.div
                key={m.title}
                variants={cardVariants}
                className="group relative bg-white border border-gray-100 p-6 md:p-10 rounded-2xl md:rounded-[2.8rem] md:hover:border-[#ffbe00]/30 md:hover:shadow-[0_20px_50px_rgba(255,190,0,0.1)] transition-all duration-500"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#ffbe00] md:bg-gray-50 flex items-center justify-center text-black mb-5 md:mb-8 md:group-hover:bg-[#ffbe00] transition-colors duration-500">
                  {m.icon}
                </div>
                
                <h5 className="font-black text-base md:text-xl mb-2 md:mb-4 tracking-tight">{m.title}</h5>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                  {m.desc}
                </p>
                
                <div className="absolute top-4 right-4 md:top-6 md:right-6 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-[#ffbe00]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
