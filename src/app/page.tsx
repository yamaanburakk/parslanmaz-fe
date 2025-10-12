import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

// Static generation for better performance
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
      <ContactSection />
    </div>
  );
}
