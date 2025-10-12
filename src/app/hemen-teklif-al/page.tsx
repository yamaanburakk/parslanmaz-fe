import QuoteHero from '@/components/QuoteHero';
import QuoteForm from '@/components/QuoteForm';
import ContactInfo from '@/components/ContactInfo';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] pt-20">
      {/* Quote Hero Section */}
      <QuoteHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
          
          {/* Contact Info - Takes 1 column */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}