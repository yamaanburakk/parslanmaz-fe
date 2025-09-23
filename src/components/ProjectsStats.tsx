const ProjectsStats = () => {
  const stats = [
    {
      number: "500+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen projeler",
      icon: "🏆"
    },
    {
      number: "50+",
      label: "Ülkeye İhracat",
      description: "Dünya çapında hizmet verdiğimiz ülkeler",
      icon: "🌍"
    },
    {
      number: "15+",
      label: "Yıllık Tecrübe",
      description: "Sektörde uzmanlık süremiz",
      icon: "⏰"
    },
    {
      number: "%100",
      label: "Müşteri Memnuniyeti",
      description: "Memnun müşteri oranımız",
      icon: "😊"
    }
  ];

  const sectors = [
    { name: "Otel & Resort", count: 120, percentage: 24 },
    { name: "Restoran", count: 150, percentage: 30 },
    { name: "Kafe & Bar", count: 80, percentage: 16 },
    { name: "Hastane", count: 60, percentage: 12 },
    { name: "Fırın & Pastane", count: 70, percentage: 14 },
    { name: "Catering", count: 20, percentage: 4 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rakamlarla Başarımız
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Yıllar içinde elde ettiğimiz başarılar ve sektördeki konumumuz
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Sectors Chart */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Sektör Dağılımımız
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chart */}
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-20 sm:w-24 text-xs sm:text-sm font-medium text-gray-700 mr-2 sm:mr-4">
                      {sector.name}
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 mr-2 sm:mr-4">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 sm:h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 sm:w-16 text-xs sm:text-sm font-semibold text-gray-900 text-right">
                      {sector.count}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    Proje Süreci
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">İhtiyaç Analizi</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Tasarım & Planlama</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Üretim & Kalite Kontrol</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Kurulum & Teslimat</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-accent-50 to-primary-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    Kalite Garantisi
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">5 Yıl Garanti</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">7/24 Teknik Destek</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-600">ISO 9001 Sertifikası</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsStats;