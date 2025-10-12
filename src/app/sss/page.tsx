import FAQHero from '@/components/FAQHero';
import FAQSearch from '@/components/FAQSearch';
import FAQCategories from '@/components/FAQCategories';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSidebar from '@/components/FAQSidebar';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* FAQ Hero Section */}
      <FAQHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Filter Section */}
            <div className="mb-8">
              <FAQSearch />
              <FAQCategories />
            </div>
            
            {/* FAQ Accordion */}
            <FAQAccordion />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FAQSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}