"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    id: "faq1", 
    question: "Sanal Ofis Yasal mı?", 
    answer: "Evet, Türk Ticaret Kanunu (TTK) uyarınca sanal ofis kullanımı tamamen yasaldır. Şirket kuruluşu, vergi levhası ve resmi tebligat adresi olarak güvenle kullanabilirsiniz." 
  },
  { 
    id: "faq2", 
    question: "Vergi Avantajı Sağlar mı?", 
    answer: "Kesinlikle. Sanal ofis bir hizmet alımı olduğu için stopaj ödemezsiniz. Bunun yerine KDV'li fatura alarak vergisel maliyetlerinizi düşürür ve gider gösterebilirsiniz." 
  },
  { 
    id: "faq3", 
    question: "Posta ve Kargolarım Nasıl Yönetilir?", 
    answer: "Resmi tebligatlarınız, kargo ve postalarınız ekibimiz tarafından teslim alınır. Teslim alındığı an size dijital kanallar üzerinden bildirim yapılır ve talebiniz doğrultusunda muhafaza edilir." 
  },
  { 
    id: "faq4", 
    question: "Süreç Ne Kadar Sürer?", 
    answer: "Evraklarınızı ilettikten sonra sözleşmeniz dakikalar içinde hazırlanır. Aynı gün içinde vergi dairesine bildirebileceğiniz yasal adresinize sahip olursunuz." 
  },
];

export default function HakkimizdaFaq() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  return (
    <section id="sss" className="py-32 bg-[#fffdf5]">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#ffbe00] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Bilgi Merkezi</span>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-6">
            Merak Edilen <span className="text-gray-400 italic font-light">Her Şey.</span>
          </h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2rem] transition-all duration-500 overflow-hidden ${
                openId === faq.id 
                  ? "bg-black text-white shadow-2xl scale-[1.02]" 
                  : "bg-white text-black hover:bg-gray-50 border border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-8 py-7 text-left"
              >
                <span className="text-lg font-bold tracking-tight">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 135 : 0 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    openId === faq.id ? "border-[#ffbe00] text-[#ffbe00]" : "border-black/10 text-black"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-medium border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="mt-12 text-center text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Daha fazla sorunuz mu var? <a href="/iletisim" className="text-black font-bold underline decoration-[#ffbe00]">Ekibimizle iletişime geçin.</a>
        </motion.p>
      </div>
    </section>
  );
}