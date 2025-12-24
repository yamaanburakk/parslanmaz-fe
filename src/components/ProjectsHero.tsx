import Image from "next/image";

const ProjectsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/paslanmaz-celik-endustriyel-mutfak.jpeg"
          alt="Endüstriyel Mutfak Projeleri"
          fill
          className="object-cover opacity-15"
          priority
          quality={100}
          sizes="100vw"
        />
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
          <div className="text-center">
            {/* Content */}
            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-[#60A5FA]/30 mb-8 md:mb-12">
                <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase">Başarılı Projelerimiz</span>
                <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                    Endüstriyel Mutfak
                  </span>
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                    Çözümlerimiz
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 leading-relaxed mb-8 md:mb-12 font-medium max-w-4xl mx-auto">
                  Türkiye&apos;nin dört bir yanında ve uluslararası projelerde imza attığımız 
                  <span className="font-bold text-[#60A5FA]"> başarılı çalışmalarımızı</span> keşfedin. 
                  Farklı sektörlerde gerçekleştirdiğimiz projeler ve 
                  <span className="font-bold text-[#9CA3AF]"> müşteri memnuniyeti</span> odaklı yaklaşımımız.
                </p>
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

export default ProjectsHero;