import { memo, useMemo } from "react";

const StatsSection = memo(() => {
  const stats = useMemo(() => [
    {
      number: "25+",
      label: "Mutlu Müşteri",
      description: "Yerel ve bölgesel"
    },
    {
      number: "12+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen"
    },
    {
      number: "5+",
      label: "Yıllık Tecrübe",
      description: "Dinamik ve yenilikçi"
    },
    {
      number: "3+",
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#66B2FF]/20">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold mb-2">Kalite Sertifikaları</h4>
                <p className="text-[#F1F5F9] text-sm">
                  Uluslararası kalite standartlarında üretim
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#66B2FF]/20">
                <div className="text-3xl mb-4">🔧</div>
                <h4 className="text-lg font-semibold mb-2">Teknik Destek</h4>
                <p className="text-[#F1F5F9] text-sm">
                  7/24 profesyonel teknik destek hizmeti
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#66B2FF]/20">
                <div className="text-3xl mb-4">🚚</div>
                <h4 className="text-lg font-semibold mb-2">Hızlı Teslimat</h4>
                <p className="text-[#F1F5F9] text-sm">
                  Dünya çapında güvenli ve hızlı teslimat
                </p>
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