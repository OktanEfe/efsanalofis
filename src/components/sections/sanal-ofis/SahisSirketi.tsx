"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SahisSirketi() {
  return (
    <section id="sahis-sirketi" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#ffbe00]/5 rounded-full blur-3xl -ml-32" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4  rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/sahissirketi.png"
                alt="Şahıs Şirketi"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
           
              
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
           
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
              Şahıs Şirketi <br />
              <span className="text-gray-400">Sizin İçin Doğru mu?</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Freelancerlar ve yeni girişimciler için en pratik yol şahıs şirketidir. 
              EF Sanal Ofis olarak, karmaşık bürokrasiyi ortadan kaldırıyor; yasal adresinizi ve kira sözleşmenizi dakikalar içinde hazırlıyoruz.
            </p>
            
            <div className="space-y-4 mb-10">
              {["Düşük Kuruluş Maliyeti", "Kolay Kapanış Süreci", "Hızlı Vergi Levhası"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-black">
                  <div className="w-5 h-5 rounded-full bg-[#ffbe00] flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/iletisim"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-black transition-all duration-300 bg-[#ffbe00] rounded-2xl hover:bg-black hover:text-[#ffbe00] overflow-hidden"
            >
              <span className="relative z-10">Kurulumu Başlat</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}