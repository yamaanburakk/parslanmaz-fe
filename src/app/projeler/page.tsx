import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectsStats from "@/components/ProjectsStats";
import ProjectsCTA from "@/components/ProjectsCTA";

export const metadata = {
  title: "Projeler - Pars Endüstriyel Mutfak | Tamamlanan Projeler ve Referanslar",
  description: "Pars Endüstriyel Mutfak'ın tamamladığı başarılı projeler. Restoran, otel, kafe ve endüstriyel mutfak projeleri. Profesyonel çözümler ve referanslar.",
  keywords: "projeler, referanslar, endüstriyel mutfak projeleri, restoran projeleri, otel projeleri, kafe projeleri"
};

export default function ProjelerPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsStats />
      <ProjectsCTA />
    </div>
  );
}