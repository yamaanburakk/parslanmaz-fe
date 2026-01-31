import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import ProjectsHero from '@/components/ProjectsHero';

// Lazy load below-the-fold content for better performance
const ProjectsGrid = dynamic(() => import('@/components/ProjectsGrid'), {
  loading: () => (
    <div className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#475569] rounded-2xl md:rounded-3xl overflow-hidden animate-pulse">
              <div className="h-64 md:h-72 lg:h-80 bg-[#334155]" />
              <div className="p-6 md:p-8 space-y-4">
                <div className="h-6 bg-[#334155] rounded w-3/4" />
                <div className="h-4 bg-[#334155] rounded w-1/2" />
                <div className="h-4 bg-[#334155] rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

const ProjectsStats = dynamic(() => import('@/components/ProjectsStats'), {
  loading: () => <div className="h-64 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] animate-pulse" />,
  ssr: true,
});

const ProjectsCTA = dynamic(() => import('@/components/ProjectsCTA'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

export const metadata: Metadata = {
  title: "Projeler - Pars Endüstriyel Mutfak | Başarılı Projelerimiz",
  description: "Türkiye'nin dört bir yanında ve uluslararası projelerde imza attığımız başarılı çalışmalarımızı keşfedin. Otel, restoran, hastane, kafe ve catering projelerimiz.",
  keywords: [
    "endüstriyel mutfak projeleri",
    "paslanmaz çelik mutfak projeleri",
    "otel mutfak projeleri",
    "restoran mutfak projeleri",
    "hastane mutfak projeleri",
    "catering mutfak projeleri",
    "anahtar teslim mutfak projeleri",
    "mutfak kurulum projeleri",
  ],
  openGraph: {
    title: "Projeler - Pars Endüstriyel Mutfak",
    description: "Başarılı endüstriyel mutfak projelerimizi keşfedin",
    type: "website",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default function ProjelerPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGrid />
      <ProjectsCTA />
    </div>
  );
}