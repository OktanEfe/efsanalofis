"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SanalOfisNedir() {
  return (
    <section id="sanal-ofis-nedir" className="py-32 bg-white overflow-hidden font-satoshi">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tighter mb-8">
              Sanal Ofis <br /> 
              <span className="text-[#ffbe00]">Nedir?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
              <p>
                Sanal ofis, fiziksel bir dört duvarın ötesinde, işletmenize profesyonel bir <span className="text-black font-bold">yasal adres</span>, sekreterya ve kurumsal imaj kazandıran modern iş modelidir.
              </p>
              <p>
                EF Sanal Ofis ile Kocaeli&apos;nin en prestijli lokasyonunda, yüksek kira ve personel gideri ödemeden resmi varlığınızı oluşturursunuz. Gelen kargo ve çağrılarınız uzman ekibimizce yönetilir.
              </p>
              <div className="p-6 bg-gray-50 rounded-3xl border-l-8 border-[#ffbe00]">
                <p className="italic text-black font-bold">
                  &quot;Zamanınızı ve bütçenizi ofis yönetimine değil, işinizi büyütmeye harcayın.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[3rem] rotate-3 -z-10" />
            
            <div className="relative aspect-video lg:aspect-square  rounded-[2.5rem] overflow-hidden  border-8 border-white group">
              <Image 
                src="/images/efsanalofis.png" 
                alt="EF Sanal Ofis Modern Çalışma Alanı"
                fill
                className="object-cover   transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}