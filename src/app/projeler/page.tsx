import dynamic from 'next/dynamic';
import ProjectsHero from "@/components/ProjectsHero";

// Lazy load below-the-fold content
const ProjectsGrid = dynamic(() => import("@/components/ProjectsGrid"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 animate-pulse" />,
});

const ProjectsStats = dynamic(() => import("@/components/ProjectsStats"), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

const ProjectsCTA = dynamic(() => import("@/components/ProjectsCTA"), {
  loading: () => <div className="h-64 bg-gradient-to-br from-accent-500 to-orange-500 animate-pulse" />,
});

export const metadata = {
  title: "Projeler - Pars Endüstriyel Mutfak | Tamamlanan Projeler ve Referanslar",
  description: "Pars Endüstriyel Mutfak'ın tamamladığı başarılı projeler. Restoran, otel, kafe ve endüstriyel mutfak projeleri. Profesyonel çözümler ve referanslar.",
  keywords: "projeler, referanslar, endüstriyel mutfak projeleri, restoran projeleri, otel projeleri, kafe projeleri"
};

export const revalidate = 3600; // Revalidate every hour

export default function ProjelerPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsStats />
      <ProjectsCTA />
    </div>
  );
}