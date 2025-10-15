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
            <a href="https://wa.me/905412288366" target="_blank" rel="noopener noreferrer" className="border-2 border-[#66B2FF]/60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#66B2FF]/20 hover:border-[#66B2FF] transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#66B2FF]/25 inline-block text-center">
              WhatsApp&apos;tan Yaz
            </a>
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