import QuoteHero from '@/components/QuoteHero';
import QuoteForm from '@/components/QuoteForm';

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