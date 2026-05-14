import type { Metadata } from "next";
import IletisimHero from "@/components/sections/iletisim/IletisimHero";
import IletisimForm from "@/components/sections/iletisim/IletisimForm";

export const metadata: Metadata = {
  title: "İletişim | EF Sanal Ofis",
  description: "EF Sanal Ofis iletişim sayfası — Kocaeli merkezli sanal ofis, yasal adres ve hazır ofis çözümleri. Bizimle hemen iletişime geçin!",
  keywords: "EF Sanal Ofis iletişim, sanal ofis kocaeli, yasal adres, hazır ofis, ef sanal ofis telefon, ef sanal ofis whatsapp",
  authors: [{ name: "EF Sanal Ofis" }],
  openGraph: {
    title: "İletişim | EF Sanal Ofis",
    description: "EF Sanal Ofis iletişim sayfası — Kocaeli merkezli sanal ofis, yasal adres ve hazır ofis çözümleri.",
    url: "https://www.efsanalofis.com/iletisim",
    siteName: "EF Sanal Ofis",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/Favicon.png", width: 800, height: 600, alt: "EF Sanal Ofis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | EF Sanal Ofis",
    description: "Soru, teklif ya da iş birliği için bize ulaşın.",
    images: ["/images/Favicon.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.efsanalofis.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <IletisimHero />
      <IletisimForm />
    </>
  );
}
