import dynamic from "next/dynamic";
import AboutHero from "@/components/AboutHero";

// Lazy load below-the-fold content
const AboutContent = dynamic(() => import("@/components/AboutContent"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
});

const MissionVision = dynamic(() => import("@/components/MissionVision"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
});

const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

export const metadata = {
  title: "Hakkımızda - Pars Endüstriyel Mutfak",
  description: "Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve değerlerimiz.",
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