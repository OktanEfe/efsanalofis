"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const heroMap: Record<string, { title: string; desc: string }> = {
  gizlilik: {
    title: "Gizlilik Politikası",
    desc: "Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgilendirme.",
  },
  cerez: {
    title: "Çerez Politikası",
    desc: "İnternet sitemizde kullanılan çerezler hakkında bilgilendirme metnidir.",
  },
  hizmet: {
    title: "Hizmet Şartları",
    desc: "Sunduğumuz hizmetlerin kullanım koşulları ve tarafların temel hak ve yükümlülükleri.",
  },
};

export default function PolitikaHero() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "gizlilik";
  const hero = heroMap[tab] ?? heroMap.gizlilik;

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffbe00] rounded-full blur-3xl" />
      </div>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1
          className="font-bold text-4xl md:text-5xl text-white mb-4"
          key={tab + "-title"}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          key={tab + "-desc"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {hero.desc}
        </motion.p>
      </motion.div>
    </section>
  );
}
