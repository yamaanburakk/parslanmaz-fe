import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";

export const metadata = {
  title: "Hakkımızda - Pars Endüstriyel Mutfak",
  description: "Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve değerlerimiz.",
};

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