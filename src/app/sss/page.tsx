import FAQHero from '@/components/FAQHero';
import FAQCategories from '@/components/FAQCategories';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSidebar from '@/components/FAQSidebar';

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* FAQ Hero Section */}
      <FAQHero />
      
      {/* Professional Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-3">
                {/* Professional Header */}
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-[#60A5FA]/30">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-2 md:mr-3 animate-pulse"></div>
                    <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase">Uzman Rehberi</span>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-2 md:ml-3 animate-pulse"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                      Kapsamlı
                    </span>
                    <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                      SSS Koleksiyonu
                    </span>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                    Endüstriyel mutfak ekipmanlarınız hakkında merak ettiğiniz her şey için 
                    <span className="text-[#60A5FA] font-bold"> detaylı cevaplar</span> ve 
                    <span className="text-[#60A5FA] font-bold"> uzman önerileri</span> burada.
                  </p>
                </div>
                
                {/* Filter Section */}
                <div className="mb-8">
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
        
        {/* Background Effects */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-r from-[#0F172A]/3 via-[#059669]/3 to-[#7C3AED]/3 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -z-10 top-0 right-0 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-gradient-to-br from-[#3B82F6]/8 to-[#8B5CF6]/8 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-64 md:w-96 lg:w-[800px] h-64 md:h-96 lg:h-[800px] bg-gradient-to-tr from-[#10B981]/6 to-[#EF4444]/6 rounded-full blur-2xl md:blur-3xl"></div>
      </section>
    </div>
  );
}