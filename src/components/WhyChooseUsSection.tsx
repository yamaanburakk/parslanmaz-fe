const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "🛠️",
      title: "Özel Üretim",
      description: "Pasta dolabından kumpir tezgahına, fırın ekipmanlarından endüstriyel mutfaklara kadar ihtiyaca özel çözümler sunuyoruz."
    },
    {
      icon: "🔩",
      title: "Paslanmaz Çelik Uzmanlığı",
      description: "Hijyenik, dayanıklı ve uzun ömürlü sistemler için yüksek kaliteli paslanmaz çelik kullanıyoruz."
    },
    {
      icon: "🏨",
      title: "Geniş Hizmet Ağı",
      description: "Restoranlar, oteller, kafeler, hastaneler, fırınlar ve catering firmaları için üretim ve kurulum hizmeti sağlıyoruz."
    },
    {
      icon: "🌍",
      title: "Tüm Dünya'ya Hızlı Teslimat",
      description: "Siparişlerinizi en kısa sürede, güvenli şekilde dünyanın her yerine ulaştırıyoruz."
    },
    {
      icon: "↩️",
      title: "14 Gün İçinde Koşulsuz İade Hakkı",
      description: "Memnun kalmadığınız ürünü 14 gün içinde kolayca iade edebilirsiniz."
    },
    {
      icon: "🎧",
      title: "7/24 Canlı Destek Sistemi",
      description: "İhtiyacınız olduğunda her an yanınızdayız, sorularınızı anında cevaplıyoruz."
    },
    {
      icon: "🇹🇷",
      title: "100 Yerli Üretim – Uluslararası Standartlarda Kalite",
      description: "Tüm ürünlerimiz yerli üretim olup uluslararası kalite standartlarında üretilmektedir."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-200">
            <span className="text-primary-600 text-sm font-medium">Neden Bizi Seçmelisiniz?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Kalite, Güven ve
            <span className="block text-accent-600">Tecrübe Bir Arada</span>
          </h2>
          
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Endüstriyel mutfak ekipmanları konusunda 
            <span className="text-accent-600 font-semibold"> uzman ekibimiz</span> ve 
            <span className="text-accent-600 font-semibold"> kaliteli hizmet anlayışımız</span> ile fark yaratıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-accent-200 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4 group-hover:text-accent-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-accent-300 mb-2">Rakamlarla Başarımız</h3>
            <p className="text-primary-200">15 yıllık tecrübemizle sektörde öncüyüz</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-primary-200 font-medium">Mutlu Müşteri</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-primary-200 font-medium">Tamamlanan Proje</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-primary-200 font-medium">Yıllık Tecrübe</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-primary-200 font-medium">Ülkeye İhracat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;