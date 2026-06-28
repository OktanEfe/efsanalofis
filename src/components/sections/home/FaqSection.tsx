"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "faq1",
    question: "Sanal Ofis Yasal mı?",
    answer: "Evet, Türk Ticaret Kanunu kapsamında tamamen yasaldır. Şirket kuruluşu ve resmi tebligat adresi olarak güvenle kullanabilirsiniz.",
  },
  {
    id: "faq2",
    question: "Stopaj Ödeyecek miyim?",
    answer: "Hayır. Sanal ofis bir hizmet alımıdır. Stopaj yerine KDV'li fatura alırsınız, bu da işletmeniz için vergi avantajı sağlar.",
  },
  {
    id: "faq3",
    question: "Süreç Nasıl İşliyor?",
    answer: "Evraklarınızı ilettikten sonra sözleşmeniz hazırlanır. Aynı gün içinde vergi dairesine bildirebileceğiniz yasal adresinize sahip olursunuz.",
  },
  {
    id: "faq4",
    question: "Hangi Evraklar Gerekli?",
    answer: "Şahıs veya şirket kurulumu için kimlik fotokopisi, imza beyannamesi ve ikametgah belgesi yeterlidir.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  return (
    <section id="sss" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[320px] shrink-0"
          >
            <div className="absolute -inset-4 bg-[#ffbe00]/20 blur-3xl rounded-full" />
            
            <div className="relative aspect-[9/16] rounded-[3.5rem] border-[10px] border-black bg-black shadow-2xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full rounded-[2.8rem] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full"
                  style={{
                    objectFit: "fill",
                    objectPosition: "center"
                  }}
                >
                  <source src="/videos/Efsanalofis.mp4" type="video/mp4" />
                </video>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-0 right-0 px-4">
                <div className="bg-[#ffbe00] p-4 rounded-2xl text-center shadow-lg">
                  <p className="text-black text-[10px] font-black tracking-widest uppercase">Tanıtım Videosu</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
                Aklınızdaki <br />
                <span className="text-[#ffbe00]">Soruları Cevaplayalım</span>
              </h2>
              <div className="w-20 h-1.5 bg-black rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`overflow-hidden transition-all duration-500 rounded-3xl ${
                    openId === faq.id 
                      ? "bg-black text-white" 
                      : "bg-gray-50 text-black hover:bg-gray-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between px-8 py-7 text-left"
                  >
                    <span className="text-lg font-bold">{faq.question}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-500 ${
                      openId === faq.id ? "border-[#ffbe00] text-[#ffbe00] rotate-[135deg]" : "border-black/10"
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 pb-8 text-gray-400 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-gray-500">
                <span className="text-black">+100&apos;den fazla</span> girişimci bizi tercih etti.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}