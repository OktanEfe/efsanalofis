"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const advantages = [
  {
    no: "01",
    title: "Minimum Ofis Maliyeti",
    desc: "Klasik ofis giderlerinden kurtulun. Elektrik, su, internet ve temizlik gibi kalemleri düşünmeden sadece işinize odaklanın.",
  },
  {
    no: "02",
    title: "Aidat ve Stopaj Yok",
    desc: "Sanal ofis bir hizmet alımıdır. Stopaj yükünden kurtulur, KDV'li fatura ile vergi avantajı sağlarsınız.",
  },
  {
    no: "03",
    title: "Yasal Adres Hizmeti",
    desc: "Şirketiniz için prestijli bir yasal adres edinin. Vergi levhanızda İzmit'in en bilinen lokasyonunu gösterin.",
  },
  {
    no: "04",
    title: "Merkezi Konum",
    desc: "Kocaeli'nin kalbinde, Fethiye Caddesi'nde bir iş adresine sahip olun. Prestijli bir konumda yer alın.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function AdvantagesSection() {
  return (
    <section id="avantajlar" className="py-32 bg-white relative overflow-hidden font-satoshi">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffbe00]/5 rounded-full blur-[120px] -ml-96 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">

          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ffbe00] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
                Neden EF Sanal Ofis?
              </span>
              <h2 className="text-5xl font-black text-black leading-[1.1] tracking-tighter mb-8">
                İşinizi <br /> 
                Hafifleten <br />
                <span className="text-gray-400 italic font-light">Ayrıcalıklar.</span>
              </h2>
              <div className="w-16 h-1 bg-black rounded-full mb-8" />
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Geleneksel ofislerin hantal yapısından kurtulun. Modern dünyada hız ve verimlilik her şeydir.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            {advantages.map((item) => (
              <motion.div
                key={item.no}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative pl-16 md:pl-28 pb-16 last:pb-0"
              >
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-black text-[#ffbe00]/20 select-none tracking-tighter leading-none transition-colors duration-500 group-hover:text-[#ffbe00]/40">
                    {item.no}
                  </span>
                  <div className="w-[1px] h-20 bg-gray-100 mt-4" />
                </div>

                <div className="relative pt-2">
                  <h3 className="text-2xl md:text-4xl font-black text-black mb-6 flex items-center gap-6 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                    <span className="h-[2px] bg-[#ffbe00] flex-1 max-w-[100px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  </h3>
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-16 pl-16 md:pl-28"
            >
              <a 
                href="/iletisim"
                className="inline-flex items-center gap-6 group text-black font-black text-xl tracking-tight"
              >
                Tüm avantajları yerinde görün 
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-[#ffbe00] group-hover:border-[#ffbe00] transition-all duration-500">
                  <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={3}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}