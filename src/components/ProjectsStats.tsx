import { memo, useMemo } from "react";

const ProjectsStats = memo(() => {
  const stats = useMemo(() => [
    {
      number: "2,500+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen projeler",
      color: "from-[#60A5FA] to-[#3B82F6]"
    },
    {
      number: "85+",
      label: "Ülkeye İhracat",
      description: "Dünya çapında hizmet verdiğimiz ülkeler",
      color: "from-[#9CA3AF] to-[#6B7280]"
    },
    {
      number: "25+",
      label: "Yıllık Tecrübe",
      description: "Sektörde uzmanlık süremiz",
      color: "from-[#64748B] to-[#374151]"
    },
    {
      number: "98.7%",
      label: "Müşteri Memnuniyeti",
      description: "Memnun müşteri oranımız",
      color: "from-[#60A5FA] to-[#3B82F6]"
    }
  ], []);

  const sectors = useMemo(() => [
    { name: "Otel & Resort", count: 720, percentage: 28.8 },
    { name: "Restoran", count: 850, percentage: 34.0 },
    { name: "Kafe & Bar", count: 420, percentage: 16.8 },
    { name: "Hastane & Sağlık", count: 245, percentage: 9.8 },
    { name: "Fırın & Pastane", count: 185, percentage: 7.4 },
    { name: "Catering & Toplu Yemek", count: 80, percentage: 3.2 }
  ], []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] text-[#0F172A] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/5 via-transparent to-[#9CA3AF]/5"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#60A5FA]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#9CA3AF]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-[#60A5FA]/30 mb-6 md:mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#0F172A] font-semibold text-sm md:text-base tracking-wider uppercase">İstatistiklerimiz</span>
              <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] bg-clip-text text-transparent">
                Rakamlarla
              </span>
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                Başarımız
              </span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#0F172A]/90 leading-relaxed max-w-4xl mx-auto font-medium">
              Yıllar içinde elde ettiğimiz başarılar ve 
              <span className="font-bold text-[#60A5FA]"> sektördeki konumumuz</span>
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20 lg:mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#60A5FA]/20 transition-all duration-700 hover:scale-105 border border-[#E2E8F0]"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stat.color} opacity-20`}></div>
                  <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000`}></div>
                </div>

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 mx-auto mb-6 md:mb-8 bg-gradient-to-br ${stat.color} rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Number */}
                  <div className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 md:mb-4`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-3 md:mb-4">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-[#0F172A]/80 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>
          
          {/* Sectors Chart */}
          <div className="bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl shadow-2xl border border-[#E2E8F0]">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0F172A] mb-8 md:mb-12 lg:mb-16 text-center">
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                Sektör Dağılımımız
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Chart */}
              <div className="space-y-6 md:space-y-8">
                {sectors.map((sector, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-[#0F172A]">
                        {sector.name}
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-black text-[#60A5FA]">
                        {sector.count}
                      </div>
                    </div>
                    <div className="relative bg-[#E2E8F0] rounded-full h-4 md:h-6 lg:h-8 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Info Cards */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-br from-[#60A5FA]/10 via-[#9CA3AF]/10 to-[#64748B]/10 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#60A5FA]/20 shadow-lg">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-6 md:mb-8">
                    Proje Süreci
                  </h4>
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">İhtiyaç Analizi</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#9CA3AF] to-[#64748B] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">Tasarım & Planlama</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#64748B] to-[#60A5FA] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">Üretim & Kalite Kontrol</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">Kurulum & Teslimat</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#9CA3AF]/10 via-[#64748B]/10 to-[#60A5FA]/10 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#9CA3AF]/20 shadow-lg">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-6 md:mb-8">
                    Kalite Garantisi
                  </h4>
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#9CA3AF] to-[#6B7280] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">5 Yıl Garanti</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#6B7280] to-[#374151] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">7/24 Teknik Destek</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-[#374151] to-[#1E293B] rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 font-medium">ISO 9001 Sertifikası</span>
                    </div>
                  </div>
                </div>
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
});

ProjectsStats.displayName = 'ProjectsStats';

export default ProjectsStats;