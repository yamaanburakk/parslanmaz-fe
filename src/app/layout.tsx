import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pars Endüstriyel Mutfak - Paslanmaz Çelik Ekipman Üretimi",
  description: "Restoran, otel, kafe, fırın ve catering işletmeleri için pasta dolabı, kumpir-waffle dolabı, teşhir dolapları ve özel üretim çelik tezgahlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
