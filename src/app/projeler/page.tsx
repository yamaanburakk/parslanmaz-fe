import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const ProjectsHero = dynamic(() => import("@/components/ProjectsHero"), {
  ssr: true,
});

const ProjectsGrid = dynamic(() => import("@/components/ProjectsGrid"), {
  ssr: true,
});

const ProjectsStats = dynamic(() => import("@/components/ProjectsStats"), {
  ssr: true,
});

const ProjectsCTA = dynamic(() => import("@/components/ProjectsCTA"), {
  ssr: true,
});

export const metadata = {
  title: "Projeler - Pars Endüstriyel Mutfak | Tamamlanan Projeler ve Referanslar",
  description: "Pars Endüstriyel Mutfak'ın tamamladığı başarılı projeler. Restoran, otel, kafe ve endüstriyel mutfak projeleri. Profesyonel çözümler ve referanslar.",
  keywords: "projeler, referanslar, endüstriyel mutfak projeleri, restoran projeleri, otel projeleri, kafe projeleri"
};

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