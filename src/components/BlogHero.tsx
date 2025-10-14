const BlogHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#1E293B]/90 to-[#334155]/90"></div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 md:space-y-12">
              <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-[#60A5FA]/30">
                <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase">Blog & Rehber</span>
                <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                    Endüstriyel Mutfak
                  </span>
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                    Blog & Rehber
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed mb-8 md:mb-12 font-medium max-w-2xl">
                  Mutfak ekipmanları, bakım ipuçları, sektör trendleri ve 
                  <span className="font-bold text-[#60A5FA]"> uzman tavsiyeleri</span>
                </p>
              </div>
            </div>
            
            {/* Stats Cards - Professional */}
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#1E3A8A]/50 transition-all duration-700 hover:scale-105 border border-[#1E40AF]/20">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#2563EB]/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 md:mb-3">12+</div>
                  <div className="text-white/90 text-sm md:text-base lg:text-lg font-medium">Uzman Makale</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#374151] via-[#4B5563] to-[#6B7280] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#374151]/50 transition-all duration-700 hover:scale-105 border border-[#4B5563]/20">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9CA3AF]/20 via-transparent to-[#6B7280]/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#9CA3AF]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 md:mb-3">1+</div>
                  <div className="text-white/90 text-sm md:text-base lg:text-lg font-medium">Kategori</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9CA3AF] via-[#6B7280] to-[#4B5563] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#0F172A]/50 transition-all duration-700 hover:scale-105 border border-[#1E293B]/20">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#64748B]/20 via-transparent to-[#334155]/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#64748B]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 md:mb-3">25+</div>
                  <div className="text-white/90 text-sm md:text-base lg:text-lg font-medium">Okuyucu</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#64748B] via-[#334155] to-[#1E293B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
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

export default BlogHero;