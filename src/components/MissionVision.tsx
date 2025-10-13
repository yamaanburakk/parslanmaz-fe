const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 mb-6 md:mb-8 border border-[#60A5FA]/30">
              <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase">Kurumsal Değerlerimiz</span>
              <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                Misyonumuz &
              </span>
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                Vizyonumuz
              </span>
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Geleceği şekillendiren değerlerimiz ve hedeflerimiz ile sektörde öncü olma yolculuğumuz
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Mission */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#1E3A8A]/50 transition-all duration-700 hover:scale-[1.02] border border-[#1E40AF]/20 h-full">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#2563EB]/20"></div>
                  <div className="absolute top-4 right-4 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 mb-4 md:mb-0 border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-[#60A5FA] transition-colors duration-500">
                      Misyonumuz
                    </h3>
                  </div>
                  
                  <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                    Endüstriyel mutfak sektöründe <span className="font-bold text-[#60A5FA]">yenilikçilik, dayanıklılık ve tasarım odaklı</span> üretim anlayışıyla fark yaratan projelere imza atmak.
                  </p>
                  
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Sürekli yenilik ve gelişim odaklı yaklaşım</p>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Müşteri memnuniyetini ön planda tutma</p>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Kaliteli ve dayanıklı ürün üretimi</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
            
            {/* Vision */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#374151] via-[#4B5563] to-[#6B7280] p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#374151]/50 transition-all duration-700 hover:scale-[1.02] border border-[#4B5563]/20 h-full">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9CA3AF]/20 via-transparent to-[#6B7280]/20"></div>
                  <div className="absolute top-4 right-4 w-32 h-32 bg-[#9CA3AF]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 mb-4 md:mb-0 border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-[#9CA3AF] transition-colors duration-500">
                      Vizyonumuz
                    </h3>
                  </div>
                  
                  <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                    Sadece Türkiye&apos;de değil, <span className="font-bold text-[#9CA3AF]">uluslararası en çok tercih edilen</span> endüstriyel mutfak markası olmak.
                  </p>
                  
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#9CA3AF] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Global pazarda lider konum</p>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#9CA3AF] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Teknoloji ve inovasyonda öncülük</p>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-[#9CA3AF] rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/90 font-medium text-sm md:text-base lg:text-lg">Sürdürülebilir büyüme stratejisi</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#9CA3AF] via-[#6B7280] to-[#4B5563] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;