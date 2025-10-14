const AboutContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Endüstriyel Mutfakta
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">Uzmanlık ve İnovasyon</span>
                </h2>
                
                <div className="space-y-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  <p>
                    Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; restoran, otel, kafe, fırın, 
                    hastane ve catering sektörlerine <span className="font-bold text-[#60A5FA]">yüksek kaliteli çözümler</span> sunar.
                  </p>
                  
                  <p>
                    Endüstriyel mutfak sistemlerinden teşhir dolaplarına, pasta – kumpir – waffle dolaplarından 
                    özel üretim çelik tezgahlara kadar <span className="font-bold text-[#60A5FA]">geniş bir ürün yelpazemizle</span> hizmet veriyoruz.
                  </p>
                  
                  <p>
                    Estetik tasarım, uzun ömürlü malzeme ve fonksiyonelliği bir araya getirerek; iş ortaklarımıza 
                    <span className="font-bold text-[#60A5FA]"> modern, hijyenik ve dayanıklı</span> ürünler sunmayı ilke edindik.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1E3A8A]/20 to-[#374151]/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-l-4 border-[#60A5FA] shadow-xl border border-[#1E3A8A]/30">
                <p className="text-base md:text-lg lg:text-xl text-white/90 italic font-medium leading-relaxed">
                  &quot;Yerli üretim gücümüz ve sektörel deneyimimizle, Türkiye&apos;nin dört bir yanında ve 
                  uluslararası projelere değer katıyor, markanızı bir adım öne taşıyoruz.&quot;
                </p>
              </div>
            </div>
            
            {/* Professional Features Section */}
            <div className="relative">
              {/* Header Section */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-[#60A5FA]/30">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase">Kurumsal Mükemmellik</span>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-2 md:ml-3 animate-pulse"></div>
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                    Sektörde
                  </span>
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                    Liderlik
                  </span>
                </h3>
              </div>

              {/* Features Grid */}
              <div className="space-y-8 md:space-y-12">
                
                {/* Yerli Üretim - Hero Card */}
                <div className="relative">
                  <div className="group relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl hover:shadow-[#0F172A]/50 transition-all duration-700 hover:scale-[1.01] border border-[#334155]/20">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
                      <div className="absolute top-4 md:top-8 right-4 md:right-8 w-24 md:w-48 h-24 md:h-48 bg-[#3B82F6]/10 rounded-full blur-2xl md:blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-16 md:w-32 h-16 md:h-32 bg-[#8B5CF6]/10 rounded-full blur-xl md:blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30 shadow-xl md:shadow-2xl mx-auto mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 lg:mb-6 group-hover:text-[#3B82F6] transition-colors duration-500">
                        Yerli Üretim
                      </h3>
                      <p className="text-white/90 font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8">Türk Mühendisliği</p>
                      <p className="text-white/70 text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto px-4">
                        Uluslararası kalite standartlarında, tamamen yerli teknoloji ile üretim yapıyoruz.
                      </p>
                      
                      {/* Stats Grid - Responsive */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">12+</div>
                          <div className="text-white/70 text-sm md:text-base lg:text-lg">Proje</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">1+</div>
                          <div className="text-white/70 text-sm md:text-base lg:text-lg">Yıl</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">%100</div>
                          <div className="text-white/70 text-sm md:text-base lg:text-lg">Yerli</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 lg:h-3 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                </div>

                {/* Three Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  
                  {/* Uluslararası */}
                  <div className="group relative md:col-span-1 lg:col-span-1">
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-[#1E3A8A]/50 transition-all duration-700 hover:scale-105 border border-[#1E40AF]/20 h-full">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E40AF]/20 via-transparent to-[#2563EB]/20"></div>
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 w-16 md:w-32 h-16 md:h-32 bg-[#1E40AF]/10 rounded-full blur-xl md:blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center border border-white/40 shadow-lg md:shadow-xl mx-auto mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 md:mb-3 lg:mb-4 group-hover:text-[#60A5FA] transition-colors duration-500">
                          Uluslararası
                        </h3>
                        <p className="text-white/90 font-bold text-sm md:text-base lg:text-xl mb-2 md:mb-3 lg:mb-4">Global Hizmet</p>
                        <p className="text-white/70 text-xs md:text-sm lg:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6">
                          Dünya çapında güvenilir partner olarak hizmet sunuyoruz.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                          <div className="text-lg md:text-xl lg:text-2xl font-black text-white">3+</div>
                            <div className="text-white/70 text-xs md:text-sm">Ülke</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-lg md:text-xl lg:text-2xl font-black text-white">25+</div>
                            <div className="text-white/70 text-xs md:text-sm">Müşteri</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </div>
                  </div>

                  {/* Hızlı Teslimat */}
                  <div className="group relative md:col-span-1 lg:col-span-1">
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#374151] via-[#4B5563] to-[#6B7280] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-[#374151]/50 transition-all duration-700 hover:scale-105 border border-[#4B5563]/20 h-full">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4B5563]/20 via-transparent to-[#6B7280]/20"></div>
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 w-16 md:w-32 h-16 md:h-32 bg-[#4B5563]/10 rounded-full blur-xl md:blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center border border-white/40 shadow-lg md:shadow-xl mx-auto mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 md:mb-3 lg:mb-4 group-hover:text-[#9CA3AF] transition-colors duration-500">
                          Hızlı Teslimat
                        </h3>
                        <p className="text-white/90 font-bold text-sm md:text-base lg:text-xl mb-2 md:mb-3 lg:mb-4">Express Hizmet</p>
                        <p className="text-white/70 text-xs md:text-sm lg:text-lg leading-relaxed mb-4 md:mb-6 lg:mb-8">
                          Express lojistik ağımızla en kısa sürede güvenle ulaştırıyoruz.
                        </p>
                        
                        {/* Large Stat */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 border border-white/20 mb-3 md:mb-4 lg:mb-6">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">24h</div>
                          <div className="text-white/70 text-xs md:text-sm lg:text-lg">İç Teslimat</div>
                        </div>
                        
                        {/* Small Stat */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                          <div className="text-lg md:text-xl lg:text-2xl font-black text-white">%99</div>
                          <div className="text-white/70 text-xs md:text-sm">Zamanında</div>
                  </div>
                </div>
                
                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#9CA3AF] via-[#6B7280] to-[#4B5563] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Özel Tasarım */}
                  <div className="group relative md:col-span-2 lg:col-span-1">
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-[#0F172A]/50 transition-all duration-700 hover:scale-105 border border-[#1E293B]/20 h-full">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E293B]/20 via-transparent to-[#334155]/20"></div>
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 w-16 md:w-32 h-16 md:h-32 bg-[#1E293B]/10 rounded-full blur-xl md:blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center border border-white/40 shadow-lg md:shadow-xl mx-auto mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 md:mb-3 lg:mb-4 group-hover:text-[#64748B] transition-colors duration-500">
                          Özel Tasarım
                        </h3>
                        <p className="text-white/90 font-bold text-sm md:text-base lg:text-xl mb-2 md:mb-3 lg:mb-4">Custom Çözümler</p>
                        <p className="text-white/70 text-xs md:text-sm lg:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6">
                          Her projeye özel tasarım yaklaşımı ile çözümler sunuyoruz.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-lg md:text-xl lg:text-2xl font-black text-white">100%</div>
                            <div className="text-white/70 text-xs md:text-sm">Özel</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-lg md:text-xl lg:text-2xl font-black text-white">∞</div>
                            <div className="text-white/70 text-xs md:text-sm">Yaratıcılık</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#64748B] via-[#334155] to-[#1E293B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Effects */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-r from-[#0F172A]/3 via-[#059669]/3 to-[#7C3AED]/3 rounded-full blur-2xl md:blur-3xl"></div>
              <div className="absolute -z-10 top-0 right-0 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-gradient-to-br from-[#3B82F6]/8 to-[#8B5CF6]/8 rounded-full blur-2xl md:blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-64 md:w-96 lg:w-[800px] h-64 md:h-96 lg:h-[800px] bg-gradient-to-tr from-[#10B981]/6 to-[#EF4444]/6 rounded-full blur-2xl md:blur-3xl"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#3B82F6]/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 md:top-40 right-16 md:right-32 w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-[#10B981]/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 md:bottom-32 left-20 md:left-40 w-2.5 md:w-3 lg:w-5 h-2.5 md:h-3 lg:h-5 bg-[#EF4444]/30 rounded-full animate-pulse delay-2000"></div>
              <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#8B5CF6]/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;