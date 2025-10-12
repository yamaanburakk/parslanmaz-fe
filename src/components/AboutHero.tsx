const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-[#66B2FF]/40 shadow-xl">
            <span className="text-[#66B2FF] text-sm font-bold tracking-wide">Hakkımızda</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Mutfakta
            <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">Profesyonelliğin Adı</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#F8FAFC] mb-8 leading-relaxed font-medium">
            Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; 
            <span className="text-[#66B2FF] font-bold"> yenilikçi tasarım</span> ve 
            <span className="text-[#66B2FF] font-bold"> kaliteli üretim</span> anlayışıyla 
            sektörde fark yaratıyor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#66B2FF]/25">
              Projelerimizi İncele
            </button>
            <button className="border-2 border-[#66B2FF]/60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#66B2FF]/20 hover:border-[#66B2FF] transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#66B2FF]/25">
              İletişime Geç
            </button>
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

export default AboutHero;