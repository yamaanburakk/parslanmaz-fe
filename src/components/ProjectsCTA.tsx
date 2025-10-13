const ProjectsCTA = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/10 via-transparent to-[#9CA3AF]/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#60A5FA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#9CA3AF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                Projenizi
              </span>
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                Birlikte Hayata Geçirelim
              </span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium mb-12 md:mb-16">
              Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin. 
              <span className="font-bold text-[#60A5FA]"> Başarılı projelerimizden ilham alın.</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center mb-16 md:mb-20">
              <a 
                href="/hemen-teklif-al" 
                className="group relative overflow-hidden bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg lg:text-xl hover:from-[#9CA3AF] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#60A5FA]/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Ücretsiz Teklif Al</span>
              </a>
              
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#1E293B] to-[#334155] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg lg:text-xl hover:from-[#334155] hover:to-[#1E293B] transition-all duration-300 transform hover:scale-105 shadow-2xl border border-[#334155]/50">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Referans Görüşmesi</span>
              </button>
              
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#374151] to-[#4B5563] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg lg:text-xl hover:from-[#4B5563] hover:to-[#374151] transition-all duration-300 transform hover:scale-105 shadow-2xl border border-[#4B5563]/50">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Proje Danışmanlığı</span>
              </button>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="max-w-5xl mx-auto">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 via-[#60A5FA]/5 to-white/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl border border-[#60A5FA]/20 shadow-2xl hover:shadow-[#60A5FA]/30 transition-all duration-700">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-lg md:text-xl lg:text-2xl xl:text-3xl italic text-white/95 mb-8 md:mb-12 leading-relaxed font-medium">
                  &quot;Pars Endüstriyel Mutfak ile çalışmak harika bir deneyimdi. 
                  <span className="text-[#60A5FA] font-bold"> Profesyonel yaklaşımları</span> ve 
                  <span className="text-[#9CA3AF] font-bold"> kaliteli ürünleri</span> sayesinde 
                  projemiz zamanında ve mükemmel şekilde tamamlandı.&quot;
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-gradient-to-br from-[#60A5FA] to-[#9CA3AF] rounded-full flex items-center justify-center mr-6 md:mr-8 shadow-lg">
                    <span className="text-white font-black text-lg md:text-xl lg:text-2xl">A</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg md:text-xl lg:text-2xl mb-1 md:mb-2">Ahmet Yılmaz</div>
                    <div className="text-white/80 text-sm md:text-base lg:text-lg font-medium">Otel Müdürü</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 md:top-40 right-16 md:right-32 w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-[#9CA3AF]/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 md:bottom-32 left-20 md:left-40 w-2.5 md:w-3 lg:w-5 h-2.5 md:h-3 lg:h-5 bg-[#64748B]/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default ProjectsCTA;