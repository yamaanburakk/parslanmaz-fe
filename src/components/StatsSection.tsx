const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Mutlu Müşteri",
      description: "Türkiye ve dünya genelinde"
    },
    {
      number: "1000+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen"
    },
    {
      number: "15+",
      label: "Yıllık Tecrübe",
      description: "Sektörde uzmanlık"
    },
    {
      number: "50+",
      label: "Ülkeye İhracat",
      description: "Global hizmet ağı"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rakamlarla Pars Endüstriyel Mutfak
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Başarılarımızı ve büyümemizi rakamlarla keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-4 group-hover:text-accent-300 transition-colors">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-primary-200 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold mb-2">Kalite Sertifikaları</h4>
                <p className="text-primary-200 text-sm">
                  Uluslararası kalite standartlarında üretim
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-4">🔧</div>
                <h4 className="text-lg font-semibold mb-2">Teknik Destek</h4>
                <p className="text-primary-200 text-sm">
                  7/24 profesyonel teknik destek hizmeti
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-4">🚚</div>
                <h4 className="text-lg font-semibold mb-2">Hızlı Teslimat</h4>
                <p className="text-primary-200 text-sm">
                  Dünya çapında güvenli ve hızlı teslimat
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                Siz de Başarı Hikayemizin Bir Parçası Olun
              </h3>
              <p className="text-primary-100 mb-6">
                Uzman ekibimizle görüşün ve projenizi hayata geçirin.
              </p>
              <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-400 transition-colors">
                Hemen İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-300/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default StatsSection;