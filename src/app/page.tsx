import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

// Lazy load non-critical sections for better initial load
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
});

const ProductsSection = dynamic(() => import("@/components/ProductsSection"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-[#0F172A] to-[#1E293B] animate-pulse" />,
});

const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

// Aggressive caching for static content
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
  description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
  keywords: "pars endüstriyel mutfak, paslanmaz çelik ekipman, endüstriyel mutfak, restoran mutfakları, otel mutfakları, kafe mutfakları, fırın ekipmanları, catering mutfakları, mutfak çözümleri, paslanmaz tezgah, endüstriyel buzdolabı, endüstriyel fırın, mutfak tasarımı, anahtar teslim mutfak, özel üretim mutfak, mutfak projelendirme",
  openGraph: {
    title: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
    images: [
      {
        url: "https://parslanmaz-fe.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pars Endüstriyel Mutfak - Paslanmaz Çelik Mutfak Ekipmanları",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
    </div>
  );
}
