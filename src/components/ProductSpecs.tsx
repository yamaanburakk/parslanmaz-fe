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