interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ürün Özellikleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yüksek kalite standartlarında üretilen ekipmanlarımızın öne çıkan özellikleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-200"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-700">Paslanmaz Çelik</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">ISO</div>
                <div className="text-gray-700">Kalite Sertifikası</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700">Teknik Destek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;