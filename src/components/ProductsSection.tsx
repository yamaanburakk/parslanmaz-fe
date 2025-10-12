const ProductsSection = () => {
  const productCategories = [
    {
      title: "Endüstriyel Mutfak Ekipmanları",
      description: "Profesyonel mutfaklar için özel tasarım ekipmanlar",
      icon: "🍳"
    },
    {
      title: "Açık Büfe Ekipmanları & Servis Üniteleri",
      description: "Büfe ve servis alanları için modern çözümler",
      icon: "🍽️"
    },
    {
      title: "Ekmek & Unlu Mamuller Dolapları",
      description: "Fırın ve pastaneler için özel dolaplar",
      icon: "🥖"
    },
    {
      title: "Pasta & Şarküteri Dolapları",
      description: "Pasta ve şarküteri ürünleri için vitrin dolapları",
      icon: "🎂"
    },
    {
      title: "Waffle & Kumpir Dolapları",
      description: "Waffle ve kumpir satış noktaları için özel dolaplar",
      icon: "🧇"
    },
    {
      title: "Çikolata & Lokum Dolapları",
      description: "Çikolata ve lokum satışı için vitrin dolapları",
      icon: "🍫"
    },
    {
      title: "Börek & Baklava Dolapları",
      description: "Börek ve baklava satışı için özel dolaplar",
      icon: "🥐"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-[#223052] to-[#2A3A5D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 rounded-full px-6 py-3 mb-8 border border-[#66B2FF]/50 shadow-xl">
            <span className="text-[#66B2FF] text-sm font-bold tracking-wide">Ürün Kategorilerimiz</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Endüstriyel Mutfak
            <span className="block bg-gradient-to-r from-[#66B2FF] to-[#FFD700] bg-clip-text text-transparent">Çözümlerimiz</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#F8FAFC] max-w-2xl mx-auto leading-relaxed font-medium">
            Endüstriyel mutfak ihtiyaçlarınız için 
            <span className="text-[#66B2FF] font-bold"> geniş ürün yelpazemiz</span> ve
            <span className="text-[#66B2FF] font-bold"> özel tasarım çözümlerimiz</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#324468] to-[#3A4E73] p-6 sm:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-[#66B2FF]/30 hover:border-[#66B2FF] shadow-lg"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#66B2FF] transition-colors">
                {product.title}
              </h3>
              <p className="text-sm sm:text-base text-[#F1F5F9] mb-4 sm:mb-6 leading-relaxed">
                {product.description}
              </p>
              <button className="text-sm sm:text-base text-[#66B2FF] font-semibold hover:text-[#4E9EFF] transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Detayları Gör 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="mt-3 sm:mt-4 w-0 h-0.5 bg-gradient-to-r from-[#66B2FF] to-[#FFD700] rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#66B2FF]/25 border border-[#66B2FF]/30 inline-flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Tüm Ürünleri İncele
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;