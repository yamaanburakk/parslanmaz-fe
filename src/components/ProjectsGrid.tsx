import Image from "next/image";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Lüks Otel Mutfak Projesi",
      category: "Otel & Resort",
      location: "İstanbul, Türkiye",
      description: "5 yıldızlı otel için tam donanımlı endüstriyel mutfak tasarımı ve kurulumu.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Paslanmaz Çelik Tezgahlar", "Özel Dolap Sistemleri", "Hijyenik Yüzeyler"],
      year: "2024"
    },
    {
      id: 2,
      title: "Modern Restoran Zinciri",
      category: "Restoran",
      location: "Ankara, Türkiye",
      description: "15 şubeli restoran zinciri için standart mutfak ekipmanları ve özel tasarım çözümler.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Modüler Tasarım", "Hızlı Kurulum", "Bakım Kolaylığı"],
      year: "2024"
    },
    {
      id: 3,
      title: "Hastane Mutfak Sistemi",
      category: "Sağlık",
      location: "İzmir, Türkiye",
      description: "500 yataklı hastane için hijyen standartlarına uygun mutfak ekipmanları.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Hijyen Sertifikası", "Özel Temizlik", "Dayanıklı Yapı"],
      year: "2023"
    },
    {
      id: 4,
      title: "Kafe Zinciri Projesi",
      category: "Kafe & Bar",
      location: "Bursa, Türkiye",
      description: "8 şubeli kafe zinciri için modern ve estetik mutfak çözümleri.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Estetik Tasarım", "Fonksiyonellik", "Maliyet Etkinliği"],
      year: "2023"
    },
    {
      id: 5,
      title: "Uluslararası Catering",
      category: "Catering",
      location: "Dubai, UAE",
      description: "Uluslararası catering firması için büyük kapasiteli mutfak ekipmanları.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Büyük Kapasite", "Uluslararası Standart", "Hızlı Teslimat"],
      year: "2023"
    },
    {
      id: 6,
      title: "Fırın Zinciri Projesi",
      category: "Fırın & Pastane",
      location: "Antalya, Türkiye",
      description: "12 şubeli fırın zinciri için özel ekmek ve pasta dolapları.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Özel Tasarım", "Tazelik Koruma", "Görsel Sunum"],
      year: "2022"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarılı Projelerimiz
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı sektörlerde gerçekleştirdiğimiz projeler ve müşteri memnuniyeti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-colors">
                    Detayları Gör
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors">
              Daha Fazla Proje Yükle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;