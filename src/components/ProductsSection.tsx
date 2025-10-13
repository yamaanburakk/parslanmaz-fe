const ProductsSection = () => {
  const productCategories = [
    {
      title: "Endüstriyel Mutfak Ekipmanları",
      description: "Profesyonel mutfaklar için özel tasarım ekipmanlar",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Açık Büfe Ekipmanları & Servis Üniteleri",
      description: "Büfe ve servis alanları için modern çözümler",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Ekmek & Unlu Mamuller Dolapları",
      description: "Fırın ve pastaneler için özel dolaplar",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Pasta & Şarküteri Dolapları",
      description: "Pasta ve şarküteri ürünleri için vitrin dolapları",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Waffle & Kumpir Dolapları",
      description: "Waffle ve kumpir satış noktaları için özel dolaplar",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Çikolata & Lokum Dolapları",
      description: "Çikolata ve lokum satışı için vitrin dolapları",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Börek & Baklava Dolapları",
      description: "Börek ve baklava satışı için özel dolaplar",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#66B2FF]/10 to-[#FFD700]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-full px-6 py-3 mb-8 sm:mb-12 border border-[#66B2FF]/30 shadow-2xl">
            <div className="w-2 h-2 bg-[#66B2FF] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#66B2FF] text-sm font-bold tracking-wider uppercase">Ürün Kategorilerimiz</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
            <span className="block">Endüstriyel Mutfak</span>
            <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] bg-clip-text text-transparent animate-gradient">
              Çözümlerimiz
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#CBD5E1] max-w-4xl mx-auto leading-relaxed font-medium">
            Endüstriyel mutfak ihtiyaçlarınız için 
            <span className="text-[#66B2FF] font-bold"> geniş ürün yelpazemiz</span> ve
            <span className="text-[#FFD700] font-bold"> özel tasarım çözümlerimiz</span> ile 
            <span className="text-white font-bold"> profesyonel çözümler</span> sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0F172A] p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#334155]/50 hover:border-[#66B2FF]/50 shadow-2xl hover:shadow-[#66B2FF]/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/5 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#66B2FF]/20 to-[#FFD700]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-[#66B2FF]/30 group-hover:border-[#66B2FF]/60 shadow-lg group-hover:shadow-[#66B2FF]/30">
                  <div className="text-[#66B2FF] group-hover:text-[#FFD700] transition-colors duration-500">
                    {product.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 group-hover:text-[#66B2FF] transition-colors duration-500 leading-tight">
                {product.title}
              </h3>
                <p className="text-sm sm:text-base text-[#CBD5E1] mb-6 sm:mb-8 leading-relaxed group-hover:text-[#F1F5F9] transition-colors duration-500">
                {product.description}
              </p>
                
                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="text-sm sm:text-base text-[#66B2FF] font-bold hover:text-[#FFD700] transition-colors duration-500 inline-flex items-center gap-2 group-hover:gap-3">
                Detayları Gör 
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
                  
                  {/* Status Indicator */}
                  <div className="w-2 h-2 bg-[#66B2FF] rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-[#FFD700] transition-all duration-500"></div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 sm:mt-6 h-1 bg-[#334155] rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-[#66B2FF] to-[#FFD700] rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;