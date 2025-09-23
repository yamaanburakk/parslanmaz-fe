const ProjectsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-primary-100 mb-8 leading-relaxed">
            Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin. 
            Başarılı projelerimizden ilham alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/hemen-teklif-al" className="bg-accent-500 text-primary-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105 inline-block text-center">
              Ücretsiz Teklif Al
            </a>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Referans Görüşmesi
            </button>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Proje Danışmanlığı
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-primary-100 text-sm sm:text-base">+90 541 228 83 66</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">E-posta</h3>
              <p className="text-primary-100 text-sm sm:text-base">info@parslanmaz.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Adres</h3>
              <p className="text-primary-100 text-xs sm:text-sm">Zeytinburnu / İstanbul</p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20">
            <blockquote className="text-base sm:text-lg md:text-xl italic text-primary-100 mb-4">
              &quot;Pars Endüstriyel Mutfak ile çalışmak harika bir deneyimdi. 
              Profesyonel yaklaşımları ve kaliteli ürünleri sayesinde 
              projemiz zamanında ve mükemmel şekilde tamamlandı.&quot;
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-sm sm:text-base">A</span>
              </div>
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">Ahmet Yılmaz</div>
                <div className="text-primary-200 text-xs sm:text-sm">Otel Müdürü</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-300/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default ProjectsCTA;