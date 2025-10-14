'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

const BlogGrid = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Sample blog posts data
  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: 1,
      slug: "paslanmaz-celik-mutfak-ekipmanlarinda-bakim-ve-temizlik-rehberi",
      title: "Paslanmaz Çelik Mutfak Ekipmanlarında Bakım ve Temizlik Rehberi",
      excerpt: "Paslanmaz çelik ekipmanlarınızın ömrünü uzatmak ve hijyen standartlarını korumak için detaylı bakım ipuçları.",
      content: "Detaylı içerik...",
      author: "Ahmet Yılmaz",
      date: "2024-01-15",
      category: "Bakım & Temizlik",
      readTime: "8 dk",
      image: "/api/placeholder/400/250",
      tags: ["bakım", "temizlik", "paslanmaz çelik"],
      featured: true
    },
    {
      id: 2,
      slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
      title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
      excerpt: "Mutfak işletmenizde enerji maliyetlerini düşürmek için uygulayabileceğiniz pratik çözümler.",
      content: "Detaylı içerik...",
      author: "Mehmet Kaya",
      date: "2024-01-12",
      category: "Enerji Tasarrufu",
      readTime: "6 dk",
      image: "/api/placeholder/400/250",
      tags: ["enerji", "tasarruf", "maliyet"],
      featured: false
    },
    {
      id: 3,
      slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
      title: "Restoran Mutfağında Hijyen Standartları ve Kontrol Listesi",
      excerpt: "HACCP standartlarına uygun mutfak hijyeni için günlük, haftalık ve aylık kontrol listeleri.",
      content: "Detaylı içerik...",
      author: "Fatma Demir",
      date: "2024-01-10",
      category: "Hijyen",
      readTime: "10 dk",
      image: "/api/placeholder/400/250",
      tags: ["hijyen", "HACCP", "kontrol"],
      featured: true
    },
    {
      id: 4,
      slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
      title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
      excerpt: "İşletmeniz için doğru mutfak ekipmanını seçerken göz önünde bulundurmanız gereken faktörler.",
      content: "Detaylı içerik...",
      author: "Ali Özkan",
      date: "2024-01-08",
      category: "Ekipman Seçimi",
      readTime: "7 dk",
      image: "/api/placeholder/400/250",
      tags: ["ekipman", "seçim", "rehber"],
      featured: false
    },
    {
      id: 5,
      slug: "catering-isletmelerinde-menu-planlama-stratejileri",
      title: "Catering İşletmelerinde Menü Planlama Stratejileri",
      excerpt: "Başarılı catering hizmeti için menü planlama, maliyet hesaplama ve müşteri memnuniyeti ipuçları.",
      content: "Detaylı içerik...",
      author: "Zeynep Aydın",
      date: "2024-01-05",
      category: "Catering",
      readTime: "9 dk",
      image: "/api/placeholder/400/250",
      tags: ["catering", "menü", "planlama"],
      featured: false
    },
    {
      id: 6,
      slug: "mutfak-atik-yonetimi-ve-surdurulebilirlik",
      title: "Mutfak Atık Yönetimi ve Sürdürülebilirlik",
      excerpt: "Çevre dostu mutfak işletmeciliği için atık azaltma ve geri dönüşüm stratejileri.",
      content: "Detaylı içerik...",
      author: "Can Yıldız",
      date: "2024-01-03",
      category: "Sürdürülebilirlik",
      readTime: "8 dk",
      image: "/api/placeholder/400/250",
      tags: ["atık yönetimi", "sürdürülebilirlik", "çevre"],
      featured: false
    },
    {
      id: 7,
      slug: "endustriyel-mutfak-ekipman-secimi-2024-rehberi",
      title: "2024 Endüstriyel Mutfak Ekipman Seçimi Rehberi",
      excerpt: "Profesyonel mutfaklar için en uygun ekipmanları seçmenize yardımcı olacak kapsamlı rehber.",
      content: "Detaylı içerik...",
      author: "Elif Yıldırım",
      date: "2024-01-20",
      category: "Ekipman",
      readTime: "12 dk",
      image: "/api/placeholder/400/250",
      tags: ["ekipman", "rehber", "2024"],
      featured: false
    },
    {
      id: 8,
      slug: "paslanmaz-celik-kalite-standartlari",
      title: "Paslanmaz Çelik Kalite Standartları ve Sertifikasyon",
      excerpt: "304 ve 316 kalite paslanmaz çelik arasındaki farklar ve kullanım alanları.",
      content: "Detaylı içerik...",
      author: "Murat Acar",
      date: "2024-01-18",
      category: "Malzeme Bilgisi",
      readTime: "9 dk",
      image: "/api/placeholder/400/250",
      tags: ["paslanmaz çelik", "kalite", "standart"],
      featured: false
    },
    {
      id: 9,
      slug: "otel-mutfagi-tasarim-ipuclari",
      title: "Otel Mutfağı Tasarım İpuçları ve Öneriler",
      excerpt: "Otel mutfaklarında ergonomi, verimlilik ve hijyen için tasarım önerileri.",
      content: "Detaylı içerik...",
      author: "Selin Koç",
      date: "2024-01-16",
      category: "Tasarım",
      readTime: "11 dk",
      image: "/api/placeholder/400/250",
      tags: ["otel", "tasarım", "mutfak"],
      featured: true
    },
    {
      id: 10,
      slug: "haccp-sistemleri-ve-uygulamasi",
      title: "HACCP Sistemleri ve Mutfaklarda Uygulanması",
      excerpt: "Gıda güvenliği için HACCP sistemlerinin mutfaklarda nasıl uygulanacağı.",
      content: "Detaylı içerik...",
      author: "Dr. Ayşe Demir",
      date: "2024-01-14",
      category: "Gıda Güvenliği",
      readTime: "15 dk",
      image: "/api/placeholder/400/250",
      tags: ["HACCP", "gıda güvenliği", "hijyen"],
      featured: false
    },
    {
      id: 11,
      slug: "endustriyel-sogutma-sistemleri",
      title: "Endüstriyel Soğutma Sistemleri ve Enerji Verimliliği",
      excerpt: "Mutfaklarda kullanılan soğutma sistemlerinin enerji verimliliği ve bakımı.",
      content: "Detaylı içerik...",
      author: "Ahmet Yılmaz",
      date: "2024-01-11",
      category: "Soğutma",
      readTime: "10 dk",
      image: "/api/placeholder/400/250",
      tags: ["soğutma", "enerji", "verimlilik"],
      featured: false
    },
    {
      id: 12,
      slug: "restoran-acilis-kontrol-listesi",
      title: "Restoran Açılış Kontrol Listesi: Mutfak Ekipmanları",
      excerpt: "Yeni restoran açarken mutfak ekipmanları için gerekli kontrol listesi.",
      content: "Detaylı içerik...",
      author: "Can Özkan",
      date: "2024-01-09",
      category: "İşletme",
      readTime: "13 dk",
      image: "/api/placeholder/400/250",
      tags: ["restoran", "açılış", "checklist"],
      featured: false
    },
    {
      id: 13,
      slug: "endustriyel-firinlar-ve-pisirme-teknikleri",
      title: "Endüstriyel Fırınlar ve Modern Pişirme Teknikleri",
      excerpt: "Konveksiyonel, kombi ve deck fırınların karşılaştırması ve kullanım alanları.",
      content: "Detaylı içerik...",
      author: "Mehmet Kaya",
      date: "2024-01-07",
      category: "Pişirme Ekipmanları",
      readTime: "14 dk",
      image: "/api/placeholder/400/250",
      tags: ["fırın", "pişirme", "ekipman"],
      featured: false
    },
    {
      id: 14,
      slug: "mutfak-havalandirma-sistemleri",
      title: "Mutfak Havalandırma Sistemleri ve Davlumbaz Seçimi",
      excerpt: "Profesyonel mutfaklarda doğru havalandırma sistemi ve davlumbaz seçimi.",
      content: "Detaylı içerik...",
      author: "Fatma Demir",
      date: "2024-01-04",
      category: "Havalandırma",
      readTime: "11 dk",
      image: "/api/placeholder/400/250",
      tags: ["havalandırma", "davlumbaz", "sistem"],
      featured: false
    },
    {
      id: 15,
      slug: "kurumsal-catering-mutfak-planlamasi",
      title: "Kurumsal Catering Mutfak Planlaması",
      excerpt: "Büyük ölçekli catering işletmeleri için mutfak planlaması ve ekipman seçimi.",
      content: "Detaylı içerik...",
      author: "Zeynep Aydın",
      date: "2024-01-02",
      category: "Catering",
      readTime: "16 dk",
      image: "/api/placeholder/400/250",
      tags: ["catering", "planlama", "büyük ölçek"],
      featured: false
    }
  ], []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] text-[#0F172A] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/5 via-transparent to-[#9CA3AF]/5"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#60A5FA]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#9CA3AF]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Featured Posts */}
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-[#60A5FA]/30 mb-6 md:mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-3 animate-pulse"></div>
                <span className="text-[#0F172A] font-semibold text-sm md:text-base tracking-wider uppercase">Öne Çıkan</span>
                <div className="w-2 h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] bg-clip-text text-transparent">
                  Öne Çıkan
                </span>
                <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                  Yazılar
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#60A5FA]/20 transition-all duration-700 hover:scale-105 border border-[#E2E8F0]">
                  {/* Background Effects */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="relative h-64 md:h-72 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 via-[#9CA3AF]/10 to-[#64748B]/10 flex items-center justify-center">
                      <svg className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 md:top-6 left-4 md:left-6">
                      <span className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 relative z-10">
                    <div className="flex items-center text-sm md:text-base text-[#0F172A]/80 mb-4 md:mb-5">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2 md:mx-3">•</span>
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2 md:mx-3">•</span>
                      <span className="font-medium">{post.readTime} okuma</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-4 md:mb-5 group-hover:text-[#60A5FA] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm md:text-base lg:text-lg text-[#0F172A]/90 mb-6 md:mb-8 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-gradient-to-r from-[#60A5FA]/10 to-[#9CA3AF]/10 text-[#0F172A]/80 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border border-[#60A5FA]/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="group/link inline-flex items-center bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base lg:text-lg hover:from-[#9CA3AF] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#60A5FA]/25"
                    >
                      <span>Devamını Oku</span>
                      <svg className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] bg-clip-text text-transparent">
                  Tüm
                </span>
                <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                  Yazılar
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {currentPosts.map((post) => (
                <article key={post.id} className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#60A5FA]/20 transition-all duration-700 hover:scale-105 border border-[#E2E8F0]">
                  {/* Background Effects */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="relative h-48 md:h-56 lg:h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 via-[#9CA3AF]/10 to-[#64748B]/10 flex items-center justify-center">
                      <svg className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 relative z-10">
                    <div className="flex items-center text-xs md:text-sm text-[#0F172A]/80 mb-3 md:mb-4">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-1 md:mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-1 md:mx-2">•</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-base md:text-lg lg:text-xl font-black text-[#0F172A] mb-3 md:mb-4 group-hover:text-[#60A5FA] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm lg:text-base text-[#0F172A]/90 mb-4 md:mb-6 leading-relaxed font-medium line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="group/link inline-flex items-center bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm lg:text-base hover:from-[#9CA3AF] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#60A5FA]/25"
                    >
                      <span>Devamını Oku</span>
                      <svg className="w-3 md:w-4 h-3 md:h-4 ml-1 md:ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-16 md:mt-20 lg:mt-24">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="group px-4 md:px-6 py-2 md:py-3 text-[#0F172A]/60 hover:text-[#60A5FA] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-gradient-to-r from-white to-[#F8FAFC] rounded-xl md:rounded-2xl border border-[#E2E8F0] hover:border-[#60A5FA]/30 hover:shadow-lg"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white shadow-lg'
                      : 'text-[#0F172A]/80 hover:text-[#60A5FA] bg-gradient-to-r from-white to-[#F8FAFC] border border-[#E2E8F0] hover:border-[#60A5FA]/30 hover:shadow-lg'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="group px-4 md:px-6 py-2 md:py-3 text-[#0F172A]/60 hover:text-[#60A5FA] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-gradient-to-r from-white to-[#F8FAFC] rounded-xl md:rounded-2xl border border-[#E2E8F0] hover:border-[#60A5FA]/30 hover:shadow-lg"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 md:top-40 right-16 md:right-32 w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-[#9CA3AF]/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 md:bottom-32 left-20 md:left-40 w-2.5 md:w-3 lg:w-5 h-2.5 md:h-3 lg:h-5 bg-[#64748B]/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 bg-[#60A5FA]/30 rounded-full animate-pulse delay-500"></div>
    </div>
  );
});

BlogGrid.displayName = 'BlogGrid';

export default BlogGrid;