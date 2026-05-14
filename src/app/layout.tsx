import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EF Sanal Ofis - Kocaeli'de Modern Sanal Ofis Çözümleri",
  
  description:
    "EF Sanal Ofis, Kocaeli merkezli sanal ofis, yasal adres ve hazır ofis hizmetleri sunar. Girişimciler, freelancerlar ve KOBİ'ler için modern, ekonomik ve prestijli ofis çözümleri.",
  keywords:
    "ef sanal ofis, sanal ofis kocaeli, izmit sanal ofis, yasal adres, hazır ofis, şirket kuruluşu",
  authors: [{ name: "EF Sanal Ofis" }],
  openGraph: {
    title: "EF Sanal Ofis - Kocaeli'de Modern Sanal Ofis Çözümleri",
    description:
      "Kocaeli'de prestijli adres, hazır ofis ve yasal adres çözümleri sunan EF Sanal Ofis'e hoş geldiniz.",
    url: "https://www.efsanalofis.com",
    siteName: "EF Sanal Ofis",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/Favicon.png",
        width: 800,
        height: 600,
        alt: "EF Sanal Ofis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EF Sanal Ofis - Kocaeli'de Sanal Ofis Hizmetleri",
    description: "Girişimciler ve işletmeler için uygun fiyatlı sanal ofis çözümleri.",
    images: ["/images/Favicon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffbe00",
  alternates: {
    canonical: "https://www.efsanalofis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <SmoothScroll />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
