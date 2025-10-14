import { memo, useMemo } from "react";

const WhyChooseUsSection = memo(() => {
  const features = useMemo(() => [
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
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#324468] to-[#3A4E73]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-[#66B2FF]/50 shadow-xl">
            <span className="text-[#66B2FF] text-sm font-bold tracking-wide">Neden Bizi Seçmelisiniz?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Kalite, Güven ve
            <span className="block bg-gradient-to-r from-[#66B2FF] to-[#FFD700] bg-clip-text text-transparent">Tecrübe Bir Arada</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#F8FAFC] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Endüstriyel mutfak ekipmanları konusunda 
            <span className="text-[#66B2FF] font-bold"> uzman ekibimiz</span> ve
            <span className="text-[#66B2FF] font-bold"> kaliteli hizmet anlayışımız</span> ile fark yaratıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#42587E] to-[#4A6289] backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#66B2FF]/30 hover:border-[#66B2FF] group"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#66B2FF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#F1F5F9] leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 sm:mt-6 w-0 h-0.5 bg-gradient-to-r from-[#66B2FF] to-[#FFD700] rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#131C3C] to-[#1A2647] rounded-2xl p-6 sm:p-10 text-white shadow-2xl border border-[#66B2FF]/30">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#66B2FF] mb-2">Rakamlarla Başarımız</h3>
            <p className="text-sm sm:text-base text-[#F1F5F9]">1 yıllık tecrübemizle güven inşa ediyoruz</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Mutlu Müşteri</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">12+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Tamamlanan Proje</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">1+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Yıllık Tecrübe</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Ülkeye İhracat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';

export default WhyChooseUsSection;