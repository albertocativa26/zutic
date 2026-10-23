import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "./_components/site-footer";
import SiteHeader from "./_components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZUTIC | Tecnologia e Inovação ao Seu Alcance",
    template: "%s | ZUTIC",
  },
  description: "A ZUTIC transforma desafios empresariais em soluções tecnológicas. Engenharia de software, consultoria de TI, cloud, cibersegurança e suporte em Angola.",
  applicationName: "ZUTIC",
  keywords: [
    "ZUTIC",
    "tecnologia",
    "inovação",
    "engenharia de software",
    "consultoria de TI",
    "cloud computing",
    "cibersegurança",
    "suporte técnico",
    "Angola",
  ],
  openGraph: {
    type: "website",
    locale: "pt_AO",
    siteName: "ZUTIC",
    title: "ZUTIC | Tecnologia e Inovação ao Seu Alcance",
    description:
      "Soluções tecnológicas para empresas: software, consultoria de TI, cloud, cibersegurança e suporte especializado em Angola.",
  },
  twitter: {
    card: "summary",
    title: "ZUTIC | Tecnologia e Inovação ao Seu Alcance",
    description:
      "Soluções tecnológicas para empresas: software, consultoria de TI, cloud, cibersegurança e suporte especializado em Angola.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-AO" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#07090e] pt-20 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
