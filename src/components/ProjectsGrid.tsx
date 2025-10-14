import Image from "next/image";
import { memo, useMemo } from "react";

const ProjectsGrid = memo(() => {
  const projects = useMemo(() => [
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
    },
    {
      id: 7,
      title: "Havalimanı Lounge Mutfağı",
      category: "Havacılık",
      location: "İstanbul, Türkiye",
      description: "Uluslararası havalimanı VIP lounge için premium mutfak ekipmanları ve servis sistemleri.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Premium Kalite", "Sessiz Çalışma", "Hızlı Servis"],
      year: "2024"
    },
    {
      id: 8,
      title: "AVM Food Court Projesi",
      category: "AVM & Food Court",
      location: "İzmir, Türkiye",
      description: "Büyük AVM food court için 25+ restoran mutfağı tasarımı ve kurulumu.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Merkezi Sistem", "Yüksek Kapasite", "Standart Kalite"],
      year: "2024"
    },
    {
      id: 9,
      title: "Otel Zinciri Standartlaşma",
      category: "Otel & Resort",
      location: "Türkiye Geneli",
      description: "35 otelli zincir için standart mutfak ekipmanları tedariki ve kurulumu.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Standart Tasarım", "Toplu Üretim", "Kalite Garantisi"],
      year: "2023"
    },
    {
      id: 10,
      title: "Michelin Yıldızlı Restoran",
      category: "Fine Dining",
      location: "İstanbul, Türkiye",
      description: "Michelin yıldızlı restoran için özel tasarım mutfak ekipmanları ve aksesuarlar.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Özel Tasarım", "Premium Malzeme", "Mükemmellik"],
      year: "2023"
    },
    {
      id: 11,
      title: "Üniversite Yemekhane Sistemi",
      category: "Eğitim",
      location: "Ankara, Türkiye",
      description: "15,000 öğrenci kapasiteli üniversite yemekhanesi için tam donanımlı mutfak.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Yüksek Kapasite", "Dayanıklılık", "Hijyen Standartları"],
      year: "2023"
    },
    {
      id: 12,
      title: "Endüstriyel Catering Merkezi",
      category: "Catering",
      location: "Kocaeli, Türkiye",
      description: "Günlük 50,000 porsiyon kapasiteli endüstriyel catering mutfağı kurulumu.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Endüstriyel Kapasite", "Otomasyon", "Verimlilik"],
      year: "2023"
    },
    {
      id: 13,
      title: "Boutique Otel Konsept Mutfak",
      category: "Otel & Resort",
      location: "Bodrum, Türkiye",
      description: "Lüks boutique otel için açık mutfak konsepti ve özel tasarım ekipmanlar.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Açık Mutfak", "Estetik Tasarım", "Show Cooking"],
      year: "2022"
    },
    {
      id: 14,
      title: "Fast Food Zinciri Franchise",
      category: "Fast Food",
      location: "Türkiye & Yurt Dışı",
      description: "120+ şubeli fast food zinciri için standart mutfak ekipmanları tedariki.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Hızlı Kurulum", "Standart Sistem", "Global Kalite"],
      year: "2022"
    },
    {
      id: 15,
      title: "Pastane & Kafe Zinciri",
      category: "Fırın & Pastane",
      location: "İstanbul, Türkiye",
      description: "45 şubeli pastane ve kafe zinciri için özel vitrin ve teşhir dolapları.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Özel Vitrinler", "Soğutma Sistemleri", "LED Aydınlatma"],
      year: "2022"
    }
  ], []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/5 via-transparent to-[#374151]/5"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-[#60A5FA]/30 mb-6 md:mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase">Projelerimiz</span>
              <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                Başarılı
              </span>
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                Projelerimiz
              </span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
              Farklı sektörlerde gerçekleştirdiğimiz projeler ve 
              <span className="font-bold text-[#60A5FA]"> müşteri memnuniyeti</span>
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#475569] rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#1E3A8A]/30 transition-all duration-700 hover:scale-105 border border-[#334155]/30"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>

                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <span className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-white/30">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 relative z-10">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-3 md:mb-4 group-hover:text-[#60A5FA] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center text-white/80 mb-4 md:mb-5">
                    <svg className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm md:text-base font-medium">{project.location}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 md:space-y-3 mb-8 md:mb-10">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                        <span className="text-xs md:text-sm lg:text-base text-white/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base lg:text-lg hover:from-[#9CA3AF] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#60A5FA]/25">
                    Detayları Gör
                  </button>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <button className="bg-gradient-to-r from-[#1E293B] to-[#334155] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-semibold text-base md:text-lg lg:text-xl hover:from-[#334155] hover:to-[#1E293B] transition-all duration-300 transform hover:scale-105 shadow-2xl border border-[#334155]/50">
              Daha Fazla Proje Yükle
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 md:top-40 right-16 md:right-32 w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-[#9CA3AF]/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 md:bottom-32 left-20 md:left-40 w-2.5 md:w-3 lg:w-5 h-2.5 md:h-3 lg:h-5 bg-[#64748B]/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
});

ProjectsGrid.displayName = 'ProjectsGrid';

export default ProjectsGrid;