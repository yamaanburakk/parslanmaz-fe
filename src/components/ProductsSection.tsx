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
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-6 py-3 mb-8 border border-primary-200">
            <span className="text-primary-600 text-sm font-medium">Ürün Kategorilerimiz</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Endüstriyel Mutfak
            <span className="block text-accent-600">Çözümlerimiz</span>
          </h2>
          
          <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
            Endüstriyel mutfak ihtiyaçlarınız için 
            <span className="text-accent-600 font-semibold"> geniş ürün yelpazemiz</span> ve 
            <span className="text-accent-600 font-semibold"> özel tasarım çözümlerimiz</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-50/50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer group border border-primary-100 hover:border-accent-200"
            >
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4 group-hover:text-accent-700 transition-colors">
                {product.title}
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <button className="text-accent-600 font-semibold hover:text-accent-700 transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Detayları Gör 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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