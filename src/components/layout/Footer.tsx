"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const footerLinks = {
  kurumsal: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hakkimizda#sss", label: "Sıkça Sorulan Sorular" },
    { href: "/iletisim", label: "İletişim" },
  ],
  faydali: [
    { href: "/sanal-ofis#sanal-ofis-nedir", label: "Sanal Ofis Nedir?" },
    { href: "/sanal-ofis#hizmetler", label: "Hizmetlerimiz" },
    { href: "/sanal-ofis#neden-sanal-ofis", label: "Neden Sanal Ofis?" },
    { href: "/sanal-ofis#sahis-sirketi", label: "Şahıs Şirketi" },
  ],
  gizlilik: [
    { href: "/politika?tab=hizmet", label: "Hizmet Politikası" },
    { href: "/politika?tab=cerez", label: "Çerez Politikası" },
    { href: "/politika?tab=gizlilik", label: "Gizlilik Politikası" },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-gray-400 border-t border-white/5 pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ffbe00]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffbe00]/5 rounded-full blur-[100px] -mr-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16"
        >
          
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
            <Image 
  src="/images/Efsanalofis2.png" 
  alt="EF Sanal Ofis" 
  width={320} 
  height={110} 
  className="h-14 w-auto object-contain brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100" 
/>
            </Link>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-8 max-w-xs">
              Kocaeli’nin merkezinde, girişimciler ve şirketler için yasal adres, sekreterya ve profesyonel çalışma çözümleri sunuyoruz.
            </p>
            <div className="flex items-center gap-4">
              {[
                { id: 1, label: "Instagram", href: "https://instagram.com/efsanalofis", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { id: 2, label: "WhatsApp", href: "https://wa.me/905322504819", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:bg-[#ffbe00]/10 hover:text-[#ffbe00] hover:border-[#ffbe00]/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <h5 className="text-white text-[12px] font-bold uppercase tracking-widest mb-6">Kurumsal</h5>
              <ul className="space-y-4">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-gray-500 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h5 className="text-white text-[12px] font-bold uppercase tracking-widest mb-6">Hizmetler</h5>
              <ul className="space-y-4">
                {footerLinks.faydali.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-gray-500 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="col-span-2 md:col-span-1" variants={itemVariants}>
              <h5 className="text-white text-[12px] font-bold uppercase tracking-widest mb-6">İletişim</h5>
              <div className="space-y-4">
                <a href="tel:+905322504819" className="flex items-center gap-3 text-[14px] text-gray-500 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#ffbe00]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#ffbe00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +90 532 250 48 19
                </a>
                <a href="mailto:info@efsanalofis.com" className="flex items-center gap-3 text-[14px] text-gray-500 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#ffbe00]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#ffbe00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  info@efsanalofis.com
                </a>
                <div className="flex items-start gap-3 text-[14px] text-gray-500 group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#ffbe00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <p className="leading-relaxed">
                    Ömerağa Mah. Fethiye Cad.<br />Vakıf İş Hanı, Kat 4, İzmit
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-gray-600">
            © {currentYear} <span className="text-gray-400 font-medium">EF Sanal Ofis</span>. Tüm hakları saklıdır.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            {footerLinks.gizlilik.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-[12px] text-gray-600 hover:text-[#ffbe00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-[12px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            YUKARI DÖN
            <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}