const AboutContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Endüstriyel Mutfakta
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">Uzmanlık ve İnovasyon</span>
                </h2>
                
                <div className="space-y-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  <p>
                    Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; restoran, otel, kafe, fırın, 
                    hastane ve catering sektörlerine <span className="font-bold text-[#60A5FA]">yüksek kaliteli çözümler</span> sunar.
                  </p>
                  
                  <p>
                    Endüstriyel mutfak sistemlerinden teşhir dolaplarına, pasta – kumpir – waffle dolaplarından 
                    özel üretim çelik tezgahlara kadar <span className="font-bold text-[#60A5FA]">geniş bir ürün yelpazemizle</span> hizmet veriyoruz.
                  </p>
                  
                  <p>
                    Estetik tasarım, uzun ömürlü malzeme ve fonksiyonelliği bir araya getirerek; iş ortaklarımıza 
                    <span className="font-bold text-[#60A5FA]"> modern, hijyenik ve dayanıklı</span> ürünler sunmayı ilke edindik.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1E3A8A]/20 to-[#374151]/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-l-4 border-[#60A5FA] shadow-xl border border-[#1E3A8A]/30">
                <p className="text-base md:text-lg lg:text-xl text-white/90 italic font-medium leading-relaxed">
                  &quot;Yerli üretim gücümüz ve sektörel deneyimimizle, Türkiye&apos;nin dört bir yanında ve 
                  uluslararası projelere değer katıyor, markanızı bir adım öne taşıyoruz.&quot;
                </p>
              </div>
            </div>
            
            {/* Professional Features Section */}
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-r from-[#0F172A]/3 via-[#059669]/3 to-[#7C3AED]/3 rounded-full blur-2xl md:blur-3xl"></div>
              <div className="absolute -z-10 top-0 right-0 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-gradient-to-br from-[#3B82F6]/8 to-[#8B5CF6]/8 rounded-full blur-2xl md:blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-64 md:w-96 lg:w-[800px] h-64 md:h-96 lg:h-[800px] bg-gradient-to-tr from-[#10B981]/6 to-[#EF4444]/6 rounded-full blur-2xl md:blur-3xl"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#3B82F6]/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 md:top-40 right-16 md:right-32 w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-[#10B981]/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 md:bottom-32 left-20 md:left-40 w-2.5 md:w-3 lg:w-5 h-2.5 md:h-3 lg:h-5 bg-[#EF4444]/30 rounded-full animate-pulse delay-2000"></div>
              <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#8B5CF6]/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;