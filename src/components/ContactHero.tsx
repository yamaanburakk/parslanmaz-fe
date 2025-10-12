'use client';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            İletişime
            <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">Geçin</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#F8FAFC] mb-8 leading-relaxed">
            Endüstriyel mutfak ekipmanları hakkında sorularınız için bizimle iletişime geçin
          </p>
          
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#66B2FF] to-[#4E9EFF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#66B2FF] mb-2">+90 541 228 83 66</div>
              <div className="text-[#F1F5F9]">Telefon</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF5321] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#FF6B35] mb-2">info@parslanmaz.com</div>
              <div className="text-[#F1F5F9]">E-posta</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFB900] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#FFD700] mb-2">İstanbul</div>
              <div className="text-[#F1F5F9]">Merkez Ofis</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#66B2FF]/10 to-[#FF6B35]/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#66B2FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-2xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#66B2FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-[#66B2FF]/30 text-6xl animate-bounce">
        📞
      </div>
      <div className="absolute top-32 right-20 text-[#FF6B35]/30 text-4xl animate-pulse">
        📧
      </div>
      <div className="absolute bottom-20 left-20 text-[#FFD700]/30 text-5xl animate-bounce delay-1000">
        📍
      </div>
      <div className="absolute bottom-32 right-10 text-[#66B2FF]/30 text-3xl animate-pulse delay-500">
        💬
      </div>
    </section>
  );
};

export default ContactHero;