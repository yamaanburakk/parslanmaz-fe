import dynamic from "next/dynamic";
import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";

// Lazy load below-the-fold content
const AboutContent = dynamic(() => import("@/components/AboutContent"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
  ssr: true,
});

const MissionVision = dynamic(() => import("@/components/MissionVision"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
  ssr: true,
});

const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
  ssr: true,
});

export const metadata: Metadata = {
  title: "Hakkımızda - Pars Endüstriyel Mutfak | Paslanmaz Çelik Ekipman Üreticisi",
  description: "Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve değerlerimiz. 10+ yıllık tecrübe ile endüstriyel mutfak çözümleri.",
  keywords: [
    "pars endüstriyel mutfak hakkında",
    "paslanmaz çelik ekipman üreticisi",
    "endüstriyel mutfak firması",
    "mutfak ekipmanları üreticisi",
    "istanbul mutfak firması",
    "mutfak çözümleri",
  ],
  openGraph: {
    title: "Hakkımızda - Pars Endüstriyel Mutfak",
    description: "Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız hakkında detaylı bilgi.",
    type: "website",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <WhyChooseUs />
      <StatsSection />
    </div>
  );
}