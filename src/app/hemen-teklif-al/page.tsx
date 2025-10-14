import dynamic from 'next/dynamic';
import QuoteHero from '@/components/QuoteHero';

// Lazy load form for better initial load
const QuoteForm = dynamic(() => import('@/components/QuoteForm'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-2xl" />,
});

export const metadata = {
  title: "Hemen Teklif Al - Pars Endüstriyel Mutfak",
  description: "Endüstriyel mutfak ekipmanlarınız için hemen teklif alın. Hızlı ve güvenilir hizmet.",
};

export const revalidate = 3600;

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] pt-20">
      {/* Quote Hero Section */}
      <QuoteHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1">
          {/* Quote Form - Takes full width */}
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}