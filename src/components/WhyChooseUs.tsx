const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Güvenilir Partner",
      description: "Sadece bir üretici değil, aynı zamanda düşünen, yenilik üreten, markanızı anlayan bir partneriz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Kapsamlı Hizmet",
      description: "Projelendirmeden üretime, kurulumdan satış sonrası desteğe kadar her aşamada yanınızdayız."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "İnovatif Çözümler",
      description: "Sektördeki yenilikleri takip ederek, en güncel teknolojilerle çözümler üretiyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Özel Tasarım",
      description: "Her projeye özel tasarım yaklaşımı ile ihtiyaçlarınıza en uygun çözümleri sunuyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Hızlı Üretim",
      description: "Modern üretim tesislerimizle kısa sürede, kaliteli ürünler üretiyoruz."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 3.055V5a2 2 0 002 2h1a2 2 0 002 2 2 2 0 002 2v2.945M21 12.945V11a2 2 0 00-2-2h-1a2 2 0 00-2-2 2 2 0 00-2-2H3.055M12 3.055A9.004 9.004 0 0020.945 12M12 20.945A9.004 9.004 0 003.055 12" />
        </svg>
      ),
      title: "Global Hizmet",
      description: "Türkiye'nin dört bir yanında ve uluslararası projelerde hizmet veriyoruz."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-[#66B2FF]/50 shadow-xl">
              <span className="text-[#66B2FF] text-sm font-bold tracking-wide">Neden Biz?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Güvenilir Partneriniz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Çünkü sadece bir üretici değil, aynı zamanda düşünen, yenilik üreten, 
              markanızı anlayan bir partneriz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#66B2FF]/60 hover:-translate-y-1 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/0 via-[#66B2FF]/0 to-[#FFD700]/0 group-hover:from-[#66B2FF]/10 group-hover:via-[#66B2FF]/5 group-hover:to-[#FFD700]/10 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#66B2FF]/20 to-[#66B2FF]/10 border border-[#66B2FF]/30 group-hover:from-[#66B2FF]/30 group-hover:to-[#66B2FF]/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-[#66B2FF] group-hover:text-[#FFD700] transition-colors duration-300">
                      {reason.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#66B2FF] transition-colors duration-300 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {reason.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#66B2FF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;