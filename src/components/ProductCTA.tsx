interface ProductCTAProps {
  title: string;
  description: string;
}

const ProductCTA = ({ title, description }: ProductCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#F8FAFC] mb-8 leading-relaxed font-medium">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/hemen-teklif-al" className="bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 inline-block text-center shadow-lg hover:shadow-[#66B2FF]/25">
              Ücretsiz Teklif Al
            </a>
            <button className="border-2 border-[#66B2FF]/60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#66B2FF]/20 hover:border-[#66B2FF] transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#66B2FF]/25">
              WhatsApp&apos;tan Yaz
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#66B2FF]/20 to-[#66B2FF]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#66B2FF]/30 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#66B2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Telefon</h3>
              <p className="text-[#66B2FF] font-semibold">+90 541 228 83 66</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#FF6B35]/30 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">E-posta</h3>
              <p className="text-[#FF6B35] font-semibold">info@parslanmaz.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#FFD700]/30 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Adres</h3>
              <p className="text-[#FFD700] font-semibold text-sm">Zeytinburnu / İstanbul</p>
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B2FF]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default ProductCTA;