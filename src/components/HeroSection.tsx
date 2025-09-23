const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-accent-300 text-sm font-medium">Endüstriyel Mutfak Çözümleri</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Paslanmaz Çelik Ekipman Üretiminde
            <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              Uzmanız
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-primary-100 leading-relaxed max-w-3xl mx-auto">
            Restoran, otel, kafe, fırın ve catering işletmeleri için 
            <span className="text-accent-300 font-semibold"> pasta dolabı</span>, 
            <span className="text-accent-300 font-semibold"> kumpir-waffle dolabı</span>, 
            <span className="text-accent-300 font-semibold"> teşhir dolapları</span> ve 
            <span className="text-accent-300 font-semibold"> özel üretim çelik tezgahlar</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/hemen-teklif-al" 
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Hemen Teklif Al
            </a>
            <button className="border-2 border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm inline-flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ürünlerimizi İncele
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">500+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">1000+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">15+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Ülkeye İhracat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;