import { Suspense } from "react";
import type { Metadata } from "next";
import PolitikaHero from "@/components/sections/policies/PolitikaHero";
import PolitikaContent from "@/components/sections/policies/PolitikaContent";

export const metadata: Metadata = {
  title: "Yasal Belgeler | EF Sanal Ofis",
  description: "EF Sanal Ofis gizlilik politikası, çerez politikası ve hizmet şartları.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.efsanalofis.com/politika" },
};

export default function PolitikaPage() {
  return (
    <Suspense>
      <PolitikaHero />
      <PolitikaContent />
    </Suspense>
  );
}
