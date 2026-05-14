"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function IletisimForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-[#fffdf5] font-satoshi">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm border border-gray-100">
            <h3 className="font-black text-2xl text-black mb-8 tracking-tight">Hızlı Mesaj</h3>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <div className="w-16 h-16 bg-[#ffbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-black">Mesajınız Alındı</h4>
                <p className="text-gray-500 text-sm mt-2">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Ad Soyad</label>
                    <input name="name" type="text" required placeholder="Oktan Efe" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ffbe00]/20 transition-all outline-none text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">E-Posta</label>
                    <input name="email" type="email" required placeholder="info@efsanalofis.com" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ffbe00]/20 transition-all outline-none text-sm font-medium" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Telefon</label>
                  <input name="phone" type="tel" placeholder="+90 532 000 00 00" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ffbe00]/20 transition-all outline-none text-sm font-medium" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Mesajınız</label>
                  <textarea name="message" rows={4} required placeholder="Size nasıl yardımcı olabiliriz?" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ffbe00]/20 transition-all outline-none text-sm font-medium resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">Bir hata oluştu, lütfen tekrar deneyin.</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-10 bg-black hover:bg-[#ffbe00] text-white hover:text-black font-black py-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest shadow-md disabled:opacity-50"
                >
                  {loading ? "GÖNDERİLİYOR..." : "MESAJI GÖNDER"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 md:p-10 bg-black rounded-[2.5rem] md:rounded-[3rem] text-white shadow-xl relative overflow-hidden">
              <h4 className="font-black text-[#ffbe00] text-lg mb-8 tracking-widest uppercase">Bize Ulaşın</h4>
              <div className="space-y-6">
                {[
                  { title: "TELEFON", text: "+90 532 250 48 19", href: "tel:+905322504819" },
                  { title: "E-POSTA", text: "info@efsanalofis.com", href: "mailto:info@efsanalofis.com" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-black tracking-[0.3em] text-gray-500 mb-1">{item.title}</p>
                    <a href={item.href} className="text-base font-bold hover:text-[#ffbe00] transition-colors">{item.text}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{ y: -4 }}
                href="https://wa.me/905322504819"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-5 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-[#ffbe00] group-hover:text-black transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span className="text-[10px] font-black tracking-widest text-black">WHATSAPP</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://instagram.com/efsanalofis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-5 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-[#ffbe00] group-hover:text-black transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <span className="text-[10px] font-black tracking-widest text-black">INSTAGRAM</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
