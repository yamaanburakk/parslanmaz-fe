const AboutContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                  Endüstriyel Mutfakta
                  <span className="block text-gray-900">Uzmanlık ve İnovasyon</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; restoran, otel, kafe, fırın, 
                    hastane ve catering sektörlerine <span className="font-semibold text-primary-600">yüksek kaliteli çözümler</span> sunar.
                  </p>
                  
                  <p>
                    Endüstriyel mutfak sistemlerinden teşhir dolaplarına, pasta – kumpir – waffle dolaplarından 
                    özel üretim çelik tezgahlara kadar <span className="font-semibold text-primary-600">geniş bir ürün yelpazemizle</span> hizmet veriyoruz.
                  </p>
                  
                  <p>
                    Estetik tasarım, uzun ömürlü malzeme ve fonksiyonelliği bir araya getirerek; iş ortaklarımıza 
                    <span className="font-semibold text-primary-600"> modern, hijyenik ve dayanıklı</span> ürünler sunmayı ilke edindik.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border-l-4 border-accent-400">
                <p className="text-lg text-gray-800 italic">
                  &quot;Yerli üretim gücümüz ve sektörel deneyimimizle, Türkiye&apos;nin dört bir yanında ve 
                  uluslararası projelere değer katıyor, markanızı bir adım öne taşıyoruz.&quot;
                </p>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 rounded-2xl text-center">
                    <div className="text-4xl mb-4">🏭</div>
                    <h3 className="font-bold text-primary-700 mb-2">Yerli Üretim</h3>
                    <p className="text-sm text-primary-600">%100 Türk malı</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent-100 to-accent-200 p-8 rounded-2xl text-center">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="font-bold text-accent-700 mb-2">Uluslararası</h3>
                    <p className="text-sm text-accent-600">Dünya çapında hizmet</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-primary-200 to-primary-300 p-8 rounded-2xl text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-bold text-primary-800 mb-2">Hızlı Teslimat</h3>
                    <p className="text-sm text-primary-700">Zamanında teslim</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent-200 to-accent-300 p-8 rounded-2xl text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="font-bold text-accent-800 mb-2">Özel Tasarım</h3>
                    <p className="text-sm text-accent-700">İhtiyaca özel çözümler</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;