const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-primary-100 text-sm font-medium">Hakkımızda</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Mutfakta
            <span className="block text-accent-400">Profesyonelliğin Adı</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Paslanmaz çelik ekipman üretiminde uzmanlaşmış firmamız; 
            <span className="text-accent-300 font-semibold"> yenilikçi tasarım</span> ve 
            <span className="text-accent-300 font-semibold"> kaliteli üretim</span> anlayışıyla 
            sektörde fark yaratıyor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105">
              Projelerimizi İncele
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-300/20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default AboutHero;