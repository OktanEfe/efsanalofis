"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const badges = [
  { label: "Yasal Adres", sub: "Aynı gün aktif" },
  { label: "Sıfır Aidat", sub: "Gizli ücret yok" },
  { label: "Kocaeli Merkez", sub: "Prestijli konum" },
];

const notifications = [
  {
    icon: (
      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    bg: "bg-emerald-500/10",
    title: "Yasal adresiniz aktif edildi",
    sub: "Ömerağa Mah. Fethiye Cad. Kat 4",
    time: "Az önce",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-blue-500/10",
    title: "Yeni posta teslim alındı",
    sub: "Vergi dairesi tebligatı",
    time: "2 dk önce",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#ffbe00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    bg: "bg-[#ffbe00]/10",
    title: "Çağrı karşılandı",
    sub: "Müşteri aramanız yönlendirildi",
    time: "5 dk önce",
  },
];

const services = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Dijital Posta Yönetimi",
    status: "7/24 Aktif",
    pulse: true,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Sekreterya & Çağrı",
    status: "Aktif",
    pulse: false,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Kargo & Paket Teslim",
    status: "Aktif",
    pulse: false,
  },
];

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function HeroSection() {
  const [activeNotif, setActiveNotif] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveNotif((p) => (p + 1) % notifications.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffbe00]/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-full px-4 py-2 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffbe00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffbe00]" />
              </span>
              <span className="text-[13px] font-semibold text-gray-800 tracking-[-0.01em]">Kocaeli&apos;nin #1 Sanal Ofis Çözümü</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-[48px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-950 mb-7"
            >
              Prestijli adres,<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#ffbe00]">sıfır ofis</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-[#ffbe00]/15 -rotate-1 z-0 rounded-sm"
                />
              </span><br />
              masrafı.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[18px] text-gray-600 leading-[1.75] mb-10 max-w-lg tracking-[-0.01em] font-medium"
            >
              Girişimciler ve KOBİ&apos;ler için yasal adresli, kurumsal kimlikli modern ofis hizmetleri. İzmit&apos;in tam kalbinde, işinizi büyütün.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2.5 bg-gray-950 hover:bg-black text-white text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(255,190,0,0.15)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Hemen Başvur
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/sanal-ofis"
                className="inline-flex items-center bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-[15px] font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-sm"
              >
                Hizmetleri Keşfet
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-gray-100"
            >
              {badges.map((b) => (
                <div key={b.label} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                  <p className="text-[14px] font-bold text-gray-950">{b.label}</p>
                  <p className="text-[12px] text-gray-500 mt-1 font-medium">{b.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-end relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-10 bg-gradient-to-br from-gray-100 to-white rounded-full blur-2xl opacity-70" />

            <div className="relative w-full max-w-[480px]">
              <div className="bg-gray-950 rounded-[32px] p-7 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.25)] relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ffbe00]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-7 relative z-10">
                  <div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-[0.1em] font-bold">EF Sanal Ofis</p>
                    <p className="text-white font-extrabold text-[17px] mt-1 tracking-tight">Dijital Kontrol Paneli</p>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] text-emerald-400 font-bold">Canlı Aktif</span>
                  </div>
                </div>

                <div className="bg-black/30 rounded-2xl p-5 mb-5 border border-white/5 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-[0.02] rounded-full translate-x-1/2 -translate-y-1/2" />
                  <p className="text-[11px] text-gray-600 uppercase tracking-[0.08em] font-bold mb-2.5">Yasal İş Adresiniz</p>
                  <p className="text-white text-[15px] font-semibold leading-relaxed tracking-tight">
                    Ömerağa Mah. Fethiye Cad.<br />Kat 4, Vakıf İş Hanı
                  </p>
                  <p className="text-gray-500 text-[14px] mt-1.5 font-medium">41300 İzmit / Kocaeli</p>
                  <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-white/5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-emerald-400 font-semibold">Kocaeli Vergi Dairesi Onaylı</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mb-6">
                  {services.map((s) => (
                    <div key={s.label} className="group flex items-center justify-between py-3.5 px-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-150">
                      <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                        {s.icon}
                        <p className="text-[14px] font-medium tracking-tight">{s.label}</p>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                        <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${s.pulse ? "animate-pulse" : ""}`} />
                        <span className="text-[12px] text-gray-400 font-medium">{s.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-black/20 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                  <div className="flex items-center justify-between mb-3.5 relative z-10">
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.1em] font-bold">Son Aktiviteler</p>
                    <div className="flex gap-1">
                      {notifications.map((_, i) => (
                        <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === activeNotif ? "bg-[#ffbe00] w-6" : "bg-white/10 w-2"}`} />
                      ))}
                    </div>
                  </div>

                  <div className="relative h-16 overflow-hidden z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeNotif}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-11 h-11 rounded-2xl ${notifications[activeNotif].bg} flex items-center justify-center shrink-0 border border-white/5`}>
                          {notifications[activeNotif].icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] text-white font-semibold truncate tracking-tight">{notifications[activeNotif].title}</p>
                          <p className="text-[12px] text-gray-400 truncate mt-0.5 font-medium">{notifications[activeNotif].sub}</p>
                        </div>
                        <p className="text-[12px] text-gray-600 shrink-0 font-medium">{notifications[activeNotif].time}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            
                
               

              <motion.div
                className="absolute -right-8 -bottom-6 bg-[#ffbe00] rounded-3xl px-6 py-5 shadow-[0_15px_40px_rgba(255,190,0,0.25)] border-2 border-white"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.2 } }}
              >
                <p className="text-[12px] text-black/60 font-bold uppercase tracking-wider">Hızlı Kurulum</p>
                <p className="text-[26px] font-extrabold text-black leading-tight mt-1 tracking-tight">Sadece 1 Gün</p>
                <div className="absolute top-3 right-4">
                  <svg className="w-4 h-4 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
