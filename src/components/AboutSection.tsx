const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-200">
            <span className="text-primary-600 text-sm font-medium">Hakkımızda</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-6 sm:mb-8">
            Paslanmaz Çelik Ekipman Üretiminde
            <span className="block text-accent-600">Uzmanız</span>
          </h2>
          
          <p className="text-base sm:text-lg text-primary-700 leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto">
            Paslanmaz çelik ekipman üretiminde uzmanız. Restoran, otel, kafe, fırın ve catering işletmeleri için 
            <span className="text-accent-600 font-semibold"> pasta dolabı</span>, 
            <span className="text-accent-600 font-semibold"> kumpir – waffle dolabı</span>, 
            <span className="text-accent-600 font-semibold"> teşhir dolapları</span>, 
            <span className="text-accent-600 font-semibold"> özel üretim çelik tezgahlar</span> ve dolaplar sunuyoruz. 
            Yüksek kalite, hijyen ve dayanıklılığı bir arada sunarak markaların çözüm ortağı oluyoruz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-accent-200 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-800 mb-3 sm:mb-4 group-hover:text-accent-700 transition-colors">Kalite Garantisi</h3>
              <p className="text-sm sm:text-base text-primary-600 leading-relaxed">
                Tüm ürünlerimizde yüksek kalite standartları ve uzun ömür garantisi sunuyoruz.
              </p>
              <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-14 sm:group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-accent-200 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-800 mb-3 sm:mb-4 group-hover:text-accent-700 transition-colors">Hızlı Teslimat</h3>
              <p className="text-sm sm:text-base text-primary-600 leading-relaxed">
                Siparişlerinizi en kısa sürede, güvenli şekilde dünyanın her yerine ulaştırıyoruz.
              </p>
              <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-14 sm:group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-accent-200 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-800 mb-3 sm:mb-4 group-hover:text-accent-700 transition-colors">7/24 Destek</h3>
              <p className="text-sm sm:text-base text-primary-600 leading-relaxed">
                İhtiyacınız olduğunda her an yanınızdayız, sorularınızı anında cevaplıyoruz.
              </p>
              <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-14 sm:group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;