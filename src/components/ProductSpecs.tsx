interface Spec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  title: string;
  specs: Spec[];
}

const ProductSpecs = ({ title, specs }: ProductSpecsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ürünlerimizin detaylı teknik özellikleri ve spesifikasyonları
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-gray-700">
                    {spec.label}
                  </span>
                  <span className="text-lg font-bold text-primary-600">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kalite Garantisi
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">5 Yıl Garanti</h4>
                      <p className="text-gray-600 text-sm">Tüm ürünlerimizde kapsamlı garanti</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ISO 9001 Sertifikası</h4>
                      <p className="text-gray-600 text-sm">Uluslararası kalite standartları</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Yerli Üretim</h4>
                      <p className="text-gray-600 text-sm">%100 Türk malı üretim</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl border border-accent-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kullanım Alanları
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🍽️</div>
                    <p className="text-sm font-medium text-gray-700">Restoranlar</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🏨</div>
                    <p className="text-sm font-medium text-gray-700">Oteller</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">☕</div>
                    <p className="text-sm font-medium text-gray-700">Kafeler</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🏥</div>
                    <p className="text-sm font-medium text-gray-700">Hastaneler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;