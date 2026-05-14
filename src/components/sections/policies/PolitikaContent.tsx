"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "gizlilik", label: "Gizlilik Politikası" },
  { id: "cerez", label: "Çerez Politikası" },
  { id: "hizmet", label: "Hizmet Şartları" },
];

const contents: Record<string, { title: string; desc: string; sections: { heading?: string; text: string }[] }> = {
  gizlilik: {
    title: "Gizlilik Politikası",
    desc: "EF Sanal Ofis olarak internet sitemizi ziyaret eden kullanıcıların gizliliğine önem veriyoruz.",
    sections: [
      { text: "EF Sanal Ofis, kullanıcı gizliliğini korumayı temel ilkelerinden biri olarak kabul eder. İnternet sitemiz üzerinden bizimle iletişime geçtiğinizde, yalnızca tarafınızca paylaşılan ve iletişim kurulması için gerekli olan bilgiler işlenir." },
      { text: "Tarafımıza iletilen ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriği gibi bilgiler; talebinizi değerlendirmek, sizinle iletişime geçmek, sorularınıza geri dönüş sağlamak ve gerektiğinde yasal yükümlülüklerimizi yerine getirmek amacıyla kullanılabilir." },
      { text: "Kişisel verileriniz, yasal zorunluluk bulunmadıkça üçüncü kişilerle paylaşılmaz. Yetkili kamu kurum ve kuruluşlarının usulüne uygun talepleri veya ilgili mevzuattan kaynaklanan yükümlülükler saklıdır." },
      { text: "EF Sanal Ofis, kişisel verilerin gizliliğini ve güvenliğini korumak amacıyla uygun teknik ve idari tedbirleri almaya özen gösterir. Bununla birlikte, dijital ortamların doğası gereği hiçbir sistemin tamamen risksiz olduğu garanti edilemez." },
      { text: "Kişisel verileriniz, yalnızca işlenme amacı için gerekli olduğu süre boyunca ve ilgili mevzuatın öngördüğü saklama süreleri çerçevesinde muhafaza edilir. İşlenme amacı sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir." },
      { text: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında sahip olduğunuz haklara ilişkin taleplerinizi info@efsanalofis.com adresi üzerinden bizimle paylaşabilirsiniz." },
      { text: "EF Sanal Ofis, gizlilik politikasını mevzuat değişiklikleri veya hizmet süreçlerindeki güncellemeler doğrultusunda revize etme hakkını saklı tutar. Güncel metin bu sayfada yayımlandığı tarihten itibaren geçerli olur." },
    ],
  },
  cerez: {
    title: "Çerez Politikası",
    desc: "EF Sanal Ofis internet sitesinde kullanılan çerezler hakkında bilgilendirme metnidir.",
    sections: [
      { text: "EF Sanal Ofis olarak internet sitemizin güvenli, stabil ve işlevsel biçimde çalışabilmesi amacıyla sınırlı ölçüde çerez kullanabiliriz. Bu metin, internet sitemizde kullanılan çerezler hakkında ziyaretçilerimizi bilgilendirmek amacıyla hazırlanmıştır." },
      { text: "Çerezler, ziyaret ettiğiniz internet sitesi tarafından tarayıcınıza kaydedilebilen küçük metin dosyalarıdır. Çerezler sayesinde site tercihleri hatırlanabilir, oturum yönetimi sağlanabilir ve internet sitesinin temel teknik işleyişi sürdürülebilir." },
      { heading: "1. Kullanılan Çerez Türleri", text: "İnternet sitemizde yalnızca sitenin çalışması için gerekli olabilecek teknik ve zorunlu çerezler kullanılmaktadır. Bu çerezler; sayfa güvenliğinin sağlanması, oturumun devam ettirilmesi, temel kullanıcı tercihleri ve teknik işlevlerin yerine getirilmesi amacıyla kullanılabilir." },
      { heading: "2. Amaç", text: "Bu çerezler, internet sitesinin düzgün çalışmasını sağlamak, güvenliği korumak ve ziyaretçinin talep ettiği temel hizmetleri sunabilmek amacıyla kullanılmaktadır." },
      { heading: "3. Reklam ve Pazarlama Amaçlı Kullanım", text: "EF Sanal Ofis internet sitesinde, bu politika yayımlandığı tarih itibarıyla reklam, pazarlama veya davranışsal takip amacıyla çerez kullanılmamaktadır. Zorunlu olmayan analiz, performans veya reklam çerezlerinin kullanılması halinde gerekli bilgilendirmeler ayrıca yapılır." },
      { heading: "4. Çerezlerin Kontrolü", text: "Ziyaretçiler, tarayıcı ayarları üzerinden çerezleri görüntüleyebilir, silebilir veya sınırlandırabilir. Ancak çerezlerin devre dışı bırakılması halinde internet sitesinin bazı bölümleri beklenen şekilde çalışmayabilir." },
      { heading: "5. Kişisel Verilerle İlişki", text: "Çerezler aracılığıyla kişisel veri işlenmesi söz konusu olduğunda, EF Sanal Ofis ilgili mevzuata uygun şekilde hareket eder. Kişisel verilerinizin işlenmesine ilişkin detaylı bilgiye Gizlilik Politikası üzerinden ulaşabilirsiniz." },
      { heading: "6. Güncellemeler", text: "Bu Çerez Politikası, internet sitemizde kullanılan teknolojilerde veya mevzuatta meydana gelen değişikliklere göre güncellenebilir. Güncel metin bu sayfada yayımlandığı tarihten itibaren geçerli olur." },
      { heading: "7. İletişim", text: "Çerez kullanımı hakkında sorularınız için info@efsanalofis.com adresi üzerinden iletişime geçebilirsiniz." },
    ],
  },
  hizmet: {
    title: "Hizmet Şartları",
    desc: "EF Sanal Ofis tarafından sunulan hizmetlerin kullanım koşulları ve tarafların temel hak ve yükümlülükleri.",
    sections: [
      { text: "EF Sanal Ofis, sanal ofis, yasal iş adresi, toplantı alanı, sekreterya ve benzeri destek hizmetleri sunmaktadır. İşbu Hizmet Şartları, internet sitemizi ziyaret eden ve hizmetlerimizden yararlanan kullanıcılar için genel bilgilendirme niteliği taşır." },
      { text: "EF Sanal Ofis hizmetleri yalnızca yürürlükteki mevzuata uygun amaçlarla kullanılmalıdır. Kullanıcı; hizmetleri hukuka aykırı, üçüncü kişilerin haklarını ihlal eden, yanıltıcı veya kötü niyetli biçimde kullanmamayı kabul eder. EF Sanal Ofis, hukuka aykırı kullanım şüphesi doğuran durumlarda hizmeti durdurma veya yetkili mercilere bildirimde bulunma hakkını saklı tutar." },
      { text: "Hizmet kapsamı, ücretlendirme, ödeme planı, kullanım süresi ve diğer ticari koşullar; ilgili müşteriye sunulan teklif, sözleşme veya hizmet formu kapsamında ayrıca belirlenir. İnternet sitesinde yer alan bilgiler genel bilgilendirme amaçlı olup kesin taahhüt niteliği taşımaz." },
      { text: "Kullanıcı tarafından paylaşılan bilgi ve belgelerin doğru, güncel ve eksiksiz olması esastır. Yanlış veya eksik bilgi verilmesi halinde ortaya çıkabilecek aksaklıklardan EF Sanal Ofis sorumlu tutulamaz." },
      { text: "EF Sanal Ofis, hizmetlerin düzenli ve güvenli şekilde sunulabilmesi için makul teknik ve idari tedbirleri almaya özen gösterir. Ancak internet altyapısı, üçüncü taraf hizmet kesintileri, teknik arızalar veya mücbir sebepler nedeniyle hizmetlerde geçici aksama yaşanabilir." },
      { text: "Taraflar arasında ayrı bir sözleşme imzalanması halinde, hizmet ilişkisine dair esas hükümler öncelikle ilgili sözleşme metni çerçevesinde değerlendirilir." },
      { text: "EF Sanal Ofis, bu Hizmet Şartları üzerinde değişiklik yapma hakkını saklı tutar. Güncel metin, internet sitesinde yayımlandığı tarihten itibaren geçerli kabul edilir." },
      { text: "İnternet sitesinin kullanımına ilişkin genel uyuşmazlıklarda, aksi zorunlu bir yasal düzenleme bulunmadıkça Türk hukuku uygulanır." },
    ],
  },
};

export default function PolitikaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as keyof typeof contents) || "gizlilik";
  const content = contents[activeTab] ?? contents.gizlilik;

  function setTab(id: string) {
    router.push(`?tab=${id}`, { scroll: false });
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">

          <aside className="lg:w-64 shrink-0">
            <div className="bg-[#fffdf5] rounded-2xl p-4 border border-gray-100 sticky top-24">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 px-2">Yasal Belgeler</p>
              <nav className="flex flex-col gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTab(tab.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-[#ffbe00] text-black"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-3">{content.title}</h1>
                <p className="text-gray-500 text-base mb-10 pb-6 border-b border-gray-100">{content.desc}</p>

                <div className="flex flex-col gap-6">
                  {content.sections.map((section, i) => (
                    <div key={i}>
                      {section.heading && (
                        <h2 className="font-semibold text-gray-900 text-lg mb-2">{section.heading}</h2>
                      )}
                      <p className="text-gray-600 leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
