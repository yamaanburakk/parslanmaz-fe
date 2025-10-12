const AboutContent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#131C3C] mb-6">
                  Endüstriyel Mutfakta
                  <span className="block bg-gradient-to-r from-[#66B2FF] to-[#FF6B35] bg-clip-text text-transparent">Uzmanlık ve İnovasyon</span>
                </h2>
                
                <div className="space-y-6 text-lg text-[#131C3C] leading-relaxed">
                  <p>
                    Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; restoran, otel, kafe, fırın, 
                    hastane ve catering sektörlerine <span className="font-bold text-[#66B2FF]">yüksek kaliteli çözümler</span> sunar.
                  </p>
                  
                  <p>
                    Endüstriyel mutfak sistemlerinden teşhir dolaplarına, pasta – kumpir – waffle dolaplarından 
                    özel üretim çelik tezgahlara kadar <span className="font-bold text-[#66B2FF]">geniş bir ürün yelpazemizle</span> hizmet veriyoruz.
                  </p>
                  
                  <p>
                    Estetik tasarım, uzun ömürlü malzeme ve fonksiyonelliği bir araya getirerek; iş ortaklarımıza 
                    <span className="font-bold text-[#66B2FF]"> modern, hijyenik ve dayanıklı</span> ürünler sunmayı ilke edindik.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#66B2FF]/10 to-[#FF6B35]/10 p-8 rounded-2xl border-l-4 border-[#66B2FF] shadow-lg">
                <p className="text-lg text-[#131C3C] italic font-medium">
                  &quot;Yerli üretim gücümüz ve sektörel deneyimimizle, Türkiye&apos;nin dört bir yanında ve 
                  uluslararası projelere değer katıyor, markanızı bir adım öne taşıyoruz.&quot;
                </p>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#66B2FF]/20 to-[#66B2FF]/10 p-8 rounded-2xl text-center border border-[#66B2FF]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">🏭</div>
                    <h3 className="font-bold text-[#131C3C] mb-2">Yerli Üretim</h3>
                    <p className="text-sm text-[#131C3C] font-medium">%100 Türk malı</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 p-8 rounded-2xl text-center border border-[#FF6B35]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="font-bold text-[#131C3C] mb-2">Uluslararası</h3>
                    <p className="text-sm text-[#131C3C] font-medium">Dünya çapında hizmet</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 p-8 rounded-2xl text-center border border-[#FFD700]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-bold text-[#131C3C] mb-2">Hızlı Teslimat</h3>
                    <p className="text-sm text-[#131C3C] font-medium">Zamanında teslim</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#66B2FF]/20 to-[#FF6B35]/10 p-8 rounded-2xl text-center border border-[#66B2FF]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="font-bold text-[#131C3C] mb-2">Özel Tasarım</h3>
                    <p className="text-sm text-[#131C3C] font-medium">İhtiyaca özel çözümler</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;