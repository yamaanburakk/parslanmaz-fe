const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🤝",
      title: "Güvenilir Partner",
      description: "Sadece bir üretici değil, aynı zamanda düşünen, yenilik üreten, markanızı anlayan bir partneriz."
    },
    {
      icon: "🔄",
      title: "Kapsamlı Hizmet",
      description: "Projelendirmeden üretime, kurulumdan satış sonrası desteğe kadar her aşamada yanınızdayız."
    },
    {
      icon: "💡",
      title: "İnovatif Çözümler",
      description: "Sektördeki yenilikleri takip ederek, en güncel teknolojilerle çözümler üretiyoruz."
    },
    {
      icon: "🎯",
      title: "Özel Tasarım",
      description: "Her projeye özel tasarım yaklaşımı ile ihtiyaçlarınıza en uygun çözümleri sunuyoruz."
    },
    {
      icon: "⚡",
      title: "Hızlı Üretim",
      description: "Modern üretim tesislerimizle kısa sürede, kaliteli ürünler üretiyoruz."
    },
    {
      icon: "🌍",
      title: "Global Hizmet",
      description: "Türkiye'nin dört bir yanında ve uluslararası projelerde hizmet veriyoruz."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Biz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Çünkü sadece bir üretici değil, aynı zamanda düşünen, yenilik üreten, 
              markanızı anlayan bir partneriz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
                
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Projenizi Birlikte Hayata Geçirelim
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/hemen-teklif-al" className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-block text-center">
                  Ücretsiz Teklif Al
                </a>
                <button className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors">
                  Projelerimizi İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;