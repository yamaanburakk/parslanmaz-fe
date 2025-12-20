import { memo, useMemo } from "react";

const WhyChooseUsSection = memo(() => {
  const features = useMemo(() => [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Özel Üretim",
      description: "Pasta dolabından kumpir tezgahına, fırın ekipmanlarından endüstriyel mutfaklara kadar ihtiyaca özel çözümler sunuyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Paslanmaz Çelik Uzmanlığı",
      description: "Hijyenik, dayanıklı ve uzun ömürlü sistemler için yüksek kaliteli paslanmaz çelik kullanıyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Geniş Hizmet Ağı",
      description: "Restoranlar, oteller, kafeler, hastaneler, fırınlar ve catering firmaları için üretim ve kurulum hizmeti sağlıyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 3.055V5a2 2 0 002 2h1a2 2 0 002 2 2 2 0 002 2v2.945M21 12.945V11a2 2 0 00-2-2h-1a2 2 0 00-2-2 2 2 0 00-2-2h-2.945M12 20.945V19a2 2 0 00-2-2h-1a2 2 0 00-2-2 2 2 0 00-2-2H3.055M12 3.055A9.004 9.004 0 0020.945 12M12 20.945A9.004 9.004 0 003.055 12" />
        </svg>
      ),
      title: "Tüm Dünya'ya Hızlı Teslimat",
      description: "Siparişlerinizi en kısa sürede, güvenli şekilde dünyanın her yerine ulaştırıyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "7/24 Canlı Destek Sistemi",
      description: "İhtiyacınız olduğunda her an yanınızdayız, sorularınızı anında cevaplıyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "100% Yerli Üretim",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#42587E]/90 to-[#4A6289]/90 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#66B2FF]/20 hover:border-[#66B2FF]/60 hover:-translate-y-1 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/0 via-[#66B2FF]/0 to-[#FFD700]/0 group-hover:from-[#66B2FF]/10 group-hover:via-[#66B2FF]/5 group-hover:to-[#FFD700]/10 transition-all duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#66B2FF]/20 to-[#66B2FF]/10 border border-[#66B2FF]/30 group-hover:from-[#66B2FF]/30 group-hover:to-[#66B2FF]/20 group-hover:scale-110 transition-all duration-300">
                  <div className="text-[#66B2FF] group-hover:text-[#FFD700] transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#66B2FF] transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#66B2FF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#131C3C] to-[#1A2647] rounded-2xl p-6 sm:p-10 text-white shadow-2xl border border-[#66B2FF]/30">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#66B2FF] mb-2">Rakamlarla Başarımız</h3>
            <p className="text-sm sm:text-base text-[#F1F5F9]">10+ yıllık tecrübemizle güven inşa ediyoruz</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Mutlu Müşteri</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Tamamlanan Proje</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-xs sm:text-sm text-[#F1F5F9] font-medium">Yıllık Tecrübe</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#66B2FF] group-hover:scale-110 transition-transform duration-300">7+</div>
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