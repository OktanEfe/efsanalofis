import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import CtaBanner from "@/components/sections/home/CtaBanner";
import AdvantagesSection from "@/components/sections/home/AdvantagesSection";
import FaqSection from "@/components/sections/home/FaqSection";

export const metadata: Metadata = {
  title: "EF Sanal Ofis - Kocaeli'de Sanal Ofis ve Yasal Adres Hizmetleri",
  description:
    "EF Sanal Ofis, Kocaeli merkezli sanal ofis, yasal adres ve hazır ofis hizmetleri sunar. Girişimciler, freelancerlar ve KOBİ'ler için modern, ekonomik ve prestijli ofis çözümleri.",
  alternates: {
    canonical: "https://www.efsanalofis.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CtaBanner />
      <AdvantagesSection />
      <FaqSection />
    </>
  );
}
