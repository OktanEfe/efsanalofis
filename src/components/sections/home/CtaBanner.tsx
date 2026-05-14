"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-32 bg-[#f2f2f2] font-satoshi overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[4rem] bg-white border border-white p-[1px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden"
        >
          <div className="absolute -bottom-10 -right-10 select-none pointer-events-none opacity-[0.03]">
            <h1 className="text-[10rem] md:text-[20rem] font-black tracking-tighter leading-none text-black">
              E
            </h1>
          </div>

          <div className="relative rounded-[calc(2rem-1px)] md:rounded-[calc(4rem-1px)] bg-white py-16 md:py-28 border border-gray-100/50 overflow-hidden">
            
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ffbe00]/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,190,0,0.02)_0%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-8">

              <h2 className="text-[2rem] md:text-5xl lg:text-7xl font-black text-black tracking-[-0.04em] md:tracking-[-0.06em] mb-6 md:mb-8 max-w-5xl leading-[1] md:leading-[0.9] lg:px-10">
                Sıradan Bir Ofis Değil, <br /> 
                <span className="text-[#ffbe00]">Yeni Bir Vizyon.</span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base lg:text-lg font-medium max-w-2xl mb-10 md:mb-14 leading-relaxed">
                Modern iş dünyasının ihtiyaçlarına göre tasarlanmış, prestijli yasal adres ve 
                ayrıcalıklı ofis çözümleriyle işinizi bir üst seviyeye taşıyın.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10">
                <Link
                  href="/iletisim"
                  className="group relative bg-black text-white font-black px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-[#ffbe00] hover:text-black transition-all duration-500 text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-black/20 overflow-hidden w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">Hemen Teklif Al</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                
                <a
                  href="tel:+905322504819"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="flex items-center gap-3 md:gap-4 text-black font-black text-[11px] uppercase tracking-[0.2em] group-hover:text-[#ffbe00] transition-colors">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:border-[#ffbe00] group-hover:bg-[#ffbe00]/5 transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    Danışman ile Görüş
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
