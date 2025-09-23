const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Misyonumuz & Vizyonumuz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Geleceği şekillendiren değerlerimiz ve hedeflerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misyonumuz</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Endüstriyel mutfak sektöründe <span className="font-semibold text-primary-600">yenilikçilik, dayanıklılık ve tasarım odaklı</span> üretim anlayışıyla fark yaratan projelere imza atmak.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Sürekli yenilik ve gelişim odaklı yaklaşım</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Müşteri memnuniyetini ön planda tutma</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Kaliteli ve dayanıklı ürün üretimi</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-50"></div>
            </div>
            
            {/* Vision */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Vizyonumuz</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sadece Türkiye&apos;de değil, <span className="font-semibold text-accent-600">uluslararası en çok tercih edilen</span> endüstriyel mutfak markası olmak.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Global pazarda lider konum</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Teknoloji ve inovasyonda öncülük</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Sürdürülebilir büyüme stratejisi</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-50"></div>
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-8 rounded-2xl text-white">
              <blockquote className="text-2xl md:text-3xl font-bold mb-4">
                &quot;Her detayda kalite, her projede tutku!&quot;
              </blockquote>
              <p className="text-xl text-primary-100">
                PARS – Mutfakta profesyonelliğin adı.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;