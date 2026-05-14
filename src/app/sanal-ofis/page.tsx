import type { Metadata } from "next";
import SanalOfisHero from "@/components/sections/sanal-ofis/SanalOfisHero";
import SanalOfisNedir from "@/components/sections/sanal-ofis/SanalOfisNedir";
import SanalOfisHizmetler from "@/components/sections/sanal-ofis/SanalOfisHizmetler";
import SanalOfisGorusme from "@/components/sections/sanal-ofis/SanalOfisGorusme";
import NedenSanalOfis from "@/components/sections/sanal-ofis/NedenSanalOfis";
import SahisSirketi from "@/components/sections/sanal-ofis/SahisSirketi";

export const metadata: Metadata = {
  title: "EF Sanal Ofis - Kocaeli'de Sanal Ofis ve Yasal Adres Detayları",
  description: "EF Sanal Ofis - Kocaeli merkezli sanal ofis, hazır ofis ve yasal adres hizmetleri. Girişimciler, freelancerlar ve şirket sahipleri için prestijli ofis çözümleri.",
  keywords: "ef sanal ofis, sanal ofis kocaeli, yasal adres, hazır ofis, şirket kuruluşu, izmit sanal ofis",
  authors: [{ name: "EF Sanal Ofis" }],
  openGraph: {
    title: "EF Sanal Ofis - Kocaeli'de Sanal Ofis ve Yasal Adres Hizmetleri",
    description: "Kocaeli merkezli EF Sanal Ofis, yasal adres, sanal ofis ve hazır ofis çözümleriyle işletmelere prestij kazandırır.",
    url: "https://www.efsanalofis.com/sanal-ofis",
    siteName: "EF Sanal Ofis",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/Favicon.png", width: 800, height: 600, alt: "EF Sanal Ofis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EF Sanal Ofis - Kocaeli'de Sanal Ofis Detayları",
    description: "Girişimciler ve şirket sahipleri için uygun fiyatlı sanal ofis, hazır ofis ve yasal adres çözümleri.",
    images: ["/images/Favicon.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.efsanalofis.com/sanal-ofis" },
};

export default function SanalOfisPage() {
  return (
    <>
      <SanalOfisHero />
      <SanalOfisNedir />
      <SanalOfisHizmetler />
      <SanalOfisGorusme />
      <NedenSanalOfis />
      <SahisSirketi />
    </>
  );
}
