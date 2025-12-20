import { memo, useMemo } from "react";

const StatsSection = memo(() => {
  const stats = useMemo(() => [
    {
      number: "100+",
      label: "Mutlu Müşteri",
      description: "Yerel ve bölgesel"
    },
    {
      number: "30+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen"
    },
    {
      number: "10+",
      label: "Yıllık Tecrübe",
      description: "Dinamik ve yenilikçi"
    },
    {
      number: "7+",
      label: "Ülkeye İhracat",
      description: "Büyüyen ağımız"
    }
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#3A4E73] via-[#42587E] to-[#4A6289] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rakamlarla Pars Endüstriyel Mutfak
            </h2>
            <p className="text-base sm:text-lg text-[#F8FAFC] max-w-2xl mx-auto font-medium">
              Başarılarımızı ve büyümemizi rakamlarla keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-colors duration-200 border border-[#66B2FF]/20">
                  <div className="text-4xl md:text-5xl font-bold text-[#66B2FF] mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-[#F1F5F9] text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            <div className="group relative text-center">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#66B2FF]/20 hover:border-[#66B2FF]/60 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/0 via-[#FFD700]/0 to-[#66B2FF]/0 group-hover:from-[#66B2FF]/10 group-hover:via-[#FFD700]/5 group-hover:to-[#66B2FF]/10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 group-hover:from-[#FFD700]/30 group-hover:to-[#FFD700]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="text-base font-bold mb-2 group-hover:text-[#FFD700] transition-colors duration-300">Kalite Sertifikaları</h4>
                  <p className="text-[#F1F5F9] text-xs sm:text-sm leading-relaxed">
                    Uluslararası kalite standartlarında üretim
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            
            <div className="group relative text-center">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#66B2FF]/20 hover:border-[#66B2FF]/60 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/0 via-[#FFD700]/0 to-[#66B2FF]/0 group-hover:from-[#66B2FF]/10 group-hover:via-[#FFD700]/5 group-hover:to-[#66B2FF]/10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#66B2FF]/20 to-[#66B2FF]/10 border border-[#66B2FF]/30 group-hover:from-[#66B2FF]/30 group-hover:to-[#66B2FF]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#66B2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="text-base font-bold mb-2 group-hover:text-[#66B2FF] transition-colors duration-300">Teknik Destek</h4>
                  <p className="text-[#F1F5F9] text-xs sm:text-sm leading-relaxed">
                    7/24 profesyonel teknik destek hizmeti
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            
            <div className="group relative text-center">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#66B2FF]/20 hover:border-[#66B2FF]/60 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/0 via-[#FFD700]/0 to-[#66B2FF]/0 group-hover:from-[#66B2FF]/10 group-hover:via-[#FFD700]/5 group-hover:to-[#66B2FF]/10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/10 border border-[#10B981]/30 group-hover:from-[#10B981]/30 group-hover:to-[#10B981]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="text-base font-bold mb-2 group-hover:text-[#10B981] transition-colors duration-300">Hızlı Teslimat</h4>
                  <p className="text-[#F1F5F9] text-xs sm:text-sm leading-relaxed">
                    Dünya çapında güvenli ve hızlı teslimat
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B2FF]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;