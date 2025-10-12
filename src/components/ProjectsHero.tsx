import Image from "next/image";

const ProjectsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Endüstriyel Mutfak Projeleri"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#131C3C]/80 via-[#1A2647]/80 to-[#223052]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-[#66B2FF]/40 shadow-xl">
                <span className="text-[#66B2FF] text-xs sm:text-sm font-bold tracking-wide">Projelerimiz</span>
              </div>
              
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Başarılı
                  <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">Projelerimiz</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#F8FAFC] leading-relaxed mb-6 sm:mb-8">
                  Türkiye&apos;nin dört bir yanında ve uluslararası projelerde imza attığımız 
                  <span className="text-[#66B2FF] font-bold"> başarılı çalışmalarımızı</span> keşfedin.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Projeleri İncele
                </button>
                <button className="border-2 border-[#66B2FF]/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#66B2FF]/20 hover:border-[#66B2FF] transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#66B2FF]/25">
                  Referans Al
                </button>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-[#66B2FF]/20 hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#66B2FF] mb-2">500+</div>
                <div className="text-[#F1F5F9] text-xs sm:text-sm">Tamamlanan Proje</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-[#FF6B35]/20 hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-2">50+</div>
                <div className="text-[#F1F5F9] text-xs sm:text-sm">Ülkeye İhracat</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-[#FFD700]/20 hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">15+</div>
                <div className="text-[#F1F5F9] text-xs sm:text-sm">Yıllık Tecrübe</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-[#66B2FF]/20 hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#66B2FF] mb-2">%100</div>
                <div className="text-[#F1F5F9] text-xs sm:text-sm">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#66B2FF]/10 to-[#FF6B35]/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#66B2FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-2xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B2FF]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default ProjectsHero;