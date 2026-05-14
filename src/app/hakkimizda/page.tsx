import type { Metadata } from "next";
import HakkimizdaHero from "@/components/sections/hakkimizda/HakkimizdaHero";
import HakkimizdaContent from "@/components/sections/hakkimizda/HakkimizdaContent";
import HakkimizdaFaq from "@/components/sections/hakkimizda/HakkimizdaFaq";

export const metadata: Metadata = {
  title: "EF Sanal Ofis - Hakkımızda | Kocaeli'de Modern Sanal Ofis ve Yasal Adres Hizmetleri",
  description: "EF Sanal Ofis, Kocaeli merkezli modern sanal ofis, hazır ofis ve yasal adres hizmetleri sunar. Girişimciler, freelancerlar ve KOBİ'ler için profesyonel ofis çözümleri.",
  keywords: "EF Sanal Ofis hakkımızda, Kocaeli sanal ofis, yasal adres hizmeti, hazır ofis Kocaeli, girişimci ofis, KOBİ ofis çözümleri",
  authors: [{ name: "EF Sanal Ofis" }],
  openGraph: {
    title: "EF Sanal Ofis - Kocaeli'de Modern Sanal Ofis Hizmetleri",
    description: "Kocaeli merkezli EF Sanal Ofis, yasal adres, hazır ofis ve toplantı salonu çözümleri sunar.",
    url: "https://www.efsanalofis.com/hakkimizda",
    siteName: "EF Sanal Ofis",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/Favicon.png", width: 800, height: 600, alt: "EF Sanal Ofis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EF Sanal Ofis - Hakkımızda",
    description: "Kocaeli'de prestijli sanal ofis çözümleri | EF Sanal Ofis",
    images: ["/images/Favicon.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.efsanalofis.com/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <>
      <HakkimizdaHero />
      <HakkimizdaContent />
      <HakkimizdaFaq />
    </>
  );
}
